<template>
<div>
  <div>
    <section class="header-container">
      <div class="user-container">
        <div>
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="user-description">
          <router-link :to="'/user/' + userName">{{  userName }}</router-link>
          <div class="time">{{  userTimeAgo }}</div>
        </div>
      </div>
      <h2>{{ userQuestion }}</h2>
    </section>
    <section>
      <div v-html="userContent" class="content"></div>
    </section>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  name: "NewsView",
  computed: {
    ...mapGetters(['fetchItem']),
    userName() {
      return this.fetchItem.user;
    },
    userTimeAgo() {
      return this.fetchItem.time_ago;
    },
    userQuestion() {
      return this.fetchItem.title;
    },
    userContent() {
      return this.fetchItem.content;
    },
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ASK_DETAIL", id);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>