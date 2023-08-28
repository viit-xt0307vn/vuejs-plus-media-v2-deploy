import { mapState } from 'vuex'
import * as types from '@/consts'

export default  {
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...mapState({
      /**
       * primaryMenus
       * @returns {Array}
       */
      primaryMenus () {
        return this.$store.state.common.storeLoadInit.menus.filter(e => e.type.name === 'Main Menu')
      },

      /**
       * menu
       * @returns {Boolean}
       */
      menu () {
        return this.$store.state.storeMenuSP.menu
      },
    })
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Close menu sp
     */
    closeMenu() {
      this.$store.commit(`storeMenuSP/${types.TOOGLE_MENU}`, false)
    },

    /**
     * 
     * @param {*} menuId 
     * @returns 
     */
    getChildMenu(menuId) {
      return this.menuItems.filter(e => e.parent === menuId)
    },

    /**
     * 
     * @param {*} index 
     * @param {*} value 
     */
    openSubMenu(index, value) {
      this.$store.commit('UPDATE_MENU', {
        index: index, 
        value: !value
      })
    },

    gotoCategory(link) {
      this.closeMenu()
      this.$router.push({
        path: link
      })
    },
  },
}
