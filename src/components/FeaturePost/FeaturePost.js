import FeatureItem from '@/components/FeatureItem/FeatureItem.vue'

export default {
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    FeatureItem
  },

  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created() {
    await this.featurePost()
  },

  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      posts: [],
      loading: false,
      isLoading: false
    }
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get Classname
     * @param {*} num 
     * @returns {String}
     */
    className(num) {
      if (num === 0) return `featured-large hentry`
      else return `featured-small hentry`
    },

    /**
     * Get feature post
     */
    async featurePost() {
      const params = {
        api_key: process.env.API_KEY,
        website_id: process.env.WEBSITE_ID,
        limit: 5
      }
      const response = await this.$axios.get(`manager/posts/json/1.json`, { params })
      if (response.data.status_code === 1) {
        this.posts = response.data.data
      }
    }
  },
}
