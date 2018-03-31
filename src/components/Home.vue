<template>
  <div class="home">
    <div class="home-title">{{title}}</div>
    <UserData class="home-user-data"></UserData>
    <UserBill></UserBill>
    <div v-for="item in ItemData" @touchend="itemClick(item.title)">
      <HomeItem :itemObj="item" ></HomeItem>
    </div>
  </div>
</template>

<script>
  import UserData from './UserData.vue'
  import UserBill from './UserBill.vue'
  import HomeItem from './HomeItem.vue'

  export default {
    name: 'Home',
    components: {
      UserData,
      UserBill,
      HomeItem
    },
    data() {
      return {
        title: '我的',
        ItemData: [
          {title: '我的广告', srcUrl: '../../static/imgas/meiyuan.png', line: true, smollBorder: true, lagerBorder: false},
          {title: '受信任的', srcUrl: '../../static/imgas/baohu.png', line: false, smollBorder: false, lagerBorder: false},
          {title: '礼品中心', srcUrl: '../../static/imgas/lipin.png', line: true, smollBorder: true, lagerBorder: false},
          {title: '邀请好友', srcUrl: '../../static/imgas/haoyou.png', line: false, smollBorder: false, lagerBorder: false},
          {title: '设置', srcUrl: '../../static/imgas/shezhi.png', line: true, smollBorder: true, lagerBorder: false},
          {title: '建议反馈', srcUrl: '../../static/imgas/yijian.png', line: true, smollBorder: false, lagerBorder: false},
          {title: '关于我们', srcUrl: '../../static/imgas/guanyu.png', line: true, smollBorder: false, lagerBorder: false},
          {title: '客服中心', srcUrl: '../../static/imgas/kefu.png', line: true, smollBorder: false, lagerBorder: false},
          {title: '退出', srcUrl: '../../static/imgas/tuichu.png', line: false, smollBorder: false, lagerBorder: true}
        ]
      }
    },
    methods:{
      itemClick(title) {
        console.log('click')
        alert('您点击了：'+title);
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-user-data {
    margin-top: 1.04rem;
  }

  .home-title {
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
</style>
