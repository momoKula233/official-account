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
    <toast :show.sync="show" type="cancel" :time="1000">填写有误</toast>
  </div>
</template>

<script>
/* eslint-disable */
import { XButton, Flexbox, XInput, FlexboxItem, Toast, Group } from 'vux/src/components';
import wx from 'weixin-js-sdk';
import { Order } from '../data/order';
import { store } from '../data/user';
import { Location } from '../data/select';
// import {}

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
      username: '',
      mobile: '',
      show: false,
      location: Location.find(lc => lc.key === Order.location).value,
      price: Order.price,
      date: `${this.getDate(Order.start)} - ${this.getDate(Order.end)}`,
    };
  },
  created() {
    // wx.config(store.get('JSCONFIG'));
  },
  methods: {
    inputName(val) {
      Order.setName(val);
    },
    getDate(date) {
      const ndate = new Date(date);
      const month = ndate.getMonth() ? ndate.getMonth() : 12; 
      return `${month}月${ndate.getDate()}日${ndate.getHours()}点`
    },
    inputMobile(val) {
      Order.setMobile(val);
    },
    byWechat() {
      if(!this.username.length && !this.mobile.length) {
        this.$set('show', true);
        return;
      }
      // this.$router.go({ name: 'finish' });
      this.$http.post('/api/pay', {
        total: 0.01 * parseInt(Order.price),
        openid: store.get('OPEN_ID'),
      }).then(resp => {
        const resault = resp.json();
        /* eslint-disable */
        wx.chooseWXPay(
          Object.assign({}, resault, {success: resp => {
            this.$router.go({ name: 'finish' });
          }})
        );
      });
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
