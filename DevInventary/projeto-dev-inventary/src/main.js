import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store';
import VueGravatar from 'vue3-gravatar'


const app = createApp(App);
app.use(router)
app.use(store)
app.use(VueGravatar)
app.mount('#app');
