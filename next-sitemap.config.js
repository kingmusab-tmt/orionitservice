const fs = require("fs");
const path = require("path");

// Blog posts carry their real dates in their BlogPosting JSON-LD; use those
// for <lastmod>. Other pages omit it rather than claiming every build is an
// update, which teaches search engines to ignore the field.
function blogLastmod(urlPath) {
  const match = urlPath.match(/^\/blog\/([^/]+)$/);
  if (!match) return undefined;
  try {
    const source = fs.readFileSync(
      path.join(__dirname, "app", "blog", match[1], "page.tsx"),
      "utf8"
    );
    const date =
      source.match(/dateModified:\s*"([^"]+)"/) ||
      source.match(/datePublished:\s*"([^"]+)"/);
    return date ? date[1] : undefined;
  } catch {
    return undefined;
  }
}

module.exports = {
  siteUrl: "https://www.orionitservice.com",
  generateRobotsTxt: false, // robots.txt is managed manually in /public
  sitemapSize: 7000,
  exclude: ["/404", "/admin/*", "/private/*", "/api/*", "/tickets", "/tickets/*"],
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
      changefreq: "monthly",
    };

    return {
      loc: path,
      changefreq: defaults.changefreq,
      priority: defaults.priority,
      lastmod: blogLastmod(path),
    };
  },
};
