import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Directive from "./directive/directives";
import apis from "./apis/api";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/common.css'
import './permission.js'
import './filter/filter'

const vueUse = {
    apis, Directive, ViewUI
}
Object.keys(vueUse).forEach(item => {
    Vue.use(vueUse[item])
})

Vue.prototype.$ELEMENT = {size: 'small', zIndex: 3000};

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


