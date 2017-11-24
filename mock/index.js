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
    if(req.method === 'OPTIONS'){
        res.end();
    }else{
        next();
    }
});
app.use(session({
    resave:true,//每次请求借宿，都要重新保存不管修改没
    saveUninitialized:true,
    secret:"zfpx"//加密的秘钥
}));
function getBus(cb) {
    fs.readFile('./userList.json','utf8',function (err,data) {
        if(err || data.length === 0){ //如果文件不存在或者内容是空 传递空数组
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
    res.set('Content-Type', 'application/json');
    let username = req.params.name;
   let  product= req.body;
    //前端传递的商品对象
  //读取用户信息
    let userList=JSON.parse(fs.readFileSync("./userList.json","utf8"));
    // suerList 是一个数组
    let index=userList.findIndex((item)=>{return item.usertel==username});
    if(index>-1){
            //用户购物车是一个数组
            //如果 传入的 id 和  已有的id相同 数量加一，否则 不加
        userList[index].cartList.forEach((item) => {
                // 第一个问题就是为什么他们的值不相等？
            item.id == product.id ? ++item.number:item.number;
            //数组中 有这个id的 那么num+1
            //没有的  userList[index].cartList.push(product)  添加到数组里
            });
        let addcart=userList[index].cartList.some((item,index)=>{
           return item.id==product.id;
        });
        addcart? null:userList[index].cartList.push(product);
            //将获取的书和原有的拼在一起
           fs.writeFileSync("./userList.json",JSON.stringify(userList));

            res.send({code:0,message:"添加成功"});
        }else {
            res.send({code:1,message:"添加失败"})
        }
});


// delecte
//   购物车进行减法 &&  当数量为0 时 ，删除该商品
app.delete("/deleteBus/:name",function (req,res) {
    res.set('Content-Type', 'application/json');
    let username = req.params.name;
    let  product= req.body;
    //前端传递的商品对象
    //读取用户信息
    let userList=JSON.parse(fs.readFileSync("./userList.json","utf8"));
    // suerList 是一个数组
    let index=userList.findIndex((item)=>{return item.usertel==username});
    console.log(index);
    if(index>-1){
        //用户购物车是一个数组
        //如果 传入的 id 和  已有的id相同 数量加一，否则 不加
        userList[index].cartList.forEach((item) => {
            // 第一个问题就是为什么他们的值不相等？
            item.id == product.id?--item.number:item.number;
            //数组中 有这个id的 那么num-1,但是它的值不能为0，当等于0的时候删除该数组
            //没有的  userList[index].cartList.push(product)  添加到数组里
        });


        //过滤掉number=0的哪项
        userList[index].cartList= userList[index].cartList.filter((item)=>{
           return parseInt(item.number) > 0
        });

        //将获取的书和原有的拼在一起
        fs.writeFileSync("./userList.json",JSON.stringify(userList));

        res.send({code:0,message:"购物车删除成功"});
    }else {
        res.send({code:1,message:"添加失败不存在该用户"})
    }

});



//   删除购物车  该购物车为空

app.delete("./deleteB/:name",function (req,res) {
    res.set('Content-Type', 'application/json');
    let username = req.params.name;
    //前端传递的商品对象
    //读取用户信息
    let userList=JSON.parse(fs.readFileSync("./userList.json","utf8"));
    // suerList 是一个数组
    let index=userList.findIndex((item)=>{return item.usertel==username});
    if(index>-1){
        //用户购物车是一个数组
        //如果 传入的 id 和  已有的id相同 数量加一，否则 不加
        userList[index].cartList=[];
        //将获取的书和原有的拼在一起
        fs.writeFileSync("./userList.json",JSON.stringify(userList));
    }});


//购物车请求数据
//前端传递 参数 名字是  用户名
app.get("/getBus/:name",function (req,res) {
    let username=req.params.name;
    res.set('Content-Type','application/json');
    getBus(function (data) {

        let prouct=data.filter((item,index)=>{
            return   item.usertel === username;
        });
        res.end(JSON.stringify(prouct[0].cartList));
        // 购物车页面请求后，得到数据渲染
    });
});

//庄伟红
let commodity = require('./commodity');
app.get('/commodity',function (req,res) {
    /*let {offset,limit} = req.params;
     console.log(offset, limit);*/
    res.json(commodity);
});
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
    let oldUser = users.find(item => item.usertel === user.usertel);
    if (oldUser) {
        res.json({code: 1, message: '用户名重复'});
    } else {
        user.cartList=[];
        users.push(user);
        fs.writeFileSync("./userList.json",JSON.stringify(users));
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

app.get("/loginout",function (req,res) {

    //根据发送的用户名
    // 删除 这个用户下的 session
    req.session.user=null;
    res.json({code:0,message:"退出成功"});
});

app.post("/reset",function (req,res) {
    // 读取操作
    // 写操作
    // 给我 用户名，用户名的password 更改
    //  usertel  reset  passpord
    let user = req.body;
    let nm=user.usertel;
    let pw=user.password;

    let userList=fs.readFileSync("./userList.json","utf8");
    userList=JSON.parse(userList);
    let olduser=userList.find(item=>item.usertel===nm);
    if(olduser){
        userList.forEach((item,index)=>{
            if(item.usertel===nm){
                item.password=pw;
            }
        });
        fs.writeFileSync("./userList.json",JSON.stringify(userList));
        res.send({code:1,message:"修改完成",usertel:nm,password:pw});
    }else {
        res.send({code:0,message:"修改错误"});
    }
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
            while (i<6){
                let random= Math.round(Math.random()*(18-1)+1);
                searchProduct[i]=data[random];
                i++;
            }
            setTimeout(()=>{
                res.json({dataList:data,message:"很抱歉,没有找到"+string+"商品,为您推荐今日热卖商品",number:1})
            },1000)
        }else{
            setTimeout(()=>{
                res.json({dataList:searchProduct,number:0})
            },1000)

        }
    })
});


//悦悦这个接口提交数据
//  请求体为{order:[{}, {}, {}, {} ]}

// 提交后的数据 并且把cart的数量减一
app.post("/order/:name",function (req,res) {
    let order=req.body.order;
    let username = req.params.name;
    let userList=JSON.parse(fs.readFileSync("./userList.json","utf8"));
    // suerList 是一个数组
    let index=userList.findIndex((item)=>{return item.usertel==username});
    if(index>-1){
        //用户购物车是一个数组
        //如果 传入的 id 和  已有的id相同 数量加一，否则 不加
        userList[index].order=order;

        for (var i = 0; i < order.length; i++) {
            var id2 = order[i].id;

            for (var j = 0; j < userList[index].cartList.length; j++) {
                var id1 = userList[index].cartList[j].id;
                if(id1==id2){
                    userList[index].cartList[j].splice(j,1)
                }
            }
        }
        //购物车的写入


        // 提交 过来 的数据 改变 购物车的数据
        //  提交过来 id 为 1的 的 哪位就把 购物车 id 为 1的删掉
        // 提交过来id为2的也要删掉
        //
        fs.writeFileSync("./userList.json",JSON.stringify(userList));
        res.send({message:"提单提交成功",order:order})
}});


// 盈盈 订单请求数据
app.get("/order/:name",function (req,res) {
    let username = req.params.name;
    let userList=JSON.parse(fs.readFileSync("./userList.json","utf8"));
    // suerList 是一个数组
    let index=userList.findIndex((item)=>{return item.usertel==username});
    let order=userList[index].order;
    // 这个是个order是一个数组
    res.send({message:"地址提交成功",order:order});
});


// post接口，盈盈把地址和商品给我    放在待支付数的数组里      unpaid
// { chartList}

//  { order:[{},{},{},{},{},{}], receiver:gae, reverte:tel }


app.post("/address/:name",function (req,res) {
    let address=req.body;//传过来请求体
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    function generateMixed(n) {
        var res = "";
        for(var i = 0; i < n ; i ++) {
            var id = Math.ceil(Math.random()*35);
            res += chars[id];
        }
        return res;
    }
    address.serial=generateMixed(10)
    //10位订单标号
    address.time=new Date().toLocaleString( );
    // 订单日期
    let username = req.params.name;//用户名字
    let userList=JSON.parse(fs.readFileSync("./userList.json","utf8"));
    let index=userList.findIndex((item)=>{return item.usertel==username});
    userList[index].cartList=[];
    userList[index].unpaid=address;//未支付的要放在 userList里

    fs.writeFileSync("./userList.json",JSON.stringify(userList));
    res.send({message:"地址和商品",serial:address.serial});
}) ;



//全部  待支付  待发货  已发货 已完成
// post接口，地址给我  地址 和 订单 合并
// 传的对象在放入
app.all("*",function(req,res){
    res.send("404");
});
app.listen(3001);


