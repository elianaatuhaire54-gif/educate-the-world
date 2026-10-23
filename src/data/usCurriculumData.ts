/**
 * EDUCATE THE WORLD INITIATIVE
 * UNITED STATES OF AMERICA EDUCATION SYSTEM (K–12, STANDARDS & ASSESSMENTS)
 * 
 * Comprehensive alignment with:
 * 1. US K–12 Grade Progression: Pre-K/Kindergarten, Elementary (Grades 1–5),
 *    Middle School (Grades 6–8), High School (Grades 9–12 / Freshman–Senior).
 * 2. National Standards:
 *    - Common Core State Standards for Mathematics (CCSS.MATH)
 *    - Common Core State Standards for English Language Arts (CCSS.ELA)
 *    - Next Generation Science Standards (NGSS)
 *    - C3 Framework for Social Studies (Civics, Economics, History, Geography)
 *    - National Standards for Financial Literacy (CEE / Jump$tart)
 *    - CSTA K–12 Computer Science Standards
 * 3. US High School Graduation Carnegie Credits (20–24 standard credits)
 * 4. College Board Advanced Placement (AP) & SAT/ACT College Readiness
 * 5. Full US <-> Cambridge <-> UK <-> IB Universal Crosswalk
 * 6. Authentic US Practice Tests, Standardized Worksheets & DBQ Items
 */

import { AgeBand, SubjectCategory, UsCurriculumAlignment } from '../types/curriculum';

export interface UsEducationTier {
  id: string;
  name: string;
  grades: string;
  typicalAges: string;
  etwAgeBand: AgeBand;
  overview: string;
  keyStandardsFrameworks: string[];
  coreSubjects: {
    subject: string;
    description: string;
    keyStandards: string[];
  }[];
  standardizedAssessments: string;
  highSchoolCreditFocus?: string;
  etwPhilosophyConnection: string;
}

export interface UsGradeLevelCrosswalk {
  usGrade: string;
  typicalAge: string;
  etwAgeBand: AgeBand;
  cambridgePathway: string;
  ukKeyStage: string;
  ibProgramme: string;
  usBenchmarkAssessment: string;
  keyMilestone: string;
}

export interface UsPracticeResourceItem {
  id: string;
  title: string;
  gradeLevel: string;
  standardsFramework: string;
  standardCode: string;
  subject: string;
  resourceType: 'Standardized Test Paper' | 'Worksheet & Activity' | 'Performance Task / DBQ' | 'AP / SAT Practice Exam';
  estimatedMinutes: number;
  totalPoints: number;
  overview: string;
  instructions: string[];
  questions: {
    number: number;
    question: string;
    contextPassage?: string;
    options?: string[];
    correctAnswer: string;
    points: number;
    standardTested: string;
    answerExplanation: string;
    teacherTip: string;
  }[];
}

export const US_EDUCATION_TIERS: UsEducationTier[] = [
  {
    id: 'us-prek-kindergarten',
    name: 'Early Childhood Education: Pre-K & Kindergarten',
    grades: 'Pre-K & Kindergarten (Grade K)',
    typicalAges: 'Ages 3–5',
    etwAgeBand: '3-5',
    overview: 'Fosters foundational language acquisition, phonemic awareness, number sense (counting 1–20, decomposing numbers), sensory inquiry, and social-emotional learning (SEL). Prepares young children for formal grade school.',
    keyStandardsFrameworks: ['CCSS.ELA-LITERACY (Kindergarten)', 'CCSS.MATH (Counting & Cardinality, Geometry)', 'Head Start Early Learning Outcomes Framework (ELOF)', 'CASEL SEL Framework'],
    coreSubjects: [
      {
        subject: 'English Language Arts & Reading',
        description: 'Print concepts, rhyming words, letter sounds, high-frequency sight words, and verbal story retelling.',
        keyStandards: ['CCSS.ELA-LITERACY.RF.K.1 (Print Concepts)', 'CCSS.ELA-LITERACY.RF.K.2 (Phonological Awareness)', 'CCSS.ELA-LITERACY.RL.K.2 (Retell Stories with Detail)']
      },
      {
        subject: 'Mathematics & Number Sense',
        description: 'Counting to 100 by ones and tens, comparing numbers, addition and subtraction within 10 using physical objects, and identifying 2D/3D shapes.',
        keyStandards: ['CCSS.MATH.CONTENT.K.CC.A.1 (Count to 100)', 'CCSS.MATH.CONTENT.K.OA.A.1 (Represent Addition/Subtraction)', 'CCSS.MATH.CONTENT.K.G.A.2 (Name Shapes)']
      },
      {
        subject: 'Science & Discovery (NGSS K)',
        description: 'Observations of weather patterns, plant and animal needs for survival, pushing and pulling forces.',
        keyStandards: ['NGSS K-PS2-1 (Pushes and Pulls)', 'NGSS K-LS1-1 (Needs of Living Things)', 'NGSS K-ESS2-1 (Weather Patterns)']
      },
      {
        subject: 'Social & Emotional Development',
        description: 'Kindness, taking turns, expressing emotions safely, respecting classmates, and community helpers.',
        keyStandards: ['CASEL Self-Management', 'CASEL Relationship Skills', 'C3 Framework Kindergarten Civics']
      }
    ],
    standardizedAssessments: 'State Kindergarten Entry Assessments (KEA), DIBELS / Acadience Reading phonics screenings.',
    etwPhilosophyConnection: 'Matches Educate the World "I DISCOVER": uses household materials, shamba seeds, and daily conversations to achieve kindergarten standards with zero paid subscriptions.'
  },
  {
    id: 'us-elementary',
    name: 'Elementary School: Grades 1–5',
    grades: '1st Grade through 5th Grade',
    typicalAges: 'Ages 6–10 (Primary)',
    etwAgeBand: '6-8',
    overview: 'Builds fluent reading comprehension across informational and literary texts, mastery of arithmetic operations including multi-digit computation and fractions, scientific inquiry through hands-on investigations, and early American history.',
    keyStandardsFrameworks: ['Common Core Math (Operations & Algebraic Thinking, Fractions)', 'Common Core ELA (Foundational Skills, Writing, Informational Text)', 'Next Generation Science Standards (NGSS Elementary)', 'C3 Social Studies Framework'],
    coreSubjects: [
      {
        subject: 'English Language Arts (ELA)',
        description: 'Reading chapter books, decoding multisyllabic words, opinion and narrative essay writing, text-based evidence citation.',
        keyStandards: ['CCSS.ELA-LITERACY.RI.3.1 (Ask and Answer Text Questions)', 'CCSS.ELA-LITERACY.W.4.1 (Write Opinion Pieces)', 'CCSS.ELA-LITERACY.L.5.1 (Grammar Conventions)']
      },
      {
        subject: 'Mathematics (CCSS.MATH)',
        description: 'Place value to millions, multiplication and division fact fluency, fractions (equivalents, addition, multiplication), area and perimeter, coordinate graphing.',
        keyStandards: ['CCSS.MATH.CONTENT.3.OA.A.3 (Multiplication/Division Word Problems)', 'CCSS.MATH.CONTENT.3.NF.A.1 (Fractions as Numbers)', 'CCSS.MATH.CONTENT.5.NBT.B.5 (Multi-digit Multiplication)']
      },
      {
        subject: 'Science & Engineering (NGSS)',
        description: 'States of matter, water cycle, ecosystems and food webs, forces and magnets, Earth systems and human impact.',
        keyStandards: ['NGSS 2-PS1-1 (Matter Properties)', 'NGSS 5-PS1-2 (Conservation of Matter)', 'NGSS 5-ESS2-2 (Earth Water Distribution)']
      },
      {
        subject: 'Social Studies & Geography',
        description: 'Local government, Native American cultures, early American colonies, geography and map reading, basic economics (supply, demand, money).',
        keyStandards: ['C3 D2.Civ.2 (Civic Participation)', 'C3 D2.Eco.1 (Scarcity and Choice)', 'C3 D2.Geo.2 (Human-Environment Interaction)']
      }
    ],
    standardizedAssessments: 'Annual State Testing in Grades 3–5 (Smarter Balanced Assessment Consortium / SBAC, PARCC, STAAR, NYSTP, MCAS); NAEP Grade 4.',
    etwPhilosophyConnection: 'Matches Educate the World "I BUILD" & "I EXPLORE": transforms kitchen fractions, rain cycle catching, and 5,000 UGX mini-enterprises into high-performing Common Core competencies.'
  },
  {
    id: 'us-middle-school',
    name: 'Middle School / Junior High: Grades 6–8',
    grades: '6th Grade, 7th Grade, 8th Grade',
    typicalAges: 'Ages 11–14',
    etwAgeBand: '13-16',
    overview: 'Prepares students for high school academic rigor. Features departmentalized coursework in Pre-Algebra & Algebra I, Earth & Physical Sciences, World Cultures & US Civics, and structured persuasive essays.',
    keyStandardsFrameworks: ['Common Core Math (Ratios, Expressions & Equations, The Number System, Functions)', 'Common Core ELA (Informational Text Analysis, Argument Writing)', 'NGSS Middle School (MS-PS, MS-LS, MS-ESS, MS-ETS)', 'C3 Civics & US History Standards'],
    coreSubjects: [
      {
        subject: 'Mathematics: Ratios, Pre-Algebra & Algebra I',
        description: 'Ratios and unit rates, negative numbers and absolute value, linear equations with one and two variables, linear functions, Pythagorean Theorem.',
        keyStandards: ['CCSS.MATH.CONTENT.6.RP.A.3 (Ratio Reasoning)', 'CCSS.MATH.CONTENT.7.EE.B.4 (Solve Linear Equations)', 'CCSS.MATH.CONTENT.8.EE.C.7 (Solve Multi-step Linear Equations)']
      },
      {
        subject: 'English Language Arts & Literature',
        description: 'Analyzing central ideas, author’s point of view, evaluating argument claims and evidence, writing structured multi-paragraph research papers.',
        keyStandards: ['CCSS.ELA-LITERACY.RI.7.1 (Cite Textual Evidence)', 'CCSS.ELA-LITERACY.W.8.1 (Write Arguments with Supporting Claims)', 'CCSS.ELA-LITERACY.RL.8.2 (Determine Theme/Central Idea)']
      },
      {
        subject: 'Science (NGSS Middle School)',
        description: 'Cellular biology and heredity, chemical reactions and conservation of atoms, energy and forces (Newton’s Laws), climate systems and human sustainability.',
        keyStandards: ['NGSS MS-PS1-2 (Chemical Reactions)', 'NGSS MS-PS2-2 (Newton’s Laws of Motion)', 'NGSS MS-LS1-2 (Cell Functions)', 'NGSS MS-ESS3-3 (Human Environmental Impact)']
      },
      {
        subject: 'Social Studies & Civics',
        description: 'US Constitution, Bill of Rights, branches of government, world geography and civilizations, civil rights history.',
        keyStandards: ['C3 D2.Civ.4 (Constitutional Principles)', 'C3 D2.His.1 (Historical Chronology and Causation)', 'C3 D2.Eco.3 (Market Equilibrium)']
      }
    ],
    standardizedAssessments: 'State Annual Exams Grades 6–8 (SBAC / STAAR / PARCC); NAEP Grade 8 Reading & Math; PSAT 8/9.',
    etwPhilosophyConnection: 'Matches Educate the World "I INVESTIGATE": students build physical water filtration columns, evaluate conflicting media rumors with source analysis, and code computational algorithms.'
  },
  {
    id: 'us-high-school',
    name: 'High School: Grades 9–12 (Freshman to Senior)',
    grades: 'Grades 9, 10, 11, 12',
    typicalAges: 'Ages 14–18+',
    etwAgeBand: '17+',
    overview: 'Comprehensive secondary education culminating in a US High School Diploma. Governed by Carnegie Credit units, College Board Advanced Placement (AP) honors coursework, and SAT/ACT college entrance examinations.',
    keyStandardsFrameworks: ['Common Core High School Math (Algebra I, Geometry, Algebra II, Pre-Calculus)', 'Common Core High School ELA (Grades 9–10 & 11–12 Band)', 'NGSS High School (HS-PS, HS-LS, HS-ESS)', 'College Board AP Course & Exam Descriptions (CED)'],
    coreSubjects: [
      {
        subject: 'English Language Arts (4 Carnegie Credits Required)',
        description: 'American Literature, British & World Literature, AP English Language & Composition, rhetoric, research papers with MLA/APA citations.',
        keyStandards: ['CCSS.ELA-LITERACY.RL.11-12.1 (Deep Textual Analysis)', 'CCSS.ELA-LITERACY.W.11-12.2 (Informative/Explanatory Synthesis)', 'AP English Lang Rhetorical Analysis']
      },
      {
        subject: 'Mathematics (3–4 Carnegie Credits Required)',
        description: 'Algebra I, Euclidean Geometry, Algebra II / Trigonometry, Pre-Calculus, AP Calculus AB/BC, AP Statistics.',
        keyStandards: ['CCSS.MATH.CONTENT.HSA.REI.B.4 (Solve Quadratic Equations)', 'CCSS.MATH.CONTENT.HSF.IF.B.4 (Interpret Function Graphs)', 'AP Calculus Derivations and Integrals']
      },
      {
        subject: 'Laboratory Sciences (3 Carnegie Credits Required)',
        description: 'Biology with lab, Chemistry with lab, Physics with lab, AP Environmental Science, AP Biology, Anatomy.',
        keyStandards: ['NGSS HS-LS1-1 (DNA and Protein Synthesis)', 'NGSS HS-PS1-7 (Conservation of Matter in Reactions)', 'NGSS HS-PS3-1 (Energy Conservation in Systems)']
      },
      {
        subject: 'Social Studies & Government (3 Carnegie Credits Required)',
        description: 'World History, US History (including AP US History / APUSH), US Government & Politics (Civics), Economics (Micro & Macro).',
        keyStandards: ['C3 D2.Civ.1 (Distinguishing Civic Roles)', 'C3 D2.His.14 (Critiquing Historical Interpretations)', 'National Financial Literacy Standard VI (Managing Credit and Debt)']
      },
      {
        subject: 'Career & Technical Education (CTE) & Electives (5–7 Credits)',
        description: 'Computer Science (AP Computer Science Principles / Java), Business Entrepreneurship, Agriculture, Digital Media.',
        keyStandards: ['CSTA 3A-AP-13 (Create Modular Code)', 'National Business Education Standards (Management, Accounting, Marketing)']
      }
    ],
    standardizedAssessments: 'PSAT/NMSQT, SAT Reasoning Test (Reading/Writing 800 + Math 800), ACT (Composite 1–36), College Board AP Exams (Scores 1–5), State High School Exit / End-of-Course (EOC) Exams.',
    highSchoolCreditFocus: 'Standard US High School Diploma requires 20–24 Carnegie Credits (English 4, Math 3-4, Science 3, Social Studies 3, PE/Health 1-2, Electives 6-7) + Cumulative GPA on 4.0 Scale.',
    etwPhilosophyConnection: 'Matches Educate the World "I LAUNCH / CONTRIBUTE": transforms adult financial literacy (assets vs liabilities, compound growth), enterprise plans, and community engineering into verifiable high school graduation portfolio credits.'
  }
];

export const US_GRADE_LEVEL_CROSSWALK: UsGradeLevelCrosswalk[] = [
  {
    usGrade: 'Pre-Kindergarten (Pre-K)',
    typicalAge: 'Age 3–4',
    etwAgeBand: '3-5',
    cambridgePathway: 'Cambridge Early Years 1–2',
    ukKeyStage: 'EYFS (Nursery)',
    ibProgramme: 'IB PYP (Early Years 3–4)',
    usBenchmarkAssessment: 'Early Literacy & Numeracy Observation',
    keyMilestone: 'Phonological awareness, counting 1–10, sharing and self-regulation'
  },
  {
    usGrade: 'Kindergarten (Grade K)',
    typicalAge: 'Age 5',
    etwAgeBand: '3-5',
    cambridgePathway: 'Cambridge Early Years 3 / Primary Stage 1',
    ukKeyStage: 'EYFS (Reception)',
    ibProgramme: 'IB PYP (Kindergarten)',
    usBenchmarkAssessment: 'State Kindergarten Entry Assessment (KEA) & DIBELS',
    keyMilestone: 'Letter-sound decoding, counting to 100, addition/subtraction within 10'
  },
  {
    usGrade: '1st Grade (Grade 1)',
    typicalAge: 'Age 6',
    etwAgeBand: '6-8',
    cambridgePathway: 'Cambridge Primary Stage 1',
    ukKeyStage: 'Key Stage 1 (Year 1)',
    ibProgramme: 'IB PYP (Grade 1)',
    usBenchmarkAssessment: 'District Reading Lexile / MAP Growth',
    keyMilestone: 'Reading decodable books, addition/subtraction within 20, telling time to half-hour'
  },
  {
    usGrade: '2nd Grade (Grade 2)',
    typicalAge: 'Age 7',
    etwAgeBand: '6-8',
    cambridgePathway: 'Cambridge Primary Stage 2',
    ukKeyStage: 'Key Stage 1 (Year 2 / KS1 SATs)',
    ibProgramme: 'IB PYP (Grade 2)',
    usBenchmarkAssessment: 'End of KS1 / State Grade 2 Benchmark',
    keyMilestone: 'Fluent chapter reading, two-digit addition/subtraction with regrouping, basic fractions (1/2, 1/4)'
  },
  {
    usGrade: '3rd Grade (Grade 3)',
    typicalAge: 'Age 8',
    etwAgeBand: '6-8',
    cambridgePathway: 'Cambridge Primary Stage 3 (Progression Test)',
    ukKeyStage: 'Key Stage 2 (Year 3)',
    ibProgramme: 'IB PYP (Grade 3)',
    usBenchmarkAssessment: 'State Standardized Tests Begin (SBAC / PARCC / STAAR Grade 3)',
    keyMilestone: 'Multiplication & division tables, fraction number lines, paragraph essay composition'
  },
  {
    usGrade: '4th Grade (Grade 4)',
    typicalAge: 'Age 9',
    etwAgeBand: '9-12',
    cambridgePathway: 'Cambridge Primary Stage 4',
    ukKeyStage: 'Key Stage 2 (Year 4)',
    ibProgramme: 'IB PYP (Grade 4)',
    usBenchmarkAssessment: 'NAEP Grade 4 ("Nation’s Report Card")',
    keyMilestone: 'Multi-digit multiplication, equivalent fractions, scientific investigations with variables'
  },
  {
    usGrade: '5th Grade (Grade 5)',
    typicalAge: 'Age 10',
    etwAgeBand: '9-12',
    cambridgePathway: 'Cambridge Primary Stage 5 & 6 (Primary Checkpoint)',
    ukKeyStage: 'Key Stage 2 (Year 5 / Year 6 SATs)',
    ibProgramme: 'IB PYP Exhibition (Culminating Primary Project)',
    usBenchmarkAssessment: 'State Grade 5 Science & Math Exams',
    keyMilestone: 'Adding/multiplying fractions, coordinate planes, five-paragraph informational essays'
  },
  {
    usGrade: '6th Grade (Grade 6 - Middle School)',
    typicalAge: 'Age 11',
    etwAgeBand: '9-12',
    cambridgePathway: 'Cambridge Lower Secondary Stage 7',
    ukKeyStage: 'Key Stage 3 (Year 7)',
    ibProgramme: 'IB MYP Year 1',
    usBenchmarkAssessment: 'State Grade 6 Standardized Assessment',
    keyMilestone: 'Ratios, negative integers, textual analysis with direct evidence, Earth science systems'
  },
  {
    usGrade: '7th Grade (Grade 7 - Middle School)',
    typicalAge: 'Age 12',
    etwAgeBand: '13-16',
    cambridgePathway: 'Cambridge Lower Secondary Stage 8',
    ukKeyStage: 'Key Stage 3 (Year 8)',
    ibProgramme: 'IB MYP Year 2',
    usBenchmarkAssessment: 'State Grade 7 ELA & Math Testing',
    keyMilestone: 'Two-step linear equations, proportions, cells and genetics, world geography'
  },
  {
    usGrade: '8th Grade (Grade 8 - Middle School)',
    typicalAge: 'Age 13',
    etwAgeBand: '13-16',
    cambridgePathway: 'Cambridge Lower Secondary Stage 9 (Checkpoint Exam)',
    ukKeyStage: 'Key Stage 3 (Year 9 / End of KS3)',
    ibProgramme: 'IB MYP Year 3',
    usBenchmarkAssessment: 'NAEP Grade 8; PSAT 8/9; State End-of-Grade Exam',
    keyMilestone: 'Pre-Algebra / Algebra I readiness, linear functions, US Constitution & civics, physics forces'
  },
  {
    usGrade: '9th Grade (High School Freshman)',
    typicalAge: 'Age 14',
    etwAgeBand: '13-16',
    cambridgePathway: 'Cambridge IGCSE / O Level Year 1',
    ukKeyStage: 'Key Stage 4 (Year 10 / GCSE Year 1)',
    ibProgramme: 'IB MYP Year 4',
    usBenchmarkAssessment: 'PSAT 8/9 or PSAT 10; State End-of-Course (EOC) Algebra I',
    keyMilestone: 'Algebra I (quadratic equations), Biology with Lab, World History, High School Carnegie credits accumulate'
  },
  {
    usGrade: '10th Grade (High School Sophomore)',
    typicalAge: 'Age 15',
    etwAgeBand: '17+',
    cambridgePathway: 'Cambridge IGCSE Final Examinations (Grades A*–G)',
    ukKeyStage: 'Key Stage 4 (Year 11 / GCSE Final Exams)',
    ibProgramme: 'IB MYP Year 5 (Personal Project Assessment)',
    usBenchmarkAssessment: 'Pre-ACT & PSAT 10; State EOC Geometry & Biology Exams',
    keyMilestone: 'Euclidean Geometry, Chemistry with Lab, formal rhetorical essays, career pathway planning'
  },
  {
    usGrade: '11th Grade (High School Junior)',
    typicalAge: 'Age 16',
    etwAgeBand: '17+',
    cambridgePathway: 'Cambridge International AS Level',
    ukKeyStage: 'Key Stage 5 / Sixth Form (Year 12 / AS Level)',
    ibProgramme: 'IB Diploma Programme (DP) Year 1',
    usBenchmarkAssessment: 'PSAT/NMSQT (National Merit Scholarship Qualifying Test); SAT & ACT tests; AP Exams',
    keyMilestone: 'Algebra II / Trigonometry / Pre-Calculus, AP US History, Physics with Lab, College application research'
  },
  {
    usGrade: '12th Grade (High School Senior)',
    typicalAge: 'Age 17–18+',
    etwAgeBand: '17+',
    cambridgePathway: 'Cambridge International A Level (Final Exams)',
    ukKeyStage: 'Key Stage 5 / Sixth Form (Year 13 / A-Level Final)',
    ibProgramme: 'IB Diploma Programme (DP) Year 2 (Extended Essay & TOK)',
    usBenchmarkAssessment: 'College Board AP Exams (Scores 1–5); Final SAT/ACT scores; High School Graduation Portfolio',
    keyMilestone: 'AP Calculus / AP Statistics, AP Macroeconomics & US Government, Capstone Senior Thesis, US High School Diploma Award'
  }
];

/**
 * Authentic US Standardized Test Practice Items & Worksheets
 * Modeled on Common Core, NGSS, and College Board AP / SAT standards.
 */
export const US_PRACTICE_RESOURCES: UsPracticeResourceItem[] = [
  {
    id: 'us-math-gr3-fractions',
    title: 'Grade 3 Common Core Math: Fractions as Numbers on the Number Line & Fair Sharing',
    gradeLevel: 'Grade 3 (Elementary)',
    standardsFramework: 'Common Core Math (CCSS.MATH)',
    standardCode: 'CCSS.MATH.CONTENT.3.NF.A.1 & 3.NF.A.2',
    subject: 'Mathematics',
    resourceType: 'Standardized Test Paper',
    estimatedMinutes: 25,
    totalPoints: 20,
    overview: 'Modeled directly on Smarter Balanced (SBAC) and PARCC Grade 3 Mathematics standardized assessment items. Tests understanding of unit fractions 1/b as one part of a whole partitioned into b equal parts, and representation of fractions on a number line.',
    instructions: [
      'Read each question carefully before answering.',
      'Show your work or mathematical reasoning for each question.',
      'For multiple-choice items, choose the BEST answer.',
      'Calculators are NOT permitted for this Grade 3 foundational section.'
    ],
    questions: [
      {
        number: 1,
        question: 'A parent slices a round homemade cornbread into 4 equal-sized pieces. Sarafina eats 3 of those pieces. What fraction of the whole cornbread did Sarafina eat?',
        options: ['A) 1/4', 'B) 3/4', 'C) 4/3', 'D) 3/1'],
        correctAnswer: 'B) 3/4',
        points: 4,
        standardTested: 'CCSS.MATH.CONTENT.3.NF.A.1',
        answerExplanation: 'The whole cornbread was divided into 4 equal parts, so each part represents the unit fraction 1/4. Sarafina ate 3 of these parts, which equals 1/4 + 1/4 + 1/4 = 3/4.',
        teacherTip: 'Reinforce that the denominator represents the total number of equal parts in the whole, while the numerator counts how many parts are being considered.'
      },
      {
        number: 2,
        question: 'Look at a standard number line marked from 0 to 1. The distance between 0 and 1 is partitioned into 3 equal lengths. What label belongs on the tick mark immediately after 0?',
        options: ['A) 1/2', 'B) 1/3', 'C) 2/3', 'D) 3/1'],
        correctAnswer: 'B) 1/3',
        points: 4,
        standardTested: 'CCSS.MATH.CONTENT.3.NF.A.2.A',
        answerExplanation: 'When the interval from 0 to 1 is divided into 3 equal segments, each segment has length 1/3. The first mark from 0 is at 1/3.',
        teacherTip: 'Have the learner draw a 3-inch line on scrap paper and divide it with tick marks to visualize unit segments.'
      },
      {
        number: 3,
        question: 'Which of the following fractions is equivalent to 1 whole?',
        options: ['A) 1/4', 'B) 4/1', 'C) 4/4', 'D) 0/4'],
        correctAnswer: 'C) 4/4',
        points: 4,
        standardTested: 'CCSS.MATH.CONTENT.3.NF.A.3.C',
        answerExplanation: 'Any fraction where the numerator equals the non-zero denominator represents 1 whole (n/n = 1). Thus, 4/4 equals 1.',
        teacherTip: 'Connect this to sharing: if a family cuts a watermelon into 4 slices and eats all 4 slices, they have eaten the entire whole watermelon.'
      },
      {
        number: 4,
        question: 'Two identical chocolate bars are on the table. Jason divides his bar into 6 equal parts and eats 2 parts (2/6). Maya divides her bar into 3 equal parts. How many parts must Maya eat to consume the exact same amount as Jason?',
        options: ['A) 1 part (1/3)', 'B) 2 parts (2/3)', 'C) 3 parts (3/3)', 'D) 4 parts (4/3)'],
        correctAnswer: 'A) 1 part (1/3)',
        points: 4,
        standardTested: 'CCSS.MATH.CONTENT.3.NF.A.3.B',
        answerExplanation: '2/6 simplifies to 1/3 by dividing both numerator and denominator by 2 (2÷2 / 6÷2 = 1/3). Maya needs to eat 1 of her 3 equal parts to have the exact equivalent amount.',
        teacherTip: 'Draw two side-by-side fraction strips to show visually how two 1/6 blocks take up the exact same length as one 1/3 block.'
      },
      {
        number: 5,
        question: 'Explain why 1/3 is LARGER than 1/8, even though the number 8 is larger than 3. Write a clear mathematical sentence.',
        correctAnswer: 'When a whole is divided into fewer pieces (3 parts instead of 8 parts), each individual piece is much larger.',
        points: 4,
        standardTested: 'CCSS.MATH.CONTENT.3.NF.A.3.D',
        answerExplanation: 'The denominator shows how many equal parts make up the whole. Dividing a pie into only 3 pieces makes each piece much bigger than dividing that same pie among 8 people.',
        teacherTip: 'This is the most common misconception in Grade 3 fractions. Use real food items (chapati, pizza, or fruit) to demonstrate that more cuts yield smaller pieces.'
      }
    ]
  },
  {
    id: 'us-ngss-gr5-water-matter',
    title: 'Grade 5 NGSS Science: Matter, Water Systems & Gravity Performance Investigation',
    gradeLevel: 'Grade 5 (Elementary)',
    standardsFramework: 'Next Generation Science Standards (NGSS)',
    standardCode: 'NGSS 5-PS1-2 & 5-ESS2-2',
    subject: 'Practical Science',
    resourceType: 'Performance Task / DBQ',
    estimatedMinutes: 30,
    totalPoints: 25,
    overview: 'Modeled on State NGSS Science Assessments and NAEP Grade 4/8 Science inquiry tasks. Investigates conservation of matter during physical changes and the distribution of freshwater across Earth’s systems.',
    instructions: [
      'Read the investigation scenarios carefully.',
      'Apply scientific reasoning: cite observations and evidence.',
      'Use proper scientific vocabulary: mass, evaporation, condensation, precipitation, conservation of matter.'
    ],
    questions: [
      {
        number: 1,
        question: 'A student pours 200 grams of pure water and 15 grams of table salt into a beaker and stirs until the salt completely dissolves. What is the total mass of the saltwater solution, and what fundamental law does this prove?',
        options: [
          'A) 200 grams, because salt disappears when dissolved',
          'B) 215 grams, proving the Law of Conservation of Matter',
          'C) 185 grams, because stirring causes evaporation loss',
          'D) 230 grams, because salt expands in water'
        ],
        correctAnswer: 'B) 215 grams, proving the Law of Conservation of Matter',
        points: 5,
        standardTested: 'NGSS 5-PS1-2',
        answerExplanation: 'According to the Law of Conservation of Matter (NGSS 5-PS1-2), the total mass of matter is conserved when substances undergo physical changes, such as dissolving or state change. 200g water + 15g salt = exactly 215g solution.',
        teacherTip: 'Let children verify this at home using a digital kitchen scale: weigh a cup of water, weigh a spoonful of sugar, mix them, and confirm the total weight matches.'
      },
      {
        number: 2,
        question: 'A learner builds a homemade water filter using sand, gravel, and activated charcoal. When murky brown puddle water is poured through, the liquid comes out clear. Which statement BEST describes what occurred scientifically?',
        options: [
          'A) The gravel converted the dirt into clean water molecules',
          'B) The filter physically trapped insoluble solid particles, while the dissolved minerals and water molecules passed through',
          'C) The charcoal killed all microscopic bacteria instantly without heat',
          'D) The water changed its chemical state from gas to liquid'
        ],
        correctAnswer: 'B) The filter physically trapped insoluble solid particles, while the dissolved minerals and water molecules passed through',
        points: 5,
        standardTested: 'NGSS 5-PS1-3 & 5-ESS3-1',
        answerExplanation: 'Mechanical filtration uses pore size to trap suspended, insoluble particulates while allowing water to flow. Dissolved substances remain, which is why filtered water must still be boiled to kill microscopic pathogens.',
        teacherTip: 'Reinforce the vital real-world safety distinction between "clarified water" (sediment removed) and "potable drinking water" (bacteria sterilized through heat).'
      },
      {
        number: 3,
        question: 'Approximately what percentage of all water on planet Earth is accessible, clean liquid freshwater available for human drinking and agriculture?',
        options: [
          'A) About 70%',
          'B) About 25%',
          'C) Less than 1%',
          'D) Exactly 50%'
        ],
        correctAnswer: 'C) Less than 1%',
        points: 5,
        standardTested: 'NGSS 5-ESS2-2',
        answerExplanation: 'While oceans cover ~71% of Earth, about 97% of Earth water is saltwater. Of the remaining ~3% freshwater, over two-thirds is locked in polar ice caps and glaciers, leaving less than 1% as accessible surface and groundwater for humanity.',
        teacherTip: 'Demonstrate this classic NGSS model: fill a 1-liter bottle with water (all Earth water), scoop out 30 mL into a small cup (freshwater), and take just 1 drop on an eyedropper (available drinking water).'
      },
      {
        number: 4,
        question: 'During a hot day, wet clothes hung on a line become completely dry within two hours. What happens to the water molecules, and how can the process be reversed?',
        correctAnswer: 'The liquid water absorbed thermal energy from the sun and air, evaporating into invisible water vapor (gas). The process reverses when warm water vapor rises, cools, and condenses back into liquid droplets (forming clouds or dew).',
        points: 5,
        standardTested: 'NGSS 5-PS1-4 & 5-ESS2-1',
        answerExplanation: 'Evaporation is an endothermic phase change from liquid to gas. The water molecules did not disappear; they joined the atmosphere. When cooled, condensation returns water to the liquid state in the water cycle.',
        teacherTip: 'Show condensation by holding a cold metal cup or mirror over a steaming cup of tea to see water droplets form immediately.'
      },
      {
        number: 5,
        question: 'Engineering Design (NGSS 3-5-ETS1-2): A community wants to collect clean rainwater from metal roof sheets. Propose TWO design improvements to keep debris and animal contaminants out of the storage barrel.',
        correctAnswer: '1) Install a mesh wire screen or cloth filter over the roof gutter downspout to trap leaves and twigs. 2) Add a "first-flush diverter" pipe that discards the first 5 gallons of dusty runoff before directing clean rain into the main barrel.',
        points: 5,
        standardTested: 'NGSS 3-5-ETS1-2',
        answerExplanation: 'These two practical engineering solutions address particulate separation and contaminant diversion at minimal cost, modeling genuine civil engineering design.',
        teacherTip: 'This connects directly with UN SDG 6 (Clean Water and Sanitation) and our World Changer mission.'
      }
    ]
  },
  {
    id: 'us-ap-econ-fin-assets',
    title: 'High School AP Economics & Financial Literacy: Assets vs Liabilities & Wealth Accumulation',
    gradeLevel: 'Grades 11–12 (High School / AP Prep)',
    standardsFramework: 'National Financial Literacy Standards & AP Macroeconomics',
    standardCode: 'National Standard IV (Using Credit) & VI (Financial Investing)',
    subject: 'Financial Literacy & Economics',
    resourceType: 'AP / SAT Practice Exam',
    estimatedMinutes: 35,
    totalPoints: 30,
    overview: 'Modeled on College Board AP Economics Free-Response Questions (FRQs) and Jump$tart Coalition National Financial Literacy benchmarks. Examines the structural distinction between cash-flow producing assets and depreciating consumer liabilities, compound interest modeling, and personal capital allocation.',
    instructions: [
      'Write clear, concise analytical explanations.',
      'Show numerical calculations where required.',
      'Label axes clearly if sketching any supply-and-demand or compound growth diagrams.'
    ],
    questions: [
      {
        number: 1,
        question: 'Which of the following transactions constitutes the acquisition of an ASSET rather than a LIABILITY under financial accounting principles?',
        options: [
          'A) Financing a new luxury car with a 5-year high-interest auto loan',
          'B) Purchasing a commercial solar-powered grain mill that generates 200,000 UGX weekly in net milling fees',
          'C) Buying an expensive designer suit on store credit for social events',
          'D) Renting a larger home apartment with monthly recurring lease payments'
        ],
        correctAnswer: 'B) Purchasing a commercial solar-powered grain mill that generates 200,000 UGX weekly in net milling fees',
        points: 6,
        standardTested: 'National Financial Literacy Standard VI',
        answerExplanation: 'An asset is an economic resource expected to generate positive cash inflows or appreciate in value. The grain mill produces recurring productive income that exceeds operating costs. The other options incur ongoing cash outflows or rapid depreciation.',
        teacherTip: 'Teach the simple Robert Kiyosaki rule: "Assets put money in your pocket; Liabilities take money out of your pocket."'
      },
      {
        number: 2,
        question: 'A young entrepreneur deposits $1,000 in a credit cooperative earning 8% annual compound interest. Assuming no additional deposits and no withdrawals, calculate the total account balance at the end of 2 years using the compound interest formula A = P(1 + r)^t.',
        options: [
          'A) $1,160.00',
          'B) $1,166.40',
          'C) $1,080.00',
          'D) $1,240.00'
        ],
        correctAnswer: 'B) $1,166.40',
        points: 6,
        standardTested: 'CCSS.MATH.CONTENT.HSF.IF.C.8.B (Exponential Growth)',
        answerExplanation: 'Year 1: $1,000 × 1.08 = $1,080. Year 2: $1,080 × 1.08 = $1,166.40. Notice the extra $6.40 represents interest earned on the previous interest ("compound growth" / magoba ga magoba).',
        teacherTip: 'Compare this to simple interest ($1,160) to demonstrate why Albert Einstein called compound interest the eighth wonder of the world.'
      },
      {
        number: 3,
        question: 'Define the "Rule of 72" in personal finance and determine approximately how many years it will take an investment to double at a 9% annual return.',
        options: [
          'A) 7.2 years',
          'B) 8.0 years',
          'C) 9.0 years',
          'D) 12.0 years'
        ],
        correctAnswer: 'B) 8.0 years',
        points: 6,
        standardTested: 'National Financial Literacy Standard VI',
        answerExplanation: 'The Rule of 72 states that Years to Double ≈ 72 ÷ Annual Interest Rate. 72 ÷ 9 = 8 years.',
        teacherTip: 'This mental math shortcut empowers youth to evaluate business opportunities and investment returns immediately without a calculator.'
      },
      {
        number: 4,
        question: 'Free-Response Question (FRQ): Distinguish between "Productive Debt" (good debt) and "Consumer Debt" (bad debt). Provide ONE real-world example of each from a local village or urban town economy.',
        correctAnswer: 'Productive debt is borrowed capital used to acquire an income-generating tool whose rate of return exceeds the loan interest rate (e.g. borrowing 300,000 UGX to buy a sewing machine or drip irrigation kit). Consumer debt is borrowed capital spent on non-revenue producing consumables or depreciating items (e.g. borrowing on mobile money to buy clothes or throw a lavish party).',
        points: 6,
        standardTested: 'National Financial Literacy Standard IV',
        answerExplanation: 'Productive debt enhances future net worth; consumer debt consumes future income and increases financial fragility.',
        teacherTip: 'Highlight how high mobile money loan rates (15-30% monthly) can trap families unless loans are strictly tied to high-margin commercial turnover.'
      },
      {
        number: 5,
        question: 'AP Macroeconomics Connection: How does an increase in the central bank’s benchmark interest rate affect household borrowing for consumer liabilities and business capital investment in productive assets?',
        correctAnswer: 'Higher interest rates increase the cost of borrowing for both households and firms. Consequently, consumer borrowing for discretionary spending contracts, while business capital investment slows because fewer capital projects yield an expected return higher than the elevated hurdle rate (interest rate).',
        points: 6,
        standardTested: 'AP Macroeconomics Unit 4 (Financial Sector / Monetary Policy)',
        answerExplanation: 'Higher interest rates decrease aggregate demand (AD = C + I + G + NX) via reductions in both consumption (C) and investment (I).',
        teacherTip: 'Connect macroeconomics to daily news: when central banks raise rates to fight inflation, mortgage and bank loan rates rise for ordinary families.'
      }
    ]
  }
];

/**
 * Maps any lesson module to its authentic US K–12 Curriculum Alignment
 */
export function getUsAlignmentForLesson(
  ageBand: AgeBand,
  category: SubjectCategory,
  title: string
): UsCurriculumAlignment {
  const t = title.toLowerCase();

  // === AGE 3–5: PRE-K & KINDERGARTEN ===
  if (ageBand === '3-5') {
    if (category === 'language' || t.includes('word') || t.includes('talk')) {
      return {
        gradeLevel: 'Pre-K & Kindergarten (Ages 3–5)',
        gradeNumber: 'Grade K',
        standardsFramework: 'Common Core ELA (CCSS.ELA)',
        standardCode: 'CCSS.ELA-LITERACY.RF.K.1 & RL.K.2',
        standardTitle: 'Demonstrate understanding of basic print concepts, rhyming phonemes, and verbal story retelling.',
        domainCluster: 'Reading: Foundational Skills & Literature',
        apSatEquivalent: 'Early Childhood Phonics & Literacy Readiness'
      };
    }
    if (category === 'math' || t.includes('count') || t.includes('seed')) {
      return {
        gradeLevel: 'Pre-K & Kindergarten (Ages 3–5)',
        gradeNumber: 'Grade K',
        standardsFramework: 'Common Core Math (CCSS.MATH)',
        standardCode: 'CCSS.MATH.CONTENT.K.CC.B.4',
        standardTitle: 'Understand the relationship between numbers and quantities; connect counting to cardinality 1–20.',
        domainCluster: 'Counting and Cardinality',
        apSatEquivalent: 'Foundational Quantitative Reasoning'
      };
    }
    if (category === 'practical-skills' || t.includes('shape')) {
      return {
        gradeLevel: 'Pre-K & Kindergarten (Ages 3–5)',
        gradeNumber: 'Grade K',
        standardsFramework: 'Common Core Math (CCSS.MATH)',
        standardCode: 'CCSS.MATH.CONTENT.K.G.A.2',
        standardTitle: 'Correctly name shapes regardless of their orientations or overall size.',
        domainCluster: 'Geometry (K.G)',
        apSatEquivalent: 'Spatial Geometry Foundations'
      };
    }
    if (category === 'science' || t.includes('sense') || t.includes('color') || t.includes('float')) {
      return {
        gradeLevel: 'Pre-K & Kindergarten (Ages 3–5)',
        gradeNumber: 'Grade K',
        standardsFramework: 'Next Generation Science Standards (NGSS)',
        standardCode: 'NGSS K-PS2-1 & K-LS1-1',
        standardTitle: 'Plan and conduct an investigation to compare the effects of different strengths or directions of pushes and pulls; observe plant and sensory needs.',
        domainCluster: 'Physical Sciences & Life Sciences',
        apSatEquivalent: 'Empirical Sensory Observation'
      };
    }
    return {
      gradeLevel: 'Pre-K & Kindergarten (Ages 3–5)',
      gradeNumber: 'Grade K',
      standardsFramework: 'Common Core ELA (CCSS.ELA)',
      standardCode: 'CCSS.ELA-LITERACY.SL.K.1',
      standardTitle: 'Participate in collaborative conversations with diverse partners about kindergarten topics and texts.',
      domainCluster: 'Speaking and Listening',
      apSatEquivalent: 'Social-Emotional Learning (SEL)'
    };
  }

  // === AGE 6–8: ELEMENTARY (GRADES 1–3) ===
  if (ageBand === '6-8') {
    if (category === 'math' || t.includes('fraction') || t.includes('fraction')) {
      return {
        gradeLevel: 'Elementary School (Grades 1–3)',
        gradeNumber: 'Grade 3',
        standardsFramework: 'Common Core Math (CCSS.MATH)',
        standardCode: 'CCSS.MATH.CONTENT.3.NF.A.1',
        standardTitle: 'Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts.',
        domainCluster: 'Number & Operations—Fractions',
        apSatEquivalent: 'SAT Math: Proportional & Rational Reasoning'
      };
    }
    if (category === 'science' || t.includes('rain') || t.includes('yeast') || t.includes('cycle')) {
      return {
        gradeLevel: 'Elementary School (Grades 1–3)',
        gradeNumber: 'Grade 2–3',
        standardsFramework: 'Next Generation Science Standards (NGSS)',
        standardCode: 'NGSS 2-PS1-1 & 3-ESS2-1',
        standardTitle: 'Plan and conduct an investigation to describe and classify different kinds of materials by observable properties; represent data in tables to describe typical weather.',
        domainCluster: 'Matter and Its Interactions & Earth Systems',
        apSatEquivalent: 'AP Environmental Science Foundation'
      };
    }
    if (category === 'finance' || t.includes('money')) {
      return {
        gradeLevel: 'Elementary School (Grades 1–3)',
        gradeNumber: 'Grade 2',
        standardsFramework: 'Common Core Math (CCSS.MATH)',
        standardCode: 'CCSS.MATH.CONTENT.2.MD.C.8',
        standardTitle: 'Solve word problems involving dollar bills, quarters, dimes, nickels, and pennies, using $ and ¢ symbols appropriately.',
        domainCluster: 'Measurement and Data',
        apSatEquivalent: 'National Financial Literacy Benchmark Grade 4'
      };
    }
    return {
      gradeLevel: 'Elementary School (Grades 1–3)',
      gradeNumber: 'Grade 2',
      standardsFramework: 'Common Core ELA (CCSS.ELA)',
      standardCode: 'CCSS.ELA-LITERACY.RL.2.1',
      standardTitle: 'Ask and answer such questions as who, what, where, when, why, and how to demonstrate understanding of key details in a text.',
      domainCluster: 'Reading: Literature',
      apSatEquivalent: 'Elementary Reading Comprehension'
    };
  }

  // === AGE 9–12: UPPER ELEMENTARY & EARLY MIDDLE SCHOOL (GRADES 4–6) ===
  if (ageBand === '9-12') {
    if (category === 'science' || t.includes('water') || t.includes('filter')) {
      return {
        gradeLevel: 'Upper Elementary & Middle School (Grades 4–6)',
        gradeNumber: 'Grade 5',
        standardsFramework: 'Next Generation Science Standards (NGSS)',
        standardCode: 'NGSS 5-PS1-2 & 5-ESS2-2',
        standardTitle: 'Measure and graph quantities to provide evidence that regardless of the type of change, the total weight of matter is conserved; describe freshwater distribution.',
        domainCluster: 'Structure and Properties of Matter & Earth Systems',
        apSatEquivalent: 'AP Chemistry / AP Environmental Science Lab Prep'
      };
    }
    if (category === 'finance' || t.includes('business')) {
      return {
        gradeLevel: 'Upper Elementary & Middle School (Grades 4–6)',
        gradeNumber: 'Grade 6',
        standardsFramework: 'Common Core Math (CCSS.MATH)',
        standardCode: 'CCSS.MATH.CONTENT.6.RP.A.3',
        standardTitle: 'Use ratio and rate reasoning to solve real-world and mathematical problems, including unit pricing and profit percentages.',
        domainCluster: 'Ratios & Proportional Relationships',
        highSchoolCreditCategory: 'Career & Technical Education (CTE)',
        apSatEquivalent: 'Microeconomics & Business Math'
      };
    }
    if (t.includes('know') || t.includes('truth') || category === 'social-kindness') {
      return {
        gradeLevel: 'Upper Elementary & Middle School (Grades 4–6)',
        gradeNumber: 'Grade 6',
        standardsFramework: 'Common Core ELA (CCSS.ELA)',
        standardCode: 'CCSS.ELA-LITERACY.RI.6.8',
        standardTitle: 'Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not.',
        domainCluster: 'Reading: Informational Text',
        apSatEquivalent: 'SAT Reading: Command of Evidence'
      };
    }
    return {
      gradeLevel: 'Upper Elementary & Middle School (Grades 4–6)',
      gradeNumber: 'Grade 5',
      standardsFramework: 'Next Generation Science Standards (NGSS)',
      standardCode: 'NGSS 5-LS2-1',
      standardTitle: 'Develop a model to describe the movement of matter among plants, animals, decomposers, and the environment.',
      domainCluster: 'Ecosystems: Interactions, Energy, and Dynamics',
      apSatEquivalent: 'Middle School Scientific Inquiry'
    };
  }

  // === AGE 13–16: MIDDLE SCHOOL & EARLY HIGH SCHOOL (GRADES 7–10) ===
  if (ageBand === '13-16') {
    if (category === 'technology' || t.includes('computer') || t.includes('code')) {
      return {
        gradeLevel: 'Junior High & High School (Grades 8–10)',
        gradeNumber: 'Grade 9',
        standardsFramework: 'CSTA Computer Science',
        standardCode: 'CSTA 3A-AP-13 & CCSS.MATH.CONTENT.HSF.BF.A.1',
        standardTitle: 'Decompose problems into smaller components through systematic algorithm design, conditional logic, and modular functions.',
        domainCluster: 'Algorithms & Programming (CSTA) / Algebra',
        highSchoolCreditCategory: 'Mathematics (3-4 credits)',
        apSatEquivalent: 'AP Computer Science Principles / AP Computer Science A'
      };
    }
    if (category === 'science' || t.includes('engine') || t.includes('oil')) {
      return {
        gradeLevel: 'Junior High & High School (Grades 8–10)',
        gradeNumber: 'Grade 9',
        standardsFramework: 'Next Generation Science Standards (NGSS)',
        standardCode: 'NGSS HS-PS2-1 & HS-PS3-3',
        standardTitle: 'Analyze data to support the claim that Newton’s second law of motion solves engineering challenges involving friction, heat dissipation, and mechanical conservation of energy.',
        domainCluster: 'Forces and Interactions & Energy Conservation',
        highSchoolCreditCategory: 'Laboratory Science (3 credits)',
        apSatEquivalent: 'AP Physics 1: Mechanics / SAT Physics'
      };
    }
    return {
      gradeLevel: 'Junior High & High School (Grades 8–10)',
      gradeNumber: 'Grade 8',
      standardsFramework: 'Common Core ELA (CCSS.ELA)',
      standardCode: 'CCSS.ELA-LITERACY.W.8.1',
      standardTitle: 'Write arguments to support claims with clear reasons and relevant textual or empirical evidence.',
      domainCluster: 'Writing: Text Types and Purposes',
      highSchoolCreditCategory: 'English Language Arts (4 credits)',
      apSatEquivalent: 'AP English Language & Composition Readiness'
    };
  }

  // === AGE 17+: HIGH SCHOOL (GRADES 11–12) & COLLEGE READINESS ===
  if (category === 'finance' || t.includes('asset') || t.includes('liability')) {
    return {
      gradeLevel: 'High School Upperclassman & College Prep (Grades 11–12)',
      gradeNumber: 'Grade 12',
      standardsFramework: 'National Financial Literacy Standards',
      standardCode: 'CEE Standard VI (Investing) & AP Macro Unit 4',
      standardTitle: 'Evaluate investment alternatives, compare compound returns versus borrowing costs, and design productive capital allocation strategies.',
      domainCluster: 'Financial Investing and Macroeconomics',
      highSchoolCreditCategory: 'Financial Literacy / Life Skills',
      apSatEquivalent: 'AP Macroeconomics / AP Microeconomics / College Finance'
    };
  }

  if (category === 'godly-life-skills' || t.includes('world') || t.includes('leadership')) {
    return {
      gradeLevel: 'High School Upperclassman & College Prep (Grades 11–12)',
      gradeNumber: 'Grade 12',
      standardsFramework: 'C3 Social Studies Framework',
      standardCode: 'C3 D2.Civ.7 & D2.Civ.14',
      standardTitle: 'Apply civic virtues and democratic principles in community settings; analyze how youth initiatives address global challenges.',
      domainCluster: 'Civics and Government',
      highSchoolCreditCategory: 'Social Studies / History (3 credits)',
      apSatEquivalent: 'AP US Government & Politics / Community Capstone'
    };
  }

  return {
    gradeLevel: 'High School Upperclassman & College Prep (Grades 11–12)',
    gradeNumber: 'Grade 11–12',
    standardsFramework: 'Common Core ELA (CCSS.ELA)',
    standardCode: 'CCSS.ELA-LITERACY.RI.11-12.7',
    standardTitle: 'Integrate and evaluate multiple sources of information presented in different media or formats as well as in words in order to address a question or solve a problem.',
    domainCluster: 'Reading: Informational Text',
    highSchoolCreditCategory: 'English Language Arts (4 credits)',
    apSatEquivalent: 'SAT Reading & Writing / AP Seminar'
  };
}
