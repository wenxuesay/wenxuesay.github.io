<template lang="pug">
  #app
    bdp-header(:navItems="navItems",:name="name")
      .logout(slot="logout")
        icon.user(name="user")
        span {{userName}}
        i(@click="userLogOut")
          icon.signOut(name="sign-out")
    router-view(:key="key")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      navItems: [
        { name: '首页', path: '/' },
        { name: '文档', path: '/docs' },
        { name: '组件', path: '/common' },
        { name: '接入层', path: '/access' },
        { name: '测试', path: '/page' },
      ],
      name: 'Bdp Front Architecture  ',
    };
  },
  // 同组件刷新
  computed: {
    ...mapGetters({
      userName: 'userName',
    }),
    activeIndex() {
      return `/${this.$route.path.split('/')[1]}`;
    },
    key() {
      return this.$route.meta ? this.$route.meta.title + new Date() : this.$route + new Date();
    },
  },
  methods: {
    ...mapActions([
      'userLogin', 'getRoles', 'userLogOut',
    ]),
    // 激活命名空间后使用
    // ...mapActions('global',[
    //   'userLogin', 'getRoles', 'userLogOut',
    // ]),
  },
  mounted() {
    // this.$axios.get('/api/logout').then((res) => {
    //   console.log(res);
    // });
    this.userLogin();
  },
};
</script>

<style lang="scss">
#app {
}
</style>
