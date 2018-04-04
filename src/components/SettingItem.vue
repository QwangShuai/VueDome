<template>
  <div class="setting-item">
    <p class="item-title">{{objectItem.title}}</p>
    <p class="item-state">{{objectItem.stateText}}</p>
    <div class="arrow"></div>
  </div>
</template>
<script>
  export default {
    name: 'SettingItem',
    data() {
      return {
        title: '设置'
      }
    },
    props: {
      objectItem: {
        type: Object,
        required: true
      }
    },
  }
</script>
<style scoped>
  .setting-item {
    width: 7.5rem;
    height: 0.8rem;
    position: relative;
    background-color: white;
    margin-top: 1px;
  }

  .item-title {
    color: #333333;
    font-size: 0.28rem;
    position: absolute;
    left: 0.3rem;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .item-state{
    color: #333333;
    font-size: 0.28rem;
    position: absolute;
    right: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .arrow{
    width: 0.2rem;
    height: 0.2rem;
    border-right: solid #cccccc 1px;
    border-bottom: solid #cccccc 1px;
    position: absolute;
    right: 0.3rem;
    transform: rotate(-45deg);
    top: 0.3rem;
  }
</style>
