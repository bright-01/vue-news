// mixin
import bus from "../utils/bus";

export default {
    // 사용할 컴포넌트 옵션 & 로직
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
    }
}



/*
//hoc
export default function hocCreate(){
    // 사용할 컴포넌트 옵션
}
*/

