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
                     path:'/edit-profile',
                     name:'editProfile',
                     component:()=> import('@/pages/EditProfileComponent')
                  },
        {
            path: '/cart',
            name: 'cart',
            component:()=> import('@/pages/CartComponent')
        },
          {
                    path: '/list-order',
                    name: 'listOrder',
                    component:()=> import('@/pages/ListOrderComponent')
                },
          {
                    path: '/order',
                    name: 'order',
                    component:()=> import('@/pages/OrderComponent')
                },
            {
                                    path: '/order-success',
                                    name: 'orderSuccess',
                                    component:()=> import('@/pages/OrderSuccessComponent')
                        },
    ],
    mode:"history"
})