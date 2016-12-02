<template>
  <div class="layout">
    <group>
      <x-input title="会员ID" type="text" placeholder="请输入" :value.sync="id" @on-change="inputId"></x-input>
    </group>
    <group>
      <x-input title="密&nbsp;码" type="password" placeholder="请输入" :value.sync="password" @on-change="inputPassword"></x-input>
    </group>
    <flexbox class="buttons">
     <x-button type="primary" @click="login">确认登录</x-button>
    </flexbox>
    <toast :show.sync="show" type="cancel" :time="1000">登陆失败</toast>
  </div>
</template>

<script>
import { XButton, Flexbox, Group, XInput, Toast } from 'vux/src/components';
import { store } from '../data/user';
export default {
  components: {
    XButton,
    Flexbox,
    XInput,
    Group,
    Toast,
  },
  data() {
    return {
      id: null,
      password: null,
    };
  },
  methods: {
    login() {
      const { id, password } = this;
      this.$http.post('/api/login', { id, password }).then(resp => {
        const resault = resp.json();
        console.log(resault);
        if (resault.success) {
          const { company } = resault;
          store.set('COMPANY', JSON.stringify(company));
          // localStorage.setItem('COMPANY', JSON.stringify(company));
          this.$router.go({ name: 'member_order' });
        } else {
          this.$set('show', true);
        }
      });
    },
    inputId(val) {
      console.log(val);
    },
    inputPassword(val) {
      console.log(val);
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
</style>
