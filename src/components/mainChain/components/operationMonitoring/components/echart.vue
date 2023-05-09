<template>
    <div ref="chartDom" class="main">
    </div>
</template>
   
<script setup>
import { ref, toRefs, reactive, onMounted, watchEffect , watch } from 'vue'
import * as echarts from 'echarts'
import { echartsData } from '@/store'
let chartDom = ref(null)
let myChart = ref(null)
let chartData = reactive([
    { name: 'cpu负载', value: 0 },
    { name: '内存负载', value: 0 },
    { name: '磁盘负载', value: 0 },
])

let test = toRefs(props)

const props = defineProps({

    rencentSelect: {
        type: Number,
        default: 1,
        required: true
    }
})
onMounted(() => {
    myChart.value = echarts.init(chartDom.value)
      handleChartData(props.rencentSelect)
})                                                                  

watchEffect(() => {

});
watch(
    () => props.rencentSelect,
    (count, prevCount) => {
         handleChartData(prevCount)
    }
);

function handleChartData(rencentSelectData) {
    // console.log(`output->`, echartsData().operationMonitoringList)
    if (rencentSelectData == 1) {
        chartData[0].value = echartsData().operationMonitoringList.p1.cpu
        chartData[1].value = echartsData().operationMonitoringList.p1.disk
        chartData[2].value = echartsData().operationMonitoringList.p1.mem
    } else if (rencentSelectData == 2) {
        chartData[0].value = echartsData().operationMonitoringList.p2.cpu
        chartData[1].value = echartsData().operationMonitoringList.p2.disk
        chartData[2].value = echartsData().operationMonitoringList.p2.mem
    } else if (rencentSelectData == 3) {
        chartData[0].value = echartsData().operationMonitoringList.p3?.cpu || 0
        chartData[1].value = echartsData().operationMonitoringList.p3?.disk||0
        chartData[2].value = echartsData().operationMonitoringList.p3?.mem||0
    
    }

    let nameArr = []
    let dataArr = []
    let sum = 0;

    chartData.map(item => {
        if (item.name) {
            nameArr.push(item.name)
        } else {
            nameArr.push('无')
        }
        sum += item.value
        dataArr.push(item.value)
    })
    drawLiquidfill(nameArr, dataArr, sum)
}

function drawLiquidfill(name, data, sum) {


    const option = {
        grid: {
            left: 70,
            top: 0,
            right: 70,
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                textStyle: {
                    color: '#666666',
                    fontSize: 12,

                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: name
        }, {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            show: true,

            axisLabel: {
                margin: 35,
                textStyle: {
                    align: 'center',
                    color: '#333333',
                    fontSize: '14'
                },
                // formatter: '{value}%'
                formatter: function (value) {
                    return Number(value).toFixed(0) + '%' + '\n' + '使用率';
                }
            },
            data: data
        }],
        series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                },
            },
            barWidth: 10,

            data: [{
                value: parseFloat(data[0]),
                itemStyle: {
                    color: '#34d160'

                }
            },
            {
                value: parseFloat(data[1]),
                itemStyle: {
                    color: '#fdb301'
                }
            },
            {
                value: parseFloat(data[2]),
                itemStyle: {
                    color: '#f2719a'
                }
            }],
        },
        {

            name: '背景',
            type: 'bar',
            barMinHeight: "50",
            barWidth: 10,
            barGap: '-100%',
            data: [100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: '#EFF0F1',
                    barBorderRadius: 5,
                }
            },

            legendHoverLink: false,
        },
        ]
    }
    myChart.value.setOption(option, true)
}
window.addEventListener("resize", function () {
    myChart.value.resize()
})
</script>

<style scoped lang="scss">
.main {
    width: 355px;
    height: 174px;
}
</style>