<script src="./Header.js" lang="js"></script>
<style src="./Header.scss" scope lang="scss"></style>

<template>
  <header>
    <div class="header-container">
      <div class="header-group is-layout-flex ">
        <div class="header-left">
          <template v-if="settings.meta.logo">
            <div id="logo">
              <router-link :to="`/`">
                <img width="120" height="35" :src="settings.meta.logo" v-bind:alt="settings.name">
              </router-link>
            </div>
          </template>
          <template v-else>
            <div class="site-title">
              <h1><nuxt-link :to="`/`">{{ settings.name }}</nuxt-link></h1>
            </div>
            <div class="site-description">
              {{ settings.meta.description }}
            </div>
          </template>
        </div>
        <div class="header-right">
          <div class="is-layout-flex hidden-sp">
            <nav class="menu">
              <ul class="is-layout-flex">
                <li v-for="(menu, index) in primaryMenus" v-bind:key="index">
                  <router-link :to="menu.url" :class="menu.childrens.length ? 'sf-with-ul' : ''">
                    <span v-html="menu.name"></span>
                  </router-link>
                  <template v-if="menu.childrens.length">
                    <ul class="sub-menu" >
                      <li v-for="(child, v) in menu.childrens" :key="v">
                        <router-link :to="child.url">
                          <span v-html="child.name"></span>
                        </router-link>
                      </li>
                    </ul>
                  </template>
                </li>
              </ul>
            </nav>
            <div class="form-search">
              <div class="input-search">
                <input type="search" id="wp-block-search__input-4" class="wp-block-search__input" name="s" v-model="searchModel" placeholder="" required="">
                <button @click="search" type="submit" class="wp-block-search__button has-icon wp-element-button" aria-label="Search"><svg class="" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="header-toggles has-search ">
          <button class="toggle nav-toggle mobile-nav-toggle" :class="{ active : menu}" @click="openMenu">
            <span class="toggle-inner">
              <span class="toggle-icon">
                <svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="26" height="7" viewBox="0 0 26 7"><path fill-rule="evenodd" d="M332.5,45 C330.567003,45 329,43.4329966 329,41.5 C329,39.5670034 330.567003,38 332.5,38 C334.432997,38 336,39.5670034 336,41.5 C336,43.4329966 334.432997,45 332.5,45 Z M342,45 C340.067003,45 338.5,43.4329966 338.5,41.5 C338.5,39.5670034 340.067003,38 342,38 C343.932997,38 345.5,39.5670034 345.5,41.5 C345.5,43.4329966 343.932997,45 342,45 Z M351.5,45 C349.567003,45 348,43.4329966 348,41.5 C348,39.5670034 349.567003,38 351.5,38 C353.432997,38 355,39.5670034 355,41.5 C355,43.4329966 353.432997,45 351.5,45 Z" transform="translate(-329 -38)"></path></svg>						</span>
              <span class="toggle-text">Menu</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>