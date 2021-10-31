import Chart from 'chart.js'

export default {
    install(Vue){
        console.log('plugin!!!!!!!!!!!')
        Vue.prototype.$_Chart = Chart;

        // ==> 호출은 this.$.Chart로 임포트 없이 접근할 수 있다

    }
}