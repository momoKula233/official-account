<template>
  <div class="layout">
    <Topbar></Topbar>
    <img :src=`../../static/detail${$route.params.id}.jpg` class="topImg">
    <div class="title">
      <div class="icon-location"></div>
      <p class="name">Wizwork虹桥天地中心</p>
      <p class="address">闵行区绍虹路99号虹桥天地5号楼3楼</p>
    </div>
    <div class="description">
      <p class="des-title">项目描述</p>
      <div class="line"></div>
      <p class="des-detail">虹桥天地中心是Wizwork品牌展示厅及企业总部所在地，充满活力动感的甲A级办公环境。紧邻新天地，景观、配套齐备，工作休闲兼宜；该项目位于虹桥商务区中心区域，凭借这一独特的区位以及便捷的交通，企业可以最大限度的获取信息、调配资源、开拓市场，最大程度的降低企业成本。</p>
      <p class="des-detail des-tip">交通：地铁2、10号线虹桥火车站站（F出口）</p>
      <img :src=`../../static/detail${$route.params.id}-2.png` class="detailImg">
      <flexbox :gutter="0" class="box-bg">
        <flexbox-item>
          <div class="price right-line">
            <p><span>100</span>元/时</p>
            <p class="type">1-8人会议室</p>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="price right-line">
            <p><span>200</span>元/时</p>
            <p class="type">1-20人会议室</p>
          </div>
        </flexbox-item>
         <flexbox-item>
          <div class="price right-line">
            <p><span>500</span>元/时</p>
            <p class="type">20-50人会议室</p>
          </div>
        </flexbox-item>
         <flexbox-item>
          <div class="price right-line small-txt">
            <p><span>30</span>元/人/时</p>
            <p class="type">咖啡位（会员免费）</p>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="convenience">
      <p class="des-title">便利设施</p>
      <div class="line"></div>
      <img src="../images/convenience.png" class="convenienceImg">
    </div>
    <div class="tips">
      <p class="des-title">注意事项</p>
      <div class="line"></div>
      <div class="tip-detail">
        <i class="fa fa-check-circle"></i>
        <span>预订成功后将收到二维码，请提前至少10分钟到达中心向秘书出示确认信息</span>
      </div>
      <div class="tip-detail">
        <i class="fa fa-check-circle"></i>
        <span>会议开始前至少提前24小时免费取消</span>
      </div>
    </div>
    <button @click="goSelect" class="orderBtn">即刻预定</button>
  </div>
</template>

<script>
import { XButton, Flexbox, FlexboxItem } from 'vux/src/components';
import { Topbar } from '../components';
export default {
  components: {
    XButton,
    Flexbox,
    FlexboxItem,
    Topbar,
  },
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    goSelect() {
      this.$router.go({ name: 'select' });
    },
  },
};
</script>

<style scoped>
  @import "../assets/font-awesome/css/font-awesome.min.css";
  .layout {
    overflow-x: scroll;
    height: 100%;
  }
  .buttons {
    width: 90%;
    margin-left: 5%;
  }
  .topImg {
    width: 100%;
  }
  .title {
    text-align: center;
    background-color: #333;
    padding: 10px 0;
  }
  .icon-location {
    background: url('../images/location.png') no-repeat;
    background-size: contain;
    width: 21px;
    height: 25px;
    margin: 0 auto;
  }
  .name {
    font-size: 22px;
    color: #FFF;
  }
  .address {
    font-size: 10px;
    color: #FFF;
  }
  .description {
    background-color: #FFF;
    padding: 20px 0;
    text-align: center;
  }
  .convenience {
    background-color: #FFF;
    text-align: center;
    padding: 0 0 20px 0;
  }
  .tips {
    background-color: #FFF;
    text-align: center;
    padding: 0 0 20px 0;
  }
  .des-title {
    font-size: 15px;
    color: #333;
  }
  .line {
    background-color: #33979d;
    width: 30px;
    height: 1px;
    margin: 10px auto;
  }
  .des-detail {
    font-size: 13px;
    color: #999;
    text-align: left;
    padding: 0 25px;
  }
  .des-tip {
    color: #7A7A7A;
    margin-top: 10px;
  }
  .detailImg {
    width: 98%;
    display: block;
    vertical-align: top;
    margin: 12px auto;
  }
  .price {
    background-color: #3aa1a7;
    /*padding: 10px 0;*/
    text-align: center;
    color: #FFF;
    font-size: 14px;
  }
  .right-line {
    border-right-width: 2px;
    border-right-color: #4fabb0;
  }
  .price span {
    font-size: 28px;
    font-weight: bold;
  }
  .type {
    font-size: 10px;
  }
  .small-txt {
    font-size: 10px;
  }
  .box-bg {
    background-color: #3aa1a7;
  }
  .convenienceImg {
    width: 96%;
    display: block;
    vertical-align: top;
    margin: 0 auto;
  }
  .orderBtn {
    display: block;
    width: 100%;
    padding: 10px 0;
    color: #FFF;
    background-color: #3aa1a7;
    border: none;
    outline: none;
    font-size: 22px;
  }
  .orderBtn:hover {
    cursor: pointer;
    outline: none;
    border: none;
  }
  .tip-detail {
    text-align: left;
    font-size: 12px;
    padding: 0 5%;
  }
  .fa-check-circle {
    color: #3aa1a7;
  }
</style>
