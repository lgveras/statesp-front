<template>
  <v-row align="center" justify="center" class="d-flex flex-column">
    <v-col cols="12" md="8">
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4" height="auto"
        max-width="800" width="100%" rounded>
        <div>
          <h2 class="text-h7 font-weight-black text-purple mt-4 mb-2">
            O QUE GOSTARIA DE CONSULTAR?
          </h2>
          <v-container class="mt-12">
            <v-row>
              <v-col>
                <v-img class="box-center" src="~/assets/imgs/busca_casa_1.png" :width="100"></v-img>
                <h2 class="text-h7 font-weight-black text-purple mt-2 mb-2">
                  <nuxt-link to="historicoPrecos">
                    Preços Históricos
                  </nuxt-link>
                </h2>
              </v-col>
              <v-col>
                <v-img class="box-center" src="~/assets/imgs/previsao_imovel_1.png" :width="100"></v-img>
                <h2 class="text-h7 font-weight-black text-purple mt-2 mb-2">
                  <nuxt-link to="estimativaPrecos">
                    Estimativa de Preços
                  </nuxt-link>
                </h2>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>

<script setup>
const tiposImovel = ref(['Casa', 'Apartamento', 'Condomínio', 'Rural'])
</script>

<style scoped>

</style>