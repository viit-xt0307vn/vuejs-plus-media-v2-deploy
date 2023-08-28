import * as types from '@/consts'

export const state = () => ({
  menu: false
})

export const mutations = {
  [types.TOOGLE_MENU](state, val) {
    state.menu = val;
  }
}