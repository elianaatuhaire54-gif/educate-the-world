import React, { useState, useEffect } from 'react';
import { 
  X, 
  BrainCircuit, 
  Sparkles, 
  Send, 
  Loader2, 
  Volume2, 
  VolumeX, 
  Printer, 
  Share2, 
  CheckCircle2, 
  HelpCircle, 
  Compass, 
  BookOpen, 
  FlaskConical, 
  GraduationCap, 
  Lightbulb, 
  RotateCcw, 
  Bookmark, 
  BookmarkCheck,
  ChevronRight,
  ArrowRight,
  Globe,
  Flag,
  Layers,
  Award,
  Check,
  ExternalLink,
  FileText,
  Film,
  Play,
  Maximize2
} from 'lucide-react';
import { ChildProfile, LocationType } from '../types/curriculum';
import { speakText, stopSpeaking } from '../utils/speech';
import { AnimatedLessonVideoModal, AnimatedLessonVideoPlayer } from './AnimatedLessonVideoModal';
import { generateAnimatedVideoForTopic } from '../data/animatedVideoData';

export interface GlobalCurriculumSystemDetail {
  systemName: string;
  countryFlag: string;
  standardsCode: string;
  learningObjective: string;
  pedagogicalApproach: string;
  curriculumBenchmark: string;
  practiceProblem: string;
}

export interface GlobalCurriculaMatrix {
  usa?: GlobalCurriculumSystemDetail;
  europe?: GlobalCurriculumSystemDetail;
  china?: GlobalCurriculumSystemDetail;
  japan?: GlobalCurriculumSystemDetail;
  asia?: GlobalCurriculumSystemDetail;
}

export interface SelfEducateResponse {
  title: string;
  topicSummary: string;
  levelLabel: string;
  bigIdeaHook: string;
  coreExplanation: string;
  keyPrinciples: { term: string; explanation: string }[];
  roadmapSteps: {
    stepNumber: number;
    title: string;
    duration: string;
    action: string;
    masteryMilestone: string;
  }[];
  handsOnExperiment: {
    title: string;
    materialsNeeded: string[];
    steps: string[];
    whatItProves: string;
  };
  selfCheckQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
  cambridgeAlignmentNote?: string;
  globalCurriculaMatrix?: GlobalCurriculaMatrix;
  globalParityAnalysis?: string;
  recommendedBooksOrResources: string[];
  autodidactProverb: string;
}

interface SelfEducateModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: ChildProfile;
  initialTopic?: string;
}

const INSPIRATIONAL_PROMPTS = [
  { label: '🌐 All Systems • Solar Energy', system: 'all', query: 'How do solar panels turn sunlight into electricity and how to size a battery system?' },
  { label: '🇨🇳 China Gaokao • Quadratic Algebra', system: 'china', query: 'Master quadratic equations through factorisation, Vieta formulas, and graphing parabolas' },
  { label: '🇸🇬 Singapore Math • Bar Model Ratios', system: 'asia', query: 'Solve multi-step ratio and percentage word problems using Singapore Concrete-Pictorial-Abstract bar models' },
  { label: '🇺🇸 USA NGSS • Cellular Energy & Enzymes', system: 'usa', query: 'Explain photosynthesis, chloroplasts, and enzyme active site lock-and-key model under NGSS 3D modeling' },
  { label: '🇯🇵 Japan MEXT • Wave Optics & Bansho', system: 'japan', query: 'Wave optics, refraction, and chromatic dispersion explored through Japanese Bansho problem-posing method' },
  { label: '🇬🇧 Cambridge • Chemistry Mole Calculations', system: 'europe', query: 'Stoichiometry, relative formula mass Mr, empirical formula and gas volumes at rtp' },
  { label: '💧 Universal • Biological Water Filtration', system: 'all', query: 'How to build a three-layer gravel, charcoal and sand water filter for clean drinking water' },
  { label: '📈 Global Markets • Inflation & Central Banks', system: 'all', query: 'How do central banks, commercial loans, and inflation work in African, Asian, and Western economies?' }
];

export const SelfEducateModal: React.FC<SelfEducateModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  initialTopic = ''
}) => {
  const [topic, setTopic] = useState<string>(initialTopic);
  const [targetLevel, setTargetLevel] = useState<'explorer' | 'inquisitive' | 'scholar' | 'autodidact'>(
    currentProfile.age <= 8 
      ? 'explorer' 
      : currentProfile.age <= 13 
      ? 'inquisitive' 
      : currentProfile.age <= 18 
      ? 'scholar' 
      : 'autodidact'
  );
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SelfEducateResponse | null>(null);
  const [activeTab, setActiveTab] = useState<'roadmap' | 'explanation' | 'experiment' | 'quiz' | 'resources' | 'globalCurricula' | 'video'>('roadmap');
  const [selectedCurriculumSystem, setSelectedCurriculumSystem] = useState<'all' | 'usa' | 'europe' | 'china' | 'japan' | 'asia'>('all');
  const [showVideoPlayerModal, setShowVideoPlayerModal] = useState<boolean>(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [savedQuests, setSavedQuests] = useState<{ id: string; title: string; date: string }[]>([]);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Load saved quests on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('etw_saved_self_educate_quests');
      if (stored) {
        setSavedQuests(JSON.parse(stored));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Set initial topic if provided
  useEffect(() => {
    if (initialTopic && initialTopic !== topic) {
      setTopic(initialTopic);
      handleGenerate(initialTopic);
    }
  }, [initialTopic]);

  if (!isOpen) return null;

  const handleGenerate = async (customTopic?: string) => {
    const queryToUse = customTopic || topic;
    if (!queryToUse.trim()) return;

    stopSpeaking();
    setIsAudioPlaying(false);
    setIsLoading(true);
    setCompletedSteps({});
    setSelectedQuizAnswers({});
    setQuizSubmitted(false);
    setIsBookmarked(false);

    try {
      const response = await fetch('/api/self-educate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: queryToUse,
          targetLevel,
          mode: 'roadmap',
          learnerName: currentProfile.name,
          location: currentProfile.location || 'rural',
          dialect: currentProfile.preferredDialect || 'Luganda'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate response');
      }

      const data: SelfEducateResponse = await response.json();
      setResult(data);
      setActiveTab('roadmap');
    } catch (error) {
      console.error('Error with self educate endpoint:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAudio = () => {
    if (isAudioPlaying) {
      stopSpeaking();
      setIsAudioPlaying(false);
    } else if (result) {
      let script = `${result.title}. ${result.topicSummary}. The big idea: ${result.bigIdeaHook}. ${result.coreExplanation}`;
      speakText(script, () => setIsAudioPlaying(false));
      setIsAudioPlaying(true);
    }
  };

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepNumber]: !prev[stepNumber]
    }));
  };

  const handleSelectQuizOption = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    setSelectedQuizAnswers(prev => ({
      ...prev,
      [qIdx]: optIdx
    }));
  };

  const toggleBookmark = () => {
    if (!result) return;
    const questId = result.title.replace(/\s+/g, '-').toLowerCase();
    
    let updated: { id: string; title: string; date: string }[];
    if (isBookmarked) {
      updated = savedQuests.filter(q => q.id !== questId);
      setIsBookmarked(false);
    } else {
      updated = [
        { id: questId, title: result.title, date: new Date().toLocaleDateString() },
        ...savedQuests
      ];
      setIsBookmarked(true);
    }

    setSavedQuests(updated);
    try {
      localStorage.setItem('etw_saved_self_educate_quests', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }
  };

  const handleShare = () => {
    if (!result) return;
    const text = `🌟 Educate the World • AI Self-Educate Guide\n\n📌 *${result.title}*\n${result.topicSummary}\n\n💡 *Key Big Idea:*\n${result.bigIdeaHook}\n\n🔬 *Hands-on Home Experiment:*\n${result.handsOnExperiment.title}\n\n🌱 "LEARN. THINK. CREATE. SERVE. TRANSFORM."`;
    
    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-indigo-200 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header with Glowing AI Self-Educate Brand & Icon */}
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-950 text-white p-5 sm:p-6 relative border-b border-white/10 shadow-lg">
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-300/30 flex items-center space-x-1.5 shadow-xs">
              <BrainCircuit className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>AI SELF-EDUCATE AUTODIDACT HUB</span>
            </span>
            <span className="text-xs text-sky-200 font-medium">Empowered Self-Directed Learning</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black font-['Outfit'] tracking-tight flex items-center space-x-2.5">
                <span>Self Educate AI</span>
                <span className="text-amber-400">✨</span>
              </h1>
              <p className="text-sky-200 font-medium text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
                Generate personalized self-study roadmaps, deep concept explanations, home experiments, and Cambridge-aligned diagnostic quizzes on any curiosity or ambition.
              </p>
            </div>

            {/* Quick Level Selector */}
            <div className="shrink-0 flex items-center bg-white/10 p-1 rounded-2xl border border-white/15 text-xs font-bold">
              <button
                onClick={() => setTargetLevel('explorer')}
                className={`px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                  targetLevel === 'explorer' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
                title="Ages 6-9: Sensory, playful & storytelling"
              >
                Explorer (6-9)
              </button>
              <button
                onClick={() => setTargetLevel('inquisitive')}
                className={`px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                  targetLevel === 'inquisitive' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
                title="Ages 10-14: Cambridge Checkpoint & reasoning"
              >
                Inquisitive (10-14)
              </button>
              <button
                onClick={() => setTargetLevel('scholar')}
                className={`px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                  targetLevel === 'scholar' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
                title="Ages 15-18: Cambridge IGCSE & A-Level depth"
              >
                Scholar (15-18)
              </button>
              <button
                onClick={() => setTargetLevel('autodidact')}
                className={`px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                  targetLevel === 'autodidact' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
                title="18+: Enterprise, systems thinking & lifelong learning"
              >
                Autodidact (18+)
              </button>
            </div>
          </div>
        </div>

        {/* Input Bar & Preset Curiosity Pills */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 sm:p-5 space-y-3">
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleGenerate();
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <BrainCircuit className="w-5 h-5 text-indigo-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="What do you want to learn today? (e.g. Solar panels, Quadratic equations, Photosynthesis, Python coding...)"
                className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm font-semibold rounded-2xl bg-white border-2 border-indigo-200 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-100 text-slate-900 shadow-xs placeholder:text-slate-400"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !topic.trim()}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm flex items-center space-x-2 transition-all cursor-pointer shadow-md disabled:opacity-50 shrink-0"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Self-Study Quest</span>
                </>
              )}
            </button>
          </form>

          {/* Inspirational Prompt Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
            <span className="text-[11px] font-bold text-slate-500 shrink-0 flex items-center space-x-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Inspirations:</span>
            </span>
            {INSPIRATIONAL_PROMPTS.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setTopic(p.query);
                  handleGenerate(p.query);
                }}
                className="px-2.5 py-1 rounded-xl bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-900 border border-slate-200 hover:border-indigo-300 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer shadow-2xs"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {isLoading ? (
            <div className="p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center mx-auto text-indigo-600 animate-bounce">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-['Outfit']">
                AI Autodidact Mentor is Designing Your Quest...
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                Synthesizing first principles, real-world African/international analogies, step-by-step milestones, and Cambridge alignment for <strong>{currentProfile.name}</strong>.
              </p>
            </div>
          ) : result ? (
            <div className="space-y-6">
              
              {/* Quest Header Banner */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                      {result.levelLabel}
                    </span>
                    <span className="text-xs text-sky-200 font-medium">
                      Self-Directed Mastery Quest
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] leading-tight">
                    {result.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
                    {result.topicSummary}
                  </p>
                </div>

                {/* Toolbar buttons: 90s Video, Voice, Bookmark, Share, Print */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    onClick={() => setShowVideoPlayerModal(true)}
                    className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center space-x-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 text-slate-950 shadow-md animate-pulse"
                    title="Watch 90-second animated video for visual learning"
                  >
                    <Film className="w-4 h-4 text-slate-950" />
                    <span>Watch 90s Video 🎬</span>
                  </button>

                  <button
                    onClick={toggleAudio}
                    className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                      isAudioPlaying
                        ? 'bg-amber-400 text-slate-950 animate-pulse'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                    title={isAudioPlaying ? 'Stop Voice Narration' : 'Listen to Study Guide'}
                  >
                    {isAudioPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isAudioPlaying ? 'Stop Audio' : 'Voice Read'}</span>
                  </button>

                  <button
                    onClick={toggleBookmark}
                    className={`p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                      isBookmarked
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                    title="Save to Notebook"
                  >
                    {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save Quest'}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer flex items-center space-x-1.5"
                    title="Copy to Clipboard"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Share</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer flex items-center space-x-1.5"
                    title="Print Study Guide"
                  >
                    <Printer className="w-4 h-4" />
                    <span className="hidden sm:inline">Print</span>
                  </button>
                </div>
              </div>

              {copiedNotification && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center space-x-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Study guide copied to clipboard! Ready to paste into WhatsApp, email or notes.</span>
                </div>
              )}

              {/* Navigation Tabs for Quest Sections */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-slate-200 pb-2 text-xs font-bold">
                <button
                  onClick={() => setActiveTab('roadmap')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                    activeTab === 'roadmap'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Self-Study Roadmap</span>
                </button>

                <button
                  onClick={() => setActiveTab('explanation')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                    activeTab === 'explanation'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Core Theory & Big Idea</span>
                </button>

                <button
                  onClick={() => setActiveTab('experiment')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                    activeTab === 'experiment'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Home Lab & Experiment</span>
                </button>

                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                    activeTab === 'quiz'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Mastery Diagnostic Quiz</span>
                </button>

                <button
                  onClick={() => setActiveTab('resources')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
                    activeTab === 'resources'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Cambridge Standards & Books</span>
                </button>

                <button
                  onClick={() => setActiveTab('globalCurricula')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 font-bold ${
                    activeTab === 'globalCurricula'
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white shadow-xs'
                      : 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                  <span>Global Curricula (Europe, China, Japan, Asia, USA)</span>
                </button>

                <button
                  onClick={() => setActiveTab('video')}
                  className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 font-bold ${
                    activeTab === 'video'
                      ? 'bg-rose-600 text-white shadow-xs ring-2 ring-rose-300'
                      : 'text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200'
                  }`}
                  title="Watch 90-second animated video for visual learning"
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>🎬 90s Animated Video</span>
                </button>
              </div>

              {/* Visual Learning 90s Video Spotlight Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 text-white border border-indigo-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600/40 border border-indigo-300/30 flex items-center justify-center text-amber-300 shrink-0 shadow-inner">
                    <Film className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Visual Learning Mode for Autodidacts</span>
                    </span>
                    <h4 className="text-sm font-bold text-white font-['Outfit']">
                      Watch the 90-Second Animated Video for "{result.title}"
                    </h4>
                    <p className="text-xs text-indigo-200">
                      Animated SVG diagrams with relatable characters, compound/classroom environment, moving mechanisms & empirical verification.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveTab('video')}
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-all flex items-center space-x-1.5 shrink-0 cursor-pointer shadow-md"
                  >
                    <Play className="w-3.5 h-3.5 ml-0.5" />
                    <span>Watch 90s Video 🎬</span>
                  </button>
                  <button
                    onClick={() => setShowVideoPlayerModal(true)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
                    title="Fullscreen Cinema Mode"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* TAB 1: SELF-STUDY ROADMAP */}
              {activeTab === 'roadmap' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                      <Compass className="w-4 h-4 text-indigo-600" />
                      <span>Step-by-Step Self-Study Milestones:</span>
                    </h3>
                    <span className="text-xs font-semibold text-slate-500">
                      Check each phase as you complete it
                    </span>
                  </div>

                  <div className="space-y-3">
                    {result.roadmapSteps.map((step) => {
                      const isDone = Boolean(completedSteps[step.stepNumber]);

                      return (
                        <div
                          key={step.stepNumber}
                          onClick={() => toggleStep(step.stepNumber)}
                          className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3.5 ${
                            isDone
                              ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 shadow-xs'
                              : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/70 shadow-xs'
                          }`}
                        >
                          <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 mt-0.5 ${
                            isDone ? 'bg-emerald-600 text-white' : 'bg-indigo-100 text-indigo-800'
                          }`}>
                            {isDone ? <CheckCircle2 className="w-4 h-4" /> : step.stepNumber}
                          </div>

                          <div className="flex-1 space-y-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h4 className={`font-bold text-sm ${isDone ? 'line-through text-emerald-900' : 'text-slate-900'}`}>
                                {step.title}
                              </h4>
                              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                                ⏱️ {step.duration}
                              </span>
                            </div>

                            <p className="text-xs text-slate-700 leading-relaxed">
                              {step.action}
                            </p>

                            <div className="pt-1.5 text-[11px] text-indigo-700 font-semibold flex items-center space-x-1">
                              <span className="font-bold text-indigo-900">Mastery Proof:</span>
                              <span>{step.masteryMilestone}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 2: CORE THEORY & BIG IDEA */}
              {activeTab === 'explanation' && (
                <div className="space-y-6">
                  {/* Big Idea Hook Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-amber-900 block flex items-center space-x-1.5">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span>The Big Idea & Real-World Hook:</span>
                    </span>
                    <p className="leading-relaxed font-medium">
                      {result.bigIdeaHook}
                    </p>
                  </div>

                  {/* Core Explanation */}
                  <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                      First-Principles Deconstruction:
                    </h3>
                    <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
                      {result.coreExplanation}
                    </div>
                  </div>

                  {/* Key Principles Grid */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3 flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-indigo-600" />
                      <span>Foundational Principles & Laws:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {result.keyPrinciples.map((p, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1">
                          <span className="font-extrabold text-xs text-indigo-950 block">
                            {p.term}
                          </span>
                          <p className="text-xs text-indigo-900/90 leading-relaxed">
                            {p.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: HOME LAB & EXPERIMENT */}
              {activeTab === 'experiment' && (
                <div className="p-5 sm:p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 shadow-xs space-y-4">
                  <div className="flex items-center space-x-2 border-b border-emerald-200 pb-3">
                    <FlaskConical className="w-6 h-6 text-emerald-700" />
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                        Empirical Home Science Lab
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-emerald-950 font-['Outfit']">
                        {result.handsOnExperiment.title}
                      </h3>
                    </div>
                  </div>

                  {/* Materials Needed */}
                  <div>
                    <span className="text-xs font-extrabold text-emerald-900 uppercase tracking-wider block mb-2">
                      Household Materials Needed:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {result.handsOnExperiment.materialsNeeded.map((mat, i) => (
                        <span key={i} className="text-xs font-semibold px-3 py-1 rounded-xl bg-white text-emerald-900 border border-emerald-200 shadow-2xs">
                          • {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Steps */}
                  <div>
                    <span className="text-xs font-extrabold text-emerald-900 uppercase tracking-wider block mb-2">
                      Empirical Procedure:
                    </span>
                    <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm text-slate-800 leading-relaxed bg-white p-4 rounded-2xl border border-emerald-200">
                      {result.handsOnExperiment.steps.map((st, i) => (
                        <li key={i} className="pl-1">
                          <span>{st}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* What It Proves */}
                  <div className="p-3.5 rounded-2xl bg-white border border-emerald-300 text-xs text-emerald-950 font-medium">
                    <span className="font-extrabold text-emerald-900 block mb-0.5">Scientific Truth Proven:</span>
                    <p className="leading-relaxed">{result.handsOnExperiment.whatItProves}</p>
                  </div>
                </div>
              )}

              {/* TAB 4: MASTERY DIAGNOSTIC QUIZ */}
              {activeTab === 'quiz' && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                      <span>Socratic Mastery Diagnostic (3 Questions):</span>
                    </h3>
                    <button
                      onClick={() => {
                        setSelectedQuizAnswers({});
                        setQuizSubmitted(false);
                      }}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center space-x-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Quiz</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {result.selfCheckQuiz.map((q, qIdx) => {
                      const chosen = selectedQuizAnswers[qIdx];
                      const isAnswered = chosen !== undefined;
                      const isCorrect = chosen === q.correctIndex;

                      return (
                        <div key={qIdx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                          <div className="font-bold text-xs sm:text-sm text-slate-900">
                            {qIdx + 1}. {q.question}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt, oIdx) => {
                              const isSelected = chosen === oIdx;
                              const isRightAnswer = oIdx === q.correctIndex;

                              let btnStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200';
                              if (quizSubmitted) {
                                if (isRightAnswer) {
                                  btnStyle = 'bg-emerald-100 text-emerald-950 border-emerald-400 font-bold';
                                } else if (isSelected) {
                                  btnStyle = 'bg-rose-100 text-rose-950 border-rose-300 line-through';
                                }
                              } else if (isSelected) {
                                btnStyle = 'bg-indigo-600 text-white border-indigo-700 font-bold';
                              }

                              return (
                                <button
                                  key={oIdx}
                                  onClick={() => handleSelectQuizOption(qIdx, oIdx)}
                                  className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${btnStyle}`}
                                >
                                  <span>{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {quizSubmitted && (
                            <div className={`p-3 rounded-xl text-xs ${
                              isCorrect ? 'bg-emerald-50 text-emerald-950 border border-emerald-200' : 'bg-rose-50 text-rose-950 border border-rose-200'
                            }`}>
                              <span className="font-bold">{isCorrect ? '✓ Correct!' : '✗ Misconception: '}</span>
                              <span>{q.explanation}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {!quizSubmitted && Object.keys(selectedQuizAnswers).length > 0 && (
                    <button
                      onClick={() => setQuizSubmitted(true)}
                      className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs transition-colors cursor-pointer shadow-md"
                    >
                      Check My Answers & Reveal Explanations
                    </button>
                  )}
                </div>
              )}

              {/* TAB 5: CAMBRIDGE STANDARDS & BOOKS */}
              {activeTab === 'resources' && (
                <div className="space-y-4">
                  {/* Cambridge Alignment Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-950 space-y-1">
                    <span className="font-extrabold uppercase tracking-wider text-blue-900 block flex items-center space-x-1.5">
                      <GraduationCap className="w-4 h-4 text-blue-700" />
                      <span>Cambridge International Standard Alignment:</span>
                    </span>
                    <p className="leading-relaxed font-medium">
                      {result.cambridgeAlignmentNote}
                    </p>
                  </div>

                  {/* Recommended Books */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                      Authoritative Books & Open-Access Literature:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-800">
                      {result.recommendedBooksOrResources.map((b, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-blue-600 font-bold">📖</span>
                          <span className="font-semibold">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Autodidact Proverb */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs text-amber-950 flex items-start space-x-3">
                    <span className="text-xl">🌟</span>
                    <div>
                      <span className="font-extrabold uppercase tracking-wider text-amber-900 block">
                        Autodidact Wisdom Proverb:
                      </span>
                      <p className="italic font-serif text-slate-800 mt-0.5">
                        "{result.autodidactProverb}"
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 6: GLOBAL CURRICULA MATRIX (Europe, China, Japan, Asia, USA) */}
              {activeTab === 'globalCurricula' && (
                <div className="space-y-6">
                  {/* Global Parity Header Banner */}
                  <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-rose-900 text-white shadow-lg border border-indigo-400/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-white border border-white/30 flex items-center space-x-1.5">
                        <Globe className="w-3.5 h-3.5 text-amber-300" />
                        <span>Global Curricula Integration & Academic Parity</span>
                      </span>
                      <span className="text-xs text-sky-200">5 Premier World Systems</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black font-['Outfit']">
                      Universal Standards: Europe, China, Japan, Asia & USA
                    </h3>
                    <p className="text-xs sm:text-sm text-sky-100/90 mt-1 leading-relaxed max-w-3xl">
                      A child in Africa or anywhere in the world should receive the identical caliber of education as children in Tokyo, London, Singapore, Beijing, and New York. Below is the multi-national crosswalk for <strong>"{result.title}"</strong>.
                    </p>

                    {/* Filter Pills */}
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                      <button
                        onClick={() => setSelectedCurriculumSystem('all')}
                        className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1 ${
                          selectedCurriculumSystem === 'all'
                            ? 'bg-white text-slate-900 shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <span>🌐 All Systems Matrix</span>
                      </button>
                      <button
                        onClick={() => setSelectedCurriculumSystem('usa')}
                        className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1 ${
                          selectedCurriculumSystem === 'usa'
                            ? 'bg-rose-500 text-white shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <span>🇺🇸 USA (Common Core & AP)</span>
                      </button>
                      <button
                        onClick={() => setSelectedCurriculumSystem('europe')}
                        className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1 ${
                          selectedCurriculumSystem === 'europe'
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <span>🇪🇺 Europe (Cambridge & IB)</span>
                      </button>
                      <button
                        onClick={() => setSelectedCurriculumSystem('china')}
                        className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1 ${
                          selectedCurriculumSystem === 'china'
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <span>🇨🇳 China (Gaokao & MOE)</span>
                      </button>
                      <button
                        onClick={() => setSelectedCurriculumSystem('japan')}
                        className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1 ${
                          selectedCurriculumSystem === 'japan'
                            ? 'bg-slate-700 text-white shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <span>🇯🇵 Japan (MEXT & Bansho)</span>
                      </button>
                      <button
                        onClick={() => setSelectedCurriculumSystem('asia')}
                        className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center space-x-1 ${
                          selectedCurriculumSystem === 'asia'
                            ? 'bg-emerald-600 text-white shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <span>🌏 Asia (Singapore & India)</span>
                      </button>
                    </div>
                  </div>

                  {/* Systems Cards List */}
                  <div className="space-y-5">
                    {/* 1. USA SYSTEM */}
                    {(selectedCurriculumSystem === 'all' || selectedCurriculumSystem === 'usa') && (
                      <div className="rounded-2xl border-2 border-rose-200 bg-white p-5 shadow-xs space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 pb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">🇺🇸</span>
                            <div>
                              <h4 className="text-sm font-extrabold text-slate-900">
                                {result.globalCurriculaMatrix?.usa?.systemName || 'United States of America (K–12, Common Core, NGSS & AP)'}
                              </h4>
                              <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md border border-rose-200 inline-block mt-0.5">
                                Standards Code: {result.globalCurriculaMatrix?.usa?.standardsCode || 'CCSS / NGSS 3D Inquiry / AP Benchmark'}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full">
                            American Benchmark
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                          <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-100/80 space-y-1">
                            <span className="font-extrabold text-rose-900 uppercase tracking-wide text-[10px] block">
                              🎯 USA Learning Objective:
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.usa?.learningObjective ||
                                'Demonstrate conceptual modeling, quantitative problem solving, and evidence-based scientific argumentation aligned with US state standards.'}
                            </p>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-extrabold text-slate-900 uppercase tracking-wide text-[10px] block">
                              🧠 Pedagogical Strategy (NGSS & AP):
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.usa?.pedagogicalApproach ||
                                'Three-dimensional NGSS learning combining Science and Engineering Practices (SEP), Crosscutting Concepts (CCC), and Disciplinary Core Ideas (DCI).'}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-rose-300 flex items-center space-x-1.5">
                              <FileText className="w-3.5 h-3.5" />
                              <span>Authentic USA Exam / SAT Practice Challenge:</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">College Board & Common Core Format</span>
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed font-mono bg-black/30 p-3 rounded-lg border border-white/10">
                            {result.globalCurriculaMatrix?.usa?.practiceProblem ||
                              'Solve a multi-step application problem requiring algebraic isolation and real-world constraint modeling.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 2. EUROPE SYSTEM */}
                    {(selectedCurriculumSystem === 'all' || selectedCurriculumSystem === 'europe') && (
                      <div className="rounded-2xl border-2 border-blue-200 bg-white p-5 shadow-xs space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-100 pb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">🇪🇺</span>
                            <div>
                              <h4 className="text-sm font-extrabold text-slate-900">
                                {result.globalCurriculaMatrix?.europe?.systemName || 'Europe (Cambridge CAIE, UK GCSE/A-Levels & IB DP)'}
                              </h4>
                              <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 inline-block mt-0.5">
                                Standards Code: {result.globalCurriculaMatrix?.europe?.standardsCode || 'Cambridge CAIE IGCSE / UK KS4 / IB DP'}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                            European Benchmark
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                          <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100/80 space-y-1">
                            <span className="font-extrabold text-blue-900 uppercase tracking-wide text-[10px] block">
                              🎯 Cambridge / European Objective:
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.europe?.learningObjective ||
                                'Demonstrate rigorous command of syllabus statements, scientific nomenclature, and exact mathematical derivation.'}
                            </p>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-extrabold text-slate-900 uppercase tracking-wide text-[10px] block">
                              🧠 Pedagogical Strategy (Mark Scheme Rigor):
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.europe?.pedagogicalApproach ||
                                'Chief Examiner mark schemes awarding method marks (M), accuracy marks (A), and independent marks (B) with Finnish phenomenon-based inquiry.'}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-blue-300 flex items-center space-x-1.5">
                              <FileText className="w-3.5 h-3.5" />
                              <span>Authentic Cambridge / IB Exam Question & Mark Scheme:</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">CAIE Checkpoint & IGCSE Standard</span>
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed font-mono bg-black/30 p-3 rounded-lg border border-white/10">
                            {result.globalCurriculaMatrix?.europe?.practiceProblem ||
                              'State formula (M1), substitute values with correct SI units (A1), and write final value with standard units (B1).'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 3. CHINA SYSTEM */}
                    {(selectedCurriculumSystem === 'all' || selectedCurriculumSystem === 'china') && (
                      <div className="rounded-2xl border-2 border-red-200 bg-white p-5 shadow-xs space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-red-100 pb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">🇨🇳</span>
                            <div>
                              <h4 className="text-sm font-extrabold text-slate-900">
                                {result.globalCurriculaMatrix?.china?.systemName || 'China (Ministry of Education PRC & Gaokao STEM)'}
                              </h4>
                              <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-md border border-red-200 inline-block mt-0.5">
                                Standards Code: {result.globalCurriculaMatrix?.china?.standardsCode || '教育部国家课程标准 / 高考 (Gaokao) Level'}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-red-800 bg-red-100 px-3 py-1 rounded-full">
                            Chinese Benchmark
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                          <div className="p-3.5 bg-red-50/50 rounded-xl border border-red-100/80 space-y-1">
                            <span className="font-extrabold text-red-900 uppercase tracking-wide text-[10px] block">
                              🎯 Chinese National Curriculum Objective:
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.china?.learningObjective ||
                                'High-speed mastery of mathematical transformations, constraint logic, and rigorous analytical deduction under time pressure.'}
                            </p>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-extrabold text-slate-900 uppercase tracking-wide text-[10px] block">
                              🧠 Pedagogical Strategy (Gaokao STEM):
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.china?.pedagogicalApproach ||
                                'Deep foundational drill, dual-variable algebraic manipulation, and Olympiad-level geometric and quantitative proofs.'}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-red-300 flex items-center space-x-1.5">
                              <FileText className="w-3.5 h-3.5" />
                              <span>Authentic Chinese Gaokao / National Benchmark Question:</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">PRC High School Rigor</span>
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed font-mono bg-black/30 p-3 rounded-lg border border-white/10">
                            {result.globalCurriculaMatrix?.china?.practiceProblem ||
                              'Express equations under constraint bounds and deduce the unique solution via mathematical substitution.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 4. JAPAN SYSTEM */}
                    {(selectedCurriculumSystem === 'all' || selectedCurriculumSystem === 'japan') && (
                      <div className="rounded-2xl border-2 border-slate-300 bg-white p-5 shadow-xs space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">🇯🇵</span>
                            <div>
                              <h4 className="text-sm font-extrabold text-slate-900">
                                {result.globalCurriculaMatrix?.japan?.systemName || 'Japan (MEXT 文部科学省 & Bansho Board Discovery)'}
                              </h4>
                              <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-300 inline-block mt-0.5">
                                Standards Code: {result.globalCurriculaMatrix?.japan?.standardsCode || '文部科学省 (MEXT) 学習指導要領'}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-slate-800 bg-slate-200 px-3 py-1 rounded-full">
                            Japanese Benchmark
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                          <div className="p-3.5 bg-slate-100/60 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-extrabold text-slate-900 uppercase tracking-wide text-[10px] block">
                              🎯 Japanese MEXT Learning Objective:
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.japan?.learningObjective ||
                                'Foster autonomous mathematical thinking, problem-posing (Kadaishiki), and spatial visualization.'}
                            </p>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-extrabold text-slate-900 uppercase tracking-wide text-[10px] block">
                              🧠 Pedagogical Strategy (Bansho Visual Board):
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.japan?.pedagogicalApproach ||
                                'Bansho (板書) board-work method: organizing multiple student approaches visually across a blackboard to guide self-discovery.'}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-amber-300 flex items-center space-x-1.5">
                              <FileText className="w-3.5 h-3.5" />
                              <span>Authentic Japanese Discovery Problem:</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">Kadaishiki Open Problem-Posing</span>
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed font-mono bg-black/30 p-3 rounded-lg border border-white/10">
                            {result.globalCurriculaMatrix?.japan?.practiceProblem ||
                              'Pose a visual question and derive three alternate geometric and algebraic solutions independently.'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* 5. ASIA SYSTEM */}
                    {(selectedCurriculumSystem === 'all' || selectedCurriculumSystem === 'asia') && (
                      <div className="rounded-2xl border-2 border-emerald-200 bg-white p-5 shadow-xs space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100 pb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">🌏</span>
                            <div>
                              <h4 className="text-sm font-extrabold text-slate-900">
                                {result.globalCurriculaMatrix?.asia?.systemName || 'Asia (Singapore CPA Bar Model, South Korea CSAT & India CBSE)'}
                              </h4>
                              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 inline-block mt-0.5">
                                Standards Code: {result.globalCurriculaMatrix?.asia?.standardsCode || 'Singapore MOE / Korea CSAT / India CBSE-NCERT'}
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                            Asian Benchmark
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                          <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100/80 space-y-1">
                            <span className="font-extrabold text-emerald-900 uppercase tracking-wide text-[10px] block">
                              🎯 Singapore & Asian Learning Objective:
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.asia?.learningObjective ||
                                'Deep mastery through Concrete-Pictorial-Abstract (CPA) bar models, ratio problem solving, and deductive reasoning.'}
                            </p>
                          </div>

                          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-extrabold text-slate-900 uppercase tracking-wide text-[10px] block">
                              🧠 Pedagogical Strategy (Singapore CPA & Bar Models):
                            </span>
                            <p className="font-medium text-slate-800 leading-relaxed">
                              {result.globalCurriculaMatrix?.asia?.pedagogicalApproach ||
                                'Progression from physical blocks (Concrete) to visual rectangular bars (Pictorial) to algebraic formulas (Abstract).'}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-900 text-white rounded-xl space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-emerald-300 flex items-center space-x-1.5">
                              <FileText className="w-3.5 h-3.5" />
                              <span>Authentic Singapore Bar-Model / Asian Challenge:</span>
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono">Singapore MOE & CBSE Level</span>
                          </div>
                          <p className="text-xs text-slate-200 leading-relaxed font-mono bg-black/30 p-3 rounded-lg border border-white/10">
                            {result.globalCurriculaMatrix?.asia?.practiceProblem ||
                              'Draw proportional rectangular blocks representing ratio quantities and calculate unknown unit intervals.'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 7: 90-SECOND ANIMATED VIDEO (INLINE VISUAL LEARNING FOR AI SELF-TEACH) */}
              {activeTab === 'video' && result && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white border border-rose-400/30">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-xl bg-rose-600/30 border border-rose-300/40 flex items-center justify-center text-amber-300 shrink-0">
                        <Film className="w-4 h-4 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit'] flex items-center space-x-1.5">
                          <span>Visual Autodidact Video: {result.title}</span>
                          <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.2 rounded-md">90 SECONDS</span>
                        </h4>
                        <p className="text-[11px] text-slate-300">
                          Animated visual journey with relatable compound and classroom scenery, people, and moving mechanisms.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowVideoPlayerModal(true)}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center space-x-1 transition-colors cursor-pointer shrink-0 self-end sm:self-auto"
                      title="Open Fullscreen Cinema Mode"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Cinema Mode</span>
                    </button>
                  </div>

                  {/* Embedded Animated Video Player with Characters and Relatable Scenery */}
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                    <AnimatedLessonVideoPlayer
                      video={generateAnimatedVideoForTopic(
                        result.title,
                        result.levelLabel,
                        result.topicSummary,
                        result.coreExplanation,
                        result.handsOnExperiment
                      )}
                      lessonTitle={result.title}
                      learnerName={currentProfile.name}
                      defaultLocation={currentProfile.location || 'rural'}
                      isInline={true}
                    />
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Empty Starter State */
            <div className="p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center mx-auto text-indigo-600">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-black text-slate-900 font-['Outfit']">
                What Would You Love to Master Today?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Type any topic above or click an inspiration prompt. The <strong>AI Self-Educate Mentor</strong> will craft a step-by-step roadmap, first-principles theory, a household experiment, and Cambridge-level check questions.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© Educate the World Initiative • AI Self-Educate Autodidact Engine (Powered by Gemini)</p>
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Self Educate Hub
          </button>
        </div>

      </div>

      {/* 90-Second Animated Video Modal for AI Self Teach */}
      {showVideoPlayerModal && result && (
        <AnimatedLessonVideoModal
          isOpen={showVideoPlayerModal}
          onClose={() => setShowVideoPlayerModal(false)}
          video={generateAnimatedVideoForTopic(
            result.title,
            result.levelLabel,
            result.topicSummary,
            result.coreExplanation,
            result.handsOnExperiment
          )}
          lessonTitle={result.title}
          learnerName={currentProfile.name}
        />
      )}
    </div>
  );
};
