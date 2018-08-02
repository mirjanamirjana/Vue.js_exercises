<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h2>Sign Up form</h2>
                    <hr>
                    <app-full-name v-model="fullName"></app-full-name>
                     <div class="form-group">
                        <label for="mail">Mail</label>
                        <input type="mail"
                        id="mail"
                        class="form-control"
                        v-model="mail">
                    </div>
                     <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                        id="password"
                        class="form-control"
                        v-model="password">
                    </div>
                    <br>
    <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                      <div class="form-group text-justify">
                          Store data? 
                        <label for="yes">Yes</label>
                        <input type="radio"
                        id="yes"
                        value="Yes"
                        v-model="yesOrNo">
                         <label for="no">No</label>
                        <input type="radio"
                        id="no"
                        value="No"
                        v-model="yesOrNo">
                        </div>
                          </div>
                        <br>
                        <br>
                          <button type="submit" 
                          class="btn btn-success" 
                          @click.prevent="submit = true">
                              Submit the form</button> 
                    </div>

                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div v-if="submit" class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}} </p>
                        <p>Mail: {{mail}} </p>
                        <p>Password:{{password}} </p>
                        <p>Store in Database?: {{yesOrNo}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './components/FullName.vue';

    export default {
        data(){
            return { 
                fullName: 'Mimi LLlivk',
                mail: '',
                password: '',
                yesOrNo: 'Yes',
                submit: false          
                }
        },
        components: {
            appFullName: FullName
        }
}
</script>

<style>
</style>
