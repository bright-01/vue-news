<template>
<div>
  NEWS VIEW
</div>
</template>

<script>

import {fetchNewsList} from '../api/index';

export default {
  name: "NewsView",
  data() {
    return {
      users:[]
    }
  },
  created(){
    let t = this;
    fetchNewsList() .then( function (response){
          console.log(response)
        t.users = response.data;
      })
      .catch( function (error){
        console.log(error)
      })
  }

}
</script>

<style scoped>

</style>