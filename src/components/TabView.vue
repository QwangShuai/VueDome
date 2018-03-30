<template>
  <div class="tab-view">
    <div class="tab-item" v-for="(item,position) in items" @touchend="itemClick(position)" :index="position">
      <div :class="[item.className,item.isClick ? item.dclassName : '']"></div>
      <p :class="{'is_click': item.isClick }">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabView',
    data() {
      return {
        items: [
          {name: '首页',isClick:1,className:'item0',dclassName:'item-click0',home:'1'},
          {name: '订单',isClick:0,className:'item1',dclassName:'item-click1',bill:'1'},
          {name: '钱包',isClick:0,className:'item2',dclassName:'item-click2',wallet:'1'},
          {name: '个人中心',isClick:0,className:'item3',dclassName:'item-click3',person:'1'}
          ]
      }
    },
    methods: {
      itemClick(position) {
        this.items.forEach(function (obj) {
          obj.isClick=0;
        });
        this.items[position].isClick=1;
        console.log(position)
        switch (position) {
          case 0:
            this.$router.push('/home');
            break;
          case 1:
            this.$router.push('/bill');
            break;
          case 2:
            this.$router.push('/wallet');
            break
          case 3:
            this.$router.push('/person');
            break;
        }
      }
    },
    mounted: function () {
      var route=this.$route.path;
      var tag=route.slice(1,route.length);
      this.items.forEach(function (obj) {
        obj.isClick = 0;
        if (obj[tag]) {
          obj.isClick = 1;
        }
      });
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tab-view {
    width: 7.5rem;
    height: 1.2rem;
    display: flex;
    border-top: solid #ccc 1px;
  }

  .tab-view .tab-item {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .tab-view .tab-item .item0 {
    width: 0.5rem;
    height: 0.5rem;
    background: url("../../static/imgas/home-n.png") center no-repeat;
    background-size: contain;
  }
  .tab-view .tab-item .item-click0{
    background: url("../../static/imgas/home-d.png") center no-repeat;
    background-size: contain;
  }

  .tab-view .tab-item .item1 {
    width: 0.5rem;
    height: 0.5rem;
    background: url("../../static/imgas/dingdan-n.png") center no-repeat;
    background-size: contain;
  }
  .tab-view .tab-item .item-click1{
    background: url("../../static/imgas/dingdan-d.png") center no-repeat;
    background-size: contain;
  }
  .tab-view .tab-item .item2 {
    width: 0.5rem;
    height: 0.5rem;
    background: url("../../static/imgas/qianbao-n.png") center no-repeat;
    background-size: contain;
  }
  .tab-view .tab-item .item-click2{
    background: url("../../static/imgas/qianbao-d.png") center no-repeat;
    background-size: contain;
  }
  .tab-view .tab-item .item3 {
    width: 0.5rem;
    height: 0.5rem;
    background: url("../../static/imgas/geren-n.png") center no-repeat;
    background-size: contain;
  }
  .tab-view .tab-item .item-click3{
    background: url("../../static/imgas/geren-d.png") center no-repeat;
    background-size: contain;
  }
  .tab-view .tab-item p {
    color: #7b7b7b;
    font-size: 0.28rem;
  }

  .tab-view .tab-item .is_click {
    color: red !important;
  }
</style>
