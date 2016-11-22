import express from 'express';
const db = require('sqlite');

const serverApi = express.Router();
serverApi.get('/wechat_api', (req, res) => {
  res.send({ wechat_api });
});

serverApi.get('test', (req, res) => {
  res.send('hahaha')
})

serverApi.get('/testapi', async (req, res, next) => {
  try {
    const company = await db.all('SELECT * FROM COMPANY');
    res.send({ company });
  } catch (err) {
    next(err);
  }
})

serverApi.post('/login', async (req, res, next) => {
  try{
    const {id, password} = req.body;
    console.log(id, `${password}`)
    let q = await db.get(`SELECT * FROM COMPANY WHERE id=${id} AND password = ${password}`);
    if (q) {
        res.send({ success: true, company: q })
    }else {
      res.send({ success: false });
    }
  }
  catch(err) {
    next(err);
  }
});

export default serverApi;