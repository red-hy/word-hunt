import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const mutations = {
    getWord(state, sechkey){
        if (sechkey.length!== 0){
            state.word = sechkey;
        }else{
            state.word = 'Word Hunt';
        }
        
    }
}

const state = {
    word:'Word Hunt',
}

export default new Vuex.Store({
    mutations,
    state
})