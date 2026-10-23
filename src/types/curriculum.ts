export type AgeBand = '3-5' | '6-8' | '9-12' | '13-16' | '17+';

export type SubjectCategory = 
  | 'language'
  | 'numbers'
  | 'colors-shapes'
  | 'science'
  | 'social-kindness'
  | 'soft-skills'
  | 'godly-life-skills'
  | 'math'
  | 'finance'
  | 'technology'
  | 'agriculture'
  | 'history'
  | 'humanity-society'
  | 'arts-culture'
  | 'wellbeing'
  | 'practical-skills'
  | 'projects'
  | 'capstone'
  | 'christian-education';

export type LocationType = 'urban' | 'rural';

export type RegionalDialect = 'Luganda' | 'Runyankole' | 'Acholi' | 'Lusoga' | 'Swahili';

export interface DialectWord {
  localWord: string;
  englishMeaning: string;
  language: string;
  setting?: 'urban' | 'rural' | 'both';
  contextNote?: string;
}

export interface LocationVariant {
  setting: LocationType;
  badgeLabel: string; // e.g. "🏙️ Urban (Town/City)" or "🌾 Rural (Village/Kyalo)"
  environmentSummary: string; // e.g. "Town streets, kiosks, city tap water, boda stages"
  storySnippet: string;
  localExample: string;
  householdMaterials: string[];
  introductoryQuestion: string;
  simplifiedExplanation: string;
  activityTitle: string;
  activitySteps: string[];
  parentChallenge: string;
  dialectWords: DialectWord[];
  whatsAppSnippet: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonMission {
  step1_learn: {
    title: string;
    duration: string;
    story: string;
    keyConcept: string;
    localExample: string;
  };
  step2_discuss: {
    title: string;
    duration: string;
    askFirst: string;
    listenFor: string;
    explainSimply: string;
    parentTip: string;
  };
  step3_activity: {
    title: string;
    duration: string;
    gameOrExperimentName: string;
    instructions: string[];
    whatChildLearns: string;
  };
  step4_quiz: {
    title: string;
    duration: string;
    questions: QuizQuestion[];
  };
}

export interface ParentTeachingGuide {
  introductoryQuestion: string; // 1. An introductory question to spark curiosity
  simplifiedExplanation: string; // 2. A simplified explanation of the core concept
  safeHomeActivity: {
    title: string;
    materials: string[];
    steps: string[];
    safetyTip?: string;
  }; // 3. A safe, simple activity or experiment parents can do with their child
  followUpQuestions: {
    question: string;
    sampleAnswer: string;
  }[]; // 4. Follow-up questions to check understanding
  parentChallenge: string; // 5. A 'Parent Challenge' to extend the learning
}

export interface CommunityMission {
  title: string;
  impactGoal: string; // e.g. "Inspire 2 people in your community" or "Protect clean water for your neighborhood"
  actionSteps: string[];
  worldChangerPrinciple: string; // e.g. "We are the Salt of the Earth and the Light of our Community (Matthew 5:14)"
  dialectPhrase?: string; // e.g. "Okukyusa Ekitundu Kyaffe (Changing our community)"
  unSdg?: {
    number: number;
    title: string;
    shortName: string;
    badge: string;
    icon: string;
    color: string;
    headerGradient: string;
    tagline: string;
    youthActionFocus: string;
  };
}

export interface LessonModule {
  id: string;
  ageBand: AgeBand;
  stageName: string; // 'Discover', 'Build', 'Explore', 'Develop', 'Prepare'
  category: SubjectCategory;
  categoryLabel: string;
  title: string;
  subtitle: string;
  estimatedMinutes: number; // 20
  parentMinutes: number; // 5-10
  icon: string;
  themeColor: string; // Tailwind color string
  badgeName: string;
  badgeDescription: string;
  objectives: string[];
  householdMaterials: string[];
  parentTeachingGuide: ParentTeachingGuide;
  mission: LessonMission;
  parentChallenge: string;
  fiveMinuteBite: {
    title: string;
    quickPrompt: string;
    quickAction: string;
  };
  whatsAppSnippet: string;
  audioNarrationText: string;
  communityMission?: CommunityMission;
  dialectWords?: DialectWord[];
  urbanVariant?: LocationVariant;
  ruralVariant?: LocationVariant;
  keyScripture?: string;
  memoryVerse?: string;
  prayer?: string;
  bibleTopic?: string;
  isFeatured?: boolean;
  cambridgeAlignment?: CambridgeAlignment;
  usCurriculumAlignment?: UsCurriculumAlignment;
  animatedVideo?: AnimatedLessonVideo;
  sequenceOrder?: number;
  prerequisiteTopic?: string;
  dayOfYear?: number;
  integratedSubjectConnection?: IntegratedSubjectConnection;
}

export interface IntegratedSubjectConnection {
  integratedSubject: string;
  connectionTitle: string;
  concept: string;
  practicePrompt: string;
  calculationOrFormula?: string;
}

export interface AnimatedVideoVisualElement {
  label: string;
  icon?: string;
  actionDescription: string;
  highlightColor?: string;
}

export interface AnimatedVideoScene {
  id: number;
  chapterNumber: number; // 1 to 4
  title: string;
  startSec: number;
  endSec: number;
  durationSec: number;
  visualType: 'concept-hook' | 'mechanism-diagram' | 'experiment-demo' | 'impact-mastery';
  narration: string;
  caption: string;
  diagramTitle: string;
  keyVisualConcept: string;
  visualElements: AnimatedVideoVisualElement[];
  interactivePrompt?: string;
  soundCue?: string;
}

export interface AnimatedLessonVideo {
  durationSeconds: number; // Exactly 90 seconds
  videoTitle: string;
  topicSummary: string;
  themeCategory: string; // 'science' | 'math' | 'biology' | 'technology' | 'manufacturing' | 'society' | 'universal'
  scenes: AnimatedVideoScene[];
  keyFormulaOrLaw?: string;
  practicalTakeaway: string;
}

export interface CambridgeAlignment {
  pathwayStage: 'Cambridge Early Years' | 'Cambridge Primary' | 'Cambridge Lower Secondary' | 'Cambridge Upper Secondary (IGCSE)' | 'Cambridge Advanced (AS & A Level)';
  stageNumber?: string; // e.g. "Early Years 1-3", "Primary Stage 1-6", "Lower Secondary Stage 7-9", "IGCSE (Grades 9-10)", "AS & A Level (Grades 11-12)"
  subject: string; // e.g. "Cambridge Primary Mathematics", "Cambridge IGCSE Enterprise", "Cambridge Lower Secondary Science"
  syllabusCode?: string; // e.g. "0096", "0846", "0580", "0610", "0457", "0454", "0478"
  learningObjectiveCode?: string; // e.g. "4Nn.02", "7Es.01", "IGCSE-0454-AO1"
  cambridgeObjectiveTitle: string;
  internationalEquivalents?: {
    ibProgramme?: string; // e.g. "IB PYP (Primary Years)", "IB MYP (Middle Years)", "IB DP"
    ukNationalCurriculum?: string; // e.g. "UK Key Stage 1-4 / GCSE"
    usK12Curriculum?: string; // e.g. "US Common Core (CCSS.MATH.3.NF.A.1) / NGSS / AP"
  };
}

export interface UsCurriculumAlignment {
  gradeLevel: string; // e.g. "Pre-K & Kindergarten", "Grade 1-2", "Grade 3-5 (Elementary)", "Grade 6-8 (Middle School)", "Grade 9-10 (High School)", "Grade 11-12 (AP & College Prep)"
  gradeNumber: string; // e.g. "Grade K", "Grade 2", "Grade 4", "Grade 7", "Grade 10", "Grade 12"
  standardsFramework: 'Common Core Math (CCSS.MATH)' | 'Common Core ELA (CCSS.ELA)' | 'Next Generation Science Standards (NGSS)' | 'C3 Social Studies Framework' | 'National Financial Literacy Standards' | 'CSTA Computer Science' | 'National Health Education';
  standardCode: string; // e.g. "CCSS.MATH.CONTENT.3.NF.A.1", "NGSS 5-PS1-2", "CCSS.ELA-LITERACY.RL.K.1", "AP Bio Unit 3", "C3 Framework D2.Civ.2"
  standardTitle: string;
  domainCluster: string; // e.g. "Number & Operations—Fractions", "Structure and Properties of Matter", "Reading: Literature"
  highSchoolCreditCategory?: 'English Language Arts (4 credits)' | 'Mathematics (3-4 credits)' | 'Laboratory Science (3 credits)' | 'Social Studies / History (3 credits)' | 'Career & Technical Education (CTE)' | 'Financial Literacy / Life Skills';
  apSatEquivalent?: string; // e.g. "AP Biology / SAT Chemistry", "AP Calculus / SAT Math", "AP Microeconomics", "SAT Reading & Writing", "AP Environmental Science"
}

export type ChildGender = 'boy' | 'girl' | 'neutral';
export type ThemePreference = 'auto' | 'boy-blue' | 'girl-pink' | 'amber' | 'emerald' | 'blue' | 'indigo' | 'purple' | 'rose' | 'teal';

export interface PortfolioEvidenceItem {
  id: string;
  title: string;
  domain: string;
  type: 'writing' | 'artwork' | 'experiment' | 'project' | 'presentation' | 'research' | 'invention' | 'business-plan' | 'practical-work' | 'community-mission' | 'digital-creation';
  date: string;
  summary: string;
  masteryLevel: 1 | 2 | 3 | 4 | 5; // 1: Exposure, 2: Understanding, 3: Competence, 4: Application, 5: Creation
}

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  avatar: string;
  gender?: ChildGender;
  themePreference?: ThemePreference;
  location?: LocationType; // 'urban' | 'rural'
  locationName?: string; // e.g. "Kampala Central (Urban)" or "Mukono Shamba (Rural)"
  preferredDialect?: RegionalDialect;
  completedLessonIds: string[];
  stampedCompetencies: {
    badgeName: string;
    lessonTitle: string;
    date: string;
    domain?: string;
    masteryLevel?: 1 | 2 | 3 | 4 | 5;
  }[];
  completedCommunityMissions?: {
    missionTitle: string;
    lessonTitle: string;
    date: string;
    impactSummary: string;
  }[];
  portfolioItems?: PortfolioEvidenceItem[];
  streakDays: number;
  totalMinutes: number;
  todayMinutes?: number;
}

