<template>
  <div class="layout">
    <group>
      <selector title="类型" placeholder="请选择" :options="type" @on-change="onTypeChange"></selector>
    </group>
    <group class="tip">
      <datetime :value.sync="date1" format="YYYY-MM-DD HH:mm" @on-change="onDate1Change" title="开始时间" :min-year=2016></datetime>
    </group>
    <group>
      <datetime :value.sync="date2" format="YYYY-MM-DD HH:mm" @on-change="onDate2Change" title="结束时间"></datetime>
    </group>
    <group>
      <selector title="地点" placeholder="请选择" :options="location" @on-change="onLocationChange"></selector>
    </group>
    <group>
      <p class="price">价格：{{ price }}元</p>
    </group>
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
import { Selector, XButton, Flexbox, FlexboxItem, Group, Datetime } from 'vux/src/components';
import { Type, Location } from '../data/select';
import { Order } from '../data/order';

export default {
  components: {
    Selector,
    XButton,
    Flexbox,
    FlexboxItem,
    Group,
    Datetime,
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
      date1: '',
      date2: '',
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
    onDate1Change(val) {
      console.log(val, this.date1, this.date2);
    },
    onDate2Change(val) {
      console.log(val, this.date1, this.date2);
      // this.price = 100;
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
  .tip {
    position: relative;
    margin-bottom: 20px;
  }
  .tip::after {
    content: "";
    /*(超出30分钟按1小时)*/
    position: absolute;
    right: 5%;
    font-size: 10px;
    color: #888;
  }
  .price {
    padding: 10px 15px;
  }
</style>
