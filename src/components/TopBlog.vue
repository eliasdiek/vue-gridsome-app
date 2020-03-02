<template>
  <a :href="blog.link" target="_blank">
    <v-layout class="top-blog-item" data-aos="fade-right">
      <div class="blog-content">
        <span class="blog-label" :class="blog.label">{{ blog.label }}</span>
        <div class="blog-title">{{ blog.title }}</div>
        <v-spacer />
        <div class="blog-date">{{ blog.date }}</div>
      </div>
      <v-img class="blog-image" aspect-ratio="1.85" :src="blog.image" />
    </v-layout>
  </a>
</template>

<script>
export default {
  props: {
    blog: Object
  }
};
</script>
