export const Location = [
  {
    id: 1,
    name1: '虹桥商务区 · ',
    name2: '虹桥天地中心',
    image: '../../static/location1.jpg',
    address: '地址：闵行区绍虹路99号虹桥天地5号楼3楼',
  },
  {
    id: 2,
    name1: '虹桥商务区 · ',
    name2: '虹桥万科中心',
    image: '../../static/location2.jpg',
    address: '地址：闵行区申长路988号虹桥万科中心1号楼2楼',
  },
  {
    id: 3,
    name1: '徐家汇商圈 · ',
    name2: '嘉汇中心',
    image: '../../static/location3.jpg',
    address: '地址：徐汇区天钥桥路329号嘉汇国际广场B座3楼',
  },
  {
    id: 4,
    name1: '徐家汇商圈 · ',
    name2: '中金中心',
    image: '../../static/location4.jpg',
    address: '地址：徐汇区漕溪北路333号中金国际广场B座21楼',
  },
  {
    id: 5,
    name1: '漕河泾高新技术开发区 · ',
    name2: '越虹中心',
    image: '../../static/location5.jpg',
    address: '地址：徐汇区虹漕路88号越虹广场B座3楼',
  },
  {
    id: 6,
    name1: '普陀区 · ',
    name2: '环球港中心',
    image: '../../static/location6.jpg',
    address: '地址：普陀区凯旋北路1188号环球港北楼8楼',
  },
];

export const ALL_LOCATION = Array.from({ length: 6 }, (v, k) => k + 1);

export const TypeOption = [
  { key: ALL_LOCATION, value: '会议室' },
  { key: ALL_LOCATION, value: '咖啡位' },
];
export const AreaOption = [
  { key: [4, 3, 5], value: '徐汇' },
  { key: [6], value: '普陀' },
  { key: [1, 2], value: '闵行' },
];
export const MembersOption = [
  { key: ALL_LOCATION, value: '1-8人' },
  { key: [1, 2, 3, 5, 6], value: '8-20人' },
  { key: [1], value: '20-50人' },
];
