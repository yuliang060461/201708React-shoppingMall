let express=require('express');
let bodyParser=require('body-parser');
let seesion=require('express-session');
let getShopping=require('../mock/shoppingCart/shopping.json');
let app=express();
app.use(bodyParser.json());
app.use(seesion({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(function (req,res,next) {
    //允许的来源
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    //允许客户端请求的方法
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    //允许客户端发送的请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //允许客户端发送Cookie
    res.header('Access-Control-Allow-Credentials', "true");
    //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});
app.get('/shopping',function (req, res) {
  res.json(getShopping);
});












app.listen(3000);