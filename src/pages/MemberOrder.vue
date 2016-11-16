<template>
  <div>
    <flexbox class="buttons">
      <x-button type="primary" @click="pay">确认扣除</x-button>
    </flexbox>
  </div>
</template>

<script>
import { XButton, Flexbox, FlexboxItem } from 'vux/src/components';
import { Order } from '../data/order';
export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem,
  },
  data() {
    return {
      msg: 'Hello',
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
  .buttons {
    width: 90%;
    margin-left: 5%;
    position: absolute;
    bottom: 20px;
  }
</style>
