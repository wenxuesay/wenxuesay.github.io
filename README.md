# wenxuesay.github.io  笔记
# 关于数值的扩展：逐步减少全局性方法，使得语言逐步模块化
取整：Number.parseInt('12.34')   12
 Number.parseFloat('12.45#') //12.45

# 如何判断一个数值是否为整数？
Number.isInteger(24)   //true


扩展运算符：
1.将数组变为参数 2.也用作合并数组
...[1,2,3]    //1 2 3


# 数组扩展用法：
Array.from()   如果参数是一个数组，会返回一模一样新数组
例:
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr1 = Array.from(arrayLike);   //['a','b','c']


Array.of方法用于将一组值，转换为数组。
例:
 Array.of(3, 11, 8) // [3,11,8]


# 对象的合并:
Object.assign

Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]

Object.values()

# reduce的使用(使用范围数组求和)
let a  = [,1,2,3,5];
let sum = (a,b)=>a+b;
a.reduce(sum,0); //11

#  检测一个变量是一个String类型
var a = 1;  
typeof(a)==='string';  
假
# 去除字符串空格？
使用replace正则匹配的方法
去除所有空格: str = str.replace(/\s*/g,"");  
去除两头空格: str = str.replace(/^\s*|\s*$/g,"");  
去除左空格： str = str.replace( /^\s*/, “”);  
去除右空格： str = str.replace(/(\s*$)/g, "");  
var str = " 23 23 ";  
var str2 = str.replace(/\s*/g,"");  
console.log(str2); // 2323  

#  判断一个字符串中出现次数最多的字符，统计这个次数
var str = 'asdfssaaasasasasaa';  
var json = {};  
for (var i = 0; i < str.length; i++) {  
    if(!json[str.charAt(i)]){  
       json[str.charAt(i)] = 1;  
    }else{  
       json[str.charAt(i)]++;
    }
};
var iMax = 0;  
var iIndex = '';  
for(var i in json){  
    if(json[i]>iMax){  
         iMax = json[i];  
         iIndex = i;  
    }  
}          
console.log('出现次数最多的是:'+iIndex+'出现'+iMax+'次');  
VM1438:18 出现次数最多的是:a出现9次

# 写一个function，清除字符串前后的空格。（兼容所有浏览器）
function trim(str) {  
    if (str && typeof str === "string") {  
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符  
    }  
}
#  react和vue有哪些不同，说说你对这两个框架的看法
相同点  

· 都支持服务器端渲染  

· 都有Virtual DOM,组件化开发,通过props参数进行父子组件数据的传递,都实现webComponent规范  

· 数据驱动视图  

· 都有支持native的方案,React的React native,Vue的weex  

不同点  

· React严格上只针对MVC的view层,Vue则是MVVM模式  

· virtual DOM不一样,vue会跟踪每一个组件的依赖关系,不需要重新渲染整个组件树.而对于React而言,每当应用的状态被改变时,全部组件都会重新渲染,所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制  

· 组件写法不一样, React推荐的做法是 JSX + inline style, 也就是把HTML和CSS全都写进JavaScript了,即'all in js'; Vue推荐的做法是webpack+vue-loader的单文件组件格式,即html,css,jd写在同一个文件;    

· 数据绑定: vue实现了数据的双向绑定,react数据流动是单向的  

· state对象在react应用中不可变的,需要使用setState方法更新状态;在vue中,state对象不是必须的,数据由data属性在vue对象中管理
