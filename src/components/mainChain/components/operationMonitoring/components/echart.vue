<template>
    <div ref="chartDom" class="main">
    </div>
</template>
   
<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
let chartDom = ref(null)
let myChart = ref(null)
const props = defineProps({
    options: {
        type: Object,
        default: {},
        required: true
    }
})
onMounted(() => {
    myChart.value = echarts.init(chartDom.value)
    let nameArr = []
    let dataArr = []
    let sum = 0;
    props.options.map(item => {
        if (item.name) {
            nameArr.push(item.name)
        } else {
            nameArr.push('无')
        }
        sum += item.value
        dataArr.push(item.value)
    })
    drawLiquidfill(nameArr, dataArr, sum)
})
watchEffect(() => {
    props.options, (newval) => {
        let nameArr = []
        let dataArr = []
        let sum = 0;
        newval.map(item => {
            if (item.name) {
                nameArr.push(item.name)
            } else {
                nameArr.push('无')
            }
            sum += item.value
            dataArr.push(item.value)
        })
        drawLiquidfill(nameArr, dataArr, sum)
    }, {
        deep: true
    }
})
function drawLiquidfill(name, data, sum) {
    let colorStops1 = '#091836'
    let colorStops2 = '#091836'
    let colorStops3 = '#983C48'




    console.log(`output->`, name, data)
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
                margin:35,
                textStyle: {
                     align: 'center',
                    color: '#333333',
                    fontSize: '14'
                },
                // formatter: '{value}%'
                formatter: function (value) {
                    console.log(`output->value`, value)
                    let str = ''
                    let percent = (value / sum * 100).toFixed(0) + '%';
                    str = percent + '\n' + '使用率'
                    return str
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