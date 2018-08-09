<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <br><br>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
/* import {mapMutations} from 'vuex' */
import {mapActions} from 'vuex'
import * as types from '../store/types';


export default {
      methods: {
        ...mapActions({
            increment: types.COUNTER_INCR,
            decrement: types.COUNTER_DECR
        }
           
        )//used for async tasks
        /* increment(by){
            this.$store.dispatch('increment', by);
    } */
 /*    methods: {
        ...mapMutations([
            'increment',
            'decrement'
        ])
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
