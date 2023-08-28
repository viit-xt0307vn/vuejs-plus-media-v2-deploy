exports.ids = [6];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_205dc34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_205dc34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_205dc34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_205dc34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_205dc34e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/page/_slug/index.vue?vue&type=template&id=205dc34e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('main', {
    staticClass: "site-main single",
    attrs: {
      "id": "main"
    }
  }, [_vm.postDetail ? _vm._ssrNode("<article data-v-205dc34e>", "</article>", [_vm._ssrNode("<div class=\"breadcrumbs\" data-v-205dc34e>", "</div>", [_vm._ssrNode("<span class=\"breadcrumbs-nav\" data-v-205dc34e>", "</span>", [_c('router-link', {
    attrs: {
      "to": `/`
    }
  }, [_vm._v("Home")]), _vm._ssrNode(" <span class=\"post-title\" data-v-205dc34e>" + _vm._s(_vm.postDetail.name) + "</span>")], 2)]), _vm._ssrNode(" "), _vm.beforePostAds ? [_vm.beforePostAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-before-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.beforePostAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-before-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" <header class=\"entry-header clear\" data-v-205dc34e><h1 class=\"entry-title\" data-v-205dc34e>" + _vm._s(_vm.postDetail.name) + "</h1> <div class=\"entry-meta clear\" data-v-205dc34e><span class=\"entry-author\" data-v-205dc34e><span data-v-205dc34e>" + _vm._ssrEscape(_vm._s(_vm.postDetail.creater.name)) + "</span></span> <span class=\"sep date-sep\" data-v-205dc34e>·</span> <span class=\"entry-date\" data-v-205dc34e>" + _vm._ssrEscape(_vm._s(_vm.$timePost(_vm.postDetail.creater.created))) + "</span></div></header> "), _vm._ssrNode("<div class=\"entry-content\" data-v-205dc34e>", "</div>", [_vm._ssrNode((_vm.imageUrl ? "<p data-v-205dc34e><img" + _vm._ssrAttr("src", _vm.imageUrl) + _vm._ssrAttr("alt", _vm.postDetail.name) + " data-v-205dc34e></p>" : "<!---->") + " "), _vm._ssrNode("<div data-v-205dc34e>", "</div>", [_vm.beforeContentAds ? [_vm.beforeContentAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-before-content`,
      "contentAds": _vm.beforeContentAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.beforeContentAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-before-content`,
      "contentAds": _vm.beforeContentAds
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.postBodyArray, function (html, index) {
    return [_vm.beforeParagraphAds && index + 1 === _vm.beforeParagraphAds.class.number ? [_vm.beforeParagraphAds.type.id === 2 ? _c('ads-keeper', {
      key: `before-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.beforeParagraphAds
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.beforeParagraphAds.type.id === 1 ? _c('ads-google', {
      key: `before-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.beforeParagraphAds
      }
    }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm.beforeParagraphAds && (index + 1 - _vm.beforeParagraphAds.class.number) % _vm.beforeParagraphAds.class.repeat_content_number === 0 && index - _vm.beforeParagraphAds.class.number > 0 ? [_vm.beforeParagraphAds.type.id === 2 ? _c('ads-keeper', {
      key: `before-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.beforeParagraphAds
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.beforeParagraphAds.type.id === 1 ? _c('ads-google', {
      key: `before-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.beforeParagraphAds
      }
    }) : _vm._e()] : _vm._e(), _vm._ssrNode(" <p data-v-205dc34e>" + _vm._s(html) + "</p> "), _vm.afterParagraphAds && index + 1 === _vm.afterParagraphAds.class.number ? [_vm.afterParagraphAds.type.id === 2 ? _c('ads-keeper', {
      key: `after-${index}`,
      attrs: {
        "selector": `ads-after-content-${index}`,
        "contentAds": _vm.afterParagraphAds
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.afterParagraphAds.type.id === 1 ? _c('ads-google', {
      key: `after-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.afterParagraphAds
      }
    }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm.afterParagraphAds && (index + 1 - _vm.afterParagraphAds.class.number) % _vm.afterParagraphAds.class.repeat_content_number === 0 && index - _vm.afterParagraphAds.class.number > 0 ? [_vm.afterParagraphAds.type.id === 2 ? _c('ads-keeper', {
      key: `after-${index}`,
      attrs: {
        "selector": `ads-after-content-${index}`,
        "contentAds": _vm.afterParagraphAds
      }
    }) : _vm._e(), _vm._ssrNode(" "), _vm.afterParagraphAds.type.id === 1 ? _c('ads-google', {
      key: `after-${index}`,
      attrs: {
        "selector": `ads-before-content-${index}`,
        "contentAds": _vm.afterParagraphAds
      }
    }) : _vm._e()] : _vm._e()];
  }), _vm._ssrNode(" "), _vm.afterContentAds ? [_vm.afterContentAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-after-content`,
      "contentAds": _vm.afterContentAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.afterContentAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-after-content`,
      "contentAds": _vm.afterContentAds
    }
  }) : _vm._e()] : _vm._e()], 2)], 2), _vm._ssrNode(" "), _vm.afterPostAds ? [_vm.beforePostAds.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-after-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.beforePostAds.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-after-post`,
      "contentAds": _vm.beforePostAds
    }
  }) : _vm._e()] : _vm._e()], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/page/_slug/index.vue?vue&type=template&id=205dc34e&scoped=true&

// EXTERNAL MODULE: ./src/mixins/mixinApp.js
var mixinApp = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/pages/page/_slug?vue&type=script&lang=js&

/* harmony default export */ var _slug_vue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    layout
  -------------------------------------------------- */
  layout: 'TopLayout/TopLayout',
  /* --------------------------------------------------
    mixins
  -------------------------------------------------- */
  mixins: [mixinApp["a" /* default */]],
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {},
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      postDetail: null,
      postBody: null,
      postBodyArray: [],
      contentAds: []
    };
  },
  /* --------------------------------------------------
    asyncData
  -------------------------------------------------- */
  async asyncData(context) {
    context.$setLoading(true);
    const pageData = {};
    const params = {
      api_key: context.env.API_KEY,
      website_id: context.env.WEBSITE_ID,
      slug: context.params.slug,
      get_meta: 1
    };
    const response = await context.$axios.get(`nodes/nodes/json/1.json`, {
      params
    });
    if (response.data.status_code === 1 && response.data.data.length !== 0) {
      var _response$data$data$;
      pageData.postDetail = response.data.data[0];
      pageData.metaDescription = ((_response$data$data$ = response.data.data[0]) === null || _response$data$data$ === void 0 ? void 0 : _response$data$data$.meta) || [];
      pageData.metaTitle = response.data.data[0].name;
      pageData.metaYoastSeo = response.data.data[0]['yoast-seo'];
      if (pageData.postDetail.body) {
        pageData.postBodyArray = pageData.postDetail.body.match(/<p>(.*?)<\/p>/g).map(val => {
          return val.replace(/<\/?p>/g, '');
        });
      }
    }
    context.$setLoading(false);
    return pageData;
  },
  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created() {
    await this.getAds();
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
        api_key: "0906429283",
        website_id: 22
      };
      const response = await this.$axios.get(`manager/advertises/json/1.json`, {
        params
      });
      if (response.data.status_code === 1 && response.data.data.length !== 0) {
        const ads = response.data.data;
        this.contentAds = ads.filter(e => e.name === 'Post detail');
      }
    }
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    imageUrl() {
      if (!this.postDetail || !this.postDetail.image) return null;
      return this.postDetail.image;
    },
    /**
     * before Post Ads
     * @returns {Object}
     */
    beforePostAds() {
      if (!this.adsPageDetail.length) return null;
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.BEFORE_POST);
      return ads ? ads : null;
    },
    /**
     * before content Ads
     * @returns {Object}
     */
    beforeContentAds() {
      if (!this.adsPageDetail.length) return null;
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.BEFORE_CONTENT);
      return ads ? ads : null;
    },
    /**
     * before Paragraph Ads
     * @returns {Object}
     */
    beforeParagraphAds() {
      if (!this.adsPageDetail.length) return null;
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.BEFORE_PARAGRAPH);
      return ads ? ads : null;
    },
    /**
     * after Post Ads
     * @returns {Object}
     */
    afterPostAds() {
      if (!this.adsPageDetail.length) return null;
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.AFTER_POST);
      return ads ? ads : null;
    },
    /**
     * after content Ads
     * @returns {Object}
     */
    afterContentAds() {
      if (!this.adsPageDetail.length) return null;
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.AFTER_CONTENT);
      return ads ? ads : null;
    },
    /**
     * after Paragraph Ads
     * @returns {Object}
     */
    afterParagraphAds() {
      if (!this.adsPageDetail.length) return null;
      const ads = this.adsPageDetail.find(e => e.position.id === TYPES.AFTER_PARAGRAPH);
      return ads ? ads : null;
    }
  }
});
// CONCATENATED MODULE: ./src/pages/page/_slug?vue&type=script&lang=js&
 /* harmony default export */ var page_slug_vue_type_script_lang_js_ = (_slug_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/page/_slug/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_slug_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "205dc34e",
  "1936bf62"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AdsKeeper_AdsKeeper_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _components_AdsGoogle_AdsGoogle_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = ({
  /* --------------------------------------------------
  components
  -------------------------------------------------- */
  components: {
    AdsKeeper: _components_AdsKeeper_AdsKeeper_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    AdsGoogle: _components_AdsGoogle_AdsGoogle_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  /* --------------------------------------------------
  data
  -------------------------------------------------- */
  data() {
    return {
      metaTitle: "",
      metaDescription: "",
      meta: ""
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
    tMeta.link = [{
      rel: "icon",
      type: "image/x-icon",
      href: `${this.$favicon()}`
    }];
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
        src: `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`
      });
      scripts.push({
        innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${this.measurementId}');`
      });
    }

    // script yoastSeo
    if (this.metaYoastSeo) {
      scripts.push({
        innerHTML: JSON.stringify(this.metaYoastSeo),
        hid: "yoast-seo",
        type: "application/ld+json",
        class: "yoast-schema-graph"
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
    ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
      adsHeader(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* HEADER */ "n"]);
        return ads ? ads : null;
      },
      adsPostDetail(state) {
        return state.common.storeLoadAds.ads.filter(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_POST_DETAIL_PAGE */ "c"]);
      },
      adsCategory(state) {
        return state.common.storeLoadAds.ads.find(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_CATEGORY_PAGE */ "a"]);
      },
      adsSearch(state) {
        return state.common.storeLoadAds.ads.find(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_SEARCH_PAGE */ "d"]);
      },
      adsTag(state) {
        return state.common.storeLoadAds.ads.find(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_TAG_PAGE */ "e"]);
      },
      adsPageDetail(state) {
        return state.common.storeLoadAds.ads.filter(e => e.pages[0].id === _consts__WEBPACK_IMPORTED_MODULE_3__[/* ADS_DETAIL_PAGE */ "b"]);
      },
      measurementId(state) {
        return state.common.storeLoadInit.settings.analytic.measurement_id;
      }
    })
  },
  /* --------------------------------------------------
  mounted
  -------------------------------------------------- */
  mounted() {}
});

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("fe5f57b8", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map