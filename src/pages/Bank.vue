<template>
  <div class="layout">
    <p>订单金额：XXXXXX</p>
    <p>卡号： XXXXXX</p>
    <flexbox class="buttons">
      <x-button type="primary" @click="pay">下一步</x-button>
    </flexbox>
    <toast :show.sync="show" type="cancel" :time="1000">支付失败</toast>
  </div>
</template>

<script>
import { XButton, Flexbox, Toast } from 'vux/src/components';
// import { Order } from '../data/order';

export default {
  components: {
    XButton,
    Flexbox,
    Toast,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    pay() {
      console.log(this.id, this.password);
      const success = false;
      if (!success) this.show = true;
      // Order.init();
      // if (success) this.$router.go({ name: 'finish' });
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
