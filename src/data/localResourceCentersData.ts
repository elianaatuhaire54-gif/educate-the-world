/**
 * LOCAL OFFLINE RESOURCE CENTERS & STUDY LABS DATABASE
 * Provides in-app curated syllabus modules, interactive practice problem sets,
 * and printable worksheets for all resource centers with zero external redirects.
 */

export interface ResourceCenterLabProblem {
  problemNumber: number;
  question: string;
  stepByStepSolution: string[];
  finalAnswer: string;
  conceptualHint: string;
}

export interface LocalResourceCenterContent {
  id: string;
  name: string;
  subjectDomain: string;
  emoji: string;
  overview: string;
  curriculumSyllabus: string[];
  keyPrinciples: string[];
  offlineLabExperimentOrChallenge: string;
  sampleProblems: ResourceCenterLabProblem[];
  printableWorksheet: {
    title: string;
    instructions: string;
    exercises: string[];
    reflectionPrompts: string[];
  };
}

export const LOCAL_RESOURCE_CENTERS: Record<string, LocalResourceCenterContent> = {
  'rc-khan-academy-math': {
    id: 'rc-khan-academy-math',
    name: 'Khan Academy Mathematics & Mastery Hub',
    subjectDomain: 'Mathematics & Logical Reasoning',
    emoji: '🔢',
    overview: 'A complete offline mathematical foundation covering arithmetic, fractions, pre-algebra, Euclidean geometry, probability, and calculus with systematic step-by-step masteries.',
    curriculumSyllabus: [
      'Number sense, place value, and mental addition/subtraction',
      'Multiplication tables, long division, and factor trees',
      'Fraction operations (common denominators, reciprocals, percentages)',
      'Linear equations, slope-intercept form, and algebraic systems',
      'Geometric proofs, Pythagorean theorem, area, and volume integrals'
    ],
    keyPrinciples: [
      'Mastery-based progression: never move forward until foundational concepts are solid',
      'Visual mathematical representation before abstract notation',
      'Error analysis: mistakes are the primary mechanism of neurological growth'
    ],
    offlineLabExperimentOrChallenge: 'Geometry in Nature Lab: Measure 5 circular objects in your home (bowl, cup, bicycle wheel, pot lid, coin). Measure their circumferences with string and their diameters with a ruler. Divide Circumference by Diameter for each. Notice how every single one approaches π (3.14159)!',
    sampleProblems: [
      {
        problemNumber: 1,
        question: 'Solve for x:  3(2x - 5) + 4 = 25',
        stepByStepSolution: [
          'Step 1: Expand the brackets: 6x - 15 + 4 = 25',
          'Step 2: Combine like terms: 6x - 11 = 25',
          'Step 3: Add 11 to both sides: 6x = 36',
          'Step 4: Divide both sides by 6: x = 6'
        ],
        finalAnswer: 'x = 6',
        conceptualHint: 'Use the distributive property first, then isolate x systematically.'
      },
      {
        problemNumber: 2,
        question: 'Calculate the area of a right-angled triangle with base 12 cm and hypotenuse 13 cm.',
        stepByStepSolution: [
          'Step 1: Use the Pythagorean theorem (a² + b² = c²) to find the perpendicular height h: h² + 12² = 13²',
          'Step 2: Calculate squares: h² + 144 = 169',
          'Step 3: Subtract 144 from both sides: h² = 25, so h = 5 cm',
          'Step 4: Use Area formula = (1/2) × base × height = (1/2) × 12 × 5 = 30 cm²'
        ],
        finalAnswer: '30 cm²',
        conceptualHint: 'Find the missing perpendicular height first using Pythagoras before computing area.'
      }
    ],
    printableWorksheet: {
      title: 'Mastery Mathematics Problem Set & Proof Sheet',
      instructions: 'Work through each problem step by step without a calculator. Show all intermediate working clearly.',
      exercises: [
        '1. Simplify: (3/4) + (2/5) ÷ (3/10) - (1/2)',
        '2. Factor completely: 2x² + 7x + 3',
        '3. A farmer has a rectangular field 40 meters long and 25 meters wide. If he builds a 2-meter wide gravel path around the outside, find the area of the gravel path.',
        '4. Solve the simultaneous equations: 2x + 3y = 19 and 5x - y = 5'
      ],
      reflectionPrompts: [
        'Explain why dividing by a fraction is mathematically identical to multiplying by its reciprocal.',
        'Describe a situation where exponential growth occurs in your local economy or agriculture.'
      ]
    }
  },

  'rc-phet-sims': {
    id: 'rc-phet-sims',
    name: 'PhET Interactive Science & Physics Simulations',
    subjectDomain: 'Physical & Natural Sciences',
    emoji: '🔬',
    overview: 'Offline inquiry-based physics, chemistry, and biology laboratory protocols designed by the University of Colorado to visualize atomic structures, circuit laws, and kinetic forces.',
    curriculumSyllabus: [
      'Circuit construction: Ohm’s Law, series vs parallel circuits, and resistance',
      'Wave interference, sound frequency, and electromagnetic spectrum',
      'Atomic building blocks: protons, neutrons, electrons, and isotopic stability',
      'Acid-base titrations, pH scales, and chemical equilibrium',
      'Gravity and orbits: Kepler’s planetary laws and gravitational attraction'
    ],
    keyPrinciples: [
      'Active scientific modeling over passive formula memorization',
      'Empirical variable isolation: change one variable at a time (independent vs dependent)',
      'Bridging micro-scale atomic interactions to macro-scale observable phenomena'
    ],
    offlineLabExperimentOrChallenge: 'Kitchen Chemical Battery: Insert a galvanized iron nail and a copper coin into a juicy lemon or potato. Connect wires from both metals to a small LED or voltmeter. Observe the chemical reaction generating continuous direct current (0.9V)!',
    sampleProblems: [
      {
        problemNumber: 1,
        question: 'A 12V battery is connected to a 4Ω resistor and a 2Ω resistor in series. What is the total current flowing through the circuit?',
        stepByStepSolution: [
          'Step 1: Calculate total resistance in series: R_total = R1 + R2 = 4Ω + 2Ω = 6Ω',
          'Step 2: Apply Ohm’s Law: V = I × R, therefore I = V / R',
          'Step 3: Substitute known values: I = 12V / 6Ω = 2.0 Amperes',
          'Step 4: Verify: The current of 2A passes through both resistors unchanged in a series loop.'
        ],
        finalAnswer: '2.0 Amperes (A)',
        conceptualHint: 'In series circuits, resistances add directly and current remains constant throughout.'
      }
    ],
    printableWorksheet: {
      title: 'Physical Science Empirical Investigation Sheet',
      instructions: 'Record your hypotheses, empirical measurements, and conclusions in this lab sheet.',
      exercises: [
        '1. Draw a schematic circuit diagram with a 9V battery, an open switch, a 15Ω bulb, and an ammeter.',
        '2. State the difference between an alternating current (AC) and direct current (DC).',
        '3. Calculate the potential energy of a 2.5 kg stone held 4.0 meters above the ground (g = 9.8 m/s²).'
      ],
      reflectionPrompts: [
        'Why does doubling the resistance in a circuit halve the current if voltage remains constant?',
        'How does understanding circuits help you troubleshoot domestic solar panels and battery storage?'
      ]
    }
  },

  'rc-scratch-mit': {
    id: 'rc-scratch-mit',
    name: 'MIT Scratch & Creative Algorithmic Thinking',
    subjectDomain: 'Technology, Computing & Algorithms',
    emoji: '💻',
    overview: 'Complete visual and text-based computer science framework teaching algorithmic logic, conditional branching, loops, variables, and event-driven software architecture.',
    curriculumSyllabus: [
      'Algorithms and step-by-step procedural thinking',
      'Event listeners: handling clicks, keystrokes, and touch events',
      'Control flow: loops (repeat, forever) and conditionals (if-then-else)',
      'Variables, lists, and data persistence',
      'Functions and modular code reusability'
    ],
    keyPrinciples: [
      'Decomposition: breaking complex programs into small manageable procedures',
      'Pattern recognition: abstracting repeated behaviors into loops and functions',
      'Iterative debugging: systematic testing to identify syntax and logical anomalies'
    ],
    offlineLabExperimentOrChallenge: 'Human Algorithm Maze: Write down a precise 10-step algorithm using only commands [TURN LEFT 90°], [TURN RIGHT 90°], [STEP FORWARD 1 PACE], and [IF WALL THEN STOP]. Blindfold a sibling or partner and read your algorithm word for word to navigate them safely around a room!',
    sampleProblems: [
      {
        problemNumber: 1,
        question: 'Trace the value of variable X after executing this loop:\nSet X = 2\nRepeat 4 times:\n  Set X = (X * 2) - 1\nEnd Repeat',
        stepByStepSolution: [
          'Initial state: X = 2',
          'Iteration 1: X = (2 * 2) - 1 = 4 - 1 = 3',
          'Iteration 2: X = (3 * 2) - 1 = 6 - 1 = 5',
          'Iteration 3: X = (5 * 2) - 1 = 10 - 1 = 9',
          'Iteration 4: X = (9 * 2) - 1 = 18 - 1 = 17'
        ],
        finalAnswer: 'X = 17',
        conceptualHint: 'Carefully compute each iteration sequentially, updating the value of X each round.'
      }
    ],
    printableWorksheet: {
      title: 'Algorithmic Logic & Pseudocode Practice Sheet',
      instructions: 'Write clean pseudocode and trace variable states for each computer science exercise.',
      exercises: [
        '1. Write an algorithm that takes a student’s score (0-100) and prints "Distinction" (≥80), "Pass" (≥50), or "Review" (<50).',
        '2. Design a loop that prints the first 10 terms of the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8...',
        '3. Explain the difference between a while-loop and a for-loop.'
      ],
      reflectionPrompts: [
        'How does an algorithm in software mirror a cooking recipe or an agricultural planting calendar?',
        'Why must software engineers test their code with edge cases like zero, negative numbers, or empty inputs?'
      ]
    }
  },

  'rc-bible-gateway-nlt-msg': {
    id: 'rc-bible-gateway-nlt-msg',
    name: 'Scripture Vault: Parallel NLT & The Message (MSG)',
    subjectDomain: 'Character, Faith & Biblical Ethics',
    emoji: '✝️',
    overview: 'An offline biblical repository featuring the New Living Translation (NLT) and Eugene Peterson’s The Message (MSG) in parallel, equipped with commentary, historical context, and ethical applications.',
    curriculumSyllabus: [
      'Genesis Creation narrative and stewardship of natural ecosystems',
      'The Mosaic Covenant, Ten Commandments, and social justice laws',
      'Hebrew Poetry: Psalms of lament, trust, thanksgiving, and royal praise',
      'Proverbial Wisdom: Diligence, honesty, family loyalty, and sound speech',
      'Gospel Parables: The Good Samaritan, Prodigal Son, Sower, and Beatitudes',
      'Pauline and Apostolic Ethics: Romans 12, 1 Corinthians 13 (Love), Galatians 5 (Fruit of the Spirit)'
    ],
    keyPrinciples: [
      'Dynamic parallel study: comparing precise translation with idiomatic living prose',
      'Contextual hermeneutics: understanding historical author, audience, and intent',
      'Life application: faith expressed through active love, justice, and mercy'
    ],
    offlineLabExperimentOrChallenge: 'The Good Samaritan Community Service Audit: Walk around your local road, school, or trading center. Identify three specific ways you can help a vulnerable person (elderly person carrying heavy loads, clearing a dangerous drain, comforting an orphan). Execute one act of kindness today without seeking praise.',
    sampleProblems: [
      {
        problemNumber: 1,
        question: 'Compare Romans 12:2 in NLT and The Message. What is the fundamental difference in how they describe resisting cultural conformism?',
        stepByStepSolution: [
          'NLT reads: "Don’t copy the behavior and customs of this world, but let God transform you into a new person by changing the way you think."',
          'The Message reads: "Don’t become so well-adjusted to your culture that you fit into it without even thinking. Instead, fix your attention on God. You’ll be changed from the inside out."',
          'NLT emphasizes the intellectual transformation of thought ("changing the way you think").',
          'The Message emphasizes the uncritical, unconscious habit of conformity ("fit into it without even thinking"), warning against moral complacency.'
        ],
        finalAnswer: 'NLT emphasizes intellectual mental renewal; MSG highlights avoiding mindless, unconscious cultural conformity.',
        conceptualHint: 'Notice how Peterson targets passive unthinking assimilation into mainstream culture.'
      }
    ],
    printableWorksheet: {
      title: 'Biblical Literature & Ethical Hermeneutics Study Sheet',
      instructions: 'Examine each text carefully in both translations and reflect on its moral imperative.',
      exercises: [
        '1. Copy Psalm 23:1-3 in your preferred translation and identify three metaphors for peace.',
        '2. List the nine Fruit of the Spirit from Galatians 5:22-23 and give an everyday example for three of them.',
        '3. Contrast the character of the Priest, the Levite, and the Samaritan in Luke 10:25-37.'
      ],
      reflectionPrompts: [
        'Why does genuine love require action and sacrifice rather than mere sentiment or words?',
        'How does integrity in small private habits prepare you for public leadership and community trust?'
      ]
    }
  },

  'rc-who-health-academy': {
    id: 'rc-who-health-academy',
    name: 'WHO Health & Community Wellness Academy',
    subjectDomain: 'Health, Sanitation & Nutrition',
    emoji: '💖',
    overview: 'Offline public health guides covering clean water sanitation (WASH), malaria prevention, balanced nutrition, immunology, and mental resilience.',
    curriculumSyllabus: [
      'Water purification: boiling, chlorination, SODIS solar disinfection, and biosand filters',
      'Vector control: eliminating mosquito breeding sites and proper use of bednets',
      'Balanced dietary pyramids: proteins, carbohydrates, vitamins, minerals, and dietary fiber',
      'Infectious disease transmission cycles and hand-hygiene barriers',
      'Mental well-being, grief processing, stress regulation, and community care'
    ],
    keyPrinciples: [
      'Prevention is vastly cheaper, safer, and more effective than treatment',
      'Community health is systemic: individual sanitation directly protects everyone',
      'Clean water and proper sanitation eliminate over 80% of preventable diarrheal illnesses'
    ],
    offlineLabExperimentOrChallenge: 'Handwashing Glow Test: Rub a tiny amount of cooking oil mixed with chalk dust on your hands. Try washing with water alone, then with soap for 20 seconds. Notice how surfactant soap breaks down lipid membranes and lifts dirt completely!',
    sampleProblems: [
      {
        problemNumber: 1,
        question: 'Calculate the daily water requirement for an active teenager weighing 50 kg if the standard guideline is 35 ml per kg of body weight, plus an additional 500 ml for sports.',
        stepByStepSolution: [
          'Step 1: Base requirement = 50 kg × 35 ml/kg = 1750 ml',
          'Step 2: Add activity allowance = 1750 ml + 500 ml = 2250 ml',
          'Step 3: Convert to liters = 2250 ml ÷ 1000 = 2.25 liters per day.'
        ],
        finalAnswer: '2.25 Liters per day',
        conceptualHint: 'Multiply body mass by daily ml index and add the exertion increment.'
      }
    ],
    printableWorksheet: {
      title: 'Community Sanitation & Health Inspection Sheet',
      instructions: 'Conduct a health survey of your domestic environment and outline preventative solutions.',
      exercises: [
        '1. Inspect your compound: list three potential stagnant water breeding sites for anopheles mosquitoes.',
        '2. Outline the 6-step WHO proper handwashing sequence.',
        '3. Formulate an Oral Rehydration Salts (ORS) solution recipe using clean water, sugar, and salt.'
      ],
      reflectionPrompts: [
        'How does clean water access transform educational outcomes for young girls in rural areas?',
        'What role does sleep and physical exercise play in adolescent cognitive brain development?'
      ]
    }
  }
};

/**
 * Helper to fetch local resource center content by ID or dynamically generate
 * a rich, structured offline laboratory module.
 */
export function getLocalResourceCenterContent(
  rcId: string,
  meta?: {
    id: string;
    name: string;
    subjectLabel: string;
    subjectEmoji: string;
    description: string;
    keyFeatures: string[];
    cambridgeAlignment?: string;
  }
): LocalResourceCenterContent {
  if (LOCAL_RESOURCE_CENTERS[rcId]) {
    return LOCAL_RESOURCE_CENTERS[rcId];
  }

  const name = meta?.name || 'Local Learning & Research Hub';
  const domain = meta?.subjectLabel || 'Cross-Disciplinary Inquiry';
  const emoji = meta?.subjectEmoji || '📚';
  const desc = meta?.description || 'A comprehensive offline learning hub providing structured curricula, interactive simulations, and printable worksheets.';
  const features = meta?.keyFeatures || ['Systematic mastery modules', 'Interactive problem solving', 'Offline printable resources'];
  const alignment = meta?.cambridgeAlignment || 'Universal International Standards';

  return {
    id: rcId,
    name: name,
    subjectDomain: domain,
    emoji: emoji,
    overview: `${desc} Aligned with ${alignment}. Fully downloadable and available 100% offline with zero external dependence.`,
    curriculumSyllabus: features.length > 0 ? features : [
      'Foundational terminology and core structural principles',
      'Systematic problem-solving methodologies and verification',
      'Real-world case studies and contextual analysis',
      'Advanced synthesis and hands-on community capstone projects'
    ],
    keyPrinciples: [
      'Inquiry-driven discovery: understanding fundamental causes before memorizing formulas',
      'Practical local application: connecting global principles to community realities',
      'Holistic integration: combining academic rigor with character and civic responsibility'
    ],
    offlineLabExperimentOrChallenge: `Hands-On Investigation Challenge: Choose an everyday problem related to ${domain} in your local community. Formulate a testable hypothesis, gather 3 pieces of tangible evidence, and outline a step-by-step practical action plan to solve it using local materials.`,
    sampleProblems: [
      {
        problemNumber: 1,
        question: `Define the primary conceptual principle underpinning ${name} and analyze its significance for independent learning.`,
        stepByStepSolution: [
          `Step 1: Identify the foundational domain: ${domain}`,
          `Step 2: Connect the core framework to real-world outcomes: ${desc}`,
          'Step 3: Analyze the methodology: Systematic study allows the learner to develop independent agency and critical discernment without relying on external internet connectivity.',
          'Step 4: Synthesize conclusions: Local mastery creates lasting personal capability and community resilience.'
        ],
        finalAnswer: `Mastery of ${domain} through systematic self-directed investigation and local practice.`,
        conceptualHint: 'Focus on independent inquiry, empirical observation, and practical community application.'
      }
    ],
    printableWorksheet: {
      title: `${name} - Comprehensive Offline Study & Exercise Sheet`,
      instructions: 'Complete these exercises in full sentences in your study notebook or print this worksheet for your records.',
      exercises: [
        `1. Summarize the three most important learning objectives of this ${domain} module.`,
        `2. Describe how a student can apply these concepts without requiring access to an active internet connection.`,
        `3. Explain the direct connection between this subject and ${alignment}.`
      ],
      reflectionPrompts: [
        `How does mastery of ${domain} empower you to solve challenges in your village, city, or household?`,
        'What is one project or experiment you can design today to demonstrate this principle to someone else?'
      ]
    }
  };
}
