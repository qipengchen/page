
import React, { useState } from 'react';
import { Mail, Github, GraduationCap, MapPin, User, BookOpen, Briefcase, Cpu, PenTool, ArrowLeft, FolderGit2, Linkedin } from 'lucide-react';
import { ProfileData } from '../types';

interface SidebarProps {
  profile: ProfileData;
  activeSection: string;
  onNavigate: (section: string) => void;
  isCollapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ profile, activeSection, onNavigate, isCollapsed = false }) => {
  // State to track if image failed to load
  const [imgError, setImgError] = useState(false);

  // Reordered navigation items: About -> Publications -> Projects -> Skills -> Experience -> Blog
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: PenTool },
  ];

  // Get initials from name (e.g. "Qipeng Chen" -> "QC")
  const initials = profile.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <aside 
      className={`
        bg-slate-900 text-white flex flex-col z-20 shadow-2xl transition-all duration-500 ease-in-out
        ${isCollapsed 
          ? 'w-full lg:w-24 lg:h-screen lg:sticky lg:top-0 p-4 items-center justify-between' 
          : 'w-full lg:w-[22rem] xl:w-[26rem] lg:h-screen lg:sticky lg:top-0 p-8 overflow-y-auto hide-scrollbar'
        }
      `}
    >
      <div className={`flex flex-col w-full ${isCollapsed ? 'items-center' : 'items-start'}`}>
        {/* Top Section */}
        <div className={`flex flex-col ${isCollapsed ? 'items-center' : 'items-start'} animate-slide-in-right w-full`}>
          
          {/* Back Button (Only in collapsed mode) */}
          {isCollapsed && (
            <button 
              onClick={() => onNavigate('about')}
              className="mb-8 p-2 bg-slate-800 rounded-full hover:bg-crimson-600 text-slate-300 hover:text-white transition-all"
              title="Back to Home"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {/* Profile Image */}
          {profile.avatar && (
            <div 
              onClick={() => isCollapsed && onNavigate('about')}
              className={`
                rounded-full bg-slate-800 border-slate-700 overflow-hidden relative shadow-lg group cursor-pointer transition-all duration-500 flex items-center justify-center
                ${isCollapsed 
                  ? 'w-12 h-12 border-2 mb-8 hover:scale-110 hover:border-crimson-500' 
                  : 'w-32 h-32 border-4 mb-6 mx-auto lg:mx-0'
                }
              `}
            >
               {!imgError ? (
                 <img 
                   src={profile.avatar} 
                   alt={profile.name}
                   onError={() => setImgError(true)}
                   className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
                 />
               ) : (
                 <span className={`font-serif font-bold text-slate-300 ${isCollapsed ? 'text-sm' : 'text-3xl'}`}>
                   {initials}
                 </span>
               )}
            </div>
          )}

          {/* Full Profile Info (Hidden when collapsed) */}
          <div className={`transition-opacity duration-300 ${isCollapsed ? 'hidden opacity-0' : 'block opacity-100'}`}>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-2 tracking-tight">{profile.name}</h1>
            <div className="text-crimson-100 font-light text-lg mb-4">{profile.title}</div>
            
            <div className="space-y-2 text-slate-400 text-sm mb-8">
              <div className="flex items-start gap-2 hover:text-white transition-colors">
                <GraduationCap size={16} className="mt-1 shrink-0 text-crimson-500" />
                <span>{profile.department}</span>
              </div>
              <div className="flex items-start gap-2 hover:text-white transition-colors">
                <MapPin size={16} className="mt-1 shrink-0 text-crimson-500" />
                <span>{profile.university}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-10 flex-wrap">
              <a href={`mailto:${profile.email}`} className="p-2 bg-slate-800 rounded hover:bg-crimson-600 hover:-translate-y-1 transition-all" title="Email">
                <Mail size={20} />
              </a>
              <a href={profile.socials.github} className="p-2 bg-slate-800 rounded hover:bg-crimson-600 hover:-translate-y-1 transition-all" title="Github" target="_blank" rel="noreferrer">
                <Github size={20} />
              </a>
              {profile.socials.googleScholar && (
                <a href={profile.socials.googleScholar} className="p-2 bg-slate-800 rounded hover:bg-crimson-600 hover:-translate-y-1 transition-all" title="Google Scholar" target="_blank" rel="noreferrer">
                  <GraduationCap size={20} />
                </a>
              )}
              {profile.socials.linkedin && (
                <a href={profile.socials.linkedin} className="p-2 bg-slate-800 rounded hover:bg-crimson-600 hover:-translate-y-1 transition-all" title="LinkedIn" target="_blank" rel="noreferrer">
                  <Linkedin size={20} />
                </a>
              )}
              <a href={profile.socials.researchgate} className="p-2 bg-slate-800 rounded hover:bg-crimson-600 hover:-translate-y-1 transition-all font-bold font-serif flex items-center justify-center w-9 h-9" title="ResearchGate" target="_blank" rel="noreferrer">
                RG
              </a>
              <a href={profile.socials.orcid} className="p-2 bg-slate-800 rounded hover:bg-crimson-600 hover:-translate-y-1 transition-all font-bold flex items-center justify-center w-9 h-9" title="ORCID" target="_blank" rel="noreferrer">
                iD
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`animate-fade-in-up delay-200 w-full ${isCollapsed ? 'flex-1 flex flex-col justify-center' : 'mt-2'}`}>
          <ul className={`space-y-3 ${isCollapsed ? 'flex flex-col items-center gap-4' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => onNavigate(item.id)}
                  title={isCollapsed ? item.label : ''}
                  className={`
                    transition-all duration-300 group flex items-center
                    ${isCollapsed 
                      ? 'justify-center p-3 rounded-xl w-12 h-12 mx-auto' 
                      : 'text-left w-full'
                    }
                    ${activeSection === item.id 
                      ? (isCollapsed ? 'bg-crimson-600 text-white shadow-lg scale-110' : 'text-crimson-400 translate-x-2') 
                      : (isCollapsed ? 'text-slate-400 hover:bg-slate-800 hover:text-white' : 'text-slate-400 hover:text-white')
                    }
                  `}
                >
                  {isCollapsed ? (
                    <item.icon size={24} />
                  ) : (
                    <>
                      <span className={`h-px w-8 mr-3 transition-colors duration-300 ${activeSection === item.id ? 'bg-crimson-400 w-12' : 'bg-slate-700 group-hover:bg-white'}`}></span>
                      <span className="uppercase tracking-widest text-sm font-semibold">{item.label}</span>
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className={`mt-auto pt-10 text-xs text-slate-600 animate-fade-in delay-300 ${isCollapsed ? 'hidden' : 'block'}`}>
        &copy; {new Date().getFullYear()} {profile.name}. <br/>
        Built with React & Tailwind.
      </div>
    </aside>
  );
};
