//var express = require('express'),
//  router = express.Router(),
//  crypto = require('crypto'),
//  mongoose = require('mongoose'),
//  Article = mongoose.model('Article');
//
//module.exports = function (app) {
//  app.use('/wechat/', router);
//};
//
//router.get('/hello', function (req, res, next) {
//  Article.find(function (err, articles) {
//    if (err) return next(err);
//    res.render('index', {
//      title: 'Generator-Express MVC',
//      articles: articles
//    });
//  });
//});
//
//const token = "f9ZDwSilaZxjdGxoTQru";
//router.all('/verify', function (req, res, next) {
//
//   console.log(req.body);
//   const {signature,timestamp,nonce,echostr} = req.query;
//    if(!signature || !timestamp || !nonce || !echostr){
//	return res.send("invalid request");
//    }
//    const params = [token,timestamp,nonce];
//    params.sort();
//    const hash=crypto.createHash('sha1');
//    const sign = hash.update(params.join('')).digest('hex');
//    if(signature === sign){
//      res.send(echostr);
//    }else{
//      res.send("invalid sing");
//    }
//
//});
