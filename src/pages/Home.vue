<template>
  <div class="home-layout">
    <Topbar></Topbar>
    <div class="map">
      <img src="../images/map.jpg" alt="地图">
    </div>
    <a href="###" @click='openmodal' class="customer-service"></a>
    <div class="action-bar">
      <p class="selector-title">会议室/咖啡位位置</p>
      <div class="selector-item before-txt">
        <selector placeholder="类型" :options="type" @on-change="onTypeChange"></selector>
      </div>
      <div class="selector-item">
        <selector placeholder="区域" :options="area" @on-change="onAreaChange"></selector>
      </div>
      <div class="selector-item">
        <selector placeholder="人数" :options="members" @on-change="onMembersChange"></selector>
      </div>
    </div>
    <div class="selections">
      <card v-for="item in Location | filterBy myFilter" @click="goToPage(item.id)" track-by="id">
        <img slot="header" :src="item.image" style="width:100%;display:block;">
        <div slot="content" class="card-content">
          <p class="location"><span>{{ item.name1 }}</span>{{ item.name2 }}</p>
          <p class="detail">{{ item.address }}</p>
        </div>
      </card>
    </div>
    <div class="empty-blank" v-if="filter.length == 0"></div>
    <button class="order-btn" @click="goSelect">即刻预定</button>
    <div class="footer">
      <p>© 2016 Wizwork All Rights Reserved. Design by Yuki</p>
    </div>
  </div>
</template>

<script>
import { Card, XButton, Box, Selector } from 'vux/src/components';
import { Location, ALL_LOCATION, TypeOption, AreaOption, MembersOption } from '../data/location';
import { store } from '../data/user';
import { Topbar } from '../components';
import { Order } from '../data/order';
 /* eslint-disable max-len */
export default {
  components: {
    Card,
    XButton,
    Box,
    Selector,
    Topbar,
  },
  data() {
    return {
      Location,
      selected: 1,
      type: TypeOption,
      area: AreaOption,
      members: MembersOption,
      filter: ALL_LOCATION,
      typeFilter: ALL_LOCATION,
      areaFilter: ALL_LOCATION,
      membersFilter: ALL_LOCATION,
    };
  },
  ready() {
    /* eslint-disable */
    const getURIParameter = (param, asArray) =>
      document.location.search.substring(1).split('&').reduce((p, c) => {
        const parts = c.split('=', 2).map(param => decodeURIComponent(param));
        if(parts.length === 0 || parts[0] != param) return (p instanceof Array) && !asArray ? null : p;
        return asArray ? p.concat(parts.concat(true)[1]) : parts.concat(true)[1];
      }, []);
    store.set('OPEN_ID', getURIParameter('openid'));
  },
  methods: {
    goToPage(index) {
      this.$router.go({ name: 'detail', params: { id: index } });
    },
    goSelect() {
      Order.init();
      this.$router.go({ name: 'select' });
    },
    showCard(index) {
      if (this.filter.includes(parseInt(index, 10))) return true;
      return false;
    },
    myFilter(element, i, list) {
      if (this.filter.includes(parseInt(element.id, 10))) return true;
      return false;
    },
    openmodal() {
      window.location.href = 'http://p.qiao.baidu.com/cps/chat?siteId=10215182&userId=22817740'
    },
    onTypeChange() {},
    onAreaChange(val) {
      switch (val) {
        case 'xuhui': this.areaFilter = [4, 3, 5]; break;
        case 'putuo': this.areaFilter = [6]; break;
        case 'minhang': this.areaFilter = [1, 2]; break;
        default: this.areaFilter = ALL_LOCATION;
      }
      this.filterAll();
    },
    onMembersChange(val) {
      switch (val) {
        case 'twenty': this.membersFilter = [1, 2, 3, 5, 6]; break;
        case 'fifty': this.membersFilter = [1]; break;
        default: this.membersFilter = ALL_LOCATION;
      }
      this.filterAll();
    },
    filterAll() {
      const newFilter = ALL_LOCATION.filter((id) => this.areaFilter.includes(id) && this.membersFilter.includes(id))
      this.filter = newFilter;
    },
  },
};
</script>

<style scoped>
/*.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}*/
.home-layout {
  background-color: #f4f4f4;
  overflow-x: scroll;
  min-height: 100%;
  position: relative;
}
.home-layout .weui_panel {
  background-color: transparent;
}
.home-layout .weui_panel:after {
  border-bottom: 0;
}
.map {
  position: relative;
}
.map img{
  width: 100%;
  display: block;
  vertical-align: top;
}
.customer-service {
  display: block;
  position: fixed;
  right: 15px;
  top: 160px;
  z-index: 2;
  width: 106px;
  height: 47px;
  background: url("../images/service.png") no-repeat;
  background-size: contain;
  outline: none;
}
.customer-service:hover {
  cursor: pointer;
  outline: none;
}
.action-bar {
  background-color: #333;
  text-align: center;
  padding-top: 12px;
}
.selector-item {
  width: 22%;
  height: 40px;
  background-color: #1b1b1b;
  display: inline-block;
  margin: 10px 10px 10px 0;
  position: relative;
  left: 20px;
}
.selector-title {
  font-size: 20px;
  color: #3aa1a7;
}
.selections {
  padding: 0 5%;
  margin: 10px 0 12px 0;
}
.before-txt::before {
  content: 'sort by';
  color: #FFF;
  font-size: 15px;
  position: absolute;
  top: 8px;
  left: -52px;
}
.card-content {
  text-align: center;
}
.location {
  font-size: 22px;
  color: #36393b;
}
.location span {
  color: #3aa1a7;
}
.detail {
  font-size: 10px;
  color: #36393b;
}
.order-btn {
  width: 200px;
  height: 60px;
  background-color: #3aa1a7;
  border: none;
  display: block;
  margin: 0 auto 90px auto;
  border-radius: 5px;
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  outline: none;
}
.order-btn:hover {
  cursor: pointer;
  outline: none;
}
.footer {
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
  background-color: #333;
  color: #FFF;
  font-size: 10px;
  padding-left: 3%;
  border-bottom: 4px solid #3aa1a7;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.hide {
  display: none;
}
.empty-blank {
  height: 50px;
}
</style>
