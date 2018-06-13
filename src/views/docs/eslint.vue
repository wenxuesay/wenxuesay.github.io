<template>
<article class="markdown">
  <p class="t22">代码规范</p>
  <p class="t18">一套好的项目代码规范，有助于团队协助,提高工作效率。</p>
  <p class="t22">javascript</p>
  <p class="t16">对于ES5/6/7,我们提供eslint代码规范检查,对于一些不符合规范的代码通过vscode自动纠正,局部严谨代码需要手动修正提高JS的运行效率。</p>
  <p class="t18">eslint配置</p>
  <pre v-highlightjs>
vscode自动纠正配置,对于缩进(tab= 2空格),禁止直接使用缩进，导致GIT全部刷新。
    <code class="bash">
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "pug",
            "autoFix": true
        },
        "html",
        "vue"
    ],
    "editor.tabSize": 2,
    "editor.fontSize": 16,
    "eslint.autoFixOnSave": true,
    </code></pre>
  <pre v-highlightjs>
.eslintrc.js基础配置文件(对于部门,项目内部可直接配置不同的规则)
    <code class="javascript">
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'prefer-destructuring': 'off',
    // "indent": ["off", 4],
    'max-len': 'off',
    'no-console': ["off"],
    'linebreak-style': 'off',
    'array-callback-return': 'off',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
    </code></pre>
  <p class="t22">html</p>
  <p class="t18">对于html,代码规范是非常必要的,对于层级,缩进,项目结构都有很高的要求,我们通过pug(jade)直接输出html,解决的不规范的问题。</p>
  <p class="t18">pug可以使用css选择器的方式编写html,以便于sass的模块化编写。</p>
  <pre v-highlightjs>
基础示例(对缩进有严格要求，所以必须设置"editor.tabSize": 2)
    <code class="javasecipt">
// template lang="pug"
header.bdp-header
  bdp-row.row-bg(type="flex",justify="space-between")
    bdp-col.title(:span="4")
      img(src="/static/bdp-logo.png")
      .right
        router-link(to="/")  bdp front architecture
    bdp-col(:span='16')
      el-menu(:default-active="activeIndex",mode="horizontal",router)
        el-menu-item(index='/') 首页
        el-menu-item(index='/docs') 文档
        el-menu-item(index='/common') 组件
    bdp-col.logout.text-right(:span="4")
      i(class="fa fa-user" aria-hidden="true")
      span /{/{userName}/}/
      i(class="fa fa-sign-out" aria-hidden="true" @click="userLogOut")
    </code></pre>
    <p class="t22">css</p>
    <p class="t18">对于css我们引入sass做处理,其核心规范包括两点：</p>
    <p class="t16">1、对于样式覆盖尽量使用类的权重(禁止使用id,!important,酌情使用style内联)</p>
    <p class="t16">2、sass嵌套层次不适宜超过3层，命名规范语义化通过-连接，比如btn-primary。</p>
</article>
</template>

