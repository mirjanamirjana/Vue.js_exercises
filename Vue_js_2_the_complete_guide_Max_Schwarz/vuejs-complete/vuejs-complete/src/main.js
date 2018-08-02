import Vue from 'vue'
import App from './App.vue'


export const eventBus = new Vue({
  /*cna set up data properties to be accessed from anywhere 
   data: {

  } */
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
