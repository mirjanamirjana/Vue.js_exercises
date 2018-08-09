import * as types from './types';

export default {
    [types.UPDATE_VALUE]: ({commit}, payload) => {
        commit(types.MUT_UPDATE_VALUE, payload);
    } 
}; 