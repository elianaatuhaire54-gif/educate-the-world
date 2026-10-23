import { LessonModule, AnimatedLessonVideo, AnimatedVideoScene } from '../types/curriculum';

/**
 * Curated 90-Second Animated Video Storyboards for Core Curriculum Lessons
 * Each video has exactly 4 scenes lasting 90 seconds in total:
 * Scene 1 (0:00 - 0:22 / 22s): Real-World Wonder & Visual Hook
 * Scene 2 (0:22 - 0:48 / 26s): Animated Scientific Mechanism & Diagram
 * Scene 3 (0:48 - 0:72 / 24s): Step-by-Step Household Experiment in Motion
 * Scene 4 (0:72 - 0:90 / 18s): World Changer Impact & Golden Rule Takeaway
 */
export const CURATED_LESSON_VIDEOS: Record<string, AnimatedLessonVideo> = {
  // 1. Solar Energy / Physics / Tech
  'solar-energy-discovery': {
    durationSeconds: 90,
    videoTitle: '90-Second Visual Journey: How Sunlight Becomes Electricity',
    topicSummary: 'Watch how invisible light photons knock electrons loose in silicon wafers to light up an LED lamp.',
    themeCategory: 'science',
    keyFormulaOrLaw: 'Photoelectric Effect: E = hf • Ohm’s Law: P = V × I',
    practicalTakeaway: 'Sunlight is infinite clean energy. A single 10W panel can illuminate your desk forever.',
    scenes: [
      {
        id: 1,
        chapterNumber: 1,
        title: 'The Golden Sunshine Over Our Compound',
        startSec: 0,
        endSec: 22,
        durationSec: 22,
        visualType: 'concept-hook',
        diagramTitle: 'Solar Radiation Stream',
        keyVisualConcept: 'Sun emitting packets of energy called photons traveling 150 million kilometers to Earth',
        caption: 'Look at the brilliant sunshine warming your compound or town rooftop. That light is packed with billions of tiny energy particles called photons!',
        narration: 'Look outside at the brilliant sunshine. That warm light is not just brightness—it is packed with billions of tiny moving energy packets called photons, racing through space to your roof!',
        soundCue: 'Gentle sunrise morning breeze',
        interactivePrompt: 'Tap the glowing sun to release an energetic photon packet!',
        visualElements: [
          { label: 'Sun Core', icon: '☀️', actionDescription: 'Pulsing solar flare releasing radial light rays', highlightColor: '#F59E0B' },
          { label: 'Photons Stream', icon: '✨', actionDescription: 'Golden stream of light packets racing toward Earth', highlightColor: '#FBBF24' },
          { label: 'Home Rooftop', icon: '🏠', actionDescription: 'Solar panel tilted at 15 degrees catching incident rays', highlightColor: '#3B82F6' },
        ],
      },
      {
        id: 2,
        chapterNumber: 2,
        title: 'Inside the Silicon Lattice: Knocking Electrons Free',
        startSec: 22,
        endSec: 48,
        durationSec: 26,
        visualType: 'mechanism-diagram',
        diagramTitle: 'Semiconductor p-n Junction Cross-Section',
        keyVisualConcept: 'Photons hitting silicon atoms, ejecting valence electrons into a unidirectional copper circuit',
        caption: 'Inside the solar panel, photons strike silicon crystals. Boom! Valence electrons get knocked free and march in a one-way circle: that is electric current!',
        narration: 'Now let’s zoom deep inside the dark blue panel! Photons strike silicon atoms. Each photon gives its energy to an electron, knocking it loose across the barrier. Millions of marching electrons create direct electric current!',
        soundCue: 'Gentle electric hum and chime',
        interactivePrompt: 'Tap on a silicon atom to dislodge an electron into the copper wire!',
        visualElements: [
          { label: 'Silicon Atom Grid', icon: '⚛️', actionDescription: 'Crystalline lattice with orbiting valence electrons', highlightColor: '#6366F1' },
          { label: 'Photon Strike', icon: '⚡', actionDescription: 'Incoming photon knocks valence electron from orbital', highlightColor: '#EF4444' },
          { label: 'Electron Flow', icon: '🔵', actionDescription: 'Blue electron particles rushing through copper wire (Amperes)', highlightColor: '#06B6D4' },
          { label: 'Charge Controller', icon: '🎛️', actionDescription: 'Regulating voltage to protect the 12V storage battery', highlightColor: '#10B981' },
        ],
      },
      {
        id: 3,
        chapterNumber: 3,
        title: 'Safe Home Experiment: Solar Heat Absorption',
        startSec: 48,
        endSec: 72,
        durationSec: 24,
        visualType: 'experiment-demo',
        diagramTitle: 'Black vs White Heat Absorption Demo',
        keyVisualConcept: 'Black surface absorbs radiant energy, while white surface reflects photons away',
        caption: 'Try this at home! Wrap one bottle in black cloth and one in white cloth. In 20 minutes of sunshine, test the water: the black bottle is warm!',
        narration: 'You can test solar absorption right in your compound! Fill two cups with water. Wrap one in black cloth and one in white cloth. Set them in the sun. In just twenty minutes, the black cup gets warm because dark colors trap solar photons!',
        soundCue: 'Water pouring and sunshine birds',
        interactivePrompt: 'Touch the black bottle to reveal its thermal energy absorption!',
        visualElements: [
          { label: 'Black Bottle (Absorber)', icon: '⬛', actionDescription: 'Absorbs 95% of incoming radiant energy, warming water', highlightColor: '#1F2937' },
          { label: 'White Bottle (Reflector)', icon: '⬜', actionDescription: 'Reflects 85% of photons, water stays cool', highlightColor: '#E5E7EB' },
          { label: 'Temperature Gauge', icon: '🌡️', actionDescription: 'Mercury rising 6 degrees higher in the black bottle', highlightColor: '#DC2626' },
        ],
      },
      {
        id: 4,
        chapterNumber: 4,
        title: 'World Changer Takeaway: Powering Our Community',
        startSec: 72,
        endSec: 90,
        durationSec: 18,
        visualType: 'impact-mastery',
        diagramTitle: 'Clean Energy Independence & Enterprise',
        keyVisualConcept: 'Free electricity transforms homework study, night clinic lights, and water irrigation',
        caption: 'You now know the science of solar power! By understanding this, you can build study lamps, fix battery chargers, and power an entire community for free.',
        narration: 'Congratulations! You now understand the physics of solar energy. By mastering this, a child in Africa or anywhere can assemble study lamps, charge batteries, and power an entire school with clean, free energy from the sky!',
        soundCue: 'Triumphant achievement chime',
        interactivePrompt: 'Tap the bright study lamp to complete your 90-second visual discovery!',
        visualElements: [
          { label: 'Clean LED Light', icon: '💡', actionDescription: 'Bright light shining on an open school workbook', highlightColor: '#F59E0B' },
          { label: 'Clean Energy Stamp', icon: '🏅', actionDescription: 'UN SDG 7 Affordable & Clean Energy badge earned', highlightColor: '#10B981' },
          { label: 'Learner Mastery', icon: '🎓', actionDescription: 'Mastery certificate stamped into Learning Passport', highlightColor: '#8B5CF6' },
        ],
      },
    ],
  },

  // 2. Water Purification & Health
  'clean-water-filtration': {
    durationSeconds: 90,
    videoTitle: '90-Second Visual Journey: Building a Bio-Sand Water Filter',
    topicSummary: 'Watch how three natural layers—gravel, charcoal, and fine sand—turn turbid stream water crystal clear.',
    themeCategory: 'biology',
    keyFormulaOrLaw: 'Mechanical & Bio-Adsorption Filtration: Turbidity Drop > 98%',
    practicalTakeaway: 'Clean water prevents disease. Clean gravel and activated charcoal save lives.',
    scenes: [
      {
        id: 1,
        chapterNumber: 1,
        title: 'The Challenge: Turbid Water From Stream or Borehole',
        startSec: 0,
        endSec: 22,
        durationSec: 22,
        visualType: 'concept-hook',
        diagramTitle: 'Microscopic View of Unfiltered Water',
        keyVisualConcept: 'Suspended silt particles, organic debris, and microbes clouding freshwater',
        caption: 'Water is life, but stream water often carries clay silt and invisible microbes. Let us watch how gravity and nature clean every drop.',
        narration: 'Water is life for our family, crops, and animals. But river or runoff water carries suspended clay silt and bacteria. How can we make it sparkling clean using only stones, sand, and charcoal?',
        soundCue: 'Rushing stream water',
        interactivePrompt: 'Tap the muddy water droplet to inspect suspended silt under the microscope!',
        visualElements: [
          { label: 'Turbid Water', icon: '💧', actionDescription: 'Brownish water carrying suspended clay particulates', highlightColor: '#92400E' },
          { label: 'Silt Particulates', icon: '🟤', actionDescription: 'Microscopic silt and organic matter floating in water', highlightColor: '#B45309' },
          { label: 'Glass Container', icon: '🏺', actionDescription: 'Clean transparent testing cylinder', highlightColor: '#0284C7' },
        ],
      },
      {
        id: 2,
        chapterNumber: 2,
        title: 'The Three Miracle Filtration Layers',
        startSec: 22,
        endSec: 48,
        durationSec: 26,
        visualType: 'mechanism-diagram',
        diagramTitle: 'Gravel, Charcoal & Sand Stratified Filter',
        keyVisualConcept: 'Top gravel traps leaves; middle charcoal adsorbs odors & toxins; fine sand traps microbes',
        caption: 'Layer 1: Coarse gravel stops big twigs. Layer 2: Crushed charcoal adsorbs chemicals and smells. Layer 3: Fine sand traps silt and bacteria!',
        narration: 'Watch the three layers in action! At the top, coarse gravel catches leaves and twigs. In the middle, porous wood charcoal adsorbs bad odors and toxins. At the bottom, dense fine sand traps tiny silt and bacteria as gravity pulls water down.',
        soundCue: 'Slow water percolation drops',
        interactivePrompt: 'Tap each layer to see what it filters from the stream!',
        visualElements: [
          { label: 'Top Gravel Layer', icon: '🪨', actionDescription: 'Coarse stones trap large debris and leaves', highlightColor: '#78716C' },
          { label: 'Charcoal Layer', icon: '⬛', actionDescription: 'Microporous carbon adsorbs dissolved toxins and odors', highlightColor: '#1F2937' },
          { label: 'Fine Sand Bed', icon: '🏖️', actionDescription: 'Dense sand grains trap fine clay particles and microbes', highlightColor: '#F59E0B' },
          { label: 'Percolating Droplets', icon: '💧', actionDescription: 'Crystal clean droplets dripping from bottom spout', highlightColor: '#06B6D4' },
        ],
      },
      {
        id: 3,
        chapterNumber: 3,
        title: 'Safe Home Experiment: Plastic Bottle Micro-Filter',
        startSec: 48,
        endSec: 72,
        durationSec: 24,
        visualType: 'experiment-demo',
        diagramTitle: 'Recycled Plastic Bottle Gravity Filter Assembly',
        keyVisualConcept: 'Cutting inverted 2L bottle, plugging neck with clean cloth, layering gravel and sand',
        caption: 'Cut an empty plastic bottle in half. Put a clean cloth at the neck. Add charcoal, fine sand, and small stones. Pour muddy water in—clean water drips out!',
        narration: 'You can build this with a clean recycled two-liter bottle! Cut off the bottom, invert it, plug the neck with clean cloth, and pack your washed charcoal and sand. Pour in muddy water, and watch crystal clear water drip into your cup below!',
        soundCue: 'Crystal clear water droplet chime',
        interactivePrompt: 'Pour the test water through your filter model!',
        visualElements: [
          { label: 'Inverted Bottle Body', icon: '🧴', actionDescription: 'Transparent casing showing the three stratified layers', highlightColor: '#38BDF8' },
          { label: 'Cloth Filter Plug', icon: '🧣', actionDescription: 'Clean cotton cloth keeping sand from falling into the cup', highlightColor: '#F43F5E' },
          { label: 'Collecting Cup', icon: '🥛', actionDescription: 'Pure filtered water accumulating safely below', highlightColor: '#0EA5E9' },
        ],
      },
      {
        id: 4,
        chapterNumber: 4,
        title: 'World Changer Takeaway: Clean Water for Every Child',
        startSec: 72,
        endSec: 90,
        durationSec: 18,
        visualType: 'impact-mastery',
        diagramTitle: 'Boiling & Safe Storage for Community Health',
        keyVisualConcept: 'Filtered water boiled for 1 minute becomes 100% sterile drinking water saving lives',
        caption: 'Boil the filtered water for one minute, and it is 100% safe to drink! You now possess a life-saving scientific skill for your whole village.',
        narration: 'Always remember: boil your filtered water for one minute to destroy any lingering viruses! You now possess an essential life-saving science skill that can protect your family and community forever.',
        soundCue: 'Celebration splash and victory bells',
        interactivePrompt: 'Tap the water glass to complete your 90-second visual discovery!',
        visualElements: [
          { label: 'Pure Drinking Glass', icon: '✨', actionDescription: 'Safe, clear, healthy drinking water for children', highlightColor: '#06B6D4' },
          { label: 'UN SDG 6 Badge', icon: '🏅', actionDescription: 'Clean Water & Sanitation mastery unlocked', highlightColor: '#10B981' },
          { label: 'Health Shield', icon: '🛡️', actionDescription: 'Family protected against waterborne illness', highlightColor: '#6366F1' },
        ],
      },
    ],
  },
};

/**
 * Universal dynamic fallback generator for any lesson module
 * Creates a structured 4-scene, 90-second animated video storyboard
 */
export function getOrGenerateLessonVideo(lesson: LessonModule): AnimatedLessonVideo {
  if (lesson.animatedVideo) {
    return lesson.animatedVideo;
  }

  // Check curated database by ID or keywords
  const lId = lesson.id.toLowerCase();
  const lTitle = lesson.title.toLowerCase();

  if (CURATED_LESSON_VIDEOS[lId]) {
    return CURATED_LESSON_VIDEOS[lId];
  }
  if (lTitle.includes('solar') || lTitle.includes('sun') || lTitle.includes('light')) {
    return CURATED_LESSON_VIDEOS['solar-energy-discovery'];
  }
  if (lTitle.includes('water') || lTitle.includes('clean water') || lTitle.includes('filter')) {
    return CURATED_LESSON_VIDEOS['clean-water-filtration'];
  }

  // Construct a bespoke 90-second video storyboard from the lesson content
  const themeCategory = 
    lesson.category === 'science' || lesson.category === 'technology' ? 'science' :
    lesson.category === 'math' || lesson.category === 'finance' ? 'math' :
    lesson.category === 'agriculture' ? 'biology' :
    lesson.category === 'practical-skills' || lesson.category === 'projects' ? 'manufacturing' :
    lesson.category === 'social-kindness' || lesson.category === 'humanity-society' ? 'society' : 'universal';

  const step1 = lesson.mission.step1_learn;
  const step2 = lesson.mission.step2_discuss;
  const step3 = lesson.mission.step3_activity;
  const community = lesson.communityMission;

  return {
    durationSeconds: 90,
    videoTitle: `90-Second Visual Journey: ${lesson.title}`,
    topicSummary: lesson.subtitle,
    themeCategory,
    keyFormulaOrLaw: lesson.cambridgeAlignment?.cambridgeObjectiveTitle || lesson.objectives[0] || 'First-Principles Discovery',
    practicalTakeaway: lesson.badgeDescription || 'Permanent practical capability through visual discovery.',
    scenes: [
      {
        id: 1,
        chapterNumber: 1,
        title: `Chapter 1: The Everyday Curiosity (${lesson.title})`,
        startSec: 0,
        endSec: 22,
        durationSec: 22,
        visualType: 'concept-hook',
        diagramTitle: 'Everyday Reality & Mystery',
        keyVisualConcept: step1.localExample || step1.keyConcept,
        caption: `Look closely around your home. ${step1.story ? step1.story.slice(0, 120) : step1.keyConcept}...`,
        narration: `Welcome to this 90-second visual discovery! Notice what happens in our daily lives: ${step1.story ? step1.story.slice(0, 140) : step1.keyConcept}. Why does this happen? Let us look beneath the surface!`,
        soundCue: 'Gentle opening curiosity chime',
        interactivePrompt: 'Tap the visual focus point to begin exploring!',
        visualElements: [
          { label: 'Everyday Context', icon: '🏡', actionDescription: 'Everyday environment illustrating the core question', highlightColor: '#F59E0B' },
          { label: 'Core Wonder', icon: '💡', actionDescription: step1.keyConcept, highlightColor: '#6366F1' },
          { label: 'Observation Lens', icon: '🔍', actionDescription: 'Zooming into the scientific mechanism', highlightColor: '#10B981' },
        ],
      },
      {
        id: 2,
        chapterNumber: 2,
        title: `Chapter 2: The Core Mechanism & Moving Model`,
        startSec: 22,
        endSec: 48,
        durationSec: 26,
        visualType: 'mechanism-diagram',
        diagramTitle: `${lesson.categoryLabel} Interactive Model`,
        keyVisualConcept: step2.explainSimply || step1.keyConcept,
        caption: `The underlying principle: ${step2.explainSimply ? step2.explainSimply.slice(0, 130) : step1.keyConcept}`,
        narration: `Here is the golden mechanism! ${step2.explainSimply ? step2.explainSimply.slice(0, 150) : step1.keyConcept}. Notice how cause leads directly to effect when we model the process clearly.`,
        soundCue: 'Rhythmic mechanical pulse of understanding',
        interactivePrompt: 'Tap on the moving parts to inspect how the mechanism connects!',
        visualElements: [
          { label: 'Primary Factor', icon: '⚙️', actionDescription: 'Initial force or value initiating the change', highlightColor: '#3B82F6' },
          { label: 'Transformation', icon: '🔄', actionDescription: 'Dynamic transition of energy, numbers, or logic', highlightColor: '#8B5CF6' },
          { label: 'Resulting State', icon: '✨', actionDescription: 'Observable outcome verified by mathematics or science', highlightColor: '#10B981' },
        ],
      },
      {
        id: 3,
        chapterNumber: 3,
        title: `Chapter 3: Hands-On Activity in Action`,
        startSec: 48,
        endSec: 72,
        durationSec: 24,
        visualType: 'experiment-demo',
        diagramTitle: step3.gameOrExperimentName || 'Home Laboratory Test',
        keyVisualConcept: step3.whatChildLearns || 'Empirical test with household materials',
        caption: `Now try it yourself! Use: ${lesson.householdMaterials.slice(0, 3).join(', ')}. Follow the animated steps!`,
        narration: `Now it is your turn to test this empirically! Gather simple items: ${lesson.householdMaterials.slice(0, 2).join(' and ')}. Watch how each step proves the rule right in front of your own eyes!`,
        soundCue: 'Hands-on laboratory workbench sounds',
        interactivePrompt: 'Tap each step to see the interactive experiment reaction!',
        visualElements: [
          { label: 'Step 1: Setup', icon: '📦', actionDescription: 'Assembling household items on table or ground', highlightColor: '#6B7280' },
          { label: 'Step 2: Action', icon: '🧪', actionDescription: step3.instructions[0] || 'Executing the empirical test', highlightColor: '#EC4899' },
          { label: 'Step 3: Discovery', icon: '🎯', actionDescription: step3.whatChildLearns || 'Recording the observable result', highlightColor: '#F59E0B' },
        ],
      },
      {
        id: 4,
        chapterNumber: 4,
        title: `Chapter 4: Real-World Impact & Golden Mastery`,
        startSec: 72,
        endSec: 90,
        durationSec: 18,
        visualType: 'impact-mastery',
        diagramTitle: community?.title || 'World Changer Mastery',
        keyVisualConcept: community?.impactGoal || 'Turning learning into practical service and enterprise',
        caption: `Mastery achieved! ${lesson.badgeName}: ${lesson.badgeDescription}. You are a true World Changer!`,
        narration: `Congratulations! In just 90 seconds, you unlocked a foundational international concept. You now carry real capability in your mind and hands to build, serve, and transform your community!`,
        soundCue: 'Triumphant fanfare and badge stamp sound',
        interactivePrompt: 'Tap the golden achievement badge to stamp your progress!',
        visualElements: [
          { label: lesson.badgeName, icon: '🏅', actionDescription: 'Certified capability earned', highlightColor: '#F59E0B' },
          { label: 'Community Service', icon: '🌍', actionDescription: community?.impactGoal || 'Sharing your capability with neighbors', highlightColor: '#10B981' },
          { label: 'Next Quest', icon: '🚀', actionDescription: 'Ready to learn and build even more', highlightColor: '#6366F1' },
        ],
      },
    ],
  };
}

/**
 * Dynamic 90-Second Animated Video Generator for AI Self-Educate Quests
 * Enables ANY topic requested by the learner (Gaokao math, Singapore bar model,
 * solar microgrids, poultry enterprise, optics, quadratic equations, etc.)
 * to have a synchronized 90-second animated visual video.
 */
export function generateAnimatedVideoForTopic(
  topic: string,
  levelLabel: string = 'SCHOLAR LEVEL',
  topicSummary?: string,
  coreExplanation?: string,
  handsOnExperiment?: { title: string; steps: string[]; whatItProves: string }
): AnimatedLessonVideo {
  const cleanTopic = topic.trim() || 'Universal Knowledge';
  const summary = topicSummary || `A structured visual deconstruction of ${cleanTopic} from first principles to real-world application.`;

  // Infer theme category
  const tLower = cleanTopic.toLowerCase();
  let themeCategory = 'universal';
  if (tLower.includes('solar') || tLower.includes('light') || tLower.includes('energy') || tLower.includes('physics') || tLower.includes('optics') || tLower.includes('electric')) {
    themeCategory = 'science';
  } else if (tLower.includes('math') || tLower.includes('equation') || tLower.includes('ratio') || tLower.includes('bar model') || tLower.includes('algebra') || tLower.includes('calculus') || tLower.includes('vieta')) {
    themeCategory = 'math';
  } else if (tLower.includes('water') || tLower.includes('cell') || tLower.includes('enzyme') || tLower.includes('plant') || tLower.includes('biology') || tLower.includes('filter') || tLower.includes('fodder')) {
    themeCategory = 'biology';
  } else if (tLower.includes('soap') || tLower.includes('manufactur') || tLower.includes('circuit') || tLower.includes('build') || tLower.includes('poultry') || tLower.includes('product')) {
    themeCategory = 'manufacturing';
  }

  const expTitle = handsOnExperiment?.title || `Empirical Test of ${cleanTopic}`;
  const expProves = handsOnExperiment?.whatItProves || `Validates the underlying physical and mathematical behavior of ${cleanTopic}.`;

  return {
    durationSeconds: 90,
    videoTitle: `90-Second Visual Journey: ${cleanTopic}`,
    topicSummary: summary,
    themeCategory,
    keyFormulaOrLaw: `${levelLabel}: International Standards Crosswalk`,
    practicalTakeaway: `First-principles mastery of ${cleanTopic} enables immediate real-world innovation.`,
    scenes: [
      {
        id: 1,
        chapterNumber: 1,
        title: `1. The Big Curiosity: What is ${cleanTopic}?`,
        startSec: 0,
        endSec: 22,
        durationSec: 22,
        visualType: 'concept-hook',
        diagramTitle: 'The Real-World Phenomenon',
        keyVisualConcept: summary,
        caption: `Why does ${cleanTopic} matter? Watch how this fundamental concept appears in nature, technology, and human life.`,
        narration: `Welcome to your 90-second animated visual journey on ${cleanTopic}! Why is this concept so celebrated in premier international curricula? Because it describes a real force and mechanism right in our everyday world. Let us deconstruct it!`,
        soundCue: 'Opening ambient synth spark',
        interactivePrompt: `Tap the center of ${cleanTopic} to reveal its first principles!`,
        visualElements: [
          { label: 'Phenomenon', icon: '🌐', actionDescription: 'Everyday observation in natural or technological systems', highlightColor: '#3B82F6' },
          { label: 'Inquiry Spark', icon: '⚡', actionDescription: `Core question: How does ${cleanTopic} work?`, highlightColor: '#F59E0B' },
          { label: 'Global Standard', icon: '🎓', actionDescription: levelLabel, highlightColor: '#10B981' },
        ],
      },
      {
        id: 2,
        chapterNumber: 2,
        title: `2. The Core Mechanism & Visual Proof`,
        startSec: 22,
        endSec: 48,
        durationSec: 26,
        visualType: 'mechanism-diagram',
        diagramTitle: `Interactive Scientific / Mathematical Model of ${cleanTopic}`,
        keyVisualConcept: coreExplanation ? coreExplanation.slice(0, 140) : `Deep cause and effect underlying ${cleanTopic}`,
        caption: `Look inside the system! When the primary variable shifts, the whole system reacts according to exact mathematical laws.`,
        narration: `Here is the engine of the concept! When we zoom into the core structure, the parts interact under exact laws. Notice how the input values transform step-by-step into predictable, measurable outcomes. This is the exact mechanism tested in world exams!`,
        soundCue: 'Pulsing clockwork calculation sounds',
        interactivePrompt: 'Interact with the moving nodes to see variables change in real time!',
        visualElements: [
          { label: 'Input Variable', icon: '📊', actionDescription: 'Independent variable or driving force', highlightColor: '#6366F1' },
          { label: 'Core Equation', icon: '🧮', actionDescription: 'Governing physical law or mathematical identity', highlightColor: '#EC4899' },
          { label: 'Output State', icon: '✨', actionDescription: 'Resulting equilibrium or solution', highlightColor: '#10B981' },
        ],
      },
      {
        id: 3,
        chapterNumber: 3,
        title: `3. Step-by-Step Household Verification`,
        startSec: 48,
        endSec: 72,
        durationSec: 24,
        visualType: 'experiment-demo',
        diagramTitle: expTitle,
        keyVisualConcept: expProves,
        caption: `True autodidacts test their ideas! Follow this step-by-step test using everyday household materials.`,
        narration: `A true autodidact never merely memorizes—we test and prove! Using simple materials in your home or compound, execute this empirical experiment. Watch the observation confirm the theoretical derivation right before your eyes!`,
        soundCue: 'Empirical measurement and chemical reaction tone',
        interactivePrompt: 'Touch each test tube or step to run the animated simulation!',
        visualElements: [
          { label: 'Setup & Baseline', icon: '🧪', actionDescription: 'Preparing simple materials and baseline controls', highlightColor: '#F59E0B' },
          { label: 'Active Test', icon: '🔥', actionDescription: 'Introducing the variable or perturbation', highlightColor: '#EF4444' },
          { label: 'Empirical Proof', icon: '✅', actionDescription: expProves, highlightColor: '#10B981' },
        ],
      },
      {
        id: 4,
        chapterNumber: 4,
        title: `4. World Changer Mastery & Real-World Value`,
        startSec: 72,
        endSec: 90,
        durationSec: 18,
        visualType: 'impact-mastery',
        diagramTitle: 'Autonomous Creation & Innovation',
        keyVisualConcept: `Turn your knowledge of ${cleanTopic} into tangible products, exams mastery, and community impact.`,
        caption: `Mastery achieved! In 90 seconds, you gained first-principles command of ${cleanTopic}. Apply it to innovate and serve!`,
        narration: `Mastery unlocked! In just ninety seconds, you have visualized, deconstructed, and empirically verified ${cleanTopic}. Use this knowledge to build solutions, innovate products, and elevate your community!`,
        soundCue: 'Inspiring graduation bells and applause',
        interactivePrompt: 'Tap the golden compass to save this visual quest to your memory!',
        visualElements: [
          { label: 'Mastery Star', icon: '🌟', actionDescription: 'Deep first-principles visual comprehension', highlightColor: '#F59E0B' },
          { label: 'Innovation Value', icon: '🏭', actionDescription: 'Commercial or community application', highlightColor: '#3B82F6' },
          { label: 'Autodidact Passport', icon: '📘', actionDescription: 'Permanent intellectual capability registered', highlightColor: '#10B981' },
        ],
      },
    ],
  };
}
