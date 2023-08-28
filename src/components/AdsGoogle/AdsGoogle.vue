<script src="./AdsGoogle.js" lang="js"></script>
<style lang="scss" src="./AdsGoogle.scss" scoped></style>

<template>
  <div v-bind:id="`${selector}`" v-html="googleAds"></div>
</template>