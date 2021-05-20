const express=require('express');
var myApp=express();
var router=express.Router();

var url=require('./middleware');
	
//myApp.use(urlChk);
myApp.get('/',function(req,res){
	res.send('Hi Agni');
})
router.get('/signup',url,function(req,res){
	res.send('Login Page');
})
myApp.post('/post',function(req,res){
	res.send('Post Data');
})

myApp.use(router);
myApp.listen(4500);
