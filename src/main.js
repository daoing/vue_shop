import Vue from 'vue'
import routers from './router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import env from './env'

// mock  开关
const mock = true;
if(mock){
  require('./mock/api'); //import 与 require 的区别 import是预编译加载，require是执行到才编译
}

// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';   //测试easymock 的时候要把这个打开
axios.defaults.timeout = 8000;  //超时时间 8S

// 根据环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;

// 接口错误拦截 
// response 针对服务器的返回做一个拦截
axios.interceptors.response.use(function(response){  //response 是 axios 封装给我们的  并不代表服务器返回值
  let res = response.data;   // response.data 是response返回给我们内部封装的值    data 这个data 是固定语法  
  if(res.status == 0){
    return res.data;  // 这个才是服务器返回给我们的值 
  }else if(res.status == 10){
    window.location.href = '/#/login';   //为登录的值 # 号代表hash 路由 所以我们要使用完整的路径
  }else{
    alert(res.msg);   // 报错信息
  }
});

Vue.use(VueAxios,axios);    //加载插件  将axios 挂载到  VueAxios
Vue.config.productionTip = false   // 表示生产环境 默认是关闭的

new Vue({
  router:routers, //如果是router:router  那么 就可以直接写一个  touter
  render: h => h(App),
}).$mount('#app')
