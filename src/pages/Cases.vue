<template>
  <Layout>
    <div class="cases">
      <div class="services-hero-section">
        <v-container data-aos="fade-right">
          <h1 class="h1">
            Case Studies
          </h1>
          <p class="hero-text">
            We have had the opportunity to help some amazing organizations
            accomplish extraordinary and meaningful goals.
          </p>
          <p class="hero-text">
            Here's some examples.
          </p>
        </v-container>
      </div>
      <categories-widget
        :categories="$static.allWordPressCasecategory.edges"
        :selected="selectedCategory"
        :onChange="changeCategory"
      />
      <v-container class="cases-cards-section margin-cases-cards">
        <v-row>
          <v-col
            v-for="{ node } in getShowCases"
            :key="node.id"
            xs="12"
            sm="6"
            md="4"
          >
            <g-link :to="'/cases/' + node.id">
              <v-card class="quarry-card">
                <v-img
                  class="align-end"
                  aspect-ratio="1"
                  :src="node.featuredMedia.sourceUrl"
                />
                <v-card-subtitle>
                  <div class="quarry-label-wrapper">
                    <span
                      v-if="node.casecategory[0]"
                      class="quarry-label"
                      :class="node.casecategory[0].slug"
                    >
                      {{ node.casecategory[0].title }}
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
    cases: allWordPressCases(limit: 1000) {
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
import Footer from "../components/Footer";
import MakeConnection from "../components/MakeConnection";
import CategoriesWidget from "../components/CategoriesWidget";

export default {
  metaInfo: {
    title: "Cases | Diek Technologies LLC"
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
      selectedCases: []
    };
  },

  computed: {
    getShowCases: function() {
      return this.selectedCases.slice(0, this.page * this.per_page);
    },
    hasNextPage: function() {
      return this.selectedCases.length > this.page * this.per_page;
    }
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
      this.selectedCases = this.$page.cases.edges;
      if (category === "all") {
        this.selectedCases = this.$page.cases.edges;
      } else {
        const result = this.$page.cases.edges.filter(({ node }) => {
          const n = node.casecategory.length;
          for (let i = 0; i < n; i++) {
            if (node.casecategory[i].id === category) return true;
          }
          return false;
        });
        this.selectedCases = result ? result : [];
      }
    },
    loadMore: function() {
      this.page += 1;
    }
  },

  mounted() {
    this.selectedCases = this.$page.cases.edges;
    this.changePerpage();
  }
};
</script>
