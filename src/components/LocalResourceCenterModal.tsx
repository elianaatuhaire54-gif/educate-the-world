import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  FlaskConical, 
  HelpCircle, 
  Printer, 
  Download, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Award, 
  Layers, 
  Check, 
  ChevronRight,
  School,
  FileText
} from 'lucide-react';
import { ResourceCenter } from '../data/booksAndResourceCentersData';
import { getLocalResourceCenterContent, LocalResourceCenterContent } from '../data/localResourceCentersData';

interface LocalResourceCenterModalProps {
  resourceCenter: ResourceCenter | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LocalResourceCenterModal: React.FC<LocalResourceCenterModalProps> = ({
  resourceCenter,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'lab' | 'problems' | 'worksheet'>('syllabus');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({});

  if (!isOpen || !resourceCenter) return null;

  const content: LocalResourceCenterContent = getLocalResourceCenterContent(resourceCenter.id, resourceCenter);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadOfflineGuide = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${content.name} - Offline Resource Guide</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 20px; color: #1e293b; background: #fafaf9; }
    h1, h2, h3 { color: #0f172a; }
    .header-box { border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; }
    .oer-badge { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 12px 16px; border-radius: 8px; font-size: 12px; margin-bottom: 20px; line-height: 1.5; }
    .module-box { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
    .worksheet-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 24px; margin-top: 30px; }
    @media print { body { background: white; margin: 0; padding: 0; } }
  </style>
</head>
<body>
  <div class="header-box">
    <div class="oer-badge">
      <strong>🏛️ UNESCO Recommendation on Open Educational Resources (2019) Certified</strong><br/>
      Licensed under <strong>Creative Commons Attribution 4.0 International (CC BY 4.0)</strong>. Universal 5R Freedoms: Retain, Reuse, Revise, Remix, Redistribute.
    </div>
    <h1>${content.name}</h1>
    <p><strong>Subject Domain:</strong> ${content.subjectDomain}</p>
    <p>${content.overview}</p>
  </div>

  <h2>Curriculum Modules & Syllabus</h2>
  <ul>
    ${content.curriculumSyllabus.map(s => `<li>${s}</li>`).join('')}
  </ul>

  <h2>Core Principles</h2>
  <ul>
    ${content.keyPrinciples.map(p => `<li>${p}</li>`).join('')}
  </ul>

  <div class="module-box">
    <h3>Offline Laboratory / Field Challenge</h3>
    <p>${content.offlineLabExperimentOrChallenge}</p>
  </div>

  <div class="worksheet-box">
    <h2>Printable Worksheet: ${content.printableWorksheet.title}</h2>
    <p>${content.printableWorksheet.instructions}</p>
    <h3>Exercises</h3>
    <ol>
      ${content.printableWorksheet.exercises.map(e => `<li>${e}</li>`).join('')}
    </ol>
    <h3>Reflection Prompts</h3>
    <ul>
      ${content.printableWorksheet.reflectionPrompts.map(r => `<li>${r}</li>`).join('')}
    </ul>
  </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${content.name.replace(/[^a-zA-Z0-9]/g, '_')}_Offline_Guide.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-indigo-200 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 text-white p-5 sm:p-6 relative border-b border-white/10 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-300 bg-sky-400/20 px-2.5 py-0.5 rounded-full border border-sky-300/30">
              100% Offline Learning Lab & Curriculum Hub
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-400/20 px-2.5 py-0.5 rounded-full border border-emerald-300/30">
              🏛️ UNESCO OER • 5R
            </span>
            <span className="text-xs text-sky-200">
              Zero External Internet Required
            </span>
          </div>

          <div className="flex items-center space-x-3 mt-1">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/30 text-white flex items-center justify-center text-2xl shadow-inner border border-white/10 shrink-0">
              {content.emoji}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-['Outfit']">
                {content.name}
              </h2>
              <p className="text-xs text-indigo-200">
                {content.subjectDomain}
              </p>
            </div>
          </div>
        </div>

        {/* Tab & Action Bar */}
        <div className="bg-slate-50 px-4 sm:px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('syllabus')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'syllabus' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Syllabus & Principles</span>
            </button>

            <button
              onClick={() => setActiveTab('problems')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'problems' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Interactive Problems ({content.sampleProblems.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('lab')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'lab' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Offline Lab Challenge</span>
            </button>

            <button
              onClick={() => setActiveTab('worksheet')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'worksheet' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Printable Worksheet</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              title="Print Worksheet / Lab Notes"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownloadOfflineGuide}
              className="p-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              title="Download Offline HTML"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 printable-area">
          
          {/* TAB 1: SYLLABUS & OVERVIEW */}
          {activeTab === 'syllabus' && (
            <div className="space-y-6">
              <div className="p-4 sm:p-5 rounded-3xl bg-indigo-50 border border-indigo-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-md inline-block mb-1">
                  Curriculum Overview
                </span>
                <p className="text-xs sm:text-sm text-indigo-950 leading-relaxed font-medium">
                  {content.overview}
                </p>
              </div>

              {/* Syllabus Outline */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit'] flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>Curriculum Modules & Learning Sequence</span>
                </h3>

                <div className="space-y-2">
                  {content.curriculumSyllabus.map((mod, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start space-x-2.5 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-800 font-medium">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Principles */}
              <div className="p-5 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-amber-950 font-['Outfit'] flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Foundational Principles & Thinking Tools</span>
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-amber-900">
                  {content.keyPrinciples.map((prin, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{prin}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE PRACTICE PROBLEMS */}
          {activeTab === 'problems' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs">
                <strong className="text-indigo-900 block mb-0.5">
                  Offline Step-by-Step Problem Solving Lab
                </strong>
                <p className="text-indigo-800">
                  Attempt each question in your notebook first. Click "Show Hint" if you are stuck, or "Reveal Step-by-Step Solution" to check each derivation.
                </p>
              </div>

              {content.sampleProblems.map((prob, probIdx) => (
                <div key={probIdx} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                      Problem #{prob.problemNumber}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-slate-900 font-mono whitespace-pre-line leading-relaxed">
                    {prob.question}
                  </p>

                  <div className="flex items-center space-x-3 pt-1">
                    <button
                      onClick={() => setRevealedHints(prev => ({ ...prev, [probIdx]: !prev[probIdx] }))}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 cursor-pointer flex items-center space-x-1"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{revealedHints[probIdx] ? 'Hide Hint' : 'Show Conceptual Hint'}</span>
                    </button>

                    <button
                      onClick={() => setRevealedSolutions(prev => ({ ...prev, [probIdx]: !prev[probIdx] }))}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer flex items-center space-x-1"
                    >
                      {revealedSolutions[probIdx] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{revealedSolutions[probIdx] ? 'Hide Solution' : 'Reveal Step-by-Step Solution'}</span>
                    </button>
                  </div>

                  {revealedHints[probIdx] && (
                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 animate-in fade-in duration-150">
                      <strong>Hint: </strong>{prob.conceptualHint}
                    </div>
                  )}

                  {revealedSolutions[probIdx] && (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2.5 animate-in fade-in duration-150">
                      <strong className="text-slate-900 block text-[11px] uppercase tracking-wider">
                        Step-by-Step Derivation:
                      </strong>
                      <div className="space-y-1 font-mono text-slate-800">
                        {prob.stepByStepSolution.map((step, sIdx) => (
                          <div key={sIdx}>{step}</div>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-slate-200 flex items-center space-x-2 font-bold text-emerald-700">
                        <span>Final Answer:</span>
                        <span className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-900">{prob.finalAnswer}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: OFFLINE LAB EXPERIMENT / CHALLENGE */}
          {activeTab === 'lab' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-200 shadow-xs space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <FlaskConical className="w-4 h-4 text-emerald-600" />
                  <span>Hands-On Field Lab Experiment</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                  Local Practical Investigation Challenge
                </h3>

                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-serif bg-white/70 p-4 rounded-2xl border border-emerald-200/50">
                  {content.offlineLabExperimentOrChallenge}
                </p>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs space-y-2">
                  <strong className="text-slate-900 block font-['Outfit']">Scientific Method Checklist:</strong>
                  <ul className="space-y-1 text-slate-700">
                    <li>• <strong>Hypothesis:</strong> What do you expect will happen before testing?</li>
                    <li>• <strong>Apparatus:</strong> Gather ordinary domestic objects (no purchased kits needed).</li>
                    <li>• <strong>Controls:</strong> What variables are kept strictly constant?</li>
                    <li>• <strong>Verification:</strong> Repeat the measurement three times to calculate an average.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PRINTABLE WORKSHEET */}
          {activeTab === 'worksheet' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs flex items-center justify-between gap-3">
                <div>
                  <strong className="text-emerald-900 text-sm block mb-0.5">
                    Ready-to-Print Student Activity Worksheet
                  </strong>
                  <p className="text-emerald-800">
                    Print this sheet for classroom tests, homework, or home academy study portfolios.
                  </p>
                </div>
                <button
                  onClick={handlePrint}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-1.5 shrink-0 cursor-pointer shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Worksheet</span>
                </button>
              </div>

              {/* Student Header */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Student Name</label>
                  <div className="border-b border-slate-300 pb-1 font-semibold text-slate-800">
                    _________________________
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Date & Centre</label>
                  <div className="border-b border-slate-300 pb-1 font-semibold text-slate-800">
                    {new Date().toLocaleDateString()} • Home Academy
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Discipline</label>
                  <div className="border-b border-slate-300 pb-1 font-semibold text-slate-800">
                    {content.subjectDomain}
                  </div>
                </div>
              </div>

              {/* Section 1: Practical Exercises */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Section A: Empirical & Computational Exercises
                </h4>

                <div className="space-y-3">
                  {content.printableWorksheet.exercises.map((ex, eIdx) => (
                    <div key={eIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                      <p className="font-semibold text-slate-900 mb-2">{ex}</p>
                      <div className="w-full h-16 border border-dashed border-slate-300 rounded-xl p-2 text-xs text-slate-400 bg-white">
                        (Show calculation or proof here...)
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Reflection Prompts */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Section B: Conceptual & Community Reflection
                </h4>

                <div className="space-y-3">
                  {content.printableWorksheet.reflectionPrompts.map((ref, rIdx) => (
                    <div key={rIdx} className="space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">{ref}</p>
                      <div className="w-full h-20 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-400 bg-slate-50/50">
                        (Student response area...)
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
