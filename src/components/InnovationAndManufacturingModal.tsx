import React, { useState } from 'react';
import { 
  X, 
  Wrench, 
  Factory, 
  Sparkles, 
  CheckCircle2, 
  DollarSign, 
  TrendingUp, 
  Printer, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  ExternalLink,
  Tag,
  Coins,
  Search,
  Scale,
  Award
} from 'lucide-react';
import { 
  MANUFACTURED_PRODUCTS, 
  MANUFACTURING_CATEGORIES, 
  ManufacturedProductBlueprint 
} from '../data/innovationAndManufacturingData';

interface InnovationAndManufacturingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLesson?: (lessonId: string) => void;
  initialProductId?: string;
}

export const InnovationAndManufacturingModal: React.FC<InnovationAndManufacturingModalProps> = ({
  isOpen,
  onClose,
  onOpenLesson,
  initialProductId
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Manufactured Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>(initialProductId);
  
  // Interactive Calculator state
  const [customRetailPrice, setCustomRetailPrice] = useState<number | null>(null);

  if (!isOpen) return null;

  const filteredProducts = MANUFACTURED_PRODUCTS.filter(p => {
    const matchesCat = selectedCategory === 'All Manufactured Products' || p.category === selectedCategory;
    const matchesSearch = !searchQuery.trim() || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.marketNeed.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.readingFoundation.scientificOrMathPrinciple.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.billOfMaterials.some(m => m.item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const selectedProduct: ManufacturedProductBlueprint = 
    MANUFACTURED_PRODUCTS.find(p => p.id === selectedProductId) || filteredProducts[0] || MANUFACTURED_PRODUCTS[0];

  const currentPrice = customRetailPrice !== null ? customRetailPrice : selectedProduct.unitEconomics.recommendedRetailPriceUgx;
  const currentProfit = currentPrice - selectedProduct.unitEconomics.totalProductionCostUgx;
  const currentMargin = Math.round((currentProfit / currentPrice) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-amber-200 flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-950 via-amber-950 to-slate-900 text-white p-5 sm:p-6 relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-400/30 flex items-center space-x-1.5 shadow-2xs">
              <Factory className="w-3.5 h-3.5 text-amber-400" />
              <span>READING TO MANUFACTURING & INNOVATION</span>
            </span>
            <span className="text-xs text-amber-200 font-semibold">
              Turn Knowledge Into Physical Products & Market Wealth
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Outfit'] tracking-tight">
            From Reading to Manufactured Products & Market Enterprise
          </h1>
          <p className="text-amber-100/90 font-medium text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            "A child must be able to start innovations and manufacturing products and other products on markets through reading." Read technical schematics, master chemical and mathematical principles, and produce physical goods that solve urgent community needs!
          </p>
        </div>

        {/* Categories Bar & Search */}
        <div className="bg-slate-100/90 border-b border-slate-200 p-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {MANUFACTURING_CATEGORIES.map((cat, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCustomRetailPrice(null);
                }}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative flex-1 sm:max-w-xs min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, soap, water filter, paver..."
              className="w-full text-xs pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
            />
          </div>

        </div>

        {/* Content Body: Two Columns (Left: Product List, Right: Blueprint & Calculator) */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Product Selection Grid (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-1">
              <span>{filteredProducts.length} Manufactured Blueprints</span>
              <span className="text-amber-800">100% Market-Ready</span>
            </div>

            <div className="space-y-2.5">
              {filteredProducts.map(prod => {
                const isSelected = selectedProduct.id === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => {
                      setSelectedProductId(prod.id);
                      setCustomRetailPrice(null);
                    }}
                    className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-50/80 border-amber-500 shadow-md ring-2 ring-amber-300'
                        : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                          {prod.category}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400">
                          Ages {prod.targetAgeBand}
                        </span>
                      </div>

                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                        {prod.name}
                      </h4>

                      <p className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {prod.marketNeed}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="font-mono text-emerald-700 font-bold">
                        +{prod.unitEconomics.profitMarginPercent}% Margin
                      </span>
                      <span className="font-bold text-amber-700 text-[11px]">
                        {prod.unitEconomics.recommendedRetailPriceUgx.toLocaleString()} UGX →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Complete Technical Blueprint & Economics Calculator (8 cols on lg) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Blueprint Header */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-stone-900 to-amber-950 text-white space-y-3 shadow-md relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-white">
                  {selectedProduct.category} • Ages {selectedProduct.targetAgeBand}
                </span>

                <button
                  onClick={handlePrint}
                  className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-amber-300" />
                  <span>Print Blueprint Protocol</span>
                </button>
              </div>

              <h2 className="text-lg sm:text-2xl font-black font-['Outfit'] text-white">
                {selectedProduct.name}
              </h2>

              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-medium">
                <strong>Market Problem: </strong>{selectedProduct.marketNeed}
              </p>

              {/* Standards Badges */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2 py-0.5 rounded-md bg-white/10 text-amber-200 font-mono">
                  🇺🇸 {selectedProduct.standardsAlignment.usStandard}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white/10 text-sky-200 font-mono">
                  🇬🇧 {selectedProduct.standardsAlignment.cambridgeStandard}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white/10 text-emerald-200 font-mono">
                  🇺🇳 SDG Goal {selectedProduct.standardsAlignment.unSdgNumber}
                </span>
              </div>
            </div>

            {/* 1. The Reading Foundation (Science & Math behind the product) */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-amber-800" />
                <h4 className="font-extrabold text-sm text-amber-950 font-['Outfit']">
                  The Reading Foundation: The Science & Math You Master First
                </h4>
              </div>
              <p className="text-slate-800 leading-relaxed">
                <strong>Scientific & Math Law: </strong>
                {selectedProduct.readingFoundation.scientificOrMathPrinciple}
              </p>
              <p className="text-slate-700 leading-relaxed">
                <strong>Core Reading Concept: </strong>
                {selectedProduct.readingFoundation.coreReadingConcept}
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-amber-900 font-medium">
                <span className="font-bold">Required Reading Manuals: </span>
                {selectedProduct.readingFoundation.relevantBooksOrManuals.map((bk, i) => (
                  <span key={i} className="bg-white/80 px-2 py-0.5 rounded-md border border-amber-300">
                    📖 {bk}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Bill of Materials (100% Local Scrap & Low-Cost) */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900 flex items-center space-x-2 font-['Outfit']">
                  <Wrench className="w-4 h-4 text-amber-600" />
                  <span>Bill of Materials (Zero-Waste & Low-Cost)</span>
                </h4>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  Total Cost: {selectedProduct.unitEconomics.totalProductionCostUgx.toLocaleString()} UGX (~${(selectedProduct.unitEconomics.totalProductionCostUgx / 3700).toFixed(2)})
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {selectedProduct.billOfMaterials.map((mat, i) => (
                  <div key={i} className="py-2 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-800">{mat.item}</span>
                      <span className="block text-[10px] text-slate-400">{mat.source}</span>
                    </div>
                    <span className="font-mono font-bold text-slate-700">
                      {mat.estimatedCostUgx === 0 ? 'FREE (Local Scrap)' : `${mat.estimatedCostUgx.toLocaleString()} UGX`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Manufacturing Protocol (Step-by-Step SOP) */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 flex items-center space-x-2 font-['Outfit']">
                <Factory className="w-4 h-4 text-amber-600" />
                <span>Manufacturing Protocol (Standard Operating Procedure)</span>
              </h4>

              <div className="space-y-3">
                {selectedProduct.manufacturingProtocol.map(step => (
                  <div key={step.stepNumber} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-[11px] shrink-0">
                        {step.stepNumber}
                      </span>
                      <h5 className="font-bold text-slate-900">{step.title}</h5>
                    </div>
                    <p className="text-slate-700 leading-relaxed pl-7">
                      {step.action}
                    </p>
                    <div className="pl-7 text-[11px] text-emerald-900 font-medium">
                      <strong>✓ Quality Control: </strong>{step.qualityControlCheck}
                    </div>
                    {step.safetyPrecautions && (
                      <div className="pl-7 text-[11px] text-rose-800 font-semibold">
                        ⚠️ <strong>Safety Warning: </strong>{step.safetyPrecautions}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Interactive Unit Economics & Market Profit Calculator */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50 border-2 border-emerald-300 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-emerald-700" />
                  <h4 className="font-black text-sm text-emerald-950 font-['Outfit']">
                    Unit Economics & Market Profit Calculator
                  </h4>
                </div>
                <span className="text-xs font-bold text-emerald-900 bg-white px-2.5 py-0.5 rounded-full border border-emerald-300">
                  Real Business Cashflow
                </span>
              </div>

              {/* Numbers Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Unit Cost (COGS)</span>
                  <span className="text-sm sm:text-base font-black text-slate-900 font-mono">
                    {selectedProduct.unitEconomics.totalProductionCostUgx.toLocaleString()} UGX
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Selling Price</span>
                  <span className="text-sm sm:text-base font-black text-amber-700 font-mono">
                    {currentPrice.toLocaleString()} UGX
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-emerald-300 bg-emerald-50/50">
                  <span className="text-[10px] font-bold uppercase text-emerald-800 block">Net Profit / Unit</span>
                  <span className="text-sm sm:text-base font-black text-emerald-700 font-mono">
                    +{currentProfit.toLocaleString()} UGX
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-emerald-300 bg-emerald-50/50">
                  <span className="text-[10px] font-bold uppercase text-emerald-800 block">Profit Margin</span>
                  <span className="text-sm sm:text-base font-black text-emerald-700 font-mono">
                    {currentMargin}%
                  </span>
                </div>
              </div>

              {/* Price Tuning Slider */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-slate-700">
                    Test Market Pricing (Adjust Selling Price):
                  </label>
                  <span className="font-mono font-bold text-emerald-800">
                    {currentPrice.toLocaleString()} UGX
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedProduct.unitEconomics.totalProductionCostUgx * 1.1}
                  max={selectedProduct.unitEconomics.recommendedRetailPriceUgx * 2.5}
                  step={500}
                  value={currentPrice}
                  onChange={(e) => setCustomRetailPrice(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Minimum Viable Price</span>
                  <span>Premium Quality Price</span>
                </div>
              </div>

              {/* Daily Potential */}
              <div className="p-3 bg-emerald-100/60 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                <span>📈 <strong>Projected Daily Earning: </strong>{selectedProduct.unitEconomics.dailyEarningPotentialUgx}</span>
                <span className="font-semibold text-emerald-800 text-[11px]">{selectedProduct.unitEconomics.breakevenBatchSize}</span>
              </div>
            </div>

            {/* 5. Marketing, Branding & Scaling Channels */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
              <h4 className="font-bold text-sm text-slate-900 font-['Outfit']">
                Commercial Go-To-Market & Scaling Strategy
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">🎯 Primary Target Customers:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedProduct.marketStrategy.primaryBuyers}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">🏷️ Packaging & Distinctive Branding:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedProduct.marketStrategy.packagingAndBranding}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">🏪 Immediate Sales Channels:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedProduct.marketStrategy.localSellingChannel}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-1">🚀 Long-term Scaling Path:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedProduct.marketStrategy.scalingPath}</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Educate The World • "Through Reading, Any Child Can Manufacture and Innovate for Global Markets"</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Manufacturing Hub
          </button>
        </div>

      </div>
    </div>
  );
};
