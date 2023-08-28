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

  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data () {
    return {
      googleAds: '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4862497484826970" crossorigin="anonymous"></script><!-- LifePC 780X400 --><ins class="adsbygoogle" style="display:inline-block;width:780px;height:400px" data-ad-client="ca-pub-4862497412826970" data-ad-slot="2773090032"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'
    }
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    loadGoogleAds() {
      const element = document.getElementById(this.selector);
      const inlineScript   = document.createElement("script");
      inlineScript.type  = "text/javascript";
      inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'
      element.appendChild(inlineScript);
    }
  },

  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  async mounted () {    
    await this.loadGoogleAds()
  },
}
