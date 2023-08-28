import { mapState } from 'vuex'

export default {
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...mapState({
      /**
       * loading
       * @returns {Boolean}
       */
      isLoading () {
        return this.$store.state.common.storeLoadInit.isLoading
      },
    }),
  }
}
