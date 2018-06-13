<template>
<article class="markdown">
  <p class="t22">图表数据展示</p>
  <p class="t18">bdp-charts(基于echarts封装)</p>
  <p class="t16">提供3中图形的基础模板,提供util.echartsFormat让数据(srcData)从一维变成多维(echarsData)。</p>
  <pre v-highlightjs>
    <code>
bdp-charts(id="my" :echartsData="echartsData")
    </code>
  </pre>
  <pre v-highlightjs>
    <code class="javascript">
      echartsData: {
        legend: ['event1', 'event2', 'event3'],
        xData: ['2017-09-27', '2017-09-28', '2017-09-29', '2017-09-30'],
        yData: [
          [12759, 12859, 12959, 13059],
          [22759, 22859, 22959, 23059],
          [32759, 32859, 32959, 33059],
        ],
      },
      srcData:[
        {dt:'2017-09-27','event1':'12759',event2:22759,event3:'32759'}
      ]
  </code></pre>
  <bdp-charts id="my" :echartsData="echartsData"></bdp-charts>
</article>
</template>
<script>
export default {
  data() {
    return {
      echartsData: {
        legend: ['event1', 'event2', 'event3'],
        xData: ['2017-09-27', '2017-09-28', '2017-09-29', '2017-09-30'],
        yData: [
          [12759, 12859, 12959, 13059],
          [22759, 22859, 22959, 23059],
          [32759, 32859, 32959, 33059],
        ],
      },
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
