<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Dierctives exercise</h1>
        <button v-customOn:click="clicked" class="btn btn-primary">Click me</button>
      <hr>
      <div style="width: 100px; height: 100px; background-color: violet"
          v-customOn:mouseEnter="mouseEnter"
          v-customOn:mouseLeave="mouseLeave">
      </div> 
    </div>
  </div>
</div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert('I was clicked!!!');
    },
    mouseEnter(){
      console.log('Mouse entered!');
    },
    mouseLeave(){
      console.log('Mouse left!');
    }
  }

}
</script>

<style>

</style>
