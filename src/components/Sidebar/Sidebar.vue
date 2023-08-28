<script src="./Sidebar.js" lang="js"></script>
<style src="./Sidebar.scss" scope lang="scss"></style>

<template>
  <aside id="secondary" class="widget-area sidebar">
    <!-- Widget item post -->
    <widget-item-sidebar
      v-bind:heading="`Most Commented Posts`"
      v-bind:posts="randomPosts"
    ></widget-item-sidebar>
    <!--End Widget item post -->

    <!-- Widget tags -->
    <widget-tags v-bind:tags="tags"></widget-tags>
    <!--End Widget tags -->
  </aside>
</template>