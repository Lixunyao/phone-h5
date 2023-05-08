<template>
  <div class="item">
    <div class="item-title">
      <span class="title-name">子链应用类型分布</span>

      <span class="title-dsc">(单位:个)</span>
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
  {
    name: "生态环保",
    value: 5.73,
    // itemStyle: { color: "#cf9ef1" },
  },
    {
    name: "其他",
    value: 1.73,
    // itemStyle: { color: "#cf9ef1" },
  },
  
]);
</script>

<style scoped lang="scss">
.item {
  width: 351px;
  height: 336px;
  background: #ffffff;
  border-radius: 14px 14px 14px 14px;
  opacity: 1;
  position: relative;
  top: -51px;
  margin-top: 12px;
}
</style>
