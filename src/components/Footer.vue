<template>
  <v-content class="footer-section">
    <div class="footer-wrapper">
      <div class="quarry-block">
        <div>
          <div class="desktop-logo">
            <g-image src="~/assets/images/logo-black.png" />
          </div>
          <div class="mobile-logo">
            <g-image src="~/assets/images/logo-white.png" />
          </div>
          <div class="quarry-text">
            DiekTech is a global, full-stack web product team that is
            empassioned about the work that it does. We’ll work together to
            design your digital product or web experience better than you
            imagined, and ship it faster than you thought possible.
          </div>
        </div>
      </div>
      <div class="social-block">
        <v-layout wrap justify-center>
          <div class="say-hi">Say hi</div>
          <div class="d-flex">
            <a v-for="(item, i) in socials" :key="i" class="social-link">
              <v-img :src="item.icon" width="20px" aspect-ratio="1" />
            </a>
          </div>
        </v-layout>
      </div>
      <div class="partner-block">
        <v-layout wrap justify-center>
          <a v-for="(item, i) in partners" :key="i" class="partner-link">
            <g-image :src="item.icon" :class="item.name" />
          </a>
        </v-layout>
        <div class="copyright">
          © 2018 - {{ currentYear }} Diek Technologies LLC
        </div>
      </div>
      <div class="link-block">
        <v-layout wrap>
          <a v-for="(item, i) in links" :key="i" class="internal-link">
            {{ item.text }}
          </a>
        </v-layout>
      </div>
    </div>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: require("~/assets/images/icon-social-spotify.svg"),
          link:
            "https://open.spotify.com/playlist/7w8jZGn5ewyQDTkA57c3Pt?si=kt6QMEhuQeudI0kMYAYNaw"
        },
        {
          icon: require("~/assets/images/icon-social-twitter.svg"),
          link: "https://twitter.com/diektech"
        },
        {
          icon: require("~/assets/images/icon-social-instagram.svg"),
          link: "https://www.instagram.com/diektech/"
        },
        {
          icon: require("~/assets/images/icon-social-dribbble.svg"),
          link: ""
        }
      ],
      partners: [
        // {
        //   icon: require("~/assets/images/icon-partner-oregon.svg"),
        //   link: ""
        // },
        {
          icon: require("~/assets/images/icon-partner-google.png"),
          link: "",
          name: "google"
        },
        {
          icon: require("~/assets/images/icon-partner-global-elite.svg"),
          link: "",
          name: "margento"
        },
        {
          icon: require("~/assets/images/icon-partner-shopify.svg"),
          link: "",
          name: "shopify"
        },
        {
          icon: require("~/assets/images/icon-partner-bigcommerce.png"),
          link: "",
          name: "bigcommerce"
        }
      ],
      links: [
        {
          text: "Terms of Service",
          link: ""
        },
        {
          text: "Privacy Policy ",
          link: ""
        },
        {
          text: "Sitemap",
          link: ""
        }
      ]
    };
  },
  computed: {
    currentYear() {
      const d = new Date();
      return d.getFullYear();
    }
  }
};
</script>
