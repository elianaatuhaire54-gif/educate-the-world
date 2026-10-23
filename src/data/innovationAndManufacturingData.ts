/**
 * EDUCATE THE WORLD INITIATIVE
 * INNOVATION & MANUFACTURING: FROM READING TO MARKET PRODUCTS
 * 
 * "A child must be able to start innovations and manufacturing products 
 * and other products on markets through reading."
 * 
 * Teaches students how to read technical blueprints, chemical principles,
 * and mathematical ratios, and turn that knowledge into physical,
 * market-ready manufactured goods with real economic value.
 */

import { AgeBand, SubjectCategory } from '../types/curriculum';

export interface ManufacturedProductBlueprint {
  id: string;
  name: string;
  category: 'Clean Tech & Water' | 'Biochemistry & Hygiene' | 'Food Science & Agriculture' | 'Mechanics & Energy' | 'Upcycling & Building' | 'Digital & Micro-Electronics';
  targetAgeBand: AgeBand;
  marketNeed: string;
  readingFoundation: {
    subject: string;
    scientificOrMathPrinciple: string;
    coreReadingConcept: string;
    relevantBooksOrManuals: string[];
  };
  standardsAlignment: {
    usStandard: string; // e.g. "NGSS MS-PS1-2 / CCSS.MATH.6.RP.A.3"
    cambridgeStandard: string; // e.g. "Cambridge IGCSE Chemistry 0620 / Enterprise 0454"
    unSdgNumber: number; // e.g. 6 (Clean Water) or 8 (Decent Work)
  };
  billOfMaterials: {
    item: string;
    source: 'Free Household / Farm Scrap' | 'Low-Cost Market Item' | 'Reused Container';
    estimatedCostUgx: number;
    estimatedCostUsd: number;
  }[];
  manufacturingProtocol: {
    stepNumber: number;
    title: string;
    action: string;
    qualityControlCheck: string;
    safetyPrecautions?: string;
  }[];
  unitEconomics: {
    totalProductionCostUgx: number;
    recommendedRetailPriceUgx: number;
    netProfitPerUnitUgx: number;
    profitMarginPercent: number;
    breakevenBatchSize: string;
    dailyEarningPotentialUgx: string;
  };
  marketStrategy: {
    primaryBuyers: string;
    packagingAndBranding: string;
    localSellingChannel: string;
    scalingPath: string;
  };
}

export const MANUFACTURED_PRODUCTS: ManufacturedProductBlueprint[] = [
  // 1. Biological Charcoal & Sand Water Filter
  {
    id: 'prod-water-filter',
    name: 'AquaPure Community Gravity Water Filter Column',
    category: 'Clean Tech & Water',
    targetAgeBand: '9-12',
    marketNeed: 'Over 80% of rural and peri-urban families boil water using expensive firewood or drink turbid spring water risking typhoid and cholera.',
    readingFoundation: {
      subject: 'Physical Chemistry & Earth Science',
      scientificOrMathPrinciple: 'Porous media mechanical filtration, activated carbon adsorption of organic toxins, and volumetric flow rate Q = V / t.',
      coreReadingConcept: 'Reading engineering schematics for multi-stage stratification (gravel -> coarse sand -> fine silica sand -> crushed activated wood charcoal).',
      relevantBooksOrManuals: ['WHO Technical Note on Household Water Treatment', 'Cambridge Primary Science Stage 5 Matter Manual', 'NGSS 5-ESS2-2 Fluid Dynamics']
    },
    standardsAlignment: {
      usStandard: 'NGSS 5-PS1-2 (Conservation of Matter) & 3-5-ETS1-2 (Engineering Design)',
      cambridgeStandard: 'Cambridge Primary Science (0097) & Cambridge IGCSE Environmental Management (0680)',
      unSdgNumber: 6
    },
    billOfMaterials: [
      { item: 'Used 5-liter cooking oil jerrycan or 20L bucket with tap', source: 'Reused Container', estimatedCostUgx: 2000, estimatedCostUsd: 0.55 },
      { item: 'Fine river sand (washed 3 times and sun-dried)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Hardwood charcoal (crushed into 2–4mm granules and washed)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 500, estimatedCostUsd: 0.14 },
      { item: 'Clean pea gravel / small pebbles', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Clean cotton muslin cloth or cotton filter pads', source: 'Low-Cost Market Item', estimatedCostUgx: 1000, estimatedCostUsd: 0.27 },
      { item: 'Small plastic push-tap / spigot', source: 'Low-Cost Market Item', estimatedCostUgx: 2500, estimatedCostUsd: 0.68 }
    ],
    manufacturingProtocol: [
      {
        stepNumber: 1,
        title: 'Chamber Preparation & Tap Fitting',
        action: 'Thoroughly wash the food-grade plastic container with boiling water and salt. Drill a 15mm hole 2 inches above the base and screw in the plastic push-tap with rubber washers.',
        qualityControlCheck: 'Fill with clean water to test for leaks around the spigot gasket before loading filter media.'
      },
      {
        stepNumber: 2,
        title: 'Media Stratification (The Layering Law)',
        action: 'Layer 1 (Bottom): 3 inches of washed pebbles covering the tap inlet. Layer 2: A clean cotton disk. Layer 3: 4 inches of crushed activated wood charcoal granules. Layer 4: 5 inches of fine silica sand. Layer 5 (Top): 2 inches of pea gravel to diffuse incoming water without disturbing the sand bed.',
        qualityControlCheck: 'Each layer must be leveled evenly with zero diagonal sloping.',
        safetyPrecautions: 'Ensure charcoal is hardwood cooking charcoal, not coal or chemically treated briquettes.'
      },
      {
        stepNumber: 3,
        title: 'Pre-Flush & Flow Rate Calibration',
        action: 'Pour 10 liters of clean water through the filter to flush out initial carbon dust until the outlet runs crystal clear.',
        qualityControlCheck: 'Flow rate should measure between 0.5 and 1.0 liter per 10 minutes.'
      }
    ],
    unitEconomics: {
      totalProductionCostUgx: 6000,
      recommendedRetailPriceUgx: 20000,
      netProfitPerUnitUgx: 14000,
      profitMarginPercent: 70,
      breakevenBatchSize: '1 unit (immediate profitability)',
      dailyEarningPotentialUgx: '40,000–70,000 UGX (manufacturing 3–5 units weekly)'
    },
    marketStrategy: {
      primaryBuyers: 'Mothers with young children, local school dormitories, village clinics, tea shops, and market vendors.',
      packagingAndBranding: 'Stenciled brand "Maji Safi Family Filter" with printed 1-page user guide detailing monthly sand washing instructions.',
      localSellingChannel: 'Demonstrate live in the community square: pour muddy brown water in the top and let mothers taste the clear odorless filtered water.',
      scalingPath: 'Partner with local church women’s savings circles (SACCOs) offering a 2-part installment payment plan.'
    }
  },

  // 2. High-Yield Organic Compost Tea & Foliar Bio-Fertilizer
  {
    id: 'prod-bio-fertilizer',
    name: 'Kikoola Green Liquid Bio-Fertilizer & Soil Inoculant',
    category: 'Food Science & Agriculture',
    targetAgeBand: '13-16',
    marketNeed: 'Imported synthetic chemical fertilizers (DAP/UREA) cost over 180,000 UGX per 50kg bag, depleting soil humus and bankrupting smallholder farmers.',
    readingFoundation: {
      subject: 'Microbiology & Organic Chemistry',
      scientificOrMathPrinciple: 'Anaerobic/aerobic microbial fermentation, nitrogen-phosphorus-potassium (NPK) extraction, and beneficial fungal mycorrhizae culture.',
      coreReadingConcept: 'Reading biological fermentation manuals (Bokashi / Indigenous Microorganisms IMO protocols) and dilution ratios (1:20 foliar spray).',
      relevantBooksOrManuals: ['FAO Guide to Organic Soil Fertility', 'Malo Organic Agriculture Handbook', 'Cambridge IGCSE Biology 0610 Plant Nutrition']
    },
    standardsAlignment: {
      usStandard: 'NGSS HS-LS2-3 (Ecosystem Nutrient Cycling) & HS-ESS3-2',
      cambridgeStandard: 'Cambridge IGCSE Agriculture (0600) & Cambridge Lower Secondary Science (0893)',
      unSdgNumber: 2
    },
    billOfMaterials: [
      { item: 'Fresh stinging nettle, comfrey, or titonia (wild sunflower) leaves (4kg)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Cattle or chicken manure slurry (2kg rich in nitrogen bacteria)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Crude sugarcane molasses or raw brown sugar (500g)', source: 'Low-Cost Market Item', estimatedCostUgx: 1500, estimatedCostUsd: 0.41 },
      { item: 'Unchlorinated well or rain water (20 liters)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Clean recycled 1-liter plastic bottles with caps (10 units)', source: 'Reused Container', estimatedCostUgx: 1000, estimatedCostUsd: 0.27 }
    ],
    manufacturingProtocol: [
      {
        stepNumber: 1,
        title: 'Botanical Shredding & Nutrient Extraction',
        action: 'Chop wild sunflower (Titonia diversifolia) and comfrey leaves finely to rupture plant cell walls and release soluble nitrogen and potassium.',
        qualityControlCheck: 'Particles should be under 2cm for rapid bacterial breakdown.'
      },
      {
        stepNumber: 2,
        title: 'Microbial Inoculation & Sugar Activation',
        action: 'Mix chopped greens with livestock manure in a 20-liter drum. Dissolve 500g molasses in warm rainwater and pour over the mixture. Fill with water, leaving 3 inches of air headspace.',
        qualityControlCheck: 'Liquid should be dark brown with sweet earthy molasses aroma.'
      },
      {
        stepNumber: 3,
        title: 'Anaerobic Fermentation & Daily Gas Venting',
        action: 'Seal the drum airtight with a one-way gas release valve or loosen lid daily for 14 days. Filter through a fine mesh sack into clean 1-liter bottles.',
        qualityControlCheck: 'Finished liquid is dark green-black, smells like fermented tea, and has pH between 6.0 and 7.0.'
      }
    ],
    unitEconomics: {
      totalProductionCostUgx: 2500,
      recommendedRetailPriceUgx: 3500,
      netProfitPerUnitUgx: 3250, // for a batch of 10 bottles yielding 35,000 UGX total
      profitMarginPercent: 92,
      breakevenBatchSize: '1 batch of 10 liters',
      dailyEarningPotentialUgx: '30,000–60,000 UGX weekly from smallholder tomato/cabbage farmers'
    },
    marketStrategy: {
      primaryBuyers: 'Vegetable market gardeners (cabbages, tomatoes, peppers, sukuma wiki), banana shamba owners, and backyard urban planters.',
      packagingAndBranding: '1-liter clear recycled bottles with stamped green paper label: "Kikoola Bio-Growth Boost (100% Organic • Dilute 1 cup per 20L sprayer)".',
      localSellingChannel: 'Direct farm visits with a demonstration trial: spray half a farmer’s tomato bed and let them observe the lush green leaves after 5 days.',
      scalingPath: 'Expand production into 200-liter oil drums, supplying local farmer cooperative unions and agricultural input supply stores.'
    }
  },

  // 3. Gentle Cold-Process Herbal Antiseptic Soap
  {
    id: 'prod-herbal-soap',
    name: 'Neem & Moringa Antiseptic Skin-Care Soap Bars',
    category: 'Biochemistry & Hygiene',
    targetAgeBand: '13-16',
    marketNeed: 'Commercial laundry bar soaps contain harsh fillers that dry out children’s skin, while medicated bars in pharmacies cost over 4,000 UGX each.',
    readingFoundation: {
      subject: 'Stoichiometric Organic Chemistry',
      scientificOrMathPrinciple: 'Saponification reaction: Triglyceride (Fat/Oil) + Strong Base (Sodium Hydroxide) -> Glycerol + Sodium Salt of Fatty Acids (Soap).',
      coreReadingConcept: 'Reading stoichiometric saponification charts: calculating exact lye-to-oil ratios to ensure zero caustic residue in the cured bar.',
      relevantBooksOrManuals: ['Cambridge IGCSE Chemistry 0620 Esters & Saponification', 'Small-Scale Soapmaking Manual by Peter Donkor', 'NGSS HS-PS1-7 Chemical Reactions']
    },
    standardsAlignment: {
      usStandard: 'NGSS HS-PS1-7 (Chemical Reaction Stoichiometry) & CCSS.MATH.HSA.CED.A.4',
      cambridgeStandard: 'Cambridge IGCSE Chemistry (0620) Topic 11 (Organic Chemistry)',
      unSdgNumber: 3
    },
    billOfMaterials: [
      { item: 'Pure cooking vegetable oil or coconut/palm oil (1,000 grams)', source: 'Low-Cost Market Item', estimatedCostUgx: 8000, estimatedCostUsd: 2.16 },
      { item: 'Technical grade Sodium Hydroxide / Caustic Soda (140 grams)', source: 'Low-Cost Market Item', estimatedCostUgx: 1500, estimatedCostUsd: 0.41 },
      { item: 'Cold rain water or herbal infusion (300 grams)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Fresh Neem & Moringa leaf powder (50 grams dried in shade)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Recycled wooden box or milk carton molds lined with wax paper', source: 'Reused Container', estimatedCostUgx: 500, estimatedCostUsd: 0.14 }
    ],
    manufacturingProtocol: [
      {
        stepNumber: 1,
        title: 'Herbal Lye Solution Preparation',
        action: 'Weigh 140g sodium hydroxide flakes. Slowly sprinkle lye crystals INTO 300g cold water (NEVER pour water into lye). Stir with a wooden stick until dissolved; mixture will heat to 80°C. Cool to 45°C.',
        qualityControlCheck: 'Verify temperature matches oil temperature within 5°C.',
        safetyPrecautions: 'Wear protective goggles, plastic gloves, and vinegar within arm reach in case of skin splashes.'
      },
      {
        stepNumber: 2,
        title: 'Emulsification & "Trace" Stage',
        action: 'Slowly pour lye solution into 1,000g warmed cooking oil. Stir vigorously in one direction for 15–20 minutes until the mixture thickens to the consistency of warm pancake batter ("trace"). Fold in neem and moringa leaf powder.',
        qualityControlCheck: 'Drizzle soap batter over surface; line should hold shape for 3 seconds before sinking.'
      },
      {
        stepNumber: 3,
        title: 'Molding, Slicing & 4-Week Curing',
        action: 'Pour batter into lined molds. Wrap in a blanket for 24 hours to promote insulation and gel phase. Unmold, cut into 10 uniform 130g bars with a wire slicer, and space bars on a wooden shelf to cure for 4 weeks.',
        qualityControlCheck: 'Tongue touch or pH paper test after 4 weeks: pH must read between 8.0 and 9.0 with zero caustic zap.'
      }
    ],
    unitEconomics: {
      totalProductionCostUgx: 10000,
      recommendedRetailPriceUgx: 2500, // per 130g bar (batch yields 10 bars = 25,000 UGX)
      netProfitPerUnitUgx: 1500,
      profitMarginPercent: 60,
      breakevenBatchSize: '1 batch of 10 bars',
      dailyEarningPotentialUgx: '45,000–90,000 UGX profit per batch of 30 bars'
    },
    marketStrategy: {
      primaryBuyers: 'Mothers seeking natural treatments for baby heat rash, ringworms, eczema, and everyday germ protection.',
      packagingAndBranding: 'Wrapped in brown craft paper tied with banana fiber string: "Pure Shamba Neem & Moringa Skin Bar (100% Gentle & Antiseptic)".',
      localSellingChannel: 'Local village retail shops (Dukas), maternity clinics, community market stalls, and Sunday church fellowship.',
      scalingPath: 'Obtain national bureau of standards certification; expand to scented variations using local lemongrass and eucalyptus oils.'
    }
  },

  // 4. Solar High-Efficiency Food & Fruit Dehydrator
  {
    id: 'prod-solar-dehydrator',
    name: 'SunBreeze Convection Solar Fruit & Crop Dehydrator',
    category: 'Mechanics & Energy',
    targetAgeBand: '13-16',
    marketNeed: 'Over 40% of seasonal fruits (mangoes, pineapples, tomatoes, and vegetables) rot post-harvest due to lack of cold storage and rain during open-air sun drying.',
    readingFoundation: {
      subject: 'Thermal Physics & Aerodynamics',
      scientificOrMathPrinciple: 'Solar black-body radiation absorption, natural thermal chimney convection (buoyancy of warm low-density air), and moisture equilibrium.',
      coreReadingConcept: 'Reading thermal engineering airflow blueprints: designing a 30-degree tilted glazed solar collector paired with a vertical drying cabinet.',
      relevantBooksOrManuals: ['FAO Manual on Solar Drying of Horticultural Produce', 'Cambridge IGCSE Physics 0625 Thermal Energy Transfer', 'NGSS HS-PS3-3 Energy Systems']
    },
    standardsAlignment: {
      usStandard: 'NGSS HS-PS3-3 (Thermal Energy System Engineering) & MS-ETS1-2',
      cambridgeStandard: 'Cambridge IGCSE Physics (0625) & Cambridge IGCSE Design & Technology (0445)',
      unSdgNumber: 7
    },
    billOfMaterials: [
      { item: 'Recycled wooden fruit crates or scrap timber boards', source: 'Free Household / Farm Scrap', estimatedCostUgx: 3000, estimatedCostUsd: 0.81 },
      { item: 'Clear polythene greenhouse plastic sheeting or glass pane (1m x 0.5m)', source: 'Low-Cost Market Item', estimatedCostUgx: 4000, estimatedCostUsd: 1.08 },
      { item: 'Matte black paint or clean crushed charcoal black wash', source: 'Free Household / Farm Scrap', estimatedCostUgx: 1000, estimatedCostUsd: 0.27 },
      { item: 'Food-grade nylon or wire mosquito mesh for drying trays (2m)', source: 'Low-Cost Market Item', estimatedCostUgx: 5000, estimatedCostUsd: 1.35 },
      { item: 'Nails, hinges, and small latch', source: 'Low-Cost Market Item', estimatedCostUgx: 2000, estimatedCostUsd: 0.54 }
    ],
    manufacturingProtocol: [
      {
        stepNumber: 1,
        title: 'Thermal Solar Collector Construction',
        action: 'Build a shallow wooden trough tilted at 25–30 degrees toward the equator. Line the base with corrugated metal scrap painted matte black to absorb maximum solar thermal radiation. Seal the top with clear plastic or glass.',
        qualityControlCheck: 'Air inlet at bottom must allow fresh airflow; air outlet at top connects into drying cabinet.'
      },
      {
        stepNumber: 2,
        title: 'Stackable Multi-Tray Drying Cabinet',
        action: 'Build a vertical insulated cabinet behind the collector with 4 removable sliding mesh trays spaced 10cm apart. Fit a rear access door with weatherstripping to prevent heat loss.',
        qualityControlCheck: 'Cabinet must be light-proof to preserve Vitamin A and C in sensitive fruits.'
      },
      {
        stepNumber: 3,
        title: 'Chimney Exhaust & Temperature Tuning',
        action: 'Fit a narrow chimney duct on top of the cabinet with a fine wire mesh to keep out fruit flies and dust.',
        qualityControlCheck: 'Internal temperature should reach 50°C–65°C under bright sun, drying sliced mangoes to 12% moisture within 8 hours.'
      }
    ],
    unitEconomics: {
      totalProductionCostUgx: 15000,
      recommendedRetailPriceUgx: 55000,
      netProfitPerUnitUgx: 40000,
      profitMarginPercent: 72,
      breakevenBatchSize: '1 unit',
      dailyEarningPotentialUgx: '80,000 UGX profit per week building 2 dehydrators for farm families'
    },
    marketStrategy: {
      primaryBuyers: 'Fruit farmers, women market vendors selling dried mango strips, herbal tea producers, and mushroom growers.',
      packagingAndBranding: 'Branded with burn-etched wooden logo: "SunBreeze Clean Solar Dryer • Zero Fly Contamination • 2-Year Timber Warranty".',
      localSellingChannel: 'Demonstrate at farmers’ market with dried sweet mango snacks and dried chili flakes.',
      scalingPath: 'Sell commercial 50kg crop capacity units to agricultural farming cooperatives and export produce aggregators.'
    }
  },

  // 5. Commercial Fermented Baked Food: Mandazi & Bread
  {
    id: 'prod-yeast-baking',
    name: 'NutriBite Golden Yeast Mandazi & Honey Buns',
    category: 'Food Science & Agriculture',
    targetAgeBand: '6-8',
    marketNeed: 'Children walking to primary and secondary schools need clean, filling, highly nutritious breakfasts that cost less than 500 UGX each.',
    readingFoundation: {
      subject: 'Microbiology & Food Biochemistry',
      scientificOrMathPrinciple: 'Cellular respiration of Saccharomyces cerevisiae: C6H12O6 (glucose) -> 2C2H5OH + 2CO2 (carbon dioxide gas creating airy crumb structure).',
      coreReadingConcept: 'Reading exact bakers’ percentages, gluten development through kinetic kneading, and sanitary food hygiene protocols.',
      relevantBooksOrManuals: ['Cambridge Primary Science Stage 3 Living Organisms', 'Professional Baking Fundamentals by Wayne Gisslen', 'NGSS 5-PS1-4']
    },
    standardsAlignment: {
      usStandard: 'NGSS 5-PS1-4 (Chemical Reactions) & CCSS.MATH.CONTENT.3.OA.A.3',
      cambridgeStandard: 'Cambridge Primary Science (0097) & Cambridge IGCSE Food & Nutrition (0648)',
      unSdgNumber: 2
    },
    billOfMaterials: [
      { item: 'Fortified wheat flour (2kg)', source: 'Low-Cost Market Item', estimatedCostUgx: 7000, estimatedCostUsd: 1.89 },
      { item: 'Dry active instant baker’s yeast (30g)', source: 'Low-Cost Market Item', estimatedCostUgx: 1000, estimatedCostUsd: 0.27 },
      { item: 'Sugar and salt (200g)', source: 'Low-Cost Market Item', estimatedCostUgx: 1000, estimatedCostUsd: 0.27 },
      { item: 'Refined vegetable cooking oil for frying (1 liter)', source: 'Low-Cost Market Item', estimatedCostUgx: 7500, estimatedCostUsd: 2.03 },
      { item: 'Cardamom & cinnamon spice for distinct bakery aroma', source: 'Low-Cost Market Item', estimatedCostUgx: 500, estimatedCostUsd: 0.14 },
      { item: 'Clear food-safe paper bags (pack of 50)', source: 'Low-Cost Market Item', estimatedCostUgx: 2000, estimatedCostUsd: 0.54 }
    ],
    manufacturingProtocol: [
      {
        stepNumber: 1,
        title: 'Yeast Proofing & Gluten Dough Matrix',
        action: 'Dissolve yeast in warm water (37°C) with 1 teaspoon sugar; observe foaming within 10 minutes. Combine with flour, spices, and oil; knead rhythmically for 12 minutes to develop elastic gluten strands.',
        qualityControlCheck: 'Perform the "windowpane test": stretch a small piece of dough thin enough to see light through without tearing.'
      },
      {
        stepNumber: 2,
        title: 'Proofing & Volumetric Expansion',
        action: 'Cover dough with a damp clean cloth in a warm spot for 60 minutes until double in volume through CO2 gas production.',
        qualityControlCheck: 'Dough should spring back slowly when poked gently with an oiled finger.'
      },
      {
        stepNumber: 3,
        title: 'Precision Temperature Frying & Packaging',
        action: 'Roll dough to 1.5cm thickness, cut into uniform diamond pieces, and fry in oil maintained at 175°C for 2–3 minutes per side until golden brown. Drain on paper towels, cool, and pack into branded paper sleeves.',
        qualityControlCheck: 'Mandazi must be golden brown with fluffy interior, zero oily absorption, and sweet aroma.'
      }
    ],
    unitEconomics: {
      totalProductionCostUgx: 19000,
      recommendedRetailPriceUgx: 500, // per piece (batch yields 60 large mandazi = 30,000 UGX total)
      netProfitPerUnitUgx: 183,
      profitMarginPercent: 58,
      breakevenBatchSize: '1 batch of 60 pieces',
      dailyEarningPotentialUgx: '11,000 UGX profit per morning batch (330,000 UGX monthly supplement)'
    },
    marketStrategy: {
      primaryBuyers: 'School children, boda boda riders, teachers, clinic staff, and morning tea shop owners.',
      packagingAndBranding: 'Clean paper bags stamped: "NutriBite Fresh Bakery • Golden, Fluffy & Warm Every Morning".',
      localSellingChannel: 'Direct school gate delivery between 6:30 AM and 7:45 AM, and wholesale supply to 3 local roadside tea kiosks.',
      scalingPath: 'Hire a neighborhood youth assistant; expand into whole wheat buns and nutritious honey-sesame cakes.'
    }
  },

  // 6. Upcycled Plastic Paver Blocks for Green Walkways
  {
    id: 'prod-plastic-paver',
    name: 'EcoStone Upcycled Plastic-Sand Interlocking Paving Stones',
    category: 'Upcycling & Building',
    targetAgeBand: '17+',
    marketNeed: 'Plastic waste (polythene bags/buveera and water bottles) litters compounds and clogs drainage trenches, while conventional concrete pavers are brittle and crack under heavy vehicle loads.',
    readingFoundation: {
      subject: 'Polymer Chemistry & Civil Engineering Materials',
      scientificOrMathPrinciple: 'Thermoplastic melting (LDPE/HDPE polymer glass transition ~120°C–130°C), polymer matrix binding with silica aggregate, and compressive strength.',
      coreReadingConcept: 'Reading material science engineering specs: exact 1:2 to 1:3 ratio of melted clean plastic to river sand for zero water absorption and 2x standard concrete compressive strength.',
      relevantBooksOrManuals: ['UN-Habitat Plastic Waste Recycling Manual', 'Cambridge IGCSE Chemistry 0620 Polymers', 'ASTM C936 Standard for Solid Concrete Interlocking Paving Units']
    },
    standardsAlignment: {
      usStandard: 'NGSS HS-PS1-2 (Polymer Reactions) & HS-ESS3-4 (Sustainable Materials)',
      cambridgeStandard: 'Cambridge IGCSE Chemistry (0620) & Design & Technology (0445)',
      unSdgNumber: 11
    },
    billOfMaterials: [
      { item: 'Collected waste soft plastic bags (buveera) and bottle caps (3kg per paver)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Clean fine river sand (washed and dried 6kg per paver)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 500, estimatedCostUsd: 0.14 },
      { item: 'Used scrap steel or timber paver mold (reusable 500 times)', source: 'Reused Container', estimatedCostUgx: 2000, estimatedCostUsd: 0.54 },
      { item: 'Used engine oil (for light mold release lubrication)', source: 'Free Household / Farm Scrap', estimatedCostUgx: 0, estimatedCostUsd: 0.00 },
      { item: 'Firewood or dry agricultural briquettes for melting drum', source: 'Free Household / Farm Scrap', estimatedCostUgx: 500, estimatedCostUsd: 0.14 }
    ],
    manufacturingProtocol: [
      {
        stepNumber: 1,
        title: 'Waste Plastic Shredding & Aggregate Pre-Heating',
        action: 'Sort and dry plastic waste. Pre-heat dry river sand in a secondary metal pan to remove all moisture before adding to the plastic melt.',
        qualityControlCheck: 'Zero moisture in sand to avoid steam pockets during mixing.'
      },
      {
        stepNumber: 2,
        title: 'Controlled Low-Heat Melting & Matrix Blending',
        action: 'Melt shredded plastic in a heavy metal drum over controlled heat without open flames. Once converted to a dark molten resin, stir in hot sand in a 1:2.5 ratio. Mix vigorously into a uniform black asphalt-like paste.',
        qualityControlCheck: 'Mixture must be thoroughly blended with every grain of sand coated in polymer resin.',
        safetyPrecautions: 'Perform strictly outdoors in open breeze; wear heavy leather welding gloves and smoke-filtering respirator mask.'
      },
      {
        stepNumber: 3,
        title: 'Compaction Molding & Cold Water Quenching',
        action: 'Scoop molten composite into heavy steel paver mold. Compact with a heavy flat steel tamper to eliminate air voids. Immerse mold in cold water for 15 minutes to rapid-cure.',
        qualityControlCheck: 'Finished stone must ring like porcelain when tapped, have sharp edges, and absorb zero water.'
      }
    ],
    unitEconomics: {
      totalProductionCostUgx: 1000,
      recommendedRetailPriceUgx: 3500, // per interlocking paver stone
      netProfitPerUnitUgx: 2500,
      profitMarginPercent: 71,
      breakevenBatchSize: '5 pavers (pays off initial mold)',
      dailyEarningPotentialUgx: '50,000–100,000 UGX daily profit manufacturing 20–40 pavers per team'
    },
    marketStrategy: {
      primaryBuyers: 'Homeowners paving muddy compound walkways, church courtyards, petrol station forecourts, and local council public footpaths.',
      packagingAndBranding: 'Branded "EcoStone Indestructible Paver • Guaranteed Never to Crack • Diverts 3kg Plastic from Oceans".',
      localSellingChannel: 'Set up an eye-catching 2-meter demonstration walkway outside a local hardware store; drive a heavy vehicle over it live to prove strength.',
      scalingPath: 'Apply for municipal municipal procurement contracts and international carbon-credit offset grants.'
    }
  }
];

export const MANUFACTURING_CATEGORIES = [
  'All Manufactured Products',
  'Clean Tech & Water',
  'Biochemistry & Hygiene',
  'Food Science & Agriculture',
  'Mechanics & Energy',
  'Upcycling & Building'
];
