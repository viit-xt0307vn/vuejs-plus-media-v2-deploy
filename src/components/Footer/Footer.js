
import { mapState } from 'vuex'

export default {
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...mapState({
      /**
       * primaryMenus
       * @returns {Array}
       */
      footerMenus (state) {
        const menus = state.common.storeLoadInit.menus
        if (!menus.length) return []
        return menus.filter(e => e.type.name === 'Footer')
      },

      /**
       * Setting site
       * @param {*} state 
       * @returns 
       */
      settings (state) {
        return state.common.storeLoadInit.settings
      }
    }),
  },
}
