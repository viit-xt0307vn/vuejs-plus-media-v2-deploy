export default {
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    item: {
      type: Object,
      default: null
    },
    category: {
      type: Object,
      default: null
    }
  },

  methods: {
  }, 

  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    /**
     * imageUrl
     * @returns {String}
     */
    imageUrl() {
      if (!this.item.image) return this.$defaultImg()
      return this.item.image
    }
  }
}