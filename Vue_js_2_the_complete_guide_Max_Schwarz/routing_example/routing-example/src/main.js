// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes.js'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',//no hash in the link route
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash) {
      return {
        selector: to.hash
      }
      return {x: 0, y: 0}
    }
  }
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

router.beforeEach((toolbar, from, next) => {
    console.log('global beforeEach');
    next();
});
