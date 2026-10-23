import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Printer, 
  Download, 
  Globe, 
  Share2, 
  Sparkles, 
  FileText, 
  Layers, 
  Sliders, 
  Check, 
  HelpCircle, 
  Volume2, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake,
  Repeat,
  RefreshCw,
  Copy,
  PenTool,
  Bookmark,
  Users
} from 'lucide-react';
import { 
  UNESCO_OER_ACTION_AREAS, 
  UNESCO_5R_PERMISSIONS, 
  UNESCO_OER_LICENSES, 
  UNESCO_OER_COMPLIANCE_AUDIT, 
  SAMPLE_OER_ADAPTATIONS,
  UnescoActionArea,
  Unesco5RPermission,
  LocalAdaptationPreset
} from '../data/unescoOerData';
import { ChildProfile, AgeBand } from '../types/curriculum';

interface UnescoOerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile?: ChildProfile;
  selectedAgeBand?: AgeBand;
  onOpenOfflinePack?: () => void;
}

export const UnescoOerModal: React.FC<UnescoOerModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  selectedAgeBand = '6-8',
  onOpenOfflinePack
}) => {
  const [activeTab, setActiveTab] = useState<'action-areas' | '5r-engine' | 'remix-studio' | 'accessibility' | 'audit'>('action-areas');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('action-area-1');
  const [selected5RId, setSelected5RId] = useState<'retain' | 'reuse' | 'revise' | 'remix' | 'redistribute'>('retain');
  
  // Remix & Adaptation Studio State
  const [selectedPresetId, setSelectedPresetId] = useState<string>('adaptation-east-africa-rural');
  const [customLessonTitle, setCustomLessonTitle] = useState<string>('Clean Water & Solar Biosand Filtration Lab');
  const [customSubject, setCustomSubject] = useState<string>('Science & Community Health (Ages 6–12)');
  const [customLocalExample, setCustomLocalExample] = useState<string>('Using clean sand from the river bed and clay pots to filter rain runoff before boiling.');
  const [customDialectTerm, setCustomDialectTerm] = useState<string>('Amazzi amayonjo (Clean safe water)');
  const [attributionTeacherName, setAttributionTeacherName] = useState<string>(currentProfile?.name ? `${currentProfile.name}'s Family Academy` : 'Community Learning Hub');

  // Accessibility Demonstration State
  const [isDyslexicFontActive, setIsDyslexicFontActive] = useState<boolean>(false);
  const [isHighContrastActive, setIsHighContrastActive] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentArea = UNESCO_OER_ACTION_AREAS.find(a => a.id === selectedAreaId) || UNESCO_OER_ACTION_AREAS[0];
  const current5R = UNESCO_5R_PERMISSIONS.find(p => p.id === selected5RId) || UNESCO_5R_PERMISSIONS[0];
  const currentPreset = SAMPLE_OER_ADAPTATIONS.find(p => p.id === selectedPresetId) || SAMPLE_OER_ADAPTATIONS[0];

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadOerPolicy = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>UNESCO 2019 OER Recommendation - Institutional Policy Framework</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; max-width: 860px; margin: 40px auto; padding: 24px; color: #0f172a; background: #ffffff; }
    h1, h2, h3 { color: #004f98; }
    .header-box { border-bottom: 3px solid #004f98; padding-bottom: 20px; margin-bottom: 30px; }
    .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 6px; font-weight: bold; font-size: 12px; margin-bottom: 10px; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; margin-bottom: 20px; }
    .license-box { background: #f0fdf4; border: 1px solid #86efac; border-radius: 10px; padding: 18px; margin-top: 30px; }
    @media print { body { padding: 0; margin: 0; } }
  </style>
</head>
<body>
  <div class="header-box">
    <span class="badge">UNESCO 2019 OER RECOMMENDATION COMPLIANCE</span>
    <h1>Institutional Open Educational Resources (OER) Policy & Implementation Guide</h1>
    <p><strong>Adopted by:</strong> 193 UNESCO Member States at the 40th General Conference (Paris, November 2019)</p>
    <p><strong>Educational License:</strong> Creative Commons Attribution 4.0 International (CC BY 4.0)</p>
  </div>

  <h2>1. The 5 Action Areas of the UNESCO Recommendation</h2>
  ${UNESCO_OER_ACTION_AREAS.map(a => `
    <div class="card">
      <h3>${a.badge}: ${a.title}</h3>
      <p><strong>Official Objective:</strong> ${a.officialObjective}</p>
      <p><strong>Implementation Strategy:</strong></p>
      <ul>
        ${a.howWeImplement.map(impl => `<li>${impl}</li>`).join('')}
      </ul>
      <p><strong>UN Sustainable Development Goal:</strong> ${a.sdgAlignment}</p>
    </div>
  `).join('')}

  <h2>2. The 5R Permissions Legal Framework (Retain, Reuse, Revise, Remix, Redistribute)</h2>
  <ul>
    ${UNESCO_5R_PERMISSIONS.map(p => `
      <li><strong>${p.title}:</strong> ${p.description} <em>(${p.legalRight})</em></li>
    `).join('')}
  </ul>

  <div class="license-box">
    <h2>3. Formal Open Licensing Deed (CC BY 4.0)</h2>
    <p>All core learning curricula, worksheets, books, and examinations in this program are designated as Open Educational Resources under the Creative Commons Attribution 4.0 International License.</p>
    <p>You are free to <strong>Share</strong> (copy and redistribute in any medium or format) and <strong>Adapt</strong> (remix, transform, and build upon) for any purpose, including public schooling, home education, and community development.</p>
    <p>© Educate the World Initiative • Open Educational Resources for Universal Human Flourishing</p>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `UNESCO_OER_Recommendation_Policy_Guide.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className={`rounded-3xl max-w-5xl w-full shadow-2xl flex flex-col max-h-[95vh] overflow-hidden border transition-all duration-200 ${
        isHighContrastActive 
          ? 'bg-amber-50 text-slate-950 border-amber-400' 
          : 'bg-white text-slate-900 border-sky-300'
      } ${isDyslexicFontActive ? 'font-mono' : ''}`}>
        
        {/* Header: Official UNESCO Blue Ribbon */}
        <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 text-white p-5 sm:p-6 relative border-b border-white/10 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-sky-200 bg-sky-500/20 px-2.5 py-0.5 rounded-full border border-sky-300/30 flex items-center space-x-1.5 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-sky-300" />
              <span>UNITED NATIONS EDUCATIONAL, SCIENTIFIC & CULTURAL ORGANIZATION</span>
            </span>
            <span className="text-xs text-sky-100 font-semibold bg-white/10 px-2.5 py-0.5 rounded-full">
              40th General Conference • Paris 2019
            </span>
          </div>

          <div className="flex items-start space-x-3.5 mt-1">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-white flex items-center justify-center text-2xl font-black shadow-inner border border-white/20 shrink-0">
              🏛️
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] tracking-tight">
                UNESCO Recommendation on Open Educational Resources (OER)
              </h1>
              <p className="text-xs sm:text-sm text-sky-200 mt-1 max-w-3xl leading-relaxed">
                The global normative instrument adopted unanimously by 193 nations. Guarantees the fundamental human right to free, accessible, adaptable, and openly licensed quality education for every child.
              </p>
            </div>
          </div>

          {/* Quick Compliance Badges Bar */}
          <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>100% CC BY 4.0 Open License</span>
              </span>
              <span className="bg-sky-500/20 text-sky-200 border border-sky-400/30 px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center space-x-1">
                <Repeat className="w-3.5 h-3.5 text-sky-300" />
                <span>5R Freedoms Permitted</span>
              </span>
              <span className="bg-amber-500/20 text-amber-200 border border-amber-400/30 px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center space-x-1">
                <span>⚡ 100% Offline (Zero Bandwidth Barrier)</span>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                title="Print OER Compliance Dossier"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print Dossier</span>
              </button>
              <button
                onClick={handleDownloadOerPolicy}
                className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
                title="Download Institutional OER Policy HTML"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Policy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation Ribbon */}
        <div className="bg-slate-50 px-4 sm:px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-0.5">
            <button
              onClick={() => setActiveTab('action-areas')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                activeTab === 'action-areas' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>1. The 5 Action Areas</span>
            </button>

            <button
              onClick={() => setActiveTab('5r-engine')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                activeTab === '5r-engine' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Repeat className="w-3.5 h-3.5" />
              <span>2. 5R Permissions Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('remix-studio')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                activeTab === 'remix-studio' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>3. Adapt & Remix Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('accessibility')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                activeTab === 'accessibility' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>4. Inclusion & UDL</span>
            </button>

            <button
              onClick={() => setActiveTab('audit')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 whitespace-nowrap ${
                activeTab === 'audit' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>5. Policy Audit & Kit</span>
            </button>
          </div>

          <span className="text-[11px] font-semibold text-slate-500 hidden xl:inline">
            UNESCO Normative Standards Compliance Hub
          </span>
        </div>

        {/* Modal Main Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 printable-area">
          
          {/* =========================================================================
              TAB 1: THE 5 ACTION AREAS OF THE UNESCO 2019 RECOMMENDATION
              ========================================================================= */}
          {activeTab === 'action-areas' && (
            <div className="space-y-6">
              
              {/* Introduction Banner */}
              <div className="p-5 rounded-3xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded-md inline-block mb-1">
                  International Framework
                </span>
                <p className="leading-relaxed">
                  On 25 November 2019, UNESCO adopted the <strong>Recommendation on Open Educational Resources</strong> to support the creation, use, and adaptation of inclusive, quality educational materials worldwide. The Recommendation is built upon <strong>5 Core Action Areas</strong>:
                </p>
              </div>

              {/* Action Areas Horizontal Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                {UNESCO_OER_ACTION_AREAS.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setSelectedAreaId(area.id)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedAreaId === area.id
                        ? 'bg-sky-600 text-white border-sky-700 shadow-sm ring-2 ring-sky-300'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <span className="text-xl block mb-1">{area.icon}</span>
                    <strong className="block text-xs font-bold leading-tight font-['Outfit']">
                      Area {area.number}
                    </strong>
                    <span className={`text-[11px] block mt-0.5 truncate ${selectedAreaId === area.id ? 'text-sky-100' : 'text-slate-500'}`}>
                      {area.shortName}
                    </span>
                  </button>
                ))}
              </div>

              {/* Selected Action Area In-Depth Detail Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-150 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                      UNESCO Action Area #{currentArea.number}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold font-['Outfit'] text-slate-900 mt-1">
                      {currentArea.title}
                    </h2>
                  </div>

                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-xl shrink-0 self-start sm:self-center">
                    ✓ Full Systemic Integration
                  </span>
                </div>

                {/* Official UNESCO Objective */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                  <strong className="text-slate-900 block font-['Outfit'] mb-1">
                    Official UNESCO 2019 Text Objective:
                  </strong>
                  <p className="text-slate-700 leading-relaxed font-serif italic">
                    "{currentArea.officialObjective}"
                  </p>
                </div>

                {/* How We Operationalize It */}
                <div>
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-sky-600" />
                    <span>How This Application Operationalizes Area #{currentArea.number}</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentArea.howWeImplement.map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100 text-xs flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Indicators & UN SDG */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-150 text-xs">
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                    <strong className="block font-bold mb-1">Auditable Evidence Indicators:</strong>
                    <ul className="list-disc pl-4 space-y-1 text-emerald-900">
                      {currentArea.keyIndicators.map((ind, iIdx) => (
                        <li key={iIdx}>{ind}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-indigo-950 flex flex-col justify-between">
                    <div>
                      <strong className="block font-bold mb-1">UN SDG 4 Target Alignment:</strong>
                      <p className="text-indigo-900 font-medium">{currentArea.sdgAlignment}</p>
                    </div>
                    <span className="text-[10px] text-indigo-700 font-bold uppercase tracking-wider mt-2 block">
                      Target 4.1 • 4.4 • 4.5 • 4.7 • 4.c
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              TAB 2: THE 5R PERMISSIONS ENGINE
              ========================================================================= */}
          {activeTab === '5r-engine' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-3xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded-md inline-block mb-1">
                  The 5R Legal Liberties of OER
                </span>
                <p className="leading-relaxed">
                  Under the UNESCO definition, an educational material is only genuinely an Open Educational Resource if learners and educators have the full legal rights to <strong>Retain</strong>, <strong>Reuse</strong>, <strong>Revise</strong>, <strong>Remix</strong>, and <strong>Redistribute</strong> it without paying royalties or seeking permissions.
                </p>
              </div>

              {/* 5R Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {UNESCO_5R_PERMISSIONS.map((perm) => (
                  <button
                    key={perm.id}
                    onClick={() => setSelected5RId(perm.id)}
                    className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      selected5RId === perm.id
                        ? 'bg-sky-600 text-white border-sky-700 shadow-sm ring-2 ring-sky-300'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{perm.icon}</span>
                    <strong className="block text-sm font-bold font-['Outfit']">
                      {perm.verb}
                    </strong>
                    <span className={`text-[10px] block mt-0.5 ${selected5RId === perm.id ? 'text-sky-100' : 'text-slate-400'}`}>
                      Permission Guaranteed
                    </span>
                  </button>
                ))}
              </div>

              {/* Active 5R Detail Card */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <div className="flex items-center space-x-3 border-b border-slate-150 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-2xl">
                    {current5R.icon}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold font-['Outfit'] text-slate-900">
                      {current5R.title}
                    </h2>
                    <p className="text-xs font-semibold text-sky-700">
                      {current5R.legalRight}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {current5R.description}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 space-y-1">
                    <strong className="block font-bold font-['Outfit'] text-sm text-amber-900">
                      🧒 For Learners & Families:
                    </strong>
                    <p className="leading-relaxed">{current5R.howLearnersUseIt}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1">
                    <strong className="block font-bold font-['Outfit'] text-sm text-emerald-900">
                      👨‍🏫 For Teachers & Classrooms:
                    </strong>
                    <p className="leading-relaxed">{current5R.classroomApplication}</p>
                  </div>
                </div>
              </div>

              {/* Creative Commons License Information Box */}
              <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Official Open Licensing Registry</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {UNESCO_OER_LICENSES.map((lic, lIdx) => (
                    <div key={lIdx} className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-xs space-y-1">
                      <span className="font-bold text-sky-200 block text-sm">{lic.badge}</span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{lic.summary}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              TAB 3: UNESCO OER ADAPT & REMIX STUDIO
              ========================================================================= */}
          {activeTab === 'remix-studio' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-3xl bg-gradient-to-r from-amber-50 via-sky-50 to-indigo-50 border border-sky-200 text-xs sm:text-sm text-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-md inline-block mb-1">
                  UNESCO 5R Revise & Remix Workshop
                </span>
                <p className="leading-relaxed">
                  UNESCO strongly recommends that learning materials be adapted and translated to reflect local realities, mother tongues, and available household resources. Use this live studio to customize any lesson into a locally contextualized OER worksheet ready for physical print or offline distribution!
                </p>
              </div>

              {/* Context Preset Chooser */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  1. Choose a Community Context Preset:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SAMPLE_OER_ADAPTATIONS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setSelectedPresetId(preset.id);
                        if (preset.id === 'adaptation-east-africa-rural') {
                          setCustomLocalExample('Testing water purification with fine sand from the river bed and clean clay ensumbi pot.');
                          setCustomDialectTerm('Olusuku / Amazzi amayonjo (Clean water)');
                        } else if (preset.id === 'adaptation-urban-african-city') {
                          setCustomLocalExample('Auditing electricity usage in a neighborhood duuka and calculating solar inverter battery hours.');
                          setCustomDialectTerm('Duuka / Jua Kali artisan innovation');
                        } else {
                          setCustomLocalExample('Conducting physics experiments on kitchen counters using salt, oil, and vinegar.');
                          setCustomDialectTerm('Home Study Nook & Family Practice');
                        }
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedPresetId === preset.id
                          ? 'bg-sky-600 text-white border-sky-700 shadow-sm ring-2 ring-sky-300'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <strong className="block text-xs font-bold leading-tight font-['Outfit']">
                        {preset.name}
                      </strong>
                      <span className={`text-[11px] block mt-1 line-clamp-2 ${selectedPresetId === preset.id ? 'text-sky-100' : 'text-slate-500'}`}>
                        {preset.regionContext}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Customizer Form */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 text-xs">
                <h3 className="font-bold text-sm text-slate-900 font-['Outfit'] flex items-center space-x-2">
                  <PenTool className="w-4 h-4 text-sky-600" />
                  <span>2. Customize Lesson Variables (UNESCO Revise & Remix)</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-500 font-bold block mb-1">Lesson Topic / Title</label>
                    <input
                      type="text"
                      value={customLessonTitle}
                      onChange={(e) => setCustomLessonTitle(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="text-slate-500 font-bold block mb-1">Subject & Age Group</label>
                    <input
                      type="text"
                      value={customSubject}
                      onChange={(e) => setCustomSubject(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="text-slate-500 font-bold block mb-1">Localized Community Example (Revise)</label>
                    <textarea
                      rows={2}
                      value={customLocalExample}
                      onChange={(e) => setCustomLocalExample(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-slate-500 font-bold block mb-1">Mother-Tongue / Local Dialect Term</label>
                    <input
                      type="text"
                      value={customDialectTerm}
                      onChange={(e) => setCustomDialectTerm(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-semibold text-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <label className="text-slate-500 font-bold block mb-1">Educator / Community Attribution</label>
                    <input
                      type="text"
                      value={attributionTeacherName}
                      onChange={(e) => setAttributionTeacherName(e.target.value)}
                      className="p-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs w-64 font-bold"
                    />
                  </div>

                  <button
                    onClick={handlePrint}
                    className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center space-x-1.5 cursor-pointer shadow-xs self-end"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Adapted OER Worksheet</span>
                  </button>
                </div>
              </div>

              {/* Preview of Customized OER Worksheet */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Preview of Customized Open Educational Worksheet
                </span>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-sky-800">OPEN EDUCATIONAL RESOURCE • CC BY 4.0</span>
                    <span className="text-slate-500">Adapted by: {attributionTeacherName}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                    {customLessonTitle}
                  </h4>
                  <p className="text-slate-500 font-semibold">{customSubject}</p>

                  <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100 text-slate-800 space-y-1">
                    <strong className="block text-sky-950 font-bold">Local Community Context:</strong>
                    <p>{customLocalExample}</p>
                    <p className="text-sky-800 font-semibold italic pt-1">Key Local Term: {customDialectTerm}</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="font-bold text-slate-800">Student Investigation Reflection Prompt:</p>
                    <div className="w-full h-16 border border-dashed border-slate-300 rounded-xl p-2 text-slate-400">
                      (Student writes their observations and solutions here...)
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-150 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Licensed under Creative Commons Attribution 4.0 (UNESCO 5R Permitted)</span>
                    <span>100% Free to Copy & Share</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              TAB 4: UNIVERSAL ACCESSIBILITY & INCLUSION (ACTION AREA 3)
              ========================================================================= */}
          {activeTab === 'accessibility' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-3xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded-md inline-block mb-1">
                  Universal Design for Learning (UDL)
                </span>
                <p className="leading-relaxed">
                  UNESCO OER Action Area 3 mandates equitable access for all learners, especially students with disabilities, those without internet access, and rural communities. Experience our multi-sensory accessibility accommodations below:
                </p>
              </div>

              {/* Live Accessibility Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Dyslexia-Friendly Mode */}
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-5 h-5 text-indigo-600" />
                      <h3 className="font-bold text-sm text-slate-900 font-['Outfit']">
                        Dyslexia & Cognitive Clarity Mode
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsDyslexicFontActive(!isDyslexicFontActive)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isDyslexicFontActive
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isDyslexicFontActive ? '✓ Dyslexia Mode ON' : 'Turn ON'}
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applies enhanced monospace character spacing, heavier bottom baselines, and clean letter differentiation to dramatically reduce visual crowding for neurodivergent learners.
                  </p>
                </div>

                {/* High-Contrast Solar Sunlight Mode */}
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Sliders className="w-5 h-5 text-amber-600" />
                      <h3 className="font-bold text-sm text-slate-900 font-['Outfit']">
                        Outdoor Solar High-Contrast Mode
                      </h3>
                    </div>
                    <button
                      onClick={() => setIsHighContrastActive(!isHighContrastActive)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isHighContrastActive
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isHighContrastActive ? '✓ Solar Contrast ON' : 'Turn ON'}
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Optimizes color contrast ratios (black on amber paper) for learners studying outdoors under direct African sunlight or in low-lit village shelters at dusk.
                  </p>
                </div>

              </div>

              {/* UDL Accessibility Checklist */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs">
                <h3 className="font-bold text-sm text-slate-900 font-['Outfit']">
                  Universal Design for Learning (UDL) Standards Implemented:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                    <strong className="block font-bold">1. Multi-Modal Representation</strong>
                    <p className="text-emerald-900">
                      Every lesson provides text, 90s animated video concepts, audio speech narration, and hands-on physical diagrams.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950 space-y-1">
                    <strong className="block font-bold">2. Dual Language & Dialect</strong>
                    <p className="text-sky-900">
                      Mother-tongue translations (Luganda, Runyankole, Swahili) alongside international standards (Cambridge & US).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 space-y-1">
                    <strong className="block font-bold">3. Zero-Bandwidth Offline</strong>
                    <p className="text-indigo-900">
                      Eliminates digital divide barriers: works 100% disconnected on low-cost devices and solar battery setups.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* =========================================================================
              TAB 5: UNESCO OER COMPLIANCE AUDIT & INSTITUTIONAL POLICY KIT
              ========================================================================= */}
          {activeTab === 'audit' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md inline-block mb-1">
                  Compliance Audit Statement
                </span>
                <p className="leading-relaxed">
                  This educational platform has been systematically architected in strict conformity with the <strong>UNESCO 2019 Recommendation on Open Educational Resources (OER)</strong>. Below is the point-by-point compliance matrix:
                </p>
              </div>

              {/* Audit Checklist Items */}
              <div className="space-y-3">
                {UNESCO_OER_COMPLIANCE_AUDIT.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sky-900 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200 text-[11px]">
                        {item.category}
                      </span>
                      <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full text-[11px] flex items-center space-x-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{item.status.toUpperCase()}</span>
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 font-['Outfit']">
                      {item.criterion}
                    </h4>

                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                      <strong className="text-slate-900">Concrete Evidence in App: </strong>
                      <span>{item.evidenceInApp}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Model Institutional Policy Adoption Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-sky-300">
                  <GraduationCap className="w-5 h-5 text-sky-400" />
                  <span>Model Institutional OER Policy Adoption</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Community schools, homeschooling cooperatives, village learning centers, and non-profit educational initiatives may formally adopt this policy statement to guarantee that all learning materials remain public goods in perpetuity.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handleDownloadOerPolicy}
                    className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center space-x-2 transition-colors cursor-pointer shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Formal Policy Document (HTML)</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center space-x-2 transition-colors cursor-pointer border border-white/20"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Compliance Certificate</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 shrink-0">
          <p>
            © Educate the World Initiative • Open Educational Resources (OER) Aligned with UNESCO Paris 2019
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors cursor-pointer"
          >
            Close UNESCO Hub
          </button>
        </div>

      </div>
    </div>
  );
};
