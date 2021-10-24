import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getter from './getter'

Vue.use(Vuex);

// import newsStore from '/src/store'
// import askStore from './askStore';
// import jobsStroe from './jobsStore';
//
// const store = new Vuex.Store({
//     modules : {
//         newsStore,
//         askStore,
//         jobsStroe
//     }
// })
//
// export default store;
//
export const store = new Vuex.Store({
    state : {
        news : [],
        ask :[],
        jobs :[],
        userinfo:{},
        askDetail:{}
    },
    getters : getter,
    actions : actions,
    mutations : mutations
})

