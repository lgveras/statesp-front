<template>
  <NuxtLayout>
    <v-app id="app">
      <v-container fluid>
        <v-row align="center" justify="center" class="d-flex flex-column">
          <v-col cols="12" md="2">
            <nuxt-link to="/">
              <v-img :width="200" class="box-center" src="~/assets/imgs/logo_1.png">
              </v-img>
            </nuxt-link>
          </v-col>
        </v-row>
        <NuxtPage></NuxtPage>
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<style>
#app {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url('~/assets/imgs/bg_sao_paulo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#app::before {
  /* content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('~/assets/imgs/bg_sao_paulo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(40%);
  /* Aplica o filtro escuro somente ao background */
  /* z-index: -1;  */
}

.box-center {
  margin: 0 auto;
}
</style>
