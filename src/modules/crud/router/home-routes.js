
import Home from "../views/home.vue";
// import Detail from "./views/detail.vue";


const routes = [
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'Update',
        path:'/update/:id',
        component: () => import('../views/update.vue'),
    },
    {
        name:'Add',
        path:'/add',
        component: () => import('../views/add.vue'),
    },
    {
        name:'Detail',
        path:'/detail/:id',
        component: () => import('../views/detail.vue'),
    },
    {
        name:'AllLoader',
        path:'/all-loader',
        component: () => import('../views/allLoader.vue'),
    }
];

export default routes;