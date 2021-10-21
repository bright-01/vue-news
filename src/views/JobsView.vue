<template>
<div>
  <div v-for="item in jobs">{{item}}</div>
</div>
</template>

<script>
import {fetchJobsList} from "../api";

export default {
  name: "JobsView",
  data(){
    return {
      jobs: []
    }
  },
  created() {
    fetchJobsList()
        .then( response =>  this.jobs = response.data) // 화살표 함수가 위치에 있는 컴포넌트 this를 자동으로 바인딩 해준다
        .catch( error => console.log(error));
  },
}
</script>

<style scoped>

</style>