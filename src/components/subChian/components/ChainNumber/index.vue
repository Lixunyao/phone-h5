<template>
    <div class="item">
        <div class="item1">
            <div class="itemFlex">
                <img src="@/assets/images/1988.png" class="item-img" alt="">
                <span class="numDsc">子链数</span>
            </div>
            <div class="num">
                <span class="numBg">{{data.all}}</span>
                个
            </div>
        </div>
        <div class="item1">
            <div class="itemFlex">
                <img src="@/assets/images/1989.png" class="item-img" alt="">
                <span class="numDsc">以接入方式建设子链</span>
            </div>
            <div class="num">
                <span class="numBg">{{data.access}}</span>
                个
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { echartsData } from '../../../../store/modules/echartsData';
const echartsData1 = echartsData()
let data = computed(()=>echartsData1.subchainDistributionList)
</script>

<style scoped lang='scss'>
.item {
    width: 351px;
    height: 76px;
    border-radius: 14px 14px 14px 14px;
    position: relative;
    top: -51px;
    display: flex;
    justify-content: space-between;

    .item1 {
        display: inline-block;
        width: 170px;
        height: 76px;
        background: #FFFFFF;
        border-radius: 14px 14px 14px 14px;
        background-image: url('../../../../assets/images/subchainNumberBg.png');
        background-size: contain;
        background-position: center center;
        padding-top: 11px;
        padding-left: 16px;
    }

    .itemFlex {
        display: flex;
    }

    .numDsc {
        font-size: 14px;
        font-family: PingFang SC-常规体, PingFang SC;
        font-weight: normal;
        color: #333333;
    }

    .item-img {
        width: 5px;
        height: 14px;
        margin-right: 8px;
        margin-top: 3px;
    }

    .num {
        margin-left: 13px;
    }

    .numBg {
        font-size: 24px;
        font-family: PingFang SC-Heavy, PingFang SC;
        font-weight: 800;
        color: #2B69FF;
    }
}</style>