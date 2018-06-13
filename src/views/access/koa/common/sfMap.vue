<template lang="pug">
  #map.map
</template>

<script>
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
function hoverChangeStyle(layer, nomalStyle, hoverStyle) {
  layer.on('mouseover', (e) => {
    e.layer.setStyle(hoverStyle);
  }).on('mouseout', (e) => {
    e.layer.setStyle(nomalStyle);
  });
}
export default {
  props: ['eid', 'mark'],
  data() {
    return {
      vectorLayer: '',
      map: '',
      cityLayer: '',
      parentLayer: '',
    };
  },
  mounted() {
    const $vm = this;
    this.map = SFMap.map('map', {
      center: [30.985395, 106.329176],
      zoom: 5,
      // preferCanvas: true,
    });
    $vm.map
      .on('zoomend', (e) => {
        const zoom = e.target.getZoom();
        if (zoom <= 5) {
          if ($vm.cityLayer) {
            $vm.map.removeLayer($vm.cityLayer);
          }
          $vm.map.addLayer($vm.parentLayer);
        }
      });
    // this.map.addLayer(layer);
    $vm.vectorLayer = SFMap.vectorLayer({ map: $vm.map });
    // console.log(SFMap);
    this.loadProvince();
    // this.showMark();
  },
  methods: {
    clickProvinceFn(e) {
      const $vm = this;
      const feature = e.sourceTarget.feature;
      const code = feature.properties.adminCode;
      // 根据省份code获取省份下属市边界
      SFMap.ajax({
        url: `/gis/api/data/city/${code}.js`,
        type: 'get',
        dataType: 'json',
        success(response) {
          if ($vm.cityLayer) {
            $vm.map.removeLayer($vm.cityLayer);
          }
          $vm.map.removeLayer($vm.parentLayer);
          $vm.cityLayer = SFMap.geoJSON(response, {
            style: {
              weight: 2,
              fillColor: '#ffff00',
            },
          });
          // .bindTooltip((e) => {
          //   console.log(e);
          //   return e.feature.properties.name_chn;
          // });
          hoverChangeStyle($vm.cityLayer, { fillColor: '#ffff00' }, { fillColor: '#000000' });
          $vm.map.addLayer($vm.cityLayer);
          $vm.map.fitBounds($vm.cityLayer.getBounds());
        },
      });
    },
    loadProvince() {
      const $vm = this;
      SFMap.ajax({
        url: '/gis/api/data/province/province.json',
        dataType: 'json',
        success(response) {
          // cityLayer.clear();
          $vm.parentLayer = SFMap.geoJSON(response, {
            style: {
              color: 'red',
              weight: 2,
              shadowColor: '#ff00ff',
              shadowBlur: 15,
              fillColor: '#005AB5',
            },
          });
          // .bindTooltip((e) => {
          //   console.log(e);
          //   return e.feature.properties.name_chn;
          // });
          $vm.map.addLayer($vm.parentLayer);
          $vm.parentLayer.on('click', $vm.clickProvinceFn);
          hoverChangeStyle($vm.parentLayer, { fillColor: '#005AB5' }, { fillColor: '#97CBFF' });
          // $vm.map.fitBounds($vm.parentLayer.getBounds());
        },
      });
    },
    showMark(latlngs) {
      const myIcon = SFMap.icon({
        iconUrl: '/static/laddie.png',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        // shadowUrl: 'my-icon-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94],
      });
      const $vm = this;
      const popup = SFMap.popup();
      // 1-10编号图标
      for (let i = 0, len = latlngs.length; i < len; i += 1) {
        const iconMarker = SFMap.marker(latlngs[i], {
          icon: myIcon,
          // iconIndex: $vm.mark[i].name,
        }).on('click', () => {
          popup
            .setLatLng(latlngs[i])
            .setContent(`
            <p class="reTitle">${$vm.mark[i].name}</p>
            <table class="reTable">
              <tr><th>类型</th><th>实时收件量</th><th>预测收件量</th><th>计划收件量</th><th>预计达成率</th></tr>
              <tr><td>收件总量</td><td>${$vm.mark[i].radio}</td><td>${$vm.mark[i].radio}</td><td>${$vm.mark[i].radio}</td><td>${$vm.mark[i].radio}</td></tr>
              <tr><td>当日</td><td>${$vm.mark[i].radio}</td><td>${$vm.mark[i].radio}</td><td>${$vm.mark[i].radio}</td><td>${$vm.mark[i].radio}</td></tr>
            </table>
            `).openOn($vm.map);
        });
        if ($vm.iconMarker) {
          $vm.vectorLayer.removeLayer($vm.iconMarker);
          $vm.iconMarker = iconMarker;
        }
        $vm.vectorLayer.addLayer(iconMarker);
      }
    },
  },
  watch: {
    mark() {
      // const $vm = this;
      if (!this.mark) return;
      const latlngs = this.mark.map(v => [v.deptGis[1], v.deptGis[0]]);
      this.showMark(latlngs);
    },
  },
};
</script>

<style lang="scss">
.map {
  height: 100vh;
}
</style>
