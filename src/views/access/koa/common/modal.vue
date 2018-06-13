<template lang="pug">
article.markdown
  p.t22 弹出层
  p.t18 modal
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code(type="less")
        |button.btn-blue(@click="modalShow = true") 打开modal
        |button.btn-blue(@click="modalShowLeft = true") 左侧modal
        |button.btn-blue(@click="modalShowRight = true") 右侧modal
        |modal(:show.sync="modalShow",size="sm")
        |  p(slot="header") header
        |  | hello world!
        |  .modal-footer(slot="footer")
        |    button.btn-primary 确定
        |    button.btn-default(@click="modalShowLeft = false") 取消
        |modal(:show.sync="modalShowLeft",size="sm",left)
        |  p(slot="header") header
        |  | hello world!
        |  .modal-footer(slot="footer")
        |    button.btn-primary 确定
        |    button.btn-default(@click="modalShowLeft = false") 取消
        |modal(:show.sync="modalShowRight",size="sm",right)
        |  p(slot="header") header
        |  | hello world!
        |  .modal-footer(slot="footer")
        |    button.btn-primary 确定
        |    button.btn-default(@click="modalShowRight = false") 取消
    bdp-col(col="6")
      button.btn-blue(@click="modalShow = true") 打开modal
      button.btn-blue(@click="modalShowLeft = true") 左侧modal
      button.btn-blue(@click="modalShowRight = true") 右侧modal
      bdp-modal(:show.sync="modalShow",size="sm")
        p(slot="header") header
        | hello world!
        .btn-group(slot="footer")
          button.btn-primary 确定
          button.btn-default(@click="modalShow = false") 取消
      bdp-modal(:show.sync="modalShowLeft",size="sm",type="left")
        p(slot="header") header
        | hello world!
        .btn-group(slot="footer")
          button.btn-primary 确定
          button.btn-default(@click="modalShowLeft = false") 取消
      bdp-modal(:show.sync="modalShowRight",size="sm",type="right")
        p(slot="header") header
        | hello world!
        .btn-group(slot="footer")
          button.btn-primary 确定
          button.btn-default(@click="modalShowRight = false") 取消
  p.t18 bdp-admin 权限控制
  p.t18
    |Tooltip,Popover 请参考
    a(href="https://github.com/freeze-component/vue-popper") Vue-popper
  p.t18
    a(href="https://sweetalert.js.org/docs/") SweetAlert
    | 常用封装
  bdp-row(gutter)
    bdp-col(col="6")
      bdp-code
        |button.btn-default(@click="walert('success')") 成功
        |button.btn-orange(@click="walert('warning')") 警告
        |button.btn-default(@click="walert('info')") 信息
        |button.btn-red(@click="walert('error')") 错误
        |button.btn-red(@click="sDelete") 删除
      bdp-code
        |methods: {
        |  showSucces(type) {
        |    this.$swal[type]('操作成功');
        |  },
        |  async sDelete() {
        |    const willDelete = await this.$swal({
        |      title: '确定删除吗？',
        |      text: '删除不可逆转！',
        |      icon: 'warning',
        |      dangerMode: true,
        |    });
        |    if (willDelete) this.$swal.success('删除成功');
        |  },
        |},
    bdp-col(col="6")
      button.btn-default(@click="walert('success')") 成功
      button.btn-orange(@click="walert('warning')") 警告
      button.btn-blue(@click="walert('info')") 信息
      button.btn-red(@click="walert('error')") 错误
      button.btn-red(@click="sDelete") 删除
</template>

<script>
export default {
  data() {
    return {
      modalShow: false,
      modalShowLeft: false,
      modalShowRight: false,
    };
  },
  methods: {
    walert(type) {
      this.$swal[type]('操作成功');
    },
    async sDelete() {
      const willDelete = await this.$swal({
        title: '确定删除吗？',
        text: '删除不可逆转！',
        icon: 'warning',
        dangerMode: true,
      });
      if (willDelete) this.$swal.success('删除成功');
    },
  },
};
</script>

