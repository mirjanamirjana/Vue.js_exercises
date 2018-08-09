<template>
    <div>
        <p>
            Counter is: {{doubleCounter}}
        </p>
        <p>
            Number of clicks: {{stringCounter}}
        </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import * as types from '../store/types'

export default {
   computed: {
       ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
            stringCounter: types.CLICK_COUNTER
       }
        
   )}/* the ... pull out all the properties and methods
         in the object that is here and create separate value
         pairs for each of them */
   
   /* {
       counter() {
           return this.$store.getters.doubleCounter;
       },
       clicks() {
           return this.$store.getters.stringCounter;
       }
   } */
}
</script>

<style>

</style>
