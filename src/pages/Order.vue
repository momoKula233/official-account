<template>
  <div class="layout">
    <group>
      <x-input title="姓 名" type="text" placeholder="请输入" :value.sync="username" @on-change="inputName"></x-input>
    </group>
    <group>
      <x-input title="手 机" type="text" placeholder="请输入" :value.sync="mobile" @on-change="inputMobile"></x-input>
    </group>
    <group>
      <p class="padding">空间：{{ location }}</p>
    </group>
    <group>
      <p class="padding">使用时段：{{ date }}</p>
    </group>
    <group>
      <p class="padding">小计：{{ price }}元</p>
    </group>
    <flexbox class="buttons">
      <flexbox-item>
        <x-button type="warn" @click="byWechat">微信支付</x-button>
      </flexbox-item>
    </flexbox>
    <toast :show.sync="show" type="cancel" :time="1000">支付失败</toast>
  </div>
</template>

<script>
import { XButton, Flexbox, XInput, FlexboxItem, Toast, Group } from 'vux/src/components';
import wx from 'weixin-js-sdk';
// import { Order } from '../data/order';

export default {
  components: {
    XButton,
    Flexbox,
    XInput,
    FlexboxItem,
    Toast,
    Group,
  },
  data() {
    return {
      username: null,
      mobile: null,
      show: false,
      location: '',
      date: '',
      price: 0,
    };
  },
  created() {
    wx.config(localStorage.getItem('JSCONFIG'));
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
      // Order.init();
      if (success) this.$router.go({ name: 'bank' });
    },
    byWechat() {
      this.$http.post('/api/pay', {
        total: 0.01,
        openid: localStorage.getItem('OPEN_ID'),
      }).then(resp => {
        console.log(resp);
        wx.chooseWXPay(resp);
      });
      // const success = true;
      // Order.init();
      if (success) this.$router.go({ name: 'finish' });
    },
  },
};
</script>

<style scoped>
  .layout {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  .buttons {
    width: 90%;
    position: absolute;
    bottom: 20px;
    left: 5%;
  }
  .padding {
    padding: 10px 15px;
  }
</style>
