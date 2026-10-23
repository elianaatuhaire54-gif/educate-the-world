/**
 * UNESCO 2019 RECOMMENDATION ON OPEN EDUCATIONAL RESOURCES (OER)
 * Official Framework, 5 Action Areas, 5R Permissions & Inclusive Accessibility
 * Adopted unanimously by 193 Member States at the 40th General Conference (Nov 2019)
 */

export interface UnescoActionArea {
  id: string;
  number: number;
  title: string;
  shortName: string;
  badge: string;
  icon: string;
  officialObjective: string;
  howWeImplement: string[];
  keyIndicators: string[];
  sdgAlignment: string;
}

export interface Unesco5RPermission {
  id: 'retain' | 'reuse' | 'revise' | 'remix' | 'redistribute';
  verb: string;
  title: string;
  icon: string;
  legalRight: string;
  description: string;
  howLearnersUseIt: string;
  classroomApplication: string;
}

export interface UnescoLicenseInfo {
  code: string;
  name: string;
  badge: string;
  summary: string;
  permitted5R: ('retain' | 'reuse' | 'revise' | 'remix' | 'redistribute')[];
  commercialAllowed: boolean;
  attributionRequired: boolean;
  shareAlikeRequired: boolean;
}

export const UNESCO_OER_ACTION_AREAS: UnescoActionArea[] = [
  {
    id: 'action-area-1',
    number: 1,
    title: 'Building the Capacity of Stakeholders to Create, Access, Re-use, Adapt and Redistribute OER',
    shortName: 'Capacity Building & Educator Agency',
    badge: 'Area 1: Capacity Building',
    icon: '🌱',
    officialObjective: 'Equip educators, learners, parents, curriculum planners, and librarians with the competencies to identify, create, evaluate, adapt, and openly license high-quality educational materials.',
    howWeImplement: [
      'Self-directed autodidact learning roadmaps and parent co-teaching guides for all 365 daily lessons',
      'In-app "Adapt & Remix Studio" enabling teachers to customize lessons and produce localized worksheets',
      'Clear, practical instruction on Creative Commons licensing, intellectual property ethics, and attribution standards',
      'Child autonomy modes ("I Learn by Myself!" vs "With Parent Guide") developing lifelong independent inquiry'
    ],
    keyIndicators: [
      '100% of lessons include explicit parent/educator facilitation prompts and answers',
      'Interactive teacher training rubrics built into every mock exam and worksheet',
      'Zero technical prerequisites: usable by non-technical parents and volunteer village tutors'
    ],
    sdgAlignment: 'SDG 4.c: Substantially increase the supply of qualified teachers and educator pedagogical capability'
  },
  {
    id: 'action-area-2',
    number: 2,
    title: 'Developing Supportive Policy Frameworks for Open Education',
    shortName: 'Supportive Policy & Open Licensing',
    badge: 'Area 2: Supportive Policy',
    icon: '📜',
    officialObjective: 'Encourage governments, educational authorities, and institutions to establish policies that mandate or incentivize publicly funded educational resources to be openly licensed under Creative Commons or equivalent frameworks.',
    howWeImplement: [
      'Universal CC BY 4.0 (Creative Commons Attribution) open licensing applied to all core curriculum content',
      'Ready-to-adopt institutional OER policy template for community schools, faith-based learning centers, and homeschooling cooperatives',
      'Zero paywalls, zero login restrictions, zero proprietary file formats, and zero subscription fees forever',
      'Direct compliance crosswalk with Cambridge International, US Common Core, IB, and African national standards'
    ],
    keyIndicators: [
      'Public domain and open access legal registry embedded directly in the app',
      'Explicit OER compliance statement on every printed sheet and export document',
      'Model institutional open education policy toolkit provided free for school administrators'
    ],
    sdgAlignment: 'SDG 4.1: Ensure all girls and boys complete free, equitable, and quality primary and secondary education'
  },
  {
    id: 'action-area-3',
    number: 3,
    title: 'Effective, Inclusive and Equitable Access to Quality OER',
    shortName: 'Inclusion, Equity & Offline Access',
    badge: 'Area 3: Inclusive & Equitable Access',
    icon: '🌍',
    officialObjective: 'Ensure OER is accessible to all learners regardless of gender, physical ability, geographical location, economic status, or language, with special focus on disadvantaged groups, remote communities, and learners with disabilities.',
    howWeImplement: [
      '100% Offline-first local operation: all books, worksheets, and exams work with zero internet connectivity',
      'Low-data mode and single-file HTML standalone downloads requiring zero cloud servers or mobile data',
      'Universal Design for Learning (UDL): multi-sensory text-to-speech audio narration for non-readers and visually impaired learners',
      'Mother-tongue & dialect inclusion: indigenous African dialects (Luganda, Runyankole, Swahili, etc.) integrated alongside global languages',
      'Dyslexia-friendly typography, high-contrast modes, and tactile domestic materials eliminating socioeconomic barriers'
    ],
    keyIndicators: [
      'Zero external web redirection or dependence on internet connectivity for core learning',
      'Dual urban and rural domestic setting toggles reflecting authentic lived realities',
      'Gender-inclusive curriculum empowering young girls in STEM, mechanics, and civic leadership'
    ],
    sdgAlignment: 'SDG 4.5: Eliminate gender disparities in education and ensure equal access for the vulnerable and disabled'
  },
  {
    id: 'action-area-4',
    number: 4,
    title: 'Nurturing the Creation of Sustainability Models for OER',
    shortName: 'Sustainable Open Ecosystems',
    badge: 'Area 4: Sustainability Models',
    icon: '🔄',
    officialObjective: 'Develop and share sustainable operational and funding models for OER that reduce public educational expenditure, stimulate local educational enterprise, and guarantee long-term maintenance of open learning assets.',
    howWeImplement: [
      'Decentralized grassroots sustainability: materials print easily on double-sided scrap paper or view on any low-cost phone',
      'Product Innovation & Manufacturing blueprints: turns academic lessons into real local income-generating micro-enterprises',
      'Zero recurring server infrastructure costs: self-contained single-page architecture operable from solar USB drives',
      'Community ownership: village elders, parents, and youth cooperatives co-maintain and redistribute learning packs'
    ],
    keyIndicators: [
      'No recurring licensing fees or proprietary software dependencies',
      'Integrated vocational skills: food preservation, clean water biosand filtration, and renewable energy repairs',
      'Measurable family livelihood impact through practical manufacturing enterprise capstones'
    ],
    sdgAlignment: 'SDG 4.4: Substantially increase the number of youth who have relevant skills for employment and entrepreneurship'
  },
  {
    id: 'action-area-5',
    number: 5,
    title: 'Promoting and Reinforcing International Cooperation',
    shortName: 'Global & Regional Cooperation',
    badge: 'Area 5: International Cooperation',
    icon: '🤝',
    officialObjective: 'Foster international, regional, and South-South collaboration to co-create, translate, and cross-share quality educational materials, avoiding wasteful duplication of efforts across nations.',
    howWeImplement: [
      'Unified international crosswalk synchronizing 7 global educational frameworks (Cambridge, USA, IB, China, Japan, Asia, Christian/Moral)',
      'World Languages Academy uniting 9 global linguistic traditions (Mandarin, Spanish, French, Hebrew, Greek, Latin, Arabic, Hindi, English)',
      'South-South knowledge exchange: centering African oral folktales, indigenous botany, and anti-colonial historiography (Achebe, Rodney, Kamkwamba)',
      'Open interoperable standards: exportable as standardized JSON, universal HTML5, and ISO-compliant printable PDF papers'
    ],
    keyIndicators: [
      'Full equivalence mapping between UK Key Stages, US K-12 grades, and African national examinations',
      'Multi-stakeholder peer-learning networks: parents, teachers, and students collaborating across borders',
      'Dynamic cross-cultural exchange bridging ancient classical wisdom with contemporary technological innovation'
    ],
    sdgAlignment: 'SDG 4.7 & SDG 17: Global citizenship education, cultural diversity, and global partnerships for sustainable development'
  }
];

export const UNESCO_5R_PERMISSIONS: Unesco5RPermission[] = [
  {
    id: 'retain',
    verb: 'Retain',
    title: 'The Right to Retain (Keep & Own)',
    icon: '💾',
    legalRight: 'Make, own, and control copies of the content forever.',
    description: 'You have complete legal freedom to download, duplicate, store, and manage your own permanent personal or institutional copies of all books, worksheets, exams, and curriculum guides.',
    howLearnersUseIt: 'Save complete offline HTML learning bundles to a USB drive, memory card, tablet, or home computer. The content will never expire or be locked behind a paywall.',
    classroomApplication: 'Schools and community libraries can burn CD-ROMs, copy flash drives, or print master binder sets for lifelong multi-year class use.'
  },
  {
    id: 'reuse',
    verb: 'Reuse',
    title: 'The Right to Reuse (Use Everywhere)',
    icon: '🏫',
    legalRight: 'Use the content in its unaltered form in an infinite variety of ways.',
    description: 'You have full legal permission to present, study, teach, screen, or distribute the material in homes, physical classrooms, community centers, study groups, faith centers, or public libraries.',
    howLearnersUseIt: 'Study the daily missions independently, teach a younger sibling at the kitchen table, or read classic literature around an evening community gathering.',
    classroomApplication: 'Teachers can project lessons on classroom chalkboards/screens or distribute worksheets to hundreds of students without paying licensing royalties.'
  },
  {
    id: 'revise',
    verb: 'Revise',
    title: 'The Right to Revise (Adapt & Translate)',
    icon: '✏️',
    legalRight: 'Adapt, adjust, modify, or translate the content to meet local needs.',
    description: 'You are legally empowered to translate texts into local mother-tongue dialects, substitute foreign currencies for local shillings/cedis/naira, or adapt agricultural examples to match local climate and crops.',
    howLearnersUseIt: 'Translate science and math explanations into mother-tongue home idioms (Luganda, Swahili, etc.) or replace unfamiliar objects with familiar village tools.',
    classroomApplication: 'Educators can modify reading levels for students with learning differences, add regional historical events, or shorten exercises for accelerated review.'
  },
  {
    id: 'remix',
    verb: 'Remix',
    title: 'The Right to Remix (Combine & Synthesize)',
    icon: '🎛️',
    legalRight: 'Combine original or revised content with other open resources to create something new.',
    description: 'You can blend our lessons with national curriculum syllabi, religious wisdom texts, local indigenous oral histories, or vocational workshop blueprints to craft a customized learning syllabus.',
    howLearnersUseIt: 'Combine a physics lesson on levers with a practical carpentry blueprint to design an improved agricultural cassava press.',
    classroomApplication: 'Curriculum developers can integrate these open modules into their district syllabus or homeschool cooperative course of study.'
  },
  {
    id: 'redistribute',
    verb: 'Redistribute',
    title: 'The Right to Redistribute (Share Freely)',
    icon: '📢',
    legalRight: 'Share copies of the original content, revisions, or remixes with others.',
    description: 'You are legally protected to give away copies to other families, print double-sided worksheets for neighboring villages, or upload bundles to community network drives without fear of copyright prosecution.',
    howLearnersUseIt: 'Pass printed worksheets to friends down the road, or beam offline packages via phone Bluetooth to peers without internet.',
    classroomApplication: 'Distribute complete term exam packets to partner schools across the region or print annual curriculum workbooks for rural community outreach.'
  }
];

export const UNESCO_OER_LICENSES: UnescoLicenseInfo[] = [
  {
    code: 'CC BY 4.0',
    name: 'Creative Commons Attribution 4.0 International',
    badge: '🔓 CC BY 4.0',
    summary: 'The gold standard open license recommended by UNESCO. Grants all 5R permissions. You may share and adapt the material for any purpose, even commercially, as long as you provide appropriate attribution.',
    permitted5R: ['retain', 'reuse', 'revise', 'remix', 'redistribute'],
    commercialAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: false
  },
  {
    code: 'CC BY-SA 4.0',
    name: 'Creative Commons Attribution-ShareAlike 4.0 International',
    badge: '🔄 CC BY-SA 4.0',
    summary: 'Grants all 5R permissions with the viral share-alike provision: any adaptation or remix must be redistributed under the exact same open terms, guaranteeing the commons remains perpetually open.',
    permitted5R: ['retain', 'reuse', 'revise', 'remix', 'redistribute'],
    commercialAllowed: true,
    attributionRequired: true,
    shareAlikeRequired: true
  },
  {
    code: 'CC0 / Public Domain',
    name: 'Creative Commons Universal Public Domain Dedication',
    badge: '🕊️ CC0 / Public Domain',
    summary: 'Dedicates the work to the worldwide public domain without copyright restrictions. All 5R permissions granted unconditionally without mandatory attribution.',
    permitted5R: ['retain', 'reuse', 'revise', 'remix', 'redistribute'],
    commercialAllowed: true,
    attributionRequired: false,
    shareAlikeRequired: false
  }
];

export interface UnescoOerChecklistItem {
  category: string;
  criterion: string;
  status: 'compliant' | 'exceeds';
  description: string;
  evidenceInApp: string;
}

export const UNESCO_OER_COMPLIANCE_AUDIT: UnescoOerChecklistItem[] = [
  {
    category: 'Open Licensing (Recommendation Para 11)',
    criterion: 'All core educational materials are openly licensed under standard Creative Commons or Public Domain terms.',
    status: 'compliant',
    description: 'Every lesson, worksheet, book excerpt, and mock exam paper carries explicit CC BY 4.0 open licensing terms.',
    evidenceInApp: 'Visible 5R Open License badges and metadata in LessonModal, LocalBookReader, and OfflinePackModal.'
  },
  {
    category: 'Universal Accessibility (Recommendation Para 13)',
    criterion: 'Materials are accessible to all learners including those in remote areas and those with sensory differences.',
    status: 'exceeds',
    description: 'Zero internet required: 100% offline operational e-reader, speech audio synthesis, and printable physical papers.',
    evidenceInApp: 'Offline E-Reader with TTS, high-contrast and dyslexia reading modes, low-bandwidth data-saver architecture.'
  },
  {
    category: 'Mother-Tongue & Linguistic Diversity (Recommendation Para 14)',
    criterion: 'OER supports mother-tongue education and regional linguistic heritage alongside major international languages.',
    status: 'exceeds',
    description: 'Supports Ugandan/East African indigenous dialects (Luganda, Runyankole, Swahili) plus 9 World Languages.',
    evidenceInApp: 'Dialect switcher and World Languages Academy built directly into the core curriculum.'
  },
  {
    category: 'Non-Commercial & Public Good (Recommendation Para 15)',
    criterion: 'Educational resources are provided free of cost without subscription barriers or hidden paywalls.',
    status: 'compliant',
    description: 'No advertisements, no subscriptions, no user surveillance, and zero monetization barriers.',
    evidenceInApp: '100% free offline learning accessible to any child on Earth with zero financial barrier.'
  },
  {
    category: 'Quality & Rigor (Recommendation Para 12)',
    criterion: 'OER content meets recognized pedagogical standards and international educational benchmarks.',
    status: 'compliant',
    description: 'Fully cross-aligned with Cambridge CAIE, US Common Core/AP, International Baccalaureate (IB), and UN SDGs.',
    evidenceInApp: 'Unified curricula crosswalk with systematic prerequisites and Cambridge/US benchmark exams.'
  }
];

/**
 * Pre-baked sample lesson adaptations demonstrating UNESCO Revise & Remix capabilities
 */
export interface LocalAdaptationPreset {
  id: string;
  name: string;
  regionContext: string;
  dialectKeywords: { standardEnglish: string; localDialect: string; explanation: string }[];
  householdItemsSubstitutes: { originalItem: string; localSubstitute: string }[];
  adaptedStoryContext: string;
}

export const SAMPLE_OER_ADAPTATIONS: LocalAdaptationPreset[] = [
  {
    id: 'adaptation-east-africa-rural',
    name: 'East African Agrarian Homestead (Uganda / Kenya / Tanzania)',
    regionContext: 'Rural smallholder agrarian community with rainfed agriculture and banana/maize gardens.',
    dialectKeywords: [
      { standardEnglish: 'Garden', localDialect: 'Olusuku (Luganda) / Shamba (Swahili)', explanation: 'Family agricultural plot with bananas and greens' },
      { standardEnglish: 'Water container', localDialect: 'Jerrycan / Ensumbi', explanation: 'Standard 20-liter yellow plastic container or clay pot' },
      { standardEnglish: 'Community gathering', localDialect: 'Bulungi Bwansi (Luganda) / Harambee (Swahili)', explanation: 'Voluntary collective community improvement labor' }
    ],
    householdItemsSubstitutes: [
      { originalItem: 'Measuring tape', localSubstitute: 'Knotted sisal string or 1-meter walking stick' },
      { originalItem: 'Laboratory beaker', localSubstitute: 'Cut-off clean plastic water bottle' },
      { originalItem: 'Digital scale', localSubstitute: 'Equal-arm coat hanger balance with stone counterweights' }
    ],
    adaptedStoryContext: 'Frame stories around market day trade, tending matooke and maize shoots, fetching water from protected valley springs, and evening fireside storytelling.'
  },
  {
    id: 'adaptation-urban-african-city',
    name: 'Sub-Saharan Urban Commercial Center (Kampala / Nairobi / Lagos)',
    regionContext: 'High-density urban market, transport hubs, trading kiosks, and artisan workshops.',
    dialectKeywords: [
      { standardEnglish: 'Trading stall', localDialect: 'Duuka / Kiosk', explanation: 'Small family neighborhood retail shop' },
      { standardEnglish: 'Public transport', localDialect: 'Matatu / Taxi / Boda-Boda', explanation: 'Motorcycle taxi or shared minibus transport' },
      { standardEnglish: 'Metal artisan', localDialect: 'Jua Kali (Swahili)', explanation: 'Grassroots roadside informal fabricator and mechanic' }
    ],
    householdItemsSubstitutes: [
      { originalItem: 'Clean gravel', localSubstitute: 'Crushed quarry stones from construction site' },
      { originalItem: 'Timer / Stop-clock', localSubstitute: 'Standard phone feature-phone clock' },
      { originalItem: 'Insulated wire', localSubstitute: 'Salvaged telephone or speaker cable from repair shop' }
    ],
    adaptedStoryContext: 'Frame stories around small shop bookkeeping, solar inverter battery maintenance, street drainage stewardship, and urban recycling entrepreneurship.'
  },
  {
    id: 'adaptation-global-home-academy',
    name: 'Global Independent Home & Micro-School Setting',
    regionContext: 'Homeschooling family, cooperative micro-school, or rural village self-help library anywhere in the world.',
    dialectKeywords: [
      { standardEnglish: 'Teacher', localDialect: 'Mentor / Parent Facilitator', explanation: 'Adult or elder providing encouragement and moral guidance' },
      { standardEnglish: 'Classroom', localDialect: 'Study Nook / Kitchen Table / Shaded Tree', explanation: 'Any peaceful physical space dedicated to focus and reflection' },
      { standardEnglish: 'Homework', localDialect: 'Family Practice & Community Mission', explanation: 'Applying principles directly to daily household living' }
    ],
    householdItemsSubstitutes: [
      { originalItem: 'Specialized lab kit', localSubstitute: 'Standard kitchen utensils, salt, vinegar, cooking oil' },
      { originalItem: 'Chalkboard', localSubstitute: 'Slated board, sidewalk chalk, or sand writing tray' },
      { originalItem: 'Commercial textbook', localSubstitute: 'Bound printed copies of offline OER student worksheets' }
    ],
    adaptedStoryContext: 'Frame learning around autonomous inquiry, intergenerational family dialogue, and real-world domestic mastery.'
  }
];
