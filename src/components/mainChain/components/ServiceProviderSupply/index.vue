<template>
    <div class="item">
        <div class="item-title">
            <span class="title-name">业务链分布情况</span>

            <span class="title-dsc">(单位:个)</span>
        </div>
        <div class="serviceProvider">
            <span class="serviceName">技术服务商</span>
            <span class="serviceNum">
                <span class="num">5</span> 家
            </span>
        </div>
        <div class="pieScreen">
            <echartPie :options="echartData"></echartPie>
        </div>
    </div>
</template>

<script setup>
import echartPie from "./components/echart.vue";
import { ref, reactive } from "vue";
const echartData = reactive([
    {
        name: "政务服务",
        value: 1.45,
        // itemStyle: { color: "#8d7fec" },
    },
    {
        name: "民生服务",
        value: 2.93,
        // itemStyle: { color: "#5085f2" },
    },

    {
        name: "司法监管",
        value: 3.15,
        // itemStyle: { color: "#fdb301" },
    },
    {
        name: "医疗卫生",
        value: 4.78,
        // itemStyle: { color: "#f2719a" },
    },
    {
        name: "社会福利",
        value: 5.93,
        // itemStyle: { color: "#57e7ec" },
    },


]);
</script>

<style scoped lang='scss'>
.item {
    width: 351px;
    height: 278px;
    background: #FFFFFF;
    border-radius: 14px 14px 14px 14px;
    opacity: 1;
    position: relative;
    top: -51px;
    margin-top: 12px;

}

.serviceProvider {
    align-items: center;
    background: #F5F8FF;
    border-radius: 10px 10px 10px 10px;
    height: 38px;
    margin: 15px 15px 0;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #333333;
    letter-spacing: 1px;
}

span.num {
    font-size: 20px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #333333;
}
</style>