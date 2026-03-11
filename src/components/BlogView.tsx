
import React, { useState, useMemo } from 'react';
import { Calendar, ChevronRight, Search, X } from 'lucide-react';
import { BlogPost } from '../types';

interface Props {
  posts: BlogPost[];
}

export const BlogView: React.FC<Props> = ({ posts }) => {
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

  const handleOpenPost = (post: BlogPost) => {
    if (post.url) {
      window.location.href = post.url;
    }
  };

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
              onClick={() => handleOpenPost(post)}
              className={`group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up flex flex-col ${
                post.url ? 'cursor-pointer' : 'cursor-not-allowed opacity-80'
              }`}
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
                  {post.url ? 'Read on blog site' : 'Link not available'} <ChevronRight size={16} className="ml-1" />
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
