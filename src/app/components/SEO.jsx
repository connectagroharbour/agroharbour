import { useEffect } from 'react';
import { useLocation } from 'react-router';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/Agro-logo.png', 
  ogType = 'website',
  canonicalPath
}) => {
  const location = useLocation();
  const baseTitle = 'AgroHarbour';
  const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} - Leading Agricultural Solutions`;
  const siteUrl = 'https://agroharbour.com'; // Replace with actual domain
  const canonicalUrl = `${siteUrl}${canonicalPath || location.pathname}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || 'AgroHarbour provides leading agricultural solutions, soil testing, and modern hydroponic consulting to help farmers maximize yields.');

    // Update Meta Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph Tags
    const updateOGTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOGTag('og:title', fullTitle);
    updateOGTag('og:description', description || 'Leading Agricultural Solutions');
    updateOGTag('og:image', `${siteUrl}${ogImage}`);
    updateOGTag('og:url', canonicalUrl);
    updateOGTag('og:type', ogType);

    // Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

  }, [fullTitle, description, keywords, ogImage, ogType, canonicalUrl]);

  return null; // This component doesn't render anything
};

export default SEO;
