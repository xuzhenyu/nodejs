const http = require('http');
const urllib = require('url');
//先运行form.html
http.createServer(function(req,res){
    res.write(req.url);
    //console.log(req.url);
    var obj = urllib.parse(req.url,true);
    var url = obj.pathname;
    var get = obj.query;
    console.log(url,get);
    res.end();
}).listen(9091);