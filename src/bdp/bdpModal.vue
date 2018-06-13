<template lang="pug">
  .modal.fade(:class="{show:show,left: type=='left',right:type=='right'}")
    .modal-dialog(:class="size")
      .modal-content
        .modal-header
          slot(name="header")
          span.modal-close(@click="close") ×
        .modal-body
          slot()
        .modal-footer
          slot(name="footer")
</template>
<script>
export default {
  // model: {
  //   prop: 'value',
  //   event: 'close',
  // },
  name: 'bdp-modal',
  props: ['show', 'size','type'],
  methods: {
    close() {
      this.$emit('update:show', false);
    },
  },
  watch: {
    show() {
      if (this.show) {
        const back = document.createElement('div');
        back.classList.add('modal-back');
        document.body.appendChild(back);
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
        const back = document.querySelector('.modal-back');
        if (back) {
          document.body.removeChild(back);
        }
      }
    },
  },
};
</script>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0;
  &.show {
    display: block;
  }
  &.left,&.right {
    &.show {
      display: flex;
    }
    .modal-dialog {
      margin:0;
      &.lg{
        width: 400px;
      }
      &.sm {
        width: 300px;
      }
      .modal-content {
        height: 100vh;
        border: none;
        border-radius: 0;
        box-sizing: border-box;
      }
    }
  }
  &.right {
    flex-direction: row-reverse;
  }
  .modal-dialog {
    height: 100vh;
    position: relative;
    width: auto;
    margin: .5rem;
    pointer-events: none;
    max-width: 700px;
    margin: 4.75rem auto;

    .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0,0,0,.2);
      border-radius: .3rem;
      outline: 0;
      .modal-header {
        .modal-close {
          cursor: pointer;
        }
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #e9ecef;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
      }
      .modal-body {
        overflow-y: auto;
        position: relative;
        flex: 1 1 auto;
        padding: 1rem;
      }
      .modal-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem;
        border-top: 1px solid #e9ecef;
        button {
          margin: 0 7px;
        }
        .btn-group {
          margin: 0;
        }
      }
    }
  }
}
.modal-back {
  opacity: .5;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
</style>

