<template>
  <article class="markdown">
    <p class="t22">
      部署(pm2.js)
    </p>
    <p class="t18">
    PM2 是一个带有负载均衡功能的 Node 应用的进程管理器。
    当你要把你的独立代码利用全部的服务器上的所有 CPU，并保证进程永远都活着，0 秒的重载， PM2 是完美的。
    </p>
    <pre v-highlightjs><code class="bash">
cd /app
wget http://10.118.16.50/node-v8.9.0-linux-x64.tar.xz
tar -xf node-v8.9.0-linux-x64.tar.xz
mv node-v8.9.0-linux-x64 nodejs
ln -s /app/nodejs/bin/node /usr/sbin
ln -s /app/nodejs/bon/npm /usr/sbin
npm -v
node -v
    </code></pre>
    <p class="t16">node 安装成功输出如下结果</p>
    <img src="/static/nodejs.png">
    <pre v-highlightjs><code class="bash">
/app/nodejs/lib/node_modules/
wget http://10.118.16.50/pm2.zip #本地npm install pm2 -g 然后打包成pm2.zip
unzip pm2.zip
npm build pm2 -g
ln -s /app/nodejs/bin/pm2 /usr/sbin
    </code></pre>
    <p class="t16">把koa所有包打成koa.zip(后续跟新，依赖不变，可以忽略node_modules)</p>
    <pre v-highlightjs><code class="bash">
cd /app/koa
wget http://10.118.16.50/koa2.zip
uzip koa2.zip
rm -rf koa2.zip
pm2 start app.js -name 'api' --env pro
pm2 monit -name 'api'
    </code></pre>
    <p class="t16">成功输出</p>
    <img src="/static/pm2-monit.png">
  </article>
</template>
<script>
export default {

};
</script>
