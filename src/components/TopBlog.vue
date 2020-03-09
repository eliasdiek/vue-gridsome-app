<template>
  <g-link :to="'/cases/' + blog.id">
    <v-layout class="top-blog-item" data-aos="fade-right" data-aos-once="true">
      <div class="blog-content">
        <span class="blog-label" v-if="blog.casecategory[0]" :class="blog.casecategory[0].slug">{{ blog.casecategory[0].title }}</span>
        <div class="blog-title">{{ blog.title }}</div>
        <v-spacer />
        <div class="blog-date">{{ blog.date | formatDate }}</div>
      </div>
      <v-img class="blog-image" aspect-ratio="1.85" :src="blog.featuredMedia.sourceUrl" />
    </v-layout>
  </g-link>
</template>

<script>
import moment from "moment";

export default {
  props: {
    blog: Object
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
