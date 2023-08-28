<script src="./PostItem.js" lang="js"></script>
<style src="./PostItem.scss" scope lang="scss"></style>

<template>
  <div :class="`${className}`">
    <router-link :to="$permalink(item)" class="thumbnail-link">
      <div class="thumbnail-wrap">
        <img :width="index === 0 ? 600 : 300" :height="index === 0 ? 400 : 200" :src="imageUrl" class="attachment-enjoynews_featured_large_thumb size-enjoynews_featured_large_thumb wp-post-image" alt="" decoding="async" sizes="(max-width: 660px) 100vw, 660px">
      </div>
    </router-link>
    <div class="entry-header">
      <h2 class="entry-title">
        <router-link :to="$permalink(item)">
          <span v-html="$omitText(item.name, 50)"></span>
        </router-link>
      </h2>
    </div>
    <div class="entry-meta">
      <nuxt-link :to="`/author/${item.author.username}/`">
        <span class="entry-author">
          <span rel="author">{{ item.author.name }}</span>
        </span>
      </nuxt-link>
      <span class="sep">·</span>
      <span class="entry-date">{{ createDate }}</span>
      <!-- <span class="entry-comment">
        <router-link :to="`#`" class="comments-link">{{ item.comment_count }} Comment</router-link>
      </span> -->
    </div>
    <div class="entry-summary" v-if="index === 0 && item.description" v-html="item.description"></div>
  </div>
</template>