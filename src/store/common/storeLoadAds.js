import * as types from '@/consts'

export const state = () => ({
  ads: []
})

export const getters = {}

export const actions = {
  async initLoadAds ({ commit, state }) {
    const params = {
      api_key: process.env.API_KEY,
      website_id: process.env.WEBSITE_ID,
    }
    const response =  await this.$axios.$get(`manager/advertises/json/1.json`, { params })
    if (response.status_code === 1) {
      commit(types.STORE_SET_ADS, response.data)
    }
  },
}

export const mutations = {
  [types.STORE_SET_ADS](state, data) {
    state.ads = data
  },
}
