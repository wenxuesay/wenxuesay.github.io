<template lang="pug">
article.markdown
  p.t22 基础组件
  p.t18
    | 前言 基于样式、组件封装成
    a(href="http://repos/bdp-ui-dist/browse") bpd-ui
    | ,提供assets/style.scss 修改样式。
  //- p.t16 对于现有业务逻辑,element-ui能提供基本需求的组件。由于模块化构建项目,只需更改底层实现的方式,可以切换不同的样式库与其他开源组件。
  p.t16 建议使用样式自定义按钮,当然 你可以通过实现组件。
  //- p.t18
  //-   a(href="https://github.com/vuejs/awesome-vuevue-aswome") vue-aswome
  //- p.t16
  //-   a(href="http://element-cn.eleme.io/#/zh-CN/component/installation") element-ui
  p.t22 buttons
  p.t18 basic(按钮组)
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code(type="less")
        |.btn-group
        |  .btn-primary 主要按钮
        |  .btn-default 默认按钮
        |  .btn-warn 提示按钮
        |  .btn-error 删除按钮
        |  .btn-dis 禁用按钮
      bdp-code(type="less")
        |btn-group
        |  btn(type="primary") 主要按钮
        |  btn(type="default") 默认按钮
        |  btn(type="warn") 提示按钮
        |  btn(type="error") 删除按钮
        |  btn(type="dis") 禁用按钮
    bdp-col(col="6")
      btn-group
        btn(type="primary") 主要按钮
        btn(type="default") 默认按钮
        btn(type="warn") 提示按钮
        btn(type="error") 删除按钮
        btn(type="dis") 禁用按钮
  p.t18 sizes(.btn-sm,.btn-lg,.btn-tiny)
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code(type="less")
        |btn-group
        |  btn(type="primary",size="lg") 大型按钮
        |  btn(type="primary") 标准按钮
        |  btn(type="primary",size="sm") 小型按钮
        |  btn(type="primary",size="tiny") 迷你按钮
    bdp-col(col="6")
      btn-group
        btn(type="primary",size="lg") 大型按钮
        btn(type="primary") 标准按钮
        btn(type="primary",size="sm") 小型按钮
        btn(type="primary",size="tiny") 迷你按钮
  p.t18 outline风格(.btn-red,.btn-blue,.btn-orange)
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code(type="less")
        |btn-group
        |  btn(type="blue") outline
        |  btn(type="orange") outline
        |  btn(type="red") outline
    bdp-col(col="6")
      btn-group
        btn(type="blue") outlineStyle
        btn(type="orange") outlineStyle
        btn(type="red") outlineStyle
  p.t18 按钮组(.bnt-group)
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code(type="less")
        |btn-addons
        |  btn(type="blue") outlineStyle
        |  btn(type="orange") outlineStyle
        |  btn(type="red") outlineStyle
    bdp-col(col="6")
      btn-addons
        btn(type="blue") outlineStyle
        btn(type="orange") outlineStyle
        btn(type="red") outlineStyle
  p.t18 drop-down(btn对应样式)
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code(type="less")
        |drop-down(name="下拉菜单",btn="btn-blue")
        |  .drop-down-item hello world!
        |drop-down(name="下拉菜单",btn="btn-blue")
        |  .drop-down-item hello world!
    bdp-col(col="6")
      bdp-drop-down(name="下拉菜单",btn="btn-blue")
        .drop-down-item
          router-link(to="/") hello world!
      bdp-drop-down(name="下拉菜单")
        .drop-down-item
          router-link(to="/") hello world!
</article>
</template>
<script>
export default {
  data() {
    return {
      modalShow: false,
      breadcrumbs: [
        { path: '/', name: '首页' },
        { path: '/common', name: '组件' },
        { path: '/common/base', name: '基础组件' },
      ],
    };
  },
};
</script>

