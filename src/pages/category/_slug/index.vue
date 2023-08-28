<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <div v-if="category">
    <div class="breadcrumbs clear">
      <span class="breadcrumbs-nav">
        <router-link :to="`/`">Home</router-link>
        <span class="post-category">{{ category.name }}</span>
      </span>
      <h1>{{ category.name }}</h1>
    </div>

    <main id="main" class="site-main clear">
      <div id="recent-content" class="content-loop">
        <!-- ads category -->
        <template v-if="adsCategory">
          <ads-keeper
            v-if="adsCategory.type.id === 2"
            v-bind:selector="`ads-category`"
            v-bind:contentAds="adsCategory"
          ></ads-keeper>

          <ads-google
            v-if="adsCategory.type.id === 1"
            v-bind:selector="`ads-category`"
            v-bind:contentAds="adsCategory"
          ></ads-google>
        </template>
        <!-- ads before post -->
        <post-item-list
          v-for="(post, index) in posts" 
          v-bind:key="index"
          v-bind:item="post"
          v-bind:category="category">
        </post-item-list>
      </div>
      <div class="load-more" id="infinite-list"></div>
      <loading :active="isLoading"></loading>
    </main>
  </div>
</template>