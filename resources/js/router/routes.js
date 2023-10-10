import AdminComponent from "@component/AdminComponent.vue";
import LoginComponent from "@component/LoginComponent.vue";
import RegisterComponent from "@component/RegisterComponent.vue";
import CreateComponent from "@component/CreateComponent.vue";
import EditComponent from "@component/EditComponent.vue";

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
    {
        path: '/create',
        component: CreateComponent,
    },
    {
        path: '/edit/:id',
        component: EditComponent,
    },
];

export default routes;
