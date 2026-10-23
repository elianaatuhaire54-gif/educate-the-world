import React from 'react';
import { LessonModule } from '../types/curriculum';
import { AGE_BAND_COLORS } from '../utils/ageColors';
import { getCambridgeAlignmentForLesson } from '../data/internationalCurriculaData';
import { 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Share2, 
  Heart,
  Globe,
  GraduationCap,
  Film
} from 'lucide-react';

interface LessonCardProps {
  lesson: LessonModule;
  isCompleted: boolean;
  onOpenLesson: (lesson: LessonModule) => void;
  onOpen5MinBite: (lesson: LessonModule) => void;
  onOpenParentGuide: (lesson: LessonModule) => void;
  onShareWhatsApp: (lesson: LessonModule) => void;
  onOpenVideo?: (lesson: LessonModule) => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  isCompleted,
  onOpenLesson,
  onOpen5MinBite,
  onOpenParentGuide,
  onShareWhatsApp,
  onOpenVideo,
}) => {
  const bandTheme = AGE_BAND_COLORS[lesson.ageBand] || AGE_BAND_COLORS['3-5'];
  const cambridge = lesson.cambridgeAlignment || getCambridgeAlignmentForLesson(lesson.ageBand, lesson.category, lesson.title);

  return (
    <div className={`flex flex-col justify-between rounded-3xl border bg-white p-5 sm:p-6 transition-all duration-200 hover:shadow-lg ${bandTheme.cardHoverBorder} relative overflow-hidden group ${
      isCompleted ? 'border-emerald-200/90 bg-emerald-50/20' : 'border-slate-200/90'
    }`}>
      
      {/* Top Bar with Category & Age Band Specific Badge */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-lg">
            {lesson.categoryLabel}
          </span>

          <div className="flex items-center space-x-1.5">
            {isCompleted ? (
              <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Stamped</span>
              </span>
            ) : (
              <span className={`inline-flex items-center space-x-1 text-[11px] font-bold px-2 py-0.5 rounded-lg border ${bandTheme.cardAgeBadge}`}>
                <span>{bandTheme.emoji}</span>
                <span>Ages {lesson.ageBand} • {lesson.stageName}</span>
              </span>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors font-['Outfit'] leading-snug">
          {lesson.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
          {lesson.subtitle}
        </p>

        {/* Unified All-in-One Global Curricula & Video Badges */}
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-200/90 px-2 py-0.5 rounded-lg" title={`Cambridge: ${cambridge.subject} (${cambridge.syllabusCode || 'CAIE'})`}>
            <GraduationCap className="w-3 h-3 text-blue-600" />
            <span>🇬🇧 Cambridge CAIE</span>
            {cambridge.syllabusCode && <span className="font-mono text-blue-600 font-bold">({cambridge.syllabusCode})</span>}
          </span>

          <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-red-900 bg-red-50 border border-red-200/90 px-2 py-0.5 rounded-lg" title="United States Common Core & NGSS Standards Integrated">
            <span>🇺🇸 US CCSS/NGSS</span>
          </span>

          <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-900 bg-emerald-50 border border-emerald-200/90 px-2 py-0.5 rounded-lg" title="Asia (Singapore CPA Bar Model) & IB Parity">
            <span>🌏 Asia & IB Parity</span>
          </span>

          <span className="inline-flex items-center space-x-1 text-[10px] font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2 py-0.5 rounded-lg" title="90-Second Animated Video with Gentle Teacher Narration">
            <Film className="w-3 h-3 text-indigo-600" />
            <span>🎬 90s Teacher Video</span>
          </span>
        </div>

        {/* Local Context / Hook */}
        <div className="mt-3.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
          <span className="font-semibold text-slate-800">Home Context: </span>
          {lesson.mission.step1_learn.localExample}
        </div>

        {/* Dialect Words Pill Preview */}
        {lesson.dialectWords && lesson.dialectWords.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {lesson.dialectWords.slice(0, 2).map((dw, i) => (
              <span key={i} className="inline-flex items-center text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/60 px-1.5 py-0.5 rounded-md">
                🗣️ <strong className="ml-1 mr-0.5">{dw.localWord}</strong>: {dw.englishMeaning}
              </span>
            ))}
          </div>
        )}

        {/* Community Mission Highlight */}
        {lesson.communityMission && (
          <div className="mt-2.5 p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-[11px] text-emerald-900 flex items-start space-x-1.5">
            <Globe className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-emerald-800">World Changer Action: </span>
              <span className="text-emerald-700">{lesson.communityMission.title}</span>
            </div>
          </div>
        )}

        {/* Materials required (Low cost) */}
        <div className="mt-2.5 text-[11px] text-slate-500 flex items-center space-x-1">
          <span className="font-semibold text-slate-700">Materials:</span>
          <span className="truncate">{lesson.householdMaterials.slice(0, 2).join(', ')}</span>
        </div>

        {/* Time & Parent Scaffolding */}
        <div className="flex items-center space-x-4 mt-3 text-xs text-slate-500 font-medium">
          <span className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>20m mission</span>
          </span>
          <span className="flex items-center space-x-1">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>{lesson.parentMinutes}m parent talk</span>
          </span>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          {/* Start 20-min mission */}
          <button
            onClick={() => onOpenLesson(lesson)}
            className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
          >
            <span>Start 20m Mission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* 90-Second Animated Video button */}
          <button
            onClick={() => onOpenVideo ? onOpenVideo(lesson) : onOpenLesson(lesson)}
            className="p-2.5 rounded-xl border border-indigo-200 bg-indigo-50/70 hover:bg-indigo-100 text-indigo-700 transition-colors cursor-pointer flex items-center space-x-1"
            title="Watch 90-Second Animated Video (Visual Learning)"
          >
            <Film className="w-4 h-4 text-indigo-600" />
            <span className="text-[10px] font-extrabold hidden md:inline">90s Video</span>
          </button>

          {/* 5-Min Bite button */}
          <button
            onClick={() => onOpen5MinBite(lesson)}
            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 hover:text-amber-600 transition-colors cursor-pointer"
            title="Quick 5-Minute Bite (if you have almost no time)"
          >
            <Zap className="w-4 h-4" />
          </button>

          {/* WhatsApp Share */}
          <button
            onClick={() => onShareWhatsApp(lesson)}
            className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/60 text-emerald-700 transition-colors cursor-pointer"
            title="Copy formatted summary for WhatsApp"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* 1-Click Parent Teaching Guide Button */}
        <button
          onClick={() => onOpenParentGuide(lesson)}
          className="w-full flex items-center justify-center space-x-1.5 py-1.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100/80 text-amber-900 border border-amber-200/70 text-xs font-bold transition-colors cursor-pointer"
        >
          <Heart className="w-3.5 h-3.5 text-amber-600" />
          <span>Parent Teaching Guide (5-Step Cheat Sheet)</span>
        </button>
      </div>

    </div>
  );
};
