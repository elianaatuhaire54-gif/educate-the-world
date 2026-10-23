import React from 'react';
import { 
  X, 
  BarChart3, 
  Heart, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Award, 
  BookOpen, 
  TrendingUp,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { ChildProfile, LessonModule } from '../types/curriculum';
import { CURRICULUM_MODULES } from '../data/curriculumData';

interface ParentDashboardModalProps {
  currentProfile: ChildProfile;
  isOpen: boolean;
  onClose: () => void;
  onOpenLesson: (lesson: LessonModule) => void;
}

export const ParentDashboardModal: React.FC<ParentDashboardModalProps> = ({
  currentProfile,
  isOpen,
  onClose,
  onOpenLesson,
}) => {
  if (!isOpen) return null;

  // Calculate stats
  const totalCompleted = currentProfile.completedLessonIds.length;
  const totalBadges = currentProfile.stampedCompetencies.length;
  const totalMinutes = currentProfile.totalMinutes || totalCompleted * 20;

  // Category progress
  const categories = [
    { name: 'Reading & Language', catKey: 'language', target: 3 },
    { name: 'Real Mathematics', catKey: 'numbers', target: 3 },
    { name: 'Practical Science', catKey: 'science', target: 4 },
    { name: 'Financial Literacy', catKey: 'finance', target: 3 },
    { name: 'Projects & Life', catKey: 'projects', target: 2 },
  ];

  const parentScaffoldingRules = [
    {
      title: 'Praise the effort, not the "marks"',
      text: 'Instead of saying "You are so smart", say: "I love how patiently you counted each seed!" This builds grit and resilience.'
    },
    {
      title: 'Wait 5 seconds before speaking',
      text: 'When you ask a question, resist the urge to answer for them. Let your child think and find their own words.'
    },
    {
      title: 'Turn "mistakes" into experiments',
      text: 'If a prediction is wrong, celebrate! "That surprised both of us! Let us test it again to see what really happens."'
    },
    {
      title: '20 minutes a day is enough',
      text: 'Do not exhaust your child with 90-minute lectures. Short, joyful daily missions build lifelong curiosity.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-amber-100 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-200 block">
            PARENT CO-EDUCATOR DASHBOARD
          </span>
          <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] mt-1">
            {currentProfile.name}'s Home Learning Journey
          </h2>
          <p className="text-xs text-amber-100 mt-0.5">
            You don't have to be a teacher. You are your child's primary learning partner.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/20 text-center">
            <div className="bg-white/10 rounded-xl p-2.5">
              <span className="text-lg font-bold block">{totalCompleted}</span>
              <span className="text-[10px] text-amber-100 uppercase tracking-wider">Missions Done</span>
            </div>
            <div className="bg-white/10 rounded-xl p-2.5">
              <span className="text-lg font-bold block">{totalMinutes}m</span>
              <span className="text-[10px] text-amber-100 uppercase tracking-wider">Minutes Together</span>
            </div>
            <div className="bg-white/10 rounded-xl p-2.5">
              <span className="text-lg font-bold block">{totalBadges}</span>
              <span className="text-[10px] text-amber-100 uppercase tracking-wider">Passport Badges</span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Progress Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Competency Pillars Progress
            </h3>

            <div className="space-y-3">
              {categories.map((c, i) => {
                // Approximate progress for demo based on completed lessons
                const count = currentProfile.completedLessonIds.length;
                const percent = Math.min(100, Math.round(((count + (i * 2)) / (c.target + 3)) * 100));

                return (
                  <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                      <span>{c.name}</span>
                      <span className="text-amber-600">{percent}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Teach Parents How to Teach Guide */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                The Secret Weapon: How to Teach at Home
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {parentScaffoldingRules.map((rule, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-xs">
                  <h4 className="font-bold text-amber-950 mb-1 flex items-center space-x-1.5">
                    <span className="w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] shrink-0">
                      {idx + 1}
                    </span>
                    <span>{rule.title}</span>
                  </h4>
                  <p className="text-slate-600 leading-relaxed pl-5">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            Back to Missions
          </button>
        </div>

      </div>
    </div>
  );
};
