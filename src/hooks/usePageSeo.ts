import { useEffect } from "react";

interface UsePageSeoOptions {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1582719478250-3f40ffec2103?auto=format&fit=crop&w=1200&q=80";

const ensureMetaTag = (
  selector: string,
  attributes: Record<string, string>
): HTMLMetaElement => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
    document.head.appendChild(element);
  }
  return element;
};

export const usePageSeo = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
}: UsePageSeoOptions) => {
  useEffect(() => {
    if (!title) return;

    const pageUrl =
      canonical || `${window.location.origin.replace(/\/$/, "")}${window.location.pathname}`;
    const image = ogImage || DEFAULT_OG_IMAGE;

    document.title = title;

    ensureMetaTag('meta[name="description"]', { name: "description" }).setAttribute(
      "content",
      description
    );

    if (keywords?.length) {
      ensureMetaTag('meta[name="keywords"]', { name: "keywords" }).setAttribute(
        "content",
        keywords.join(", ")
      );
    }

    ensureMetaTag('meta[property="og:title"]', { property: "og:title" }).setAttribute(
      "content",
      title
    );
    ensureMetaTag('meta[property="og:description"]', { property: "og:description" }).setAttribute(
      "content",
      description
    );
    ensureMetaTag('meta[property="og:url"]', { property: "og:url" }).setAttribute(
      "content",
      pageUrl
    );
    ensureMetaTag('meta[property="og:type"]', { property: "og:type" }).setAttribute(
      "content",
      ogType
    );
    ensureMetaTag('meta[property="og:image"]', { property: "og:image" }).setAttribute(
      "content",
      image
    );
    ensureMetaTag('meta[property="og:image:alt"]', { property: "og:image:alt" }).setAttribute(
      "content",
      "ProFixNow — сервис ремонта техники в Москве"
    );

    ensureMetaTag('meta[name="twitter:card"]', { name: "twitter:card" }).setAttribute(
      "content",
      "summary_large_image"
    );
    ensureMetaTag('meta[name="twitter:title"]', { name: "twitter:title" }).setAttribute(
      "content",
      title
    );
    ensureMetaTag('meta[name="twitter:description"]', { name: "twitter:description" }).setAttribute(
      "content",
      description
    );
    ensureMetaTag('meta[name="twitter:image"]', { name: "twitter:image" }).setAttribute(
      "content",
      image
    );

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", pageUrl);
  }, [title, description, canonical, ogImage, ogType, keywords?.join(",")]);
};
