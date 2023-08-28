<script src="./MenuSP.js" lang="js"></script>
<style src="./MenuSP.scss" scope lang="scss"></style>

<template>
  <div class="menu-modal cover-modal header-footer-group" :class="menu ? 'show-modal active' : ''">
    <div class="menu-modal-inner modal-inner">
      <div class="menu-wrapper section-inner">
        <div class="menu-top">
          <button class="toggle close-nav-toggle fill-children-current-color" @click="closeMenu">
            <span class="toggle-text">Close Menu</span>
            <svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><polygon fill="" fill-rule="evenodd" points="6.852 7.649 .399 1.195 1.445 .149 7.899 6.602 14.352 .149 15.399 1.195 8.945 7.649 15.399 14.102 14.352 15.149 7.899 8.695 1.445 15.149 .399 14.102"></polygon></svg>
          </button><!-- .nav-toggle -->
          <nav class="mobile-menu" aria-label="Mobile" role="navigation">
            <ul class="modal-menu reset-list-style">
              <li v-for="(menu, index) in primaryMenus" :key="index" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31617">
                <div class="ancestor-wrapper">
                  <a @click="gotoCategory(menu.url)" style="cursor: pointer; ">
                    <span v-html="menu.name"></span>
                  </a>
                  <button class="toggle sub-menu-toggle fill-children-current-color" :class="{ active : menu.hasSubMenu }" v-if="menu.childrens.length" @click="openSubMenu(index, menu.hasSubMenu)">
                    <span class="screen-reader-text">Show sub menu</span>
                    <svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12"><polygon fill="" fill-rule="evenodd" points="1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358" transform="translate(-1310 -358)"></polygon></svg>
                  </button>
                </div><!-- .ancestor-wrapper -->
                <template v-if="menu.childrens.length">
                  <transition name="slide-fade">
                    <ul class="sub-menu" :class="{ active : menu.hasSubMenu }" v-if="menu.hasSubMenu">
                      <li v-for="(child, index) in menu.childMenus" :key="index">
                        <a @click="gotoCategory(child.url)" style="cursor: pointer; ">
                          <span v-html="child.name"></span>
                        </a>
                      </li>
                    </ul>
                  </transition>
                </template>
              </li>
            </ul>
          </nav>
        </div><!-- .menu-top -->
      </div><!-- .menu-wrapper -->
    </div><!-- .menu-modal-inner -->
  </div>
</template>