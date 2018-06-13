<template lang="pug">
  div.drop-down(:class="show ? 'show':''")
    .drop-button(@click="showz",:class="btn") {{name}}
    .drop-down-menu
      slot
</template>

<script>
export default {
  name: 'bdp-drop-down',
  props: ['name', 'btn'],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showz() {
      document.body.click();
      this.show = !this.show;
    },
  },
  mounted() {
    const $vm = this;
    document.addEventListener('click', (e) => {
      const arr = e.target.className.split(' ');
      if (!arr.includes('drop-button')) {
        $vm.show = false;
      }
    });
  },
};
</script>
<style lang="scss">
.drop-down{
  display: inline-block;
  position: relative;
  .drop-button {
    cursor: pointer;
    font-size: 14px;
    // padding: 0 5px;
    &::after{
     display: inline-block;
     width: 0;
     height: 0;
     margin-left: .255em;
     vertical-align: .255em;
     content: " ";
     border-top: .3em solid;
     border-right: .3em solid transparent;
     border-bottom: 0;
     border-left: .3em solid transparent;
    }
  }
  .drop-down-menu {
    transform: translate3d(0px, 38px, 0px);
    top: 0px;
    left: 0px;
    will-change: transform;
    z-index: 1000;
    float: left;
    min-width: 10rem;
    padding: .18rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;
    display: none;
    position: absolute;
    .drop-down-item {
      display: block;
      // width: 100%;
      // color: #666 !important;
      a {
        color:#16181b;
      }
      &:hover {
        background: #f8f9fa;
        color: #16181b;
        a {
          color: #16181b;
        }
      }
      padding: .25rem 1.5rem;
      clear: both;
      font-weight: 400;
      color: #212529;
      text-align: inherit;
      white-space: nowrap;
      background-color: transparent;
      border: 0;
    }
  }
  &.show {
    .drop-down-menu {
      display: block;
      cursor: pointer;
    }
  }
}
</style>

