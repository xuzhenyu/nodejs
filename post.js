const http = require('http');
const querystring = require('querystring');

http.createServer(function(req,res){
    res.write(req.url);
    var str='';
    var i=0;
    req.on('data',function(data){
        console.log(`第${i++}次接收数据`);
        str+=data;
    });
    req.on('end',function(){
        var post1 = querystring.parse(str);
        //console.log(post1);
    });
}).listen(9091);