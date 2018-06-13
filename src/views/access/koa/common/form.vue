<template lang="pug">
  article.markdown
    p.t22 表单
    p.t18 表单示例
    p.t16 命名规范 form为表单对象名称,formRule为表单校验规则
    p.t16 添加.sf-form 控制样式
    bdp-row(gutter)
      bdp-col(:col="6")
        bdp-code(type="javascript")
          |  form: {
          |    taskName: '',
          |    time: '',
          |    updatedAt: '',
          |    taskId: '',
          |    taskType: '',
          |    taskRadio: '',
          |    taskCheckbox: [],
          |  },


        p.t16 数据结构
        bdp-code(type="less")
          | el-form.sf-form(:model="form",label-width="120px",:rules="formRules",ref="form")
          |   el-form-item(label="任务名称:",prop="taskName")
          |     el-input(v-model="form.taskName",placeholder="请选择")
          |   el-form-item(label="创建时间:",prop="time")
          |     el-date-picker(v-model="form.time",type="date")
          |   el-form-item(label="修改时间:",prop="updatedAt")
          |     el-date-picker(v-model="form.updatedAt",type="daterange")
          |  el-form-item(label="任务ID:",prop="taskId")
          |    el-input(v-model="form.taskId")
          |  el-form-item(label="任务类型:",prop="taskType")
          |    el-select(v-model="form.taskType")
          |      el-option(v-for="option in taskOptions",:label="option.label",:key="option.value",:value="option.value")
          |  el-form-item(label="是否新任务",prop="taskRadio")
          |    el-radio(v-model="form.taskRadio",label="Y") 是
          |    el-radio(v-model="form.taskRadio",label="N") 否
          |  el-form-item(label="任务管理员",prop="taskCheckbox")
          |    el-checkbox(v-model="form.taskCheckbox",label="jia") 管理员甲
          |    el-checkbox(v-model="form.taskCheckbox",label="yi") 管理员乙
          |  .btn-group.text-right
          |    button.btn-primary(@click.prevent="saveForm") 确定
          |    button.btn-default(@click.prevent="resetFields('form')") 取消

        p.t16 校验规则
        bdp-code(type="javascript")
          |formRules: {
          |  taskName: [
          |    { required: true, message: '任务名称', trigger: 'blur' },
          |  ],
          |  time: [
          |    { type: 'date', required: true, message: '请选择日期', trigger: 'blur' },
          |  ],
          |  updatedAt: [
          |    { type: 'array', required: true, message: '请选择日期', trigger: 'blur' },
          |  ],
          |  taskId: [
          |    { required: true, message: '任务ID', trigger: 'blur' },
          |  ],
          |  taskType: [
          |    { required: true, message: '任务类型', trigger: 'blur' },
          |  ],
          |},

        p.t16 常用方法
        bdp-code
          |
          |this.$refs.form.validate((vaild) => {
          | if (vaild) {
          |  console.log(this.form);
          |  this.form.time = moment(this.form.time).format('YYYY-MM-DD');
          |  this.form.updatedAt = this.form.updatedAt.map(v => moment(v).format('YYYY-MM-DD'));
          |  console.log(JSON.stringify(this.form));
          | }
          |});
          |
          |resetFields(type) {
          |  this.$refs[type].resetFields();
          |},
      bdp-col(:col="6")
        p.t16 结果:
        p.t16 {{form}}
        el-form.sf-form(:model="form",label-width="120px",:rules="formRules",ref="form")
          el-form-item(label="任务名称:",prop="taskName")
            el-input(v-model="form.taskName",placeholder="请选择")
          el-form-item(label="创建时间:",prop="time")
            el-date-picker(v-model="form.time",type="date")
          el-form-item(label="修改时间:",prop="updatedAt")
            el-date-picker(v-model="form.updatedAt",type="daterange")
          el-form-item(label="任务ID:",prop="taskId")
            el-input(v-model="form.taskId")
          el-form-item(label="任务类型:",prop="taskType")
            el-select(v-model="form.taskType")
              el-option(v-for="option in taskOptions",:label="option.label",:key="option.value",:value="option.value")
          el-form-item(label="是否新任务",prop="taskRadio")
            el-radio(v-model="form.taskRadio",label="Y") 是
            el-radio(v-model="form.taskRadio",label="N") 否
          el-form-item(label="任务管理员",prop="taskCheckbox")
            el-checkbox(v-model="form.taskCheckbox",label="jia") 管理员甲
            el-checkbox(v-model="form.taskCheckbox",label="yi") 管理员乙
          .btn-group.text-right
            button.btn-primary(@click.prevent="saveForm") 确定
            button.btn-default(@click.prevent="resetFields('form')") 取消
    p.t18 bdp-form(以上表单组件满足业务需求,bdp-form待更新整合select2,radio,checkbox,flatpickr,validate)
</template>
<script>
import moment from 'moment';

export default {
  data() {
    return {
      form: {
        taskName: '',
        time: '',
        updatedAt: '',
        taskId: '',
        taskRadio: '',
        taskCheckbox: [],
        taskType: '',
      },
      taskOptions: [{
        label: '123', value: '123',
      }],
      formRules: {
        taskName: [
          { required: true, message: '任务名称', trigger: 'blur' },
        ],
        time: [
          {
            type: 'date', required: true, message: '请选择日期', trigger: 'blur',
          },
        ],
        updatedAt: [
          {
            type: 'array', required: true, message: '请选择日期', trigger: 'blur',
          },
        ],
        taskRadio: [
          {
            required: true, message: '请选择', trigger: 'blur',
          },
        ],
        taskCheckbox: [
          {
            type: 'array', required: true, message: '请选择管理员', trigger: 'blur',
          },
        ],
        taskId: [
          { required: true, message: '任务ID', trigger: 'blur' },
        ],
        taskType: [
          { required: true, message: '任务类型', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    saveForm() {
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          console.log(this.form);
          this.form.time = moment(this.form.time).format('YYYY-MM-DD');
          this.form.updatedAt = this.form.updatedAt.map(v => moment(v).format('YYYY-MM-DD'));
          console.log(JSON.stringify(this.form));
        }
      });
    },
    resetFields(type) {
      this.$refs[type].resetFields();
    },
  },
};
</script>

