import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _09145986 = () => interopDefault(import('..\\src\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _7d4410a4 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _9365b8b2 = () => interopDefault(import('..\\src\\pages\\author\\_slug\\index.vue' /* webpackChunkName: "pages/author/_slug/index" */))
const _6226495a = () => interopDefault(import('..\\src\\pages\\category\\_slug\\index.vue' /* webpackChunkName: "pages/category/_slug/index" */))
const _693deaaa = () => interopDefault(import('..\\src\\pages\\page\\_slug\\index.vue' /* webpackChunkName: "pages/page/_slug/index" */))
const _3320de04 = () => interopDefault(import('..\\src\\pages\\tag\\_slug\\index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
const _3787f22c = () => interopDefault(import('..\\src\\pages\\_id\\index.vue' /* webpackChunkName: "pages/_id/index" */))
const _9cd3c148 = () => interopDefault(import('..\\src\\pages\\_slug\\index.vue' /* webpackChunkName: "pages/_slug/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

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
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
