module.exports = {
  siteMetadata: {
    title: "Central Valley Engineering & Asphalt, Inc.",
    description:
      "Established in 2000, Central Valley Engineering & Asphalt is a regional construction leader. We exist to build smooth, long-lasting surfaces that improve the curb appeal and value of your property while adding the durability and practicality your surfaces need.",
    url: "https://cenvalley.com",
    image: "src/images/009.jpg"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-react-leaflet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Central Valley Engineering & Asphalt, Inc.",
        short_name: "Central Valley Engineering",
        start_url: "/",
        background_color: "#252525",
        theme_color: "#FFFF63",
        display: "standalone",
        icon: "src/images/logo.svg"
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: "png", // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50
      }
    }
  ]
};
