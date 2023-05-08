<template>
    <div ref="chartPie" class="main"></div>
</template>

<script setup>
import { ref, reactive, onMounted, watchEffect } from "vue";
import * as echarts from "echarts";
let chartPie = ref(null);
let myChart = ref(null);
let colorList = reactive([
    "#73DDFF",
    "#73ACFF",
    "#FDD56A",
    "#34d160",
    "#FDB36A",
    "#FD866A",
    "#9E87FF",
]);
let index = ref(0);
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
    props.options.map((item) => {
        if (item.name) {
            nameArr.push(item.name);
        } else {
            nameArr.push("无");
        }
        dataArr.push(item.value);
    });
    drawLiquidfill(nameArr, dataArr, colorList);
});
watchEffect(() => {
    props.options,
        (newval) => {
            let nameArr = [];
            let dataArr = [];
            newval.map((item) => {
                if (item.name) {
                    nameArr.push(item.name);
                } else {
                    nameArr.push("无");
                }
                dataArr.push(item.value);
            });
            drawLiquidfill(nameArr, dataArr, colorList);
        },
    {
        deep: true,
    };
});
function drawLiquidfill(name, data, colorList) {
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
            orient: "horizontal",
            bottom: "10",
            left: '10',
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
                color: "#8C8C8C",
                fontSize: 12,
                  width: 50,
                overflow: 'breakAll',
            },
            selectedMode: false,
           
        },
        series: [
            {
                type: "pie",
                center: ["50%", "40%"],
                radius: ["24%", "45%"],
                clockwise: true,
                avoidLabelOverlap: true,
                hoverOffset: 15,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colorList[params.dataIndex];
                        },
                    },
                },
                label: {
                    show: true,
                    position: "outside",
                    // formatter: "{b}：{d}%",
                    formatter: function (params) {
                        return params.dataIndex+1 + ' ，'+ params.percent+'%';
                    },
                    fontSize: 12,
                },
                labelLine: {
                    normal: {
                        length: 10,
                        length2: 20,
                        // smooth: true,
                        lineStyle: {
                            width: 1,
                        },
                    },
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
    height: 300px;
}
</style>
