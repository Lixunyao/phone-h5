<template>
    <div class="item">
        <div class="item-title">
            <span class="title-name">主链运行监测</span>

            <span class="title-dsc">（单位:%）</span>
        </div>
        <div class="recentTime">
            <span :class="{ recentDay: true, isActive: recentDayNumber == 1 }" @click="recentDayNumber = 1">1号节点</span>

            <span :class="{ recentDay: true, isActive: recentDayNumber == 2 }" @click="recentDayNumber = 2">2号节点</span>

            <span :class="{ recentDay: true, isActive: recentDayNumber == 3 }" @click="recentDayNumber = 3">3号节点</span>
        </div>
        <div class="echartPercentLin">
            <echartOne :rencentSelect="recentDayNumber"></echartOne>
        </div>
    </div>
</template>

<script setup>

import echartOne from './components/echart.vue'
import { ref, reactive } from "vue";
const recentDayNumber = ref(1);

</script>

<style scoped lang='scss'>
.item {
    width: 351px;
    height: 229px;
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