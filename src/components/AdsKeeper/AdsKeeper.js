export default {
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    selector: {
      type: String,
      default: null
    },
    contentAds: {
      type: Object, 
      default: () => {}
    },
    position: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      element: null,
      ads: '<!-- Composite Start --> \n<div id="M886209ScriptRootC1465588"></div> \n<script src="https://jsc.adskeeper.com/m/b/m.baly.online.1465588.js" async></script> \n<!-- Composite End -->'
    }
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Load ads keeper
     */
    loadAdsKeeper() {
      this.element = document.getElementById(this.selector)

      const nodes = this.element.getElementsByTagName('script')

      if (!nodes) return;

      if (this.position) {
        for (let index = 0; index < nodes.length; index++) {
          const url_ads = nodes[index].getAttribute('src')
          const scriptEl = document.createElement('script')
          scriptEl.src = null
          scriptEl.src = url_ads
          if (this.position === 'head') {
            document.getElementsByTagName('head')[0].appendChild(scriptEl)
          }
  
          if (this.position === 'footer') {
            document.documentElement.appendChild(scriptEl);
          }
        }
        this.element.remove()
      } else {
        let url_ads = nodes[0].getAttribute('src')
        let scriptEl = document.createElement('script')
        scriptEl.src = url_ads  
        scriptEl.type  = 'text/javascript'
        scriptEl.async = true
        scriptEl.referrerpolicy = 'strict-origin-when-cross-origin'
        this.element.appendChild(scriptEl)
      }     
    }
  },

  beforeRouterLeave(from, to, next) {
    this.element.remove()
    next()
  },

  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  mounted () {
    this.$nextTick(() => {
      setTimeout(async() => {
        await this.loadAdsKeeper()
      }, 2000);
    })
  },
}
