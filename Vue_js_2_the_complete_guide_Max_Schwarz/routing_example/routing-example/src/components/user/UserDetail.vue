<template>
    <div>
        <h3>The user details</h3>
        <p>User loaded has ID: {{$route.params.id}}</p>
        <router-link tag="button"
        :to="link"
        class="btn btn-primary">
        <!--   :to="{name: 'userEdit', params: {id: $route.params.id}, query: {local: 'en', q: 100 }}" -->
             Edit User
        </router-link>
        <br><br>
</div>
</template>

<script>
export default {
   data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            if (true) {
                next();
            } else {
                next(false);
            }
        }
}//as long as next() is not called the component 
//doesnt get loaded, can't access object data
</script>
