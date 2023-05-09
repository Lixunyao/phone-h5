<template>
    <div class="item">
        <div class="item-title">
            <span class="title-name">子链运行监测</span>
            <span class="title-dsc">(单位:个)</span>
        </div>
        <div class="monitor-dsc">
            <div class="dsc-item">
                <img class="item-img" src="@/assets/images/1838.png" alt="">
                <span class="state ">正常</span>
                <span class="state-num">{{ echartData.normal }}</span>

            </div>
            <div class="dsc-item">
                <img class="item-img" src="@/assets/images/1837.png" alt="">
                <span class="state ">警告</span>
                <span class="state-num warning">{{ echartData.alarm }}</span>

            </div>
            <div class="dsc-item">
                <img class="item-img" src="@/assets/images/1836.png" alt="">
                <span class="state " >故障</span>
                <span class="state-num error">{{echartData.fault}}</span>

            </div>
        </div>

    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { echartsData } from '../../../../store/modules/echartsData';
const echartsData1 = echartsData()
let echartData = computed(()=>echartsData1.subchainOperationMonitoringList)
</script>

<style scoped lang='scss'>
.item {
    width: 351px;
    height: 182px;
    background: #FFFFFF;
    border-radius: 14px 14px 14px 14px;
    opacity: 1;
    position: relative;
    top: -51px;
    margin-top: 12px;

}

.monitor-dsc {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 25px;


    .item-img {
        width: 52px;
        display: block;
    }

    .state {
        display: block;
        font-size: 13px;
        font-family: PingFang SC-常规体, PingFang SC;
        font-weight: normal;
        color: #333333;
        margin: 6px 0;
    }

    .state-num {
        font-size: 18px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #91CC75;
    }
    .error{
       color: #FF8388;
    }
    .warning{
        color: #F9BE00;
    }

}
</style>