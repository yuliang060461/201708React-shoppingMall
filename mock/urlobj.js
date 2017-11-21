var htttp=require("http");

var querystring=require('querystring');
var fs=require("fs");

var cookieParser=require("cookie-parser");



var url=require("url");

htttp.createServer(function (req,res) {
    var {pathname,query}=url.parse(req.url,true);
    if(pathname=="/buy"){
        var ts=new Date(Date.now( )+20*10000).toGMTString();
//中的cookie 只能在 /buy下才发送
        res.setHeader("set-Cookie","goodsname"+Math.random()+"=zfpx2"+Math.random()+"; Expires="+ts`${"path=/buy1"}`);
        res.end("over")
    }else if(pathname=="/cart"){
        var cookie=req.headers.cookie;
        console.log(cookie);
        var cookieObj=querystring.parse(cookie,";");
        console.log(cookieObj);
        res.end(JSON.stringify(cookieObj))
    }



}).listen(8000)
