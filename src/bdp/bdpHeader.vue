<template lang="pug">
header.bdp-header
  .row.jc-space-between
    .title
      img(src="/static/bdp.png")
      .right
        router-link.text-fill(to="/")  {{name}}
    .col
      bdp-nav(:navItems="navItems")
    slot(name="logout")
</template>
<script>

export default {
  name: 'bdp-header',
  props: ['navItems', 'name'],
};
</script>
<style lang="scss">
.text-fill {
  // background: -webkit-linear-gradient(left, #4f185d , #fe5d4b);     /* 背景色渐变 */
  background: -webkit-linear-gradient(left, #b4e2f0 , #15a1d8);
  -webkit-background-clip: text;         /* 规定背景的划分区域 */
  -webkit-text-fill-color: transparent;  /* 防止字体颜色覆盖 */
  font-style: italic
}
</style>

