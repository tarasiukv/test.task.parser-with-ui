import './bootstrap';
import {createApp} from "vue";
import App from "./src/App.vue"
import Router from "./router/router.js";

createApp(App)
    .use(Router)
    .mount('#app');
