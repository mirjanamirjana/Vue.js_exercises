import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    
        [types.DOUBLE_COUNTER]: state => {
            return state.counter * 2
        },
        [types.CLICK_COUNTER]: state => {
        return state.counter +' Clicks'
        }
}

const mutations = {
    [types.MUT_INCR_COUNTER]: (state, payload) => {
        state.counter += payload;
    },
    [types.MUT_DECR_COUNTER]: (state, payload) => {
        state.counter -= payload;
    }
}

const actions = {
    [types.COUNTER_INCR]: ({ commit }, payload) => {
        commit(types.MUT_INCR_COUNTER, payload);
    },
    [types.COUNTER_DECR]: ({ commit }, payload) => {
        commit(types.MUT_DECR_COUNTER, payload);
    },
    [types.COUNTER_INCR_ASYNC]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUT_INCR_COUNTER, payload.by);
        }, payload.duration);
    },
    [types.COUNTER_DECR_ASYNC]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUT_DECR_COUNTER, payload.by);
        }, payload.duration);
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}