import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Check, 
  Languages, 
  Building2, 
  TreePine, 
  ArrowRight,
  Info
} from 'lucide-react';
import { ChildProfile, LocationType, RegionalDialect } from '../types/curriculum';
import { DIALECT_COMPARISONS, REGIONAL_DIALECT_PRESETS } from '../data/dialectData';
import { speakText, stopSpeaking } from '../utils/speech';

interface LocationDialectModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProfile: ChildProfile;
  onUpdateProfileLocation: (location: LocationType, dialect?: RegionalDialect, locationName?: string) => void;
}

export const LocationDialectModal: React.FC<LocationDialectModalProps> = ({
  isOpen,
  onClose,
  currentProfile,
  onUpdateProfileLocation,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<LocationType>(currentProfile.location || 'rural');
  const [selectedDialect, setSelectedDialect] = useState<RegionalDialect>(currentProfile.preferredDialect || 'Luganda');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [speakingPhrase, setSpeakingPhrase] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSpeak = (text: string) => {
    if (speakingPhrase === text) {
      stopSpeaking();
      setSpeakingPhrase(null);
    } else {
      stopSpeaking();
      const started = speakText(text, () => setSpeakingPhrase(null));
      if (started) setSpeakingPhrase(text);
    }
  };

  const handleSaveSettings = () => {
    const locName = selectedLocation === 'urban' 
      ? `Urban Town (${selectedDialect})` 
      : `Rural Village (${selectedDialect})`;
    onUpdateProfileLocation(selectedLocation, selectedDialect, locName);
    onClose();
  };

  const filteredComparisons = activeCategory === 'all' 
    ? DIALECT_COMPARISONS 
    : DIALECT_COMPARISONS.filter(c => c.category === activeCategory);

  const activePreset = REGIONAL_DIALECT_PRESETS.find(p => p.code === selectedDialect) || REGIONAL_DIALECT_PRESETS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-amber-100 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white p-5 sm:p-6 relative">
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
            <Languages className="w-4 h-4" />
            <span>Local Dialect & Location Customizer</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold font-['Outfit'] mt-1">
            Adapting Lessons for {currentProfile.name}'s World
          </h2>

          <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-2xl">
            Whether your child grows up along town streets and kiosks or near the village shamba and borehole,
            Home Academy tailors dialects, stories, and household examples to match their daily environment.
          </p>
        </div>

        {/* Location Selection Controls */}
        <div className="p-4 sm:p-6 bg-amber-50/40 border-b border-amber-100 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Urban Toggle Option */}
            <div 
              onClick={() => setSelectedLocation('urban')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start space-x-3.5 ${
                selectedLocation === 'urban'
                  ? 'border-amber-500 bg-white shadow-md'
                  : 'border-slate-200 bg-white/70 hover:bg-white text-slate-600'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                selectedLocation === 'urban' ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-100 text-slate-500'
              }`}>
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-['Outfit']">
                    🏙️ Urban (Town & City)
                  </h3>
                  {selectedLocation === 'urban' && (
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">
                      <Check className="w-3 h-3 stroke-3" />
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Examples feature town streets, corner duukas, boda boda stages, prepaid Yaka electricity, city tap water, and lively urban phrasing.
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md">Ki kati!</span>
                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md">Boda ya elfu</span>
                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md">Rolex & tap</span>
                </div>
              </div>
            </div>

            {/* Rural Toggle Option */}
            <div 
              onClick={() => setSelectedLocation('rural')}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start space-x-3.5 ${
                selectedLocation === 'rural'
                  ? 'border-emerald-500 bg-white shadow-md'
                  : 'border-slate-200 bg-white/70 hover:bg-white text-slate-600'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                selectedLocation === 'rural' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-500'
              }`}>
                <TreePine className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-['Outfit']">
                    🌾 Rural (Village / Kyalo / Shamba)
                  </h3>
                  {selectedLocation === 'rural' && (
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                      <Check className="w-3 h-3 stroke-3" />
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Examples feature banana plantations (olusuku), community boreholes, evening fireside stories (ekyoto), livestock, and respectful proverbs.
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md">Olyotya nyabo!</span>
                  <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md">Ekyomba borehole</span>
                  <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md">Olusuku & ekyoto</span>
                </div>
              </div>
            </div>

          </div>

          {/* Regional Mother Tongue / Dialect Selector */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700">Mother Tongue / Dialect:</span>
              <div className="flex flex-wrap gap-1.5">
                {(['Luganda', 'Runyankole', 'Acholi', 'Lusoga', 'Swahili'] as RegionalDialect[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDialect(d)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedDialect === d
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleSaveSettings}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center space-x-1.5"
            >
              <span>Apply for {currentProfile.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison & Vocabulary Explorer */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
          
          {/* Header & Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-['Outfit']">
                How Lessons Change Between Town (Urban) & Village (Rural)
              </h3>
              <p className="text-xs text-slate-500">
                Tap the speaker icon 🔊 next to any phrase to hear pronunciation in our dialect speech engine!
              </p>
            </div>

            <div className="flex flex-wrap gap-1 text-xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'all' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Concepts
              </button>
              <button
                onClick={() => setActiveCategory('greetings')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'greetings' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Greetings
              </button>
              <button
                onClick={() => setActiveCategory('home-nature')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'home-nature' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Water & Nature
              </button>
              <button
                onClick={() => setActiveCategory('food-kitchen')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'food-kitchen' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Food & Fractions
              </button>
              <button
                onClick={() => setActiveCategory('money-trade')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeCategory === 'money-trade' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Money & Trade
              </button>
            </div>
          </div>

          {/* Side-by-Side Cards */}
          <div className="space-y-4">
            {filteredComparisons.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl border border-slate-200 bg-white shadow-xs">
                
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.concept}
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-500 italic">
                    {item.englishExplanation}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  
                  {/* Urban Variant Column */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    selectedLocation === 'urban' 
                      ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-400' 
                      : 'bg-slate-50/80 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md flex items-center space-x-1">
                        <Building2 className="w-3 h-3" />
                        <span>Urban Setting (Town / City)</span>
                      </span>

                      <button
                        onClick={() => handleSpeak(item.urban.phrase)}
                        className="p-1 rounded-lg text-amber-700 hover:bg-amber-200/60 transition-colors cursor-pointer"
                        title="Listen to dialect phrase"
                      >
                        {speakingPhrase === item.urban.phrase ? (
                          <VolumeX className="w-3.5 h-3.5 text-amber-900 animate-pulse" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <p className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {item.urban.phrase}
                    </p>
                    <p className="text-[11px] text-amber-900/80 font-medium mt-0.5">
                      {item.urban.dialect}
                    </p>

                    <div className="mt-2 text-xs text-slate-600 bg-white/80 p-2 rounded-lg border border-amber-100/80">
                      <span className="font-semibold text-slate-800">In Town: </span>
                      {item.urban.exampleDialogue}
                    </div>
                  </div>

                  {/* Rural Variant Column */}
                  <div className={`p-3.5 rounded-xl border transition-all ${
                    selectedLocation === 'rural' 
                      ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-400' 
                      : 'bg-slate-50/80 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md flex items-center space-x-1">
                        <TreePine className="w-3 h-3" />
                        <span>Rural Setting (Village / Kyalo)</span>
                      </span>

                      <button
                        onClick={() => handleSpeak(item.rural.phrase)}
                        className="p-1 rounded-lg text-emerald-700 hover:bg-emerald-200/60 transition-colors cursor-pointer"
                        title="Listen to dialect phrase"
                      >
                        {speakingPhrase === item.rural.phrase ? (
                          <VolumeX className="w-3.5 h-3.5 text-emerald-900 animate-pulse" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <p className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {item.rural.phrase}
                    </p>
                    <p className="text-[11px] text-emerald-900/80 font-medium mt-0.5">
                      {item.rural.dialect}
                    </p>

                    <div className="mt-2 text-xs text-slate-600 bg-white/80 p-2 rounded-lg border border-emerald-100/80">
                      <span className="font-semibold text-slate-800">In the Village: </span>
                      {item.rural.exampleDialogue}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Selected Dialect Regional Spotlight */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Region Spotlight: {activePreset.region}
              </span>
              <span className="text-[11px] text-slate-400">
                Active Dialect: {activePreset.code}
              </span>
            </div>

            <p className="text-xs text-slate-300">
              {selectedLocation === 'urban' ? (
                <>Showing <strong>Urban {activePreset.code}</strong> idioms commonly heard in town centers, commerce corridors, and schools.</>
              ) : (
                <>Showing <strong>Traditional {activePreset.code}</strong> proverbs and phrases spoken across village homesteads and community gatherings.</>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
              {(selectedLocation === 'urban' ? activePreset.urbanPhrases : activePreset.ruralPhrases).map((p, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-200">{p.localWord}</span>
                    <button
                      onClick={() => handleSpeak(p.localWord)}
                      className="text-slate-400 hover:text-white"
                      title="Listen"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-slate-300 text-[11px] mt-0.5">{p.englishMeaning}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 flex items-center space-x-1.5">
            <Info className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Currently showing: <strong>{selectedLocation === 'urban' ? 'Urban (Town)' : 'Rural (Village)'}</strong> dialect mode</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveSettings}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
            >
              Save & Apply Dialect
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
