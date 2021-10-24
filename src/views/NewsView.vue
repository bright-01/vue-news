<template>
<div>
<!--  <div v-for="item in this.$store.state.news">{{item}}</div>-->
  <p v-for="news in this.$store.state.news" :key="news.id">
    <a :href="news.url">{{ news.title }}</a><br>
    <small>{{ news.time_ago }} by
      <router-link v-bind:to="`/user/${news.user}`">
      {{ news.user }}
      </router-link>
    </small>
  </p>

</div>
</template>

<script>


export default {
  name: "NewsView",
  data() {
    return {
    }
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }

}
</script>

<style scoped>

</style>