<template lang="pug">
bdp-container
  bdp-silder
    bdp-menu(:menus="menus")
  bdp-main
    router-view
</template>
<script>
import { menu } from '../../router/common';

export default {
  data() {
    return {
      menus: menu,
    };
  },
};
</script>
<style lang="scss">

</style>
