import React from 'react';
import { GoogleScholar } from '../types';
import { BarChart3 } from 'lucide-react';

interface GoogleScholarStatsProps {
  scholar: GoogleScholar;
  profileUrl?: string;
}

const StatItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <div className="font-bold text-2xl text-slate-800">{value}</div>
    <div className="text-xs text-slate-500 uppercase tracking-wider">{label}</div>
  </div>
);

export const GoogleScholarStats: React.FC<GoogleScholarStatsProps> = ({ scholar, profileUrl }) => {
  return (
    <a 
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-crimson-200 hover:shadow-md transition-all duration-300 group"
    >
      <h3 className="font-serif font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
        <BarChart3 size={16} className="text-crimson-700" />
        Google Scholar
      </h3>
      <div className="flex justify-around items-center">
        <StatItem value={scholar.citations} label="Citations" />
        <StatItem value={scholar.hIndex} label="h-index" />
        <StatItem value={scholar.i10Index} label="i10-index" />
      </div>
    </a>
  );
};
