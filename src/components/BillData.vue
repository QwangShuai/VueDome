<template>
  <div class="bill-data">
    <div class="bill-tab">
      <div class="bill-tab-title" :class="{select:selectTabOne}" @click="tabClick(1)">BTC</div>
      <div class="bill-tab-title" :class="{select:selectTabTwo}" @click="tabClick(2)">ETH</div>
      <div class="bill-tab-line" :style="{left:tagLineLeft+'px'}"></div>
    </div>
    <div class="data-box" ref="dataBox" @touchstart="TouchStart">
      <div class="data-left">
        <div class="item-box" v-for="(item,index) in leftData" :class="{largebottom:index===leftData.length-1}">
          <div class="item-top">
            <div class="item-src">
              <div :style="{background: 'url('+item.srcUrl+') center',backgroundSize:'contain'}"></div>
            </div>
            <div class="item-data">
              <div>{{item.name}}<span>{{item.type}}</span></div>
              <p>{{item.userData}}</p>
              <p>{{item.creditAmount}}</p>
            </div>
          </div>
          <div class="item-bottom">
            <p>{{item.amount}}</p>
            <div @click="goBuy(item.name)">购买</div>
          </div>
        </div>
      </div>
      <div class="data-right">
        <div class="item-box" v-for="(item,index) in rightData" :class="{largebottom:index===rightData.length-1}">
          <div class="item-top">
            <div class="item-src">
              <div :style="{background: 'url('+item.srcUrl+') center',backgroundSize:'contain'}"></div>
            </div>
            <div class="item-data">
              <div>{{item.name}}<span>{{item.type}}</span></div>
              <p>{{item.userData}}</p>
              <p>{{item.creditAmount}}</p>
            </div>
          </div>
          <div class="item-bottom">
            <p>{{item.amount}}</p>
            <div @click="goBuy(item.name)">购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ss from '../../static/js/common.js'
  export default {
    name: "BillData",
    data() {
      return {
        tagLineLeft: 0,
        selectTabOne: true,
        selectTabTwo: false,
        leftData: [
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue0',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue2',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue3',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue4',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue5',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },

        ],
        rightData: [
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue6',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue7',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue8',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue9',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue10',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue11',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },
          {
            srcUrl: './static/imgas/deafult-head.jpg',
            name: 'Vue12',
            type: '银行转账',
            userData: '交易 174 | 好评 99% | 信任91%',
            creditAmount: '限额 5000-21000 CNY',
            amount: '46460.92 CNY'
          },

        ]
      }
    },
    mounted:function () {

    },
    methods: {
      TouchStart(ev) {
        var startX = ev.touches[0].clientX;
        var startY = ev.touches[0].clientY;
        var _this = this;
        var tagView = ev.currentTarget;
        var yLeft = tagView.offsetLeft;
        var tagWidth = tagView.offsetWidth / 2;
        var scrollTopTag = tagView.scrollTop;
        var isOne = 0;
        document.ontouchmove = function (ev) {
          var oEvent = ev || event;
          var left = yLeft + oEvent.touches[0].clientX - startX;
          var dx = oEvent.touches[0].clientX - startX;
          var dy = oEvent.touches[0].clientY - startY;
          if (isOne === 0) {
            if (Math.abs(dy) > Math.abs(dx)) {
              console.log('第一次上下滑动')
              isOne = 1;

            } else {
              console.log('第一次左右滑动')
              isOne = 2;
              if (left > 0) {
                left = 0;
              }
              if (left < -tagWidth) {
                left = -tagWidth;
              }
              _this.move(left, tagView);
              //阻止浏览器默认行为，防止滑动冲突
              ev.preventDefault();
            }
          } else {
            if (isOne === 1) {
              if (Math.abs(dx) > Math.abs(dy)) {
                ev.preventDefault();
              }
              console.log('第二次上下滑动')
            } else {
              console.log('第二次左右滑动')
              if (left > 0) {
                left = 0;
              }
              if (left < -tagWidth) {
                left = -tagWidth;
              }
              _this.move(left, tagView);
              //阻止浏览器默认行为，防止滑动冲突
              ev.preventDefault();
            }
          }
        };
        document.ontouchend = function (ev) {
          var oEvent = ev || event;
          isOne = 0;
          var left = yLeft + oEvent.changedTouches[0].clientX - startX;
          _this.selectTabOne = false;
          _this.selectTabTwo = false;
          if (left > -tagWidth / 2 && left < 0) {
            left = 0;
            _this.selectTabOne = true;
          } else if (left <= -tagWidth / 2 && left >= -tagWidth) {
            left = -tagWidth;
            _this.selectTabTwo = true;
          }
          if (left > 0) {
            left = 0;
            _this.selectTabOne = true;
          }
          if (left < -tagWidth) {
            left = -tagWidth;
            _this.selectTabTwo = true;
          }
          _this.move(left, tagView);
          document.ontouchmove = null;
          document.ontouchend = null;
        };

      },
      move(left, tagView) {
        this.tagLineLeft = -(left / 2)
        tagView.style.left = left + 'px';
        //tagView.firstChild.scrollTop=0;
      },
      goBuy(name) {
        alert(name);
      },
      tabClick(type) {
        if (type === 1) {
          this.move(0, this.$refs.dataBox);
          this.selectTabOne = true;
          this.selectTabTwo = false;
        } else {
          var tagWidth = this.$refs.dataBox.offsetWidth / 2;
          this.move(-tagWidth, this.$refs.dataBox);
          this.selectTabTwo = true;
          this.selectTabOne = false;
        }
      }
    }
  }
</script>

<style scoped>
  .bill-data {
    width: 7.5rem;
    overflow: hidden;
    height: 100%;
  }

  .bill-tab {
    width: 7.5rem;
    height: 1rem;
    display: flex;
    position: relative;
    background-color: #ffffff;
  }

  .bill-tab .bill-tab-title {
    flex: 1;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #666666;
    font-size: 0.28rem;
  }

  .bill-tab .bill-tab-line {
    border: none;
    width: 3.75rem;
    height: 1px;
    z-index: 100;
    background-color: #246fc0;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .bill-tab .select {
    color: #246fc0;
  }

  .bill-data .data-box {
    width: 15rem;
    position: absolute;
    height: 11.4rem;
    top: 2.04rem;
    left: 0px;
    display: flex;
    overflow: scroll;
  }

  .bill-data .data-left {
    width: 7.5rem;
    overflow: scroll;
    height: 11.4rem;
  }

  .largebottom {
    border-bottom: solid #ececec 1.4rem;
  }

  .bill-data .data-right {
    width: 7.5rem;
    height: 11.4rem;
    overflow: scroll;
  }

  .bill-data .item-box {
    width: 7.5rem;
    height: 3.0rem;
    background-color: #ffffff;
    border-top: solid #ececec 0.2rem;
  }

  .bill-data .item-box .item-top {
    width: 7.5rem;
    height: 1.5rem;
    background-color: #ffffff;
    display: flex;
  }

  .bill-data .item-box .item-bottom {
    width: 7.5rem;
    height: 1.5rem;
    background-color: #ffffff;
    position: relative;
  }

  .bill-data .item-box .item-bottom p {
    position: absolute;
    top: 0px;
    right: 0.3rem;
    color: #00c451;
    font-size: 0.36rem;
    font-weight: 600;
  }

  .bill-data .item-box .item-bottom div {
    width: 0.84rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    color: #1798f2;
    border: solid #1798f2 1px;
    border-radius: 0.1rem;
    font-size: 0.32rem;
    position: absolute;
    right: 0.3rem;
    bottom: 0.2rem;
  }

  .bill-data .item-box .item-top .item-src {
    width: 2.2rem;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .bill-data .item-box .item-top .item-src div {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }

  .bill-data .item-box .item-top .item-data {
    height: 100%;
    flex: 100;
    background-color: #ffffff;
    position: relative;
  }

  .bill-data .item-box .item-top .item-data p:last-of-type {
    color: #888888;
    font-size: 0.26rem;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  .bill-data .item-box .item-top .item-data p:first-of-type {
    color: #888888;
    font-size: 0.26rem;
    position: absolute;
    left: 0px;
    bottom: 0.4rem;
  }

  .bill-data .item-box .item-top .item-data div {
    color: #333333;
    font-size: 0.28rem;
    position: absolute;
    left: 0px;
    bottom: 0.8rem;
  }

  .bill-data .item-box .item-top .item-data div span {
    display: inline-block;
    background-color: #00c451;
    color: #ffffff;
    margin-left: 0.2rem;
    font-size: 0.32rem;
    padding: 0 0.1rem;
  }
</style>
