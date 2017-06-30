<!--无网络界面显示-->
<template>
  <div class="network" >
    <img src="../assets/netloading/network.png" alt="">
    <p>网络君被外星人带走啦~</p>
    <img @click="reload()" src="../assets/netloading/refresh.png" alt="">
    <!--<p @click="show=!show" >-->
      <!--{{show}}-->
    <!--</p>-->
    <!--<transition name="fade">-->
      <!--<p v-if="show">hello</p>-->
    <!--</transition>-->
  </div>

</template>

<script>
   export default{
     name: 'network',
     data(){
       return{
          show:true
       }
     },
     methods:{
       reload:function(){
         //点击刷新，重新加载当前页面
          window.location.reload();
       }
     }
   }
</script>

<style scoped>
  /*p{*/
    /*display: block;*/
    /*width: 100px;*/
    /*height: 100px;*/
    /*background-color: pink;*/
  /*}*/

  /*.fade-enter-active, .fade-leave-active{*/
    /*!*transition: opacity .5s;*!*/
    /*transition: all .5s ease;*/
  /*}*/
  /*.fade-enter, .fade-leave-active{*/
    /*opacity: 0;*/
  /*}*/

  .network{
    width: 100%;
    height: 100%;
    padding-top: 2.4267rem;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    box-sizing: border-box;
  }

  img:nth-of-type(2n+1){
    width:5.1733rem ;
  }
  img:nth-of-type(2n){
    width: 1.3333rem;
    margin-top:0.3333rem ;
  }
  p{
    font-family: HYTiaoTiaoTiJ;
    font-size: 0.3067rem;
    margin-top:0.3333rem ;
    color: #A77464;
  }
</style>
