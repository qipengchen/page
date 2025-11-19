import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Publication } from '../types';

interface Props {
  pub: Publication;
  index: number;
}

export const PublicationItem: React.FC<Props> = ({ pub, index }) => {
  // Function to parse bold text in markdown style **text**
  const renderCitation = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-slate-700">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:border-crimson-200 transition-colors group">
      <div className="flex gap-4">
        <div className="text-crimson-800 font-bold font-serif opacity-50 text-lg select-none">
          {index + 1}.
        </div>
        <div className="flex-1">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            {renderCitation(pub.citation)}
          </p>
          {pub.doi && (
            <a 
              href={pub.doi} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-crimson-700 hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View DOI <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};