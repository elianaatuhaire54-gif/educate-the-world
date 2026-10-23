import { LessonModule, AgeBand, SubjectCategory } from '../types/curriculum';
import { CURRICULUM_MODULES } from './curriculumData';

export type SubjectPackId = 
  | 'math'
  | 'science'
  | 'language'
  | 'technology'
  | 'finance'
  | 'character';

export interface SubjectPackDefinition {
  id: SubjectPackId;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  gradient: string;
  borderClass: string;
  badgeBg: string;
  badgeText: string;
  tagline: string;
  disciplineBoundary: string;
  integratedConnectionSummary: string; // e.g. "Learn math while studying science"
  integrationHighlightExample: {
    lessonTitle: string;
    integratedDiscipline: string;
    howItIntegrates: string;
    formulaOrConcept: string;
  };
  keyTracks: {
    trackName: string;
    prerequisiteOrder: string[];
  }[];
  categories: SubjectCategory[];
}

export const SUBJECT_PACK_DEFINITIONS: SubjectPackDefinition[] = [
  {
    id: 'math',
    name: 'Mathematics & Quantitative Reasoning Pack',
    shortName: 'Math Pack',
    icon: 'Calculator',
    color: 'blue',
    gradient: 'from-blue-600 via-indigo-600 to-cyan-600',
    borderClass: 'border-blue-200 hover:border-blue-400',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    tagline: 'Systematic progression from concrete counting to calculus (Differentiation BEFORE Integration!)',
    disciplineBoundary: 'Pure mathematics core. Lessons are focused exclusively on mathematical principles without subject blending, but apply real science and physical models.',
    integratedConnectionSummary: 'Science & Engineering in Math: Uses planetary orbits, projectile parabolas, biological doubling times, and electrical circuits as living mathematical laboratories.',
    integrationHighlightExample: {
      lessonTitle: 'The Derivative: First Principles and Power Rule (Differentiation)',
      integratedDiscipline: 'Physics & Engineering Mechanics',
      howItIntegrates: 'Derivatives are learned through physical rates of change: finding instantaneous velocity v(t) = ds/dt and rocket acceleration a(t) = dv/dt before moving to calculus integration.',
      formulaOrConcept: "f'(x) = lim(h->0) [f(x+h) - f(x)] / h; v(t) = ds/dt"
    },
    keyTracks: [
      {
        trackName: 'Foundations & Arithmetic',
        prerequisiteOrder: ['Counting & Cardinality', 'Number Bonds to 20', 'Place Value (Tens & Ones)', 'Multi-Digit Addition & Subtraction']
      },
      {
        trackName: 'Multiplication & Fractions',
        prerequisiteOrder: ['Arrays & Skip Counting', 'Equal Sharing Division', 'Fractions & Ratios', 'Decimals & Percentages']
      },
      {
        trackName: 'Algebra & Geometry',
        prerequisiteOrder: ['Pre-Algebra Variables (x)', 'Linear Equations (y = mx + c)', 'Quadratic Factoring', 'Angles & Trigonometry (SOH-CAH-TOA)']
      },
      {
        trackName: 'Higher Calculus & Analysis',
        prerequisiteOrder: ['Limits & Continuity', 'DIFFERENTIATION (Instantaneous Rate of Change)', 'Derivative Optimization (Maxima/Minima)', 'Riemann Sums', 'INTEGRATION (Accumulation & Area)', 'Differential Equations']
      }
    ],
    categories: ['math', 'numbers']
  },
  {
    id: 'science',
    name: 'Science, Living Systems & Physics Pack',
    shortName: 'Science Pack',
    icon: 'FlaskConical',
    color: 'emerald',
    gradient: 'from-emerald-600 via-teal-600 to-green-600',
    borderClass: 'border-emerald-200 hover:border-emerald-400',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    tagline: 'Empirical discovery of the cosmos, from sensory observation to genetics and thermodynamics',
    disciplineBoundary: 'Pure empirical natural science. Clear scientific focus on botany, physiology, chemistry, and physics.',
    integratedConnectionSummary: 'Math in Science: Learn math seamlessly while studying science! Calculate speed, light refraction angles, molar ratios, and genetic probability during experiments.',
    integrationHighlightExample: {
      lessonTitle: 'Photosynthesis: How Plants Turn Sunlight into Sugar',
      integratedDiscipline: 'Mathematics & Chemical Stoichiometry',
      howItIntegrates: 'Learners balance the biochemical equation (6 CO2 + 6 H2O -> C6H12O6 + 6 O2), calculating input-output molecular ratios and solar photon flux rates.',
      formulaOrConcept: 'Rate = Delta O2 / Delta Time; 6:6:1:6 stoichiometric ratio'
    },
    keyTracks: [
      {
        trackName: 'Sensory Observation & Living Kingdoms',
        prerequisiteOrder: ['Five Senses', 'Living vs Non-Living', 'Plant Anatomy', 'Animal Diets & Locomotion']
      },
      {
        trackName: 'Earth Systems & States of Matter',
        prerequisiteOrder: ['Solid, Liquid, Gas', 'The Water Cycle & Evaporation', 'Soil Types & Humus', 'Weather Systems']
      },
      {
        trackName: 'Classical Physics & Energy',
        prerequisiteOrder: ['Friction & Levers', 'Newton’s Laws of Motion (F = ma)', 'Energy Conservation (Work = F*d)', 'Ohm’s Law & Circuits (V = IR)']
      },
      {
        trackName: 'Biochemistry, Genetics & Modern Physics',
        prerequisiteOrder: ['Photosynthesis & Respiration', 'The Periodic Table & Bonds', 'Mendelian Genetics & Punnett Squares', 'Thermodynamics & Biogas Engineering']
      }
    ],
    categories: ['science']
  },
  {
    id: 'language',
    name: 'Language, Literacy & 9 World Tongues Pack',
    shortName: 'Language Pack',
    icon: 'BookOpen',
    color: 'amber',
    gradient: 'from-amber-600 via-orange-600 to-yellow-600',
    borderClass: 'border-amber-200 hover:border-amber-400',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    tagline: 'Mastery of phonics, rhetoric, grammar, and 9 global languages for effortless communication',
    disciplineBoundary: 'Dedicated linguistic and literary arts stream. Unmixed language discipline that develops reading, writing, and international fluency.',
    integratedConnectionSummary: 'Culture & Logic in Language: Connects phonetic scripts with world geography, historical trade routes, Latin legal definitions, and mathematical syntax trees.',
    integrationHighlightExample: {
      lessonTitle: 'Classical Greek & Latin Roots: Bio, Geo, Chrono, Tele',
      integratedDiscipline: 'Science, Medicine & World History',
      howItIntegrates: 'Decoding single classical roots immediately unlocks hundreds of scientific terms across biology, geology, and medicine.',
      formulaOrConcept: 'Root (Bio = Life) + Suffix (Logos = Study) = Biology'
    },
    keyTracks: [
      {
        trackName: 'Phonics & Reading Fluency',
        prerequisiteOrder: ['Pure Vowel Sounds', 'Phonics Blends (Ch, Sh, Th)', 'Punctuation & Cadence', 'Paragraph & Story Structure']
      },
      {
        trackName: 'Rhetoric & Composition',
        prerequisiteOrder: ['Descriptive Adjectives', 'Dialogue & Quotation', 'Five-Paragraph Persuasive Essay', 'Classical Rhetoric (Ethos, Pathos, Logos)']
      },
      {
        trackName: 'Global Tongues Academy',
        prerequisiteOrder: ['Global Greetings (5 Tongues)', 'Mandarin Pinyin & Characters', 'Spanish Regular Conjugations', 'French Dialogue', 'Hebrew & Arabic Alphabets']
      },
      {
        trackName: 'Classical Exegesis & Diplomacy',
        prerequisiteOrder: ['Latin Legal & Medical Roots', 'Biblical Greek & Hebrew Exegesis', 'Commercial Mandarin & Arabic Trade', 'Multi-Language Vision Synthesis']
      }
    ],
    categories: ['language']
  },
  {
    id: 'technology',
    name: 'Technology, Engineering & Digital Making Pack',
    shortName: 'Tech & Engineering Pack',
    icon: 'Cpu',
    color: 'purple',
    gradient: 'from-purple-600 via-violet-600 to-indigo-600',
    borderClass: 'border-purple-200 hover:border-purple-400',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    tagline: 'From simple levers and ISSB blocks to solar microgrids, Python code, and automation',
    disciplineBoundary: 'Focused applied engineering and computer science discipline without dilution.',
    integratedConnectionSummary: 'Physics & Discrete Math in Tech: Direct integration with electrical circuit equations, structural vector forces, and binary boolean algebra.',
    integrationHighlightExample: {
      lessonTitle: 'Solar PV Microgrid Design: Sizing Inverters and Battery Banks',
      integratedDiscipline: 'Physics & Financial Mathematics',
      howItIntegrates: 'Learners calculate daily Watt-hour electrical demand, size battery capacities (Ah), and compute payback return on solar capital investments.',
      formulaOrConcept: 'Total Wh = Sum(P * Hours); Battery Ah = (Wh * Days) / (System Volts * DoD)'
    },
    keyTracks: [
      {
        trackName: 'Mechanical & Structural Engineering',
        prerequisiteOrder: ['Levers & Inclined Planes', 'Cardboard Truss Bridges', 'Hydraulic Syringes', 'Gear Trains & Mechanical Advantage']
      },
      {
        trackName: 'Appropriate Technology & Water',
        prerequisiteOrder: ['3-Layer Water Filters', 'Solar Cookers', 'ISSB Compressed Earth Blocks', 'Drip Irrigation Systems']
      },
      {
        trackName: 'Electrical Power & Renewable Energy',
        prerequisiteOrder: ['Simple Closed Circuits', 'Solar PV Panel Sizing', 'Microgrid Battery Banks', 'Industrial 3-Phase AC Systems']
      },
      {
        trackName: 'Computing & Software Engineering',
        prerequisiteOrder: ['Step-by-Step Algorithms', 'Binary Arithmetic', 'Python Variables & Loops', 'Microcontrollers & LoRaWAN Sensors']
      }
    ],
    categories: ['technology', 'projects']
  },
  {
    id: 'finance',
    name: 'Financial Intelligence, Agribusiness & Enterprise Pack',
    shortName: 'Finance & Agribusiness Pack',
    icon: 'TrendingUp',
    color: 'emerald',
    gradient: 'from-emerald-700 via-green-700 to-teal-800',
    borderClass: 'border-emerald-300 hover:border-emerald-500',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-900',
    tagline: 'Practical cash flow mastery, micro-enterprise, agro-value addition, and generational wealth',
    disciplineBoundary: 'Dedicated enterprise economics and commercial agribusiness discipline.',
    integratedConnectionSummary: 'Math & Agricultural Biology in Business: Teaches compound interest mathematics, crop yield metrics, and unit economics during farming operations.',
    integrationHighlightExample: {
      lessonTitle: 'Unit Economics: Calculating Cost, Price, and Gross Margin',
      integratedDiscipline: 'Applied Mathematics & Agricultural Value Chains',
      howItIntegrates: 'Learners roast and package groundnuts, calculating exact ingredient costs, overhead margins, and break-even sales thresholds.',
      formulaOrConcept: 'Gross Margin % = ((Price - COGS) / Price) * 100; BEP = Fixed Costs / Margin'
    },
    keyTracks: [
      {
        trackName: 'Personal Financial Foundations',
        prerequisiteOrder: ['Coins & Value', 'Needs vs Wants', 'The Piggy Bank (Saving vs Spending)', 'Budgeting Income & Expenses']
      },
      {
        trackName: 'Micro-Enterprise & Market Economics',
        prerequisiteOrder: ['Unit Economics & Gross Margin', 'The 5,000 UGX Enterprise Challenge', 'Supply & Demand Price Dynamics', 'Bookkeeping T-Accounts']
      },
      {
        trackName: 'Agro-Industrial Value Addition',
        prerequisiteOrder: ['Kitchen Composting & Sack Gardens', 'Post-Harvest Value Addition', 'Commercial Poultry & Dairy Systems', 'Substrate Pasteurization for Mushrooms']
      },
      {
        trackName: 'Corporate Finance & Wealth Architecture',
        prerequisiteOrder: ['Financial Statements (P&L, Cash Flow)', 'Cooperative SACCO Formation', 'Assets vs Liabilities Architecture', 'Time Value of Money (NPV/IRR)', 'Family Trusts & Land Titling']
      }
    ],
    categories: ['finance', 'agriculture', 'practical-skills']
  },
  {
    id: 'character',
    name: 'Character, Ethics, Christian Wisdom & Leadership Pack',
    shortName: 'Character & Leadership Pack',
    icon: 'ShieldCheck',
    color: 'rose',
    gradient: 'from-rose-600 via-red-600 to-amber-700',
    borderClass: 'border-rose-200 hover:border-rose-400',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
    tagline: 'Foundations of honesty, biblical wisdom, peacemaking, civic duty, and servant leadership',
    disciplineBoundary: 'Dedicated character formation, moral philosophy, and civic ethics stream.',
    integratedConnectionSummary: 'Social History & Practical Service in Character: Directly connected with UN SDG community missions and active household responsibility.',
    integrationHighlightExample: {
      lessonTitle: 'Servant Leadership: Leading by Serving Community Needs First',
      integratedDiscipline: 'Civic Administration & Moral History',
      howItIntegrates: 'Studies biblical and historical models of servant leadership, applying principles to coordinate village clean water and school improvement projects.',
      formulaOrConcept: 'True Greatness = Depth of Service to Others'
    },
    keyTracks: [
      {
        trackName: 'Early Kindness & Home Habits',
        prerequisiteOrder: ['Sharing Fruit', 'Please & Thank You', 'Putting Items in Order', 'Telling Truth When Cups Spill']
      },
      {
        trackName: 'Biblical Wisdom & Ethics',
        prerequisiteOrder: ['Creation Wonder', 'The Good Samaritan', 'David and Goliath Courage', 'Parable of the Sower', 'Integrity at the Market']
      },
      {
        trackName: 'Civic Stewardship & Peacemaking',
        prerequisiteOrder: ['The Golden Rule', 'Peacemaking on the Playground', 'Parish Anti-Litter Ambassador', 'Human Rights & Constitutional Law']
      },
      {
        trackName: 'Visionary Servant Leadership',
        prerequisiteOrder: ['Conflict Mediation & ADR', 'Public Policy Authorship', 'Crisis Leadership Protocols', 'Mentoring the Next Generation']
      }
    ],
    categories: ['social-kindness', 'christian-education', 'godly-life-skills', 'soft-skills', 'humanity-society']
  }
];

/**
 * Returns all lessons belonging to a specific subject pack,
 * strictly sorted by their systematic pedagogical sequenceOrder!
 */
export function getLessonsForSubjectPack(
  packId: SubjectPackId, 
  ageBand?: AgeBand
): LessonModule[] {
  const pack = SUBJECT_PACK_DEFINITIONS.find(p => p.id === packId);
  if (!pack) return [];

  let filtered = CURRICULUM_MODULES.filter(m => pack.categories.includes(m.category));

  if (ageBand) {
    filtered = filtered.filter(m => m.ageBand === ageBand);
  }

  // Sort systematically by sequenceOrder (or dayOfYear)
  return filtered.sort((a, b) => {
    const seqA = a.sequenceOrder ?? a.dayOfYear ?? 999;
    const seqB = b.sequenceOrder ?? b.dayOfYear ?? 999;
    return seqA - seqB;
  });
}

/**
 * Returns the SubjectPack that a lesson belongs to.
 */
export function getSubjectPackForLesson(lesson: LessonModule): SubjectPackDefinition | undefined {
  return SUBJECT_PACK_DEFINITIONS.find(pack => pack.categories.includes(lesson.category));
}

/**
 * Returns adjacent lessons in the systematic progression of a subject pack.
 */
export function getAdjacentLessonsInSubject(
  currentLesson: LessonModule,
  packId?: SubjectPackId
): { previous?: LessonModule; next?: LessonModule } {
  const targetPack = packId || getSubjectPackForLesson(currentLesson)?.id || 'science';
  const packLessons = getLessonsForSubjectPack(targetPack);

  const currentIndex = packLessons.findIndex(m => m.id === currentLesson.id);
  if (currentIndex === -1) return {};

  return {
    previous: currentIndex > 0 ? packLessons[currentIndex - 1] : undefined,
    next: currentIndex < packLessons.length - 1 ? packLessons[currentIndex + 1] : undefined
  };
}
