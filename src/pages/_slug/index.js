import mixinApp from '@/mixins/mixinApp.js'
import * as TYPES from '@/consts'
 
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
      isLoading: false,
      contentAds: []
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
      post_slug: context.params.slug,
      get_meta: 1
    }
    const response = await context.$axios.get(`manager/posts/json/1.json`, { params })
    if (response.data.status_code === 1 && response.data.data.length !== 0) {
      pageData.postDetail = response.data.data[0]
      pageData.metaDescription = response.data.data[0].meta
      pageData.metaTitle = response.data.data[0].name
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
    methods
  -------------------------------------------------- */
  methods: {},

  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    /**
     * imageUrl
     * @returns {String}
     */
    imageUrl() {
      if (!this.postDetail || !this.postDetail.image) return null
      return this.postDetail.image
    },

    /**
     * before Post Ads
     * @returns {Object}
     */
    beforePostAds() {
      if (!this.adsPostDetail.length) return null
      const ads = this.adsPostDetail.find(e => e.position.id === TYPES.BEFORE_POST)
      return ads ? ads : null
    },

    /**
     * before content Ads
     * @returns {Object}
     */
    beforeContentAds() {
      if (!this.adsPostDetail.length) return null
      const ads = this.adsPostDetail.find(e => e.position.id === TYPES.BEFORE_CONTENT)
      return ads ? ads : null
    },

    /**
     * before Paragraph Ads
     * @returns {Object}
     */
    beforeParagraphAds() {
      if (!this.adsPostDetail.length) return null
      const ads = this.adsPostDetail.find(e => e.position.id === TYPES.BEFORE_PARAGRAPH)
      return ads ? ads : null
    },

    /**
     * after Post Ads
     * @returns {Object}
     */
    afterPostAds() {
      if (!this.adsPostDetail.length) return null
      const ads = this.adsPostDetail.find(e => e.position.id === TYPES.AFTER_POST)
      return ads ? ads : null
    },

    /**
     * after content Ads
     * @returns {Object}
     */
    afterContentAds() {
      if (!this.adsPostDetail.length) return null
      const ads = this.adsPostDetail.find(e => e.position.id === TYPES.AFTER_CONTENT)
      return ads ? ads : null
    },

    /**
     * after Paragraph Ads
     * @returns {Object}
     */
    afterParagraphAds() {
      if (!this.adsPostDetail.length) return null
      const ads = this.adsPostDetail.find(e => e.position.id === TYPES.AFTER_PARAGRAPH)
      return ads ? ads : null
    }
  }
}
