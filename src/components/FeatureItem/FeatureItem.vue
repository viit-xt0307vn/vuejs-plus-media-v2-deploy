<script src="./FeatureItem.js" lang="js"></script>
<style src="./FeatureItem.scss" scope lang="scss"></style>

<template>
  <div :class="`${className}`">
    <nuxt-link :to="$permalink(item)" class="thumbnail-link">
      <div class="thumbnail-wrap" :class="index > 0 ? 'image-cover' : ''">
        <img :width="index === 0 ? 660 : 266" :height="index === 0 ? 440 : 218" :src="imageUrl" class="attachment-enjoynews_featured_large_thumb size-enjoynews_featured_large_thumb wp-post-image" alt="" decoding="async" sizes="(max-width: 660px) 100vw, 660px">
      </div>
      <span class="gradient" style="display: inline;"></span>
    </nuxt-link>
    <div class="entry-header" style="display: block;">
      <template v-if="item.categories.length !== 0">
        <div class="entry-category">
          <nuxt-link :to="`category/${item.categories[0].slug}`">{{ item.categories[0].name }}</nuxt-link>
        </div>
      </template>
      <h2 class="entry-title">
        <nuxt-link :to="$permalink(item)">
          <span v-html="$omitText(item.name, 40)"></span>
        </nuxt-link>
      </h2>
    </div>
  </div>
</template>