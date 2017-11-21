let express = require('express');
let fs=require("fs");
let app = express();

app.use(function(req,res,next){
    //允许的来源
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    //允许客户端请求的方法
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    //允许客户端发送的请求头
    res.header('Access-Control-Allow-Headers','Content-Type');
    //允许客户端发送Cookie
    res.header('Access-Control-Allow-Credentials',"true");
    //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.listen(3000);

app.get("/globalselect",function (req,res) {
    res.set('Content-Type','text/plain');
   fs.createReadStream("./globalselect/sliders.json").pipe(res)
});




// function read(cb) {
//     fs.readFile('./globalselect/sliders.json','utf8',function (err,data) {
//         if(err || data.length==0){ //如果文件不存在或者内容是空 传递空数组
//             cb([]);
//         }else{
//             cb(JSON.parse(data));
//         }
//     })
// }
// function write(data,cb) {
//     fs.writeFile('./globalselect/sliders.json',JSON.stringify(data),cb);
// }