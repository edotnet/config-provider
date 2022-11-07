import { createApp } from "vue";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";
import "./assets/main.css";

import router from "./router";

import App from "./App.vue";
import { store } from "./store";

const app = createApp(App);

app.use(store);

app.use(router);

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

app.mount("#app");
