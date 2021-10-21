// import { fetchNewsList} from '../api/index';
//
// const newsStore = {
//     state: {
//         ask: []
//     },
//     mutations : {
//         SET_NEWS(state, news) {
//             state.news = news;
//         },
//     },
//     actions : {
//         FETCH_NEWS({commit}){ // 일반적인 자바스크립트 object 값 가져오는 방법
//             fetchNewsList()
//                 .then(response => {
//                     console.log(response.data)
//                     commit("SET_NEWS", response.data)
//                 })
//                 // .then(response => state.news = response.data) 이건 안됌.. 현재 구조상으로 actions은 데이터를 비동기로 가져오는것만 가능하고
//                 // state를 데이터를 변경하기 위해선 mutations를 사용해야 가능함
//                 .catch(error => console.log(error));
//         }
//     }
// }
//
// export default newsStore;