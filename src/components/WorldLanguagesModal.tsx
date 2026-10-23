import React, { useState } from 'react';
import { 
  WORLD_LANGUAGES, 
  UNIVERSAL_LESSON_CONCEPTS,
  LanguageCode, 
  LanguageProfile, 
  SurvivalPhrase,
  getLanguageProfile 
} from '../data/worldLanguagesData';
import { speakForeignLanguage, stopSpeaking, isSpeaking } from '../utils/speech';
import { 
  Globe, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  BookOpen, 
  MessageSquare, 
  Layers, 
  Lightbulb, 
  HelpCircle, 
  X, 
  Check, 
  Compass, 
  RotateCw, 
  Search, 
  Send, 
  Bot, 
  Printer, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Ear
} from 'lucide-react';

interface WorldLanguagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLanguage?: LanguageCode;
  initialConcept?: string;
}

export const WorldLanguagesModal: React.FC<WorldLanguagesModalProps> = ({
  isOpen,
  onClose,
  initialLanguage = 'mandarin',
  initialConcept,
}) => {
  const [selectedLangId, setSelectedLangId] = useState<LanguageCode>(initialLanguage);
  const [activeTab, setActiveTab] = useState<'survival' | 'dialogue' | 'script' | 'roots' | 'flashcards' | 'crossref' | 'ai-coach'>('survival');
  const [slowAudio, setSlowAudio] = useState(false);
  const [currentlyPlayingText, setCurrentlyPlayingText] = useState<string | null>(null);

  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // AI Coach state
  const [coachQuestion, setCoachQuestion] = useState('');
  const [coachLoading, setCoachLoading] = useState(false);
  const [coachResponse, setCoachResponse] = useState<any | null>(null);

  if (!isOpen) return null;

  const currentLang: LanguageProfile = getLanguageProfile(selectedLangId);

  const handleSpeak = (text: string, langCode: string) => {
    stopSpeaking();
    setCurrentlyPlayingText(text);
    speakForeignLanguage(text, langCode, slowAudio, () => {
      setCurrentlyPlayingText(null);
    });
  };

  const handleAskCoach = async (queryText?: string) => {
    const query = queryText || coachQuestion;
    if (!query.trim()) return;
    setCoachLoading(true);
    setCoachResponse(null);

    try {
      const res = await fetch('/api/language-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          language: currentLang.name,
        }),
      });
      const data = await res.json();
      setCoachResponse(data);
    } catch (err) {
      console.error('Failed to get coach response:', err);
    } finally {
      setCoachLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[94vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 text-xl sm:text-2xl shadow-inner">
              🌍
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-xl font-bold font-['Outfit'] tracking-tight">
                  World Languages Academy
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Ages 3 – Adult
                </span>
              </div>
              <p className="text-xs text-slate-300 hidden sm:block">
                Effortless, zero-intimidation foreign language mastery designed for adult newcomers & families
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Speed toggle */}
            <button
              onClick={() => setSlowAudio(!slowAudio)}
              className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                slowAudio
                  ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-xs'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/15'
              }`}
              title="Toggle beginner slow pronunciation"
            >
              <Ear className="w-3.5 h-3.5" />
              <span>{slowAudio ? '🐢 Slow (0.7x)' : '🗣️ Normal (0.9x)'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 9 Languages Selection Bar */}
        <div className="px-3 sm:px-6 py-2.5 bg-slate-50 border-b border-slate-200 overflow-x-auto scrollbar-none flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 hidden md:inline">
            Language:
          </span>
          {WORLD_LANGUAGES.map((lang) => {
            const isSelected = lang.id === selectedLangId;
            return (
              <button
                key={lang.id}
                onClick={() => {
                  stopSpeaking();
                  setSelectedLangId(lang.id);
                  setFlashcardIndex(0);
                  setIsFlipped(false);
                  setCoachResponse(null);
                }}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs ring-2 ring-indigo-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{lang.flag}</span>
                <span className="font-bold">{lang.name}</span>
                <span className="text-[10px] opacity-75 hidden lg:inline">({lang.nativeName.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          
          {/* Adult Superpower Card */}
          <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-indigo-50 via-white to-amber-50/40 border border-indigo-100 shadow-xs relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-2xl">{currentLang.flag}</span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Outfit']">
                    {currentLang.name}
                  </h3>
                  <span className="text-sm font-semibold text-slate-500" dir={currentLang.direction}>
                    {currentLang.nativeName}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800">
                    {currentLang.family}
                  </span>
                </div>

                <div className="flex items-start space-x-2 text-indigo-950">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-bold text-indigo-950">
                    {currentLang.adultSuperpower.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentLang.adultSuperpower.whyItIsEasyForAdults}
                </p>

                <div className="bg-amber-100/60 border border-amber-200 rounded-xl p-2.5 text-xs text-amber-950 flex items-start space-x-2">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Adult Fast-Track Cheat Code: </span>
                    <span>{currentLang.adultSuperpower.cheatCode}</span>
                  </div>
                </div>
              </div>

              {/* Sound & Script Summary Box */}
              <div className="w-full md:w-72 bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-slate-200 text-xs space-y-2 shrink-0">
                <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider flex items-center space-x-1">
                  <Compass className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Sound & Reading Guide</span>
                </p>
                <p className="text-slate-600 text-[11px]">
                  <strong>Writing Direction:</strong> {currentLang.direction === 'rtl' ? 'Right to Left (RTL ⬅️)' : 'Left to Right (LTR ➡️)'}
                </p>
                <div className="space-y-1 pt-1 border-t border-slate-100">
                  {currentLang.goldenSoundRules.slice(0, 3).map((rule, idx) => (
                    <p key={idx} className="text-[11px] text-slate-600 flex items-start space-x-1">
                      <span className="text-indigo-600 font-bold">•</span>
                      <span>{rule}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Navigation Tabs */}
          <div className="flex items-center space-x-1 border-b border-slate-200 overflow-x-auto scrollbar-none pb-px text-xs font-bold">
            <button
              onClick={() => setActiveTab('survival')}
              className={`flex items-center space-x-1.5 px-3.5 py-2.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'survival'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>10 Survival Phrases</span>
            </button>

            <button
              onClick={() => setActiveTab('dialogue')}
              className={`flex items-center space-x-1.5 px-3.5 py-2.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'dialogue'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Real Dialogues</span>
            </button>

            <button
              onClick={() => setActiveTab('script')}
              className={`flex items-center space-x-1.5 px-3.5 py-2.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'script'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Alphabet & Script Decoder</span>
            </button>

            <button
              onClick={() => setActiveTab('roots')}
              className={`flex items-center space-x-1.5 px-3.5 py-2.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'roots'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>The Root Multiplier</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center space-x-1.5 px-3.5 py-2.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'flashcards'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Practice Flashcards</span>
            </button>

            <button
              onClick={() => setActiveTab('crossref')}
              className={`flex items-center space-x-1.5 px-3.5 py-2.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'crossref'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>9-Language Concept Bridge</span>
            </button>

            <button
              onClick={() => setActiveTab('ai-coach')}
              className={`flex items-center space-x-1.5 px-3.5 py-2.5 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'ai-coach'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-indigo-600" />
              <span>AI Polyglot Coach</span>
            </button>
          </div>

          {/* TAB 1: 10 SURVIVAL PHRASES */}
          {activeTab === 'survival' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <p>
                  Every phrase features phonetic pronunciation, literal word logic, and practical etiquette context.
                </p>
                <span className="font-semibold text-slate-700">
                  {currentLang.survivalPhrases.length} Core Phrases
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {currentLang.survivalPhrases.map((phrase, idx) => {
                  const isPlaying = currentlyPlayingText === phrase.native;
                  return (
                    <div
                      key={phrase.id}
                      className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-indigo-300 transition-all shadow-xs flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        {/* Native & Audio row */}
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              #{idx + 1} · {phrase.category.toUpperCase()}
                            </span>
                            <h4 
                              className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5 leading-snug"
                              dir={currentLang.direction}
                            >
                              {phrase.native}
                            </h4>
                          </div>

                          <button
                            onClick={() => handleSpeak(phrase.native, currentLang.speechLangCode)}
                            className={`p-2.5 rounded-xl border transition-all cursor-pointer shrink-0 ${
                              isPlaying
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs animate-pulse'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
                            }`}
                            title={`Listen to pronunciation (${slowAudio ? 'Slow' : 'Normal'})`}
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Phonetic Pronunciation Badge */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-1.5 flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-indigo-700">
                            🗣️ {phrase.phonetic}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Say it aloud
                          </span>
                        </div>

                        {/* Literal Logic & Natural English */}
                        <div className="text-xs space-y-1">
                          <p className="text-slate-500">
                            <span className="font-semibold text-slate-700">Literal Logic:</span> {phrase.literalBreakdown}
                          </p>
                          <p className="text-sm font-bold text-slate-900">
                            = "{phrase.english}"
                          </p>
                        </div>
                      </div>

                      {/* Adult Etiquette Tip */}
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-start space-x-1.5 text-[11px] text-slate-500">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{phrase.adultEtiquetteTip}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: PRACTICAL DIALOGUES */}
          {activeTab === 'dialogue' && (
            <div className="space-y-6">
              {currentLang.dialogues.map((dialogue) => (
                <div key={dialogue.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      💬 {dialogue.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {dialogue.scenario}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {dialogue.lines.map((line, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-2xl border flex items-start justify-between gap-3 ${
                          line.speaker === 'You'
                            ? 'bg-indigo-50/60 border-indigo-200 ml-2 sm:ml-6'
                            : 'bg-slate-50 border-slate-200 mr-2 sm:mr-6'
                        }`}
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {line.speaker}
                          </span>
                          <p className="text-base font-bold text-slate-900" dir={currentLang.direction}>
                            {line.native}
                          </p>
                          <p className="text-xs font-mono font-medium text-indigo-700">
                            {line.phonetic}
                          </p>
                          <p className="text-xs text-slate-600 font-medium pt-0.5">
                            "{line.english}"
                          </p>
                        </div>

                        <button
                          onClick={() => handleSpeak(line.audioText, currentLang.speechLangCode)}
                          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors shrink-0"
                          title="Listen to this line"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: SCRIPT & ALPHABET DECODER */}
          {activeTab === 'script' && (
            <div className="space-y-4">
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-950 flex items-start space-x-2">
                <Compass className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Decoding the Script ({currentLang.scriptName}): </span>
                  <span>
                    Adults master foreign scripts by associating each shape with a familiar mental anchor. Tap any letter below to listen!
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {currentLang.scriptLetters.map((letter, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSpeak(letter.exampleWord, currentLang.speechLangCode)}
                    className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div className="text-center pb-2 border-b border-slate-100">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-serif block my-1">
                        {letter.symbol}
                      </span>
                      <span className="text-xs font-bold text-indigo-700">
                        {letter.name} ({letter.phonetic})
                      </span>
                    </div>

                    <div className="pt-2 text-xs space-y-1">
                      <p className="text-[11px] text-slate-600">
                        <strong>Sound:</strong> {letter.soundGuide}
                      </p>
                      <p className="text-[11px] text-slate-500 italic">
                        💡 {letter.memoryAnchor}
                      </p>
                      <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="font-bold text-slate-900">{letter.exampleWord}</span>
                        <span className="text-slate-500">({letter.exampleMeaning})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: THE ROOT MULTIPLIER */}
          {activeTab === 'roots' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 flex items-start space-x-2">
                <Layers className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">The Root Multiplier Strategy: </span>
                  <span>
                    Adult brains excel at recognizing patterns. Instead of memorizing 500 isolated words, learn these power roots and multiply your vocabulary instantly.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentLang.rootMultipliers.map((rootItem, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-slate-900">
                        🌱 Root: <span className="text-indigo-600 font-mono">{rootItem.root}</span>
                      </h4>
                      <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold">
                        Meaning: "{rootItem.meaning}"
                      </span>
                    </div>

                    <p className="text-xs text-slate-600">
                      {rootItem.explanation}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Connected Words & World Derivatives:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {rootItem.derivativesInEnglishOrWorld.map((deriv, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                          >
                            {deriv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FLASHCARDS */}
          {activeTab === 'flashcards' && (
            <div className="max-w-xl mx-auto space-y-4 text-center">
              <p className="text-xs text-slate-500">
                Card {flashcardIndex + 1} of {currentLang.survivalPhrases.length} • Tap to flip
              </p>

              {(() => {
                const phrase = currentLang.survivalPhrases[flashcardIndex];
                return (
                  <div
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-full min-h-[220px] rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/50 to-white flex flex-col justify-between items-center text-center cursor-pointer shadow-sm hover:shadow-md transition-all select-none"
                  >
                    {!isFlipped ? (
                      <div className="my-auto space-y-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                          Front • Tap to Reveal
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-slate-900" dir={currentLang.direction}>
                          {phrase.native}
                        </h3>
                        <p className="text-sm font-mono font-bold text-indigo-700">
                          {phrase.phonetic}
                        </p>
                      </div>
                    ) : (
                      <div className="my-auto space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                          Meaning Revealed
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                          "{phrase.english}"
                        </h4>
                        <p className="text-xs text-slate-500">
                          <strong>Literal Logic:</strong> {phrase.literalBreakdown}
                        </p>
                        <p className="text-xs text-slate-600 italic max-w-sm mx-auto pt-1">
                          💡 {phrase.adultEtiquetteTip}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center space-x-3 pt-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak(phrase.native, currentLang.speechLangCode);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center space-x-1.5 cursor-pointer shadow-xs"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen Aloud</span>
                      </button>
                    </div>
                  </div>
                );
              })()}

              <div className="flex items-center justify-center space-x-3 pt-2">
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : currentLang.survivalPhrases.length - 1));
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
                >
                  Flip Card
                </button>
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setFlashcardIndex((prev) => (prev < currentLang.survivalPhrases.length - 1 ? prev + 1 : 0));
                  }}
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: 9-LANGUAGE CONCEPT BRIDGE */}
          {activeTab === 'crossref' && (
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-700 flex items-start space-x-2">
                <Globe className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">The Universal Human Concept Bridge: </span>
                  <span>
                    See how foundational life themes (Water, Peace, Soil, Sun, Knowledge, Family) connect across all 9 world languages. Tap any speaker icon to hear the pronunciation!
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {UNIVERSAL_LESSON_CONCEPTS.map((conceptItem, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <h4 className="text-base font-bold text-slate-900">
                        {conceptItem.concept}
                      </h4>
                      <span className="text-xs font-mono font-semibold text-slate-500">
                        English: {conceptItem.english.word} [{conceptItem.english.phonetic}]
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                      {/* Mandarin */}
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold">🇨🇳 Mandarin</span>
                          <span className="text-sm font-bold text-slate-900">{conceptItem.mandarin.word}</span>
                          <span className="text-[10px] text-indigo-700 block">{conceptItem.mandarin.phonetic}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(conceptItem.mandarin.word, 'zh-CN')}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Spanish */}
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold">🇪🇸 Spanish</span>
                          <span className="text-sm font-bold text-slate-900">{conceptItem.spanish.word}</span>
                          <span className="text-[10px] text-indigo-700 block">{conceptItem.spanish.phonetic}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(conceptItem.spanish.word, 'es-ES')}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* French */}
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold">🇫🇷 French</span>
                          <span className="text-sm font-bold text-slate-900">{conceptItem.french.word}</span>
                          <span className="text-[10px] text-indigo-700 block">{conceptItem.french.phonetic}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(conceptItem.french.word, 'fr-FR')}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Hebrew */}
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold">🇮🇱 Hebrew</span>
                          <span className="text-sm font-bold text-slate-900">{conceptItem.hebrew.word}</span>
                          <span className="text-[10px] text-indigo-700 block">{conceptItem.hebrew.phonetic}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(conceptItem.hebrew.word, 'he-IL')}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Greek */}
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold">🇬🇷 Greek</span>
                          <span className="text-sm font-bold text-slate-900">{conceptItem.greek.word}</span>
                          <span className="text-[10px] text-indigo-700 block">{conceptItem.greek.phonetic}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(conceptItem.greek.word, 'el-GR')}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Latin */}
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold">🏛️ Latin</span>
                          <span className="text-sm font-bold text-slate-900">{conceptItem.latin.word}</span>
                          <span className="text-[10px] text-indigo-700 block">{conceptItem.latin.phonetic}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(conceptItem.latin.word, 'it-IT')}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Arabic */}
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold">🇸🇦 Arabic</span>
                          <span className="text-sm font-bold text-slate-900">{conceptItem.arabic.word}</span>
                          <span className="text-[10px] text-indigo-700 block">{conceptItem.arabic.phonetic}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(conceptItem.arabic.word, 'ar-SA')}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Hindi */}
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-bold">🇮🇳 Hindi</span>
                          <span className="text-sm font-bold text-slate-900">{conceptItem.hindi.word}</span>
                          <span className="text-[10px] text-indigo-700 block">{conceptItem.hindi.phonetic}</span>
                        </div>
                        <button
                          onClick={() => handleSpeak(conceptItem.hindi.word, 'hi-IN')}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: AI POLYGLOT COACH */}
          {activeTab === 'ai-coach' && (
            <div className="space-y-4">
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-950 flex items-start space-x-2">
                <Bot className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Ask Anything About {currentLang.name}: </span>
                  <span>
                    Need a sentence translated with easy phonetics? Wondering how a grammar rule works in simple English? Ask your coach below.
                  </span>
                </div>
              </div>

              {/* Quick Questions for Adults */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    const q = `Why is ${currentLang.name} easy for adult beginners?`;
                    setCoachQuestion(q);
                    handleAskCoach(q);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
                >
                  ⚡ Why is {currentLang.name} easy for adults?
                </button>
                <button
                  onClick={() => {
                    const q = `Give me a simple 3-line beginner dialogue for buying fruit or water in ${currentLang.name}.`;
                    setCoachQuestion(q);
                    handleAskCoach(q);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
                >
                  🍎 Simple Market Dialogue
                </button>
                <button
                  onClick={() => {
                    const q = `How do I introduce myself politely in ${currentLang.name} as a new adult learner?`;
                    setCoachQuestion(q);
                    handleAskCoach(q);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
                >
                  🤝 Polite Self-Introduction
                </button>
              </div>

              {/* Input Form */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder={`Ask a question or request a phrase in ${currentLang.name}...`}
                  value={coachQuestion}
                  onChange={(e) => setCoachQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskCoach()}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={() => handleAskCoach()}
                  disabled={coachLoading}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 disabled:opacity-50 transition-colors flex items-center space-x-1.5 cursor-pointer shadow-xs"
                >
                  {coachLoading ? <RotateCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  <span>Ask Coach</span>
                </button>
              </div>

              {/* Coach Response Card */}
              {coachResponse && (
                <div className="bg-white rounded-2xl border border-indigo-200 p-5 shadow-xs space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Polyglot Coach Explanation</span>
                    </h4>
                    {coachResponse.nativeText && (
                      <button
                        onClick={() => handleSpeak(coachResponse.nativeText, currentLang.speechLangCode)}
                        className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold flex items-center space-x-1 cursor-pointer"
                      >
                        <Volume2 className="w-3 h-3" />
                        <span>Listen Aloud</span>
                      </button>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {coachResponse.explanation}
                  </p>

                  {coachResponse.phoneticBreakdown && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs space-y-1">
                      <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">
                        Phonetic Pronunciation Guide:
                      </span>
                      <p className="font-mono text-indigo-700 font-bold text-sm">
                        {coachResponse.phoneticBreakdown}
                      </p>
                      {coachResponse.pronunciationTip && (
                        <p className="text-slate-500 text-[11px] pt-1">
                          👄 <strong>Mouth / Breath Tip:</strong> {coachResponse.pronunciationTip}
                        </p>
                      )}
                    </div>
                  )}

                  {coachResponse.adultSuperpowerRule && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-950 flex items-start space-x-2">
                      <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Adult Memory Anchor: </span>
                        <span>{coachResponse.adultSuperpowerRule}</span>
                      </div>
                    </div>
                  )}

                  {coachResponse.practicalDialogue && coachResponse.practicalDialogue.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Mini Practice Exchange:
                      </span>
                      {coachResponse.practicalDialogue.map((dl: any, dIdx: number) => (
                        <div key={dIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between">
                          <div>
                            <span className="font-bold text-slate-700">{dl.speaker}: </span>
                            <span className="font-semibold text-slate-900" dir={currentLang.direction}>{dl.native} </span>
                            <span className="text-indigo-700 font-mono text-[11px]">({dl.phonetic})</span>
                            <span className="text-slate-500 block text-[11px]">"{dl.english}"</span>
                          </div>
                          <button
                            onClick={() => handleSpeak(dl.native, currentLang.speechLangCode)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-700">9 World Languages:</span>
            <span>Mandarin · Spanish · French · Hebrew · Greek · Latin · Arabic · Hindi · English</span>
          </div>

          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors cursor-pointer shadow-xs"
          >
            Done Learning
          </button>
        </div>

      </div>
    </div>
  );
};
