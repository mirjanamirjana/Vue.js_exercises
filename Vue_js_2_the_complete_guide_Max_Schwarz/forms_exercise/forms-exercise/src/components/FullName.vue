<template>
    <form>
         <div>
               <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text"
                    id="firstName"
                    class="form-control"
                    :value="firstName">
                    </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text"
                    id="lastName"
                    class="form-control"
                    :value="lastName">
                </div>
            </div>
        
    </form>
</template>

<script>
export default {
    props: ['value'],
    methods: {

    },
    computed: {
        firstName(){
           return this.value.split('') [0];
        },
        lastName(){
            return this.value.split('') [1];
        }
    }
}
</script>

<style>

</style>
