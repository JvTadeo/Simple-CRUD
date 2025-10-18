import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import ToastService from 'primevue/toastservice';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Tooltip from 'primevue/tooltip';
import App from './App.vue'
import router from './router';

const app = createApp(App)
const pinia = createPinia();


app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p'
        }
    }
});
app.use(pinia)
app.use(router);
app.use(ToastService);
app.directive('tooltip', Tooltip);
app.mount('#app')

export { app };