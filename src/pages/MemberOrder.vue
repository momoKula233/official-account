<template>
  <div class="layout">
    <group>
      <p class="padding">剩余可用时间：{{ total }}小时</p>
    </group>
    <group>
      <p class="padding">空间：{{ location }}</p>
    </group>
    <group>
      <p class="padding">使用时段：{{ date }}</p>
    </group>
    <group>
      <p class="padding">小计：{{ count }}小时</p>
    </group>
    <flexbox class="buttons">
      <x-button type="primary" @click="pay">确认扣除</x-button>
    </flexbox>
  </div>
</template>

<script>
import { XButton, Group, Flexbox, FlexboxItem } from 'vux/src/components';
import { Order } from '../data/order';
export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem,
    Group,
  },
  data() {
    return {
      total: 0,
      location: '',
      date: '',
      count: 0,
    };
  },
  methods: {
    pay() {
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
