(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{348:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(117);var o=n(144),c=n(91);function d(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},349:function(t,e,n){"use strict";n(32),n(20),n(36),n(23),n(37);var r=n(8),o=n(348),c=(n(14),n(74),n(230),n(15),n(29),n(21)),d=n(145),l=n(146),m=n(13);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={components:{AdsKeeper:d.a,AdsGoogle:l.a},data:function(){return{metaTitle:"",metaDescription:"",meta:""}},head:function(){var meta=[],t=[];this.metaDescription&&meta.push.apply(meta,Object(o.a)(this.metaDescription)),"index"===this.$route.name&&meta.push.apply(meta,Object(o.a)(this.$metas()));var e={};return e.link=[{rel:"icon",type:"image/x-icon",href:"".concat(this.$favicon())}],e.meta=meta,"index"===this.$route.name?e.title=this.$sitename():e.title="".concat(this.metaTitle," - ").concat(this.$sitename()),this.measurementId&&(t.push({async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(this.measurementId)}),t.push({innerHTML:"window.dataLayer = window.dataLayer || [];\n                    function gtag(){dataLayer.push(arguments);}\n                    gtag('js', new Date());\n                    gtag('config', '".concat(this.measurementId,"');")})),this.metaYoastSeo&&t.push({innerHTML:JSON.stringify(this.metaYoastSeo),hid:"yoast-seo",type:"application/ld+json",class:"yoast-schema-graph"}),e.script=t,e.__dangerouslyDisableSanitizers=["script"],e},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({adsHeader:function(t){var e=t.common.storeLoadAds.ads.find((function(t){return t.position.id===m.n}));return e||null},adsPostDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===m.c}))},adsCategory:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===m.a}))},adsSearch:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===m.d}))},adsTag:function(t){return t.common.storeLoadAds.ads.find((function(t){return t.pages[0].id===m.e}))},adsPageDetail:function(t){return t.common.storeLoadAds.ads.filter((function(t){return t.pages[0].id===m.b}))},measurementId:function(t){return t.common.storeLoadInit.settings.analytic.measurement_id}})),mounted:function(){}}},350:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("45043fa2",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n(350)},352:function(t,e,n){var r=n(27)((function(i){return i[1]}));r.push([t.i,".loading[data-v-7bdb9fc2]{align-items:center;display:block;display:flex;height:100px;justify-content:center;overflow:hidden;position:relative;z-index:9999}.loading .bg[data-v-7bdb9fc2]{background:#fff;bottom:0;left:0;opacity:.5;position:absolute;right:0;top:0}.loading .spinner[data-v-7bdb9fc2]{position:relative}",""]),r.locals={},t.exports=r},353:function(t,e,n){"use strict";var r={props:{active:{type:Boolean,default:!1}}},o=(n(351),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.active?e("div",{staticClass:"loading"},[e("div",{staticClass:"bg"}),t._v(" "),e("div",{staticClass:"spinner"},[e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",stroke:"#007bff"}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),t._v(" "),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])])]):t._e()}),[],!1,null,"7bdb9fc2",null);e.a=component.exports},354:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("60d1c1b1",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";n(354)},356:function(t,e,n){var r=n(27)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},357:function(t,e,n){"use strict";n(14),n(20),n(52);var r={props:{item:{type:Object,default:null},category:{type:Object,default:null}},methods:{},computed:{imageUrl:function(){return this.item.image?this.item.image:this.$defaultImg()}}},o=(n(355),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.item?e("div",{staticClass:"hentry clear"},[e("router-link",{staticClass:"thumbnail-link",attrs:{to:t.$permalink(t.item)}},[e("div",{staticClass:"thumbnail-wrap"},[e("img",{attrs:{src:t.imageUrl,alt:t.item.name}})])]),t._v(" "),e("div",{staticClass:"entry-header"},[e("h2",{staticClass:"entry-title"},[e("router-link",{attrs:{to:t.$permalink(t.item)}},[e("span",{domProps:{innerHTML:t._s(t.$omitText(t.item.name,60))}})])],1),t._v(" "),e("div",{staticClass:"entry-meta clear"},[e("nuxt-link",{attrs:{to:"/author/".concat(t.item.author.username,"/")}},[e("span",{staticClass:"entry-author"},[e("span",{attrs:{rel:"author"}},[t._v(t._s(t.item.author.name))])])]),t._v(" "),e("span",{staticClass:"sep date-sep"},[t._v("·")]),t._v(" "),e("span",{staticClass:"entry-date"},[t._v(t._s(t.$timePost(t.item.created)))])],1)]),t._v(" "),e("div",{staticClass:"entry-summary"},[e("p",{domProps:{innerHTML:t._s(t.item.description)}}),t._v(" "),e("span",{staticClass:"read-more"},[e("router-link",{attrs:{to:t.$permalink(t.item)}},[t._v("Read more")])],1)])],1):t._e()}),[],!1,null,null,null);e.a=component.exports},364:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("e4afd0b0",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n(364)},382:function(t,e,n){var r=n(27)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},394:function(t,e,n){"use strict";n.r(e);n(14);var r=n(348),o=n(2),c=(n(30),n(75),n(357)),d=n(353),l={layout:"TopLayout/TopLayout",mixins:[n(349).a],data:function(){return{category:null,isLoading:!1,pageNo:1,totalPage:null,posts:[]}},components:{PostItemList:c.a,Loading:d.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$setLoading(!0),n={pageNo:1,totalPage:1},r={api_key:t.env.API_KEY,website_id:t.env.WEBSITE_ID,category_slug:t.params.slug,get_posts:1,post_limit:10,post_page:1,get_meta:1},e.next=5,t.$axios.get("manager/categories/json/1.json",{params:r});case 5:return 1===(o=e.sent).data.status_code&&0!==o.data.data.length&&(n.category=o.data.data[0],n.posts=o.data.data[0].posts,n.totalPage=o.data.data[0].post_count_page,n.metaDescription=o.data.data[0].meta,n.metaTitle=o.data.data[0].name,n.pageNo++,n.metaYoastSeo=o.data.data[0]["yoast-seo"]),t.$setLoading(!1),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))()},methods:{getPostByCategory:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,n={api_key:"0906429283",website_id:22,category_slug:t.$route.params.slug,get_posts:1,post_limit:10,post_page:t.pageNo},e.next=6,t.$axios.get("manager/categories/json/1.json",{params:n});case 6:1===(o=e.sent).data.status_code&&(c=t.posts).push.apply(c,Object(r.a)(o.data.data[0].posts)),t.pageNo++;case 9:case"end":return e.stop()}}),e)})))()}},computed:{},mounted:function(){var t=this;window.addEventListener("scroll",function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var r,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.querySelector("#infinite-list"),o=document.documentElement,c=o.scrollTop,o.scrollHeight,d=o.clientHeight,!(r&&c+d>=r.offsetTop)){e.next=8;break}if(!(t.isLoading||t.pageNo>t.totalPage||1===t.pageNo)){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.getPostByCategory();case 7:setTimeout((function(){t.isLoading=!1}),500);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},m=l,f=(n(381),n(6)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return t.category?e("div",[e("div",{staticClass:"breadcrumbs clear"},[e("span",{staticClass:"breadcrumbs-nav"},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("span",{staticClass:"post-category"},[t._v(t._s(t.category.name))])],1),t._v(" "),e("h1",[t._v(t._s(t.category.name))])]),t._v(" "),e("main",{staticClass:"site-main clear",attrs:{id:"main"}},[e("div",{staticClass:"content-loop",attrs:{id:"recent-content"}},[t.adsCategory?[2===t.adsCategory.type.id?e("ads-keeper",{attrs:{selector:"ads-category",contentAds:t.adsCategory}}):t._e(),t._v(" "),1===t.adsCategory.type.id?e("ads-google",{attrs:{selector:"ads-category",contentAds:t.adsCategory}}):t._e()]:t._e(),t._v(" "),t._l(t.posts,(function(n,r){return e("post-item-list",{key:r,attrs:{item:n,category:t.category}})}))],2),t._v(" "),e("div",{staticClass:"load-more",attrs:{id:"infinite-list"}}),t._v(" "),e("loading",{attrs:{active:t.isLoading}})],1)]):t._e()}),[],!1,null,"57a4d198",null);e.default=component.exports}}]);