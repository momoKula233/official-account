<template>
  <div class="layout">
    <x-input title="会员ID" type="text" placeholder="请输入" :value.sync="id" @on-change="inputId"></x-input>
    <x-input title="密 码" type="text" placeholder="请输入" :value.sync="password" @on-change="inputPassword"></x-input>
    <flexbox class="buttons">
     <x-button type="primary" @click="login">确认登录</x-button>
    </flexbox>
  </div>
</template>

<script>
import { XButton, Flexbox, XInput } from 'vux/src/components';

export default {
  components: {
    XButton,
    Flexbox,
    XInput,
  },
  data() {
    return {
      id: null,
      password: null,
    };
  },
  methods: {
    login() {
      console.log(this.id, this.password);
      const success = true;
      if (success) this.$router.go({ name: 'member_order' });
    },
    inputId(val) {
      console.log(val);
    },
    inputPassword(val) {
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
