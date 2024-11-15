<template>
  <v-row align="center" justify="center" class="d-flex flex-column">
    <v-col cols="12" md="8">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4" height="auto"
        max-width="800" width="100%" rounded>
        <div>
          <h2 class="text-h7 font-weight-black text-purple mt-4">
            RESULTADO ESTIMATIVA
          </h2>
          <h2 class="text-h7 font-weight-black text-purple mb-2">
            {{ estimatedPrices.propertyType }} - {{ estimatedPrices.startYear }} - {{ estimatedPrices.endYear }}
          </h2>
          

          <v-table class="mb-12">
            <thead class="bg-grey-lighten-1 font-weight-black">
              <tr>
                <th class="text-left">
                  Ano
                </th>
                <th class="text-left">
                  Preço (R$)
                </th>
                <th class="text-left">
                  Valorização Anual (%)
                </th>
                <th class="text-left">
                  Valorização Acumulada (%)
                </th>
              </tr>
            </thead>
            <tbody class="bg-pink-lighten-5 text-purple">
              <tr v-for=" item in estimatedPrices.data" :key="item.year">
                <td>{{ item.year }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.apreciationPerc }}</td>
                <td>{{ item.apreciationAcc }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>

const route = useRoute()
const queryObj = route.query;
const pathApi = `/api/estimativa?propertyType=${queryObj.propertyType}&roomsCount=${queryObj.roomsCount}&startYear=${queryObj.startYear}&endYear=${queryObj.endYear}`
// console.log(pathApi);
const { data } = await useFetch(pathApi)

const estimatedPrices = ref({
  propertyType: "Apartamento",
  startYear: queryObj.startYear,
  endYear: queryObj.endYear,
  data: data.value.estimated
})

</script>

<style scoped>
.box-center {
  margin: 0 auto;
}
</style>
