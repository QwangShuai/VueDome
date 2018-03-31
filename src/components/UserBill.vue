<template>
  <div class="user-bill">
    <div class="user-buy" @click="clickBuy">
      <div></div>
      <p>我购买的</p>
    </div>
    <div class="user-sell" @click="clickSell">
      <div></div>
      <p>我出售的</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserBill",
    data() {
      return {}
    },
    methods:{
      clickBuy(){
        alert('您点击了：我的购买');
      },
      clickSell(){
        alert('您点击了：我的出售')
      }
    }
  }
</script>

<style scoped>
  .user-bill {
    width: 7.5rem;
    height: 1.2rem;
    display: flex;
  }

  .user-bill .user-buy {
    flex: 1;
    height: 100%;
    background-color: #337ab7;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-bill .user-sell {
    flex: 1;
    height: 100%;
    border-left: #fff 1px solid;
    background-color: #337ab7;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-bill p {
    color: #FFF;
    font-size: 0.28rem;
    height: 0.6rem;
    line-height: 0.75rem;
  }

  .user-bill .user-buy div {
    width: 0.6rem;
    height: 0.6rem;
    background: url("../../static/imgas/buy.png") center no-repeat;
    background-size: contain;
  }

  .user-bill .user-sell div {
    width: 0.6rem;
    height: 0.6rem;
    background: url("../../static/imgas/sell.png") center no-repeat;
    background-size: contain;
  }
</style>
