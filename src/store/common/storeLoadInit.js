import * as types from '@/consts'

export const state = () => ({
  menus: [],
  settings: null,
  isLoading: false
})

export const getters = {
  permalinkId: state => state.settings?.setting?.permalink?.name === 'ID',
  measurement_id: state => state.settings?.analytic?.measurement_id,
}

export const actions = {
  async initMenuApp ({ commit, state }, payloadContext) {
    const params = {
      api_key: process.env.API_KEY,
      website_id: process.env.WEBSITE_ID,
    }
    const response =  await this.$axios.$get(`menus/links/json/1.json`, { params })
    if (response.status_code === 1) {
      commit(types.SET_DATA, response.data)
    }
  },

  async initSettingApp ({ commit, state }, payloadContext) {
    const params = {
      api_key: process.env.API_KEY,
      website_id: process.env.WEBSITE_ID,
      get_meta: 1
    }
    const response =  await this.$axios.$get(`manager/websites/json/1.json`, { params })
    if (response.status_code === 1) {
      commit(types.STORE_SETTINGS_APP, response.data)
    }
  }
}

export const mutations = {
  [types.SET_DATA](state, data) {
    state.menus = data.map(e => {
      return {
        ...e,
        hasSubMenu: false
      }
    })
  },

  [types.STORE_UPDATE_MENUS] (state, menu) {
    state.menus[menu.index].hasSubMenu = menu.value
  },

  [types.STORE_SETTINGS_APP] (state, settings) {
    state.settings = settings[0]
  },

  [types.STORE_SET_LOADING] (state, val) {
    state.isLoading = val
  },
}