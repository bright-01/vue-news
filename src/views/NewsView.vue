<template>
  <ListItem></ListItem>
<!--<div>-->
<!--&lt;!&ndash;  <div v-for="item in this.$store.state.news">{{item}}</div>&ndash;&gt;-->
<!--  <ul class = 'news-list'>-->
<!--    <li v-for="news in this.$store.state.news" class="post" :key="news.id">-->
<!--      <div class="points">-->
<!--        {{news.points}}-->
<!--      </div>-->

<!--      <div>-->
<!--        <p class="news-title">-->
<!--          <a :href="news.url">-->
<!--            {{ news.title }}-->
<!--          </a>-->
<!--        </p>-->
<!--        <small class="link-text">-->
<!--          {{ news.time_ago }} by-->
<!--          <router-link v-bind:to="`/user/${news.user}`" class="link-text">-->
<!--            {{ news.user }}-->
<!--          </router-link>-->
<!--        </small>-->
<!--      </div>-->
<!--    </li>-->
<!--  </ul>-->
<!--</div>-->
</template>

<script>
import ListItem from "../components/ListItem";
import bus from "../utils/bus.js";

export default {
  name: "NewsView",
  components: {
    ListItem,


  },
  created(){
    bus.$emit('start:spinner');
    setTimeout(()=>{
      this.$store.dispatch('FETCH_NEWS')
          .then( () => {
            console.log("New Fetched");
            bus.$emit('end:spinner');
          }).catch(error => console.log(error));
    }, 1000)
  }
}
</script>

<style scoped>

</style>