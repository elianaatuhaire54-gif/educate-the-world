/**
 * EDUCATE THE WORLD INITIATIVE
 * RECOMMENDED BOOKS, AUTHORS & RESOURCE CENTERS DIRECTORY
 * Categorized for all ages (Ages 3–18+) across ALL 10 Curricular Domains
 * Features complete resources for every subject + The Holy Bible (NLT & The Message)
 */

import { AgeBand } from '../types/curriculum';

export interface RecommendedBook {
  id: string;
  title: string;
  author: string;
  authorCountry: string;
  ageBand: AgeBand;
  ageLabel: string;
  category: 'literature' | 'science' | 'mathematics' | 'history-society' | 'finance-leadership' | 'character-faith' | 'practical-tech';
  categoryLabel: string;
  coverEmoji: string;
  summary: string;
  keyTakeaway: string;
  cambridgeStageAlignment: string; // e.g. "Cambridge Primary Stage 2", "Cambridge IGCSE Literature 0475"
  openAccessUrl?: string; // Link to Project Gutenberg, African Storybook, Open Library, Bible Gateway, etc.
  openAccessType?: 'Free Digital Ebook' | 'Open Access Archive' | 'Public Domain Classic' | 'Library Essential' | 'Free Online Scripture';
  versionTag?: string; // e.g. "New Living Translation (NLT)", "The Message (MSG)", "Parallel Edition"
}

export interface FeaturedAuthor {
  id: string;
  name: string;
  heritage: string;
  lifespan: string;
  avatar: string;
  domains: string[];
  signatureWorks: string[];
  philosophicalImpact: string;
  quote: string;
  recommendedForAges: string;
}

export type ResourceSubjectId = 
  | 'all'
  | 'language'
  | 'math'
  | 'science'
  | 'technology'
  | 'humanity-society'
  | 'finance'
  | 'wellbeing'
  | 'practical-skills'
  | 'arts-culture'
  | 'food-water-energy'
  | 'character-faith'
  | 'community-libraries';

export interface ResourceSubjectInfo {
  id: ResourceSubjectId;
  label: string;
  emoji: string;
  domainNumber?: number;
  description: string;
}

export const RESOURCE_SUBJECTS: ResourceSubjectInfo[] = [
  { id: 'all', label: 'All Subjects', emoji: '🌟', description: 'Comprehensive directory of free open learning centers across every discipline' },
  { id: 'language', label: '1. Language & Communication', emoji: '📖', domainNumber: 1, description: 'Mother-tongue storybooks, phonics, grammar, rhetoric, literature & classics' },
  { id: 'math', label: '2. Mathematics & Logic', emoji: '🔢', domainNumber: 2, description: 'Mastery counting, mental arithmetic, algebra, geometry, statistics & calculus' },
  { id: 'science', label: '3. Science & Inquiry', emoji: '🔬', domainNumber: 3, description: 'Physics, chemistry, biology, virtual laboratories & earth/astronomy sciences' },
  { id: 'technology', label: '4. Technology & Digital', emoji: '💻', domainNumber: 4, description: 'Creative coding, computer science, algorithms, AI fundamentals & cybersecurity' },
  { id: 'humanity-society', label: '5. Humanity, Society & World', emoji: '🌍', domainNumber: 5, description: 'World & African history, physical/human geography, civics & global development' },
  { id: 'finance', label: '6. Financial Literacy & Enterprise', emoji: '💰', domainNumber: 6, description: 'Budgeting, business plans, savings, entrepreneurship, trade & investment' },
  { id: 'wellbeing', label: '7. Development & Wellbeing', emoji: '💖', domainNumber: 7, description: 'Emotional regulation, physical health, character formation & leadership' },
  { id: 'practical-skills', label: '8. Practical Skills & Work', emoji: '🛠️', domainNumber: 8, description: 'Agriculture, carpentry, mechanics, electronics repair, cooking & design' },
  { id: 'arts-culture', label: '9. Arts, Culture & Expression', emoji: '🎨', domainNumber: 9, description: 'Visual arts, museum open archives, music labs, drama & African heritage' },
  { id: 'food-water-energy', label: '10. Food, Water & Energy Capstones', emoji: '⚡', domainNumber: 10, description: 'Clean water biosystems, renewable solar/wind, agroecology & capstone models' },
  { id: 'character-faith', label: 'Faith, Scriptures & The Bible (NLT / MSG)', emoji: '✝️', description: 'The Holy Bible (New Living Translation & The Message), biblical theology, ethics & wisdom' },
  { id: 'community-libraries', label: 'Physical Libraries & Public Hubs', emoji: '🏛️', description: 'National and regional public library reading rooms, exam archives & lending hubs' },
];

export interface ResourceCenter {
  id: string;
  name: string;
  subjectId: ResourceSubjectId;
  subjectLabel: string;
  subjectEmoji: string;
  type: 'digital-library' | 'interactive-lab' | 'open-textbook' | 'african-initiative' | 'community-hub' | 'scripture-portal';
  typeLabel: string;
  accessUrl: string;
  isFree: boolean;
  offlineCapable: boolean;
  ageBands: AgeBand[];
  description: string;
  keyFeatures: string[];
  cambridgeAlignment?: string;
  physicalLocationsNotes?: string;
}

export const RECOMMENDED_BOOKS: RecommendedBook[] = [
  // ==========================================
  // AGES 3–5: DISCOVER
  // ==========================================
  {
    id: 'book-3-5-handa',
    title: "Handa's Surprise",
    author: 'Eileen Browne',
    authorCountry: 'United Kingdom / Kenya Context',
    ageBand: '3-5',
    ageLabel: 'Ages 3–5 (Discover)',
    category: 'literature',
    categoryLabel: 'Storytelling & Observation',
    coverEmoji: '🧺',
    summary: 'Handa puts seven delicious fruits in a basket to surprise her friend Akeyo in the neighbouring village, while mischievous animals sneak the fruits along the way.',
    keyTakeaway: 'Observation of African tropical fruits (passion fruit, mango, avocado, guava), animal habits, and joyful friendship.',
    cambridgeStageAlignment: 'Cambridge Early Years (EY-CLL Communication, Language & Literacy)',
    openAccessUrl: 'https://openlibrary.org/works/OL1869894W/Handa%27s_Surprise',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-3-5-jesus-storybook-bible',
    title: 'The Jesus Storybook Bible: Every Story Whispers His Name',
    author: 'Sally Lloyd-Jones & Jago (Based on NLT & Historic Scriptures)',
    authorCountry: 'United Kingdom / United States',
    ageBand: '3-5',
    ageLabel: 'Ages 3–5 (Discover)',
    category: 'character-faith',
    categoryLabel: 'Scripture, Faith & Moral Wisdom',
    coverEmoji: '🕊️',
    summary: 'From the wonder of Creation and Noah’s Ark to the Good Shepherd and the Resurrection, this beloved book reveals the Bible not as a rulebook, but as God’s Great Love Story.',
    keyTakeaway: 'Unconditional love, forgiveness, wonder at creation, and caring for others as beloved children of God.',
    cambridgeStageAlignment: 'Cambridge Early Years (Personal, Social & Emotional Development & Moral Literacy)',
    openAccessUrl: 'https://www.biblegateway.com/passage/?search=Genesis+1&version=NLT',
    openAccessType: 'Free Online Scripture',
    versionTag: 'New Living Translation (NLT Foundation)'
  },
  {
    id: 'book-3-5-tortoise-wisdom',
    title: 'The Great Tortoise and the Calabash of Wisdom & Other Tales',
    author: 'Traditional Oral Folktales (Curated by Chinua Achebe & Folk Griots)',
    authorCountry: 'Pan-African Oral Tradition',
    ageBand: '3-5',
    ageLabel: 'Ages 3–5 (Discover)',
    category: 'character-faith',
    categoryLabel: 'Moral Wisdom & Oral Tradition',
    coverEmoji: '🐢',
    summary: 'The classic story of Ijapa/Tortoise who tried to hoard all the wisdom of the world in a clay calabash, only to discover wisdom is shared across the entire community.',
    keyTakeaway: 'Humility, sharing knowledge, and respect for elders and neighbours.',
    cambridgeStageAlignment: 'Cambridge Early Years (Personal, Social & Emotional Development)',
    openAccessUrl: 'https://africanstorybook.org/',
    openAccessType: 'Open Access Archive'
  },
  {
    id: 'book-3-5-caterpillar',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle',
    authorCountry: 'United States',
    ageBand: '3-5',
    ageLabel: 'Ages 3–5 (Discover)',
    category: 'science',
    categoryLabel: 'Nature & Metamorphosis',
    coverEmoji: '🐛',
    summary: 'A tiny caterpillar hatches from an egg, eats his way through nutritious fruit and treats across the days of the week, builds a cocoon, and emerges as a vibrant butterfly.',
    keyTakeaway: 'The life cycle of butterflies, days of the week, counting 1 to 5, and healthy eating.',
    cambridgeStageAlignment: 'Cambridge Early Years (Understanding the World & Mathematics)',
    openAccessUrl: 'https://openlibrary.org/books/OL7353683M/The_Very_Hungry_Caterpillar',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-3-5-counting-seeds',
    title: 'One Child, One Seed: A South African Counting Book',
    author: 'Kathryn Cave & Gisele Wulfsohn',
    authorCountry: 'South Africa',
    ageBand: '3-5',
    ageLabel: 'Ages 3–5 (Discover)',
    category: 'mathematics',
    categoryLabel: 'Counting & Agriculture',
    coverEmoji: '🌽',
    summary: 'Ntobeko plants a single pumpkin seed in his garden. As the plant grows, readers count objects from 1 to 10 in his vibrant rural homestead.',
    keyTakeaway: 'One-to-one number correspondence, patience in cultivation, and community meal sharing.',
    cambridgeStageAlignment: 'Cambridge Early Years Mathematics (Counting & Patterns)',
    openAccessUrl: 'https://bookdash.org/',
    openAccessType: 'Free Digital Ebook'
  },

  // ==========================================
  // AGES 6–8: EXPLORE
  // ==========================================
  {
    id: 'book-6-8-hands-on-bible-nlt',
    title: 'The Hands-On Bible: New Living Translation (NLT)',
    author: 'Tyndale House Scholars (Holy Bible NLT Edition)',
    authorCountry: 'International Biblical Scholarship',
    ageBand: '6-8',
    ageLabel: 'Ages 6–8 (Explore)',
    category: 'character-faith',
    categoryLabel: 'Scripture & Hands-On Life Application',
    coverEmoji: '📖',
    summary: 'The clear, living text of the Holy Bible in the New Living Translation (NLT), enriched with interactive home activities, character bios, and practical experiments that make biblical wisdom tangible.',
    keyTakeaway: 'Compassion (The Good Samaritan), honesty, the Golden Rule, and practicing love through daily family service.',
    cambridgeStageAlignment: 'Cambridge Primary Global Perspectives & Moral Education (0838 Values & Action)',
    openAccessUrl: 'https://www.biblegateway.com/versions/New-Living-Translation-NLT-Bible/',
    openAccessType: 'Free Online Scripture',
    versionTag: 'New Living Translation (NLT)'
  },
  {
    id: 'book-6-8-charlottes-web',
    title: "Charlotte's Web",
    author: 'E.B. White',
    authorCountry: 'United States',
    ageBand: '6-8',
    ageLabel: 'Ages 6–8 (Explore)',
    category: 'literature',
    categoryLabel: 'Classic Children’s Literature',
    coverEmoji: '🕸️',
    summary: 'The tender story of Wilbur the pig and Charlotte, a wise barn spider who saves his life by weaving magnificent words into her web praising his character.',
    keyTakeaway: 'Selfless friendship, animal biology, compassion for the vulnerable, and the transformative power of words.',
    cambridgeStageAlignment: 'Cambridge Primary English Stage 3 (0058 Reading Fluency & Themes)',
    openAccessUrl: 'https://openlibrary.org/works/OL483391W/Charlotte%27s_Web',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-6-8-chike-river',
    title: 'Chike and the River',
    author: 'Chinua Achebe',
    authorCountry: 'Nigeria',
    ageBand: '6-8',
    ageLabel: 'Ages 6–8 (Explore)',
    category: 'literature',
    categoryLabel: 'Adventure & Moral Character',
    coverEmoji: '🌊',
    summary: 'Eleven-year-old Chike moves from his quiet village of Umuofia to the bustling river town of Onitsha, yearning to cross the majestic River Niger to Asaba.',
    keyTakeaway: 'Curiosity, avoiding dishonest peer pressure, saving small coins, and courageous integrity.',
    cambridgeStageAlignment: 'Cambridge Primary English Stage 3 & Global Perspectives (0058/0838)',
    openAccessUrl: 'https://openlibrary.org/works/OL15849887W/Chike_and_the_River',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-6-8-parables-in-the-message',
    title: 'The Stories Jesus Told: Parables from The Message (MSG)',
    author: 'Eugene H. Peterson (The Message Translation)',
    authorCountry: 'United States / Global',
    ageBand: '6-8',
    ageLabel: 'Ages 6–8 (Explore)',
    category: 'character-faith',
    categoryLabel: 'Living Parables & Modern Language',
    coverEmoji: '🌾',
    summary: 'The parables of the Prodigal Son, the Sower and the Seeds, the Mustard Seed, and the Talents rendered in Eugene Peterson’s warm, contemporary, story-driven prose.',
    keyTakeaway: 'Forgiveness when someone makes a mistake, faithful stewardship of small gifts, and persistent kindness.',
    cambridgeStageAlignment: 'Cambridge Primary English Stage 3 (0058 Comprehension & Narrative)',
    openAccessUrl: 'https://www.biblegateway.com/passage/?search=Luke+15&version=MSG',
    openAccessType: 'Free Online Scripture',
    versionTag: 'The Message (MSG)'
  },
  {
    id: 'book-6-8-magic-school-bus-water',
    title: 'The Magic School Bus: At the Waterworks',
    author: 'Joanna Cole & Bruce Degen',
    authorCountry: 'United States',
    ageBand: '6-8',
    ageLabel: 'Ages 6–8 (Explore)',
    category: 'science',
    categoryLabel: 'Earth Science & Water Cycle',
    coverEmoji: '🚌',
    summary: 'Ms. Frizzle takes her class inside a rain cloud and down through city water purification pipes, following water as it evaporates, condenses, filters, and reaches kitchen taps.',
    keyTakeaway: 'Evaporation, precipitation, filtration, chlorine disinfection, and conservation of clean water.',
    cambridgeStageAlignment: 'Cambridge Primary Science Stage 2 & 3 (0097 Earth & States of Matter)',
    openAccessUrl: 'https://openlibrary.org/works/OL15354921W/The_Magic_School_Bus_at_the_Waterworks',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-6-8-one-hen',
    title: 'One Hen: How One Small Loan Made a Big Difference',
    author: 'Katie Smith Milway',
    authorCountry: 'Canada / Ghana Context (Inspired by Kwabena Darko)',
    ageBand: '6-8',
    ageLabel: 'Ages 6–8 (Explore)',
    category: 'finance-leadership',
    categoryLabel: 'Micro-Enterprise & Savings',
    coverEmoji: '🐔',
    summary: 'Kojo, a young boy in Ghana, receives a small loan to buy one brown hen. By selling eggs, saving profits, and reinvesting, he builds the largest poultry farm in West Africa.',
    keyTakeaway: 'Needs vs wants, compounding savings, micro-loans, job creation, and lifting an entire village from poverty.',
    cambridgeStageAlignment: 'Cambridge Primary Global Perspectives & Math (0838 Money & Enterprise)',
    openAccessUrl: 'https://openlibrary.org/works/OL15183424W/One_Hen',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-6-8-boy-harnessed-wind-young',
    title: 'The Boy Who Harnessed the Wind (Picture Book Edition)',
    author: 'William Kamkwamba & Bryan Mealer',
    authorCountry: 'Malawi',
    ageBand: '6-8',
    ageLabel: 'Ages 6–8 (Explore)',
    category: 'practical-tech',
    categoryLabel: 'Practical Innovation & Physics',
    coverEmoji: '💨',
    summary: 'Faced with drought in his village of Wimbe, 14-year-old William studies old science books in a library, gathers bicycle parts and scrap metal, and builds a wind turbine to pump water and power lights.',
    keyTakeaway: 'Resourcefulness with scrap materials, renewable energy, physics of wind generators, and perseverance.',
    cambridgeStageAlignment: 'Cambridge Primary Science Stage 3 (0097 Forces & Electricity)',
    openAccessUrl: 'https://openlibrary.org/works/OL17351608W/The_Boy_Who_Harnessed_the_Wind',
    openAccessType: 'Library Essential'
  },

  // ==========================================
  // AGES 9–11 / 9–12: UNDERSTAND
  // ==========================================
  {
    id: 'book-9-12-holy-bible-nlt',
    title: 'The Holy Bible: New Living Translation (NLT Study Edition)',
    author: 'Tyndale Translation Committee (90 Leading Biblical Scholars)',
    authorCountry: 'Global Biblical Scholarship',
    ageBand: '9-12',
    ageLabel: 'Ages 9–12 (Understand)',
    category: 'character-faith',
    categoryLabel: 'Scripture, Ancient History & Moral Code',
    coverEmoji: '✝️',
    summary: 'The complete Old and New Testaments in the authoritative New Living Translation. Combines accurate scholarship with natural, fluid English that makes the poetry of the Psalms, the logic of Proverbs, and the life of Christ deeply understandable.',
    keyTakeaway: 'The foundational Ten Commandments, biblical justice for the poor, the wisdom of Proverbs in friendships and finance, and the beatitudes of peace.',
    cambridgeStageAlignment: 'Cambridge Primary & Lower Secondary Religious Studies & Global Perspectives (0490/0838)',
    openAccessUrl: 'https://www.biblegateway.com/passage/?search=Matthew+5-7&version=NLT',
    openAccessType: 'Free Online Scripture',
    versionTag: 'New Living Translation (NLT)'
  },
  {
    id: 'book-9-12-lion-witch-wardrobe',
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    authorCountry: 'United Kingdom',
    ageBand: '9-12',
    ageLabel: 'Ages 9–12 (Understand)',
    category: 'literature',
    categoryLabel: 'Allegory, Courage & Redemption',
    coverEmoji: '🦁',
    summary: 'Four siblings step through a magic wardrobe into the frozen land of Narnia, trapped under the White Witch’s spell, and ally with the Great Lion Aslan to liberate the realm.',
    keyTakeaway: 'Sacrificial courage, the danger of treachery (Turkish delight), true kingship as service, and literary allegory.',
    cambridgeStageAlignment: 'Cambridge Primary English Stage 6 Checkpoint (0058 Literature Interpretation)',
    openAccessUrl: 'https://openlibrary.org/works/OL71120W/The_Lion_the_Witch_and_the_Wardrobe',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-9-12-psalms-proverbs-msg',
    title: 'Praying the Psalms & Living Proverbs from The Message (MSG)',
    author: 'Eugene H. Peterson (The Message Translation)',
    authorCountry: 'United States',
    ageBand: '9-12',
    ageLabel: 'Ages 9–12 (Understand)',
    category: 'character-faith',
    categoryLabel: 'Poetry, Emotional Health & Practical Wisdom',
    coverEmoji: '📜',
    summary: 'Eugene Peterson’s masterful, raw, and vibrant translation of the Hebrew Psalms and the book of Proverbs, giving children heartfelt words to express joy, fear, gratitude, and moral discernment in today’s language.',
    keyTakeaway: 'Honesty before God in sadness and triumph (emotional regulation), choosing wise friends, avoiding deceitful traps, and cultivating humility.',
    cambridgeStageAlignment: 'Cambridge Lower Secondary English & Literature (0861 Poetic Forms & Analysis)',
    openAccessUrl: 'https://www.biblegateway.com/passage/?search=Psalm+23%2CProverbs+3&version=MSG',
    openAccessType: 'Free Online Scripture',
    versionTag: 'The Message (MSG)'
  },
  {
    id: 'book-9-12-number-devil',
    title: 'The Number Devil: A Mathematical Adventure',
    author: 'Hans Magnus Enzensberger & Rotraut Susanne Berner',
    authorCountry: 'Germany',
    ageBand: '9-12',
    ageLabel: 'Ages 9–12 (Understand)',
    category: 'mathematics',
    categoryLabel: 'Mathematical Logic & Patterns',
    coverEmoji: '😈',
    summary: 'Twelve-year-old Robert dreams of a quirky Number Devil who introduces him to prime numbers, Fibonacci sequences, infinite series, Pascal’s triangle, and combinatorial beauty.',
    keyTakeaway: 'Mathematics is not boring rote drills—it is an enchanting universe of repeating patterns, logic, and puzzles.',
    cambridgeStageAlignment: 'Cambridge Primary Mathematics Stage 5 & 6 (0096 Number Patterns & Logic)',
    openAccessUrl: 'https://openlibrary.org/works/OL15849925W/The_Number_Devil',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-9-12-georges-secret-universe',
    title: "George's Secret Key to the Universe",
    author: 'Lucy & Stephen Hawking',
    authorCountry: 'United Kingdom',
    ageBand: '9-12',
    ageLabel: 'Ages 9–12 (Understand)',
    category: 'science',
    categoryLabel: 'Astrophysics & Space Science',
    coverEmoji: '🪐',
    summary: 'George and his scientist neighbor use Cosmos, a supercomputer that opens portals into outer space, riding comets through asteroid belts, exploring planets, and escaping a black hole.',
    keyTakeaway: 'Gravity, the laws of planetary motion, composition of stars and black holes, and the scientific method.',
    cambridgeStageAlignment: 'Cambridge Primary & Lower Secondary Science (0097/0893 Earth & Space)',
    openAccessUrl: 'https://openlibrary.org/works/OL15849930W/George%27s_Secret_Key_to_the_Universe',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-9-12-sundiata-epic',
    title: 'Sundiata: An Epic of Old Mali',
    author: 'D.T. Niane (Transcribed from Djeli Mamadou Kouyaté)',
    authorCountry: 'Guinea / Mali Empire',
    ageBand: '9-12',
    ageLabel: 'Ages 9–12 (Understand)',
    category: 'history-society',
    categoryLabel: 'African Civilizations & Leadership',
    coverEmoji: '👑',
    summary: 'The thrilling historical epic of Sundiata Keita, the disabled prince who overcame physical paralysis, exile, and sorcery to unite the Mandinka clans and found the wealthy Mali Empire in 1235 CE.',
    keyTakeaway: 'Overcoming disability through resilience, justice, indigenous West African constitutional democracy (Kouroukan Fouga), and oral history.',
    cambridgeStageAlignment: 'Cambridge Primary Global Perspectives & Humanities (0838 History)',
    openAccessUrl: 'https://openlibrary.org/works/OL2624441W/Sundiata',
    openAccessType: 'Library Essential'
  },

  // ==========================================
  // AGES 12–14 / 13–16: INVESTIGATE
  // ==========================================
  {
    id: 'book-13-16-the-message-bible',
    title: 'The Message: The Bible in Contemporary Language',
    author: 'Eugene H. Peterson (Complete Old & New Testaments)',
    authorCountry: 'United States',
    ageBand: '13-16',
    ageLabel: 'Ages 12–14 / 13–16 (Investigate)',
    category: 'character-faith',
    categoryLabel: 'Biblical Literature, Ethics & Contemporary Idiom',
    coverEmoji: '⚡',
    summary: 'Translating from the original Hebrew and Greek texts directly into the unvarnished cadence of modern English conversation, Eugene Peterson’s translation captures the pulse, raw emotion, and biting clarity of the prophets, the Gospels, and Paul’s letters.',
    keyTakeaway: 'The revolutionary ethics of Jesus (loving enemies, authentic humility over religious hypocrisy), the radical community of Acts, and courage in the face of pressure.',
    cambridgeStageAlignment: 'Cambridge IGCSE Religious Studies & Literature in English (0490 / 0475 Set Texts)',
    openAccessUrl: 'https://www.biblegateway.com/versions/Message-MSG-Bible/',
    openAccessType: 'Free Online Scripture',
    versionTag: 'The Message (MSG)'
  },
  {
    id: 'book-13-16-holy-bible-nlt-parallel',
    title: 'The Holy Bible: New Living Translation & The Message (Parallel Reader)',
    author: 'Tyndale & Eugene H. Peterson',
    authorCountry: 'International',
    ageBand: '13-16',
    ageLabel: 'Ages 12–14 / 13–16 (Investigate)',
    category: 'character-faith',
    categoryLabel: 'Comparative Hermeneutics & Moral Philosophy',
    coverEmoji: '🔍',
    summary: 'Side-by-side study comparing the precise clarity of the New Living Translation (NLT) with the fresh metaphorical resonance of The Message (MSG), examining the Wisdom books, the Sermon on the Mount, and the Epistle of James.',
    keyTakeaway: 'Comparing translation philosophies (formal vs dynamic equivalence), textual analysis, wrestling with justice, and living an authentic life of service.',
    cambridgeStageAlignment: 'Cambridge IGCSE & A Level Divinity / Philosophy (0490/9011 Hermeneutics)',
    openAccessUrl: 'https://www.biblegateway.com/',
    openAccessType: 'Free Online Scripture',
    versionTag: 'Parallel: NLT & The Message'
  },
  {
    id: 'book-13-16-animal-farm',
    title: 'Animal Farm',
    author: 'George Orwell',
    authorCountry: 'United Kingdom',
    ageBand: '13-16',
    ageLabel: 'Ages 12–14 / 13–16 (Investigate)',
    category: 'literature',
    categoryLabel: 'Political Satire & Media Literacy',
    coverEmoji: '🐖',
    summary: 'The animals of Manor Farm overthrow their cruel human master to build an egalitarian society, but the pigs gradually rewrite the rules until "all animals are equal, but some are more equal than others."',
    keyTakeaway: 'How propaganda corrupts language, spotting authoritarian manipulation, and defending civic freedom and accountability.',
    cambridgeStageAlignment: 'Cambridge Lower Secondary & IGCSE Literature in English (0861/0475)',
    openAccessUrl: 'https://www.gutenberg.org/ebooks/search/?query=orwell',
    openAccessType: 'Public Domain Classic'
  },
  {
    id: 'book-13-16-richest-man-babylon',
    title: 'The Richest Man in Babylon',
    author: 'George S. Clason',
    authorCountry: 'United States',
    ageBand: '13-16',
    ageLabel: 'Ages 12–14 / 13–16 (Investigate)',
    category: 'finance-leadership',
    categoryLabel: 'Financial Principles & Wealth Creation',
    coverEmoji: '🏺',
    summary: 'Set in ancient Babylon, this collection of parables teaches timeless personal finance laws: "Pay yourself first" (saving 10% of all earnings), living within means, investing in productive assets, and seeking expert counsel.',
    keyTakeaway: 'Compounding interest, emergency cushions, avoiding get-rich-quick scams, and building sustainable family prosperity.',
    cambridgeStageAlignment: 'Cambridge Lower Secondary Math & IGCSE Enterprise (0862/0454 Financial Math)',
    openAccessUrl: 'https://www.gutenberg.org/ebooks/71542',
    openAccessType: 'Public Domain Classic'
  },
  {
    id: 'book-13-16-feynman-six-easy-pieces',
    title: 'Six Easy Pieces: Essentials of Physics Explained by Its Most Brilliant Teacher',
    author: 'Richard P. Feynman',
    authorCountry: 'United States',
    ageBand: '13-16',
    ageLabel: 'Ages 12–14 / 13–16 (Investigate)',
    category: 'science',
    categoryLabel: 'Fundamental Physics & Atomic Theory',
    coverEmoji: '⚛️',
    summary: 'Nobel laureate Richard Feynman strips away intimidating jargon to explain atomic structure, conservation of energy, basic physics mechanics, and gravitation with exhilarating simplicity.',
    keyTakeaway: 'Everything is made of jiggling atoms, the scientific method requires testing all ideas against experiments, and intellectual honesty.',
    cambridgeStageAlignment: 'Cambridge Lower Secondary Science & IGCSE Physics (0893/0625 Mechanics)',
    openAccessUrl: 'https://www.feynmanlectures.caltech.edu/',
    openAccessType: 'Open Access Archive'
  },
  {
    id: 'book-13-16-weep-not-child',
    title: 'Weep Not, Child',
    author: "Ngũgĩ wa Thiong'o",
    authorCountry: 'Kenya',
    ageBand: '13-16',
    ageLabel: 'Ages 12–14 / 13–16 (Investigate)',
    category: 'history-society',
    categoryLabel: 'African History & Independence Movements',
    coverEmoji: '🌍',
    summary: 'The poignant coming-of-age story of young Njoroge during the Mau Mau emergency in colonial Kenya, exploring his family’s hunger for formal education amidst war, land dispossession, and moral turmoil.',
    keyTakeaway: 'The complex cost of colonialism, the power of education, family loyalty, and the historical struggle for African self-determination.',
    cambridgeStageAlignment: 'Cambridge IGCSE History & Global Perspectives (0470/0457 Politics & Human Rights)',
    openAccessUrl: 'https://openlibrary.org/works/OL15849935W/Weep_Not_Child',
    openAccessType: 'Library Essential'
  },

  // ==========================================
  // AGES 15–17 / 18+: CREATE & LAUNCH
  // ==========================================
  {
    id: 'book-17-holy-bible-wisdom-parallel',
    title: 'The Holy Bible: Proverbs, Ecclesiastes & Romans (NLT & The Message Parallel)',
    author: 'Tyndale & Eugene H. Peterson (Ancient Hebrew Sages & Paul)',
    authorCountry: 'Ancient Near East / Mediterranean Classical Antiquity',
    ageBand: '17+',
    ageLabel: 'Ages 15–17 / 18+ (Create & Launch)',
    category: 'character-faith',
    categoryLabel: 'Epistemology, Ethics, Governance & Grace',
    coverEmoji: '👑',
    summary: 'A deep philosophical exploration of the Hebrew wisdom books (Proverbs on cause-and-effect ethics; Ecclesiastes on the limits of wealth, power, and human knowledge; Job on innocent suffering) and Romans on justification, human rights, and transformative love—juxtaposing the NLT’s analytical precision with The Message’s fiery poetic vitality.',
    keyTakeaway: 'Humility in the face of human mortality, ethical stewardship of civic power, servant leadership, the distinction between transactional religion and transformative grace.',
    cambridgeStageAlignment: 'Cambridge International A Level Divinity & Philosophy (9011/9990 Moral Epistemology)',
    openAccessUrl: 'https://www.biblegateway.com/passage/?search=Romans+12%2CEcclesiastes+3&version=NLT;MSG',
    openAccessType: 'Free Online Scripture',
    versionTag: 'NLT & The Message Parallel'
  },
  {
    id: 'book-17-things-fall-apart',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    authorCountry: 'Nigeria',
    ageBand: '17+',
    ageLabel: 'Ages 15–17 / 18+ (Create & Launch)',
    category: 'literature',
    categoryLabel: 'African Masterwork & Classical Tragedy',
    coverEmoji: '🏺',
    summary: 'The magnum opus of African literature recounting the tragic story of Okonkwo, a proud Igbo warrior in Umuofia, whose rigid fear of weakness clashes with internal societal flaws and British colonial intrusion.',
    keyTakeaway: 'The nuance of pre-colonial African legal and spiritual systems, the psychological danger of toxic pride, and tragic flaws in human society.',
    cambridgeStageAlignment: 'Cambridge IGCSE & International A Level Literature in English (0475/9695 Set Text)',
    openAccessUrl: 'https://openlibrary.org/works/OL15849940W/Things_Fall_Apart',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-17-thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    authorCountry: 'Israel / United States (Nobel Memorial Prize in Economics)',
    ageBand: '17+',
    ageLabel: 'Ages 15–17 / 18+ (Create & Launch)',
    category: 'finance-leadership',
    categoryLabel: 'Cognitive Biases & Decision Science',
    coverEmoji: '🧠',
    summary: 'Kahneman explains the two systems that drive our mind: System 1 (fast, intuitive, emotional) and System 2 (slower, deliberate, logical), revealing common cognitive biases (loss aversion, framing effect, confirmation bias).',
    keyTakeaway: 'How to make sound business, financial, and ethical decisions by recognizing mental traps, overconfidence, and statistical illusions.',
    cambridgeStageAlignment: 'Cambridge International A Level Economics & Psychology (9708/9990)',
    openAccessUrl: 'https://openlibrary.org/works/OL15849945W/Thinking_Fast_and_Slow',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-17-automate-boring-stuff',
    title: 'Automate the Boring Stuff with Python: Practical Programming for Total Beginners',
    author: 'Al Sweigart',
    authorCountry: 'United States',
    ageBand: '17+',
    ageLabel: 'Ages 15–17 / 18+ (Create & Launch)',
    category: 'practical-tech',
    categoryLabel: 'Python Programming & Automation',
    coverEmoji: '🐍',
    summary: 'A completely free creative commons book teaching learners how to write Python code that automates real tasks: scraping web data, renaming thousands of files, updating spreadsheets, sending notifications, and parsing PDFs.',
    keyTakeaway: 'Computational thinking is a superpower for real-world productivity, turning hours of tedious manual tasks into 3-second scripts.',
    cambridgeStageAlignment: 'Cambridge IGCSE & A Level Computer Science (0478/9618 Practical Coding)',
    openAccessUrl: 'https://automatetheboringstuff.com/',
    openAccessType: 'Free Digital Ebook'
  },
  {
    id: 'book-17-mere-christianity',
    title: 'Mere Christianity',
    author: 'C.S. Lewis',
    authorCountry: 'United Kingdom',
    ageBand: '17+',
    ageLabel: 'Ages 15–17 / 18+ (Create & Launch)',
    category: 'character-faith',
    categoryLabel: 'Moral Law, Reason & Christian Apologetics',
    coverEmoji: '⛪',
    summary: 'Originally broadcast as radio talks during World War II, C.S. Lewis builds a logical argument for the existence of an objective Moral Law, examines human pride as the root vice, and articulates the heart of Christian faith with razor-sharp lucidity.',
    keyTakeaway: 'The universal moral consensus across human civilizations, humility as the antidote to pride, and faith rooted in reason.',
    cambridgeStageAlignment: 'Cambridge International A Level Divinity & Philosophy (9011/9990)',
    openAccessUrl: 'https://openlibrary.org/works/OL71138W/Mere_Christianity',
    openAccessType: 'Library Essential'
  },
  {
    id: 'book-17-how-europe-underdeveloped-africa',
    title: 'How Europe Underdeveloped Africa',
    author: 'Walter Rodney',
    authorCountry: 'Guyana / Tanzania Context (Univ. of Dar es Salaam)',
    ageBand: '17+',
    ageLabel: 'Ages 15–17 / 18+ (Create & Launch)',
    category: 'history-society',
    categoryLabel: 'Political Economy & African Development',
    coverEmoji: '📊',
    summary: 'A landmark economic and historical analysis demonstrating how centuries of transatlantic slave trade and extractive colonialism structurally drained African resources, labor, and industrial sovereignty.',
    keyTakeaway: 'Understanding modern global economic trade architectures, raw material value chains, and how African nations can rebuild domestic industrial capacity.',
    cambridgeStageAlignment: 'Cambridge International A Level Economics & History (9708/9489 African History)',
    openAccessUrl: 'https://openlibrary.org/works/OL2572236W/How_Europe_underdeveloped_Africa',
    openAccessType: 'Library Essential'
  }
];

export const FEATURED_AUTHORS: FeaturedAuthor[] = [
  {
    id: 'author-eugene-peterson',
    name: 'Eugene H. Peterson',
    heritage: 'United States',
    lifespan: '1932–2018',
    avatar: '📖',
    domains: ['Biblical Languages', 'Poetry', 'The Message (MSG) Translation', 'Pastoral Theology'],
    signatureWorks: [
      'The Message: The Bible in Contemporary Language',
      'A Long Obedience in the Same Direction',
      'Eat This Book: The Art of Spiritual Reading'
    ],
    philosophicalImpact: 'Professor of Biblical Languages and pastor who spent over a decade translating the ancient Hebrew and Greek scriptures into the vibrant, unvarnished cadence of everyday spoken language, making biblical literature thrillingly immediate.',
    quote: 'The Bible is not an answer book or a manual for good behavior; it is God’s living story inviting us to jump into the middle of it with all our heart.',
    recommendedForAges: 'All Ages (From Parables to Advanced Rhetoric)'
  },
  {
    id: 'author-chinua-achebe',
    name: 'Chinua Achebe',
    heritage: 'Nigeria (Igbo)',
    lifespan: '1930–2013',
    avatar: '📜',
    domains: ['African Literature', 'Folktales', 'Post-Colonial Thought', 'Children’s Stories'],
    signatureWorks: ['Things Fall Apart', 'Chike and the River', 'No Longer at Ease', 'Anthills of the Savannah'],
    philosophicalImpact: 'The father of modern African literature who insisted that until the lions have their own historians, the history of the hunt will always glorify the hunter. Taught the world to view African civilization with dignified complexity.',
    quote: 'If you don’t like someone’s story, write your own.',
    recommendedForAges: 'Ages 6–18+'
  },
  {
    id: 'author-cs-lewis',
    name: 'C.S. Lewis',
    heritage: 'United Kingdom / Northern Ireland',
    lifespan: '1898–1963',
    avatar: '🦁',
    domains: ['Children’s Fantasy', 'Moral Philosophy', 'Christian Apologetics', 'Medieval Literature'],
    signatureWorks: ['The Chronicles of Narnia', 'Mere Christianity', 'The Screwtape Letters', 'The Great Divorce'],
    philosophicalImpact: 'Oxford & Cambridge professor who synthesized brilliant imaginative storytelling with intellectual defense of objective truth, sacrificial love, and the divine moral order.',
    quote: 'Integrity is doing the right thing, even when no one is watching.',
    recommendedForAges: 'Ages 8–18+'
  },
  {
    id: 'author-stephen-hawking',
    name: 'Stephen Hawking',
    heritage: 'United Kingdom',
    lifespan: '1942–2018',
    avatar: '🪐',
    domains: ['Theoretical Physics', 'Cosmology', 'Children’s Space Science', 'Perseverance'],
    signatureWorks: ['A Brief History of Time', "George's Secret Key to the Universe", 'The Universe in a Nutshell'],
    philosophicalImpact: 'Lucasian Professor of Mathematics at Cambridge who unlocked the secrets of black holes and the origin of the universe while overcoming extreme physical motor neuron disability.',
    quote: 'Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.',
    recommendedForAges: 'Ages 9–18+'
  },
  {
    id: 'author-ngugi-wa-thiongo',
    name: "Ngũgĩ wa Thiong'o",
    heritage: 'Kenya',
    lifespan: '1938–Present',
    avatar: '🌍',
    domains: ['African Literature', 'Language Preservation', 'Decolonial Theory', 'Playwriting'],
    signatureWorks: ['Weep Not, Child', 'A Grain of Wheat', 'Decolonising the Mind', 'Petals of Blood'],
    philosophicalImpact: 'Pioneered the reclamation of African indigenous languages (writing in Gikuyu and advocating mother-tongue early childhood education throughout Africa).',
    quote: 'Language carries culture, and culture carries, particularly through orature and literature, the entire body of values by which we come to perceive ourselves and our place in the world.',
    recommendedForAges: 'Ages 12–18+'
  },
  {
    id: 'author-william-kamkwamba',
    name: 'William Kamkwamba',
    heritage: 'Malawi',
    lifespan: '1987–Present',
    avatar: '💨',
    domains: ['Appropriate Technology', 'Renewable Energy', 'Applied Engineering', 'Youth Innovation'],
    signatureWorks: ['The Boy Who Harnessed the Wind'],
    philosophicalImpact: 'Demonstrated that brilliant scientific ingenuity does not require a luxury private laboratory—it requires curiosity, open library books, and relentless grit with local resources.',
    quote: 'Trust yourself and believe. Whatever happens, don’t give up.',
    recommendedForAges: 'Ages 6–18+'
  },
  {
    id: 'author-king-solomon',
    name: 'King Solomon & Ancient Hebrew Sages',
    heritage: 'Ancient Israel',
    lifespan: 'c. 990–931 BCE',
    avatar: '👑',
    domains: ['Wisdom Literature', 'Epistemology', 'Statecraft', 'Nature Observation'],
    signatureWorks: ['The Book of Proverbs (Mishlei)', 'Ecclesiastes (Qoheleth)', 'Song of Songs'],
    philosophicalImpact: 'Collected thousands of distilled maxims linking keen empirical observation of nature (the ant storing grain, the eagle in the sky, cedar trees) with moral integrity, family diligence, and servant governance.',
    quote: 'The beginning of wisdom is this: Get wisdom. Though it cost all you have, get understanding. (Proverbs 4:7)',
    recommendedForAges: 'Ages 8–18+'
  }
];

export const RESOURCE_CENTERS: ResourceCenter[] = [
  // =========================================================================
  // 1. LANGUAGE & COMMUNICATION RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-african-storybook',
    name: 'African Storybook Project (ASP)',
    subjectId: 'language',
    subjectLabel: '1. Language & Communication',
    subjectEmoji: '📖',
    type: 'african-initiative',
    typeLabel: 'African Open Literacy Initiative',
    accessUrl: 'https://africanstorybook.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12'],
    cambridgeAlignment: 'Cambridge Early Years & Primary English (0058 Reading Fluency)',
    description: 'Over 6,000 open-license illustrated storybooks in more than 200 African languages (including Luganda, Runyankole, Acholi, Swahili, and English).',
    keyFeatures: [
      '100% free digital reading and downloadable PDF booklets',
      'Mother-tongue dual language side-by-side translation',
      'Downloadable offline Android reader app for low-bandwidth zones',
      'Permits free printing and community classroom distribution'
    ]
  },
  {
    id: 'rc-project-gutenberg',
    name: 'Project Gutenberg & Standard Ebooks',
    subjectId: 'language',
    subjectLabel: '1. Language & Communication',
    subjectEmoji: '📖',
    type: 'digital-library',
    typeLabel: 'Public Domain Global Classics (70,000+ Books)',
    accessUrl: 'https://www.gutenberg.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level Literature in English (0475/9695)',
    description: 'Over 70,000 free public domain ebooks including complete works of Shakespeare, Charles Dickens, Jane Austen, Adam Smith, Isaac Newton, Frederick Douglass, and classical world literature.',
    keyFeatures: [
      'No fees, no subscriptions, no accounts required',
      'Extremely lightweight plain text or EPUB formats (under 1MB each)',
      'Ideal for low-bandwidth phones and offline ereaders'
    ]
  },
  {
    id: 'rc-bbc-learning-english',
    name: 'BBC Learning English & Words That Matter',
    subjectId: 'language',
    subjectLabel: '1. Language & Communication',
    subjectEmoji: '📖',
    type: 'digital-library',
    typeLabel: 'Global English & Grammar Academy',
    accessUrl: 'https://www.bbc.co.uk/learningenglish',
    isFree: true,
    offlineCapable: true,
    ageBands: ['6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge English Language Syllabus & Checkpoint',
    description: 'Free world-standard language resource offering 6-minute audio lessons, phonics guides, grammar breakdowns, vocabulary builders, and debate speeches.',
    keyFeatures: [
      'Audio podcasts with full text transcripts for listening fluency',
      'Interactive quizzes covering punctuation, sentence structure, and vocabulary',
      'Specialized modules for academic writing and formal presentations'
    ]
  },

  // =========================================================================
  // 2. MATHEMATICS & LOGICAL REASONING RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-khan-academy-math',
    name: 'Khan Academy Mathematics & Early Math',
    subjectId: 'math',
    subjectLabel: '2. Mathematics & Logic',
    subjectEmoji: '🔢',
    type: 'digital-library',
    typeLabel: 'Free World-Class Math Academy',
    accessUrl: 'https://www.khanacademy.org/math',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Primary, Lower Secondary, IGCSE & A Level Math (0096/0580/9709)',
    description: 'Mastery-based interactive mathematics curriculum from early counting and number lines to algebra, geometry, trigonometry, statistics, and calculus.',
    keyFeatures: [
      'Interactive practice questions with instant step-by-step hints and video tutorials',
      'Mastery learning algorithm ensures mastery before progressing',
      'Khan Academy Kids mobile app runs 100% offline on tablets and low-cost phones'
    ]
  },
  {
    id: 'rc-nrich-maths',
    name: 'NRICH Mathematics (University of Cambridge)',
    subjectId: 'math',
    subjectLabel: '2. Mathematics & Logic',
    subjectEmoji: '🔢',
    type: 'interactive-lab',
    typeLabel: 'Cambridge Mathematical Problem-Solving Portal',
    accessUrl: 'https://nrich.maths.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Official Cambridge Mathematics Framework Problem-Solving Challenges',
    description: 'Created by the University of Cambridge Faculty of Mathematics to develop genuine problem-solving, mathematical curiosity, and logical thinking for ages 3 to 18.',
    keyFeatures: [
      'Hands-on printable mathematical games, puzzles, and investigations',
      'Encourages mathematical discussion, proof, and explaining "why" rather than rote memorization',
      'Categorized by Cambridge Stages 1 through 5 with teacher/parent guidance notes'
    ]
  },
  {
    id: 'rc-geogebra',
    name: 'GeoGebra Dynamic Mathematics',
    subjectId: 'math',
    subjectLabel: '2. Mathematics & Logic',
    subjectEmoji: '🔢',
    type: 'interactive-lab',
    typeLabel: 'Free Dynamic Geometry & Graphing Software',
    accessUrl: 'https://www.geogebra.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & International A Level Mathematics (0580/9709)',
    description: 'Interactive mathematical software bringing together geometry, algebra, spreadsheets, graphing, statistics, and calculus in one easy-to-use free platform.',
    keyFeatures: [
      'Drag points to see angle and area theorems proven dynamically',
      'Downloadable offline calculators and 3D geometry suites for desktop and mobile',
      'Over 1 million free classroom activities created by mathematics teachers'
    ]
  },

  // =========================================================================
  // 3. SCIENCE & INQUIRY RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-phet-sims',
    name: 'PhET Interactive Simulations (Univ. of Colorado Boulder)',
    subjectId: 'science',
    subjectLabel: '3. Science & Inquiry',
    subjectEmoji: '🔬',
    type: 'interactive-lab',
    typeLabel: 'Free Virtual Science & Math Labs',
    accessUrl: 'https://phet.colorado.edu/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Primary, Lower Secondary, IGCSE & A Level Physics, Chem, Bio (0097/0625/0620/0610)',
    description: 'Over 160 award-winning interactive science simulations. Allows learners to build circuits, split light through prisms, simulate orbital gravity, balance chemical equations, and visualize molecules.',
    keyFeatures: [
      'Completely free and downloadable as an offline package (runs without any internet)',
      'Visualizes unseen physical phenomena (electrons, sound waves, atoms, friction)',
      'Used across millions of Cambridge and IB schools globally'
    ]
  },
  {
    id: 'rc-openstax-sciences',
    name: 'OpenStax Science & College Textbooks (Rice University)',
    subjectId: 'science',
    subjectLabel: '3. Science & Inquiry',
    subjectEmoji: '🔬',
    type: 'open-textbook',
    typeLabel: 'Free Peer-Reviewed Secondary & University Science Textbooks',
    accessUrl: 'https://openstax.org/subjects/science',
    isFree: true,
    offlineCapable: true,
    ageBands: ['13-16', '17+'],
    cambridgeAlignment: 'Cambridge International AS & A Level Biology, Chemistry, Physics (9700/9701/9702)',
    description: 'Free, peer-reviewed, openly licensed full textbooks in Biology, Chemistry, College Physics, Anatomy & Physiology, and Astronomy.',
    keyFeatures: [
      'Downloadable as complete high-resolution offline PDF books',
      'Rigorous chapter review problems and experimental method guides',
      'Saves families and schools hundreds of dollars in textbook fees'
    ]
  },
  {
    id: 'rc-nasa-science',
    name: "NASA Space Place & STEM Learning Portal",
    subjectId: 'science',
    subjectLabel: '3. Science & Inquiry',
    subjectEmoji: '🔬',
    type: 'interactive-lab',
    typeLabel: 'Space, Earth & Planetary Science Center',
    accessUrl: 'https://spaceplace.nasa.gov/',
    isFree: true,
    offlineCapable: false,
    ageBands: ['3-5', '6-8', '9-12', '13-16'],
    cambridgeAlignment: 'Cambridge Primary & Lower Secondary Earth & Space (0097/0893)',
    description: 'NASA’s official educational center for children and youth, exploring the solar system, weather cycles, lunar phases, black holes, and satellite earth observation.',
    keyFeatures: [
      'Interactive animations explaining tides, tectonic plates, and atmospheric layers',
      'Real-time satellite imagery of Earth’s weather and vegetation patterns',
      'DIY science experiments using simple kitchen and household materials'
    ]
  },

  // =========================================================================
  // 4. TECHNOLOGY & DIGITAL INTELLIGENCE RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-scratch-mit',
    name: 'Scratch Creative Computing (MIT Media Lab)',
    subjectId: 'technology',
    subjectLabel: '4. Technology & Digital',
    subjectEmoji: '💻',
    type: 'interactive-lab',
    typeLabel: 'Free Creative Visual Block Programming',
    accessUrl: 'https://scratch.mit.edu/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['6-8', '9-12', '13-16'],
    cambridgeAlignment: 'Cambridge Primary & Lower Secondary Computing (0059/0860 Algorithms)',
    description: 'The world’s largest coding community for children. Learners snap together graphical code blocks to create interactive stories, games, animations, and simulations.',
    keyFeatures: [
      'Downloadable Scratch Desktop app runs 100% offline without internet',
      'Teaches fundamental computational thinking: sequences, loops, conditions, variables',
      'Zero risk of syntax errors—focuses purely on logic and creativity'
    ]
  },
  {
    id: 'rc-freecodecamp',
    name: 'freeCodeCamp.org & CS50 (Harvard University)',
    subjectId: 'technology',
    subjectLabel: '4. Technology & Digital',
    subjectEmoji: '💻',
    type: 'digital-library',
    typeLabel: 'Free Professional Software Engineering Academy',
    accessUrl: 'https://www.freecodecamp.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level Computer Science (0478/9618)',
    description: 'A completely free non-profit curriculum that has taught millions to write Python, JavaScript, HTML/CSS, SQL, algorithms, and build complete software applications.',
    keyFeatures: [
      'Interactive in-browser code editor with instant test feedback',
      'Verified certifications in Responsive Web Design, Python Data Analysis, and Machine Learning',
      'Includes Harvard CS50 lecture series and problem sets open to the public'
    ]
  },
  {
    id: 'rc-code-org',
    name: 'Code.org & CS First (Google for Education)',
    subjectId: 'technology',
    subjectLabel: '4. Technology & Digital',
    subjectEmoji: '💻',
    type: 'digital-library',
    typeLabel: 'Foundational K-12 Computer Science',
    accessUrl: 'https://code.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16'],
    cambridgeAlignment: 'Cambridge Computing & Digital Literacy Framework',
    description: 'Comprehensive K-12 curriculum demystifying how computers work, the binary system, internet protocols, cybersecurity awareness, and artificial intelligence.',
    keyFeatures: [
      'Unplugged activities (teach computational thinking with paper, pencil, and physical games)',
      'Hour of Code tutorials featuring Minecraft, Star Wars, and robotics',
      'Comprehensive teacher and parent lesson plans with solutions'
    ]
  },

  // =========================================================================
  // 5. HUMANITY, SOCIETY & THE WORLD RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-world-history-encyclopedia',
    name: 'World History Encyclopedia & Africa Access',
    subjectId: 'humanity-society',
    subjectLabel: '5. Humanity, Society & World',
    subjectEmoji: '🌍',
    type: 'digital-library',
    typeLabel: 'Global History & African Civilizations Portal',
    accessUrl: 'https://www.worldhistory.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Primary, Lower Secondary & IGCSE History (0838/0470)',
    description: 'The world’s highest-rated non-profit history education source. Features deeply researched, illustrated articles on ancient Nile civilizations, Great Zimbabwe, the Mali Empire, trade routes, and world events.',
    keyFeatures: [
      'Interactive historical maps, 3D artifact models, and audio articles',
      'Counteracts Eurocentric bias by spotlighting ancient African, Asian, and American societies',
      'Primary source historical document excerpts and timeline generators'
    ]
  },
  {
    id: 'rc-gapminder',
    name: 'Gapminder Foundation (Hans Rosling Fact-Based World)',
    subjectId: 'humanity-society',
    subjectLabel: '5. Humanity, Society & World',
    subjectEmoji: '🌍',
    type: 'interactive-lab',
    typeLabel: 'Global Statistics & Fact-Based Demographics',
    accessUrl: 'https://www.gapminder.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level Geography and Global Perspectives (0460/0457/9698)',
    description: 'An independent educational foundation fighting devastating global misconceptions with free interactive data visualizers comparing life expectancy, income, health, and education across 200 countries.',
    keyFeatures: [
      'Dollar Street: visual photos of how families across every income level live around the world',
      'Animated bubble charts tracking human development over 200 years',
      'Downloadable offline tools and interactive classroom quizzes'
    ]
  },
  {
    id: 'rc-sheg-history',
    name: 'Stanford History Education Group (SHEG - Reading Like a Historian)',
    subjectId: 'humanity-society',
    subjectLabel: '5. Humanity, Society & World',
    subjectEmoji: '🌍',
    type: 'digital-library',
    typeLabel: 'Primary Source & Source Evaluation Center',
    accessUrl: 'https://sheg.stanford.edu/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level History Source Evaluation (0470/9489 Paper 1 & 2)',
    description: 'Teaches students how to interrogate historical evidence: identifying author bias, contextualization, corroborating multiple accounts, and detecting misinformation.',
    keyFeatures: [
      'Downloadable primary source inquiry lessons with historical documents',
      'Civic Online Reasoning curriculum (evaluating internet claims, fact-checking)',
      'Direct preparation for high-stakes international examination document analysis'
    ]
  },

  // =========================================================================
  // 6. FINANCIAL LITERACY & ENTERPRISE RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-practical-money-skills',
    name: 'Practical Money Skills (Visa Global Financial Literacy)',
    subjectId: 'finance',
    subjectLabel: '6. Financial Literacy & Enterprise',
    subjectEmoji: '💰',
    type: 'digital-library',
    typeLabel: 'Personal Finance, Budgeting & Banking Portal',
    accessUrl: 'https://www.practicalmoneyskills.com/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Primary Math (Money) & IGCSE Enterprise (0454 Financial Planning)',
    description: 'Comprehensive financial education platform offering age-graded games, interactive budget calculators, saving jar plans, credit card interest visualizers, and classroom modules.',
    keyFeatures: [
      'Interactive games: Financial Football and Peter Pig’s Money Counter',
      'Printable household budgeting worksheets and expense tracking logs',
      'Step-by-step guides on saving, debt dangers, bank accounts, and compound interest'
    ]
  },
  {
    id: 'rc-junior-achievement',
    name: 'Junior Achievement Digital Learning & Youth Enterprise',
    subjectId: 'finance',
    subjectLabel: '6. Financial Literacy & Enterprise',
    subjectEmoji: '💰',
    type: 'digital-library',
    typeLabel: 'Youth Entrepreneurship & Business Model Incubator',
    accessUrl: 'https://jausa.ja.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE Enterprise (0454) & A Level Business (9609)',
    description: 'Prepares young people for the real business world: how to start a mini-business, calculate unit costs, write marketing pitches, manage cash flow, and serve customers.',
    keyFeatures: [
      'Business plan templates adapted for youth micro-enterprises',
      'Case studies of young African and global entrepreneurs',
      'Interactive simulations of business inventory, pricing, and gross profit calculation'
    ]
  },
  {
    id: 'rc-investopedia',
    name: 'Investopedia Financial Education Center',
    subjectId: 'finance',
    subjectLabel: '6. Financial Literacy & Enterprise',
    subjectEmoji: '💰',
    type: 'digital-library',
    typeLabel: 'Financial Markets, Economics & Investment Dictionary',
    accessUrl: 'https://www.investopedia.com/',
    isFree: true,
    offlineCapable: false,
    ageBands: ['13-16', '17+'],
    cambridgeAlignment: 'Cambridge International A Level Economics (9708) & Accounting (9706)',
    description: 'The world’s largest financial dictionary and education resource, breaking down stocks, bonds, inflation, central banks, cryptocurrency, balance sheets, and real estate.',
    keyFeatures: [
      'Free stock market simulator for practicing paper trading without risking real money',
      'Clear, illustrated breakdowns of complex financial instruments',
      'Guides on personal wealth building, emergency funds, and ethical business'
    ]
  },

  // =========================================================================
  // 7. HUMAN DEVELOPMENT & WELLBEING RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-greater-good-berkeley',
    name: 'Greater Good Science Center (UC Berkeley)',
    subjectId: 'wellbeing',
    subjectLabel: '7. Development & Wellbeing',
    subjectEmoji: '💖',
    type: 'digital-library',
    typeLabel: 'Science of Empathy, Gratitude & Character',
    accessUrl: 'https://greatergood.berkeley.edu/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Global Perspectives & Wellbeing Framework',
    description: 'Pioneering scientific research turned into practical family practices for cultivating compassion, forgiveness, mindfulness, resilience, and strong interpersonal bonds.',
    keyFeatures: [
      'Greater Good in Action: step-by-step 5-minute daily family practices',
      'Conflict resolution toolkits for siblings and peer groups',
      'Scientific evidence showing how kindness boosts physical immunity and learning focus'
    ]
  },
  {
    id: 'rc-who-health-academy',
    name: 'WHO Health Academy & UNICEF Parenting Portal',
    subjectId: 'wellbeing',
    subjectLabel: '7. Development & Wellbeing',
    subjectEmoji: '💖',
    type: 'digital-library',
    typeLabel: 'Evidence-Based Child Health, Hygiene & Nutrition',
    accessUrl: 'https://www.who.int/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Primary & Lower Secondary Science (Human Body & Health)',
    description: 'The global standard for hygiene, disease prevention (malaria, cholera, safe sanitation), balanced nutrition with local foods, mental wellbeing, and first aid.',
    keyFeatures: [
      'Practical guides on safe water storage and handwashing protocols',
      'Nutritional balance guides using local affordable staples (beans, greens, millet, groundnuts)',
      'Mental health first aid and positive parenting strategies'
    ]
  },

  // =========================================================================
  // 8. CREATION, WORK & PRACTICAL SKILLS RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-ifixit-repair',
    name: 'iFixit Global Repair Guides & Workshop Manuals',
    subjectId: 'practical-skills',
    subjectLabel: '8. Practical Skills & Work',
    subjectEmoji: '🛠️',
    type: 'interactive-lab',
    typeLabel: 'How Things Work & Repair Manuals for Everything',
    accessUrl: 'https://www.ifixit.com/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Design & Technology (0445 Systems & Control)',
    description: 'A global collaborative repair community providing free step-by-step disassembly and repair manuals for electronics, bicycles, household appliances, and tools.',
    keyFeatures: [
      'High-resolution step-by-step photo guides for fixing everyday items',
      'Teaches mechanical disassembly, safety with electricity, and troubleshooting',
      'Champions the "Right to Repair" to reduce electronic waste and save money'
    ]
  },
  {
    id: 'rc-instructables',
    name: 'Instructables & Make: Magazine DIY Projects',
    subjectId: 'practical-skills',
    subjectLabel: '8. Practical Skills & Work',
    subjectEmoji: '🛠️',
    type: 'interactive-lab',
    typeLabel: 'Hands-On Woodworking, Electronics & Making',
    accessUrl: 'https://www.instructables.com/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Design & Technology / Practical Laboratories',
    description: 'Over 100,000 community-contributed maker guides for carpentry, basic electronics, solar cookers, metalwork, sewing, leatherwork, and crafts.',
    keyFeatures: [
      'Categorized by skill level from absolute beginner to advanced workshop',
      'Materials lists using recycled, scrap, and low-cost local components',
      'Encourages children to build functional physical objects with their own hands'
    ]
  },
  {
    id: 'rc-fao-teca',
    name: 'FAO TECA (Technologies for Smallholder Agriculture)',
    subjectId: 'practical-skills',
    subjectLabel: '8. Practical Skills & Work',
    subjectEmoji: '🛠️',
    type: 'african-initiative',
    typeLabel: 'Practical Farming, Composting & Livestock Manuals',
    accessUrl: 'https://www.fao.org/teca/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE Agriculture (0600)',
    description: 'United Nations Food and Agriculture Organization repository of proven, low-cost practical agricultural techniques tested by smallholder farmers worldwide.',
    keyFeatures: [
      'Illustrated field guides on organic composting, natural pest control, and drip irrigation',
      'Poultry rearing, beekeeping, and post-harvest crop storage to prevent losses',
      'Downloadable PDF guides designed for community farm extension and homesteads'
    ]
  },

  // =========================================================================
  // 9. ARTS, CULTURE & EXPRESSION RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-google-arts-culture',
    name: 'Google Arts & Culture & African Heritage Exhibits',
    subjectId: 'arts-culture',
    subjectLabel: '9. Arts, Culture & Expression',
    subjectEmoji: '🎨',
    type: 'digital-library',
    typeLabel: 'Global Museum Tours & High-Resolution Cultural Masterpieces',
    accessUrl: 'https://artsandculture.google.com/',
    isFree: true,
    offlineCapable: false,
    ageBands: ['3-5', '6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level Art & Design (0400/9479)',
    description: 'Virtual walk-throughs and ultra-high-definition zoomable captures from 2,000+ museums worldwide, including traditional African textile collections, sculpture, and world architecture.',
    keyFeatures: [
      'Zoom into brushstrokes of masterpieces and traditional beadwork at gigapixel detail',
      'Virtual 360-degree tours of UNESCO world heritage monuments',
      'Interactive games on color palettes, music patterns, and historic timelines'
    ]
  },
  {
    id: 'rc-chrome-music-lab',
    name: 'Chrome Music Lab & Classics for Kids',
    subjectId: 'arts-culture',
    subjectLabel: '9. Arts, Culture & Expression',
    subjectEmoji: '🎨',
    type: 'interactive-lab',
    typeLabel: 'Interactive Sound, Rhythm & Composition Experiments',
    accessUrl: 'https://musiclab.chromeexperiments.com/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16'],
    cambridgeAlignment: 'Cambridge Primary & Lower Secondary Music Framework (0068/0868)',
    description: 'Hands-on interactive web audio experiments that let children explore sound waves, frequencies, polyrhythms, arpeggios, chords, and compose their own melodies.',
    keyFeatures: [
      'Visually links music with math: ratios, wave oscillation, and harmonics',
      'Song Maker allows creating tunes on tablets or smartphones without prior sheet music reading',
      'Free audio recordings and biographical stories of classical composers'
    ]
  },

  // =========================================================================
  // 10. FOOD, WATER & ENERGY CAPSTONE RESOURCE CENTERS
  // =========================================================================
  {
    id: 'rc-centre-alt-tech',
    name: 'Centre for Alternative Technology (CAT Open Knowledge)',
    subjectId: 'food-water-energy',
    subjectLabel: '10. Food, Water & Energy Capstones',
    subjectEmoji: '⚡',
    type: 'interactive-lab',
    typeLabel: 'Renewable Solar, Micro-Hydro & Sustainable Systems',
    accessUrl: 'https://cat.org.uk/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level Environmental Management (0680/8291)',
    description: 'Over 50 years of pioneering engineering in off-grid solar photovoltaic systems, rainwater collection, low-carbon building, composting, and micro-hydro power.',
    keyFeatures: [
      'Engineering blueprints for DIY small-scale solar cookers and water heaters',
      'Calculators for sizing household energy needs and storage batteries',
      'Zero-carbon community infrastructure integration models'
    ]
  },
  {
    id: 'rc-wateraid-wash',
    name: 'WaterAid WASH Learning Portal & Clean Water Biosystems',
    subjectId: 'food-water-energy',
    subjectLabel: '10. Food, Water & Energy Capstones',
    subjectEmoji: '⚡',
    type: 'african-initiative',
    typeLabel: 'Clean Water Engineering & Bio-Sand Filtration',
    accessUrl: 'https://www.wateraid.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge Science & Environmental Management Capstones',
    description: 'Practical field guides on building slow sand filters, inspecting boreholes, testing water for bacterial contamination, and constructing gravity-fed community pipelines.',
    keyFeatures: [
      'Step-by-step instructions for building a multi-layer household sand and charcoal filter',
      'Water testing protocols for turbidity, pH, and biological safety',
      'Case studies of clean water transformations in rural Uganda and East Africa'
    ]
  },

  // =========================================================================
  // 11. CHARACTER, FAITH & THE BIBLE (NLT & THE MESSAGE)
  // =========================================================================
  {
    id: 'rc-bible-gateway-nlt-msg',
    name: 'Bible Gateway & YouVersion (NLT & The Message Editions)',
    subjectId: 'character-faith',
    subjectLabel: 'Faith, Scriptures & The Bible (NLT / MSG)',
    subjectEmoji: '✝️',
    type: 'scripture-portal',
    typeLabel: 'Free Digital Bible Hub (NLT, The Message & Audio)',
    accessUrl: 'https://www.biblegateway.com/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level Religious Studies / Divinity (0490/9011 Set Texts)',
    description: 'The world’s most comprehensive free online and offline Bible repository. Provides instant parallel reading of the Holy Bible in the New Living Translation (NLT) and The Message (MSG), complete with audio narrations, keyword search, and translations in Luganda, Swahili, and 2,000+ languages.',
    keyFeatures: [
      'Side-by-side parallel comparison of the New Living Translation (NLT) and The Message (MSG)',
      'Free audio dramatizations for family listening and read-aloud time',
      'Downloadable mobile app (YouVersion Bible.com) that works 100% offline without mobile data',
      'Daily reading plans, scripture memorization tools, and verse-by-verse cross references'
    ]
  },
  {
    id: 'rc-bible-project',
    name: 'The Bible Project (BibleProject Open Learning)',
    subjectId: 'character-faith',
    subjectLabel: 'Faith, Scriptures & The Bible (NLT / MSG)',
    subjectEmoji: '✝️',
    type: 'scripture-portal',
    typeLabel: 'Free Visual Biblical Theology & Literary Breakdown',
    accessUrl: 'https://bibleproject.com/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level Divinity / Literature Biblical Analysis',
    description: 'World-renowned non-profit animation studio and educational hub that walks through every single book of the Bible, illustrating Hebrew literary structure, theological themes, and historical context.',
    keyFeatures: [
      'Award-winning animated videos summarizing the structure and themes of every book from Genesis to Revelation',
      'Deep dives into Biblical Hebrew word studies: Shalom, Hesed, Compassion, Justice, and Agape',
      'Downloadable visual posters and study guides for home discussion and youth study'
    ]
  },
  {
    id: 'rc-blue-letter-bible',
    name: 'Blue Letter Bible & Open Lexicon',
    subjectId: 'character-faith',
    subjectLabel: 'Faith, Scriptures & The Bible (NLT / MSG)',
    subjectEmoji: '✝️',
    type: 'scripture-portal',
    typeLabel: 'Original Hebrew & Greek Word Study Lexicon',
    accessUrl: 'https://www.blueletterbible.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['13-16', '17+'],
    cambridgeAlignment: 'Cambridge International A Level Divinity & Classical Text Analysis',
    description: 'Free in-depth study tool allowing students to examine the original ancient Hebrew and Greek roots behind the translations of NLT, MSG, and traditional versions.',
    keyFeatures: [
      'Strong’s Concordance integration with pronunciation of ancient Greek and Hebrew roots',
      'Free historical commentaries from Church Fathers and modern biblical scholars',
      'Parallel text viewing for scholarly textual analysis and hermeneutics'
    ]
  },

  // =========================================================================
  // 12. PHYSICAL COMMUNITY LIBRARIES & MULTIDISCIPLINARY CENTERS
  // =========================================================================
  {
    id: 'rc-national-libraries',
    name: 'National & Regional Community Public Library Centers',
    subjectId: 'community-libraries',
    subjectLabel: 'Physical Libraries & Public Hubs',
    subjectEmoji: '🏛️',
    type: 'community-hub',
    typeLabel: 'Physical Community Reading Rooms & Examination Archives',
    accessUrl: 'https://www.nlu.go.ug/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8', '9-12', '13-16', '17+'],
    cambridgeAlignment: 'Cambridge IGCSE & A Level Past Paper Reference Collections',
    description: 'Physical public libraries and regional book-box hubs: National Library of Uganda, British Council Learning Centers, Kampala Public Library, and affiliated district centers across Jinja, Mbale, Mbarara, and Gulu.',
    keyFeatures: [
      'Free quiet reading halls, study tables, and reference collections',
      'Physical printings of Cambridge IGCSE past examination papers and syllabuses',
      'Community children reading circles and mother-tongue storytelling workshops'
    ],
    physicalLocationsNotes: 'Headquarters on Buganda Road, Kampala, with 40+ public district libraries across Uganda and partner library networks across East Africa.'
  },
  {
    id: 'rc-mit-ocw',
    name: 'MIT OpenCourseWare & OpenLearn (The Open University)',
    subjectId: 'all',
    subjectLabel: 'All Subjects (University Standard)',
    subjectEmoji: '🎓',
    type: 'digital-library',
    typeLabel: 'Free University Level Courses Across All Human Knowledge',
    accessUrl: 'https://ocw.mit.edu/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['17+'],
    cambridgeAlignment: 'Exceeds Cambridge A Levels / First-Year University Level',
    description: 'MIT’s historic initiative publishing virtually all of its undergraduate course materials online for free: video lectures, syllabus outlines, problem sets, and exams in science, engineering, humanities, and economics.',
    keyFeatures: [
      'Over 2,500 complete university courses accessible with zero registration fee',
      'Downloadable full course packages for offline learning on basic computers',
      'Empowers advanced secondary and adult learners to master university concepts independently'
    ]
  },
  {
    id: 'rc-book-dash',
    name: 'Book Dash Open African Children’s Publishing',
    subjectId: 'language',
    subjectLabel: '1. Language & Communication',
    subjectEmoji: '📖',
    type: 'african-initiative',
    typeLabel: 'Free African Children’s Print-Ready Books',
    accessUrl: 'https://bookdash.org/',
    isFree: true,
    offlineCapable: true,
    ageBands: ['3-5', '6-8'],
    cambridgeAlignment: 'Cambridge Early Years & Primary Foundation Literacy',
    description: 'A non-profit social publisher creating high-quality, beautifully illustrated children books created by African writers and illustrators for every child.',
    keyFeatures: [
      'Print-ready PDFs formatted for low-cost home and community church printing',
      'African cultural settings, characters, names, and flora/fauna',
      'Creative Commons 4.0 open license—free to print, copy, and distribute without restriction'
    ]
  }
];

/**
 * Returns books recommended for a specific age band or category.
 */
export function getBooksForAgeBand(ageBand: AgeBand): RecommendedBook[] {
  return RECOMMENDED_BOOKS.filter(b => b.ageBand === ageBand);
}

/**
 * Returns resource centers filtered by subject domain.
 */
export function getResourceCentersBySubject(subjectId: ResourceSubjectId): ResourceCenter[] {
  if (subjectId === 'all') return RESOURCE_CENTERS;
  return RESOURCE_CENTERS.filter(rc => rc.subjectId === subjectId || rc.subjectId === 'all');
}

/**
 * Returns recommended book for today based on the child's age.
 */
export function getFeaturedBookForAge(age: number): RecommendedBook {
  if (age <= 5) return RECOMMENDED_BOOKS[0]; // Handa's Surprise
  if (age <= 8) return RECOMMENDED_BOOKS[5]; // The Hands-On Bible (NLT) or Charlotte's Web
  if (age <= 12) return RECOMMENDED_BOOKS[12]; // The Holy Bible (NLT Study) / Lion, Witch & Wardrobe
  if (age <= 16) return RECOMMENDED_BOOKS[17]; // The Message (MSG) / Animal Farm
  return RECOMMENDED_BOOKS[23]; // Comparative Wisdom Parallel / Things Fall Apart
}
