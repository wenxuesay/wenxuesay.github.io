<template lang="pug">
bdp-container
  bdp-silder
    bdp-menu(:menus="menus")
  bdp-main
    router-view
</template>
<script>
import { menu } from '../../router/page';

export default {
  data() {
    return {
      menus: menu,
    };
  },
};
</script>
