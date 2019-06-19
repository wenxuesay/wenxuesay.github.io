# 将数字转化为千分位格式
const toDecimalMark = num => num.toLocaleString('en-US');
toDecimalMark(12305030388.9087); // "12,305,030,388.909"

# 多维数组转一维数组
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

# 过滤对象数组
const reducedFilter = (data, keys, fn) =>data.filter(fn).map(el =>keys.reduce((acc, key) => {acc[key] =el[key];return acc;}, {}));
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

let a = reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]

# 数组对象去重
const uniqueElementsBy = (arr, fn) =>arr.reduce((acc, v) => {if (!acc.some(x => fn(v, x))) acc.push(v);return acc;}, []);

uniqueElementsBy([{id: 1, name: 'Jhon'}, {id: 2, name: 'sss'}, {id: 1, name: 'Jhon'}], (a, b) => a.id == b.id)
// [{id: 1, name: 'Jhon'}, {id: 2, name: 'sss'}]

# 获取数组交集
const similarity = (arr, values) => arr.filter(v => values.includes(v));
similarity([1, 2, 3], [1, 2, 4]); // [1,2]

# js导出csv表格数据
    handleClickexport() {
        if (!this.prData || this.prData.length <= 0) {
            this.$message({
                message: '请先进行查询,并等待查询结果返回!',
                type: 'error',
            });
            return;
        }
        let csvContent = 'data:text/csv;charset=utf-8,\ufeff';
        const headerLabel = this.columnData.map((item) => item.label);
        const headerProp = this.columnData.map((item) => item.prop);
        csvContent += `${headerLabel}\n`;
        console.log(this.columnData, 'this.columnData');
        this.prData.forEach((item, index) => {
            let dataString = '';
            for (let i = 0; i < headerProp.length; i += 1) {
                dataString += `${item[headerProp[i]]},`;
            }
            csvContent += index < this.prData.length ? dataString.replace(/,$/, '\n') : dataString.replace(/,$/, '');
        });
        console.log(csvContent, 'csvContent');
        this.$refs.link.setAttribute('href', encodeURI(csvContent));
        //fileName文件名称 例快件.csv
        this.$refs.link.setAttribute('download', this.fileName);
     }
