<script src="./WidgetOneColumn.js" lang="js"></script>
<style src="./WidgetOneColumn.scss" scope lang="scss"></style>

<template>
  <div>
    <div class="widget widget-enjoynews-home-content" v-if="category">
      <div class="content-block content-block-1 clear">
        <div class="section-heading" :style="{ borderBottomColor: catBg  }">
          <h3 class="section-title" :style="{ backgroundColor: catBg, color: catColor }">
            <router-link :to="`/category/${category.slug}/`">{{ catName }}</router-link>
          </h3>
          <span class="section-more-link">
            <router-link :to="`/category/${category.slug}/`">More</router-link>
          </span>
        </div>
        <template v-for="(post, index) in category.posts">
          <post-item v-bind:key="index" :index="index" :item="post" :className="className(index)"></post-item>
        </template>
      </div>
    </div>
    <!-- <loading :active="isLoading"></loading> -->
  </div>
</template>