<template>
<div>
  <div class="container">
    <h2>User Profile</h2>
    <UserProfile :userInfo="fetchedUser">
      <div slot="username">{{ fetchedUser.id }}</div>
      <div slot="karma">{{ fetchedUser.karma }}</div>
      <span slot="time">{{ fetchedUser.created }}</span>
    </UserProfile>

  </div>
</div>
</template>

<script>

import { mapGetters} from "vuex";
import UserProfile from "../components/UserProfile";
export default {
  name: "NewsView",
  computed :{
    ...mapGetters(['fetchedUser'])
  },
  created (){
    console.log(this.$route.params.id)
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USERINFO", username);
  },
  components : {
    UserProfile
  }
}
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>