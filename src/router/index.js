import Vue from 'vue'
import Router from 'vue-router'
import shopIndex from "../modules/index";
import AddUs from "../modules/AddUs";
import Login from "../modules/Login";
import Register from "../modules/Register";
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:shopIndex},
        {path:'/addUs',component:AddUs},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
    ]
})
