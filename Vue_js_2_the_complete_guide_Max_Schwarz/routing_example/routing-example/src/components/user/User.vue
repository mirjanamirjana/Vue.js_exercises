<template>
<div>
    <h1>The user page</h1>
    <hr>
    <!-- <p>Loaded ID: {{id}} </p> -->
     <button class="btn btn-warning" 
     @click="navigateToHome">
     Go to Home
     </button>
    <br><br>
    <router-view></router-view>
</div>
   
</template>

<script>
export default {
       /*   data(){
        return {
            id: this.$route.params.id
            //passing parameters dynamically 
        }
    },
    watch: {
        '$route'(to, from){
            this.id = to.params.id;
        }//watching for the changes in the id's
    },  */
    methods: {
        navigateToHome(){
           /*  this.$router.push('/');*/
             this.$router.push({name: 'home'}); 
       
        }
    }
}
</script>
