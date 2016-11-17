<template>
  <div class="layout">
    <div class="container">
      <icon type="safe_success" class="icon_big"></icon>
      <h1>支付完成</h1>
    </div>
  </div>
</template>

<script>
import { Box, Icon } from 'vux/src/components';

export default {
  components: {
    Box,
    Icon,
  },
};
</script>

<style scoped>
  .layout {
    height: 100%;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .container {
    width: 200px;
    height: 190px;
    /*background-color: rgba(0,0,0,.5);*/
    border-radius: 10px;
    margin: 0 auto;
    position: relative;
    top: 30%;
    vertical-align: middle;
    overflow: hidden;
    padding-top: 20px;
  }
  h1 {
    color: #1FB922;
  }
</style>
