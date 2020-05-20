<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>
    <div id="whole" style="">
      <el-col :span="4">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-table
        :data="renderData"
        border
        style="width: 80%;float: right;margin-right: 20px"
      >
        <el-table-column fixed="right" prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="orders" label="订单编号" width="240">
        </el-table-column>
        <el-table-column prop="product" label="商品名" width="120">
        </el-table-column>
        <el-table-column prop="numbers" label="数量" width="50">
        </el-table-column>
        <el-table-column prop="total" label="总价" width="100">
        </el-table-column>

        <el-table-column prop="address" label="地址" width="150">
        </el-table-column>
        <el-table-column prop="sttatus" label="订单状态" width="100">
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="formget2($event)" type="text" size="small"
              >编辑</el-button
            >
            <el-button @click="formget($event)" type="text" size="small"
              >删除</el-button
            >
            <!--删除对话框-->
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :modal-append-to-body="false"
              :before-close="handleClosed"
            >
              <span style="text-align: center">确定要删除该记录？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="testDel($event)"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
            <!--编辑对话框-->
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible2"
              width="50%"
              :modal-append-to-body="false"
            >
              <el-input v-model="formorder" :disabled="true">
                <template slot="prepend">订单单号</template>
              </el-input>
              <el-input v-model="clientname">
                <template slot="prepend">用户名</template>
              </el-input>
              <el-input v-model="productname" :disabled="true">
                <template slot="prepend">商品名称</template>
              </el-input>
              <el-input v-model="number" :disabled="true">
                <template slot="prepend">数量</template>
              </el-input>
              <el-input v-model="total">
                <template slot="prepend">售价</template>
              </el-input>
              <el-input v-model="address">
                <template slot="prepend">收货地址</template>
              </el-input>
              <el-input v-model="orderstatus">
                <template slot="prepend">订单状态</template>
              </el-input>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="formEdt()">确 定</el-button>
              </span>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      orderstatus: null,
      formorder: null,
      productname: null,
      clientname: null,
      number: null,
      total: null,
      address: null,
      dialogVisible: false,
      dialogVisible2: false,
      status: 0,
      activeIndex: "1",
      activeIndex2: "1",
      renderData: []
    };
  },
  methods: {
    handleClosed(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    testClick() {
      this.renderData = this.tableData;
    },
    //由formdel收集的信息将指定单号删除
    testDel() {
      var getFormorder = this.formorder;
      var getproduct = this.productname;
      var url =
        "http://192.168.88.107:3000/api/admin/deleteForm?orders=" +
        getFormorder +
        "&productname=" +
        getproduct;
      axios
        .get(url)
        .then(function(reponse) {})
        .catch(function(error) {
          console.log(error);
        });
      this.dialogVisible = false;
      this.renderData = [];
      this.renderdata();
    },
    //点击删除后先把内容信息存好
    formget2(e) {
      this.dialogVisible2 = true;
      // console.log(e.currentTarget.parentNode.childNodes[2].childNodes);//通过nodelist获取当前父节点的所有子节点
      // console.log(e.currentTarget.parentNode.parentNode.parentNode.childNodes[0].lastChild.textContent);
      // console.log(e.currentTarget.parentNode.parentNode.parentNode.childNodes[1].lastChild.textContent);
      // console.log(e.currentTarget.parentNode.parentNode.parentNode.childNodes[2].lastChild.textContent);
      // console.log(e.currentTarget.parentNode.parentNode.parentNode.childNodes[3].lastChild.textContent);
      // console.log(e.currentTarget.parentNode.parentNode.parentNode.childNodes[4].lastChild.textContent);
      // console.log(e.currentTarget.parentNode.parentNode.parentNode.childNodes[5].lastChild.textContent);
      var client =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[0].lastChild
          .textContent;
      var formorder =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[1].lastChild
          .textContent;
      var productname =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[2].lastChild
          .textContent;
      var number =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[3].lastChild
          .textContent;
      var total =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[4].lastChild
          .textContent;
      var address =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[5].lastChild
          .textContent;
      var status =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[6].lastChild
          .textContent;
      this.formorder = formorder;
      this.productname = productname;
      this.clientname = client;
      this.number = number;
      this.total = total;
      this.address = address;
      this.orderstatus = status;
      console.log(this.clientname);
    },
    formget(e) {
      this.dialogVisible = true;
      // e.target 是你当前点击的元素
      // e.currentTarget 是你绑定事件的元素
      var formorder =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[1].lastChild
          .textContent;
      var productname =
        e.currentTarget.parentNode.parentNode.parentNode.childNodes[2].lastChild
          .textContent;
      this.formorder = formorder;
      this.productname = productname;
    },

    formEdt() {
      // formorder:null,
      //     productname:null,
      //     clientname:null,
      //     number:null,
      //     total:null,
      //     address:null,
      var getFormorder = this.formorder;
      var getproduct = this.productname;
      var getclient = this.clientname;
      var getnumber = this.number;
      var gettotal = this.total;
      var getaddress = this.address;
      var getorderstatus = this.orderstatus;
      var url =
        "http://192.168.88.107:3000/api/admin/editForm?getFormorder=" +
        getFormorder +
        "&getproduct=" +
        getproduct +
        "&getclient=" +
        getclient +
        "&getnumber=" +
        getnumber +
        "&gettotal=" +
        gettotal +
        "&getaddress=" +
        getaddress +
        "&getorderstatus=" +
        getorderstatus;
      axios
        .get(url)
        .then(function(reponse) {})
        .catch(function(error) {
          console.log(error);
        });
      this.dialogVisible2 = false;
      this.renderData = [];
      this.renderdata();
    },

    handleClick(row) {
      console.log(row);
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    renderdata() {
      var that = this;
      var url = "http://192.168.88.107:3000/api/admin/getform";
      axios
        .get(url)
        .then(function(data) {
          console.log(data.data);
          for (var i = 0; i < data.data.length; i++) {
            var renderdata = {
              date: data.data[i].date,
              name: data.data[i].username,
              address: data.data[i].useraddress,
              orders: data.data[i].ordernumber,
              product: data.data[i].userproduct,
              numbers: data.data[i].useramount,
              total: data.data[i].productamount,
              sttatus: data.data[i].orderdatast
            };
            console.log(renderdata.name);
            that.renderData.push(renderdata);
            console.log(that.renderData);
            console.log(that.tableData);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.renderdata();
  },
  name: "managesys"
};
</script>

<style scoped></style>
