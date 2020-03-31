var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库

var connect = mysql.createConnection(models.mysql);

router.get('/getform',function (req,res,next) {
    var sql=$sql.admin.getdata;
    var data=[];
    console.log("ok")
    connect.query(sql,function (err,result) {
        for(var i=0;i<result.length;i++){
            // console.log(result[i].orders);
            // console.log(result[i].username);
            // console.log(result[i].useraddress);
            // console.log(result[i].userproduct);
            // console.log(result[i].useramount);
            // console.log(result[i].productamout);
            // console.log(result[i].CreateTime.getFullYear());
            // console.log(result[i].CreateTime.getMonth()+1);
            // console.log(result[i].CreateTime.getDate());
            //Timestamp（时间轴）类型取得年月份的方法?获取月份和数据库的月份要+1（smjb）
            var getdate=String(result[i].CreateTime.getFullYear())+"-"+String(result[i].CreateTime.getMonth()+1)+"-"
                +String(result[i].CreateTime.getDate())+" "+String(result[i].CreateTime.getHours())+"::"+String(result[i].CreateTime.getMinutes())+"::"
                +String(result[i].CreateTime.getSeconds());
            var Renderdata=
                {
                    username: result[i].username,
                    useramount: result[i].useramount,
                    productamount: result[i].productamout,
                    userproduct:result[i].userproduct,
                    useraddress: result[i].useraddress,
                    ordernumber:result[i].orders,
                    orderdatast:result[i].status,
                    date:getdate,
                }
                console.log(Renderdata.username);
            ;
            data.push(Renderdata);

        }
        res.send(data);
    })

})
 router.get('/deleteForm',function (req,res,next) {
     var sql=$sql.admin.del;
     var orders=req.query.orders;
     var product=req.query.productname;
     // console.log(orders)
     // console.log(product)
     connect.query(sql,[orders,product],function (err,result) {
         res.send({msg:"ok"});

     })

 })
router.get('/editForm',function (req,res,next) {
    var sql=$sql.admin.edit;
    var orders=req.query.getFormorder;
    var product=req.query.getproduct;
    var client=req.query.getclient;
    var number=req.query.getnumber;
    var total=req.query.gettotal;
    var address=req.query.getaddress;
    var getorderstatus=req.query.getorderstatus;
    // console.log(orders)
    // console.log(product)
    connect.query(sql,[getorderstatus,client,address,total,orders,product],function (err,result) {
        res.send({msg:"ok"});

    })

})



module.exports=router;