import PostItemSearch from '@/components/PostItemSearch/PostItemSearch.vue'
import Loading from '@/components/Loading/Loading.vue';
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
    data
  -------------------------------------------------- */
  data() {
    return {
      isLoading: false,
      pageNo: 1,
      totalPage: null,
      posts: [],
    }
  },

  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    PostItemSearch,
    Loading,
  },

  /* --------------------------------------------------
    asyncData
  -------------------------------------------------- */
  async asyncData(context) {
    const pageData = {
      pageNo: 1,
      totalPage: 1
    }
    const params = {
      api_key: '0906429283',
      website_id: 72,
      keywords: context.query.keywords,
      page: 1,
      limit: 10,
      get_meta: 1
    }
    const response = await context.$axios.get(`manager/posts/json/1.json`, { params })
    if (response.data.status_code === 1) {
      pageData.posts = response.data.data
      pageData.totalPage = response.data.post_count_page
      pageData.metaTitle = context.query.keywords
      pageData.pageNo++
    }
    return pageData
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get post by category
     */
    async getPostByKeyword() {
      if (this.isLoading) {
        return
      }
      this.isLoading = true
      const params = {
        api_key: '0906429283',
        website_id: 72,
        keywords: this.$route.query.keywords,
        get_posts: 1,
        page: 1,
        limit: 10,
      }

      const response = await this.$axios.get(`manager/posts/json/1.json`, { params })
      if (response.data.status_code === 1) {
        this.posts.push(...response.data.data)
      }
      this.pageNo++
    },
  },

  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
  },

  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  mounted() {
    window.addEventListener('scroll', async(e) => {
      const listElm = document.querySelector('#infinite-list');
      const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;
      if (listElm && scrollTop + clientHeight >= listElm.offsetTop) {
        if (this.isLoading || this.pageNo > this.totalPage || this.pageNo === 1) { return }
        await this.getPostByKeyword();
        setTimeout(() => {
          this.isLoading = false
        }, 500)
      }
    });
  },
};