import React, { useState } from 'react';
import { 
  Rocket, 
  Zap, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  ArrowRight, 
  BookOpen, 
  Award, 
  Trophy, 
  Flame,
  Building2,
  TreePine,
  Languages,
  Volume2,
  Globe,
  Palette,
  Check,
  GraduationCap,
  Library,
  BrainCircuit,
  Factory,
  Flag,
  Film,
  Layers
} from 'lucide-react';
import { ChildProfile, LessonModule, LocationType, ThemePreference } from '../types/curriculum';
import { speakText, stopSpeaking } from '../utils/speech';
import { getThemeForChild, BOY_BLUE_THEME, GIRL_PINK_THEME, AGE_BAND_COLORS } from '../utils/ageColors';

interface DailyMissionHeroProps {
  currentProfile: ChildProfile;
  todayLesson: LessonModule;
  onLaunchMission: (lesson: LessonModule) => void;
  onLaunch5MinBite: (lesson: LessonModule) => void;
  onLaunchVideo?: (lesson: LessonModule) => void;
  onChangeAgePrompt: () => void;
  onToggleLocation?: (location: LocationType) => void;
  onOpenLocationDialectModal?: () => void;
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
  onUpdateThemePreference?: (theme: ThemePreference) => void;
}

export const DailyMissionHero: React.FC<DailyMissionHeroProps> = ({
  currentProfile,
  todayLesson,
  onLaunchMission,
  onLaunch5MinBite,
  onLaunchVideo,
  onChangeAgePrompt,
  onToggleLocation,
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
  onUpdateThemePreference,
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const dailyGoalMinutes = 20;
  const todayMinutes = currentProfile.todayMinutes ?? (currentProfile.completedLessonIds.length > 0 ? 15 : 0);
  const progressPercent = Math.min(100, Math.round((todayMinutes / dailyGoalMinutes) * 100));
  const isGoalAchieved = todayMinutes >= dailyGoalMinutes;

  const isUrban = currentProfile.location === 'urban';

  // Dynamic theme based on child age or custom boy/girl/palette choice!
  const theme = getThemeForChild(currentProfile);

  const handleSpeakDialect = (word: string) => {
    stopSpeaking();
    speakText(word);
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${theme.heroGradient} text-white p-6 sm:p-8 lg:p-10 shadow-xl ${theme.heroGlow} mb-8 transition-all duration-300`}>
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        
        {/* Top Tagline / Prompt & Location & Theme Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-xs text-white border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>A Free International Quality Classroom for Every Child</span>
          </span>

          {/* Urban vs Rural Location Setting Pill */}
          <div className="inline-flex items-center rounded-full bg-black/25 backdrop-blur-xs border border-white/20 p-0.5">
            <button
              onClick={() => onToggleLocation?.(isUrban ? 'rural' : 'urban')}
              className={`flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                isUrban ? 'bg-amber-400 text-slate-900 shadow-xs' : 'text-amber-100 hover:text-white'
              }`}
              title="Switch to Urban town dialect & examples"
            >
              <Building2 className="w-3 h-3" />
              <span>Town (Urban)</span>
            </button>
            <button
              onClick={() => onToggleLocation?.(isUrban ? 'rural' : 'urban')}
              className={`flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                !isUrban ? 'bg-emerald-400 text-slate-900 shadow-xs' : 'text-amber-100 hover:text-white'
              }`}
              title="Switch to Rural village dialect & examples"
            >
              <TreePine className="w-3 h-3" />
              <span>Village (Rural)</span>
            </button>
          </div>

          {/* Regional Mother Tongue Pill */}
          {onOpenLocationDialectModal && (
            <button
              onClick={onOpenLocationDialectModal}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/20 cursor-pointer transition-colors"
              title="Change regional mother tongue dialect"
            >
              <Languages className="w-3 h-3 text-amber-200" />
              <span>Dialect: {currentProfile.preferredDialect || 'Luganda'}</span>
            </button>
          )}

          {/* UNESCO OER 2019 Badge */}
          {onOpenUnescoOer && (
            <button
              onClick={onOpenUnescoOer}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/30 hover:bg-sky-500/45 text-white border border-sky-300/40 cursor-pointer transition-all shadow-xs"
              title="UNESCO Recommendation on Open Educational Resources (OER) • 5 Action Areas & 5R Permissions"
            >
              <span>🏛️ UNESCO OER Certified</span>
            </button>
          )}

          {/* Color & Boy/Girl Theme Customizer Trigger */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white/20 hover:bg-white/30 text-white border border-white/30 cursor-pointer transition-all shadow-xs"
              title="Customize colors for Boy, Girl, or Age Band"
            >
              <Palette className="w-3.5 h-3.5 text-white" />
              <span>Theme: {theme.label}</span>
            </button>

            {/* Quick Color & Gender Theme Selector Dropdown */}
            {showColorPicker && (
              <div className="absolute left-0 mt-2 w-64 bg-slate-900 text-white rounded-2xl p-3 shadow-2xl border border-white/20 z-50 animate-in fade-in zoom-in-95 duration-150">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-2">
                  🎨 Customize Colors (Boy, Girl or Age)
                </p>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => {
                      onUpdateThemePreference?.('boy-blue');
                      setShowColorPicker(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-white/15 text-left font-semibold ${
                      currentProfile.themePreference === 'boy-blue' ? 'bg-blue-600 text-white font-bold' : ''
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>👦</span>
                      <span>Boy Blue (Vibrant Sky & Azure)</span>
                    </span>
                    {currentProfile.themePreference === 'boy-blue' && <Check className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => {
                      onUpdateThemePreference?.('girl-pink');
                      setShowColorPicker(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-white/15 text-left font-semibold ${
                      currentProfile.themePreference === 'girl-pink' ? 'bg-pink-600 text-white font-bold' : ''
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>👧</span>
                      <span>Girl Rose (Pink & Berry Rose)</span>
                    </span>
                    {currentProfile.themePreference === 'girl-pink' && <Check className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => {
                      onUpdateThemePreference?.('auto');
                      setShowColorPicker(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl hover:bg-white/15 text-left font-semibold ${
                      !currentProfile.themePreference || currentProfile.themePreference === 'auto' ? 'bg-amber-600 text-white font-bold' : ''
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span>🎯</span>
                      <span>Auto (Distinct Age-Band Color)</span>
                    </span>
                    {(!currentProfile.themePreference || currentProfile.themePreference === 'auto') && <Check className="w-3.5 h-3.5" />}
                  </button>

                  <div className="pt-2 border-t border-white/15 text-[10px] text-slate-300">
                    <span>Age Bands: </span>
                    <span className="text-amber-300">3-5 Sun</span> • <span className="text-emerald-300">6-8 Mint</span> • <span className="text-blue-300">9-11 Blue</span> • <span className="text-indigo-300">12-14 Indigo</span> • <span className="text-purple-300">15+ Plum</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Scope & Sequence v1.0 Standard Link */}
          {onOpenScopeAndSequence && (
            <button
              onClick={onOpenScopeAndSequence}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-black/25 hover:bg-black/35 text-amber-200 border border-white/20 cursor-pointer transition-colors"
              title="View International Curriculum Scope & Sequence v1.0"
            >
              <BookOpen className="w-3 h-3 text-amber-300" />
              <span>Scope & Sequence</span>
            </button>
          )}

          {/* Cambridge Pathway & Exams Pill */}
          {onOpenCambridge && (
            <button
              onClick={onOpenCambridge}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-950/50 hover:bg-blue-900/70 text-blue-100 border border-blue-300/40 cursor-pointer transition-colors shadow-xs"
              title="View Real Cambridge Exams, Test Papers, Worksheets & Notes"
            >
              <GraduationCap className="w-3 h-3 text-blue-300" />
              <span>Cambridge Exams & Worksheets 📝</span>
            </button>
          )}

          {/* Books & Resource Centers Pill */}
          {onOpenBooksAndResources && (
            <button
              onClick={onOpenBooksAndResources}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-950/40 hover:bg-amber-900/60 text-amber-100 border border-amber-300/30 cursor-pointer transition-colors shadow-xs"
              title="View Curated Books, Famous Authors & Global Resource Centers"
            >
              <Library className="w-3 h-3 text-amber-300" />
              <span>Books & Centers 📚</span>
            </button>
          )}

          {/* USA K-12 Standards Pill */}
          {onOpenUsCurriculum && (
            <button
              onClick={onOpenUsCurriculum}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-950/40 hover:bg-rose-900/60 text-rose-100 border border-rose-300/30 cursor-pointer transition-colors shadow-xs"
              title="View United States K–12 Standards, Common Core, NGSS & AP Exams"
            >
              <Flag className="w-3 h-3 text-rose-300" />
              <span>USA K–12 & AP 🇺🇸</span>
            </button>
          )}

          {/* Manufacturing & Inventions Pill */}
          {onOpenManufacturing && (
            <button
              onClick={() => onOpenManufacturing()}
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-950/40 hover:bg-amber-900/60 text-amber-100 border border-amber-300/30 cursor-pointer transition-colors shadow-xs"
              title="Reading to Real Inventions & Manufactured Products for Market"
            >
              <Factory className="w-3 h-3 text-amber-300" />
              <span>Manufacture & Market 🏭</span>
            </button>
          )}

          {/* AI Self-Educate Pill */}
          {onOpenSelfEducate && (
            <button
              onClick={onOpenSelfEducate}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white hover:from-amber-400 hover:to-orange-400 border border-amber-300/50 cursor-pointer transition-all shadow-md animate-pulse"
              title="Launch AI Self-Educate Autodidact Mentor"
            >
              <BrainCircuit className="w-3.5 h-3.5 text-amber-100" />
              <span>AI Self-Educate 🧠✨</span>
            </button>
          )}

          {currentProfile.streakDays > 0 && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-900 shadow-xs">
              <Flame className="w-3.5 h-3.5 fill-orange-600 text-orange-600" />
              <span>{currentProfile.streakDays}-Day Learning Streak!</span>
            </span>
          )}
        </div>

        {/* The Core Question */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-['Outfit'] leading-tight sm:leading-snug">
          "{currentProfile.name} is {currentProfile.age} years old. <br className="hidden sm:inline" />
          <span className="text-white/95 drop-shadow-xs">What should we teach them today?</span>"
        </h1>

        <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl font-normal leading-relaxed">
          Motto: <strong>LEARN. THINK. CREATE. SERVE. TRANSFORM.</strong> In just 20 minutes, complete a lively lesson, a guided conversation, a fun home activity, and a practical community contribution—tailored for your {isUrban ? 'urban town' : 'village'} home.
        </p>

        {/* Visual Daily Progress Bar Widget */}
        <div className="mt-5 p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 max-w-2xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                isGoalAchieved ? 'bg-emerald-400 text-slate-900' : 'bg-white/30 text-white'
              }`}>
                {isGoalAchieved ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-3.5 h-3.5" />}
              </div>
              <span className="text-xs font-bold text-white tracking-wide">
                Today's 20-Min Learning Goal
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-xs font-black text-white font-mono">
                {todayMinutes} / {dailyGoalMinutes} mins
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                isGoalAchieved 
                  ? 'bg-emerald-400 text-slate-900 shadow-xs' 
                  : 'bg-black/30 text-white'
              }`}>
                {progressPercent}%
              </span>
            </div>
          </div>

          {/* Progress Track */}
          <div className="w-full bg-black/25 h-3 rounded-full overflow-hidden p-0.5 border border-white/10 relative">
            <div 
              className={`h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r ${
                isGoalAchieved ? theme.heroGoalAchievedBar : theme.heroProgressBar
              }`}
              style={{ width: `${Math.max(4, progressPercent)}%` }}
            />
          </div>

          {/* Milestone markers & motivational text */}
          <div className="flex items-center justify-between mt-2 text-[10px] font-medium text-white/90">
            <div className="flex items-center space-x-1">
              {isGoalAchieved ? (
                <>
                  <Trophy className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                  <span className="font-bold text-white">🎉 Daily 20-min goal achieved! Wonderful work today, {currentProfile.name}!</span>
                </>
              ) : todayMinutes > 0 ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-200 shrink-0" />
                  <span>Great momentum! Only <strong>{dailyGoalMinutes - todayMinutes} minutes</strong> to hit today's goal.</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-200 shrink-0" />
                  <span>Ready for today! 1 mission (20m) hits your complete daily goal.</span>
                </>
              )}
            </div>

            <div className="hidden sm:flex items-center space-x-3 text-white/70">
              <span>5m</span>
              <span>10m</span>
              <span>15m</span>
              <span className="font-bold text-white">20m Goal</span>
            </div>
          </div>
        </div>

        {/* Today's Recommended Mission Card */}
        <div className="mt-4 bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/25 max-w-2xl">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-white text-slate-900 flex items-center justify-center font-bold text-xl shadow-md">
                🎯
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">
                    Today's Mission • {todayLesson.categoryLabel}
                  </span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-md ${
                    isUrban ? 'bg-amber-300 text-slate-900' : 'bg-emerald-300 text-slate-900'
                  }`}>
                    {isUrban ? '🏙️ Town' : '🌾 Village'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {todayLesson.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  {todayLesson.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Local Dialect Words in this Lesson */}
          {todayLesson.dialectWords && todayLesson.dialectWords.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-white/15">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200 block mb-1">
                🗣️ Dialect Words ({isUrban ? 'Urban' : 'Rural'} Context):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {todayLesson.dialectWords.slice(0, 3).map((dw, i) => (
                  <button
                    key={i}
                    onClick={() => handleSpeakDialect(dw.localWord)}
                    className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-lg bg-black/20 hover:bg-black/30 text-white text-[11px] border border-white/15 cursor-pointer transition-colors"
                    title={`Click to listen: ${dw.englishMeaning} (${dw.language})`}
                  >
                    <Volume2 className="w-2.5 h-2.5 text-amber-300" />
                    <span className="font-bold text-amber-100">{dw.localWord}</span>
                    <span className="text-[10px] text-white/70">({dw.englishMeaning})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Community World Changer Mission Preview */}
          {todayLesson.communityMission && (
            <div className="mt-3 pt-2.5 border-t border-white/15 flex items-start space-x-2 text-xs text-amber-100">
              <Globe className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-emerald-200 uppercase tracking-wider text-[10px] block">
                  🌍 Community Action (Okukyusa Ekitundu):
                </span>
                <span className="font-semibold text-white">{todayLesson.communityMission.title}</span>
                <span className="text-white/80 ml-1 block sm:inline">— {todayLesson.communityMission.impactGoal}</span>
              </div>
            </div>
          )}

          {/* 4-Step Breakdown Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-2.5 border-t border-white/15 text-[11px] font-medium text-white/90">
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 rounded-full bg-white/20 text-center text-[10px] font-bold flex items-center justify-center">1</span>
              <span>5m Learn</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 rounded-full bg-white/20 text-center text-[10px] font-bold flex items-center justify-center">2</span>
              <span>5m Discuss</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 rounded-full bg-white/20 text-center text-[10px] font-bold flex items-center justify-center">3</span>
              <span>5m Activity</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-4 h-4 rounded-full bg-white/20 text-center text-[10px] font-bold flex items-center justify-center">4</span>
              <span>5m Questions</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onLaunchMission(todayLesson)}
            className="flex items-center space-x-2 px-5 sm:px-6 py-3 rounded-2xl bg-white text-slate-900 font-bold text-sm sm:text-base hover:bg-slate-50 hover:shadow-lg transition-all cursor-pointer shadow-md"
          >
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
            <span>Start 20-Min Mission 🚀</span>
          </button>

          <button
            onClick={() => onLaunchVideo ? onLaunchVideo(todayLesson) : onLaunchMission(todayLesson)}
            className="flex items-center space-x-1.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer shadow-md animate-pulse"
            title="Watch 90-second animated video for visual learning"
          >
            <Film className="w-4 h-4 text-amber-300" />
            <span>Watch 90s Video 🎬</span>
          </button>

          <button
            onClick={() => onLaunch5MinBite(todayLesson)}
            className="flex items-center space-x-1.5 px-4 py-3 rounded-2xl bg-black/25 text-white hover:bg-black/35 font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>5-Minute Quick Bite ⚡</span>
          </button>

          {onOpenWorldChangers && (
            <button
              onClick={onOpenWorldChangers}
              className={`flex items-center space-x-1.5 px-4 py-3 rounded-2xl ${theme.heroWorldChangerBtn} font-bold text-xs sm:text-sm border shadow-sm transition-all cursor-pointer`}
            >
              <Globe className="w-4 h-4" />
              <span>World Changers Hub 🌍 {currentProfile.completedCommunityMissions?.length ? `(${currentProfile.completedCommunityMissions.length})` : ''}</span>
            </button>
          )}

          {onOpenWorldLanguages && (
            <button
              onClick={onOpenWorldLanguages}
              className="flex items-center space-x-1.5 px-4 py-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm border border-white/25 shadow-sm transition-all cursor-pointer backdrop-blur-xs"
              title="Learn Mandarin, Spanish, French, Hebrew, Greek, Latin, Arabic, Hindi, English"
            >
              <Languages className="w-4 h-4 text-amber-200" />
              <span>9 World Languages (Ages 3–Adult) 🗣️</span>
            </button>
          )}

          {onOpenSubjectPacks && (
            <button
              onClick={onOpenSubjectPacks}
              className="flex items-center space-x-1.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm border border-white/25 shadow-md transition-all cursor-pointer"
              title="Explore 6 Unmixed Subject Packs with Interdisciplinary Integration"
            >
              <Layers className="w-4 h-4 text-cyan-200" />
              <span>6 Subject Packs (365 Lessons) 📚</span>
            </button>
          )}

          <div className="text-xs text-white/80 flex items-center space-x-2 ml-1">
            <span className="flex items-center space-x-1">
              <Users className="w-3.5 h-3.5" />
              <span>Parent time: {todayLesson.parentMinutes} mins</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
