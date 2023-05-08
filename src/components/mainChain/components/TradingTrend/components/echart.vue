<template>
    <div ref="chartPie" class="main"></div>
</template>

<script setup>
import { ref, reactive, onMounted, watchEffect } from "vue";
import * as echarts from "echarts";
let chartPie = ref(null);
let myChart = ref(null);
let colorList = reactive([
        "#0090FF",
        "#36CE9E",
        "#FFC005",
        "#FF515A",
        "#8B5CFF",
        "#00CA69"

]);
let legendName = reactive([])
let percent = ref(0);
const props = defineProps({
    options: {
        type: Object,
        default: {},
        required: true,
    },
});
onMounted(() => {
    myChart.value = echarts.init(chartPie.value);
    let nameArr = [];
    let dataArr = [];
    let sum = 0;
    props.options.map((item) => {
        if (item.name) {
            nameArr.push(item.name);
        } else {
            nameArr.push("无");
        }
        sum += item.value
        dataArr.push(item.value);
    });
    let xAxisData = props.options.map(v => v.name);
    //  ["1", "2", "3", "4", "5", "6", "7", "8"]
    let yAxisData1 = props.options.map(v => v.value1);
    // [100, 138, 350, 173, 180, 150, 180, 230]
    let yAxisData2 = props.options.map(v => v.value2);
    // [233, 233, 200, 180, 199, 233, 210, 180]

    const hexToRgba = (hex, opacity) => {
        let rgbaColor = "";
        let reg = /^#[\da-f]{6}$/i;
        if (reg.test(hex)) {
            rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
                "0x" + hex.slice(3, 5)
            )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        return rgbaColor;
    }
    drawLiquidfill(xAxisData, yAxisData1, yAxisData2, colorList,  hexToRgba);
});
watchEffect(() => {
    props.options,
        (newval) => {
            let nameArr = [];
            let dataArr = [];
                let sum = 0;
            newval.map((item) => {
                if (item.name) {
                    nameArr.push(item.name);
                } else {
                    nameArr.push("无");
                }
                 sum += item.value
                dataArr.push(item.value);
            });
            drawLiquidfill(nameArr, dataArr, colorList, sum);
        },
    {
        deep: true,
    };
});
function legendNamehandler(name, data) {

}
function drawLiquidfill(xAxisData, yAxisData1, yAxisData2, color, hexToRgba) {
    for (var i = 0; i < props.options.length; i++) {
        var sum
    }
    const option = {
        
    
        // legend: {
        //     type: "plain",
        //     orient: "vertical",
        //     top: "10%",
        //     right: '5%',
        //     itemGap: 20,
        //     itemWidth: 10,
        //     itemHeight: 10,
        //     align: "left",
        //     radius: '50%',
        //     itemStyle: {
        //         borderRadius: '40%',
        //         radius: '50%',
        //     },
        //     textStyle: {
        //         color: "#666666",
        //         fontSize: 12,
        //         width: 150,
        //         overflow: 'breakAll',
        //     },

        //     formatter: function (params) {
        //         console.log(`output->data,sum`, data, sum, params)
        //         let str = ''
        //         props.options.forEach(option => {
        //             if (option.name == params) {
        //                 let percent = (option.value / sum * 100).toFixed(2) + '%';
        //                 str = params + " " + option.value + '，' + percent
        //             }
        //         })
        //         return str
        //     },
        //     // selectedMode: false
        // },
         legend: {
            right: 20,
 
        },

        //     tooltip: {
        //     trigger: 'axis',
        //     textStyle: {
        //         fontSize: 16
        //     },
                                
        // },
        grid: {
            top: 40,
            containLabel: true
        },
        xAxis: [{
            type: "category",
            boundaryGap: false,
            axisLabel: {
                formatter: '{value}月',
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#D9D9D9"
                }
            },
            data: xAxisData
        }],
        yAxis: [{
            type: "value",
           
            axisLabel: {
                textStyle: {
                    color: "#666"
                }
            },
            nameTextStyle: {
                color: "#666",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#E9E9E9"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        series: [{
            name: "接收交易",
            type: "line",
            smooth: true,
            // showSymbol: false,/
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[1],
                }
            },           
            itemStyle: {
                 normal: {
                    color: color[1],
                }
            },
             symbol: 'circle',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                            offset: 0,
                            color: hexToRgba(color[1], 0.3)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[1], 0.1)
                        }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[1], 0.1),
                    shadowBlur: 100
                }
            },
            data: yAxisData1
        }, {
            name: "上链交易",
            type: "line",
            smooth: true,
            // showSymbol: false,
            symbolSize: 8,
            zlevel: 3,
            lineStyle: {
                normal: {
                    color: color[0],
                }
            },
                        itemStyle: {
                normal: {
                    color: color[0],
                }
            },
             symbol: 'circle',
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                            offset: 0,
                            color: hexToRgba(color[0], 0.3)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[0], 0.1)
                        }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10
                }
            },
            // label: { //设置点数据的提示
            //     normal: {
            //         show: true,
            //         position: 'bottom'
            //     }
            // },
            markPoint: { //设置最大值和最小值
                data: [
                    // {
                    //     type: 'max',
                    //     name: '最大值'
                    // },
                    // {
                    // type: 'min',
                    // name: '最小值'
                    // },
                {
                     name: '固定 x 像素位置',
                    // yAxis: 100,
                    // x: '60%',
                    coord: [4, 200],
                    value:200
                    },
                    
                ]
            },
            data: yAxisData2
        }]
    };
    myChart.value.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart.value.resize();
});
</script>

<style lang="scss" scoped>
.main {
    width: 355px;
    height: 293px;
}
</style>
