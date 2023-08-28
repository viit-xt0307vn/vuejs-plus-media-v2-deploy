<script src="./TopLayout.js" lang="js"></script>
<style src="./TopLayout.scss" scope lang="scss"></style>

<template>
  <div id="page" class="site">
    <Header />
    <!-- ads header -->
    <template v-if="adsHeader">
      <ads-keeper
        v-if="adsHeader.type.id === 2"
        v-bind:selector="`ads-header`"
        v-bind:contentAds="adsHeader"
      ></ads-keeper>

      <ads-google
        v-if="adsHeader.type.id === 1"
        v-bind:selector="`ads-header`"
        v-bind:contentAds="adsHeader"
      ></ads-google>
    </template>
    <!-- ads header -->
    <MenuSP />
    <div>
      <!--Feature post-->
      <feature-post  v-if="$route.name === 'index'"></feature-post>
      <!--Feature post-->

      <!--content-->
      <div id="content" class="site-content container clear">
        <div id="primary" class="content-area clear">
          <nuxt />
        </div>

        <!-- Sidebar -->
        <Sidebar />
         <!-- End Sidebar -->
      </div>
      <!--content-->
    </div>
    <Footer />
    <div id="back-top" v-if="backtoTop">
      <a @click="handleToTop" title="Back to top">
        <span class="genericon genericon-collapse"></span>
      </a>
    </div>
    <LoadingScreen />
    <!-- ads auto head -->
    <template v-if="adsHead">
      <ads-keeper
        v-if="adsHead.type.id === 2"
        v-bind:selector="`ads-head`"
        v-bind:contentAds="adsHead"
        v-bind:position="`head`"
      ></ads-keeper>

      <ads-google
        v-if="adsHead.type.id === 1"
        v-bind:selector="`ads-head`"
        v-bind:contentAds="adsHead"
        v-bind:position="`head`"
      ></ads-google>
    </template>
    <!-- ads auto head -->

    <!-- ads footer -->
    <template v-if="adsFooter">
      <ads-keeper
        v-if="adsFooter.type.id === 2"
        v-bind:selector="`ads-footer`"
        v-bind:contentAds="adsFooter"
        v-bind:position="`footer`"
      ></ads-keeper>

      <ads-google
        v-if="adsFooter.type.id === 1"
        v-bind:selector="`ads-footer`"
        v-bind:contentAds="adsFooter"
        v-bind:position="`footer`"
      ></ads-google>
    </template>
    <!-- ads footer -->
  </div>
</template>