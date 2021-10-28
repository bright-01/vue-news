import Vue from 'vue';
export default new Vue();

// 이벤트 보내는 컴포넌트에서는 eventBus.$emit 로
// 이벤트 받는 컴포넌트에서는 evnetBus.$on으로 받으면
// 컴포넌트와 컴포넌트 사이에 이벤트를 주고 받기가 쉬워진다
