<script src="./FeaturePost.js" lang="js"></script>
<style src="./FeaturePost.scss" scope lang="scss"></style>

<template>
  <div id="featured-content" class="container clear">
    <feature-item 
      v-for="(post, index) in posts" 
      v-bind:key="index"
      v-bind:index="index" 
      v-bind:item="post" 
      v-bind:className="className(index)">
    </feature-item>
  </div>
  <!-- <loading :active="isLoading"></loading> -->
</template>