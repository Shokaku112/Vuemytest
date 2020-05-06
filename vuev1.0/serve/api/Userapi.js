

var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
// 连接数据库

var conn = mysql.createConnection(models.mysql);

 conn.connect(function (err) {
  if (err) {
    console.log(err);
  }
  else console.log("success!")
 });
//add: 'insert into account values (null,"ass","sd231212")'
// conn.query("insert into account values(null,'mysql','12345678')");

// router.get('/server/login', function (req, res, next) {
//     try {
//         var username = req.query.userName;
//         var userPassword = req.query.userPassword;
//
//         var returnData = {
//             msg: '',
//             statusCode: -1,
//             data: {}
//         };
//         // var fakeuser={
//         //     name:"Chen-xy",
//         //     age:"22",
//         //     address:"bj"
//         // }
//         console.log("inputUser：" + username)
//         console.log("inputPwd:" + userPassword)
//         connection.query("select * from useraccount where 用户='" + username + "' and 密码='" + userPassword + "'", function (error, results, fields) {
//             var userExist = false;
//             var pwdCorrect = false;
//             if (error) throw error;
//             console.log('密码 ', results);
//             console.log('len: ', results.length);
//
//             if (results.length == 1) {
//
//                 returnData.data = results[0];
//                 returnData.statusCode = 1;
//                 userExist = true;
//                 var user = results[0];
//
//                 req.session.user = user;
//
//                 console.log("找到用户名:data:", JSON.stringify(req.session.user));
//             } else console.log("pwd error!");
//
//
//             res.send(returnData);
//             // res.render('index', results);
//         });
//
//
//     } catch (e) {
//         res.send(e)
//     }
//
// });
// 增加用户接口

// router.get('/server/login', function (req, res, next)
router.get('/add',function (req,res,next) {
    var sql = $sql.user.add;
    var username=req.query.username;
    var userpwd=req.query.userpwd;
    var data=
        {
            statusCode:1
        }
    console.log("账号:"+username)
    console.log("密码:"+userpwd)
    conn.query(sql, [username, userpwd], function (err, result) {
        if (err) {
            console.log(err);
            data.statusCode=-1
            res.send(JSON.stringify(data))
        }
        else{
            data.statusCode=1
            console.log("done");
        }
        // if (result) {
        //     jsonWrite(res, result);
        // }
    })


})

router.get('/login',function (req,res,next) {
    var sqlimg=$sql.user.getimg;
    var sql = $sql.user.checkuser;
    var username=req.query.username;

    var userpwd=req.query.userpwd;
    var pathh="assets/image/icon1.jpg";
    console.log("JSONpathh"+JSON.stringify(pathh));
    console.log("pathh:"+pathh)
    var returnData={
        status:-1,
        username:username,
        path:pathh,
        data:["我好难呀"]
    }


    // console.log("2path"+returnData.path)
    console.log("1pathh: "+returnData.path)
    req.session.username=username;
    req.session.userpassword=userpwd;
    console.log("账号:"+username)
    console.log("密码:"+userpwd)
    conn.query(sql, [username, userpwd], function (err, result) {
        if(result.length==1)
        {
            console.log("找到用户！")
            console.log("找到用户名:data:", req.session);
            if(result[0].username==="admin"){
                console.log(result[0].username)
                returnData.status=2;
            }
           else{returnData.status=1;}
            conn.query(sqlimg,[username,userpwd],function (err,result) {
                if(err){
                    console.log(err);
                    return;
                }
                else{

                    // result[0].imgpath=JSON.stringify(result[0].imgpath).toString();
                    if(result[0].imgpath==null){
                        res.send(returnData)
                    }
                    else{
                        pathh=result[0].imgpath;
                        returnData.path=pathh;
                        console.log("2pathh: "+returnData.path)
                        console.log(returnData)
                        res.send(returnData)
                    }


                }


            })


        }
        else
        {
            res.send(returnData)
            console.log("user not found or password error")
        }
        if (err) {
            console.log(err);
        }


    })


})
router.get('/search',function (req,res,next) {
      var sqlserach=$sql.user.searchhot;
      var gethotword=req.query.hotword;

      var renderData=[];
    conn.query(sqlserach,[gethotword],function (err,result) {
       for(var i=0;i<result.length;i++){
           var cached=
               {
                   proname:null,
                   proprice:null,
                   procomn:null,
                   procategory:null,

               }
            cached.proname=result[i].proName;
            cached.proprice=result[i].proPrice;
            cached.procomn=result[i].proComn;
            cached.procategory=result[i].proCategory;
            renderData.push(cached);
            // console.log(cached);

       }

       // console.log("renderData的长度: "+renderData.length+"renderData的数据结构为: "+renderData[0].proname);
       res.send(renderData);


    })

})
router.get('/searchpage',function (req,res,next) {

    var gethotword=req.query.hotword;
    console.log(gethotword)
    var renderData=[];
    conn.query("select * from produtionview where proName like '%"+gethotword+"%'", function (error, results, fields) {
       // console.log(results)
        for(var i=0;i<results.length;i++)
        {
            var model={
                "imgUrl":null,
                "proName":null,
                "proPrice":null,
                "proComm":null,
            }
            // results[i].proName='"'+results[i].proName+'"'
            // results[i].imgUrl='"'+results[i].imgUrl+'"'
            // results[i].proPrice='"'+results[i].proPrice+'"'
            // results[i].proComm='"'+results[i].proComm+'"'
            model["imgUrl"]=results[i].imgUrl;
            model["proName"]=results[i].proName;
            model["proPrice"]=results[i].proPrice;
            model["proComm"]=results[i].proComn;
            console.log(model["proName"]);
            renderData.push(model);
        }
        // console.log(renderData[0]["proName"]);
        // console.log(renderData[1]["proName"]);

        // for(var i=0;i<renderData.length;i++){
        //     var data=renderData[i]
        //     console.log("renderData: "+console.log(data["proName"]));
        // }

        renderData=JSON.stringify(renderData);
        res.send(renderData)
    });

})

// console.log(hotword)
// conn.query($sql.user.searchhot,[hotword],function (err,result) {
//
//     console.log(result)
//
// })//传值可能有问题
router.get('/getuserdata',function (req,res,next){
    var name=req.query.username;
    var address=req.query.useraddress;
    var order=req.query.orders;
    var sql=$sql.user.userdata;
    var sttatus="配送中";

    // req.on('data',function(data){
    //     obj=JSON.parse(data);
    //     console.log(obj);
    //     res.send('数据已接收')
    // })
    //params1:产品名
    //params2:产品数量
    //params3:产品价格
    console.log(req.url)
    console.log(req.query.params1)
    console.log(req.query.params2)
    console.log(req.query.params3)
    console.log(req.query.params1.length)
    for(var i=0;i<req.query.params1.length;i++)
    {
        var product=req.query.params1[i];
        var number=req.query.params2[i];
        var price=req.query.params3[i];
    conn.query(sql, [order,name,address,product,number,price,sttatus], function (err, result) {
        if (err) {
            console.log(err);
        }
        else{
            console.log("success:getdata");
        }

    })}
    res.send( JSON.stringify(name))

})
router.get('/getuserorder',function (req,res,next){
    var username=req.query.username;
    var sql=$sql.user.getcurrentuser;
    var arraylist=[];

    conn.query(sql,[username],function (err,result) {

        for (var i = 0; i < result.length; i++) {
            var formdata={
                orders:null,
                address:null,
                product:null,
                useramount:null,
                total:null,
                createdTime:null,
                orderstatus:null
            }

                formdata.orders=result[i].orders;
                formdata.address=result[i].useraddress;
                formdata.product=result[i].userproduct;
                formdata.useramount=result[i].useramount;
                formdata.total=result[i].productamout;
                formdata.createdTime=String(result[i].CreateTime.getFullYear())+"-"+String(result[i].CreateTime.getMonth()+1)+"-"
                    +String(result[i].CreateTime.getDate())+" "+String(result[i].CreateTime.getHours())+"::"+String(result[i].CreateTime.getMinutes())+"::"
                    +String(result[i].CreateTime.getSeconds());
                formdata.orderstatus=result[i].status;
                arraylist.push(formdata);

        }
        res.send(arraylist);


    })
})

module.exports = router;