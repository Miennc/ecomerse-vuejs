import Vue from 'vue'
import App from './App.vue'
import './index.css'
import {router} from './routes'
import {store} from "./store/index.store";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router:router,
     store: store
}).$mount('#app')