<template>
  <Layout>
    <div>
      <div class="casedetail-hero-section">
        <v-container data-aos="fade-right">
          <h1 class="h1">
            Branding an Oregonian coworking startup in a burgeoning small town
          </h1>
        </v-container>
      </div>
      <v-container class="casedetail-top-section" data-aos="fade-right">
        <v-img
          class="casedetail-top-image"
          :src="$page.case.featuredMedia.sourceUrl"
          width="100%"
          max-height="500"
        ></v-img>
      </v-container>
      <v-container class="casedetail-summary-section" data-aos="fade-left">
        <div class="casedetail-summary-blocks">
          <div class="block-1">
            <div class="summary-title1">Summary</div>
            <p class="summary-text1">
              Vastness is bearable only through love from which we spring
              Hypatia muse about explorations laws of physics. The carbon in our
              apple pies intelligent beings permanence of the stars tendrils of
              gossamer clouds a very small stage in a vast cosmic arena hearts
              of the stars. A very small stage in a vast cosmic arena another
              world the only home we've ever known vanquish the impossible
              emerged into consciousness the only home we've ever known and
              billions upon billions upon billions upon billions upon billions
              upon billions upon billions.
            </p>
          </div>
          <div class="block-2">
            <div>
              <div class="summary-label2">Team</div>
              <div class="summary-title2">Design</div>
            </div>
            <div class="block-4">
              <div class="summary-label4">Team members / roles</div>
              <div>
                <v-avatar size="1.75rem">
                  <g-image src="~/assets/images/image-federico.jpg" />
                </v-avatar>
                <div>
                  <span class="summary-title4">Federico Bernotti</span>
                  <span class="summary-text4"> / Designer</span>
                </div>
              </div>
              <div>
                <v-avatar size="1.75rem">
                  <g-image src="~/assets/images/image-elias.jpg" />
                </v-avatar>
                <div>
                  <span class="summary-title4">Elias Diek</span>
                  <span class="summary-text4"> / Creative Director</span>
                </div>
              </div>
            </div>
          </div>
          <div class="block-3">
            <div>
              <div class="summary-label3">Released</div>
              <div class="summary-title3">December 2019</div>
            </div>
            <div class="block-5">
              <div class="summary-label5">Duration</div>
              <div class="summary-title5">30 Days</div>
            </div>
            <div>
              <span
                v-if="$page.case.casecategory[0]"
                class="quarry-label summary-label"
                >{{ $page.case.casecategory[0].title }}</span
              >
              <span class="summary-date">{{
                $page.case.date | formatDate
              }}</span>
            </div>
          </div>
        </div>
      </v-container>
      <v-container class="casedetail-scroll-section">
        <div class="casedetail-scroll-block">
          <div class="casedetail-scroll-bars">
            <div
              v-for="block in idBlocks"
              :key="block"
              class="casedetail-scroll-bar"
              :class="{ 'is-selected': activeBlock === block }"
            ></div>
            <v-icon
              color="black"
              size="12"
              class="casedetail-scroll-icon"
              @click="goUpBlock()"
            >
              mdi-arrow-up
            </v-icon>
            <v-icon
              color="black"
              size="12"
              class="casedetail-scroll-icon"
              @click="goDownBlock()"
            >
              mdi-arrow-down
            </v-icon>
          </div>
          <div class="casedetail-scroll-anchors">
            <div
              class="casedetail-scroll-anchor"
              :class="{ 'is-selected': activeBlock === 'block1' }"
            >
              <a href="#" v-scroll-to="'#block1'">Courage of our questions</a>
            </div>
            <div
              class="casedetail-scroll-anchor"
              :class="{ 'is-selected': activeBlock === 'block2' }"
            >
              <a href="#" v-scroll-to="'#block2'">Concept</a>
            </div>
            <div
              class="casedetail-scroll-anchor"
              :class="{ 'is-selected': activeBlock === 'block3' }"
            >
              <a href="#" v-scroll-to="'#block3'">Star stuff</a>
            </div>
            <div
              class="casedetail-scroll-anchor"
              :class="{ 'is-selected': activeBlock === 'block4' }"
            >
              <a href="#" v-scroll-to="'#block4'">Harvesting</a>
            </div>
            <div
              class="casedetail-scroll-anchor"
              :class="{ 'is-selected': activeBlock === 'block5' }"
            >
              <a href="#">The terminal</a>
            </div>
            <div
              class="casedetail-scroll-anchor"
              :class="{ 'is-selected': activeBlock === 'block6' }"
            >
              <a href="#">Galaxy rise</a>
            </div>
          </div>
        </div>
        <div
          class="casedetail-description-blocks"
          v-html="$page.case.content"
        ></div>
      </v-container>
      <make-connection />
      <v-container class="cases-cards-section margin-cases-cards">
        <v-row class="justify-center">
          <v-col
            v-for="{ node } in $page.cases.edges"
            :key="node.id"
            xs="12"
            sm="6"
            md="4"
          >
            <g-link :to="'/cases/' + node.id">
              <v-card class="quarry-card">
                <v-img
                  class="align-end"
                  height="27rem"
                  :src="node.featuredMedia.sourceUrl"
                >
                </v-img>
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
        <div class="cases-more">
          <g-link to="/cases">
            <v-btn class="quarry-btn btn-secondary more-cases2">
              More Cases
            </v-btn>
          </g-link>
        </div>
      </v-container>
      <Footer />
    </div>
  </Layout>
</template>

<page-query>
  query Cases($id: ID!) {
    case: wordPressCases(id: $id) {
      title
      date
      content
      featuredMedia {
        sourceUrl
        altText
        mediaDetails {
          width
        }
      }
      author {
        name
        description
        avatars {
          avatar96
        }
      }
      casecategory {
        id
        title
        slug
      }
    }
    cases: allWordPressCases(limit: 2) {
      edges {
        node {
          id
          title
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
import moment from "moment";
import Footer from "../components/Footer";
import MakeConnection from "../components/MakeConnection";

export default {
  metaInfo() {
    return {
      title: this.$page.case.title
    };
  },
  components: {
    Footer,
    MakeConnection
  },
  data() {
    return {
      activeBlock: "block1",
      idBlocks: ["block1", "block2", "block3", "block4", "block5", "block6"],
      topImage: require("~/assets/images/image-case1.jpg")
    };
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    getLabelText: function(key) {
      const result = this.labels.find(item => item.key === key);
      return result ? result.text : key;
    },
    goUpBlock: function() {
      const n = this.idBlocks.indexOf(this.activeBlock);
      if (n > 0) {
        const el = document.getElementById(this.idBlocks[n - 1]);
        if (el)
          window.scrollTo({ top: el.offsetTop - 200, behavior: "smooth" });
      }
    },
    goDownBlock: function() {
      const n = this.idBlocks.indexOf(this.activeBlock);
      if (n < this.idBlocks.length - 1) {
        const el = document.getElementById(this.idBlocks[n + 1]);
        if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
      }
    },
    elementInViewport: function(el) {
      var top = el.offsetTop;
      var height = el.offsetHeight;
      var bottom = top + height;

      while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
      }

      return (
        !(top < window.pageYOffset && bottom < window.pageYOffset) &&
        !(
          top > window.pageYOffset + window.innerHeight &&
          bottom > window.pageYOffset + window.innerHeight
        )
      );
    },
    updatePosition: function() {
      const contentBlock = document.querySelector(
        ".casedetail-description-blocks"
      );
      const conBlock = document.querySelector(".cases-connection-wrapper");
      const scrollBlock = document.querySelector(".casedetail-scroll-block");
      const top = contentBlock.offsetTop;
      if (top < window.pageYOffset + 100 || scrollBlock.offsetTop > top + 100) {
        scrollBlock.style.top = window.pageYOffset + 100 + "px";
      }

      if (
        scrollBlock.offsetTop + scrollBlock.offsetHeight >
        conBlock.offsetTop - 150
      ) {
        scrollBlock.style.top =
          conBlock.offsetTop - scrollBlock.offsetHeight - 150 + "px";
      }
    },
    handleScroll: function() {
      this.updatePosition();
      const elementsInViewArray = this.idBlocks.map(id => {
        const el = document.getElementById(id);
        if (el && this.elementInViewport(el)) {
          return id;
        }
      });

      this.activeBlock = elementsInViewArray.find(id => id);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
    const scrollBlock = document.querySelector(".casedetail-scroll-block");
    const contentBlock = document.querySelector(
      ".casedetail-description-blocks"
    );
    scrollBlock.style.top = contentBlock.offsetTop;
  },
  filters: {
    formatDate: function(date) {
      if (!date) {
        return "";
      }
      return moment(date).format("MM.DD.YY");
    }
  }
};
</script>
