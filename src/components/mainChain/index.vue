<template>
    <div class="content">
        <businessSupply></businessSupply>
        <ServiceProviderSupply></ServiceProviderSupply>
        <TradingTrend></TradingTrend>
        <operationMonitoring></operationMonitoring>
    </div>
</template>

<script setup>
import  businessSupply  from './components/businessSupply/index.vue'
import  ServiceProviderSupply  from './components/ServiceProviderSupply/index.vue'
import  TradingTrend  from './components/TradingTrend/index.vue'
import  operationMonitoring  from './components/operationMonitoring/index.vue'
</script>

<style scoped lang='scss'>
.content{
    width: 100%;
    background-color:#F9F8F8;
    position: relative;
    padding: 0 12px;
}
</style>