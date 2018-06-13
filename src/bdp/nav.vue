<template lang="pug">
  ul.bdp-nav
    li.nav-item(v-for="item in navItems")
      router-link.nav-link(:to="item.path",:exact="item.path == '/'? true:false") {{item.name}}
</template>

<script>
export default {
  name: 'bdp-nav',
  props: ['navItems'],
};
</script>
<style lang="scss">
.bdp-nav{
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  .nav-item{
    line-height: 65px;
    .nav-link {
      margin: 0 33px;
      color: $menu-font;
      font-size: 16px;
      padding:5px 0;
      &.router-link-active{
        border-bottom: 2px solid #409EFF;
        color: $pr;
      }
    }
  }
}
</style>

