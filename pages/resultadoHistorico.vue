<template>
  <v-row align="center" justify="center" class="d-flex flex-column">
    <v-col cols="12" md="8">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4" height="auto"
        max-width="800" width="100%" rounded>
        <div>
          <h2 class="text-h7 font-weight-black text-purple mt-4">
            PREÇOS HISTÓRICOS
          </h2>
          <h2 class="text-h7 font-weight-black text-purple mb-2">
            {{ historyPrices.dataSourceName }} - {{ historyPrices.startYear }} - {{ historyPrices.endYear }}
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
              <tr v-for=" item in historyPrices.data" :key="item.year">
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
const historyPrices = ref({
  dataSourceName: "FIPEZAP",
  startYear: 2010,
  endYear: 2023,
  data: [
    { year: 2010, price: 99999.99, apreciationPerc: 0.1, apreciationAcc: 0.1 },
    { year: 2011, price: 109999.99, apreciationPerc: 0.1, apreciationAcc: 0.2 },
    { year: 2012, price: 120999.99, apreciationPerc: 0.1, apreciationAcc: 0.3 },
    { year: 2013, price: 133099.99, apreciationPerc: 0.1, apreciationAcc: 0.4 },
    { year: 2014, price: 146409.99, apreciationPerc: 0.1, apreciationAcc: 0.5 },
    { year: 2015, price: 161050.99, apreciationPerc: 0.1, apreciationAcc: 0.6 },
    { year: 2016, price: 177156.09, apreciationPerc: 0.1, apreciationAcc: 0.7 },
    { year: 2017, price: 194871.70, apreciationPerc: 0.1, apreciationAcc: 0.8 },
    { year: 2018, price: 214358.87, apreciationPerc: 0.1, apreciationAcc: 0.9 },
    { year: 2019, price: 235794.76, apreciationPerc: 0.1, apreciationAcc: 1.0 },
    { year: 2020, price: 259374.23, apreciationPerc: 0.1, apreciationAcc: 1.1 },
    { year: 2021, price: 285311.65, apreciationPerc: 0.1, apreciationAcc: 1.2 },
    { year: 2022, price: 313842.82, apreciationPerc: 0.1, apreciationAcc: 1.3 },
    { year: 2023, price: 345227.10, apreciationPerc: 0.1, apreciationAcc: 1.4 }
  ]
})
</script>

<style scoped>
.box-center {
  margin: 0 auto;
}
</style>
