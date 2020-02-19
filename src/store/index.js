import Vue from 'vue'
import Vuex from 'vuex'
import service from '@/services/service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataset: []
  },
  mutations: {
    FETCH_DATA(state, dataset) {
      state.dataset = dataset
    }
  },
  actions: {
    fetchData({
      commit
    }) {
      service.fetchData().then(response => {
        commit('FETCH_DATA', response.data)
      })
    }
    // sortedByBrand(dataset) {
    //   let brandList = dataset
    //   for (let i = 1; i < brandList.length; ++i) {
    //     let temp = brandList[i]
    //     let j = i
    //     for (; j > 0; --j) {
    //       if (temp.brand.localeCompare(brandList[j - 1].brand) === 1) {
    //         break
    //       }
    //       brandList[j] = brandList[j - 1]
    //     }
    //     brandList[j] = temp
    //   }
    //   return brandList
    // },
    // sortedByPrice(state) {
    //   let priceList = state.dataset
    //   for (let i = 1; i < priceList.length; ++i) {
    //     let temp = priceList[i]
    //     let j = i
    //     for (; j > 0; --j) {
    //       if (temp.price >= priceList[j - 1].price) {
    //         break
    //       }
    //       priceList[j] = priceList[j - 1]
    //     }
    //     priceList[j] = temp
    //   }
    //   return priceList
    // },
    // sortedByStorage(state) {
    //   let storageList = state.dataset
    //   for (let i = 1; i < storageList.length; ++i) {
    //     let temp = storageList[i]
    //     let j = i
    //     for (; j > 0; --j) {
    //       if (temp.storage >= storageList[j - 1].storage) {
    //         break
    //       }
    //       storageList[j] = storageList[j - 1]
    //     }
    //     storageList[j] = temp
    //   }
    //   return storageList
    // }
  },
  modules: {}
})