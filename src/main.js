import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import store from '../src/modules/crud/store-management/store/index';



const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app');