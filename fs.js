const http = require("http");
const fs = require("fs");
http.createServer(function(req,res){
    // res.write('8888');
    // const filename = '../nodejs'+req.url;
    // fs.readFile(filename,(err,data)=>{
    //     if(err){
    //         res.write('404');
    //     }else{
    //         res.write(data);
    //     }
    //     res.end();
    // })

    if(req.url === '/'){
        const html = fs.readFileSync('form.html','utf8')
        res.writeHead(200,{
            'Content-Type':'text/html',
            'Set-Cookie':['id=123;max-age=2','abc=456']
        })
        res.end(html);
    }

}).listen(9090);

// fs.readFile('111.txt',(err,data)=>{
//     if(err){
//         console.log("读取失败！");
//     }else{
//         console.log(data.toString());
//     }
// })
// fs.writeFile('222.txt','88888',err=>{
    
// })