<template>
<div>
  <p>{{this.$store.state.userinfo.id}}</p>
  <p>{{this.$store.state.userinfo.karma}}</p>
  <p>{{this.$store.state.userinfo.created}}</p>
  <p>{{this.$store.state.userinfo.about}}</p>
</div>
</template>

<script>
export default {
  name: "NewsView",
  computed (){

  },
  created (){
    console.log(this.$route.params.id)
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USERINFO", username);
  }
}
</script>

<style scoped>

</style>