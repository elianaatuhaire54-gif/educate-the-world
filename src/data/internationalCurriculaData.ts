/**
 * EDUCATE THE WORLD INITIATIVE
 * INTERNATIONAL CURRICULA ALIGNMENT & CROSSWALK
 * 
 * Comprehensive alignment with:
 * 1. Cambridge Assessment International Education (CAIE)
 *    - Cambridge Early Years (Ages 3–6)
 *    - Cambridge Primary Stages 1–6 (Ages 5–11) + Primary Checkpoint
 *    - Cambridge Lower Secondary Stages 7–9 (Ages 11–14) + Lower Secondary Checkpoint
 *    - Cambridge Upper Secondary: Cambridge IGCSE & O Level (Ages 14–16)
 *    - Cambridge Advanced: International AS & A Level (Ages 16–19)
 * 2. International Baccalaureate (IB): PYP (Primary Years), MYP (Middle Years), DP (Diploma)
 * 3. UK National Curriculum: EYFS, Key Stage 1 (KS1), Key Stage 2 (KS2), Key Stage 3 (KS3), GCSE (KS4)
 */

import { AgeBand, CambridgeAlignment } from '../types/curriculum';

export interface CambridgePathwayTier {
  id: string;
  name: string;
  ages: string;
  stageCode: string;
  description: string;
  checkpoints: string;
  etwAgeBand: AgeBand;
  coreSubjects: {
    name: string;
    code?: string;
    keyThemes: string[];
  }[];
  etwPhilosophyBridge: string;
}

export interface InternationalEquivalenceMapping {
  domainId: string;
  domainName: string;
  ageBand: AgeBand;
  etwModuleFocus: string;
  cambridge: {
    programme: string;
    subject: string;
    syllabusCode: string;
    sampleObjectiveCode: string;
    learningObjective: string;
  };
  ibProgramme: {
    programme: 'IB PYP' | 'IB MYP' | 'IB DP' | 'IB PYP / MYP' | string;
    transdisciplinaryTheme: string;
    inquiryFocus: string;
  };
  ukNationalCurriculum: {
    keyStage: string;
    statutoryTopic: string;
  };
  practicalAtHomeAdvantage: string;
}

export const CAMBRIDGE_PATHWAY_TIERS: CambridgePathwayTier[] = [
  {
    id: 'cambridge-early-years',
    name: 'Cambridge Early Years',
    ages: 'Ages 3–5 (Early Years 1–3)',
    stageCode: 'EY1 – EY3',
    description: 'A child-centred, play-based holistic curriculum that fosters inquiry, physical movement, emotional self-regulation, and foundational communication.',
    checkpoints: 'Continuous teacher observation and developmental milestone portfolios.',
    etwAgeBand: '3-5',
    coreSubjects: [
      { name: 'Communication, Language & Literacy', keyThemes: ['Phonological awareness', 'Oral storytelling', 'Active listening', 'Pre-writing fine motor control'] },
      { name: 'Creative Expression', keyThemes: ['Exploring sound & music', 'Natural pigments & drawing', 'Role play & dramatic imitation'] },
      { name: 'Mathematics', keyThemes: ['Counting objects 1–20', 'Shape identification', 'Sorting & pattern completion', 'Comparative sizes'] },
      { name: 'Personal, Social & Emotional Development', keyThemes: ['Self-care hygiene', 'Sharing & taking turns', 'Naming emotions', 'Friendship building'] },
      { name: 'Understanding the World', keyThemes: ['Observing nature & weather', 'Living vs non-living', 'Community helpers', 'Safe sensory exploration'] },
      { name: 'Physical Development', keyThemes: ['Gross motor balance', 'Spatial orientation', 'Hand-eye coordination'] }
    ],
    etwPhilosophyBridge: 'Matches Educate the World "I DISCOVER": transforms every home, kitchen, and garden into an empirical discovery laboratory with zero expensive plastic toys needed.'
  },
  {
    id: 'cambridge-primary',
    name: 'Cambridge Primary (Stages 1–6)',
    ages: 'Ages 6–11 (Grades 1–5 / Primary 1–6)',
    stageCode: 'Primary Stages 1–6',
    description: 'Rigorous foundation in English, Mathematics, and Science alongside Cambridge Global Perspectives and Digital Literacy. Cultivates confident, innovative, and reflective young learners.',
    checkpoints: 'Cambridge Primary Progression Tests (Stages 3–5) & Cambridge Primary Checkpoint (Stage 6 international examination).',
    etwAgeBand: '6-8',
    coreSubjects: [
      { name: 'Cambridge Primary English', code: '0058', keyThemes: ['Phonics and spelling', 'Reading comprehension across fiction & non-fiction', 'Grammar, punctuation and syntax', 'Structured creative & factual writing'] },
      { name: 'Cambridge Primary Mathematics', code: '0096', keyThemes: ['Number & mental arithmetic', 'Fractions, decimals and percentages', 'Geometry and spatial reasoning', 'Measurement & data handling'] },
      { name: 'Cambridge Primary Science', code: '0097', keyThemes: ['Scientific enquiry & fair testing', 'Living things & habitats', 'Forces, materials and states of matter', 'Earth, weather & the water cycle'] },
      { name: 'Cambridge Global Perspectives', code: '0838', keyThemes: ['Water access', 'Keeping healthy', 'The world of work', 'Moving goods & people', 'Rich and poor'] },
      { name: 'Cambridge Primary Computing', code: '0059', keyThemes: ['Computational thinking', 'Algorithms & instructions', 'Data collection & charts', 'Online safety'] },
      { name: 'Cambridge Wellbeing', code: '0034', keyThemes: ['Understanding feelings', 'Empathy & conflict resolution', 'Active healthy living'] }
    ],
    etwPhilosophyBridge: 'Matches Educate the World "I EXPLORE" (Ages 6–8) and "I UNDERSTAND" (Ages 9–11). Connects Cambridge math and science to daily household items (cooking fractions, rain cycles, and 5,000 UGX savings tins).'
  },
  {
    id: 'cambridge-lower-secondary',
    name: 'Cambridge Lower Secondary (Stages 7–9)',
    ages: 'Ages 12–14 (Grades 6–8 / Secondary 1–3)',
    stageCode: 'Lower Secondary Stages 7–9',
    description: 'Deepens critical thinking, investigative scientific method, and advanced mathematical problem-solving. Prepares students seamlessly for Cambridge IGCSE and international exams.',
    checkpoints: 'Cambridge Lower Secondary Progression Tests (Stages 7–8) & Cambridge Lower Secondary Checkpoint (Stage 9 international examination).',
    etwAgeBand: '13-16',
    coreSubjects: [
      { name: 'Cambridge Lower Secondary English', code: '0861', keyThemes: ['Argumentative and persuasive writing', 'Critical textual analysis', 'Oratory & structured debate', 'Research methodology'] },
      { name: 'Cambridge Lower Secondary Mathematics', code: '0862', keyThemes: ['Algebraic equations & linear functions', 'Geometric proofs & transformations', 'Probability & statistical distributions', 'Financial mathematics & compound rates'] },
      { name: 'Cambridge Lower Secondary Science', code: '0893', keyThemes: ['Cellular biology & genetics', 'Atomic structure & the periodic table', 'Newtonian mechanics, momentum & energy', 'Climate systems & resource management'] },
      { name: 'Cambridge Global Perspectives', code: '1129', keyThemes: ['Human rights', 'Education for all', 'Sustainable agriculture & food security', 'Digital world & privacy'] },
      { name: 'Cambridge Computing', code: '0860', keyThemes: ['Programming in text languages', 'Databases and SQL logic', 'Network security & encryption', 'AI ethics'] }
    ],
    etwPhilosophyBridge: 'Matches Educate the World "I INVESTIGATE": trains learners to conduct controlled experiments, evaluate media bias, and build functional machines (e.g. foot-operated handwashers and solar circuits).'
  },
  {
    id: 'cambridge-upper-secondary',
    name: 'Cambridge Upper Secondary (Cambridge IGCSE)',
    ages: 'Ages 15–17 (Grades 9–10 / S4–S5 / Ordinary Level)',
    stageCode: 'Cambridge IGCSE & O Level',
    description: 'The world’s most popular international qualification for 14–16 year olds. Globally recognised by leading universities and employers worldwide.',
    checkpoints: 'External international examination papers marked by Cambridge examiners in Cambridge, UK; grades A* to G.',
    etwAgeBand: '17+',
    coreSubjects: [
      { name: 'Cambridge IGCSE Mathematics', code: '0580', keyThemes: ['Algebraic manipulation', 'Coordinate geometry & trigonometry', 'Vectors & transformations', 'Calculus introduction & modeling'] },
      { name: 'Cambridge IGCSE Biology', code: '0610', keyThemes: ['Molecular biology & enzymes', 'Plant nutrition & transport', 'Human physiology', 'Ecology & biotechnology'] },
      { name: 'Cambridge IGCSE Chemistry', code: '0620', keyThemes: ['Stoichiometry & molar calculations', 'Chemical energetics & equilibrium', 'Organic chemistry & polymers', 'Experimental techniques & analysis'] },
      { name: 'Cambridge IGCSE Physics', code: '0625', keyThemes: ['General physics & forces', 'Thermal physics & gas laws', 'Waves, light & sound', 'Electricity & electromagnetism', 'Nuclear & space physics'] },
      { name: 'Cambridge IGCSE Enterprise', code: '0454', keyThemes: ['Identifying business opportunities', 'Business plans & feasibility study', 'Financial statements & cash flow', 'Marketing & negotiations'] },
      { name: 'Cambridge IGCSE Global Perspectives', code: '0457', keyThemes: ['Independent research project', 'Intercultural collaboration', 'Analyzing conflicting perspectives', 'Proposing community action'] },
      { name: 'Cambridge IGCSE Computer Science', code: '0478', keyThemes: ['Algorithms & programming logic', 'Data representation (hexadecimal, binary)', 'Hardware, logic gates & processors', 'Cybersecurity & automated systems'] },
      { name: 'Cambridge IGCSE Economics', code: '0455', keyThemes: ['Microeconomics: markets, supply & demand', 'Macroeconomics: fiscal & monetary policy', 'International trade, exchange rates & development'] }
    ],
    etwPhilosophyBridge: 'Matches Educate the World "I CREATE": learners launch authentic student enterprises, write comparative history theses, and engineer industry-linked technical projects.'
  },
  {
    id: 'cambridge-advanced',
    name: 'Cambridge Advanced (International AS & A Level)',
    ages: 'Ages 18+ (Grades 11–12 / S6 / Higher Secondary)',
    stageCode: 'Cambridge AS & A Level',
    description: 'Pre-university study demanding deep specialization, rigorous scientific research, and academic mastery. Qualifies students for admission to Oxford, Cambridge, Harvard, MIT, Makerere, and global universities.',
    checkpoints: 'Cambridge International AS & A Level examinations; worldwide university admissions equivalence.',
    etwAgeBand: '17+',
    coreSubjects: [
      { name: 'Cambridge International A Level Mathematics', code: '9709', keyThemes: ['Pure Mathematics 1, 2, 3', 'Mechanics', 'Probability & Statistics 1 & 2'] },
      { name: 'Cambridge International A Level Sciences', code: '9700/01/02', keyThemes: ['Advanced experimental skills & design', 'Theoretical modeling', 'Biochemistry & quantum phenomena'] },
      { name: 'Cambridge International A Level Economics & Business', code: '9708/9609', keyThemes: ['Macroeconomic equilibrium', 'Corporate strategic management', 'International monetary architecture'] },
      { name: 'Cambridge Global Perspectives & Research', code: '9239', keyThemes: ['5,000-word independent research report', 'Interdisciplinary defense', 'Academic literature synthesis'] }
    ],
    etwPhilosophyBridge: 'Matches Educate the World "I CONTRIBUTE / LAUNCH": the learner transitions from student to nation builder, producing verifiable evidence of human capability.'
  }
];

export const INTERNATIONAL_EQUIVALENCE_MAPPINGS: InternationalEquivalenceMapping[] = [
  // 1. Language & Stories (Ages 3-5)
  {
    domainId: 'language',
    domainName: 'Language & Communication',
    ageBand: '3-5',
    etwModuleFocus: 'Oral Storytelling, African Proverbs, Sound Detectives & Family Tales',
    cambridge: {
      programme: 'Cambridge Early Years',
      subject: 'Communication, Language & Literacy',
      syllabusCode: 'EY-CLL',
      sampleObjectiveCode: 'CLL.01',
      learningObjective: 'Listen attentively to stories, recognize repeating sound patterns, and verbally narrate personal experiences with sequential coherence.'
    },
    ibProgramme: {
      programme: 'IB PYP',
      transdisciplinaryTheme: 'Who We Are',
      inquiryFocus: 'Expressing thoughts, feelings, and family identity through oral and symbolic language.'
    },
    ukNationalCurriculum: {
      keyStage: 'EYFS (Early Years Foundation Stage)',
      statutoryTopic: 'Communication and Language: Listening, Attention and Understanding'
    },
    practicalAtHomeAdvantage: 'Children develop fluent native vocabulary and fireside storytelling skills with family elders, exceeding rote classroom flashcards.'
  },

  // 2. Practical Science: Clean Water (Ages 9-11)
  {
    domainId: 'science',
    domainName: 'Practical Science',
    ageBand: '9-12',
    etwModuleFocus: 'Village & City Clean Water Filtration Lab (Sand, Gravel, Charcoal Gravity Filter)',
    cambridge: {
      programme: 'Cambridge Primary Stage 5',
      subject: 'Cambridge Primary Science',
      syllabusCode: '0097',
      sampleObjectiveCode: '5Es.02',
      learningObjective: 'Investigate how to separate insoluble solids from liquids through filtration and sedimentation, explaining the role of particle size.'
    },
    ibProgramme: {
      programme: 'IB PYP',
      transdisciplinaryTheme: 'Sharing the Planet',
      inquiryFocus: 'Finite water resources, purification techniques, and equal community access.'
    },
    ukNationalCurriculum: {
      keyStage: 'Key Stage 2 (Year 5 Science)',
      statutoryTopic: 'Properties and Changes of Materials: Filtering, sieving and evaporating'
    },
    practicalAtHomeAdvantage: 'Rather than reading about water filters in a textbook, the child actually builds a working filter with a 2-liter bottle and verifies flow rate.'
  },

  // 3. Mathematics: Cooking Fractions (Ages 6-8)
  {
    domainId: 'math',
    domainName: 'Mathematics & Logical Reasoning',
    ageBand: '6-8',
    etwModuleFocus: 'Let’s Cook with Fractions (Dividing Matooke, Mandazi, and Measuring Cups)',
    cambridge: {
      programme: 'Cambridge Primary Stage 2 & 3',
      subject: 'Cambridge Primary Mathematics',
      syllabusCode: '0096',
      sampleObjectiveCode: '3Nf.01',
      learningObjective: 'Understand and use fractional notation 1/2, 1/4, 1/3 as equal parts of a whole object and equal parts of a discrete quantity.'
    },
    ibProgramme: {
      programme: 'IB PYP',
      transdisciplinaryTheme: 'How We Express Ourselves',
      inquiryFocus: 'Mathematical representations of portion, sharing, and division in cultural foods.'
    },
    ukNationalCurriculum: {
      keyStage: 'Key Stage 1 / Year 2 Math',
      statutoryTopic: 'Fractions: Recognise, find, name and write fractions 1/3, 1/4, 2/4 and 3/4'
    },
    practicalAtHomeAdvantage: 'Fractions are understood instantly through tangible culinary portions (rolex, mandazi, banana fingers) rather than abstract symbols on worksheets.'
  },

  // 4. Financial Literacy: 5,000 UGX Business Challenge (Ages 9-11)
  {
    domainId: 'finance',
    domainName: 'Financial Literacy & Enterprise',
    ageBand: '9-12',
    etwModuleFocus: 'The 5,000 UGX Micro-Enterprise Challenge (Revenue, Unit Costs & Net Profit)',
    cambridge: {
      programme: 'Cambridge Primary & Lower Secondary',
      subject: 'Cambridge Global Perspectives & Enterprise Intro',
      syllabusCode: '0838 / 0454',
      sampleObjectiveCode: 'GP5-BUS.03',
      learningObjective: 'Understand the difference between income and expenditure, and calculate how businesses generate added value and profit.'
    },
    ibProgramme: {
      programme: 'IB PYP / MYP',
      transdisciplinaryTheme: 'How We Organize Ourselves',
      inquiryFocus: 'Economic systems, ethical value creation, and community commerce.'
    },
    ukNationalCurriculum: {
      keyStage: 'PSHE Association Key Stage 2',
      statutoryTopic: 'Living in the Wider World: Economic wellbeing, enterprise and budgeting'
    },
    practicalAtHomeAdvantage: 'Real currency transactions in the local town or village teach real-life calculation and customer interaction that cannot be simulated in school desks.'
  },

  // 5. Practical Mechanics: Why Car Engines Need Oil (Ages 13-16)
  {
    domainId: 'science',
    domainName: 'Science & Empirical Inquiry',
    ageBand: '13-16',
    etwModuleFocus: 'Why Does a Car Engine Need Oil? (Viscosity, Friction, Heat Dissipation)',
    cambridge: {
      programme: 'Cambridge Lower Secondary & IGCSE Physics',
      subject: 'Cambridge Lower Secondary Science / IGCSE Physics',
      syllabusCode: '0893 / 0625',
      sampleObjectiveCode: '8Pf.02 / 0625-Topic1',
      learningObjective: 'Describe friction as a force opposing motion, investigate methods of reducing friction through lubricants, and explain heat transfer.'
    },
    ibProgramme: {
      programme: 'IB MYP',
      transdisciplinaryTheme: 'Scientific and Technical Innovation',
      inquiryFocus: 'Mechanical systems, frictional thermal energy, and machine longevity.'
    },
    ukNationalCurriculum: {
      keyStage: 'Key Stage 3 Physics',
      statutoryTopic: 'Forces and Motion: Opposing forces, friction, drag and lubrication'
    },
    practicalAtHomeAdvantage: 'Learner inspects real dipsticks with a local mechanic or driver, observing thermal degradation and particulate matter firsthand.'
  },

  // 6. Community Action & Global Perspectives (Ages 12-14)
  {
    domainId: 'capstone',
    domainName: 'Humanity, Society & The World',
    ageBand: '13-16',
    etwModuleFocus: 'Investigate a Community Issue & Salt of the Earth Service Campaign',
    cambridge: {
      programme: 'Cambridge Lower Secondary & IGCSE',
      subject: 'Cambridge IGCSE Global Perspectives',
      syllabusCode: '0457',
      sampleObjectiveCode: '0457-Component 3',
      learningObjective: 'Identify local causes and consequences of global challenges, conduct field interviews, collaborate to propose action, and evaluate impact.'
    },
    ibProgramme: {
      programme: 'IB MYP',
      transdisciplinaryTheme: 'Community and Service',
      inquiryFocus: 'Principled action addressing societal needs through structured inquiry.'
    },
    ukNationalCurriculum: {
      keyStage: 'Key Stage 3 & 4 Citizenship',
      statutoryTopic: 'Taking responsible action to improve community life and environment'
    },
    practicalAtHomeAdvantage: 'Instead of an academic simulation, the child genuinely clears a drainage ditch, plants trees, or teaches water hygiene to real neighbors.'
  },

  // 7. Technology & Coding Logic (Ages 6-8)
  {
    domainId: 'technology',
    domainName: 'Technology & Digital Intelligence',
    ageBand: '6-8',
    etwModuleFocus: 'The Human Robot Game (Sequences → Patterns → Algorithms)',
    cambridge: {
      programme: 'Cambridge Primary Computing',
      subject: 'Cambridge Primary Computing',
      syllabusCode: '0059',
      sampleObjectiveCode: '2Cp.01',
      learningObjective: 'Decompose daily tasks into precise sequential steps and identify algorithms in everyday processes without needing a computer screen.'
    },
    ibProgramme: {
      programme: 'IB PYP',
      transdisciplinaryTheme: 'How the World Works',
      inquiryFocus: 'Logic, step-by-step problem decomposition, and human-machine interaction.'
    },
    ukNationalCurriculum: {
      keyStage: 'Key Stage 1 Computing',
      statutoryTopic: 'Understand what algorithms are, how they are implemented as programs on digital devices'
    },
    practicalAtHomeAdvantage: 'Computational thinking is mastered unplugged through household obstacle games, preventing screen addiction while building pristine logic.'
  },

  // 8. Enterprise & Student Business Plan (Ages 15-17)
  {
    domainId: 'finance',
    domainName: 'Financial Literacy & Enterprise',
    ageBand: '17+',
    etwModuleFocus: 'Launch a Student Enterprise & Audited Financial Statements',
    cambridge: {
      programme: 'Cambridge Upper Secondary',
      subject: 'Cambridge IGCSE Enterprise',
      syllabusCode: '0454',
      sampleObjectiveCode: '0454-Paper 1 & Coursework',
      learningObjective: 'Implement a real enterprise project from market research and business plan to cash flow forecasting, customer marketing, and post-project evaluation.'
    },
    ibProgramme: {
      programme: 'IB DP',
      transdisciplinaryTheme: 'Business Management',
      inquiryFocus: 'Strategic planning, financial accountability, and stakeholder impact.'
    },
    ukNationalCurriculum: {
      keyStage: 'GCSE Business Studies',
      statutoryTopic: 'Enterprise and Entrepreneurship: Business planning and revenue streams'
    },
    practicalAtHomeAdvantage: 'The student builds genuine income-producing assets (emmaali) and earns real UGX before graduating secondary school.'
  }
];

/**
 * Returns Cambridge alignment metadata for any given module.
 * If the module already has explicit cambridgeAlignment, returns that;
 * otherwise automatically calculates the appropriate Cambridge Stage & Syllabus mapping.
 */
export function getCambridgeAlignmentForLesson(
  ageBand: AgeBand, 
  category: string, 
  title: string
): CambridgeAlignment {
  // Check if there is an exact or closely matching domain mapping
  const matched = INTERNATIONAL_EQUIVALENCE_MAPPINGS.find(
    m => m.ageBand === ageBand && (m.domainId === category || category.includes(m.domainId))
  );

  if (matched) {
    return {
      pathwayStage: matched.cambridge.programme.includes('Early') 
        ? 'Cambridge Early Years' 
        : matched.cambridge.programme.includes('Primary') 
        ? 'Cambridge Primary' 
        : matched.cambridge.programme.includes('Lower') 
        ? 'Cambridge Lower Secondary' 
        : matched.cambridge.programme.includes('IGCSE') 
        ? 'Cambridge Upper Secondary (IGCSE)' 
        : 'Cambridge Advanced (AS & A Level)',
      stageNumber: matched.cambridge.programme,
      subject: matched.cambridge.subject,
      syllabusCode: matched.cambridge.syllabusCode,
      learningObjectiveCode: matched.cambridge.sampleObjectiveCode,
      cambridgeObjectiveTitle: matched.cambridge.learningObjective,
      internationalEquivalents: {
        ibProgramme: matched.ibProgramme.programme + ' • ' + matched.ibProgramme.transdisciplinaryTheme,
        ukNationalCurriculum: matched.ukNationalCurriculum.keyStage
      }
    };
  }

  // Fallback programmatic generation based on Age Band
  if (ageBand === '3-5') {
    return {
      pathwayStage: 'Cambridge Early Years',
      stageNumber: 'Early Years 1–3',
      subject: category === 'math' ? 'Cambridge Early Years Mathematics' : 'Cambridge Early Years Communication & World',
      syllabusCode: 'EY-01',
      learningObjectiveCode: 'EY.01',
      cambridgeObjectiveTitle: 'Foundational inquiry, oral storytelling, sensory exploration, and counting objects.',
      internationalEquivalents: {
        ibProgramme: 'IB PYP Early Years (Ages 3–5)',
        ukNationalCurriculum: 'UK EYFS (Early Years Foundation Stage)'
      }
    };
  }

  if (ageBand === '6-8') {
    return {
      pathwayStage: 'Cambridge Primary',
      stageNumber: 'Cambridge Primary Stages 1–3',
      subject: category === 'science' 
        ? 'Cambridge Primary Science (0097)' 
        : category === 'math' || category === 'numbers' 
        ? 'Cambridge Primary Mathematics (0096)' 
        : 'Cambridge Primary English & Global Perspectives (0058/0838)',
      syllabusCode: category === 'science' ? '0097' : category === 'math' ? '0096' : '0058',
      learningObjectiveCode: 'Stage 2/3 Checkpoint',
      cambridgeObjectiveTitle: `Demonstrate stage-appropriate mastery in ${category} aligned with Cambridge Primary standards.`,
      internationalEquivalents: {
        ibProgramme: 'IB PYP (Primary Years Programme)',
        ukNationalCurriculum: 'UK Key Stage 1 & 2'
      }
    };
  }

  if (ageBand === '9-12') {
    return {
      pathwayStage: 'Cambridge Primary',
      stageNumber: 'Cambridge Primary Stages 4–6 (Checkpoint Stage)',
      subject: category === 'science' 
        ? 'Cambridge Primary Science (0097)' 
        : category === 'math' 
        ? 'Cambridge Primary Mathematics (0096)' 
        : 'Cambridge Primary Global Perspectives & English (0838/0058)',
      syllabusCode: category === 'science' ? '0097' : category === 'math' ? '0096' : '0838',
      learningObjectiveCode: 'Stage 6 Checkpoint',
      cambridgeObjectiveTitle: `Rigorous conceptual understanding and empirical inquiry certified by Cambridge Primary Checkpoint standards.`,
      internationalEquivalents: {
        ibProgramme: 'IB PYP Exhibition Stage',
        ukNationalCurriculum: 'UK Key Stage 2 (SATs / Checkpoint)'
      }
    };
  }

  if (ageBand === '13-16') {
    return {
      pathwayStage: 'Cambridge Lower Secondary',
      stageNumber: 'Cambridge Lower Secondary Stages 7–9',
      subject: category === 'science' 
        ? 'Cambridge Lower Secondary Science (0893)' 
        : category === 'math' 
        ? 'Cambridge Lower Secondary Mathematics (0862)' 
        : 'Cambridge Global Perspectives & English (1129/0861)',
      syllabusCode: category === 'science' ? '0893' : category === 'math' ? '0862' : '1129',
      learningObjectiveCode: 'Stage 9 Checkpoint',
      cambridgeObjectiveTitle: `Scientific investigation, algebraic modeling, and multi-perspective argument analysis aligned with Cambridge Lower Secondary.`,
      internationalEquivalents: {
        ibProgramme: 'IB MYP (Middle Years Programme Stages 1–3)',
        ukNationalCurriculum: 'UK Key Stage 3'
      }
    };
  }

  // 17+
  return {
    pathwayStage: 'Cambridge Upper Secondary (IGCSE)',
    stageNumber: 'Cambridge IGCSE & International AS/A Level',
    subject: category === 'finance' 
      ? 'Cambridge IGCSE Enterprise (0454) & Economics (0455)' 
      : category === 'science' 
      ? 'Cambridge IGCSE Physics/Chemistry/Biology (0625/0620/0610)' 
      : 'Cambridge IGCSE Global Perspectives (0457) & Mathematics (0580)',
    syllabusCode: category === 'finance' ? '0454' : category === 'science' ? '0625' : '0457',
    learningObjectiveCode: 'IGCSE A*-G Standard',
    cambridgeObjectiveTitle: `University-ready analytical competence, enterprise planning, and empirical research compliant with international IGCSE and A-Level criteria.`,
    internationalEquivalents: {
      ibProgramme: 'IB Diploma Programme (DP) / Career-related (CP)',
      ukNationalCurriculum: 'UK Key Stage 4 (GCSE) & Key Stage 5 (A Level)'
    }
  };
}
