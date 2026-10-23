/**
 * EDUCATE THE WORLD INITIATIVE
 * UNITED NATIONS SUSTAINABLE DEVELOPMENT GOALS (UN SDGs)
 * WORLD CHANGER MISSIONS REPOSITORY
 * 
 * Maps every lesson for every age group (Ages 3–18+) to an authentic
 * United Nations Sustainable Development Goal (SDGs 1–17), providing
 * real practical community action steps, impact goals, and local dialect mottos.
 */

import { AgeBand, SubjectCategory, LocationType, CommunityMission } from '../types/curriculum';

export interface UnSdgGoal {
  number: number; // 1 to 17
  title: string; // e.g. "SDG 6: Clean Water and Sanitation"
  shortName: string; // e.g. "Clean Water & Sanitation"
  badge: string; // e.g. "💧 SDG 6: Clean Water & Sanitation"
  icon: string;
  color: string;
  headerGradient: string;
  tagline: string;
  youthActionFocus: string;
}

export const UN_SDG_GOALS: Record<number, UnSdgGoal> = {
  1: {
    number: 1,
    title: 'SDG 1: No Poverty',
    shortName: 'No Poverty',
    badge: '🪙 SDG 1: No Poverty',
    icon: '🪙',
    color: 'bg-rose-50 text-rose-800 border-rose-300',
    headerGradient: 'from-rose-600 via-red-600 to-rose-700',
    tagline: 'End poverty in all its forms everywhere by building productive skills and resilient family livelihoods.',
    youthActionFocus: 'Learn financial literacy, daily saving habits, enterprise skills, and sharing food or clothes with neighbors in need.'
  },
  2: {
    number: 2,
    title: 'SDG 2: Zero Hunger',
    shortName: 'Zero Hunger',
    badge: '🌾 SDG 2: Zero Hunger',
    icon: '🌾',
    color: 'bg-amber-50 text-amber-800 border-amber-300',
    headerGradient: 'from-amber-600 via-yellow-600 to-orange-700',
    tagline: 'End hunger, achieve food security, improved nutrition, and promote sustainable grassroots agriculture.',
    youthActionFocus: 'Plant kitchen gardens (olusuku/greens), protect post-harvest grains, avoid food waste, and share harvest with the vulnerable.'
  },
  3: {
    number: 3,
    title: 'SDG 3: Good Health and Well-being',
    shortName: 'Good Health & Well-being',
    badge: '❤️ SDG 3: Good Health',
    icon: '❤️',
    color: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    headerGradient: 'from-emerald-600 via-teal-600 to-green-700',
    tagline: 'Ensure healthy lives and promote well-being for all at all ages through sanitation, disease prevention, and nutrition.',
    youthActionFocus: 'Wash hands properly, clear stagnant mosquito breeding water, practice safe hygiene, and encourage active physical exercise.'
  },
  4: {
    number: 4,
    title: 'SDG 4: Quality Education',
    shortName: 'Quality Education',
    badge: '📚 SDG 4: Quality Education',
    icon: '📚',
    color: 'bg-red-50 text-red-800 border-red-300',
    headerGradient: 'from-red-600 via-rose-600 to-red-800',
    tagline: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.',
    youthActionFocus: 'Teach a younger child to read or count, share books, help a classmate with difficult schoolwork, and read daily.'
  },
  5: {
    number: 5,
    title: 'SDG 5: Gender Equality',
    shortName: 'Gender Equality',
    badge: '⚖️ SDG 5: Gender Equality',
    icon: '⚖️',
    color: 'bg-orange-50 text-orange-800 border-orange-300',
    headerGradient: 'from-orange-600 via-amber-600 to-red-600',
    tagline: 'Achieve gender equality and empower all women and girls in education, leadership, and community roles.',
    youthActionFocus: 'Encourage girls in STEM and boys in home care, share household chores equally, and speak up with respect for everyone.'
  },
  6: {
    number: 6,
    title: 'SDG 6: Clean Water and Sanitation',
    shortName: 'Clean Water & Sanitation',
    badge: '💧 SDG 6: Clean Water',
    icon: '💧',
    color: 'bg-cyan-50 text-cyan-800 border-cyan-300',
    headerGradient: 'from-cyan-600 via-blue-600 to-indigo-700',
    tagline: 'Ensure availability and sustainable management of water and sanitation for all.',
    youthActionFocus: 'Build sand/charcoal water filters, boil drinking water, protect local spring wells and jerrycans from contamination.'
  },
  7: {
    number: 7,
    title: 'SDG 7: Affordable and Clean Energy',
    shortName: 'Affordable & Clean Energy',
    badge: '☀️ SDG 7: Clean Energy',
    icon: '☀️',
    color: 'bg-yellow-50 text-yellow-800 border-yellow-300',
    headerGradient: 'from-amber-500 via-yellow-500 to-orange-600',
    tagline: 'Ensure access to affordable, reliable, sustainable and modern energy for all.',
    youthActionFocus: 'Turn off lights and appliances when not in use, use solar study lights instead of smoky kerosene, and test solar cookers.'
  },
  8: {
    number: 8,
    title: 'SDG 8: Decent Work and Economic Growth',
    shortName: 'Decent Work & Growth',
    badge: '💼 SDG 8: Decent Work',
    icon: '💼',
    color: 'bg-purple-50 text-purple-800 border-purple-300',
    headerGradient: 'from-purple-600 via-indigo-600 to-slate-800',
    tagline: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work.',
    youthActionFocus: 'Learn practical craft and technical skills, master budgeting and cost tracking, and start youth micro-enterprises.'
  },
  9: {
    number: 9,
    title: 'SDG 9: Industry, Innovation & Infrastructure',
    shortName: 'Industry & Innovation',
    badge: '🏗️ SDG 9: Innovation',
    icon: '🏗️',
    color: 'bg-orange-50 text-orange-900 border-orange-300',
    headerGradient: 'from-orange-600 via-stone-700 to-slate-800',
    tagline: 'Build resilient infrastructure, promote inclusive industrialization, and foster grassroots innovation.',
    youthActionFocus: 'Design simple machines (tippy-tap handwashers, solar dryers, pulleys) using local scrap and recycled materials.'
  },
  10: {
    number: 10,
    title: 'SDG 10: Reduced Inequalities',
    shortName: 'Reduced Inequalities',
    badge: '🤝 SDG 10: Reduced Inequalities',
    icon: '🤝',
    color: 'bg-pink-50 text-pink-800 border-pink-300',
    headerGradient: 'from-pink-600 via-rose-600 to-purple-700',
    tagline: 'Reduce inequality within and among communities by standing with the vulnerable, disabled, and elderly.',
    youthActionFocus: 'Befriend children with disabilities or special needs, assist elderly neighbors with fetch-water chores, and practice kindness.'
  },
  11: {
    number: 11,
    title: 'SDG 11: Sustainable Cities and Communities',
    shortName: 'Sustainable Communities',
    badge: '🏙️ SDG 11: Sustainable Cities',
    icon: '🏙️',
    color: 'bg-amber-50 text-amber-900 border-amber-300',
    headerGradient: 'from-amber-600 via-orange-600 to-yellow-700',
    tagline: 'Make cities and human settlements inclusive, safe, resilient, clean, and sustainable.',
    youthActionFocus: 'Participate in community cleanups (Bulungi Bwansi), manage solid waste, keep pathways tidy, and protect public commons.'
  },
  12: {
    number: 12,
    title: 'SDG 12: Responsible Consumption and Production',
    shortName: 'Responsible Consumption',
    badge: '♻️ SDG 12: Responsible Consumption',
    icon: '♻️',
    color: 'bg-emerald-50 text-emerald-900 border-emerald-300',
    headerGradient: 'from-emerald-600 via-teal-600 to-green-700',
    tagline: 'Ensure sustainable consumption and production patterns by reducing, reusing, recycling, and eliminating single-use plastics.',
    youthActionFocus: 'Compost organic vegetable peels into garden manure, repurpose plastic containers into plant pots, and buy only what is needed.'
  },
  13: {
    number: 13,
    title: 'SDG 13: Climate Action',
    shortName: 'Climate Action',
    badge: '🌍 SDG 13: Climate Action',
    icon: '🌍',
    color: 'bg-green-50 text-green-800 border-green-300',
    headerGradient: 'from-green-600 via-emerald-600 to-teal-800',
    tagline: 'Take urgent action to combat climate change, soil degradation, and erratic rainfall patterns.',
    youthActionFocus: 'Plant native agroforestry trees, dig water-retention swales, mulch soil to preserve moisture, and prevent bush burning.'
  },
  14: {
    number: 14,
    title: 'SDG 14: Life Below Water',
    shortName: 'Life Below Water',
    badge: '🐟 SDG 14: Life Below Water',
    icon: '🐟',
    color: 'bg-blue-50 text-blue-800 border-blue-300',
    headerGradient: 'from-blue-600 via-cyan-600 to-indigo-800',
    tagline: 'Conserve and sustainably use oceans, lakes, rivers, streams, and aquatic wetlands.',
    youthActionFocus: 'Stop dumping plastic bags (buveera) into drainage trenches, protect riverbanks and wetland papyrus buffers from encroachment.'
  },
  15: {
    number: 15,
    title: 'SDG 15: Life on Land',
    shortName: 'Life on Land',
    badge: '🌳 SDG 15: Life on Land',
    icon: '🌳',
    color: 'bg-lime-50 text-lime-800 border-lime-300',
    headerGradient: 'from-lime-600 via-emerald-600 to-green-800',
    tagline: 'Protect, restore and promote sustainable use of terrestrial ecosystems, forests, and biodiversity.',
    youthActionFocus: 'Protect pollinators (bees, butterflies), plant fruit trees (mango, avocado, jackfruit), and protect wildlife habitats.'
  },
  16: {
    number: 16,
    title: 'SDG 16: Peace, Justice & Strong Institutions',
    shortName: 'Peace & Justice',
    badge: '🕊️ SDG 16: Peace & Justice',
    icon: '🕊️',
    color: 'bg-sky-50 text-sky-800 border-sky-300',
    headerGradient: 'from-sky-600 via-blue-600 to-indigo-700',
    tagline: 'Promote peaceful and inclusive societies, provide access to justice, and build transparent institutions.',
    youthActionFocus: 'Resolve playground and sibling disputes calmly, speak truth, respect community rules, and practice servant leadership.'
  },
  17: {
    number: 17,
    title: 'SDG 17: Partnerships for the Goals',
    shortName: 'Partnerships for the Goals',
    badge: '🌐 SDG 17: Global Partnerships',
    icon: '🌐',
    color: 'bg-indigo-50 text-indigo-800 border-indigo-300',
    headerGradient: 'from-indigo-600 via-purple-600 to-blue-800',
    tagline: 'Strengthen the means of implementation and revitalize global, national, and community partnerships.',
    youthActionFocus: 'Team up with friends, family, and local leaders to pool resources, solve shared community problems, and learn together.'
  }
};

/**
 * Curated, lesson-specific World Changer Missions mapped strictly to UN SDGs.
 * Covers every standard lesson ID in the curriculum.
 */
export const CURATED_LESSON_SDG_MISSIONS: Record<string, Partial<CommunityMission> & { sdgNumber: number }> = {
  // === AGES 3–5: DISCOVER ===
  'age3-5-lang-first-words': {
    sdgNumber: 4,
    title: 'SDG 4 • Young Storyteller & Gentle Voice Ambassador',
    impactGoal: 'Share 3 respectful words and teach a younger child or elder a new word with a warm smile',
    actionSteps: [
      'Practice the 3 magic words: "Webale" (Thank you), "Nsonyiwa" (I am sorry), and "Nsaba" (Please) with family members today.',
      'Point to 3 objects around your home (water cup, chair, tree) and say their names clearly in both your local dialect and English.',
      'Give a warm, respectful greeting to an elder in your compound using two hands as a cultural sign of honor.'
    ],
    worldChangerPrinciple: 'A gentle tongue is a tree of life (Proverbs 15:4). Words build up people and bring peace to our home.',
    dialectPhrase: 'Ebigambo eby’Amagezi (Words of Wisdom and Grace)'
  },
  'age3-5-num-counting-seeds': {
    sdgNumber: 2,
    title: 'SDG 2 • Seed Counter & Shamba Food Guardian',
    impactGoal: 'Count 10 bean or maize seeds and plant 3 of them in a small cup or compound garden',
    actionSteps: [
      'Carefully count out 10 dry bean or maize seeds into neat pairs of two.',
      'Take a clean tin can or milk carton, fill it with dark rich soil from the compound, and push 3 seeds gently beneath the surface.',
      'Sprinkle a few drops of water and place your seedling cup where gentle morning sunshine shines.'
    ],
    worldChangerPrinciple: 'Every great harvest starts from a tiny, faithfully tended seed (Mark 4:31).',
    dialectPhrase: 'Ensigo z’Olusuku (Seeds for the Family Harvest)'
  },
  'age3-5-color-rainbow-garden': {
    sdgNumber: 15,
    title: 'SDG 15 • Rainbow Garden & Pollinator Friend',
    impactGoal: 'Find 4 different natural colors in living plants and protect 1 flowering shrub',
    actionSteps: [
      'Walk safely around the shamba or compound with an adult and find living items of red, yellow, green, and brown.',
      'Check a flowering bush for visiting bees or butterflies; watch them sip nectar without disturbing them.',
      'Place a tiny shell or shallow plastic lid filled with clean water and pebbles near the flowers so bees can drink safely without drowning.'
    ],
    worldChangerPrinciple: 'God made the earth colorful and alive. We are blessed to care for every flower and bird (Genesis 1:12).',
    dialectPhrase: 'Langi z’Obutonde (The Living Colors of Nature)'
  },
  'age3-5-shapes-around-home': {
    sdgNumber: 9,
    title: 'SDG 9 • Junior Compound Architect & Safe Space Inspector',
    impactGoal: 'Identify 3 geometric shapes in your home and help tidy 1 dangerous corner',
    actionSteps: [
      'Spot a rectangle (door), a circle (cooking pot/jerrycan cap), and a triangle (roof truss or stool brace) in your home.',
      'Help an adult pick up 3 stray sticks, stones, or sharp items from the walkway so younger siblings cannot trip.',
      'Build a small toy structure or compound gate using smooth pebbles, twigs, or cardboard scraps.'
    ],
    worldChangerPrinciple: 'Wisdom builds a safe home, and understanding establishes its strong foundations (Proverbs 24:3).',
    dialectPhrase: 'Okuzimba Amaka Amanywevu (Building Strong Safe Homes)'
  },
  'age3-5-science-senses-lab': {
    sdgNumber: 3,
    title: 'SDG 3 • Healthy Senses Sentinel & Clean Hands Star',
    impactGoal: 'Demonstrate proper handwashing to protect your eyes, nose, and mouth from germs',
    actionSteps: [
      'Use running water and soap or ash to wash hands thoroughly between fingers while singing the ABC song (20 seconds).',
      'Use your sense of smell to check that family drinking water smells fresh with zero odor or smoke taint.',
      'Never touch your eyes or food with unwashed hands, and remind a friend or cousin gently to do the same.'
    ],
    worldChangerPrinciple: 'Our bodies are wonderfully made to experience God’s world. Clean habits protect our health and life (Psalm 139:14).',
    dialectPhrase: 'Obulamu n’Obuyonjo (Health and Purity)'
  },
  'age3-5-science-sink-or-float': {
    sdgNumber: 6,
    title: 'SDG 6 • Clean Water Protector & Waste Retriever',
    impactGoal: 'Retrieve 3 floating plastic wrappers or debris from a compound water basin or ditch',
    actionSteps: [
      'Test 3 safe items in a small bowl of clean water (a leaf, a dry stick, a bottle cap) to see what floats.',
      'Notice that plastic floats and never rots away: collect 3 stray pieces of plastic from around your yard so they do not enter rainwater trenches.',
      'Ensure the home drinking water bucket has a clean, tight cover resting on top.'
    ],
    worldChangerPrinciple: 'Pure, living water is a precious gift. Keeping it free from waste preserves life for all creatures (Revelation 22:1).',
    dialectPhrase: 'Amazzi Amayonjo (Pure Living Water)'
  },
  'age3-5-social-magic-words': {
    sdgNumber: 16,
    title: 'SDG 16 • Little Peacemaker & Respect Ambassador',
    impactGoal: 'Bring peace and smiles to 3 people today through kind sharing and gentle manners',
    actionSteps: [
      'When given food or help, look the person in the eyes and say "Webale nnyo" (Thank you very much) with joyful gratitude.',
      'If someone drops an item or needs help carrying a small cup, step forward willingly to help without being asked.',
      'If a disagreement happens over a toy or seat, take a deep breath and say: "Let us take turns together!"'
    ],
    worldChangerPrinciple: 'Blessed are the peacemakers, for they shall be called children of God (Matthew 5:9).',
    dialectPhrase: 'Omutabaganya w’Amaka (The Family Peacemaker)'
  },

  // === AGES 6–8: BUILD ===
  'age6-8-math-cooking-fractions': {
    sdgNumber: 2,
    title: 'SDG 2 • Fair Sharing & Kitchen Food Justice Champion',
    impactGoal: 'Divide a family snack or dish into exact equal fractions so everyone receives a fair share',
    actionSteps: [
      'Take a fruit (mango, avocado, pawpaw) or chapati and divide it into equal halves (1/2) or quarters (1/4) for siblings.',
      'Explain mathematically why equal shares build harmony and trust among brothers, sisters, and neighbors.',
      'Ensure no crumbs or leftover edible food are thrown away; store leftovers safely in clean covered containers.'
    ],
    worldChangerPrinciple: 'Let fairness, honesty, and equal measures guide our hands. Whoever shares with the needy will lack nothing (Proverbs 28:27).',
    dialectPhrase: 'Okugabana mu Bwenkanya (Sharing with Fair Fractions)'
  },
  'age6-8-science-rain-cycle': {
    sdgNumber: 6,
    title: 'SDG 6 & 13 • Rainwater Harvester & Cloud Guardian',
    impactGoal: 'Set up a clean rainwater catchment funnel or inspect roof gutters for debris',
    actionSteps: [
      'Inspect where rainwater falls from your roof or iron sheets: place a clean basin or bucket with a clean cloth filter over the top.',
      'Clear dry leaves or sand out of the gutter so clean rain runs freely into the storage tank.',
      'Calculate how many cups of water your household saves by catching 1 bucket of fresh rainwater instead of walking to the borehole.'
    ],
    worldChangerPrinciple: 'He sends rain upon the earth to water the thirsty ground (Job 5:10). We must honor God’s rain by harvesting it with care.',
    dialectPhrase: 'Okukwata Amazzi g’Enkuba (Catching Rainwater for Life)'
  },
  'age6-8-fin-what-is-money': {
    sdgNumber: 1,
    title: 'SDG 1 & 8 • Junior Saver & Family Financial Steward',
    impactGoal: 'Create a homemade coin/shilling savings box (Akabokisi k’Ensimbi) and deposit your first savings',
    actionSteps: [
      'Recycle an empty tin, box, or jar: cut a neat slot in the lid and label it: "Future Enterprise & Family Need".',
      'Earn or save 100–500 shillings through a diligent household chore or smart buying decision.',
      'Write down the difference between a "Need" (food, clean water, school pencil) and a "Want" (sweets, toys), choosing needs first.'
    ],
    worldChangerPrinciple: 'Dishonest money dwindles away, but whoever gathers money little by little makes it grow (Proverbs 13:11).',
    dialectPhrase: 'Akabokisi k’Ensimbi (The Diligent Savings Box)'
  },
  'age6-8-sci-yeast-mandazi': {
    sdgNumber: 2,
    title: 'SDG 2 & 12 • Living Biology & Post-Harvest Baker',
    impactGoal: 'Bake or prepare healthy fermented food and teach 1 person how yeast creates food',
    actionSteps: [
      'Observe active yeast bubbling with warm water and sugar; explain how microscopic fungi produce carbon dioxide gas that lifts bread.',
      'Help knead dough thoroughly and ensure clean covered fermentation away from flies or dust.',
      'Share the first warm mandazi or bread with an elderly neighbor or someone in your village who has little to eat today.'
    ],
    worldChangerPrinciple: 'The kingdom of heaven is like yeast that a woman took and mixed into flour until it worked all through the dough (Matthew 13:33).',
    dialectPhrase: 'Ekizimbulugusa ky’Obulamu (Living Yeast that Multiplies)'
  },

  // === AGES 9–12: EXPLORE ===
  'age9-12-fin-tiny-business': {
    sdgNumber: 8,
    title: 'SDG 8 & 1 • Grassroots Enterprise & Youth Entrepreneur',
    impactGoal: 'Draft a 5,000 UGX mini-enterprise plan that solves a real neighborhood need',
    actionSteps: [
      'Identify a daily need in your community (e.g. roasted groundnuts, washed greens, paper craft envelopes, kindling).',
      'Calculate initial startup capital, operating costs, and selling price to guarantee honest profit without exploitation.',
      'Allocate 10% of planned profit to tithe/charity, 40% to re-invest in raw materials, and 50% to savings.'
    ],
    worldChangerPrinciple: 'In all labor there is profit, but mere talk leads only to poverty (Proverbs 14:23).',
    dialectPhrase: 'Okutandikawo Businensi Entono (Starting a Productive Micro-Enterprise)'
  },
  'age9-12-science-water-filter': {
    sdgNumber: 6,
    title: 'SDG 6 • Multi-Layer Sand & Charcoal Filter Engineer',
    impactGoal: 'Build a working biological water filtration column from a 1.5L plastic bottle',
    actionSteps: [
      'Cut off the bottom of a clear plastic bottle; pack the neck with clean cotton cloth, fine sand, coarse sand, and crushed wood charcoal.',
      'Pour cloudy, sediment-rich water into the top and watch it emerge clear and free of suspended dirt.',
      'Educate family members that physical filtration removes sediment, but boiling is still needed to neutralize microscopic bacteria.'
    ],
    worldChangerPrinciple: 'Whoever brings a cup of cold, clean water to one of these little ones will certainly not lose their reward (Matthew 10:42).',
    dialectPhrase: 'Okusenya Amazzi g’Obulamu (Purifying Water for the Community)'
  },
  'age9-12-crit-how-do-i-know': {
    sdgNumber: 16,
    title: 'SDG 16 • Truth Sentinel & Anti-Rumor Fact Checker',
    impactGoal: 'Cross-examine 1 rumor or gossip claim in your neighborhood using verifiable evidence',
    actionSteps: [
      'When hearing sensational gossip or alarming news, ask the 3 critical tests: "Who saw it?", "What is the proof?", and "Does it harm the innocent?".',
      'Refuse to spread unverified gossip with your mouth or via WhatsApp forwards.',
      'Courageously speak the verified truth with gentleness when an absent friend or neighbor is wrongly accused.'
    ],
    worldChangerPrinciple: 'The simple believe anything, but the prudent give thought to their steps (Proverbs 14:15). Truth brings enduring peace.',
    dialectPhrase: 'Amazima n’Obwesimbu (Truth, Verification and Integrity)'
  },

  // === AGES 13–16: DEVELOP ===
  'age13-16-sci-engine-oil': {
    sdgNumber: 9,
    title: 'SDG 9 & 12 • Mechanical Maintenance & Safe Oil Disposal Guardian',
    impactGoal: 'Inspect 2 household machines/bicycles and safely recycle spent lubricating oil',
    actionSteps: [
      'Clean and lubricate bicycle chains, sewing machines, or door hinges with light oil to reduce friction and double machine lifespan.',
      'Never dump used motor or engine oil directly onto bare ground or near wells, where 1 liter can poison 1,000,000 liters of drinking water.',
      'Collect used motor oil in a sealed container and deliver it to a local mechanic for re-refining or timber treatment.'
    ],
    worldChangerPrinciple: 'A skilled worker preserves tools and machinery; diligent maintenance is the foundation of national industry (Exodus 31:3).',
    dialectPhrase: 'Okukuuma Ebyuma (Machine Maintenance and Stewardship)'
  },
  'age13-16-tech-how-computers-think': {
    sdgNumber: 9,
    title: 'SDG 9 & 4 • Algorithmic Logic Tutor & Digital Inclusion Builder',
    impactGoal: 'Teach algorithmic problem-solving to a peer and write a step-by-step logic flowchart',
    actionSteps: [
      'Write a deterministic algorithm (step-by-step recipe with conditionals IF-THEN-ELSE) to solve a daily community task.',
      'Teach a friend without a smartphone or computer how logic gates (AND, OR, NOT) operate using switches and bulbs.',
      'Organize a 15-minute digital literacy session for an elder or shopkeeper to show them safe mobile money PIN hygiene.'
    ],
    worldChangerPrinciple: 'God is a God of order and logic, not confusion (1 Corinthians 14:33). Digital technology in faithful hands transforms nations.',
    dialectPhrase: 'Endowooza ey’Ekinyansobyo (Algorithmic Logic and Digital Thinking)'
  },

  // === AGES 17+: PREPARE ===
  'age17-fin-assets-vs-liabilities': {
    sdgNumber: 8,
    title: 'SDG 8 & 1 • Generational Wealth Architect & Asset Builder',
    impactGoal: 'Audit personal/family balance sheet to replace 1 liability with a productive cash-flowing asset',
    actionSteps: [
      'Categorize all current personal or family spending: strictly distinguish cash-draining status symbols from income-producing tools.',
      'Draft a 12-month capital deployment plan: invest in tools of production (e.g. drip irrigation kit, high-yield seeds, solar charger, craft equipment).',
      'Organize a peer savings-and-credit circle (SACCO/Chama) with 3 trusted youth to pool capital for bulk agricultural purchasing.'
    ],
    worldChangerPrinciple: 'The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty (Proverbs 21:5).',
    dialectPhrase: 'Emmaali n’Amabanja (Productive Assets vs Crushing Debt)'
  },

  // === CHRISTIAN CURRICULA ===
  'christian-love-never-fails': {
    sdgNumber: 16,
    title: 'SDG 16 • Unfailing Love & Neighborhood Reconciliation',
    impactGoal: 'Perform an intentional act of unconditional patience and love for someone who hurt you',
    actionSteps: [
      'Identify a relationship at home or school where resentment or tension exists.',
      'Take the first step toward peace: offer a sincere blessing, gift of fresh fruit, or kind word without demanding an apology first.',
      'Pray specifically for that person’s well-being and peace.'
    ],
    worldChangerPrinciple: 'Love is patient, love is kind. It does not envy, it does not boast... Love never fails (1 Corinthians 13:4-8).',
    dialectPhrase: 'Okwagala Okutaggwaawo (Unfailing Divine Love)'
  },
  'christian-love-in-action': {
    sdgNumber: 2,
    title: 'SDG 2 & 1 • Love in Action: Feed & Clothe the Vulnerable',
    impactGoal: 'Prepare a package of food, soap, or clean clothing to deliver to a neighbor in need',
    actionSteps: [
      'Sort through your household clothes or kitchen store: prepare clean wearable clothes or grain for someone who has less.',
      'Deliver the gift in secret or with gentle humility, preserving the dignity of the recipient.',
      'Teach a younger sibling that real faith is measured by how we treat the least among us.'
    ],
    worldChangerPrinciple: 'Dear children, let us not love with words or speech but with actions and in truth (1 John 3:18).',
    dialectPhrase: 'Okwagala Okukola (Love Expressed Through Real Action)'
  },
  'christian-divine-purpose-changing-world': {
    sdgNumber: 17,
    title: 'SDG 17 • Salt of the Earth & Light to the Nations',
    impactGoal: 'Launch or join a 3-person youth action team to tackle a local community issue',
    actionSteps: [
      'Unite with 2 friends or family members to identify 1 urgent problem in your neighborhood (dirty well, illiteracy, erosion).',
      'Assign responsibilities based on each member’s unique gifts (teaching, organizing, manual labor).',
      'Commit to a weekly 1-hour action project that brings visible transformation and hope.'
    ],
    worldChangerPrinciple: 'You are the salt of the earth... you are the light of the world. Let your light shine before others (Matthew 5:13-16).',
    dialectPhrase: 'Omunnyo gw’Ensi n’Ettawaaza y’Ekitangaala (Salt and Light of the World)'
  },
  'christian-changing-the-world-great-commission': {
    sdgNumber: 4,
    title: 'SDG 4 & 17 • Global Commission: Spreading Truth & Lifelong Learning',
    impactGoal: 'Share the Good News and teach 1 person a practical life-saving skill or biblical truth',
    actionSteps: [
      'Explain the Gospel of grace and love simply to someone seeking purpose.',
      'Mentor a peer who is struggling in school or feeling discouraged about their future.',
      'Write down your personal vision statement for how your education will build God’s Kingdom.'
    ],
    worldChangerPrinciple: 'Go and make disciples of all nations... teaching them to obey everything I have commanded you (Matthew 28:19-20).',
    dialectPhrase: 'Okukyusa Ensi n’Enjiri (Transforming the World Through Truth)'
  },

  // === ENRICHED CURRICULA ===
  'sci-clean-water-filtration-health': {
    sdgNumber: 6,
    title: 'SDG 6 • Clean Water Filtration & Community Spring Guard',
    impactGoal: 'Inspect local water sources and construct a sand-gravel filter demonstration',
    actionSteps: [
      'Inspect your family’s spring well, borehole, or rainwater barrel: ensure no animal waste or dirty surface water can enter.',
      'Demonstrate how layered filtration catches parasites and clay sediment.',
      'Distribute clean water safety tips to 3 households in your neighborhood.'
    ],
    worldChangerPrinciple: 'Let justice roll down like waters, and righteousness like an ever-flowing stream (Amos 5:24).',
    dialectPhrase: 'Amazzi Amayonjo g’Obulamu (Clean Water for Healthy Communities)'
  },
  'sci-seed-germination-soil-security': {
    sdgNumber: 2,
    title: 'SDG 2 & 15 • Living Soil & Agroforestry Food Security',
    impactGoal: 'Plant 5 vegetable cuttings or tree seeds to enrich family soil and nutrition',
    actionSteps: [
      'Prepare compost using dry grass, manure, and kitchen peelings to regenerate depleted topsoil naturally.',
      'Plant fast-growing greens (dodo, nakati, sukuma wiki) in sacks or raised beds.',
      'Mulch the soil bed with dry leaves to conserve ground moisture during dry spells.'
    ],
    worldChangerPrinciple: 'The Lord God took the man and put him in the Garden of Eden to work it and take care of it (Genesis 2:15).',
    dialectPhrase: 'Ettaka Ejjimu n’Emmere (Fertile Soil and Food Security)'
  },
  'kindness-serving-elders-ubuntu': {
    sdgNumber: 10,
    title: 'SDG 10 & 11 • Ubuntu Elder Care & Heritage Preservation',
    impactGoal: 'Spend 30 minutes assisting an elderly neighbor with domestic chores and record their wisdom',
    actionSteps: [
      'Visit an elderly resident in your village or town: carry heavy firewood, sweep their compound, or fetch fresh water.',
      'Sit respectfully, listen to a story of how the community used to live, and record one timeless proverb.',
      'Promote the Ubuntu spirit: "I am because we are (Omuntu muntu lwa bantu)".'
    ],
    worldChangerPrinciple: 'Stand up in the presence of the aged, show respect for the elderly, and revere your God (Leviticus 19:32).',
    dialectPhrase: 'Ubuntu: Okussaamu Abakadde Ekitiibwa (Honoring Elders and Preserving Heritage)'
  },
  'godly-stewardship-creation-genesis2': {
    sdgNumber: 13,
    title: 'SDG 13 & 15 • Creation Care & Climate Action Guardian',
    impactGoal: 'Plant 1 native shade tree and stop open plastic burning in your compound',
    actionSteps: [
      'Plant a hardy native tree seedling (e.g. Musizi, Moringa, or Fruit tree) and build a small protective thorn fence around it.',
      'Educate neighbors why burning plastics emits carcinogens and black carbon that poison lungs and heat the atmosphere.',
      'Establish a separate collection bag for plastics and paper to be upcycled or safely disposed of.'
    ],
    worldChangerPrinciple: 'The earth is the Lord’s, and everything in it; the world, and all who live in it (Psalm 24:1).',
    dialectPhrase: 'Okukuuma Obutonde bwa Katonda (Stewardship of God’s Creation)'
  }
};

/**
 * Maps any subject category, lesson title, and age band to the most relevant UN Sustainable Development Goal
 */
export function getSdgForCategoryAndLesson(
  category: SubjectCategory, 
  title: string, 
  ageBand: AgeBand
): UnSdgGoal {
  const tLower = title.toLowerCase();

  // Water-specific
  if (tLower.includes('water') || tLower.includes('sanitation') || tLower.includes('wash') || tLower.includes('hygiene') || tLower.includes('rain') || tLower.includes('filter')) {
    return UN_SDG_GOALS[6]; // SDG 6: Clean Water & Sanitation
  }

  // Energy & Light & Mechanics
  if (tLower.includes('energy') || tLower.includes('solar') || tLower.includes('electric') || tLower.includes('light') || tLower.includes('heat') || tLower.includes('fire') || tLower.includes('power')) {
    return UN_SDG_GOALS[7]; // SDG 7: Affordable & Clean Energy
  }

  // Agriculture, Food, Soil & Plants
  if (tLower.includes('plant') || tLower.includes('garden') || tLower.includes('soil') || tLower.includes('farm') || tLower.includes('seed') || tLower.includes('food') || tLower.includes('yeast') || tLower.includes('mandazi') || category === 'agriculture') {
    return UN_SDG_GOALS[2]; // SDG 2: Zero Hunger
  }

  // Health, Biology, Human Body, Wellbeing
  if (category === 'wellbeing' || tLower.includes('body') || tLower.includes('heart') || tLower.includes('health') || tLower.includes('germ') || tLower.includes('exercise') || tLower.includes('sense')) {
    return UN_SDG_GOALS[3]; // SDG 3: Good Health & Well-being
  }

  // Environment, Climate, Earth Science
  if (tLower.includes('climate') || tLower.includes('weather') || tLower.includes('recycle') || tLower.includes('plastic') || tLower.includes('waste') || tLower.includes('stewardship')) {
    return UN_SDG_GOALS[13]; // SDG 13: Climate Action
  }

  // Aquatic, Rivers, Fish, Wetlands
  if (tLower.includes('river') || tLower.includes('fish') || tLower.includes('lake') || tLower.includes('wetland') || tLower.includes('ocean') || tLower.includes('float')) {
    return UN_SDG_GOALS[14]; // SDG 14: Life Below Water
  }

  // Land Ecosystems, Trees, Forests, Animals, Insects
  if (tLower.includes('tree') || tLower.includes('animal') || tLower.includes('forest') || tLower.includes('insect') || tLower.includes('bird') || tLower.includes('rainbow')) {
    return UN_SDG_GOALS[15]; // SDG 15: Life on Land
  }

  // Finance, Business, Money, Economics
  if (category === 'finance' || tLower.includes('money') || tLower.includes('budget') || tLower.includes('business') || tLower.includes('savings') || tLower.includes('bank') || tLower.includes('market') || tLower.includes('asset') || tLower.includes('fraction')) {
    return UN_SDG_GOALS[8]; // SDG 8: Decent Work & Economic Growth
  }

  // Technology, Innovation, Building, Machines, Logic
  if (category === 'technology' || tLower.includes('computer') || tLower.includes('code') || tLower.includes('machine') || tLower.includes('build') || tLower.includes('tool') || tLower.includes('engine') || tLower.includes('oil') || tLower.includes('shape')) {
    return UN_SDG_GOALS[9]; // SDG 9: Industry, Innovation & Infrastructure
  }

  // Language, Reading, Books, Education
  if (category === 'language' || tLower.includes('read') || tLower.includes('book') || tLower.includes('write') || tLower.includes('story') || tLower.includes('learn') || tLower.includes('word') || tLower.includes('commission')) {
    return UN_SDG_GOALS[4]; // SDG 4: Quality Education
  }

  // Civics, Kindness, Peacemaking, Justice, Truth
  if (category === 'social-kindness' || category === 'soft-skills' || tLower.includes('peace') || tLower.includes('truth') || tLower.includes('leader') || tLower.includes('rule') || tLower.includes('law') || tLower.includes('forgive') || tLower.includes('cross') || tLower.includes('magic word')) {
    return UN_SDG_GOALS[16]; // SDG 16: Peace, Justice & Strong Institutions
  }

  // Community, Sharing, Reduced Inequality, Gender
  if (category === 'humanity-society' || tLower.includes('family') || tLower.includes('share') || tLower.includes('equal') || tLower.includes('friend') || tLower.includes('elder') || tLower.includes('ubuntu') || tLower.includes('love')) {
    return UN_SDG_GOALS[10]; // SDG 10: Reduced Inequalities
  }

  // Sustainable Living & Cities
  if (category === 'practical-skills' || tLower.includes('house') || tLower.includes('clean') || tLower.includes('town') || tLower.includes('village') || tLower.includes('salt')) {
    return UN_SDG_GOALS[11]; // SDG 11: Sustainable Cities & Communities
  }

  // Default fallback based on age
  if (ageBand === '3-5') return UN_SDG_GOALS[3]; // Health & care
  if (ageBand === '6-8') return UN_SDG_GOALS[4]; // Quality education
  if (ageBand === '9-12') return UN_SDG_GOALS[6]; // Clean water & environment
  if (ageBand === '13-16') return UN_SDG_GOALS[9]; // Innovation & infrastructure
  return UN_SDG_GOALS[8]; // Decent work & enterprise
}

/**
 * Guarantees that ANY lesson module has a rich, real World Changer Community Mission
 * based on the United Nations Sustainable Development Goals.
 */
export function ensureWorldChangerMission(
  lesson: {
    id: string;
    title: string;
    category: SubjectCategory;
    ageBand: AgeBand;
    communityMission?: CommunityMission;
  },
  location: LocationType = 'rural'
): CommunityMission {
  // Check curated mission dictionary first
  const curated = CURATED_LESSON_SDG_MISSIONS[lesson.id];
  if (curated) {
    const sdg = UN_SDG_GOALS[curated.sdgNumber] || UN_SDG_GOALS[4];
    return {
      title: curated.title || `${sdg.shortName} Ambassador`,
      impactGoal: curated.impactGoal || 'Bring positive transformation to your community today',
      actionSteps: curated.actionSteps || [
        'Apply the Big Idea learned in today’s lesson to a real problem in your home or village.',
        'Teach 1 friend or sibling how this concept improves daily living.',
        'Record your community deed in your Learning Passport.'
      ],
      worldChangerPrinciple: curated.worldChangerPrinciple || 'Knowledge lived out in love transforms homes, villages, and nations.',
      dialectPhrase: curated.dialectPhrase || 'Okukyusa Ekitundu (Transforming Our Community)',
      unSdg: sdg
    };
  }

  const sdg = getSdgForCategoryAndLesson(lesson.category, lesson.title, lesson.ageBand);

  // If already has a community mission, ensure it has unSdg attached!
  if (lesson.communityMission) {
    return {
      ...lesson.communityMission,
      unSdg: lesson.communityMission.unSdg || sdg
    };
  }

  // Age-appropriate action step templates per SDG
  const getAgeTailoredSteps = (sdgNum: number, age: AgeBand): string[] => {
    if (age === '3-5') {
      return [
        'Practice 1 gentle, respectful habit with a parent or elder today (saying "Webale" or greeting with both hands).',
        'Help pick up 3 bits of dry leaves or trash around your home compound.',
        'Wash your hands with clean running water and soap before touching food.'
      ];
    }
    if (age === '6-8') {
      return [
        'Demonstrate today’s core idea to a sibling using items found around your house or compound.',
        'Inspect your compound for stagnant water puddles or stray plastic wrappers and clean them up safely.',
        'Share a fair portion of food or a helpful tool with someone who needs it today.'
      ];
    }
    if (age === '9-12') {
      return [
        'Design a simple solution or visual poster explaining this UN Goal to children in your neighborhood.',
        'Carry out 1 practical community maintenance task (e.g., clearing a drainage gutter or tending soil).',
        'Check in with an elderly neighbor or friend to offer assistance with carrying water or firewood.'
      ];
    }
    if (age === '13-16') {
      return [
        'Identify a systemic problem in your neighborhood matching this UN Goal and outline a 3-step technical solution.',
        'Mentor a younger student in math, science, or reading for 20 minutes.',
        'Practice total integrity and peaceful mediation during any disputes at school or home today.'
      ];
    }
    // 17+
    return [
      'Structure an actionable community initiative or enterprise plan addressing this Sustainable Development Goal.',
      'Train at least 2 community members on practical savings, resource management, or health protocols.',
      'Commit to ongoing leadership in your neighborhood or faith community, modeling servant-stewardship.'
    ];
  };

  const actionTemplates: Record<number, { title: string; impactGoal: string; principle: string; dialect: string }> = {
    1: {
      title: `No Poverty Ambassador: Financial Stewardship & Waste Reduction`,
      impactGoal: `Teach 1 friend or family member a smart savings method and avoid wasting food or household supplies`,
      principle: `Wealth begins with stewardship. The hand of the diligent brings wealth and lifts the community (Proverbs 10:4).`,
      dialect: `Obukulembeze bwebyenfuna (Economic Stewardship & Leadership)`
    },
    2: {
      title: `Zero Hunger Champion: Kitchen Garden & Post-Harvest Care`,
      impactGoal: `Plant or tend nutritious food plants (greens, beans or herbs) at home`,
      principle: `A fed community is a peaceful, growing community. Whoever tills their land will have plenty of bread (Proverbs 12:11).`,
      dialect: `Olusuku lw’Akaalo (The Community Family Shamba)`
    },
    3: {
      title: `Good Health Sentinel: Home Hygiene & Clean Hands Protocol`,
      impactGoal: `Set up or inspect a clean handwashing station and remove stagnant water`,
      principle: `Our bodies are temples of purpose. Cleanliness and health protect life and bring honor to God (1 Corinthians 6:19).`,
      dialect: `Obulamu bwe Bugagga (Health is the True Wealth)`
    },
    4: {
      title: `Quality Education Peer Educator: Share the Light of Knowledge`,
      impactGoal: `Teach 1 younger child or peer the core concept you learned in today's lesson`,
      principle: `Knowledge is like a candle flame: lighting another person's candle does not diminish yours, it doubles the light in the room!`,
      dialect: `Okugabanako Okumanya (Sharing Knowledge Freely)`
    },
    5: {
      title: `Gender Equality & Mutual Respect Champion`,
      impactGoal: `Share household and leadership responsibilities equally between boys and girls today`,
      principle: `All human beings are created in the image of God with equal dignity, purpose, and potential (Genesis 1:27).`,
      dialect: `Obwenkanya mu Maka (Equality and Respect in the Home)`
    },
    6: {
      title: `Clean Water Guardian: Safe Drinking Water & Source Protection`,
      impactGoal: `Inspect, clean, and protect your home’s drinking water container and source`,
      principle: `Clean water is life. Protecting water sources protects the entire neighborhood from disease (John 4:14).`,
      dialect: `Amazzi Amayonjo g’Obulamu (Clean Water is Life)`
    },
    7: {
      title: `Clean Energy Steward: Conserve Electricity & Solar Transition`,
      impactGoal: `Audit household energy use and switch off unneeded appliances or lamps`,
      principle: `Stewardship of light and power reflects God's first command: Let there be light, and let it be used wisely (Genesis 1:3).`,
      dialect: `Amasanyalaze Ag’Omusana (Solar Clean Energy)`
    },
    8: {
      title: `Decent Work & Value Creator: Master a Productive Skill`,
      impactGoal: `Create a useful physical item or service that solves a problem in your household or neighborhood`,
      principle: `Whatever your hand finds to do, do it with all your might as unto the Lord (Ecclesiastes 9:10).`,
      dialect: `Emirimu Egy’Enkizo (Excellence in Productive Work)`
    },
    9: {
      title: `Grassroots Innovation & Infrastructure Builder`,
      impactGoal: `Build a functional low-cost tool or model using recycled local materials`,
      principle: `Wisdom and innovation build the house; by understanding its rooms are filled with rare treasures (Proverbs 24:3).`,
      dialect: `Okuyiiya n’Okuzimba (Grassroots Invention and Building)`
    },
    10: {
      title: `Inclusion & Peacemaker Ambassador: Stand with the Vulnerable`,
      impactGoal: `Perform a concrete act of service for an elderly person, disabled neighbor, or newcomer`,
      principle: `Blessed are the peacemakers and helpers of the poor, for they reflect the heart of the Father (Matthew 5:9).`,
      dialect: `Okuyamba Abanafu (Lifting the Weak and Vulnerable)`
    },
    11: {
      title: `Sustainable Community Keeper: Bulungi Bwansi Action`,
      impactGoal: `Clear non-biodegradable trash from public pathways or drainage gutters`,
      principle: `A clean community prevents floods, stops cholera, and creates dignity for every resident (Leviticus 19:18).`,
      dialect: `Bulungi Bwansi (Community Service for the Common Good)`
    },
    12: {
      title: `Responsible Consumption: Zero Waste & Plastic Upcycling`,
      impactGoal: `Upcycle plastic containers and refuse single-use polythene bags (buveera)`,
      principle: `Gather up the fragments that remain, so that nothing is lost or wasted (John 6:12).`,
      dialect: `Okutangira Okwonoona (Zero Waste Stewardship)`
    },
    13: {
      title: `Climate Action Protector: Tree Planting & Soil Mulching`,
      impactGoal: `Plant a tree seedling or mulch a garden bed to protect topsoil from erosion`,
      principle: `The earth is the Lord's and the fullness thereof. We are appointed as gardeners and caretakers (Psalm 24:1).`,
      dialect: `Okusimba Emiti n’Okukuuma Ettaka (Planting Trees and Soil Care)`
    },
    14: {
      title: `Clean Rivers & Wetlands Guardian: Stop Plastic Runoff`,
      impactGoal: `Inspect local drainage or rainwater trenches to prevent plastics from reaching rivers`,
      principle: `Let justice roll on like a river, and righteousness like a never-failing stream (Amos 5:24).`,
      dialect: `Okukuuma Ennyanja n’Emigga (Protecting Lakes and Rivers)`
    },
    15: {
      title: `Biodiversity & Pollinator Friend: Protect Living Land`,
      impactGoal: `Create a pollinator-friendly flower patch or bird perch in your compound`,
      principle: `Look at the birds of the air and the flowers of the field; not even Solomon was arrayed like one of these (Matthew 6:26).`,
      dialect: `Ebibanja n’Ebisolo by’Ensi (Biodiversity & Land Life)`
    },
    16: {
      title: `Peace, Justice & Integrity Ambassador`,
      impactGoal: `Practice honest communication and resolve 1 conflict with peaceful dialogue`,
      principle: `Blessed are the peacemakers, for they shall be called children of God (Matthew 5:9).`,
      dialect: `Emirembe n’Obwenkanya (Peace, Justice and Truth)`
    },
    17: {
      title: `Partnership for the Goals: Collaborative Action Team`,
      impactGoal: `Unite with at least 2 other people to accomplish a shared community mission`,
      principle: `Two are better than one, because they have a good reward for their labor; a threefold cord is not quickly broken (Ecclesiastes 4:9-12).`,
      dialect: `Agali Awamu Ge Galuma Ennyama (Unity and Partnership)`
    }
  };

  const template = actionTemplates[sdg.number] || actionTemplates[4];

  return {
    title: `${sdg.shortName} • ${template.title}`,
    impactGoal: template.impactGoal,
    actionSteps: getAgeTailoredSteps(sdg.number, lesson.ageBand),
    worldChangerPrinciple: template.principle,
    dialectPhrase: template.dialect,
    unSdg: sdg
  };
}
