<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <div v-if="$route.query.keywords">
    <div class="breadcrumbs clear">
      <span class="breadcrumbs-nav">
        <router-link :to="`/`">Home</router-link>
        <span class="post-category">Search</span>
      </span>
      <h1>{{ $route.query.keywords }}</h1>
    </div>

    <main id="main" class="site-main clear" v-if="posts.length">
      <div id="recent-content" class="content-loop">
        <!-- ads category -->
        <template v-if="adsSearch">
          <ads-keeper
            v-if="adsSearch.type.id === 2"
            v-bind:selector="`ads-search`"
            v-bind:contentAds="adsSearch"
          ></ads-keeper>

          <ads-google
            v-if="adsSearch.type.id === 1"
            v-bind:selector="`ads-search`"
            v-bind:contentAds="adsSearch"
          ></ads-google>
        </template>
        <!-- ads before post -->
        <post-item-search v-for="(post, index) in posts" :key="index" :item="post"></post-item-search>
      </div>
      <div class="load-more" id="infinite-list"></div>
      <loading :active="isLoading"></loading>
    </main>
  </div>
</template>