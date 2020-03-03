// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollTo from "vue-scrollto";
import DefaultLayout from "~/layouts/Default.vue";
import store from "./store";

export default function(Vue, { appOptions, head, isServer }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900,black,extrabold"
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900"
  });

  const opts = {
    icons: {
      iconFont: "mdi"
    }
  };

  Vue.use(Vuetify);
  Vue.use(VueScrollTo);

  appOptions.vuetify = new Vuetify(opts);
  appOptions.store = store;

  if (!isServer) {
    appOptions.AOS = new AOS.init({ disable: "phone" });
  }

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
