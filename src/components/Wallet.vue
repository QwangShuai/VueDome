<template>
  <div class="wallet">
    <DemoInput @connect="getText"></DemoInput>
    {{msg}}
  </div>
</template>

<script>
  import DemoInput from './DemoInput.vue'
  export default {
    name: 'Wallet',
    components:{
      DemoInput,
    },
    data () {
      return {
        msg: ''
      }
    },
    methods:{
      getText(msg){
        this.msg=msg;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
