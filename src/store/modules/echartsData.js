import { defineStore } from 'pinia';
import { largeScreenNumber, chainCount, subchainDynamic , businessSupply ,ServiceProviderSupply ,tradingTrend , operationMonitoring,
  subchainDistribution,subchainTop5,subchainOperationMonitoring
} from '@/api/echartData'


export const echartsData = defineStore('echartsData', {
  // id: 'user', // id必填，且需要唯一。两种写法
  state: () => {
    return {
      //核心数据
      coreData: {
        accessChainCount: 0,
        memberCount: 0,
        accountCount: 0,
        identityCount: 0,
        upChainCount: 0,
      },
      //地域分布数据
      chainCount: [],
      //子链运行状态
      subchainList: [],
      //业务支撑情况
      businessSupplyList:{

      },
      //业务链分布情况
      ServiceProviderSupplyList:{

      },
      //接受/跨链交易趋势
      TradingTrendList:{

      },
      //主链运行监测
      operationMonitoringList:{

      },
      //子链应用类型分布
      subchainDistributionList:{
        all:0,
        access:0,
        industy:[]
      },
      //子链活跃排行TOP5
      subchainTopList:{

      },
      //子链运行监测
      subchainOperationMonitoringList:{

      }
    };
  },
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    updateCoreData() {
      largeScreenNumber().then(res => {
        this.coreData = res.data
      })
    },
    updateChainCount() {
      chainCount().then(res => {
        this.chainCount = res.data
      })
    },
    updateSubchainList() {
      subchainDynamic().then(res => {
        let data = res.data
        let chainIndex = data.findIndex(item => {
          return item.flag == '1'
        })
        if (chainIndex != -1) {
          data.splice(chainIndex, 1)
        }
        this.subchainList = data
      })
    },
    updateBusinessSupplyList() {
      businessSupply().then(res => {
        this.businessSupplyList = res.data
      })
    },
    updateServiceProviderSupplyList() {
      ServiceProviderSupply().then(res => {
        res.data.map(item=>{
          item.value = item.depolyChainCount
        })
        this.ServiceProviderSupplyList = res.data
      })
    },
    updateTradingTrend() {
      tradingTrend().then(res => {
        this.TradingTrend = res.data
      })
    },
    updateOperationMonitoring() {
      operationMonitoring().then(res => {
        this.operationMonitoring = res.data
      })
    },
    updateSubchainDistributionList() {
      subchainDistribution().then(res => {
        this.subchainDistributionList = res.data
        this.subchainDistributionList.industy.map(item=>{
          item.name = item.key
        })
      })
    },
    updateSubchainTopList() {
      subchainTop5().then(res => {
        this.subchainTopList = res.data
      })
    },
    updateSubchainOperationMonitoringList() {
      subchainOperationMonitoring().then(res => {
        this.subchainOperationMonitoringList = res.data
      })
    },
  }
});
