<script src="./Footer.js" lang="js"></script>
<style src="./Footer.scss" scope lang="scss"></style>

<template>
  <footer class="site-footer">
    <div class="clear"></div>
    <div id="site-bottom" class="clear">
      <div class="container">
        <div class="site-info">
					© {{ new Date().getFullYear() }}
					<a v-bind:href="`${settings.domain}`" class="router-link-exact-active router-link-active">{{ settings.name }}</a>
        </div>
        <div class="menu-primary-menu-container">
          <ul class="footer-nav" id="footer-menu">
            <li v-for="(menu, index ) in footerMenus" v-bind:key="index">
              <nuxt-link :to="`/page${menu.url}`">{{ menu.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>