const http = require('http');
const querystring = require('querystring');

//先运行form1.html
http.createServer(function(req,res){
    res.write(req.url);
    var str='';
    var i=0;
    req.on('data',function(data){
        console.log(`第${i++}次接收数据`);
        str+=data;
    });
    req.on('end',function(){  //end ---（数据全部到达只执行一次）
        var post1 = querystring.parse(str);
        console.log(post1);
    });
}).listen(9091);