import React from 'react';
import { 
  FolderKanban, 
  ArrowRight, 
  Briefcase, 
  ShieldCheck, 
  Compass, 
  Sprout, 
  Sparkles,
  Users
} from 'lucide-react';
import { LessonModule } from '../types/curriculum';

interface HandsOnProjectsSectionProps {
  onOpenProject: (lesson: LessonModule) => void;
  modules: LessonModule[];
}

export const HandsOnProjectsSection: React.FC<HandsOnProjectsSectionProps> = ({
  onOpenProject,
  modules,
}) => {
  const projectModules = modules.filter(m => m.category === 'projects' || m.id.includes('project') || m.id.includes('business') || m.id.includes('filter'));

  const featuredProjects = [
    {
      title: 'Start a 5,000 UGX Tiny Business',
      tagline: 'Give child 5,000 UGX. Calculate cost, selling price, and profit through real trade.',
      pillar: 'Math + Economics + Communication',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-600',
      moduleId: 'age9-12-fin-tiny-business',
    },
    {
      title: 'Build a Clean Water Filter',
      tagline: 'Layer gravel, fine sand, and crushed charcoal in a cut bottle to clean muddy water.',
      pillar: 'Science + Environmental Engineering',
      icon: ShieldCheck,
      color: 'from-teal-600 to-emerald-700',
      moduleId: 'age9-12-science-water-filter',
    },
    {
      title: 'The Living Seed Sprout',
      tagline: 'Watch a sleeping bean baby wake up in a damp cup and stretch its roots down and stems up.',
      pillar: 'Biology + Agriculture + Patience',
      icon: Sprout,
      color: 'from-emerald-600 to-green-700',
      moduleId: 'age3-5-science-seeds-sprout',
    },
    {
      title: 'Cooking with Fractions',
      tagline: 'See ½ cup + ¼ cup = ¾ cup with real chapatis and water cups in the kitchen.',
      pillar: 'Practical Mathematics + Food',
      icon: Sparkles,
      color: 'from-blue-600 to-indigo-700',
      moduleId: 'age6-8-math-cooking-fractions',
    }
  ];

  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white relative overflow-hidden shadow-xl">
      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <FolderKanban className="w-4 h-4" />
              <span>Parent + Child Home Laboratories</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] mt-1">
              Real-World Projects That Turn Home Into a Lab
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Instead of passively consuming videos, tackle a tangible project together. Learn economics with real coins, physics with clean water, and biology with seeds.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs font-semibold border border-white/15">
            <Users className="w-3.5 h-3.5 text-amber-300" />
            <span>Collaborative Growth</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProjects.map((p, idx) => {
            const Icon = p.icon;
            const targetModule = modules.find(m => m.id === p.moduleId);

            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${p.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    {p.pillar}
                  </span>

                  <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit'] leading-snug group-hover:text-amber-300 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-3 leading-relaxed">
                    {p.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <button
                    onClick={() => {
                      if (targetModule) onOpenProject(targetModule);
                    }}
                    className="w-full flex items-center justify-between text-xs font-bold text-amber-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Launch Project Lab</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
