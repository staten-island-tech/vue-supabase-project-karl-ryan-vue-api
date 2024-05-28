import './assets/main.css'
import PrimeVue from "primevue/config";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import App from './App.vue'
import router from './router'
import "primeflex/primeflex.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { userStore } from './stores/loginStore';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
app.mount('#app')