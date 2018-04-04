<template>
  <div class="person">
    <div class="person-title">
      {{title}}
    </div>
    <div class="item-box">
      <SettingItem v-for="item in itemData":objectItem="item" :class="{havemargin:item.borderTop}"></SettingItem>
    </div>
  </div>
</template>

<script>
  import SettingItem from './SettingItem.vue'
  export default {
    name: 'Wallet',
    components:{
      SettingItem
    },
    data () {
      return {
        title: '设置',
        itemData:[
          {title:'实名认证',stateText:'未认证',borderTop:false},
          {title:'资金密码',stateText:'未设置',borderTop:false},
          {title:'绑定手机号',stateText:'已绑定',borderTop:true},
          {title:'绑定邮箱',stateText:'未绑定',borderTop:false},
          {title:'重置登录密码',stateText:'',borderTop:false},
          {title:'语言',stateText:'',borderTop:true},
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .person-title{
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
    z-index: 100;;
  }
  .item-box{
    width: 7.5rem;
    margin-top: 1.04rem;
  }
  .havemargin{
    border-top: solid 0.2rem #ececec;
  }
</style>
