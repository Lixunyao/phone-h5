<template>
    <div class="item">
        <div class="item-top">
            <div class="top-item subchainNumber">
                <h5>子链数</h5>
                <b><span>{{numberTo3(coreData.accessChainCount)}}</span>个</b>
            </div>
            <div class="top-item joinNumber">
                <h5>接入委办局</h5>
                <b><span>{{numberTo3(coreData.memberCount)}}</span>家</b>
            </div>
        </div>
        <div class="item-bottom">
            <span class="bottom-item merber">
                <h6>
                    平台用户数(个)
                </h6>
                <b>{{numberTo3(coreData.accountCount)}}</b>
            </span>
            <span class="bottom-item identify">
                <h6>
                    链上标识数(个）
                </h6>
                <b>{{numberTo3(coreData.identityCount)}}</b>
            </span>
            <span class="bottom-item upchain">
                <h6>
                    上链数据量(条）
                </h6>
                <b>{{ numberTo3(coreData.upChainCount) }}</b>
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { numberTo3 } from '@/utils/public.js';
import { echartsData } from '@/store';
let  echartsData1 = echartsData()
let coreData = computed(()=>echartsData1.coreData)
</script>

<style scoped lang='scss'>
.item {
    width: 351px;
    height: 153px;
    background: #FFFFFF;
    border-radius: 14px 14px 14px 14px;
    opacity: 1;
    position: relative;
    top: -51px;

    .item-top {
        width: 100%;
        height: 85px;
        display: flex;

        .top-item {
            width: 50%;
            height: 100%;
            background-repeat: no-repeat;

            b {
                font-size: 12px;
                font-family: PingFang SC-常规体, PingFang SC;
                font-weight: normal;
                color: #333333;

                span {
                    display: inline-block;
                    margin: 15px 3px 0px 83px;
                    width: 29px;
                    height: 33px;
                    font-size: 24px;
                    font-family: PingFang SC-Heavy, PingFang SC;
                    font-weight: 800;
                    color: #2B69FF;
                    line-height: 0px;
                }

            }
        }

        .subchainNumber {
            background-image: url('../../../../assets/images/subchainNumberLogo.png');
            background-position: 33px 25px;

            h5 {
                margin: 21px 0 0 83px;
                height: 20px;
                font-size: 14px;
                font-family: PingFang SC-常规体, PingFang SC;
                font-weight: normal;
                color: #333333;
            }
        }

        .joinNumber {
            background-image: url('../../../../assets/images/joinNumberLogo.png');
            background-position: 10px 25px;

            h5 {
                margin: 21px 0 0 60px;
                height: 20px;
                font-size: 14px;
                font-family: PingFang SC-常规体, PingFang SC;
                font-weight: normal;
                color: #333333;
            }
        }
    }

    .item-bottom {
        width: 100%;
        height: 52px;
        display: flex;
        justify-content: space-evenly;

        .bottom-item {
            width: 101px;
            height: 52px;
            background-position: center center;
            background-size: contain;
            padding-top: 6px;
            color: #FFFFFF;
            text-align: center;

            h6 {
                width: 101px;
                height: 16px;
                font-size: 11px;
                font-family: PingFang SC-常规体, PingFang SC;
                font-weight: normal;

            }

            b {
                width: 101px;
                height: 24px;
                font-size: 17px;
                font-family: PingFang SC-Heavy, PingFang SC;
                font-weight: 800;
            }
        }

        .merber {
            background-image: url('../../../../assets/images/memberNumberLogo.png');

        }

        .identify {
            background-image: url('../../../../assets/images/identityNumberLogo.png');

        }

        .upchain {
            background-image: url('../../../../assets/images/upChainNumberLogo.png');

        }
    }
}
</style>