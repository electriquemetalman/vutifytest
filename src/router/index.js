import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'
//import AuthGuard from './auth-guard'
//import firebase from 'firebase/compat/app'
//import 'firebase/compat/auth'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        //beforeEnter: AuthGuard
    },
    {
        path: '/projects',
        name: 'project',
        component: Projects
    },
    {
        path: '/team',
        name: 'team',
        component: Team
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router