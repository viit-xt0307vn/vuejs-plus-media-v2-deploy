import { mapState } from "vuex";
import AdsKeeper from "@/components/AdsKeeper/AdsKeeper.vue";
import AdsGoogle from "@/components/AdsGoogle/AdsGoogle.vue";
import * as TYPES from "@/consts";

export default {
    /* --------------------------------------------------
    components
  -------------------------------------------------- */
    components: {
        AdsKeeper,
        AdsGoogle,
    },
    /* --------------------------------------------------
    data
  -------------------------------------------------- */
    data() {
        return {
            metaTitle: "",
            metaDescription: "",
            meta: "",
        };
    },

    /* --------------------------------------------------
    head
  -------------------------------------------------- */
    head() {
        const meta = [];
        const scripts = [];

        if (this.metaDescription) {
            meta.push(...this.metaDescription);
        }

        if (this.$route.name === "index") {
            meta.push(...this.$metas());
        }

        const tMeta = {};
        tMeta.link = [
            { rel: "icon", type: "image/x-icon", href: `${this.$favicon()}` },
        ];
        tMeta.meta = meta;
        if (this.$route.name === "index") {
            tMeta.title = this.$sitename();
        } else {
            tMeta.title = `${this.metaTitle} - ${this.$sitename()}`;
        }

        // script measurementId
        if (this.measurementId) {
            scripts.push({
                async: true,
                src: `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`,
            });
            scripts.push({
                innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${this.measurementId}');`,
            });
        }

        // script yoastSeo
        if (this.metaYoastSeo) {
            scripts.push({
                innerHTML: JSON.stringify(this.metaYoastSeo),
                hid: "yoast-seo",
                type: "application/ld+json",
                class: "yoast-schema-graph",
            });
        }
        tMeta.script = scripts;
        tMeta.__dangerouslyDisableSanitizers = ["script"];

        return tMeta;
    },

    /* --------------------------------------------------
    computed
  -------------------------------------------------- */
    computed: {
        ...mapState({
            adsHeader(state) {
                const ads = state.common.storeLoadAds.ads.find(
                    (e) => e.position.id === TYPES.HEADER
                );
                return ads ? ads : null;
            },

            adsPostDetail(state) {
                return state.common.storeLoadAds.ads.filter(
                    (e) => e.pages[0].id === TYPES.ADS_POST_DETAIL_PAGE
                );
            },

            adsCategory(state) {
                return state.common.storeLoadAds.ads.find(
                    (e) => e.pages[0].id === TYPES.ADS_CATEGORY_PAGE
                );
            },

            adsSearch(state) {
                return state.common.storeLoadAds.ads.find(
                    (e) => e.pages[0].id === TYPES.ADS_SEARCH_PAGE
                );
            },

            adsTag(state) {
                return state.common.storeLoadAds.ads.find(
                    (e) => e.pages[0].id === TYPES.ADS_TAG_PAGE
                );
            },

            adsPageDetail(state) {
                return state.common.storeLoadAds.ads.filter(
                    (e) => e.pages[0].id === TYPES.ADS_DETAIL_PAGE
                );
            },
            measurementId(state) {
                return state.common.storeLoadInit.settings.analytic.measurement_id;
            },
        }),
    },

    /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
    mounted() {},
};
