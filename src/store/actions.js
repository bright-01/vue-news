import {
    fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo,
    fetchAskDetail, fetchList
} from '../api/index';

export default {

    // promise
    // FETCH_NEWS({commit}) { // 일반적인 자바스크립트 object 값 가져오는 방법
    //     return fetchNewsList()
    //         .then(response => {
    //             console.log(response.data)
    //             commit("SET_NEWS", response.data)
    //         })
    //         // .then(response => state.news = response.data) 이건 안됌.. 현재 구조상으로 actions은 데이터를 비동기로 가져오는것만 가능하고
    //         // state를 데이터를 변경하기 위해선 mutations를 사용해야 가능함
    //         .catch(error => console.log(error));
    // },
    // async
    async FETCH_NEWS({commit}){
        const response = await  fetchNewsList();
        commit('SET_NEWS', response.data);
        return response;
    },
    // FETCH_ASK({commit}) { // es6의 Destructuring 방식으로 값을 가져오는 방법
    //     return  fetchAskList()
    //         .then(({data}) => commit("SET_ASK", data))
    //         .catch(error => console.log(error));
    // },
    async FETCH_ASK({commit}) { // es6의 Destructuring 방식으로 값을 가져오는 방법
        const respose = await fetchAskList();
        commit('SET_ASK', respose.data);
        return respose;
    },
    // FETCH_JOBS({commit}) {
    //     return fetchJobsList()
    //         .then(({data}) => {
    //             commit("SET_JOBS", data)
    //             return data;
    //         })
    //         .catch(error => console.log(error));
    // },
    async FETCH_JOBS({commit}){
        try {
            const response = await  fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        }catch (error){
            console.log( error );
        }
    },
    FETCH_LIST({commit}, pageName){
      return fetchList(pageName)
          .then(({data}) =>{
              commit("SET_LIST", data);
              return data;
          })
          .catch(error => console.log(error));
    },

    FETCH_USERINFO({commit}, username){
        return fetchUserInfo(username)
            .then(({data}) => {
                commit("SET_USERINFO", data);
                return data;
            })
            .catch(error => console.log(error));
    },
    FETCH_ASK_DETAIL({commit}, id){
        return fetchAskDetail(id)
            .then(({data}) => {
                commit("SET_ASK_DETAIL", data);
                return data;
            })
            .catch(error => console.log(error));
    }
}