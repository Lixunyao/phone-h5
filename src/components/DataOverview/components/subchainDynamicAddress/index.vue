<template>
    <div class="item">
        <div class="item-title">
            <span class="title-name">地域分布</span>
            <span class="title-dsc">(各地市子链接入数,单位:个)</span>
        </div>
        <div class="echart1">
            <echartsOne :options="options"></echartsOne>
        </div>
        <div class="echart2">
            <echartsTow :options="echartData"></echartsTow>
        </div>
    </div>
</template>

<script setup>
import { ref  } from 'vue';
import echartsOne from './components/echarts1.vue';
const options = ref({
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} (人口)',
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 50, // 此处可根据实际数据调整
        calculable: false,
        show: false,
        inRange: {
            color: ['rgb(175,214,255)', 'rgb(47,112,210)'],
        },
        textStyle: {
            color: '#000',
        },
    },
    series: [
        {
            type: 'map',
            map: '山东',
            roam: false,
            label: {
                show: false,
                color: 'rgba(0, 0, 0, 0.7)',
            },
            itemStyle: {
                borderColor: '#444',
            },
            selectedMode:false,
            // sellect: {
            //       disabled: true,
            // },
            emphasis: {
                label: {
                    show: false,
                },
                disabled: true,

            },
            data: [
                { name: '济南市', value: 45 },
                { name: '青岛市', value: 22 },
                { name: '淄博市', value: 5 },
                { name: '枣庄市', value: 4 },
                { name: '东营市', value: 12 },
                { name: '烟台市', value: 34 },
                { name: '潍坊市', value: 22 },
                { name: '济宁市', value: 33 },
                { name: '泰安市', value: 11 },
                { name: '威海市', value: 12 },
                { name: '日照市', value: 13 },
                { name: '莱芜市', value: 6 },
                { name: '临沂市', value: 48 },
                { name: '德州市', value: 36 },
                { name: '聊城市', value: 25 },
                { name: '滨州市', value: 13 },
                { name: '菏泽市', value: 40 },
            ]
        },
    ],
}
)

import echartsTow from './components/echarts2.vue';
import { echartsData } from '@/store';
import { computed } from 'vue';
let  echartsData1 = echartsData()
let echartData = computed(()=>echartsData1.chainCount)
</script>

<style scoped lang='scss'>
.item {
    margin-top: 12px;
    width: 351px;
    background: #FFFFFF;
    border-radius: 14px 14px 14px 14px;
    opacity: 1;
    position: relative;
    top: -51px;
}
</style>