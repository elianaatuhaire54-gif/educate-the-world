import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  ChevronDown, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Calculator, 
  FlaskConical, 
  BookOpen, 
  Cpu, 
  TrendingUp, 
  ShieldCheck,
  Sparkles,
  Link2
} from 'lucide-react';
import { LessonModule, AgeBand } from '../types/curriculum';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { 
  SUBJECT_PACK_DEFINITIONS, 
  SubjectPackId, 
  getLessonsForSubjectPack 
} from '../data/subjectPacksData';

interface SystematicLessonSelectorProps {
  currentProfileAgeBand?: AgeBand;
  completedLessonIds?: string[];
  activeLessonId?: string;
  onSelectLesson: (lesson: LessonModule) => void;
  onOpenSubjectPacksModal?: () => void;
  compact?: boolean;
}

export const SystematicLessonSelector: React.FC<SystematicLessonSelectorProps> = ({
  currentProfileAgeBand = '9-12',
  completedLessonIds = [],
  activeLessonId,
  onSelectLesson,
  onOpenSubjectPacksModal,
  compact = false
}) => {
  const [selectedPackId, setSelectedPackId] = useState<SubjectPackId | 'all'>('all');
  const [selectedAgeBand, setSelectedAgeBand] = useState<AgeBand | 'all'>(currentProfileAgeBand);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Filter lessons based on pack and age band
  const availableLessons = useMemo(() => {
    let list: LessonModule[] = [];
    if (selectedPackId === 'all') {
      list = [...CURRICULUM_MODULES];
    } else {
      list = getLessonsForSubjectPack(selectedPackId);
    }

    if (selectedAgeBand !== 'all') {
      list = list.filter(l => l.ageBand === selectedAgeBand);
    }

    // Always sort by sequenceOrder or dayOfYear for strict systematic learning progression!
    list.sort((a, b) => {
      const orderA = a.sequenceOrder ?? a.dayOfYear ?? 999;
      const orderB = b.sequenceOrder ?? b.dayOfYear ?? 999;
      return orderA - orderB;
    });

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(l => 
        l.title.toLowerCase().includes(q) ||
        l.categoryLabel.toLowerCase().includes(q) ||
        (l.prerequisiteTopic && l.prerequisiteTopic.toLowerCase().includes(q)) ||
        (l.integratedSubjectConnection?.connectionTitle.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedPackId, selectedAgeBand, searchQuery]);

  const activeLesson = useMemo(() => {
    if (activeLessonId) {
      return CURRICULUM_MODULES.find(m => m.id === activeLessonId);
    }
    return availableLessons[0] || CURRICULUM_MODULES[0];
  }, [activeLessonId, availableLessons]);

  const handleLessonChosen = (lesson: LessonModule) => {
    setIsOpen(false);
    onSelectLesson(lesson);
  };

  const getPackIcon = (id: SubjectPackId | 'all') => {
    switch (id) {
      case 'math': return <Calculator className="w-4 h-4 text-blue-500" />;
      case 'science': return <FlaskConical className="w-4 h-4 text-emerald-500" />;
      case 'language': return <BookOpen className="w-4 h-4 text-amber-500" />;
      case 'technology': return <Cpu className="w-4 h-4 text-purple-500" />;
      case 'finance': return <TrendingUp className="w-4 h-4 text-teal-600" />;
      case 'character': return <ShieldCheck className="w-4 h-4 text-rose-500" />;
      default: return <Layers className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <div className={`relative w-full ${compact ? '' : 'bg-white rounded-2xl border border-slate-200/80 shadow-xs p-3 sm:p-4'}`}>
      {!compact && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800">
                Systematic Curriculum Progression Selector
              </h3>
              <p className="text-[11px] text-slate-500">
                Lessons ordered in strict prerequisite sequence (e.g. Differentiation BEFORE Integration!)
              </p>
            </div>
          </div>

          {onOpenSubjectPacksModal && (
            <button
              onClick={onOpenSubjectPacksModal}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 transition-colors cursor-pointer self-start sm:self-auto"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Explore 6 Subject Packs</span>
            </button>
          )}
        </div>
      )}

      {/* Filter controls row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
        {/* Subject Pack Dropdown */}
        <div className="relative">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Subject Pack (Unmixed Streams)
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-2.5 pointer-events-none">
              {getPackIcon(selectedPackId)}
            </span>
            <select
              value={selectedPackId}
              onChange={(e) => setSelectedPackId(e.target.value as SubjectPackId | 'all')}
              className="w-full pl-8 pr-8 py-1.5 text-xs font-medium rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
            >
              <option value="all">🌐 All Subjects (365-Day Year Progression)</option>
              {SUBJECT_PACK_DEFINITIONS.map(pack => (
                <option key={pack.id} value={pack.id}>
                  {pack.shortName} ({pack.tagline.slice(0, 45)}...)
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
          </div>
        </div>

        {/* Age Band Selector */}
        <div className="relative">
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
            Learner Stage / Age
          </label>
          <select
            value={selectedAgeBand}
            onChange={(e) => setSelectedAgeBand(e.target.value as AgeBand | 'all')}
            className="w-full px-3 py-1.5 text-xs font-medium rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="all">All Ages (3–Adult)</option>
            <option value="3-5">Ages 3–5 (Discover Foundations)</option>
            <option value="6-8">Ages 6–8 (Build Elementary)</option>
            <option value="9-12">Ages 9–12 (Explore Middle)</option>
            <option value="13-16">Ages 13–16 (Innovate High School & Calculus)</option>
            <option value="17+">Ages 17+ (Master Young Adult & Enterprise)</option>
          </select>
        </div>
      </div>

      {/* Main Dropdown Button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-2.5 sm:p-3 rounded-xl border border-indigo-200 bg-indigo-50/50 hover:bg-indigo-50 flex items-center justify-between transition-all cursor-pointer shadow-xs"
        >
          <div className="flex items-center space-x-3 overflow-hidden">
            <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black">
              {activeLesson?.sequenceOrder ?? activeLesson?.dayOfYear ?? '1'}
            </span>
            <div className="truncate">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-slate-900 truncate">
                  {activeLesson?.title || 'Choose a Systematic Lesson'}
                </span>
                {completedLessonIds.includes(activeLesson?.id || '') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                )}
              </div>
              <div className="flex items-center space-x-2 text-[10px] text-slate-500 truncate mt-0.5">
                <span>Ages {activeLesson?.ageBand}</span>
                <span>•</span>
                <span className="text-indigo-600 font-semibold truncate">
                  Prereq: {activeLesson?.prerequisiteTopic || 'Introductory'}
                </span>
                {activeLesson?.integratedSubjectConnection && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-700 font-medium truncate">
                      🔗 {activeLesson.integratedSubjectConnection.connectionTitle}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
            <span className="text-[10px] font-bold text-indigo-700 hidden sm:inline">
              {availableLessons.length} Lessons Available
            </span>
            <ChevronDown className={`w-4 h-4 text-indigo-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* Dropdown Menu Popup */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Search filter in popup */}
            <div className="p-2 border-b border-slate-100 bg-slate-50">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Search lesson title, prerequisite (e.g. Differentiation), or integrated concept..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Lesson options list */}
            <div className="max-h-72 sm:max-h-80 overflow-y-auto divide-y divide-slate-100">
              {availableLessons.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-500">
                  No lessons found matching this filter.
                </div>
              ) : (
                availableLessons.map((lesson, idx) => {
                  const isCompleted = completedLessonIds.includes(lesson.id);
                  const isSelected = activeLesson?.id === lesson.id;
                  const seqNum = lesson.sequenceOrder ?? lesson.dayOfYear ?? (idx + 1);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => handleLessonChosen(lesson)}
                      className={`w-full text-left p-2.5 sm:p-3 hover:bg-indigo-50/70 flex items-start justify-between transition-colors cursor-pointer ${isSelected ? 'bg-indigo-50/90' : ''}`}
                    >
                      <div className="flex items-start space-x-2.5 mr-2">
                        <span className={`w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-[11px] font-bold ${
                          isCompleted ? 'bg-emerald-100 text-emerald-800' : (isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700')
                        }`}>
                          {seqNum}
                        </span>

                        <div>
                          <div className="flex items-center space-x-1.5 flex-wrap">
                            <span className="text-xs font-bold text-slate-900">
                              {lesson.title}
                            </span>
                            {isCompleted && (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" />
                            )}
                          </div>

                          <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 mt-0.5 text-[10px]">
                            <span className="text-slate-500 font-medium">
                              Ages {lesson.ageBand} ({lesson.stageName})
                            </span>
                            
                            {lesson.prerequisiteTopic && (
                              <span className="text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200/60 font-medium">
                                Prereq: {lesson.prerequisiteTopic}
                              </span>
                            )}

                            {lesson.integratedSubjectConnection && (
                              <span className="text-indigo-800 bg-indigo-50 px-1.5 py-0.2 rounded border border-indigo-200/60 font-medium inline-flex items-center space-x-1">
                                <Link2 className="w-2.5 h-2.5" />
                                <span>{lesson.integratedSubjectConnection.connectionTitle}</span>
                              </span>
                            )}
                          </div>

                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {lesson.mission.step1_learn.keyConcept}
                          </p>
                        </div>
                      </div>

                      <div className="flex-shrink-0 self-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer with summary */}
            <div className="p-2 px-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
              <span>Showing {availableLessons.length} systematic lessons</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
