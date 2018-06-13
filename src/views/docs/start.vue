<template>
<article class="markdown">
  <p class="t22">起步</p>
  <p class="t18">前言</p>
  <p class="t16">vue git地址: <a href="">sf-bdp-vue</a></p>
  <p class="t16">react git地址: <a href="">react-web</a></p>
  <p class="t16">bdp front architecture 是一个企业级中后台前端解决方案，致力于使用基础组件、开发规范，快速输出企业级产品。随着产品需求的增多，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码，实现前端系统/业务组件/接入层/大数据项目最佳实践，也十分期待你的参与和共建。</p>
  <p class="t18">准备</p>
  <p class="t16">你的本地环境需要安装node(V8.0以上)和git。我们的技术栈基于ES5/6/7(eslint)、sass、pug、vue、echarts、element-ui，提前了解和学习这些知识会非常有帮助。</p>
  <pre v-highlightjs>
npm公司源以及相关配置
    <code class="bash">
#配置公司源(可以使用nrm管理源)
npm config set registry http://.../nexus/content/repositories/npm/ -g
#配置node-sass(安装node-sass出错处理)
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
#其他错误处理
npm i --no-optional
npm i node-sass -g
    </code></pre>
  <pre v-highlightjs>
典型模板(基于vue-cli),删除测试相关包
    <code class="bash">
#下载基本脚手架
git clone http://.git
#安装依赖
npm install
#运行开发环境
npm run dev
#打包
npm run build
    </code></pre>
  <p class="t22">项目架构</p>
  <div>
    <p class="t18">项目基础架构，可以改造成react适配的项目架构。
    views目录结构对应router路由配置层级，便于代码维护。</p>
    <bdp-row>
      <bdp-col :span="10">
        <img src="/static/project.png">
      </bdp-col>
      <bdp-col :span="14">
        <pre v-highlightjs style="margin:0"><code>
          ├── build                       # webpack配置
          │   ├── build.js                # 打包命令入口
          │   ├── dev-client.js           #
          │   ├── dev-server.js           # express开发服务器配置(热加载)
          │   ├── utils.js                # 配置工具类
          │   ├── vue-loader.conf.js      # webpack vue配置
          │   ├── webpack.base.conf.js    # webpack公用配置
          │   ├── webpack.dev.conf.js     # webpack开发配置
          │   ├── webpack.prod.conf.js    # webpack生产配置
          ├── config
          │   ├── dev.env.js              # NODE_ENV 为dev
          │   ├── index.js                # build配置,dev开发环境配置(跨域)
          │   ├── prod.env.js             # NODE_ENV 为pro
          ├── src
          │   ├── assets                  # 本地静态资源(需要打入包内)
          │   ├── components              # 公用组件
          │   ├── lib                     # 公用工具库，自定义库类
          │   ├── router                  # vue-router 配置
          │   ├── views                   # 页面
          │   ├── App.vue                 # spa,vue主页面入口
          │   ├── http.js                 # axios配置
          │   ├── services                # 后台接口服务(重复业务接口抽象)
          │   ├── main.js                 # spa入口
          ├── .babelrc                    # babel配置文件(可写入package.json)
          ├── .editorconfig               # eslint不监听的文件配置(可写入package.json)
          ├── .eslintrc.js                # eslint规则配置(可写入package.json)
          ├── .postcssrc.js               # postcss(postcss配置，可写入package.json)
          ├── index.html                  # spa主页面
          └── package.json                # npm 依赖，其他配置
        </code></pre>
      </bdp-col>
    </bdp-row>
  </div>
</article>

</template>

