<template>
    <div ref="chartDom" class="main">
    </div>
</template>
   
<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import * as echarts from 'echarts'
import shandongJson from './shandong.json'
let chartDom = ref(null)
let myChart = ref(null)
const props = defineProps({
    options: {
        type: Object,
        default: {},
        required: true
    }
})
onMounted(() => {
    echarts.registerMap('山东', shandongJson);
    myChart.value = echarts.init(chartDom.value)
    myChart.value.setOption(props.options, true)
})
watchEffect(() => {
    props.options, (newval) => {
        myChart.value.setOption(newval)
    }, {
        deep: true
    }
})
window.addEventListener("resize", function () {
    myChart.value.resize()
})
    // watch(() => props.options, (newOptions) => [myChart.value.setOption(newOptions)
    // deep: true


</script>

<style scoped lang="scss">
.main {
    width: 355px;
    height: 215px;
}
</style>