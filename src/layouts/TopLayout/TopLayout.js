import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import MenuSP from '@/components/MenuSP/MenuSP.vue'
import FeaturePost from '@/components/FeaturePost/FeaturePost.vue'
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen.vue'
import AdsKeeper from '@/components/AdsKeeper/AdsKeeper.vue'
import AdsGoogle from '@/components/AdsGoogle/AdsGoogle.vue'
import { mapState } from 'vuex'
import * as TYPES from '@/consts'

export default {
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    Header: Header,
    Footer: Footer,
    Sidebar: Sidebar,
    MenuSP,
    FeaturePost,
    LoadingScreen,
    AdsKeeper,
    AdsGoogle
  },

  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      backtoTop: false,
    }
  },

  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...mapState({
      adsHeader(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === TYPES.HEADER)
        return ads ? ads : null
      },

      adsHead(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === TYPES.AUTO_HEAD)
        return ads ? ads : null
      },

      adsFooter(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === TYPES.FOOTER)
        return ads ? ads : null
      },
    })
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Event back to top
     */
    handleToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },

  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  mounted() {
    // const backToTop = document.querySelector('#back-top');
    window.addEventListener('scroll', async(e) => {
      const { scrollTop } = document.documentElement;
      if (scrollTop > 100) {
        this.backtoTop = true
      } else {
        this.backtoTop = false
      }
    })

    
  },

  /* --------------------------------------------------
    head
  -------------------------------------------------- */
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `${process.env.SITE_DOMAIN}${this.$route.path}`
        }
      ]
    }
  }
}