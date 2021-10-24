<template>
<div>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :userInfo="fetchedUser">
      <div slot="userName">{{ fetchedUser.id }}</div>
      <span slot="userKarma">{{ fetchedUser.karma }} karma</span>
    </user-profile>

  </div>
</div>
</template>

<script>

import { mapGetters} from "vuex";

export default {
  name: "NewsView",
  computed :{
    ...mapGetters(['fetchedUser'])
  },
  created (){
    console.log(this.$route.params.id)
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USERINFO", username);
  }
}
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>