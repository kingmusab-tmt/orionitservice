# IndexNow Implementation Guide

## Overview

IndexNow is a service that allows you to instantly notify search engines (Bing, Yahoo, Yandex) whenever you add, update, or delete content on your website. This ensures your changes are indexed quickly without waiting for search engine crawlers.

## What's Implemented

✅ **API Key Hosting**: Your IndexNow key is already hosted at:

- `https://orionitservice.com/a7ea15a328334de0bcd5588ccc19fa69.txt`

✅ **Next.js Utilities**:

- `lib/indexnow.ts` - Core utility functions for IndexNow API calls

✅ **API Route**:

- `app/api/indexnow/route.ts` - POST endpoint to submit URLs

✅ **Submission Script**:

- `scripts/submit-to-indexnow.js` - Batch submit all sitemap URLs

## How to Use

### 1. Initial Submission (Submit All Current URLs)

Run this command after your first build to submit all existing URLs:

```bash
npm run build
node scripts/submit-to-indexnow.js --domain orionitservice.com
```

The script will:

- Read `public/sitemap.xml`
- Extract all URLs
- Submit them to Bing's IndexNow API
- Show status and confirmation

### 2. Submit URLs Programmatically (After Publishing New Content)

In your Next.js code, use the utility:

```typescript
import { submitToIndexNow } from "@/lib/indexnow";

// Submit multiple URLs
const result = await submitToIndexNow(
  [
    "https://orionitservice.com/new-page",
    "https://orionitservice.com/updated-page",
  ],
  "orionitservice.com",
  "https://orionitservice.com/a7ea15a328334de0bcd5588ccc19fa69.txt",
);

if (result.success) {
  console.log(result.message);
}
```

### 3. Submit URLs via API Endpoint

```bash
curl -X POST http://localhost:3000/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://orionitservice.com/page1",
      "https://orionitservice.com/page2"
    ]
  }'
```

### 4. Integration with Next.js Build (Recommended)

Update `package.json` to automatically submit URLs after build:

```json
{
  "scripts": {
    "build": "next build && node scripts/submit-to-indexnow.js --domain orionitservice.com"
  }
}
```

## Configuration

### API Key

The API key is: `a7ea15a328334de0bcd5588ccc19fa69`

It's stored in two places:

1. **File**: `public/a7ea15a328334de0bcd5588ccc19fa69.txt` (required by IndexNow)
2. **Code**: Used in `lib/indexnow.ts` (can be moved to `.env.local` for security)

### Environment Variables (Optional)

Create `.env.local`:

```env
NEXT_PUBLIC_INDEXNOW_KEY=a7ea15a328334de0bcd5588ccc19fa69
```

Update `lib/indexnow.ts`:

```typescript
const API_KEY =
  process.env.NEXT_PUBLIC_INDEXNOW_KEY || "a7ea15a328334de0bcd5588ccc19fa69";
```

## Sitemap.xml

IndexNow works best with an updated sitemap. Your project uses `next-sitemap`:

- Sitemap location: `public/sitemap.xml`
- Generated automatically during build
- Submitted to search engines via IndexNow

## Verify in Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Sign in with your Microsoft account
3. Add your site if not already added
4. Navigate to "Indexing" → "IndexNow"
5. Check if your URLs are being received

## URL Limits

- **Per Request**: Maximum 10,000 URLs per API call
- **Per Domain**: No strict limit, but avoid spam (429 errors mean rate limiting)

## Response Codes

- `200 OK` - URLs submitted successfully
- `400 Bad Request` - Invalid format
- `403 Forbidden` - Invalid or missing API key
- `422 Unprocessable Entity` - URLs don't belong to the host or invalid schema
- `429 Too Many Requests` - Rate limited (wait before retrying)

## Best Practices

1. **Automate Submissions**: Submit URLs automatically after publishing
2. **Monitor Results**: Check Bing Webmaster Tools regularly
3. **Update Sitemap**: Keep `sitemap.xml` up-to-date
4. **Handle Deletions**: Submit deleted URLs with IndexNow to notify search engines
5. **Batch Operations**: Use the script for large batches, API for real-time updates

## Support & Documentation

- IndexNow Official: https://www.indexnow.org/documentation
- Bing Webmaster: https://www.bing.com/webmasters
- Implementation Guide: https://www.bing.com/indexnow/getstarted

## Troubleshooting

### "Invalid API key" (403 error)

- Verify the key file exists at `public/a7ea15a328334de0bcd5588ccc19fa69.txt`
- Check the file contains exactly: `a7ea15a328334de0bcd5588ccc19fa69`
- Ensure it's UTF-8 encoded

### "URLs don't belong to the host" (422 error)

- Check that URLs start with your domain
- Verify the `host` parameter matches your domain
- Remove www inconsistencies

### Too Many Requests (429 error)

- Don't submit more than necessary
- Wait at least 15 minutes before retrying
- Spread submissions over time
- Batch legitimate updates together

## Next Steps

1. ✅ API key is already set up
2. Run the initial submission script
3. Monitor results in Bing Webmaster Tools
4. Integrate into your content publishing workflow
5. Consider automating submissions when pages are published
