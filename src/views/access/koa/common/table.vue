<template>
<article class="markdown">
  <p class="t22">表格数据展示</p>
  <p class="t18">对于表格数据展示，我们提供一个公用组件bdp-table,根据后台字段修改util.tableSearch以助于快速构建高质量的前端页面。</p>
  <p class="t18">bdp-table(基于element-ui表格的封装)</p>
  <p class="t18">基础设置
  <pre v-highlightjs><code>
bdp-table(:tData="tData" :tColumns="tColumns" :tableSearch.sync="tableSearch" @search="search")
  </code></pre>
  <div class="sf-panel">
    <div class="panel-heading">
      <p>获取数据结果:{{tableSearch}}</p>
    </div>
    <div class="panel-body">
      <bdp-table :tData="tData" :tColumns="tColumns" :tableSearch.sync="tableSearch" @search="search"></bdp-table>
    </div>
  </div>
  <div class="sf-panel">
    <div class="panel-heading">
      后台返回数据，设置this.tData = res.result.list,this.tableSearch.total = res.result.total;
    </div>
    <div class="panel-body">
       <pre v-highlightjs>
      <code class="javascript">
        {
          state:'ok',
          result:{
            list:[
              {id:1, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
              {id:2, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
              {id:3, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
              {id:4, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
              {id:5, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
              {id:6, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
              {id:7, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
              {id:8, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
              {id:9, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
              {id:10, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
              {id:11, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
            ],
            total:11,
          }
        }
      </code></pre>
    <pre v-highlightjs><code class="javascript">
    data() {
      return {
        srcData: [
          { id: 1, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
          { id: 2, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
          { id: 3, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
          { id: 4, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
          { id: 5, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
          { id: 6, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
          { id: 7, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
          { id: 8, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
          { id: 9, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
          { id: 10, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
          { id: 11, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
        ],
        tData: [
          // {id:1, name: 'hdfs', hosts_count: 123, remarks: '测试用' },
          // {id:2, name: 'adfs', hosts_count: 333, remarks: '测试用2' },
        ],
        tColumns: [
            { prop: 'name', label: '主机组名称', sortable: true }, // 前端排序
            { prop: 'hosts_count', label: '主机数', sortable: 'custom' }, // 后台排序 前端排序会置换后台排序，请设置一种逻辑
            { prop: 'remarks', label: '备注', sortable: true, width: '120' }, //固定宽度
        ],
        tableSearch: util.tableSearch(),// util.tableSearch({selection:[]}) 开启
      };
    },
    methods: {
      //前台分页逻辑
      search() {
        this.tData = [...this.srcData].splice((this.tableSearch.currentPage - 1) * 10, 10);
        //注意 开启selection
        // const formObj = Object.assign({},this.tableSearch)
        // delete formObj.selection 删除选择 或使用map获取所需字段,禁止传递多余数据到后台。
      },
    },
    </code></pre>
    </div>
  </div>
  <p class="t18">扩展使用,请查看git库使用的示例,或者参考element-ui</p>
  <pre v-highlightjs><code>
  bdp-table(:tColumns='tColumns',:tData="tData",:tableSearch.sync="tableSearch",@search="search")
    el-table-column(slot="a",label='主机组名称')
      template(slot-scope="scope")
        router-link(:to="'/host/groups/groupsDetail/'+scope.row.id")
        //- router-link(:to="{ path: '/host/groups/groupsDetail/'+scope.row.id, query: {plan: '详情' }}")
    //- el-table-column(slot="actions",label='操作')
      template(slot-scope="scope")
        //- button.first.btn-blue.btn-tiny(@click="tEdit(scope.row,scope.index)") 编辑
        button.btn-red.btn-tiny(@click="tDel(scope.row,scope.index)") 删除主机组
    </code></pre>
  <bdp-table :tData="tData" :tColumns="tColumns" :tableSearch.sync="tableSearch" @search="search">
    <el-table-column type="expand" slot="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="table-expand">
          <el-form-item label="主机组名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column slot="a" label='主机组名称'>
      <template slot-scope="scope">
        <router-link :to="'/common/table/'+scope.row.id">
          {{scope.row.name}}
        </router-link>
      </template>
    </el-table-column>
    <el-table-column slot="actions" label='操作'>
      <template slot-scope="scope">
        <a class="table-btn">编辑</a>
        <a class="table-btn">删除</a>
      </template>
    </el-table-column>
  </bdp-table>
</article>
</template>
<script>
import util from '../../lib/util';

export default {
  data() {
    return {
      srcData: [
        {
          id: 1, name: 'hdfs', hosts_count: 123, remarks: '测试用',
        },
        {
          id: 2, name: 'adfs', hosts_count: 333, remarks: '测试用2',
        },
        {
          id: 3, name: 'hdfs', hosts_count: 123, remarks: '测试用',
        },
        {
          id: 4, name: 'adfs', hosts_count: 333, remarks: '测试用2',
        },
        {
          id: 5, name: 'hdfs', hosts_count: 123, remarks: '测试用',
        },
        {
          id: 6, name: 'adfs', hosts_count: 333, remarks: '测试用2',
        },
        {
          id: 7, name: 'hdfs', hosts_count: 123, remarks: '测试用',
        },
        {
          id: 8, name: 'adfs', hosts_count: 333, remarks: '测试用2',
        },
        {
          id: 9, name: 'hdfs', hosts_count: 123, remarks: '测试用',
        },
        {
          id: 10, name: 'adfs', hosts_count: 333, remarks: '测试用2',
        },
        {
          id: 11, name: 'adfs', hosts_count: 333, remarks: '测试用2',
        },
      ],
      tData: [
      ],
      tColumns: [
        { prop: 'name', label: '主机组名称', sortable: 'custom' }, // 前端排序
        { prop: 'hosts_count', label: '主机数', sortable: 'custom' }, // 后台排序
        {
          prop: 'remarks', label: '备注', sortable: 'custom', width: '120',
        }, // 固定宽度
      ],
      tableSearch: util.tableSearch({ selection: [] }),
      filters: [
        {
          label: '数据库:', key: 'name', placeholder: '请输入', type: 'input', value: '',
        },
        {
          label: '日期:', key: 'date', placeholder: '请输入', date: 'date', value: '',
        },
        {
          label: '类型:',
          key: 'type',
          placeholder: '请输入',
          value: '',
          options: [
            { label: 'mysql', value: 'mysql' },
            { label: 'es', value: 'es' },
          ],
        },
      ],
    };
  },
  methods: {
    search() {
      this.tData = [...this.srcData].splice((this.tableSearch.currentPage - 1) * 10, 10);
    },
  },
  mounted() {
    this.tableSearch.total = this.srcData.length;
    this.tData = [...this.srcData].splice((this.tableSearch.currentPage - 1) * 10, 10);
  },
};
</script>

