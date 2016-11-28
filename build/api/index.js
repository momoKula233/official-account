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
  appId: "wx818254b4c2b5bb7e",
  mchId: "1403540502",
  notifyUrl: "",
  pfx: fs.readFileSync("./opt/apiclient_cert.p12")
};



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

serverApi.post('/pay', async (req, res, next) => {
  const {openid, total} = req.body;
  const order = {
    body: 'Wizwork',
    attach: '会议室征用',
    out_trade_no: 'wizwork' + (new Date()),
    total_fee: total,
    spbill_create_ip: req.ip,
    openid,
    trade_type: 'JAAPI'
  }
  payment.getBrandWCPayRequestParams(order, function(err, payargs){
    if(err) console.log(err);
    res.json(payargs);
  });
})


// async function PayIneternal(pride) {
//   return await 
// }

export default serverApi;
