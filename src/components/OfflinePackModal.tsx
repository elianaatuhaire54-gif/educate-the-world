import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  BookOpen, 
  Check, 
  Share2, 
  FileText, 
  Award, 
  Layers, 
  HelpCircle, 
  CheckCircle2, 
  Calculator, 
  FlaskConical, 
  Globe, 
  Wrench 
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { ChildProfile, AgeBand } from '../types/curriculum';

interface OfflinePackModalProps {
  currentProfile: ChildProfile;
  selectedAgeBand: AgeBand;
  isOpen: boolean;
  onClose: () => void;
}

export const OfflinePackModal: React.FC<OfflinePackModalProps> = ({
  currentProfile,
  selectedAgeBand,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'missions' | 'worksheets' | 'exams'>('worksheets');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const relevantModules = CURRICULUM_MODULES.filter(m => m.ageBand === selectedAgeBand);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadOfflineBundle = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Offline Home Academy Bundle - Ages ${selectedAgeBand}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; max-width: 840px; margin: 30px auto; padding: 20px; color: #0f172a; background: #fafaf9; }
    h1, h2, h3 { color: #1e293b; }
    .header-box { border-bottom: 2px solid #cbd5e1; padding-bottom: 15px; margin-bottom: 25px; }
    .oer-box { background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; padding: 12px 16px; border-radius: 8px; font-size: 12px; margin-bottom: 20px; line-height: 1.5; }
    .mission-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 25px; page-break-inside: avoid; }
    .section-label { font-size: 11px; font-weight: bold; text-transform: uppercase; color: #b45309; }
    .worksheet-box { border: 2px solid #cbd5e1; border-radius: 12px; padding: 20px; margin-bottom: 30px; background: #fff; page-break-inside: avoid; }
    .student-header { display: flex; justify-content: space-between; border-bottom: 1px solid #cbd5e1; padding-bottom: 8px; margin-bottom: 15px; font-size: 12px; }
    @media print { body { background: white; margin: 0; padding: 0; } .no-print { display: none; } }
  </style>
</head>
<body>
  <div class="header-box">
    <div class="oer-box">
      <strong>🏛️ UNESCO Recommendation on Open Educational Resources (2019) Certified</strong><br/>
      Licensed under <strong>Creative Commons Attribution 4.0 International (CC BY 4.0)</strong>.<br/>
      Universal 5R Rights: <em>Retain, Reuse, Revise, Remix, Redistribute</em>. Zero paywall, zero external internet requirement.
    </div>
    <h1>Home Academy Offline Study Pack • Ages ${selectedAgeBand}</h1>
    <p>Learner: <strong>${currentProfile.name}</strong> • Centre: Home Academy • Date: ${new Date().toLocaleDateString()}</p>
    <p>100% Offline curriculum bundle. Includes daily missions, printable student worksheets, and standardized exam papers.</p>
  </div>

  <h2>Part 1: Printable Student Worksheets</h2>
  ${relevantModules.map((m, idx) => `
    <div class="worksheet-box">
      <div class="student-header">
        <span>Name: ____________________</span>
        <span>Date: ____________</span>
        <span>Subject: ${m.categoryLabel}</span>
        <span>Score: _____ / 20</span>
      </div>
      <h3>Worksheet #${idx + 1}: ${m.title}</h3>
      <p><strong>Core Concept:</strong> ${m.mission.step1_learn.story}</p>
      <h4>Section A: Short Answer</h4>
      <p>1. Explain the main idea in your own words:</p>
      <div style="height: 60px; border-bottom: 1px dashed #94a3b8; margin-bottom: 15px;"></div>
      <p>2. How does this apply to: "${m.mission.step1_learn.localExample}"?</p>
      <div style="height: 60px; border-bottom: 1px dashed #94a3b8; margin-bottom: 15px;"></div>
      <h4>Section B: Examination Questions</h4>
      ${m.mission.step4_quiz.questions.map((q, qIdx) => `
        <p><strong>Q${qIdx + 1}:</strong> ${q.question}</p>
        <p>${q.options.map((opt, oIdx) => `[  ] ${String.fromCharCode(65 + oIdx)}. ${opt}&nbsp;&nbsp;&nbsp;&nbsp;`).join('')}</p>
      `).join('')}
    </div>
  `).join('')}

  <h2>Part 2: 20-Minute Daily Missions</h2>
  ${relevantModules.map((m, idx) => `
    <div class="mission-card">
      <span class="section-label">Mission #${idx + 1} • ${m.categoryLabel}</span>
      <h3>${m.title}</h3>
      <p>${m.subtitle}</p>
      <p><strong>Parent Prompt:</strong> "${m.mission.step2_discuss.askFirst}"</p>
      <p><strong>Explanation:</strong> "${m.mission.step2_discuss.explainSimply}"</p>
      <p><strong>Hands-On Lab:</strong> ${m.mission.step3_activity.gameOrExperimentName}</p>
      <ul>
        ${m.mission.step3_activity.instructions.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>
  `).join('')}
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Home_Academy_Ages_${selectedAgeBand}_Offline_Pack.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-950 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1 flex-wrap gap-y-1">
              <span className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>100% Offline Vault • Ages {selectedAgeBand}</span>
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-md font-bold tracking-normal normal-case">
                🏛️ UNESCO OER (2019) • CC BY 4.0
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-['Outfit']">
              Complete Offline Study Pack & Exam Papers
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Contains complete printable worksheets, practice mock exams, and 20-minute daily missions. Zero internet required.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer transition-colors shadow-xs"
              title="Print all worksheets and exams directly"
            >
              <Printer className="w-4 h-4" />
              <span>Print (PDF)</span>
            </button>

            <button
              onClick={handleDownloadOfflineBundle}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Download standalone offline HTML bundle"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="bg-slate-50 px-5 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('worksheets')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'worksheets' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Printable Student Worksheets ({relevantModules.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('exams')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'exams' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Standardized Exam Papers</span>
            </button>

            <button
              onClick={() => setActiveTab('missions')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'missions' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>20-Min Daily Missions</span>
            </button>
          </div>

          <span className="text-[11px] font-semibold text-slate-500">
            Profile: {currentProfile.name} • {relevantModules.length} Modules Available
          </span>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 text-slate-900 printable-area">
          
          {/* TAB 1: PRINTABLE WORKSHEETS */}
          {activeTab === 'worksheets' && (
            <div className="space-y-8">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs flex items-center justify-between">
                <div>
                  <strong className="text-amber-950 text-sm block mb-0.5">
                    Individual Lesson Worksheets Ready for Home & Class
                  </strong>
                  <p className="text-amber-800">
                    Each worksheet includes conceptual synthesis, short-answer responses, examination questions, and space for hands-on diagramming.
                  </p>
                </div>
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center space-x-1.5 shrink-0 shadow-xs cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print All Worksheets</span>
                </button>
              </div>

              {relevantModules.map((m, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                  
                  {/* Candidate Header */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Candidate</span>
                      <strong className="text-slate-800">{currentProfile.name}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Subject</span>
                      <strong className="text-slate-800">{m.categoryLabel}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Age Band</span>
                      <strong className="text-slate-800">Ages {m.ageBand}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Score</span>
                      <strong className="text-amber-700">_____ / 25 Marks</strong>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      Worksheet #{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-['Outfit'] mt-1">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-500">{m.subtitle}</p>
                  </div>

                  {/* Reading Passage */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
                    <p>{m.mission.step1_learn.story}</p>
                    <p className="mt-2 text-slate-600 italic text-xs">Community context: {m.mission.step1_learn.localExample}</p>
                  </div>

                  {/* Question Section */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-800 block">
                      1. Written Comprehension: Explain the main mechanism or principle in 2–3 sentences [5 Marks]:
                    </label>
                    <div className="w-full h-16 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-400 bg-slate-50/50">
                      (Write your response here...)
                    </div>

                    <label className="text-xs font-bold text-slate-800 block">
                      2. Examination Practice Questions [{m.mission.step4_quiz.questions.length * 5} Marks]:
                    </label>
                    <div className="space-y-2">
                      {m.mission.step4_quiz.questions.map((q, qIdx) => (
                        <div key={qIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                          <strong className="text-slate-900 block mb-1">
                            Q{qIdx + 1}: {q.question}
                          </strong>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2">
                            {q.options.map((opt, oIdx) => (
                              <div key={oIdx} className="flex items-center space-x-1.5 text-slate-700">
                                <span className="w-4 h-4 rounded border border-slate-300 inline-block"></span>
                                <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <label className="text-xs font-bold text-slate-800 block">
                      3. Hands-On Field Observation / Diagram Box:
                    </label>
                    <div className="w-full h-24 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center text-xs text-slate-400 bg-slate-50/50">
                      (Draw sketch or record measurements from: {m.mission.step3_activity.gameOrExperimentName})
                    </div>
                  </div>

                  {/* Parent Marking Key Toggle */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setRevealedSolutions(prev => ({ ...prev, [m.id]: !prev[m.id] }))}
                      className="font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer flex items-center space-x-1"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{revealedSolutions[m.id] ? 'Hide Teacher Answer Key' : 'Reveal Teacher Answer Key'}</span>
                    </button>
                    <span className="text-[11px] text-slate-400">Award 5 marks per correct answer</span>
                  </div>

                  {revealedSolutions[m.id] && (
                    <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs space-y-1.5 text-indigo-950 animate-in fade-in duration-150">
                      <strong className="block text-[11px] uppercase tracking-wider text-indigo-900 font-bold">
                        Answer Key & Pedagogical Explanations:
                      </strong>
                      {m.mission.step4_quiz.questions.map((q, qIdx) => (
                        <div key={qIdx}>
                          • Q{qIdx + 1}: Option {String.fromCharCode(65 + q.correctIndex)} — {q.explanation}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: STANDARDIZED EXAM PAPERS */}
          {activeTab === 'exams' && (
            <div className="space-y-6">
              <div className="p-5 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-sky-300 uppercase tracking-widest mb-1">
                    <Award className="w-4 h-4" />
                    <span>Age Band {selectedAgeBand} Standardized Benchmark Examination</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-['Outfit']">
                    Comprehensive Term Assessment Paper
                  </h3>
                  <p className="text-xs text-slate-300">
                    Testing across all core disciplines: Language, Mathematics, Natural Sciences, and Practical Engineering.
                  </p>
                </div>

                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 cursor-pointer shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Exam Paper</span>
                </button>
              </div>

              {/* Exam Question Sections */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
                <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">
                    Paper 1: Core Knowledge & Problem Solving (60 Minutes)
                  </h4>
                  <span className="font-bold text-xs text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    50 Marks Total
                  </span>
                </div>

                <div className="space-y-6">
                  {relevantModules.slice(0, 5).map((m, idx) => (
                    <div key={idx} className="space-y-2 border-b border-slate-100 pb-5 last:border-b-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">
                          Section {String.fromCharCode(65 + idx)}: {m.categoryLabel}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">[10 Marks]</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-800 font-serif leading-relaxed">
                        Based on the study of "{m.title}": {m.mission.step1_learn.story}
                      </p>

                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <p className="text-xs font-semibold text-slate-900">
                          Question {idx + 1}.1: {m.mission.step4_quiz.questions[0]?.question || 'Explain the scientific or mathematical principle presented above.'}
                        </p>
                        <div className="w-full h-16 border border-slate-300 rounded-lg p-2 text-xs text-slate-400 bg-white">
                          (Write your response...)
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 20-MINUTE DAILY MISSIONS */}
          {activeTab === 'missions' && (
            <div className="space-y-6">
              {relevantModules.map((m, idx) => (
                <div key={idx} className="border-b border-slate-200 pb-8 last:border-b-0">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                    <span>Mission #{idx + 1}</span>
                    <span>•</span>
                    <span>{m.categoryLabel}</span>
                    <span>•</span>
                    <span>20 Minutes</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-['Outfit'] mt-1">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 mb-4">
                    {m.subtitle}
                  </p>

                  {/* Step 1 */}
                  <div className="mb-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 block mb-1">1. Story & Concept (5 min):</span>
                    <p className="text-slate-700 leading-relaxed font-serif">{m.mission.step1_learn.story}</p>
                    <p className="text-slate-600 mt-2 font-medium italic">Example: {m.mission.step1_learn.localExample}</p>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-3 bg-amber-50/50 p-3.5 rounded-xl border border-amber-200 text-xs sm:text-sm">
                    <span className="font-bold text-amber-900 block mb-1">2. Parent Guide (5 min):</span>
                    <p className="text-slate-800"><strong>Ask child:</strong> "{m.mission.step2_discuss.askFirst}"</p>
                    <p className="text-slate-800 mt-1"><strong>Explain:</strong> "{m.mission.step2_discuss.explainSimply}"</p>
                  </div>

                  {/* Step 3 */}
                  <div className="mb-3 bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-200 text-xs sm:text-sm">
                    <span className="font-bold text-emerald-900 block mb-1">3. Hands-On Activity: {m.mission.step3_activity.gameOrExperimentName} (5 min):</span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      {m.mission.step3_activity.instructions.map((ins, i) => (
                        <li key={i}>{ins}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials & Badge */}
                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1">
                    <span><strong>Materials:</strong> {m.householdMaterials.join(', ')}</span>
                    <span className="font-bold text-amber-700">Passport Badge: {m.badgeName}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
              🏛️ UNESCO 2019 Recommendation
            </span>
            <span className="hidden sm:inline">5R Permissions Guaranteed: Retain, Reuse, Revise, Remix, Redistribute</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
          >
            Close Offline Pack
          </button>
        </div>

      </div>
    </div>
  );
};
