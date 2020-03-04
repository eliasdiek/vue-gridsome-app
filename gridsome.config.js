// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Quarry",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "https://wordpress.dev.quarry.team",
        typeName: "WordPress"
      }
    }
  ],
  chainWebpack(config, { isServer }) {
    if (isServer) {
      config.externals([/^(vue|vue-router|vue-meta)$/]);
    }
  },
  templates: {
    WordPressPost: [
      {
        path: "/blog/:id",
        component: "./src/templates/WordPressPost.vue"
      }
    ],
    WordPressCases: [
      {
        path: "/cases/:id",
        component: "./src/templates/WordPressCases.vue"
      }
    ]
  }
};
