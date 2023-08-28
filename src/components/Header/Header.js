import { mapState, mapGetters } from 'vuex'
import * as TYPES from '@/consts'

export default {
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {},

  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      searchModel: null
    }
  },

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

      settings () {
        return this.$store.state.common.storeLoadInit.settings
      },
    }),
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Search
     */
    search() {
      this.$router.push({
        name: 'search',
        query: {
          keywords: this.searchModel
        }
      })
    },

    /**
     * openMenu SP
     */
    openMenu() {
      this.$store.commit(`storeMenuSP/${TYPES.TOOGLE_MENU}`, true)
    },
  },
}