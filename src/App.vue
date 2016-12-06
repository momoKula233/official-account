<template>
  <div id="app">
    <loading :show="isLoading" position="absolute"></loading>
    <router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view>
  </div>
</template>

<script>
import store from './vuex/store';
const commit = store.commit || store.dispatch;
import { Loading, ViewBox } from 'vux/src/components';

export default {
  ready() {
    commit('UPDATE_LOADING', true);
  },
  components: {
    Loading,
    ViewBox,
  },
  store,
  computed: {
    isLoading: () => store.state.isLoading,
    direction: () => store.state.direction,
  },
};
</script>

<style lang="less">
@import '~vux/src/styles/index';
@import '~vux/src/styles/reset';

html, body {
  height: 100%;
  width: 100%;
  font-family: 'HanHei SC', 'Microsoft Yahei', 'PingFang SC', 'Helvetica Neue', 'Helvetica',  'Arial', sans-serif;
	font-size: 12px;
	margin: 0;
}

#app {
  height: 100%;
}

body {
  background-color: #fbf9fe;
}

img {
  display: block;
  vertical-align: top;
}

#app .weui_btn_primary {
  background-color: #3aa1a7;
}

#app .weui_btn_warn {
  background-color: #f5c4c8;
}

/**
* vue-router transition
*/
.vux-pop-out-transition,
.vux-pop-in-transition {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  -webkit-backface-visibility: hidden;
}
.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter {
  animation-name: popInLeft;
  -webkit-animation-name: popInLeft;
}
.vux-pop-out-leave {
  animation-name: popOutRight;
  -webkit-animation-name: popOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: popInRight;
  -webkit-animation-name: popInRight;
}
.vux-pop-in-leave {
  animation-name: popOutLeft;
  -webkit-animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes popInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@-webkit-keyframes popOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
  }
  to {
    -webkit-transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes popInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}
@-webkit-keyframes popOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
  }
  to {
    -webkit-transform: translate3d(100%, 0, 0);
  }
}
</style>

