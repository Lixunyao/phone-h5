<!-- <script setup>
import { reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import test1 from './components/test1.vue';
const options = reactive({
  xAxis:{
    type:'category',
    data:['A','B','C']
  },
  yAxis:{
    type:'value'
  },
  series:[
    {
      data:[120,200,150],
      type:'line'
    }
  ]
})
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <test1 :options="options"></test1>
</template>

<style lang="scss" scoped>

</style> -->
<template>
  <div class="hearder">
    <h2 class="title">齐鲁链数据运行监控</h2>
    <div class="itemWarp">
      <span :class="{ 'item': true, 'isActive': activeItem == 0 }" @click="activeItem = 0">
        数据总览
        <b class="bottomLine" v-if="activeItem == 0"></b>
      </span>
      <span :class="{ 'item': true, 'isActive': activeItem == 1 }" @click="activeItem = 1">
        主链情况
        <b class="bottomLine" v-if="activeItem == 1"></b>
      </span>
      <span :class="{ 'item': true, 'isActive': activeItem == 2 }" @click="activeItem = 2">
        子链情况
        <b class="bottomLine" v-if="activeItem == 2"></b>
      </span>
    </div>
  </div>
  <DataOverview v-if="activeItem == 0"></DataOverview>
  <MainChain v-if="activeItem == 1"></MainChain>
  <Subchain v-if="activeItem==2"></Subchain>
  <div>

  </div>
</template>

<script setup>
import DataOverview from './components/DataOverview/index.vue';
import MainChain from './components/mainChain/index.vue';
import Subchain from './components/subChian/index.vue'
import { ref } from 'vue';
let activeItem = ref(0)
</script>

<style scoped lang='scss'>
.hearder {
  width: 375px;
  height: 190px;
  background-image: url('./assets/images/topBg.png');
  background-size: contain;
  background-position: center center;
  overflow: hidden;

  .title {
    width: 180px;
    height: 28px;
    font-size: 20px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #FFFFFF;
    line-height: 28px;
    margin: 51px auto 0;
  }

  .itemWarp {
    margin-top: 7px;
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: space-around;

    .item {
      display: inline-block;
      height: 53px;
      width: 70px;
      line-height: 53px;
      font-size: 15px;
      font-family: PingFang SC-常规体, PingFang SC;
      font-weight: normal;
      color: rgb(213, 223, 253);
      position: relative;
    }

    .bottomLine {
      width: 22px;
      height: 3px;
      background: #FFFFFF;
      border-radius: 2px 2px 2px 2px;
      opacity: 1;
      position: absolute;
      left: 24px;
      bottom: 12px;
    }

    .isActive {
      font-size: 16px;
      font-family: PingFang SC-Heavy, PingFang SC;
      font-weight: 800;
      color: #FFFFFF;
    }
  }
}
</style>