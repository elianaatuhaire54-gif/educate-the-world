import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Wifi, 
  WifiOff, 
  User, 
  Plus, 
  BarChart3,
  Award,
  ChevronDown,
  Languages,
  Building2,
  TreePine,
  Globe,
  Palette,
  Library,
  BrainCircuit,
  Factory,
  Flag,
  Layers
} from 'lucide-react';
import { ChildProfile, LocationType, RegionalDialect, ChildGender, ThemePreference } from '../types/curriculum';
import { getThemeForChild } from '../utils/ageColors';

interface NavbarProps {
  currentProfile: ChildProfile;
  profiles: ChildProfile[];
  onSelectProfile: (profile: ChildProfile) => void;
  onAddChild: (
    name: string, 
    age: number, 
    location?: LocationType, 
    dialect?: RegionalDialect,
    gender?: ChildGender,
    themePreference?: ThemePreference
  ) => void;
  onOpenPassport: () => void;
  onOpenDashboard: () => void;
  onOpenTeachMeAnything: () => void;
  onOpenOfflinePack: () => void;
  onOpenLocationDialectModal: () => void;
  onOpenWorldChangers?: () => void;
  onOpenScopeAndSequence?: () => void;
  onOpenCambridge?: () => void;
  onOpenBooksAndResources?: () => void;
  onOpenSelfEducate?: () => void;
  onOpenUsCurriculum?: () => void;
  onOpenManufacturing?: (productId?: string) => void;
  onOpenWorldLanguages?: () => void;
  onOpenSubjectPacks?: () => void;
  onOpenUnescoOer?: () => void;
  onToggleLocation: (location: LocationType) => void;
  dataSaverMode: boolean;
  onToggleDataSaver: () => void;
  onUpdateThemePreference?: (theme: ThemePreference) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfile,
  profiles,
  onSelectProfile,
  onAddChild,
  onOpenPassport,
  onOpenDashboard,
  onOpenTeachMeAnything,
  onOpenOfflinePack,
  onOpenLocationDialectModal,
  onOpenWorldChangers,
  onOpenScopeAndSequence,
  onOpenCambridge,
  onOpenBooksAndResources,
  onOpenSelfEducate,
  onOpenUsCurriculum,
  onOpenManufacturing,
  onOpenWorldLanguages,
  onOpenSubjectPacks,
  onOpenUnescoOer,
  onToggleLocation,
  dataSaverMode,
  onToggleDataSaver,
  onUpdateThemePreference,
}) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [showAddChildModal, setShowAddChildModal] = useState(false);
  const [newChildName, setNewChildName] = useState('');
  const [newChildAge, setNewChildAge] = useState(4);
  const [newChildLocation, setNewChildLocation] = useState<LocationType>('rural');
  const [newChildDialect, setNewChildDialect] = useState<RegionalDialect>('Luganda');
  const [newChildGender, setNewChildGender] = useState<ChildGender>('neutral');
  const [newChildTheme, setNewChildTheme] = useState<ThemePreference>('auto');

  const currentTheme = getThemeForChild(currentProfile);

  const handleAddChildSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChildName.trim()) return;
    onAddChild(
      newChildName.trim(), 
      Number(newChildAge), 
      newChildLocation, 
      newChildDialect,
      newChildGender,
      newChildTheme
    );
    setNewChildName('');
    setShowAddChildModal(false);
    setProfileDropdownOpen(false);
  };

  const isUrban = currentProfile.location === 'urban';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr ${currentTheme.heroGradient} flex items-center justify-center text-white shadow-md shadow-slate-900/10`}>
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 font-['Outfit']">
                  Educate the World
                </span>
                <span className="hidden xs:inline-block px-1.5 py-0.5 text-[10px] font-bold bg-slate-900 text-white rounded-md">
                  HOME ACADEMY
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium hidden sm:block">
                LEARN • THINK • CREATE • SERVE • TRANSFORM
              </p>
            </div>
          </div>

          {/* Right Navigation & Tools */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-2.5">
            
            {/* Quick Urban vs Rural Setting Toggle Pill */}
            <button
              onClick={() => onToggleLocation(isUrban ? 'rural' : 'urban')}
              className={`flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-xs ${
                isUrban 
                  ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100' 
                  : 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100'
              }`}
              title={`Currently in ${isUrban ? 'Urban (Town)' : 'Rural (Village)'} mode. Tap to switch dialect & examples.`}
            >
              {isUrban ? (
                <>
                  <Building2 className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden md:inline">Town (Urban)</span>
                </>
              ) : (
                <>
                  <TreePine className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden md:inline">Village (Rural)</span>
                </>
              )}
            </button>

            {/* Scope & Sequence v1.0 Button */}
            {onOpenScopeAndSequence && (
              <button
                onClick={onOpenScopeAndSequence}
                className="hidden lg:flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-50 text-indigo-900 border border-indigo-200 hover:bg-indigo-100 transition-all cursor-pointer shadow-xs"
                title="View International Curriculum Scope & Sequence v1.0 (Ages 3-18+)"
              >
                <BookOpen className="w-4 h-4 text-indigo-600" />
                <span className="hidden xl:inline">Scope & Sequence v1.0</span>
                <span className="xl:hidden">Curriculum</span>
              </button>
            )}

            {/* Cambridge Pathway & Exams Button */}
            {onOpenCambridge && (
              <button
                onClick={onOpenCambridge}
                className="hidden md:flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer shadow-xs"
                title="Cambridge Real Exams, Worksheets, Test Papers & Pathway Alignment"
              >
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span className="hidden xl:inline">Cambridge Exams & Notes</span>
                <span className="xl:hidden">Cambridge</span>
              </button>
            )}

            {/* USA K-12 Curriculum & AP Button */}
            {onOpenUsCurriculum && (
              <button
                onClick={onOpenUsCurriculum}
                className="hidden lg:flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-rose-50 text-rose-900 border border-rose-200 hover:bg-rose-100 transition-all cursor-pointer shadow-xs"
                title="United States Education System: K–12 Common Core, NGSS, AP Exams & College Parity"
              >
                <Flag className="w-4 h-4 text-rose-600" />
                <span className="hidden xl:inline">USA K–12 & AP</span>
                <span className="xl:hidden">USA</span>
              </button>
            )}

            {/* Books & Resource Centers Button */}
            {onOpenBooksAndResources && (
              <button
                onClick={onOpenBooksAndResources}
                className="hidden lg:flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-all cursor-pointer shadow-xs"
                title="Well-Known Books, Authors & Global Resource Centers for All Ages"
              >
                <Library className="w-4 h-4 text-amber-600" />
                <span className="hidden xl:inline">Books & Centers</span>
                <span className="xl:hidden">Library</span>
              </button>
            )}

            {/* Manufacturing & Market Innovation Button */}
            {onOpenManufacturing && (
              <button
                onClick={() => onOpenManufacturing()}
                className="hidden xl:flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 transition-all cursor-pointer shadow-xs"
                title="Turn Reading into Real Products: Manufacturing Blueprints & Local Market Enterprise"
              >
                <Factory className="w-4 h-4 text-amber-700" />
                <span>Manufacture & Market</span>
              </button>
            )}

            {/* AI Self Educate Button */}
            {onOpenSelfEducate && (
              <button
                onClick={onOpenSelfEducate}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white hover:from-amber-400 hover:to-orange-500 transition-all cursor-pointer shadow-xs hover:shadow-md ring-1 ring-amber-300/40"
                title="AI Self-Educate • Autodidact Learning Roadmaps & AI Socratic Mentor"
              >
                <BrainCircuit className="w-4 h-4 text-amber-100 animate-pulse" />
                <span className="hidden sm:inline">Self Educate</span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded-md bg-black/20 text-white">
                  AI
                </span>
              </button>
            )}

            {/* World Languages Academy Button */}
            {onOpenWorldLanguages && (
              <button
                onClick={onOpenWorldLanguages}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-50 text-indigo-950 border border-indigo-200 hover:bg-indigo-100 transition-all cursor-pointer shadow-xs"
                title="World Languages Academy (Ages 3–Adult): Mandarin, Spanish, French, Hebrew, Greek, Latin, Arabic, Hindi, English"
              >
                <Languages className="w-4 h-4 text-indigo-600" />
                <span className="hidden sm:inline">9 Languages</span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded-md bg-indigo-200 text-indigo-900">
                  Global
                </span>
              </button>
            )}

            {/* Subject Packs Button */}
            {onOpenSubjectPacks && (
              <button
                onClick={onOpenSubjectPacks}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-50 text-blue-950 border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer shadow-xs"
                title="6 Subject Learning Packs (365 Lessons in unmixed systematic streams)"
              >
                <Layers className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline">Subject Packs</span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded-md bg-blue-200 text-blue-900">
                  6 Packs
                </span>
              </button>
            )}

            {/* Offline Worksheets & Exams Button */}
            {onOpenOfflinePack && (
              <button
                onClick={onOpenOfflinePack}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-500/15 text-amber-950 border border-amber-300 hover:bg-amber-500/25 transition-all cursor-pointer shadow-xs"
                title="100% Offline Worksheets, Exam Papers & Daily Mission Guides"
              >
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span className="hidden md:inline">Offline Worksheets & Exams</span>
                <span className="md:hidden">Offline Vault</span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded-md bg-amber-600 text-white">
                  Local
                </span>
              </button>
            )}

            {/* UNESCO 2019 OER Recommendation Hub */}
            {onOpenUnescoOer && (
              <button
                onClick={onOpenUnescoOer}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold bg-sky-50 text-sky-950 border border-sky-300 hover:bg-sky-100 transition-all cursor-pointer shadow-xs ring-1 ring-sky-300/40"
                title="UNESCO Recommendation on Open Educational Resources (OER) • 5 Action Areas & 5R Permissions"
              >
                <Globe className="w-4 h-4 text-sky-600" />
                <span className="hidden lg:inline">UNESCO OER</span>
                <span className="lg:hidden">OER</span>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded-md bg-sky-600 text-white">
                  2019
                </span>
              </button>
            )}

            {/* Low-Data Mode Toggle */}
            <button
              onClick={onToggleDataSaver}
              className={`flex items-center space-x-1.5 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-xs ${
                dataSaverMode 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title={dataSaverMode ? 'Data Saver is ON (Minimal internet usage)' : 'Turn on Data Saver / Offline mode'}
            >
              {dataSaverMode ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden xl:inline">Data Saver</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden xl:inline">Data Saver</span>
                </>
              )}
            </button>

            {/* World Changers Hub Button */}
            {onOpenWorldChangers && (
              <button
                onClick={onOpenWorldChangers}
                className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer shadow-xs"
                title="View community missions and world changer rank"
              >
                <Globe className="w-4 h-4 text-emerald-600" />
                <span className="hidden md:inline">World Changers</span>
                <span className="px-1.5 py-0.2 bg-emerald-600 text-white rounded-full text-[10px] font-bold">
                  {currentProfile.completedCommunityMissions?.length || 0}
                </span>
              </button>
            )}

            {/* Learning Passport Badge Counter */}
            <button
              onClick={onOpenPassport}
              className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer shadow-xs"
              title="View child's competency passport"
            >
              <Award className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">Passport</span>
              <span className="px-1.5 py-0.2 bg-blue-600 text-white rounded-full text-[10px] font-bold">
                {currentProfile.stampedCompetencies.length}
              </span>
            </button>

            {/* Parent Dashboard Button */}
            <button
              onClick={onOpenDashboard}
              className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
              title="Open Parent Dashboard"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Parent</span>
            </button>

            {/* Child Profile Switcher */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center space-x-1.5 pl-2 pr-1.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all cursor-pointer text-xs sm:text-sm font-medium text-slate-800"
              >
                <span className="text-base sm:text-lg">{currentProfile.avatar}</span>
                <span className="font-semibold max-w-[65px] sm:max-w-[90px] truncate">
                  {currentProfile.name}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${currentTheme.profileBadge} hidden xs:inline-block border`}>
                  {currentProfile.age}y
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Switch Child Profile
                    </p>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      {profiles.length} Children
                    </span>
                  </div>
                  
                  <div className="max-h-56 overflow-y-auto py-1">
                    {profiles.map((p) => {
                      const pTheme = getThemeForChild(p);
                      return (
                        <button
                          key={p.id}
                          onClick={() => {
                            onSelectProfile(p);
                            setProfileDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs sm:text-sm hover:bg-slate-50 transition-colors ${
                            p.id === currentProfile.id ? 'bg-slate-50 font-bold text-slate-900' : 'text-slate-700'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-base">{p.avatar}</span>
                            <div>
                              <div className="flex items-center space-x-1.5">
                                <p className="font-medium text-slate-800">{p.name}</p>
                                <span className={`text-[9px] font-bold px-1 py-0.2 rounded-sm border ${pTheme.profileBadge}`}>
                                  Age {p.age} • {pTheme.label}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-400">
                                {p.location === 'urban' ? '🏙️ Town' : '🌾 Village'} • {p.preferredDialect || 'Luganda'} • {p.stampedCompetencies.length} badges
                              </p>
                            </div>
                          </div>
                          {p.id === currentProfile.id && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="border-t border-slate-100 pt-2 px-2">
                    <button
                      onClick={() => {
                        setShowAddChildModal(true);
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Another Child</span>
                    </button>
                  </div>

                  {/* Quick Hub Links for Mobile & Compact Screens */}
                  <div className="border-t border-slate-100 mt-2 pt-2 px-2 space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
                      Curricula & Resource Hubs
                    </p>
                    <div className="grid grid-cols-2 gap-1 text-[11px] font-semibold text-slate-700">
                      {onOpenCambridge && (
                        <button
                          onClick={() => { setProfileDropdownOpen(false); onOpenCambridge(); }}
                          className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-900 text-left cursor-pointer transition-colors"
                        >
                          <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">Cambridge Exams</span>
                        </button>
                      )}
                      {onOpenUsCurriculum && (
                        <button
                          onClick={() => { setProfileDropdownOpen(false); onOpenUsCurriculum(); }}
                          className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-rose-50 hover:text-rose-900 text-left cursor-pointer transition-colors"
                        >
                          <Flag className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                          <span className="truncate">USA K–12 & AP</span>
                        </button>
                      )}
                      {onOpenManufacturing && (
                        <button
                          onClick={() => { setProfileDropdownOpen(false); onOpenManufacturing(); }}
                          className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-amber-50 hover:text-amber-900 text-left cursor-pointer transition-colors"
                        >
                          <Factory className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">Manufacturing</span>
                        </button>
                      )}
                      {onOpenSelfEducate && (
                        <button
                          onClick={() => { setProfileDropdownOpen(false); onOpenSelfEducate(); }}
                          className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-orange-50 hover:text-orange-900 text-left cursor-pointer transition-colors"
                        >
                          <BrainCircuit className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                          <span className="truncate">AI Self-Educate</span>
                        </button>
                      )}
                      {onOpenBooksAndResources && (
                        <button
                          onClick={() => { setProfileDropdownOpen(false); onOpenBooksAndResources(); }}
                          className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-amber-50 hover:text-amber-900 text-left cursor-pointer transition-colors"
                        >
                          <Library className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="truncate">Books & Centers</span>
                        </button>
                      )}
                      {onOpenScopeAndSequence && (
                        <button
                          onClick={() => { setProfileDropdownOpen(false); onOpenScopeAndSequence(); }}
                          className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 text-left cursor-pointer transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span className="truncate">Scope & Sequence</span>
                        </button>
                      )}
                      {onOpenWorldLanguages && (
                        <button
                          onClick={() => { setProfileDropdownOpen(false); onOpenWorldLanguages(); }}
                          className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-indigo-50 hover:text-indigo-900 text-left cursor-pointer transition-colors"
                        >
                          <Languages className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span className="truncate">9 World Languages</span>
                        </button>
                      )}
                      {onOpenSubjectPacks && (
                        <button
                          onClick={() => { setProfileDropdownOpen(false); onOpenSubjectPacks(); }}
                          className="flex items-center space-x-1 p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-900 text-left cursor-pointer transition-colors"
                        >
                          <Layers className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">6 Subject Packs</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Add Child Modal (with Gender and Color Theme Customizer) */}
      {showAddChildModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
              Add a Child
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Customize daily 20-minute missions, colors for boy or girl, and local dialect.
            </p>

            <form onSubmit={handleAddChildSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Child's Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David, Sarah, Amina, Kato"
                  value={newChildName}
                  onChange={(e) => setNewChildName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Child's Age: <span className="text-indigo-600 font-bold">{newChildAge} years old</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="18"
                  value={newChildAge}
                  onChange={(e) => setNewChildAge(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>3 (Discover)</span>
                  <span>7 (Explore)</span>
                  <span>10 (Understand)</span>
                  <span>14 (Investigate)</span>
                  <span>17+ (Create/Launch)</span>
                </div>
              </div>

              {/* Gender and Theme Customizer */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Gender & Theme Palette
                </label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => {
                      setNewChildGender('boy');
                      setNewChildTheme('boy-blue');
                    }}
                    className={`p-2 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                      newChildGender === 'boy' && newChildTheme === 'boy-blue'
                        ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>👦 Boy (Blue)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setNewChildGender('girl');
                      setNewChildTheme('girl-pink');
                    }}
                    className={`p-2 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                      newChildGender === 'girl' && newChildTheme === 'girl-pink'
                        ? 'bg-pink-50 border-pink-500 text-pink-900 font-bold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>👧 Girl (Pink/Rose)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setNewChildGender('neutral');
                      setNewChildTheme('auto');
                    }}
                    className={`p-2 rounded-xl border text-center text-xs transition-all cursor-pointer ${
                      newChildTheme === 'auto'
                        ? 'bg-amber-50 border-amber-500 text-amber-900 font-bold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>🎨 Auto (Age Band)</span>
                  </button>
                </div>
              </div>

              {/* Location Environment Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Home Environment & Setting
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setNewChildLocation('urban')}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      newChildLocation === 'urban'
                        ? 'bg-amber-50 border-amber-500 text-amber-950 font-bold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <Building2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Urban (Town)</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-normal">Kiosks, boda stages & taps</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setNewChildLocation('rural')}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                      newChildLocation === 'rural'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5">
                      <TreePine className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Rural (Village)</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5 font-normal">Shamba, borehole & ekyoto</p>
                  </button>
                </div>
              </div>

              {/* Preferred Regional Dialect */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Local Dialect / Mother Tongue
                </label>
                <select
                  value={newChildDialect}
                  onChange={(e) => setNewChildDialect(e.target.value as RegionalDialect)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <option value="Luganda">Luganda (Central Uganda)</option>
                  <option value="Runyankole">Runyankole-Rukiga (Western Uganda)</option>
                  <option value="Acholi">Acholi / Luo (Northern Uganda)</option>
                  <option value="Lusoga">Lusoga (Eastern Uganda)</option>
                  <option value="Swahili">Swahili (East Africa & Trade)</option>
                </select>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddChildModal(false)}
                  className="px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs"
                >
                  Create Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
