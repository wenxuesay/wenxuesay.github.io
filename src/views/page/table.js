// import Vue from 'vue';

// Vue.directive('zscroll',{

// })
export default {
  data() {
    return {
      scroll: {

      },
      scrollTop: 0,
      tData: [
        { id: 1, name: 1 },
        { id: 2, name: 2 },
        { id: 3, name: 2 },
        { id: 4, name: 2 },
        { id: 5, name: 2 },
        { id: 6, name: 2 },
        { id: 7, name: 2 },
        { id: 8, name: 2 },
        { id: 9, name: 2 },
        { id: 10, name: 2 },
        { id: 11, name: 2 },
        { id: 12, name: 2 },
      ],
      tCloumns: [
        {
          title: 'ID',
          column: 'id',
          fixed: 'left',
          render: () => (<div>hello wrod!</div>),
        },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名' },
        { column: 'name', title: '姓名', fixed: 'right' },
      ],
    };
  },
  /*eslint-disable*/
  directives: {
    zscroll: {
      bind: function (el, {value},vnode) {
        const { $vm } = value;
        // console.log(value);
        el.addEventListener('scroll', function() {
          $vm.scrollTop = el.scrollTop;
          // $vm.scroll = 123;
          // console.log(el.scrollTop);
        });
      },
      update(el, { value }) {
        // const $vm = binding.value;
        const { $vm } = value;
        el.scrollTop = $vm.scrollTop
        // console.log('触发update钩子函数！', $vm.scroll);
      },
    },
  },
  methods:{
    change(){
      return "hello";
    }
  },
  render() {
    // const total = this.tCloumns.map
    const ColGroup = width => (
      <colgroup>
        {this.tCloumns.map(v => (
          <col width={v.width ? v.width : width} />
        ))}
      </colgroup>
    );
    const fixColumsLeft = [];
    const fixColumsRight = [];
    this.tCloumns.forEach((v) => {
      if (v.fixed === 'left') {
        fixColumsLeft.push(v);
      }
      if (v.fixed === 'right') {
        fixColumsRight.push(v);
      }
    });
    return (
      <div class="bdp-table border" style="position:relative;overflow:hidden;">
        <div class="bdp-table-scroll" style="overflow-x:scroll">
          <div class="bdp-table-header" style="width:1660px;overflow-y:scroll;">
            <table>
              {ColGroup('150px')}
              <thead class="bdp-table-thead" >
                <tr>
                  {this.tCloumns.map(v => (
                    <th>{v.title ? v.title : v.column}</th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
          <div class="bdp-table-body" style="max-height:400px;overflow-y:scroll;overflow-x:hidden;width:1660px;" v-zscroll={{ scrollTop: this.scrollTop, $vm: this }}>
            <table>
              {ColGroup('150px')}
              <tbody>
                {this.tData.map(v => (
                  <tr class="bdp-table-row">
                    {
                      this.tCloumns.map(vv => (
                        <td>
                          {vv.render && vv.render(v)}
                          {!vv.render && v[vv.column]}
                        </td>
                      ))
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="bdp-table-fix-left" style="width:150px;overflow:hidden;" >
          {ColGroup('150px')}
          <thead class="bdp-table-thead" >
            <tr>
              {fixColumsLeft.map(v => (
                <th>{v.title ? v.title : v.column}</th>
              ))}
            </tr>
          </thead>
          <div class="bdp-table-body" style="max-height:400px;overflow-y:scroll;overflow-x:hidden;width:1660px;" v-zscroll={{ scrollTop: this.scrollTop, $vm: this }} >
            <table style="width:150px;">
              {ColGroup('150px')}
              <tbody style="overflow:hidden;;max-height:300px;">
                {this.tData.map(v => (
                  <tr class="bdp-table-row">
                    {
                      fixColumsLeft.map(vv => (
                        <td>
                          {vv.render && vv.render(v)}
                          {!vv.render && v[vv.column]}
                        </td>
                      ))
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div class="bdp-table-fix-right" style="width:160px;" >
          {ColGroup('150px')}
          <thead class="bdp-table-thead" >
            <tr>
              {fixColumsRight.map(v => (
                <th>{v.title ? v.title : v.column}</th>
              ))}
            </tr>
          </thead>
          <div class="bdp-table-body" style="max-height:400px;overflow-x:hidden;width:150px;" v-zscroll={{scrollTop:this.scrollTop,$vm:this}}>
            <table style="width:150px;">
              {ColGroup('150px')}
              <tbody>
                {this.tData.map(v => (
                  <tr class="bdp-table-row">
                    {
                      fixColumsRight.map(vv => (
                        <td>
                          {vv.render && vv.render(v)}
                          {!vv.render && v[vv.column]}
                        </td>
                      ))
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },
};
