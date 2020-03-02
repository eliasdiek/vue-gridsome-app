<template>
  <v-content class="quarry-section carousel-section">
    <v-carousel
      hide-delimiters
      cycle
      :show-arrows="false"
      v-model="carouselNumber"
    >
      <v-carousel-item v-for="(item, i) in carousels" :key="i">
        <v-container>
          <v-layout class="carousel-image"><v-img :src="item.image"/></v-layout>
          <v-flex class="carousel-content">
            <p class="carousel-title">&ldquo;{{ item.content }}&rdquo;</p>
            <v-list three-line class="carousel-item">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="item.avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="user-name">
                    {{ item.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="user-role">
                    {{ item.role }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="user-position">
                    {{ item.position }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-flex>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-container class="carousel-controls">
      <div class="carousel-number">
        {{ carouselNumber + 1 + "/" + carousels.length }}
      </div>
      <div class="carousel-delimiters">
        <span class="carousel-timer" :class="{ reset: reset }"></span>
      </div>
      <div class="carousel-buttons d-flex">
        <v-icon color="black" @click="prevCarousel">
          mdi-chevron-left
        </v-icon>
        <v-icon color="black" @click="nextCarousel">
          mdi-chevron-right
        </v-icon>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      carouselNumber: 0,
      reset: false,
      carousels: [
        {
          name: "Shervin Mohseni",
          role: "Founder",
          position: "The Source of All. We R CBD",
          image: require("~/assets/images/image-carousel1.jpg"),
          avatar: require("~/assets/images/image-shervin.jpeg"),
          content:
            "Branding an Oregonian coworking startup in a burgeoning small town"
        },
        {
          name: "Shervin Mohseni",
          role: "Founder",
          position: "The Source of All. We R CBD",
          image: require("~/assets/images/image-carousel1.jpg"),
          avatar: require("~/assets/images/image-shervin.jpeg"),
          content:
            "Branding an Oregonian coworking startup in a burgeoning small town"
        },
        {
          name: "Shervin Mohseni",
          role: "Founder",
          position: "The Source of All. We R CBD",
          image: require("~/assets/images/image-carousel1.jpg"),
          avatar: require("~/assets/images/image-shervin.jpeg"),
          content:
            "Branding an Oregonian coworking startup in a burgeoning small town"
        },
        {
          name: "Shervin Mohseni",
          role: "Founder",
          position: "The Source of All. We R CBD",
          image: require("~/assets/images/image-carousel1.jpg"),
          avatar: require("~/assets/images/image-shervin.jpeg"),
          content:
            "Branding an Oregonian coworking startup in a burgeoning small town"
        }
      ]
    };
  },
  watch: {
    carouselNumber: function() {
      this.reset = true;
      setTimeout(() => {
        this.reset = false;
      }, 1);
    }
  },
  methods: {
    prevCarousel: function() {
      if (this.carouselNumber === 0) {
        this.carouselNumber = this.carousels.length;
      } else {
        this.carouselNumber = this.carouselNumber - 1;
      }
    },
    nextCarousel: function() {
      if (this.carouselNumber === this.carousels.length) {
        this.carouselNumber = 0;
      } else {
        this.carouselNumber = this.carouselNumber + 1;
      }
    }
  }
};
</script>
