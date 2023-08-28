<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <div v-if="tag">
    <div class="breadcrumbs clear">
      <span class="breadcrumbs-nav">
        <router-link :to="`/`">Home</router-link>
        <span class="post-category">{{ tag.name }}</span>
      </span>
      <h1>{{ tag.name }}</h1>
    </div>

    <main id="main" class="site-main clear">
      <div id="recent-content" class="content-loop">
        <!-- ads tag -->
        <template v-if="adsTag">
          <ads-keeper
            v-if="adsTag.type.id === 2"
            v-bind:selector="`ads-tag`"
            v-bind:contentAds="adsTag"
          ></ads-keeper>

          <ads-google
            v-if="adsTag.type.id === 1"
            v-bind:selector="`ads-tag`"
            v-bind:contentAds="adsTag"
          ></ads-google>
        </template>
        <!-- ads before post -->
        <post-item-list
          v-for="(post, index) in posts" 
          v-bind:key="index"
          v-bind:item="post"
          v-bind:category="tag">
        </post-item-list>
      </div>
      <div class="load-more" id="infinite-list"></div>
      <loading :active="isLoading"></loading>
    </main>
  </div>
</template>