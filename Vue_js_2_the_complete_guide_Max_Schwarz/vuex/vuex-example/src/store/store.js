import Vue from 'vue';
import Vuex from 'vuex';
import Counter from './modules/counter.js';
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'



Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
       /*  increment: context => {
            context.commit('increment');
        }//context contains a lot of properties and methods from the store */
    modules: {
        Counter
    }
});