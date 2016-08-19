// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ConversationSchema = new Schema({
  user: {type:Schema.ObjectId,ref:"User",required:"user是必填字段"},
  question: {type:String,required:"question是必填字段"},
  answer: {type:String,required:"question是必填字段"},
  createdAt: {type:Date,required:"openId 是必颂数"},
});

mongoose.model('Conversation', ConversationSchema);

