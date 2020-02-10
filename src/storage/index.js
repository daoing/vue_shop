// 是一个工具箱  用于数据存储

/**
 * Storage封装
 */
const  STORAGE_KEY = 'mall';   // 定义一个大key  这里的mall 就当作是数据库的名字
export default{
  // 存储值
  setItem(key,value,module_name){
    if (module_name){
      let val = this.getItem(module_name);
      val[key] = value;  // 设置key 和 vlu  就是指  {"user":{"username":"nihao","age":"30","sex":"1"}} key是 user value是指 ：后面的内容
      this.setItem(module_name, val);
    }else{
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));  //JSON.stringify  json 转字符串 
    }
  },
  // 获取某一个模块下面的属性user下面的userName 
  // module_name 就是指usr  key 指 usrname
  getItem(key,module_name){
    if (module_name){
      let val = this.getItem(module_name);   // val 就是我们整个getStorage 的信息
      if(val) return val[key];
    }
    return this.getStorage()[key]; //getStorage() 获取整个getStorage 的值 key 就是user 的信息
  },
  //获取整个storge 的值
  getStorage(){
      // || 符号后面是 当获取不到的时候 默认是 {}    JSON.parse 是转化为josn  是js 的方法
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear(key, module_name){
    let val = this.getStorage();
    if (module_name){
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}