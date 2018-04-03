<template>
  <div class="wallet">
    <input type="text" v-model="text" @input="setText">
  </div>
</template>

<script>
  export default {
    name: 'DemoInput',
    data () {
      return {
        text: 'username'
      }
    },
    methods:{
      setText(){
        this.$emit('connect',this.text);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
