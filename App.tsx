
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { PublicationItem } from './components/PublicationItem';
import { BlogView } from './components/BlogView';
import { GoogleScholarStats } from './components/GoogleScholarStats';
import { PROFILE } from './data';
import { Briefcase, Award, Download, BookOpen } from 'lucide-react';

type ViewState = 'home' | 'blog';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Scroll observer only active when in home view
  useEffect(() => {
    if (currentView !== 'home') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-10% 0px -50% 0px" }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [currentView]);

  const handleNavigate = (id: string) => {
    if (id === 'blog') {
      setCurrentView('blog');
      setActiveSection('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      // If we are already home, just scroll, otherwise wait for render then scroll
      if (currentView === 'home') {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        setTimeout(() => {
           const element = document.getElementById(id);
           element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      setActiveSection(id);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 transition-all duration-500">
      {/* Sidebar Navigation */}
      <Sidebar 
        profile={PROFILE} 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        isCollapsed={currentView === 'blog'} 
      />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 lg:px-16 lg:py-12 overflow-y-auto min-h-screen hide-scrollbar relative transition-all duration-500">
        
        {/* HOME VIEW */}
        {currentView === 'home' && (
          <div className="animate-fade-in-up">
            {/* About Section */}
            <section id="about" className="mb-20 pt-10 lg:pt-0 max-w-4xl mx-auto scroll-mt-20">
              <div className="mb-8 animate-slide-in-right delay-100">
                 <h2 className="text-crimson-800 text-sm font-bold tracking-widest uppercase mb-2">Biography</h2>
                 {PROFILE.bio.split('\n\n').map((paragraph, index) => (
                   <p key={index} className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed mb-6">
                     {paragraph}
                   </p>
                 ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in-up delay-200">
                <div className="bg-white p-6 rounded-lg border-l-4 border-crimson-600 shadow-sm hover:shadow-md transition-shadow duration-300">
                   <h3 className="font-serif font-bold text-slate-900 mb-4 uppercase tracking-wider">Education</h3>
                   <div className="space-y-6">
                     {PROFILE.education.map((edu, i) => (
                       <div key={i} className="relative pl-4 border-l border-slate-200">
                         <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-300 rounded-full ring-4 ring-white"></div>
                         <div className="font-bold text-slate-800">{edu.degree}</div>
                         <div className="text-sm text-crimson-700 font-medium">{edu.major}</div>
                         <div className="text-xs text-slate-500 mt-1">{edu.institution}, {edu.location}</div>
                         {edu.advisor && (
                           <div className="text-xs text-slate-600 mt-2 font-medium italic leading-relaxed">{edu.advisor}</div>
                         )}
                         <div className="text-xs font-mono text-slate-400 mt-2 ml-0.5">{edu.period}</div>
                       </div>
                     ))}
                   </div>
                </div>
                
                <div className="flex flex-col gap-6">
                   {/* Research Interests - Moved here */}
                   <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-crimson-200 transition-colors">
                      <h3 className="font-serif font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Research Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {PROFILE.interests.map(tag => (
                          <span key={tag} className="bg-crimson-50 text-crimson-700 px-3 py-1.5 rounded text-xs font-bold border border-crimson-100 hover:bg-crimson-100 transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                   </div>
                   {PROFILE.scholar && (
                    <GoogleScholarStats 
                      scholar={PROFILE.scholar} 
                      profileUrl={PROFILE.socials.googleScholar}
                    />
                   )}
                   {/* CV Download */}
                   <div className="bg-slate-100 p-6 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                     <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                       <Download size={18} /> Download CV
                     </h3>
                     <p className="text-sm text-slate-500 mb-4">Get the full detailed resume in PDF format.</p>
                     {/* CHANGE THE HREF BELOW TO YOUR CV PATH */}
                     <a 
                       href="./cv.pdf" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block text-center bg-slate-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-crimson-700 transition-colors w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                     >
                       Download PDF
                     </a>
                   </div>
                </div>
              </div>
            </section>

            <hr className="border-slate-200 mb-20 max-w-5xl mx-auto" />

            {/* Publications Section */}
            <section id="publications" className="mb-20 max-w-4xl mx-auto scroll-mt-20">
              <div className="flex items-baseline justify-between mb-8 animate-slide-in-right">
                <h2 className="text-3xl font-serif font-bold text-slate-900">Publications</h2>
                <span className="text-slate-400 text-sm font-mono bg-slate-100 px-2 py-1 rounded-full">{PROFILE.publications.length} Total</span>
              </div>
              <div className="space-y-2">
                {PROFILE.publications.map((pub, index) => (
                  <div key={pub.id} className={`animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                    <PublicationItem pub={pub} index={index} />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 animate-fade-in-up delay-300">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 pl-4 border-l-4 border-slate-200">Workshop Presentations</h3>
                <ul className="list-none space-y-4 text-slate-700">
                   {PROFILE.workshops.map((ws, i) => (
                     <li key={i} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 text-sm md:text-base leading-relaxed hover:border-crimson-100 transition-colors">
                       {ws.split('**Chen, Q.**').map((part, idx, arr) => (
                         <span key={idx}>
                           {part}
                           {idx < arr.length - 1 && <strong className="font-bold text-slate-900">Chen, Q.</strong>}
                         </span>
                       ))}
                     </li>
                   ))}
                </ul>
              </div>
            </section>

            <hr className="border-slate-200 mb-20 max-w-5xl mx-auto" />

            {/* Projects & Awards Section */}
            <section id="projects" className="mb-20 max-w-5xl mx-auto scroll-mt-20">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 animate-slide-in-right">Projects & Awards</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {PROFILE.projects.map((proj, i) => (
                  <div key={i} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col hover:border-crimson-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="flex items-start justify-between mb-4">
                       <div className="bg-indigo-50 p-2 rounded text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors"><Briefcase size={20} /></div>
                       <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">{proj.duration}</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-crimson-700 transition-colors">{proj.title}</h3>
                    <p className="text-sm text-slate-500 font-medium mb-4">{proj.role}</p>
                    <p className="text-sm text-slate-600 mb-4 flex-1">{proj.description}</p>
                    <div className="text-xs text-slate-400 font-mono border-t border-slate-100 pt-3">
                      {proj.funding}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 rounded-xl p-8 shadow-sm animate-fade-in-up delay-300">
                <h3 className="flex items-center gap-2 font-bold text-yellow-800 mb-6">
                  <Award size={24} />
                  Awards & Honors
                </h3>
                <ul className="space-y-4">
                  {PROFILE.awards.map((award, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 shrink-0"></div>
                      <span className="font-medium">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <hr className="border-slate-200 mb-20 max-w-5xl mx-auto" />

            {/* Skills Section */}
            <section id="skills" className="mb-20 max-w-3xl mx-auto scroll-mt-20">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 animate-slide-in-right">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PROFILE.skills.map((skillGroup, i) => (
                  <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <h3 className="font-bold text-slate-400 uppercase tracking-wider text-sm mb-4 border-b border-slate-200 pb-2">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {skillGroup.items.map((item, idx) => {
                        // Check if the item has a URL mapping
                        const skillUrlMap: {[key: string]: string} = {
                            "pymc": "https://www.pymc.io/",
                            "numpy": "https://numpy.org/",
                            "numpyro": "https://num.pyro.ai/",
                            "seaborn": "https://seaborn.pydata.org/",
                            "mirt": "https://github.com/philchalmers/mirt",
                            "gdina": "https://github.com/Wenchao-Ma/GDINA",
                            "ggplot2": "https://ggplot2.tidyverse.org/",
                            "SQL": "https://en.wikipedia.org/wiki/SQL"
                        };
                        const url = skillUrlMap[item];
                        
                        return url ? (
                          <a 
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-700 font-medium text-lg hover:text-crimson-700 hover:translate-x-2 transition-all duration-200 cursor-pointer block"
                          >
                            {item}
                          </a>
                        ) : (
                          <span key={idx} className="text-slate-700 font-medium text-lg hover:text-crimson-700 hover:translate-x-2 transition-all duration-200 cursor-default block">
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-slate-200 mb-20 max-w-5xl mx-auto" />

            {/* Experience Section - Moved to bottom */}
            <section id="experience" className="mb-20 max-w-3xl mx-auto scroll-mt-20">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 animate-slide-in-right">Work Experience</h2>
              <div className="relative border-l-2 border-slate-200 ml-3 space-y-10">
                {PROFILE.experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-crimson-500"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800">{exp.role}</h3>
                      <span className="font-mono text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    
                    <div className="text-crimson-700 font-medium mb-1">{exp.company} <span className="text-slate-400 text-sm font-normal">• {exp.type}</span></div>
                    <div className="text-sm text-slate-500 mb-4">{exp.location}</div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* BLOG VIEW (SEPARATE PAGE STYLE) */}
        {currentView === 'blog' && (
          <div className="animate-fade-in-up max-w-5xl mx-auto min-h-screen pt-8">
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 bg-crimson-100 rounded-lg text-crimson-700">
                 <BookOpen size={28} />
               </div>
               <div>
                 <h2 className="text-3xl font-serif font-bold text-slate-900">Research Blog</h2>
                 <p className="text-slate-500 text-sm italic">
                   Thoughts, Code, and Statistics
                 </p>
               </div>
             </div>
             
             <div className="h-px bg-gradient-to-r from-slate-200 to-transparent mb-8"></div>
             
             <BlogView posts={PROFILE.blogs} />
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
