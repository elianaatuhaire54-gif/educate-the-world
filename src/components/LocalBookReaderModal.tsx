import React, { useState, useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  Printer, 
  Download, 
  HelpCircle, 
  CheckCircle2, 
  Award, 
  Clock, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Bookmark, 
  FileText,
  RotateCcw,
  Check,
  Type,
  Sun,
  Moon,
  Coffee
} from 'lucide-react';
import { RecommendedBook } from '../data/booksAndResourceCentersData';
import { getLocalBookContent, LocalBookContent } from '../data/localBooksLibrary';
import { speakText, stopSpeaking } from '../utils/speech';

interface LocalBookReaderModalProps {
  book: RecommendedBook | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LocalBookReaderModal: React.FC<LocalBookReaderModalProps> = ({
  book,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'read' | 'quiz' | 'worksheet' | 'exam'>('read');
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [colorTheme, setColorTheme] = useState<'sepia' | 'light' | 'dark'>('sepia');
  
  // Audio narration state
  const [isNarrating, setIsNarrating] = useState<boolean>(false);
  
  // Interactive Quiz state
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});

  // Interactive Worksheet state
  const [worksheetAnswers, setWorksheetAnswers] = useState<Record<number, string>>({});
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({});

  // Mock Exam state
  const [examTimer, setExamTimer] = useState<number>(35 * 60);
  const [examTimerRunning, setExamTimerRunning] = useState<boolean>(false);
  const [revealedExamAnswers, setRevealedExamAnswers] = useState<Record<number, boolean>>({});
  const [studentExamScores, setStudentExamScores] = useState<Record<number, number>>({});

  useEffect(() => {
    // Reset reading progress when opening a new book
    setActiveChapterIndex(0);
    setActiveTab('read');
    setSelectedQuizAnswers({});
    setQuizSubmitted({});
    setWorksheetAnswers({});
    setRevealedHints({});
    setRevealedExamAnswers({});
    setStudentExamScores({});
    setExamTimer(35 * 60);
    setExamTimerRunning(false);
    stopSpeaking();
    setIsNarrating(false);
  }, [book?.id]);

  useEffect(() => {
    let interval: any = null;
    if (examTimerRunning && examTimer > 0) {
      interval = setInterval(() => {
        setExamTimer(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examTimerRunning, examTimer]);

  if (!isOpen || !book) return null;

  const content: LocalBookContent = getLocalBookContent(book.id, book);
  const currentChapter = content.chapters[activeChapterIndex] || content.chapters[0];

  const handleToggleNarration = () => {
    if (isNarrating) {
      stopSpeaking();
      setIsNarrating(false);
    } else {
      const textToRead = `${currentChapter.title}. ${currentChapter.readingPassage}`;
      setIsNarrating(true);
      speakText(textToRead, () => {
        setIsNarrating(false);
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadOfflineHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${content.title} - Offline Reader</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 20px; color: #1e293b; background: #fafaf9; }
    h1, h2, h3 { color: #0f172a; }
    .header-box { border-bottom: 2px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 30px; }
    .oer-badge { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 12px 16px; border-radius: 8px; font-size: 12px; margin-bottom: 24px; line-height: 1.5; }
    .chapter-box { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-bottom: 30px; }
    .vocab-tag { display: inline-block; background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px; font-size: 12px; font-weight: bold; margin-right: 6px; }
    .worksheet-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 24px; margin-top: 40px; }
    @media print { body { background: white; margin: 0; padding: 0; } .no-print { display: none; } }
  </style>
</head>
<body>
  <div class="header-box">
    <div class="oer-badge">
      <strong>🏛️ UNESCO Recommendation on Open Educational Resources (2019) Compliant</strong><br/>
      Licensed under <strong>Creative Commons Attribution 4.0 International (CC BY 4.0)</strong>.<br/>
      Universal 5R Freedoms: <em>Retain, Reuse, Revise, Remix, and Redistribute</em> freely without subscription, DRM lock, or external internet redirection.
    </div>
    <h1>${content.title}</h1>
    <p><strong>Author:</strong> ${content.author} (${book.authorCountry})</p>
    <p><strong>Themes:</strong> ${content.keyThemes.join(' • ')}</p>
    <p><strong>Cambridge Alignment:</strong> ${book.cambridgeStageAlignment}</p>
  </div>

  <h2>Chapters & Reading Text</h2>
  ${content.chapters.map(ch => `
    <div class="chapter-box">
      <h3>Chapter ${ch.chapterNumber}: ${ch.title}</h3>
      <p style="white-space: pre-line;">${ch.readingPassage}</p>
      <h4>Vocabulary</h4>
      <ul>
        ${ch.vocabulary.map(v => `<li><strong>${v.word}:</strong> ${v.definition} (<em>${v.exampleSentence}</em>)</li>`).join('')}
      </ul>
      <p><strong>Discussion Prompt:</strong> ${ch.discussionQuestion}</p>
    </div>
  `).join('')}

  <div class="worksheet-box">
    <h2>Printable Offline Worksheet: ${content.worksheet.title}</h2>
    <p>${content.worksheet.instructions}</p>
    <h3>Fill in the Blanks</h3>
    <ol>
      ${content.worksheet.fillInTheBlank.map(f => `<li>${f.sentence.replace('_______', '____________________')} (Hint: ${f.hint})</li>`).join('')}
    </ol>
    <h3>Written Reflection Prompts</h3>
    <ul>
      ${content.worksheet.writtenResponsePrompts.map(p => `<li>${p}</li>`).join('')}
    </ul>
    <h3>Practical Hands-On Capstone</h3>
    <p>${content.worksheet.offlineProjectOrActivity}</p>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${content.title.replace(/[^a-zA-Z0-9]/g, '_')}_Offline_Book.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getThemeClasses = () => {
    switch (colorTheme) {
      case 'sepia':
        return 'bg-[#fcf8f2] text-[#2d241e] border-amber-200';
      case 'dark':
        return 'bg-slate-900 text-slate-100 border-slate-700';
      case 'light':
      default:
        return 'bg-white text-slate-800 border-slate-200';
    }
  };

  const getFontClasses = () => {
    switch (fontSize) {
      case 'large':
        return 'text-base sm:text-lg leading-relaxed';
      case 'xlarge':
        return 'text-lg sm:text-xl leading-loose';
      case 'normal':
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className={`rounded-3xl max-w-5xl w-full shadow-2xl flex flex-col max-h-[95vh] overflow-hidden border transition-colors duration-200 ${getThemeClasses()}`}>
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-amber-900/10 flex flex-wrap items-center justify-between gap-3 bg-amber-500/10 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
              {book.coverEmoji}
            </div>
            <div>
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md border border-amber-300">
                  Offline In-App E-Reader
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md border border-emerald-300" title="UNESCO 2019 Recommendation on OER Compliant • 5R Freedoms: Retain, Reuse, Revise, Remix, Redistribute • CC BY 4.0">
                  🏛️ UNESCO OER • 5R
                </span>
                <span className="text-[10px] font-semibold text-slate-500">
                  {book.ageLabel}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold font-['Outfit'] leading-tight">
                {content.title}
              </h2>
              <p className="text-xs text-slate-500">
                by {content.author} • {book.authorCountry}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Audio Reader */}
            <button
              onClick={handleToggleNarration}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                isNarrating 
                  ? 'bg-amber-600 text-white animate-pulse' 
                  : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-2xs'
              }`}
              title="Listen with built-in offline narration"
            >
              {isNarrating ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isNarrating ? 'Stop Audio' : 'Listen Offline'}</span>
            </button>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              title="Print reading passage & study worksheet"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Offline HTML Download */}
            <button
              onClick={handleDownloadOfflineHtml}
              className="p-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-2xs transition-colors cursor-pointer"
              title="Download standalone offline HTML file"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-2xs transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs & Reading Customization */}
        <div className="px-4 py-2.5 border-b border-amber-900/10 flex flex-wrap items-center justify-between gap-2 text-xs bg-black/5 shrink-0">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('read')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'read' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Text & Chapters</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'quiz' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Comprehension Quiz</span>
            </button>

            <button
              onClick={() => setActiveTab('worksheet')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'worksheet' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Printable Worksheet</span>
            </button>

            <button
              onClick={() => setActiveTab('exam')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'exam' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Mock Exam Paper</span>
            </button>
          </div>

          {/* Reading Preferences (Font & Theme) */}
          <div className="flex items-center space-x-1.5">
            {/* Font Size */}
            <div className="flex items-center bg-white/70 rounded-lg p-0.5 border border-slate-200">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded text-[11px] font-bold ${fontSize === 'normal' ? 'bg-amber-500 text-white' : 'text-slate-600'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded text-xs font-bold ${fontSize === 'large' ? 'bg-amber-500 text-white' : 'text-slate-600'}`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-0.5 rounded text-sm font-bold ${fontSize === 'xlarge' ? 'bg-amber-500 text-white' : 'text-slate-600'}`}
              >
                A++
              </button>
            </div>

            {/* Theme */}
            <div className="flex items-center bg-white/70 rounded-lg p-0.5 border border-slate-200">
              <button
                onClick={() => setColorTheme('sepia')}
                className={`p-1 rounded ${colorTheme === 'sepia' ? 'bg-amber-500 text-white' : 'text-amber-800'}`}
                title="Sepia Paper"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setColorTheme('light')}
                className={`p-1 rounded ${colorTheme === 'light' ? 'bg-amber-500 text-white' : 'text-slate-600'}`}
                title="Clean White"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setColorTheme('dark')}
                className={`p-1 rounded ${colorTheme === 'dark' ? 'bg-amber-500 text-white' : 'text-slate-600'}`}
                title="Night Dark"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 printable-area">
          
          {/* TAB 1: READ CHAPTERS */}
          {activeTab === 'read' && (
            <div className="space-y-6">
              {/* Chapter Selector Ribbon */}
              <div className="flex items-center justify-between pb-3 border-b border-amber-900/10">
                <div className="flex items-center space-x-1.5 overflow-x-auto py-1">
                  {content.chapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        stopSpeaking();
                        setIsNarrating(false);
                        setActiveChapterIndex(idx);
                      }}
                      className={`px-3 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all cursor-pointer ${
                        activeChapterIndex === idx
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-black/5 hover:bg-black/10 text-slate-700'
                      }`}
                    >
                      <span>Chapter {ch.chapterNumber}</span>
                    </button>
                  ))}
                </div>

                <div className="hidden sm:flex items-center space-x-1 text-xs text-slate-500">
                  <span>{activeChapterIndex + 1} of {content.chapters.length}</span>
                </div>
              </div>

              {/* Chapter Header */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                  Chapter {currentChapter.chapterNumber}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] mt-1">
                  {currentChapter.title}
                </h3>
              </div>

              {/* Full Reading Passage */}
              <div className={`p-6 rounded-3xl bg-black/5 border border-black/5 shadow-inner ${getFontClasses()}`}>
                <p className="whitespace-pre-line leading-relaxed font-serif">
                  {currentChapter.readingPassage}
                </p>
              </div>

              {/* Vocabulary Box */}
              {currentChapter.vocabulary.length > 0 && (
                <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/20 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Vocabulary Study & Context</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {currentChapter.vocabulary.map((vocab, vIdx) => (
                      <div key={vIdx} className="p-3 rounded-2xl bg-white/70 border border-amber-200/50 text-xs">
                        <strong className="text-slate-900 block text-sm font-['Outfit'] mb-0.5">
                          {vocab.word}
                        </strong>
                        <p className="text-slate-700 leading-snug mb-1">{vocab.definition}</p>
                        <p className="text-slate-500 italic text-[11px]">"{vocab.exampleSentence}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Discussion Prompt */}
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-xs sm:text-sm text-indigo-950 flex items-start space-x-3">
                <Bookmark className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-0.5">Family & Fireside Discussion Prompt:</strong>
                  <p>{currentChapter.discussionQuestion}</p>
                </div>
              </div>

              {/* Next / Previous Chapter Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-amber-900/10">
                <button
                  disabled={activeChapterIndex === 0}
                  onClick={() => {
                    stopSpeaking();
                    setIsNarrating(false);
                    setActiveChapterIndex(prev => Math.max(0, prev - 1));
                  }}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                    activeChapterIndex === 0
                      ? 'opacity-40 cursor-not-allowed bg-black/5 text-slate-400'
                      : 'bg-black/5 hover:bg-black/10 text-slate-800 cursor-pointer'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Chapter</span>
                </button>

                <button
                  disabled={activeChapterIndex === content.chapters.length - 1}
                  onClick={() => {
                    stopSpeaking();
                    setIsNarrating(false);
                    setActiveChapterIndex(prev => Math.min(content.chapters.length - 1, prev + 1));
                  }}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                    activeChapterIndex === content.chapters.length - 1
                      ? 'opacity-40 cursor-not-allowed bg-black/5 text-slate-400'
                      : 'bg-amber-600 hover:bg-amber-500 text-white cursor-pointer shadow-xs'
                  }`}
                >
                  <span>Next Chapter</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE COMPREHENSION QUIZ */}
          {activeTab === 'quiz' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                <strong className="text-amber-900 text-sm block mb-1">
                  Interactive Chapter Comprehension Quizzes
                </strong>
                <p className="text-amber-800">
                  Select your answers for each chapter's reading test. Immediate explanations help reinforce reading retention and analytical literacy without requiring internet connection.
                </p>
              </div>

              <div className="space-y-6">
                {content.chapters.map((ch, chIdx) => {
                  const quiz = ch.comprehensionQuiz;
                  const selectedOption = selectedQuizAnswers[chIdx];
                  const isSubmitted = quizSubmitted[chIdx];
                  const isCorrect = isSubmitted && selectedOption === quiz.correctIndex;

                  return (
                    <div key={chIdx} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          Chapter {ch.chapterNumber} Assessment
                        </span>
                        {isSubmitted && (
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {isCorrect ? '✓ Correct (+5 Marks)' : '✗ Incorrect (Review Story)'}
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit']">
                        {quiz.question}
                      </h4>

                      <div className="space-y-2">
                        {quiz.options.map((opt, optIdx) => {
                          let btnStyle = 'bg-slate-50 hover:bg-amber-50/70 border-slate-200 text-slate-800';
                          if (selectedOption === optIdx && !isSubmitted) {
                            btnStyle = 'bg-amber-100 border-amber-500 text-amber-950 font-bold';
                          } else if (isSubmitted) {
                            if (optIdx === quiz.correctIndex) {
                              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                            } else if (selectedOption === optIdx) {
                              btnStyle = 'bg-red-50 border-red-500 text-red-950 line-through';
                            } else {
                              btnStyle = 'opacity-50 border-slate-100 text-slate-400';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={isSubmitted}
                              onClick={() => {
                                setSelectedQuizAnswers(prev => ({ ...prev, [chIdx]: optIdx }));
                              }}
                              className={`w-full text-left p-3 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {isSubmitted && optIdx === quiz.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {!isSubmitted ? (
                          <button
                            disabled={selectedOption === undefined}
                            onClick={() => {
                              setQuizSubmitted(prev => ({ ...prev, [chIdx]: true }));
                            }}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                              selectedOption !== undefined
                                ? 'bg-amber-600 hover:bg-amber-500 text-white cursor-pointer shadow-xs'
                                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            Check Answer
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setQuizSubmitted(prev => ({ ...prev, [chIdx]: false }));
                              setSelectedQuizAnswers(prev => {
                                const copy = { ...prev };
                                delete copy[chIdx];
                                return copy;
                              });
                            }}
                            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Retry</span>
                          </button>
                        )}
                      </div>

                      {isSubmitted && (
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                          <strong className="text-slate-900 block mb-0.5">Pedagogical Explanation:</strong>
                          <p>{quiz.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: PRINTABLE STUDY WORKSHEET */}
          {activeTab === 'worksheet' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs flex items-center justify-between gap-3">
                <div>
                  <strong className="text-emerald-900 text-sm block mb-0.5">
                    100% Offline Printable Learning Worksheet
                  </strong>
                  <p className="text-emerald-800">
                    Designed for home study, classroom distribution, or offline independent work. Click "Print Worksheet" to format perfectly for physical paper.
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

              {/* Student Header for physical print */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Candidate Name</label>
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
                  <label className="text-[10px] uppercase font-bold text-slate-400 block">Subject / Level</label>
                  <div className="border-b border-slate-300 pb-1 font-semibold text-slate-800">
                    {book.categoryLabel}
                  </div>
                </div>
              </div>

              {/* Section 1: Fill in the Blanks */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">1</span>
                  <span>Vocabulary & Memory Sentence Completion</span>
                </div>

                <div className="space-y-3">
                  {content.worksheet.fillInTheBlank.map((item, fIdx) => (
                    <div key={fIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                      <p className="text-slate-900 mb-2 leading-relaxed">
                        {item.sentence.replace('_______', '______________')}
                      </p>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setRevealedHints(prev => ({ ...prev, [fIdx]: !prev[fIdx] }))}
                          className="text-[11px] font-bold text-amber-700 hover:text-amber-800 cursor-pointer flex items-center space-x-1"
                        >
                          <HelpCircle className="w-3 h-3" />
                          <span>{revealedHints[fIdx] ? 'Hide Hint' : 'Show Hint'}</span>
                        </button>
                        {revealedHints[fIdx] && (
                          <span className="text-[11px] text-slate-500 italic bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            Hint: {item.hint}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2: Written Response Prompts */}
              <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">2</span>
                  <span>Critical Thinking & Moral Analysis Prompts</span>
                </div>

                <div className="space-y-4">
                  {content.worksheet.writtenResponsePrompts.map((prompt, pIdx) => (
                    <div key={pIdx} className="space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        {prompt}
                      </p>
                      <div className="w-full h-24 border border-dashed border-slate-300 rounded-xl p-2.5 text-xs text-slate-400 bg-slate-50/50">
                        (Student response area: write in full sentences with supporting evidence...)
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Offline Capstone Project */}
              <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-200 text-amber-900 px-2 py-0.5 rounded-md">
                  Hands-On Capstone Project
                </span>
                <p className="text-sm font-bold font-['Outfit']">
                  {content.worksheet.offlineProjectOrActivity}
                </p>
                <p className="text-[11px] text-amber-800 pt-1">
                  <strong>Marking Guide: </strong>{content.worksheet.markingGuide}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: MOCK EXAM PAPER */}
          {activeTab === 'exam' && (
            <div className="space-y-6">
              {/* Exam Header */}
              <div className="p-5 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-sky-300 uppercase tracking-widest mb-1">
                    <Award className="w-4 h-4" />
                    <span>CAIE Aligned Official Paper • {content.mockExam.syllabusCode}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-['Outfit']">
                    {content.title} Examination Paper
                  </h3>
                  <p className="text-xs text-slate-300">
                    Total Marks: {content.mockExam.totalMarks} • Time Allowed: {content.mockExam.timeAllowedMinutes} Minutes
                  </p>
                </div>

                <div className="flex items-center space-x-3 bg-white/10 p-2.5 rounded-2xl border border-white/10 shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <span className="text-lg font-mono font-bold">{formatTimer(examTimer)}</span>
                  <button
                    onClick={() => setExamTimerRunning(!examTimerRunning)}
                    className="px-3 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {examTimerRunning ? 'Pause' : 'Start Timer'}
                  </button>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-5">
                {content.mockExam.questions.map((q, qIdx) => (
                  <div key={qIdx} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">
                        Question {q.questionNumber}
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                        [{q.marks} Marks]
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                      {q.questionText}
                    </p>

                    <div className="w-full h-24 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-400 bg-slate-50/50">
                      (Write your full analytical answer here...)
                    </div>

                    {/* Marking Scheme Toggle */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => setRevealedExamAnswers(prev => ({ ...prev, [qIdx]: !prev[qIdx] }))}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center space-x-1 cursor-pointer"
                      >
                        {revealedExamAnswers[qIdx] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{revealedExamAnswers[qIdx] ? 'Hide Model Answer & Rubric' : 'Reveal Official Model Answer & Rubric'}</span>
                      </button>

                      {revealedExamAnswers[qIdx] && (
                        <div className="flex items-center space-x-1.5 text-xs">
                          <label className="text-slate-500 font-bold">Self-Score:</label>
                          <select
                            value={studentExamScores[qIdx] || 0}
                            onChange={(e) => setStudentExamScores(prev => ({ ...prev, [qIdx]: parseInt(e.target.value, 10) }))}
                            className="bg-slate-100 border border-slate-300 rounded-lg px-2 py-1 font-bold text-slate-800"
                          >
                            {Array.from({ length: q.marks + 1 }).map((_, m) => (
                              <option key={m} value={m}>{m} / {q.marks}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    {/* Model Answer & Rubric Panel */}
                    {revealedExamAnswers[qIdx] && (
                      <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs space-y-2 animate-in fade-in duration-150">
                        <div>
                          <strong className="text-indigo-950 block text-[11px] uppercase tracking-wider mb-0.5">
                            Official Model Answer:
                          </strong>
                          <p className="text-indigo-900 leading-relaxed font-serif">
                            {q.modelAnswer}
                          </p>
                        </div>

                        <div>
                          <strong className="text-indigo-950 block text-[11px] uppercase tracking-wider mb-0.5">
                            Marking Rubric Criteria:
                          </strong>
                          <ul className="list-disc list-inside text-indigo-800 space-y-0.5">
                            {q.rubricCriteria.map((c, cIdx) => (
                              <li key={cIdx}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* UNESCO OER 2019 Recommendation Attribution Footer */}
          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                🏛️ UNESCO OER Certified
              </span>
              <span>Conforms to UNESCO 2019 Paris Recommendation • CC BY 4.0</span>
            </div>
            <div className="flex items-center space-x-2 font-mono text-[10px] text-slate-400">
              <span>Retain</span>•<span>Reuse</span>•<span>Revise</span>•<span>Remix</span>•<span>Redistribute</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
