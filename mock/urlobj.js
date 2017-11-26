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



}).listen(8000);


//var ary1=[1,2,3,4,5,6,7,8,9,10];
var ary2=[4,6,8,9,10,12,14];
//并集
function bj(ary1,ary2) {
    //1.合并[...ary1, ...ary2]
    //2.去重new Set([...ary1, ...ary2])
    //3.变成数组 [...new Set([...ary1, ...ary2])]
    return [...new Set([...ary1, ...ary2])]
}
console.log(bj(ary1, ary2));

//交集 (相同的部分)
function jj(ary1,ary2) {
    return ary1.filter((item)=>{
        return ary2.includes(item)
    })
}
console.log(jj(ary1, ary2));

var s1=new Set([1,2,3,4,5]);
var s2=new Set([2,4,6]);
[...s1].filter((item)=>{
    return s2.has(item)
});

//差集
function cj(ary1,ary2) {
    return bj(ary1,ary2).filter((item)=>{
        return !jj(ary1,ary2).includes(item)
    })
}

