import React from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  Printer, 
  Sparkles, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Compass,
  Star,
  Globe
} from 'lucide-react';
import { ChildProfile } from '../types/curriculum';
import { CURRICULUM_MODULES } from '../data/curriculumData';

interface LearningPassportModalProps {
  currentProfile: ChildProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const LearningPassportModal: React.FC<LearningPassportModalProps> = ({
  currentProfile,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const allBadges = CURRICULUM_MODULES.map(m => ({
    badgeName: m.badgeName,
    description: m.badgeDescription,
    title: m.title,
    ageBand: m.ageBand,
    categoryLabel: m.categoryLabel,
  }));

  const stampedBadgeNames = new Set(currentProfile.stampedCompetencies.map(s => s.badgeName));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-blue-100 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Passport Header: Official Look */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center text-3xl shadow-lg border-2 border-amber-300">
              {currentProfile.avatar}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                  OFFICIAL HOME ACADEMY PASSPORT
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-['Outfit']">
                {currentProfile.name}'s Learning Passport
              </h2>
              <p className="text-xs text-blue-200 mt-0.5">
                Age: {currentProfile.age} • Total Stamped Competencies: {currentProfile.stampedCompetencies.length} of {allBadges.length}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1 text-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span>Mentality: "What Can You Do?"</span>
              </span>
              <span className="flex items-center space-x-1 text-blue-200">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentProfile.totalMinutes} Learning Minutes</span>
              </span>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Passport Sheet</span>
            </button>
          </div>
        </div>

        {/* Passport Philosophy Notice */}
        <div className="bg-amber-50 p-3.5 border-b border-amber-100 text-xs text-amber-900 flex items-center justify-between">
          <p>
            <span className="font-bold">Not marks, but capabilities! </span>
            Every stamp certifies a real skill {currentProfile.name} has demonstrated at home.
          </p>
        </div>

        {/* Stamps & Competencies Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Certified Competency Badges
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allBadges.map((badge, idx) => {
              const isStamped = stampedBadgeNames.has(badge.badgeName);
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all flex items-start space-x-3 ${
                    isStamped
                      ? 'bg-gradient-to-br from-amber-50/80 to-orange-50/40 border-amber-300 shadow-xs ring-1 ring-amber-300/60'
                      : 'bg-slate-50/60 border-slate-200 opacity-60'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold ${
                    isStamped ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-200 text-slate-400'
                  }`}>
                    {isStamped ? <Award className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xs sm:text-sm font-bold truncate ${
                        isStamped ? 'text-slate-900' : 'text-slate-500'
                      }`}>
                        {badge.badgeName}
                      </h4>
                      {isStamped && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-1" />
                      )}
                    </div>

                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                      {badge.description}
                    </p>

                    <div className="mt-2 flex items-center space-x-2 text-[10px] font-semibold text-slate-400">
                      <span>Ages {badge.ageBand}</span>
                      <span>•</span>
                      <span>{badge.categoryLabel}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* World Changer Community Missions Certified */}
          {currentProfile.completedCommunityMissions && currentProfile.completedCommunityMissions.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-200">
              <div className="flex items-center space-x-2 mb-3">
                <Globe className="w-4 h-4 text-emerald-600" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">
                  Certified World Changer Actions ({currentProfile.completedCommunityMissions.length})
                </h3>
              </div>

              <div className="space-y-2">
                {currentProfile.completedCommunityMissions.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start justify-between text-xs">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-emerald-950 font-['Outfit']">{item.missionTitle}</span>
                        <span className="text-emerald-600 text-[11px]">• {item.lessonTitle}</span>
                      </div>
                      <p className="text-slate-600 mt-1 italic leading-relaxed">"{item.impactSummary}"</p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0 ml-2">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Passport Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Educate the World • Home Learning Initiative</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
          >
            Close Passport
          </button>
        </div>

      </div>
    </div>
  );
};
