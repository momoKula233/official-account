<template>
  <div class="layout">
    <x-input title="会员ID" type="text" placeholder="请输入" :value.sync="password" :min="6" :max="6" @on-change="change"></x-input>
    <x-input title="密 码" type="text" placeholder="请输入" :equal-with="password"></x-input>
    <flexbox class="buttons">
     <x-button type="primary" @click="login">确认登录</x-button>
    </flexbox>
  </div>
</template>

<script>
import { XButton, Flexbox, XInput } from 'vux/src/components';
// import { Order } from '../data/order';

export default {
  components: {
    XButton,
    Flexbox,
    XInput,
  },
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password);
    },
    change(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
  .layout {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    position: relative;
  }
  .buttons {
    position: absolute;
    bottom: 20px;
  }
</style>
