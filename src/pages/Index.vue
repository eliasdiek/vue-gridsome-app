<template>
  <Layout>
    <div>
      <v-container class="quarry-container">
        <v-container class="quarry-section hero-section" data-aos="fade-right">
          <h1 class="text-center h1">
            We craft digital products <br />
            that satisfy, empower, and convert.
          </h1>
          <v-layout justify-center>
            <span class="subtitle">
              A global, full-stack web products team.
            </span>
          </v-layout>
        </v-container>
        <v-layout justify-center class="down-icon">
          <v-icon color="black" size="40px" @click="gotoCases">
            mdi-chevron-down
          </v-icon>
        </v-layout>
        <v-flex
          class="text-center quarry-section blog-section margin-home-blog"
        >
          <v-list>
            <template v-for="(item, index) in topBlogs">
              <top-blog :key="index" :blog="item" />
              <v-divider
                class="top-blog-divider"
                v-if="index + 1 < topBlogs.length"
                :key="`divider-${index}`"
              ></v-divider>
            </template>
          </v-list>
          <v-btn class="quarry-btn btn-primary more-cases">More Cases</v-btn>
        </v-flex>
        <home-notify class="margin-home-notify" />
      </v-container>
      <top-stacks class="margin-home-stacks" />
      <blog-carousel class="margin-home-carousel" />
      <contact-schedule class="margin-home-contact" />
      <Footer />
    </div>
  </Layout>
</template>

<script>
import BlogCarousel from "../components/BlogCarousel";
import ContactSchedule from "../components/ContactSchedule";
import Footer from "../components/Footer";
import HomeNotify from "../components/HomeNotify";
import TopBlog from "../components/TopBlog";
import TopStacks from "../components/TopStacks";

export default {
  metaInfo: {
    title:
      "Quality Web Design + User Interfaces & Experience | Quarry Design Group"
  },
  components: {
    BlogCarousel,
    ContactSchedule,
    Footer,
    HomeNotify,
    TopBlog,
    TopStacks
  },
  data() {
    return {
      topBlogs: [
        {
          label: "identity",
          title:
            "Branding an Oregonian coworking startup in a burgeoning small town",
          date: "11.09.19",
          image: require("~/assets/images/image-case1.jpg"),
          link: "#"
        },
        {
          label: "ecommerce",
          title:
            "Launching a Shark Tank brand on Shopify to $130k revenue in 24 hours",
          date: "11.09.19",
          image: require("~/assets/images/image-case2.jpg"),
          link: "#"
        },
        {
          label: "app",
          title:
            "Building a Magento 2 React Progressive Web App store for a foodservice supplier",
          date: "11.09.19",
          image: require("~/assets/images/image-case3.jpg"),
          link: "#"
        }
      ]
    };
  },
  methods: {
    gotoCases: function() {
      window.scrollTo({
        top: 800,
        behavior: "smooth"
      });
    }
  }
};
</script>
