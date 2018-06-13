<template lang="pug">
article.markdown
  p.t22 bdp-map(基础echarts的中国地图封装)
  bdp-row(gutter)
    bdp-col(col="2")
      bdp-code(type="javascript")
        |flyData: [
        |{
        |  fromName: '深圳',
        |  toName: '北京',
        |},
        |{
        |  fromName: '深圳',
        |  toName: '上海',
        |},
        |{
        |  fromName: '深圳',
        |  toName: '成都',
        |},
        |{
        |  fromName: '深圳',
        |  toName: '武汉',
        |},
        |{
        |  fromName: '深圳',
        |  toName: '哈尔滨',
        |},
        |{
        |  fromName: '深圳',
        |  toName: '拉萨',
        |},
        |{
        |  fromName: '深圳',
        |  toName: '银川',
        |},
        |],
      bdp-code(type="less")
        | bdp-map(id="emap",:flyData='flyData')
    bdp-col(col="10")
     bdp-map(id="emap",:flyData='flyData')
</template>
<script>
import bdpMap from '../../bdp/bdpMap';

export default {
  components: {
    'bdp-map': bdpMap,
  },
  data() {
    return {
      flyData: [
        {
          fromName: '深圳',
          toName: '北京',
        },
        {
          fromName: '深圳',
          toName: '上海',
        },
        {
          fromName: '深圳',
          toName: '成都',
        },
        {
          fromName: '深圳',
          toName: '武汉',
        },
        {
          fromName: '深圳',
          toName: '哈尔滨',
        },
        {
          fromName: '深圳',
          toName: '拉萨',
        },
        {
          fromName: '深圳',
          toName: '银川',
        },
      ],
    };
  },
};
</script>

