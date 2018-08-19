<template>
<div>
    <h1></h1>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

export default {
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    }, 
    components: {
        appStock: Stock
    }
}
</script>

<style>

</style>
