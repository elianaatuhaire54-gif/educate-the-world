import React, { useState, useMemo } from 'react';
import { 
  X, 
  Globe, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Heart, 
  Users, 
  Wrench, 
  BookOpen, 
  FlaskConical, 
  ShieldCheck, 
  Share2,
  Calendar,
  PlusCircle,
  Search,
  Filter,
  Check,
  ArrowRight,
  Target
} from 'lucide-react';
import { ChildProfile, LessonModule, AgeBand } from '../types/curriculum';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { UN_SDG_GOALS, UnSdgGoal } from '../data/unSdgData';

interface WorldChangersModalProps {
  currentProfile: ChildProfile;
  isOpen: boolean;
  onClose: () => void;
  onLogCommunityMission: (lessonTitle: string, missionTitle: string, note: string) => void;
  onLaunchLesson: (lesson: LessonModule) => void;
}

export const WorldChangersModal: React.FC<WorldChangersModalProps> = ({
  currentProfile,
  isOpen,
  onClose,
  onLogCommunityMission,
  onLaunchLesson
}) => {
  const [selectedSdg, setSelectedSdg] = useState<number | 'all'>('all');
  const [selectedAgeBand, setSelectedAgeBand] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLoggingMission, setActiveLoggingMission] = useState<{ lesson: LessonModule; missionTitle: string } | null>(null);
  const [reflectionNote, setReflectionNote] = useState<string>('');
  const [toast, setToast] = useState<string | null>(null);

  if (!isOpen) return null;

  // Filter modules that have community missions
  const modulesWithCommunityMissions = CURRICULUM_MODULES.filter(m => m.communityMission);

  // Group count by SDG
  const sdgCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    for (let i = 1; i <= 17; i++) counts[i] = 0;
    modulesWithCommunityMissions.forEach(m => {
      const num = m.communityMission?.unSdg?.number;
      if (num && counts[num] !== undefined) counts[num]++;
    });
    return counts;
  }, [modulesWithCommunityMissions]);

  const filteredMissions = useMemo(() => {
    return modulesWithCommunityMissions.filter(m => {
      // SDG filter
      if (selectedSdg !== 'all') {
        if (m.communityMission?.unSdg?.number !== selectedSdg) return false;
      }
      // Age filter
      if (selectedAgeBand !== 'all' && m.ageBand !== selectedAgeBand) return false;
      // Category filter
      if (selectedCategory !== 'all' && m.category !== selectedCategory) return false;
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = m.title.toLowerCase().includes(q);
        const missionTitleMatch = m.communityMission?.title.toLowerCase().includes(q);
        const impactMatch = m.communityMission?.impactGoal.toLowerCase().includes(q);
        const sdgMatch = m.communityMission?.unSdg?.shortName.toLowerCase().includes(q);
        if (!titleMatch && !missionTitleMatch && !impactMatch && !sdgMatch) return false;
      }
      return true;
    });
  }, [modulesWithCommunityMissions, selectedSdg, selectedAgeBand, selectedCategory, searchQuery]);

  const completedMissions = currentProfile.completedCommunityMissions || [];
  const completedCount = completedMissions.length;

  // Rank / Level based on completed community deeds
  const getRank = (count: number) => {
    if (count >= 10) return { level: 5, title: 'Global Transformation Leader (Omukulembeze w’Ensi)', badge: '🌍👑🏛️' };
    if (count >= 5) return { level: 4, title: 'Nation Builder (Omuzimbi w’Eggwanga)', badge: '👑🏛️' };
    if (count >= 3) return { level: 3, title: 'Salt & Light Leader (Ettawaaza y’Ensi)', badge: '🌟🕯️' };
    if (count >= 1) return { level: 2, title: 'Neighborhood Peacemaker (Omutabaganya)', badge: '🕊️🤝' };
    return { level: 1, title: 'Community Seedling (Ensigo y’Ensi)', badge: '🌱✨' };
  };

  const currentRank = getRank(completedCount);

  const handleConfirmLog = () => {
    if (!activeLoggingMission) return;
    onLogCommunityMission(
      activeLoggingMission.lesson.title, 
      activeLoggingMission.missionTitle, 
      reflectionNote || activeLoggingMission.lesson.communityMission?.impactGoal || 'Community deed completed'
    );
    setActiveLoggingMission(null);
    setReflectionNote('');
    setToast(`🎉 Wonderful job, ${currentProfile.name}! Community impact stamped into your passport!`);
    setTimeout(() => setToast(null), 3500);
  };

  const isMissionAlreadyDone = (missionTitle: string) => {
    return completedMissions.some(m => m.missionTitle === missionTitle);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-emerald-100 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-xs font-bold text-emerald-200 uppercase tracking-wider mb-1">
            <Globe className="w-4 h-4 text-emerald-300" />
            <span>United Nations Sustainable Development Goals (SDGs 1–17) • World Changers Movement</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit']">
            Changing the World in Every Lesson
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-3xl leading-relaxed">
            Real education transforms reality. Every lesson for every age group (Ages 3–18+) includes an authentic <strong>United Nations Sustainable Development Goal (SDG)</strong> action mission — equipping children and youth to preserve clean water, eradicate hunger, build clean energy, practice fair trade, and lead peaceful communities!
          </p>

          {/* Child Impact Stats Bar */}
          <div className="mt-4 p-3.5 rounded-2xl bg-black/20 backdrop-blur-xs border border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{currentRank.badge}</span>
              <div>
                <span className="text-[10px] uppercase font-bold text-emerald-200 block">
                  {currentProfile.name}'s World Changer Rank:
                </span>
                <span className="text-sm font-bold text-white">
                  {currentRank.title} (Level {currentRank.level})
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-emerald-200 block">Community Deeds Done</span>
                <span className="text-base font-black text-amber-300 font-mono">{completedCount} Deeds</span>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-[10px] uppercase font-bold text-emerald-200 block">Location Context</span>
                <span className="text-xs font-bold text-white">{currentProfile.locationName || 'Local Community'} ({currentProfile.location || 'Rural'})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Toast */}
        {toast && (
          <div className="bg-emerald-600 text-white p-2.5 text-xs text-center font-bold animate-in fade-in">
            {toast}
          </div>
        )}

        {/* Interactive UN 17 SDGs Filter Ribbon */}
        <div className="bg-slate-900 text-white p-3 border-b border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
              <Target className="w-3.5 h-3.5 text-emerald-400" />
              <span>Filter by United Nations 17 Sustainable Development Goals:</span>
            </span>
            {selectedSdg !== 'all' && (
              <button
                onClick={() => setSelectedSdg('all')}
                className="text-[10px] text-amber-300 hover:underline font-bold"
              >
                Show All 17 Goals (Reset)
              </button>
            )}
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <button
              onClick={() => setSelectedSdg('all')}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer text-xs ${
                selectedSdg === 'all'
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All 17 SDGs ({modulesWithCommunityMissions.length})
            </button>

            {Object.values(UN_SDG_GOALS).map((sdg) => {
              const count = sdgCounts[sdg.number] || 0;
              const isSelected = selectedSdg === sdg.number;

              return (
                <button
                  key={sdg.number}
                  onClick={() => setSelectedSdg(isSelected ? 'all' : sdg.number)}
                  className={`px-2.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-1.5 text-xs ${
                    isSelected
                      ? 'bg-white text-slate-950 ring-2 ring-emerald-400 shadow-md font-extrabold'
                      : 'bg-slate-800/80 text-slate-200 hover:bg-slate-700'
                  }`}
                  title={`${sdg.title} (${count} lessons)`}
                >
                  <span>{sdg.icon}</span>
                  <span>SDG {sdg.number}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-slate-900 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter Bar: Age Band, Search & Category */}
        <div className="bg-slate-50 border-b border-slate-200 p-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* Age Filters */}
          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold text-slate-500 uppercase mr-1 hidden sm:inline">Age:</span>
            {[
              { id: 'all', label: 'All Ages' },
              { id: '3-5', label: '3–5 (Discover)' },
              { id: '6-8', label: '6–8 (Build)' },
              { id: '9-12', label: '9–12 (Explore)' },
              { id: '13-16', label: '13–16 (Develop)' },
              { id: '17+', label: '17+ (Prepare)' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedAgeBand(tab.id)}
                className={`whitespace-nowrap px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedAgeBand === tab.id
                    ? 'bg-emerald-700 text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative flex-1 sm:max-w-xs min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search UN goals, water, food, tree..."
              className="w-full text-xs pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* Mission Logging Dialog when active */}
          {activeLoggingMission && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-md animate-in slide-in-from-top duration-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <h4 className="text-sm font-bold text-amber-950 font-['Outfit']">
                    Record Completed Mission: {activeLoggingMission.missionTitle}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveLoggingMission(null)}
                  className="text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <p className="text-xs text-amber-800">
                Lesson: <span className="font-semibold">{activeLoggingMission.lesson.title}</span> • Impact Goal: <span className="font-semibold">{activeLoggingMission.lesson.communityMission?.impactGoal}</span>
              </p>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  What did {currentProfile.name} do today to help the community? (Short Reflection):
                </label>
                <textarea
                  value={reflectionNote}
                  onChange={(e) => setReflectionNote(e.target.value)}
                  placeholder="e.g., We swept grandmother's compound and carried a clean jerrycan of water; she gave us a warm blessing!"
                  rows={2}
                  className="w-full text-xs p-2.5 rounded-xl border border-amber-300 focus:outline-hidden focus:ring-2 focus:ring-amber-400 bg-white"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setActiveLoggingMission(null)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmLog}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors cursor-pointer"
                >
                  Confirm & Stamp Passport 🏅
                </button>
              </div>
            </div>
          )}

          {/* Active SDG Header Card if single SDG is selected */}
          {selectedSdg !== 'all' && UN_SDG_GOALS[selectedSdg] && (
            <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r ${UN_SDG_GOALS[selectedSdg].headerGradient} text-white shadow-md space-y-1 relative overflow-hidden`}>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{UN_SDG_GOALS[selectedSdg].icon}</span>
                <h3 className="text-lg sm:text-xl font-black font-['Outfit']">
                  {UN_SDG_GOALS[selectedSdg].title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                {UN_SDG_GOALS[selectedSdg].tagline}
              </p>
              <div className="pt-2 text-xs text-white/95 border-t border-white/20 mt-2">
                <strong>Youth Action Agenda: </strong>
                <span>{UN_SDG_GOALS[selectedSdg].youthActionFocus}</span>
              </div>
            </div>
          )}

          {/* Results Count Banner */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong>{filteredMissions.length}</strong> UN Sustainable Development Goal mission{filteredMissions.length === 1 ? '' : 's'}
              {selectedSdg !== 'all' ? ` for SDG ${selectedSdg}` : ''}
              {selectedAgeBand !== 'all' ? ` for Ages ${selectedAgeBand}` : ''}
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold">
              Every lesson includes a World Changer action
            </span>
          </div>

          {/* List of Community Action Missions */}
          {filteredMissions.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-3xl">🔍</span>
              <h4 className="text-sm font-bold text-slate-800">No missions match your filter</h4>
              <p className="text-xs text-slate-500">Try changing your SDG selection or clearing the search query.</p>
              <button
                onClick={() => {
                  setSelectedSdg('all');
                  setSelectedAgeBand('all');
                  setSearchQuery('');
                }}
                className="mt-2 px-4 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMissions.map((m) => {
                const mission = m.communityMission!;
                const sdg = mission.unSdg || UN_SDG_GOALS[4];
                const isDone = isMissionAlreadyDone(mission.title);

                return (
                  <div 
                    key={m.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative flex flex-col justify-between ${
                      isDone 
                        ? 'bg-emerald-50/40 border-emerald-300 shadow-xs' 
                        : 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Top Row: SDG Badge & Age */}
                      <div className="flex items-center justify-between mb-2 gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center space-x-1">
                          <span>{sdg.icon}</span>
                          <span>SDG {sdg.number}: {sdg.shortName}</span>
                        </span>

                        {isDone ? (
                          <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Impact Stamped</span>
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-500 font-bold px-2 py-0.5 rounded-full bg-slate-100 shrink-0">
                            Ages {m.ageBand}
                          </span>
                        )}
                      </div>

                      {/* Mission Title & Lesson Link */}
                      <h3 className="text-base font-bold text-slate-900 font-['Outfit'] leading-snug">
                        {mission.title}
                      </h3>
                      
                      <p className="text-xs font-semibold text-emerald-800 mt-1">
                        Impact Goal: <span className="font-bold underline decoration-emerald-400">{mission.impactGoal}</span>
                      </p>

                      <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                        Lesson: <strong>{m.title}</strong> ({m.categoryLabel.split('•')[0]})
                      </p>

                      {/* Principle */}
                      <div className="mt-2.5 p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/80 text-[11px] text-amber-950">
                        <span className="font-bold text-amber-900">🌟 Principle for Leaders: </span>
                        "{mission.worldChangerPrinciple}"
                        {mission.dialectPhrase && (
                          <div className="mt-1 font-bold text-amber-800 flex items-center space-x-1">
                            <span>🗣️ Local Motto:</span>
                            <span className="bg-amber-100 px-1.5 py-0.2 rounded-md">{mission.dialectPhrase}</span>
                          </div>
                        )}
                      </div>

                      {/* Action Checklist Snippet */}
                      <div className="mt-2.5 space-y-1">
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">
                          Practical Action Checklist:
                        </span>
                        {mission.actionSteps.slice(0, 3).map((step, idx) => (
                          <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-600">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span className="line-clamp-2 leading-tight">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Bottom Actions */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => {
                          onClose();
                          onLaunchLesson(m);
                        }}
                        className="text-xs font-bold text-amber-600 hover:text-amber-700 underline cursor-pointer flex items-center space-x-1"
                      >
                        <span>Open Lesson & Mission</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => {
                          setActiveLoggingMission({ lesson: m, missionTitle: mission.title });
                          setReflectionNote(mission.impactGoal);
                        }}
                        className={`inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isDone 
                            ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                            : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                        }`}
                      >
                        <PlusCircle className="w-3.5 h-3.5" />
                        <span>{isDone ? 'Log Another Deed' : 'Log Deed Done 🌟'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* History of Completed Missions if any */}
          {completedMissions.length > 0 && (
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center space-x-2 font-['Outfit']">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>{currentProfile.name}'s Real-World Community Impact Log:</span>
              </h4>
              <div className="space-y-2">
                {completedMissions.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-start justify-between text-xs">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-emerald-900">{item.missionTitle}</span>
                        <span className="text-slate-400">• {item.lessonTitle}</span>
                      </div>
                      <p className="text-slate-600 mt-0.5 italic">"{item.impactSummary}"</p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-2">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>"You are the light of the world... let your light shine before others." — Matthew 5:14 • UN 2030 Agenda</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close World Changers Hub
          </button>
        </div>

      </div>
    </div>
  );
};
