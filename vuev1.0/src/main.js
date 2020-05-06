import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from  "axios";
import VueAxios from 'vue-axios'
import navv from"./views/nav/nav"
// import moblile from '../src/css/mobile.css'
// import PC from '../src/css/pc.css'




import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//需要导入的相关资源文件

Vue.component("Navv",navv);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
// Vue.use(moblile);
// Vue.use(PC)

new Vue({

    router,
    store,
  render: h => h(App)
}).$mount("#app");//将资源文件塞进去#app index.html idapp
