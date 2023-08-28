export default {
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    heading: {
      type: String,
      default:''
    },
    posts: {
      type: Array,
      default: () => []
    }
  },
  
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Image url
     * @param {*} item 
     * @returns {String}
     */
    imageUrl(item) {
      if (!item.image) return this.$defaultImg()
      return item.image
    },
  },
}