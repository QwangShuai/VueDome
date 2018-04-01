<template>
  <div class="bill">
    <div class="bill-title">
    {{title}}
    </div>
    <BillData class="bill-data-b"></BillData>
  </div>
</template>

<script>
  import BillData from './BillData.vue'
  export default {
    name: 'Home',
    components:{
      BillData
    },
    data () {
      return {
        title: '我的订单'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bill{
    width: 7.5rem;
    height: 100%;
  }
  .bill-title {
    width: 7.5rem;
    height: 1.04rem;
    color: #FFFFFF;
    font-size: 0.36rem;
    text-align: center;
    line-height: 1.04rem;
    background-color: #1798f2;
    border-bottom: solid 1px #FFF;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
  }
  .bill-data-b{
    padding-top: 1.04rem;
    position: fixed;
    top: 0px;
    left: 0px;
  }
</style>
