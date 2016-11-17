<template>
  <div class="layout">
    <group>
      <p class="padding">订单金额：{{ price }}元</p>
    </group>
    <group>
      <p class="padding">卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：{{ card }}</p>
    </group>
    <flexbox class="buttons">
      <x-button type="primary" @click="pay">下一步</x-button>
    </flexbox>
    <toast :show.sync="show" type="cancel" :time="1000">支付失败</toast>
  </div>
</template>

<script>
import { XButton, Flexbox, Group, Toast } from 'vux/src/components';
// import { Order } from '../data/order';

export default {
  components: {
    XButton,
    Flexbox,
    Toast,
    Group,
  },
  data() {
    return {
      show: false,
      price: 0,
      card: '',
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
