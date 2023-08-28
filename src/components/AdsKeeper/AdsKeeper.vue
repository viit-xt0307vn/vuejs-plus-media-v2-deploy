<script src="./AdsKeeper.js" lang="js"></script>
<style lang="scss" src="./AdsKeeper.scss" scoped></style>

<template>
  <div v-bind:id="`${selector}`" v-html="contentAds.body"></div>
</template>