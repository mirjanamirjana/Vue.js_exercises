<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
           <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
              <button  @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
            <hr>
           
             <component :is="selectedComponent">
               Template's content
             </component>
      
<!--       <app-blue>
        <p>This is the blue template</p>
      </app-blue>
      <app-green>
        <p>This is the green template</p>
      </app-green>
      <app-red> 
        <p>This is the red template</p>
      </app-red //passed content to slots in components -->
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue'
import Green from './components/Green.vue'
import Red from './components/Red.vue'

export default {
  data: function() {
     return {
      selectedComponent: 'appBlue'
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }  
}
</script>

<style>

</style>
