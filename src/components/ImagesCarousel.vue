<template>
  <div class="images-carousel-section">
    <v-container class="carousel-wrapper">
      <v-carousel
        hide-delimiters
        cycle
        :show-arrows="false"
        v-model="carouselNumber"
      >
        <v-carousel-item v-for="(item, i) in images" :key="i">
          <v-img :src="item.image" />
        </v-carousel-item>
      </v-carousel>
      <v-container class="carousel-controls">
        <div class="carousel-number">
          {{ carouselNumber + 1 + "/" + images.length }}
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
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    images: Array
  },
  data() {
    return {
      carouselNumber: 0,
      reset: false
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
        this.carouselNumber = this.images.length;
      } else {
        this.carouselNumber = this.carouselNumber - 1;
      }
    },
    nextCarousel: function() {
      if (this.carouselNumber === this.images.length) {
        this.carouselNumber = 0;
      } else {
        this.carouselNumber = this.carouselNumber + 1;
      }
    }
  }
};
</script>
