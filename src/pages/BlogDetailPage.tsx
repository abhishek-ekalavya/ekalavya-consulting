import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Crosshair, HelpCircle, ChevronDown, ChevronUp, Share2, Check, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';

interface BlogDetailPageProps {
  onLockTarget: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ onLockTarget }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({ 0: true });

  const post: BlogPost | undefined = BLOG_POSTS.find((p) => p.slug === slug);

  // Dynamic SEO and FAQ JSON-LD injection
  useEffect(() => {
    if (!post) return;

    // 1. Set document title
    document.title = post.metaTitle;

    // 2. Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', post.metaDesc);

    // 3. Set canonical URL
    const canonicalUrl = `https://ekalavya-consulting.ai.studio/blogs/${post.slug}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Inject FAQ JSON-LD
    const scriptId = 'blog-faq-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(post.faqJson);

    return () => {
      // Clean up FAQ script on unmount
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [post]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A1931] py-20 px-4 flex items-center justify-center text-center">
        <div className="max-w-md mx-auto border border-[#1E293B] bg-[#0F172A] p-8 rounded-lg">
          <h1 className="font-cinzel text-2xl font-bold text-white mb-4">DISPATCH NOT FOUND</h1>
          <p className="text-sm text-white/70 mb-6 font-mono">
            The requested dossier does not exist in the field intelligence archive.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 rounded bg-[#00FF88] px-6 py-3 font-mono text-xs font-bold text-[#0A1931] hover:bg-[#00ba76] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>RETURN TO FIELD DISPATCHES</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#0A1931] text-white py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation: Back to Blogs */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/blogs"
            className="group inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#00FF88] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>&larr; BACK TO BLOGS</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 rounded border border-[#1E293B] bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-white/70 hover:border-[#00FF88]/50 hover:text-white transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-[#00FF88]" /> : <Share2 className="h-3.5 w-3.5" />}
            <span>{copied ? 'LINK COPIED' : 'SHARE'}</span>
          </button>
        </div>

        {/* Header Metadata Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          {/* Category Tag */}
          <span className="inline-block rounded border border-[#00FF88]/40 bg-[#00FF88]/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#00FF88]">
            {post.category}
          </span>

          {/* Date */}
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-white/60">
            <Calendar className="h-3.5 w-3.5 text-[#00FF88]" />
            <span>{post.date}</span>
          </span>

          <span className="text-white/20">&bull;</span>

          {/* Read Time */}
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-white/60">
            <Clock className="h-3.5 w-3.5 text-[#00FF88]" />
            <span>{post.readTime}</span>
          </span>
        </div>

        {/* Main Article Title */}
        <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-8">
          {post.title}
        </h1>

        {/* Full Article Content */}
        <div className="prose prose-invert max-w-none space-y-8 font-sans leading-relaxed text-white/85 text-base sm:text-lg">
          <style>{`
            .blog-body h1 { display: none; }
            .blog-body h2 { 
              font-family: 'Cinzel', serif; 
              font-size: 1.5rem; 
              font-weight: 700; 
              color: #ffffff; 
              margin-top: 2.5rem; 
              margin-bottom: 1rem;
              padding-bottom: 0.5rem;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .blog-body p { 
              margin-bottom: 1.25rem; 
              color: rgba(255, 255, 255, 0.85);
              line-height: 1.75;
            }
            .blog-body strong {
              color: #00FF88;
              font-weight: 600;
            }
          `}</style>
          <div 
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: post.htmlContent }} 
          />
        </div>

        {/* Divider */}
        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* FAQ Section (Visible) */}
        <section id="faq-section" className="rounded-lg border border-[#1E293B] bg-[#0F172A] p-6 sm:p-8 mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/30">
              <HelpCircle className="h-4 w-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#00FF88] uppercase block">
                INTELLIGENCE INVENTORY
              </span>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide text-white">
                Frequently Asked Questions
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {post.faqs.map((faq, index) => {
              const isOpen = !!openFaqs[index];
              return (
                <div
                  key={index}
                  className="rounded border border-[#1E293B] bg-[#0A1931] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base text-white pr-4">
                      {faq.question}
                    </span>
                    <span className="text-[#00FF88] shrink-0">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-sm sm:text-base text-[#94A3B8] border-t border-[#1E293B]/60 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Strategic Next Step CTA Card */}
        <div className="rounded-xl border border-[#00FF88]/30 bg-gradient-to-b from-[#0F172A] to-[#0A1931] p-8 sm:p-10 text-center shadow-2xl shadow-[#00FF88]/10 relative overflow-hidden">
          {/* Subtle tactical corner markers */}
          <div className="absolute top-3 left-3 font-mono text-[9px] text-[#00FF88]/50">
            [ MANDATE ACTION ]
          </div>
          <div className="absolute bottom-3 right-3 font-mono text-[9px] text-[#00FF88]/50">
            STATUS: ACTIVE
          </div>

          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-3">
            Stop Guessing. Deploy Fractional Leadership.
          </h3>
          <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto mb-8 font-sans">
            Whether you need comprehensive Fractional CMO governance or specialized execution strike teams, we build and own your marketing outcome.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={onLockTarget}
              className="group inline-flex items-center justify-center gap-3 rounded bg-[#00FF88] px-9 py-4 font-mono text-sm font-bold tracking-wider text-[#0A1931] shadow-xl shadow-[#00FF88]/20 transition-all duration-200 hover:bg-[#00ba76] active:scale-[0.99] w-full sm:w-auto"
            >
              <Crosshair className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              <span>LOCK THE TARGET</span>
            </Link>

            <Link
              to="/blogs"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-4 font-mono text-sm font-semibold tracking-wider text-white/80 hover:bg-white/10 hover:text-white transition-colors w-full sm:w-auto"
            >
              <span>VIEW ALL FIELD DISPATCHES</span>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
};
