import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Clock, 
  Award, 
  CheckCircle, 
  Eye, 
  EyeOff, 
  Play, 
  Pause, 
  RotateCcw, 
  Printer, 
  BookOpen, 
  HelpCircle, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp, 
  School, 
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { 
  CambridgeResourceItem, 
  CambridgeQuestionPart 
} from '../data/cambridgeResourcesData';
import { ChildProfile } from '../types/curriculum';

interface CambridgeResourceViewerProps {
  resource: CambridgeResourceItem;
  currentProfile?: ChildProfile;
  onBack?: () => void;
}

export const CambridgeResourceViewer: React.FC<CambridgeResourceViewerProps> = ({
  resource,
  currentProfile,
  onBack
}) => {
  // Timer State for Mock Exams
  const [timerSeconds, setTimerSeconds] = useState<number>(resource.durationMinutes * 60);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [candidateName, setCandidateName] = useState<string>(currentProfile?.name || 'Learner');
  const [centreNumber, setCentreNumber] = useState<string>('UG042');
  const [candidateNumber, setCandidateNumber] = useState<string>('0017');

  // Solution and Mark Scheme Reveal State
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [showAllSolutions, setShowAllSolutions] = useState<boolean>(false);

  // Self-Score Tracker per question part
  const [userScores, setUserScores] = useState<Record<string, number>>({});

  // Active Note Tab if resource is 'notes'
  const [activeNoteSectionIdx, setActiveNoteSectionIdx] = useState<number>(0);

  // Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (timerSeconds === 0 && timerActive) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds]);

  const toggleSolution = (key: string) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleScoreChange = (key: string, maxMarks: number, value: string) => {
    const num = Math.min(maxMarks, Math.max(0, parseInt(value, 10) || 0));
    setUserScores(prev => ({
      ...prev,
      [key]: num
    }));
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Calculate total scored
  const totalEarned = Object.values(userScores).reduce((acc, curr) => acc + curr, 0);
  const scorePercentage = resource.totalMarks > 0 
    ? Math.round((totalEarned / resource.totalMarks) * 100) 
    : 0;

  const getCambridgeGrade = (pct: number) => {
    if (pct >= 85) return { grade: 'A* (Distinction)', color: 'text-emerald-700 bg-emerald-50 border-emerald-300' };
    if (pct >= 70) return { grade: 'A (High Merit)', color: 'text-blue-700 bg-blue-50 border-blue-300' };
    if (pct >= 60) return { grade: 'B (Good Pass)', color: 'text-indigo-700 bg-indigo-50 border-indigo-300' };
    if (pct >= 50) return { grade: 'C (Standard Pass)', color: 'text-amber-700 bg-amber-50 border-amber-300' };
    if (pct >= 40) return { grade: 'D (Developing)', color: 'text-orange-700 bg-orange-50 border-orange-300' };
    return { grade: 'Unclassified / Keep Practicing', color: 'text-slate-700 bg-slate-50 border-slate-300' };
  };

  const gradeInfo = getCambridgeGrade(scorePercentage);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Top Action & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div className="flex items-center space-x-2">
          {onBack && (
            <button
              onClick={onBack}
              className="px-3 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1"
            >
              <span>← Back to Cambridge Vault</span>
            </button>
          )}
          <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
            Syllabus {resource.syllabusCode}
          </span>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
            {resource.stageCode}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {resource.type !== 'notes' && (
            <button
              onClick={() => setShowAllSolutions(!showAllSolutions)}
              className="px-3 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5"
            >
              {showAllSolutions ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showAllSolutions ? 'Hide All Mark Schemes' : 'Reveal All Mark Schemes'}</span>
            </button>
          )}

          <button
            onClick={handlePrint}
            className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 shadow-xs"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Clean Paper</span>
          </button>
        </div>
      </div>

      {/* Official Cambridge Examination Booklet Header */}
      <div className="p-5 sm:p-7 rounded-3xl bg-white border-2 border-slate-900 shadow-md space-y-4">
        
        {/* Crest & Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-slate-900 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-slate-900">
              <School className="w-6 h-6 text-blue-900" />
              <span className="text-xs sm:text-sm font-black tracking-widest uppercase font-serif">
                Cambridge Assessment International Education
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 font-serif mt-1">
              {resource.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-600 font-medium">
              <span>{resource.pathwayTier}</span>
              <span>•</span>
              <span>{resource.targetAge}</span>
              {resource.specimenYear && (
                <>
                  <span>•</span>
                  <span className="text-blue-700 font-semibold">{resource.specimenYear}</span>
                </>
              )}
            </div>
          </div>

          {/* Time & Total Marks Box */}
          <div className="shrink-0 text-right bg-slate-50 p-3 rounded-2xl border border-slate-300">
            <div className="text-xs text-slate-500 font-bold uppercase">Time Allowed</div>
            <div className="text-sm sm:text-base font-black text-slate-900 font-mono">
              {resource.durationMinutes > 0 ? `${resource.durationMinutes} Minutes` : 'Self-Paced'}
            </div>
            {resource.totalMarks > 0 && (
              <div className="text-xs text-blue-700 font-bold mt-1">
                Total Marks: {resource.totalMarks}
              </div>
            )}
          </div>
        </div>

        {/* Candidate Details Form Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Candidate Name
            </label>
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="w-full text-xs font-bold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Centre Number
            </label>
            <input
              type="text"
              value={centreNumber}
              onChange={(e) => setCentreNumber(e.target.value)}
              className="w-full text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Centre Code"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Candidate Number
            </label>
            <input
              type="text"
              value={candidateNumber}
              onChange={(e) => setCandidateNumber(e.target.value)}
              className="w-full text-xs font-mono font-bold bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Candidate ID"
            />
          </div>
        </div>

        {/* Instructions Box */}
        <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-1.5">
          <p className="font-extrabold uppercase tracking-wider text-amber-900 flex items-center space-x-1.5">
            <span>READ THESE INSTRUCTIONS FIRST</span>
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1 leading-relaxed">
            {resource.instructions.map((inst, i) => (
              <li key={i}>{inst}</li>
            ))}
          </ul>
        </div>

        {/* Mock Exam Live Timer & Score Header (if type is exam or test_paper) */}
        {resource.type !== 'notes' && resource.durationMinutes > 0 && (
          <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 shadow-md">
            
            {/* Timer Controller */}
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Mock Exam Timer
                </span>
                <span className={`text-xl font-black font-mono tracking-wider ${
                  timerSeconds < 300 ? 'text-rose-400 animate-pulse' : 'text-emerald-400'
                }`}>
                  {formatTimer(timerSeconds)}
                </span>
              </div>
              <div className="flex items-center space-x-1 pl-2">
                <button
                  onClick={() => setTimerActive(!timerActive)}
                  className={`p-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 cursor-pointer transition-colors ${
                    timerActive 
                      ? 'bg-amber-600 hover:bg-amber-500 text-white' 
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  }`}
                  title={timerActive ? 'Pause Timer' : 'Start Mock Exam Timer'}
                >
                  {timerActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{timerActive ? 'Pause' : 'Start Timer'}</span>
                </button>

                <button
                  onClick={() => {
                    setTimerActive(false);
                    setTimerSeconds(resource.durationMinutes * 60);
                  }}
                  className="p-1.5 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Self-Score & Predicted Cambridge Grade */}
            {resource.totalMarks > 0 && (
              <div className="flex items-center space-x-4 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Marks Awarded
                  </span>
                  <div className="text-sm font-black font-mono text-white">
                    {totalEarned} / {resource.totalMarks} ({scorePercentage}%)
                  </div>
                </div>

                <div className={`px-2.5 py-1 rounded-lg border text-xs font-extrabold ${gradeInfo.color}`}>
                  {gradeInfo.grade}
                </div>
              </div>
            )}

          </div>
        )}

      </div>

      {/* CONTENT TYPE 1: EXAM / TEST PAPER / WORKSHEET SECTIONS */}
      {resource.sections && resource.sections.length > 0 && (
        <div className="space-y-6">
          {resource.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4">
              
              {/* Section Divider Bar */}
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-5 py-2.5 rounded-2xl shadow-xs flex items-center justify-between">
                <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                  {section.sectionTitle}
                </h3>
                {section.instructions && (
                  <span className="text-[11px] text-blue-200 font-medium hidden sm:inline">
                    {section.instructions}
                  </span>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-5">
                {section.questions.map((q) => (
                  <div 
                    key={q.questionNumber}
                    className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4"
                  >
                    
                    {/* Question Header & Stem */}
                    <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                      <div>
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs mr-2">
                          Question {q.questionNumber}
                        </span>
                        {q.stemText && (
                          <div className="mt-2 text-xs sm:text-sm text-slate-800 font-semibold whitespace-pre-line leading-relaxed">
                            {q.stemText}
                          </div>
                        )}
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                          Total: [{q.totalMarks} marks]
                        </span>
                      </div>
                    </div>

                    {/* Question Parts */}
                    <div className="space-y-4 pl-1 sm:pl-3">
                      {q.parts.map((part, pIdx) => {
                        const partKey = `${q.questionNumber}_${part.partLabel}`;
                        const isRevealed = showAllSolutions || revealedSolutions[partKey];
                        const currentScore = userScores[partKey] || 0;

                        return (
                          <div key={pIdx} className="space-y-2 border-b border-dashed border-slate-200 pb-4 last:border-none">
                            
                            {/* Part Prompt & Marks */}
                            <div className="flex items-start justify-between gap-3">
                              <div className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
                                <span className="font-bold text-blue-800 mr-2">{part.partLabel}</span>
                                <span className="whitespace-pre-line">{part.questionText}</span>
                              </div>

                              <div className="text-right shrink-0">
                                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                                  [{part.marks} {part.marks === 1 ? 'mark' : 'marks'}]
                                </span>
                              </div>
                            </div>

                            {/* Optional Diagram or Stimulus */}
                            {part.diagramOrStimulus && (
                              <div className="my-2 p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs whitespace-pre-wrap overflow-x-auto text-slate-700">
                                {part.diagramOrStimulus}
                              </div>
                            )}

                            {/* Answer Space / Interactive Inputs */}
                            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                              
                              {/* Student Scratchpad / Answer Input Box */}
                              <div className="flex-1">
                                <input
                                  type="text"
                                  placeholder="Write your answer / working..."
                                  className="w-full text-xs px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                                />
                              </div>

                              {/* Action Buttons: Reveal Mark Scheme + Score Input */}
                              <div className="flex items-center space-x-2 shrink-0">
                                
                                {/* Self-Score Input */}
                                <div className="flex items-center space-x-1 text-xs">
                                  <span className="text-slate-400 font-bold">Award:</span>
                                  <input
                                    type="number"
                                    min="0"
                                    max={part.marks}
                                    value={userScores[partKey] !== undefined ? userScores[partKey] : ''}
                                    onChange={(e) => handleScoreChange(partKey, part.marks, e.target.value)}
                                    className="w-12 text-center text-xs font-mono font-bold py-1.5 px-1 bg-white border border-slate-300 rounded-lg text-blue-900 focus:ring-2 focus:ring-blue-500"
                                    placeholder="0"
                                  />
                                  <span className="text-slate-400 font-bold">/ {part.marks}</span>
                                </div>

                                {/* Reveal Button */}
                                <button
                                  onClick={() => toggleSolution(partKey)}
                                  className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1 ${
                                    isRevealed 
                                      ? 'bg-amber-100 text-amber-900 hover:bg-amber-200' 
                                      : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                  }`}
                                >
                                  {isRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                                  <span>{isRevealed ? 'Hide' : 'Mark Scheme'}</span>
                                </button>

                              </div>
                            </div>

                            {/* REVEALED OFFICIAL MARK SCHEME & EXAMINER ADVICE */}
                            {isRevealed && (
                              <div className="mt-3 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-2 animate-in fade-in duration-200">
                                
                                <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5">
                                  <span className="font-extrabold text-[11px] uppercase tracking-wider text-emerald-900 flex items-center space-x-1">
                                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Official Cambridge Mark Scheme</span>
                                  </span>
                                  <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded text-emerald-800 border border-emerald-200">
                                    M (Method) & A (Accuracy) Marks
                                  </span>
                                </div>

                                <div className="font-medium text-slate-800 whitespace-pre-line leading-relaxed">
                                  {part.markScheme}
                                </div>

                                {part.examinerTip && (
                                  <div className="pt-2 border-t border-emerald-200/60 flex items-start space-x-2 text-slate-700">
                                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                      <span className="font-bold text-amber-900">Chief Examiner Tip / Common Pitfall: </span>
                                      <span>{part.examinerTip}</span>
                                    </div>
                                  </div>
                                )}

                              </div>
                            )}

                          </div>
                        );
                      })}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      )}

      {/* CONTENT TYPE 2: REVISION NOTES & CHEATSHEETS */}
      {resource.notesData && resource.notesData.length > 0 && (
        <div className="space-y-6">
          
          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {resource.notesData.map((sec, idx) => (
              <button
                key={idx}
                onClick={() => setActiveNoteSectionIdx(idx)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeNoteSectionIdx === idx
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {sec.heading}
              </button>
            ))}
          </div>

          {/* Active Note Content Card */}
          {(() => {
            const currentSec = resource.notesData[activeNoteSectionIdx];
            if (!currentSec) return null;

            return (
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
                
                <div>
                  <h3 className="text-xl font-black text-slate-900 font-['Outfit']">
                    {currentSec.heading}
                  </h3>
                  {currentSec.subheading && (
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1">
                      {currentSec.subheading}
                    </p>
                  )}
                </div>

                {/* Main Text Content */}
                <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  {currentSec.content}
                </div>

                {/* Formulae & Key Definitions Grid */}
                {currentSec.formulaeOrDefinitions && currentSec.formulaeOrDefinitions.length > 0 && (
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Cambridge Formula Bank & Official Definitions:</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentSec.formulaeOrDefinitions.map((item, i) => (
                        <div key={i} className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200">
                          <span className="font-extrabold text-xs text-indigo-950 block">
                            {item.term}
                          </span>
                          <span className="font-mono text-xs text-indigo-900 block mt-1">
                            {item.definitionOrFormula}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step-by-Step Worked Examples */}
                {currentSec.workedExamples && currentSec.workedExamples.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center space-x-1.5">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      <span>Examiner-Modelled Worked Examples:</span>
                    </h4>

                    {currentSec.workedExamples.map((ex, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-white border-2 border-blue-200 space-y-3">
                        <div className="font-bold text-xs sm:text-sm text-slate-900">
                          Example {i + 1}: {ex.problem}
                        </div>

                        <div className="pl-3 border-l-2 border-blue-500 space-y-1.5 text-xs text-slate-700">
                          {ex.steps.map((step, sIdx) => (
                            <div key={sIdx}>{step}</div>
                          ))}
                        </div>

                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-extrabold text-emerald-900 flex items-center justify-between">
                          <span>Final Answer: {ex.finalAnswer}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-emerald-800 border border-emerald-200">
                            Full Marks
                          </span>
                        </div>

                        <div className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-xl border border-amber-200 flex items-start space-x-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Examiner Advice:</strong> {ex.examinerTip}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Chief Examiner Traps to Avoid */}
                {currentSec.examinerTraps && currentSec.examinerTraps.length > 0 && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 space-y-2">
                    <h4 className="font-extrabold uppercase tracking-wider text-rose-900 flex items-center space-x-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>Common Examiner Traps to Avoid in the Exam:</span>
                    </h4>
                    <ul className="space-y-1 pl-1 list-disc list-inside text-rose-900 leading-relaxed">
                      {currentSec.examinerTraps.map((trap, tIdx) => (
                        <li key={tIdx}>{trap}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            );
          })()}

        </div>
      )}

      {/* Practical At-Home Application Callout */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-xs text-amber-950 flex items-start space-x-3 shadow-xs">
        <span className="text-xl">🌍</span>
        <div>
          <span className="font-extrabold uppercase tracking-wider text-amber-900 block">
            Educate the World Practical Reality Bridge:
          </span>
          <p className="mt-0.5 leading-relaxed text-slate-800">
            {resource.practicalAtHomeContext}
          </p>
        </div>
      </div>

    </div>
  );
};
