<template>
    <form>
         <div>
               <div class="form-group">
                    <label>First Name</label>
                    <input type="text"
                    class="form-control"
                    :value="firstName"
                    @input="nameChanged">
                    </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text"
                    class="form-control"
                    :value="lastName"
                    @input="nameChanged">
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
           return this.value.split(" ")[0];
        },
        lastName(){
            return this.value.split(" ")[1];
        }
    }
}
</script>

<style>

</style>
