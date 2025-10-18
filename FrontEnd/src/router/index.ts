import { createRouter, createWebHistory } from "vue-router";
import { ServerAPI } from "../api";
import HomePage from "../pages/Home.page.vue";
import LoginPage from "../pages/Login.Page.vue";
import RegisterPage from "../pages/Register.page.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    // If the next page doesn't require authentication
    // then just continue.
    if (!to.meta.requiresAuth) {
        next();
        return
    }

    await ServerAPI.validateToken()
    .then(({data}) => {
        sessionStorage.setItem('token', data);
    })
    .catch(() => {
        next({ name: 'login' });
        sessionStorage.removeItem('token');
        return;
    });

    next();    
})

export default router