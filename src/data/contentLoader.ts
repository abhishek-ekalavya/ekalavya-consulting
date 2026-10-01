import homeData from '../../content/pages/home.json';
import teamData from '../../content/pages/team.json';
import generalData from '../../content/settings/general.json';
import { BlogPost, BlogFAQ } from './blogs';

// Import all JSON files in /content/blogs
const blogModules = import.meta.glob('../../content/blogs/*.json', { eager: true });

export interface TeamContent {
  show_strike_team: boolean;
  founder: {
    name: string;
    title: string;
    image: string;
    bio_paragraphs: string[];
    quote?: string;
    stats: string[];
  };
  council: {
    badge: string;
    title: string;
    unit: string;
    description: string;
  };
  strike_team: {
    badge: string;
    title: string;
    unit: string;
    description: string;
  };
}

export interface HomeContent {
  hero_badge: string;
  hero_headline: string;
  hero_sub: string;
  hero_cta: string;
  services: Array<{ title: string; desc: string }>;
  about_title: string;
  about_content: string;
}

export interface SiteSettings {
  site_name: string;
  logo_text: string;
  email: string;
  phone: string;
}

export const getSiteSettings = (): SiteSettings => {
  return generalData as SiteSettings;
};

export const getHomeContent = (): HomeContent => {
  return homeData as HomeContent;
};

export const getTeamContent = (): TeamContent => {
  return teamData as TeamContent;
};

/**
 * Converts a raw markdown string into standard HTML paragraphs and headings
 */
function markdownToHtml(md: string): string {
  if (!md) return '';
  
  // If it already contains HTML tags like <h1> or <p>, return as is
  if (/<[a-z][\s\S]*>/i.test(md)) {
    return md;
  }

  const lines = md.split('\n');
  const htmlParts: string[] = [];
  let inParagraph = false;
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      let text = paragraphBuffer.join(' ').trim();
      if (text) {
        // bold
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // italics
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        htmlParts.push(`<p>${text}</p>`);
      }
      paragraphBuffer = [];
    }
    inParagraph = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith('# ')) {
      flushParagraph();
      htmlParts.push(`<h1>${line.slice(2).trim()}</h1>`);
    } else if (line.startsWith('## ')) {
      flushParagraph();
      htmlParts.push(`<h2>${line.slice(3).trim()}</h2>`);
    } else if (line.startsWith('### ')) {
      flushParagraph();
      htmlParts.push(`<h3>${line.slice(4).trim()}</h3>`);
    } else if (line.startsWith('- ')) {
      flushParagraph();
      let text = line.slice(2).trim();
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      htmlParts.push(`<p>&bull; ${text}</p>`);
    } else {
      inParagraph = true;
      paragraphBuffer.push(line);
    }
  }

  flushParagraph();
  return htmlParts.join('\n');
}

/**
 * Reads all blogs from /content/blogs/*.json
 */
export const getContentBlogs = (): BlogPost[] => {
  const posts: BlogPost[] = [];
  let counter = 1;

  for (const path in blogModules) {
    const fileContent = (blogModules[path] as any).default || blogModules[path];
    if (!fileContent || !fileContent.slug) continue;

    const faqs: BlogFAQ[] = (fileContent.faq || []).map((f: any) => ({
      question: f.question || '',
      answer: f.answer || ''
    }));

    const faqJson = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };

    const formattedDate = fileContent.date 
      ? new Date(fileContent.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      : '15 May 2026';

    const post: BlogPost = {
      id: String(counter++).padStart(2, '0'),
      slug: fileContent.slug,
      category: fileContent.category || 'GROWTH',
      title: fileContent.title || '',
      metaTitle: fileContent.title || '',
      metaDesc: fileContent.description || '',
      excerpt: fileContent.description || '',
      date: formattedDate,
      readTime: '6 MIN READ',
      htmlContent: markdownToHtml(fileContent.body || ''),
      faqs,
      faqJson
    };

    posts.push(post);
  }

  return posts;
};
