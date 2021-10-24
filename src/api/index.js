import axios from "axios";


//1. HTTP request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0'
}


//2.API 함수들 정리
function fetchNewsList(){
    return axios.get(`${config.baseUrl}/news/1.json`)
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}/ask/1.json`)
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}/jobs/1.json`)
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















