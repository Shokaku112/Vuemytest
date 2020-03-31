<template>
    <div>
        <!--搜索框-->
        <div class="nav white">
            <div class="logo"><img src="../../../../templater/AmazeUI/images/logo.png" /></div>
            <div class="logoBig">
                <li><img src="../../../../templater/AmazeUI/images/logobig.png" /></li>
            </div>

            <div class="search-bar pr">
                <a name="index_none_header_sysc" href="#"></a>
                <form id="app2">
                    <input v-model='search' id="searchInput" name="index_none_header_sysc" type="text" placeholder="搜索" autocomplete="off">
                    <el-button type="success" style="width: 115px;margin-left: 11px ;height: 46px;" ><a  style="border: 1px; font-size:32px;text-decoration:none;" href="http://localhost:9999/ad.html" @click="onItemclick2" >搜索</a></el-button>
                </form>
            </div>
            <ul  class="list-group" id="searchResult" style="padding-left: 165px;position: relative">
                <li v-on:mouseenter="changColor($event)" v-on:mouseleave="changebackColor($event)" v-for="item in searchData" class="list-group-item before" style="position:relative;z-index:10;width: 533px;height: 20px;padding-bottom: 20px;padding-top: 5px;text-align: left" onclick=""><a href="http://localhost:9999/ad.html"  @click="onItemclick(item.proname)">{{item.proname}}{{ item.proprice}}</a></li>
            </ul>
        </div >




                <!--走马灯上的导航条-->
        <div style="width: 100%;height: 40px;">
            <a class="alabel" href="#" style="padding: 5px"><img style="width:100px;height: 30px" src="../../assets/image/TB1ztBlaMMPMeJjy1XbXXcwxVXa-200-60.png"></a>
            <a class="alabel" href="#" style="padding: 5px"><img style="width:100px;height: 30px" src="../../assets/image/TB1t5ObaBxRMKJjy0FdXXaifFXa-200-60.png"></a>
            <a class="alabel" href="#" style=" ">商品栏1</a>
            <a class="alabel" href="#" style=" ">商品栏1</a>
            <a class="alabel" href="#" style=" ">商品栏1</a>

        </div>
    <div style="width: 100%">
        <div class="block">
            <span class="demonstration"></span>
            <el-carousel style="width: 100%" height="500px" >
                <el-carousel-item>
                    <img style="width: 100%;height: 100%" src="../../assets/image/bg2.jpg">
                </el-carousel-item>
                <el-carousel-item>
                    <img style="width: 100%;height: 100%" src="../../assets/image/TB1FNXGvHr1gK0jSZR0SuvP8XXa.jpg">
                </el-carousel-item>
                <el-carousel-item>
                    <img style="width: 100%;height: 100%" src="../../assets/image/TB19tklmxD1gK0jSZFKSuwJrVXa.jpg">
                </el-carousel-item>
            </el-carousel>
        </div>


    </div>

        <div class="am-container">

            <div class="sale-mt">
                <i></i>
                <em class="sale-title">限时秒杀</em>
                <div class="s-time" id="countdown">
                    <span v-model="hours" class="hh">{{hours}}</span>
                    <span v-model="min"  class="mm">{{min}}</span>
                    <span v-model="seconds" class="ss">{{seconds}}</span>
                </div>
            </div>


            <div class="am-g am-g-fixed sale">
                <div class="am-u-sm-3 sale-item">
                    <div class="s-img">
                        <a href="# "><img src="../../../../templater/AmazeUI/images/sale3.jpg" /></a>
                    </div>
                    <div class="s-info">
                        <a href="#"><p class="s-title">ZEK 原味海苔</p></a>
                        <div class="s-price">￥<b>9.90</b>
                            <a class="s-buy" href="#">秒杀</a>
                        </div>
                    </div>
                </div>

                <div class="am-u-sm-3 sale-item">
                    <div class="s-img">
                        <a href="# "><img src="../../../../templater/AmazeUI/images/sale2.jpg" /></a>
                    </div>
                    <div class="s-info">
                        <a href="#"><p class="s-title">ZEK 原味海苔</p></a>
                        <div class="s-price">￥<b>9.90</b>
                            <a class="s-buy" href="#">秒杀</a>
                        </div>
                    </div>
                </div>

                <div class="am-u-sm-3 sale-item">
                    <div class="s-img">
                        <a href="# "><img src="../../../../templater/AmazeUI/images/sale1.jpg" /></a>
                    </div>
                    <div class="s-info">
                        <a href="#"><p class="s-title">ZEK 原味海苔</p></a>
                        <div class="s-price">￥<b>9.90</b>
                            <a class="s-buy" href="#">秒杀</a>
                        </div>
                    </div>
                </div>

                <div class="am-u-sm-3 sale-item">
                    <div class="s-img">
                        <a href="# "><img src="../../../../templater/AmazeUI/images/sale2.jpg" /></a>
                    </div>
                    <div class="s-info">
                        <a href="#"><p class="s-title">ZEK 原味海苔</p></a>
                        <div class="s-price">￥<b>9.90</b>
                            <a class="s-buy" href="#">秒杀</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="clear"></div>
        <div class="shopTitle ">
            <h4 class="floor-title">甜品</h4>
            <div class="floor-subtitle"><em class="am-icon-caret-left"></em><h3>每一道甜品都有一个故事</h3></div>
            <div class="today-brands " style="right:0px ;top:13px;">
                <a href="# ">桂花糕</a>|
                <a href="# ">奶皮酥</a>|
                <a href="# ">栗子糕 </a>|
                <a href="# ">马卡龙</a>|
                <a href="# ">铜锣烧</a>|
                <a href="# ">豌豆黄</a>
            </div>
        </div>
        <div class="am-g am-g-fixed floodSix ">

            <div class="am-u-sm-5 am-u-md-3 text-one list">
                <div class="word">
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                    <a class="outer" href="#"><span class="inner"><b class="text">核桃</b></span></a>
                </div>
                <a href="# ">
                    <img src="../../../../templater/AmazeUI/images/5.jpg" />
                    <div class="outer-con ">
                        <div class="title ">
                            零食大礼包开抢啦
                        </div>
                        <div class="sub-title ">
                            当小鱼儿恋上软豆腐
                        </div>
                    </div>
                </a>
                <div class="triangle-topright"></div>
            </div>

            <div class="am-u-sm-7 am-u-md-5 am-u-lg-2 text-two big">

                <div class="outer-con ">
                    <div class="title ">
                        雪之恋和风大福
                    </div>
                    <div class="sub-title ">
                        ¥13.8
                    </div>

                </div>
                <a href="# "><img src="../../../../templater/AmazeUI/images/act1.png" /></a>
            </div>

            <li>
                <div class="am-u-md-2 am-u-lg-2 text-three">
                    <div class="boxLi"></div>
                    <div class="outer-con ">
                        <div class="title ">
                            小优布丁
                        </div>
                        <div class="sub-title ">
                            ¥4.8
                        </div>

                    </div>
                    <a href="# "><img src="../../../../templater/AmazeUI/images/1.jpg"/></a>
                </div>
            </li>
            <li>
                <div class="am-u-md-2 am-u-lg-2 text-three sug">
                    <div class="boxLi"></div>
                    <div class="outer-con ">
                        <div class="title ">
                            小优布丁
                        </div>
                        <div class="sub-title ">
                            ¥4.8
                        </div>

                    </div>
                    <a href="# "><img src="../../../../templater/AmazeUI/images/2.jpg"/></a>
                </div>
            </li>
            <li>
                <div class="am-u-sm-4 am-u-md-5 am-u-lg-4 text-five">
                    <div class="boxLi"></div>
                    <div class="outer-con ">
                        <div class="title ">
                            小优布丁
                        </div>
                        <div class="sub-title ">
                            ¥4.8
                        </div>

                    </div>
                    <a href="# "><img src="../../../../templater/AmazeUI/images/5.jpg" /></a>
                </div>
            </li>
            <li>
                <div class="am-u-sm-4 am-u-md-2 am-u-lg-2 text-six">
                    <div class="boxLi"></div>
                    <div class="outer-con ">
                        <div class="title ">
                            小优布丁
                        </div>
                        <div class="sub-title ">
                            ¥4.8
                        </div>

                    </div>
                    <a href="# "><img src="../../../../templater/AmazeUI/images/3.jpg" /></a>
                </div>
            </li>
            <li>
                <div class="am-u-sm-4 am-u-md-2 am-u-lg-4 text-six">
                    <div class="boxLi"></div>
                    <div class="outer-con ">
                        <div class="title ">
                            小优布丁
                        </div>
                        <div class="sub-title ">
                            ¥4.8
                        </div>

                    </div>
                    <a href="# "><img src="../../../../templater/AmazeUI/images/4.jpg" /></a>
                </div>
            </li>
        </div>
        <div class="clear "></div>
        <el-container id="box">
            {{ date}}
        </el-container>

    </div>
    <!--root-->
</template>

<script>
    var padaDate = function(value){
        return value<10 ? '0'+value : value;
    };
    import pic1 from "../../assets/image/bg2.jpg"
    import pic2 from "../../assets/image/R16.jpg"
    import dayjs from "dayjs"
    import axios from "axios";
    export default {
        name: "storev1",
        data(){
          return{
              date:new Date(),
              hours:'',
              min:'',
              seconds:'',
              search: "",
              renderData:[
                  {
                      proname: '疫苗',
                      // proPrice: 250,
                      // proComm:"1",
                      // category: "水果"
                  }
              ],


              products:[

              ]

          }
        },

        computed: {

          searchData() {

              // console.log("renderdata: "+this.renderData[0])
              // this.products.push(this.renderData[0])
              // console.log("products: "+this.products)
              var that=this;
              var search = this.search;
              var searchVal = '';//搜索后的数据



                //开始请求后台数据
                //通过后台接收到的数据进行筛选
                if (search) {
                    //product数据里面的key值
                    searchVal = this.products.filter(function(product) {
                        return Object.keys(product).some(function(key) {
                            // console.log("String product[key]all: "+String(product[key]).toLowerCase() )
                            // console.log("String product[key]exactly value(only one): "+String(product['questions']).toLowerCase())
                            //搜索所有的内容(模糊搜索)
                            console.log(searchVal)
                            return String(product[key]).toLowerCase().indexOf(search) > -1;
                            //只搜索问题内容（某一个key）（精确搜素）
                            //
                            return String(product['questions']).toLowerCase().indexOf(search)>-1;
                        })
                    })
                    console.log(searchVal)

                    return searchVal;



                }
            }
        },
        created:function () {
           this.method1();
           this.method2();
           this.getserachData();
            // 获取源数据
            let data = JSON.parse(sessionStorage.getItem('data'))
            // Object.assign方法 赋值 （目标对象， 源对象）
            Object.assign(this, data)
            console.log(data);

        },


        methods:
            {
            // <input type="text" name="" id="txt" value="" ref="name" v-on:keyup="inputRef"/>
            //     inputRef: function(){
            //         console.log(this.$refs.name.value)
            //         this.name = this.$refs.name.value
            //     },

                onItemclick2(){
                    var name=$('#searchInput').val();
                    console.log(name);
                    var data=name
                    sessionStorage.setItem('hotword', JSON.stringify(name))
                },
                onItemclick(value){
                    console.log(value);
                    var data=value
                    sessionStorage.setItem('hotword', JSON.stringify(data))
                },
                changColor($event){
                    $event.currentTarget.className="list-group-item after"
                    console.log("enter")
                },
                changebackColor($event){
                    $event.currentTarget.className="list-group-item before"
                    console.log("leave")
                },
                getserachData(){
                    var that=this;
                    var url="http://localhost:3000/api/user/search?hotword="+hotsport
                    var hotsport=$('#searchInput').val();
                    axios.get(url).then(function (responese) {
                        that.products=[];
                        console.log(responese.data)

                        for(var i=0;i<responese.data.length;i++)
                        {
                            console.log("第"+i+"商品是: "+responese.data[i].proname);
                            that.products.push(responese.data[i]);
                        }

                    })
                },

                method1(){
                    var data="i am method1"
                    console.log("i am 1")
                    return Promise.resolve(data)

                },
                method2(){
                    var data="i am method2"
                    console.log("i am 2")
                    return Promise.resolve(data)
                },

                method3(){
                    this.method1().then(val => {
                        this.method2().then(val =>{console.log(val)});
                        console.log(val);

                    });
                }
            },
        //定时器
        mounted(){
            let _this = this;
            this.timer = setInterval(function(){
                var Dat=new Date();
                var hours = padaDate(Dat.getHours());      //存储时
                var minutes = padaDate(Dat.getMinutes());  //存储分
                var seconds = padaDate(Dat.getSeconds());  //存储秒
                _this.hours=hours;
                _this.min=minutes;
                _this.seconds=seconds;
                _this.date = new Date().toLocaleString();
            });
        },
        beforeDestroy:function(){
            if(this.timer){
                clearInterval(this.timer);
            }
        },
        // filters:{
        //     //设置一个函数来进行过滤
        //     formaDate:function(value){
        //         //创建一个时间日期对象
        //         var date = new Date();
        //         var year = date.getFullYear();      //存储年
        //         var month = padaDate(date.getMonth()+1);    //存储月份
        //         var day = padaDate(date.getDate());         //存储日期
        //         var hours = padaDate(date.getHours());      //存储时
        //         var minutes = padaDate(date.getMinutes());  //存储分
        //         var seconds = padaDate(date.getSeconds());  //存储秒
        //         //返回格式化后的日期
        //         return year+'年'+month+'月'+day+'日'+hours+'时'+minutes+'分'+seconds+'秒';
        //     }
        // },
    }
</script>

<style scoped>
    .before{
        background: #409EFF;
    }
    .after{
        background: #909399;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    template{

    }
    .alabel{

        float: left;
        padding: 10px;
        font-size: 20px;
        color: #F56C6C;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

</style>

<!--function2(){-->
<!--// 你的逻辑代码-->
<!--return Promise.resolve(/* 这里是需要返回的数据*/)-->
<!--}-->

<!--function3(){-->
<!--// 你的逻辑代码-->
<!--return Promise.resolve(/* 这里是需要返回的数据*/)-->
<!--}-->

<!--// 调用-->
<!--function1(){-->
<!--this.function2().then(val => {-->
<!--this.function3();-->
<!--});-->
<!--}-->
<!--————————————————-->
<!--版权声明：本文为CSDN博主「东黧」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。-->
<!--原文链接：https://blog.csdn.net/superlover_/article/details/79715202-->
<!--//使用import引入-->
<!--import pic1 from '@/assets/icon/demo1.png'-->
<!--import pic2 from '@/assets/icon/demo2.png'-->
<!--//在data中定义图片变量-->
<!--data() {-->
<!--return {-->
<!--pic: {[-->
<!--name: 'demo1',-->
<!--src: pic1,-->
<!--], [-->
<!--name: 'demo2',-->
<!--src: pic2,-->
<!--]}-->
<!--}-->
<!--}-->
<!--//在HTML中使用-->
<!--<img v-for="item in pic" :src="item.src" :alt="item.name"/>-->
<!--data:     {-->
<!--proName: '小米手环4 NFC版',-->
<!--proPrice: 229,-->
<!--proComm:"1",-->
<!--category: "水果"-->
<!--},-->
<!--{-->
<!--proName: '老八特制炒饭 NFC版',-->
<!--proPrice: 229,-->
<!--proComm:"1",-->
<!--category: "水果"-->
<!--},-->
<!--{-->
<!--proName: 'Reimu R18版',-->
<!--proPrice: 229,-->
<!--proComm:"1",-->
<!--category: "水果"-->
<!--},-->
<!--{-->
<!--proName: '手冲奶茶 NFC版',-->
<!--proPrice: 229,-->
<!--proComm:"1",-->
<!--category: "水果"-->
<!--},-->
<!--{-->
<!--proName: '小米手环4 NFC版',-->
<!--proPrice: 229,-->
<!--proComm:"1",-->
<!--category: "水果"-->
<!--},-->
<!--{-->
<!--proName: '小米手环4 NFC版',-->
<!--proPrice: 229,-->
<!--proComm:"1",-->
<!--category: "水果"-->
<!--},-->
<!--{-->
<!--proName: '小米手环4 NFC版',-->
<!--proPrice: 229,-->
<!--proComm:"1",-->
<!--category: "水果"-->
<!--},-->
<!--{-->
<!--proName: '小米手环4 NFCC版',-->
<!--proPrice: 228,-->
<!--proComm:"1",-->
<!--category: "水果"-->
<!--},-->