<template>
  <Layout>
    <div>
      <v-container class="casedetail-top-section" data-aos="fade-right">
        <v-img
          class="casedetail-top-image"
          :src="$page.post.featuredMedia.sourceUrl"
          width="100%"
          max-height="500"
        />
      </v-container>
      <v-container class="blogdetail-summary-section" data-aos="fade-left">
        <div class="blogdetail-summary-blocks">
          <div class="blogdetail-summary-title" v-html="$page.post.title" />
          <div class="blogdetail-summary-author">
            <v-avatar size="4rem">
              <g-image :src="$page.post.author.avatars.avatar96" />
            </v-avatar>
            <div>
              <div class="author-name">{{ $page.post.author.name }}</div>
              <div
                class="author-position"
                v-html="$page.post.author.description"
              ></div>
            </div>
          </div>

          <div class="blogdetail-social-block">
            <div class="quarry-label-wrapper">
              <span
                class="quarry-label"
                :class="$page.post.categories[0].slug"
                @click="backToBlog"
              >
                {{ $page.post.categories[0].title }}
              </span>
            </div>
            <div class="blogdetail-blog-date">
              {{ $page.post.date | formatDate }}
            </div>
            <div class="blogdetail-social-icons">
              <a href="javascript:void(0)" @click="sharePost('facebook')">
                <g-image
                  src="~/assets/images/icon-facebook.svg"
                  alt="facebook"
                  height="1.25rem"
                />
              </a>
              <a href="javascript:void(0)" @click="sharePost('twitter')">
                <g-image
                  src="~/assets/images/icon-twitter.svg"
                  alt="twitter"
                  height="1.25rem"
                />
              </a>
              <a href="javascript:void(0)" @click="copyLink()">
                <g-image
                  src="~/assets/images/icon-link-variant.svg"
                  alt="link-variant"
                  height="1.25rem"
                />
                <span
                  class="m-tooltip"
                  transition="fade-transition"
                  v-if="linkCopied"
                  >{{ msg }}</span
                >
              </a>
            </div>
          </div>
        </div>
      </v-container>

      <v-container class="blogdetail-content-section">
        <div class="blogdetail-content-block" v-html="$page.post.content"></div>
      </v-container>
      <v-container class="cases-cards-section margin-cases-cards">
        <div class="more-blogs-background"></div>
        <v-row class="justify-center">
          <v-col
            v-for="{ node } in $page.posts.edges"
            :key="node.id"
            xs="12"
            sm="6"
            md="4"
          >
            <g-link :to="'/blog/' + node.id">
              <v-card class="quarry-card">
                <v-img
                  class="align-end"
                  height="27rem"
                  :src="node.featuredMedia.sourceUrl"
                >
                </v-img>
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
        <div class="cases-more">
          <g-link to="/blog">
            <v-btn class="quarry-btn btn-secondary more-cases2">
              More Blogs
            </v-btn>
          </g-link>
        </div>
      </v-container>
      <email-cta />
      <make-connection />
      <Footer />
    </div>
  </Layout>
</template>

<page-query>
  query Post($id: ID!) {
    post: wordPressPost(id: $id) {
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
      categories {
        id
        title
        slug
      }
      author {
        name
        description
        avatars {
          avatar96
        }
      }
    }
    posts: allWordPressPost(limit: 2) {
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
import moment from "moment";
import Footer from "../components/Footer";
import MakeConnection from "../components/MakeConnection";
import EmailCta from "../components/EmailCta";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Footer,
    MakeConnection,
    EmailCta
  },

  data() {
    return {
      pageUrl: "",
      linkCopied: false,
      msg: ""
    };
  },

  methods: {
    ...mapMutations(["setActiveCategory"]),
    backToBlog() {
      let categoryId = this.$page.post.categories[0].id;
      this.setActiveCategory(categoryId);
      this.$router.push("/blog");
    },
    sharePost(provider) {
      const pageUrl = document.URL;
      if (provider === "facebook") {
        const url = "https://facebook.com/sharer/sharer.php?u=" + pageUrl;
        this.PopupCenter(url, "Facebook", 600, 400);
      } else if (provider === "twitter") {
        const url = "https://twitter.com/share?url=" + pageUrl;
        this.PopupCenter(url, "Facebook", 600, 400);
      }
    },
    PopupCenter(url, title, w, h) {
      const dualScreenLeft =
        window.screenLeft != undefined ? window.screenLeft : screen.left;
      const dualScreenTop =
        window.screenTop != undefined ? window.screenTop : screen.top;

      const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
      const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

      var left = width / 2 - w / 2 + dualScreenLeft;
      var top = height / 2 - h / 2 + dualScreenTop;
      var newWindow = window.open(
        url,
        title,
        "scrollbars=yes, width=" +
          w +
          ", height=" +
          h +
          ", top=" +
          top +
          ", left=" +
          left
      );

      if (window.focus) {
        newWindow.focus();
      }
    },
    copyLink() {
      const textArea = document.createElement("textarea");
      textArea.value = document.URL;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        this.msg = successful ? "Link copied!" : "Link can't be copied";
        this.linkCopied = true;
        setTimeout(() => {
          this.linkCopied = false;
        }, 1000);
      } catch (err) {
        this.msg = "Link can't be copied";
        this.linkCopied = true;
        setTimeout(() => {
          this.linkCopied = false;
        }, 1000);
      }

      document.body.removeChild(textArea);
    }
  },

  mounted() {
    this.pageUrl = window.location.href;
  },

  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },

  filters: {
    formatDate: function(date) {
      if (!date) {
        return "";
      }
      return moment(date).format("MM.DD.YYYY");
    }
  }
};
</script>
