import PostItem from '@/components/PostItem/PostItem.vue'

export default {
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    categoryId: {
      type: [Number, String],
      default: null
    },
    limit: {
      type: [Number, String],
      default: null
    },
    category: {
      type: Object,
      default: () => {}
    }
  },

  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    PostItem,
  },
  
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    catName() {
      if (!this.category) return null
      return this.category.name
    },

    /**
     * cat color
     * @returns {String}
     */
    catColor() {
      if (!this.category || !this.category?.color) return null
      return this.category?.color.text
    },

    /**
     * background category
     * @returns {String}
     */
    catBg() {
      if (!this.category || !this.category?.color) return null
      return this.category?.color.background
    }
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    className(num) {
      if (num === 0) return `post-big hentry`
      else return `post-small hentry`
    },
  },
}