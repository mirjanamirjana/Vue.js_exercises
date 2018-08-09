<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <br><br>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
/* import {mapMutations} from 'vuex' */
import {mapActions} from 'vuex'
import * as types from '../store/types';


export default {
    methods: {
        ...mapActions({
            asyncIncrement: types.COUNTER_INCR_ASYNC,
            asyncDecrement: types.COUNTER_DECR_ASYNC
        }
            
        )//used for async tasks
       /*  increment(by){
            this.$store.dispatch('increment', by); 
    }*/
   /*  methods: {
        ...mapMutations([
            'increment',
            'decrement'
        ])//mutatuons used for other sync tasks
    } *//* {
        increment(){
            this.$store.commit('increment')
        },
        decrement(){
            this.$store.commit('decrement')
        } */
    }
}
</script>

<style>

</style>
