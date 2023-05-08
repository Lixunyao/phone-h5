<template>
    <div ref="chartDom" class="main">
    </div>
</template>
   
<script setup>
import { ref, onMounted, watch, watchEffect } from 'vue'
import * as echarts from 'echarts'
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
    myChart.value = echarts.init(chartDom.value)
    myChart.value.setOption(props.options, true)
})
watchEffect(() => {
    props.options, (newval) => {
        console.log(newval)
        myChart.value.setOption(newval)
    }, {
        deep: true
    }
})
window.addEventListener("resize", function () {
    console.log(1123)
    myChart.value.resize()
})
    // watch(() => props.options, (newOptions) => [myChart.value.setOption(newOptions)
    // deep: true


</script>

<style scoped lang="scss">
.main {
    width: 375px;
    height: 340px;
}
</style>