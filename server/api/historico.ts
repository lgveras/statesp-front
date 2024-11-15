import { defineEventHandler } from "h3";

interface QueryParams {
  propertyType: string;
  roomsCount: string;
  startYear: string;
  endYear: string;
}

interface PrecoPorQuarto {
  quartos: number;
  preco: number;
}

interface Categoria {
  tipo: string;
  precos: PrecoPorQuarto[];
}

interface AnoDados {
  ano: number;
  categorias: Categoria[];
}

interface Resultado {
  year: number;
  price: number;
  apreciationPerc: number;
  apreciationAcc: number;
}

// Definindo os tipos válidos para precosIniciais
interface TiposDeImoveis {
  Casa: number[];
  Apartamento: number[];
  Condomínio: number[];
  Rural: number[];
}

function buscarDadosImoveis(
  dadosImoveis: AnoDados[],
  parametros: {
    propertyType: string;
    roomsCount: string;
    startYear: number;
    endYear: number;
  }
): Resultado[] {
  const { propertyType, roomsCount, startYear, endYear } = parametros;
  const resultado: Resultado[] = [];

  for (const anoDados of dadosImoveis) {
    if (anoDados.ano >= startYear && anoDados.ano <= endYear) {
      const categoria = anoDados.categorias.find(
        (c) => c.tipo === propertyType
      );

      if (categoria) {
        const precoPorQuartos = categoria.precos.find(
          (p) => p.quartos === parseInt(roomsCount)
        );

        if (precoPorQuartos) {
          const previousPrice =
            resultado.length > 0
              ? resultado[resultado.length - 1].price
              : precoPorQuartos.preco;
          const apreciationPerc = previousPrice
            ? parseFloat(
                (
                  (precoPorQuartos.preco - previousPrice) /
                  previousPrice
                ).toFixed(2)
              )
            : 0;
          const apreciationAcc =
            resultado.length > 0
              ? parseFloat(
                  (
                    resultado[resultado.length - 1].apreciationAcc *
                    (1 + apreciationPerc)
                  ).toFixed(2)
                )
              : 1;

          resultado.push({
            year: anoDados.ano,
            price: parseFloat(precoPorQuartos.preco.toFixed(2)),
            apreciationPerc,
            apreciationAcc,
          });
        }
      }
    }
  }

  return resultado;
}

export default defineEventHandler((event) => {
  const query = getQuery(event) as QueryParams;
  const parametros = {
    propertyType: query.propertyType,
    roomsCount: query.roomsCount,
    startYear: parseInt(query.startYear),
    endYear: parseInt(query.endYear),
  };
  console.log(parametros.startYear);
  console.log(parametros.endYear);

  // Define o conjunto de dados para preços de imóveis de 1998 até 2024
  const dadosImoveis: AnoDados[] = [];
  const precosIniciais: TiposDeImoveis = {
    Casa: [60000, 75000, 90000, 110000],
    Apartamento: [55000, 70000, 85000, 100000],
    Condomínio: [80000, 100000, 120000, 140000],
    Rural: [50000, 60000, 70000, 85000],
  };

  for (let ano = 1998; ano <= 2024; ano++) {
    const anoDados: AnoDados = {
      ano,
      categorias: [],
    };

    for (const tipo in precosIniciais) {
      const precosAtualizados = precosIniciais[
        tipo as keyof TiposDeImoveis
      ].map((preco) => parseFloat(preco.toFixed(2)));
      anoDados.categorias.push({
        tipo,
        precos: [
          { quartos: 1, preco: precosAtualizados[0] },
          { quartos: 2, preco: precosAtualizados[1] },
          { quartos: 3, preco: precosAtualizados[2] },
          { quartos: 4, preco: precosAtualizados[3] },
        ],
      });

      // Atualiza os preços para o próximo ano com uma valorização de 5%
      precosIniciais[tipo as keyof TiposDeImoveis] = precosIniciais[
        tipo as keyof TiposDeImoveis
      ].map((preco) => preco * 1.05);
    }

    dadosImoveis.push(anoDados);
  }

  // Realiza a busca e retorna no formato solicitado
  const history = buscarDadosImoveis(dadosImoveis, parametros);

  // console.log(history);

  return { history };
});
