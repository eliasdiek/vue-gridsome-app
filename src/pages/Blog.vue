<template>
  <Layout>
    <div class="blog">
      <div class="services-hero-section">
        <v-container data-aos="fade-right">
          <h1 class="h1">
            Blog
          </h1>
          <p class="hero-text">
            Occassionally we arrange words about the things that we do and how
            we do them, with a splash of trends in web technology, and digital
            product operations.
          </p>
        </v-container>
      </div>
      <categories-widget
        :categories="$static.allWordPressCategory.edges"
        :selected="selectedCategory"
        :onChange="changeCategory"
      />
      <v-container class="cases-cards-section margin-cases-cards">
        <v-row>
          <v-col
            v-for="{ node } in getShowPosts"
            :key="node.id"
            xs="12"
            sm="6"
            md="4"
          >
            <g-link :to="'/blog/' + node.id">
              <v-card class="quarry-card">
                <v-img
                  class="align-end"
                  aspect-ratio="1"
                  :src="node.featuredMedia.sourceUrl"
                />
                <v-card-subtitle>
                  <div class="quarry-label-wrapper">
                    <span class="quarry-label" :class="node.categories[0].slug">
                      {{ node.categories[0].title }}
                    </span>
                  </div>
                </v-card-subtitle>
                <v-card-text class="quarry-card-text">
                  <div v-html="node.title"></div>
                </v-card-text>
              </v-card>
            </g-link>
          </v-col>
        </v-row>
        <div v-show="hasNextPage" class="cases-more">
          <v-btn class="quarry-btn more-cases" @click="loadMore()">
            Load More
          </v-btn>
        </div>
      </v-container>
      <make-connection />
      <Footer />
    </div>
  </Layout>
</template>

<static-query>
  query {
    allWordPressCategory(limit: 100) {
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
    posts: allWordPressPost(limit: 1000) {
      edges {
        node {
          id
          title
          featuredMedia {
            id
            sourceUrl
          }
          categories {
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
import axios from "axios";
import Footer from "../components/Footer";
import MakeConnection from "../components/MakeConnection";
import CategoriesWidget from "../components/CategoriesWidget";
import { mapGetters, mapMutations } from "vuex";

let vm = this;

export default {
  metaInfo: {
    title: "Blog | Quarry Design Group"
  },

  components: {
    Footer,
    MakeConnection,
    CategoriesWidget
  },

  data() {
    return {
      page: 1,
      per_page: 9,
      selectedCategory: "all",
      images: {},
      selectedPosts: [],
      categoryShouldbeUpdated: false
    };
  },

  computed: {
    getShowPosts: function() {
      return this.selectedPosts.slice(0, this.page * this.per_page);
    },
    hasNextPage: function() {
      return this.selectedPosts.length > this.page * this.per_page;
    }
  },

  mounted() {
    this.changePerpage();
  },

  methods: {
    changePerpage: function() {
      const vm = this;
      let windowWidth = document.documentElement.clientWidth;
      if (windowWidth < 960) {
        vm.per_page = 6;
      } else {
        vm.per_page = 9;
      }

      window.addEventListener("resize", () => {
        windowWidth = document.documentElement.clientWidth;
        if (windowWidth < 960) {
          vm.per_page = 6;
        } else {
          vm.per_page = 9;
        }
      });
    },
    changeCategory: function(category) {
      this.selectedCategory = category;
      this.page = 1;
      if (category === "all") {
        this.selectedPosts = this.$page.posts.edges;
      } else {
        const result = this.$page.posts.edges.filter(({ node }) => {
          const n = node.categories.length;
          for (let i = 0; i < n; i++) {
            if (node.categories[i].id === category) return true;
          }
          return false;
        });
        this.selectedPosts = result ? result : [];
      }
    },
    loadMore: function() {
      this.page += 1;
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.path.includes("blog")) {
        let category = vm.$store.state.activeCategory;
        vm.changeCategory(category);
      } else {
        vm.selectedPosts = vm.$page.posts.edges;
      }
    });
  }
};
</script>
