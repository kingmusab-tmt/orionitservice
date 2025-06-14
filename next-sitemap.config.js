module.exports = {
  siteUrl: "https://orionitservice.com", // Replace with your domain
  generateRobotsTxt: true, // Generates robots.txt automatically
  sitemapSize: 7000, // Split large sitemaps into multiple files
  exclude: [
    "/server-sitemap.xml", // Exclude next.js internal files
    "/404",
    "/admin/*", // Exclude admin routes
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"], // Block sensitive routes
      },
    ],
    additionalSitemaps: [
      "https://orionitservice.com/server-sitemap.xml", // Dynamic routes if needed
    ],
  },
};
