import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

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
    getters : {
        fetchJobs(state){
            return state.jobs;
        },
        fetchItem(state){
            return state.askDetail;
        }
    },
    actions : actions,
    mutations : mutations
})

