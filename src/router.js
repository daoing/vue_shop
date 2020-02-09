// 承载整个项目的路由  大写开头的都是组件 虽然现在是页面 其实页面也是组件
//前端路由就是不依赖于后端就可以实现页面跳转，根据不同的url 就可以渲染不同的视图页面
//https://zhidao.baidu.com/question/686812359918989692.html 详解
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'   //.vue 可以省略不写
import Index from './pages/index'   //.vue 可以省略不写
import Index from './pages/product'   //.vue 可以省略不写
import Detail from './pages/detail'   //.vue 可以省略不写

// 语法就是这样 这个代表我们把插件写如了vue 中在vue 中加载插件 
Vue.use(Router);

//es6 的语法 作用是导出一个对象
export default new Router({
    //配置子路由 
    routes:[
        {
            path :'/',
            name : 'home',  //home 组件 也就是 home.vue 文件
            component : Home,
            children : [    //定义子路由
                {
                    path :'/index',  // 我们的首页
                    name : 'index',  //
                    component : Index
                },
                {
                    path :'/product/:id',  // 产品站  连接中带有参数id 动态定义路由
                    name : 'product',  //
                    component : Product
                },
                {
                    path :'/detail/:id',  // 产品站  连接中带有参数id 动态定义路由
                    name : 'detail',  //
                    component : Detail
                }
            ]
        }
    ]
})