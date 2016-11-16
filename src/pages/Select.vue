<template>
  <div class="layout">
    <selector title="预约类型" placeholder="请选择" :options="type" @on-change="onTypeChange"></selector>
    <br><br><br>
    <p>选择时间</p><br><br><br>
    <selector title="地点" placeholder="请选择" :options="location" @on-change="onLocationChange"></selector>
    <br><br><br>
    <p>自动计算价格</p><br><br><br>
    <flexbox class="buttons">
      <flexbox-item>
        <x-button type="primary" @click="comfirm">现在支付</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="warn" @click="login">我是会员</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Selector, XButton, Flexbox, FlexboxItem } from 'vux/src/components';
import { Type, Location } from '../data/select';
import { Order } from '../data/order';

export default {
  components: {
    Selector,
    XButton,
    Flexbox,
    FlexboxItem,
  },
  ready() {
    Order.init();
  },
  data() {
    return {
      type: Type,
      location: Location,
      selectedType: 0,
      selectedLocation: 0,
      price: 0,
      time: 0,
    };
  },
  methods: {
    login() {
      Order.init();
      this.$router.go({ name: 'login' });
    },
    comfirm() {
      const isVaild = this.selectedType !== 0 && this.selectedLocation !== 0;
      if (isVaild) this.$router.go({ name: 'order' });
    },
    onTypeChange(val) {
      console.log(val);
      this.selectedType = val;
      Order.setType(val);
    },
    onLocationChange(val) {
      console.log(val);
      this.selectedLocation = val;
      Order.setLocation(val);
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
