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
    const option = {
        grid: {
            left: 70,
            top: 0
        },
        yAxis: {
            type: 'category',
            data: name,
            axisLabel: {
                textStyle: {
                    color: '#666666',
                    fontSize: 12
                },
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            inverse: false,
        },
        xAxis: {
            type: 'value',
            min: 0,
            //  max: 100,
            show: false,
            position: 'top',
            axisLabel: {
                formatter: '{value}%'
            }
        },
        series: [
            {
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
                type: 'bar',
                
                label: {
                    show: true,
                    position: 'right',
                    color: '#000',
                    formatter: '使用率 {c}%'
                    // formatter: function (params) {
                    //      let str = ''
                    //     console.log(`output->params`, params)
                    //     let percent =  (params.value / sum * 100).toFixed(0) + '%';
                    //     str = params.value+ 
                    //     `<br />`+
                    //     '使用率'
                    //      return str
                    // }
                },
                showBackground: true,
                backgroundStyle: {
                    color: '#EFF0F1'
                },

                barWidth: 9,
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