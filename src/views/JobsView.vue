<template>
  <ListItem></ListItem>
<!--<div>-->

<!--  <ul class = 'news-list'>-->
<!--    <li v-for="jobs in fetchJobs" class="post" :key="jobs.id">-->
<!--      <div class="points">-->
<!--        {{jobs.points || 0}}-->
<!--      </div>-->

<!--      <div>-->
<!--        <p class="news-title">-->
<!--          <a :href="jobs.url">-->
<!--            {{ jobs.title }}-->
<!--          </a>-->
<!--        </p>-->
<!--        <small class="link-text">-->
<!--          {{ jobs.time_ago }} by-->
<!--          <a :href="jobs.url">-->
<!--            {{jobs.domain}}-->
<!--          </a>-->
<!--&lt;!&ndash;          <router-link v-bind:to="`/user/${jobs.user}`" class="link-text">&ndash;&gt;-->
<!--&lt;!&ndash;            {{ jobs.user }}&ndash;&gt;-->
<!--&lt;!&ndash;          </router-link>&ndash;&gt;-->
<!--        </small>-->
<!--      </div>-->
<!--    </li>-->
<!--  </ul>-->
<!--</div>-->
</template>

<script>

// import { mapGetters} from 'vuex';
import ListItem from "../components/ListItem";
import bus from "../utils/bus";

export default {
  name: "JobsView",
  components:{
    ListItem
  },
  // computed: {
    // 1. state를 가져오는 computed 함수
    // fetchJobs (){
    //   return this.$store.state.jobs;
    // }

    // // 2. vuex 헬퍼 함수 사용 state를 불러옴
    // ...mapState({
    //   fetchJobs : state => state.jobs
    // })

    // 3. vuex의 헬퍼 함수 사용 getter을 가져옴
    // ...mapGetters({
    //   fetchJobs : 'fetchJobs'
    // })
  // },
  created(){
    bus.$emit('start:spinner');
    setTimeout(()=>{
      this.$store.dispatch("FETCH_JOBS")
          .then( () => {
            console.log("New Fetched");
            bus.$emit('end:spinner');
          }).catch(error => console.log(error));
    }, 1000)
  }
}
</script>

<style scoped>
/*.news-list{*/
/*  padding: 0;*/
/*  margin: 0;*/
/*}*/

/*.post{*/
/*  list-style: none;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  border-bottom: 1px solid #eee;*/
/*}*/

/*.points{*/
/*  width: 80px;*/
/*  height: 60px;*/
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  color: #42b883;*/
/*}*/
/*.news-title{*/
/*  margin: 0;*/
/*}*/

/*.link-text{*/
/*  color: #828282*/
/*}*/
</style>