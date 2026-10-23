import React, { useState } from 'react';
import { 
  X, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink, 
  Printer, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  ChevronRight,
  ArrowRight,
  Layers,
  HelpCircle,
  Clock,
  Play,
  RotateCcw,
  Check,
  Building,
  Flag,
  Scale,
  Compass,
  FileText
} from 'lucide-react';
import { 
  US_EDUCATION_TIERS, 
  US_GRADE_LEVEL_CROSSWALK, 
  US_PRACTICE_RESOURCES, 
  UsPracticeResourceItem 
} from '../data/usCurriculumData';

interface UsCurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCambridge?: () => void;
  initialTab?: 'tiers' | 'exams' | 'crosswalk' | 'parity';
  initialResourceId?: string;
}

export const UsCurriculumModal: React.FC<UsCurriculumModalProps> = ({
  isOpen,
  onClose,
  onOpenCambridge,
  initialTab = 'tiers',
  initialResourceId
}) => {
  const [activeTab, setActiveTab] = useState<'tiers' | 'exams' | 'crosswalk' | 'parity'>(initialTab);
  const [selectedTierId, setSelectedTierId] = useState<string>('us-elementary');
  const [selectedResourceId, setSelectedResourceId] = useState<string | undefined>(initialResourceId);
  
  // Interactive exam practice state
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showAnswer, setShowAnswer] = useState<Record<number, boolean>>({});
  const [timerSeconds, setTimerSeconds] = useState<number>(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentTier = US_EDUCATION_TIERS.find(t => t.id === selectedTierId) || US_EDUCATION_TIERS[1];
  const selectedResource = US_PRACTICE_RESOURCES.find(r => r.id === selectedResourceId);

  const handlePrint = () => {
    window.print();
  };

  const handleAnswerSelect = (qNum: number, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [qNum]: answer }));
  };

  const toggleShowAnswer = (qNum: number) => {
    setShowAnswer(prev => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  const resetExam = (durationMinutes: number) => {
    setUserAnswers({});
    setShowAnswer({});
    setTimerSeconds(durationMinutes * 60);
    setIsTimerRunning(false);
    setActiveQuestionIdx(0);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-red-200 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-red-950 text-white p-5 sm:p-6 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-300 bg-red-500/20 px-2.5 py-0.5 rounded-full border border-red-400/30 flex items-center space-x-1.5 shadow-2xs">
              <span>🇺🇸 UNITED STATES OF AMERICA K–12 EDUCATION SYSTEM</span>
            </span>
            <span className="text-xs text-sky-200 font-semibold">
              Common Core • NGSS • AP • SAT Readiness
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            Global Educational Parity: America • Africa • Europe • Asia
          </h1>
          <p className="text-slate-200 font-medium text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            From this app, <strong>a child in Africa receives the exact same education, standards, worksheets, and exams as any child in America, Europe, or Asia</strong> — completely free, requiring zero expensive equipment.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs font-bold">
          
          <button
            onClick={() => {
              setActiveTab('tiers');
              setSelectedResourceId(undefined);
            }}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'tiers' 
                ? 'bg-blue-700 text-white shadow-xs' 
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Flag className="w-3.5 h-3.5" />
            <span>US K–12 Framework & Tiers</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('exams');
            }}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'exams' 
                ? 'bg-blue-700 text-white shadow-xs' 
                : 'text-blue-900 bg-blue-50 hover:bg-blue-100/70 border border-blue-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>US Exams & Standardized Practice</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[10px]">
              {US_PRACTICE_RESOURCES.length}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('crosswalk');
              setSelectedResourceId(undefined);
            }}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'crosswalk' 
                ? 'bg-blue-700 text-white shadow-xs' 
                : 'text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Global Parity Crosswalk (4 Continents)</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('parity');
              setSelectedResourceId(undefined);
            }}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'parity' 
                ? 'bg-emerald-700 text-white shadow-xs' 
                : 'text-emerald-900 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>The Equity Manifesto ⚖️</span>
          </button>

          {onOpenCambridge && (
            <button
              onClick={() => {
                onClose();
                onOpenCambridge();
              }}
              className="ml-auto px-3 py-1.5 rounded-xl text-blue-700 hover:bg-blue-100/70 bg-white border border-blue-300 transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1 shrink-0"
            >
              <span>Switch to Cambridge & UK Hub 🇬🇧</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}

        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">

          {/* ============================================================== */}
          {/* TAB 1: US K-12 FRAMEWORK & TIERS */}
          {/* ============================================================== */}
          {activeTab === 'tiers' && (
            <div className="space-y-6">
              
              {/* Tier Selection Buttons */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select US K–12 Educational Tier:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {US_EDUCATION_TIERS.map(tier => {
                    const isSelected = selectedTierId === tier.id;
                    return (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-blue-700 text-white border-blue-800 shadow-md ring-2 ring-blue-300'
                            : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-1 ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'
                          }`}>
                            {tier.grades.split('(')[0]}
                          </span>
                          <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{tier.name.split(':')[0]}</h4>
                        </div>
                        <p className={`text-[10px] mt-2 font-semibold ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                          {tier.typicalAges}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Detailed View of Selected Tier */}
              <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">
                      {currentTier.grades} • {currentTier.typicalAges}
                    </span>
                    <h2 className="text-lg sm:text-2xl font-black font-['Outfit'] text-slate-900 mt-1">
                      {currentTier.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-3xl">
                      {currentTier.overview}
                    </p>
                  </div>
                </div>

                {/* Key Standards Frameworks Badges */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Governing US Standards:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {currentTier.keyStandardsFrameworks.map((fw, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold shadow-2xs">
                        ✓ {fw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Subjects Grid */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Core Academic Subjects & Sample Standards:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentTier.coreSubjects.map((subj, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-xs sm:text-sm text-slate-900">{subj.subject}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {subj.description}
                        </p>
                        <div className="pt-2 border-t border-slate-100 space-y-1">
                          {subj.keyStandards.map((st, j) => (
                            <div key={j} className="text-[11px] text-blue-900 font-medium flex items-start space-x-1">
                              <span className="text-blue-500 font-bold">•</span>
                              <span>{st}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessments & Carnegie Credit notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                    <span className="font-bold text-amber-900 block mb-1">
                      📊 Official US Standardized Tests:
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {currentTier.standardizedAssessments}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                    <span className="font-bold text-emerald-900 block mb-1">
                      🌍 African Home Academy Parity Advantage:
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {currentTier.etwPhilosophyConnection}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: US EXAMS & STANDARDIZED PRACTICE PAPERS */}
          {/* ============================================================== */}
          {activeTab === 'exams' && (
            <div className="space-y-6">
              
              {!selectedResource ? (
                /* Resource List */
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-sm text-blue-950 font-['Outfit']">
                        Authentic United States Standardized Test Papers & Worksheets
                      </h3>
                      <p className="text-xs text-blue-800/80 mt-0.5 leading-relaxed">
                        Modeled directly on <strong>Common Core (SBAC/PARCC)</strong>, <strong>Next Generation Science Standards (NGSS)</strong>, and <strong>College Board AP Exams</strong>. Complete with scoring rubrics and step-by-step teacher explanations.
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-xs shrink-0">
                      Standardized Test Vault
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {US_PRACTICE_RESOURCES.map(res => (
                      <div 
                        key={res.id}
                        className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 text-blue-900 font-mono">
                              {res.standardCode.split('&')[0]}
                            </span>
                            <span className="text-xs text-slate-500 font-semibold">
                              {res.gradeLevel}
                            </span>
                          </div>

                          <h4 className="font-bold text-sm text-slate-900 font-['Outfit'] line-clamp-2">
                            {res.title}
                          </h4>

                          <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                            {res.overview}
                          </p>

                          <div className="mt-4 flex items-center space-x-3 text-xs text-slate-500">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{res.estimatedMinutes} min</span>
                            </span>
                            <span className="flex items-center space-x-1 font-semibold text-blue-700">
                              <Award className="w-3.5 h-3.5" />
                              <span>{res.totalPoints} points</span>
                            </span>
                          </div>
                        </div>

                        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => {
                              setSelectedResourceId(res.id);
                              resetExam(res.estimatedMinutes);
                            }}
                            className="w-full px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center space-x-1.5 shadow-xs"
                          >
                            <span>Open Practice Exam & Worksheet</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Active Exam Question Viewer */
                <div className="space-y-5 animate-in fade-in duration-150">
                  
                  {/* Top Bar with Back and Print */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                    <button
                      onClick={() => setSelectedResourceId(undefined)}
                      className="text-xs font-bold text-blue-700 hover:underline flex items-center space-x-1 cursor-pointer"
                    >
                      <span>← Back to US Exam List</span>
                    </button>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handlePrint}
                        className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center space-x-1.5 cursor-pointer shadow-2xs"
                      >
                        <Printer className="w-3.5 h-3.5 text-slate-500" />
                        <span>Print Worksheet / PDF</span>
                      </button>

                      <div className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold shadow-2xs">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        <span>
                          {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Exam Paper Header */}
                  <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 text-white space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-white">
                        {selectedResource.standardsFramework}
                      </span>
                      <span className="text-xs text-sky-200 font-semibold">
                        {selectedResource.gradeLevel} • {selectedResource.totalPoints} Points Total
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold font-['Outfit'] text-white">
                      {selectedResource.title}
                    </h2>
                    
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {selectedResource.overview}
                    </p>
                  </div>

                  {/* Question Cards */}
                  <div className="space-y-4">
                    {selectedResource.questions.map((q) => {
                      const isAnswerRevealed = Boolean(showAnswer[q.number]);
                      const currentSelected = userAnswers[q.number];

                      return (
                        <div key={q.number} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                          
                          <div className="flex items-start justify-between gap-3">
                            <span className="px-2.5 py-1 rounded-xl bg-blue-100 text-blue-900 text-xs font-black shrink-0">
                              Question {q.number} ({q.points} pts)
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              Standard: {q.standardTested}
                            </span>
                          </div>

                          <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                            {q.question}
                          </p>

                          {/* Options if Multiple Choice */}
                          {q.options && q.options.length > 0 && (
                            <div className="space-y-2 pt-1">
                              {q.options.map((opt, optIdx) => {
                                const isChecked = currentSelected === opt;
                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => handleAnswerSelect(q.number, opt)}
                                    className={`w-full p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                                      isChecked
                                        ? 'bg-blue-50 border-blue-500 text-blue-950 font-bold ring-1 ring-blue-300'
                                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                                    }`}
                                  >
                                    <span>{opt}</span>
                                    {isChecked && <Check className="w-4 h-4 text-blue-600" />}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {/* Reveal Answer & Mark Scheme */}
                          <div className="pt-2 flex items-center justify-between">
                            <button
                              onClick={() => toggleShowAnswer(q.number)}
                              className="text-xs font-bold text-blue-600 hover:underline cursor-pointer flex items-center space-x-1"
                            >
                              <span>{isAnswerRevealed ? 'Hide Official US Answer Key' : 'Reveal Official Answer & Scoring Rubric'}</span>
                            </button>
                          </div>

                          {/* Revealed Explanation */}
                          {isAnswerRevealed && (
                            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-2 animate-in fade-in duration-150">
                              <p className="font-bold text-emerald-950">
                                ✓ Official Answer: <span className="underline">{q.correctAnswer}</span>
                              </p>
                              <p className="text-slate-700 leading-relaxed">
                                <strong>Rationale: </strong>{q.answerExplanation}
                              </p>
                              <p className="text-emerald-800 text-[11px] bg-white p-2 rounded-lg border border-emerald-200">
                                💡 <strong>Teacher / Parent Tip: </strong>{q.teacherTip}
                              </p>
                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>

                </div>
              )}

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: GLOBAL PARITY CROSSWALK */}
          {/* ============================================================== */}
          {activeTab === 'crosswalk' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div>
                  <h3 className="font-black text-sm text-blue-950 font-['Outfit']">
                    Universal Grade & Standards Alignment (America • Europe • Asia • Africa)
                  </h3>
                  <p className="text-xs text-blue-900/80 mt-0.5 leading-relaxed">
                    A child in Africa can trace their exact academic grade level to the United States, United Kingdom, Cambridge International, and the International Baccalaureate (IB).
                  </p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-blue-700 text-white font-bold text-xs shadow-xs shrink-0">
                  Grade K–12 Crosswalk
                </span>
              </div>

              {/* Crosswalk Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider font-extrabold">
                    <tr>
                      <th className="p-3">🇺🇸 US Grade Level</th>
                      <th className="p-3">Typical Age</th>
                      <th className="p-3">🇬🇧 Cambridge Pathway</th>
                      <th className="p-3">🇬🇧 UK Key Stage</th>
                      <th className="p-3">🌐 IB Programme</th>
                      <th className="p-3">Key Academic Milestone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white font-medium">
                    {US_GRADE_LEVEL_CROSSWALK.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-bold text-blue-900 whitespace-nowrap">
                          {row.usGrade}
                        </td>
                        <td className="p-3 text-slate-500 whitespace-nowrap">
                          {row.typicalAge}
                        </td>
                        <td className="p-3 text-slate-800">
                          {row.cambridgePathway}
                        </td>
                        <td className="p-3 text-slate-700">
                          {row.ukKeyStage}
                        </td>
                        <td className="p-3 text-emerald-800 font-semibold">
                          {row.ibProgramme}
                        </td>
                        <td className="p-3 text-slate-600">
                          {row.keyMilestone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 4: THE EQUITY MANIFESTO */}
          {/* ============================================================== */}
          {activeTab === 'parity' && (
            <div className="space-y-6">
              
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white space-y-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Scale className="w-6 h-6 text-amber-300" />
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                    THE GLOBAL EDUCATION EQUALITY MANIFESTO
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black font-['Outfit']">
                  "A Child in Africa Should Receive the Same Education as Any Child in America, Europe, or Asia."
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-3xl">
                  Geographic location, family income, or national borders must never dictate the ceiling of a human child’s intellect. Educate the World guarantees that the concepts, experiments, books, and exams taught in our 20-minute daily missions are identical in academic depth to the elite private academies of Boston, Oxford, Geneva, and Singapore.
                </p>
              </div>

              {/* 4 Pillars of Parity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🪙</span>
                    <h4 className="font-bold text-sm text-slate-900">1. Zero Cost & Complete Offline Freedom</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    While elite boarding schools charge $40,000 to $65,000 per year, Educate the World delivers the complete K–12 Common Core, Cambridge, and NGSS progression for zero fees. Every lesson works on 2G/3G low-data devices and can be printed or shared via WhatsApp.
                  </p>
                </div>

                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🔬</span>
                    <h4 className="font-bold text-sm text-slate-900">2. Empirical Labs Using Zero-Cost Household Materials</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    A child does not need a $100,000 glass laboratory to understand physical science. Gravity, filtration, stoichiometry, yeast fermentation, and thermal friction are empirically proven using empty water bottles, sand, charcoal, beans, and cooking flour.
                  </p>
                </div>

                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📚</span>
                    <h4 className="font-bold text-sm text-slate-900">3. Universal Standards & Master Authors</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Our library integrates the world’s greatest literature — from Chinua Achebe and C.S. Lewis to The Holy Bible (New Living Translation & The Message by Eugene Peterson), paired with Khan Academy, PhET simulations, MIT OpenCourseWare, and Cambridge past papers.
                  </p>
                </div>

                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🌱</span>
                    <h4 className="font-bold text-sm text-slate-900">4. UN Sustainable Development Goals (SDGs) Action</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Education is not merely abstract memorization. Every single lesson includes an authentic World Changer community mission aligned with the United Nations 17 SDGs — solving clean water, food security, zero waste, and peace in their real village or city.
                  </p>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Educate The World Initiative • Universal Educational Parity: Africa • America • Europe • Asia</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close US & Global Hub
          </button>
        </div>

      </div>
    </div>
  );
};
