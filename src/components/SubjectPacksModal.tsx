import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  Calculator, 
  FlaskConical, 
  BookOpen, 
  Cpu, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Printer, 
  Sparkles,
  Link2,
  Calendar,
  Compass
} from 'lucide-react';
import { 
  SUBJECT_PACK_DEFINITIONS, 
  SubjectPackId, 
  getLessonsForSubjectPack,
  SubjectPackDefinition 
} from '../data/subjectPacksData';
import { LessonModule, ChildProfile, AgeBand } from '../types/curriculum';

interface SubjectPacksModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile?: ChildProfile;
  onLaunchLesson: (lesson: LessonModule) => void;
}

export const SubjectPacksModal: React.FC<SubjectPacksModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onLaunchLesson
}) => {
  const [activePackId, setActivePackId] = useState<SubjectPackId>('math');
  const [selectedAgeBand, setSelectedAgeBand] = useState<AgeBand | 'all'>('all');

  if (!isOpen) return null;

  const currentPack: SubjectPackDefinition = 
    SUBJECT_PACK_DEFINITIONS.find(p => p.id === activePackId) || SUBJECT_PACK_DEFINITIONS[0];

  const packLessons = getLessonsForSubjectPack(
    activePackId, 
    selectedAgeBand === 'all' ? undefined : selectedAgeBand
  );

  const completedIds = currentProfile?.completedLessonIds || [];

  const handlePrintPack = () => {
    window.print();
  };

  const getIcon = (id: SubjectPackId) => {
    switch (id) {
      case 'math': return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'science': return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case 'language': return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'technology': return <Cpu className="w-5 h-5 text-purple-600" />;
      case 'finance': return <TrendingUp className="w-5 h-5 text-teal-600" />;
      case 'character': return <ShieldCheck className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <span>Structured Academic Curriculum</span>
                <span>•</span>
                <span>Unmixed Subject Streams</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] mt-0.5">
                Full-Year Subject Learning Packs
              </h2>
              <p className="text-xs text-slate-300">
                Subjects are never mixed together into confusion, but rich interdisciplinary connections are integrated in every lesson (e.g. learn math while studying science).
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrintPack}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:flex items-center space-x-1.5 text-xs font-semibold"
              title="Print Subject Pack Guide"
            >
              <Printer className="w-4 h-4" />
              <span>Print Pack</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 6 Subject Pack Selection Cards */}
        <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {SUBJECT_PACK_DEFINITIONS.map(pack => {
              const isSelected = pack.id === activePackId;
              return (
                <button
                  key={pack.id}
                  onClick={() => setActivePackId(pack.id)}
                  className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-white shadow-md border-indigo-500 ring-2 ring-indigo-500/20' 
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    {getIcon(pack.id)}
                    <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-md ${pack.badgeBg} ${pack.badgeText}`}>
                      {getLessonsForSubjectPack(pack.id).length}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-tight">
                      {pack.shortName}
                    </h4>
                    <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                      {pack.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pack Detailed View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Active Pack Hero Banner */}
          <div className={`rounded-3xl bg-linear-to-r ${currentPack.gradient} text-white p-5 sm:p-6 shadow-md relative overflow-hidden`}>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Unmixed Discipline Standard • Total {getLessonsForSubjectPack(currentPack.id).length} Lessons</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                {currentPack.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 mt-1">
                {currentPack.tagline}
              </p>
              
              <div className="mt-3 pt-3 border-t border-white/20 flex flex-col sm:flex-row gap-3 text-xs">
                <div>
                  <span className="font-bold text-white/80 uppercase text-[10px] block">Discipline Boundary:</span>
                  <span className="text-white/95">{currentPack.disciplineBoundary}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interdisciplinary Integration Highlight Box */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-xl bg-indigo-600 text-white flex-shrink-0 mt-0.5">
                <Link2 className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="text-sm font-black text-indigo-950">
                    Interdisciplinary Integration in this Pack
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                    Integrated, Not Diluted
                  </span>
                </div>
                <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                  {currentPack.integratedConnectionSummary}
                </p>

                {/* Example card */}
                <div className="mt-3 p-3 rounded-xl bg-white border border-indigo-100 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                    Featured Integration Spotlight:
                  </span>
                  <div className="font-bold text-slate-900">
                    "{currentPack.integrationHighlightExample.lessonTitle}"
                  </div>
                  <div className="text-slate-600 mt-1">
                    {currentPack.integrationHighlightExample.howItIntegrates}
                  </div>
                  <div className="mt-1.5 font-mono text-[11px] text-indigo-800 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                    Core Model: {currentPack.integrationHighlightExample.formulaOrConcept}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Tracks & Prerequisite Sequencing */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Systematic Learning Progression Tracks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {currentPack.keyTracks.map((track, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-black text-slate-900 mb-2 flex items-center space-x-1.5">
                    <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-[10px] font-bold">
                      {i + 1}
                    </span>
                    <span>{track.trackName}</span>
                  </div>
                  <ol className="space-y-1.5 text-[11px] text-slate-600">
                    {track.prerequisiteOrder.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start space-x-1.5">
                        <span className="text-indigo-500 font-bold text-[10px] mt-0.5">↳</span>
                        <span className="leading-tight font-medium">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons List in Strict Prerequisite Sequence */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Systematic Lessons in {currentPack.shortName}
                </h4>
                <p className="text-xs text-slate-500">
                  Sorted in prerequisite learning order. Click any lesson to launch.
                </p>
              </div>

              {/* Age filter buttons */}
              <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0">
                {(['all', '3-5', '6-8', '9-12', '13-16', '17+'] as const).map(band => (
                  <button
                    key={band}
                    onClick={() => setSelectedAgeBand(band)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      selectedAgeBand === band
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {band === 'all' ? 'All Ages' : `Ages ${band}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              {packLessons.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500">
                  No lessons found in this subject pack for the selected age band.
                </div>
              ) : (
                packLessons.map((lesson, idx) => {
                  const isCompleted = completedIds.includes(lesson.id);
                  const seqNum = lesson.sequenceOrder ?? lesson.dayOfYear ?? (idx + 1);

                  return (
                    <div
                      key={lesson.id}
                      className="p-3 sm:p-4 hover:bg-slate-50 flex items-center justify-between transition-colors gap-3"
                    >
                      <div className="flex items-start space-x-3 overflow-hidden">
                        <span className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-black ${
                          isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-indigo-50 text-indigo-700 border border-indigo-200/50'
                        }`}>
                          {seqNum}
                        </span>

                        <div className="overflow-hidden">
                          <div className="flex items-center space-x-2">
                            <h5 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                              {lesson.title}
                            </h5>
                            {isCompleted && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            )}
                          </div>

                          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mt-1 text-[10px]">
                            <span className="text-slate-500 font-medium">
                              Ages {lesson.ageBand} ({lesson.stageName})
                            </span>
                            
                            {lesson.prerequisiteTopic && (
                              <span className="px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200/70 font-semibold">
                                Prerequisite: {lesson.prerequisiteTopic}
                              </span>
                            )}

                            {lesson.integratedSubjectConnection && (
                              <span className="px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-800 border border-indigo-200/70 font-semibold inline-flex items-center space-x-1">
                                <Link2 className="w-2.5 h-2.5" />
                                <span>{lesson.integratedSubjectConnection.connectionTitle}</span>
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                            {lesson.mission.step1_learn.keyConcept}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onLaunchLesson(lesson);
                        }}
                        className="flex-shrink-0 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-xs transition-colors cursor-pointer"
                      >
                        <span>Start</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
