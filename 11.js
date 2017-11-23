
/**
 * Created by zhaoyingying on 2017/11/22.
 */
app.post("/reset",function (req,res) {
    // 读取操作
    // 写操作
    // 给我 用户名，用户名的password 更改
    //  usertel  reset  passpord
    let user = req.body;
    let usertel=user.usertel;
    let password=user.password;


    getBus(function (data) {
        // 读取的对象
        data=JSON.parse(data);
        data.map((item)=>{
            if(item.usertel==usertel){
                return user;
            }else {
                return item;
            }
        })
        writeBus(data,function () {
            res.send({message:"用户账号密码更改成功"})
        })
        res.send({message:"此用户不存在"})
    })

})