#!/usr/bin/env node

/**
 * Verification script to check IndexNow implementation
 * Usage: node scripts/verify-indexnow.js
 */

const fs = require("fs");
const path = require("path");

console.log("╔════════════════════════════════════════╗");
console.log("║  IndexNow Implementation Verification  ║");
console.log("╚════════════════════════════════════════╝\n");

const checks = [];

// Check 1: Key file exists
const keyFilePath = path.join(
  process.cwd(),
  "public",
  "a88be1a432204a9489fee4c70f98ceec.txt",
);
const keyFileExists = fs.existsSync(keyFilePath);
const keyContent = keyFileExists
  ? fs.readFileSync(keyFilePath, "utf-8").trim()
  : "";

checks.push({
  name: "API Key File",
  passed: keyFileExists && keyContent === "a88be1a432204a9489fee4c70f98ceec",
  details: keyFileExists ? `Found: ${keyFilePath}` : "NOT FOUND",
});

// Check 2: Utility file exists
const utilPath = path.join(process.cwd(), "lib", "indexnow.ts");
const utilExists = fs.existsSync(utilPath);
checks.push({
  name: "IndexNow Utility (lib/indexnow.ts)",
  passed: utilExists,
  details: utilExists ? "Found" : "NOT FOUND",
});

// Check 3: API route exists
const apiPath = path.join(process.cwd(), "app", "api", "indexnow", "route.ts");
const apiExists = fs.existsSync(apiPath);
checks.push({
  name: "API Route (app/api/indexnow/route.ts)",
  passed: apiExists,
  details: apiExists ? "Found" : "NOT FOUND",
});

// Check 4: Submission script exists
const scriptPath = path.join(process.cwd(), "scripts", "submit-to-indexnow.js");
const scriptExists = fs.existsSync(scriptPath);
checks.push({
  name: "Submission Script (scripts/submit-to-indexnow.js)",
  passed: scriptExists,
  details: scriptExists ? "Found" : "NOT FOUND",
});

// Check 5: Hook file exists
const hookPath = path.join(process.cwd(), "hooks", "useIndexNowSubmit.ts");
const hookExists = fs.existsSync(hookPath);
checks.push({
  name: "IndexNow Hook (hooks/useIndexNowSubmit.ts)",
  passed: hookExists,
  details: hookExists ? "Found" : "NOT FOUND",
});

// Check 6: Sitemap exists
const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
const sitemapExists = fs.existsSync(sitemapPath);
checks.push({
  name: "Sitemap (public/sitemap.xml)",
  passed: sitemapExists,
  details: sitemapExists ? "Found" : "NOT FOUND - Will be generated on build",
});

// Check 7: Documentation exists
const docPath = path.join(process.cwd(), "INDEXNOW_GUIDE.md");
const docExists = fs.existsSync(docPath);
checks.push({
  name: "Documentation (INDEXNOW_GUIDE.md)",
  passed: docExists,
  details: docExists ? "Found" : "NOT FOUND",
});

// Check 8: Package.json has scripts
const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
const hasIndexNowScripts =
  packageJson.scripts["indexnow:submit"] &&
  packageJson.scripts["indexnow:submit:prod"];
checks.push({
  name: "NPM Scripts",
  passed: hasIndexNowScripts,
  details: hasIndexNowScripts
    ? "indexnow:submit and indexnow:submit:prod found"
    : "Scripts not added to package.json",
});

// Print results
console.log("📋 Implementation Status:\n");

let allPassed = true;
checks.forEach((check, index) => {
  const status = check.passed ? "✅" : "❌";
  console.log(`${status} ${check.name}`);
  console.log(`   ${check.details}\n`);
  if (!check.passed) allPassed = false;
});

console.log("╔════════════════════════════════════════╗");
if (allPassed) {
  console.log("║         ✅ ALL CHECKS PASSED           ║");
  console.log("╚════════════════════════════════════════╝\n");

  console.log("🚀 Next Steps:\n");
  console.log("1. Build your project:");
  console.log("   npm run build\n");

  console.log("2. Generate the sitemap:");
  console.log("   (Automatically generated during build)\n");

  console.log("3. Submit all URLs to IndexNow:");
  console.log("   npm run indexnow:submit\n");

  console.log("4. Or build and submit in one command:");
  console.log("   npm run indexnow:submit:prod\n");

  console.log("5. Verify in Bing Webmaster Tools:");
  console.log("   https://www.bing.com/webmasters\n");
} else {
  console.log("║        ⚠️  SOME CHECKS FAILED          ║");
  console.log("╚════════════════════════════════════════╝\n");

  console.log("Please ensure all required files are in place.");
  console.log("See INDEXNOW_GUIDE.md for detailed setup instructions.\n");
}

process.exit(allPassed ? 0 : 1);
