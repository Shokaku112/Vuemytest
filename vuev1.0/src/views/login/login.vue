<template>
    <div class="bg" :style="note">



    <div style="width: 340px;height: 520px;position: relative;border-radius: 10px;opacity: 75%;background-color: gray;left:38%;top:100px;z-index: 100">

        <div style="width: 310px;height: 180px;background: none;left: 10%;margin-left: 15px;text-align: center">
            <img src="../../../public/image/3.jpg" style="max-width: 75%;margin-top: 15px">
            <p>让创作变得更有趣</p>
        </div>

        <div style="width: 300px;height: 150px;background: none;text-align: center;position:relative;left:6%;top:15% ">
            <form role="form">

                <div class="form-group">
                    <input style="height:40px;" type="text" class="form-control" v-model="userName"
                           placeholder="请输入用户名或者邮箱">
                    <input style="height:40px" type="password" class="form-control" v-model="userPwd"  placeholder="请输入密码">

                        <el-button  @click="toogleMenu()" style="width: 125px;height:40px;margin: 10px;display: inline;margin-top: 20px" type="submit" class="btn btn-info" >登录</el-button>
                    <button id="add" @click="dyncMount()" style="width: 125px;height:40px;margin: 10px;display: inline;margin-top: 20px" type="submit" class="btn btn-info" >注册</button>
                    <span id="sbd"></span>
                    <a href="#" style="float: right">forget password?</a>
                </div>
            </form>
        </div>
    </div>
        </div>

        <!--<img src="../../assets/image/MAO.png" style="float: left">-->

</template>


<script>

    import {realconsole} from '../../../public/bower_components/jquery/dist/jquery.js'
    import {realconsole2} from '../../../public/bower_components/bootstrap/dist/js/bootstrap.js'
    import byMount from '../register/register';
    import axios from "axios";
    import Vue from 'vue';
    export default
    {

        components:byMount,
        watch:{},
        props:{},

        mounted:
            {

        },//作用类似于windows.onload
        data(){
            return{
                note: {
                    width:"100%",
                    backgroundImage: "url(" + require("../../assets/image/bg_static.jpg") + ")",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height:"100vh",
                },
                isactiv:false,
                userName:"",
                userPwd:"",
                Times:0,
                //动态绑定组件（好处：如果要生成多一个一样的模板标签或者组件可以直接通过该方法复制粘贴使用v-for=“item in tab（数组名字)”）
                data1:[
                    {txt:"登陆",status1:true},
                    {txt:"注册",status1:true}
                ],
                isActive:1

            }},
        methods:
            {

                methods1:function () {
                realconsole();
                realconsole2();
            },
                //判断用户是否已经登录
                iflogin(){
                    var that=this;
                    let data = JSON.parse(sessionStorage.getItem('data'))
                    // Object.assign方法 赋值 （目标对象， 源对象）
                    Object.assign(this, data)
                    console.log(data);

                    if(data==null){
                        that.$router.push("/login")
                    }
                    if(data.username==="admin"){ that.$router.push("/manage")}
                    else {
                        alert("你已经登陆了！返回/store首页");
                        that.$router.push("/store")
                    }
                },
                gettimes(ms){
                    return new Promise((resolve,reject)=>{
                        setTimeout(resolve,ms,'5spass');
                    }).catch((e) => {});
                },
                //设置sessionstorage的方法
                toogleMenu()
                {

                    var that=this;
                    this.Times++;
                    if(this.Times>5){
                        alert("你的登录次数过于频繁请20秒后重试!");
                        this.gettimes(20000).then((value)=>{
                            console.log(value);
                            this.Times=0;
                        })
                    }
                    else{
                        var returnData={
                            status:-1,
                            data:["ojbk","dwksda"]
                        }
                        var url="http://192.168.88.107:3000/api/user/login?username="+this.userName+"&userpwd="+this.userPwd
                        console.log(url)

                        axios.get(url)
                            .then(function (response) {

                                returnData=response.data;
                                console.log(response.data);
                                console.log(returnData);
                                // 保存当前页面上data数据
                                if(returnData.status==1){
                                    alert("true")
                                    var data=returnData
                                    sessionStorage.setItem('data', JSON.stringify(data))

                                    //注意指代this的作用域需要that=this取代
                                    that.$router.push('/store')
                                    // location.href="http://localhost:9999/?#/store"


                                }
                                //admin用户status值
                                if(returnData.status===2){
                                    alert("admin")
                                    var data=returnData
                                    sessionStorage.setItem('data', JSON.stringify(data))
                                    that.$router.push('/manage')
                                }
                                if(returnData.status==-1){
                                    that.$message('账号密码不对或者不能为空');
                                    //注意指代this的作用域需要that=this取代
                                    that.$router.push('/login')
                                    // location.href="http://localhost:9999/?#/store"

                                }

                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }

                },

                dyncMount(){
                    var Profile = Vue.extend(byMount);
                    // 创建 Profile 实例，并挂载到一个元素上。
                    new Profile().$mount('#sbd');
                },

            },
        created:function(){
            this.iflogin();
        },

        name: "login"
    }

</script>


<style scoped>
@import "../../../public/bower_components/bootstrap/dist/css/bootstrap.css";
.bg{
    width:100%;
    height:100%;
    position: relative;
    padding:1px;
    box-sizing:border-box;
    z-index:1;
    height: 100vh;

}
.bg:after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(5px);
    z-index: 2;

}
    .drag{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        width:200px;
        height:200px;
        text-align: center;
        z-index:11;
    }

</style>