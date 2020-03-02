<template>
  <v-app>
    <toolbar />
    <drawer />
    <v-content>
      <slot />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "@/components/Toolbar";
import Drawer from "@/components/Drawer";

export default {
  name: "defaultLayout",
  components: {
    Toolbar,
    Drawer
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  computed: {
    activeLink: {
      get() {
        return this.$store.state.activeLink;
      }
    }
  },

  methods: {
    handleScroll() {
      const temp = parseInt(document.documentElement.dataset.scroll);
      const isCaseDetail = this.$route.path.indexOf("case-detail") > -1;

      if (window.scrollY === 0)
        document.documentElement.dataset.direction = "init";
      else if (temp > window.scrollY && window.scrollY > 0 && !isCaseDetail)
        document.documentElement.dataset.direction = "up";
      else document.documentElement.dataset.direction = "down";
      document.documentElement.dataset.scroll = window.scrollY;
    }
  },
  mounted() {
    document.documentElement.dataset.scroll = 0;
    document.documentElement.dataset.direction = "init";
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
