import { createWebHistory, createRouter } from "vue-router";
import homeRoutes from './modules/crud/router/home-routes';


const routes = [
    ...homeRoutes
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;