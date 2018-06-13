<template>
<article class="markdown">
  <p class="t22">构建</p>
  <pre v-highlightjs>
执行以下命令,会在根目录生成 dist 文件夹，里面就是构建打包好的文件，通常是 ***.js、***.css、index.html 等静态文件。
    <code class="bash">
 npm run build
    </code></pre>
  <p class="t22">部署到nginx</p>
  <pre v-highlightjs>
我们打包好的代码通过压缩(dist.zip),通过以下操作进行(hfs wget)。通过secureCRT登陆到nginx(公司提供的标准)所在的服务器。
<img src="/static/hfs.png">
<img src="/static/nginx.png">
    <code class="bash">
su
cd /app/nginx/html
wget http://0/dist.zip
unzip
rm -rf dist.zip
    </code></pre>
  <p class="t22">nginx 配置</p>
   <pre v-highlightjs>
前后必须有独立域名(Cas相关)，同一台服务器部署，可以忽略该需求，修改为以下配置。
    <code class="bash">
vim /app/nginx/conf/nginx.conf
    </code></pre>
    <pre v-highlightjs><code>
server {
    listen       8080;
    server_name  ubas.sit.sf-express.com;
    #前端部署代码,如需部署/rpt 请修改为
    #location /rpt {
    #    alias  /app/nginx/html/rpt/dist;
    #    index  index.html;
    #}
    location / {
        root   html/dist;
        index  index.html;
        try_files $uri $uri/ /index.html;
    }
    #配置后台地址 对应项目conf/index.js配置的后台地址，请切换为sit环境。
    location /api {
      rewrite  ^/api/(.*)$ /$1 break;
      proxy_pass http://om/;
    }

    location = /stats {
              stub_status     on;
              access_log      off;
              allow          16;
              allow           /16;
              allow           10.110.0./16;
              allow           10/16;
              deny            all;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

}
    </code></pre>
</article>

</template>
