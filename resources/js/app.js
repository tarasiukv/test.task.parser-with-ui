import './bootstrap';
import {createApp} from "vue";
import App from "./src/App.vue"
import Router from "./router/router.js";
import Paginate from 'vuejs-paginate-next';
import Store from "@store/store.js";


createApp(App)
    .use(Router)
    .use(Store)
    .component('Paginate', Paginate)
    .mount('#app');
