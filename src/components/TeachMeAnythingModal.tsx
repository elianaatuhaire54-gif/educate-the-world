import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  HelpCircle, 
  FlaskConical, 
  Heart, 
  CheckCircle2, 
  MessageSquare, 
  Volume2, 
  VolumeX, 
  Loader2, 
  Eye, 
  Layers, 
  ArrowRight, 
  Sun, 
  Activity, 
  Atom, 
  GraduationCap,
  Building2,
  TreePine,
  Languages
} from 'lucide-react';
import { ChildProfile, LocationType, RegionalDialect } from '../types/curriculum';
import { speakText, stopSpeaking } from '../utils/speech';

interface TeachMeAnythingModalProps {
  currentProfile: ChildProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const TeachMeAnythingModal: React.FC<TeachMeAnythingModalProps> = ({
  currentProfile,
  isOpen,
  onClose,
}) => {
  const [question, setQuestion] = useState('Why is the sky blue?');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [selectedAge, setSelectedAge] = useState<number>(currentProfile.age || 6);
  const [activeLocation, setActiveLocation] = useState<LocationType>(currentProfile.location || 'rural');
  const [activeDialect, setActiveDialect] = useState<RegionalDialect>(currentProfile.preferredDialect || 'Luganda');
  const [isSpeakingResult, setIsSpeakingResult] = useState(false);

  if (!isOpen) return null;

  const quickPromptQuestions = [
    'Why is the sky blue?',
    'Why does bread rise with yeast?',
    'Where does electricity come from?',
    'Why do cars need engine oil?',
    'Why do we dream when we sleep?',
  ];

  const handleAsk = async (
    queryToAsk?: string, 
    ageToUse?: number, 
    locToUse?: LocationType,
    dialectToUse?: RegionalDialect
  ) => {
    const q = (queryToAsk !== undefined ? queryToAsk : question).trim();
    const age = ageToUse !== undefined ? ageToUse : selectedAge;
    const loc = locToUse !== undefined ? locToUse : activeLocation;
    const dial = dialectToUse !== undefined ? dialectToUse : activeDialect;
    if (!q) return;

    setLoading(true);
    stopSpeaking();
    setIsSpeakingResult(false);

    try {
      const res = await fetch('/api/teach-me-anything', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          childAge: age,
          childName: currentProfile.name,
          childLocation: loc,
          childDialect: dial,
        }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error('Error fetching explanation:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAgeChange = (newAge: number) => {
    setSelectedAge(newAge);
    handleAsk(question, newAge, activeLocation, activeDialect);
  };

  const handleLocationChange = (newLoc: LocationType) => {
    setActiveLocation(newLoc);
    handleAsk(question, selectedAge, newLoc, activeDialect);
  };

  const handleToggleSpeak = () => {
    if (isSpeakingResult) {
      stopSpeaking();
      setIsSpeakingResult(false);
    } else if (result?.simpleExplanation) {
      const textToRead = `${result.simpleExplanation} Parent coaching tip: ${result.parentGuide?.whatToExplain || ''}`;
      const started = speakText(textToRead, () => setIsSpeakingResult(false));
      setIsSpeakingResult(started);
    }
  };

  const handleSpeakDialect = (word: string) => {
    stopSpeaking();
    speakText(word);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-amber-100 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-5 sm:p-6 relative">
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-200">
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>AI Tutor • Age & Location Tailored Explainer</span>
            </div>

            {/* Urban vs Rural Context Switcher Pill */}
            <div className="inline-flex items-center rounded-xl bg-black/25 backdrop-blur-xs border border-white/20 p-0.5 mr-8">
              <button
                onClick={() => handleLocationChange('urban')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeLocation === 'urban' ? 'bg-amber-400 text-slate-900 shadow-xs' : 'text-amber-100 hover:text-white'
                }`}
                title="Use Urban town analogies & dialect"
              >
                <Building2 className="w-3 h-3" />
                <span>Town</span>
              </button>
              <button
                onClick={() => handleLocationChange('rural')}
                className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeLocation === 'rural' ? 'bg-emerald-400 text-slate-900 shadow-xs' : 'text-amber-100 hover:text-white'
                }`}
                title="Use Rural village analogies & dialect"
              >
                <TreePine className="w-3 h-3" />
                <span>Village</span>
              </button>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] mt-1">
            "Teach Me Anything"
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
            Ask any question. The AI dynamically scales the intellectual depth: <strong>visual sensory aid for age 6</strong>, <strong>scattering mechanics for age 12</strong>, and <strong>wavelength physics for age 17</strong>, localized for your {activeLocation === 'urban' ? 'urban town' : 'village'} surroundings.
          </p>

          {/* Age Selector Tabs */}
          <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-amber-200 mr-1">Switch Age Depth:</span>
            
            <button
              onClick={() => handleAgeChange(6)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedAge === 6 
                  ? 'bg-white text-amber-900 shadow-md ring-2 ring-white/60' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>Age 6 (Visual Aid)</span>
            </button>

            <button
              onClick={() => handleAgeChange(12)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedAge === 12 
                  ? 'bg-white text-blue-900 shadow-md ring-2 ring-white/60' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              <span>Age 12 (Scattering & Molecules)</span>
            </button>

            <button
              onClick={() => handleAgeChange(17)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedAge === 17 
                  ? 'bg-white text-purple-900 shadow-md ring-2 ring-white/60' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Atom className="w-3.5 h-3.5 text-purple-600" />
              <span>Age 17 (1/λ⁴ Wavelengths & Formulas)</span>
            </button>
          </div>
        </div>

        {/* Question Input & Quick Prompts */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk();
            }}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder={`Ask any question (e.g. "Why is the sky blue?")`}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="flex-1 px-4 py-3 rounded-2xl border border-slate-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer flex items-center space-x-1.5 shrink-0"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Explain</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Quick Prompts */}
          <div className="mt-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-semibold text-slate-400 shrink-0">Try asking:</span>
            {quickPromptQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuestion(q);
                  handleAsk(q);
                }}
                className={`whitespace-nowrap px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
                  question === q 
                    ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Results Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {loading && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
              <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
              <p className="text-sm font-semibold text-slate-700">
                Crafting an explanation for {currentProfile.name} (age {selectedAge}) in {activeLocation === 'urban' ? 'Town' : 'Village'}...
              </p>
              <p className="text-xs text-slate-400">
                Adapting intellectual depth, home experiment, and local dialect words
              </p>
            </div>
          )}

          {!loading && !result && (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-2xl shadow-inner">
                💡
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Outfit']">
                Ask any question above!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Try "Why is the sky blue?" to see how the explanation scales from playful sensory analogies for 6-year-olds to electromagnetic physics for 17-year-olds.
              </p>
            </div>
          )}

          {!loading && result && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Depth Level & Audio Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-800">
                    {result.intellectualDepthLevel}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    activeLocation === 'urban' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {result.locationBadge || (activeLocation === 'urban' ? '🏙️ Urban' : '🌾 Rural')}
                  </span>
                </div>

                <button
                  onClick={handleToggleSpeak}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSpeakingResult 
                      ? 'bg-amber-500 text-white animate-pulse' 
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {isSpeakingResult ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{isSpeakingResult ? 'Stop Audio' : 'Listen Aloud'}</span>
                </button>
              </div>

              {/* Main Explanation Card */}
              <div className={`p-4 sm:p-5 rounded-3xl border shadow-xs ${
                selectedAge <= 7 
                  ? 'bg-amber-50/80 border-amber-200' 
                  : selectedAge <= 13 
                    ? 'bg-blue-50/80 border-blue-200' 
                    : 'bg-purple-50/80 border-purple-200'
              }`}>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Tailored Answer for {currentProfile.name} (Age {selectedAge}) • {activeLocation === 'urban' ? 'Town' : 'Village'} Setting
                </span>
                <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium">
                  {result.simpleExplanation}
                </p>
              </div>

              {/* Local Dialect Highlights Card */}
              {result.dialectHighlights && result.dialectHighlights.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                    <Languages className="w-4 h-4 text-amber-700" />
                    <span>Local Dialect Words Used in This Topic:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {result.dialectHighlights.map((dh: any, idx: number) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-white border border-amber-200 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-slate-900">{dh.word}</span>
                          <button
                            onClick={() => handleSpeakDialect(dh.word)}
                            className="p-1 text-amber-600 hover:bg-amber-50 rounded"
                            title="Listen"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-slate-600 text-[11px] font-medium">{dh.meaning}</p>
                        {dh.usage && (
                          <p className="text-slate-400 text-[10px] italic mt-0.5">"{dh.usage}"</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Visual Aid Component */}
              {result.visualAid && (
                <div className="p-4 sm:p-5 rounded-3xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center space-x-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <Eye className="w-4 h-4 text-amber-600" />
                    <span>Visual Aid: {result.visualAid.title}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 mb-3 leading-relaxed">
                    {result.visualAid.description}
                  </p>

                  {/* Render tailored diagram for "Why is the sky blue?" depending on age */}
                  {question.toLowerCase().includes('sky') && (
                    <div className="my-3 p-4 rounded-2xl bg-white border border-slate-200 overflow-hidden">
                      {selectedAge <= 7 ? (
                        /* Age 6 Visual Aid */
                        <div className="text-center space-y-2">
                          <div className="flex items-center justify-center space-x-3 text-xs font-bold">
                            <span className="px-2 py-1 rounded-lg bg-amber-100 text-amber-800">☀️ White Sunlight</span>
                            <span>➡️</span>
                            <span className="px-2 py-1 rounded-lg bg-blue-100 text-blue-800">💨 Tiny Air Specks</span>
                            <span>➡️</span>
                            <span className="px-2 py-1 rounded-lg bg-sky-200 text-sky-900 font-extrabold">🌐 Blue Sky Blanket!</span>
                          </div>

                          <div className="relative h-28 bg-gradient-to-b from-sky-300 via-sky-200 to-amber-100 rounded-xl p-3 flex items-center justify-around border border-sky-200">
                            <div className="text-center">
                              <span className="text-3xl block">☀️</span>
                              <span className="text-[10px] font-bold text-amber-900">Sunlight</span>
                            </div>

                            <div className="flex flex-col items-center space-y-1">
                              <span className="text-xs font-bold text-red-600">🔴 Red Light (Passes straight) ➔ 🌿</span>
                              <span className="text-xs font-bold text-amber-600">🟡 Yellow Light (Passes straight) ➔ 🏡</span>
                              <span className="text-xs font-bold text-blue-700 animate-bounce">🔵 Blue Light (Bounces everywhere!) ↗️ ↖️ ↘️</span>
                            </div>

                            <div className="text-center">
                              <span className="text-3xl block">👧</span>
                              <span className="text-[10px] font-bold text-slate-800">{currentProfile.name} Sees Blue!</span>
                            </div>
                          </div>
                        </div>
                      ) : selectedAge <= 13 ? (
                        /* Age 12 Visual Aid */
                        <div className="space-y-2 text-xs">
                          <div className="grid grid-cols-2 gap-2 text-slate-700">
                            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                              <span className="font-bold text-blue-900 block">Short Waves (Blue ~450 nm):</span>
                              <span>Collide violently with small N₂ & O₂ molecules and scatter in all 360° directions.</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-red-50 border border-red-200">
                              <span className="font-bold text-red-900 block">Long Waves (Red ~700 nm):</span>
                              <span>Pass smoothly over small molecules without bouncing.</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Age 17 Visual Aid */
                        <div className="p-3 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-xl space-y-1">
                          <p className="text-amber-300 font-bold">Rayleigh Cross-Section Formulation:</p>
                          <p>I(θ) = I₀ * ((1 + cos²θ) / 2R²) * ((2π/λ)⁴) * ((n² - 1)/(n² + 2))² * (d/2)⁶</p>
                          <p className="text-slate-300">Scattering ratio: (λ_red / λ_blue)⁴ = (700nm / 450nm)⁴ ≈ 5.86x intensity</p>
                        </div>
                      )}
                    </div>
                  )}

                  {result.visualAid.keyElements && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {result.visualAid.keyElements.map((el: string, idx: number) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-600">
                          ✓ {el}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 5-Minute Parent Guide Box */}
              {result.parentGuide && (
                <div className="p-4 sm:p-5 rounded-3xl bg-amber-500 text-white space-y-3">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 fill-white" />
                    <h4 className="text-sm sm:text-base font-bold font-['Outfit']">
                      Parent Coaching: How to Guide {currentProfile.name}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-2xl bg-black/15 backdrop-blur-xs border border-white/20">
                      <span className="font-bold text-amber-200 uppercase tracking-wider text-[10px] block mb-1">
                        1. Ask Before Explaining:
                      </span>
                      <p className="text-white italic">{result.parentGuide.whatToAskFirst}</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-black/15 backdrop-blur-xs border border-white/20">
                      <span className="font-bold text-amber-200 uppercase tracking-wider text-[10px] block mb-1">
                        2. Say Aloud Together:
                      </span>
                      <p className="text-white">{result.parentGuide.whatToExplain}</p>
                    </div>
                  </div>

                  {result.parentGuide.homeExperiment && (
                    <div className="p-3 rounded-2xl bg-black/15 backdrop-blur-xs border border-white/20 text-xs">
                      <span className="font-bold text-amber-200 uppercase tracking-wider text-[10px] block mb-1 flex items-center space-x-1">
                        <FlaskConical className="w-3.5 h-3.5" />
                        <span>3. Safe Home Experiment (3-5 Minutes):</span>
                      </span>
                      <p className="text-white">{result.parentGuide.homeExperiment}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Check-in question */}
              {result.quickCheckQuestion && (
                <div className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Quick Check-In for {currentProfile.name}:</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mb-3">
                    {result.quickCheckQuestion.question}
                  </p>
                  <div className="space-y-1.5">
                    {result.quickCheckQuestion.options.map((opt: string, i: number) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                        <span>{opt}</span>
                        {i === result.quickCheckQuestion.correctIndex && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">Correct</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
