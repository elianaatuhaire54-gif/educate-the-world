import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Calculator, 
  FlaskConical, 
  Cpu, 
  Globe, 
  TrendingUp, 
  Heart, 
  Wrench, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Printer, 
  ArrowRight, 
  Lightbulb,
  Compass,
  Target,
  ShieldCheck,
  Star,
  Library
} from 'lucide-react';
import { 
  SCOPE_DOMAINS, 
  COMPETENCY_MATRIX, 
  MASTERY_LEVELS, 
  IDEAL_18_YEAR_OLD_GRADUATE, 
  EDUCATIONAL_EQUATION,
  ScopeDomain
} from '../data/scopeAndSequenceData';
import { ChildProfile, AgeBand } from '../types/curriculum';

interface ScopeAndSequenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile?: ChildProfile;
  onOpenBooksAndResources?: () => void;
}

export const ScopeAndSequenceModal: React.FC<ScopeAndSequenceModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onOpenBooksAndResources
}) => {
  const [activeTab, setActiveTab] = useState<'domains' | 'mastery' | 'matrix' | 'capstones' | 'graduate' | 'equation'>('domains');
  const [selectedDomainId, setSelectedDomainId] = useState<string>('language-communication');
  const [selectedAgeKey, setSelectedAgeKey] = useState<'3-5' | '6-8' | '9-11' | '12-14' | '15-17' | '18+'>('6-8');

  if (!isOpen) return null;

  const currentDomain = SCOPE_DOMAINS.find(d => d.id === selectedDomainId) || SCOPE_DOMAINS[0];
  const currentStage = currentDomain.stages[selectedAgeKey];

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      default: return <GraduationCap className="w-5 h-5" />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-slate-200 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-6 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-300/30">
              INTERNATIONAL CURRICULUM SCOPE & SEQUENCE v1.0
            </span>
            <span className="text-xs text-slate-300 font-medium">Ages 3–18+</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            Educate the World Initiative
          </h1>
          <p className="text-amber-200 font-bold text-xs sm:text-sm tracking-widest mt-1">
            MOTTO: LEARN. THINK. CREATE. SERVE. TRANSFORM.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs font-bold">
          <button
            onClick={() => setActiveTab('domains')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'domains' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>10 Curriculum Domains</span>
          </button>
          <button
            onClick={() => setActiveTab('mastery')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'mastery' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>5-Level Mastery Model</span>
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'matrix' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Competency Matrix (12)</span>
          </button>
          <button
            onClick={() => setActiveTab('capstones')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'capstones' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Integration & Capstones</span>
          </button>
          <button
            onClick={() => setActiveTab('graduate')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'graduate' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Ideal 18-Year Graduate</span>
          </button>
          <button
            onClick={() => setActiveTab('equation')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'equation' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Educational Equation</span>
          </button>

          <button
            onClick={handlePrint}
            className="ml-auto hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 cursor-pointer"
            title="Print Scope & Sequence"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: 10 CURRICULUM DOMAINS */}
          {activeTab === 'domains' && (
            <div className="space-y-6">
              
              {/* How to Read This Curriculum Banner */}
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md inline-block mb-1">
                    How to Read This Curriculum
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-amber-950">
                    The 5 Stages of Deep Learning: Exposure → Foundation → Understanding → Application → Mastery
                  </h4>
                  <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                    The curriculum does not treat education as disconnected subjects. Learners repeatedly encounter core ideas with escalating depth. (e.g. Money: Age 5 "What is money?" → Age 8 "Saving in jars" → Age 11 "Family budget" → Age 14 "Interest & credit" → Age 17 "Enterprise & markets" → Adult "Responsible wealth").
                  </p>
                </div>
                <div className="text-xs font-extrabold text-amber-900 bg-white px-3 py-2 rounded-xl border border-amber-200 shadow-xs whitespace-nowrap shrink-0">
                  🌱 Curiosity → 🚀 Contribution
                </div>
              </div>

              {/* Domain Grid Selection */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select a Domain (1 to 10)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {SCOPE_DOMAINS.map((domain) => {
                    const isSelected = selectedDomainId === domain.id;
                    return (
                      <button
                        key={domain.id}
                        onClick={() => setSelectedDomainId(domain.id)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-indigo-400'
                            : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`p-1.5 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'}`}>
                            {getDomainIcon(domain.icon)}
                          </span>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                            isSelected ? 'bg-amber-400 text-slate-900' : 'bg-slate-100 text-slate-500'
                          }`}>
                            #{domain.number}
                          </span>
                        </div>
                        <p className="font-bold text-xs sm:text-sm line-clamp-1">{domain.title}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Domain Detail Header */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-xl bg-indigo-600 text-white">
                        {getDomainIcon(currentDomain.icon)}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                          Domain #{currentDomain.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 font-['Outfit']">
                          {currentDomain.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 italic">
                      "{currentDomain.tagline}"
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    {currentDomain.progressionNote && (
                      <div className="text-[11px] font-semibold text-indigo-900 bg-white/90 border border-indigo-200 px-3 py-1.5 rounded-xl max-w-sm">
                        <span className="font-bold text-indigo-700 block">Progression:</span>
                        {currentDomain.progressionNote}
                      </div>
                    )}

                    {onOpenBooksAndResources && (
                      <button
                        onClick={() => {
                          onClose();
                          onOpenBooksAndResources();
                        }}
                        className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-xs shrink-0"
                        title="View free digital resource centers, open textbooks and curated books for this subject"
                      >
                        <Library className="w-3.5 h-3.5 text-indigo-200" />
                        <span>All Subject Centers & Books 📚</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Age Stage Selector Tabs */}
                <div className="border-t border-indigo-100 pt-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Select Developmental Age Stage:
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {(['3-5', '6-8', '9-11', '12-14', '15-17', '18+'] as const).map((ageKey) => {
                      const stage = currentDomain.stages[ageKey];
                      const isSelected = selectedAgeKey === ageKey;
                      return (
                        <button
                          key={ageKey}
                          onClick={() => setSelectedAgeKey(ageKey)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm ring-1 ring-indigo-400'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-indigo-50/50'
                          }`}
                        >
                          <span className="block text-[10px] font-bold uppercase tracking-wider opacity-80">
                            {stage.stageName}
                          </span>
                          <span className="font-extrabold text-xs block">
                            {stage.ageLabel}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Stage Outcome & Project Breakdown */}
              {currentStage && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  
                  {/* Focus Areas */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xs uppercase tracking-wider mb-2.5">
                      <Target className="w-4 h-4" />
                      <span>Curricular Focus Areas</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {currentStage.focusAreas.map((focus, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-indigo-500 font-bold">•</span>
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Competency Goals */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center space-x-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Learner Should Be Able To</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {currentStage.competencies.map((comp, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Capstone Project */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/90 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>Annual Capstone Project</span>
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-900 font-['Outfit'] mb-1">
                        {currentStage.capstoneProject.title}
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {currentStage.capstoneProject.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-amber-200/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                        Tangible Deliverable:
                      </span>
                      <span className="text-xs font-semibold text-amber-950 bg-white/80 px-2.5 py-1 rounded-lg inline-block border border-amber-200">
                        📦 {currentStage.capstoneProject.deliverable}
                      </span>
                    </div>
                  </div>

                </div>
              )}

            </div>
          )}

          {/* TAB 2: 5-LEVEL MASTERY MODEL */}
          {activeTab === 'mastery' && (
            <div className="space-y-6">
              <div className="p-5 rounded-3xl bg-indigo-50 border border-indigo-200">
                <h3 className="text-lg font-black text-slate-900 font-['Outfit']">
                  The Mastery Model: Evidence Over Grade Labels
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  The Educate the World curriculum does not simply ask: <em>"Did the child finish Grade 7?"</em> It assesses progressive capability across five verifiable levels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {MASTERY_LEVELS.map((m) => (
                  <div key={m.level} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-extrabold text-sm flex items-center justify-center mb-2">
                        {m.level}
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">{m.name}</h4>
                      <p className="text-xs font-semibold text-indigo-600 italic my-1">
                        "{m.quote}"
                      </p>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase">
                      Level {m.level} Passport Stamp
                    </div>
                  </div>
                ))}
              </div>

              {/* The Educate the World Portfolio */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Evidence of Capability
                </span>
                <h3 className="text-xl font-bold font-['Outfit']">
                  The Educate the World Learning Portfolio
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Every learner accumulates writing, artwork, experiments, inventions, business plans, community projects, and research papers. At age 18, the learner possesses something infinitely richer than a test transcript: <strong>tangible evidence of human capability</strong>.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-xs text-slate-200">
                  <div className="bg-white/10 p-2.5 rounded-xl">• Writing & Essays</div>
                  <div className="bg-white/10 p-2.5 rounded-xl">• Artwork & Artifacts</div>
                  <div className="bg-white/10 p-2.5 rounded-xl">• Science Experiments</div>
                  <div className="bg-white/10 p-2.5 rounded-xl">• Digital & App Inventions</div>
                  <div className="bg-white/10 p-2.5 rounded-xl">• Business Plans & P&L</div>
                  <div className="bg-white/10 p-2.5 rounded-xl">• Community Impact Reports</div>
                  <div className="bg-white/10 p-2.5 rounded-xl">• Public Speeches & Talks</div>
                  <div className="bg-white/10 p-2.5 rounded-xl">• Practical Carpentry / Garden</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: THE COMPETENCY MATRIX */}
          {activeTab === 'matrix' && (
            <div className="space-y-6">
              <div className="p-5 rounded-3xl bg-indigo-50 border border-indigo-200">
                <h3 className="text-lg font-black text-slate-900 font-['Outfit']">
                  The 12 Core Competencies Matrix
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Every major learning unit and project simultaneously develops multiple dimensions of capability. A single Clean Water Project, for instance, trains all 12 competencies at once.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {COMPETENCY_MATRIX.map((c, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center space-x-2 mb-1.5">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <h4 className="font-bold text-sm text-slate-900">{c.name}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {c.description}
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-[11px] text-indigo-900 bg-indigo-50/70 p-2 rounded-xl">
                      <strong className="text-indigo-700">Project Action:</strong> {c.exampleProjectApplication}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: INTEGRATION MODEL & CAPSTONES */}
          {activeTab === 'capstones' && (
            <div className="space-y-6">
              <div className="p-5 rounded-3xl bg-teal-50 border border-teal-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-200/60 px-2 py-0.5 rounded-md inline-block mb-1">
                  Interdisciplinary Learning
                </span>
                <h3 className="text-lg font-black text-slate-900 font-['Outfit']">
                  The Integrated Learning Project Model: Food, Water, Energy
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Subjects should not be taught in isolation. A single real-world theme like <strong>FOOD</strong> combines Biology, Chemistry, Math, Economics, Geography, Technology, Engineering, Entrepreneurship, Communication, and Ethics into one transformative mission.
                </p>
              </div>

              {/* The Food Matrix Example */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs">
                <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center space-x-2">
                  <span className="text-lg">🍲</span>
                  <span>Example Integrated Learning Matrix: "FOOD & SUSTENANCE"</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Biology</span>
                    <span className="text-slate-600">How seeds sprout and plants synthesize energy</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Chemistry</span>
                    <span className="text-slate-600">Nutritional vitamins, starch digestion & cooking heat</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Mathematics</span>
                    <span className="text-slate-600">Land area, crop spacing & harvest yield ratios</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Economics</span>
                    <span className="text-slate-600">Market supply & demand, seasonal pricing & inflation</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Geography</span>
                    <span className="text-slate-600">Soil fertility zones, rainfall patterns & transport</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Technology</span>
                    <span className="text-slate-600">Crop storage drying techniques & mobile market pricing</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Engineering</span>
                    <span className="text-slate-600">Low-cost drip irrigation using recycled bottles</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Enterprise</span>
                    <span className="text-slate-600">Processing raw groundnuts into packaged peanut paste</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Communication</span>
                    <span className="text-slate-600">Writing a farm-to-table food safety report</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">Ethics & Service</span>
                    <span className="text-slate-600">Addressing community child hunger and food waste</span>
                  </div>
                </div>
              </div>

              {/* Annual Capstones Progression */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900">
                  Annual Capstones: One Major Interdisciplinary Project Every Year
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                    <span className="text-[10px] font-bold uppercase text-amber-800">Ages 6–8</span>
                    <h5 className="font-bold text-xs text-amber-950 mt-1">Observe and Build</h5>
                    <p className="text-[11px] text-amber-900/80 mt-1">Build simple weather stations, garden beds, or pretend shops.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <span className="text-[10px] font-bold uppercase text-emerald-800">Ages 9–11</span>
                    <h5 className="font-bold text-xs text-emerald-950 mt-1">Investigate and Explain</h5>
                    <p className="text-[11px] text-emerald-900/80 mt-1">Design water filters, investigate local history, and run 5,000 UGX businesses.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200">
                    <span className="text-[10px] font-bold uppercase text-blue-800">Ages 12–14</span>
                    <h5 className="font-bold text-xs text-blue-950 mt-1">Research and Design</h5>
                    <p className="text-[11px] text-blue-900/80 mt-1">Build functional machines, investigate community challenges, and code applications.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200">
                    <span className="text-[10px] font-bold uppercase text-indigo-800">Ages 15–17</span>
                    <h5 className="font-bold text-xs text-indigo-950 mt-1">Create and Solve</h5>
                    <p className="text-[11px] text-indigo-900/80 mt-1">Launch real student enterprises, build tech solutions, and write comparative history.</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200">
                    <span className="text-[10px] font-bold uppercase text-purple-800">18+ Launch</span>
                    <h5 className="font-bold text-xs text-purple-950 mt-1">Implement and Evaluate</h5>
                    <p className="text-[11px] text-purple-900/80 mt-1">Deploy production ventures, civil initiatives, and publish original research.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: IDEAL 18-YEAR-OLD GRADUATE */}
          {activeTab === 'graduate' && (
            <div className="space-y-6">
              <div className="p-5 rounded-3xl bg-slate-900 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  Profile of the Graduate
                </span>
                <h3 className="text-xl font-bold font-['Outfit']">
                  The Ideal 18-Year-Old Educate the World Graduate
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  By completion of the core curriculum, the learner should not simply be an exam-taker, but a capable, ethical, creative world-changer equipped with these 16 holistic capabilities:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {IDEAL_18_YEAR_OLD_GRADUATE.map((g, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-indigo-600 font-bold text-sm mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Can {g.ability}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {g.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: THE EDUCATIONAL EQUATION */}
          {activeTab === 'equation' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  The Core Equation
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-['Outfit']">
                  The Educate the World Educational Equation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  How human capability is formed and channeled into community and national transformation:
                </p>

                {/* Equation Visual */}
                <div className="my-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15">
                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
                    {EDUCATIONAL_EQUATION.inputs.map((inp, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-2.5 py-1 rounded-lg bg-white/20 text-white">
                          {inp}
                        </span>
                        {idx < EDUCATIONAL_EQUATION.inputs.length - 1 && (
                          <span className="text-amber-400 text-sm">+</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="text-center my-4">
                    <span className="text-amber-300 font-extrabold text-2xl">=</span>
                  </div>

                  <div className="text-center">
                    <span className="inline-block px-5 py-2 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black text-sm sm:text-base shadow-lg">
                      🌟 {EDUCATIONAL_EQUATION.output}
                    </span>
                  </div>
                </div>

                {/* Impact Chain */}
                <div className="pt-4 border-t border-white/15">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-200 mb-2">
                    Human capability unlocks the continuous transformation chain:
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {EDUCATIONAL_EQUATION.impactChain.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-3 py-1.5 rounded-xl bg-white/15 font-semibold text-white">
                          {step}
                        </span>
                        {idx < EDUCATIONAL_EQUATION.impactChain.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* The Final Progression */}
              <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200">
                <h4 className="font-bold text-sm text-amber-950 mb-2">
                  The Final Developmental Journey
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-xs text-center font-bold">
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900">
                    Ages 3–5<br/><span className="text-amber-600 font-black">I DISCOVER</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900">
                    Ages 6–8<br/><span className="text-amber-600 font-black">I EXPLORE</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900">
                    Ages 9–11<br/><span className="text-amber-600 font-black">I UNDERSTAND</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900">
                    Ages 12–14<br/><span className="text-amber-600 font-black">I INVESTIGATE</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900">
                    Ages 15–17<br/><span className="text-amber-600 font-black">I CREATE</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900">
                    18+ Launch<br/><span className="text-amber-600 font-black">I CONTRIBUTE</span>
                  </div>
                </div>
                <p className="text-center font-extrabold text-xs text-amber-900 mt-4 tracking-wide">
                  Curiosity → Knowledge → Understanding → Competence → Creativity → Contribution.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© Educate the World Initiative • Scope & Sequence Standard v1.0</p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Scope & Sequence
          </button>
        </div>

      </div>
    </div>
  );
};
