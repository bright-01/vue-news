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
// import bus from "../utils/bus";
import ListMixin from "../mixins/ListMixin";
export default {
  name: "AskView",
  // created(){
  //   bus.$emit('start:spinner');
  //   setTimeout(()=>{
  //     this.$store.dispatch("FETCH_ASK")
  //         .then( () => {
  //           console.log("New Fetched");
  //           bus.$emit('end:spinner');
  //         }).catch(error => console.log(error));
  //   }, 1000)
  // },
  components : {
    ListItem
  },
  mixins: [ListMixin]
}
</script>

<style scoped>
</style>