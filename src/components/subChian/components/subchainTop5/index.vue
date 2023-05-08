<template>
  <div class="item">
    <div class="item-title">
      <span class="title-name">子链活跃排行TOP5</span>

      <span class="title-dsc">(按上链数据量,单位:条)</span>
    </div>

    <div class="recentTime">
      <span
        :class="{ recentDay: true, isActive: recentDayNumber == 30 }"
        @click="recentDayNumber = 30"
        >近30天</span
      >

      <span
        :class="{ recentDay: true, isActive: recentDayNumber == 7 }"
        @click="recentDayNumber = 7"
        >近7天</span
      >

      <span
        :class="{ recentDay: true, isActive: recentDayNumber == 0 }"
        @click="recentDayNumber = 0"
        >本日</span
      >
    </div>
    <div class="activeData">
        <div class="activeItem">
            <echartOne :options="echartData"></echartOne>
        </div>
    </div>

  </div>
</template>

<script setup>
import echartOne from './components/echart.vue'
import { ref , reactive } from "vue";
const recentDayNumber = ref(30);
const echartData = reactive([
    { name: '济南市', value: 45 },
    { name: '青岛市', value: 22 },
    { name: '淄博市', value: 5 },
  { name: '枣庄市', value: 4 },
     { name: '济宁市', value: 4 },
])
</script>

<style scoped lang="scss">
.item {
  width: 351px;
  height: 293px;
  background: #ffffff;
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
