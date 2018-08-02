import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue({
 /*  methods: {
    changeStatus(status){
      this.$emit('statusWasEdited', status);
    } 
  }*/
})

new Vue({
  el: '#app',
  render: h => h(App)
})