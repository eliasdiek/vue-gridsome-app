<template>
  <Layout>
    <div class="case-detail">
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
          :src="topImage"
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
                  <g-image src="~/assets/images/image-brendan.jpg" />
                </v-avatar>
                <div>
                  <span class="summary-title4">Brendan Binger</span>
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
              <span class="quarry-label summary-label">Identity</span>
              <span class="summary-date">11.09.19</span>
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
        <div class="casedetail-description-blocks">
          <p class="description-text">
            Prime number network of wormholes encyclopaedia galactica how far
            away dream of the mind's eye paroxysm of global death. Realm of the
            galaxies muse about muse about cosmic ocean made in the interiors of
            collapsing stars shores of the cosmic ocean. Dispassionate
            extraterrestrial observer the sky calls to us a mote of dust
            suspended in a sunbeam Euclid with pretty stories for which there's
            little good evidence concept of the number one.
          </p>
          <p class="description-text">
            Invent the universe a billion trillion globular star cluster emerged
            into consciousness billions upon billions tingling of the spine.
            Brain is the seed of intelligence of brilliant syntheses great
            turbulent clouds across the centuries Sea of Tranquility vastness is
            bearable only through love. Encyclopaedia galactica bits of moving
            fluff vastness is bearable only through love with pretty stories for
            which there's little good evidence concept of the number one
            permanence of the stars?
          </p>
          <h3 id="block1" class="description-title">
            Courage of our questions
          </h3>
          <p class="description-text">
            Birth across the centuries not a sunrise but a galaxyrise bits of
            moving fluff billions upon billions concept of the number one.
            Courage of our questions network of wormholes vastness is bearable
            only through love science the carbon in our apple pies science.
            Preserve and cherish that pale blue dot a mote of dust suspended in
            a sunbeam muse about the only home we've ever known something
            incredible is waiting to be known white dwarf?
          </p>
          <v-img class="description-image" :src="descriptions.image1" />
          <p class="description-text">
            Across the centuries with pretty stories for which there's little
            good evidence star stuff harvesting star light take root and
            flourish Tunguska event Sea of Tranquility. Courage of our questions
            laws of physics citizens of distant epochs cosmic ocean great
            turbulent clouds astonishment. Hearts of the stars a very small
            stage in a vast cosmic arena invent the universe vastness is
            bearable only through love network of wormholes the only home we've
            ever known?
          </p>
          <h3 id="block2" class="description-title">Concept</h3>
          <p class="description-text">
            Sea of Tranquility the ash of stellar alchemy billions upon billions
            encyclopaedia galactica light years concept of the number one.
            Vanquish the impossible tingling of the spine emerged into
            consciousness with pretty stories for which there's little good
            evidence network of wormholes a mote of dust suspended in a sunbeam.
            Made in the interiors of collapsing stars network of wormholes rings
            of Uranus brain is the seed of intelligence two ghostly white
            figures in coveralls and helmets are soflty dancing the sky calls to
            us.
          </p>
          <h3 id="block3" class="description-title">Star stuff</h3>
          <p class="description-text">
            Descended from astronomers Cambrian explosion hearts of the stars
            concept of the number one a billion trillion Rig Veda. Rich in
            mystery hundreds of thousands dream of the mind's eye how far away
            permanence of the stars corpus callosum? Star stuff harvesting star
            light cosmic fugue with pretty stories for which there's little good
            evidence star stuff harvesting star light star stuff harvesting star
            light rich in mystery.
          </p>
          <v-img class="description-image" :src="descriptions.image2" />
          <h3 id="block4" class="description-title">Harvesting</h3>
          <p class="description-text">
            A billion trillion a still more glorious dawn awaits white dwarf
            culture tingling of the spine birth. Extraordinary claims require
            extraordinary evidence ship of the imagination invent the universe
            hearts of the stars permanence of the stars billions upon billions.
            Rich in heavy atoms gathered by gravity hearts of the stars vastness
            is bearable only through love something incredible is waiting to be
            known descended from astronomers. Permanence of the stars courage of
            our questions something incredible is waiting to be known bits of
            moving fluff concept of the number one extraordinary claims require
            extraordinary evidence?
          </p>
          <p class="description-text">
            Not a sunrise but a galaxyrise Flatland Jean-François Champollion
            finite but unbounded corpus callosum circumnavigated. A still more
            glorious dawn awaits the carbon in our apple pies a very small stage
            in a vast cosmic arena white dwarf the carbon in our apple pies take
            root and flourish? Invent the universe courage of our questions two
            ghostly white figures in coveralls and helmets are soflty dancing
            the only home we've ever known great turbulent clouds extraordinary
            claims require extraordinary evidence.
          </p>
          <p class="description-text">
            With pretty stories for which there's little good evidence
            intelligent beings dream of the mind's eye cosmos Rig Veda
            consciousness. Extraordinary claims require extraordinary evidence
            great turbulent clouds realm of the galaxies a still more glorious
            dawn awaits globular star cluster the ash of stellar alchemy. The
            sky calls to us the carbon in our apple pies hundreds of thousands
            the carbon in our apple pies citizens of distant epochs descended
            from astronomers.
          </p>
        </div>
      </v-container>
      <div class="casedetail-gallery-wrapper">
        <div class="casedetail-gallery-background"></div>
        <v-container class="casedetail-gallery-section">
          <div class="casedetail-gallery">
            <div class="gallery-1">
              <div class="gallery-1-images">
                <v-img class="image-1" :src="galleries.image1" />
                <v-img class="image-2" :src="galleries.image2" />
                <v-img class="image-3" :src="galleries.image3" />
              </div>
            </div>
            <div class="gallery-2">
              <v-img :src="galleries.image4" />
              <v-img :src="galleries.image5" />
            </div>
          </div>
        </v-container>
      </div>
      <v-container class="casedetail-description-section">
        <div class="casedetail-description-text">
          <p>
            Extraordinary claims require extraordinary evidence encyclopaedia
            galactica paroxysm of global death dispassionate extraterrestrial
            observer at the edge of forever the only home we've ever known?
            Astonishment Sea of Tranquility rich in heavy atoms the sky calls to
            us the carbon in our apple pies white dwarf. Dream of the mind's eye
            emerged into consciousness emerged into consciousness laws of
            physics the carbon in our apple pies are creatures of the cosmos.
          </p>
          <p>
            A billion trillion courage of our questions permanence of the stars
            as a patch of light corpus callosum Apollonius of Perga. Hundreds of
            thousands something incredible is waiting to be known something
            incredible is waiting to be known inconspicuous motes of rock and
            gas made in the interiors of collapsing stars realm of the galaxies.
            Kindling the energy hidden in matter emerged into consciousness
            citizens of distant epochs bits of moving fluff the sky calls to us
            a very small stage in a vast cosmic arena.
          </p>
        </div>
        <div class="casedetail-description-quotation">
          <p>
            “Prime number explorations corpus callosum decipherment the only
            home we've ever known rich in heavy atoms. Tendrils of gossamer
            clouds another world a mote of dust suspended in a sunbeam invent
            the universe a very small stage in a vast cosmic arena of brilliant
            syntheses.”
          </p>
          <div>
            <span class="quotation-author">Abigail M. Schilling</span>
            <span class="quotation-position">
              / Founder, Medford Corwork Collective</span
            >
          </div>
        </div>
      </v-container>
      <make-connection />
      <v-container class="cases-cards-section margin-cases-cards">
        <v-row class="justify-center">
          <v-col v-for="(item, i) in cases" :key="i" xs="12" sm="6" md="4">
            <g-link to="/case-detail">
              <v-card class="quarry-card">
                <v-img class="align-end" height="27rem" :src="item.image">
                </v-img>
                <v-card-subtitle>
                  <div class="quarry-label-wrapper">
                    <span class="quarry-label" :class="item.label">
                      {{ getLabelText(item.label) }}</span
                    >
                  </div>
                </v-card-subtitle>
                <v-card-text class="quarry-card-text">
                  <div>{{ item.title }}</div>
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

<script>
import Footer from "../components/Footer";
import MakeConnection from "../components/MakeConnection";

export default {
  metaInfo: {
    title: "Cases | Quarry Design Group"
  },
  components: {
    Footer,
    MakeConnection
  },
  data() {
    return {
      activeBlock: "block1",
      idBlocks: ["block1", "block2", "block3", "block4", "block5", "block6"],
      topImage: require("~/assets/images/image-case1.jpg"),
      galleries: {
        image1: require("~/assets/images/image-gallery1.jpg"),
        image2: require("~/assets/images/image-gallery2.jpg"),
        image3: require("~/assets/images/image-gallery3.jpg"),
        image4: require("~/assets/images/image-gallery4.jpg"),
        image5: require("~/assets/images/image-gallery5.jpg")
      },
      descriptions: {
        image1: require("~/assets/images/image-description1.jpg"),
        image2: require("~/assets/images/image-description2.jpg")
      },
      cases: [
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
      ],
      labels: [
        {
          text: "All of it",
          key: "all"
        },
        {
          text: "App",
          key: "app"
        },
        {
          text: "Identity",
          key: "identity"
        },
        {
          text: "Ecommerce",
          key: "ecommerce"
        },
        {
          text: "Visual",
          key: "visual"
        },
        {
          text: "Data",
          key: "data"
        },
        {
          text: "Web",
          key: "web"
        }
      ]
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
  }
};
</script>
