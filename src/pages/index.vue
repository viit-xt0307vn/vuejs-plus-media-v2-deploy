<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <main id="main" class="site-main clear">
    <!-- <template v-if="ads.length">
      <div id="load-script" v-if="isLoad">
        <Adsense
          ins-style="display:inline-block;width:780px;height:400px"
          data-ad-client="ca-pub-2403971764805357"
          data-ad-slot="5359292791">
        </Adsense>
      </div>
    </template> -->
    <div id="recent-content">
      <template v-for="(category, index) in categories">
        <widget-one-column
          v-bind:key="index"
          v-bind:category="category"
        ></widget-one-column>
      </template>
      <div class="load-more" id="infinite-list"></div>
      <loading :active="isLoading"></loading>
    </div>
  </main>
</template>
