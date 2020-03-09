<template>
  <v-toolbar flat class="quarry-toolbar" :class="activeLink">
    <v-btn
      class="hidden-md-and-up toolbar-side-icon hamburger hamburger--collapse"
      :class="{ 'is-active': drawer }"
      @click="toggleDrawer"
      :ripple="false"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </v-btn>
    <v-container mx-auto py-0>
      <v-layout class="align-center">
        <v-toolbar-title>
          <g-link to="/">
            <g-image class="quarry-logo" :src="logo" />
          </g-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <g-link
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="hidden-sm-and-down menu-link mx-3"
          >
            <v-list-item-title @click="updateLink(link.to)">
              {{ link.text }}
            </v-list-item-title>
            <div
              :class="{
                'nav-is-selected': link.to.substring(1) === activeLink,
                'is-inverse-selected':
                  isDark && link.to.substring(1) === activeLink
              }"
            ></div>
          </g-link>
        </v-toolbar-items>
      </v-layout>
    </v-container>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "tooblbar",

  computed: {
    ...mapGetters(["links"]),
    isDark: function() {
      return ["services", "cases", "blog", "team", "contact"].includes(
        this.activeLink
      );
    },
    logo: function() {
      if (
        ["services", "cases", "blog", "contact", "team"].includes(
          this.activeLink
        )
      ) {
        return require("~/assets/images/icon-logo-white.svg");
      } else {
        return require("~/assets/images/icon-logo-quarry.svg");
      }
    },
    drawer: {
      get() {
        return this.$store.state.drawer;
      }
    },
    activeLink: {
      get() {
        return this.$store.state.activeLink;
      }
    }
  },

  methods: {
    ...mapMutations(["toggleDrawer", "setActiveLink"]),

    updateLink: function(link) {
      this.setActiveLink(link.substr(1));
    }
  },

  mounted() {
    const path = this.$route.path;
    this.setActiveLink(path.substr(1));
  }
};
</script>
