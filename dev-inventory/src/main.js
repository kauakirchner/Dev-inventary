import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { vuetifyConfig } from "./assets/vuetify";

const app = createApp(App);

app.use(router);
app.use(vuetifyConfig);
app.mount('#app');
