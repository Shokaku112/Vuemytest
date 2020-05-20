<template>
  <div v-bind:class="Style.body">
    <div v-bind:class="Style.pc">
      <img src="../../assets/image/icon3.png" v-bind:class="Style.circle" />
    </div>
    <div id="usernamepart" v-bind:class="Style.userpart">
      <div v-bind:class="Style.userpcdiv">
        <div><span v-bind:class="Style.username">Shokaku</span></div>
        <div><span v-bind:class="Style.userid">@Shokaku112</span></div>
        <div class="usersignename"><span>this is text</span></div>
        <span class="glyphicon glyphicon-list-alt">
          Joined January 2020
        </span>
        <div class="fllow">
          <span>
            3 Following 0 Followers
          </span>
        </div>
      </div>
    </div>
    <div class="btn-group btn-group-justified" role="group" aria-label="...">
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">Left</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">Middle</button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">Right</button>
      </div>
    </div>
    <div class="clear"></div>
    <ul>
      <li>
        <div class="orderlog">
          <img class="img-circle list1" src="../images/sale1.jpg" />

          <div class="textarea"></div>
        </div>
      </li>
      <li><div>img2</div></li>
      <li><div>img3</div></li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
// import moblile from '../../css/mobile.css'
// import PC from '../../css/pc.css'

export default {
  created() {
    //判断当前是PC端还是手机端
    let websys = navigator.userAgent;
    let mobileAgents = ["Android", "iPhone", "iPad"];
    let isPc = true;

    console.log(websys);
    for (let key in mobileAgents) {
      console.log(mobileAgents[key]);
      if (websys.indexOf(mobileAgents[key]) > 0) {
        isPc = false;
        console.log("key is" + key + "手机");
        break;
      } else {
        isPc = true;
        console.log("电脑");
      }
    }
    if (isPc) {
      this.Style.body = "pcbody1";
      this.Style.pc = "pc1";
      this.Style.circle = "img-circle circlepc1";
      this.Style.userpart = "userpartpc1";
      this.Style.userpcdiv = "userpartpcdiv1";
      this.Style.username = "usernamepc1";
      this.Style.userid = "useridpc1";
    }

    var css = require("../../css/pc.css");
    var css2 = require("../../css/mobile.css");
    let data = JSON.parse(sessionStorage.getItem("data"));
    var username = data.username;
    var url =
      "http://localhost:3000/api/user/getuserorder?username=" + username;

    Axios.get(url).then(function(resonese) {
      console.log(responese.data);
    });
  },
  data() {
    return {
      Style: {
        body: "pcbody2",
        pc: "pc2",
        circle: "img-circle circlepc2",
        userpart: "userpartpc2",
        userpcdiv: "userpartpcdiv2",
        username: "usernamepc2",
        userid: "useridpc2"
      }
    };
  },

  name: "info"
};
</script>

<style scoped>
.clear {
  clear: both;
}
.orderlog {
  width: 100%;
  height: 100px;
  margin: 10px 0px 10px 0px;
  background: brown;
}

.list1 {
  height: 60%;
  width: 60px;
  margin-left: 10px;
  background: black;
  float: left;
}
.textarea {
  position: absolute;
  width: 50%;
  height: 83px;
  background: darkcyan;
  right: 35%;
  margin: 10px 20px 0 0;
}
</style>
