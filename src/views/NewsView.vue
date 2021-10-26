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
export default {
  name: "NewsView",
  components: {
    ListItem
  }
  // created(){
  //   this.$store.dispatch('FETCH_NEWS');
  // }

}
</script>

<style scoped>

</style>