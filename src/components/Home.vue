<template>
  <div class="home-layout">
    <div class="topbar"></div>
    <div class="map">
      <img src="../images/map.jpg" alt="地图">
    </div>
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
      <card @click="goToPage(item.id)" v-for="item in Location" v-show="showCard(item.id)">
        <img slot="header" :src="item.image" style="width:100%;display:block;">
        <div slot="content" class="card-content">
          <p class="location"><span>{{ item.name1 }}</span>{{ item.name2 }}</p>
          <p class="detail">{{ item.address }}</p>
        </div>
      </card>
    </div>
    <button class="order-btn">即刻预定</button>
    <div class="footer">
      <p>© 2016 Wizwork All Rights Reserved. Design by Yuki</p>
    </div>
  </div>
</template>

<script>
import { Card, XButton, Box, Selector } from 'vux/src/components';
import { Location, ALL_LOCATION, TypeOption, AreaOption, MembersOption } from '../data/location';


export default {
  components: {
    Card,
    XButton,
    Box,
    Selector,
  },
  data() {
    return {
      filter: ALL_LOCATION,
      Location,
      selected: 1,
      type: TypeOption,
      area: AreaOption,
      members: MembersOption,
      typeFilter: ALL_LOCATION,
      areaFilter: ALL_LOCATION,
      membersFilter: ALL_LOCATION,
    };
  },
  // computed: {
  //   showCard: (index) => {
  //     console.log(index);
  //     return true;
  //   },
  // },
  methods: {
    goToPage(index) {
      this.$router.go({ name: 'detail', params: { id: index } });
    },
    showCard(index) {
      /* eslint-disable max-len */
      if (this.filter.includes(index)) return true;
      return false;
    },
    onTypeChange(val) {
      if (val) {
        this.typeFilter = val;
      } else {
        this.typeFilter = ALL_LOCATION;
      }
      this.filterAll();
    },
    onAreaChange(val) {
      if (val) {
        this.areaFilter = val;
      } else {
        this.areaFilter = ALL_LOCATION;
      }
      this.filterAll();
    },
    onMembersChange(val) {
      if (val) {
        this.membersFilter = val;
      } else {
        this.membersFilter = ALL_LOCATION;
      }
      this.filterAll();
    },
    filterAll() {
      const newFilter = ALL_LOCATION.filter((id) => this.typeFilter.includes(id) && this.areaFilter.includes(id) && this.membersFilter.includes(id));
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
  border-color: red;
  border-width: 1px;
  height: 100%;
}
.topbar {
  height: 70px;
  background-color: #333;
}
.map img{
  width: 100%;
  display: block;
  vertical-align: top;
}
.action-bar {
  background-color: #333;
  text-align: center;
  padding-top: 12px;
}
.selector-item {
  width: 20%;
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
</style>
