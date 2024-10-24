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
const estimatedPrices = ref({
  propertyType: "Apartamento",
  startYear: 2030,
  endYear: 2043,
  data: [
    { year: 2030, price: 99999.99, apreciationPerc: 0.1, apreciationAcc: 0.1 },
    { year: 2031, price: 109999.99, apreciationPerc: 0.1, apreciationAcc: 0.2 },
    { year: 2032, price: 120999.99, apreciationPerc: 0.1, apreciationAcc: 0.3 },
    { year: 2033, price: 133099.99, apreciationPerc: 0.1, apreciationAcc: 0.4 },
    { year: 2034, price: 146409.99, apreciationPerc: 0.1, apreciationAcc: 0.5 },
    { year: 2035, price: 161050.99, apreciationPerc: 0.1, apreciationAcc: 0.6 },
    { year: 2036, price: 177156.09, apreciationPerc: 0.1, apreciationAcc: 0.7 },
    { year: 2037, price: 194871.70, apreciationPerc: 0.1, apreciationAcc: 0.8 },
    { year: 2038, price: 214358.87, apreciationPerc: 0.1, apreciationAcc: 0.9 },
    { year: 2039, price: 235794.76, apreciationPerc: 0.1, apreciationAcc: 1.0 },
    { year: 2040, price: 259374.23, apreciationPerc: 0.1, apreciationAcc: 1.1 },
    { year: 2041, price: 285311.65, apreciationPerc: 0.1, apreciationAcc: 1.2 },
    { year: 2042, price: 313842.82, apreciationPerc: 0.1, apreciationAcc: 1.3 },
    { year: 2043, price: 345227.10, apreciationPerc: 0.1, apreciationAcc: 1.4 }
  ]
})
</script>

<style scoped>
.box-center {
  margin: 0 auto;
}
</style>
