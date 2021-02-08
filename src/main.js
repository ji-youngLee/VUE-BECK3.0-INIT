// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill'
/* ie11 axios 불러오는 순서가 이것 부터 나와야 ie11 적용*/
import 'es6-promise'

import Vue from 'vue'
import App from './App'
import router from './router'
import url from '@/assets/js/common/url'

/* axios 추가 */
import axios from 'axios'


Vue.config.productionTip = false

/* 전역 컴포넌트 선언 */
Vue.component('my-component', {
  template : '<div>전역컴포넌트</div>'
});

Vue.prototype.EventBus = new Vue(); 

/* 전역 엑시오스 */
Vue.prototype.$send = axios

Vue.use(url)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>', 
  beforeCreate : function() {
  },
  crated : function() {
    console.log(2)
  },
  mounted : function() {
  },
  updated : function () {
  }
})
