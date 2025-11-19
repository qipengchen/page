
import React, { useState, useMemo } from 'react';
import { ArrowLeft, Calendar, Clock, ChevronRight, Search, X } from 'lucide-react';
import { BlogPost } from '../types';

interface Props {
  posts: BlogPost[];
}

// A simple Markdown renderer component
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  // Split by lines but keep code blocks together (simplistic approach)
  const lines = content.split('\n');
  
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  
  return (
    <div className="space-y-4 text-slate-700 leading-relaxed">
      {lines.map((line, index) => {
        // Handle Code Blocks
        if (line.trim().startsWith('```')) {
          if (inCodeBlock) {
            // End of code block
            inCodeBlock = false;
            const code = codeBuffer.join('\n');
            codeBuffer = [];
            return (
              <div key={index} className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto my-6 shadow-lg border border-slate-700">
                <pre>{code}</pre>
              </div>
            );
          } else {
            // Start of code block
            inCodeBlock = true;
            return null;
          }
        }
        
        if (inCodeBlock) {
          codeBuffer.push(line);
          return null;
        }

        // Handle Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold text-slate-900 mt-8 mb-4 font-serif border-b pb-2">{line.replace('# ', '')}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-slate-800 mt-8 mb-3 font-serif">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold text-slate-800 mt-6 mb-2 font-serif">{line.replace('### ', '')}</h3>;
        }

        // Handle Lists
        if (line.trim().startsWith('- ')) {
          return (
            <div key={index} className="flex items-start gap-2 ml-4 mb-2">
              <span className="text-crimson-500 mt-1.5">•</span>
              <span>{renderInlineStyles(line.replace('- ', ''))}</span>
            </div>
          );
        }
        
        // Handle Numbered Lists
        if (/^\d+\.\s/.test(line.trim())) {
           return (
            <div key={index} className="flex items-start gap-2 ml-4 mb-2">
               <span className="font-bold text-crimson-600 font-mono text-sm mt-0.5">{line.split('.')[0]}.</span>
               <span>{renderInlineStyles(line.replace(/^\d+\.\s/, ''))}</span>
            </div>
           );
        }

        // Handle Blockquotes
        if (line.trim().startsWith('> ')) {
          return (
            <blockquote key={index} className="border-l-4 border-crimson-400 bg-crimson-50 p-4 italic text-slate-700 my-4 rounded-r">
              {renderInlineStyles(line.replace('> ', ''))}
            </blockquote>
          );
        }

        // Empty lines
        if (line.trim() === '') {
          return <div key={index} className="h-2"></div>;
        }

        // Regular Paragraphs
        return <p key={index} className="mb-2">{renderInlineStyles(line)}</p>;
      })}
    </div>
  );
};

// Helper to render bold/italic/code inline
const renderInlineStyles = (text: string) => {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="bg-slate-100 text-crimson-700 px-1.5 py-0.5 rounded text-sm font-mono">{part.slice(1, -1)}</code>;
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="italic">{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

export const BlogView: React.FC<Props> = ({ posts }) => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  if (activePost) {
    return (
      <div className="animate-fade-in-up pb-20">
        <button 
          onClick={() => setActivePost(null)}
          className="flex items-center gap-2 text-slate-500 font-semibold mb-8 hover:text-crimson-700 transition-colors group"
        >
          <div className="p-2 rounded-full bg-slate-100 group-hover:bg-crimson-100 transition-colors border border-slate-200">
             <ArrowLeft size={18} />
          </div>
          Back to List
        </button>
        
        <article className="bg-white p-8 md:p-16 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
          <header className="mb-10 text-center">
             <div className="flex justify-center gap-2 mb-6">
               {activePost.tags.map(tag => (
                 <span key={tag} className="bg-crimson-50 text-crimson-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                   {tag}
                 </span>
               ))}
             </div>
             <h1 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
               {activePost.title}
             </h1>
             <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-medium">
               <span className="flex items-center gap-2"><Calendar size={16} className="text-crimson-400" /> {activePost.date}</span>
               <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
               <span className="flex items-center gap-2"><Clock size={16} className="text-crimson-400" /> 5 min read</span>
             </div>
          </header>
          
          <div className="prose prose-slate max-w-none">
             <MarkdownRenderer content={activePost.content} />
          </div>
          
          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col items-center">
             <p className="text-slate-400 text-sm italic mb-4">Thanks for reading!</p>
             <button 
               onClick={() => setActivePost(null)}
               className="text-crimson-600 font-bold hover:underline"
             >
               Read another article
             </button>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Search and Filter Section */}
      <div className="mb-10 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-crimson-400 focus:ring-2 focus:ring-crimson-100 outline-none transition-all text-slate-700 shadow-sm"
          />
          <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Tag Cloud */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-slate-400 mr-2 font-medium">Filter by:</span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
              selectedTag === null 
                ? 'bg-slate-800 text-white shadow-md' 
                : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-400'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                selectedTag === tag 
                  ? 'bg-crimson-600 text-white shadow-md' 
                  : 'bg-white text-crimson-700 border border-crimson-100 hover:bg-crimson-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, i) => (
            <div 
              key={post.id}
              onClick={() => setActivePost(post)}
              className="cursor-pointer group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-2 bg-gradient-to-r from-crimson-500 to-slate-800"></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs font-bold text-crimson-600 bg-crimson-50 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 font-serif group-hover:text-crimson-700 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <div className="text-sm text-slate-400 mb-4 flex items-center gap-2">
                   <Calendar size={14} /> {post.date}
                </div>
                
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3 flex-1">
                  {post.summary}
                </p>
                
                <div className="flex items-center text-crimson-700 font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Read Article <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400 bg-white rounded-2xl border border-dashed border-slate-300">
          <Search size={48} className="mx-auto mb-4 opacity-20" />
          <p className="text-lg">No articles found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
            className="mt-4 text-crimson-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
