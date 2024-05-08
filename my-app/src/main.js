import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('Button', Button);
app.mount('#app')
