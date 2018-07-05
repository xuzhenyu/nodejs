const http = require('http');
const fs = require('fs');
const querystrong = require('querystring');
const urllib = require('url');

var users={}; //{"blue":"1234","zhangsan":"2455"}

http.createServer(function(req,res){
    var str='';
    req.on('data',function(data){
        str+=data;
    })
    req.on('end',function(){
        var obj = urllib.parse(req.url,true);

        const url = obj.pathname;
        const get1 = obj.query;
        //const post = obj.querystrong.parse(str);
        //区分接口文件
        if(url=='/user'){
            switch(get1.act){
                case 'reg':
                //1.检查用户是否已经有了
                if(users[get1.user]){
                    res.write('{"ok":false,"msg":"此用户已存在"}');
                }else{
                //2.插入users
                    users[get1.user]=get1.pass;
                    res.write('{"ok":true,"msg":"注册成功！"}');
                }
                    break;
                case 'login':
                //1.检查用户是否存在
                if(users[get1.name] == null){
                    res.write('{"ok":false,"msg":"用户名不存在"}')
                //2.检查用户密码
                }else if(users[get1.user]!=get1.pass){
                    res.write('{"ok":false,"msg":"用户名或密码有误"}')
                }else{
                    res.write('{"ok":true,"msg":"登录成功！"}');
                }
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知的act"}');
            }
            res.end();
        }else{            
            //读取文件
            console.log(url);
            var filename = '../login_regin'+url;
            fs.readFile(filename,function(err,data){
                if(err){
                    res.write('404');
                }else{
                    res.write(data);
                }
                res.end();
            });        
        }
    })
}).listen(9092);