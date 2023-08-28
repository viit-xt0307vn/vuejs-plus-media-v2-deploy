<script src="./LoadingScreen.js" lang="js"></script>
<style lang="scss" src="./LoadingScreen.scss" scoped></style>

<template>
  <div
    class="loading_wrapper" v-if="isLoading"
  >
    <div class="loading_content mb-2" />
    <!-- <span class="text-base">
      {{ message ? message : $t('common.loading') }}
    </span> -->
  </div>
</template>