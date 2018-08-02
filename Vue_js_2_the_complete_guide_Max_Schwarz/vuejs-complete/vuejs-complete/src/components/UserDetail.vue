<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{switchName()}}</p>
    <p>User age: {{userAge}}</p>
<!--     <button @click="resetName">Reset Name</button>
 -->        <button @click="resetFn()">Reset Name</button>

  </div>
</template>

<script>
import {eventBus} from '../main';

export default {
  props: {
    myName: {
      type: String,
     /*  required: true //making sure the prop passed is a string */
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName(){
      return this.myName.split("").reverse().join("");
    },
    resetName(){
      this.myName = 'Max';
      this.$emit('nameWasReset', this.myName);
    }
  },//creating a lifecycle hook to listen on event
  created(){
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    });
  } 
}
</script>

<style scoped>
div{
  background-color: lightcoral;
}
</style>
