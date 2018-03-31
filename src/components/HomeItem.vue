<template>
    <div class="home-item" :class="{smollborder:itemObj.smollBorder,lagerborder:itemObj.lagerBorder}">
      <div class="icon" :style="{background: 'url('+itemObj.srcUrl+') center',backgroundSize:'contain'}"></div>
      <p>{{itemObj.title}}</p>
      <div class="arrow"></div>
      <div class="line" :class="{none:!itemObj.line}"></div>
    </div>
</template>

<script>
    export default {
        name: "HomeItem",
        data(){
          return{
            ItemData:{
              title:'默认标题',
              srcUrl:'../../static/imgas/deafult-head.jpg',
            }
          }
        },
      props:{
          itemObj:{
            type:Object,
            required:true
          }
      },
      mounted:function () {

      }

    }
</script>

<style scoped>
 .home-item{
   width: 7.5rem;
   height: 1.3rem;
   background-color: #FFFFFF;
   display: flex;
   align-items: center;
   position: relative;
 }
  .home-item .icon{
    width: 0.56rem;
    height: 0.56rem;
    border-radius: 50%;
    position: absolute;
    left: 0.3rem;
  }
  .home-item p{
    color: #333333;
    font-size: 0.28rem;
    position: absolute;
    left: 1.16rem;
  }
  .home-item .arrow{
    width: 0.24rem;
    height: 0.24rem;
    border-right: solid 1px #333333;
    border-bottom: solid 1px #333333;
    right: 0.3rem;
    position: absolute;
    transform: rotate(-45deg);
  }
  .home-item .line{
    border: none;
    position: absolute;
    bottom: 0px;
    left: 0.3rem;
    height: 1px;
    width: 6.9rem;
    background-color: #ececec;
  }
  .none{
    display: none;
  }
  .smollborder{
    border-top: solid 0.4rem #ececec;
  }
  .lagerborder{
    border-bottom: solid 1.6rem #ececec;
  }
</style>
