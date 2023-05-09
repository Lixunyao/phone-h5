<template>
    <div class="content">   
        <CoreMetrics></CoreMetrics>
        <SubchianDynamicAddress></SubchianDynamicAddress>
        <SubchainDynamic></SubchainDynamic>
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