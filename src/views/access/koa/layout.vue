<template lang="pug">
bdp-container
  bdp-silder
    bdp-menu(:menus="menus")
  bdp-main
    router-view
</template>
<script>
import { menu } from '../../router/access';

export default {
  data() {
    return {
      menus: menu,
    };
  },
  mounted() {
    const $vm = this;
    this.menus = this.menus.map((v) => {
      const obj = Object.assign({}, v);
      if (obj.meta) {
        obj.meta.show = $vm.$route.path.toString().includes(v.path);
      }
      return obj;
    });
  },
};
</script>
<style lang="scss">

</style>
