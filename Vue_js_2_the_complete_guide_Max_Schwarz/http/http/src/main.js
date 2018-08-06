// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import { request } from 'http';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-f0652.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') {
    request.method = 'PUT';
    //intercepting requests
  }
  next(response => {
    response.json = () => { return {messages: response.body}}
    //intercepting responses
  });
})

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
