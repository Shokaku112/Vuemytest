<template>
  <div>
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Shop Mall</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页</a></li>
            <li @click="play"><a>播放音乐</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                合作商务 <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">jmeter</a></li>
                <li><a href="#">EJB</a></li>
                <li><a href="#">Jasper Report</a></li>
                <li class="divider"></li>
                <li><a href="#">分离的链接</a></li>
                <li class="divider"></li>
                <li><a href="#">另一个分离的链接</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          class="navbar-header"
          style="float: right;width: 284px;height: 53px"
        >
          <li class="dropdown" style="float: left;padding: 15px">
            <a
              id="username"
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              style="padding: 15px"
              >欢迎你！，{{ userinfo.username }}<span class="caret"></span
            ></a>
            <ul id="usernav" class="dropdown-menu">
              <li id="head1" :class="li1" @click="pushinfo()">
                <a href="#">个人信息</a>
              </li>
              <li @click="logout()" id="head2" :class="li1">
                <a href="#">登出</a>
              </li>
            </ul>
          </li>
          <a style="float: right;margin-top: 5px" href="#"
            ><img
              style="width: 48px;height: 48px;"
              class="img-circle"
              :src="require('../../' + userinfo.src)"
          /></a>

          <!--<a href="#" class="dropdown-toogle" style="float: left"><p style="padding: 20px"></p></a>-->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      li1: "disabled",
      srcget: "",
      userinfo: {
        username: "",
        src: ""
      }
    };
  },
  beforeRouteLeave(to, from, next) {
    let data = JSON.parse(sessionStorage.getItem("data"));
    if (to.path == "/login" && data != null) {
      return next("/store");
      alert("已经登陆状态不可以再次登录！");
    } else {
      return next("/login");
    }
  },
  methods: {
    pushinfo() {
      this.$router.push("/info");
    },
    limitwords() {
      var getlength = this.userinfo.username.length;
      console.log("username: " + getlength);
      //两种情况第一种大于10的第二种小于10的

      if (getlength > 10) {
        console.log(this.userinfo.username.substring(0, 6));
        this.userinfo.username = this.userinfo.username.substring(0, 6) + "...";
      } else {
      }
    },
    logout() {
      sessionStorage.clear();
      this.$router.push("/login");
      alert("登出成功");
      this.getstatus();
    },
    getstatus() {
      console.log("i am created!");
      // 获取源数据
      let data = JSON.parse(sessionStorage.getItem("data"));
      var imgurl = "assets/image/icon2.png"; //接受数据层不能写在返回层上
      // Object.assign方法 赋值 （目标对象， 源对象）
      Object.assign(this, data);
      console.log(data);
      if (data == null) {
        this.userinfo.username = "游客";
        this.userinfo.src = "assets/image/icon2.png";
        this.li1 = "disabled";
      } else {
        this.li1 = "";
        this.userinfo.username = data.username;
        this.userinfo.src = data.path;
        console.log("username: ");
        this.limitwords();
      }
    }
  },
  created: function() {
    this.getstatus();
  }
};
</script>

<style scoped lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navbar-inverse {
  margin-bottom: 0px;
}
</style>
