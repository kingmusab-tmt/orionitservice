module.exports = {
  siteUrl: "https://www.orionitservice.com",
  generateRobotsTxt: false, // robots.txt is managed manually in /public
  sitemapSize: 7000,
  exclude: ["/404", "/admin/*", "/private/*", "/api/*"],
  outDir: "public",
  transform: async (config, path) => {
    // Set appropriate priorities and change frequencies per path type
    const priorityMap = {
      "/": { priority: 1.0, changefreq: "weekly" },
      "/services": { priority: 0.9, changefreq: "weekly" },
      "/contact": { priority: 0.9, changefreq: "monthly" },
      "/free-consultation": { priority: 0.9, changefreq: "monthly" },
      "/get-quote": { priority: 0.9, changefreq: "monthly" },
    };

    const isServicePage = path.startsWith("/services/");
    const defaults = priorityMap[path] || {
      priority: isServicePage ? 0.85 : 0.7,
      changefreq: isServicePage ? "monthly" : "monthly",
    };

    return {
      loc: path,
      changefreq: defaults.changefreq,
      priority: defaults.priority,
      lastmod: new Date().toISOString().split("T")[0],
    };
  },
};
