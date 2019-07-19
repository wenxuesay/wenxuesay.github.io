# 使用Boolean过滤数组中的所有假值
我们知道JS中有一些假值：false，null，0，""，undefined，NaN，怎样把数组中的假值快速过滤呢，可以使用Boolean构造函数来进行一次转换
const compact = arr => arr.filter(Boolean)
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])             // [ 1, 2, 3, 'a', 's', 34 ]

# 数组的原型对象上有一个方法，toString, 它能把数组的所以元素转化成用逗号隔开的字符串。
var arr = [1, [2, 3, [4]], "a", "b", ["c", "d"], [["d"],"e"], "f"];  
arr.toString()  // "1,2,3,4,a,b,c,d,d,e,f"
// 所以，利用 split 先把字符串转化为单层数组，再进行处理。
const flatten = (origin) => origin.toString().split(',');  // ["1", "2", "3", "4", "a", "b", "c", "d", "d", "e", "f"]

# 有一楼梯共M级，刚开始时你在第一级，若每次只能跨上一级或二级，要走上第M级，共有多少种走法？
	function cStairs(n) {
    if(n === 1 || n === 2) {
        return 1;
    } else {
        return cStairs(n-1) + cStairs(n-2)
    }
}
# 获取地址栏问号后面的参数组成对象方式
    let str = window.location.hash;
    urlToObj(str) {
                const obj = {};
                const arr1 = str.split('?');
                const arr2 = arr1[1].split('&');
                for (let i = 0; i < arr2.length; i += 1) {
                    const res = arr2[i].split('=');
                    // eslint-disable-next-line prefer-destructuring
                    obj[res[0]] = res[1];
                }
                return obj;
       }
  var url = "http://www.baidu.com?a=1&b=2&c=3" ;
  urlToObj(url);
  注：获取url信息，url = "http://www.baidu.com?a=1&b=2&c=3" ;
  1. 设置或获取整个 URL 为字符串 ： window.location.href ；
  2. 设置或获取 href 属性中跟在问号后面的部分 ： window.location.search ;
  3. 设置或获取 URL 的协议部分 ： window.location.protocol ； //http:
