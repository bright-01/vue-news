<template>
<div>
  <p v-for="job in this.$store.state.jobs" :key="job.id">
    <a :href="job.url">{{ job.title }}</a><br>
    <small>{{ job.time_ago }} by {{ job.domain }}</small>
  </p>
</div>
</template>

<script>

import { mapGetters} from 'vuex';

export default {
  name: "JobsView",
  data(){
    return {
    }
  },
  computed: {
    // 1. state를 가져오는 computed 함수
    // fetchJobs (){
    //   return this.$store.state.jobs;
    // }

    // // 2. vuex 헬퍼 함수 사용 state를 불러옴
    // ...mapState({
    //   fetchJobs : state => state.jobs
    // })

    // 3. vuex의 헬퍼 함수 사용 getter을 가져옴
    ...mapGetters({
      fetchJobs : 'fetchJobs'
    })
  },
  created() {
   this.$store.dispatch("FETCH_JOBS");
  },
}
</script>

<style scoped>

</style>