import React, { useState, useEffect } from 'react';
import { CURRICULUM_MODULES, AGE_BAND_DETAILS, getLocalizedLesson } from './data/curriculumData';
import { ChildProfile, LessonModule, AgeBand, LocationType, RegionalDialect, ChildGender, ThemePreference } from './types/curriculum';
import { Navbar } from './components/Navbar';
import { DailyMissionHero } from './components/DailyMissionHero';
import { AgeBandNav } from './components/AgeBandNav';
import { LessonCard } from './components/LessonCard';
import { LessonModal } from './components/LessonModal';
import { LearningPassportModal } from './components/LearningPassportModal';
import { ParentDashboardModal } from './components/ParentDashboardModal';
import { TeachMeAnythingModal } from './components/TeachMeAnythingModal';
import { FiveMinuteBiteModal } from './components/FiveMinuteBiteModal';
import { OfflinePackModal } from './components/OfflinePackModal';
import { ParentGuideModal } from './components/ParentGuideModal';
import { LocationDialectModal } from './components/LocationDialectModal';
import { HandsOnProjectsSection } from './components/HandsOnProjectsSection';
import { WorldChangersModal } from './components/WorldChangersModal';
import { ScopeAndSequenceModal } from './components/ScopeAndSequenceModal';
import { CambridgeCurriculumModal } from './components/CambridgeCurriculumModal';
import { BooksAndResourceCentersModal } from './components/BooksAndResourceCentersModal';
import { UsCurriculumModal } from './components/UsCurriculumModal';
import { SelfEducateModal } from './components/SelfEducateModal';
import { InnovationAndManufacturingModal } from './components/InnovationAndManufacturingModal';
import { AnimatedLessonVideoModal } from './components/AnimatedLessonVideoModal';
import { WorldLanguagesModal } from './components/WorldLanguagesModal';
import { SubjectPacksModal } from './components/SubjectPacksModal';
import { SystematicLessonSelector } from './components/SystematicLessonSelector';
import { UnescoOerModal } from './components/UnescoOerModal';
import { LanguageCode } from './data/worldLanguagesData';
import { getOrGenerateLessonVideo } from './data/animatedVideoData';
import { 
  Sparkles, 
  Share2, 
  CheckCircle, 
  Heart, 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  Lightbulb,
  Zap,
  Award,
  Globe,
  ArrowRight,
  Library,
  Factory,
  Flag,
  BrainCircuit,
  Wrench,
  TrendingUp,
  Cpu
} from 'lucide-react';

const INITIAL_PROFILES: ChildProfile[] = [
  {
    id: 'child-1',
    name: 'David',
    age: 4,
    avatar: '🐣',
    gender: 'boy',
    themePreference: 'auto',
    location: 'rural',
    locationName: 'Mukono Village (Rural)',
    preferredDialect: 'Luganda',
    completedLessonIds: ['age3-5-lang-first-words'],
    stampedCompetencies: [
      {
        badgeName: 'Sound Detective',
        lessonTitle: 'Our First Words & Community Sounds',
        date: '2026-10-14'
      }
    ],
    completedCommunityMissions: [
      {
        missionTitle: 'Village & Family Fireside Storyteller',
        lessonTitle: 'The Tortoise and the Calabash of Wisdom',
        date: '2026-10-14',
        impactSummary: 'Told the Tortoise story to 2 younger siblings and taught them to share'
      }
    ],
    streakDays: 3,
    totalMinutes: 60,
    todayMinutes: 15,
  },
  {
    id: 'child-2',
    name: 'Sarah',
    age: 9,
    avatar: '👧',
    gender: 'girl',
    themePreference: 'auto',
    location: 'urban',
    locationName: 'Kampala City (Urban)',
    preferredDialect: 'Luganda',
    completedLessonIds: ['age6-8-math-cooking-fractions', 'age6-8-science-rain-cycle'],
    stampedCompetencies: [
      {
        badgeName: 'Fraction Baker',
        lessonTitle: 'Let’s Cook with Fractions',
        date: '2026-10-12'
      },
      {
        badgeName: 'Water Cycle Master',
        lessonTitle: 'Why Do We Have Rain?',
        date: '2026-10-13'
      }
    ],
    completedCommunityMissions: [
      {
        missionTitle: 'Community Clean Water Safeguard Mission',
        lessonTitle: 'Village & City Clean Water Filtration Lab',
        date: '2026-10-13',
        impactSummary: 'Inspected home jerrycans and taught neighbor friend safe drinking water hygiene'
      }
    ],
    streakDays: 5,
    totalMinutes: 120,
    todayMinutes: 20,
  },
  {
    id: 'child-3',
    name: 'Amina',
    age: 14,
    avatar: '🚀',
    gender: 'girl',
    themePreference: 'girl-pink',
    location: 'rural',
    locationName: 'Mbarara Rural (Rural)',
    preferredDialect: 'Runyankole',
    completedLessonIds: ['age13-16-sci-engine-oil'],
    stampedCompetencies: [
      {
        badgeName: 'Mechanical Thinker',
        lessonTitle: 'Why Does a Car Engine Need Oil?',
        date: '2026-10-14'
      }
    ],
    completedCommunityMissions: [
      {
        missionTitle: 'Community Pathway & Waterway Restoration Mission',
        lessonTitle: 'Stewards of God’s Creation: Environmental Care',
        date: '2026-10-14',
        impactSummary: 'Cleaned plastic litter from 50m drainage ditch and watered community trees'
      }
    ],
    streakDays: 2,
    totalMinutes: 40,
    todayMinutes: 10,
  }
];

export default function App() {
  // Profiles in localStorage
  const [profiles, setProfiles] = useState<ChildProfile[]>(() => {
    try {
      const saved = localStorage.getItem('etw_profiles');
      return saved ? JSON.parse(saved) : INITIAL_PROFILES;
    } catch {
      return INITIAL_PROFILES;
    }
  });

  const [currentProfileId, setCurrentProfileId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('etw_current_profile_id');
      return saved || 'child-1';
    } catch {
      return 'child-1';
    }
  });

  // Current active profile
  const currentProfile = profiles.find(p => p.id === currentProfileId) || profiles[0];

  // Age band selection (defaults to current child's band)
  const getBandForAge = (age: number): AgeBand => {
    if (age <= 5) return '3-5';
    if (age <= 8) return '6-8';
    if (age <= 12) return '9-12';
    if (age <= 16) return '13-16';
    return '17+';
  };

  const [selectedAgeBand, setSelectedAgeBand] = useState<AgeBand>(() => getBandForAge(currentProfile.age));
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dataSaverMode, setDataSaverMode] = useState<boolean>(false);

  // Modals state
  const [activeLesson, setActiveLesson] = useState<LessonModule | null>(null);
  const [activeBiteLesson, setActiveBiteLesson] = useState<LessonModule | null>(null);
  const [selectedParentGuideLesson, setSelectedParentGuideLesson] = useState<LessonModule | null>(null);
  const [passportOpen, setPassportOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [teachMeAnythingOpen, setTeachMeAnythingOpen] = useState(false);
  const [offlinePackOpen, setOfflinePackOpen] = useState(false);
  const [locationDialectOpen, setLocationDialectOpen] = useState(false);
  const [worldChangersOpen, setWorldChangersOpen] = useState(false);
  const [scopeAndSequenceOpen, setScopeAndSequenceOpen] = useState(false);
  const [cambridgeOpen, setCambridgeOpen] = useState(false);
  const [booksAndResourcesOpen, setBooksAndResourcesOpen] = useState(false);
  const [selfEducateOpen, setSelfEducateOpen] = useState(false);
  const [selfEducateInitialTopic, setSelfEducateInitialTopic] = useState<string>('');
  const [usCurriculumOpen, setUsCurriculumOpen] = useState(false);
  const [manufacturingOpen, setManufacturingOpen] = useState(false);
  const [selectedManufacturingId, setSelectedManufacturingId] = useState<string | undefined>(undefined);
  const [worldLanguagesOpen, setWorldLanguagesOpen] = useState(false);
  const [worldLanguagesInitialCode, setWorldLanguagesInitialCode] = useState<LanguageCode>('mandarin');
  const [subjectPacksOpen, setSubjectPacksOpen] = useState(false);
  const [unescoOerOpen, setUnescoOerOpen] = useState(false);
  const [activeVideoLesson, setActiveVideoLesson] = useState<LessonModule | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('etw_profiles', JSON.stringify(profiles));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [profiles]);

  useEffect(() => {
    try {
      localStorage.setItem('etw_current_profile_id', currentProfileId);
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }, [currentProfileId]);

  // When profile switches, update selected age band
  const handleSelectProfile = (profile: ChildProfile) => {
    setCurrentProfileId(profile.id);
    setSelectedAgeBand(getBandForAge(profile.age));
    showToast(`Switched to ${profile.name} (Age ${profile.age}) • ${profile.location === 'urban' ? '🏙️ Urban' : '🌾 Rural'}`);
  };

  const handleUpdateThemePreference = (theme: ThemePreference) => {
    const updated = profiles.map(p => {
      if (p.id === currentProfile.id) {
        return { ...p, themePreference: theme };
      }
      return p;
    });
    setProfiles(updated);
    showToast(`🎨 Theme updated for ${currentProfile.name}!`);
  };

  const handleAddChild = (
    name: string, 
    age: number, 
    location: LocationType = 'rural', 
    dialect: RegionalDialect = 'Luganda',
    gender: ChildGender = 'neutral',
    themePreference: ThemePreference = 'auto'
  ) => {
    const avatars = gender === 'boy' ? ['👦', '🚀', '🌟'] : gender === 'girl' ? ['👧', '🌸', '✨'] : ['🐣', '👧', '👦', '🌟', '🚀', '🌱'];
    const newProfile: ChildProfile = {
      id: `child-${Date.now()}`,
      name,
      age,
      avatar: avatars[Math.floor(Math.random() * avatars.length)],
      gender,
      themePreference,
      location,
      preferredDialect: dialect,
      locationName: location === 'urban' ? `Urban Town (${dialect})` : `Rural Village (${dialect})`,
      completedLessonIds: [],
      stampedCompetencies: [],
      streakDays: 1,
      totalMinutes: 0,
      todayMinutes: 0,
    };
    const updated = [...profiles, newProfile];
    setProfiles(updated);
    setCurrentProfileId(newProfile.id);
    setSelectedAgeBand(getBandForAge(age));
    showToast(`Created profile for ${name} (${location === 'urban' ? '🏙️ Urban' : '🌾 Rural'})!`);
  };

  const handleToggleLocation = (loc?: LocationType) => {
    const nextLoc: LocationType = loc || (currentProfile.location === 'urban' ? 'rural' : 'urban');
    const updatedProfiles = profiles.map(p => {
      if (p.id === currentProfile.id) {
        return {
          ...p,
          location: nextLoc,
          locationName: nextLoc === 'urban' 
            ? `Urban Town (${p.preferredDialect || 'Luganda'})` 
            : `Rural Village (${p.preferredDialect || 'Luganda'})`
        };
      }
      return p;
    });
    setProfiles(updatedProfiles);
    showToast(`Switched ${currentProfile.name}'s environment to ${nextLoc === 'urban' ? '🏙️ Urban (Town)' : '🌾 Rural (Village)'}!`);
  };

  const handleUpdateProfileLocation = (loc: LocationType, dialect?: RegionalDialect, locationName?: string) => {
    const updatedProfiles = profiles.map(p => {
      if (p.id === currentProfile.id) {
        return {
          ...p,
          location: loc,
          preferredDialect: dialect || p.preferredDialect || 'Luganda',
          locationName: locationName || (loc === 'urban' ? `Urban Town (${dialect || 'Luganda'})` : `Rural Village (${dialect || 'Luganda'})`)
        };
      }
      return p;
    });
    setProfiles(updatedProfiles);
    showToast(`Updated to ${loc === 'urban' ? '🏙️ Urban' : '🌾 Rural'} (${dialect || 'Luganda'})!`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCompleteLesson = (lesson: LessonModule) => {
    const updatedProfiles = profiles.map(p => {
      if (p.id === currentProfile.id) {
        const alreadyDone = p.completedLessonIds.includes(lesson.id);
        const newCompleted = alreadyDone ? p.completedLessonIds : [...p.completedLessonIds, lesson.id];
        
        const alreadyStamped = p.stampedCompetencies.some(s => s.badgeName === lesson.badgeName);
        const newStamped = alreadyStamped 
          ? p.stampedCompetencies 
          : [
              ...p.stampedCompetencies, 
              {
                badgeName: lesson.badgeName,
                lessonTitle: lesson.title,
                date: new Date().toISOString().split('T')[0]
              }
            ];

        return {
          ...p,
          completedLessonIds: newCompleted,
          stampedCompetencies: newStamped,
          totalMinutes: p.totalMinutes + lesson.estimatedMinutes,
          todayMinutes: Math.min(60, (p.todayMinutes || 0) + lesson.estimatedMinutes)
        };
      }
      return p;
    });

    setProfiles(updatedProfiles);
    setActiveLesson(null);
    showToast(`🏅 Stamped "${lesson.badgeName}" in ${currentProfile.name}'s Passport! (+${lesson.estimatedMinutes}m today)`);
  };

  const handleComplete5MinBite = () => {
    const updatedProfiles = profiles.map(p => {
      if (p.id === currentProfile.id) {
        return {
          ...p,
          totalMinutes: p.totalMinutes + 5,
          todayMinutes: Math.min(60, (p.todayMinutes || 0) + 5)
        };
      }
      return p;
    });
    setProfiles(updatedProfiles);
    showToast(`⚡ Great job! 5-minute learning completed with ${currentProfile.name}! (+5m toward goal)`);
  };

  const handleLogCommunityMission = (lessonTitle: string, missionTitle: string, impactSummary: string) => {
    const updatedProfiles = profiles.map(p => {
      if (p.id === currentProfile.id) {
        const existing = p.completedCommunityMissions || [];
        const alreadyDone = existing.some(m => m.missionTitle === missionTitle && m.lessonTitle === lessonTitle);
        if (alreadyDone) return p;
        return {
          ...p,
          completedCommunityMissions: [
            ...existing,
            {
              missionTitle,
              lessonTitle,
              date: new Date().toISOString().split('T')[0],
              impactSummary
            }
          ]
        };
      }
      return p;
    });
    setProfiles(updatedProfiles);
    showToast(`🌟 World Changer Mission recorded for ${currentProfile.name}! Community impact stamped!`);
  };

  const handleShareWhatsApp = (lesson: LessonModule) => {
    navigator.clipboard.writeText(lesson.whatsAppSnippet);
    showToast(`📋 Copied lesson to clipboard! Ready to paste into WhatsApp.`);
  };

  // Filter modules and apply active location dialect/materials
  const filteredModules = CURRICULUM_MODULES.filter(m => {
    const matchesAge = m.ageBand === selectedAgeBand;
    const matchesCat = selectedCategory === 'all' || m.category === selectedCategory;
    return matchesAge && matchesCat;
  }).map(m => getLocalizedLesson(m, currentProfile.location || 'rural'));

  // Recommended today's lesson based on child's age
  const rawTodayLesson = CURRICULUM_MODULES.find(m => m.ageBand === getBandForAge(currentProfile.age) && !currentProfile.completedLessonIds.includes(m.id)) 
    || CURRICULUM_MODULES.find(m => m.ageBand === getBandForAge(currentProfile.age))
    || CURRICULUM_MODULES[0];
  const todayLesson = getLocalizedLesson(rawTodayLesson, currentProfile.location || 'rural');

  return (
    <div className={`min-h-screen ${dataSaverMode ? 'bg-slate-50 font-sans' : 'bg-[#FAF8F5] font-sans text-slate-800'}`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center space-x-2 text-xs sm:text-sm font-semibold animate-in slide-in-from-bottom duration-200 border border-slate-700">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <Navbar
        currentProfile={currentProfile}
        profiles={profiles}
        onSelectProfile={handleSelectProfile}
        onAddChild={handleAddChild}
        onOpenPassport={() => setPassportOpen(true)}
        onOpenDashboard={() => setDashboardOpen(true)}
        onOpenTeachMeAnything={() => setTeachMeAnythingOpen(true)}
        onOpenOfflinePack={() => setOfflinePackOpen(true)}
        onOpenLocationDialectModal={() => setLocationDialectOpen(true)}
        onOpenWorldChangers={() => setWorldChangersOpen(true)}
        onOpenScopeAndSequence={() => setScopeAndSequenceOpen(true)}
        onOpenCambridge={() => setCambridgeOpen(true)}
        onOpenBooksAndResources={() => setBooksAndResourcesOpen(true)}
        onOpenSelfEducate={() => {
          setSelfEducateInitialTopic('');
          setSelfEducateOpen(true);
        }}
        onOpenUsCurriculum={() => setUsCurriculumOpen(true)}
        onOpenManufacturing={(productId) => {
          setSelectedManufacturingId(productId);
          setManufacturingOpen(true);
        }}
        onOpenWorldLanguages={() => {
          setWorldLanguagesInitialCode('mandarin');
          setWorldLanguagesOpen(true);
        }}
        onOpenSubjectPacks={() => setSubjectPacksOpen(true)}
        onOpenUnescoOer={() => setUnescoOerOpen(true)}
        onToggleLocation={handleToggleLocation}
        dataSaverMode={dataSaverMode}
        onToggleDataSaver={() => {
          setDataSaverMode(!dataSaverMode);
          showToast(dataSaverMode ? 'Switched to Standard Mode' : 'Data Saver Mode Enabled (Low bandwidth)');
        }}
        onUpdateThemePreference={handleUpdateThemePreference}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Core Hero: What should I teach my child today? */}
        <DailyMissionHero
          currentProfile={currentProfile}
          todayLesson={todayLesson}
          onLaunchMission={(lesson) => setActiveLesson(lesson)}
          onLaunchVideo={(lesson) => setActiveVideoLesson(lesson)}
          onLaunch5MinBite={(lesson) => setActiveBiteLesson(lesson)}
          onChangeAgePrompt={() => {
            const nextAge = currentProfile.age === 4 ? 9 : 4;
            const target = profiles.find(p => p.age === nextAge);
            if (target) handleSelectProfile(target);
          }}
          onToggleLocation={handleToggleLocation}
          onOpenLocationDialectModal={() => setLocationDialectOpen(true)}
          onOpenWorldChangers={() => setWorldChangersOpen(true)}
          onOpenScopeAndSequence={() => setScopeAndSequenceOpen(true)}
          onOpenCambridge={() => setCambridgeOpen(true)}
          onOpenBooksAndResources={() => setBooksAndResourcesOpen(true)}
          onOpenSelfEducate={() => {
            setSelfEducateInitialTopic('');
            setSelfEducateOpen(true);
          }}
          onOpenUsCurriculum={() => setUsCurriculumOpen(true)}
          onOpenManufacturing={(productId) => {
            setSelectedManufacturingId(productId);
            setManufacturingOpen(true);
          }}
          onOpenWorldLanguages={() => {
            setWorldLanguagesInitialCode('mandarin');
            setWorldLanguagesOpen(true);
          }}
          onOpenSubjectPacks={() => setSubjectPacksOpen(true)}
          onOpenUnescoOer={() => setUnescoOerOpen(true)}
          onUpdateThemePreference={handleUpdateThemePreference}
        />

        {/* Systematic Curriculum Progression & Prerequisite Selector */}
        <div className="my-6">
          <SystematicLessonSelector
            currentProfileAgeBand={selectedAgeBand}
            completedLessonIds={currentProfile.completedLessonIds}
            activeLessonId={activeLesson?.id}
            onSelectLesson={(lesson) => setActiveLesson(lesson)}
            onOpenSubjectPacksModal={() => setSubjectPacksOpen(true)}
          />
        </div>

        {/* Age Band Navigation & Filtering */}
        <AgeBandNav
          selectedAgeBand={selectedAgeBand}
          onSelectAgeBand={(band) => setSelectedAgeBand(band)}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenScopeAndSequence={() => setScopeAndSequenceOpen(true)}
          onOpenCambridge={() => setCambridgeOpen(true)}
          onOpenBooksAndResources={() => setBooksAndResourcesOpen(true)}
          onOpenUsCurriculum={() => setUsCurriculumOpen(true)}
          onOpenManufacturing={() => {
            setSelectedManufacturingId(undefined);
            setManufacturingOpen(true);
          }}
        />

        {/* Modules Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit']">
                {AGE_BAND_DETAILS[selectedAgeBand]?.label} Modules ({AGE_BAND_DETAILS[selectedAgeBand]?.stage})
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {filteredModules.length} comprehensive 20-minute missions with zero expensive materials required.
              </p>
            </div>

            <button
              onClick={() => setOfflinePackOpen(true)}
              className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center space-x-1 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Print Study Pack</span>
            </button>
          </div>

          {filteredModules.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredModules.map((module) => (
                <LessonCard
                  key={module.id}
                  lesson={module}
                  isCompleted={currentProfile.completedLessonIds.includes(module.id)}
                  onOpenLesson={(l) => setActiveLesson(l)}
                  onOpen5MinBite={(l) => setActiveBiteLesson(l)}
                  onOpenParentGuide={(l) => setSelectedParentGuideLesson(l)}
                  onShareWhatsApp={handleShareWhatsApp}
                  onOpenVideo={(l) => setActiveVideoLesson(l)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 text-sm">No modules found in this category.</p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="mt-3 px-4 py-2 bg-amber-500 text-white rounded-xl text-xs font-bold"
              >
                Show All Modules
              </button>
            </div>
          )}
        </div>

        {/* AI Self-Educate Autodidact Mentor Spotlight Banner */}
        <div className="my-8 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-400/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/20 text-white border border-white/30 flex items-center space-x-1.5">
                  <BrainCircuit className="w-3.5 h-3.5 animate-pulse text-amber-200" />
                  <span>AI Self-Educate & Autodidact Mentor</span>
                </span>
                <span className="text-xs text-amber-100 font-semibold">
                  Autonomous Learning • Usable With or Without a Parent
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] tracking-tight">
                Self-Educate: Master Any Subject Independently
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/95 mt-2 leading-relaxed">
                A child in Africa or anywhere in the world can ask any curiosity—from <em>"How do solar panels work?"</em> to <em>"How to solve quadratic equations"</em> or <em>"How to start a village poultry enterprise"</em>. The AI Mentor generates an authentic step-by-step roadmap, real-world analogies, safe home experiments, self-check quizzes, and Cambridge/US curriculum alignment. Includes tap-to-listen voice narration so a child can finish lessons completely alone.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-amber-100">
                <span className="px-2.5 py-1 bg-black/20 rounded-lg">🎙️ Full Voice Narration</span>
                <span className="px-2.5 py-1 bg-black/20 rounded-lg">✅ Interactive Step Checklist</span>
                <span className="px-2.5 py-1 bg-black/20 rounded-lg">🧪 Safe Home Lab</span>
                <span className="px-2.5 py-1 bg-black/20 rounded-lg">📝 Auto-Graded Quiz</span>
                <span className="px-2.5 py-1 bg-black/20 rounded-lg">🎓 Cambridge & USA Aligned</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => {
                  setSelfEducateInitialTopic('');
                  setSelfEducateOpen(true);
                }}
                className="px-6 py-3.5 bg-white text-slate-900 hover:bg-amber-50 font-extrabold text-sm rounded-2xl transition-all cursor-pointer shadow-lg flex items-center justify-center space-x-2"
              >
                <BrainCircuit className="w-5 h-5 text-amber-600" />
                <span>Launch AI Self Educate</span>
                <ArrowRight className="w-4 h-4 text-amber-600" />
              </button>
            </div>
          </div>
        </div>

        {/* International Academic Benchmarks, USA Standards, Global Literature & Manufacturing */}
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Cambridge Pathway & International Curricula */}
          <div className="bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-blue-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-blue-500/25 text-blue-300 border border-blue-400/30">
                  Cambridge Examination Vault
                </span>
                <span className="text-xs text-blue-200">Ages 3–19 • Real Papers & Notes</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] mb-2 flex items-center space-x-2">
                <span>Cambridge Worksheets, Exams & Notes</span>
                <GraduationCap className="w-6 h-6 text-blue-400 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                Take authentic <strong>Cambridge Primary & Lower Secondary Checkpoint papers, IGCSE exam questions, printable foundation worksheets, and master revision notes</strong>. Features timed mock exam mode, step-by-step Cambridge mark schemes (M1, A1, B1), and chief examiner advice.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 bg-white/10 rounded-lg font-mono text-blue-200">0096 Checkpoint Math</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg font-mono text-blue-200">0097 Checkpoint Science</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg font-mono text-blue-200">0580 IGCSE Math</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg font-mono text-blue-200">0610 IGCSE Biology</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg font-mono text-blue-200">0620 Chemistry Moles</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg font-mono text-blue-200">9709 A-Level Pure Math</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-blue-300 font-medium">Includes Mark Schemes & Timed Mock Mode</span>
              <button
                onClick={() => setCambridgeOpen(true)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md flex items-center space-x-1.5"
              >
                <span>Open Cambridge Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Well Known Books, Authors & Resource Centers For All Subjects */}
          <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-amber-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-500/25 text-amber-300 border border-amber-400/30">
                  Global Library & All-Subject Centers
                </span>
                <span className="text-xs text-amber-200">Ages 3–18+ • All 10 Subjects + Scriptures</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] mb-2 flex items-center space-x-2">
                <span>Books, Authors & Resource Centers</span>
                <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                Curated timeless classics, African masterworks, and <strong>The Holy Bible (New Living Translation & The Message by Eugene Peterson)</strong>. Direct free access to world-class resource centers across <strong>all 10 curriculum subjects</strong>: Khan Academy, PhET simulations, Scratch, African Storybook, Bible Gateway, FAO farming guides, and MIT OpenCourseWare.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200 font-semibold">✝️ The Bible (NLT & MSG)</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">Chinua Achebe</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">C.S. Lewis</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">Eugene Peterson</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">All 10 Subject Centers</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-amber-300 font-medium">Free digital access & all-subject directory</span>
              <button
                onClick={() => setBooksAndResourcesOpen(true)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md flex items-center space-x-1.5"
              >
                <span>Browse All-Subject Library</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: United States of America Education System (K–12, Common Core, NGSS, AP Exams & Global Parity) */}
          <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-stone-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-rose-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-500/25 text-rose-300 border border-rose-400/30">
                  USA Education System & Global Parity
                </span>
                <span className="text-xs text-rose-200">Pre-K–Grade 12 • Common Core, NGSS & AP</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] mb-2 flex items-center space-x-2">
                <span>USA K–12 Standards, AP Exams & SAT</span>
                <Flag className="w-6 h-6 text-rose-400 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                Equal educational standards for every child: a student in rural Uganda or an African city receives the identical academic rigor as students in the United States, Europe, and Asia. Practice authentic <strong>Common Core Math, Next Generation Science Standards (NGSS), AP Calculus, AP Biology, and SAT Math</strong> test papers with full answer explanations and grade-level crosswalks.
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-rose-200 font-semibold">🇺🇸 Pre-K to Grade 12</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-rose-200">Common Core Math & ELA</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-rose-200">NGSS 3D Science</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-rose-200">AP Biology & Calculus</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-rose-200">SAT Math 800 Prep</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-rose-200">CSTA Coding</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-rose-300 font-medium">Practice papers, answer keys & grade crosswalk</span>
              <button
                onClick={() => setUsCurriculumOpen(true)}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md flex items-center space-x-1.5"
              >
                <span>Open USA K–12 Vault</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Reading to Manufacturing & Market Innovation Hub */}
          <div className="bg-gradient-to-br from-stone-950 via-amber-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-amber-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-500/25 text-amber-300 border border-amber-400/30">
                  Reading to Market Inventions
                </span>
                <span className="text-xs text-amber-200">All Ages • Real Products & Enterprise</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] mb-2 flex items-center space-x-2">
                <span>Manufacturing & Market Product Hub</span>
                <Factory className="w-6 h-6 text-amber-400 shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                Reading must lead to innovation: a child learns how to turn book science and math into <strong>manufactured products sold on local and international markets</strong>. Complete step-by-step blueprints for solar lamps, cold-process soaps, hydroponic green animal fodder, bio-sand water filters, and organic fertilizers with bill of materials, safety guidelines, and live unit economics in local currency (UGX/USD).
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200 font-semibold">🏭 Micro-Manufacturing</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">Solar LED Assembly</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">Herbal Cold-Soap</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">Hydroponic Fodder</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">Bio-Sand Filter</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-lg text-amber-200">Unit Profit Calculator</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-amber-300 font-medium">BOM, manufacturing steps & unit economics</span>
              <button
                onClick={() => {
                  setSelectedManufacturingId(undefined);
                  setManufacturingOpen(true);
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md flex items-center space-x-1.5"
              >
                <span>Launch Manufacturing Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Parent + Child Hands-On Laboratories Spotlight */}
        <HandsOnProjectsSection
          modules={CURRICULUM_MODULES}
          onOpenProject={(m) => setActiveLesson(m)}
        />

        {/* WhatsApp & Low-Data Community Section */}
        <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-emerald-600/15">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-200 bg-white/20 px-2.5 py-0.5 rounded-full inline-block mb-2">
              Low-Data Community Empowerment
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] leading-snug">
              Every Home a School: Share Lessons on WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 mt-1 leading-relaxed">
              In Uganda and across Africa, millions of families connect via WhatsApp. Every lesson can be copied in one click as a light text summary with emojis and questions to share with family groups, church communities, or neighbors.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => handleShareWhatsApp(todayLesson)}
              className="px-5 py-3 rounded-2xl bg-white text-emerald-900 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow-md flex items-center space-x-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-emerald-600" />
              <span>Copy Today's Lesson for WhatsApp</span>
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-amber-400" />
                <span className="font-extrabold text-lg text-white font-['Outfit']">
                  Educate the World
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-sm">
                A free, international quality classroom for every child. Providing structured daily learning, practical life skills, and parental scaffolding so every child can thrive.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                Core Design Principles
              </h4>
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• <strong>Don't replace school:</strong> Supplement revision, curiosity & practical life.</li>
                <li>• <strong>Secret weapon:</strong> Teach parents how to teach through tiny guides.</li>
                <li>• <strong>20-Minute missions:</strong> 5m Learn • 5m Discuss • 5m Activity • 5m Questions.</li>
                <li>• <strong>Locally relevant:</strong> UGX, matooke, Lake Victoria & African civilizations.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                Competency Passport
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Shifting education from "What marks did you get?" to "What can you do?" Accumulate certified capabilities in mathematics, science, finance, and critical thinking.
              </p>
              <div className="mt-4">
                <button
                  onClick={() => setPassportOpen(true)}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  View Learning Passport
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Educate the World Initiative • Learn. Think. Build. Transform.</p>
            <p className="mt-2 sm:mt-0">Built for low-bandwidth devices & mobile browsers</p>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          currentProfile={currentProfile}
          isOpen={Boolean(activeLesson)}
          onClose={() => setActiveLesson(null)}
          onCompleteLesson={handleCompleteLesson}
          onCompleteCommunityMission={(lesson, missionTitle) => handleLogCommunityMission(lesson.title, missionTitle, lesson.communityMission?.impactGoal || 'Community impact completed')}
          isCompleted={currentProfile.completedLessonIds.includes(activeLesson.id)}
          onOpenCambridge={() => setCambridgeOpen(true)}
          onOpenUsCurriculum={() => setUsCurriculumOpen(true)}
          onOpenManufacturing={(productId) => {
            setSelectedManufacturingId(productId);
            setManufacturingOpen(true);
          }}
          onOpenWorldChangers={() => setWorldChangersOpen(true)}
          onOpenWorldLanguages={() => {
            setWorldLanguagesInitialCode('mandarin');
            setWorldLanguagesOpen(true);
          }}
          onSelectLesson={(lesson) => setActiveLesson(lesson)}
        />
      )}

      {activeBiteLesson && (
        <FiveMinuteBiteModal
          lesson={activeBiteLesson}
          currentProfile={currentProfile}
          isOpen={Boolean(activeBiteLesson)}
          onClose={() => setActiveBiteLesson(null)}
          onComplete={handleComplete5MinBite}
        />
      )}

      <LearningPassportModal
        currentProfile={currentProfile}
        isOpen={passportOpen}
        onClose={() => setPassportOpen(false)}
      />

      <ParentDashboardModal
        currentProfile={currentProfile}
        isOpen={dashboardOpen}
        onClose={() => setDashboardOpen(false)}
        onOpenLesson={(l) => {
          setDashboardOpen(false);
          setActiveLesson(l);
        }}
      />

      <TeachMeAnythingModal
        currentProfile={currentProfile}
        isOpen={teachMeAnythingOpen}
        onClose={() => setTeachMeAnythingOpen(false)}
      />

      {selectedParentGuideLesson && (
        <ParentGuideModal
          lesson={selectedParentGuideLesson}
          currentProfile={currentProfile}
          isOpen={Boolean(selectedParentGuideLesson)}
          onClose={() => setSelectedParentGuideLesson(null)}
          onLaunchFullMission={(l) => {
            setSelectedParentGuideLesson(null);
            setActiveLesson(l);
          }}
        />
      )}

      <OfflinePackModal
        currentProfile={currentProfile}
        selectedAgeBand={selectedAgeBand}
        isOpen={offlinePackOpen}
        onClose={() => setOfflinePackOpen(false)}
      />

      <UnescoOerModal
        isOpen={unescoOerOpen}
        onClose={() => setUnescoOerOpen(false)}
        currentProfile={currentProfile}
        selectedAgeBand={selectedAgeBand}
        onOpenOfflinePack={() => {
          setUnescoOerOpen(false);
          setOfflinePackOpen(true);
        }}
      />

      <LocationDialectModal
        isOpen={locationDialectOpen}
        onClose={() => setLocationDialectOpen(false)}
        currentProfile={currentProfile}
        onUpdateProfileLocation={handleUpdateProfileLocation}
      />

      <WorldChangersModal
        currentProfile={currentProfile}
        isOpen={worldChangersOpen}
        onClose={() => setWorldChangersOpen(false)}
        onLogCommunityMission={handleLogCommunityMission}
        onLaunchLesson={(l) => {
          setWorldChangersOpen(false);
          setActiveLesson(l);
        }}
      />

      <ScopeAndSequenceModal
        isOpen={scopeAndSequenceOpen}
        onClose={() => setScopeAndSequenceOpen(false)}
        currentProfile={currentProfile}
        onOpenBooksAndResources={() => setBooksAndResourcesOpen(true)}
      />

      <CambridgeCurriculumModal
        isOpen={cambridgeOpen}
        onClose={() => setCambridgeOpen(false)}
        currentProfile={currentProfile}
        onOpenUsCurriculum={() => {
          setCambridgeOpen(false);
          setUsCurriculumOpen(true);
        }}
      />

      <BooksAndResourceCentersModal
        isOpen={booksAndResourcesOpen}
        onClose={() => setBooksAndResourcesOpen(false)}
        currentProfile={currentProfile}
      />

      <UsCurriculumModal
        isOpen={usCurriculumOpen}
        onClose={() => setUsCurriculumOpen(false)}
        onOpenCambridge={() => {
          setUsCurriculumOpen(false);
          setCambridgeOpen(true);
        }}
      />

      <SelfEducateModal
        isOpen={selfEducateOpen}
        onClose={() => setSelfEducateOpen(false)}
        currentProfile={currentProfile}
        initialTopic={selfEducateInitialTopic}
      />

      <InnovationAndManufacturingModal
        isOpen={manufacturingOpen}
        onClose={() => setManufacturingOpen(false)}
        initialProductId={selectedManufacturingId}
        onOpenLesson={(lessonId) => {
          setManufacturingOpen(false);
          const target = CURRICULUM_MODULES.find(m => m.id === lessonId);
          if (target) setActiveLesson(target);
        }}
      />

      {/* 90-Second Animated Video Modal from Home Grid */}
      {activeVideoLesson && (
        <AnimatedLessonVideoModal
          isOpen={Boolean(activeVideoLesson)}
          onClose={() => setActiveVideoLesson(null)}
          video={getOrGenerateLessonVideo(activeVideoLesson)}
          lessonTitle={activeVideoLesson.title}
          learnerName={currentProfile.name}
        />
      )}

      {/* World Languages Academy Modal (Ages 3–Adult) */}
      <WorldLanguagesModal
        isOpen={worldLanguagesOpen}
        onClose={() => setWorldLanguagesOpen(false)}
        initialLanguage={worldLanguagesInitialCode}
      />

      {/* 6 Subject Learning Packs Modal (Unmixed Streams with Interdisciplinary Integration) */}
      <SubjectPacksModal
        isOpen={subjectPacksOpen}
        onClose={() => setSubjectPacksOpen(false)}
        currentProfile={currentProfile}
        onLaunchLesson={(l) => {
          setSubjectPacksOpen(false);
          setActiveLesson(l);
        }}
      />

    </div>
  );
};
