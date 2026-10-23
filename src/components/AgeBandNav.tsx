import React from 'react';
import { AgeBand } from '../types/curriculum';
import { AGE_BAND_DETAILS } from '../data/curriculumData';
import { AGE_BAND_COLORS } from '../utils/ageColors';
import { 
  Sparkles, 
  Blocks, 
  Compass, 
  Cpu, 
  GraduationCap,
  Library,
  Flag,
  Factory
} from 'lucide-react';

interface AgeBandNavProps {
  selectedAgeBand: AgeBand;
  onSelectAgeBand: (band: AgeBand) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenScopeAndSequence?: () => void;
  onOpenCambridge?: () => void;
  onOpenBooksAndResources?: () => void;
  onOpenUsCurriculum?: () => void;
  onOpenManufacturing?: () => void;
}

export const AgeBandNav: React.FC<AgeBandNavProps> = ({
  selectedAgeBand,
  onSelectAgeBand,
  selectedCategory,
  onSelectCategory,
  onOpenScopeAndSequence,
  onOpenCambridge,
  onOpenBooksAndResources,
  onOpenUsCurriculum,
  onOpenManufacturing,
}) => {
  const ageBands: { id: AgeBand; label: string; stage: string; icon: any; emoji: string }[] = [
    { id: '3-5', label: 'Ages 3–5', stage: 'Discover', icon: Sparkles, emoji: '🐣' },
    { id: '6-8', label: 'Ages 6–8', stage: 'Explore & Build', icon: Blocks, emoji: '🧱' },
    { id: '9-12', label: 'Ages 9–11 / 9–12', stage: 'Understand', icon: Compass, emoji: '🧭' },
    { id: '13-16', label: 'Ages 12–14 / 13–16', stage: 'Investigate', icon: Cpu, emoji: '🔬' },
    { id: '17+', label: 'Ages 15–17 / 18+', stage: 'Create & Launch', icon: GraduationCap, emoji: '👑' },
  ];

  const categories = [
    { id: 'all', label: 'All Modules' },
    { id: 'language', label: '1. Language & Stories 📖' },
    { id: 'math', label: '2. Math & Logic 🔢' },
    { id: 'science', label: '3. Practical Science 🔬' },
    { id: 'technology', label: '4. Technology & Digital 💻' },
    { id: 'humanity-society', label: '5. Humanity & Society 🌍' },
    { id: 'finance', label: '6. Financial Literacy 💰' },
    { id: 'wellbeing', label: '7. Wellbeing & Character 💖' },
    { id: 'practical-skills', label: '8. Practical Skills 🛠️' },
    { id: 'arts-culture', label: '9. Arts & Culture 🎨' },
    { id: 'capstone', label: '10. Capstones & Integration 🏗️' },
    { id: 'social-kindness', label: 'Kindness & Community 🤝' },
    { id: 'soft-skills', label: 'Soft Skills 💡' },
    { id: 'christian-education', label: 'Christian Education ✝️' },
    { id: 'godly-life-skills', label: 'Godly Life Skills 🕊️' },
    { id: 'projects', label: 'Parent + Child Projects 🛠️' },
  ];

  const currentDetail = AGE_BAND_DETAILS[selectedAgeBand];
  const activeColorTheme = AGE_BAND_COLORS[selectedAgeBand];

  return (
    <div className="mb-8">
      {/* Age Band Header with Scope & Sequence Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit'] flex items-center space-x-2">
            <span>Age Learning Pathways</span>
            <span className={`text-[11px] font-black uppercase px-2 py-0.5 rounded-full ${activeColorTheme.cardStageBadge}`}>
              {activeColorTheme.stage}
            </span>
          </h2>
          <p className="text-xs text-slate-500">
            Each age group features a distinct developmental color & curriculum pathway (Scope & Sequence v1.0).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0 self-start sm:self-auto">
          {onOpenScopeAndSequence && (
            <button
              onClick={onOpenScopeAndSequence}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              <span>📜 Scope & Sequence v1.0</span>
            </button>
          )}

          {onOpenCambridge && (
            <button
              onClick={onOpenCambridge}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              title="Cambridge Pathway & International Benchmarks"
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-300" />
              <span>🎓 Cambridge</span>
            </button>
          )}

          {onOpenBooksAndResources && (
            <button
              onClick={onOpenBooksAndResources}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              title="Books, Famous Authors & Global Resource Centers"
            >
              <Library className="w-3.5 h-3.5 text-amber-200" />
              <span>📚 Books & Resources</span>
            </button>
          )}

          {onOpenUsCurriculum && (
            <button
              onClick={onOpenUsCurriculum}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-rose-900 hover:bg-rose-800 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              title="USA Education System, Common Core & AP Exams"
            >
              <Flag className="w-3.5 h-3.5 text-rose-300" />
              <span>🇺🇸 USA K–12</span>
            </button>
          )}

          {onOpenManufacturing && (
            <button
              onClick={onOpenManufacturing}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
              title="Reading to Inventions & Manufactured Products for Market"
            >
              <Factory className="w-3.5 h-3.5 text-amber-400" />
              <span>🏭 Manufacturing</span>
            </button>
          )}
        </div>
      </div>

      {/* 5 Distinctly Colored Age Band Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
        {ageBands.map((band) => {
          const isSelected = selectedAgeBand === band.id;
          const bandTheme = AGE_BAND_COLORS[band.id];
          return (
            <button
              key={band.id}
              onClick={() => onSelectAgeBand(band.id)}
              className={`p-3 sm:p-4 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                isSelected
                  ? `${bandTheme.navActiveBg} ${bandTheme.navActiveBorder} ${bandTheme.navActiveShadow} ring-2 ${bandTheme.navActiveRing}`
                  : `bg-white text-slate-700 border-slate-200/90 ${bandTheme.navTabBorderHover} hover:bg-slate-50 shadow-xs`
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl sm:text-2xl">{band.emoji}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  isSelected 
                    ? bandTheme.navBadgeActive 
                    : bandTheme.navBadgeInactive
                }`}>
                  {band.stage}
                </span>
              </div>
              <p className={`font-extrabold text-xs sm:text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                {band.label}
              </p>
              <span className={`text-[10px] block mt-0.5 font-medium ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                {band.id === '3-5' && 'Discover • Warm Sun'}
                {band.id === '6-8' && 'Explore • Forest Mint'}
                {band.id === '9-12' && 'Understand • Ocean Blue'}
                {band.id === '13-16' && 'Investigate • Deep Indigo'}
                {band.id === '17+' && 'Create • Royal Plum'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Info Banner (Colored by the Selected Age Band) */}
      <div className={`mt-3.5 p-3.5 sm:p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm transition-all ${activeColorTheme.bannerBg} ${activeColorTheme.bannerBorder}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`font-extrabold ${activeColorTheme.bannerTitle}`}>
            Stage: {activeColorTheme.stage} ({currentDetail?.label || activeColorTheme.label})
          </span>
          <span className="text-slate-400 hidden sm:inline">•</span>
          <span className="text-slate-700 font-medium">
            {currentDetail?.description || 'Foundational developmental curriculum'}
          </span>
        </div>
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md shrink-0 ${activeColorTheme.bannerTagBg} ${activeColorTheme.bannerTagText}`}>
          Motto: {selectedAgeBand === '3-5' ? 'I DISCOVER' : selectedAgeBand === '6-8' ? 'I EXPLORE' : selectedAgeBand === '9-12' ? 'I UNDERSTAND' : selectedAgeBand === '13-16' ? 'I INVESTIGATE' : 'I CREATE & LAUNCH'}
        </span>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
