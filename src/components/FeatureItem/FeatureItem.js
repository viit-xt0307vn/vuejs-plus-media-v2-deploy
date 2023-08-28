export default {
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    className: {
      type: String, 
      default: null
    },
    item: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    },
  },

  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    imageUrl() {
      if (!this.item.image) return this.$defaultImg()
      return this.item.image
    }
  }
}