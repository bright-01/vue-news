import ListView from './ListView';
import bus from "../utils/bus";


/**
 * 하이 오더 컴포넌트 사용 예제
 * 이렇게 컴포넌트를 재사용하면
 * ListView 컴포넌트를 HOC로 사용해서
 * NewsView, AskView, JobsView component 는 더이상 사용하지 않는다... 컴포넌트 삭제, state삭제
 *
 * Router URL호출 -> CreateListView 에서 api 호출 (news, aks, jobs 공통 사용 ) -> ListView Rendering -> ListView에서는 그냥 ListItem 호출
 *
 * 단점
 * - 컴포넌트 깊이가 깊어짐 : 컴포넌트 통신간 어려움 복잡함
 *
 * */
export default function createListView(name){
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        // el, data, crated, componentes 등 ...
        name,
        created(){
            bus.$emit('start:spinner');
            setTimeout(()=>{
            console.log(this.$route.name);
                this.$store.dispatch('FETCH_LIST', this.$route.name) // 라우트 이름을 api 이름과 동일하게 사용하면 공통으로 가져오기 쉽다
                    .then( () => {
                        console.log("New Fetched");
                        bus.$emit('end:spinner');
                    }).catch(error => console.log(error));
            }, 1000)
        },
        render(createElement){
            return createElement(ListView);
        }
    }
}