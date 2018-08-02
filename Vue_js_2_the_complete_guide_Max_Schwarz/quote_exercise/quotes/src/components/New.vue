<template>
    <div>
        <h3>
           New Quote
        </h3>
        <button @click="counter++">Increase!!!</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            counter: 0
        };
    },
    destroyed()
    {
        console.log('Destroyed')
    },
    deactivated() {
        console.log('Deactivated')
    },/* with activated and deactivated lifecycle hooks
    we preserve the current state,  */
    activated(){
        console.log('Activated')
    }
}
</script>

<style>

</style>