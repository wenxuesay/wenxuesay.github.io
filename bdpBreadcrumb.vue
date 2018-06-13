<template lang="pug">
nav.breadcrumb
  ol.breadcrumb
    li.breadcrumb-item(v-for="breadcrumb in breadcrumbs")
      router-link(:to="breadcrumb.path") {{breadcrumb.name}}
  slot
</nav>
</template>
<script>
export default {
  name: 'bdp-breadcrumb',
  props: ['breadcrumbs'],
};
</script>
<style lang="scss">
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  // padding: .75rem 1rem;
  @include mb();
  list-style: none;
  background-color: #e9ecef;
  border-radius: .25rem;
  .breadcrumb-item:not(:first-child){
    &::before{
      display: inline-block;
      padding-right: .5rem;
      padding-left: .5rem;
      color: #6c757d;
      content: "/";
    }
    a.router-link-exact-active {
      color: #6c757d;
    }
  }
}
</style>

