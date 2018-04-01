<template>
  <div class="bill-data">
    <div class="bill-tab">
      <div class="bill-tab-title select">BTC</div>
      <div class="bill-tab-title">ETH</div>
      <div class="bill-tab-line" :style="{left:tagLineLeft+'px'}"></div>
    </div>
    <div class="data-box" @touchstart="TouchStart">
      <div class="data-left"></div>
      <div class="data-right"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BillData",
    data() {
      return {
        tagLineLeft: 0,
      }
    },
    methods: {
      TouchStart(ev) {
        var startX = ev.touches[0].clientX;
        var _this = this;
        var tagView = ev.currentTarget;
        var yLeft = tagView.offsetLeft;
        var tagWidth = tagView.offsetWidth / 2;
        document.ontouchmove = function (ev) {
          var oEvent = ev || event;
          var left = yLeft + oEvent.touches[0].clientX - startX;
          if (left > 0) {
            left = 0;
          }
          if (left < -tagWidth) {
            left = -tagWidth;
          }
          _this.move(left, tagView);
        };
        document.ontouchend = function (ev) {
          var oEvent = ev || event;
          var left = yLeft + oEvent.changedTouches[0].clientX - startX;
          console.log(oEvent.changedTouches[0].clientX - startX);
          if (left > -tagWidth / 2 && left < 0) {
            left = 0;
          } else if (left <= -tagWidth / 2 && left >= -tagWidth) {
            left = -tagWidth;
          }
          if (left > 0) {
            left = 0;
          }
          if (left < -tagWidth) {
            left = -tagWidth;
          }
          _this.move(left, tagView);
          document.ontouchmove = null;
          document.ontouchend = null;
        };
        //阻止浏览器默认行为，防止滑动冲突
        oEvent.preventDefault();
      },
      move(left, tagView) {
        this.tagLineLeft = -(left / 2)
        tagView.style.left = left + 'px';

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
    top: 2.04rem;
    left: 0px;
    display: flex;
  }

  .bill-data .data-left {
    width: 7.5rem;
    height: 3rem;
    background-color: brown;
  }

  .bill-data .data-right {
    width: 7.5rem;
    height: 3rem;
    background-color: #ff00ff;
  }
</style>
