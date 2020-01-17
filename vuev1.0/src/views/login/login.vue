<template>

    <div style="width: 340px;height: 600px;left:40%;top:70px;position: relative;border-radius: 10px"
         class="bg-info">

        <div style="width: 310px;height: 180px;background: none;left: 10%;margin-left: 15px;text-align: center">
            <img src="../../../public/image/3.jpg" style="max-width: 75%;margin-top: 15px">
            <p>让创作变得更有趣</p>
        </div>
        <div style="width: 300px;height: 150px;background: none;text-align: center;position:relative;left:6%;top:15% ">
            <form role="form">
                <div class="form-group">
                    <input style="height:40px" type="text" class="form-control"
                           placeholder="请输入用户名或者邮箱">
                    <input style="height:40px" type="password" class="form-control"  placeholder="请输入密码">
                    <button  style="width: 300px;height:40px" type="submit" class="btn btn-info">注册</button>
                    <a href="#" style="float: right">forget password?</a>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
    import {realconsole} from '../../../public/bower_components/jquery/dist/jquery.js'
    import {realconsole2} from '../../../public/bower_components/bootstrap/dist/js/bootstrap.js'
    export default {
        methods: {methods1:function () {
                realconsole();
                realconsole2();
            }},
        name: "login"
    }

</script>


<style scoped>
@import "../../../public/bower_components/bootstrap/dist/css/bootstrap.css";
</style>