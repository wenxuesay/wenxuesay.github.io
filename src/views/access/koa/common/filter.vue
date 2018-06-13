<template>
<article class="markdown">
  <p class="t22">筛选组件</p>
  <p class="t18">对于业务数据展示，我们提供一套简单的搜索组件和复杂业务的搜索组件，以助于快速构建高质量的前端页面。</p>
  <p class="t16">bdp-simple-filter(通过@search(form))获取,可以通过util.cleanObj()方法去掉空的传递函数</p>
  <p class="t16">获取数据结果:{{form}}</p>
  <bdp-simple-filter :filters="filters" @search="search" @reset="reset"></bdp-simple-filter>
    <pre v-highlightjs>
    <code class="javascript">
    data() {
      return {
        filters: [
          { label: '数据库:', key: 'name', placeholder: '请输入', type: 'input', value: '' },
          { label: '日期:', key: 'date', placeholder: '请输入', date: 'date', value: '' },
          { label: '类型:',
            key: 'type',
            placeholder: '请输入',
            value: '',
            options: [
            { label: 'mysql', value: 'mysql' },
            { label: 'es', value: 'es' },
            ] },
        ],
      };
    },
    </code></pre>
  <p class="t22">复杂筛选组件</p>
  <p class="t18">可以参考bdp-filter,根据业务逻辑改造</p>
</article>
</template>
<script>
export default {
  data() {
    return {
      form: '',
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
    search(form) {
      this.form = form;
    },
    reset() {
      this.form = {};
    },
  },
};
</script>

