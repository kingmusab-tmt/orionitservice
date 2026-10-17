import type { Metadata } from "next";

export const SITE_URL = "https://www.orionitservice.com";
export const SITE_NAME = "Orion IT Service";
const TWITTER_HANDLE = "@orionitservice";

const DEFAULT_IMAGES = [
  {
    url: "/images/og-image.webp",
    width: 1200,
    height: 630,
    alt: "Orion IT Service – Cybersecurity, IT Support & Networking",
  },
];

type PageMetadataOptions = {
  /** "article" for blog posts; defaults to "website" */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Share image for the page; falls back to the site-wide OG image */
  image?: string;
};

/** Absolute URL for a site path, without a trailing slash on the root. */
export function absoluteUrl(path: string): string {
  const url = new URL(path, SITE_URL).toString();
  return url === `${SITE_URL}/` ? SITE_URL : url;
}

function titleText(title: Metadata["title"]): string | undefined {
  if (!title) return undefined;
  if (typeof title === "string") return title;
  if ("absolute" in title && title.absolute) return title.absolute;
  if ("default" in title) return title.default;
  return undefined;
}

/**
 * Completes a page's metadata so nothing is lost to Next's shallow
 * metadata merging: a page that sets `openGraph` or `twitter` replaces the
 * root layout's object entirely (dropping its images), and a page that sets
 * neither inherits the homepage's title and URL.
 *
 * Open Graph and Twitter fields fall back to the page's own title,
 * description and image, and `og:url` always matches the canonical URL.
 */
export function pageMetadata(
  meta: Metadata,
  options: PageMetadataOptions = {}
): Metadata {
  const canonical = meta.alternates?.canonical;
  const path =
    typeof canonical === "string"
      ? canonical
      : canonical instanceof URL
        ? canonical.pathname
        : canonical?.url?.toString();
  const url = path ? absoluteUrl(path) : undefined;

  const og = meta.openGraph ?? {};
  const title = og.title ?? titleText(meta.title);
  const description = og.description ?? meta.description ?? undefined;
  const images =
    og.images ??
    (options.image ? [{ url: options.image, alt: title }] : DEFAULT_IMAGES);
  const isArticle = options.type === "article";

  const openGraph = {
    siteName: SITE_NAME,
    locale: "en_US",
    title,
    description,
    ...og,
    type: options.type ?? "website",
    url,
    images,
    ...(isArticle && {
      publishedTime: options.publishedTime,
      modifiedTime: options.modifiedTime,
      authors: [SITE_NAME],
    }),
  } as Metadata["openGraph"];

  return {
    ...meta,
    ...(url && { alternates: { ...meta.alternates, canonical: url } }),
    openGraph,
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images,
      ...meta.twitter,
    } as Metadata["twitter"],
  };
}
