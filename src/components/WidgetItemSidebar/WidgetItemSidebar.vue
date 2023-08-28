<script src="./WidgetItemSidebar.js" lang="js"></script>
<style src="./WidgetItemSidebar.scss" scope lang="scss"></style>

<template>
  <div id="enjoynews-category-posts-2" class="widget widget-enjoynews-category-posts widget-posts-thumbnail">
    <h3 class="widget-title">
      <router-link :to="`#`">{{ heading }}</router-link>
    </h3>
    <ul>
      <li class="clear" v-for="(post, index) in posts" :key="index">
        <router-link :to="$permalink(post)" class="thumbnail-link">
          <div class="thumbnail-wrap">
            <img width="300" height="300" v-bind:src="imageUrl(post)" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" decoding="async"  sizes="(max-width: 300px) 100vw, 300px">
          </div>
        </router-link>
        <div class="entry-wrap">
          <router-link :to="$permalink(post)">
            <span v-html="post.name"></span>
          </router-link>
          <div class="entry-meta">{{ post.created }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>