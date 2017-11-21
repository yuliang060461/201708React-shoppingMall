let express = require('express');
let app = express();


//cookie插件
let cookieParser=require("cookie-parser");
app.use(cookieParser( ));

//session中间件
let session = require('express-session');
//boydParser中间件
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



let fs=require("fs");


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
    if(req.method == 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.listen(3000);

// app.get("/globalselect",function (req,res) {
//     res.set('Content-Type','text/plain');
//    fs.createReadStream("./globalselect/globalselect.json").pipe(res)
// });


app.use(session({
    resave:true,//每次请求借宿，都要重新保存不管修改没
    saveUninitialized:true,
    secret:"zfpx"//加密的秘钥
}))




function getBus(cb) {
    fs.readFile('./bus/bus.json','utf8',function (err,data) {
        if(err || data.length==0){ //如果文件不存在或者内容是空 传递空数组
            cb([]);
        }else{
            cb(JSON.parse(data));
        }
    })
}
function writeBus(data,cb) {
    fs.writeFile('./bus/bus.json',JSON.stringify(data),cb);
}



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



app.post("/writeBus",function (req,res) {

    let str ="";
    req.on('data',function (chunk) {
        str+=chunk;
    });
    req.on('end',function () {
        let product = JSON.parse(str); //前端传递的书
        // ....
        getBus(function (products) { //读取所有书
            product.id = products.length?products[products.length-1].id+1:1;//增加id属性
            products.push(book); //将获取的书和原有的拼在一起
            writeBus(products,function () { // 将书写入到json中成功后返回添加后的那一项
                res.end(JSON.stringify(product));
            })
        });
    

})}
    );


app.get("/getBus",function (req,res) {
// 查询所有
        getBus(function (data) {
            res.end(JSON.stringify(data));
        });

    
});



let users = require("./userList");
console.log(users);


app.post('/login', function (req, res) {
    let user = req.body;
    let oldUser = users.find(item => item.usertel == user.mobile && item.password == user.password);
    if(oldUser){
        req.session.user = user;//把用户写入会话对象中
        res.json({code:0,message:'登录成功!',user});
    }else{
        res.json({code:1,message:'登录失败!'});
    }
});


// 当使用cookieParse多了两个方法和属性
// app.get("/index",function (req,res) {
//     var visted=req.cookies.visited;
//     if(visted){
//         res.send("老朋友")
//     }else{
//         res.cookie("visited","1")
//         res.send("新朋友")
//     }
//
// });

app.post('/register', function (req, res) {
    let user = req.body;//{mobile,password}
    let oldUser = users.find(item => item.usertel == user.usertel);
    if (oldUser) {
        res.json({code: 1, message: '用户名重复'});
    } else {
        users.push(user);
        //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
        res.json({code: 0, message: '用户注册成功'});
    }
});

app.get('/validate',function(req,res){
    if(req.session.user){//如果会话对象中有user的话，表示已登录
        res.json({code:0,user:req.session.user});
    }else{
        res.json({code:1});
    }
});


app.listen(9000);

