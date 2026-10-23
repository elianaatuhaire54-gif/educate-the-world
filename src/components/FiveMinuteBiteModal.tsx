import React from 'react';
import { X, Zap, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { LessonModule, ChildProfile } from '../types/curriculum';

interface FiveMinuteBiteModalProps {
  lesson: LessonModule;
  currentProfile: ChildProfile;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const FiveMinuteBiteModal: React.FC<FiveMinuteBiteModalProps> = ({
  lesson,
  currentProfile,
  isOpen,
  onClose,
  onComplete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-amber-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-amber-100">
            <Zap className="w-4 h-4 fill-amber-200 text-amber-200" />
            <span>5-Minute Quick Bite</span>
          </div>

          <h3 className="text-lg font-black font-['Outfit'] mt-1">
            {lesson.fiveMinuteBite.title}
          </h3>
          <p className="text-xs text-amber-100 mt-0.5">
            For parents with almost no time today.
          </p>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
              Say to {currentProfile.name}:
            </span>
            <p className="text-sm font-semibold text-slate-800">
              "{lesson.fiveMinuteBite.quickPrompt}"
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Do this action together (60 seconds):
            </span>
            <p className="text-sm text-emerald-950">
              {lesson.fiveMinuteBite.quickAction}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
          >
            Close
          </button>

          <button
            onClick={() => {
              onComplete();
              onClose();
            }}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Done! Quick Bite Completed</span>
          </button>
        </div>

      </div>
    </div>
  );
};
