<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{userAge}}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
import {eventBus} from '../main';

export default {
  props: ['userAge'],
  methods: {
    editAge(){
      this.userAge = 30;
  /*     this.$emit('ageWasEdited', this.userAge) */
  /*   eventBus.$emit('ageWasEdited', this.userAge); emmited on the event bus instance in main.js */
      eventBus.changeAge(this.userAge);
    }
  }
}
</script>


<style scoped>
div{
  background-color: lightgreen;
}
</style>
