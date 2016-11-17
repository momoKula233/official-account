<template>
  <div class="topbar">
    <div class="logo"></div>
    <p class="topTxt"><span>Smart</span> Office，<span>Smart</span> Service</p>
  </div>
</template>

<style scoped>
  .topbar {
    height: 70px;
    background-color: #333;
    vertical-align: middle;
    line-height: 70px;
    text-align: center;
  }
  .logo {
    background: url("../images/logo.png") no-repeat;
    background-size: contain;
    width: 54px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
  }
  .topTxt {
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    color: #FFF;
  }
  .topTxt span {
    color: #3aa1a7;
  }
</style>
