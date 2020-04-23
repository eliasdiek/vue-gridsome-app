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
        baseUrl: "https://wordpress.quarry.team",
        typeName: "WordPress"
      }
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Quarry",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        disableServiceWorker: false,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
        shortName: "Quarry",
        themeColor: "#000000",
        backgroundColor: "#000000",
        icon: "src/favicon.png", // must be provided like 'src/favicon.png'
        msTileImage: "",
        msTileColor: "#666600"
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
