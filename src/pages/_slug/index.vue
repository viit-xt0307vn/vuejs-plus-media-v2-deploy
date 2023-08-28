<script src="./index.js" lang="js"></script>
<style lang="scss" src="./index.scss" scoped></style>

<template>
  <main id="main" class="site-main single">
    <article v-if="postDetail">
      <div class="breadcrumbs">
        <span class="breadcrumbs-nav">
          <router-link :to="`/`">Home</router-link>
          <span class="post-category" v-if="postDetail.categories.length !== 0">
            <router-link :to="`/category/${postDetail.categories[0].slug}/`">{{ postDetail.categories[0].name }}</router-link>
          </span>
          <span class="post-title" v-html="postDetail.name"></span>
        </span>
      </div>

      <!-- ads before post -->
      <template v-if="beforePostAds">
        <ads-keeper
          v-if="beforePostAds.type.id === 2"
          v-bind:selector="`ads-before-post`"
          v-bind:contentAds="beforePostAds"
        ></ads-keeper>

        <ads-google
          v-if="beforePostAds.type.id === 1"
          v-bind:selector="`ads-before-post`"
          v-bind:contentAds="beforePostAds"
        ></ads-google>
      </template>
      <!-- ads before post -->

      <header class="entry-header clear">
        <h1 class="entry-title" v-html="postDetail.name"></h1>
        <div class="entry-meta clear">
          <span class="entry-category" v-if="postDetail.categories.length !== 0">
            <router-link :to="`/category/${postDetail.categories[0].slug}/`" :style="{ backgroundColor: `#0099e5` }">{{ postDetail.categories[0].name }}</router-link>
          </span>
          <nuxt-link :to="`/author/${postDetail.creater.username}/`">
            <span class="entry-author">
              <span>{{postDetail.creater.name}}</span>
            </span>
          </nuxt-link>
          <span class="sep date-sep">·</span>
          <span class="entry-date">{{ $timePost(postDetail.creater.created) }}</span>
          <template v-if="postDetail?.tags.length">
            <span class="sep date-sep">·</span>
            <span class="entry-tag">
              <router-link :to="`/tag/${postDetail?.tags[0].slug}/`">{{ postDetail?.tags[0].name }}</router-link>
            </span>
          </template>
        </div>
      </header>

      <!-- entry content -->
      <div class="entry-content">
        <!-- <p v-if="imageUrl">
          <img :src="imageUrl" :alt="postDetail.name">
        </p> -->
        <div>
          <!-- ads before content -->
          <template v-if="beforeContentAds">
            <ads-keeper
              v-if="beforeContentAds.type.id === 2"
              v-bind:selector="`ads-before-content`"
              v-bind:contentAds="beforeContentAds"
            ></ads-keeper>

            <ads-google
              v-if="beforeContentAds.type.id === 1"
              v-bind:selector="`ads-before-content`"
              v-bind:contentAds="beforeContentAds"
            ></ads-google>
          </template>
          <!-- ads before content -->

          <!-- post content -->
          <template v-for="(html, index) in postBodyArray">
            <!-- ads before paragraph -->
            <template v-if="beforeParagraphAds && index + 1 === beforeParagraphAds.class.number">
              <ads-keeper
                v-bind:key="`before-${index}`"
                v-if="beforeParagraphAds.type.id === 2"
                v-bind:selector="`ads-before-content-${index}`"
                v-bind:contentAds="beforeParagraphAds"
              ></ads-keeper>

              <ads-google
                v-bind:key="`before-${index}`"
                v-if="beforeParagraphAds.type.id === 1"
                v-bind:selector="`ads-before-content-${index}`"
                v-bind:contentAds="beforeParagraphAds"
              ></ads-google>
            </template>
            
            <template v-if="beforeParagraphAds && ((index + 1 - beforeParagraphAds.class.number) % beforeParagraphAds.class.repeat_content_number === 0) && index - beforeParagraphAds.class.number > 0">
              <ads-keeper
                v-bind:key="`beforứare-${index}`"
                v-if="beforeParagraphAds.type.id === 2"
                v-bind:selector="`ads-before-content-${index}`"
                v-bind:contentAds="beforeParagraphAds"
              ></ads-keeper>

              <ads-google
                v-bind:key="`before-${index}`"
                v-if="beforeParagraphAds.type.id === 1"
                v-bind:selector="`ads-before-content-${index}`"
                v-bind:contentAds="beforeParagraphAds"
              ></ads-google>
            </template>
            <!-- ads before paragraph -->

            <p v-html="html" v-bind:key="index"></p>

            <!-- ads after paragraph -->
            <template
              v-if="afterParagraphAds && index + 1 === afterParagraphAds.class.number">
              <ads-keeper
                v-bind:key="`after-${index}`"
                v-if="afterParagraphAds.type.id === 2"
                v-bind:selector="`ads-after-content-${index}`"
                v-bind:contentAds="afterParagraphAds"
              ></ads-keeper>

              <ads-google
                v-bind:key="`after-${index}`"
                v-if="afterParagraphAds.type.id === 1"
                v-bind:selector="`ads-before-content-${index}`"
                v-bind:contentAds="afterParagraphAds"
              ></ads-google>
            </template>

            <template
              v-if="afterParagraphAds && ((index + 1 - afterParagraphAds.class.number) % afterParagraphAds.class.repeat_content_number === 0) && index - afterParagraphAds.class.number > 0">
              <ads-keeper
                v-bind:key="`after-${index}`"
                v-if="afterParagraphAds.type.id === 2"
                v-bind:selector="`ads-after-content-${index}`"
                v-bind:contentAds="afterParagraphAds"
              ></ads-keeper>

              <ads-google
                v-bind:key="`after-${index}`"
                v-if="afterParagraphAds.type.id === 1"
                v-bind:selector="`ads-before-content-${index}`"
                v-bind:contentAds="afterParagraphAds"
              ></ads-google>
            </template>
            <!-- ads after paragraph -->
          </template>
          <!-- post content -->

          <!-- ads after content -->
          <template v-if="afterContentAds">
            <ads-keeper
              v-if="afterContentAds.type.id === 2"
              v-bind:selector="`ads-after-content`"
              v-bind:contentAds="afterContentAds"
            ></ads-keeper>

            <ads-google
              v-if="afterContentAds.type.id === 1"
              v-bind:selector="`ads-after-content`"
              v-bind:contentAds="afterContentAds"
            ></ads-google>
          </template>
          <!-- ads after content -->
        </div>
      </div>
      <!-- entry content -->

       <!-- ads after post -->
      <template v-if="afterPostAds">
        <ads-keeper
          v-if="beforePostAds.type.id === 2"
          v-bind:selector="`ads-after-post`"
          v-bind:contentAds="beforePostAds"
        ></ads-keeper>

        <ads-google
          v-if="beforePostAds.type.id === 1"
          v-bind:selector="`ads-after-post`"
          v-bind:contentAds="beforePostAds"
        ></ads-google>
      </template>
    </article>
  </main>
</template>