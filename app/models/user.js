// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  openId: {type:string,required:"openId 是必颂数"},
  createdAt: {type:Date,required:"openId 是必颂数"},
  conversationCount: {type:Number,default :0}
});

mongoose.model('User', UserSchema);

