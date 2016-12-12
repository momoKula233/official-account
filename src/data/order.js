import { store } from './user';

class OrderData {
  constructor() {
    this.name = '';
    this.mobile = null;
    this.location = '';
    this.type = null;
    this.date = null;
    this.price = null;
    this.startTime = null;
    this.endTime = null;
    this.id = null;
    this.setName = this.setName.bind(this);
    this.setMobile = this.setMobile.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setType = this.setType.bind(this);
    // this.setDate = this.setDate.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.init = this.init.bind(this);
    this.setDateStart = this.setDateStart.bind(this);
    this.setDateEnd = this.setDateEnd.bind(this);
    this.setId = this.setId.bind(this);
    this.setRestTime = this.setRestTime.bind(this);
  }
  setName(name) {
    this.name = name;
  }
  setId(id) {
    this.id = id;
  }
  setMobile(mobile) {
    this.mobile = mobile;
  }
  setLocation(location) {
    this.location = location;
  }
  setDateStart(date) {
    this.start = date;
  }
  setDateEnd(date) {
    this.end = date;
  }
  setPrice(price) {
    this.price = price;
  }
  setType(type) {
    this.type = type;
  }
  setRestTime(time) {
    this.rest_time = time;
  }
  init() {
    this.name = '';
    this.mobile = null;
    this.location = '';
    this.date = null;
    this.price = null;
    this.type = null;
    store.set('COMPANY', '');
    this.rest_time = null;
    this.id = null;
    // localStorage.setItem('COMPANY', '');
  }
}

export const Order = new OrderData();
