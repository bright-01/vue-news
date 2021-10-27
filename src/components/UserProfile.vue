<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">

      <slot name ='username'>

      </slot>
      <div class="time">
        <slot name="time"></slot>
      </div>
      <div class="karma">
        <slot name="karma"></slot>
      </div>

<!--      <div>{{userInfo.id}}</div>-->
<!--      <router-link :to="'/user/' + userName">{{  userName }}</router-link>-->
<!--      <div class="time">{{  userTimeAgo }}</div>-->
<!--      <div class="time">{{userInfo.created}}</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    userInfo : Object
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