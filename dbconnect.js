var express = require('express');
var myApp = express();
var mongoose = require('mongoose');
var mySchema = require('./schema');

mongoose.connect('mongodb+srv://agniswar:pBmnmbAtu5zjcyAX@cluster0.kg1bg.mongodb.net/mongoTraining?retryWrites=true&w=majority' ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mySchema.find({},function(err,datas){
	if(err) console.log(err)
	console.log(datas)
})
