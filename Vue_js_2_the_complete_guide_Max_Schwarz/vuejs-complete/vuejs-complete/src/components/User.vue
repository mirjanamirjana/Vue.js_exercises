<template>
  <div id="component" class="component">
    <h1>The user component!</h1>
    <p>I'm an awesome user!</p>
    <p>Age: {{age}}</p>
    <button @click="changeName">Change my Name</button>
  <hr>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <app-user-detail :myName="name" 
      @nameWasReset="name = $event"
      :resetFn="resetName"
      :userAge="age"></app-user-detail>
    </div>
    <div class="col-xs-12 col-sm-6">
      <app-user-edit :userAge="age" @ageWasEdited="age = $event"> </app-user-edit>
    </div>
  </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  data: function(){
    return {
      name: 'Max',
      age: 27
    };

  },
  methods: {
    changeName: function(){
          this.name = 'Anna'    
    },
    resetName(){
      this.name = 'Max'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
   div{
        background-color: lightblue;
        padding-top: 30px;
        padding-right: 30px;
        padding-bottom: 30px;
        padding-left: 30px;
    }
</style>


