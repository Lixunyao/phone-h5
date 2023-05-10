import request from '@/utils/request'

//leftTop 业务支撑情况
export function businessSupply() {
    return request({
        url: 'largeScreen/businessSupport',
        method: 'get',
    })
}
//leftCenter 业务链分布情况
export function ServiceProviderSupply() {
    return request({
        url: 'largeScreen/serviceSupport',
        method: 'get',
    })
}
//leftBottom 接收/跨链交易趋势
export function tradingTrend() {
    return request({
        url: 'largeScreen/activeChain',
        method: 'get',
    })
}
//leftBottomTow 主链运行监测
export function operationMonitoring() {
    return request({
        url: 'largeScreen/systemMonitor',
        method: 'get',
    })
}
//centreTop 
export function largeScreenNumber() {
    return request({
        url: 'largeScreen/coreMetrics',
        method: 'get',
    })
}
//子链运行状态
export function subchainDynamic() {
    return request({
        url: 'largeScreen/subchainStatus',
        method: 'get',
    })
}
//rightTop 子链应用类型分布 
export function subchainDistribution() {
    return request({
        url: 'largeScreen/industryPercent',
        method: 'get',
    })
}
//rightCenter 子链活跃排行TOP5 
export function subchainTop5() {
    return request({
        url: 'largeScreen/activeChain',
        method: 'get',
    })
}
//rightBottom 子链运行监测
export function subchainOperationMonitoring() {
    return request({
        url: 'largeScreen/chainMonitor',
        method: 'get',
    })
}
//子链数
export function chainCount() {
    return request({
        url: 'largeScreen/chainCountByLocation',
        method: 'get',
    })
}