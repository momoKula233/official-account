<template>
  <div class="home-layout">
    <Topbar></Topbar>
    <div class="map">
      <img src="../images/map.jpg" alt="地图">
      <a href="#" class="customer-service"></a>
    </div>
    <div class="action-bar">
      <p class="selector-title">会议室/咖啡位位置</p>
      <div class="selector-item before-txt">
        <selector-center placeholder="类型" :options="type" @on-change="onTypeChange"></selector-center>
      </div>
      <div class="selector-item">
        <selector-center placeholder="区域" :options="area" @on-change="onAreaChange"></selector-center>
      </div>
      <div class="selector-item">
        <selector-center placeholder="人数" :options="members" @on-change="onMembersChange"></selector-center>
      </div>
    </div>
    <div class="selections">
      <card @click="goToPage(item.id)" v-for="item in Location" :style="{ display: showCard(item.id) }" >
        <img slot="header" :src="item.image" style="width:100%;display:block;">
        <div slot="content" class="card-content">
          <p class="location"><span>{{ item.name1 }}</span>{{ item.name2 }}</p>
          <p class="detail">{{ item.address }}</p>
        </div>
      </card>
    </div>
    <button class="order-btn" @click="goSelect">即刻预定</button>
    <div class="footer">
      <p>© 2016 Wizwork All Rights Reserved. Design by Yuki</p>
    </div>
  </div>
</template>

<script>
import { Card, XButton, Box, SelectorCenter } from 'vux/src/components';
import { Location, ALL_LOCATION, TypeOption, AreaOption, MembersOption } from '../data/location';
import { Topbar } from '../components';
 /* eslint-disable max-len */
export default {
  components: {
    Card,
    XButton,
    Box,
    SelectorCenter,
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
  // watch: {
  //   membersFilter: () => {
  //     const newFilter = ALL_LOCATION.filter((id) => this.typeFilter.includes(id) && this.areaFilter.includes(id) && this.membersFilter.includes(id));
  //     this.filter = newFilter;
  //     console.log(this.filter, newFilter);
  //   },
  // },
  methods: {
    goToPage(index) {
      this.$router.go({ name: 'detail', params: { id: index } });
    },
    goSelect() {
      localStorage.setItem('OPEN_ID', this.$route.query.openid);
      this.$router.go({ name: 'select' });
    },
    showCard(index) {
      // console.log(index, this.filter.includes(parseInt(index, 10)));
      if (this.filter.includes(parseInt(index, 10))) return 'block';
      return 'none';
    },
    onTypeChange(val) {
      if (Array.isArray(val)) this.typeFilter = val || ALL_LOCATION;
      this.filterAll();
    },
    onAreaChange(val) {
      if (Array.isArray(val)) this.areaFilter = val || ALL_LOCATION;
      this.filterAll();
    },
    onMembersChange(val) {
      if (Array.isArray(val)) this.membersFilter = val || ALL_LOCATION;
      this.filterAll();
    },
    filterAll() {
      const newFilter = ALL_LOCATION.filter((id) => this.typeFilter.includes(id) && this.areaFilter.includes(id) && this.membersFilter.includes(id));
      this.filter = newFilter;
      // this.Location = Location;
      // this.Location = this.Location.filter((item) => newFilter.includes(item.id));
      // this.$set('filter', newFilter);
      console.log(this.filter);
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
  height: 100%;
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
  position: absolute;
  right: 15px;
  bottom: 15px;
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
  margin: 0 auto 30px auto;
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
  height: 70px;
  line-height: 70px;
  vertical-align: middle;
  background-color: #333;
  color: #FFF;
  font-size: 10px;
  padding-left: 3%;
  border-bottom: 4px solid #3aa1a7;
}
.hide {
  display: none;
}
</style>
