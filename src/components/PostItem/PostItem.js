export default {
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    className: {
      type: String,
      default: ''
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
    /**
     * imageUrl
     * @returns {String}
     */
    imageUrl() {
      if (!this.item) return `assets/img/default-thumbnail.jpeg`
      return this.item.image
    },

    /**
     * createDate
     * @returns {String}
     */
    createDate() {
      if (!this.item) return null
      const date = this.item.created.split(' ')
      return date[0]
    }
  }
}