import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Share2, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Users, 
  Sparkles, 
  MessageSquare, 
  Wrench, 
  HelpCircle,
  Copy,
  Printer,
  Heart,
  Building2,
  TreePine,
  Languages,
  Globe,
  GraduationCap,
  Factory,
  Flag,
  Scale,
  Compass,
  Check,
  RotateCcw,
  Zap,
  Smile,
  Film,
  Play,
  Maximize2,
  Link2,
  ChevronRight,
  ChevronLeft,
  Layers,
  FileText
} from 'lucide-react';
import { LessonModule, ChildProfile, LocationType } from '../types/curriculum';
import { getLocalizedLesson } from '../data/curriculumData';
import { speakText, stopSpeaking } from '../utils/speech';
import { getCambridgeAlignmentForLesson } from '../data/internationalCurriculaData';
import { getUsAlignmentForLesson } from '../data/usCurriculumData';
import { getUnifiedCurriculaForLesson, UnifiedLessonCurricula, UnifiedCurriculumBenchmark } from '../data/unifiedCurriculaData';
import { AnimatedLessonVideoModal, AnimatedLessonVideoPlayer } from './AnimatedLessonVideoModal';
import { getOrGenerateLessonVideo } from '../data/animatedVideoData';
import { getAdjacentLessonsInSubject, getSubjectPackForLesson } from '../data/subjectPacksData';

interface LessonModalProps {
  lesson: LessonModule;
  currentProfile: ChildProfile;
  isOpen: boolean;
  onClose: () => void;
  onCompleteLesson: (lesson: LessonModule) => void;
  onCompleteCommunityMission?: (lesson: LessonModule, missionTitle: string) => void;
  isCompleted: boolean;
  onOpenCambridge?: (resourceId?: string) => void;
  onOpenUsCurriculum?: () => void;
  onOpenManufacturing?: (productId?: string) => void;
  onOpenWorldChangers?: () => void;
  onOpenWorldLanguages?: () => void;
  onSelectLesson?: (lesson: LessonModule) => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  currentProfile,
  isOpen,
  onClose,
  onCompleteLesson,
  onCompleteCommunityMission,
  isCompleted,
  onOpenCambridge,
  onOpenUsCurriculum,
  onOpenManufacturing,
  onOpenWorldChangers,
  onOpenWorldLanguages,
  onSelectLesson,
}) => {
  const [activeLocation, setActiveLocation] = useState<LocationType>(currentProfile.location || 'rural');
  const [activeTab, setActiveTab] = useState<'video' | 'learn' | 'curricula' | 'worksheet' | 'discuss' | 'activity' | 'quiz' | 'community'>('video');
  const [learnerMode, setLearnerMode] = useState<'solo' | 'parent'>('solo'); // 'solo': kid finishes independently; 'parent': co-learn with parent
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [missionPledged, setMissionPledged] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [activityDone, setActivityDone] = useState(false);
  const [materialsGathered, setMaterialsGathered] = useState(false);
  const [showWorksheetMarkScheme, setShowWorksheetMarkScheme] = useState(false);
  const [worksheetStudentAnswers, setWorksheetStudentAnswers] = useState<Record<string, string>>({});
  const [showCelebration, setShowCelebration] = useState(false);
  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);
  
  // Unified Global Curricula Interactive State
  const [selectedCurriculumSystem, setSelectedCurriculumSystem] = useState<'usa' | 'cambridge' | 'ib' | 'china' | 'japan' | 'asia' | 'christian'>('usa');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [showHint, setShowHint] = useState<Record<string, boolean>>({});

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    setActiveLocation(currentProfile.location || 'rural');
    setActiveTab('video');
    setSelectedAnswers({});
    setSubmittedQuiz(false);
    setCheckedSteps({});
    setActivityDone(false);
    setMaterialsGathered(false);
    setShowCelebration(false);
    setShowVideoModal(false);
    setHasWatchedVideo(false);
    setRevealedSolutions({});
    setShowHint({});
    stopSpeaking();
    setIsAudioPlaying(false);
  }, [lesson, currentProfile]);

  if (!isOpen) return null;

  const currentLesson = getLocalizedLesson(lesson, activeLocation);
  const cambridge = currentLesson.cambridgeAlignment || getCambridgeAlignmentForLesson(currentLesson.ageBand, currentLesson.category, currentLesson.title);
  const usAlignment = currentLesson.usCurriculumAlignment || getUsAlignmentForLesson(currentLesson.ageBand, currentLesson.category, currentLesson.title);
  const unifiedCurricula = getUnifiedCurriculaForLesson(currentLesson);
  const isUrban = activeLocation === 'urban';
  const subjectPack = getSubjectPackForLesson(currentLesson);
  const adjacent = getAdjacentLessonsInSubject(currentLesson, subjectPack?.id);

  const stepProgress = 
    activeTab === 'video' ? 14 :
    activeTab === 'learn' ? 28 :
    activeTab === 'curricula' ? 42 :
    activeTab === 'discuss' ? 57 :
    activeTab === 'activity' ? 71 :
    activeTab === 'quiz' ? 85 : 100;

  const toggleAudio = (customText?: string) => {
    if (isAudioPlaying) {
      stopSpeaking();
      setIsAudioPlaying(false);
    } else {
      let script = customText;
      if (!script) {
        if (activeTab === 'learn') {
          script = `${currentLesson.mission.step1_learn.story} Key concept: ${currentLesson.mission.step1_learn.keyConcept}`;
        } else if (activeTab === 'curricula') {
          const cur = unifiedCurricula[selectedCurriculumSystem];
          script = `International curriculum standard: ${cur.systemName}. Standard code: ${cur.standardsCode}. Learning objective: ${cur.learningObjective}. Global benchmark: ${cur.curriculumBenchmark}. Practice problem: ${cur.practiceProblem.question}`;
        } else if (activeTab === 'discuss') {
          script = learnerMode === 'solo'
            ? `Self-discovery question: ${currentLesson.parentTeachingGuide.introductoryQuestion}. The big idea: ${currentLesson.parentTeachingGuide.simplifiedExplanation}`
            : `Parent teaching guide. Introductory question: ${currentLesson.parentTeachingGuide.introductoryQuestion}. Simplified explanation: ${currentLesson.parentTeachingGuide.simplifiedExplanation}`;
        } else if (activeTab === 'activity') {
          script = `Hands-on activity: ${currentLesson.mission.step3_activity.gameOrExperimentName}. Instructions: ${currentLesson.mission.step3_activity.instructions.join('. ')}`;
        } else if (activeTab === 'community' && currentLesson.communityMission) {
          script = `World Changer Mission: ${currentLesson.communityMission.title}. Goal: ${currentLesson.communityMission.impactGoal}. Principle: ${currentLesson.communityMission.worldChangerPrinciple}.`;
        } else {
          script = currentLesson.audioNarrationText;
        }
      }

      const started = speakText(script, () => {
        setIsAudioPlaying(false);
      });
      setIsAudioPlaying(started);
    }
  };

  const handleSpeakDialectWord = (word: string) => {
    stopSpeaking();
    speakText(word);
  };

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(currentLesson.whatsAppSnippet);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2500);
  };

  const handleQuizAnswer = (qIndex: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    const questions = currentLesson.parentTeachingGuide.followUpQuestions;
    let score = 0;
    questions.forEach((_, idx) => {
      if (selectedAnswers[idx] === 0) {
        score++;
      }
    });
    setQuizScore(score);
    setSubmittedQuiz(true);
  };

  const handleFinishLesson = () => {
    onCompleteLesson(currentLesson);
    setShowCelebration(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-amber-200 flex flex-col max-h-[94vh] overflow-hidden relative">
        
        {/* Celebration Overlay when Completed */}
        {showCelebration && (
          <div className="absolute inset-0 z-50 bg-slate-950/90 text-white p-6 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-200">
            <div className="text-6xl mb-3 animate-bounce">🏅🌟🎉</div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
              MISSION COMPLETED!
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-['Outfit'] mt-2 text-white">
              Outstanding Work, {currentProfile.name}!
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-md leading-relaxed">
              {learnerMode === 'solo' 
                ? 'You completed this entire international mission all by yourself! You are a brilliant, independent learner changing the world!' 
                : 'You completed today’s mission together with family! Real knowledge has been stamped into your passport.'}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {onOpenWorldChangers && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenWorldChangers();
                  }}
                  className="px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center space-x-1.5 cursor-pointer"
                >
                  <Globe className="w-4 h-4 text-emerald-200" />
                  <span>View 17 UN SDGs World Changers Hub</span>
                </button>
              )}

              {onOpenManufacturing && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenManufacturing();
                  }}
                  className="px-4 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-md flex items-center space-x-1.5 cursor-pointer"
                >
                  <Factory className="w-4 h-4 text-stone-900" />
                  <span>Start Manufacturing a Product</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700 cursor-pointer"
              >
                Close & Return Home 🏠
              </button>
            </div>
          </div>
        )}

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-5 sm:p-6 relative">
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-200 bg-black/20 px-2.5 py-0.5 rounded-full border border-amber-300/30">
              {currentLesson.categoryLabel}
            </span>
            <span className="text-xs text-amber-100 font-semibold">
              Ages {currentLesson.ageBand} • {currentLesson.stageName}
            </span>
            {currentLesson.sequenceOrder && (
              <span className="text-xs text-white bg-black/30 px-2.5 py-0.5 rounded-full font-bold">
                Day {currentLesson.sequenceOrder} of 365
              </span>
            )}
            {currentLesson.prerequisiteTopic && (
              <span className="text-[11px] text-amber-200 bg-black/30 px-2 py-0.5 rounded-full font-semibold border border-amber-300/30">
                🔑 Prerequisite: {currentLesson.prerequisiteTopic}
              </span>
            )}
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-sky-200 bg-sky-950/50 px-2.5 py-0.5 rounded-full border border-sky-300/40 flex items-center space-x-1 shadow-2xs">
              <span>🔓 UNESCO OER • CC BY 4.0</span>
            </span>
            <span className="text-xs text-white bg-white/20 px-2 py-0.5 rounded-full font-bold ml-auto sm:ml-0">
              ⏱️ 20-Min Daily Mission
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            {currentLesson.title}
          </h1>
          <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-2xl leading-relaxed">
            {currentLesson.subtitle}
          </p>

          {/* Systematic Track Navigation Row */}
          {onSelectLesson && (adjacent.previous || adjacent.next) && (
            <div className="mt-3 flex items-center justify-between gap-2 bg-black/25 px-3 py-2 rounded-2xl text-xs text-white border border-white/10">
              <span className="text-[11px] font-medium text-amber-200 truncate">
                📚 Track: <strong className="text-white">{subjectPack?.shortName || currentLesson.categoryLabel}</strong>
              </span>
              <div className="flex items-center space-x-1.5 flex-shrink-0">
                {adjacent.previous && (
                  <button
                    onClick={() => {
                      stopSpeaking();
                      onSelectLesson(adjacent.previous!);
                    }}
                    className="px-2.5 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-[11px] flex items-center space-x-1 cursor-pointer transition-colors"
                    title={`Previous prerequisite: ${adjacent.previous.title}`}
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>
                )}
                {adjacent.next && (
                  <button
                    onClick={() => {
                      stopSpeaking();
                      onSelectLesson(adjacent.next!);
                    }}
                    className="px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] flex items-center space-x-1 cursor-pointer transition-colors shadow-xs"
                    title={`Next systematic lesson: ${adjacent.next.title}`}
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Child Autonomy Learning Mode Toggle & Audio Read Aloud */}
          <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* Solo Kid Mode vs Parent Mode Toggle */}
            <div className="inline-flex items-center p-1 rounded-2xl bg-black/30 backdrop-blur-xs border border-white/20">
              <button
                onClick={() => setLearnerMode('solo')}
                className={`px-3 py-1 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                  learnerMode === 'solo'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-amber-100 hover:text-white'
                }`}
                title="Child completes this lesson independently"
              >
                <Smile className="w-3.5 h-3.5" />
                <span>🧒 I Learn by Myself!</span>
              </button>

              <button
                onClick={() => setLearnerMode('parent')}
                className={`px-3 py-1 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                  learnerMode === 'parent'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-amber-100 hover:text-white'
                }`}
                title="Parent or teacher guides the child"
              >
                <Users className="w-3.5 h-3.5" />
                <span>👨‍👩‍👧 With Parent Guide</span>
              </button>
            </div>

            {/* 90-Second Animated Video & Read-Aloud Voice Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => {
                  stopSpeaking();
                  setIsAudioPlaying(false);
                  setShowVideoModal(true);
                }}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-black transition-all shadow-xs cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600 text-white animate-pulse"
                title="Watch 90-second animated video for visual learning"
              >
                <Film className="w-3.5 h-3.5" />
                <span>Watch 90s Video 🎬</span>
              </button>

              <button
                onClick={() => toggleAudio()}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold transition-all shadow-xs cursor-pointer ${
                  isAudioPlaying
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-white text-slate-900 hover:bg-amber-50'
                }`}
              >
                {isAudioPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-600" />}
                <span>{isAudioPlaying ? 'Stop Reading' : 'Listen 🔊'}</span>
              </button>

              <button
                onClick={() => setActiveLocation(isUrban ? 'rural' : 'urban')}
                className="px-2.5 py-1.5 rounded-xl bg-black/20 hover:bg-black/30 text-amber-100 font-bold transition-colors cursor-pointer"
                title="Switch Urban / Rural Setting"
              >
                {isUrban ? '🏙️ Town' : '🌾 Village'}
              </button>
            </div>
          </div>
        </div>

        {/* Visual Progress Bar (20% to 100%) */}
        <div className="w-full bg-slate-100 h-1.5">
          <div 
            className="bg-amber-500 h-1.5 transition-all duration-300"
            style={{ width: `${stepProgress}%` }}
          />
        </div>

        {/* 20-Minute Lesson Progression Tabs */}
        <div className="bg-amber-50/60 border-b border-amber-100 px-4 sm:px-6 py-2.5 flex items-center justify-between overflow-x-auto gap-2 no-scrollbar text-xs font-bold">
          <div className="flex items-center space-x-1 sm:space-x-2">
            
            {/* STEP 1: 90s Animated Video (1.5 min) */}
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-black ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-white shadow-xs ring-2 ring-indigo-300'
                  : hasWatchedVideo
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                  : 'bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100'
              }`}
            >
              <Film className="w-3.5 h-3.5 text-indigo-500" />
              <span>1. 🎬 90s Video (1.5m)</span>
              {hasWatchedVideo && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-0.5" />}
            </button>

            {/* STEP 2: Core Concept & Story (3.5 min) */}
            <button
              onClick={() => setActiveTab('learn')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'learn'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-100/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>2. Core Concept (3.5m)</span>
            </button>

            {/* STEP 3: Integrated Global Curricula (All-in-One) */}
            <button
              onClick={() => setActiveTab('curricula')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-bold ${
                activeTab === 'curricula'
                  ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-300'
                  : 'bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>3. Global Curricula 🌐</span>
            </button>

            {/* STEP 4: Printable & Offline Worksheet */}
            <button
              onClick={() => setActiveTab('worksheet')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap font-bold ${
                activeTab === 'worksheet'
                  ? 'bg-purple-600 text-white shadow-xs ring-2 ring-purple-300'
                  : 'bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-purple-600" />
              <span>4. Offline Worksheet 📝</span>
            </button>

            {/* STEP 5: Discuss & Think (5 min) */}
            <button
              onClick={() => setActiveTab('discuss')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'discuss'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-100/50'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{learnerMode === 'solo' ? '4. Think & Discover (5m)' : '4. Parent Guide (5m)'}</span>
            </button>

            {/* STEP 5: Hands-On Activity Lab (5 min) */}
            <button
              onClick={() => setActiveTab('activity')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'activity'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-100/50'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>5. Activity Lab (5m)</span>
            </button>

            {/* STEP 6: Diagnostic Quiz (5 min) */}
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'quiz'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-amber-100/50'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>6. Questions (5m)</span>
            </button>

            {/* STEP 7: World Changer UN SDG */}
            <button
              onClick={() => setActiveTab('community')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'community'
                  ? 'bg-emerald-600 text-white shadow-xs ring-2 ring-emerald-300'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>World Changer 🌍</span>
            </button>

          </div>

          <span className="text-[11px] text-slate-500 font-bold hidden lg:inline">
            20-Min Mission • Step {activeTab === 'video' ? '1' : activeTab === 'learn' ? '2' : activeTab === 'curricula' ? '3' : activeTab === 'discuss' ? '4' : activeTab === 'activity' ? '5' : activeTab === 'quiz' ? '6' : '7'} of 7
          </span>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: 90-SECOND ANIMATED VIDEO (OFFICIALLY PART OF 20-MIN LESSON) */}
          {activeTab === 'video' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Mission Orientation Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white border border-indigo-400/30">
                <div className="flex items-center space-x-2.5">
                  <span className="w-8 h-8 rounded-xl bg-indigo-500/30 border border-indigo-300/40 flex items-center justify-center text-amber-300 font-black text-xs shrink-0">
                    1/5
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit'] flex items-center space-x-1.5">
                      <span>Step 1 of 20-Min Lesson: 90s Animated Visual Video Hook</span>
                      <span className="text-[10px] bg-rose-600 text-white font-black px-1.5 py-0.2 rounded-md">1.5 MIN</span>
                    </h4>
                    <p className="text-[11px] text-indigo-200">
                      Watch Amina & Mama Sarah demonstrate the real-world hook, moving scientific mechanism & compound experiment.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-auto">
                  {hasWatchedVideo && (
                    <span className="inline-flex items-center space-x-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-xl">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Watched ✓</span>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      stopSpeaking();
                      setIsAudioPlaying(false);
                      setShowVideoModal(true);
                    }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                    title="Open Fullscreen Cinema Mode"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Cinema Mode</span>
                  </button>
                </div>
              </div>

              {/* Embedded Animated Video Player with Characters and Relatable Scenery */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <AnimatedLessonVideoPlayer
                  video={getOrGenerateLessonVideo(currentLesson)}
                  lessonTitle={currentLesson.title}
                  learnerName={currentProfile.name}
                  defaultLocation={activeLocation}
                  isInline={true}
                  onCompleteVideo={() => setHasWatchedVideo(true)}
                />
              </div>

              {/* Action Bar to proceed to Step 2 */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className={`w-5 h-5 shrink-0 ${hasWatchedVideo ? 'text-emerald-600' : 'text-amber-500'}`} />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      {hasWatchedVideo ? 'Step 1 Complete: 90s Visual Discovery Mastered! (1.5m / 20m)' : 'Enjoy the animated video above, then proceed to the core story.'}
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Up Next: Step 2 — Everyday Home Story & Dialect Words (3.5 min)
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setHasWatchedVideo(true);
                    setActiveTab('learn');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black transition-all flex items-center space-x-1.5 cursor-pointer shadow-md"
                >
                  <span>Proceed to Step 2: Core Concept (3.5m) ➡️</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: LEARN */}
          {activeTab === 'learn' && (
            <div className="space-y-4 animate-in fade-in duration-150">

              {/* Visual Discovery 90s Video Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white border border-indigo-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600/40 border border-indigo-300/30 flex items-center justify-center text-amber-300 shrink-0 shadow-inner">
                    <Film className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Visual Learning Mode</span>
                    </span>
                    <h4 className="text-sm font-bold text-white font-['Outfit']">
                      Watch the 90-Second Animated Video
                    </h4>
                    <p className="text-xs text-indigo-200">
                      4 dynamic visual scenes: Everyday wonder, moving scientific model, household experiment & community impact.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    stopSpeaking();
                    setIsAudioPlaying(false);
                    setShowVideoModal(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer shadow-md"
                >
                  <Play className="w-3.5 h-3.5 ml-0.5" />
                  <span>Play 90s Video 🎬</span>
                </button>
              </div>
              
              {/* Dialect Words Card */}
              {currentLesson.dialectWords && currentLesson.dialectWords.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 flex items-center space-x-1.5">
                      <Languages className="w-3.5 h-3.5 text-amber-700" />
                      <span>Local Dialect Words ({isUrban ? 'Urban Town' : 'Rural Village'} Context):</span>
                    </span>
                    <span className="text-[10px] text-amber-700 font-medium">Click 🔊 to hear pronunciation</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentLesson.dialectWords.map((dw, i) => (
                      <div key={i} className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-xl bg-white border border-amber-200 text-xs shadow-2xs">
                        <span className="font-extrabold text-slate-900">{dw.localWord}</span>
                        <span className="text-slate-500">• {dw.englishMeaning}</span>
                        <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/70 px-1.5 py-0.2 rounded-md">{dw.language}</span>
                        <button
                          onClick={() => handleSpeakDialectWord(dw.localWord)}
                          className="p-1 rounded-md text-amber-600 hover:bg-amber-100 cursor-pointer"
                          title="Listen to pronunciation"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 9 World Languages Bridge Card */}
              <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-950 flex items-center space-x-1.5">
                    <Globe className="w-3.5 h-3.5 text-indigo-600" />
                    <span>🌍 World Languages Bridge (Ages 3–Adult):</span>
                  </span>
                  {onOpenWorldLanguages && (
                    <button
                      onClick={onOpenWorldLanguages}
                      className="text-[10px] font-bold text-indigo-700 bg-white border border-indigo-200 px-2.5 py-1 rounded-lg hover:bg-indigo-100 transition-colors cursor-pointer shadow-2xs"
                    >
                      Open 9-Language Academy →
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🇨🇳 Mandarin (Pinyin)</span>
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🇪🇸 Spanish (Phonetic)</span>
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🇫🇷 French (Cognates)</span>
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🇮🇱 Hebrew (Root logic)</span>
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🇬🇷 Greek (Science roots)</span>
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🏛️ Latin (English DNA)</span>
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🇸🇦 Arabic (Triliteral)</span>
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🇮🇳 Hindi (Devanagari)</span>
                  <span className="px-2 py-0.5 bg-white border border-indigo-100 rounded-lg text-slate-700 font-medium">🌍 English (Global)</span>
                </div>
              </div>

              {/* Cross-Subject Interdisciplinary Integration Card */}
              <div className="p-3.5 rounded-2xl bg-cyan-50/80 border border-cyan-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-950 flex items-center space-x-1.5">
                    <Link2 className="w-3.5 h-3.5 text-cyan-600" />
                    <span>🔗 Cross-Subject Integration: {currentLesson.integratedSubjectConnection?.connectionTitle || 'Interdisciplinary Connection'}</span>
                  </span>
                  <span className="text-[10px] font-black text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded-md">
                    Integrated Learning
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentLesson.integratedSubjectConnection?.concept || 'Subjects are never isolated into artificial silos. Explore how this topic connects directly with mathematical calculations, natural science observations, and practical civic skills.'}
                </p>
                {currentLesson.integratedSubjectConnection?.calculationOrFormula && (
                  <div className="mt-2 p-2 rounded-xl bg-white border border-cyan-200 font-mono text-[11px] text-cyan-950 flex items-center justify-between">
                    <span className="font-semibold text-slate-600">📐 Integrated Model:</span>
                    <span className="font-bold">{currentLesson.integratedSubjectConnection.calculationOrFormula}</span>
                  </div>
                )}
                {currentLesson.integratedSubjectConnection?.practicePrompt && (
                  <div className="mt-1.5 text-[11px] text-cyan-950 font-medium bg-cyan-100/60 p-2 rounded-lg">
                    💡 <span className="font-bold">Interdisciplinary Challenge:</span> {currentLesson.integratedSubjectConnection.practicePrompt}
                  </div>
                )}
              </div>

              {/* Key Scripture if available */}
              {currentLesson.keyScripture && (
                <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-amber-950 flex items-start space-x-3">
                  <span className="text-xl shrink-0 mt-0.5">📖</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                      Key Scripture
                    </span>
                    <p className="text-xs sm:text-sm font-semibold italic text-amber-950 leading-relaxed">
                      "{currentLesson.keyScripture}"
                    </p>
                  </div>
                </div>
              )}

              {/* Story / Big Idea Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    {currentLesson.mission.step1_learn.title}
                  </span>
                  <button
                    onClick={() => toggleAudio(currentLesson.mission.step1_learn.story)}
                    className="p-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Read Story Aloud</span>
                  </button>
                </div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {currentLesson.mission.step1_learn.story}
                </p>
              </div>

              {/* ALL-IN-ONE GLOBAL CURRICULA INTEGRATION CARD */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white shadow-xl space-y-4 border border-blue-500/40">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-sky-400" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-black font-['Outfit'] uppercase tracking-wider text-sky-300">
                        All Curricula Unified in This Lesson
                      </h4>
                      <p className="text-[11px] text-slate-300">
                        USA (CCSS & NGSS) • Cambridge CAIE • IB • China Gaokao • Japan MEXT • Singapore CPA • Biblical Wisdom
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('curricula')}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-all cursor-pointer flex items-center space-x-1 shadow-md shrink-0"
                  >
                    <span>Open Full Curricula Lab 🌐</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 7-System Quick Interactive Pills */}
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {[
                    { key: 'usa', flag: '🇺🇸', name: 'USA CCSS/NGSS' },
                    { key: 'cambridge', flag: '🇬🇧', name: 'Cambridge CAIE' },
                    { key: 'ib', flag: '🌐', name: 'IB World' },
                    { key: 'china', flag: '🇨🇳', name: 'China Gaokao' },
                    { key: 'japan', flag: '🇯🇵', name: 'Japan MEXT' },
                    { key: 'asia', flag: '🌏', name: 'Singapore CPA' },
                    { key: 'christian', flag: '✝️', name: 'Biblical Wisdom' },
                  ].map((sys) => (
                    <button
                      key={sys.key}
                      onClick={() => setSelectedCurriculumSystem(sys.key as any)}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                        selectedCurriculumSystem === sys.key
                          ? 'bg-amber-400 text-slate-950 font-black shadow-xs'
                          : 'bg-white/10 text-slate-200 hover:bg-white/20'
                      }`}
                    >
                      <span>{sys.flag}</span>
                      <span>{sys.name}</span>
                    </button>
                  ))}
                </div>

                {/* Active Curriculum Highlight Box */}
                {(() => {
                  const activeSys = unifiedCurricula[selectedCurriculumSystem];
                  return (
                    <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 space-y-2 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="font-mono text-amber-300 font-bold text-[11px]">
                          {activeSys.standardsCode}
                        </span>
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white font-semibold">
                          {activeSys.badgeLabel}
                        </span>
                      </div>
                      <p className="text-slate-100 font-medium text-xs leading-relaxed">
                        <strong>Objective: </strong>{activeSys.learningObjective}
                      </p>
                      <p className="text-sky-200 text-[11px] leading-relaxed">
                        <strong>International Parity: </strong>{activeSys.curriculumBenchmark}
                      </p>
                      <div className="pt-1 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400">
                          Includes practice exam problem and examiner mark scheme
                        </span>
                        <button
                          onClick={() => setActiveTab('curricula')}
                          className="text-amber-300 hover:text-white font-bold text-xs underline cursor-pointer"
                        >
                          Practice Exam Question ➜
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* THROUGH READING TO INNOVATION & MANUFACTURING PRODUCT CARD */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white border border-amber-500/40 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Factory className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                      Reading to Innovation & Market Manufacturing
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-['Outfit']">
                    Turn This Reading Concept Into a Market-Ready Manufactured Product!
                  </h4>
                  <p className="text-xs text-amber-100/80 leading-relaxed">
                    A child must be able to start innovations and manufacture products for local and global markets through reading. Explore exact bills of materials, protocols, and unit profit margins.
                  </p>
                </div>
                {onOpenManufacturing && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenManufacturing();
                    }}
                    className="shrink-0 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-all shadow-md flex items-center space-x-1.5 cursor-pointer self-start sm:self-center"
                  >
                    <span>Open Manufacturing Incubator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Core Concept & Local Example */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-blue-950 space-y-1">
                  <p className="font-bold text-blue-900 flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>The Core Big Idea:</span>
                  </p>
                  <p className="leading-relaxed">{currentLesson.mission.step1_learn.keyConcept}</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1">
                  <p className="font-bold text-emerald-900 flex items-center space-x-1.5">
                    <span>🌍 In Our Daily Life ({isUrban ? 'Town / Urban' : 'Village / Rural'}):</span>
                  </p>
                  <p className="leading-relaxed">{currentLesson.mission.step1_learn.localExample}</p>
                </div>
              </div>

              {/* Household Materials Needed */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-slate-800">Free Household Items: </span>
                <span>{currentLesson.householdMaterials.join(' • ')}</span>
              </div>
            </div>
          )}

          {/* STEP 3: INTEGRATED GLOBAL CURRICULA CONSOLE (ALL 7 CURRICULA IN ONE LESSON) */}
          {activeTab === 'curricula' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Global Curricula Header */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white border border-blue-500/40 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-sky-400" />
                    <div>
                      <h3 className="text-base sm:text-lg font-black font-['Outfit'] text-white">
                        All-in-One Global Curricula Integration
                      </h3>
                      <p className="text-[11px] text-slate-300">
                        Integrated directly in this lesson • No separate entities or external silos
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-400/40 px-3 py-0.5 rounded-full">
                    100% International Parity
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 mt-2.5 leading-relaxed">
                  {unifiedCurricula.globalParitySummary}
                </p>

                {/* 7-System Selector Strip */}
                <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    { key: 'usa', label: '🇺🇸 US CCSS & NGSS' },
                    { key: 'cambridge', label: '🇬🇧 Cambridge CAIE' },
                    { key: 'ib', label: '🌐 IB World' },
                    { key: 'china', label: '🇨🇳 China Gaokao' },
                    { key: 'japan', label: '🇯🇵 Japan MEXT' },
                    { key: 'asia', label: '🌏 Singapore CPA' },
                    { key: 'christian', label: '✝️ Biblical Character' },
                  ].map((sys) => (
                    <button
                      key={sys.key}
                      onClick={() => setSelectedCurriculumSystem(sys.key as any)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                        selectedCurriculumSystem === sys.key
                          ? 'bg-amber-400 text-slate-950 shadow-md font-black scale-105'
                          : 'bg-white/10 text-slate-200 hover:bg-white/20'
                      }`}
                    >
                      <span>{sys.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active System Detail & Interactive Practice Examination Card */}
              {(() => {
                const activeSys = unifiedCurricula[selectedCurriculumSystem];
                const isSolutionOpen = Boolean(revealedSolutions[selectedCurriculumSystem]);
                const isHintOpen = Boolean(showHint[selectedCurriculumSystem]);

                return (
                  <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-5">
                    {/* System Title and Code */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{activeSys.flag}</span>
                          <h4 className="text-base sm:text-lg font-black font-['Outfit'] text-slate-900">
                            {activeSys.systemName}
                          </h4>
                        </div>
                        <p className="text-xs font-mono font-bold text-indigo-700 mt-0.5">
                          {activeSys.standardsCode}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        {activeSys.badgeLabel}
                      </span>
                    </div>

                    {/* Standard Objective & Pedagogical Approach */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                          Official Learning Objective
                        </span>
                        <p className="text-slate-800 leading-relaxed font-semibold">
                          {activeSys.learningObjective}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-1">
                        <span className="text-xs font-black uppercase tracking-wider text-indigo-700">
                          Pedagogical Method & Examiner Benchmark
                        </span>
                        <p className="text-indigo-950 leading-relaxed">
                          {activeSys.pedagogicalApproach}
                        </p>
                      </div>
                    </div>

                    {/* Global Parity Statement */}
                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-900">Curriculum Benchmark: </strong>
                        <span>{activeSys.curriculumBenchmark}</span>
                      </div>
                    </div>

                    {/* Interactive Exam-Style Practice Problem & Mark Scheme */}
                    <div className="p-5 rounded-3xl bg-slate-950 text-white space-y-4 shadow-xl border border-indigo-500/30">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-amber-400" />
                          <h5 className="text-sm sm:text-base font-bold font-['Outfit'] text-white">
                            {activeSys.flag} Authentic {activeSys.badgeLabel} Practice Problem
                          </h5>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white px-2.5 py-0.5 rounded-full">
                          Integrated In Lesson
                        </span>
                      </div>

                      {/* Question Text */}
                      <div className="bg-slate-900/90 p-4 rounded-2xl border border-white/10 text-xs sm:text-sm text-slate-100 whitespace-pre-line leading-relaxed font-sans">
                        {activeSys.practiceProblem.question}
                      </div>

                      {/* Hint Toggle */}
                      {activeSys.practiceProblem.hint && (
                        <div>
                          <button
                            onClick={() => setShowHint(prev => ({ ...prev, [selectedCurriculumSystem]: !isHintOpen }))}
                            className="text-xs font-bold text-amber-300 hover:text-amber-200 underline cursor-pointer flex items-center space-x-1"
                          >
                            <span>{isHintOpen ? 'Hide Pedagogical Hint' : '💡 Need a Hint?'}</span>
                          </button>
                          {isHintOpen && (
                            <div className="mt-2 p-3 rounded-xl bg-amber-950/60 border border-amber-400/30 text-amber-200 text-xs leading-relaxed animate-in fade-in duration-150">
                              {activeSys.practiceProblem.hint}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Examiner Mark Scheme / Rubric */}
                      <div className="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-400/30 space-y-1 text-xs">
                        <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300 block">
                          Official Examiner Mark Scheme / Grading Criteria:
                        </span>
                        <p className="text-slate-200 whitespace-pre-line leading-relaxed font-mono text-[11px]">
                          {activeSys.practiceProblem.rubricOrMarkScheme}
                        </p>
                      </div>

                      {/* Solution Reveal Toggle */}
                      <div className="pt-2">
                        <button
                          onClick={() => setRevealedSolutions(prev => ({ ...prev, [selectedCurriculumSystem]: !isSolutionOpen }))}
                          className={`w-full py-2.5 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-md ${
                            isSolutionOpen
                              ? 'bg-slate-800 hover:bg-slate-700 text-white border border-white/20'
                              : 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-black'
                          }`}
                        >
                          <span>{isSolutionOpen ? 'Hide Step-by-Step Solution' : 'Reveal Step-by-Step Solution & Model Answer ✨'}</span>
                        </button>

                        {isSolutionOpen && (
                          <div className="mt-3 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-400/40 text-emerald-100 text-xs sm:text-sm space-y-2 animate-in zoom-in-95 duration-150">
                            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                              ✓ Model Solution & Step Derivation:
                            </span>
                            <div className="whitespace-pre-line leading-relaxed font-sans text-white">
                              {activeSys.practiceProblem.solution}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* STEP 4: DISCUSS (CHILD-FRIENDLY IN SOLO MODE, PARENT GUIDE IN PARENT MODE) */}
          {activeTab === 'discuss' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              
              <div className="p-3.5 rounded-2xl bg-amber-500 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base font-['Outfit'] flex items-center space-x-2">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{learnerMode === 'solo' ? 'Your Secret Discovery Guide 💡' : 'The Secret Weapon: 5-Step Parent Guide'}</span>
                  </h3>
                  <p className="text-xs text-amber-100 mt-0.5">
                    {learnerMode === 'solo' 
                      ? 'Ask yourself this question, think about the answer, and discover the truth!' 
                      : `Empowering you to teach ${currentProfile.name} in your ${isUrban ? 'urban' : 'rural'} home with warmth.`}
                  </p>
                </div>
                <button
                  onClick={() => toggleAudio()}
                  className="px-2.5 py-1 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold"
                >
                  🔊 Listen
                </button>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                  {learnerMode === 'solo' ? '🤔 Question to Ask Yourself:' : '1. Introductory Question (Spark Curiosity):'}
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  "{currentLesson.parentTeachingGuide.introductoryQuestion}"
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                  {learnerMode === 'solo' ? '💡 The Simple Explanation:' : '2. Simplified Explanation of Core Concept:'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {currentLesson.parentTeachingGuide.simplifiedExplanation}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-1 text-xs">
                <span className="font-bold text-indigo-900 block">
                  🚀 {learnerMode === 'solo' ? 'Your Personal Challenge:' : 'Parent Challenge:'}
                </span>
                <p className="text-indigo-950 leading-relaxed">
                  {currentLesson.parentTeachingGuide.parentChallenge}
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: HANDS-ON ACTIVITY LAB */}
          {activeTab === 'activity' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200 block">
                    Empirical Science & Math Experiment
                  </span>
                  <h3 className="text-base sm:text-lg font-black font-['Outfit'] text-white">
                    {currentLesson.mission.step3_activity.gameOrExperimentName}
                  </h3>
                </div>
                <button
                  onClick={() => toggleAudio()}
                  className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold"
                >
                  🔊 Listen
                </button>
              </div>

              {/* Material Checkboxes for Child Independence */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-slate-800 block">
                  🧺 Step 1: Collect Your Free Household Items:
                </span>
                <div 
                  onClick={() => setMaterialsGathered(!materialsGathered)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    materialsGathered ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-bold' : 'bg-white border-slate-200'
                  }`}
                >
                  <span>{currentLesson.householdMaterials.join(' • ')}</span>
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${materialsGathered ? 'bg-emerald-600 text-white border-emerald-600' : 'border-slate-300 bg-white'}`}>
                    {materialsGathered && <Check className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>

              {/* Step-by-Step Instructions */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                <span className="font-bold text-sm text-slate-900 block font-['Outfit']">
                  🔬 Step 2: Follow These Experiment Steps:
                </span>
                <div className="space-y-2.5">
                  {currentLesson.mission.step3_activity.instructions.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50 text-xs sm:text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Child Activity Completion Stamp Button */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-amber-950 text-xs sm:text-sm">
                    {activityDone ? '✓ You Did This Experiment!' : 'Did you try this experiment with your hands?'}
                  </h4>
                  <p className="text-[11px] text-amber-800">
                    Real learning happens when you test it in the physical world!
                  </p>
                </div>
                <button
                  onClick={() => setActivityDone(!activityDone)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    activityDone 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-amber-500 hover:bg-amber-600 text-white'
                  }`}
                >
                  {activityDone ? '✓ Experiment Completed!' : 'I Finished This Lab! 🌟'}
                </button>
              </div>

            </div>
          )}

          {/* STEP: OFFLINE PRINTABLE WORKSHEET & EXAM PAPER */}
          {activeTab === 'worksheet' && (
            <div className="space-y-6 animate-in fade-in duration-150 printable-area">
              
              {/* Worksheet Banner */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-purple-200 bg-purple-500/30 px-2 py-0.5 rounded-md border border-purple-300/30 mb-1 w-fit">
                    <FileText className="w-3.5 h-3.5" />
                    <span>100% In-App Offline Printable Worksheet & Exam</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-['Outfit']">
                    {currentLesson.title} • Student Activity Sheet
                  </h3>
                  <p className="text-xs text-purple-200 mt-0.5">
                    Self-contained lesson paper ready for home or classroom learning. No internet needed.
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs flex items-center space-x-1.5 cursor-pointer shadow-xs transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Worksheet (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Student Header */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Candidate Name</label>
                  <div className="border-b border-slate-300 pb-1 font-semibold text-slate-800">
                    {currentProfile.name}
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Date & Centre</label>
                  <div className="border-b border-slate-300 pb-1 font-semibold text-slate-800">
                    {new Date().toLocaleDateString()} • Home Academy
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Subject & Stage</label>
                  <div className="border-b border-slate-300 pb-1 font-semibold text-slate-800">
                    {currentLesson.categoryLabel} (Ages {currentLesson.ageBand})
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Max Score</label>
                  <div className="border-b border-slate-300 pb-1 font-bold text-purple-700">
                    {currentLesson.mission.step4_quiz.questions.length * 5 + 10} Marks Total
                  </div>
                </div>
              </div>

              {/* Section 1: Core Concept Comprehension */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                    Section A: Concept Summary & Core Takeaway [10 Marks]
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
                  <p><strong>Reading Prompt: </strong>{currentLesson.mission.step1_learn.story}</p>
                  <p className="mt-2 text-slate-600 italic">Local Context: {currentLesson.mission.step1_learn.localExample}</p>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-800 block">
                    1. In your own words, summarize the main lesson taught in this story (5 marks):
                  </label>
                  <div className="w-full h-20 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-400 bg-slate-50/50">
                    (Write your answer here...)
                  </div>

                  <label className="text-xs font-bold text-slate-800 block">
                    2. Give one real-life example of how you can use this concept at home or in your community (5 marks):
                  </label>
                  <div className="w-full h-20 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-400 bg-slate-50/50">
                    (Write your answer here...)
                  </div>
                </div>
              </div>

              {/* Section 2: Standardized Examination Questions */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                    Section B: Examination Questions [{currentLesson.mission.step4_quiz.questions.length * 5} Marks]
                  </span>
                </div>

                <div className="space-y-4">
                  {currentLesson.mission.step4_quiz.questions.map((q, qIdx) => (
                    <div key={qIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
                      <div className="flex items-start justify-between gap-2">
                        <strong className="text-slate-900 font-['Outfit']">
                          Question {qIdx + 1}: {q.question}
                        </strong>
                        <span className="text-xs font-bold text-purple-700 shrink-0 bg-purple-100 px-2 py-0.5 rounded-md">
                          [5 Marks]
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {q.options.map((opt, oIdx) => (
                          <div key={oIdx} className="p-2 rounded-xl bg-white border border-slate-200 flex items-center space-x-2 text-slate-800">
                            <span className="w-5 h-5 rounded-full bg-slate-100 font-bold flex items-center justify-center text-[10px] shrink-0">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-600">Candidate Choice: [  ]</span>
                        {showWorksheetMarkScheme && (
                          <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                            Correct: Option {String.fromCharCode(65 + q.correctIndex)} — {q.explanation}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Hands-On Field Observation / Lab */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                    Section C: Practical Investigation & Drawing Lab
                  </span>
                </div>

                <div className="text-xs text-slate-800">
                  <strong className="text-slate-900 block font-['Outfit'] text-sm mb-1">
                    Activity: {currentLesson.mission.step3_activity.gameOrExperimentName}
                  </strong>
                  <p className="text-slate-600 mb-2">Instructions:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    {currentLesson.mission.step3_activity.instructions.map((ins, iIdx) => (
                      <li key={iIdx}>{ins}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    Field Sketch / Experimental Observation Diagram Area:
                  </label>
                  <div className="w-full h-36 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-xs text-slate-400 bg-slate-50/50">
                    (Draw your experiment or diagram observations in this box...)
                  </div>
                </div>
              </div>

              {/* Teacher Marking Scheme Toggle */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-amber-950 block text-sm font-['Outfit']">
                    Parent / Teacher Evaluation Guide & Answer Key
                  </strong>
                  <p className="text-amber-800 text-[11px]">
                    Reveal the complete marking rubric and explanations for grading this worksheet.
                  </p>
                </div>

                <button
                  onClick={() => setShowWorksheetMarkScheme(!showWorksheetMarkScheme)}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold transition-colors cursor-pointer shrink-0"
                >
                  {showWorksheetMarkScheme ? 'Hide Marking Scheme' : 'Reveal Marking Scheme'}
                </button>
              </div>

              {showWorksheetMarkScheme && (
                <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 text-xs space-y-3 animate-in fade-in duration-150">
                  <h4 className="font-bold text-emerald-950 text-sm font-['Outfit'] flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Official Marking Scheme & Learning Objectives</span>
                  </h4>
                  <ul className="space-y-1 text-emerald-900 list-disc pl-5">
                    <li><strong>Concept Section:</strong> Award up to 5 marks for clear restatement of core principle; 5 marks for realistic household application.</li>
                    <li><strong>Exam Section:</strong> Award 5 marks per correct multiple-choice response matching the rationale.</li>
                    <li><strong>Lab Section:</strong> Award up to 10 marks for honest completion of the physical experiment and clear observation sketching.</li>
                    <li><strong>Passing Standard:</strong> 70%+ represents Strong Merit; 85%+ represents Cambridge Distinction.</li>
                  </ul>
                </div>
              )}

            </div>
          )}

          {/* STEP 4: QUESTIONS & STANDARDIZED QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-blue-950 font-['Outfit']">
                    Self-Check Questions & Standardized Quiz
                  </h3>
                  <p className="text-xs text-blue-800 mt-0.5">
                    Answer these questions to test your mastery. You can do this with or without a parent!
                  </p>
                </div>
                <button
                  onClick={() => toggleAudio()}
                  className="px-2.5 py-1 rounded-xl bg-blue-600 text-white text-xs font-bold"
                >
                  🔊 Listen
                </button>
              </div>

              <div className="space-y-3">
                {currentLesson.parentTeachingGuide.followUpQuestions.map((q, idx) => {
                  const isAnswered = selectedAnswers[idx] !== undefined;

                  return (
                    <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-xs font-extrabold text-blue-900 bg-blue-50 px-2 py-0.5 rounded-md">
                          Question {idx + 1}
                        </span>
                      </div>

                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {q.question}
                      </p>

                      <div className="space-y-2 pt-1 text-xs">
                        <button
                          onClick={() => handleQuizAnswer(idx, 0)}
                          className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                            selectedAnswers[idx] === 0
                              ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span>{q.sampleAnswer}</span>
                          {selectedAnswers[idx] === 0 && <Check className="w-4 h-4 text-emerald-600" />}
                        </button>

                        <button
                          onClick={() => handleQuizAnswer(idx, 1)}
                          className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                            selectedAnswers[idx] === 1
                              ? 'bg-rose-50 border-rose-300 text-rose-950'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span>I am not sure yet, let me re-read the Big Idea story.</span>
                          {selectedAnswers[idx] === 1 && <X className="w-4 h-4 text-rose-500" />}
                        </button>
                      </div>

                      {isAnswered && (
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 animate-in fade-in">
                          <strong>✓ Great thinking! </strong>{q.sampleAnswer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* STEP 5: WORLD CHANGER MISSION (UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS) */}
          {activeTab === 'community' && currentLesson.communityMission && (
            <div className="space-y-5 animate-in fade-in duration-150">
              
              <div className={`p-5 rounded-3xl bg-gradient-to-r ${currentLesson.communityMission.unSdg?.headerGradient || 'from-emerald-700 via-teal-700 to-emerald-800'} text-white shadow-lg relative overflow-hidden`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 text-white border border-white/30 flex items-center space-x-1.5 shadow-xs">
                    <span>{currentLesson.communityMission.unSdg?.badge || '🇺🇳 UN SUSTAINABLE DEVELOPMENT GOALS'}</span>
                  </span>
                  <span className="text-xs text-white/90 font-medium">
                    UN Global 2030 Action Agenda
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black font-['Outfit'] text-white">
                  {currentLesson.communityMission.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-white/90 mt-1 font-medium">
                  Impact Goal: <span className="font-extrabold text-white underline decoration-amber-300">{currentLesson.communityMission.impactGoal}</span>
                </p>

                {currentLesson.communityMission.unSdg?.tagline && (
                  <div className="mt-2.5 pt-2.5 border-t border-white/20 text-[11px] text-white/90 leading-relaxed">
                    <span className="font-bold">UN Target: </span>
                    <span className="italic">{currentLesson.communityMission.unSdg.tagline}</span>
                  </div>
                )}
              </div>

              {/* Principle & Motto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                    🌟 The Principle Behind This Mission:
                  </span>
                  <p className="font-semibold text-slate-800 leading-relaxed">
                    "{currentLesson.communityMission.worldChangerPrinciple}"
                  </p>
                  {currentLesson.communityMission.dialectPhrase && (
                    <p className="text-amber-700 font-bold mt-1.5 flex items-center space-x-1">
                      <span>🗣️ Local Motto:</span>
                      <span className="bg-amber-100 px-2 py-0.5 rounded-md">{currentLesson.communityMission.dialectPhrase}</span>
                    </p>
                  )}
                </div>

                {currentLesson.communityMission.unSdg?.youthActionFocus && (
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 block mb-1">
                      🇺🇳 UN Youth Action Focus:
                    </span>
                    <p className="font-semibold text-blue-950 leading-relaxed">
                      {currentLesson.communityMission.unSdg.youthActionFocus}
                    </p>
                  </div>
                )}
              </div>

              {/* Interactive Action Steps Checklist */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-2 font-['Outfit']">
                    <Wrench className="w-4 h-4 text-emerald-600" />
                    <span>Practical Community Action Steps (Tap to Check):</span>
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    {Object.values(checkedSteps).filter(Boolean).length} of {currentLesson.communityMission.actionSteps.length} Checked
                  </span>
                </div>

                <div className="space-y-2.5">
                  {currentLesson.communityMission.actionSteps.map((step, idx) => {
                    const isDone = Boolean(checkedSteps[idx]);
                    return (
                      <div 
                        key={idx}
                        onClick={() => setCheckedSteps(prev => ({ ...prev, [idx]: !prev[idx] }))}
                        className={`flex items-start space-x-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isDone 
                            ? 'bg-emerald-50 border-emerald-300 text-slate-900 shadow-2xs' 
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-emerald-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                          isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isDone ? <Check className="w-3.5 h-3.5" /> : <span className="text-[10px] font-bold text-slate-400">{idx + 1}</span>}
                        </div>
                        <p className={`leading-relaxed font-medium text-xs sm:text-sm ${isDone ? 'line-through text-slate-400' : ''}`}>
                          {step}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Confirmation / Pledge */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="text-3xl">🌱🌍✨</div>
                <h4 className="text-base font-bold text-emerald-950 font-['Outfit']">
                  Ready to Change Your Community, {currentProfile.name}?
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Real knowledge is lived out. As you learn, your community becomes cleaner, kinder, and wiser through your hands!
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setMissionPledged(true);
                      onCompleteCommunityMission?.(currentLesson, currentLesson.communityMission!.title);
                    }}
                    disabled={missionPledged}
                    className={`inline-flex items-center space-x-2 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer ${
                      missionPledged
                        ? 'bg-emerald-700 text-white cursor-default'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>{missionPledged ? '✓ Community Mission Recorded in Passport!' : 'Commit to This Mission & Stamp World Changer Badge 🌟'}</span>
                  </button>

                  {onOpenWorldChangers && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenWorldChangers();
                      }}
                      className="px-4 py-3 rounded-2xl bg-white hover:bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold shadow-xs cursor-pointer"
                    >
                      <span>Open 17 UN Goals Hub 🌍</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Tab Controls */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div>
            {activeTab !== 'video' ? (
              <button
                onClick={() => {
                  if (activeTab === 'community') setActiveTab('quiz');
                  else if (activeTab === 'quiz') setActiveTab('activity');
                  else if (activeTab === 'activity') setActiveTab('discuss');
                  else if (activeTab === 'discuss') setActiveTab('curricula');
                  else if (activeTab === 'curricula') setActiveTab('learn');
                  else if (activeTab === 'learn') setActiveTab('video');
                }}
                className="flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/70 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Step</span>
              </button>
            ) : (
              <span className="text-xs text-slate-400 pl-2">Step 1 of 7</span>
            )}
          </div>

          <div>
            {activeTab !== 'community' ? (
              <button
                onClick={() => {
                  if (activeTab === 'video') setActiveTab('learn');
                  else if (activeTab === 'learn') setActiveTab('curricula');
                  else if (activeTab === 'curricula') setActiveTab('discuss');
                  else if (activeTab === 'discuss') setActiveTab('activity');
                  else if (activeTab === 'activity') setActiveTab('quiz');
                  else if (activeTab === 'quiz') setActiveTab('community');
                }}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white transition-colors cursor-pointer shadow-xs"
              >
                <span>
                  Next: {
                    activeTab === 'video' ? 'Core Concept ✨' :
                    activeTab === 'learn' ? 'Global Curricula 🌐' :
                    activeTab === 'curricula' ? (learnerMode === 'solo' ? 'Think & Discover 💡' : 'Parent Guide') :
                    activeTab === 'discuss' ? 'Activity Lab 🔬' :
                    activeTab === 'activity' ? 'Questions & Quiz 📝' :
                    'World Changer (UN SDG) 🌍'
                  }
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={handleFinishLesson}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-colors cursor-pointer flex items-center space-x-1.5"
              >
                <Award className="w-4 h-4 text-amber-300" />
                <span>Complete Lesson & Stamp Passport 🏅</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* 90-Second Animated Video Modal for Visual Learning */}
      {showVideoModal && (
        <AnimatedLessonVideoModal
          isOpen={showVideoModal}
          onClose={() => setShowVideoModal(false)}
          video={getOrGenerateLessonVideo(currentLesson)}
          lessonTitle={currentLesson.title}
          learnerName={currentProfile.name}
          onCompleteVideo={() => {
            // Optional: visual learning bonus XP or badge
          }}
        />
      )}
    </div>
  );
};
