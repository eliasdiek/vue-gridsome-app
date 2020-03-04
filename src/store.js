import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    activeLink: "",
    links: [
      { text: "Team", to: "/team" },
      { text: "Cases", to: "/cases" },
      { text: "Services", to: "/services" },
      { text: "Blog", to: "/blog" },
      { text: "Contact", to: "/contact" }
    ],
    activeCategory: "all"
  },
  getters: {
    links: state => {
      return state.links;
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setActiveLink: (state, payload) => (state.activeLink = payload),
    setActiveCategory: (state, payload) => {
      console.log("payload: " + payload);
      state.activeCategory = payload;
    }
  },
  actions: {}
});
