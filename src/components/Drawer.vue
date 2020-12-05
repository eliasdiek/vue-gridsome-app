<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
    class="gradient-blue"
    width="80%"
  >
    <v-toolbar-title>
      <g-link to="/">
        Diek Technologies
      </g-link>
    </v-toolbar-title>
    <v-list>
      <g-link v-for="(link, i) in links" :key="i" :to="link.to">
        <v-list-item-title @click="updateLink(link.to)">
          {{ link.text }}
        </v-list-item-title>
      </g-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "drawer",

  computed: {
    ...mapGetters(["links"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },

  methods: {
    ...mapMutations(["setDrawer", "toggleDrawer", "setActiveLink"]),

    updateLink: function(link) {
      this.toggleDrawer();
      this.setActiveLink(link.substr(1));
    }
  }
};
</script>
