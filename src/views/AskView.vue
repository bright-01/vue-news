<template>
  <ListItem></ListItem>
<!--  <div>-->

<!--    <ul class = 'news-list'>-->
<!--      <li v-for="ask in this.$store.state.ask" class="post" :key="ask.id">-->
<!--        <div class="points">-->
<!--          {{ask.points}}-->
<!--        </div>-->

<!--        <div>-->
<!--          <p class="news-title">-->
<!--            <a :href="ask.url">-->
<!--              {{ ask.title }}-->
<!--            </a>-->
<!--          </p>-->
<!--          <small class="link-text">-->
<!--            {{ ask.time_ago }} by-->
<!--            <router-link v-bind:to="`/user/${ask.user}`" class="link-text">-->
<!--              {{ ask.user }}-->
<!--            </router-link>-->
<!--          </small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->


<!--    <p v-for="ask in this.$store.state.ask" :key="ask.id">-->
<!--      <a :href="ask.url">{{ ask.title }}</a><br>-->
<!--      <small>{{ ask.time_ago }} by-->
<!--        <router-link v-bind:to="`items/${ask.id}`">{{ ask.user }}</router-link>-->
<!--      </small>-->
<!--    </p>-->
<!--  </div>-->
</template>

<script>
import ListItem from "../components/ListItem";
export default {
  name: "AskView",
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
  components : {
    ListItem
  }
}
</script>

<style scoped>
</style>