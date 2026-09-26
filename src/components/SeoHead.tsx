import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogs';

interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
}

const SITE_ORIGIN = 'https://ekalavya-consulting.ai.studio';

export const PAGE_SEO_MAP: Record<string, PageMetadata> = {
  '/': {
    title: 'Fractional CMO & Marketing Services | Ekalavya Consulting', // 56 chars
    description: 'Ekalavya Consulting is a top marketing leadership firm providing Fractional CMO and Fractional Marketing Services across India, Middle East, and Europe.', // 152 chars
    canonicalPath: '/',
  },
  '/about': {
    title: 'Marketing Leadership & Fractional CMO | Ekalavya Consulting', // 59 chars
    description: 'Discover Ekalavya Consulting, a marketing leadership firm delivering Fractional CMO leadership and high-impact execution for brands across global markets.', // 154 chars
    canonicalPath: '/about',
  },
  '/team': {
    title: 'Fractional CMO Council & Strike Team | Ekalavya Consulting', // 58 chars
    description: 'Meet our Fractional CMO Council and surgical marketing team delivering end-to-end strategy, brand governance, and execution across India, UAE, and Europe.', // 154 chars
    canonicalPath: '/team',
  },
  '/services': {
    title: 'Fractional CMO & Marketing Team Services | Ekalavya Firm', // 56 chars
    description: 'Explore Fractional CMO leadership and specialized fractional marketing team services engineered for high-growth brands in India, the UAE, and Europe.', // 151 chars
    canonicalPath: '/services',
  },
  '/case-studies': {
    title: 'Fractional CMO Case Studies & Work | Ekalavya Consulting', // 56 chars
    description: 'Review combat dossiers and verified case studies of Fractional CMO leadership and specialized marketing execution for ambitious enterprises globally.', // 150 chars
    canonicalPath: '/case-studies',
  },
  '/blogs': {
    title: 'Fractional Marketing Insights & Playbooks | Ekalavya Firm', // 57 chars
    description: 'Read field dispatches, growth playbooks, and fractional marketing leadership breakdowns from our fractional CMO strategists in India, Dubai, and Europe.', // 152 chars
    canonicalPath: '/blogs',
  },
  '/contact': {
    title: 'Contact Fractional CMO Firm | Ekalavya Direct Desk Intake', // 57 chars
    description: 'Initiate direct contact with our Fractional CMO leadership firm for selective mandate allocation across Pan India, Middle East (UAE, Saudi), and Europe.', // 152 chars
    canonicalPath: '/contact',
  },
};

export const SeoHead: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let meta = PAGE_SEO_MAP[pathname];
    
    // Check if matching blog detail
    if (!meta && pathname.startsWith('/blogs/')) {
      const slug = pathname.replace('/blogs/', '');
      const blogPost = BLOG_POSTS.find((p) => p.slug === slug);
      if (blogPost) {
        meta = {
          title: blogPost.metaTitle,
          description: blogPost.metaDesc,
          canonicalPath: `/blogs/${blogPost.slug}`,
        };
      }
    }

    if (!meta) {
      meta = PAGE_SEO_MAP['/'];
    }

    const canonicalUrl = `${SITE_ORIGIN}${meta.canonicalPath === '/' ? '' : meta.canonicalPath}`;

    // 1. Title
    document.title = meta.title;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta description
    setMetaTag('name', 'description', meta.description);

    // 3. OpenGraph tags
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:site_name', 'Ekalavya Consulting');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:image', `${SITE_ORIGIN}/ekalavya-dark-logo.jpg`);

    // 4. Twitter tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', `${SITE_ORIGIN}/ekalavya-dark-logo.jpg`);

    // 5. Canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [pathname]);

  return null;
};
