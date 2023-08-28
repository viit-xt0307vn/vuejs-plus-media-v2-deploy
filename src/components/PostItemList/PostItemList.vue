<script src="./PostItemList.js" lang="js"></script>
<style scope lang="scss" src="./PostItemList.scss"></style>

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
          <span v-html="$omitText(item.name, 60)"></span>
        </router-link>
      </h2>
      <div class="entry-meta clear">
        <nuxt-link :to="`/author/${item.author.username}/`">
          <span class="entry-author">
            <span rel="author">{{ item.author.name }}</span>
          </span>
        </nuxt-link>
        <span class="sep date-sep">·</span>
        <span class="entry-date">{{ $timePost(item.created) }}</span>
        <!-- <template v-if="category">
          <span class="sep date-sep">·</span>
          <span class="entry-tag">
            <router-link :to="`${category.slug}`">{{ category.name }}</router-link>
          </span>
        </template> -->
        <!-- <template v-if="item.comment_count">
          <span class="sep date-sep">·</span>
          <span class="entry-tag">
            <router-link :to="`#`">{{ item.comment_count }} Comment</router-link>
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