<!-- Arquivo estimativaPrecos.vue -->

<template>
  <v-row align="center" justify="center" class="d-flex flex-column">
    <v-col cols="12" md="8">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4" height="auto"
        max-width="800" width="100%" rounded>
        <div>
          <h2 class="text-h4 font-weight-black text-purple mt-2 mb-2">Selecione o período desejável de estimativa de
            preço
          </h2>

          <p class="text-body-0 mb-4">
            O sistema de estimativa de preços de imóveis utiliza dados provenientes das plataformas FipeZAP e EMPRAESP
            para realizar suas projeções. Esses dados servem como base para o treinamento de algoritmos de aprendizado
            de máquina, que analisam tendências históricas, padrões de comportamento do mercado imobiliário e outros
            fatores relevantes.
          </p>
          <p class="text-body-0 mb-4">
            É importante destacar que as estimativas geradas seguem rigorosamente o padrão dos dados utilizados no
            treinamento do algoritmo. Assim, o sistema proporciona projeções baseadas no comportamento passado e nas
            características presentes nos dados fornecidos, não oferecendo garantias absolutas sobre o valor futuro
            dos imóveis, mas sim uma previsão confiável baseada em análises estatísticas.
          </p>

          <v-form>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-text-field label="Nome"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="E-mail"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-combobox v-model="searchParams.propertyType" label="Tipo" :items="tiposImovel"></v-combobox>
                </v-col>
                <v-col cols="3">
                  <v-select v-model="searchParams.roomsCount" :value="tiposImovel[0]" label="Quartos"
                    :items="[1, 2, 3, 4]"></v-select>
                </v-col>
                <v-col cols="3">
                  <v-text-field type="number" value="2025" v-model="searchParams.startYear"
                    label="Ano de início (>=2025)"></v-text-field>
                  <!-- <v-date-input prepend-icon="" label="Ano de início (>=2025)"></v-date-input> -->
                </v-col>
                <v-col cols="3">
                  <v-text-field type="number" value="2030" v-model="searchParams.endYear"
                    label="Ano de final (<= 2050)"></v-text-field>
                  <!-- <v-date-input prepend-icon="" label="Ano de final (<= 2050)"></v-date-input> -->
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-btn @click="loadResultPage" rounded="lg" size="x-large" color="purple" text="Gerar Estimativa"
            class="mb-4">
          </v-btn>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>

const router = useRouter();

const tiposImovel = ref(['Casa', 'Apartamento', 'Condomínio', 'Rural'])
const searchParams = ref({
  name: "",
  email: "",
  propertyType: "Casa",
  roomsCount: 1,
  startYear: 2025,
  endYear: 2030,
});

async function loadResultPage() {
  await navigateTo({
    path: "/resultadoEstimativa",
    query: searchParams.value
  })
  // router.push({
  //   path: "/resultadoEstimativa",
  //   query: searchParams.value
  // });
}

</script>

<style></style>