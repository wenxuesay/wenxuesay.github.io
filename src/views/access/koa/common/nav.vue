<template lang="pug">
article.markdown
  p.t22 布局(flex+grid)
  p.t18 使用row(接受align-items,justify-content),col可以快速实现grid布局
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-row(:col="true")
        bdp-code(type="less")
          |bdp-row(:col="true")
          |  bdp-col.fill
          |  bdp-col(col="12").fill
        bdp-code(type="less")
          |bdp-row(gutter="true")
          |  bdp-col(col="1")
          |    .fill
          |  bdp-col(col="6")
          |    .fill
    bdp-col(col="6")
      bdp-row(:col="true")
        bdp-col.fill
        bdp-col(col="12").fill
      bdp-row(gutter="true")
        bdp-col(col="1")
          .fill col-1
        bdp-col(col="6")
          .fill col-6
  p.t18 设置#app{display:flex;flex-direction:column;height:100vh;},使用下面数据结构。
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-row(:col="true")
        bdp-code(type="javascript")
          |  navItems: [
          |    { name: '首页', path: '/' },
          |    { name: '文档', path: '/docs' },
          |    { name: '组件', path: '/common' },
          |    { name: '接入层', path: '/access/' },
          |  ],
        bdp-code(type="less")
          |#app
          |  bdp-header(:navItems="navItems")
          |    .right(slot="right")//右边自定义
          |  bdp-container
          |    bdp-silder(style="color: #fff") 左侧菜单区
          |    bdp-main(style="background: #20a0ff;color:#fff") 业务区
        bdp-code(type="less")
          |#app
          |  bdp-header(:navItems="navItems")
          |    .right(slot="right")//右边自定义
          |  bdp-container
          |    bdp-main.fill 业务区
    bdp-col(col="6")
      bdp-row(:col="true",style="height:200px;")
        bdp-header(:navItems="navItems")
        bdp-container
          bdp-silder(style="color: #fff") 左侧
          bdp-main.fill 业务区
      bdp-row(:col="true",style="height:200px;")
        bdp-header(:navItems="navItems")
        bdp-container
          bdp-main.fill 业务区
  p.t22 菜单栏
  p.t18
    | 根据
    router-link(to="/docs/router") 路由文档
    | 配置添加,输出menu。
  p.t16 bdp-menu
  bdp-row(gutter,ai="center")
    bdp-col(col="6")
      bdp-row(:col="true")
        bdp-code(type="javascript")
          |const menu = util.routes(routes);
          |export { menu };
        bdp-code(type="javascript")
          |import { menu } from '../../router/common';
        bdp-code(type="less")
          |bdp-menu(:menus="menus")
    bdp-col(col="2")
      bdp-menu(:menus="menus")
  p.t18 bdp-breadcrumb(自定义修改style样式)
  bdp-row(gutter,ai="center")
    bdp-col(col="6")
      bdp-code(type="less")
        |bdp-breadcrumb(:breadcrumbs="breadcrumbs")
      bdp-code(type="javascript")
        |breadcrumbs: [
        |  { path: '/', name: '首页' },
        |  { path: '/common', name: '组件' },
        |  { path: '/common/base', name: '基础组件' },
        |],
    bdp-col(col="6")
      bdp-breadcrumb(:breadcrumbs="breadcrumbs")
  p.t22 Tabs 标签页(等待更新)
  p.t22 面板(手风琴效果请参考css3)
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code(type="less")
        |bdp-panel
        |  div(slot="header") 标题
        |  | 内容区
    bdp-col(col="6")
      bdp-panel
        div(slot="header") 标题
        | 内容区
    bdp-col(col="6")
      bdp-code(type="less")
        |  bdp-panel(collapse="collapse",show="show")
        |    div(slot="header") 标题
        |    | 内容区
    bdp-col(col="6")
      bdp-panel(collapse="collapse",show="show")
        div(slot="header") 标题
        | 内容区
    bdp-col(col="6")
      bdp-code(type="less")
        |bdp-collapse
        |  bdp-panel(collapse)
        |    div(slot="header") 标题
        |    | 内容区
        |  bdp-panel(collapse)
        |    div(slot="header") 标题
        |    | 内容区
        |  bdp-panel(collapse)
        |    div(slot="header") 标题
        |    | 内容区
    bdp-col(col="6")
      bdp-collapse
        bdp-panel(collapse="collapse",:show.sync="collapse[1]")
          div(slot="header") 标题
          | 内容区
        bdp-panel(collapse="collapse",:show.sync="collapse[2]")
          div(slot="header") 标题
          | 内容区
        bdp-panel(collapse="collapse",:show.sync="collapse[3]")
          div(slot="header") 标题
          | 内容区
  p.t18 配合rows,可以直接用作card展示。
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code(type="less")
        |bdp-collapse.row
        |  bdp-panel(card="card")
        |    div(slot="header") 标题
        |    | 内容区
        |  bdp-panel(card="card")
        |    div(slot="header") 标题
        |    | 内容区
        |  bdp-panel(card="card")
        |    div(slot="header") 标题
        |    | 内容区
    bdp-col(col="6")
      bdp-collapse.row
        bdp-panel(card="card")
          | 内容区
        bdp-panel(card="card")
          | 内容区
        bdp-panel(card="card")
          | 内容区
</article>
</template>
<script>
import { menu } from '../../router/docs';

export default {
  data() {
    return {
      modalShow: false,
      menus: menu,
      collapse: [true],
      navItems: [
        { name: '首页', path: '/' },
        { name: '文档', path: '/docs' },
        { name: '组件', path: '/common' },
        { name: '接入层', path: '/access/' },
      ],
      breadcrumbs: [
        { path: '/', name: '首页' },
        { path: '/common', name: '组件' },
        { path: '/common/base', name: '基础组件' },
      ],
    };
  },
  watch: {
    collapse() {
      console.log(this.collapse);
    },
  },
};
</script>

