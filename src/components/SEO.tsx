import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  keywords,
  image = 'https://rajresortkelva.com/images/rajresort.webp',
  type = 'website',
  schema,
}: SEOProps) {
  const location = useLocation();
  const url = `https://rajresortkelva.com${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to set or create meta tags in the document head
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    
    const defaultKeywords = 'raj resort, raj resort kelva, kelva beach resort, best resort in kelva, resort in palghar, beach resort near mumbai, 1 day picnic resort in kelva, hotels in kelva, beach resort palghar';
    setMetaTag('name', 'keywords', keywords || defaultKeywords);
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Open Graph (OG) Tags for social sharing (WhatsApp, Facebook, etc.)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'Raj Resort Kelva Beach');
    setMetaTag('property', 'og:locale', 'en_US');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    // 5. Schema.org JSON-LD structured data injection
    // Remove any existing dynamic schema element
    const existingSchema = document.getElementById('dynamic-page-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'dynamic-page-schema';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // 6. Update Canonical Link tag dynamically
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);

    // Cleanup dynamic schema script when route changes / component unmounts
    return () => {
      const schemaElement = document.getElementById('dynamic-page-schema');
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, [title, description, keywords, image, type, url, schema]);

  return null;
}
