// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "./content/blog/**/*.md",
      },
    },
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000,
        contentTypes: ["post", "tag", "general"],
        // singleTypes: ["general"],
        // typeName: 'Strapi',
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
  ],
  templates: {
    StrapiPost: [
      {
        path: "/post/:id",
        component: "./src/templates/Post.vue",
      },
    ],
    StrapiTag: [
      {
        path: "/tag/:id",
        component: "./src/templates/Tag.vue",
      },
    ],
  },
};
