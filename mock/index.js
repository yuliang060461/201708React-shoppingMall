let express = require('express');
let fs=require("fs")
let app = express();



app.get("/globalselect",function (req,res) {
    res.set('Content-Type','text/plain');
   fs.createReadStream("./globalselect/sliders.json").pipe(res)
})

app.listen(8080);


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