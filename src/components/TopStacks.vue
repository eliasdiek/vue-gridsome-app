<template>
  <v-container align-center class="quarry-section stacks-section">
    <h3 class="text-center h3">Our stack runs deep</h3>
    <v-layout class="stacks-wrapper" data-aos="fade-right">
      <v-flex v-for="(item, i) in stacks" d-flex :key="i">
        <v-img
          contain
          :title="item.title"
          :src="item.image"
          :alt="item.title"
          aspect-ratio="1"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      stacks: [
        {
          title: "React.js",
          image: require("~/assets/images/icon-stack-react.svg")
        },
        {
          title: "Vue.js",
          image: require("~/assets/images/icon-stack-vue.png")
        },
        {
          title: "Redux",
          image: require("~/assets/images/icon-stack-redux.svg")
        },
        {
          title: "Node.js",
          image: require("~/assets/images/icon-stack-node.svg")
        },
        {
          title: "JSON",
          image: require("~/assets/images/icon-stack-json.svg")
        },
        {
          title: "GraphQL",
          image: require("~/assets/images/icon-stack-graphql.svg")
        },
        {
          title: "Mongo",
          image: require("~/assets/images/icon-stack-mongo.svg")
        },
        {
          title: "Magento",
          image: require("~/assets/images/icon-stack-magento.svg")
        },
        {
          title: "Shopify",
          image: require("~/assets/images/icon-stack-shopify.svg")
        },
        {
          title: "Laravel",
          image: require("~/assets/images/icon-stack-laravel.svg")
        },
        {
          title: "WordPress",
          image: require("~/assets/images/icon-stack-wordpress.svg")
        },
        {
          title: "Woocommerce",
          image: require("~/assets/images/icon-stack-woocommerce.svg")
        }
      ]
    };
  }
};
</script>
