import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';
import UserView from '../views/UserView';
import ItemsView from '../views/ItemsView';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:"history",
    routes: [
        {
          path : "/",
          redirect : "/news"
        }, {
            path: '/news', // url 주소
            component: NewsView // url 주소로 갔을 대 표시될 컴포넌트
        }, {
            path: '/ask', // url 주소
            component: AskView // url 주소로 갔을 대 표시될 컴포넌트
        }, {
            path: '/jobs', // url 주소
            component: JobsView // url 주소로 갔을 대 표시될 컴포넌트
        }, {
            path: '/user', // url 주소
            component: UserView // url 주소로 갔을 대 표시될 컴포넌트
        },{
            path: '/items', // url 주소
            component: ItemsView // url 주소로 갔을 대 표시될 컴포넌트
        }
    ]
});



