<script src="./WidgetTags.js" lang="js"></script>

<template>
  <div class="widget widget_tag_cloud">
    <h2 class="widget-title">
      <span>Tags</span>
    </h2>
    <div class="tagcloud">
      <template v-for="(tag, index) in tags">
        <router-link
          v-bind:key="index"
          :to="`/tag/${tag.slug}/`"
          class="tag-cloud-link tag-link-8 tag-link-position-1" 
          style="font-size: 12.745762711864pt;">{{ tag.name }}</router-link>
      </template>
    </div>
  </div>
</template>