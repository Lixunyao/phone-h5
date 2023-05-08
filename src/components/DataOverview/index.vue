<template>
    <div class="content">   
        <CoreMetrics></CoreMetrics>
        <SubchainDynamic></SubchainDynamic>
        <SubchianDynamicAddress></SubchianDynamicAddress>
    </div>
</template>

<script setup>
import  CoreMetrics  from './components/coreMetrics/index.vue'
import  SubchainDynamic  from './components/subchainDynamic/index.vue'
import  SubchianDynamicAddress  from './components/subchainDynamicAddress/index.vue'
</script>

<style scoped lang='scss'>
.content{
    width: 100%;
    background-color:#F9F8F8;
    position: relative;
    padding: 0 12px;
}
</style>