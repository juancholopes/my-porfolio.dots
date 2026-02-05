import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

/**
 * Componente para gestionar meta tags de SEO dinámicamente
 * Uso: <SEO title="Mi Página" description="Descripción de mi página" />
 */
export const SEO = ({
  title = "Juan Lopez Portfolio | Desarrollador Full Stack - React, Node.js",
  description = "Portfolio de Juan Lopez - Desarrollador Full Stack especializado en React, Node.js y tecnologías modernas web. Explora mis proyectos y certificaciones.",
  keywords = "Juan Lopez, desarrollador full stack, React, Node.js, portfolio, desarrollo web, programador, JavaScript, TypeScript",
  ogImage = "https://juancholopez.netlify.app/projects/" +
    "portafolio-personal.webp",
  canonical,
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://juancarloslopezmoreno.netlify.app";
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false,
    ) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:image", ogImage, true);

    // Twitter
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:url", currentUrl, true);
    updateMetaTag("twitter:image", ogImage, true);

    // Canonical URL
    let linkCanonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = currentUrl;
  }, [title, description, keywords, ogImage, currentUrl]);

  return null;
};
