// import { fetchJobsList} from '../api/index';
//
// const jobsStore = {
//     state: {
//         jobs: []
//     },
//     getters : {
//         fetchJobs(state){
//             return state.jobs;
//         }
//     },
//     mutations : {
//         SET_JOBS(state, jobs) {
//             state.jobs = jobs;
//         },
//     },
//     actions : {
//         FETCH_JOBS({commit}){ // 일반적인 자바스크립트 object 값 가져오는 방법
//             fetchJobsList()
//                 .then(response => {
//                     console.log(response.data)
//                     commit("SET_JOBS", response.data)
//                 })
//                 // .then(response => state.news = response.data) 이건 안됌.. 현재 구조상으로 actions은 데이터를 비동기로 가져오는것만 가능하고
//                 // state를 데이터를 변경하기 위해선 mutations를 사용해야 가능함
//                 .catch(error => console.log(error));
//         }
//     }
// }
//
// export default jobsStore;