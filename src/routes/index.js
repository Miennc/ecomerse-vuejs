import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
        {
            path: '/',
            name: 'Home',
            component:()=> import('@/pages/HomeComponent')
        },
        {
            path: '/product-detail',
            name: 'ProductDetail',
            component:()=> import('@/pages/ProductDetailComponent')
        },
        {
           path:'/sign-in',
           name:'SignIn',
           component:()=> import('@/pages/SignInComponent')
        },
        {
            path:'/login',
            name:'login',
            component:()=> import('@/pages/LoginComponent')
         },
        {
            path: '/cart',
            name: 'cart',
            component:()=> import('@/pages/CartComponent')
        },
          {
                    path: '/order',
                    name: 'order',
                    component:()=> import('@/pages/OrderComponent')
                },
    ],
    mode:"history"
})