import PostItemList from '@/components/PostItemList/PostItemList.vue'
import Loading from '@/components/Loading/Loading.vue'
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
    data
  -------------------------------------------------- */
  data() {
    return {
      author: null,
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
    PostItemList,
    Loading,
  },

  /* --------------------------------------------------
    asyncData
  -------------------------------------------------- */
  async asyncData(context) {
    context.$setLoading(true)
    const pageData = {
      pageNo: 1,
      totalPage: 1
    }
    const params = {
      api_key: context.env.API_KEY,
      website_id: context.env.WEBSITE_ID,
      username: context.params.slug,
      get_posts: 1,
      post_limit: 10,
      post_page: 1,
      get_meta: 1
    }
    const response = await context.$axios.get(`manager/authors/json/1.json`, { params })
    if (response.data.status_code === 1 && response.data.data.length !== 0) {
      pageData.author = response.data.data[0]
      pageData.posts = response.data.data[0].posts
      pageData.totalPage = response.data.data[0].post_count_page
      pageData.metaDescription = response.data.data[0].meta
      pageData.metaTitle = response.data.data[0].user.name
      pageData.pageNo++
    }
    context.$setLoading(false)
    return pageData
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get post by author
     */
    async getPostByAuthor() {
      if (this.isLoading) {
        return
      }
      this.isLoading = true
      const params = {
        api_key: process.env.API_KEY,
        website_id: process.env.WEBSITE_ID,
        username: this.$route.params.slug,
        get_posts: 1,
        post_limit: 10,
        post_page: this.pageNo
      }

      const response = await this.$axios.get(`manager/authors/json/1.json`, { params })
      if (response.data.status_code === 1) {
        this.posts.push(...response.data.data[0].posts)
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
        await this.getPostByAuthor();
        setTimeout(() => {
          this.isLoading = false
        }, 500)
      }
    });
  },
};