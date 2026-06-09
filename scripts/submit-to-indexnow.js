#!/usr/bin/env node

/**
 * Script to submit all URLs from sitemap to IndexNow
 * Usage: node scripts/submit-to-indexnow.js [--domain yourdomain.com]
 *
 * This script:
 * 1. Reads the sitemap.xml
 * 2. Extracts all URLs
 * 3. Submits them to Bing's IndexNow API
 *
 * Run after build: npm run build && node scripts/submit-to-indexnow.js
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// Load environment variables from .env.local
function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    const envVars = {};
    envContent.split("\n").forEach((line) => {
      if (line && !line.startsWith("#")) {
        const [key, ...valueParts] = line.split("=");
        envVars[key.trim()] = valueParts.join("=").trim();
      }
    });
    return envVars;
  }
  return {};
}

const env = loadEnv();
const API_KEY =
  env.NEXT_PUBLIC_INDEXNOW_KEY || "a7ea15a328334de0bcd5588ccc19fa69";
const INDEXNOW_API_ENDPOINT = "https://api.indexnow.org/indexnow";

// Get domain from args or use localhost for testing
const args = process.argv.slice(2);
const domainIndex = args.indexOf("--domain");
const domain =
  domainIndex !== -1 ? args[domainIndex + 1] : "orionitservice.com";

const protocol = "https";
const host = domain;
const keyLocation = `${protocol}://${host}/a63aa23fab5445f0bc6be82cbf7cfe1c.txt`;

/**
 * Parse URLs from sitemap.xml
 * Handles both sitemap indexes and regular sitemaps
 */
async function extractUrlsFromSitemap(sitemapPath) {
  try {
    if (!fs.existsSync(sitemapPath)) {
      console.error(`Sitemap not found at ${sitemapPath}`);
      process.exit(1);
    }

    const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");

    // Check if this is a sitemap index (contains <sitemapindex>)
    if (sitemapContent.includes("<sitemapindex")) {
      // Extract sitemap references
      const sitemapRegex =
        /<sitemap>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<\/sitemap>/g;
      const sitemapUrls = [];
      let match;

      while ((match = sitemapRegex.exec(sitemapContent)) !== null) {
        sitemapUrls.push(match[1]);
      }

      if (sitemapUrls.length === 0) {
        console.error("No sitemaps found in sitemap index");
        process.exit(1);
      }

      // Extract URLs from all referenced sitemaps
      const allUrls = [];
      const sitemapDir = path.dirname(sitemapPath);

      for (const sitemapUrl of sitemapUrls) {
        // Convert URL to local file path
        const sitemapFileName = path.basename(sitemapUrl);
        const sitemapFilePath = path.join(sitemapDir, sitemapFileName);

        if (fs.existsSync(sitemapFilePath)) {
          const sitemap = fs.readFileSync(sitemapFilePath, "utf-8");
          const urlRegex = /<loc>(.*?)<\/loc>/g;
          let urlMatch;

          while ((urlMatch = urlRegex.exec(sitemap)) !== null) {
            allUrls.push(urlMatch[1]);
          }
        }
      }

      console.log(
        `Found ${sitemapUrls.length} sitemap(s) with ${allUrls.length} total URLs`,
      );
      return allUrls;
    } else {
      // Regular sitemap - extract URLs directly
      const urlRegex = /<loc>(.*?)<\/loc>/g;
      const urls = [];
      let match;

      while ((match = urlRegex.exec(sitemapContent)) !== null) {
        urls.push(match[1]);
      }

      console.log(`Found ${urls.length} URLs in sitemap`);
      return urls;
    }
  } catch (error) {
    console.error("Error reading sitemap:", error);
    process.exit(1);
  }
}

/**
 * Submit URLs to IndexNow API
 */
async function submitToIndexNow(urls) {
  return new Promise((resolve, reject) => {
    // Split into chunks (10,000 URLs max per request)
    const chunks = [];
    for (let i = 0; i < urls.length; i += 10000) {
      chunks.push(urls.slice(i, i + 10000));
    }

    console.log(
      `Submitting ${urls.length} URLs in ${chunks.length} request(s)...`,
    );

    let completed = 0;

    chunks.forEach((chunk, index) => {
      const payload = JSON.stringify({
        host: host.replace("www.", ""),
        key: API_KEY,
        keyLocation: keyLocation,
        urlList: chunk,
      });

      const options = {
        hostname: "api.indexnow.org",
        path: "/indexnow",
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(payload),
        },
      };

      const req = https.request(options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          completed++;
          console.log(
            `\n[Batch ${index + 1}/${chunks.length}] Status: ${res.statusCode}`,
          );

          if (res.statusCode === 200 || res.statusCode === 202) {
            console.log(`✓ Successfully submitted ${chunk.length} URLs`);
          } else if (res.statusCode === 403) {
            console.error("✗ Invalid API key");
            reject(new Error("Invalid API key"));
          } else if (res.statusCode === 422) {
            console.error("✗ Invalid request format or URLs do not match host");
            reject(new Error("Invalid request format"));
          } else if (res.statusCode === 429) {
            console.error("✗ Too many requests - rate limited");
            reject(new Error("Rate limited"));
          } else {
            console.error(`✗ API error: ${res.statusCode} - ${data}`);
            reject(new Error(`API error: ${res.statusCode}`));
          }

          if (completed === chunks.length) {
            resolve(true);
          }
        });
      });

      req.on("error", (error) => {
        console.error("Request error:", error);
        reject(error);
      });

      req.write(payload);
      req.end();
    });
  });
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log("╔════════════════════════════════════════╗");
    console.log("║    IndexNow URL Submission Script      ║");
    console.log("╚════════════════════════════════════════╝\n");

    console.log(`📍 Domain: ${host}`);
    console.log(`🔑 Key Location: ${keyLocation}\n`);

    // Try to find sitemap
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    console.log(`📂 Reading sitemap from: ${sitemapPath}\n`);

    const urls = await extractUrlsFromSitemap(sitemapPath);

    if (urls.length === 0) {
      console.error("No URLs found in sitemap");
      process.exit(1);
    }

    await submitToIndexNow(urls);

    console.log("\n✅ All URLs submitted successfully to IndexNow!");
    console.log(
      "\n💡 Tip: Visit https://www.bing.com/webmasters to verify your submissions.\n",
    );

    process.exit(0);
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    process.exit(1);
  }
}

main();
