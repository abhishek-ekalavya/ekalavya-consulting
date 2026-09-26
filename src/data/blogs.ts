import { getContentBlogs } from './contentLoader';

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: 'GROWTH' | 'MARKETING' | 'EXECUTION' | string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  excerpt: string;
  image?: string;
  date: string;
  readTime: string;
  htmlContent: string;
  faqs: BlogFAQ[];
  faqJson: Record<string, any>;
}

export const BLOG_POSTS: BlogPost[] = getContentBlogs();

