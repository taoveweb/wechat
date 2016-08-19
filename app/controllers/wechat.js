var express = require('express'),
  router = express.Router(),
  crypto = require('crypto'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Conversation = mongoose.model('Conversation');
  var wechat = require('wechat');

module.exports = function (app) {
  app.use('/wechat/', router);
};

router.get('/hello', function (req, res, next) {
  User.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

const token = "f9ZDwSilaZxjdGxoTQru";
router.all('/verify', function (req, res, next) {

   console.log(req.body);
   const {signature,timestamp,nonce,echostr} = req.query;
    if(!signature || !timestamp || !nonce || !echostr){
	return res.send("invalid request");
    }
    const params = [token,timestamp,nonce];
    params.sort();
    const hash=crypto.createHash('sha1');
    const sign = hash.update(params.join('')).digest('hex');
    if(signature === sign){
      res.send(echostr);
    }else{
      res.send("invalid sing");
    }

});

var config = {
  token: 'f9ZDwSilaZxjdGxoTQru',
  appid: 'wxafed8a848cc36bd4',
  encodingAESKey: 'pSMguOgOCHMPoFbaPIEmqqcf7XxBfoudGfOAUxQAjAF'
};

const handleWechatRequest = wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  if (message.FromUserName === 'diaosi') {
    // 回复屌丝(普通回复)
    res.reply('hehe');
  } else if (message.FromUserName === 'text') {
    //你也可以这样回复text类型的信息
    res.reply({
      content: 'text object',
      type: 'text'
    });
  } else if (message.FromUserName === 'hehe') {
    // 回复一段音乐
    res.reply({
      type: "music",
      content: {
        title: "来段音乐吧",
        description: "一无所有",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3",
        thumbMediaId: "thisThumbMediaId"
      }
    });
  } else {
    // 回复高富帅(图文回复)
    res.reply([
      {
        title: '你来我家接我吧',
        description: '这是女神与高富帅之间的对话',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }
});
router.all("/conversation",handleWechatRequest);
//router.post("/conversation",handleWechatRequest);
