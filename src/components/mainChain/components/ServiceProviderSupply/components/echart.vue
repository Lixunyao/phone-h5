<template>
    <div ref="chartPie" class="main"></div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import * as echarts from "echarts";
let chartPie = ref(null);
let myChart = ref(null);
let colorList = reactive([
    "#73DDFF",
    "#8d7fec",
    "#fdb301",
    "#34d160",
    "#f2719a",

]);
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

    drawLiquidfill(nameArr, dataArr, colorList, sum);
});
watch(() => 
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
);
function drawLiquidfill(name, data, colorList, sum) {
    for (var i = 0; i < props.options.length; i++) {
        var sum
    }
    const option = {
        title: {
            show: false,
            text: "pieChart",
            x: "center",
            y: "center",
            textStyle: {
                fontSize: 20,
            },
        },
        tooltip: {
            trigger: "item",
        },
        legend: {
            type: "plain",
            orient: "vertical",
            top: "10%",
            right: '5%',
            itemGap: 20,
            itemWidth: 10,
            itemHeight: 10,
            align: "left",
            radius: '50%',
            itemStyle: {
                borderRadius: '40%',
                radius: '50%',
            },
            textStyle: {
                color: "#666666",
                fontSize: 12,
                width: 150,
                overflow: 'breakAll',
            },

            formatter: function (params) {
                let str = ''
                props.options.forEach(option => {
                    if (option.name == params) {
                        let percent = (option.value / sum * 100).toFixed(2) + '%';
                        str = params + " " + option.value + '，' + percent
                    }
                })
                return str
            },
            // selectedMode: false
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
        },
        series: [
            {
                type: "pie",
                center: ["26%", "45%"],
                radius: ['30%', '80%'],
                // clockwise: true,
                // avoidLabelOverlap: true,
                // hoverOffset: 15,
                roseType: 'radius',
                minShowLabelAngle: 60,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colorList[params.dataIndex];
                        },
                    },
                },
                label: {
                    show: false,
                },


                data: props.options,
            },
        ],
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
    height: 193px;
}
</style>
