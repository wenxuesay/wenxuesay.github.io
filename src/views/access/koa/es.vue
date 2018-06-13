<template>
  <article class="markdown">
    <p class="t22">
      ElasticSearch
    </p>
    <p class="t18">
      ElasticSearch是一个基于Lucene的搜索服务器。它提供了一个分布式多用户能力的全文搜索引擎，基于RESTful web接口。Elasticsearch是用Java开发的，并作为Apache许可条款下的开放源码发布，是当前流行的企业级搜索引擎。设计用于云计算中，能够达到实时搜索，稳定，可靠，快速，安装使用方便。
    </p>
    <p class="t22">
      ElasticSearch 配置
    </p>
    <pre v-highlightjs><code>
const elasticsearch = require('elasticsearch')
const path = require('path')

const config = require('config-lite')(path.join(__dirname, '../config'))
let es = config.es
let esClient = new elasticsearch.Client({
  hosts: es.hosts
})

module.exports = esClient
    </code></pre>
    <p class="t22">
      ElasticSearch搜索示例
    </p>
    <pre v-highlightjs><code>
  let data = await esClient.search({
    index: 'adas_dxpfullprotodata*',
    type: 'record',
    size: 99999,
    body: {
      query: {
        bool: {
          must: [
            {
              match: {
                imei: '865473038209774F'
              }
            },
            {
              range: {
                receiveTime: {
                  'gt': startDate,
                  'lt': endDate
                }
              }
            }]
        }
      },
      sort: [{
        receiveTime: {
          order: 'asc'
        }
      }]
    }
  })
    </code></pre>
  </article>
</template>
