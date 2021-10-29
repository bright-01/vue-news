<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading=loadingStatus></Spinner>

  </div>
</template>

<script>

import ToolBar from "./components/ToolBar";
import Spinner from "./components/Spinner";
import bus from "./utils/bus.js";
import axios from "axios";
export default {
  name: 'App',
  data (){
    return {
      loadingStatus: false
    }
  },
  components: {
    ToolBar,
    Spinner
  },
  methods : {
    fetchData (){
      console.log("test");
    },
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }

    /**
     * 비동기 처리 패턴
     * 1. function callback
     * 2. promise
     * 3. async & await
     * */

// 1. function callback
// $.get('domain.com/id', function (id){
//   if ( id === 'john'){
//     $.get('domain.com/products', function ( products){
//       console.log(products);
//     })
//   }
// })
//
// //2. promise
// function getId(){
//   return new Promise(function ( resolve, reject){
//     $.get('domain.com/id', function(id){
//       return resolve(id);
//     })
//   });
// }
//
// function getProduct(){
//   ...
// }
//
// function logProduct(){
//
// }
//
// getId().then(getProduct).then(logProduct).catch();

    // 비동기 처리 예제
    // loginUser(){
    //   axios.get('http://jsonplaceholder.typeicode.com/users/1')
    //   .then(response => {
    //     if(response.data.id === 1 ){
    //       console.log('사용자가 인증 되었습니다.');
    //       axios.get('https://jsonplaceholder.typeicode.com/todos')
    //       .then(response => {
    //         this.items = response.data;
    //       })
    //     }
    //   })
    // },
    //
    // async awiat 적용 + 예외 처리
    // async loginUser1(){
    //   try {
    //     let response = await axios.get('http://jsonplaceholder.typeicode.com/users/1');
    //     if(response.data.id === 1){
    //       console.log('사용자가 인증되었습니다.');
    //       let list = await axios.get('https://jsonplaceholder.typeicode.com/todos');
    //       this.items = list.data;
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>

body{
  margin: 0;
}

a{
  color : #34495e;
  text-decoration: none;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
