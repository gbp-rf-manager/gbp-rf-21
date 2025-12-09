import { useEffect } from "react";

export interface PageSEOConfig {
  title: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

const setMeta = (name: string, content?: string, isProperty = false) => {
  if (!content) return;
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    if (isProperty) {
      element.setAttribute("property", name);
    } else {
      element.setAttribute("name", name);
    }
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const setLink = (rel: string, href?: string) => {
  if (!href) return;
  let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

export const usePageSEO = (config: PageSEOConfig) => {
  useEffect(() => {
    document.title = config.title;
    setMeta("description", config.description);
    setMeta("og:title", config.ogTitle || config.title, true);
    setMeta("og:description", config.ogDescription || config.description, true);
    setMeta("og:type", config.ogType || "website", true);
    setMeta("og:image", config.ogImage, true);

    const canonicalUrl = config.canonical || window.location.href;
    setLink("canonical", canonicalUrl);
  }, [
    config.title,
    config.description,
    config.canonical,
    config.ogTitle,
    config.ogDescription,
    config.ogImage,
    config.ogType,
  ]);
};

