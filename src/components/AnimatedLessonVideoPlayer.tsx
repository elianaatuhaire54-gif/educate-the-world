import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  FastForward,
  Rewind,
  Maximize2,
  Minimize2,
  Subtitles,
  Sparkles,
  Award,
  Clock,
  Film,
  Layers,
  ChevronRight,
  Info,
  CheckCircle2,
  Building2,
  TreePine,
  User,
  Heart,
  Smile,
  X
} from 'lucide-react';
import { AnimatedLessonVideo, AnimatedVideoScene, LocationType } from '../types/curriculum';
import { 
  speakTeacherNarration, 
  stopSpeaking, 
  TEACHER_PERSONAS, 
  getCurrentTeacherPersonaId, 
  setCurrentTeacherPersonaId, 
  TeacherVoicePersona 
} from '../utils/speech';

export interface AnimatedLessonVideoPlayerProps {
  video: AnimatedLessonVideo;
  lessonTitle?: string;
  learnerName?: string;
  defaultLocation?: LocationType;
  onCompleteVideo?: () => void;
  isInline?: boolean; // When rendered inline in 20-min lesson vs modal
  onClose?: () => void;
}

export const AnimatedLessonVideoPlayer: React.FC<AnimatedLessonVideoPlayerProps> = ({
  video,
  lessonTitle,
  learnerName = 'Young Scholar',
  defaultLocation = 'rural',
  onCompleteVideo,
  isInline = false,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [interactiveTapFeedback, setInteractiveTapFeedback] = useState<string | null>(null);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);
  
  // Gentle Teacher Voice Persona Selection
  const [selectedTeacherId, setSelectedTeacherId] = useState<'ms-clara' | 'mama-sarah' | 'mr-arthur'>(() => getCurrentTeacherPersonaId());
  const [showTeacherVoiceDropdown, setShowTeacherVoiceDropdown] = useState<boolean>(false);

  // Relatable Environment & Character Preferences
  const [environmentMode, setEnvironmentMode] = useState<LocationType>(defaultLocation);
  const [characterGender, setCharacterGender] = useState<'girl' | 'boy'>('girl');

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const activeSceneIndexRef = useRef<number>(0);

  const totalDuration = video.durationSeconds || 90;

  // Determine active scene based on currentTime
  const currentSceneIndex = Math.min(
    video.scenes.length - 1,
    video.scenes.findIndex((s) => currentTime >= s.startSec && currentTime < s.endSec) === -1
      ? currentTime >= totalDuration
        ? video.scenes.length - 1
        : 0
      : video.scenes.findIndex((s) => currentTime >= s.startSec && currentTime < s.endSec)
  );
  const currentScene = video.scenes[currentSceneIndex] || video.scenes[0];

  const playTeacherAudio = (text: string, personaId?: 'ms-clara' | 'mama-sarah' | 'mr-arthur') => {
    if (!isAudioEnabled) return;
    speakTeacherNarration(text, undefined, personaId || selectedTeacherId);
  };

  // Voice narration synchronization when entering a new scene
  useEffect(() => {
    if (currentSceneIndex !== activeSceneIndexRef.current && isPlaying && isAudioEnabled) {
      activeSceneIndexRef.current = currentSceneIndex;
      playTeacherAudio(currentScene.narration);
    }
  }, [currentSceneIndex, isPlaying, isAudioEnabled, currentScene, selectedTeacherId]);

  // Initial playback narration
  useEffect(() => {
    if (isPlaying && isAudioEnabled && currentTime < 1) {
      playTeacherAudio(currentScene.narration);
    }
  }, []);

  // Playback timer loop
  useEffect(() => {
    if (isPlaying) {
      lastTimeRef.current = performance.now();
      const tick = (now: number) => {
        const deltaSec = ((now - lastTimeRef.current) / 1000) * playbackSpeed;
        lastTimeRef.current = now;

        setCurrentTime((prev) => {
          const next = prev + deltaSec;
          if (next >= totalDuration) {
            setIsPlaying(false);
            setHasCompleted(true);
            onCompleteVideo?.();
            return totalDuration;
          }
          return next;
        });

        animationFrameRef.current = requestAnimationFrame(tick);
      };

      animationFrameRef.current = requestAnimationFrame(tick);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, playbackSpeed, totalDuration, onCompleteVideo]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const togglePlay = () => {
    if (currentTime >= totalDuration) {
      setCurrentTime(0);
      setHasCompleted(false);
      activeSceneIndexRef.current = -1;
      setIsPlaying(true);
      if (isAudioEnabled) {
        playTeacherAudio(video.scenes[0].narration);
      }
      return;
    }

    if (isPlaying) {
      setIsPlaying(false);
      stopSpeaking();
    } else {
      setIsPlaying(true);
      if (isAudioEnabled) {
        playTeacherAudio(currentScene.narration);
      }
    }
  };

  const handleSeek = (newTime: number) => {
    const clamped = Math.max(0, Math.min(totalDuration, newTime));
    setCurrentTime(clamped);
    const newIdx = video.scenes.findIndex((s) => clamped >= s.startSec && clamped < s.endSec);
    activeSceneIndexRef.current = newIdx !== -1 ? newIdx : 0;
    if (isPlaying && isAudioEnabled) {
      playTeacherAudio(video.scenes[activeSceneIndexRef.current].narration);
    }
  };

  const handleSkip = (seconds: number) => {
    handleSeek(currentTime + seconds);
  };

  const handleJumpToScene = (sceneIndex: number) => {
    const target = video.scenes[sceneIndex];
    if (target) {
      handleSeek(target.startSec);
    }
  };

  const toggleAudio = () => {
    if (isAudioEnabled) {
      stopSpeaking();
      setIsAudioEnabled(false);
    } else {
      setIsAudioEnabled(true);
      if (isPlaying) {
        playTeacherAudio(currentScene.narration);
      }
    }
  };

  const handleSelectTeacherPersona = (id: 'ms-clara' | 'mama-sarah' | 'mr-arthur') => {
    setSelectedTeacherId(id);
    setCurrentTeacherPersonaId(id);
    setShowTeacherVoiceDropdown(false);
    if (isPlaying && isAudioEnabled) {
      playTeacherAudio(currentScene.narration, id);
    }
  };

  const handleInteractiveTap = (elementLabel: string, actionDesc: string) => {
    setInteractiveTapFeedback(`✨ ${elementLabel}: ${actionDesc}`);
    setTimeout(() => setInteractiveTapFeedback(null), 3500);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const learnerDisplayName = characterGender === 'girl' ? 'Amina' : 'Kofi';
  const parentDisplayName = 'Mama Sarah';

  return (
    <div
      ref={containerRef}
      className={`bg-slate-950 text-white rounded-3xl overflow-hidden border border-indigo-500/30 flex flex-col shadow-2xl relative transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none max-w-none max-h-none h-screen' : isInline ? 'w-full' : 'max-w-5xl'
      }`}
    >
      {/* Top Video Header */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 p-3.5 sm:p-4 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-indigo-600/40 border border-indigo-400/40 flex items-center justify-center text-amber-300 shadow-inner">
            <Film className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white px-2 py-0.5 rounded-full flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>90-SEC ANIMATED VIDEO</span>
              </span>
              <span className="text-[11px] text-amber-300 font-bold hidden sm:inline">
                Part of 20-Min Lesson
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-black font-['Outfit'] text-white leading-tight mt-0.5">
              {video.videoTitle}
            </h3>
          </div>
        </div>

        {/* Environment & Character Representational Switchers */}
        <div className="flex items-center space-x-2">
          {/* Rural Compound vs Urban Classroom Setting */}
          <div className="hidden sm:flex items-center rounded-xl bg-white/10 p-0.5 border border-white/10 text-xs">
            <button
              onClick={() => setEnvironmentMode('rural')}
              className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-all cursor-pointer ${
                environmentMode === 'rural' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
              title="African Homestead Compound Environment"
            >
              <TreePine className="w-3.5 h-3.5" />
              <span>Village Compound</span>
            </button>
            <button
              onClick={() => setEnvironmentMode('urban')}
              className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-all cursor-pointer ${
                environmentMode === 'urban' ? 'bg-amber-600 text-white font-bold' : 'text-slate-300 hover:text-white'
              }`}
              title="Town Classroom & Workshop Environment"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Town Classroom</span>
            </button>
          </div>

          {/* Learner Avatar Switcher (Amina / Kofi) */}
          <button
            onClick={() => setCharacterGender(characterGender === 'girl' ? 'boy' : 'girl')}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-bold text-amber-200 transition-colors cursor-pointer"
            title="Toggle Learner Character (Amina / Kofi)"
          >
            <User className="w-3.5 h-3.5" />
            <span>{characterGender === 'girl' ? '👧 Amina' : '👦 Kofi'}</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden md:flex items-center justify-center"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {onClose && (
            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Video Viewport / Animated SVG Canvas */}
      <div className={`relative bg-slate-950 flex items-center justify-center overflow-hidden select-none ${
        isFullscreen ? 'flex-1' : isInline ? 'aspect-[16/9] min-h-[320px] max-h-[500px]' : 'aspect-video max-h-[56vh]'
      }`}>
        {/* Ambient Stage Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-slate-950 to-slate-950 pointer-events-none" />

        {/* FULL ANIMATED SVG SCENE WITH PEOPLE, HOMESTEAD & VISUAL PHENOMENA */}
        <div className="w-full h-full relative flex items-center justify-center p-1 sm:p-2">
          <svg
            className="w-full h-full max-w-5xl max-h-full drop-shadow-2xl"
            viewBox="0 0 900 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Sky Gradients */}
              <linearGradient id="skyGradRural" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="40%" stopColor="#38BDF8" />
                <stop offset="75%" stopColor="#BAE6FD" />
                <stop offset="100%" stopColor="#FEF08A" />
              </linearGradient>

              <linearGradient id="skyGradUrban" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="50%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              {/* Sun Flare Gradient */}
              <linearGradient id="sunGlowFlare" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              {/* Red Clay / Earth Courtyard Gradient */}
              <linearGradient id="redEarthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9A3412" />
                <stop offset="50%" stopColor="#7C2D12" />
                <stop offset="100%" stopColor="#431407" />
              </linearGradient>

              {/* Rolling Hills Green Gradient */}
              <linearGradient id="hillsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#15803D" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>

              {/* African Kitenge Fabric Pattern */}
              <pattern id="kitengePattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="20" height="20" fill="#EA580C" />
                <polygon points="10,0 20,10 10,20 0,10" fill="#FDE047" />
                <circle cx="10" cy="10" r="3.5" fill="#1E3A8A" />
              </pattern>

              {/* Solar Panel Gradient */}
              <linearGradient id="solarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="50%" stopColor="#172554" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              {/* Clean Water Gradient */}
              <linearGradient id="pureWater" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
              </linearGradient>

              {/* Filter Gradients */}
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ============================================================== */}
            {/* 1. RELATABLE ENVIRONMENT BACKGROUND LAYER                       */}
            {/* ============================================================== */}

            {environmentMode === 'rural' ? (
              // RURAL HOMESTEAD & COMPOUND ENVIRONMENT
              <g id="rural-environment">
                {/* Sky */}
                <rect width="900" height="500" fill="url(#skyGradRural)" />

                {/* Animated Clouds */}
                <g style={{ transform: `translateX(${((currentTime * 10) % 200) - 50}px)` }}>
                  <path d="M 120 70 Q 140 50 170 55 Q 200 45 220 65 Q 240 70 230 85 Q 210 95 130 90 Z" fill="#FFFFFF" fillOpacity="0.85" />
                </g>
                <g style={{ transform: `translateX(${((currentTime * 6) % 250) - 80}px)` }}>
                  <path d="M 520 80 Q 545 60 580 65 Q 610 50 640 70 Q 660 85 640 100 Q 600 105 520 95 Z" fill="#FFFFFF" fillOpacity="0.75" />
                </g>

                {/* Distant Rolling Green Savannah Hills */}
                <path d="M 0 280 Q 180 200 400 240 Q 650 190 900 270 L 900 500 L 0 500 Z" fill="url(#hillsGrad)" fillOpacity="0.8" />
                <path d="M 0 310 Q 250 250 500 290 Q 750 240 900 300 L 900 500 L 0 500 Z" fill="#14532D" />

                {/* Acacia & Mango Tree on the Left */}
                <g id="compound-trees" className="cursor-pointer" onClick={() => handleInteractiveTap('Mango & Acacia Shade Tree', 'Provides cool compound shade for afternoon family study and biodiversity')}>
                  {/* Tree Trunk */}
                  <path d="M 80 430 Q 95 320 85 240 Q 110 200 130 150 Q 115 220 125 320 Q 115 410 130 450 Z" fill="#451A03" />
                  {/* Branch to right */}
                  <path d="M 95 280 Q 140 250 180 270" stroke="#451A03" strokeWidth="8" strokeLinecap="round" />
                  {/* Canopy Leaves */}
                  <circle cx="130" cy="140" r="65" fill="#15803D" />
                  <circle cx="90" cy="160" r="50" fill="#166534" />
                  <circle cx="170" cy="165" r="55" fill="#14532D" />
                  <circle cx="135" cy="115" r="45" fill="#22C55E" />
                  {/* Hanging Mangoes */}
                  <circle cx="110" cy="170" r="7" fill="#F59E0B" />
                  <circle cx="150" cy="180" r="6.5" fill="#EAB308" />
                  <circle cx="175" cy="150" r="6" fill="#84CC16" />
                </g>

                {/* Red Earth Courtyard Ground */}
                <path d="M 0 360 Q 300 340 600 350 Q 800 340 900 360 L 900 500 L 0 500 Z" fill="url(#redEarthGrad)" />

                {/* Homestead Family House (Right-Center) */}
                <g id="family-homestead" transform="translate(620, 220)" className="cursor-pointer" onClick={() => handleInteractiveTap('Family Homestead', 'Clean home academy environment with solar roof and rainwater harvesting')}>
                  {/* Walls (Warm Brick/Ochre) */}
                  <rect x="0" y="70" width="240" height="130" rx="4" fill="#B45309" stroke="#78350F" strokeWidth="2.5" />
                  {/* Brick Lines */}
                  <line x1="0" y1="110" x2="240" y2="110" stroke="#78350F" strokeWidth="1" strokeOpacity="0.5" />
                  <line x1="0" y1="150" x2="240" y2="150" stroke="#78350F" strokeWidth="1" strokeOpacity="0.5" />
                  {/* Veranda Door */}
                  <rect x="30" y="95" width="45" height="105" rx="3" fill="#451A03" stroke="#292524" strokeWidth="2" />
                  <circle cx="65" cy="145" r="3" fill="#FDE047" />
                  {/* Window with Curtains */}
                  <rect x="135" y="105" width="55" height="50" rx="4" fill="#FEF08A" stroke="#451A03" strokeWidth="2" />
                  <line x1="162" y1="105" x2="162" y2="155" stroke="#451A03" strokeWidth="2" />
                  <line x1="135" y1="130" x2="190" y2="130" stroke="#451A03" strokeWidth="2" />
                  {/* Roof (Thatched / Iron with Solar Panel) */}
                  <polygon points="-25,75 120,5 265,75" fill="#78350F" stroke="#451A03" strokeWidth="3" />
                  {/* Solar Panel on the Roof */}
                  <polygon points="50,45 130,18 190,45 110,72" fill="url(#solarGlass)" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="90" y1="32" x2="150" y2="58" stroke="#93C5FD" strokeWidth="1" />
                  <line x1="120" y1="20" x2="140" y2="65" stroke="#93C5FD" strokeWidth="1" />
                  {/* Sparkle reflection on solar panel */}
                  <circle cx="120" cy="40" r="3" fill="#FFFFFF" className="animate-ping" />
                </g>

                {/* Wooden Compound Fence */}
                <g id="compound-fence" transform="translate(420, 335)">
                  {[0, 30, 60, 90, 120, 150, 180].map((x) => (
                    <rect key={x} x={x} y="0" width="8" height="40" fill="#78350F" stroke="#451A03" strokeWidth="1" />
                  ))}
                  <line x1="-5" y1="12" x2="195" y2="12" stroke="#451A03" strokeWidth="3" />
                  <line x1="-5" y1="28" x2="195" y2="28" stroke="#451A03" strokeWidth="3" />
                </g>

                {/* Village Rooster on the Fence */}
                <g id="village-rooster" transform="translate(480, 310)" className="cursor-pointer" onClick={() => handleInteractiveTap('Compound Rooster', 'Crows at 6:00 AM to wake scholars for morning missions!')}>
                  <ellipse cx="10" cy="12" rx="10" ry="7" fill="#DC2626" />
                  <circle cx="17" cy="6" r="5" fill="#EA580C" />
                  {/* Comb & Wattle */}
                  <polygon points="16,1 19,-2 20,2" fill="#EF4444" />
                  <circle cx="19" cy="9" r="2" fill="#EF4444" />
                  {/* Beak */}
                  <polygon points="21,5 26,7 21,8" fill="#FBBF24" />
                  {/* Eye */}
                  <circle cx="18" cy="5" r="1" fill="#000000" />
                  {/* Tail Feathers */}
                  <path d="M 2 10 Q -8 4 -4 14 Q -10 12 -2 18" stroke="#166534" strokeWidth="2.5" fill="none" />
                </g>

                {/* Real Household Artifacts: Clay Pot & Yellow 20L Jerrycan */}
                <g id="household-water-gear" transform="translate(350, 360)">
                  {/* Clay Water Pot (Ensumbi) */}
                  <g className="cursor-pointer" onClick={() => handleInteractiveTap('Clay Water Pot (Ensumbi)', 'Traditional clay cooler keeping drinking water naturally refreshing through evaporative porosity')}>
                    <ellipse cx="25" cy="45" rx="20" ry="22" fill="#9A3412" stroke="#7C2D12" strokeWidth="2" />
                    <ellipse cx="25" cy="22" rx="12" ry="5" fill="#7C2D12" />
                    <rect x="18" y="16" width="14" height="8" fill="#9A3412" />
                  </g>
                  {/* Yellow 20L Jerrycan */}
                  <g transform="translate(55, 15)" className="cursor-pointer" onClick={() => handleInteractiveTap('Yellow 20L Jerrycan', 'Household clean water storage for handwashing and empirical filtration')}>
                    <rect x="0" y="8" width="28" height="36" rx="4" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
                    {/* Handle */}
                    <path d="M 4 8 L 4 2 L 24 2 L 24 8" fill="none" stroke="#CA8A04" strokeWidth="3" />
                    {/* Screw Cap */}
                    <rect x="18" y="-2" width="7" height="4" fill="#1E293B" />
                  </g>
                </g>
              </g>
            ) : (
              // URBAN CLASSROOM & WORKSHOP ENVIRONMENT
              <g id="urban-environment">
                {/* Classroom Walls */}
                <rect width="900" height="500" fill="url(#skyGradUrban)" />
                <rect x="40" y="40" width="820" height="420" rx="16" fill="#1E293B" stroke="#475569" strokeWidth="4" />

                {/* Big Sunny Arched Window looking out at Town */}
                <g transform="translate(80, 70)">
                  <rect x="0" y="30" width="160" height="150" fill="#38BDF8" fillOpacity="0.4" stroke="#94A3B8" strokeWidth="3" />
                  <path d="M 0 30 Q 80 -15 160 30 Z" fill="#38BDF8" fillOpacity="0.4" stroke="#94A3B8" strokeWidth="3" />
                  {/* Window Panes */}
                  <line x1="80" y1="0" x2="80" y2="180" stroke="#94A3B8" strokeWidth="2.5" />
                  <line x1="0" y1="100" x2="160" y2="100" stroke="#94A3B8" strokeWidth="2.5" />
                  {/* Distant Town Buildings through window */}
                  <rect x="20" y="90" width="30" height="90" fill="#0284C7" />
                  <rect x="60" y="60" width="40" height="120" fill="#0369A1" />
                  <rect x="110" y="80" width="35" height="100" fill="#0284C7" />
                  <circle cx="130" cy="40" r="16" fill="#FBBF24" />
                </g>

                {/* Big Classroom Blackboard */}
                <g transform="translate(280, 70)" className="cursor-pointer" onClick={() => handleInteractiveTap('Classroom Blackboard', 'Visual thinking, lesson formulas, and bilingual vocabulary')}>
                  <rect width="520" height="180" rx="8" fill="#064E3B" stroke="#78350F" strokeWidth="8" />
                  {/* Chalk Header */}
                  <text x="30" y="35" fill="#A7F3D0" fontSize="13" fontWeight="900" fontFamily="sans-serif">
                    ★ EDUCATE THE WORLD • INTERNATIONAL HOME ACADEMY ★
                  </text>
                  <text x="30" y="60" fill="#FDE047" fontSize="16" fontWeight="bold" fontFamily="monospace">
                    {video.keyFormulaOrLaw || 'FIRST PRINCIPLES: E = hf • CPA Bar Model'}
                  </text>
                  <text x="30" y="85" fill="#E2E8F0" fontSize="11" fontFamily="sans-serif">
                    Objective: "{video.topicSummary ? video.topicSummary.slice(0, 70) : 'Visual mastery through empirical testing'}..."
                  </text>
                  {/* Chalk drawing on board */}
                  <line x1="30" y1="100" x2="490" y2="100" stroke="#A7F3D0" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="30" y="125" fill="#67E8F9" fontSize="11" fontWeight="bold">
                    1. OBSERVE PHENOMENON ➜ 2. MAP EQUATION ➜ 3. EXPERIMENT AT HOME
                  </text>
                  <text x="30" y="150" fill="#F472B6" fontSize="11">
                    Standard Code: Cambridge CAIE & US NGSS Framework Aligned
                  </text>
                </g>
              </g>
            )}

            {/* Glowing Golden Sun (Always visible in Scene 1 & 2 for solar/energy) */}
            <g id="glowing-sun" transform="translate(740, 100)" className="cursor-pointer" onClick={() => handleInteractiveTap('Radiant Sunshine', 'Delivering clean, inexhaustible solar photon energy to every village and town')}>
              <circle cx="0" cy="0" r="42" fill="url(#sunGlowFlare)" filter="url(#softGlow)" />
              {/* Rotating Rays */}
              <circle cx="0" cy="0" r="54" stroke="#FDE047" strokeWidth="2.5" strokeDasharray="8 6" className="animate-spin" style={{ transformOrigin: '740px 100px', animationDuration: '24s' }} />
              {/* Smiling Sun Face */}
              <circle cx="-12" cy="-6" r="4" fill="#78350F" />
              <circle cx="12" cy="-6" r="4" fill="#78350F" />
              <path d="M -12 12 Q 0 22 12 12" fill="none" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* ============================================================== */}
            {/* 2. THE CHARACTERS (PEOPLE): AMINA/KOFI & MAMA SARAH            */}
            {/* ============================================================== */}

            {/* MAMA SARAH (MOTHER / MENTOR / TEACHER) */}
            <g id="character-mama-sarah" transform="translate(670, 245)" className="cursor-pointer" onClick={() => handleInteractiveTap(`${parentDisplayName} (Parent & Mentor)`, 'Encouraging daily 20-minute missions and practical world changer skills')}>
              {/* Colorful African Kitenge Headwrap */}
              <ellipse cx="30" cy="30" rx="22" ry="18" fill="url(#kitengePattern)" stroke="#C2410C" strokeWidth="2" />
              {/* Headwrap Knot */}
              <circle cx="30" cy="14" r="8" fill="#F59E0B" />

              {/* Face */}
              <ellipse cx="30" cy="36" rx="16" ry="18" fill="#5C2E14" />
              {/* Kind Eyes */}
              <circle cx="23" cy="33" r="2.5" fill="#FFFFFF" />
              <circle cx="24" cy="33" r="1.5" fill="#000000" />
              <circle cx="37" cy="33" r="2.5" fill="#FFFFFF" />
              <circle cx="38" cy="33" r="1.5" fill="#000000" />
              {/* Gentle Smile */}
              <path d="M 24 44 Q 30 50 36 44" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              {/* Gold Hoop Earrings */}
              <circle cx="13" cy="38" r="4" fill="none" stroke="#FBBF24" strokeWidth="1.5" />
              <circle cx="47" cy="38" r="4" fill="none" stroke="#FBBF24" strokeWidth="1.5" />

              {/* Neck & Shoulders */}
              <rect x="25" y="52" width="10" height="10" fill="#5C2E14" />

              {/* Kitenge Dress Torso */}
              <path d="M 10 62 L 50 62 L 62 160 L -2 160 Z" fill="url(#kitengePattern)" stroke="#9A3412" strokeWidth="2" />
              {/* Collar sash */}
              <path d="M 16 62 L 30 85 L 44 62" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.5" />

              {/* Waving / Clapping Arms */}
              {currentSceneIndex === 3 ? (
                // Clapping proudly in Scene 4
                <g>
                  <path d="M 12 75 Q 26 95 32 88" stroke="#5C2E14" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 48 75 Q 34 95 28 88" stroke="#5C2E14" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="30" cy="88" r="7" fill="#FBBF24" className="animate-ping" />
                </g>
              ) : (
                // Waving warmly
                <g>
                  <path d="M 50 75 Q 70 60 75 42" stroke="#5C2E14" strokeWidth="7" strokeLinecap="round" />
                  {/* Waving Hand */}
                  <circle cx="75" cy="40" r="6" fill="#5C2E14" />
                  <path d="M 72 35 L 75 30 L 78 35" stroke="#5C2E14" strokeWidth="2" />
                </g>
              )}

              {/* Name Tag */}
              <rect x="2" y="165" width="56" height="18" rx="6" fill="#0F172A" stroke="#F59E0B" strokeWidth="1" />
              <text x="30" y="177" textAnchor="middle" fill="#FDE047" fontSize="9" fontWeight="bold">MAMA SARAH</text>
            </g>

            {/* WOODEN COMPOUND STUDY WORKBENCH TABLE (CENTER-LEFT) */}
            <g id="study-table" transform="translate(190, 310)">
              {/* Table Top Surface */}
              <polygon points="0,50 360,50 390,75 30,75" fill="#78350F" stroke="#451A03" strokeWidth="2.5" />
              {/* Table Thickness */}
              <polygon points="30,75 390,75 390,85 30,85" fill="#451A03" />
              {/* Table Legs */}
              <rect x="45" y="85" width="16" height="100" fill="#451A03" />
              <rect x="360" y="85" width="16" height="100" fill="#451A03" />
              <rect x="80" y="75" width="14" height="85" fill="#291404" />
              <rect x="325" y="75" width="14" height="85" fill="#291404" />
              {/* Crossbeam */}
              <rect x="50" y="140" width="320" height="10" fill="#291404" />
            </g>

            {/* MAIN LEARNER CHARACTER (AMINA OR KOFI) AT WORKBENCH */}
            <g id="character-learner" transform="translate(180, 235)" className="cursor-pointer" onClick={() => handleInteractiveTap(`${learnerDisplayName} (${learnerName})`, 'Eager young scholar conducting real first-principles visual learning')}>
              
              {/* HAIR & HEAD ACCORDING TO GENDER */}
              {characterGender === 'girl' ? (
                // AMINA: Cute Puffs & Colorful Beads
                <g id="amina-hair">
                  {/* Hair Puffs */}
                  <circle cx="30" cy="18" r="16" fill="#1C1917" />
                  <circle cx="70" cy="18" r="16" fill="#1C1917" />
                  {/* Decorative Yellow & Cyan Beads */}
                  <circle cx="22" cy="10" r="4.5" fill="#FBBF24" />
                  <circle cx="36" cy="8" r="4.5" fill="#06B6D4" />
                  <circle cx="64" cy="8" r="4.5" fill="#FBBF24" />
                  <circle cx="78" cy="10" r="4.5" fill="#06B6D4" />
                  {/* Head Base */}
                  <circle cx="50" cy="38" r="24" fill="#1C1917" />
                </g>
              ) : (
                // KOFI: Neat Textured Fade
                <g id="kofi-hair">
                  <path d="M 28 34 Q 50 14 72 34 L 70 42 Q 50 36 30 42 Z" fill="#1C1917" />
                  <circle cx="50" cy="38" r="23" fill="#1C1917" />
                </g>
              )}

              {/* Expressive Face (Warm Melanin Tone) */}
              <circle cx="50" cy="40" r="20" fill="#6A3818" />

              {/* Big Expressive Cartoon Eyes */}
              <g id="learner-eyes">
                <ellipse cx="42" cy="38" rx="4.5" ry="5.5" fill="#FFFFFF" />
                <circle cx="43" cy="38" r="2.8" fill="#1C1917" />
                <circle cx="44.5" cy="36.5" r="1.2" fill="#FFFFFF" /> {/* Catchlight */}

                <ellipse cx="58" cy="38" rx="4.5" ry="5.5" fill="#FFFFFF" />
                <circle cx="59" cy="38" r="2.8" fill="#1C1917" />
                <circle cx="60.5" cy="36.5" r="1.2" fill="#FFFFFF" /> {/* Catchlight */}

                {/* Animated Blinking Eyelid */}
                <ellipse cx="42" cy="35" rx="5" ry={currentTime % 4 < 0.2 ? 5 : 1} fill="#6A3818" />
                <ellipse cx="58" cy="35" rx="5" ry={currentTime % 4 < 0.2 ? 5 : 1} fill="#6A3818" />
              </g>

              {/* Curved Eyebrows (Curious & Concentrated) */}
              <path d="M 37 30 Q 42 27 47 30" stroke="#1C1917" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M 53 30 Q 58 27 63 30" stroke="#1C1917" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Cute Nose */}
              <circle cx="50" cy="44" r="1.8" fill="#4E270E" />

              {/* Expressive Mouth (Changes by Scene) */}
              {currentSceneIndex === 0 ? (
                // Curious 'O' Mouth
                <ellipse cx="50" cy="51" rx="3.5" ry="4" fill="#450A0A" stroke="#FFFFFF" strokeWidth="0.8" />
              ) : currentSceneIndex === 3 ? (
                // Big Happy Teeth Smile in Victory
                <g>
                  <path d="M 42 49 Q 50 60 58 49 Z" fill="#991B1B" />
                  <rect x="44" y="49" width="12" height="3" fill="#FFFFFF" rx="1" />
                </g>
              ) : (
                // Friendly Confident Smile
                <path d="M 43 49 Q 50 56 57 49" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
              )}

              {/* Neck */}
              <rect x="45" y="58" width="10" height="8" fill="#6A3818" />

              {/* Academy School Polo Shirt (Golden Amber / Sky Blue) */}
              <path d="M 28 66 L 72 66 L 82 140 L 18 140 Z" fill={characterGender === 'girl' ? '#F59E0B' : '#0284C7'} stroke="#1E293B" strokeWidth="2" />
              {/* White Collar */}
              <polygon points="50,75 36,66 48,66" fill="#FFFFFF" />
              <polygon points="50,75 64,66 52,66" fill="#FFFFFF" />
              {/* Academy World Changer Badge on Chest */}
              <circle cx="38" cy="85" r="4.5" fill="#EF4444" stroke="#FDE047" strokeWidth="1" />

              {/* DYNAMIC ARMS & GESTURES ACROSS THE 4 SCENES */}
              {currentSceneIndex === 0 ? (
                // SCENE 1: Wonder Hook - Shading Eyes, Pointing at Sun/World
                <g>
                  <path d="M 30 75 Q 15 65 18 45 Q 28 35 40 32" stroke="#6A3818" strokeWidth="7" strokeLinecap="round" fill="none" />
                  {/* Pointing Right Hand */}
                  <path d="M 70 75 Q 95 65 115 45" stroke="#6A3818" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <circle cx="115" cy="45" r="4.5" fill="#6A3818" />
                </g>
              ) : currentSceneIndex === 1 ? (
                // SCENE 2: Mechanism - Holding Discovery Magnifier / Pointer
                <g>
                  <path d="M 30 75 Q 15 90 25 105 L 50 105" stroke="#6A3818" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <path d="M 70 75 Q 95 80 120 70" stroke="#6A3818" strokeWidth="7" strokeLinecap="round" fill="none" />
                  {/* Magnifying Glass in Hand */}
                  <circle cx="132" cy="65" r="14" fill="#60A5FA" fillOpacity="0.4" stroke="#FBBF24" strokeWidth="3" />
                  <line x1="122" y1="72" x2="114" y2="80" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
                </g>
              ) : currentSceneIndex === 2 ? (
                // SCENE 3: Experiment - Active Hands Assembling & Testing
                <g>
                  <path d="M 30 75 Q 20 95 45 105 Q 65 105 80 100" stroke="#6A3818" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <path d="M 70 75 Q 90 90 110 98" stroke="#6A3818" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <circle cx="82" cy="100" r="4.5" fill="#6A3818" />
                  <circle cx="110" cy="98" r="4.5" fill="#6A3818" />
                </g>
              ) : (
                // SCENE 4: Triumphant Mastery - Both Arms Raised High with Gold Medal!
                <g>
                  {/* Left Arm Raised */}
                  <path d="M 28 72 Q 10 40 8 20" stroke="#6A3818" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <circle cx="8" cy="18" r="5" fill="#6A3818" />
                  {/* Right Arm Raised */}
                  <path d="M 72 72 Q 90 40 92 20" stroke="#6A3818" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <circle cx="92" cy="18" r="5" fill="#6A3818" />
                  {/* Golden Laurel Medal hanging around neck */}
                  <path d="M 40 70 Q 50 95 60 70" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
                  <circle cx="50" cy="100" r="10" fill="#FDE047" stroke="#D97706" strokeWidth="2" filter="url(#softGlow)" />
                  <text x="50" y="104" textAnchor="middle" fill="#78350F" fontSize="10" fontWeight="900">★</text>
                </g>
              )}

              {/* Name Tag */}
              <rect x="22" y="145" width="56" height="18" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" />
              <text x="50" y="157" textAnchor="middle" fill="#38BDF8" fontSize="9" fontWeight="bold">
                {learnerDisplayName.toUpperCase()}
              </text>
            </g>

            {/* ============================================================== */}
            {/* 3. CENTERPIECE VISUAL MECHANISM & PHENOMENA                     */}
            {/* ============================================================== */}

            {video.themeCategory === 'science' ? (
              // SCIENCE / SOLAR / ENERGY SCENE PHENOMENA
              <g id="science-visual-mechanism" transform="translate(320, 260)">
                {/* Silicon Solar Panel on Table Stand */}
                <g className="cursor-pointer" onClick={() => handleInteractiveTap('Silicon Solar Panel (12V)', 'Photons dislodge electrons across p-n junction, creating 12V clean electric power')}>
                  <polygon points="10,50 150,20 180,60 40,90" fill="url(#solarGlass)" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="50" y1="38" x2="110" y2="78" stroke="#93C5FD" strokeWidth="1.5" />
                  <line x1="90" y1="28" x2="150" y2="68" stroke="#93C5FD" strokeWidth="1.5" />
                  <text x="90" y="58" fill="#BFDBFE" fontSize="10" fontWeight="bold">SILICON CELL</text>
                </g>

                {/* Animated Solar Photons Streaming from Sun to Panel */}
                {[0, 1, 2, 3].map((i) => {
                  const t = ((currentTime * 1.6 + i * 0.5) % 2) / 2;
                  const px = 420 - t * 300;
                  const py = -160 + t * 200;
                  return (
                    <g key={i}>
                      <circle cx={px} cy={py} r="5" fill="#FDE047" filter="url(#softGlow)" />
                      <line x1={px + 8} y1={py - 5} x2={px - 6} y2={py + 4} stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  );
                })}

                {/* Copper Circuit Wire from Panel to Study Lamp */}
                <path d="M 110 80 Q 150 120 220 110 Q 250 90 260 70" fill="none" stroke="#F59E0B" strokeWidth="3.5" strokeDasharray="6 4" />

                {/* Flowing Animated Electrons in Wire */}
                {[0, 1, 2].map((i) => {
                  const prog = ((currentTime * 2 + i * 0.7) % 2) / 2;
                  const cx = 110 + prog * 150;
                  const cy = 80 + Math.sin(prog * Math.PI) * 20;
                  return (
                    <circle key={i} cx={cx} cy={cy} r="3.5" fill="#06B6D4" filter="url(#softGlow)" />
                  );
                })}

                {/* Bright LED Study Lamp on Workbench */}
                <g transform="translate(260, 45)" className="cursor-pointer" onClick={() => handleInteractiveTap('LED Night Study Lamp', 'Provides 800 Lumens clean illumination for night study, replacing smoky kerosene lamps')}>
                  <rect x="-6" y="20" width="12" height="40" fill="#334155" />
                  <ellipse cx="0" cy="60" rx="14" ry="5" fill="#1E293B" />
                  {/* Lamp Shade */}
                  <polygon points="-16,20 16,20 22,-5 -22,-5" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" />
                  {/* Glowing Bulb */}
                  <circle cx="0" cy="18" r="14" fill={currentTime > 15 ? '#FEF08A' : '#64748B'} filter={currentTime > 15 ? 'url(#softGlow)' : 'none'} />
                  {/* Light Cone on Table */}
                  {currentTime > 15 && (
                    <polygon points="-5,28 5,28 70,110 -70,110" fill="#FEF08A" fillOpacity="0.25" />
                  )}
                  <text x="0" y="-12" textAnchor="middle" fill="#FDE047" fontSize="10" fontWeight="900">LED LAMP 💡</text>
                </g>

                {/* Real-time Voltage & Wattage Gauge */}
                <g transform="translate(20, -50)">
                  <rect width="210" height="42" rx="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                  <text x="12" y="18" fill="#94A3B8" fontSize="9" fontWeight="bold">REAL-TIME SOLAR VOLTAGE & POWER</text>
                  <text x="12" y="34" fill="#38BDF8" fontSize="14" fontWeight="900" fontFamily="monospace">
                    12.6V DC • {Math.min(45, Math.floor(currentTime * 0.7) + 12)}W CLEAN POWER
                  </text>
                  <circle cx="192" cy="21" r="5" fill="#10B981" className="animate-ping" />
                </g>
              </g>
            ) : video.themeCategory === 'biology' ? (
              // BIOLOGY / CLEAN WATER PERCOLATION FILTER PHENOMENA
              <g id="biology-water-filter" transform="translate(340, 160)">
                {/* 3-Layer Bio-Sand Filter Vessel */}
                <g className="cursor-pointer" onClick={() => handleInteractiveTap('3-Layer Bio-Sand Filter Column', 'Clean home filtration using gravel, activated charcoal and fine sand')}>
                  {/* Transparent Cylinder */}
                  <rect x="0" y="0" width="160" height="220" rx="16" fill="#0F172A" stroke="#38BDF8" strokeWidth="3" fillOpacity="0.75" />

                  {/* Layer 1: Gravel Stones */}
                  <rect x="8" y="15" width="144" height="50" rx="8" fill="#57534E" />
                  <text x="80" y="42" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle">1. GRAVEL LAYER</text>
                  <text x="80" y="56" fill="#E7E5E4" fontSize="8" textAnchor="middle">Traps twigs & sediment</text>

                  {/* Layer 2: Crushed Charcoal */}
                  <rect x="8" y="75" width="144" height="55" rx="8" fill="#1C1917" stroke="#44403C" strokeWidth="1" />
                  <text x="80" y="105" fill="#FDE047" fontSize="11" fontWeight="900" textAnchor="middle">2. CRUSHED CHARCOAL</text>
                  <text x="80" y="118" fill="#FEF08A" fontSize="8" textAnchor="middle">Adsorbs toxins & odors</text>

                  {/* Layer 3: Fine Quartz Sand */}
                  <rect x="8" y="140" width="144" height="65" rx="8" fill="#D97706" fillOpacity="0.85" />
                  <text x="80" y="172" fill="#FEF3C7" fontSize="11" fontWeight="900" textAnchor="middle">3. FINE QUARTZ SAND</text>
                  <text x="80" y="185" fill="#FEF9C3" fontSize="8" textAnchor="middle">Traps microscopic silt</text>
                </g>

                {/* Dripping Water Drops from Filter Spout */}
                <g transform="translate(80, 220)">
                  <path d="M -8 0 L 8 0 L 0 16 Z" fill="#38BDF8" />
                  {[0, 1].map((i) => {
                    const t = ((currentTime * 2 + i) % 1.5) / 1.5;
                    return (
                      <ellipse key={i} cx="0" cy={16 + t * 45} rx="3.5" ry="5.5" fill="#38BDF8" filter="url(#softGlow)" />
                    );
                  })}
                </g>

                {/* Pure Clean Drinking Water Glass */}
                <g transform="translate(50, 280)" className="cursor-pointer" onClick={() => handleInteractiveTap('Safe Pure Drinking Water', '0 CFU/ml bacteria count, saving children from waterborne illness')}>
                  <rect x="0" y="0" width="60" height="70" rx="6" fill="#FFFFFF" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="2" />
                  {/* Rising Clean Water Level */}
                  <rect x="3" y={70 - Math.min(64, (currentTime / totalDuration) * 64)} width="54" height={Math.min(64, (currentTime / totalDuration) * 64)} rx="4" fill="url(#pureWater)" />
                  <text x="30" y="42" textAnchor="middle" fill="#FFFFFF" fontSize="16">✨</text>
                  <text x="30" y="85" textAnchor="middle" fill="#38BDF8" fontSize="9" fontWeight="bold">PURE WATER</text>
                </g>
              </g>
            ) : video.themeCategory === 'math' ? (
              // MATHEMATICS / SINGAPORE CPA BAR MODEL DECONSTRUCTION
              <g id="math-visual-mechanism" transform="translate(320, 160)">
                <rect width="400" height="200" rx="16" fill="#0F172A" stroke="#818CF8" strokeWidth="2.5" />
                <text x="20" y="30" fill="#C7D2FE" fontSize="12" fontWeight="900">
                  SINGAPORE CPA BAR MODEL • VISUAL PROOF
                </text>

                {/* Part A Bar (Known 3 Units) */}
                <rect x="25" y="55" width="220" height="40" rx="8" fill="#4F46E5" stroke="#A5B4FC" strokeWidth="1.5" />
                <text x="135" y="80" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Known Units (3 Units = 60%)
                </text>

                {/* Part B Bar (Unknown 2 Units) */}
                <rect x="25" y="110" width={110 + Math.min(60, (currentTime / totalDuration) * 60)} height="40" rx="8" fill="#059669" stroke="#6EE7B7" strokeWidth="1.5" />
                <text x="95" y="135" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Unknown: 2 Units (40%)
                </text>

                {/* Equation Card */}
                <g transform="translate(260, 55)">
                  <rect width="120" height="100" rx="10" fill="#1E1B4B" stroke="#6366F1" strokeWidth="1.5" />
                  <text x="12" y="24" fill="#A5B4FC" fontSize="9" fontWeight="bold">STEP FORMULA:</text>
                  <text x="12" y="50" fill="#38BDF8" fontSize="13" fontWeight="900" fontFamily="monospace">
                    1 Unit = Total ÷ 5
                  </text>
                  <text x="12" y="78" fill="#34D399" fontSize="12" fontWeight="bold" fontFamily="monospace">
                    Ans = 2 × Unit
                  </text>
                </g>
              </g>
            ) : (
              // MANUFACTURING, PRACTICAL ENTERPRISE & UNIVERSAL PHENOMENA
              <g id="manufacturing-visual-mechanism" transform="translate(320, 160)">
                {/* Workshop Production Stand */}
                <rect width="410" height="190" rx="16" fill="#0F172A" stroke="#F59E0B" strokeWidth="2.5" />
                <text x="20" y="28" fill="#FDE047" fontSize="12" fontWeight="900">
                  PRACTICAL PRODUCTION & LOCAL ENTERPRISE PIPELINE
                </text>

                {/* Rotating Torque Gear Train */}
                <g transform="translate(80, 100)" className="cursor-pointer" onClick={() => handleInteractiveTap('Mechanical Drive Gears', 'Step-down gear ratio multiplying torque for manufacturing machines')}>
                  <circle cx="0" cy="0" r="35" fill="#1E293B" stroke="#94A3B8" strokeWidth="2" />
                  <circle cx="0" cy="0" r="42" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="8 6" className="animate-spin" style={{ transformOrigin: '400px 260px', animationDuration: '8s' }} />
                  <circle cx="0" cy="0" r="10" fill="#F59E0B" />
                  <text x="0" y="4" textAnchor="middle" fill="#0F172A" fontSize="8" fontWeight="bold">DRIVE</text>
                </g>

                {/* Conveyor Belt with Moving Finished Product Boxes */}
                <g transform="translate(140, 110)">
                  <rect x="0" y="10" width="240" height="20" rx="10" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
                  {[0, 1, 2].map((idx) => {
                    const pos = ((currentTime * 45 + idx * 80) % 200);
                    return (
                      <g key={idx} transform={`translate(${pos}, -25)`}>
                        <rect width="32" height="28" rx="6" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1.5" />
                        <text x="16" y="18" textAnchor="middle" fill="#FFFFFF" fontSize="12">📦</text>
                      </g>
                    );
                  })}
                </g>

                {/* Quality Control / Profit Metrics */}
                <g transform="translate(20, 140)">
                  <text x="0" y="14" fill="#34D399" fontSize="11" fontWeight="900" fontFamily="monospace">
                    OUTPUT: {Math.min(100, Math.floor(currentTime * 1.2) + 10)} UNITS • 100% QUALITY PASSED
                  </text>
                  <text x="0" y="32" fill="#94A3B8" fontSize="10">
                    Unit Cost: $0.20 • Retail Value: $1.50 • Local Community Prosperity
                  </text>
                </g>
              </g>
            )}

            {/* ============================================================== */}
            {/* 4. SCENE 4 VICTORY OVERLAYS: CELEBRATION STARS & CONFETTI       */}
            {/* ============================================================== */}
            {currentSceneIndex === 3 && (
              <g id="celebration-confetti" pointerEvents="none">
                {[
                  { x: 150, y: 80, c: '#EF4444' },
                  { x: 280, y: 60, c: '#F59E0B' },
                  { x: 420, y: 90, c: '#10B981' },
                  { x: 580, y: 50, c: '#3B82F6' },
                  { x: 700, y: 110, c: '#EC4899' },
                  { x: 220, y: 180, c: '#8B5CF6' },
                  { x: 500, y: 160, c: '#FBBF24' },
                ].map((item, idx) => (
                  <rect
                    key={idx}
                    x={item.x + Math.sin(currentTime * 3 + idx) * 20}
                    y={item.y + ((currentTime * 30 + idx * 25) % 180)}
                    width="8"
                    height="8"
                    rx="2"
                    fill={item.c}
                    transform={`rotate(${currentTime * 40 + idx * 30} ${item.x} ${item.y})`}
                  />
                ))}
              </g>
            )}

          </svg>
        </div>

        {/* Interactive Tap Feedback Popup */}
        {interactiveTapFeedback && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-900/95 border-2 border-amber-400 text-amber-200 px-4 py-2 rounded-2xl text-xs font-bold shadow-2xl animate-in zoom-in-95 duration-150 z-30 flex items-center space-x-2">
            <span>{interactiveTapFeedback}</span>
          </div>
        )}

        {/* Active Chapter Watermark Badge & Teacher Voice Indicator */}
        <div className="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-2">
          <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-black font-['Outfit'] flex items-center space-x-1.5 shadow-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>CHAPTER {currentScene.chapterNumber} OF {video.scenes.length}: {currentScene.title.toUpperCase()}</span>
          </span>
          <span className="bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-200 px-2.5 py-1 rounded-full text-[11px] font-bold hidden sm:flex items-center space-x-1 shadow-md">
            <span>{TEACHER_PERSONAS[selectedTeacherId]?.avatar || '👩‍🏫'}</span>
            <span>Gentle Teacher: {TEACHER_PERSONAS[selectedTeacherId]?.name || 'Ms. Clara'}</span>
          </span>
        </div>

        {/* Centerpiece Big Play / Pause Overlay on Click */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/10 hover:bg-black/25 transition-all group cursor-pointer z-10"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {!isPlaying && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-indigo-500 transition-all border-2 border-white/40">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1" />
            </div>
          )}
        </button>

        {/* Closed Captions Subtitle Banner */}
        {showCaptions && (
          <div className="absolute bottom-3 left-3 right-3 z-20 flex justify-center pointer-events-none">
            <div className="bg-slate-950/90 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-2.5 rounded-2xl text-center max-w-2xl shadow-2xl animate-in fade-in duration-150">
              <p className="text-xs sm:text-sm font-bold text-amber-200 leading-relaxed font-sans">
                "{currentScene.caption}"
              </p>
              {currentScene.interactivePrompt && (
                <span className="text-[10px] text-sky-300 font-semibold block mt-0.5">
                  👉 {currentScene.interactivePrompt}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Celebration Overlay at 90 Seconds */}
        {hasCompleted && (
          <div className="absolute inset-0 z-40 bg-slate-950/90 flex flex-col items-center justify-center p-6 text-center animate-in zoom-in-95 duration-200">
            <div className="text-5xl sm:text-6xl mb-2 animate-bounce">🎉🎬🌟</div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
              90-SECOND ANIMATED VIDEO COMPLETED!
            </span>
            <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white mt-2">
              Brilliant Understanding, {learnerName}!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
              {video.practicalTakeaway}
            </p>
            <div className="mt-5 flex items-center space-x-3">
              <button
                onClick={() => {
                  handleSeek(0);
                  setIsPlaying(true);
                }}
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-all flex items-center space-x-1.5 cursor-pointer shadow-lg"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay 90s Video</span>
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Continue 20-Min Lesson 🚀
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Video Scrubber & Playback Controls Bar */}
      <div className="bg-slate-950 p-3 sm:p-4 border-t border-white/10 space-y-2.5 shrink-0">
        {/* Interactive Scrub Bar with 4 Visual Scene Segments */}
        <div className="space-y-1">
          <div
            className="relative w-full h-3 bg-slate-800 rounded-full cursor-pointer group select-none"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = clickX / rect.width;
              handleSeek(ratio * totalDuration);
            }}
          >
            {/* Scene divider ticks */}
            {video.scenes.map((scene, idx) => {
              const leftPercent = (scene.startSec / totalDuration) * 100;
              return (
                <div
                  key={idx}
                  className="absolute top-0 bottom-0 w-0.5 bg-white/30 z-10"
                  style={{ left: `${leftPercent}%` }}
                  title={scene.title}
                />
              );
            })}

            {/* Filled progress bar */}
            <div
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-indigo-500 via-amber-400 to-rose-500 rounded-full transition-all duration-75"
              style={{ width: `${(currentTime / totalDuration) * 100}%` }}
            />

            {/* Scrubber Knob */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-indigo-600 transition-all duration-75 scale-90 group-hover:scale-125"
              style={{ left: `calc(${(currentTime / totalDuration) * 100}% - 8px)` }}
            />
          </div>

          {/* Chapter Indicator Labels below Scrub Bar */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium px-1">
            {video.scenes.map((s, i) => (
              <button
                key={i}
                onClick={() => handleJumpToScene(i)}
                className={`hover:text-amber-300 transition-colors cursor-pointer truncate max-w-[23%] ${
                  currentSceneIndex === i ? 'text-amber-400 font-bold' : ''
                }`}
              >
                {formatTime(s.startSec)} {s.title.split(':')[0]}
              </button>
            ))}
            <span>{formatTime(totalDuration)}</span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs">
          {/* Play, Rewind 10, FastForward 10, Time */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              onClick={togglePlay}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black flex items-center space-x-1.5 transition-all cursor-pointer shadow-md"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              <span className="hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>

            <button
              onClick={() => handleSkip(-10)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Rewind 10 seconds"
            >
              <Rewind className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleSkip(10)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Forward 10 seconds"
            >
              <FastForward className="w-4 h-4" />
            </button>

            <span className="font-mono text-xs font-bold text-slate-300 px-1 sm:px-2">
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </span>
          </div>

          {/* Speed, Audio Narration, CC, Environment */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* Playback Speed selector */}
            <div className="flex items-center bg-white/10 p-0.5 rounded-xl border border-white/10 text-[11px] font-bold">
              {[0.8, 1, 1.25, 1.5].map((s) => (
                <button
                  key={s}
                  onClick={() => setPlaybackSpeed(s)}
                  className={`px-1.5 sm:px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                    playbackSpeed === s ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            {/* Gentle Teacher Voice Persona Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowTeacherVoiceDropdown(!showTeacherVoiceDropdown)}
                className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 text-amber-200 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5"
                title="Select Gentle Teacher Voice"
              >
                <span className="text-sm">{TEACHER_PERSONAS[selectedTeacherId]?.avatar || '👩‍🏫'}</span>
                <span className="hidden sm:inline font-bold">
                  {TEACHER_PERSONAS[selectedTeacherId]?.name || 'Ms. Clara'}
                </span>
              </button>

              {showTeacherVoiceDropdown && (
                <div className="absolute bottom-full right-0 mb-2 w-72 bg-slate-900/98 backdrop-blur-md border border-amber-400/40 rounded-2xl p-2.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-2 py-1 border-b border-white/10 mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                      👩‍🏫 Gentle Teacher Voice
                    </span>
                    <p className="text-[10px] text-slate-300">Gentle, patient human educator voice (not a machine)</p>
                  </div>
                  {(Object.values(TEACHER_PERSONAS) as TeacherVoicePersona[]).map((persona) => (
                    <button
                      key={persona.id}
                      onClick={() => handleSelectTeacherPersona(persona.id as any)}
                      className={`w-full p-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer flex items-start space-x-2.5 mb-1 ${
                        selectedTeacherId === persona.id
                          ? 'bg-amber-400 text-slate-950 font-bold'
                          : 'text-slate-200 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-2xl shrink-0">{persona.avatar}</span>
                      <div className="min-w-0">
                        <div className="font-bold flex items-center space-x-1.5">
                          <span>{persona.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${selectedTeacherId === persona.id ? 'bg-slate-950 text-amber-300' : 'bg-white/10 text-amber-300'}`}>
                            {persona.gender === 'female' ? 'Gentle Female' : 'Kind Male'}
                          </span>
                        </div>
                        <div className={`text-[11px] font-medium leading-tight mt-0.5 ${selectedTeacherId === persona.id ? 'text-slate-900' : 'text-slate-300'}`}>
                          {persona.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Voice Narration toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                isAudioEnabled ? 'bg-indigo-600 text-white' : 'bg-white/10 text-slate-400'
              }`}
              title={isAudioEnabled ? 'Mute Voice Narration' : 'Enable Voice Narration'}
            >
              {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden md:inline">Voice</span>
            </button>

            {/* Subtitles CC toggle */}
            <button
              onClick={() => setShowCaptions(!showCaptions)}
              className={`p-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                showCaptions ? 'bg-amber-400 text-slate-950' : 'bg-white/10 text-slate-400'
              }`}
              title="Toggle Subtitles"
            >
              <Subtitles className="w-4 h-4" />
              <span className="hidden md:inline">CC</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
