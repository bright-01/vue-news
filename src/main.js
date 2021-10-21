import Vue from 'vue';
import App from './App.vue';
import { router } from './routers/index';
import { store } from './store/index';

Vue.config.productionTip = false

/*기존 방식의 라우터 추가*/
// import VueRouter from 'vue-routers';
// Vue.use(VueRouter);
// const routers = new VueRouter({
//   routers : {
//     //라우터 추가
//   }
// })

// main에 라우터 설정을 하게되면 메인js가 라우터 편향적이게 된다

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
