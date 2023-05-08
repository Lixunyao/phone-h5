<template>
    <div class="content">
        <ChainNumber></ChainNumber>
        <subchainDistribution></subchainDistribution>
        <subchainTop></subchainTop>
        <subchainOperationMonitoring></subchainOperationMonitoring>
    </div>
</template>

<script setup>
import  ChainNumber  from './components/ChainNumber/index.vue'
import  subchainDistribution  from './components/subchainDistribution/index.vue'
import  subchainTop  from './components/subchainTop5/index.vue'
import  subchainOperationMonitoring  from './components/subchainOperationMonitoring/index.vue'
</script>

<style scoped lang='scss'>
.content{
    width: 100%;
    background-color:#F9F8F8;
    position: relative;
    padding: 0 12px;
}
</style>