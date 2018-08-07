<template>
<div>
   <h3>Edit user</h3>
   <p>Local: {{$route.query.local}}</p>
     <p>Analytics: {{$route.query.q}}</p>
     <hr>
     <button class="btn btn-primary"
     @click="confirmed = true">
     Confirm
     </button>
     <div style="height: 700px"></div>
     <p id="data">Some extra Data</p>
</div>
 
</template>

<script>
export default {
  data() {
          return {
              confirmed: false
          }
        },
        beforeRouteLeave(to, from, next) {
            if (this.confirmed) {
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
}
</script>

