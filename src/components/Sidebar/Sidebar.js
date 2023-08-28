import WidgetItemSidebar from "@/components/WidgetItemSidebar/WidgetItemSidebar.vue"
import WidgetTags from "@/components/WidgetTags/WidgetTags.vue"

export default  {
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    WidgetItemSidebar,
    WidgetTags
  },

  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data () {
    return {
      tags: [],
      randomPosts: []
    }
  },

  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created () {
    await this.getTags()

    await this.getPostRamdom()
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    async getTags() {
      const params = {
        api_key: process.env.API_KEY,
        website_id: process.env.WEBSITE_ID,
        status: 1,
        limit: 10
      }

      const response = await this.$axios.get(`manager/tags/json/1.json`,{ params })
      if (response.data.status_code === 1) {
        this.tags = response.data.data
      }
    },

    async getPostRamdom() {

      const params = {
        api_key: process.env.API_KEY,
        website_id: process.env.WEBSITE_ID,
        limit: 10,
        random: 1,
      }

      const response = await this.$axios.get(`manager/posts/json/1.json`,{ params })
      if (response.data.status_code === 1) {
        this.randomPosts = response.data.data
      }
    }
  },
}
