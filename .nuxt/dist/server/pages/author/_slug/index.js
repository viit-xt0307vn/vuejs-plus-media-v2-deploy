exports.ids = [3];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/author/_slug/index.vue?vue&type=template&id=08609e44&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.author ? _c('div', [_vm._ssrNode("<div class=\"breadcrumbs clear\" data-v-08609e44>", "</div>", [_vm._ssrNode("<span class=\"breadcrumbs-nav\" data-v-08609e44>", "</span>", [_c('router-link', {
    attrs: {
      "to": `/`
    }
  }, [_vm._v("Home")]), _vm._ssrNode(" <span class=\"post-category\" data-v-08609e44>" + _vm._ssrEscape(_vm._s(_vm.author.user.name)) + "</span>")], 2), _vm._ssrNode(" <h1 data-v-08609e44>" + _vm._ssrEscape(_vm._s(_vm.author.user.name)) + "</h1>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<main id=\"main\" class=\"site-main clear\" data-v-08609e44>", "</main>", [_vm._ssrNode("<div id=\"recent-content\" class=\"content-loop\" data-v-08609e44>", "</div>", [_vm.adsCategory ? [_vm.adsCategory.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-category`,
      "contentAds": _vm.adsCategory
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.adsCategory.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-category`,
      "contentAds": _vm.adsCategory
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm._l(_vm.posts, function (post, index) {
    return _c('post-item-list', {
      key: index,
      attrs: {
        "item": post,
        "author": _vm.author
      }
    });
  })], 2), _vm._ssrNode(" <div id=\"infinite-list\" class=\"load-more\" data-v-08609e44></div> "), _c('loading', {
    attrs: {
      "active": _vm.isLoading
    }
  })], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/pages/author/_slug/index.vue?vue&type=template&id=08609e44&scoped=true&

// EXTERNAL MODULE: ./src/components/PostItemList/PostItemList.vue + 4 modules
var PostItemList = __webpack_require__(75);

// EXTERNAL MODULE: ./src/components/Loading/Loading.vue + 4 modules
var Loading = __webpack_require__(71);

// EXTERNAL MODULE: ./src/mixins/mixinApp.js
var mixinApp = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/pages/author/_slug?vue&type=script&lang=js&



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
    data
  -------------------------------------------------- */
  data() {
    return {
      author: null,
      isLoading: false,
      pageNo: 1,
      totalPage: null,
      posts: []
    };
  },
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    PostItemList: PostItemList["a" /* default */],
    Loading: Loading["a" /* default */]
  },
  /* --------------------------------------------------
    asyncData
  -------------------------------------------------- */
  async asyncData(context) {
    context.$setLoading(true);
    const pageData = {
      pageNo: 1,
      totalPage: 1
    };
    const params = {
      api_key: context.env.API_KEY,
      website_id: context.env.WEBSITE_ID,
      username: context.params.slug,
      get_posts: 1,
      post_limit: 10,
      post_page: 1,
      get_meta: 1
    };
    const response = await context.$axios.get(`manager/authors/json/1.json`, {
      params
    });
    if (response.data.status_code === 1 && response.data.data.length !== 0) {
      pageData.author = response.data.data[0];
      pageData.posts = response.data.data[0].posts;
      pageData.totalPage = response.data.data[0].post_count_page;
      pageData.metaDescription = response.data.data[0].meta;
      pageData.metaTitle = response.data.data[0].user.name;
      pageData.pageNo++;
    }
    context.$setLoading(false);
    return pageData;
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
        return;
      }
      this.isLoading = true;
      const params = {
        api_key: "0906429283",
        website_id: 22,
        username: this.$route.params.slug,
        get_posts: 1,
        post_limit: 10,
        post_page: this.pageNo
      };
      const response = await this.$axios.get(`manager/authors/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts.push(...response.data.data[0].posts);
      }
      this.pageNo++;
    }
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {},
  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  mounted() {
    window.addEventListener('scroll', async e => {
      const listElm = document.querySelector('#infinite-list');
      const {
        scrollTop,
        scrollHeight,
        clientHeight
      } = document.documentElement;
      if (listElm && scrollTop + clientHeight >= listElm.offsetTop) {
        if (this.isLoading || this.pageNo > this.totalPage || this.pageNo === 1) {
          return;
        }
        await this.getPostByAuthor();
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    });
  }
});
// CONCATENATED MODULE: ./src/pages/author/_slug?vue&type=script&lang=js&
 /* harmony default export */ var author_slug_vue_type_script_lang_js_ = (_slug_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/author/_slug/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  author_slug_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "08609e44",
  "6ed3936a"
  
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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("45043fa2", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Loading_scss_vue_type_style_index_0_id_7bdb9fc2_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading[data-v-7bdb9fc2]{align-items:center;display:block;display:flex;height:100px;justify-content:center;overflow:hidden;position:relative;z-index:9999}.loading .bg[data-v-7bdb9fc2]{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0}.loading .spinner[data-v-7bdb9fc2]{position:relative}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Loading/Loading.vue?vue&type=template&id=7bdb9fc2&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.active ? _c('div', {
    staticClass: "loading"
  }, [_vm._ssrNode("<div class=\"bg\" data-v-7bdb9fc2></div> "), _vm._ssrNode("<div class=\"spinner\" data-v-7bdb9fc2>", "</div>", [_vm._ssrNode("<svg viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" stroke=\"#007bff\" data-v-7bdb9fc2>", "</svg>", [_vm._ssrNode("<g fill=\"none\" fill-rule=\"evenodd\" data-v-7bdb9fc2>", "</g>", [_vm._ssrNode("<g transform=\"translate(1 1)\" stroke-width=\"2\" data-v-7bdb9fc2>", "</g>", [_vm._ssrNode("<circle stroke-opacity=\".25\" cx=\"18\" cy=\"18\" r=\"18\" data-v-7bdb9fc2></circle> "), _vm._ssrNode("<path d=\"M36 18c0-9.94-8.06-18-18-18\" data-v-7bdb9fc2>", "</path>", [_c('animateTransform', {
    attrs: {
      "attributeName": "transform",
      "type": "rotate",
      "from": "0 18 18",
      "to": "360 18 18",
      "dur": "0.8s",
      "repeatCount": "indefinite"
    }
  })], 1)], 2)])])])], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Loading/Loading.vue?vue&type=template&id=7bdb9fc2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/Loading/Loading.js?vue&type=script&lang=js&
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/Loading/Loading.js?vue&type=script&lang=js&
 /* harmony default export */ var Loading_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Loading/Loading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loading_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7bdb9fc2",
  "5a3e951a"
  
)

/* harmony default export */ var Loading = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("60d1c1b1", content, true, context)
};

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_PostItemList_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 74:
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PostItemList/PostItemList.vue?vue&type=template&id=65bb872f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.item ? _c('div', {
    staticClass: "hentry clear"
  }, [_c('router-link', {
    staticClass: "thumbnail-link",
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('div', {
    staticClass: "thumbnail-wrap"
  }, [_c('img', {
    attrs: {
      "src": _vm.imageUrl,
      "alt": _vm.item.name
    }
  })])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-header\">", "</div>", [_vm._ssrNode("<h2 class=\"entry-title\">", "</h2>", [_c('router-link', {
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.$omitText(_vm.item.name, 60))
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-meta clear\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": `/author/${_vm.item.author.username}/`
    }
  }, [_c('span', {
    staticClass: "entry-author"
  }, [_c('span', {
    attrs: {
      "rel": "author"
    }
  }, [_vm._v(_vm._s(_vm.item.author.name))])])]), _vm._ssrNode(" <span class=\"sep date-sep\">·</span> <span class=\"entry-date\">" + _vm._ssrEscape(_vm._s(_vm.$timePost(_vm.item.created))) + "</span>")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-summary\">", "</div>", [_vm._ssrNode("<p>" + _vm._s(_vm.item.description) + "</p> "), _vm._ssrNode("<span class=\"read-more\">", "</span>", [_c('router-link', {
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_vm._v("Read more")])], 1)], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/PostItemList/PostItemList.vue?vue&type=template&id=65bb872f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/PostItemList/PostItemList.js?vue&type=script&lang=js&
/* harmony default export */ var PostItemListvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    item: {
      type: Object,
      default: null
    },
    category: {
      type: Object,
      default: null
    }
  },
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
      if (!this.item.image) return this.$defaultImg();
      return this.item.image;
    }
  }
});
// CONCATENATED MODULE: ./src/components/PostItemList/PostItemList.js?vue&type=script&lang=js&
 /* harmony default export */ var PostItemList_PostItemListvue_type_script_lang_js_ = (PostItemListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/PostItemList/PostItemList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  PostItemList_PostItemListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7f98358c"
  
)

/* harmony default export */ var PostItemList = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("40337288", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_08609e44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_08609e44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_08609e44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_08609e44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_index_scss_vue_type_style_index_0_id_08609e44_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map