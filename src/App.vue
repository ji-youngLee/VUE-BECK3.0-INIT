<template>
  <div id="app">
    <Header />
    <Gnb :propsdata="aaa" v-on:gggggg="printText"/>
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Gnb from '@/components/layout/Gnb';
//import LawsuitList from '@/components/lawsuit/LawsuitList';

export default {
  name: 'App',
  created : function() {
  },
  components :{
    Header,
    Gnb,
  //  LawsuitList
  }, 
  data()  {
    return  {aaa : 'fffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf'}
  },
  methods:{
    printText : function(){
      alert('gggg')
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/application.scss';
@import '~@/assets/scss/header.scss';
@import '~@/assets/scss/style.scss';
@import '~@/assets/scss/reset.scss';
</style>
