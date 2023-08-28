import mixinApp from '@/mixins/mixinApp.js'

export default {
  /* --------------------------------------------------
    layout
  -------------------------------------------------- */
  layout: 'TopLayout/TopLayout',

  /* --------------------------------------------------
    mixins
  -------------------------------------------------- */
  mixins: [
    mixinApp
  ],

  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
  },
  
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      postDetail: null,
      postBody: null,
      postBodyArray: [],
      contentAds: [],
    }
  },

  /* --------------------------------------------------
    asyncData
  -------------------------------------------------- */
  async asyncData(context) {
    context.$setLoading(true)
    const pageData = {}
    const params = {
      api_key: context.env.API_KEY,
      website_id: context.env.WEBSITE_ID,
      slug: context.params.slug,
      get_meta: 1
    }
    const response = await context.$axios.get(`nodes/nodes/json/1.json`, { params })
    if (response.data.status_code === 1 && response.data.data.length !== 0) {
      pageData.postDetail = response.data.data[0]
      pageData.metaDescription = response.data.data[0]?.meta || []
      pageData.metaTitle = response.data.data[0].name
      pageData.metaYoastSeo = response.data.data[0]['yoast-seo']
      if (pageData.postDetail.body) {
        pageData.postBodyArray = pageData.postDetail.body.match(/<p>(.*?)<\/p>/g).map(val => {
          return val.replace(/<\/?p>/g, '')
        })
      }
    }
    context.$setLoading(false)
    return pageData
  },

  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created() {
    await this.getAds()
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get Ads
     */
    async getAds() {
      const params = {
        api_key: process.env.API_KEY,
        website_id: process.env.WEBSITE_ID,
      }

      const response = await this.$axios.get(`manager/advertises/json/1.json`, { params })
      if (response.data.status_code === 1 && response.data.data.length !== 0) {
        const ads = response.data.data
        this.contentAds = ads.filter(e => e.name === 'Post detail')
      }
    }
  },

  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    imageUrl() {
      if (!this.postDetail || !this.postDetail.image) return null
      return this.postDetail.image
    },

    /**
     * before Post Ads
     * @returns {Object}
     */
    beforePostAds() {
      if (!this.adsPageDetail.length) return null
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.BEFORE_POST)
      return ads ? ads : null
    },

    /**
     * before content Ads
     * @returns {Object}
     */
    beforeContentAds() {
      if (!this.adsPageDetail.length) return null
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.BEFORE_CONTENT)
      return ads ? ads : null
    },

    /**
     * before Paragraph Ads
     * @returns {Object}
     */
    beforeParagraphAds() {
      if (!this.adsPageDetail.length) return null
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.BEFORE_PARAGRAPH)
      return ads ? ads : null
    },

    /**
     * after Post Ads
     * @returns {Object}
     */
    afterPostAds() {
      if (!this.adsPageDetail.length) return null
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.AFTER_POST)
      return ads ? ads : null
    },

    /**
     * after content Ads
     * @returns {Object}
     */
    afterContentAds() {
      if (!this.adsPageDetail.length) return null
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.AFTER_CONTENT)
      return ads ? ads : null
    },

    /**
     * after Paragraph Ads
     * @returns {Object}
     */
    afterParagraphAds() {
      if (!this.adsPageDetail.length) return null
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.AFTER_PARAGRAPH)
      return ads ? ads : null
    }
  }
}
