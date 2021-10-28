<template>
  <div>
    <!--  <div v-for="item in this.$store.state.news">{{item}}</div>-->
    <ul class = 'news-list'>
      <li v-for="item in getListItme" class="post" :key="item.id">
        <div class="points">
          {{item.points || 0}}
        </div>

        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{item.title}}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-if="item.user"
                v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>{{item.domain}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  // created(){
  //  let fetchName = '';
  //  const name = this.$route.name;
  //  if(name === 'news'){
  //    fetchName = 'FETCH_NEWS';
  //  } else if (name === 'ask'){
  //    fetchName = 'FETCH_ASK';
  //  } else if (name === 'jobs'){
  //    fetchName = 'FETCH_JOBS';
  //  }
  //  console.log(fetchName);
  //   // this.$store.dispatch('FETCH_NEWS');
  //   this.$store.dispatch(fetchName);
  // },
  computed : {
    getListItme() {
      // const name = this.$route.name;
      // if(name === 'news'){
      //   return this.$store.state.news;
      // } else if (name === 'ask'){
      //   return this.$store.state.ask;
      // } else if (name === 'jobs'){
      //   return this.$store.state.jobs;
      // }
      return this.$store.state.list;
    }
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