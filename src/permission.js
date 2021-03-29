import router from './router/index'
import ViewUI from 'view-design'
import Vue from 'vue'
Vue.use(ViewUI);
ViewUI.LoadingBar.config({
    height: 2
});

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    next();
    // isVerify?(localStorage.getItem('token')?next():next('/userLogin')):next()
});

router.afterEach(route => {
    console.log(route)
    ViewUI.LoadingBar.finish();
});
