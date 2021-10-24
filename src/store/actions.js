import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo,
    fetchAskDetail} from '../api/index';

export default {


    FETCH_NEWS({commit}) { // 일반적인 자바스크립트 object 값 가져오는 방법
        fetchNewsList()
            .then(response => {
                console.log(response.data)
                commit("SET_NEWS", response.data)
            })
            // .then(response => state.news = response.data) 이건 안됌.. 현재 구조상으로 actions은 데이터를 비동기로 가져오는것만 가능하고
            // state를 데이터를 변경하기 위해선 mutations를 사용해야 가능함
            .catch(error => console.log(error));
    },
    FETCH_ASK({commit}) { // es6의 Destructuring 방식으로 값을 가져오는 방법
        fetchAskList()
            .then(({data}) => commit("SET_ASK", data))
            .catch(error => console.log(error));
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(({data}) => commit("SET_JOBS", data))
            .catch(error => console.log(error));
    },
    FETCH_USERINFO({commit}, username){
        fetchUserInfo(username)
            .then(({data}) => commit("SET_USERINFO", data))
            .catch(error => console.log(error));
    },
    FETCH_ASK_DETAIL({commit}, id){
        fetchAskDetail(id)
            .then(({data}) => commit("SET_ASK_DETAIL", data))
            .catch(error => console.log(error));
    }
}