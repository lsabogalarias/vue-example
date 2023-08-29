import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'

const app = createApp(App);
/*const app  = createApp({
    render: ()=>h(App)
});*/

app.use(createPinia());
app.mount("#app");