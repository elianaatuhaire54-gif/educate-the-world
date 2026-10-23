import React from 'react';
import { AnimatedLessonVideo, LocationType } from '../types/curriculum';
import { AnimatedLessonVideoPlayer } from './AnimatedLessonVideoPlayer';

export interface AnimatedLessonVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: AnimatedLessonVideo;
  lessonTitle?: string;
  learnerName?: string;
  defaultLocation?: LocationType;
  onCompleteVideo?: () => void;
}

export const AnimatedLessonVideoModal: React.FC<AnimatedLessonVideoModalProps> = ({
  isOpen,
  onClose,
  video,
  lessonTitle,
  learnerName = 'Young Scholar',
  defaultLocation = 'rural',
  onCompleteVideo,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-5xl">
        <AnimatedLessonVideoPlayer
          video={video}
          lessonTitle={lessonTitle}
          learnerName={learnerName}
          defaultLocation={defaultLocation}
          onCompleteVideo={onCompleteVideo}
          isInline={false}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export { AnimatedLessonVideoPlayer };
