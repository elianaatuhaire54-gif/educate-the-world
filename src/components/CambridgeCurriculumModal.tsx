import React, { useState, useEffect } from 'react';
import { 
  X, 
  GraduationCap, 
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
  TrendingUp,
  School,
  FileText,
  Search,
  PenTool,
  Clock,
  CheckCircle,
  BookMarked
} from 'lucide-react';
import { 
  CAMBRIDGE_PATHWAY_TIERS, 
  INTERNATIONAL_EQUIVALENCE_MAPPINGS, 
  CambridgePathwayTier 
} from '../data/internationalCurriculaData';
import { 
  CAMBRIDGE_RESOURCES, 
  CAMBRIDGE_RESOURCE_FILTERS, 
  CAMBRIDGE_STAGE_FILTERS, 
  CambridgeResourceItem 
} from '../data/cambridgeResourcesData';
import { CambridgeResourceViewer } from './CambridgeResourceViewer';
import { ChildProfile, AgeBand } from '../types/curriculum';

interface CambridgeCurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile?: ChildProfile;
  initialTab?: 'examVault' | 'pathway' | 'crosswalk' | 'syllabuses' | 'homeAdvantage';
  initialResourceId?: string;
  onOpenUsCurriculum?: () => void;
}

export const CambridgeCurriculumModal: React.FC<CambridgeCurriculumModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  initialTab = 'examVault',
  initialResourceId,
  onOpenUsCurriculum
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('cambridge-primary');
  const [activeTab, setActiveTab] = useState<'examVault' | 'pathway' | 'crosswalk' | 'syllabuses' | 'homeAdvantage'>(initialTab);
  
  // Cambridge Resources Vault state
  const [selectedResourceId, setSelectedResourceId] = useState<string | undefined>(initialResourceId);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStage, setFilterStage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
    if (initialResourceId) {
      setSelectedResourceId(initialResourceId);
    }
  }, [initialTab, initialResourceId]);

  if (!isOpen) return null;

  const currentTier = CAMBRIDGE_PATHWAY_TIERS.find(t => t.id === selectedTierId) || CAMBRIDGE_PATHWAY_TIERS[1];
  const selectedResource = CAMBRIDGE_RESOURCES.find(r => r.id === selectedResourceId);

  // Filter resources
  const filteredResources = CAMBRIDGE_RESOURCES.filter(res => {
    const matchesType = filterType === 'all' || res.type === filterType;
    const matchesStage = filterStage === 'all' || res.pathwayTier.toLowerCase().includes(filterStage.toLowerCase());
    const matchesQuery = !searchQuery.trim() || 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.syllabusCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.keyTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      res.learningObjectives.some(o => o.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesType && matchesStage && matchesQuery;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-blue-200 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900 text-white p-5 sm:p-6 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sky-300 bg-sky-400/20 px-2.5 py-0.5 rounded-full border border-sky-300/30 flex items-center space-x-1">
              <School className="w-3.5 h-3.5" />
              <span>CAMBRIDGE ASSESSMENT INTERNATIONAL EDUCATION (CAIE)</span>
            </span>
            <span className="text-xs text-sky-200 font-medium">Official Exam Papers & Worksheets</span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            Cambridge Pathway & Official Curricula Resource Hub
          </h1>
          <p className="text-sky-200 font-medium text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Real Cambridge <strong>worksheets, Checkpoint test papers, IGCSE & A-Level examinations, and master revision notes</strong> with step-by-step mark schemes and examiner tips.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs font-bold">
          
          <button
            onClick={() => {
              setActiveTab('examVault');
              setSelectedResourceId(undefined);
            }}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'examVault' 
                ? 'bg-blue-600 text-white shadow-xs' 
                : 'text-blue-900 hover:bg-blue-100/70 bg-blue-50/80 border border-blue-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Exams, Worksheets & Notes</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[10px]">
              {CAMBRIDGE_RESOURCES.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('pathway')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'pathway' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>5 Cambridge Pathway Tiers</span>
          </button>
          
          <button
            onClick={() => setActiveTab('crosswalk')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'crosswalk' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Cambridge • IB • UK Crosswalk</span>
          </button>

          <button
            onClick={() => setActiveTab('syllabuses')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'syllabuses' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Cambridge Syllabus Codes Index</span>
          </button>

          <button
            onClick={() => setActiveTab('homeAdvantage')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'homeAdvantage' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The At-Home Advantage</span>
          </button>

          <button
            onClick={handlePrint}
            className="ml-auto hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 cursor-pointer"
            title="Print Cambridge Alignment Report"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Current Page</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* ============================================================== */}
          {/* TAB 0: CAMBRIDGE EXAMS, TEST PAPERS, WORKSHEETS & NOTES VAULT */}
          {/* ============================================================== */}
          {activeTab === 'examVault' && (
            <div>
              {selectedResource ? (
                <CambridgeResourceViewer 
                  resource={selectedResource}
                  currentProfile={currentProfile}
                  onBack={() => setSelectedResourceId(undefined)}
                />
              ) : (
                <div className="space-y-6">
                  
                  {/* Banner Spotlight */}
                  <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
                          Cambridge Official Repository
                        </span>
                        <span className="text-xs text-sky-200">
                          {CAMBRIDGE_RESOURCES.length} Interactive Papers & Notes
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black font-['Outfit']">
                        Real Cambridge Worksheets, Exams & Master Notes
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                        Practice real Cambridge Primary & Lower Secondary Checkpoint papers, IGCSE past exam questions, authentic mark schemes with M (Method) & A (Accuracy) marks, and high-yield formula notes.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <button
                        onClick={() => setSelectedResourceId('cambridge-pri-checkpoint-math-p1')}
                        className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition-all cursor-pointer shadow-md flex items-center space-x-1.5"
                      >
                        <PenTool className="w-3.5 h-3.5" />
                        <span>Take Checkpoint Math Paper</span>
                      </button>
                    </div>
                  </div>

                  {/* Filters & Search Bar */}
                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      
                      {/* Search Box */}
                      <div className="relative flex-1">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search Cambridge papers, syllabus code (0096, 0580, 0610, 9709), or topic..."
                          className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                        />
                      </div>

                      {/* Stage Filter */}
                      <div className="shrink-0 flex items-center space-x-1.5">
                        <span className="text-xs font-bold text-slate-500 hidden sm:inline">Stage:</span>
                        <select
                          value={filterStage}
                          onChange={(e) => setFilterStage(e.target.value)}
                          className="text-xs font-bold bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        >
                          {CAMBRIDGE_STAGE_FILTERS.map((st) => (
                            <option key={st.id} value={st.id}>
                              {st.label}
                            </option>
                          ))}
                        </select>
                      </div>

                    </div>

                    {/* Resource Type Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
                      {CAMBRIDGE_RESOURCE_FILTERS.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setFilterType(f.id)}
                          className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                            filterType === f.id
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Resource Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredResources.map((res) => {
                      const isExam = res.type === 'exam' || res.type === 'test_paper';
                      const isWorksheet = res.type === 'worksheet';
                      const isNotes = res.type === 'notes';

                      return (
                        <div
                          key={res.id}
                          className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
                        >
                          <div>
                            {/* Card Header Badges */}
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                              <div className="flex items-center space-x-1.5">
                                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                                  isExam 
                                    ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                                    : isWorksheet 
                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                                    : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                                }`}>
                                  {isExam ? 'Official Exam Paper' : isWorksheet ? 'Real Worksheet' : 'Master Revision Notes'}
                                </span>

                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                                  Code {res.syllabusCode}
                                </span>
                              </div>

                              <span className="text-[11px] font-bold text-slate-500">
                                {res.stageCode}
                              </span>
                            </div>

                            {/* Title & Overview */}
                            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                              {res.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                              {res.overview}
                            </p>

                            {/* Key Topics Badges */}
                            <div className="flex flex-wrap gap-1 mt-3">
                              {res.keyTopics.slice(0, 3).map((topic, i) => (
                                <span key={i} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                                  {topic}
                                </span>
                              ))}
                              {res.keyTopics.length > 3 && (
                                <span className="text-[10px] font-medium bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md">
                                  +{res.keyTopics.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Card Footer: Metadata & Action Button */}
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                            <div className="flex items-center space-x-3 text-xs text-slate-500">
                              {res.durationMinutes > 0 && (
                                <span className="flex items-center space-x-1 font-medium">
                                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                                  <span>{res.durationMinutes} min</span>
                                </span>
                              )}
                              {res.totalMarks > 0 && (
                                <span className="flex items-center space-x-1 font-medium text-blue-700">
                                  <Award className="w-3.5 h-3.5" />
                                  <span>{res.totalMarks} marks</span>
                                </span>
                              )}
                            </div>

                            <button
                              onClick={() => setSelectedResourceId(res.id)}
                              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 shadow-xs group-hover:scale-105"
                            >
                              <span>{isExam ? 'Open & Take Exam' : isWorksheet ? 'Open Worksheet' : 'Read Notes'}</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>

                        </div>
                      );
                    })}
                  </div>

                  {filteredResources.length === 0 && (
                    <div className="p-8 text-center bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                      <p className="text-sm font-bold text-slate-600">No Cambridge papers matched your filter criteria.</p>
                      <button
                        onClick={() => {
                          setFilterType('all');
                          setFilterStage('all');
                          setSearchQuery('');
                        }}
                        className="mt-3 px-4 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-bold cursor-pointer"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  )}

                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 1: 5 CAMBRIDGE PATHWAY TIERS */}
          {/* ============================================================== */}
          {activeTab === 'pathway' && (
            <div className="space-y-6">
              
              {/* Cambridge Pathway Tier Selector */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Cambridge Pathway Stage:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {CAMBRIDGE_PATHWAY_TIERS.map((tier) => {
                    const isSelected = selectedTierId === tier.id;
                    return (
                      <button
                        key={tier.id}
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-700 shadow-md ring-2 ring-blue-400'
                            : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-1 ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'
                          }`}>
                            {tier.stageCode}
                          </span>
                          <h4 className="font-bold text-xs sm:text-sm line-clamp-1">{tier.name}</h4>
                        </div>
                        <p className={`text-[10px] mt-2 font-medium ${isSelected ? 'text-white/80' : 'text-slate-400'}`}>
                          {tier.ages}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tier Details Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border border-blue-200">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4 pb-4 border-b border-blue-200/80">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                      Official Cambridge Framework
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-['Outfit'] mt-1">
                      {currentTier.name} ({currentTier.stageCode})
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                      {currentTier.description}
                    </p>
                  </div>

                  <div className="text-xs bg-white p-3 rounded-2xl border border-blue-200 shadow-xs shrink-0 max-w-xs">
                    <span className="font-bold text-blue-900 block mb-0.5">Assessment & Checkpoints:</span>
                    <span className="text-slate-600">{currentTier.checkpoints}</span>
                  </div>
                </div>

                {/* Core Cambridge Subjects for this Tier */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>Curricular Subjects & Cambridge Key Standards:</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {currentTier.coreSubjects.map((sub, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-xs sm:text-sm text-slate-900">{sub.name}</h5>
                          {sub.code && (
                            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                              Code {sub.code}
                            </span>
                          )}
                        </div>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {sub.keyThemes.map((th, idx) => (
                            <li key={idx} className="flex items-start space-x-1.5">
                              <span className="text-blue-500 font-bold">•</span>
                              <span>{th}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Educate the World Philosophy Bridge */}
                <div className="mt-5 p-4 rounded-2xl bg-white border border-amber-200/80 shadow-xs flex items-start space-x-3">
                  <span className="p-2 rounded-xl bg-amber-100 text-amber-800 text-lg shrink-0">
                    🌍
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                      Educate the World Bridge
                    </span>
                    <p className="text-xs font-medium text-slate-800 leading-relaxed mt-0.5">
                      {currentTier.etwPhilosophyBridge}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: CROSSWALK (CAMBRIDGE • IB • UK NATIONAL) */}
          {/* ============================================================== */}
          {activeTab === 'crosswalk' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div>
                  <h4 className="font-extrabold text-sm text-sky-950 font-['Outfit']">
                    Side-by-Side International Equivalence Crosswalk
                  </h4>
                  <p className="text-xs text-sky-900/80 mt-0.5 leading-relaxed">
                    Compare how Educate the World learning missions satisfy the demanding standards of <strong>Cambridge International</strong>, the <strong>International Baccalaureate (IB)</strong>, and the <strong>UK National Curriculum</strong>.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-xl bg-sky-600 text-white font-bold text-xs shadow-xs">
                    Global Standard Equivalent
                  </span>
                  {onOpenUsCurriculum && (
                    <button
                      onClick={() => {
                        onClose();
                        onOpenUsCurriculum();
                      }}
                      className="px-3 py-1 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center space-x-1"
                    >
                      <span>🇺🇸 USA K–12 & AP Crosswalk</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {INTERNATIONAL_EQUIVALENCE_MAPPINGS.map((mapItem, idx) => (
                  <div key={idx} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                          {mapItem.domainName} • Ages {mapItem.ageBand}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 mt-1">
                          {mapItem.etwModuleFocus}
                        </h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      
                      {/* Cambridge Box */}
                      <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-900">
                              Cambridge Pathway
                            </span>
                            <span className="text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded text-blue-700 border border-blue-200">
                              {mapItem.cambridge.syllabusCode}
                            </span>
                          </div>
                          <h5 className="font-bold text-xs text-blue-950">{mapItem.cambridge.subject}</h5>
                          <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                            {mapItem.cambridge.learningObjective}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono font-medium text-blue-700 mt-2 block">
                          Ref: {mapItem.cambridge.sampleObjectiveCode}
                        </span>
                      </div>

                      {/* IB Box */}
                      <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-900">
                              International Baccalaureate
                            </span>
                            <span className="text-[10px] font-bold bg-white px-1.5 py-0.5 rounded text-emerald-700 border border-emerald-200">
                              {mapItem.ibProgramme.programme}
                            </span>
                          </div>
                          <h5 className="font-bold text-xs text-emerald-950">{mapItem.ibProgramme.transdisciplinaryTheme}</h5>
                          <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                            {mapItem.ibProgramme.inquiryFocus}
                          </p>
                        </div>
                        <span className="text-[10px] font-medium text-emerald-700 mt-2 block">
                          Transdisciplinary Unit
                        </span>
                      </div>

                      {/* UK National Curriculum Box */}
                      <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-900">
                              UK National Standard
                            </span>
                            <span className="text-[10px] font-bold bg-white px-1.5 py-0.5 rounded text-purple-700 border border-purple-200">
                              {mapItem.ukNationalCurriculum.keyStage}
                            </span>
                          </div>
                          <h5 className="font-bold text-xs text-purple-950">Statutory Curriculum Topic</h5>
                          <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                            {mapItem.ukNationalCurriculum.statutoryTopic}
                          </p>
                        </div>
                        <span className="text-[10px] font-medium text-purple-700 mt-2 block">
                          DfE England Core Standard
                        </span>
                      </div>

                    </div>

                    {/* Practical At-Home Advantage */}
                    <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-950 flex items-start space-x-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-900">The Educate the World At-Home Reality: </span>
                        <span>{mapItem.practicalAtHomeAdvantage}</span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: CAMBRIDGE SYLLABUSES INDEX */}
          {/* ============================================================== */}
          {activeTab === 'syllabuses' && (
            <div className="space-y-6">
              
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                <h4 className="font-bold text-sm text-blue-900">Official Cambridge Syllabus Code Directory</h4>
                <p className="text-xs text-blue-800/80 mt-0.5">
                  Universal course codes assigned by Cambridge Assessment International Education (CAIE). Every Educate the World module aligns directly to these syllabuses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-blue-700 block">Cambridge Primary (Stages 1–6)</span>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">Primary English</span>
                      <span className="font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">0058</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">Primary Mathematics</span>
                      <span className="font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">0096</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">Primary Science</span>
                      <span className="font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">0097</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">Primary Global Perspectives</span>
                      <span className="font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">0838</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-slate-800">Primary Computing</span>
                      <span className="font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">0059</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-indigo-700 block">Cambridge Lower Secondary (Stages 7–9)</span>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">Lower Secondary English</span>
                      <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">0861</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">Lower Secondary Mathematics</span>
                      <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">0862</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">Lower Secondary Science</span>
                      <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">0893</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">Global Perspectives</span>
                      <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">1129</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-slate-800">Computing</span>
                      <span className="font-mono font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">0860</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 block">Cambridge IGCSE STEM</span>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">IGCSE Mathematics (Extended)</span>
                      <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">0580</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">IGCSE Biology</span>
                      <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">0610</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">IGCSE Chemistry</span>
                      <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">0620</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">IGCSE Physics</span>
                      <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">0625</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-slate-800">IGCSE Computer Science</span>
                      <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">0478</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-purple-700 block">Cambridge IGCSE Enterprise & Humanities</span>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">IGCSE Enterprise</span>
                      <span className="font-mono font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">0454</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">IGCSE Global Perspectives</span>
                      <span className="font-mono font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">0457</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">IGCSE Business Studies</span>
                      <span className="font-mono font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">0450</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">IGCSE Economics</span>
                      <span className="font-mono font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">0455</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-slate-800">IGCSE First Language English</span>
                      <span className="font-mono font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">0500</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-sky-700 block">Cambridge International AS & A Level</span>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">A Level Mathematics (Pure 1)</span>
                      <span className="font-mono font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">9709</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">A Level Physics</span>
                      <span className="font-mono font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">9702</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="font-medium text-slate-800">A Level Chemistry</span>
                      <span className="font-mono font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">9701</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="font-medium text-slate-800">A Level Economics</span>
                      <span className="font-mono font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded">9708</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 4: THE AT-HOME PRACTICAL ADVANTAGE */}
          {/* ============================================================== */}
          {activeTab === 'homeAdvantage' && (
            <div className="space-y-6">
              
              <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 text-white shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  The Educate the World Breakthrough
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-['Outfit']">
                  How We Deliver Cambridge Excellence Without Elite Private School Costs
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                  Elite international schools charge thousands of dollars each term. Yet, true scientific understanding and mathematical capability don’t require air-conditioned halls—they require <strong>curiosity, empirical observation, guided parent scaffolding, and daily consistency</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center space-x-2 text-rose-600 font-bold text-xs uppercase mb-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span>Traditional Classroom Pitfalls</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <li>• Abstract diagrams in expensive foreign textbooks with zero tactile touch.</li>
                    <li>• 40+ children per teacher, resulting in passive cramming for multiple-choice tests.</li>
                    <li>• High tuition barriers ($3,000–$15,000 USD/year) leaving 95% of families excluded.</li>
                    <li>• Disconnection from the child’s local culture, language, and community challenges.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-xs">
                  <div className="flex items-center space-x-2 text-emerald-800 font-bold text-xs uppercase mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>The Educate the World At-Home Standard</span>
                  </div>
                  <ul className="space-y-2 text-xs text-emerald-950 leading-relaxed">
                    <li>• <strong>Hands-on Empirical Labs:</strong> Children build real water filters, test soil drainage, and bake with kitchen fractions.</li>
                    <li>• <strong>1-on-1 Parent Scaffolding:</strong> Guided 5-minute parent cheat sheets give every child personalized mentorship.</li>
                    <li>• <strong>100% Free & Low-Bandwidth:</strong> Runs on any smartphone or basic browser; printable offline weekly packs.</li>
                    <li>• <strong>Real World Impact:</strong> Every lesson connects international theory to community service and local enterprise.</li>
                  </ul>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© Educate the World Initiative • Official Cambridge Assessment International Education Alignment & Examination Repository</p>
          <div className="flex items-center space-x-2">
            {activeTab === 'examVault' && !selectedResourceId && (
              <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded-md">
                {filteredResources.length} papers available
              </span>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close Cambridge Hub
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
