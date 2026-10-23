import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  HelpCircle, 
  Sparkles, 
  FlaskConical, 
  CheckCircle2, 
  Award, 
  Share2, 
  Printer, 
  Volume2, 
  VolumeX,
  ArrowRight
} from 'lucide-react';
import { LessonModule, ChildProfile } from '../types/curriculum';
import { speakText, stopSpeaking, isSpeaking } from '../utils/speech';

interface ParentGuideModalProps {
  lesson: LessonModule;
  currentProfile: ChildProfile;
  isOpen: boolean;
  onClose: () => void;
  onLaunchFullMission?: (lesson: LessonModule) => void;
}

export const ParentGuideModal: React.FC<ParentGuideModalProps> = ({
  lesson,
  currentProfile,
  isOpen,
  onClose,
  onLaunchFullMission,
}) => {
  const [copied, setCopied] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  if (!isOpen) return null;

  const guide = lesson.parentTeachingGuide;

  const handleCopyGuide = () => {
    const text = `📋 *PARENT TEACHING GUIDE: ${lesson.title}* (Ages ${lesson.ageBand})
1. ❓ *Ask Your Child First:*
"${guide.introductoryQuestion}"

2. 💡 *Core Concept (Explain Simply):*
"${guide.simplifiedExplanation}"

3. 🧪 *Safe Home Activity:*
*${guide.safeHomeActivity.title}*
Materials: ${guide.safeHomeActivity.materials.join(', ')}
Steps:
${guide.safeHomeActivity.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}
${guide.safeHomeActivity.safetyTip ? `Safety: ${guide.safeHomeActivity.safetyTip}` : ''}

4. 🎯 *Follow-Up Check Questions:*
${guide.followUpQuestions.map((q, i) => `Q: ${q.question}\nA: ${q.sampleAnswer}`).join('\n')}

5. 🚀 *Parent Challenge:*
${guide.parentChallenge}

🌍 *Educate the World | Home Academy*`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleAudio = () => {
    if (isAudioPlaying) {
      stopSpeaking();
      setIsAudioPlaying(false);
    } else {
      const script = `Parent Teaching Guide for ${lesson.title}. Step 1. Ask your child first: ${guide.introductoryQuestion}. Step 2. Explain simply: ${guide.simplifiedExplanation}. Step 3. Safe home experiment: ${guide.safeHomeActivity.title}. ${guide.safeHomeActivity.steps.join('. ')}. Step 4. Parent Challenge: ${guide.parentChallenge}`;
      const started = speakText(script, () => setIsAudioPlaying(false));
      setIsAudioPlaying(started);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-amber-200 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-5 sm:p-6 relative">
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-200">
            <Heart className="w-4 h-4 fill-amber-200 text-amber-200" />
            <span>The Secret Weapon • 5-Step Parent Teaching Guide</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] mt-1">
            {lesson.title}
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 mt-0.5">
            Stage: {lesson.stageName} (Ages {lesson.ageBand}) • Child: {currentProfile.name}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-white/20">
            <button
              onClick={handleCopyGuide}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/20 hover:bg-white/30 text-white transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied Guide!' : 'Copy Guide for WhatsApp'}</span>
            </button>

            <button
              onClick={toggleAudio}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isAudioPlaying 
                  ? 'bg-white text-amber-700 animate-pulse' 
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              {isAudioPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isAudioPlaying ? 'Pause Audio' : 'Listen Aloud'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Sheet</span>
            </button>
          </div>
        </div>

        {/* 5-Step Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 text-slate-800 printable-area">
          
          {/* STEP 1: Spark Curiosity */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[11px] font-bold">1</span>
              <span>Ask First to Spark Curiosity</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-slate-900 italic">
              "{guide.introductoryQuestion}"
            </p>
            <p className="text-[11px] text-amber-900 mt-2">
              💡 <em>Tip: Wait 5 seconds before speaking. Let {currentProfile.name} guess freely without fear of being wrong!</em>
            </p>
          </div>

          {/* STEP 2: Simplified Explanation */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-800 mb-1.5">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[11px] font-bold">2</span>
              <span>Simplified Core Concept (Say This Aloud)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {guide.simplifiedExplanation}
            </p>
          </div>

          {/* STEP 3: Safe, Simple Activity */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px] font-bold">3</span>
              <span>Safe Home Experiment: {guide.safeHomeActivity.title}</span>
            </div>

            <div className="text-xs text-emerald-950 mb-2">
              <span className="font-bold">Free Household Items: </span>
              <span>{guide.safeHomeActivity.materials.join(' • ')}</span>
            </div>

            <div className="space-y-1.5 text-xs text-slate-700">
              {guide.safeHomeActivity.steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="font-bold text-emerald-700 shrink-0">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {guide.safeHomeActivity.safetyTip && (
              <div className="mt-2.5 pt-2 border-t border-emerald-200/80 text-[11px] text-emerald-800 font-semibold">
                ⚠️ Safety Note: {guide.safeHomeActivity.safetyTip}
              </div>
            )}
          </div>

          {/* STEP 4: Follow-Up Questions */}
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-purple-800 mb-2">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[11px] font-bold">4</span>
              <span>Follow-Up Questions to Check Understanding</span>
            </div>

            <div className="space-y-2.5">
              {guide.followUpQuestions.map((fq, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white border border-purple-100 text-xs">
                  <p className="font-bold text-slate-900 mb-1">
                    Q{idx + 1}: {fq.question}
                  </p>
                  <p className="text-slate-600">
                    <span className="font-semibold text-purple-800">Sample Answer: </span>
                    {fq.sampleAnswer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 5: Parent Challenge */}
          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-800 mb-1.5">
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-[11px] font-bold">5</span>
              <span>Parent Challenge (Extend Real-World Learning)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
              {guide.parentChallenge}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              stopSpeaking();
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
          >
            Close
          </button>

          {onLaunchFullMission && (
            <button
              onClick={() => {
                stopSpeaking();
                onClose();
                onLaunchFullMission(lesson);
              }}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              <span>Launch 20-Min Interactive Mission</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
