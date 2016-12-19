import express from 'express';
const db = require('sqlite');
const fs = require('fs');

const WechatApi = require('wechat-api');
const serverApi = express.Router();
serverApi.get('/wechat_api', (req, res) => {
  res.send({ wechat_api });
});
const Payment = require('wechat-pay').Payment;
const initConfig = {
  partnerKey: "wizworkwizworkwizworkwizworkwizw",
  appId: "wx6323b528baa5d135",
  mchId: "1403540502",
  notifyUrl: "https://api.wizwork.cn/api/callback",
  pfx: fs.readFileSync("./opt/apiclient_cert.p12")
};
const payment = new Payment(initConfig)
serverApi.get('/callback', (req, res) => {
  res.send('ok');
})

serverApi.get('/jsconfig', (req, res) => {
  usl = {}
  req.send()
})

// serverApi.get('/testapi', async (req, res, next) => {
//   try {
//     const company = await db.all('SELECT * FROM COMPANY');
//     res.send({ company });
//   } catch (err) {
//     next(err);
//   }
// })

serverApi.post('/login', async (req, res, next) => {
  try{
    const {id, password} = req.body;
    let q = await db.get(`SELECT * FROM COMPANY WHERE id=${id} AND password = ${password}`);
    if (q && q.rest_time) {
        res.send({ success: true, type:'member', company: q })
    }else if(q && !q.rest_time){
      
      res.send({ success: true, type: 'pay' });
    }else {
      res.send({ success: false });
    }
  }
  catch(err) {
    next(err);
  }
});

serverApi.post('/pay_by_nomal', async (req, res, next) => {
  const {openid, total} = req.body;
  const ip = req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"]
    || req.client.remoteAddress;
  const order = {
    body: 'Wizwork',
    attach: '会议室征用',
    out_trade_no: 'wizwork' + new Date().getTime(),
    total_fee: total,
    spbill_create_ip: '127.0.0.1',
    openid,
    trade_type: 'JSAPI'
  }
  payment.getBrandWCPayRequestParams(order, function(err, payargs){
    if(err) return console.log(err);
    res.json(payargs);
  });
});

serverApi.post('/pay_by_member', async (req, res, next) =>{
  try{
    const { id, start, end, location, type, duration } = req.body.Order;
    console.log(id, start, end, location, type);
    const compResp = await db.get(`select * from 'company' where id = ${id} and rest_time > ?`, parseInt(duration, 10));
    console.log(compResp);
    if(compResp) {
      await db.run(`update 'company' set rest_time = rest_time - ?`, duration);
      res.send({ success: true, invaild: true });
    }
    else  {
      res.send({ success: true, invaild: false });
    }
  } catch(err) {
    console.log(err);
  }
})

serverApi.get('/order_list', async(req, res, next) => {
  try {
    const result = await db.all(`SELECT * FROM 'ORDER'`);
    res.send({success: true, result});
    next();
  }
  catch (e) {
    res.send({success: false});
  }
});

serverApi.post('/check', async (req, res, next)=> {
  const { start, end, location, type } = req.body.Order;
  try {
    const resault = await db.all(`SELECT * FROM 'ORDER' WHERE LOCATION = ? AND TYPE = ?
          AND START <= ? AND END >= ?`,location, type, start, start);
    switch (location) {
      case '3': case '2': case '5':
        if (resault.length >= 2) {
          res.send({ success: false });
          next();
          return;
        }
        resault.map(order => {
          if (order.type === '2') {
            res.send({ success: false });
            next();
            return;
          }
        });
        res.send({ success: true });
        next();
        break;
      case '1':
        if (resault.length > 3) {
          res.send({ success: false });
          next();
          return;
        }
        let holder = 0;
        resault.map(order => {
          if (order.type == '2') holder = holder + 2;
          else if (order.type == 1) holder = holder + 1;
        });
        if (holder > 4) {
          res.send({ success: false });
          next();
          return;
        }
        res.send({ success: true });
        next();
        break;
      case '4': case '6':
        if (type != '1' || resault.length) {
          res.send({ success: false });
          next();
          return;
        }
        res.send({ success: true });
        next();
    }
    // const resault = await db.all(`SELECT * FROM 'ORDER' WHERE LOCATION = ? AND TYPE = ?
    //   AND START <= ? AND END >= ?`,location, type, start, start);
    // if (!resault) res.send({success: true});
    // else res.send({success: false});
  }
  catch (err) {
    console.log(err);
    next();
  }
})

async function checkPayment({start, end, location, type}) {
  let canPay = false;
  try {
    resault = await db.run(`select * from 'order' where location = ${location} and type = ${type}
      and start < ? and end > ?`, start, start);
      canPay = true;
  }catch(err) {
    console.log(err);
  }
  return canPay;
}

serverApi.post('/finish', async (req, res, next) => {
  req.setEncoding('utf8');
  let { name, location, mobile, price, start, end, type } = req.body.Order;
  const duration = (end - start) / 3600000 
  name = name ? name : 'no member';
  try{
    await db.run(`INSERT INTO 'ORDER' VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,name, location, mobile, price, start, end, type, duration);
    res.send({success: true});
  } catch(err) {
    res.send({success: false});
    if (err) console.log(err);
  }
  next();
})


// async function PayIneternal(pride) {
//   return await 
// }

export default serverApi;
