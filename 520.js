/*const http=require('http');
http.createServer(function (req,res){
	res.writeHead(200,{'content-Type':'application\json'});
	res.write("{name:'Agni'}");
res.end();
}).listen(4500)
*/
var extra=require('./521');
console.log(extra(75,89));

var second=require('./521');
console.log(second(23,45));
