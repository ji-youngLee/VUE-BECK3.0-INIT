import Vue from 'vue'
import Router from 'vue-router'
import LawsuitList from '@/components/lawsuit/LawsuitList'
import claimReviewList from '@/components/claim/claimReviewList'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  mode : 'history', 
  routes: [
    {
      path: '/lawsutList',
      name: 'LawsuitList',
      component: LawsuitList
    },
    {
      path:'/',
      name :'home',
      component : Home
    },{
      path : '/claimReviewList',
      name : 'claimReviewList',
      component : claimReviewList
      
    }
  ]
});
