<template>
    <div class="item">
        <div class="item-title">
            <span class="title-name">子链运行状态</span>
            <span class="title-dsc">(各地市子链接入数,单位:个)</span>
        </div>
        <p class="item-dsc">按上链数据量展示前10</p>
        <div>
            <ElConfigProvider :locale="locale">
                <el-table :data="tableData" style="width: 100%" :border="true" :row-class-name="tableRowClassName">
                    <el-table-column prop="name" label="子链名称" width="119" show-overflow-tooltip />
                    <el-table-column prop="type" label="应用领域" width="66" show-overflow-tooltip />
                    <el-table-column prop="txNum" label="上链数据量(条）" width="95" show-overflow-tooltip>
                        <template v-slot="scope">
                            {{ numberTo3(scope.row.txNum) }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="runStatus" label="状态" show-overflow-tooltip>
                        <template v-slot="scope">
                            {{ scope.row.runStatus=='normal'?'正常':scope.row.runStatus=='fault'?'故障':'告警' }}
                        </template>
                    </el-table-column>
                </el-table>
            </ElConfigProvider>
        </div>
    </div>
</template>

<script setup>
import { numberTo3 } from '@/utils/public.js';
import { computed } from '@vue/reactivity';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
const locale = zhCn
const tableRowClassName = (data) => {
    if (data.rowIndex % 2 == 0) {
        return 'warning-row'
    } else {
        return 'success-row'
    }
}
import { echartsData } from '@/store'
let  echartsData1 = echartsData()
let tableData = computed(()=>echartsData1.subchainList)
</script>

<style scoped lang='scss'>
.item {
    width: 351px;
    height: 505px;
    background: #FFFFFF;
    border-radius: 14px 14px 14px 14px;
    opacity: 1;
    margin-top: 12px;
    position: relative;
    top: -51px;
}

.item-dsc {
    height: 17px;
    font-size: 12px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #ABABAB;
    margin: 2px 0 0 15px
}

.el-table :deep(.warning-row) {
    background-color: #FFFFFF;
}

.el-table :deep(.success-row) {
    background-color: #F9F8F8;
}

.el-table :deep(.el-table__header tr) {
    background-color: #4D83FD !important;
}

.el-table :deep(.el-table__header .cell) {
    font-size: 12px;
    font-family: PingFang SC-常规体, PingFang SC;
    font-weight: normal;
    color: #FFFFFF;
    padding: 0;
    text-align: center;
}

.el-table :deep(th.el-table__cell) {
    background-color: #4D83FD !important;
}
</style>