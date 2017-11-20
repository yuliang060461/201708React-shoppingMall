let express = require('express');
let fs=require("fs");
let app = express();
app.get("/globalSelect",function (req,res) {
    res.set('Content-Type','application/json');
   fs.createReadStream("./globalSelect/globalSelect.json").pipe(res)
});
app.get("/multipointSupermarket",function (req,res) {
    res.set('Content-Type','application/json');
    fs.createReadStream("./multipointSupermarket/MultipointSupermarket.json").pipe(res)
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
