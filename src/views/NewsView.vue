<template>
<div>
<!--  <div v-for="item in this.$store.state.news">{{item}}</div>-->
  <ul class = 'news-list'>
    <li v-for="news in this.$store.state.news" class="post" :key="news.id">
      <div class="points">
        {{news.points}}
      </div>

      <div>
        <p class="news-title">
          <a :href="news.url">
            {{ news.title }}
          </a>
        </p>
        <small class="link-text">
          {{ news.time_ago }} by
          <router-link v-bind:to="`/user/${news.user}`" class="link-text">
            {{ news.user }}
          </router-link>
        </small>
      </div>
    </li>
  </ul>
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
.news-list{
  padding: 0;
  margin: 0;
}

.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}

.link-text{
  color: #828282
}
</style>