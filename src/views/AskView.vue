<template>
  <div>

    <ul class = 'news-list'>
      <li v-for="ask in this.$store.state.ask" class="post" :key="ask.id">
        <div class="points">
          {{ask.points}}
        </div>

        <div>
          <p class="news-title">
            <a :href="ask.url">
              {{ ask.title }}
            </a>
          </p>
          <small class="link-text">
            {{ ask.time_ago }} by
            <router-link v-bind:to="`/user/${ask.user}`" class="link-text">
              {{ ask.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>


<!--    <p v-for="ask in this.$store.state.ask" :key="ask.id">-->
<!--      <a :href="ask.url">{{ ask.title }}</a><br>-->
<!--      <small>{{ ask.time_ago }} by-->
<!--        <router-link v-bind:to="`items/${ask.id}`">{{ ask.user }}</router-link>-->
<!--      </small>-->
<!--    </p>-->
  </div>
</template>

<script>

export default {
  name: "AskView",
  data(){
    return {
    }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
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