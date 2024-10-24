// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import { VDateInput } from "vuetify/labs/VDateInput";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VDateInput,
    },
    // ... your configuration
  });
  nuxtApp.vueApp.use(vuetify);
});
