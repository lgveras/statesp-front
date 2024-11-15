<template>
  <v-row align="center" justify="center" class="d-flex flex-column">
    <v-col cols="12" md="8">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4" height="auto"
        max-width="800" width="100%" rounded>
        <div>
          <h2 class="text-h4 font-weight-black text-purple mt-2 mb-2">Selecione o período desejável de histórico de
            preço
          </h2>

          <p class="text-body-0 mb-4">
            Selecione os parâmetros de busca para obter o histórico de preços do FipeZAP.
          </p>

          <v-form>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-text-field v-model="searchParams.name" label="Nome"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="searchParams.email" label="E-mail"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-combobox v-model="searchParams.propertyType" label="Tipo" :value="tiposImovel[0]"
                    :items="tiposImovel"></v-combobox>
                </v-col>
                <v-col cols="3">
                  <v-select v-model="searchParams.roomsCount" label="Quartos" :items="[1, 2, 3, 4]"></v-select>
                </v-col>
                <v-col cols="3">
                  <v-select v-model="searchParams.startYear"
                    :items="Array.from({ length: (2025 - 1998) }, (_, index) => 1998 + (index))"
                    label="Ano de início (>=1998)"></v-select>
                  <!-- <v-date-input v-model="searchParams.startYear" prepend-icon=""
                    label="Ano de início (>=2025)"></v-date-input> -->
                </v-col>
                <v-col cols="3">
                  <v-select v-model="searchParams.endYear"
                    :items="Array.from({ length: (2025 - 1998) }, (el, index) => 1998 + (index))"
                    label="Ano de final (<= 2024)"></v-select>
                  <!-- <v-date-input v-model="searchParams.endYear" prepend-icon=""
                    label="Ano de final (<= 2050)"></v-date-input> -->
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-btn @click="loadResultPage" rounded="lg" size="x-large" color="purple" text="Pesquisar Histórico"
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
  startYear: 1998,
  endYear: 1999
});

async function loadResultPage() {
  await navigateTo({
    path: "/resultadoHistorico",
    query: searchParams.value
  })
  // router.push({
  //   path: "/resultadoHistorico",
  //   params: { searchParams }
  // });
}

</script>

<style></style>