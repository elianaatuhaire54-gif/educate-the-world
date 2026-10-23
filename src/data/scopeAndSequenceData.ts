/**
 * EDUCATE THE WORLD INITIATIVE
 * INTERNATIONAL CURRICULUM SCOPE & SEQUENCE v1.0
 * Ages 3–18+
 * Motto: LEARN. THINK. CREATE. SERVE. TRANSFORM.
 */

export interface ScopeStageOutcome {
  ageLabel: string;
  stageName: string; // DISCOVER, EXPLORE, UNDERSTAND, INVESTIGATE, CREATE, LAUNCH
  stageMotto: string; // "I DISCOVER", "I EXPLORE", "I UNDERSTAND", etc.
  focusAreas: string[];
  competencies: string[];
  capstoneProject: {
    title: string;
    description: string;
    deliverable: string;
  };
}

export interface ScopeDomain {
  id: string;
  number: number;
  title: string;
  icon: string;
  colorName: string;
  tagline: string;
  progressionNote?: string;
  stages: {
    '3-5': ScopeStageOutcome;
    '6-8': ScopeStageOutcome;
    '9-11': ScopeStageOutcome;
    '12-14': ScopeStageOutcome;
    '15-17': ScopeStageOutcome;
    '18+': ScopeStageOutcome;
  };
}

export interface CompetencyDimension {
  name: string;
  description: string;
  exampleProjectApplication: string;
}

export const COMPETENCY_MATRIX: CompetencyDimension[] = [
  { name: 'Communication', description: 'Present findings, articulate ideas clearly, and adapt to different audiences.', exampleProjectApplication: 'Present water filtration research to community elders' },
  { name: 'Critical Thinking', description: 'Analyze complex root causes, evaluate claims, and distinguish truth from rumor.', exampleProjectApplication: 'Analyze why certain water sources become contaminated' },
  { name: 'Problem Solving', description: 'Design practical, real-world solutions under resource constraints.', exampleProjectApplication: 'Design a low-cost, sand-charcoal water filter using jerrycans' },
  { name: 'Creativity', description: 'Develop original models, stories, artwork, and technical innovations.', exampleProjectApplication: 'Create an illustrative educational poster for village children' },
  { name: 'Collaboration', description: 'Work productively in diverse teams, resolving differences constructively.', exampleProjectApplication: 'Form a 3-student team dividing tasks between testing, building, and reporting' },
  { name: 'Research', description: 'Gather evidence, conduct structured inquiry, and verify sources.', exampleProjectApplication: 'Survey 10 households on daily water purification practices' },
  { name: 'Digital Literacy', description: 'Collect, compute, visualize data, and navigate online tools safely.', exampleProjectApplication: 'Plot household water usage and contamination rates in a spreadsheet' },
  { name: 'Numeracy', description: 'Calculate measurements, rates, proportions, and financial projections.', exampleProjectApplication: 'Calculate litres per day per family member and filtration flow rate' },
  { name: 'Self-Management', description: 'Organize time, maintain discipline, and follow through on long-term goals.', exampleProjectApplication: 'Manage a 14-day observation log without parental prompting' },
  { name: 'Leadership', description: 'Coordinate efforts, inspire others, and take responsibility for outcomes.', exampleProjectApplication: 'Lead a neighborhood cleanup of drainage trenches' },
  { name: 'Entrepreneurship', description: 'Identify economic opportunities, calculate margins, and create value.', exampleProjectApplication: 'Evaluate how a local kiosk could sell clean boiled water affordably' },
  { name: 'Civic Responsibility', description: 'Serve the community, protect creation, and address systemic inequality.', exampleProjectApplication: 'Advocate for clean water access at the local village council' },
];

export const MASTERY_LEVELS = [
  { level: 1, name: 'Exposure', quote: 'I have encountered it.', description: 'The learner observes, explores, and identifies the core phenomenon in their daily environment.' },
  { level: 2, name: 'Understanding', quote: 'I can explain it.', description: 'The learner can describe the underlying principles in their own words and regional dialect.' },
  { level: 3, name: 'Competence', quote: 'I can do it independently.', description: 'The learner can execute the process or solve standard problems without step-by-step assistance.' },
  { level: 4, name: 'Application', quote: 'I can use it in a new situation.', description: 'The learner transfers knowledge to novel household, community, or commercial challenges.' },
  { level: 5, name: 'Creation & Mastery', quote: 'I can create, teach or innovate using it.', description: 'The learner invents solutions, mentors younger peers, and transforms their community.' },
];

export const IDEAL_18_YEAR_OLD_GRADUATE = [
  { ability: 'Read', detail: 'Complex age-appropriate material critically across literature, science, and public policy.' },
  { ability: 'Write', detail: 'Clear, analytical, persuasive, and professional work adapted to any audience.' },
  { ability: 'Calculate', detail: 'Use mathematics, statistics, and financial modeling confidently for decision making.' },
  { ability: 'Investigate', detail: 'Conduct structured scientific and social research using rigorous methodology.' },
  { ability: 'Explain', detail: 'Communicate difficult ideas clearly in English and indigenous mother tongues.' },
  { ability: 'Build', detail: 'Create something practical with their own hands—functional objects, machines, or systems.' },
  { ability: 'Code', detail: 'Understand computational thinking, data structures, and basic programming.' },
  { ability: 'Analyze', detail: 'Evaluate evidence, recognize logical fallacies, and debunk misinformation.' },
  { ability: 'Manage', detail: 'Handle personal finances, budgets, assets, liabilities, and resources responsibly.' },
  { ability: 'Create', detail: 'Generate and develop original artistic, technical, and entrepreneurial ideas.' },
  { ability: 'Collaborate', detail: 'Work effectively with people of diverse backgrounds, ages, and perspectives.' },
  { ability: 'Lead', detail: 'Take initiative, accept responsibility, and inspire others through selfless character.' },
  { ability: 'Work', detail: 'Possess at least one meaningful practical, vocational, or technical capability.' },
  { ability: 'Solve', detail: 'Address a real-world community problem through structured problem-solving.' },
  { ability: 'Learn', detail: 'Autonomously teach themselves any new subject, skill, or discipline throughout life.' },
  { ability: 'Serve', detail: 'Understand that knowledge carries responsibility: transforming their nation and world.' },
];

export const EDUCATIONAL_EQUATION = {
  inputs: [
    'FOUNDATIONAL KNOWLEDGE',
    'CRITICAL THINKING',
    'PRACTICAL SKILLS',
    'DIGITAL CAPABILITY',
    'CHARACTER',
    'CREATIVITY',
    'ENTREPRENEURSHIP',
    'COLLABORATION',
    'RESEARCH',
    'SERVICE'
  ],
  output: 'HUMAN CAPABILITY',
  impactChain: [
    'Innovation',
    'Enterprise',
    'Employment',
    'Strong Communities',
    'National Development',
    'Global Transformation'
  ]
};

export const SCOPE_DOMAINS: ScopeDomain[] = [
  // 1. LANGUAGE & COMMUNICATION
  {
    id: 'language-communication',
    number: 1,
    title: 'Language & Communication',
    icon: 'BookOpen',
    colorName: 'amber',
    tagline: 'Oral tradition, reading fluency, persuasive rhetoric & global discourse',
    progressionNote: 'Listening & Stories → Reading & Grammar → Literature & Research → Argument & Debate → Professional Rhetoric → Field Leadership',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Listening', 'Speaking', 'Vocabulary', 'Storytelling', 'Rhymes', 'Sounds & Phonological Awareness', 'Letter Recognition', 'Pre-writing'],
        competencies: ['Communicate basic needs', 'Understand simple instructions', 'Tell simple stories', 'Recognize familiar letters & sounds', 'Participate in conversations', 'Listen attentively to stories'],
        capstoneProject: {
          title: 'Tell My Story',
          description: 'The child creates and dictates or illustrates a personal story about themselves, their home, or their family.',
          deliverable: 'Illustrated 4-page personal narrative booklet'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['Phonics', 'Reading Fluency', 'Comprehension', 'Spelling', 'Grammar', 'Sentence Construction', 'Vocabulary', 'Oral Communication'],
        competencies: ['Read age-appropriate texts fluently', 'Identify main idea & supporting details', 'Write complete sentences & paragraphs', 'Retell a narrative in sequence', 'Ask & answer clarifying questions', 'Communicate clearly'],
        capstoneProject: {
          title: 'My First Book',
          description: 'The child writes, illustrates, and binds their first original 8-page storybook featuring local community characters.',
          deliverable: 'Bound illustrated storybook shared with family & peers'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Advanced Comprehension', 'Paragraphs & Essays', 'Grammar & Syntax', 'Literature Interpretation', 'Research Methodology', 'Presentations', 'Creative Writing'],
        competencies: ['Summarize complex information', 'Distinguish fact from opinion & bias', 'Write structured 3-to-5 paragraph compositions', 'Deliver confident 3-minute oral presentations', 'Interpret themes in literature', 'Conduct simple library & community research'],
        capstoneProject: {
          title: 'Research and Publish a Short Book',
          description: 'Child researches a local hero, tradition, or biological marvel, writes chapters, and publishes a 12-page non-fiction book.',
          deliverable: 'Researched non-fiction booklet with bibliography and glossary'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Argumentative Writing', 'Persuasive Communication', 'Structured Debate', 'Research Methodology', 'Media Literacy', 'Source Evaluation', 'Formal Presentations'],
        competencies: ['Construct evidence-backed arguments', 'Evaluate primary and secondary evidence', 'Identify disinformation and fallacies', 'Write formal research reports', 'Debate respectfully with opposing viewpoints', 'Present complex ideas with slide visuals'],
        capstoneProject: {
          title: 'Investigate a Community Issue',
          description: 'Learner investigates a real challenge in their neighborhood (waste, road safety, school books) through interviews and writes an action report.',
          deliverable: '1,500-word investigative report with stakeholder interviews and recommendations'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Academic Writing', 'Professional Communication', 'Public Speaking & Oratory', 'Classical Rhetoric', 'Advanced Literature', 'Peer-Reviewed Research', 'Media Production'],
        competencies: ['Write rigorous analytical reports', 'Produce academic research papers with citations', 'Deliver professional keynote-level presentations', 'Communicate persuasively to civic & business leaders', 'Adapt tone dynamically across audiences'],
        capstoneProject: {
          title: 'Public Presentation / Research Conference',
          description: 'Learner presents an original thesis at a school, church, or community symposium and defends their conclusions in a Q&A session.',
          deliverable: 'Academic paper and delivered 15-minute symposium address'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Academic Publishing', 'Professional Business Writing', 'Technical Writing', 'Journalism & Media', 'Executive Speech', 'Grant & Proposal Writing'],
        competencies: ['Produce publishable research', 'Write successful funding proposals', 'Lead executive communication in enterprise', 'Influence public discourse responsibly'],
        capstoneProject: {
          title: 'Professional Capstone Portfolio',
          description: 'Publication or submission of professional work in chosen academic, commercial, or public interest field.',
          deliverable: 'Published article, whitepaper, business prospectus, or technical manual'
        }
      }
    }
  },

  // 2. MATHEMATICS & LOGICAL REASONING
  {
    id: 'math-reasoning',
    number: 2,
    title: 'Mathematics & Logical Reasoning',
    icon: 'Calculator',
    colorName: 'blue',
    tagline: 'From counting household beans to algebraic modeling & quantitative intuition',
    progressionNote: 'Concrete Counting → Operational Arithmetic → Proportional Reasoning → Algebraic Analysis → Calculus & Mathematical Modeling → Applied Quantitative Science',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Counting 1-20', 'Quantity & Magnitude', 'Comparison (more/less)', 'Shapes in Nature', 'Patterns & Sequences', 'Sorting Household Objects', 'Spatial Position & Size', 'Basic Measurement'],
        competencies: ['Count physical objects one-to-one', 'Identify squares, circles, triangles in environment', 'Extend simple repeating ABAB patterns', 'Sort objects by color, size, and texture', 'Compare heights and weights using balance'],
        capstoneProject: {
          title: 'Mathematics Around Me',
          description: 'Count household objects (spoons, maize seeds, steps), map shapes in the living area, and create a family pattern chart.',
          deliverable: 'Visual counting board with real seeds and leaf prints'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['Addition & Subtraction', 'Multiplication & Division Concepts', 'Fractions (halves, quarters)', 'Telling Time on Clocks', 'Money & Currency (UGX/Coins)', 'Standard & Non-standard Measurement', '2D/3D Geometry', 'Bar Graphs & Data'],
        competencies: ['Add and subtract two-digit numbers', 'Understand multiplication as equal groups', 'Split real objects into equal fraction pieces', 'Count coins and calculate simple change', 'Measure length and volume with cups and rulers'],
        capstoneProject: {
          title: 'Run a Pretend Shop',
          description: 'Child sets up a market stall with fruits or books, prices items in real currency, calculates customer bills, and gives accurate change.',
          deliverable: 'Shop ledger with 10 completed customer transactions and inventory balance'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Fractions, Decimals, Percentages', 'Ratios & Proportions', 'Area, Perimeter, Volume', 'Introductory Algebra (Variables)', 'Descriptive Statistics (Mean, Median, Mode)', 'Probability & Chance', 'Financial Mathematics (Budgets)'],
        competencies: ['Convert seamlessly between fractions, decimals, and %', 'Solve multi-step word problems', 'Scale recipe measurements up and down', 'Calculate family monthly consumption', 'Plot coordinates and interpret line graphs'],
        capstoneProject: {
          title: 'Family Budget Challenge',
          description: 'Child collaborates with parents to track a week of real household expenses, categorizes food vs utilities, and designs a 10% savings strategy.',
          deliverable: 'Real family budget spreadsheet with pie charts and recommendations'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Linear Equations & Inequalities', 'Functions & Graphing (y = mx + c)', 'Geometric Proofs & Angles', 'Inferential Statistics', 'Probability Trees & Sampling', 'Rates, Speed & Density', 'Compound Interest & Currency Exchange'],
        competencies: ['Solve systems of equations', 'Model real-world trends on Cartesian coordinate planes', 'Compute probabilities of complex events', 'Calculate compound interest on loans vs investments', 'Analyze statistical misrepresentations in news'],
        capstoneProject: {
          title: 'Analyze Real-World Data',
          description: 'Learner collects community demographic or price data over 3 months, formulates hypothesis, tests correlation, and plots trends.',
          deliverable: 'Comprehensive statistical report with charts, error analysis, and conclusions'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Advanced Algebra & Polynomials', 'Trigonometry & Vectors', 'Coordinate Geometry', 'Calculus Introduction (Limits, Derivatives)', 'Mathematical Modeling', 'Financial Quantitative Analysis', 'Matrix Algebra'],
        competencies: ['Formulate differential models of growth and decay', 'Optimize engineering and economic functions', 'Apply trigonometry to spatial and structural design', 'Design predictive algorithms for small enterprise'],
        capstoneProject: {
          title: 'Build a Mathematical Model',
          description: 'Create a mathematical model simulating a real system (crop harvest yield vs rainfall, disease spread, or solar battery storage).',
          deliverable: 'Validated mathematical model with simulation equations and predictive sensitivity'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Pure Mathematics', 'Applied Mathematics & Physics', 'Data Science & Machine Learning', 'Econometrics & Actuarial Science', 'Engineering Calculations'],
        competencies: ['Design complex stochastic and statistical architectures', 'Apply quantitative frameworks to industry and governance'],
        capstoneProject: {
          title: 'Quantitative Industry Solution',
          description: 'Solve an industry optimization, logistical routing, or economic forecasting problem.',
          deliverable: 'Algorithmic code, mathematical thesis, or actuarial valuation'
        }
      }
    }
  },

  // 3. SCIENCE
  {
    id: 'science-discovery',
    number: 3,
    title: 'Science & Empirical Inquiry',
    icon: 'FlaskConical',
    colorName: 'emerald',
    tagline: 'Observe → Explain → Experiment → Analyze → Research',
    progressionNote: 'Sensory Observation → Household Systems & Cycles → Cellular & Chemical Foundations → Rigorous Lab Experimentation → Scientific Specialization',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Plants & Germination', 'Animals & Habits', 'Weather & Clouds', 'Water States (Liquid, Ice, Steam)', 'Light & Shadows', 'Sound & Vibrations', 'The 5 Human Senses', 'Living vs Non-Living'],
        competencies: ['Observe changes carefully over days', 'Describe textures, smells, and colors', 'Ask curiosity-driven "Why" questions', 'Plant a seed in soil and document leaf emergence', 'Recognize animal body coverings'],
        capstoneProject: {
          title: 'The Seed & Shadow Journal',
          description: 'Plant a bean seed in a plastic cup, measure stem height every morning, and trace shadow length at 9am, 12pm, and 4pm.',
          deliverable: 'Illustrated 7-day observation poster with pressed leaves'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['Living Things & Habitats', 'Human Body Systems (Skeletal, Digestive)', 'Forces, Pushes & Pulls', 'Sound, Light & Heat Conduction', 'Soil Types & Water Absorption', 'States of Matter (Solids, Liquids, Gases)', 'Mixtures & Solutions'],
        competencies: ['Classify vertebrates and invertebrates', 'Explain why objects float or sink', 'Test which soils retain water best for crops', 'Describe how yeast produces carbon dioxide in bread', 'Construct simple circuits with batteries and bulbs'],
        capstoneProject: {
          title: 'Build a Simple Weather Station',
          description: 'Construct a rain gauge using a cut water bottle, a wind vane with cardboard and a needle, and record neighborhood daily weather.',
          deliverable: 'Working homemade weather station and 14-day weather log'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Cell Biology & Microorganisms', 'Ecosystems & Food Webs', 'Matter, Atoms & Periodic Table Intro', 'Physical vs Chemical Changes', 'Energy Forms & Conservation', 'Magnetism & Electromagnets', 'Earth Geology & Water Cycle'],
        competencies: ['Explain cellular respiration and photosynthesis', 'Differentiate elements, compounds, and mixtures', 'Construct an electromagnet with nail, wire, and battery', 'Demonstrate water filtration layers (gravel, sand, charcoal)', 'Explain the water cycle stages with boiling pot analogy'],
        capstoneProject: {
          title: 'Design a Water Filter',
          description: 'Design, build, and test a multi-layer gravity water filtration system using gravel, coarse sand, fine sand, and crushed charcoal.',
          deliverable: 'Functional physical water filter tested with turbid water and test report'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Cellular Genetics & DNA', 'Ecology & Nutrient Cycles', 'Atomic Structure & Chemical Bonding', 'Acids, Bases & pH Indicators', 'Newtonian Mechanics & Momentum', 'Wave Optics & Sound Frequency', 'Resource Management & Climate'],
        competencies: ['Use Punnett squares to predict inheritance traits', 'Balance chemical reaction equations', 'Test soil pH using red cabbage indicator solution', 'Calculate acceleration, force, and work done', 'Design a controlled experiment with independent/dependent variables'],
        capstoneProject: {
          title: 'Conduct a Controlled Experiment',
          description: 'Formulate a testable hypothesis (e.g. effect of organic compost vs chemical fertilizer on bean growth), run control vs test groups, and quantify variance.',
          deliverable: 'Complete scientific lab report with graphs, control analysis, and error boundaries'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Molecular Biology & Physiology', 'Biotechnology & Bioethics', 'Organic & Inorganic Chemistry', 'Electromagnetism & Thermodynamics', 'Modern Physics & Energy Systems', 'Environmental Engineering & Conservation'],
        competencies: ['Explain enzymatic kinetics and metabolic pathways', 'Synthesize organic compounds and analyze reaction yields', 'Apply thermodynamic laws to heat engines and solar panels', 'Conduct literature review of modern scientific journals'],
        capstoneProject: {
          title: 'Independent Scientific Research',
          description: 'Design and execute original empirical research addressing a local scientific or ecological question (e.g. water quality along a local tributary).',
          deliverable: 'Formal scientific research paper and lab notebook'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Applied Biomedical Science', 'Renewable Energy Systems', 'Agronomic Science', 'Chemical Engineering', 'Environmental Policy'],
        competencies: ['Conduct laboratory research compliant with international protocols', 'Publish scientific findings and patent novel formulations'],
        capstoneProject: {
          title: 'Applied Scientific Innovation',
          description: 'Deploy an engineered or scientific intervention in health, agriculture, or sanitation.',
          deliverable: 'Published trial, prototype device, or certified lab assay'
        }
      }
    }
  },

  // 4. TECHNOLOGY & DIGITAL INTELLIGENCE
  {
    id: 'technology-digital',
    number: 4,
    title: 'Technology & Digital Intelligence',
    icon: 'Cpu',
    colorName: 'indigo',
    tagline: 'Sequences → Patterns → Instructions → Algorithms → Solutions',
    progressionNote: 'Safe Discovery → Computational Logic & Algorithms → Digital Productivity & Web → App Engineering → Artificial Intelligence & Systems',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Technology Awareness in the Home', 'Safe Device Handling', 'Digital Creativity & Drawing', 'Human-Made vs Natural Tools', 'Screen Time Balance'],
        competencies: ['Identify phones, radios, lights, and appliances as tools made by people', 'Practice gentle handling and clean hands on screens', 'Express ideas through digital drawing tools', 'Recognize when it is time to put devices away for physical play'],
        capstoneProject: {
          title: 'Tools of My Home',
          description: 'Child catalogs 5 tools or devices in their home, explains what problem each solves, and draws their favorite invention.',
          deliverable: 'My Inventions Scrapbook with hand drawings'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['Computer Basics (Hardware/Software)', 'Keyboard & Mouse / Touch Mastery', 'Simple Algorithms (Step-by-step Recipes)', 'Pattern Recognition', 'Basic Online Safety', 'Digital Information Search'],
        competencies: ['Type letters and basic sentences on a keyboard', 'Decompose a daily chore into ordered sequential instructions', 'Identify secure passwords and avoid sharing private information', 'Create pixel art or simple block-based animations'],
        capstoneProject: {
          title: 'The Human Robot Game',
          description: 'Child writes a precise step-by-step algorithm on paper to guide a blindfolded parent through an obstacle course in the room.',
          deliverable: 'Algorithm instruction map and debugging log'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Word Processing & Documents', 'Spreadsheet Fundamentals & Formulas', 'Digital Presentations & Slides', 'Programming Logic (Loops, Conditionals)', 'Internet Literacy & Search Validation', 'Cybersecurity Awareness'],
        competencies: ['Format structured documents with headings and tables', 'Use spreadsheet formulas (SUM, AVERAGE, multiplication)', 'Code interactive stories using block coding or introductory scripts', 'Evaluate if a website is trustworthy', 'Protect personal accounts with strong passwords'],
        capstoneProject: {
          title: 'Create a Digital Presentation',
          description: 'Design and deliver a 5-slide multimedia digital presentation about an inspiring African innovation or community solution.',
          deliverable: 'Digital slide presentation with embedded charts and bibliography'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Text-Based Programming (TypeScript/Python/HTML/CSS)', 'Databases & Relational Tables', 'Web Architecture & Protocols', 'Digital Media Production (Audio/Video)', 'Cybersecurity & Encryption Basics', 'AI Fundamentals & Ethics'],
        competencies: ['Write working scripts with functions, arrays, and objects', 'Build responsive web pages with HTML and styled layouts', 'Query data using structured filters', 'Critically assess how AI models generate answers', 'Protect digital privacy and avoid phishing scams'],
        capstoneProject: {
          title: 'Build a Simple Application',
          description: 'Build a functional digital web or mobile app (e.g. household chore tracker, dialect flashcards, or community savings calculator).',
          deliverable: 'Working web application running in browser with clean code'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Software Engineering & Data Structures', 'Applied Machine Learning & Data Analytics', 'Electronics & Microcontrollers (Raspberry Pi/Arduino)', 'Robotics & Automation', 'Cloud Architecture & APIs', 'Digital Publishing & UI/UX Design'],
        competencies: ['Architect full-stack software applications', 'Train simple machine learning models for classification', 'Interface software code with physical sensors and motors', 'Conduct code audits for performance and security vulnerabilities'],
        capstoneProject: {
          title: 'Build a Technology Solution to a Real Problem',
          description: 'Engineer a complete digital or hardware solution for a local farm, clinic, school, or business (e.g. SMS crop price notifier or soil sensor).',
          deliverable: 'Deployed software system or hardware prototype with user documentation'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Enterprise Software Architecture', 'AI & Machine Learning Engineering', 'Cybersecurity Defense', 'Embedded Systems & Hardware', 'Tech Venture Creation'],
        competencies: ['Deploy resilient production systems at scale', 'Lead technical engineering teams in global industry'],
        capstoneProject: {
          title: 'Production Tech Venture Launch',
          description: 'Launch a commercially viable software product or open-source infrastructure project.',
          deliverable: 'Live commercial service, production repository, or tech enterprise'
        }
      }
    }
  },

  // 5. HUMANITY, SOCIETY & THE WORLD
  {
    id: 'humanity-society',
    number: 5,
    title: 'Humanity, Society & The World',
    icon: 'Globe',
    colorName: 'teal',
    tagline: 'History, geography, African civilizations, governance & world transformation',
    progressionNote: 'Family & Neighborhood → Local & National History → Ancient & African Civilizations → Geopolitics & Economics → Comparative Societal Philosophy',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['My Family & Relatives', 'Community Workers (Doctors, Farmers, Teachers, Drivers)', 'Cultures & Traditions', 'Cooperation & Sharing', 'Rules for Peaceful Living', 'Places in our Neighborhood'],
        competencies: ['Name family members and heritage origins', 'Identify occupations and describe how each helps the community', 'Express respect for elders and neighbours', 'Follow household and group rules for harmony'],
        capstoneProject: {
          title: 'Community Helpers Album',
          description: 'Interview 3 neighborhood workers (a shopkeeper, a farmer, a builder) and draw their contribution to our village or town.',
          deliverable: 'Community gratitude picture album'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['Family & Clan History', 'Local Town/Village Origins', 'Great African Leaders & Innovators', 'Chronology & Timelines', 'Maps, Compasses, Continents & Oceans', 'Civic Responsibility & Citizen Duties'],
        competencies: ['Draw a personal family tree covering 3 generations', 'Read simple maps and identify cardinal directions (N, S, E, W)', 'Locate Uganda, Africa, and continents on a globe', 'Explain why communities need laws and how citizens participate'],
        capstoneProject: {
          title: 'Map My Neighborhood',
          description: 'Draw a scaled, detailed pictorial map of the child’s village or town block, including water points, roads, elders’ homes, and markets.',
          deliverable: 'Illustrated neighborhood community map with legend'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Early Human Settlements', 'Great African Civilizations (Kush, Great Zimbabwe, Mali, Buganda, Axum)', 'World Exploration & Trade Routes', 'The Industrial Revolution & Inventions', 'Colonialism, Resistance & Independence', 'Physical & Human Geography', 'Democratic Citizenship & Rights'],
        competencies: ['Trace trade networks of salt, gold, and textiles across Africa', 'Analyze causes and heroes of independence movements', 'Explain how geographical landforms determine human settlements', 'Differentiate the executive, legislative, and judicial arms of government'],
        capstoneProject: {
          title: 'Great Civilizations Showcase',
          description: 'Create an exhibition display board on an African civilization (e.g. Mali Empire’s universities or Great Zimbabwe’s stone architecture).',
          deliverable: 'Physical or digital exhibition board with model artifacts'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Ancient & Medieval World History', 'Pan-African History & Liberation', 'Economics: Scarcity, Supply & Demand', 'Markets & Production Systems', 'Governance, Rule of Law & Human Rights', 'Urbanization & Resource Conflicts'],
        competencies: ['Analyze primary historical treaties and declarations', 'Explain how inflation, exchange rates, and tariffs affect daily prices', 'Debate how justice and rule of law protect vulnerable citizens', 'Evaluate demographic population shifts and urban migration'],
        capstoneProject: {
          title: 'Investigate a Local Economic Value Chain',
          description: 'Trace a local commodity (such as coffee, matooke, or cotton) from rural farmer to local market to international export.',
          deliverable: 'Value chain economic study with price markups and farmer equity analysis'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Comparative Political Systems', 'Macroeconomics & Monetary Policy', 'Globalization & International Relations', 'African Economic Integration (AfCFTA)', 'Political Philosophy & Ethics', 'Sociology & Cultural Evolution', 'Geopolitics & Energy'],
        competencies: ['Critique comparative economic development models (East Asia vs Latin America vs Africa)', 'Analyze international diplomacy and regional trade treaties', 'Defend ethical stances on wealth distribution and civil liberties', 'Draft public policy recommendations for municipal leaders'],
        capstoneProject: {
          title: 'Compare Two Societies',
          description: 'Research how two distinct societies in history approached the same major challenge (e.g. famine, technological disruption, or urbanization).',
          deliverable: 'Comprehensive 2,500-word comparative historical analysis paper'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Public Administration & Governance', 'International Law & Human Rights', 'Development Economics & Infrastructure', 'Civic Leadership & Diplomacy'],
        competencies: ['Advise public policy or lead civic non-governmental organizations', 'Formulate sustainable nation-building strategic frameworks'],
        capstoneProject: {
          title: 'Civic Policy Initiative',
          description: 'Draft and advocate for a local legislative or civic community improvement resolution.',
          deliverable: 'Policy memorandum submitted to civic authorities'
        }
      }
    }
  },

  // 6. FINANCIAL LITERACY & ENTERPRISE
  {
    id: 'financial-enterprise',
    number: 6,
    title: 'Financial Literacy & Enterprise',
    icon: 'TrendingUp',
    colorName: 'emerald',
    tagline: 'What is money? → Savings Jar → Mini Business → Business Plan → Student Enterprise',
    progressionNote: 'Sharing & Value → Saving & Delaying Gratification → Budgeting & Profit → Capital & Investment → Enterprise Launch & Wealth Creation',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Concept of Sharing', 'Possessions vs Shared Resources', 'Exchange & Trade', 'Making Simple Choices (Opportunity Cost)'],
        competencies: ['Understand that items cost work or exchange to acquire', 'Practice sharing toys and dividing food fairly', 'Make a deliberate choice between two desirable options'],
        capstoneProject: {
          title: 'The Great Trade Day',
          description: 'Children trade clean toys or drawings with peers, learning that fair trade requires both parties to agree on value.',
          deliverable: 'Trade journal with reflection on what makes things valuable'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['What is Money? (Fiat & Currency)', 'Earning through Productive Work', 'Needs vs Wants', 'Spending Wisely', 'Saving Discipline in Jars'],
        competencies: ['Distinguish absolute physical needs from optional desires', 'Count and organize banknotes and coins', 'Track coins saved toward a specific family goal', 'Complete simple household chores to understand work and compensation'],
        capstoneProject: {
          title: 'Create a Three-Jar Savings Bank',
          description: 'Label three clean tins: 1. SAVE (50%), 2. SPEND (40%), 3. GIVE (10%). Deposit small coins earned from chores over 30 days.',
          deliverable: 'Physical savings tins and 30-day savings ledger'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Budgeting (Income vs Expenses)', 'Calculating Real Profit (Revenue - Costs)', 'Banking & Savings Accounts', 'Introductory Business Operations', 'Pricing Products Fairly'],
        competencies: ['Calculate unit costs and selling prices', 'Explain why profit is necessary for a business to survive', 'Create a balanced 30-day personal cash flow budget', 'Demonstrate responsible handling of borrowed family funds'],
        capstoneProject: {
          title: 'Run a Mini Business (5,000 UGX Challenge)',
          description: 'Given 5,000 UGX starting capital, buy raw materials (e.g. lemons/sugar for lemonade, or groundnuts), sell, recover costs, and bank profit.',
          deliverable: 'Profit-and-Loss ledger showing capital return and net profit'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Business Models & Value Propositions', 'Fixed vs Variable Costs', 'Interest, Credit & Debt Traps', 'Compound Growth & Investment', 'Taxation & Civic Contribution', 'Ethical Entrepreneurship'],
        competencies: ['Construct a break-even analysis for a new venture', 'Calculate real interest rates on bank vs mobile money loans', 'Explain how businesses add value to raw agricultural materials', 'Identify predatory financial schemes and avoid pyramid scams'],
        capstoneProject: {
          title: 'Write a Business Plan',
          description: 'Write a comprehensive 5-page business plan for a community enterprise (bakery, poultry farm, bike repair, or digital printing).',
          deliverable: 'Complete business plan with marketing strategy and financial forecasts'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Financial Accounting & Statements (Balance Sheet, Cash Flow, P&L)', 'Assets vs Liabilities', 'Equity, Debt & Capital Raising', 'Market Research & Customer Discovery', 'Marketing & Sales Strategy', 'Risk Management & Diversification'],
        competencies: ['Audit and construct financial statements for a real entity', 'Differentiate productive income-producing assets from depreciating liabilities', 'Conduct target customer interviews to validate demand', 'Pitch an enterprise to potential investors or lenders'],
        capstoneProject: {
          title: 'Launch a Student Enterprise',
          description: 'Form a student team, raise seed micro-capital, develop a genuine product or service, sell to the public, and report audited financials.',
          deliverable: 'Operating business with audited financial report and investor dividends'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Wealth Creation & Portfolio Management', 'Corporate Governance & Legal Incorporation', 'Tax Optimization & Regulatory Compliance', 'Angel Investing & Venture Capital'],
        competencies: ['Manage enterprise finances and payroll', 'Invest across diversified asset classes for multi-generational impact'],
        capstoneProject: {
          title: 'Commercial Enterprise Incorporation',
          description: 'Legally register and operate a scalable enterprise contributing jobs and taxes to the national economy.',
          deliverable: 'Registered business entity with active customer revenue'
        }
      }
    }
  },

  // 7. HUMAN DEVELOPMENT & WELLBEING
  {
    id: 'wellbeing-character',
    number: 7,
    title: 'Human Development & Wellbeing',
    icon: 'Heart',
    colorName: 'rose',
    tagline: 'Self-awareness → Self-management → Relationships → Leadership → Service',
    progressionNote: 'Emotional Identification → Empathy & Habit Formation → Identity & Resilience → Emotional Regulation & Ethics → Selfless Servant Leadership',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Identifying Emotions (Happy, Sad, Angry, Afraid)', 'Daily Hygiene (Handwashing, Toothbrushing)', 'Physical Safety & Boundaries', 'Sharing & Taking Turns', 'Kindness to Living Things', 'Physical Movement & Balance'],
        competencies: ['Name their own feelings using words instead of tantrums', 'Wash hands properly with soap before meals and after latrine use', 'Recognize unsafe situations and seek a trusted parent immediately', 'Practice patience when waiting for their turn'],
        capstoneProject: {
          title: 'My Daily Health & Kindness Chart',
          description: 'Track daily toothbrushing, handwashing, and 1 intentional kind act done for a sibling or friend for 14 consecutive days.',
          deliverable: 'Completed 14-day illustrated sticker habits chart'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['Emotional Awareness & Calming Strategies', 'Building Friendships', 'Conflict Resolution (Apologizing & Forgiving)', 'Personal Responsibility for Belongings', 'Healthy Nutrition & Water Intake', 'Active Daily Exercise'],
        competencies: ['Use deep breathing or counting to calm frustration', 'Listen to a friend’s perspective during a disagreement', 'Offer a sincere apology and make amends when wrong', 'Pack their own school/learning bag neatly without reminder'],
        capstoneProject: {
          title: 'The Peacemaker’s Playbook',
          description: 'Create an illustrated book of 5 peaceful solutions to common playground or sibling arguments (taking turns, coin toss, kind words).',
          deliverable: 'Handmade Peacemaker Guidebook shared with peers'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Self-Identity & Moral Principles', 'Confidence & Overcoming Failure (Growth Mindset)', 'Resilience under Hardship', 'Teamwork & Active Listening', 'Sound Decision-Making', 'Physical Health & Sleep Hygiene', 'Standing Up for Others'],
        competencies: ['Articulate personal strengths and areas for growth', 'View mistakes as learning opportunities rather than defeat', 'Collaborate as a constructive team member in group projects', 'Refuse peer pressure to engage in harmful behaviors'],
        capstoneProject: {
          title: 'Resilience Autobiography',
          description: 'Interview an elder who overcame severe hardship, analyze what mindset helped them persevere, and write a reflection essay.',
          deliverable: 'Illustrated biographical essay on resilience'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Adolescent Biological & Emotional Changes', 'Emotional Regulation & Stress Management', 'Healthy Interpersonal Relationships', 'Personal Ethics & Moral Courage', 'Resisting Negative Peer Influence', 'Digital Citizenship & Screen Hygiene', 'Introductory Leadership Principles'],
        competencies: ['Understand puberty changes with dignity and confidence', 'Practice healthy stress relief strategies during exams', 'Demonstrate moral courage to speak truth when unpopular', 'Maintain respectful speech online and in messaging groups'],
        capstoneProject: {
          title: 'Peer Mentorship Project',
          description: 'Mentor a younger child (ages 6–8) once a week for 6 weeks in reading, hygiene, or a sport, documenting their progress.',
          deliverable: 'Mentorship reflection journal with mentee feedback'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Personal Values Hierarchy & Integrity', 'Servant Leadership Frameworks', 'Mental Wellbeing & Coping with Grief', 'Mature Relationship Dynamics', 'Responsible Long-Term Decision Making', 'Civic Responsibility & Social Justice', 'Vocational & Career Life Planning'],
        competencies: ['Articulate a written personal code of ethics', 'Lead a team to achieve a complex objective without coercion', 'Identify signs of mental distress in self and others and seek support', 'Plan a 5-year vocational and educational roadmap'],
        capstoneProject: {
          title: 'Community Leadership Initiative',
          description: 'Identify a systemic need in your community (elderly care, literacy, or environment), organize a youth team, and lead a service campaign.',
          deliverable: 'Campaign impact report with metrics and beneficiary testimonies'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Adult Character & Integrity', 'Work-Life Balance & Spiritual Depth', 'Mentorship of Emerging Generations', 'Lifelong Health & Vitality'],
        competencies: ['Maintain unwavering integrity in public and private life', 'Serve as an anchor of peace, wisdom, and strength in community'],
        capstoneProject: {
          title: 'Lifetime Service Manifesto',
          description: 'Publish personal philosophy of service and establish an ongoing community mentorship circle.',
          deliverable: 'Written personal manifesto and established community circle'
        }
      }
    }
  },

  // 8. CREATION, WORK & PRACTICAL SKILLS
  {
    id: 'practical-skills',
    number: 8,
    title: 'Creation, Work & Practical Skills',
    icon: 'Wrench',
    colorName: 'amber',
    tagline: 'Drawing → Simple Construction → Agriculture & Mechanics → Functional Objects → Industry Specialization',
    progressionNote: 'Household Care → Handcraft & Gardening → Carpentry, Sewing & Mechanics → Functional Engineering → Technical Industry Mastery',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Drawing & Finger Control', 'Building with Blocks & Stones', 'Planting Seeds in Soil', 'Sweeping & Tidying Play Area', 'Washing Cups & Fruit', 'Manipulating Clay & Natural Materials'],
        competencies: ['Hold pencils, scissors, and chalk safely', 'Construct stable towers and enclosures from sticks and stones', 'Water plants without flooding them', 'Tidy up materials neatly after activities'],
        capstoneProject: {
          title: 'My Clay Creation',
          description: 'Harvest clay from soil, shape it into a miniature cooking pot or domestic animal, dry it in the sun, and paint it.',
          deliverable: 'Hand-sculpted clay artifact'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['Kitchen Gardening (Shamba Basics)', 'Safe Cooking Basics (Peeling, Boiling, Seasoning)', 'Handcraft & Weaving (Mats, Ropes)', 'Accurate Measuring (Tape & Scale)', 'Simple Wooden/Bamboo Construction', 'Tool Care & Repair Awareness'],
        competencies: ['Prepare a small garden bed and plant spinach/sukuma wiki', 'Safely peel and boil sweet potatoes or matooke under supervision', 'Weave simple ropes from banana fibers or sisal', 'Use a hammer, pliers, and tape measure safely'],
        capstoneProject: {
          title: 'Grow My Own Vegetable Patch',
          description: 'Clear a 1m x 1m patch of soil, enrich with compost, plant seeds, care for seedlings, and harvest real food for the family meal.',
          deliverable: 'Harvest basket of fresh vegetables fed to family'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Sustainable Agriculture & Composting', 'Basic Woodworking & Joinery', 'Introductory Electronics (Circuits, Soldering Basics)', 'Meal Preparation & Nutritional Balancing', 'Sewing & Fabric Mending', 'Bicycle Mechanics & Maintenance', 'Design Thinking Process'],
        competencies: ['Build a 3-layer organic composting pit', 'Measure, saw, and join pieces of timber squarely', 'Mend torn clothes and sew buttons securely', 'Repair a bicycle puncture and oil chains correctly', 'Follow the iterative design cycle: Empathize → Define → Ideate → Prototype → Test'],
        capstoneProject: {
          title: 'Make Something Useful',
          description: 'Identify an inconvenience in the home (shoes on floor, books unorganized, door slamming) and design and build a wooden or bamboo organizer.',
          deliverable: 'Functional wooden/bamboo household utility object'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Mechanical Engineering Principles (Gears, Pulleys, Levers)', 'Electrical Wiring & Solar PV Maintenance', 'Intermediate Carpentry & Furniture Construction', 'Modern Poultry & Livestock Husbandry', 'Appliance Diagnosis & Repair', 'Technical Architectural Sketching'],
        competencies: ['Diagnose why a solar lighting circuit or radio has failed', 'Calculate mechanical advantage in pulley and lever systems', 'Construct a sturdy study desk, stool, or chicken coop', 'Maintain and sanitize animal coops to prevent disease outbreaks'],
        capstoneProject: {
          title: 'Build a Functional Object / Machine',
          description: 'Construct a working mechanical or electrical device (e.g. foot-operated handwasher, solar phone charger, or manual grain thresher).',
          deliverable: 'Tested working machine with engineering drawings and bills of materials'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Automotive & Internal Combustion Engines', 'Residential Electrical Installation', 'Advanced Agronomy & Drip Irrigation', 'Metal Fabrication & Welding', 'Construction, Masonry & Plumbing', 'Renewable Energy Systems (Biogas/Solar)'],
        competencies: ['Perform full engine maintenance (oil, spark plugs, filters)', 'Wire a dual-switch domestic lighting circuit meeting electrical code', 'Install a gravity drip-irrigation system for vegetable farms', 'Weld and fabricate structural steel frames safely'],
        capstoneProject: {
          title: 'Industry-Linked Practical Project',
          description: 'Partner with a local workshop, garage, or farm to execute a significant technical installation or overhaul.',
          deliverable: 'Certified completed installation with master artisan sign-off'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Master Craftsman Licensure', 'Industrial Automation', 'Civil Construction Contracting', 'Commercial Agribusiness Management'],
        competencies: ['Execute complex structural engineering contracts', 'Train apprentices in precision technical trades'],
        capstoneProject: {
          title: 'Commercial Infrastructure Installation',
          description: 'Complete a commercial building, solar microgrid, or production plant overhaul.',
          deliverable: 'Commissioned industrial facility or commercial infrastructure'
        }
      }
    }
  },

  // 9. ARTS, CULTURE & EXPRESSION
  {
    id: 'arts-culture',
    number: 9,
    title: 'Arts, Culture & Expression',
    icon: 'Sparkles',
    colorName: 'purple',
    tagline: 'Visual art, traditional & modern music, drama, dance & cultural mastery',
    progressionNote: 'Sensory Rhythm & Drawing → Technique & Cultural Performance → Composition & Drama → Advanced Production → Cultural Legacy',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Music & Clapping Rhythms', 'Singing Mother Tongue Nursery Rhymes', 'Color Mixing with Natural Pigments', 'Dramatic Pretend Play', 'Body Dance & Expressive Movement'],
        competencies: ['Clap and drum to a steady beat', 'Sing traditional and contemporary songs from memory', 'Express different emotions through facial and body movement', 'Create drawings using charcoal, clay, and plant dyes'],
        capstoneProject: {
          title: 'The Great Family Concert',
          description: 'Child performs 2 memorized songs with homemade percussion instruments for the family gathering.',
          deliverable: 'Recorded audio/video performance or family performance certificate'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE',
        focusAreas: ['Visual Arts (Perspective, Shading, Texture)', 'Traditional Percussion & Drumming Beats', 'Folklore Drama & Script Reenactment', 'Creative Poetry & Songwriting', 'Traditional African Folk Dances'],
        competencies: ['Draw realistic sketches with light and shadow', 'Play complex polyrhythmic beats on drums or shakers', 'Act out roles in folktales with clear vocal expression', 'Memorize and recite original and cultural poems with expression'],
        capstoneProject: {
          title: 'Original Folk Play Performance',
          description: 'Write a short 3-minute script based on an African proverb, create cardboard masks, and perform with friends.',
          deliverable: 'Illustrated script and live performance for neighborhood peers'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND',
        focusAreas: ['Advanced Drawing & Painting Techniques', 'Music Theory (Notes, Scales, Pitch)', 'Scriptwriting & Theatrical Staging', 'Cultural Textile Design (Batik, Beadwork)', 'Choral Harmony & Instrumental Practice'],
        competencies: ['Read and write basic musical notation', 'Play a musical instrument (recorder, thumb piano/kalimba, keyboard, drum)', 'Design patterned textiles with traditional African motifs', 'Direct a 5-minute dramatic scene with lighting and sound cues'],
        capstoneProject: {
          title: 'Cultural Heritage Art Exhibition',
          description: 'Create a collection of 3 original artworks celebrating local cultural heroes, proverbs, or wildlife, using mixed media.',
          deliverable: 'Framed 3-piece art collection and artist statement'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE',
        focusAreas: ['Digital Audio Recording & Mixing', 'Cinematography & Video Editing', 'Advanced Literary Fiction & Scriptwriting', 'Graphic Design & Typography', 'Cultural Anthropology & Musicology'],
        competencies: ['Produce clean recorded audio tracks with voice and instruments', 'Edit short films or educational documentaries with pacing and titles', 'Analyze how art reflects and challenges historical oppression', 'Design professional flyers, book covers, and visual identities'],
        capstoneProject: {
          title: 'Short Documentary / Audio Podcast',
          description: 'Produce a 5-minute mini-documentary or audio podcast capturing an elder’s life wisdom or an unseen community craft.',
          deliverable: 'Finished edited media file with promotional poster'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE',
        focusAreas: ['Specialized Visual Fine Arts', 'Music Composition & Performance', 'Feature Filmmaking & Screenwriting', 'Architectural & Industrial Design', 'Theatre Direction & Stage Management'],
        competencies: ['Compose original musical scores or produce commercial tracks', 'Direct full-length theatrical productions or produce festival films', 'Exhibit art in professional public galleries or publish novellas'],
        capstoneProject: {
          title: 'Solo Exhibition / Album / Novel Release',
          description: 'Produce and publicly release a significant body of creative work (a musical EP, art solo exhibition, or poetry anthology).',
          deliverable: 'Public creative body of work with audience review'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE',
        focusAreas: ['Professional Arts Practice', 'Creative Industry Enterprise', 'Cultural Preservation Archiving', 'Global Creative Syndication'],
        competencies: ['Lead creative enterprises generating international cultural impact', 'Preserve indigenous heritage through modern media formats'],
        capstoneProject: {
          title: 'Major Cultural Production',
          description: 'Produce and tour a major artistic production or publish an internationally recognized creative title.',
          deliverable: 'Commercial creative production and critical review'
        }
      }
    }
  },

  // 10. THE INTEGRATION MODEL (FOOD, WATER, ENERGY, HEALTH)
  {
    id: 'integration-capstones',
    number: 10,
    title: 'The Integration Model & Annual Capstone',
    icon: 'Layers',
    colorName: 'teal',
    tagline: 'Subjects do not exist in silos: Biology + Chemistry + Math + Economics + Ethics = Real Solutions',
    progressionNote: 'Observe & Build (Ages 6-8) → Investigate & Explain (Ages 9-11) → Research & Design (Ages 12-14) → Create & Solve (Ages 15-17) → Implement & Evaluate (18+)',
    stages: {
      '3-5': {
        ageLabel: 'Ages 3–5',
        stageName: 'DISCOVER',
        stageMotto: 'I DISCOVER',
        focusAreas: ['Integrated Curiosity: Where does our food come from?', 'Water connects plants, animals, and humans', 'Sun gives warmth, light, and life', 'Counting meals, seeds, and steps'],
        competencies: ['Trace a meal back to soil, rain, and farmer work', 'Recognize that water must be conserved and kept clean'],
        capstoneProject: {
          title: 'The Living Garden Story',
          description: 'Combine drawing, counting seeds, singing a gardening song, and sharing harvested beans with family.',
          deliverable: 'Multi-subject discovery journal'
        }
      },
      '6-8': {
        ageLabel: 'Ages 6–8',
        stageName: 'EXPLORE',
        stageMotto: 'I EXPLORE (Observe & Build)',
        focusAreas: ['Food Systems: How plants grow + nutrient chemistry + market math + transport geography + gratitude ethics', 'Water Cycle & Household Safety'],
        competencies: ['Connect biology (photosynthesis) with economic markets (selling at stalls)', 'Calculate production costs and nutritional balance for family meals'],
        capstoneProject: {
          title: 'The Complete Food & Farm Journey',
          description: 'Grow vegetables, calculate cost of seeds vs yield, prepare a healthy balanced family meal, and write an illustrated recipe book.',
          deliverable: 'Family meal prepared and illustrated farm-to-table portfolio'
        }
      },
      '9-11': {
        ageLabel: 'Ages 9–11',
        stageName: 'UNDERSTAND',
        stageMotto: 'I UNDERSTAND (Investigate & Explain)',
        focusAreas: ['Clean Water & Community Sanitation Project', 'Physics of water flow + Microbiology of germs + Math of consumption + Civics of access + Engineering of filtration'],
        competencies: ['Synthesize 5 distinct subject areas into a single unified investigation', 'Present findings verbally, numerically, and physically'],
        capstoneProject: {
          title: 'The Community Water & Sanitation Master Project',
          description: 'Survey 10 village water sources, test turbidity and boiling practices, calculate liters needed per household, build a filtration prototype, and present to village elders.',
          deliverable: 'Comprehensive 12-page integrated research dossier and working filter'
        }
      },
      '12-14': {
        ageLabel: 'Ages 12–14',
        stageName: 'INVESTIGATE',
        stageMotto: 'I INVESTIGATE (Research & Design)',
        focusAreas: ['Sustainable Energy & Community Power', 'Physics of solar/biogas + Chemistry of battery storage + Math of load sizing + Economics of grid parity + Policy of rural electrification'],
        competencies: ['Conduct multi-variable trade-off analyses', 'Design end-to-end engineered systems solving energy poverty'],
        capstoneProject: {
          title: 'The Renewable Energy & Lighting Solution',
          description: 'Design and install a small solar PV or biogas system for a home or study area with batteries, calculating watt-hours, costs, and carbon offset.',
          deliverable: 'Working renewable installation, electrical schematics, and economic payback report'
        }
      },
      '15-17': {
        ageLabel: 'Ages 15–17',
        stageName: 'CREATE',
        stageMotto: 'I CREATE (Create & Solve)',
        focusAreas: ['The Holistic Community Transformation Capstone', 'Agronomy + Tech + Enterprise + Ethics + Governance + Communication = Transformative Impact'],
        competencies: ['Lead an interdisciplinary team from root problem discovery to sustainable implementation and exit strategy', 'Measure quantitative metrics of community transformation'],
        capstoneProject: {
          title: 'The Community Transformation Enterprise',
          description: 'Launch a self-sustaining initiative addressing food security, health sanitation, or youth digital employment in your district.',
          deliverable: 'Operational venture with verified social impact metrics and external audit'
        }
      },
      '18+': {
        ageLabel: 'Ages 18+',
        stageName: 'LAUNCH',
        stageMotto: 'I CONTRIBUTE (Implement & Evaluate)',
        focusAreas: ['National Development Architecture', 'Global Knowledge Translation', 'Multi-Sector Systemic Innovation'],
        competencies: ['Scale systemic innovations across regional boundaries with measurable socioeconomic uplift'],
        capstoneProject: {
          title: 'Regional Development Implementation',
          description: 'Execute and evaluate a multi-year development or enterprise program impacting thousands of lives.',
          deliverable: 'Published evaluation study and sustainable ongoing institution'
        }
      }
    }
  }
];
