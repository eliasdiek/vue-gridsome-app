<template>
  <Layout>
    <div class="home">
      <v-container class="quarry-container">
        <v-container
          class="quarry-section hero-section"
          data-aos="fade-right"
          data-aos-once="true"
        >
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
          <v-list class="case-list">
            <template v-for="(item, index) in selectedCases">
              <top-blog :key="index" :blog="item.node" />
              <v-divider
                class="top-blog-divider"
                v-if="index + 1 < selectedCases.length"
                :key="`divider-${index}`"
              ></v-divider>
            </template>
          </v-list>
          <v-btn
            class="quarry-btn btn-primary more-cases"
            @click="
              () => {
                $router.push('/cases');
              }
            "
            >More Cases</v-btn
          >
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

<static-query>
  query {
    allWordPressCasecategory(limit: 100) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
</static-query>

<page-query>
  query {
    cases: allWordPressCases(sortBy: "date", order: DESC, limit: 3) {
      edges {
        node {
          id
          title
          date
          featuredMedia {
            id
            sourceUrl
          }
          casecategory {
            id
            title
            slug
          }
        }
      }
    }
  }
</page-query>

<script>
import BlogCarousel from "../components/BlogCarousel";
import ContactSchedule from "../components/ContactSchedule";
import Footer from "../components/Footer";
import HomeNotify from "../components/HomeNotify";
import TopBlog from "../components/TopBlog";
import TopStacks from "../components/TopStacks";

export default {
  metaInfo: {
    title: "Web development and Optimization | Diek Technologies LLC"
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
      selectedCases: null
    };
  },
  methods: {
    gotoCases: function() {
      window.scrollTo({
        top: 1080,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.selectedCases = this.$page.cases.edges;
    console.log("[selectedCases]", this.selectedCases);
  }
};
</script>
