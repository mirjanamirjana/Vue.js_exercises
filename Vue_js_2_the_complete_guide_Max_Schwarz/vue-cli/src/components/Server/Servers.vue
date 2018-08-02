<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <appServer v-for="server in servers"
            :server="server"></appServer>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue'
export default {
    data: function(){
        return{
            servers: [
                {id: 1, status: 'Normal'},
                {id: 2, status: 'Critical'},
                {id: 3, status: 'Unknown'},
                {id: 4, status: 'Failed'}
            ]
        }
    },
    components: {
        appServer: Server
    },
    methods: {
        changeStatus(){
            this.status = 'Normal';
        }
    }
}
</script>

<style scoped>
div {
    border: 1px solid blue;
}
</style>
