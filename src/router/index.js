import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/Index.vue'
import CommentManagement from '../components/CommentManagement.vue'
import Edit from '../components/Edit.vue'
import UserCenter from '../components/UserCenter.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import News from '../components/News.vue'

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            name:'Index',
            path:'/',
            component:Index
        },
        {
            name:'CommentManagement',
            path:'/comments',
            component:CommentManagement
        },
        {
            name:'Edit',
            path:'/edit',
            component:Edit
        },
        {
            name:'UserCenter',
            path:'/user',
            component:UserCenter
        },
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        {
            name:'Register',
            path:'/register',
            component:Register
        },
        {
            name:'News',
            path:'/news',
            component:News
        }
    ]
})