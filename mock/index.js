let express = require('express');
let fs=require("fs");
let app = express();
var cookieParser=require("cookie-parser");
app.use(cookieParser());
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
    if (req.method == 'OPTIONS') {
        res.end('');
    } else {
        next();
    }
});

app.listen(3000);

app.get("/globalselect",function (req,res) {
    res.set('Content-Type','text/plain');
   fs.createReadStream("./globalselect/sliders.json").pipe(res)
});

let session=require("express-session");
// app.use(session({
//     resave:true,//每次请求借宿，都要重新保存不管修改没
//     saveUninitialized:true,
//     secret:"zfpx"//加密的秘钥
// }))


// 当使用cookieParse多了两个方法和属性
app.get("/index",function (req,res) {
    var visted=req.cookies.visited;
    if(visted){
            res.send("老朋友")
    }else{
        res.cookie("visited","1")
        res.send("新朋友")
    }

})



app.get("/duodianchaoshi",function (req,res) {
    res.set('Content-Type','application/json');
   fs.createReadStream("./duodianchaoshi/duodianchaoshi.json").pipe(res)
});

app.get("/hotSale",function (req,res) {
    res.set('Content-Type','application/json');
    fs.createReadStream("./hotSale/hotSale.json").pipe(res)
});
app.get("/worthBuy",function (req,res) {
    res.set('Content-Type','application/json');
    fs.createReadStream("./worthBuy/worthBuy.json").pipe(res)
});
app.listen(9000);
