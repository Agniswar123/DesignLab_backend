var urlChk=function(req,res,next){
        console.log('The current Page is :', req.originalUrl);
        next()
}
module.exports=urlChk;
