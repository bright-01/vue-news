<template>
  <div>
    <p v-for="ask in this.$store.state.ask" :key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a><br>
      <small>{{ ask.time_ago }} by
        <router-link v-bind:to="`items/${ask.id}`">{{ ask.user }}</router-link>
      </small>
    </p>
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

</style>