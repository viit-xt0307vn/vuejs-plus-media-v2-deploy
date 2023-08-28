module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/_id/index","2":"pages/_slug/index","3":"pages/author/_slug/index","4":"pages/category/_slug/index","5":"pages/index","6":"pages/page/_slug/index","7":"pages/search/index","8":"pages/tag/_slug/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return TOOGLE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return STORE_UPDATE_MENUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return STORE_SETTINGS_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return STORE_SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return STORE_SET_ADS; });
/* unused harmony export ADS_HOME_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADS_POST_DETAIL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADS_CATEGORY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADS_TAG_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADS_DETAIL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADS_SEARCH_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return BEFORE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return BEFORE_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return BEFORE_PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AFTER_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AFTER_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AFTER_PARAGRAPH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return HEADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return FOOTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return AUTO_HEAD; });
/* unused harmony export ADS_GOOGLE */
/* unused harmony export ADS_KEEPER */
const SET_DATA = 'SET_DATA';
const TOOGLE_MENU = 'TOOGLE_MENU';
const STORE_UPDATE_MENUS = 'UPDATE_MENU';
const STORE_SETTINGS_APP = 'STORE_SETTINGS_APP';
const STORE_SET_LOADING = 'STORE_SET_LOADING';
const STORE_SET_ADS = 'STORE_SET_ADS';
const ADS_HOME_PAGE = 1;
const ADS_POST_DETAIL_PAGE = 2;
const ADS_CATEGORY_PAGE = 3;
const ADS_TAG_PAGE = 4;
const ADS_DETAIL_PAGE = 5;
const ADS_SEARCH_PAGE = 6;
const BEFORE_POST = 1;
const BEFORE_CONTENT = 2;
const BEFORE_PARAGRAPH = 3;
const AFTER_POST = 8;
const AFTER_CONTENT = 7;
const AFTER_PARAGRAPH = 4;
const HEADER = 18;
const FOOTER = 19;
const AUTO_HEAD = 21;
const ADS_GOOGLE = 1;
const ADS_KEEPER = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-google-adsense");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AdsKeeper/AdsKeeper.vue?vue&type=template&id=1eb32dd4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": `${_vm.selector}`
    },
    domProps: {
      "innerHTML": _vm._s(_vm.contentAds.body)
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/AdsKeeper/AdsKeeper.vue?vue&type=template&id=1eb32dd4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/AdsKeeper/AdsKeeper.js?vue&type=script&lang=js&
/* harmony default export */ var AdsKeepervue_type_script_lang_js_ = ({
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
  data() {
    return {
      element: null,
      ads: '<!-- Composite Start --> \n<div id="M886209ScriptRootC1465588"></div> \n<script src="https://jsc.adskeeper.com/m/b/m.baly.online.1465588.js" async></script> \n<!-- Composite End -->'
    };
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Load ads keeper
     */
    loadAdsKeeper() {
      this.element = document.getElementById(this.selector);
      const nodes = this.element.getElementsByTagName('script');
      if (!nodes) return;
      if (this.position) {
        for (let index = 0; index < nodes.length; index++) {
          const url_ads = nodes[index].getAttribute('src');
          const scriptEl = document.createElement('script');
          scriptEl.src = null;
          scriptEl.src = url_ads;
          if (this.position === 'head') {
            document.getElementsByTagName('head')[0].appendChild(scriptEl);
          }
          if (this.position === 'footer') {
            document.documentElement.appendChild(scriptEl);
          }
        }
        this.element.remove();
      } else {
        let url_ads = nodes[0].getAttribute('src');
        let scriptEl = document.createElement('script');
        scriptEl.src = url_ads;
        scriptEl.type = 'text/javascript';
        scriptEl.async = true;
        scriptEl.referrerpolicy = 'strict-origin-when-cross-origin';
        this.element.appendChild(scriptEl);
      }
    }
  },
  beforeRouterLeave(from, to, next) {
    this.element.remove();
    next();
  },
  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  mounted() {
    this.$nextTick(() => {
      setTimeout(async () => {
        await this.loadAdsKeeper();
      }, 2000);
    });
  }
});
// CONCATENATED MODULE: ./src/components/AdsKeeper/AdsKeeper.js?vue&type=script&lang=js&
 /* harmony default export */ var AdsKeeper_AdsKeepervue_type_script_lang_js_ = (AdsKeepervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/AdsKeeper/AdsKeeper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AdsKeeper_AdsKeepervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eb32dd4",
  "2f4e91a6"
  
)

/* harmony default export */ var AdsKeeper = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AdsGoogle/AdsGoogle.vue?vue&type=template&id=7ab26cd8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": `${_vm.selector}`
    },
    domProps: {
      "innerHTML": _vm._s(_vm.googleAds)
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/AdsGoogle/AdsGoogle.vue?vue&type=template&id=7ab26cd8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/AdsGoogle/AdsGoogle.js?vue&type=script&lang=js&
/* harmony default export */ var AdsGooglevue_type_script_lang_js_ = ({
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
  data() {
    return {
      googleAds: '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4862497484826970" crossorigin="anonymous"></script><!-- LifePC 780X400 --><ins class="adsbygoogle" style="display:inline-block;width:780px;height:400px" data-ad-client="ca-pub-4862497412826970" data-ad-slot="2773090032"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'
    };
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    loadGoogleAds() {
      const element = document.getElementById(this.selector);
      const inlineScript = document.createElement("script");
      inlineScript.type = "text/javascript";
      inlineScript.text = '(adsbygoogle = window.adsbygoogle || []).push({});';
      element.appendChild(inlineScript);
    }
  },
  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  async mounted() {
    await this.loadGoogleAds();
  }
});
// CONCATENATED MODULE: ./src/components/AdsGoogle/AdsGoogle.js?vue&type=script&lang=js&
 /* harmony default export */ var AdsGoogle_AdsGooglevue_type_script_lang_js_ = (AdsGooglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/AdsGoogle/AdsGoogle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  AdsGoogle_AdsGooglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7ab26cd8",
  "4376b474"
  
)

/* harmony default export */ var AdsGoogle = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0ffd3463", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5796d84e", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("0e9d1e96", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2953bfa7", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6e8df861", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("201b0a1c", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6ae97846", content, true, context)
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("12135895", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4817664e", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4bb7b7e7", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7f002cea", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("22d2dd10", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("08fdd86a", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/utc");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("dayjs/plugin/timezone");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;align-items:center;background:#f7f8fb;bottom:0;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;left:0;padding:1rem;position:absolute;right:0;text-align:center;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_a5ab699a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#0099e5;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Header_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".is-layout-flex{align-items:center;display:flex;flex-wrap:nowrap;gap:2rem}#logo{line-height:1}.header-container{margin:0 auto;max-width:1200px;padding:0}.header{padding:15px 0}.header-group{justify-content:space-between}.header-right{flex-wrap:nowrap;justify-content:flex-end}.menu ul{display:flex;flex-grow:1;gap:1.5em}.menu ul li{align-items:center;display:flex;position:relative}.menu ul li a{padding-bottom:10px;padding-top:10px}.menu ul li a span{word-wrap:break-word;color:#333;word-break:normal}.form-search{width:200px}.form-search .input-search{background-color:#f0f0f0;border-style:none;display:flex;flex-wrap:nowrap;max-width:100%;padding:0}.form-search .input-search input[type=search]{background-color:#f0f0f0;border:1px solid #e9e9e9;color:#333;font-size:14px;height:36px;line-height:1.75;padding:5px 0 5px 10px}.form-search .input-search input[type=search]:focus{border:1px solid #0099e5;box-shadow:none;outline:none}.form-search .input-search .wp-block-search__button{background-color:#0099e5;border:0 solid #ccc;border-radius:0;cursor:pointer;height:auto;line-height:0;margin-left:0;padding:5px 7px;-webkit-text-decoration:none;text-decoration:none}.form-search .input-search .wp-block-search__button svg{fill:currentColor;min-height:1.5em;min-width:1.5em;vertical-align:text-bottom}@media screen and (max-width:1080px){.form-search{display:none}}@media only screen and (min-width:1080px)and (max-width:1200px){.header-container{margin:0 auto;max-width:1060px}}@media only screen and (min-width:960px)and (max-width:1080px){.header-container{margin:0 auto;max-width:940px}}@media only screen and (max-width:959px){.hidden-sp{display:none}.header{position:relative}}@media only screen and (max-width:768px){.header-container{padding:15px 5px}.site-title{margin:0}.header-toggles,.nav-toggle{position:static}.header-right{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Footer_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_WidgetItemSidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_Sidebar_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media only screen and (max-width:959px){.widget-area.sidebar{display:flex;flex-flow:column-reverse}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_MenuSP_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 47 */
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeatureItem_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".image-cover{height:100%;overflow:hidden;position:relative;width:100%;z-index:1}.image-cover img{display:block;height:100%!important;-o-object-fit:cover;object-fit:cover;width:100%}@media screen and (min-width:768px){.featured-large.hentry{height:440px;overflow:hidden}.featured-large.hentry img{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.featured-small.hentry{height:218px!important;overflow:hidden}.featured-small.hentry img{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_FeaturePost_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_LoadingScreen_scss_vue_type_style_index_0_id_3fbbd417_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading_wrapper[data-v-3fbbd417]{align-items:center;background-color:hsla(0,0%,100%,.55);display:flex;flex-direction:column;height:100vh;justify-content:center;left:0;margin:auto;position:fixed;right:0;top:0;width:100%;z-index:999}.loading_overlay[data-v-3fbbd417]{background:rgba(51,51,51,.5)}.loading_content[data-v-3fbbd417]{animation-duration:1s;animation-iteration-count:infinite;animation-name:spin-3fbbd417;animation-timing-function:linear;border:2px solid #0099e5;border-bottom:#0099e5;border-radius:50%;height:60px;width:60px}@keyframes spin-3fbbd417{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsKeeper_scss_vue_type_style_index_0_id_1eb32dd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_AdsGoogle_scss_vue_type_style_index_0_id_7ab26cd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_TopLayout_scss_vue_type_style_index_0_prod_scope_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 59 */
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  menu: false
});
const mutations = {
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* TOOGLE_MENU */ "t"]](state, val) {
    state.menu = val;
  }
};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  ads: []
});
const getters = {};
const actions = {
  async initLoadAds({
    commit,
    state
  }) {
    const params = {
      api_key: "0906429283",
      website_id: 22
    };
    const response = await this.$axios.$get(`manager/advertises/json/1.json`, {
      params
    });
    if (response.status_code === 1) {
      commit(_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SET_ADS */ "q"], response.data);
    }
  }
};
const mutations = {
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SET_ADS */ "q"]](state, data) {
    state.ads = data;
  }
};

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const state = () => ({
  menus: [],
  settings: null,
  isLoading: false
});
const getters = {
  permalinkId: state => {
    var _state$settings, _state$settings$setti, _state$settings$setti2;
    return ((_state$settings = state.settings) === null || _state$settings === void 0 ? void 0 : (_state$settings$setti = _state$settings.setting) === null || _state$settings$setti === void 0 ? void 0 : (_state$settings$setti2 = _state$settings$setti.permalink) === null || _state$settings$setti2 === void 0 ? void 0 : _state$settings$setti2.name) === 'ID';
  },
  measurement_id: state => {
    var _state$settings2, _state$settings2$anal;
    return (_state$settings2 = state.settings) === null || _state$settings2 === void 0 ? void 0 : (_state$settings2$anal = _state$settings2.analytic) === null || _state$settings2$anal === void 0 ? void 0 : _state$settings2$anal.measurement_id;
  }
};
const actions = {
  async initMenuApp({
    commit,
    state
  }, payloadContext) {
    const params = {
      api_key: "0906429283",
      website_id: 22
    };
    const response = await this.$axios.$get(`menus/links/json/1.json`, {
      params
    });
    if (response.status_code === 1) {
      commit(_consts__WEBPACK_IMPORTED_MODULE_0__[/* SET_DATA */ "o"], response.data);
    }
  },
  async initSettingApp({
    commit,
    state
  }, payloadContext) {
    const params = {
      api_key: "0906429283",
      website_id: 22,
      get_meta: 1
    };
    const response = await this.$axios.$get(`manager/websites/json/1.json`, {
      params
    });
    if (response.status_code === 1) {
      commit(_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SETTINGS_APP */ "p"], response.data);
    }
  }
};
const mutations = {
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* SET_DATA */ "o"]](state, data) {
    state.menus = data.map(e => {
      return {
        ...e,
        hasSubMenu: false
      };
    });
  },
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_UPDATE_MENUS */ "s"]](state, menu) {
    state.menus[menu.index].hasSubMenu = menu.value;
  },
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SETTINGS_APP */ "p"]](state, settings) {
    state.settings = settings[0];
  },
  [_consts__WEBPACK_IMPORTED_MODULE_0__[/* STORE_SET_LOADING */ "r"]](state, val) {
    state.isLoading = val;
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/en");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/ja");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("vue-script2");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(4);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(28);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "BASE_URL": "http://localhost:3000",
        "API_END_POINT": "https://genplusmedia.online/",
        "API_KEY": "0906429283",
        "WEBSITE_ID": 22,
        "SITE_DOMAIN": "http://localhost:3000"
      }
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(29);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(11);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(9);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(12);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _09145986 = () => interopDefault(__webpack_require__.e(/* import() | pages/search/index */ 7).then(__webpack_require__.bind(null, 110)));
const _7d4410a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 5).then(__webpack_require__.bind(null, 109)));
const _9365b8b2 = () => interopDefault(__webpack_require__.e(/* import() | pages/author/_slug/index */ 3).then(__webpack_require__.bind(null, 111)));
const _6226495a = () => interopDefault(__webpack_require__.e(/* import() | pages/category/_slug/index */ 4).then(__webpack_require__.bind(null, 112)));
const _693deaaa = () => interopDefault(__webpack_require__.e(/* import() | pages/page/_slug/index */ 6).then(__webpack_require__.bind(null, 113)));
const _3320de04 = () => interopDefault(__webpack_require__.e(/* import() | pages/tag/_slug/index */ 8).then(__webpack_require__.bind(null, 114)));
const _3787f22c = () => interopDefault(__webpack_require__.e(/* import() | pages/_id/index */ 1).then(__webpack_require__.bind(null, 115)));
const _9cd3c148 = () => interopDefault(__webpack_require__.e(/* import() | pages/_slug/index */ 2).then(__webpack_require__.bind(null, 116)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/search",
    component: _09145986,
    name: "search"
  }, {
    path: "/",
    component: _7d4410a4,
    name: "index"
  }, {
    path: "/author/:slug",
    component: _9365b8b2,
    name: "author-slug"
  }, {
    path: "/category/:slug",
    component: _6226495a,
    name: "category-slug"
  }, {
    path: "/page/:slug",
    component: _693deaaa,
    name: "page-slug"
  }, {
    path: "/tag/:slug",
    component: _3320de04,
    name: "tag-slug"
  }, {
    path: "/:id",
    component: _3787f22c,
    name: "id"
  }, {
    path: "/:slug",
    component: _9cd3c148,
    name: "slug"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9b0abd06"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "74af3371"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=template&id=a86b4864&
var defaultvue_type_template_id_a86b4864_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('nuxt')], 1);
};
var defaultvue_type_template_id_a86b4864_staticRenderFns = [];

// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=template&id=a86b4864&

// CONCATENATED MODULE: ./src/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_a86b4864_render,
  defaultvue_type_template_id_a86b4864_staticRenderFns,
  false,
  null,
  null,
  "20f209cc"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/TopLayout/TopLayout.vue?vue&type=template&id=30c3f100&
var TopLayoutvue_type_template_id_30c3f100_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "site",
    attrs: {
      "id": "page"
    }
  }, [_c('Header'), _vm._ssrNode(" "), _vm.adsHeader ? [_vm.adsHeader.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-header`,
      "contentAds": _vm.adsHeader
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.adsHeader.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-header`,
      "contentAds": _vm.adsHeader
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _c('MenuSP'), _vm._ssrNode(" "), _vm._ssrNode("<div>", "</div>", [_vm.$route.name === 'index' ? _c('feature-post') : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"content\" class=\"site-content container clear\">", "</div>", [_vm._ssrNode("<div id=\"primary\" class=\"content-area clear\">", "</div>", [_c('nuxt')], 1), _vm._ssrNode(" "), _c('Sidebar')], 2)], 2), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" " + (_vm.backtoTop ? "<div id=\"back-top\"><a title=\"Back to top\"><span class=\"genericon genericon-collapse\"></span></a></div>" : "<!---->") + " "), _c('LoadingScreen'), _vm._ssrNode(" "), _vm.adsHead ? [_vm.adsHead.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-head`,
      "contentAds": _vm.adsHead,
      "position": `head`
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.adsHead.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-head`,
      "contentAds": _vm.adsHead,
      "position": `head`
    }
  }) : _vm._e()] : _vm._e(), _vm._ssrNode(" "), _vm.adsFooter ? [_vm.adsFooter.type.id === 2 ? _c('ads-keeper', {
    attrs: {
      "selector": `ads-footer`,
      "contentAds": _vm.adsFooter,
      "position": `footer`
    }
  }) : _vm._e(), _vm._ssrNode(" "), _vm.adsFooter.type.id === 1 ? _c('ads-google', {
    attrs: {
      "selector": `ads-footer`,
      "contentAds": _vm.adsFooter,
      "position": `footer`
    }
  }) : _vm._e()] : _vm._e()], 2);
};
var TopLayoutvue_type_template_id_30c3f100_staticRenderFns = [];

// CONCATENATED MODULE: ./src/layouts/TopLayout/TopLayout.vue?vue&type=template&id=30c3f100&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header/Header.vue?vue&type=template&id=7e874fdf&
var Headervue_type_template_id_7e874fdf_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_vm._ssrNode("<div class=\"header-container\">", "</div>", [_vm._ssrNode("<div class=\"header-group is-layout-flex\">", "</div>", [_vm._ssrNode("<div class=\"header-left\">", "</div>", [_vm.settings.meta.logo ? [_vm._ssrNode("<div id=\"logo\">", "</div>", [_c('router-link', {
    attrs: {
      "to": `/`
    }
  }, [_c('img', {
    attrs: {
      "width": "120",
      "height": "35",
      "src": _vm.settings.meta.logo,
      "alt": _vm.settings.name
    }
  })])], 1)] : [_vm._ssrNode("<div class=\"site-title\">", "</div>", [_vm._ssrNode("<h1>", "</h1>", [_c('nuxt-link', {
    attrs: {
      "to": `/`
    }
  }, [_vm._v(_vm._s(_vm.settings.name))])], 1)]), _vm._ssrNode(" <div class=\"site-description\">" + _vm._ssrEscape("\n            " + _vm._s(_vm.settings.meta.description) + "\n          ") + "</div>")]], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"header-right\">", "</div>", [_vm._ssrNode("<div class=\"is-layout-flex hidden-sp\">", "</div>", [_vm._ssrNode("<nav class=\"menu\">", "</nav>", [_vm._ssrNode("<ul class=\"is-layout-flex\">", "</ul>", _vm._l(_vm.primaryMenus, function (menu, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('router-link', {
      class: menu.childrens.length ? 'sf-with-ul' : '',
      attrs: {
        "to": menu.url
      }
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(menu.name)
      }
    })]), _vm._ssrNode(" "), menu.childrens.length ? [_vm._ssrNode("<ul class=\"sub-menu\">", "</ul>", _vm._l(menu.childrens, function (child, v) {
      return _vm._ssrNode("<li>", "</li>", [_c('router-link', {
        attrs: {
          "to": child.url
        }
      }, [_c('span', {
        domProps: {
          "innerHTML": _vm._s(child.name)
        }
      })])], 1);
    }), 0)] : _vm._e()], 2);
  }), 0)]), _vm._ssrNode(" <div class=\"form-search\"><div class=\"input-search\"><input type=\"search\" id=\"wp-block-search__input-4\" name=\"s\" placeholder required=\"required\"" + _vm._ssrAttr("value", _vm.searchModel) + " class=\"wp-block-search__input\"> <button type=\"submit\" aria-label=\"Search\" class=\"wp-block-search__button has-icon wp-element-button\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\"></path></svg></button></div></div>")], 2)]), _vm._ssrNode(" <div class=\"header-toggles has-search\"><button" + _vm._ssrClass("toggle nav-toggle mobile-nav-toggle", {
    active: _vm.menu
  }) + "><span class=\"toggle-inner\"><span class=\"toggle-icon\"><svg aria-hidden=\"true\" role=\"img\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"7\" viewBox=\"0 0 26 7\" class=\"svg-icon\"><path fill-rule=\"evenodd\" d=\"M332.5,45 C330.567003,45 329,43.4329966 329,41.5 C329,39.5670034 330.567003,38 332.5,38 C334.432997,38 336,39.5670034 336,41.5 C336,43.4329966 334.432997,45 332.5,45 Z M342,45 C340.067003,45 338.5,43.4329966 338.5,41.5 C338.5,39.5670034 340.067003,38 342,38 C343.932997,38 345.5,39.5670034 345.5,41.5 C345.5,43.4329966 343.932997,45 342,45 Z M351.5,45 C349.567003,45 348,43.4329966 348,41.5 C348,39.5670034 349.567003,38 351.5,38 C353.432997,38 355,39.5670034 355,41.5 C355,43.4329966 353.432997,45 351.5,45 Z\" transform=\"translate(-329 -38)\"></path></svg></span> <span class=\"toggle-text\">Menu</span></span></button></div>")], 2)])]);
};
var Headervue_type_template_id_7e874fdf_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Header/Header.vue?vue&type=template&id=7e874fdf&

// EXTERNAL MODULE: ./src/consts.js
var consts = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/Header/Header.js?vue&type=script&lang=js&


/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {},
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      searchModel: null
    };
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * primaryMenus
       * @returns {Array}
       */
      primaryMenus() {
        return this.$store.state.common.storeLoadInit.menus.filter(e => e.type.name === 'Main Menu');
      },
      /**
       * menu
       * @returns {Boolean}
       */
      menu() {
        return this.$store.state.storeMenuSP.menu;
      },
      settings() {
        return this.$store.state.common.storeLoadInit.settings;
      }
    })
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Search
     */
    search() {
      this.$router.push({
        name: 'search',
        query: {
          keywords: this.searchModel
        }
      });
    },
    /**
     * openMenu SP
     */
    openMenu() {
      this.$store.commit(`storeMenuSP/${consts["t" /* TOOGLE_MENU */]}`, true);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Header/Header.js?vue&type=script&lang=js&
 /* harmony default export */ var Header_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Header/Header.vue



function Header_injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Header_component = Object(componentNormalizer["a" /* default */])(
  Header_Headervue_type_script_lang_js_,
  Headervue_type_template_id_7e874fdf_render,
  Headervue_type_template_id_7e874fdf_staticRenderFns,
  false,
  Header_injectStyles,
  null,
  "2c5a5efa"
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer/Footer.vue?vue&type=template&id=2cd303d8&
var Footervue_type_template_id_2cd303d8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "site-footer"
  }, [_vm._ssrNode("<div class=\"clear\"></div> "), _vm._ssrNode("<div id=\"site-bottom\" class=\"clear\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"site-info\">" + _vm._ssrEscape("\n\t\t\t\t\t© " + _vm._s(new Date().getFullYear()) + "\n\t\t\t\t\t") + "<a" + _vm._ssrAttr("href", `${_vm.settings.domain}`) + " class=\"router-link-exact-active router-link-active\">" + _vm._ssrEscape(_vm._s(_vm.settings.name)) + "</a></div> "), _vm._ssrNode("<div class=\"menu-primary-menu-container\">", "</div>", [_vm._ssrNode("<ul id=\"footer-menu\" class=\"footer-nav\">", "</ul>", _vm._l(_vm.footerMenus, function (menu, index) {
    return _vm._ssrNode("<li>", "</li>", [_c('nuxt-link', {
      attrs: {
        "to": `/page${menu.url}`
      }
    }, [_vm._v(_vm._s(menu.name))])], 1);
  }), 0)])], 2)])], 2);
};
var Footervue_type_template_id_2cd303d8_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Footer/Footer.vue?vue&type=template&id=2cd303d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/Footer/Footer.js?vue&type=script&lang=js&

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * primaryMenus
       * @returns {Array}
       */
      footerMenus(state) {
        const menus = state.common.storeLoadInit.menus;
        if (!menus.length) return [];
        return menus.filter(e => e.type.name === 'Footer');
      },
      /**
       * Setting site
       * @param {*} state 
       * @returns 
       */
      settings(state) {
        return state.common.storeLoadInit.settings;
      }
    })
  }
});
// CONCATENATED MODULE: ./src/components/Footer/Footer.js?vue&type=script&lang=js&
 /* harmony default export */ var Footer_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Footer/Footer.vue



function Footer_injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  Footer_Footervue_type_script_lang_js_,
  Footervue_type_template_id_2cd303d8_render,
  Footervue_type_template_id_2cd303d8_staticRenderFns,
  false,
  Footer_injectStyles,
  null,
  "4163533a"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar/Sidebar.vue?vue&type=template&id=5880c37e&
var Sidebarvue_type_template_id_5880c37e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('aside', {
    staticClass: "widget-area sidebar",
    attrs: {
      "id": "secondary"
    }
  }, [_c('widget-item-sidebar', {
    attrs: {
      "heading": `Most Commented Posts`,
      "posts": _vm.randomPosts
    }
  }), _vm._ssrNode(" "), _c('widget-tags', {
    attrs: {
      "tags": _vm.tags
    }
  })], 2);
};
var Sidebarvue_type_template_id_5880c37e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.vue?vue&type=template&id=5880c37e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WidgetItemSidebar/WidgetItemSidebar.vue?vue&type=template&id=4ae85ec7&
var WidgetItemSidebarvue_type_template_id_4ae85ec7_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "widget widget-enjoynews-category-posts widget-posts-thumbnail",
    attrs: {
      "id": "enjoynews-category-posts-2"
    }
  }, [_vm._ssrNode("<h3 class=\"widget-title\">", "</h3>", [_c('router-link', {
    attrs: {
      "to": `#`
    }
  }, [_vm._v(_vm._s(_vm.heading))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.posts, function (post, index) {
    return _vm._ssrNode("<li class=\"clear\">", "</li>", [_c('router-link', {
      staticClass: "thumbnail-link",
      attrs: {
        "to": _vm.$permalink(post)
      }
    }, [_c('div', {
      staticClass: "thumbnail-wrap"
    }, [_c('img', {
      staticClass: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
      attrs: {
        "width": "300",
        "height": "300",
        "src": _vm.imageUrl(post),
        "alt": "",
        "decoding": "async",
        "sizes": "(max-width: 300px) 100vw, 300px"
      }
    })])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-wrap\">", "</div>", [_c('router-link', {
      attrs: {
        "to": _vm.$permalink(post)
      }
    }, [_c('span', {
      domProps: {
        "innerHTML": _vm._s(post.name)
      }
    })]), _vm._ssrNode(" <div class=\"entry-meta\">" + _vm._ssrEscape(_vm._s(post.created)) + "</div>")], 2)], 2);
  }), 0)], 2);
};
var WidgetItemSidebarvue_type_template_id_4ae85ec7_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/WidgetItemSidebar/WidgetItemSidebar.vue?vue&type=template&id=4ae85ec7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/WidgetItemSidebar/WidgetItemSidebar.js?vue&type=script&lang=js&
/* harmony default export */ var WidgetItemSidebarvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    heading: {
      type: String,
      default: ''
    },
    posts: {
      type: Array,
      default: () => []
    }
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Image url
     * @param {*} item 
     * @returns {String}
     */
    imageUrl(item) {
      if (!item.image) return this.$defaultImg();
      return item.image;
    }
  }
});
// CONCATENATED MODULE: ./src/components/WidgetItemSidebar/WidgetItemSidebar.js?vue&type=script&lang=js&
 /* harmony default export */ var WidgetItemSidebar_WidgetItemSidebarvue_type_script_lang_js_ = (WidgetItemSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/WidgetItemSidebar/WidgetItemSidebar.vue



function WidgetItemSidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var WidgetItemSidebar_component = Object(componentNormalizer["a" /* default */])(
  WidgetItemSidebar_WidgetItemSidebarvue_type_script_lang_js_,
  WidgetItemSidebarvue_type_template_id_4ae85ec7_render,
  WidgetItemSidebarvue_type_template_id_4ae85ec7_staticRenderFns,
  false,
  WidgetItemSidebar_injectStyles,
  null,
  "19bf3ba8"
  
)

/* harmony default export */ var WidgetItemSidebar = (WidgetItemSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WidgetTags/WidgetTags.vue?vue&type=template&id=6e53362e&
var WidgetTagsvue_type_template_id_6e53362e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "widget widget_tag_cloud"
  }, [_vm._ssrNode("<h2 class=\"widget-title\"><span>Tags</span></h2> "), _vm._ssrNode("<div class=\"tagcloud\">", "</div>", [_vm._l(_vm.tags, function (tag, index) {
    return [_c('router-link', {
      key: index,
      staticClass: "tag-cloud-link tag-link-8 tag-link-position-1",
      staticStyle: {
        "font-size": "12.745762711864pt"
      },
      attrs: {
        "to": `/tag/${tag.slug}/`
      }
    }, [_vm._v(_vm._s(tag.name))])];
  })], 2)], 2);
};
var WidgetTagsvue_type_template_id_6e53362e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/WidgetTags/WidgetTags.vue?vue&type=template&id=6e53362e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/WidgetTags/WidgetTags.js?vue&type=script&lang=js&
/* harmony default export */ var WidgetTagsvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./src/components/WidgetTags/WidgetTags.js?vue&type=script&lang=js&
 /* harmony default export */ var WidgetTags_WidgetTagsvue_type_script_lang_js_ = (WidgetTagsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/WidgetTags/WidgetTags.vue





/* normalize component */

var WidgetTags_component = Object(componentNormalizer["a" /* default */])(
  WidgetTags_WidgetTagsvue_type_script_lang_js_,
  WidgetTagsvue_type_template_id_6e53362e_render,
  WidgetTagsvue_type_template_id_6e53362e_staticRenderFns,
  false,
  null,
  null,
  "242b390c"
  
)

/* harmony default export */ var WidgetTags = (WidgetTags_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/Sidebar/Sidebar.js?vue&type=script&lang=js&


/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    WidgetItemSidebar: WidgetItemSidebar,
    WidgetTags: WidgetTags
  },
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      tags: [],
      randomPosts: []
    };
  },
  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created() {
    await this.getTags();
    await this.getPostRamdom();
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    async getTags() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        status: 1,
        limit: 10
      };
      const response = await this.$axios.get(`manager/tags/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.tags = response.data.data;
      }
    },
    async getPostRamdom() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 10,
        random: 1
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.randomPosts = response.data.data;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.js?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Sidebar/Sidebar.vue



function Sidebar_injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_5880c37e_render,
  Sidebarvue_type_template_id_5880c37e_staticRenderFns,
  false,
  Sidebar_injectStyles,
  null,
  "79c0a95a"
  
)

/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MenuSP/MenuSP.vue?vue&type=template&id=216f45d7&
var MenuSPvue_type_template_id_216f45d7_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "menu-modal cover-modal header-footer-group",
    class: _vm.menu ? 'show-modal active' : ''
  }, [_vm._ssrNode("<div class=\"menu-modal-inner modal-inner\">", "</div>", [_vm._ssrNode("<div class=\"menu-wrapper section-inner\">", "</div>", [_vm._ssrNode("<div class=\"menu-top\">", "</div>", [_vm._ssrNode("<button class=\"toggle close-nav-toggle fill-children-current-color\"><span class=\"toggle-text\">Close Menu</span> <svg aria-hidden=\"true\" role=\"img\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"svg-icon\"><polygon fill fill-rule=\"evenodd\" points=\"6.852 7.649 .399 1.195 1.445 .149 7.899 6.602 14.352 .149 15.399 1.195 8.945 7.649 15.399 14.102 14.352 15.149 7.899 8.695 1.445 15.149 .399 14.102\"></polygon></svg></button> "), _vm._ssrNode("<nav aria-label=\"Mobile\" role=\"navigation\" class=\"mobile-menu\">", "</nav>", [_vm._ssrNode("<ul class=\"modal-menu reset-list-style\">", "</ul>", _vm._l(_vm.primaryMenus, function (menu, index) {
    return _vm._ssrNode("<li class=\"menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31617\">", "</li>", [_vm._ssrNode("<div class=\"ancestor-wrapper\"><a style=\"cursor: pointer; \"><span>" + _vm._s(menu.name) + "</span></a> " + (menu.childrens.length ? "<button" + _vm._ssrClass("toggle sub-menu-toggle fill-children-current-color", {
      active: menu.hasSubMenu
    }) + "><span class=\"screen-reader-text\">Show sub menu</span> <svg aria-hidden=\"true\" role=\"img\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"12\" viewBox=\"0 0 20 12\" class=\"svg-icon\"><polygon fill fill-rule=\"evenodd\" points=\"1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358\" transform=\"translate(-1310 -358)\"></polygon></svg></button>" : "<!---->") + "</div> "), menu.childrens.length ? [_c('transition', {
      attrs: {
        "name": "slide-fade"
      }
    }, [menu.hasSubMenu ? _c('ul', {
      staticClass: "sub-menu",
      class: {
        active: menu.hasSubMenu
      }
    }, _vm._l(menu.childMenus, function (child, index) {
      return _c('li', {
        key: index
      }, [_c('a', {
        staticStyle: {
          "cursor": "pointer"
        },
        on: {
          "click": function ($event) {
            return _vm.gotoCategory(child.url);
          }
        }
      }, [_c('span', {
        domProps: {
          "innerHTML": _vm._s(child.name)
        }
      })])]);
    }), 0) : _vm._e()])] : _vm._e()], 2);
  }), 0)])], 2)])])]);
};
var MenuSPvue_type_template_id_216f45d7_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/MenuSP/MenuSP.vue?vue&type=template&id=216f45d7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/MenuSP/MenuSP.js?vue&type=script&lang=js&


/* harmony default export */ var MenuSPvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * primaryMenus
       * @returns {Array}
       */
      primaryMenus() {
        return this.$store.state.common.storeLoadInit.menus.filter(e => e.type.name === 'Main Menu');
      },
      /**
       * menu
       * @returns {Boolean}
       */
      menu() {
        return this.$store.state.storeMenuSP.menu;
      }
    })
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Close menu sp
     */
    closeMenu() {
      this.$store.commit(`storeMenuSP/${consts["t" /* TOOGLE_MENU */]}`, false);
    },
    /**
     * 
     * @param {*} menuId 
     * @returns 
     */
    getChildMenu(menuId) {
      return this.menuItems.filter(e => e.parent === menuId);
    },
    /**
     * 
     * @param {*} index 
     * @param {*} value 
     */
    openSubMenu(index, value) {
      this.$store.commit('UPDATE_MENU', {
        index: index,
        value: !value
      });
    },
    gotoCategory(link) {
      this.closeMenu();
      this.$router.push({
        path: link
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/MenuSP/MenuSP.js?vue&type=script&lang=js&
 /* harmony default export */ var MenuSP_MenuSPvue_type_script_lang_js_ = (MenuSPvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MenuSP/MenuSP.vue



function MenuSP_injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var MenuSP_component = Object(componentNormalizer["a" /* default */])(
  MenuSP_MenuSPvue_type_script_lang_js_,
  MenuSPvue_type_template_id_216f45d7_render,
  MenuSPvue_type_template_id_216f45d7_staticRenderFns,
  false,
  MenuSP_injectStyles,
  null,
  "1963b7cc"
  
)

/* harmony default export */ var MenuSP = (MenuSP_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeaturePost/FeaturePost.vue?vue&type=template&id=70c770b5&
var FeaturePostvue_type_template_id_70c770b5_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container clear",
    attrs: {
      "id": "featured-content"
    }
  }, _vm._l(_vm.posts, function (post, index) {
    return _c('feature-item', {
      key: index,
      attrs: {
        "index": index,
        "item": post,
        "className": _vm.className(index)
      }
    });
  }), 1);
};
var FeaturePostvue_type_template_id_70c770b5_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/FeaturePost/FeaturePost.vue?vue&type=template&id=70c770b5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FeatureItem/FeatureItem.vue?vue&type=template&id=83b0d4a0&
var FeatureItemvue_type_template_id_83b0d4a0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: `${_vm.className}`
  }, [_c('nuxt-link', {
    staticClass: "thumbnail-link",
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('div', {
    staticClass: "thumbnail-wrap",
    class: _vm.index > 0 ? 'image-cover' : ''
  }, [_c('img', {
    staticClass: "attachment-enjoynews_featured_large_thumb size-enjoynews_featured_large_thumb wp-post-image",
    attrs: {
      "width": _vm.index === 0 ? 660 : 266,
      "height": _vm.index === 0 ? 440 : 218,
      "src": _vm.imageUrl,
      "alt": "",
      "decoding": "async",
      "sizes": "(max-width: 660px) 100vw, 660px"
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "gradient",
    staticStyle: {
      "display": "inline"
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entry-header\" style=\"display: block;\">", "</div>", [_vm.item.categories.length !== 0 ? [_vm._ssrNode("<div class=\"entry-category\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": `category/${_vm.item.categories[0].slug}`
    }
  }, [_vm._v(_vm._s(_vm.item.categories[0].name))])], 1)] : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<h2 class=\"entry-title\">", "</h2>", [_c('nuxt-link', {
    attrs: {
      "to": _vm.$permalink(_vm.item)
    }
  }, [_c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.$omitText(_vm.item.name, 40))
    }
  })])], 1)], 2)], 2);
};
var FeatureItemvue_type_template_id_83b0d4a0_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/FeatureItem/FeatureItem.vue?vue&type=template&id=83b0d4a0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/FeatureItem/FeatureItem.js?vue&type=script&lang=js&
/* harmony default export */ var FeatureItemvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    props
  -------------------------------------------------- */
  props: {
    className: {
      type: String,
      default: null
    },
    item: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    imageUrl() {
      if (!this.item.image) return this.$defaultImg();
      return this.item.image;
    }
  }
});
// CONCATENATED MODULE: ./src/components/FeatureItem/FeatureItem.js?vue&type=script&lang=js&
 /* harmony default export */ var FeatureItem_FeatureItemvue_type_script_lang_js_ = (FeatureItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FeatureItem/FeatureItem.vue



function FeatureItem_injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FeatureItem_component = Object(componentNormalizer["a" /* default */])(
  FeatureItem_FeatureItemvue_type_script_lang_js_,
  FeatureItemvue_type_template_id_83b0d4a0_render,
  FeatureItemvue_type_template_id_83b0d4a0_staticRenderFns,
  false,
  FeatureItem_injectStyles,
  null,
  "11f89274"
  
)

/* harmony default export */ var FeatureItem = (FeatureItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/FeaturePost/FeaturePost.js?vue&type=script&lang=js&

/* harmony default export */ var FeaturePostvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    FeatureItem: FeatureItem
  },
  /* --------------------------------------------------
    created
  -------------------------------------------------- */
  async created() {
    await this.featurePost();
  },
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      posts: [],
      loading: false,
      isLoading: false
    };
  },
  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Get Classname
     * @param {*} num 
     * @returns {String}
     */
    className(num) {
      if (num === 0) return `featured-large hentry`;else return `featured-small hentry`;
    },
    /**
     * Get feature post
     */
    async featurePost() {
      const params = {
        api_key: "0906429283",
        website_id: 22,
        limit: 5
      };
      const response = await this.$axios.get(`manager/posts/json/1.json`, {
        params
      });
      if (response.data.status_code === 1) {
        this.posts = response.data.data;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/FeaturePost/FeaturePost.js?vue&type=script&lang=js&
 /* harmony default export */ var FeaturePost_FeaturePostvue_type_script_lang_js_ = (FeaturePostvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FeaturePost/FeaturePost.vue



function FeaturePost_injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FeaturePost_component = Object(componentNormalizer["a" /* default */])(
  FeaturePost_FeaturePostvue_type_script_lang_js_,
  FeaturePostvue_type_template_id_70c770b5_render,
  FeaturePostvue_type_template_id_70c770b5_staticRenderFns,
  false,
  FeaturePost_injectStyles,
  null,
  "3ea0850e"
  
)

/* harmony default export */ var FeaturePost = (FeaturePost_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./src/components/LoadingScreen/LoadingScreen.vue?vue&type=template&id=3fbbd417&scoped=true&
var LoadingScreenvue_type_template_id_3fbbd417_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isLoading ? _c('div', {
    staticClass: "loading_wrapper"
  }, [_vm._ssrNode("<div class=\"loading_content mb-2\" data-v-3fbbd417></div>")]) : _vm._e();
};
var LoadingScreenvue_type_template_id_3fbbd417_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/LoadingScreen/LoadingScreen.vue?vue&type=template&id=3fbbd417&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/components/LoadingScreen/LoadingScreen.js?vue&type=script&lang=js&

/* harmony default export */ var LoadingScreenvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      /**
       * loading
       * @returns {Boolean}
       */
      isLoading() {
        return this.$store.state.common.storeLoadInit.isLoading;
      }
    })
  }
});
// CONCATENATED MODULE: ./src/components/LoadingScreen/LoadingScreen.js?vue&type=script&lang=js&
 /* harmony default export */ var LoadingScreen_LoadingScreenvue_type_script_lang_js_ = (LoadingScreenvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/LoadingScreen/LoadingScreen.vue



function LoadingScreen_injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var LoadingScreen_component = Object(componentNormalizer["a" /* default */])(
  LoadingScreen_LoadingScreenvue_type_script_lang_js_,
  LoadingScreenvue_type_template_id_3fbbd417_scoped_true_render,
  LoadingScreenvue_type_template_id_3fbbd417_scoped_true_staticRenderFns,
  false,
  LoadingScreen_injectStyles,
  "3fbbd417",
  "69e10b9c"
  
)

/* harmony default export */ var LoadingScreen = (LoadingScreen_component.exports);
// EXTERNAL MODULE: ./src/components/AdsKeeper/AdsKeeper.vue + 4 modules
var AdsKeeper = __webpack_require__(13);

// EXTERNAL MODULE: ./src/components/AdsGoogle/AdsGoogle.vue + 4 modules
var AdsGoogle = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./src/layouts/TopLayout/TopLayout.js?vue&type=script&lang=js&










/* harmony default export */ var TopLayoutvue_type_script_lang_js_ = ({
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    Header: Header,
    Footer: Footer,
    Sidebar: Sidebar,
    MenuSP: MenuSP,
    FeaturePost: FeaturePost,
    LoadingScreen: LoadingScreen,
    AdsKeeper: AdsKeeper["a" /* default */],
    AdsGoogle: AdsGoogle["a" /* default */]
  },
  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      backtoTop: false
    };
  },
  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...Object(external_vuex_["mapState"])({
      adsHeader(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === consts["n" /* HEADER */]);
        return ads ? ads : null;
      },
      adsHead(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === consts["i" /* AUTO_HEAD */]);
        return ads ? ads : null;
      },
      adsFooter(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === consts["m" /* FOOTER */]);
        return ads ? ads : null;
      }
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
    window.addEventListener('scroll', async e => {
      const {
        scrollTop
      } = document.documentElement;
      if (scrollTop > 100) {
        this.backtoTop = true;
      } else {
        this.backtoTop = false;
      }
    });
  },
  /* --------------------------------------------------
    head
  -------------------------------------------------- */
  head() {
    return {
      link: [{
        rel: 'canonical',
        href: `${"http://localhost:3000"}${this.$route.path}`
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/layouts/TopLayout/TopLayout.js?vue&type=script&lang=js&
 /* harmony default export */ var TopLayout_TopLayoutvue_type_script_lang_js_ = (TopLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layouts/TopLayout/TopLayout.vue



function TopLayout_injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TopLayout_component = Object(componentNormalizer["a" /* default */])(
  TopLayout_TopLayoutvue_type_script_lang_js_,
  TopLayoutvue_type_template_id_30c3f100_render,
  TopLayoutvue_type_template_id_30c3f100_staticRenderFns,
  false,
  TopLayout_injectStyles,
  null,
  "15387e8a"
  
)

/* harmony default export */ var TopLayout = (TopLayout_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_TopLayout/TopLayout": sanitizeComponent(TopLayout)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};
(function updateModules() {
  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(60), 'storeMenuSP.js');
  resolveStoreModules(__webpack_require__(61), 'common/storeLoadAds.js');
  resolveStoreModules(__webpack_require__(62), 'common/storeLoadInit.js');

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData;
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath);

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    });

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = moduleName === 'index';
  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }
  const storeModule = getStoreModule(store_store, namespaces);
  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }
  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}
function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }
  return normalizeModule(moduleData, filePath);
}
function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }
  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}
function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }
  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(7);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// EXTERNAL MODULE: external "dayjs/locale/en"
var en_ = __webpack_require__(63);

// EXTERNAL MODULE: external "dayjs/locale/ja"
var ja_ = __webpack_require__(64);

// EXTERNAL MODULE: external "dayjs/plugin/utc"
var utc_ = __webpack_require__(30);
var utc_default = /*#__PURE__*/__webpack_require__.n(utc_);

// EXTERNAL MODULE: external "dayjs/plugin/timezone"
var timezone_ = __webpack_require__(31);
var timezone_default = /*#__PURE__*/__webpack_require__.n(timezone_);

// CONCATENATED MODULE: ./.nuxt/dayjs-plugin.js





external_dayjs_default.a.extend(utc_default.a);
external_dayjs_default.a.extend(timezone_default.a);
external_dayjs_default.a.locale('en');
external_dayjs_default.a.tz.setDefault('Asia/Tokyo');
/* harmony default export */ var dayjs_plugin = ((context, inject) => {
  context.$dayjs = external_dayjs_default.a;
  inject('dayjs', external_dayjs_default.a);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(32);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'https://genplusmedia.online/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./src/plugins/pluginApi.js
/* harmony default export */ var pluginApi = (function ({
  $axios
}, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    },
    params: {
      api_key: "0906429283",
      website_id: 22
    }
  });

  // Set baseURL to something different
  api.setBaseURL("https://genplusmedia.online/");

  // Inject to context as $api
  inject('api', api);
});
// CONCATENATED MODULE: ./src/plugins/pluginLoadInit.js
// ====================================================
//  pluginLoadInit.js
// ====================================================
/* harmony default export */ var pluginLoadInit = (async context => {
  await context.store.dispatch('common/storeLoadInit/initSettingApp', context);
  await context.store.dispatch('common/storeLoadInit/initMenuApp', context);
  await context.store.dispatch('common/storeLoadAds/initLoadAds');
});
// CONCATENATED MODULE: ./src/plugins/pluginUtility.js
/* harmony default export */ var pluginUtility = ((context, inject) => {
  /**
   * omitText
   * @returns {String}
   */
  inject('omitText', (rowTitle, textLimit) => {
    const omitedTitle = rowTitle.substring(0, textLimit);
    if (rowTitle.length >= textLimit) {
      return omitedTitle + '...';
    } else {
      return rowTitle;
    }
  });

  /**
   * formatDateCommon
   * @returns {String}
   */
  inject('formatDateCommon', (date, format = false) => {
    const dateObj = context.app.$dayjs(date);
    console.log(dateObj);
    if (format) {
      return dateObj.format(format);
    }
    return dateObj.format('DD/MM/YYYY');
  });

  /**
   * defaultImg
   */
  inject('defaultImg', () => {
    return `assets/img/default-thumbnail.png`;
  });

  /**
   * create post
   * @returns {String} 
   */
  inject('timePost', date => {
    if (!date) return null;
    const time = date.split(' ');
    return time[0];
  });

  /**
   * create post
   * @returns {String} 
   */
  inject('permalink', item => {
    const permalinkId = context.store.getters['common/storeLoadInit/permalinkId'];
    if (permalinkId) {
      return `/${item.id}/`;
    } else {
      return `/${item.slug}/`;
    }
  });

  /**
   * site name
   * @returns {String} 
   */
  inject('sitename', () => {
    var _context$store$state$, _context$store$state$2;
    return (_context$store$state$ = context.store.state.common.storeLoadInit) === null || _context$store$state$ === void 0 ? void 0 : (_context$store$state$2 = _context$store$state$.settings) === null || _context$store$state$2 === void 0 ? void 0 : _context$store$state$2.name;
  });

  /**
   * metas
   * @returns {Array} 
   */
  inject('metas', () => {
    var _context$store$state$3, _context$store$state$4;
    return (_context$store$state$3 = context.store.state.common.storeLoadInit) === null || _context$store$state$3 === void 0 ? void 0 : (_context$store$state$4 = _context$store$state$3.settings) === null || _context$store$state$4 === void 0 ? void 0 : _context$store$state$4.meta;
  });

  /**
   * Favicon
   * @returns {String} 
   */
  inject('favicon', () => {
    var _context$store$state$5, _context$store$state$6, _context$store$state$7;
    return ((_context$store$state$5 = context.store.state.common.storeLoadInit) === null || _context$store$state$5 === void 0 ? void 0 : (_context$store$state$6 = _context$store$state$5.settings) === null || _context$store$state$6 === void 0 ? void 0 : (_context$store$state$7 = _context$store$state$6.setting) === null || _context$store$state$7 === void 0 ? void 0 : _context$store$state$7.favicon) || null;
  });
  inject('setLoading', val => {
    context.store.commit('common/storeLoadInit/STORE_SET_LOADING', val);
  });
});
// EXTERNAL MODULE: external "vue-google-adsense"
var external_vue_google_adsense_ = __webpack_require__(10);
var external_vue_google_adsense_default = /*#__PURE__*/__webpack_require__.n(external_vue_google_adsense_);

// CONCATENATED MODULE: ./src/plugins/pluginGoogleAdsense.js


external_vue_default.a.use(__webpack_require__(65));
external_vue_default.a.use(external_vue_google_adsense_default.a.Adsense);
external_vue_default.a.use(external_vue_google_adsense_default.a.InArticleAdsense);
external_vue_default.a.use(external_vue_google_adsense_default.a.InFeedAdsense);
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: .\\dayjs-plugin.js (mode: 'all')
 // Source: .\\axios.js (mode: 'all')
 // Source: ..\\src\\plugins\\pluginApi (mode: 'all')
 // Source: ..\\src\\plugins\\pluginLoadInit (mode: 'all')
 // Source: ..\\src\\plugins\\pluginUtility (mode: 'all')
 // Source: ..\\src\\plugins\\pluginGoogleAdsense (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext);
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Zaly.online",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "http-equiv": "X-UA-Compatible",
        "content": "IE=edge"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"
      }, {
        "name": "copyright",
        "content": "Copyright ©  All rights reserved."
      }],
      "link": [{
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap",
        "type": "text\u002Fcss",
        "media": "all",
        "async": true
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "\u002Fassets\u002Fcss\u002F\u002Fgenericons\u002Fgenericons\u002Fgenericons.css"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "\u002Fassets\u002Fcss\u002Fstyle.css"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "\u002Fassets\u002Fcss\u002Fresponsive.css"
      }],
      "script": [{
        "src": "https:\u002F\u002Fpagead2.googlesyndication.com\u002Fpagead\u002Fjs\u002Fadsbygoogle.js",
        "async": true,
        "crossorigin": "anonymous"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof dayjs_plugin === 'function') {
    await dayjs_plugin(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (typeof pluginApi === 'function') {
    await pluginApi(app.context, inject);
  }
  if (typeof pluginLoadInit === 'function') {
    await pluginLoadInit(app.context, inject);
  }
  if (typeof pluginUtility === 'function') {
    await pluginUtility(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./src/plugins/pluginGoogleAdsense.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./src/plugins/pluginGoogleAdsense.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));

      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map