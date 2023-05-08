<template>
    <div class="item">
        <div class="item-title">
            <span class="title-name">接受/跨链交易趋势</span>

            <span class="title-dsc">（跨链交易数,单位:个）</span>
        </div>
                <div class="recentTime">
                <span :class="{ recentDay: true, isActive: recentDayNumber == 'month' }" @click="recentDayNumber = 'month'">月</span>

                <span :class="{ recentDay: true, isActive: recentDayNumber == 'week' }" @click="recentDayNumber = 'week'">周</span>

                <span :class="{ recentDay: true, isActive: recentDayNumber == 'day' }" @click="recentDayNumber = 'day'">日</span>
            </div>
                    <div class="linScreen">
                <echartLin :options="echartData"></echartLin>
            </div>
    </div>
</template>

<script setup>
import echartLin from "./components/echart.vue";
import { ref, reactive } from "vue";
const recentDayNumber = ref('month');

const echartData = reactive([
    {
        name: "1",
        value1: 70,
        value2: 110
    },
    {
        name: "2",
        value1: 60,
        value2: 120
    },
    {
        name: "3",
        value1: 230,
        value2: 180
    },
    {
        name: "4",
        value1: 80 ,
        value2: 100
    },
    {
        name: "5",
        value1: 200,
        value2: 130
    },
    {
        name: "6",
        value1: 75,
        value2: 210
    },



]);
</script>

<style scoped lang='scss'>
.item {
    width: 351px;
    height: 344px;
    background: #FFFFFF;
    border-radius: 14px 14px 14px 14px;
    opacity: 1;
    position: relative;
    top: -51px;
    margin-top: 12px;
}
.recentTime {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0 24px;

    .recentDay {
        margin-right: 12px;
        font-size: 13px;
        font-family: PingFang SC-常规体, PingFang SC;
        font-weight: normal;
        color: #7d838a;
        background: #f5f5f8;
        border-radius: 14px 14px 14px 14px;
        width: 70px;
        height: 25px;
        text-align: center;
        line-height: 25px;
    }

    .isActive {
        background: #2b69ff;
        color: #ffffff;
    }
}
</style>