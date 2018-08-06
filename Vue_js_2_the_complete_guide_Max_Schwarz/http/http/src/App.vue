<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input v-model="user.username" type="text" class="form-control">
        </div>
        <div class="form group">
          <label for="">Email</label>
          <input v-model="user.email" type="text" class="form-control">
        </div>
        <br>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <br><br>
        <input type="text" class="form-control" v-model="node">
        <br><br>
        <button class="btn btn-primary" @click="fetchData">Get data</button>
        <ul class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  	data() {
      return{
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit() {
        /* this.$http.post('data.json', this.user)
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error);
            }); */
           /*  this.resource.save({}, this.user); */
           this.resource.saveAlt(this.user);
          },
          fetchData(){
    /*         this.$http.get('data.json')
                .then(response => {
                  return response.json();//gives back a promise
                
                })
                .then(data => {
                  const resultArray = [];
                  for (let key in data){
                    resultArray.push(data[key]);
                  }
                  this.users = resultArray;
                }); */
                this.resource.getData({node: this.node})
                .then(response => {
                  return response.json();//gives back a promise
                
                })
                .then(data => {
                  const resultArray = [];
                  for (let key in data){
                    resultArray.push(data[key]);
                  }
                  this.users = resultArray;
                });//able to choose the data we want to fetch interchangeably
          }
    },
    created(){
      const customActions = {
          saveAlt: {method: 'POST', url: 'alternative.json'},
          getData: {method: 'GET'}
          //creating data on a new node in firebase
      }
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
}
</script>

<style>

</style>
