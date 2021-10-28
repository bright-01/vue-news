import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';
import UserView from '../views/UserView';
import ItemsView from '../views/ItemsView';
import createListView from '../views/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:"history",
    routes: [
        {
          path : "/",
          redirect : "/news"
        }, {
            path: '/news', // url 주소
            name: 'news',
            // component: NewsView // url 주소로 갔을 대 표시될 컴포넌트
            component: createListView('NewsView') // url 주소로 갔을 대 표시될 컴포넌트
        }, {
            path: '/ask', // url 주소
            name: 'ask',
            // component: AskView // url 주소로 갔을 대 표시될 컴포넌트
            component: createListView('AskView') // url 주소로 갔을 대 표시될 컴포넌트
        }, {
            path: '/jobs', // url 주소
            name: 'jobs',
            // component: JobsView // url 주소로 갔을 대 표시될 컴포넌트
            component: createListView('JobsView') // url 주소로 갔을 대 표시될 컴포넌트
        }, {
            path: '/user/:id', // url 주소
            component: UserView // url 주소로 갔을 대 표시될 컴포넌트
        },{
            path: '/item/:id', // url 주소
            component: ItemsView // url 주소로 갔을 대 표시될 컴포넌트
        }
    ]
});



