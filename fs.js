const http = require("http");
const fs = require("fs");
http.createServer(function(req,res){
    res.write('8888');
    const filename = '../nodejs'+req.url;
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })
}).listen(9091);

// fs.readFile('111.txt',(err,data)=>{
//     if(err){
//         console.log("读取失败！");
//     }else{
//         console.log(data.toString());
//     }
// })
// fs.writeFile('222.txt','88888',err=>{
    
// })