<template>
  <article class="markdown">
    <p class="t22">
      cas库(配置文件请参考环境配置)
    </p>
    <p class="t18">
      由于npm上的源都通不过的CAS,我们自己写了一套拦截逻辑,可参考自行配置。
    </p>
    <pre v-highlightjs><code>
class cas {
  constructor ({casUrl, serverUrl, indexUrl, serviceValidate = '/cas/serviceValidate', loginUrl = '/cas/login', logoutUrl = '/cas/logout'} = {}) {
    this.casUrl = casUrl
    this.serverUrl = serverUrl
    this.serviceValidate = serviceValidate
    this.indexUrl = indexUrl
    this.loginUrl = loginUrl
    this.logoutUrl = logoutUrl
  }
}
    </code></pre>
  </article>
</template>
