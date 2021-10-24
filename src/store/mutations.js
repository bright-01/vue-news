
export default  {
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_ASK(state, ask){
        state.ask = ask;
    },
    SET_JOBS(state, jobs){
        state.jobs = jobs;
    },
    SET_USERINFO(state, userinfo){
        console.log(userinfo)
        state.userinfo = userinfo;
    },
    SET_ASK_DETAIL(state, askDetail){
        console.log(askDetail);
        state.askDetail = askDetail;
    }
}