import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Select from './pages/Select';
import Login from './pages/Login';
import Order from './pages/Order';
import MemberOrder from './pages/MemberOrder';
import Bank from './pages/Bank';
import Finish from './pages/Finish';


// plugins
import ToastPlugin from 'vux/src/plugins/toast';
import AlertPlugin from 'vux/src/plugins/alert';

const FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.use(VueRouter);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);

const router = new VueRouter({
  history: true,
  transitionOnLoad: false,
});

/**
* sync router params
*/
import { sync } from 'vuex-router-sync';
import store from './vuex/store';

const history = window.sessionStorage;
history.clear();
let historyCount = history.getItem('count') * 1 || 0;
history.setItem('/', 0);

/**
* sync router loading status
*/
const commit = store.commit || store.dispatch;
router.beforeEach(({ to, from, next }) => {
  const toIndex = history.getItem(to.path);
  const fromIndex = history.getItem(from.path);
  if (toIndex) {
    if (toIndex > fromIndex) {
      commit('UPDATE_DIRECTION', 'forward');
    } else {
      commit('UPDATE_DIRECTION', 'reverse');
    }
  } else {
    ++historyCount;
    history.setItem('count', historyCount);
    if (to.path !== '/') history.setItem(to.path, historyCount);
    commit('UPDATE_DIRECTION', 'forward');
  }
  commit('UPDATE_LOADING', true);
  setTimeout(next, 100);
});
router.afterEach(() => {
  commit('UPDATE_LOADING', false);
});

sync(store, router);

router.map({
  '/': {
    name: 'home',
    component: resolve => resolve(Home),
  },
  '/detail/:id': {
    name: 'detail',
    component: Detail,
  },
  '/select': {
    name: 'select',
    component: Select,
  },
  '/login': {
    name: 'login',
    component: Login,
  },
  '/order': {
    name: 'order',
    component: Order,
  },
  '/member_order': {
    name: 'member_order',
    component: MemberOrder,
  },
  '/bank': {
    name: 'bank',
    component: Bank,
  },
  '/finish': {
    name: 'finish',
    component: Finish,
  },
});

router.start(App, '#app');

