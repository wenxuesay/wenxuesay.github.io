<template lang="pug">
  div
    SfTable
</template>
<script>
import SfTable from './table';

export default {
  components: {
    SfTable,
  },
};
</script>

<style lang="scss">
.bdp-table {
  width: 100%;
  overflow-x: scroll;
  &.border {
    td,th{
      border-left: 1px solid #e8e8e8;
    }
    thead.bdp-table-thead {
      th{
        border-top: 1px solid #e8e8e8;
        &:nth-last-child(1){
          border-right:1px solid #e8e8e8;
        }
      }
    }
    tr.bdp-table-row{
      td{
        border-top: none;
        border-right: none;
        &:nth-last-child(1){
          border-right:1px solid #e8e8e8;
        }
      }
    }
  }
  .bdp-table-fix-left {
    position: absolute;
    background: #fff;
    overflow:hidden;
    top:0;
    left:0;
  }
  .bdp-table-fix-right {
    position: absolute;
    background: #fff;
    top:0;
    right:0;
    overflow-y: scroll;
  }
  table {
    min-width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    text-align: left;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box;
    table-layout:fixed;
  }
  thead.bdp-table-thead {
    th{
      padding: 8px;
      word-break: break-word;
      background: #fafafa;
      transition: background .3s ease;
      text-align: left;
      color: rgba(0,0,0,.85);
      font-weight: 500;
      border-bottom: 1px solid #e8e8e8;
    }
  }
  tbody{
    tr.bdp-table-row {
      &:hover {
          background: #e6f7ff;
        }
      td {
        padding: 8px;
        word-break: break-word;
        border-bottom: 1px solid #e8e8e8;
      }
    }
  }
}
</style>

