<template>
  <div class="user-data">
    <div class="box">
      <img class="head-img" :src="person.headImg" onerror="this.src='./static/imgas/deafult-head.jpg'">
      <div class="data">
        <p>{{person.name}}</p>
        <span>{{person.dt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserData",
    data() {
      return {
        person:{
          headImg:'./static/imgas/user-head.jpg',
          name:'Vue',
          dt:'交易 174 | 好评 99% | 信任91%'
        }
      }
    }
  }
</script>

<style scoped>
  .user-data {
    width: 7.5rem;
    height: 2.6rem;
    background-color: #1798f2;
    display: flex;
    align-items: center;
  }
  .user-data .box{
    width: 100%;
    height: 1.2rem;
    position: relative;
  }
  .user-data .head-img{
    width: 1.2rem;
    height: 1.2rem;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    left: 0.3rem;
  }
  .user-data .box .data{
    width: 5.7rem;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 1.8rem;
  }
  .user-data .box .data p{
    color: #FFF;
    font-size: 0.36rem;
    position: absolute;
    top: 0.2rem;
    left: 0px;
  }
  .user-data .box .data span{
    position: absolute;
    bottom: 0.2rem;
    color: #FFF;
    font-size: 0.24rem;
    left: 0px;
  }
</style>
