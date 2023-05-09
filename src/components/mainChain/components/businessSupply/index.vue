<template>
    <div class="item">
        <div class="item-title">
            <span class="title-name">业务支撑情况</span>
        </div>
        <div class="serviceDsc">
            <div class="serviceItem">
                <div class="dscName">
                    <img src="@/assets/images/1565.png" class="dscNameImg" alt="">
                    <div class="nameItem">
                        <span class="name">申请建链</span>
                        <span class="nameDsc">单位：个</span>
                    </div>
                </div>
                <div class="dscNum">
                    <span class="num">{{ data.applyChainCount }}</span>
                    <span class="dsc">已申请</span>
                </div>
            </div>
            <i class="lineBetween"></i>

            <div class="serviceItem">
                <div class="dscName">
                    <img src="@/assets/images/1566.png" class="dscNameImg" alt="">
                    <div class="nameItem">
                        <span class="name">部署子链</span>
                        <span class="nameDsc">单位：个</span>
                    </div>
                </div>
                <div class="dscNum">
                    <span class="num">{{data.depolyChainCount }}</span>
                    <span class="dsc">已申请</span>
                </div>
            </div>
            <i class="lineBetween"></i>

            <div class="serviceItem">
                <div class="dscName">
                    <img src="@/assets/images/1567.png" class="dscNameImg" alt="">
                    <div class="nameItem">
                        <span class="name">子链接入</span>
                        <span class="nameDsc">单位：个</span>
                    </div>
                </div>
                <div class="dscNum">
                    <span class="num">{{data.accessChainCount }}</span>
                    <span class="dsc">已接入</span>
                </div>
            </div>
            <i class="lineBetween"></i>

            <div class="serviceItem">
                <div class="dscName">
                    <img src="@/assets/images/1568.png" class="dscNameImg" alt="">
                    <div class="nameItem">
                        <span class="name">跨链协同</span>
                        <span class="nameDsc">单位：个</span>
                    </div>
                </div>
                <div class="dscNum">
                    <span class="num">12</span>
                    <span class="dsc">跨链交易</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { echartsData } from '@/store'
const echartsData1 = echartsData()
const data = computed(()=>echartsData1.businessSupplyList)
</script>

<style scoped lang='scss'>
.item {
    width: 351px;
    height: 336px;
    background: #FFFFFF;
    border-radius: 14px 14px 14px 14px;
    opacity: 1;
    position: relative;
    top: -51px;
}

.serviceDsc {
    padding: 13px 15px;

}

.serviceItem {
    display: flex;
    justify-content: space-between;
}

.dscName {
    /* width: 100px; */
    display: flex;
}

img.dscNameImg {
    width: 42px;
}

.nameItem {
    /* display: inline-grid; */
    margin-left: 13px;
}

.name {
    display: block;
    font-size: 15px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #333333;
}

.nameDsc {
    font-size: 12px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #ABABAB;
}

.num {
    font-size: 22px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #2B69FF;
    display: block;
    text-align: right;
}

.dsc {
    font-size: 12px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #666666;
}


.lineBetween {
    width: 100%;
    display: block;
    border-bottom: 1px solid #F0F0F0;
    margin: 15px 0;
}
</style>