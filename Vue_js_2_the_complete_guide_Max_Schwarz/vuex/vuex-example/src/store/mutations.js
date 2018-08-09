import * as types from './types';


export default {
    [types.MUT_UPDATE_VALUE]: (state, payload) => {
        state.value = payload;
    }
} 