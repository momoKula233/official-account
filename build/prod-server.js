require("babel-register");
const express = require('express');
const app = express();
const config = require('../config')
const proxyMiddleware = require('http-proxy-middleware')
const proxyTable = config.prod.proxyTable
const wechat = require('wechat');
const bodyParser = require('body-parser');
const path = require('path');
const WechatApi = require('wechat-api');
const WechatOauth = require('wechat-oauth');

const Promise = require('bluebird');
const db = require('sqlite');

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const swig = require('swig');

const [token, appid, EncodingAESKey, appsecret] =
      ['xjbtoken2333', 'wx818254b4c2b5bb7e', '49a35f5b9483e8f0011cf568b69c0d66', '49a35f5b9483e8f0011cf568b69c0d66'];
const api = new WechatApi(appid, appsecret);
const client = new WechatOauth(appid, appsecret);

let url;
app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());

app.set('views', 'dist/');
app.set('view engine', 'html');
app.set('view cache', false);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist'), {'extensions': ['html']}));
app.engine('html', swig.renderFile);
app.use(express.query());


const wechatConfig = {
  token,
  appid,
  EncodingAESKey,
}

// Error Handlers
if (app.get('env') === 'development') {
  // development error handler, will print stacktrace
  renderError(true);
} else {
  // production error handler, no stacktrace leaked to user
  renderError(false);
}
function renderError(sendErrorObj) {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: sendErrorObj ? err : {}
    });
  });
}





const serverApi = express.Router();
let wechat_api;

// app.use('/', (req, res, next) => {
//   //使用wechat-api获取JSconfig
//   var param = {
//     debug: true,
//     jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
//     url: 'http://srkfytl.gofriend.me/',
//   };
//   /*api.getTicket(function(err,result){ 
//           console.log(err); 
//           console.log(result); 
//   });*/
//   api.getJsConfig(param, function (err, result) {
//     if(err) {
//       console.log(err);
//     }
//     wechat_api = result;
//     next();
//   });
//   next();
// })

app.get('/', (req, res, next) => {
  url = client.getAuthorizeURL('http://srkfytl.gofriend.me/home', 'momo233', 'snsapi_userinfo');
  res.redirect(url);
});

app.get('/home', (req, res, next) => {
  console.log(req.query);
  res.render('home');
})

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
    let q = db.query("SELECT * FROM `company` WHERE `id`='" + id
      + "' AND `password`='" + password + "'");
    if (q) {
      console.log(q);
      console.log('success');
    }
  }
  catch(err) {
    next(err);
  }
});



// app.get('/')



app.use('/api', serverApi);



// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });



// app.use('/wechat_api', (req, res, next) => {
//   console.log(api);
//   res.send({ api, wechat, protypes:api.proptypes });
//   next();
// });

// Object.keys(proxyTable).forEach(function (context) {
//   var options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(context, options))
// })

const port = 5003;

Promise.resolve()
  // First, try connect to the database and update its schema to the latest version 
  .then(() => db.open('./database.db', { Promise }))
  .catch(err => console.error(err.stack))
  .finally(() => app.listen(port, (err) => { console.log("http oppened on " + port) }));
