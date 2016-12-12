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
  notifyUrl: "https://api.wizwork.cn/api/test",
  pfx: fs.readFileSync("./opt/apiclient_cert.p12")
};
const payment = new Payment(initConfig)
serverApi.get('/test', (req, res) => {
  res.send('hahaha')
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
  console.log(total);
  const ip = req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"]
    || req.client.remoteAddress;
  const order = {
    body: 'Wizwork',
    attach: '会议室征用',
    out_trade_no: 'wizwork' + new Date().getTime(),
    total_fee: 0.1,
    spbill_create_ip: '127.0.0.1',
    openid,
    trade_type: 'JSAPI'
  }
  payment.getBrandWCPayRequestParams(order, function(err, payargs){
    if(err) return console.log(err);
    res.json(payargs);
  });
});

serverApi.post('/create_order', async (req, res, next) => {
  const { start, location, id, end } = req.body;
  const duration = end - start;
  const vaild = await checkPayment(start, end, location, type);
  if(!vaild) {
    res.send({success: false, invaild: true});
    next();
  }
  try {
    if (id) {
      const compResp = await db.run(`select * from 'company' where id = ${id} and rest_time > ?`, );
      if (compResp) {
        await db.run(`update 'company' set rest_time = rest_time - ?`, rest_time);
        res.send({ success: true, invaild: true });
      } else {
        res.send({success: false, err: 'invaild_rest_time'});
      }
      next();
      return;
    } else {
      res.send({ success: true, invaild: true });
    }
    
  } catch(err) {
    if (err) console.log(err);
    res.send({ success: false });
  }
});

serverApi.post('/pay_by_member', async (req, res, next) =>{
  try{
    const { id, start, end, location, type } = req.body.Order;
    const compResp = await db.get(`select * from 'company' where id = ${id} and rest_time > ?`, );
    if(compResp) {
      await db.run(`update 'company' set rest_time = rest_time - ?`, rest_time);
      res.send({ success: true, invaild: true });
    }
    else  {
      res.send({ success: true, invaild: false });
    }
  } catch(err) {
    console.log(err);
  }
})

serverApi.post('/check', async (req, res, next)=> {
  const { start, end, location, type } = req.body.Order;
  try {
    const resault = await db.get(`select * from 'order' where location = ${location} and type = ${type}
      and start < ? and end > ?`, start, start);
    console.log(resault);
    if (!resault) res.send({success: true});
    else res.send({success: false});
    next();
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
  name = name ? name : 'no member';
  try{
    await db.run(`INSERT INTO 'ORDER' VALUES (?, ?, ?, ?, ?, ?, ?)`,name, location, mobile, price, start, end, type);
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
