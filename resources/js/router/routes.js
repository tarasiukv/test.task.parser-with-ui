import AdminComponent from "@component/AdminComponent.vue";
import LoginComponent from "@component/LoginComponent.vue";
import RegisterComponent from "@component/RegisterComponent.vue";

const routes = [
    {
        path: '/',
        component: AdminComponent,
    },
    {
        path: '/login',
        component: LoginComponent,
    },
    {
        path: '/register',
        component: RegisterComponent,
    },
];

export default routes;
