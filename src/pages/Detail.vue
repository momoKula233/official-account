<template>
  <div class="layout">
    <Topbar></Topbar>
    <img :src=`../../static/detail${$route.params.id}.jpg` class="topImg">
    <div class="title"></div>
    <flexbox class="buttons">
      <x-button type="primary" @click="goSelect">即刻预定</x-button>
    </flexbox>
  </div>
</template>

<script>
import { XButton, Flexbox, FlexboxItem } from 'vux/src/components';
import { Topbar } from '../components';
export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem,
    Topbar,
  },
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    goSelect() {
      this.$router.go({ name: 'select' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout {
    overflow-x: scroll;
    height: 100%;
  }
  h1 {
    color: #42b983;
  }
  .buttons {
    width: 90%;
    margin-left: 5%;
    position: absolute;
    bottom: 20px;
  }
  .topImg {
    width: 100%;
  }
</style>
