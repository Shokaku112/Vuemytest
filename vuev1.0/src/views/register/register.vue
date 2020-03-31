<template>
<div>
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="50%"
            :before-close="handleClose">
        <el-input
                placeholder="请输入内容"
                v-model="input1"
                clearable>
        </el-input>
        <el-input placeholder="请输入密码" v-model="input2" show-password></el-input>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="checkmode()">确 定</el-button>
  </span>
    </el-dialog>
</div>
</template>

<script>


    import axios from "axios";

    export default {
        data() {
            return {
                dialogVisible: true,
                input1:null,
                input2:null,
            };
        },
        methods: {
            checkmode()
            {
                var that=this;
                var reg=/^[a-zA-Z0-9]{4,10}$/;
                var reg2=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
                var url="http://localhost:3000/api/user/add?username="+this.input1+"&userpwd="+this.input2
                console.log("url:"+url)
                // var show=document.getElementById("addbsd");
                // show.innerHTML=" ";
                var htm="<span id='sbd'> </span>";
                // alert(show.innerHTML)
                // show.innerHTML+=htm;

                if(this.input1==null&&this.input2==null)
                {
                    this.$message("你还没输入完整的内容");
                    this.dialogVisible=true;
                }
                if(!reg.test(this.input2))
                {
                    this.$message("你输入的密码长度不够或者有非法字符");
                    this.dialogVisible=true;
                }
                if(!reg2.test(this.input1))
                {
                    this.$message('你输入的格式必须为邮箱地址并且以.com结尾');
                    this.dialogVisible=true;
                }
                else {

                    console.log("input1: "+this.input1)
                    console.log("input2: "+this.input2)
                    this.dialogVisible=false;
                    $('body').append(htm)
                    //确认无误后开始进行axios请求
                    axios.get(url)
                        .then(function (response) {
                            console.log(response);
                            console.log(response.data.statusCode)
                            if(response.data.statusCode===-1){
                               that.$message("该用户已经被注册过")
                            }
                            else{
                                alert("error")
                                that.$message("注册成功")
                            }
                        })
                        .catch(function (error) {

                            console.log(error);
                        });
                    }



            },


            handleClose(done) {
                var htm="<span id='sbd'> </span>";
                this.$confirm('确认关闭？')
                    .then(_ => {
                        $('body').append(htm)
                        done();
                    })
                    .catch(_ => {});
            }
        },



        name: "store2"
    }
</script>

<style scoped>

</style>