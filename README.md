# wenxuesay.github.io
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
