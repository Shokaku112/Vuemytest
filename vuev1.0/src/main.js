import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




//需要导入的相关资源文件
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({

    router,
    store,
  render: h => h(App)
}).$mount("#app");//将资源文件塞进去#app index.html idapp
