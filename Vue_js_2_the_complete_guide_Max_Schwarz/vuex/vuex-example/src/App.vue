<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result> </app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <br><br>
        <app-another-counter></app-another-counter>
        <hr>
        <input type="text" v-model="value" ><!-- :value="value" @input="updateValue" -->
        <p>{{value}}</p>
</div>
    </div>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import Result from './components/Result.vue'
import AnotherResult from './components/AnotherResult.vue'
import AnotherCounter from './components/AnotherCounter.vue'
import * as types from './store/types';



export default {
    	computed: {
          value: {
            get(){
              return this.$store.getters[types.VALUE];
            },
            set(value){
              this.$store.dispatch(types.UPDATE_VALUE, value)
            }//getters and setters are rarely used with computed properties, 
            //used with v-model which is bound to the state of the app
         }
          /* value() {
            return this.$store.getters.value;
          } goes with :value*/
      },
      methods: {
        updateValue(event){
          this.$store.dispatch(types.UPDATE_VALUE, event.target.value);
        }
      },
      components: {
          appCounter: Counter,
          appResult: Result,
          appAnotherResult: AnotherResult,
          appAnotherCounter: AnotherCounter
      }
}
</script>

<style>

</style>
