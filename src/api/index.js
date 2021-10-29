import axios from "axios";


//1. HTTP request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0'
}


//2.API 함수들 정리
function fetchNewsList(){
    return axios.get(`${config.baseUrl}/news/1.json`)
}

async  function fetchAskList(){
    try{
        const respose = await axios.get(`${config.baseUrl}/ask/1.json`);
        return respose;
        // return await axios.get(`${config.baseUrl}/ask/1.json`) 이렇게 해도 된다
    } catch (e) {
        console.error(e);
    }

}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}/jobs/1.json`)
}

function fetchList(pageName){
    console.log(pageName)
    return axios.get(`${config.baseUrl}/${pageName}/1.json`)
}

function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}/user/${userName}.json`)
}

function fetchAskDetail(id){
    return axios.get(`${config.baseUrl}/item/${id}.json`)
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchAskDetail
}
/**
 * promise 예제
 * */

function getData(){
    return new Promise((resolve, reject) => {
        resolve(100);
        reject('error');
    })
}

getData()
    .then(data => console.log(data))
    .catch( error => console.log(error));















