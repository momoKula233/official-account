<template>
  <div class="layout">
    <Topbar></Topbar>
    <img src="../../static/detail1.jpg" class="topImg" v-if="$route.params.id == 1">
    <img src="../../static/detail2.jpg" class="topImg" v-if="$route.params.id == 2">
    <img src="../../static/detail3.jpg" class="topImg" v-if="$route.params.id == 3">
    <img src="../../static/detail4.jpg" class="topImg" v-if="$route.params.id == 4">
    <img src="../../static/detail5.jpg" class="topImg" v-if="$route.params.id == 5">
    <img src="../../static/detail6.jpg" class="topImg" v-if="$route.params.id == 6">
    <div class="title">
      <div class="icon-location"></div>
      <div v-if="$route.params.id == 1">
        <p class="name">Wizwork虹桥天地中心</p>
        <p class="address">闵行区绍虹路99号虹桥天地5号楼3楼</p>
      </div>
      <div v-if="$route.params.id == 2">
        <p class="name">Wizwork虹桥万科中心</p>
        <p class="address">闵行区申长路988弄虹桥万科中心1号楼2楼</p>
      </div>
      <div v-if="$route.params.id == 3">
        <p class="name">Wizwork嘉汇中心</p>
        <p class="address">徐汇区天钥桥路329号嘉汇国际广场B座2-5楼</p>
      </div>
      <div v-if="$route.params.id == 4">
        <p class="name">Wizwork中金国际中心</p>
        <p class="address">徐汇区漕溪北路333号中金国际广场B座21楼</p>
      </div>
      <div v-if="$route.params.id == 5">
        <p class="name">Wizwork越虹中心</p>
        <p class="address">徐汇区虹漕路88号越虹广场B座3楼/5楼</p>
      </div>
      <div v-if="$route.params.id == 6">
        <p class="name">Wizwork环球港中心</p>
        <p class="address">普陀区凯旋北路1188号环球港北楼8楼</p>
      </div>
    </div>
    <div class="description">
      <p class="des-title">项目描述</p>
      <div class="line"></div>
      <div v-if="$route.params.id == 1">
        <p class="des-detail">虹桥天地中心是Wizwork品牌展示厅及企业总部所在地，充满活力动感的甲A级办公环境。紧邻新天地，景观、配套齐备，工作休闲兼宜；该项目位于虹桥商务区中心区域，凭借这一独特的区位以及便捷的交通，企业可以最大限度的获取信息、调配资源、开拓市场，最大程度的降低企业成本。</p>
        <p class="des-detail des-tip">交通：地铁2、10号线虹桥火车站站（F出口）</p>
      </div>
      <div v-if="$route.params.id == 2">
        <p class="des-detail">虹桥万科是集办公、商业于一体的地标型写字楼项目，引入餐饮、文化、生活服务等能量补给型业态，全面为顾客提供放松身心、补充能量的工作场所；该项目位于虹桥商务区中心区域，凭借这一独特的区位以及便捷的交通，企业可以最大限度的获取信息、调配资源、开拓市场，最大程度的降低企业成本。</p>
        <p class="des-detail des-tip">交通：地铁2、10号线虹桥火车站站（E出口）</p>
      </div>
      <div v-if="$route.params.id == 3">
        <p class="des-detail">嘉汇国际广场位于徐家汇中心地段天钥桥路腾飞大厦旁，包含了办公、会务、休闲、娱乐、商业、居住等国际化酒店服务。 置身于徐家汇CBD，国际商务氛围浓厚，拥有不可再生的地段优势。Wizwork嘉汇中心房型方正，每间独立办公室均带有良好的自然采光，具有绿色阳光的办公氛围。</p>
        <p class="des-detail des-tip">交通：地铁3、4号线上海体育场站（4号口）</p>
      </div>
      <div v-if="$route.params.id == 4">
        <p class="des-detail">项目位于上海徐家汇核心商圈，毗邻使馆区，周边甲级商业大楼、高级百货商场和高星级酒店等林立，闹中取静。项目为地铁一号线站点上盖物业，按甲级标准建设内部设施和服务等各项内容。稀缺的地理位置和合理的空间布局,可满足各类企业人性化的需求,使其成为众多企业领袖精明睿智的首选。</p>
        <p class="des-detail des-tip">交通：地铁1、9、11号线徐家汇站（5号口）</p>
      </div>
      <div v-if="$route.params.id == 5">
        <p class="des-detail">H88越虹广场位于田林路、苍梧路，由两栋5A甲级写字楼组成。位于漕河泾商圈核心繁华地段，项目及周边为客户提供创意办公、商务、酒店、休闲、娱乐、专业市场、零售、文化服务等多种服务。Wizwork越虹中心主打休闲健康的办公方式，已入驻不少年轻时尚、朝气蓬勃的团队。</p>
        <p class="des-detail des-tip">交通：地铁9号线桂林路站（4号口），12号线虹漕路站（1号口）</p>
      </div>
      <div v-if="$route.params.id == 6">
        <p class="des-detail">上海环球港占据内环内稀缺地段，总面积达48万平方米的全球中心城区最大城市综合体，集购物中心、五星级酒店、超甲级办公于一体，区位优越、交通便捷，可快速到达虹桥交通枢纽、南京西路、淮海路等核心CBD，便捷联动城市商务版图，已成为占据上海，领航全球商业结合体的新地标。</p>
        <p class="des-detail des-tip">交通：地铁3、4、13号线金沙江路站（3号口）</p>
      </div>
      <img src="../../static/detail1-2.png" class="detailImg" v-if="$route.params.id == 1">
      <img src="../../static/detail2-2.png" class="detailImg" v-if="$route.params.id == 2">
      <img src="../../static/detail3-2.png" class="detailImg" v-if="$route.params.id == 3">
      <img src="../../static/detail4-2.png" class="detailImg" v-if="$route.params.id == 4">
      <img src="../../static/detail5-2.png" class="detailImg" v-if="$route.params.id == 5">
      <img src="../../static/detail6-2.png" class="detailImg" v-if="$route.params.id == 6">
      <flexbox :gutter="0" class="box-bg" v-if="$route.params.id == 1">
        <flexbox-item>
          <div class="price">
            <p><span>100</span>元/时</p>
            <p class="type">1-8人会议室</p>
            <div class="right-line"></div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="price">
            <p><span>200</span>元/时</p>
            <p class="type">8-20人会议室</p>
            <div class="right-line"></div>
          </div>
        </flexbox-item>
         <flexbox-item>
          <div class="price">
            <p><span>500</span>元/时</p>
            <p class="type">20-50人会议室</p>
            <div class="right-line"></div>
          </div>
        </flexbox-item>
         <flexbox-item>
          <div class="price small-txt">
            <p><span>30</span>元/人/时</p>
            <p class="type">咖啡位 (会员免费)</p>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" class="box-bg" v-if="$route.params.id == 2 || $route.params.id == 3 || $route.params.id == 5 || $route.params.id == 6">
        <flexbox-item>
          <div class="price">
            <p><span>100</span>元/时</p>
            <p class="type">1-8人会议室</p>
            <div class="right-line"></div>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="price">
            <p><span>200</span>元/时</p>
            <p class="type">8-20人会议室</p>
            <div class="right-line"></div>
          </div>
        </flexbox-item>
         <flexbox-item>
          <div class="price">
            <p><span>30</span>元/人/时</p>
            <p class="type">咖啡位 (会员免费)</p>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox :gutter="0" class="box-bg" v-if="$route.params.id == 4">
        <flexbox-item>
          <div class="price">
            <p><span>100</span>元/时</p>
            <p class="type">1-8人会议室</p>
            <div class="right-line"></div>
          </div>
        </flexbox-item>
         <flexbox-item>
          <div class="price">
            <p><span>30</span>元/人/时</p>
            <p class="type">咖啡位 (会员免费)</p>
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
    padding: 5px 0;
    text-align: center;
    color: #FFF;
    font-size: 14px;
    position: relative;
  }
  .right-line {
    /*border-right-width: 2px;
    border-right-color: #FFF;*/
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: rgba(255,255,255,.2);
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
