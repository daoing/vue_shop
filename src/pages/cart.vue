<template>
    <div>
        <order-header></order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
    name:'cart',   //这个名字相当于定义的是标签 ： 其中在 home.vue 中引入并使用 到时候 template 中的内容就会在home.vue 中使用
    components:{
        OrderHeader,
        NavFooter
    }
    
}
</script>