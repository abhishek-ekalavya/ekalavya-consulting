import React from 'react';
import { Link } from 'react-router-dom';
import { Crosshair, ArrowRight, Terminal } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogs';

interface BlogsPageProps {
  onLockTarget: () => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onLockTarget }) => {
  return (
    <div className="bg-[#0A1931] min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Tag: 05 • FIELD DISPATCHES */}
        <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-[#00D084] uppercase">
          <span>05 &bull; FIELD DISPATCHES</span>
        </div>

        {/* Title */}
        <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          BLOGS
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          Intel from the front lines. Marketing breakdowns, growth playbooks, and execution notes.
        </p>

        {/* Thin divider line */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* 3-COLUMN GRID (1-col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post: BlogPost) => (
            <Link
              key={post.id}
              to={`/blogs/${post.slug}`}
              className="block group"
            >
              <article
                className="h-full flex flex-col justify-between rounded-lg border border-[#1E293B] bg-[#0F172A] p-6 cursor-pointer transition-all duration-300 group-hover:border-[#00FF88] group-hover:shadow-xl group-hover:shadow-[#00FF88]/10"
              >
                <div>
                  {/* Top Image Placeholder with text "IMAGE / CMS" */}
                  <div className="relative mb-5 overflow-hidden rounded border border-[#1E293B] bg-[#0A1931] aspect-[16/10] flex items-center justify-center group-hover:border-[#00FF88]/40 transition-colors">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={`${post.title} - Fractional CMO Services & Marketing Leadership`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4 text-center">
                        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded border border-[#1E293B] bg-white/[0.03] text-[#00FF88]">
                          <Terminal className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-xs font-bold tracking-widest text-white/50 group-hover:text-[#00FF88] transition-colors">
                          IMAGE / CMS
                        </span>
                        <span className="mt-1 font-mono text-[10px] text-white/30 tracking-wider">
                          ASSET SLOT #{post.id}
                        </span>
                      </div>
                    )}

                    {/* Corner tactical mark */}
                    <div className="absolute top-2 right-2 rounded bg-[#0F172A]/80 border border-[#1E293B] px-2 py-0.5 font-mono text-[9px] text-[#00FF88] tracking-wider">
                      {post.readTime || '5 MIN'}
                    </div>
                  </div>

                  {/* Top small label: Category */}
                  <div className="mb-2.5">
                    <span className="inline-block rounded border border-[#1E293B] bg-white/[0.02] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#00FF88] group-hover:border-[#00FF88]/40 transition-colors">
                      {post.category}
                    </span>
                  </div>

                  {/* Title in bold white */}
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-[#00FF88] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* 2-line excerpt in grey */}
                  <p className="mt-2.5 text-xs text-white/70 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom: READ DOSSIER -> in emerald */}
                <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-[#00FF88] group-hover:translate-x-1 transition-transform">
                    <span>READ DOSSIER</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono text-[10px] text-white/40">
                    DISPATCH #{post.id}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom Lock Target CTA */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={onLockTarget}
            className="group flex items-center gap-3 rounded bg-[#00D084] px-8 py-4 font-mono text-sm font-bold tracking-wider text-[#0A1931] shadow-xl shadow-[#00D084]/25 transition-all duration-200 hover:bg-[#00ba76] active:scale-[0.99]"
          >
            <Crosshair className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            <span>LOCK THE TARGET</span>
          </button>
        </div>

      </div>
    </div>
  );
};
