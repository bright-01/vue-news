<template>
  <div>
    ASK VIEW
  </div>
</template>

<script>

import {fetchAskList} from "../api";

export default {
  name: "AskView",
  data(){
    return {
      ask: []
    }
  },
  created() {
    let t = this;
    fetchAskList() .then( function (response){
      console.log(response)
      t.ask = response.data;
    }).catch( function (error){
       console.log(error)
    })

  },
}
</script>

<style scoped>

</style>