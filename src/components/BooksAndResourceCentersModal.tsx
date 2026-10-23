import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Library, 
  ExternalLink, 
  Sparkles, 
  Award, 
  Download, 
  Search, 
  Bookmark, 
  Globe, 
  CheckCircle2, 
  Printer, 
  Users, 
  Heart, 
  Compass,
  GraduationCap,
  FlaskConical,
  Calculator,
  Coins,
  Copy,
  Check,
  Cpu,
  Layers,
  Wrench,
  Palette,
  Zap
} from 'lucide-react';
import { 
  RECOMMENDED_BOOKS, 
  FEATURED_AUTHORS, 
  RESOURCE_CENTERS, 
  RESOURCE_SUBJECTS,
  RecommendedBook, 
  FeaturedAuthor, 
  ResourceCenter,
  ResourceSubjectId
} from '../data/booksAndResourceCentersData';
import { ChildProfile, AgeBand } from '../types/curriculum';
import { LocalBookReaderModal } from './LocalBookReaderModal';
import { LocalResourceCenterModal } from './LocalResourceCenterModal';

interface BooksAndResourceCentersModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile?: ChildProfile;
}

export const BooksAndResourceCentersModal: React.FC<BooksAndResourceCentersModalProps> = ({
  isOpen,
  onClose,
  currentProfile
}) => {
  const [activeTab, setActiveTab] = useState<'books' | 'authors' | 'resource-centers' | 'offline-guide'>('books');
  const [selectedAgeFilter, setSelectedAgeFilter] = useState<string>('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [selectedResourceSubject, setSelectedResourceSubject] = useState<ResourceSubjectId>('all');
  const [selectedResourceAgeFilter, setSelectedResourceAgeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // In-App Offline Reader & Resource Center states
  const [selectedBookForReader, setSelectedBookForReader] = useState<RecommendedBook | null>(null);
  const [isReaderModalOpen, setIsReaderModalOpen] = useState<boolean>(false);
  const [selectedRcForLab, setSelectedRcForLab] = useState<ResourceCenter | null>(null);
  const [isRcModalOpen, setIsRcModalOpen] = useState<boolean>(false);

  if (!isOpen) return null;

  // Filter books
  const filteredBooks = RECOMMENDED_BOOKS.filter((book) => {
    const matchesAge = selectedAgeFilter === 'all' || book.ageBand === selectedAgeFilter;
    const matchesCategory = selectedCategoryFilter === 'all' || book.category === selectedCategoryFilter;
    const matchesSearch = !searchQuery.trim() || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.versionTag && book.versionTag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesAge && matchesCategory && matchesSearch;
  });

  // Filter resource centers
  const filteredResourceCenters = RESOURCE_CENTERS.filter((rc) => {
    const matchesSubject = selectedResourceSubject === 'all' || rc.subjectId === selectedResourceSubject || rc.subjectId === 'all';
    const matchesAge = selectedResourceAgeFilter === 'all' || rc.ageBands.includes(selectedResourceAgeFilter as AgeBand);
    const matchesSearch = !searchQuery.trim() || 
      rc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rc.subjectLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rc.keyFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (rc.cambridgeAlignment && rc.cambridgeAlignment.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSubject && matchesAge && matchesSearch;
  });

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = (url: string, title: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(title);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-amber-200 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 via-orange-800 to-slate-900 text-white p-5 sm:p-6 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-300/30 flex items-center space-x-1">
              <Library className="w-3.5 h-3.5" />
              <span>GLOBAL REPOSITORY & LITERARY CANON</span>
            </span>
            <span className="text-xs text-amber-200 font-medium">Curated for Ages 3–18+</span>
            <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-400/30 px-2 py-0.5 rounded-full">
              Includes The Holy Bible (NLT & The Message)
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            Books, Authors & Resource Centers Across All Subjects
          </h1>
          <p className="text-amber-100 font-medium text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            Timeless masterworks, world-renowned African & global authors, The Holy Bible (New Living Translation & The Message), and 100% free digital learning centers across all 10 curricular subjects.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs font-bold">
          <button
            onClick={() => setActiveTab('books')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'books' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Recommended Books ({RECOMMENDED_BOOKS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('resource-centers')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'resource-centers' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Library className="w-3.5 h-3.5" />
            <span>Resource Centers For All Subjects ({RESOURCE_CENTERS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('authors')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'authors' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Renowned Authors ({FEATURED_AUTHORS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('offline-guide')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center space-x-1.5 ${
              activeTab === 'offline-guide' ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>How to Access Free Books</span>
          </button>

          <button
            onClick={handlePrint}
            className="ml-auto hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 cursor-pointer"
            title="Print Reading List"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print List</span>
          </button>
        </div>

        {/* Global Search Header in Modal */}
        <div className="px-5 py-3 bg-white border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books, authors, subjects, Bible (NLT/The Message), simulations..."
              className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-400 text-slate-800"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer"
              >
                ×
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-500 shrink-0">
            {activeTab === 'books' && (
              <span>Showing <strong>{filteredBooks.length}</strong> of {RECOMMENDED_BOOKS.length} books</span>
            )}
            {activeTab === 'resource-centers' && (
              <span>Showing <strong>{filteredResourceCenters.length}</strong> of {RESOURCE_CENTERS.length} resource centers</span>
            )}
            {activeTab === 'authors' && (
              <span>Showing <strong>{FEATURED_AUTHORS.length}</strong> world thinkers</span>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: RECOMMENDED BOOKS */}
          {activeTab === 'books' && (
            <div className="space-y-5">
              
              {/* Category & Age Filters */}
              <div className="flex flex-col gap-2.5 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                
                {/* Age Band Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
                    Age Group:
                  </span>
                  {[
                    { id: 'all', label: 'All Ages' },
                    { id: '3-5', label: 'Ages 3–5 (Discover)' },
                    { id: '6-8', label: 'Ages 6–8 (Explore)' },
                    { id: '9-12', label: 'Ages 9–12 (Understand)' },
                    { id: '13-16', label: 'Ages 13–16 (Investigate)' },
                    { id: '17+', label: 'Ages 17+ (Create & Launch)' },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedAgeFilter(filter.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        selectedAgeFilter === filter.id 
                          ? 'bg-slate-900 text-white shadow-xs' 
                          : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs pt-1 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
                    Category:
                  </span>
                  {[
                    { id: 'all', label: 'All Topics' },
                    { id: 'character-faith', label: '✝️ The Bible & Faith (NLT / MSG)' },
                    { id: 'literature', label: '📖 Literature & Classics' },
                    { id: 'science', label: '🔬 Science & Cosmos' },
                    { id: 'mathematics', label: '🔢 Mathematics & Logic' },
                    { id: 'history-society', label: '🌍 African & World History' },
                    { id: 'finance-leadership', label: '💰 Finance & Decision Making' },
                    { id: 'practical-tech', label: '💻 Practical Tech & Innovation' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategoryFilter(cat.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        selectedCategoryFilter === cat.id 
                          ? 'bg-amber-600 text-white shadow-xs' 
                          : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Scripture Banner if character-faith is active or query contains bible */}
              {(selectedCategoryFilter === 'character-faith' || searchQuery.toLowerCase().includes('bible') || searchQuery.toLowerCase().includes('nlt') || searchQuery.toLowerCase().includes('message')) && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white border border-purple-400/40 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-purple-400/20 text-purple-200 px-2 py-0.5 rounded-md border border-purple-300/30">
                      Featured Translations
                    </span>
                    <h4 className="text-base font-bold font-['Outfit'] mt-1">
                      The Holy Bible: New Living Translation (NLT) & The Message (MSG)
                    </h4>
                    <p className="text-xs text-purple-100/90 mt-0.5">
                      Both versions prioritize deep narrative engagement: <strong>NLT</strong> delivers dynamic linguistic precision and readability; <strong>The Message</strong> (Eugene Peterson) captures the vibrant cadence and emotional impact of original Hebrew/Greek for modern minds.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const scriptureBook = filteredBooks.find(b => b.category === 'character-faith') || RECOMMENDED_BOOKS.find(b => b.category === 'character-faith') || RECOMMENDED_BOOKS[1];
                      setSelectedBookForReader(scriptureBook);
                      setIsReaderModalOpen(true);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-white text-xs font-bold whitespace-nowrap transition-colors shadow-xs flex items-center space-x-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read In-App (Offline)</span>
                  </button>
                </div>
              )}

              {/* Books Grid */}
              {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredBooks.map((book) => (
                    <div 
                      key={book.id}
                      className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                            {book.categoryLabel}
                          </span>
                          <span className="text-[11px] font-bold text-slate-500">
                            {book.ageLabel}
                          </span>
                        </div>

                        {/* Version tag if present */}
                        {book.versionTag && (
                          <div className="mb-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-300 px-2 py-0.5 rounded-md inline-block shadow-2xs">
                              ✨ {book.versionTag}
                            </span>
                          </div>
                        )}

                        {/* Title & Author */}
                        <div className="flex items-start space-x-3 mt-1">
                          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shrink-0 shadow-inner">
                            {book.coverEmoji}
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit'] leading-snug">
                              {book.title}
                            </h3>
                            <p className="text-xs font-semibold text-slate-600">
                              by <strong className="text-slate-800">{book.author}</strong> • <span className="text-slate-400 font-normal">{book.authorCountry}</span>
                            </p>
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                          {book.summary}
                        </p>

                        {/* Key Takeaway & Cambridge Alignment */}
                        <div className="mt-3.5 space-y-1.5 text-[11px]">
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                            <strong className="text-slate-900">Key Takeaway: </strong>
                            <span>{book.keyTakeaway}</span>
                          </div>

                          <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-200/60 text-blue-900 flex items-center space-x-1.5">
                            <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span><strong>Cambridge Alignment:</strong> {book.cambridgeStageAlignment}</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        {book.openAccessType && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            ✓ {book.openAccessType}
                          </span>
                        )}

                        <button
                          onClick={() => {
                            setSelectedBookForReader(book);
                            setIsReaderModalOpen(true);
                          }}
                          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs ml-auto"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Read In-App (Offline)</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
                  <p className="text-slate-500 text-sm">No books found matching this filter or search.</p>
                  <button
                    onClick={() => {
                      setSelectedAgeFilter('all');
                      setSelectedCategoryFilter('all');
                      setSearchQuery('');
                    }}
                    className="mt-3 px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-bold"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: RESOURCE CENTERS FOR ALL SUBJECTS */}
          {activeTab === 'resource-centers' && (
            <div className="space-y-6">
              
              {/* Introduction Banner */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-900 text-white border border-indigo-800/80 shadow-md">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/20 px-2.5 py-0.5 rounded-md border border-indigo-400/30">
                    Resource Centers Across All Subjects
                  </span>
                  <span className="text-xs text-indigo-200">100% Free & Open Access</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black font-['Outfit']">
                  Free Laboratories, Digital Libraries & Toolkits for Every Discipline
                </h3>
                <p className="text-xs sm:text-sm text-indigo-100/90 mt-1 max-w-3xl leading-relaxed">
                  Education shouldn't cost a fortune. We have mapped comprehensive, free, world-standard learning portals for <strong>every single one of our 10 curriculum subjects</strong>—including mathematics, physics simulations, coding playgrounds, African history, agriculture manuals, and scripture portals with the <strong>New Living Translation (NLT) and The Message (MSG)</strong>.
                </p>
              </div>

              {/* Subject Filter Bar */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    <span>Select Curricular Subject ({RESOURCE_SUBJECTS.length}):</span>
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Showing: <strong>{filteredResourceCenters.length}</strong> centers
                  </span>
                </div>

                {/* Subject Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {RESOURCE_SUBJECTS.map((sub) => {
                    const isSelected = selectedResourceSubject === sub.id;
                    const count = sub.id === 'all' 
                      ? RESOURCE_CENTERS.length 
                      : RESOURCE_CENTERS.filter(r => r.subjectId === sub.id || r.subjectId === 'all').length;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setSelectedResourceSubject(sub.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300'
                            : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                        title={sub.description}
                      >
                        <span>{sub.emoji}</span>
                        <span>{sub.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          isSelected ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Age Filter for Resource Centers */}
                <div className="pt-2 border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
                    Target Age Group:
                  </span>
                  {[
                    { id: 'all', label: 'All Ages' },
                    { id: '3-5', label: 'Ages 3–5' },
                    { id: '6-8', label: 'Ages 6–8' },
                    { id: '9-12', label: 'Ages 9–12' },
                    { id: '13-16', label: 'Ages 13–16' },
                    { id: '17+', label: 'Ages 17+' },
                  ].map((age) => (
                    <button
                      key={age.id}
                      onClick={() => setSelectedResourceAgeFilter(age.id)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                        selectedResourceAgeFilter === age.id
                          ? 'bg-slate-900 text-white'
                          : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {age.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Resource Centers Grid */}
              {filteredResourceCenters.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredResourceCenters.map((rc) => {
                    const isScripture = rc.subjectId === 'character-faith';
                    return (
                      <div 
                        key={rc.id} 
                        className={`p-5 rounded-3xl bg-white border shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                          isScripture ? 'border-purple-300 ring-1 ring-purple-100' : 'border-slate-200 hover:border-indigo-300'
                        }`}
                      >
                        <div>
                          {/* Subject Pill & Tag */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border flex items-center space-x-1 ${
                              isScripture 
                                ? 'bg-purple-50 text-purple-900 border-purple-200' 
                                : 'bg-indigo-50 text-indigo-900 border-indigo-200'
                            }`}>
                              <span>{rc.subjectEmoji}</span>
                              <span>{rc.subjectLabel}</span>
                            </span>

                            <div className="flex items-center space-x-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                                {rc.typeLabel}
                              </span>
                              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                                100% Free
                              </span>
                            </div>
                          </div>

                          {/* Center Name */}
                          <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-['Outfit'] mt-1 flex items-center space-x-1.5">
                            <span>{rc.name}</span>
                          </h4>

                          <p className="text-xs text-slate-600 leading-relaxed mt-2 mb-3">
                            {rc.description}
                          </p>

                          {/* Cambridge Alignment if present */}
                          {rc.cambridgeAlignment && (
                            <div className="mb-3 p-2 rounded-xl bg-blue-50/70 border border-blue-200/60 text-blue-900 text-[11px] flex items-center space-x-1.5">
                              <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                              <span><strong>Framework Alignment:</strong> {rc.cambridgeAlignment}</span>
                            </div>
                          )}

                          {/* Key Features */}
                          <ul className="space-y-1 text-xs text-slate-700 mb-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                            {rc.keyFeatures.map((feat, i) => (
                              <li key={i} className="flex items-start space-x-1.5">
                                <span className={isScripture ? "text-purple-600 font-bold" : "text-indigo-600 font-bold"}>•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Age Band Pills */}
                          <div className="flex flex-wrap items-center gap-1 mb-2">
                            <span className="text-[10px] text-slate-400 font-medium mr-1">Recommended:</span>
                            {rc.ageBands.map((band) => (
                              <span key={band} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded-md">
                                Ages {band}
                              </span>
                            ))}
                          </div>

                          {rc.physicalLocationsNotes && (
                            <p className="text-[11px] text-slate-500 mb-3 italic">
                              📍 {rc.physicalLocationsNotes}
                            </p>
                          )}
                        </div>

                        {/* Card Footer Actions */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold text-slate-400 flex items-center space-x-1">
                            <span>{rc.offlineCapable ? '⚡ Offline Capable' : '🌐 Web Access'}</span>
                          </span>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleCopyLink(rc.accessUrl, rc.name)}
                              className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer flex items-center space-x-1"
                              title="Copy URL"
                            >
                              {copiedLink === rc.name ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  <span className="text-emerald-700">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>

                            <button
                              onClick={() => {
                                setSelectedRcForLab(rc);
                                setIsRcModalOpen(true);
                              }}
                              className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-white font-bold text-xs transition-colors cursor-pointer shadow-xs ${
                                isScripture ? 'bg-purple-700 hover:bg-purple-800' : 'bg-indigo-600 hover:bg-indigo-700'
                              }`}
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Open Offline Study Lab</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
                  <p className="text-slate-500 text-sm">No resource centers found for this subject or search.</p>
                  <button
                    onClick={() => {
                      setSelectedResourceSubject('all');
                      setSelectedResourceAgeFilter('all');
                      setSearchQuery('');
                    }}
                    className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
                  >
                    Show All Subjects
                  </button>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: RENOWNED AUTHORS */}
          {activeTab === 'authors' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-3xl bg-amber-50 border border-amber-200">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md inline-block mb-1">
                  Living Mentors & Voices of Human Dignity
                </span>
                <h3 className="text-lg font-black text-slate-900 font-['Outfit']">
                  Renowned African & World Authors and Thinkers
                </h3>
                <p className="text-xs text-slate-700 mt-1 max-w-2xl leading-relaxed">
                  Every child should be surrounded by great minds who demonstrate integrity, courage, profound storytelling, and intellectual defense of truth and compassion.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FEATURED_AUTHORS.map((author) => (
                  <div key={author.id} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between">
                    <div>
                      {/* Author Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shadow-inner shrink-0">
                            {author.avatar}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 font-['Outfit']">
                              {author.name}
                            </h4>
                            <p className="text-xs text-slate-500 font-medium">
                              {author.heritage} • <span className="font-mono text-[11px]">{author.lifespan}</span>
                            </p>
                          </div>
                        </div>

                        <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {author.recommendedForAges}
                        </span>
                      </div>

                      {/* Quote */}
                      <blockquote className="my-3 p-3 rounded-2xl bg-slate-50 border-l-4 border-amber-500 text-xs italic text-slate-700 leading-relaxed">
                        "{author.quote}"
                      </blockquote>

                      {/* Philosophical Impact */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        <strong className="text-slate-800">Impact on Learner: </strong>
                        {author.philosophicalImpact}
                      </p>

                      {/* Signature Works */}
                      <div className="pt-2.5 border-t border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Signature Masterpieces:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {author.signatureWorks.map((work, i) => (
                            <span key={i} className="text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 px-2 py-0.5 rounded-lg">
                              📖 {work}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: HOW TO ACCESS FREE BOOKS */}
          {activeTab === 'offline-guide' && (
            <div className="space-y-6">
              
              <div className="p-6 rounded-3xl bg-slate-900 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Parent Action Guide
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-['Outfit']">
                  How Every Parent Can Build a Home Library for Zero Cost
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                  In Uganda, East Africa, and globally, smartphones with basic WhatsApp capabilities can download and store thousands of books in lightweight formats. Here is how:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-sm mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Download Over Free Wi-Fi</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Visit a local church, coffee shop, or school with Wi-Fi once a week. Download 5 to 10 EPUBs or PDFs from <strong>Project Gutenberg</strong> or <strong>African Storybook</strong>. Each book takes less than 1MB of space.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-bold flex items-center justify-center text-sm mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Get Offline Bibles on YouVersion</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Download the free <strong>YouVersion (Bible.com)</strong> mobile app. Download the <strong>New Living Translation (NLT)</strong> and <strong>The Message (MSG)</strong> for 100% offline access with zero data cost.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Print Weekly Community Booklets</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Use <strong>Book Dash</strong> print-ready files. A 16-page illustrated book can be printed at a local stationery shop or church office for less than 1,000 UGX ($0.25), creating physical books that can be shared across 10 families.
                  </p>
                </div>

              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Fireside Reading Tip:</strong> Spend 15 minutes before sleep reading aloud with your child in English and your local mother tongue. Ask: <em>"Why do you think the character made that choice?"</em> or <em>"How does this proverb help us in our neighborhood?"</em>
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © Educate the World Initiative • Open Educational Resources & Literary Canon
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close Library Hub
            </button>
          </div>
        </div>

      </div>

      {/* 100% Offline Embedded In-App Readers */}
      <LocalBookReaderModal
        book={selectedBookForReader}
        isOpen={isReaderModalOpen}
        onClose={() => {
          setIsReaderModalOpen(false);
          setSelectedBookForReader(null);
        }}
      />

      <LocalResourceCenterModal
        resourceCenter={selectedRcForLab}
        isOpen={isRcModalOpen}
        onClose={() => {
          setIsRcModalOpen(false);
          setSelectedRcForLab(null);
        }}
      />
    </div>
  );
};
