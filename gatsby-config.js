module.exports = {
  siteMetadata: {
    title: `All Posts`,
    author: {
      name: `Rohit Dhatrak`,
      summary: `Hello, I’m Rohit Dhatrak, a developer skilled in JavaScript and React. I have interned at Wyzr as a full-stack developer where I have worked with Next.js, ChakraUI, Node and MongoDB. I’m a Teaching Assistant at neoG which is a coding boot camp where I’m responsible for conducting doubt solving sessions and reviewing projects. I like to explore and learn new web technologies so I have made some projects using TypeScript, GraphQL, Redux and React Native. I’m also a part of various online communities where I have hosted book clubs on JavaScript.`,
    },
    description: `Hello, I’m Rohit Dhatrak, a developer skilled in JavaScript and React. I have interned at Wyzr as a full-stack developer where I have worked with Next.js, ChakraUI, Node and MongoDB. I’m a Teaching Assistant at neoG which is a coding boot camp where I’m responsible for conducting doubt solving sessions and reviewing projects. I like to explore and learn new web technologies so I have made some projects using TypeScript, GraphQL, Redux and React Native. I’m also a part of various online communities where I have hosted book clubs on JavaScript.`,
    siteUrl: `https://rohitdhatrak.com`,
    social: {
      twitter: `rohit_dhatrak_`,
      linkedin: `rohitdhatrak`,
      github: `RohitDhatrak`,
      instagram: `rohit_dhatrak_`,
      link: "https://rohitdhatrak.bio.link",
    },
    image: "/profile-pic.jpg",
    keywords: [
      "rohit",
      "dhatrak",
      "blog",
      "coding",
      "books",
      "frontend",
      "backend",
      "javascript",
      "react",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168216839-4`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohit Dhatrak`,
        short_name: `RD`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#005b99`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
