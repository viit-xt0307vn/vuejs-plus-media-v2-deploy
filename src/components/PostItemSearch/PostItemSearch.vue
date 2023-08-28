<script src="./PostItemSearch.js" lang="js"></script>
<style scope lang="scss" src="./PostItemSearch.scss"></style>

<template>
  <div class="hentry clear" v-if="item">
    <router-link :to="$permalink(item)" class="thumbnail-link">
      <div class="thumbnail-wrap">
        <img :src="imageUrl" :alt="item.name">
      </div>
    </router-link>
    <div class="entry-header">
      <h2 class="entry-title">
          <router-link :to="$permalink(item)">
            <span v-html="item.name"></span>
          </router-link>
      </h2>
      <div class="entry-meta clear">
        <span class="entry-category" v-if="item.categories.length !== 0">
          <router-link :to="`/category/${item.categories[0].slug}/`">{{ item.categories[0].name }}</router-link>
        </span>
        <nuxt-link :to="`/author/${item.author.username}/`">
          <span class="entry-author">
            <span rel="author">{{ item.creater.name }}</span>
          </span>
        </nuxt-link>
        <span class="sep date-sep">·</span>
        <span class="entry-date">{{ $timePost(item.creater.created) }}</span>
        <template v-if="item.tags.length !== 0">
          <span class="sep date-sep">·</span>
          <span class="entry-tag">
            <router-link :to="`/tag/${item.tags[0].slug}/`">{{ item.tags[0].name }}</router-link>
          </span>
        </template>
        <!-- <template v-if="item['comment-count']">
          <span class="sep date-sep">·</span>
          <span class="entry-tag">
            <router-link :to="`#`">{{ item['comment-count'] }} Comment</router-link>
          </span>
        </template> -->
      </div><!-- .entry-meta -->
    </div>
    <div class="entry-summary">
      <p v-html="item.description"></p>
      <span class="read-more">
        <router-link :to="$permalink(item)">Read more</router-link>
      </span>
    </div>
  </div>
</template>