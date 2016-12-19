<template>
  <div class="layout">
    <div class="container">
      <icon type="safe_success" class="icon_big"></icon>
      <h1>支付完成</h1>
    </div>
    <div class="detail">
      <group>
        <p class="padding">场地：{{ location }}</p>
      </group>
      <group>
        <p class="padding">类型：{{ type }}</p>
      </group>
      <group>
        <p class="padding">{{ address }}</p>
      </group>
      <group>
        <p class="padding">预定时间：{{ date }}</p>
      </group>
      <p class="tip">( 请保存相关信息 )</p>
      <flexbox class="buttons">
        <x-button type="primary" @click="submit">回到首页</x-button>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Box, Icon, Group, XButton, Flexbox } from 'vux/src/components';
import { Order } from '../data/order';
import { Location, Type } from '../data/select';
import * as Detail from '../data/location';

export default {
  components: {
    Box,
    Icon,
    Group,
    XButton,
    Flexbox,
  },
  created() {
    this.$http.post('/api/finish', { Order });
  },
  data() {
    return {
      date: `${this.getDate(Order.start)} - ${this.getDate(Order.end)}`,
      location: Location.find(lc => lc.key === Order.location).value,
      type: Type.find(data => data.key === Order.type).value,
      address: Detail.Location.find(data => `${data.id}` === Order.location).address,
    };
  },
  methods: {
    getDate(date) {
      const ndate = new Date(date);
      const month = ndate.getMonth() ? ndate.getMonth() : 12;
      const minute = parseInt(ndate.getMinutes(), 10) === 0 ? '00' : ndate.getMinutes();
      return `${month}月${ndate.getDate()}日${ndate.getHours()}:${minute}`;
    },
    submit() {
      window.location.href = 'https://api.wizwork.cn/oauth';
    },
  },
};
</script>

<style scoped>
  .layout {
    height: 100%;
    text-align: center;
    overflow-y: scroll;
    position: relative;
  }
  .container {
    width: 200px;
    border-radius: 10px;
    margin: 20% auto 20px auto;
    vertical-align: middle;
    overflow: hidden;
  }
  h1 {
    color: #1FB922;
  }
  .detail {
    text-align: left;
  }
  .padding {
    padding: 10px 15px;
  }
  .tip {
    padding: 10px;
    font-size: 12px;
    color: #999;
  }
  .buttons {
    width: 90%;
    margin: 20px auto 0 auto;
  }
</style>
