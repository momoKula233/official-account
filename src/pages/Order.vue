<template>
  <div class="layout">
    <x-input title="姓 名" type="text" placeholder="请输入" :value.sync="username" @on-change="inputName"></x-input>
    <x-input title="手 机" type="text" placeholder="请输入" :value.sync="mobile" @on-change="inputMobile"></x-input>
    <flexbox class="buttons">
      <flexbox-item>
        <x-button type="primary" @click="byBank">银联支付</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn" @click="byWechat">微信支付</x-button>
      </flexbox-item>
    </flexbox>
    <toast :show.sync="show" type="cancel" :time="1000">支付失败</toast>
  </div>
</template>

<script>
import { XButton, Flexbox, XInput, FlexboxItem, Toast } from 'vux/src/components';
import { Order } from '../data/order';

export default {
  components: {
    XButton,
    Flexbox,
    XInput,
    FlexboxItem,
    Toast,
  },
  data() {
    return {
      username: null,
      mobile: null,
      show: false,
    };
  },
  methods: {
    inputName(val) {
      console.log(val);
    },
    inputMobile(val) {
      console.log(val);
    },
    byBank() {
      console.log(this.id, this.password);
      // const success = false;
      // if (!success) this.show = true;
      const success = true;
      Order.init();
      if (success) this.$router.go({ name: 'bank' });
    },
    byWechat() {
      console.log(this.id, this.password);
      const success = true;
      Order.init();
      if (success) this.$router.go({ name: 'finish' });
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
