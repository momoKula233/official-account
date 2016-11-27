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
const Payment = require('wechat-pay');

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

let wechat_api;

app.use('/wechat', (req, res, next) => {
  //使用wechat-api获取JSconfig
  var param = {
    debug: true,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
    url: 'https://api.wizwork.cn',
  };
  api.getJsConfig(param, function (err, result) {
    if(err) {
      console.log(err);
    }
    wechat_api = result;
    next();
  });
  next();
})

app.get('/oauth, (req, res, next) => {
  url = client.getAuthorizeURL('https://api.wizwork.cn/select', 'momo233', 'snsapi_base');
  res.redirect(url);
});

app.get('/home', (req, res, next) => {
  res.render('home');
})

app.use('/api', serverApi);

const port = 5003;

Promise.resolve()
  // First, try connect to the database and update its schema to the latest version 
  .then(() => db.open('./database.db', { Promise }))
  .catch(err => console.error(err.stack))
  .finally(() => app.listen(port, (err) => { console.log("http oppened on " + port) }));
