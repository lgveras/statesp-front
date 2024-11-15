import { defineEventHandler } from "h3";

interface QueryParams {
  propertyType: string;
  roomsCount: string;
  startYear: string;
  endYear: string;
}

interface Resultado {
  year: number;
  price: number;
  apreciationPerc: number;
  apreciationAcc: number;
}

// Função para realizar uma estimativa de preço baseado em uma regressão linear
function estimarPrecoPorRegressaoLinear(
  dadosImoveis: { year: number; price: number }[],
  startYear: number,
  endYear: number
): Resultado[] {
  const resultado: Resultado[] = [];

  // Calcula média de ano e média de preço
  const n = dadosImoveis.length;
  const somaX = dadosImoveis.reduce((acc, item) => acc + item.year, 0);
  const somaY = dadosImoveis.reduce((acc, item) => acc + item.price, 0);
  const mediaX = somaX / n;
  const mediaY = somaY / n;

  // Calcula os coeficientes da regressão linear
  let numerador = 0;
  let denominador = 0;

  for (const item of dadosImoveis) {
    numerador += (item.year - mediaX) * (item.price - mediaY);
    denominador += Math.pow(item.year - mediaX, 2);
  }

  const b1 = numerador / denominador;
  const b0 = mediaY - b1 * mediaX;

  // Gera estimativas de preços para os anos no intervalo fornecido
  let previousPrice = 0;
  let acumulado = 1;

  for (let year = startYear; year <= endYear; year++) {
    const estimatedPrice = b0 + b1 * year;
    const apreciationPerc = previousPrice
      ? (estimatedPrice - previousPrice) / previousPrice
      : 0;
    acumulado *= 1 + apreciationPerc;

    resultado.push({
      year,
      price: parseFloat(estimatedPrice.toFixed(2)),
      apreciationPerc: parseFloat(apreciationPerc.toFixed(2)),
      apreciationAcc: parseFloat(acumulado.toFixed(2)),
    });

    previousPrice = estimatedPrice;
  }

  return resultado;
}

export default defineEventHandler((event) => {
  const query = getQuery(event) as QueryParams;
  const parametros = {
    propertyType: query.propertyType,
    roomsCount: parseInt(query.roomsCount),
    startYear: parseInt(query.startYear),
    endYear: parseInt(query.endYear),
  };

  // Dados históricos iniciais para os tipos de imóveis e quantidades de quartos
  const precosHistoricos = {
    Casa: [60000, 75000, 90000, 110000],
    Apartamento: [55000, 70000, 85000, 100000],
    Condomínio: [80000, 100000, 120000, 140000],
    Rural: [50000, 60000, 70000, 85000],
  };

  const dadosImoveis = [];

  for (let ano = 1998; ano <= 2024; ano++) {
    // Extrai o preço inicial para o tipo de imóvel e quantidade de quartos especificados
    const precoInicial =
      precosHistoricos[
        parametros.propertyType as keyof typeof precosHistoricos
      ];
    if (precoInicial) {
      const preco =
        precoInicial[parametros.roomsCount - 1] * Math.pow(1.05, ano - 1998);
      dadosImoveis.push({ year: ano, price: preco });
    }
  }

  // Chama a função de regressão linear para estimar os preços
  const estimated = estimarPrecoPorRegressaoLinear(
    dadosImoveis,
    parametros.startYear,
    parametros.endYear
  );

  return { estimated };
});
