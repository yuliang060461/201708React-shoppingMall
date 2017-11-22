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
app.use(session({
    resave:true,//每次请求借宿，都要重新保存不管修改没
    saveUninitialized:true,
    secret:"zfpx"//加密的秘钥
}))
function getBus(cb) {
    fs.readFile('./userList.json','utf8',function (err,data) {
        if(err || data.length==0){ //如果文件不存在或者内容是空 传递空数组
            cb([]);
        }else{
            cb(JSON.parse(data));
        }
    })
}

function writeBus(data,cb) {
    fs.writeFile('./userList.json',JSON.stringify(data),cb);
}
//首页数据
app.get("/duodianchaoshi",function (req,res) {
    res.set('Content-Type','application/json');
   fs.createReadStream("./duodianchaoshi/duodianchaoshi.json").pipe(res)
});
//热门数据
app.get("/hotSale",function (req,res) {
    res.set('Content-Type','application/json');
    fs.createReadStream("./hotSale/hotSale.json").pipe(res)
});
//分类页数据
app.get("/worthBuy",function (req,res) {
    res.set('Content-Type','application/json');
    fs.createReadStream("./worthBuy/worthBuy.json").pipe(res)
});
//购买操作数据
// 传递请求体
//  传递 你点击的str
// 请求体 要携带 当前点击物品的  {  当前书的信息 }
app.post("/writeBus/:name",function (req,res) {
        res.set('Content-Type','application/json');
    let username=req.params.name;
    let str ="";
    req.on('data',function (chunk) {
        str+=chunk;
    });
    //
    req.on('end',function (req,res) {
        let product = JSON.parse(str); //前端传递的商品对象
        getBus(function (products) { //读取用户信息

          let userCart=products[username].cartList;//用户购物车

            //如果 传入的 id 和  已有的id相同 数量加一，否则 不加
           userCart.forEach((item,index)=>{
                item.id===product.id?userCart.push(product):item.number+1
            });

             //将获取的书和原有的拼在一起
            writeBus(products,function () { // 将书写入到json中成功后返回添加后的那一项
                res.end(JSON.stringify(product));
            })
        });
})});

//购物车请求数据
//前端传递 参数 名字是  用户名
app.get("/getBus/:name",function (req,res) {
    let username=req.params.name;
    console.log(username);
    res.set('Content-Type','application/json');
        getBus(function (data) {

            let prouct=data.filter((item,index)=>{
                return   item.usertel == username;
            });
            res.end(JSON.stringify(prouct[0].cartList));
            // 购物车页面请求后，得到数据渲染
        });
})


//登录态

let users=JSON.parse(fs.readFileSync("./userList.json","utf8"));
//获取 userList 数组
app.post('/login', function (req, res) {
    let user = req.body;
    //请求userlist
    let oldUser = users.find(item => item.usertel === user.usertel && item.password === user.password);
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
    // 注册后
    let user = req.body;
    //{mobile,password}
    let oldUser = users.find(item => item.usertel == user.usertel);
    if (oldUser) {
        res.json({code: 1, message: '用户名重复'});
    } else {
        users.push(user);
        fs.writeFileSync("./userList.json",users);
        //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
        res.json({code: 0, message: '用户注册成功'});
    }
});

app.post('/validate',function(req,res){
    if(req.session.user){//如果会话对象中有user的话，表示已登录
        res.json({code:0,user:req.session.user});
    }else{
        res.json({code:1});
    }
});

app.get("/loginout",function (req,res) {

    //根据发送的用户名
    // 删除 这个用户下的 session
    req.session.user=null;
     res.json({code:0,message:"退出成功"});
});

// 搜索 请求为 /search？str=“要输入的值”

app.get("/search",function (req,res) {
    res.set('Content-Type','application/json');
    let string=req.query.str;
    fs.readFile("./search/search.json","utf8",function (err,data) {
       data=JSON.parse(data);
        let searchProduct=data.filter(item=>{
        return  item.name.indexOf(string) !== -1
        });
        if(searchProduct.length ===0){
            let i=0;
            while (i<4){
                 let random= Math.round(Math.random()*(18-1)+1);
                searchProduct[i]=data[random];
                i++;
            }
            res.json({dataList:searchProduct,message:"很抱歉,没有找到"+string+"商品,为您推荐今日热卖商品",number:1})
        }else{
            res.json({dataList:searchProduct,number:0})
        }
    })
});


app.all("*",function(req,res){
    res.send("404");
});

app.listen(3000)


