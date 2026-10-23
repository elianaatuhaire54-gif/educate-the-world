import { LessonModule } from '../types/curriculum';

export const ENRICHED_CURRICULUM_MODULES: LessonModule[] = [
  // =========================================================================
  // LANGUAGE & STORIES (Oral Tradition, Proverb Wisdom, Folktales & Reading)
  // =========================================================================
  {
    id: 'lang-folktale-tortoise-wisdom',
    ageBand: '6-8',
    stageName: 'Build',
    category: 'language',
    categoryLabel: 'Language & Stories • African Folktale Wisdom',
    title: 'The Tortoise and the Calabash of Wisdom',
    subtitle: 'Exploring oral storytelling traditions, moral comprehension, and why wisdom belongs to everyone',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'BookOpen',
    themeColor: 'from-amber-600 to-orange-700',
    badgeName: 'Master Storyteller',
    badgeDescription: 'Can narrate a traditional folktale with moral expression and voice acting',
    objectives: [
      'Understand the narrative arc: Beginning, conflict, climax, and lesson',
      'Learn key storytelling proverbs in local dialects (Luganda, Swahili, Runyankole)',
      'Explain why hoarding knowledge harms a community, while sharing enriches everyone'
    ],
    householdMaterials: ['A small bowl or cup (representing the Calabash)', 'A piece of cloth or string', 'Paper and crayon'],
    dialectWords: [
      { localWord: 'Enfumo', englishMeaning: 'Folktale or story with a moral lesson', language: 'Luganda' },
      { localWord: 'Hadithi', englishMeaning: 'Story / Tale', language: 'Swahili' },
      { localWord: 'Enfumu', englishMeaning: 'Proverb / Wisdom story', language: 'Runyankole' },
      { localWord: 'Ododo', englishMeaning: 'Fable or folktale', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Village & Family Fireside Storyteller',
      impactGoal: 'Bring joy, moral wisdom, and storytelling laughter to at least 2 younger siblings or neighbor kids',
      actionSteps: [
        'Practice narrating the Tortoise story using expressive facial gestures and animal sounds.',
        'Gather 2 or more younger children in your compound or sitting room.',
        'Tell the story and ask them: "Why was Tortoise wrong to keep wisdom in a pot all to himself?"',
        'Teach them one new vocabulary word in your local mother tongue.'
      ],
      worldChangerPrinciple: 'Communities thrive when knowledge and stories are passed down with generosity, not hidden away in selfishness.',
      dialectPhrase: 'Amagezi tegasulwa lumu (Wisdom is not brewed in one pot alone)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'Can one single person know everything in the world? What happens when we refuse to share good ideas with others?',
      simplifiedExplanation: 'Long ago in the African savannah, Tortoise believed he could gather all the wisdom in the world into a single gourd (calabash) and hang it high up a tree where nobody could reach it. But as he tried to climb with the pot tied to his chest, he kept slipping. A small child standing below laughed and said: "Father Tortoise, tie the pot to your back so your arms are free to climb!" Tortoise realized a small child had wisdom he didn’t have! In frustration, he dropped the pot. It shattered, and wisdom scattered across the entire world for everyone to share.',
      safeHomeActivity: {
        title: 'The Calabash of Wisdom Roleplay',
        materials: ['A small plastic cup', 'Strip of scrap cloth'],
        steps: [
          'Tie the plastic cup to the child’s chest and ask them to hug a pillar or table leg. Notice how clumsy it is.',
          'Now move the cup to their back. Notice how easy it is to move!',
          'Roleplay the dialogue between proud Tortoise and the clever child.',
          'Write down one piece of wisdom you learned today on a slip of paper and place it in the cup.'
        ]
      },
      followUpQuestions: [
        { question: 'Why couldn’t Tortoise climb the tree at first?', sampleAnswer: 'The pot was tied to his front, blocking his arms.' },
        { question: 'Who gave Tortoise the winning idea?', sampleAnswer: 'A humble little child watching from below.' },
        { question: 'What does this teach us about listening to everyone?', sampleAnswer: 'Even the youngest person can have valuable wisdom.' }
      ],
      parentChallenge: 'Ask your child to recount a story an elder told them, focusing on the moral lesson at the end.'
    },
    mission: {
      step1_learn: {
        title: 'The Great African Folktale',
        duration: '5 mins',
        story: 'In our African heritage, stories were told around evening cooking fires (Ekyoto) under the stars. They were not just for fun; they were living schoolrooms that taught bravery, honesty, and community care.',
        keyConcept: 'Wisdom is shared, not hoarded. Good storytellers use tone of voice, pacing, and emotional expression.',
        localExample: 'Just like elders in Mukono or Gulu gather children under a mango tree to share proverbs, we keep our community strong through oral history.'
      },
      step2_discuss: {
        title: 'Wisdom in Community',
        duration: '5 mins',
        askFirst: 'Has a younger brother, sister, or friend ever given you a great idea you didn’t think of?',
        listenFor: 'Humility to recognize that everyone has insights to contribute.',
        explainSimply: 'No leader knows everything. Great leaders listen to their community.',
        parentTip: 'Praise your child whenever they acknowledge someone else’s good idea.'
      },
      step3_activity: {
        title: 'Folktale Expression Theater',
        duration: '7 mins',
        gameOrExperimentName: 'The Voice Shifter',
        instructions: [
          'Say the line "Wisdom is for everyone!" in Tortoise’s slow, deep voice.',
          'Say it in the child’s cheerful, high voice.',
          'Say it in the mother bird’s flying melody.',
          'Draw Tortoise sharing the shattered calabash with friendly animals in the compound.'
        ],
        whatChildLearns: 'Vocal modulation, dramatic empathy, and narrative structure.'
      },
      step4_quiz: {
        title: 'Story Comprehension Check',
        duration: '3 mins',
        questions: [
          {
            question: 'What did Tortoise try to trap in his calabash?',
            options: ['All the honey in the forest', 'All the wisdom in the world', 'All the gold coins', 'Rain clouds'],
            correctIndex: 1,
            explanation: 'Tortoise tried to keep all the wisdom for himself, which is impossible!'
          },
          {
            question: 'What African proverb reminds us that wisdom is shared?',
            options: ['One finger cannot crush a louse / Amagezi mugabo', 'A running goat eats grass', 'Money hides under rocks', 'Birds sleep in trees'],
            correctIndex: 0,
            explanation: 'Both proverbs teach that we need each other to accomplish great things.'
          }
        ]
      }
    },
    parentChallenge: 'Have your child tell this story to relatives or friends over dinner or tea tonight.',
    fiveMinuteBite: {
      title: '5-Minute Proverbs & Voices',
      quickPrompt: 'Tell me the Tortoise story in 3 sentences using your funniest deep animal voice!',
      quickAction: 'Share one lesson you learned with someone in the home right now.'
    },
    whatsAppSnippet: `📖 *HOME ACADEMY: Folktale Wisdom (Ages 6-8)*
*Story:* The Tortoise & The Calabash of Wisdom
*Moral:* Wisdom belongs to everyone, not just one person.
*Dialect:* Enfumo (Luganda) / Hadithi (Swahili) = Moral Story.
*Community Mission:* Tell a moral story to a younger neighbor child today!
*Passport Stamp:* Master Storyteller 🐢📚`,
    audioNarrationText: 'Long ago in the African savannah, Tortoise thought he could lock up all wisdom in a calabash. But wisdom belongs to all people when we share openly with love.'
  },

  {
    id: 'lang-power-of-words-proverbs',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'language',
    categoryLabel: 'Language & Stories • The Power of Words & Proverbs',
    title: 'Words That Build: African Proverbs & Persuasive Speech',
    subtitle: 'How ancient cultural proverbs shape speech, respectful debate, and verbal leadership',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-teal-600 to-emerald-700',
    badgeName: 'Proverb Diplomat',
    badgeDescription: 'Can recite 3 cultural proverbs and apply them in conflict de-escalation',
    objectives: [
      'Master 3 regional proverbs in Luganda, Swahili, and Runyankole',
      'Analyze how words can either heal or hurt relationships in the family and neighborhood',
      'Practice respectful persuasion without raising voice or shouting'
    ],
    householdMaterials: ['Notebook or paper', 'Pen or pencil'],
    dialectWords: [
      { localWord: 'Engero ensonge', englishMeaning: 'Proverbs / sayings with deep wisdom', language: 'Luganda' },
      { localWord: 'Methali', englishMeaning: 'Proverbs', language: 'Swahili' },
      { localWord: 'Enfumu', englishMeaning: 'Wise ancestral saying', language: 'Runyankole' },
      { localWord: 'Carokop', englishMeaning: 'Wise proverb or riddle', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Words of Blessing & Dignity Mission',
      impactGoal: 'Speak 3 genuine, uplifting words of affirmation to hardworking community members (e.g. sanitation worker, food vendor, elder)',
      actionSteps: [
        'Think of 3 people who serve your community without much thanks.',
        'Greet them respectfully using polite mother-tongue greetings (e.g., "Gyebaleko ssebo/nnyabo", "Asante sana kwa kazi yako").',
        'Offer a sincere compliment: "Thank you for keeping our road clean / preparing fresh food for our town."',
        'Observe how dignity and kindness brighten their face.'
      ],
      worldChangerPrinciple: 'Your tongue holds the power to build up or tear down. Leaders use their speech to bring hope, courage, and respect to everyday people.',
      dialectPhrase: 'Akabina akakulu kasesa ennyama (Respectful words bring cooperation and peace)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'Have you ever heard someone use a single harsh word that ruined your entire day? How can we use words instead to heal and lift people?',
      simplifiedExplanation: 'In East African tradition, elders rarely shouted when resolving conflicts. Instead, they used "Engero" or "Methali" (proverbs). A proverb is a short, memorable sentence packed with centuries of wisdom. When we learn to speak thoughtfully with proverbs and calm respect, people listen to our message rather than fighting our anger.',
      safeHomeActivity: {
        title: 'The Proverb Matchmaker',
        materials: ['Paper strips', 'Pen'],
        steps: [
          'Write down these 3 proverbs on slips of paper:',
          '1. "Agali awamu ge galuma ennyama" (Teeth that are together can bite tough meat = Unity gives strength).',
          '2. "Mti mkuu ukigwa, wana wa ndege huyumba" (When a giant tree falls, the baby birds sway = We must protect our community leaders and elders).',
          '3. "Akabiite tikabura kamuuba" (Spoiled things lack good counsel = Wisdom requires listening).',
          'Practice explaining which proverb fits a school teamwork problem or family chore challenge.'
        ]
      },
      followUpQuestions: [
        { question: 'What does "Agali awamu ge galuma ennyama" teach us?', sampleAnswer: 'When people work together in unity, they can overcome challenges that one person alone cannot.' },
        { question: 'Why is a calm proverb better than screaming during a disagreement?', sampleAnswer: 'A proverb helps people think about wisdom without feeling attacked.' }
      ],
      parentChallenge: 'Discuss with your child a proverb your grandparents used to repeat, and what it meant in daily life.'
    },
    mission: {
      step1_learn: {
        title: 'The Architecture of Speech',
        duration: '5 mins',
        story: 'King Solomon in Proverbs 18:21 wrote that death and life are in the power of the tongue. In our African communities, a person known for gentle, wise speech (Omuntu ow’empisa n’amagezi) is trusted as a judge, counselor, and community elder.',
        keyConcept: 'Wisdom speaks with purpose, clarity, and kindness. Proverbs pack deep life rules into short memory anchors.',
        localExample: 'At village meetings (Local Council / LC1) or city clan gatherings, the elder who speaks calmly with rich proverbs settles arguments that anger could never solve.'
      },
      step2_discuss: {
        title: 'Constructive vs Destructive Words',
        duration: '5 mins',
        askFirst: 'What is the difference between speaking truth with love and speaking truth with cruelty?',
        listenFor: 'Understanding that the goal is to help the other person grow, not humiliate them.',
        explainSimply: 'Truth without love is a hammer. Love without truth is a lie. When we combine truth with love, we build people up.',
        parentTip: 'Encourage your child to disagree politely with phrases like "I see your point, but consider this..."'
      },
      step3_activity: {
        title: 'The 60-Second Proverb Speech',
        duration: '7 mins',
        gameOrExperimentName: 'Youth Village Council',
        instructions: [
          'Pick one community problem: Litter around the trading center, or children fighting over a soccer ball.',
          'Start your speech with an African proverb.',
          'Explain why unity and cooperation will solve the issue.',
          'Deliver the speech to your parent in exactly 60 seconds.'
        ],
        whatChildLearns: 'Public speaking clarity, conciseness, and cultural rhetoric.'
      },
      step4_quiz: {
        title: 'Proverb & Rhetoric Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What does "Kidole kimoja hakivunji chawa" mean in Swahili?',
            options: ['One finger cannot crush a louse (We need unity to solve problems)', 'Always wash your hands before eating', 'Lice like to live in fingers', 'Run fast when you see insects'],
            correctIndex: 0,
            explanation: 'It is a celebrated East African proverb showing that community solidarity is necessary for success.'
          },
          {
            question: 'What is the best way to handle a dispute with a peer?',
            options: ['Shout louder than them so they get scared', 'Use calm, respectful words and look for a win-win solution', 'Gossip about them behind their back', 'Throw something at them'],
            correctIndex: 1,
            explanation: 'Calm, thoughtful words de-escalate tension and protect relationships.'
          }
        ]
      }
    },
    parentChallenge: 'Ask your child to teach a younger sibling one wise proverb before bed tonight.',
    fiveMinuteBite: {
      title: '5-Minute Proverb Challenge',
      quickPrompt: 'What proverb teaches us to never give up when learning is difficult?',
      quickAction: 'Write down "Agali awamu ge galuma ennyama" and put it on the fridge or cupboard.'
    },
    whatsAppSnippet: `🗣️ *HOME ACADEMY: Words That Build (Ages 9-12)*
*Focus:* The Power of African Proverbs & Persuasive Speech.
*Proverb:* "Agali awamu ge galuma ennyama" (Unity brings strength).
*Community Mission:* Speak 3 genuine words of blessing to workers in your area today!
*Passport Stamp:* Proverb Diplomat 🏆`,
    audioNarrationText: 'Words hold the power of life. When you speak with wisdom and proverbs, you bring peace and understanding to your whole community.'
  },

  // =========================================================================
  // PRACTICAL SCIENCE (Hands-On, Water Filtration, Soil, Clean Living)
  // =========================================================================
  {
    id: 'sci-clean-water-filtration-health',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'science',
    categoryLabel: 'Practical Science • Clean Water Engineering',
    title: 'Village & City Clean Water Filtration Lab',
    subtitle: 'Building a multi-layer bio-sand filter with everyday materials to understand disease prevention',
    estimatedMinutes: 20,
    parentMinutes: 10,
    icon: 'FlaskConical',
    themeColor: 'from-cyan-600 to-blue-700',
    badgeName: 'Clean Water Guardian',
    badgeDescription: 'Constructed a working 3-tier water filtration system and explained microbial safety',
    objectives: [
      'Learn the physical mechanics of filtration: gravel, coarse sand, fine sand, and activated charcoal',
      'Understand the difference between clear water and biologically safe drinking water',
      'Explain waterborne diseases (cholera, typhoid, amoeba) and why boiling/solar disinfection is essential'
    ],
    householdMaterials: [
      '1 clear plastic bottle (1.5L or 2L) cut in half',
      'Clean cotton cloth or tissue paper',
      'Crushed clean charcoal (from cooking jiko/stove)',
      'Fine clean sand and small pebbles/gravel',
      'A cup of muddy water to test'
    ],
    dialectWords: [
      { localWord: 'Amazzi amayonjo', englishMeaning: 'Clean drinking water', language: 'Luganda' },
      { localWord: 'Maji safi', englishMeaning: 'Clean and safe water', language: 'Swahili' },
      { localWord: 'Amaizi masya', englishMeaning: 'Boiled/clean drinking water', language: 'Runyankole' },
      { localWord: 'Pii maleng', englishMeaning: 'Pure clean water', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Community Clean Water Safeguard Mission',
      impactGoal: 'Inspect household water storage and teach 1 neighboring family safe water storage hygiene',
      actionSteps: [
        'Inspect your family’s water jerrycans or water pots (Ensumbi). Ensure they have tight covers and clean taps/cups.',
        'Show a younger sibling or neighbor friend how dirt settles in water, and why dipping unwashed hands into a water pot spreads sickness.',
        'Explain that filtered water must always be boiled or solar-disinfected before drinking.',
        'Help wash and rinse the drinking water containers in your home with clean boiling water.'
      ],
      worldChangerPrinciple: 'Clean water is the foundation of public health. By safeguarding clean water in your home and neighborhood, you save children from preventable illnesses.',
      dialectPhrase: 'Obuyonjo bwe bulamu (Cleanliness is life)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'If you pour muddy river water through sand and charcoal, will it come out clear? Can clear water still make you sick if you don’t boil it?',
      simplifiedExplanation: 'Water filtration works like nature’s sieve. Heavy dirt and leaves get trapped by gravel and sand. Tiny particles and unpleasant odors get absorbed by the microscopic pores of charcoal (activated carbon). But tiny bacteria and amoebas are too small to be trapped by sand alone—that is why water must be boiled (amazzi amafumbe) or treated with chlorine or bright sunlight (SODIS method) to kill germs!',
      safeHomeActivity: {
        title: 'Building the 3-Layer Bio-Filter',
        materials: ['Cut plastic bottle', 'Cloth', 'Charcoal', 'Sand', 'Pebbles', 'Muddy water'],
        steps: [
          'Invert the top half of the bottle into the bottom half like a funnel.',
          'Place a clean cloth over the bottle neck opening inside.',
          'Layer 1: Add 2 cm of clean crushed charcoal.',
          'Layer 2: Add 3 cm of clean fine sand.',
          'Layer 3: Add 3 cm of small pebbles on top to prevent the sand from washing away.',
          'Slowly pour in muddy water. Watch the clear droplets collect in the lower chamber!'
        ],
        safetyTip: 'Do not drink the demonstration filtered water unless it has been properly boiled and cooled!'
      },
      followUpQuestions: [
        { question: 'What does the charcoal layer do in the filter?', sampleAnswer: 'It absorbs chemicals, bad smells, and fine particles into its microscopic pores.' },
        { question: 'Why must we still boil water even after it looks crystal clear?', sampleAnswer: 'Because invisible bacteria, parasites, and viruses can still be alive in the clear water.' }
      ],
      parentChallenge: 'Check your family jerrycan hygiene: verify that all jerrycans have caps and are kept off the dusty floor.'
    },
    mission: {
      step1_learn: {
        title: 'The Science of Clean Water',
        duration: '5 mins',
        story: 'Across Africa, millions of families fetch water from protected springs, boreholes, rainfall, or municipal pipes. But dirty storage jerrycans or unwashed hands can contaminate clean water before it reaches your cup.',
        keyConcept: 'Filtration removes suspended solids; boiling or disinfection kills pathogenic microorganisms.',
        localExample: 'Municipal water treatment plants in Kampala (Ggaba) or Nairobi use the exact same steps: sedimentation, sand filtration, and chlorination.'
      },
      step2_discuss: {
        title: 'Community Health Detective',
        duration: '5 mins',
        askFirst: 'Where does our drinking water come from, and what happens between the water source and our drinking cup?',
        listenFor: 'Understanding how contamination can occur during transport, dipping cups, or uncovered storage.',
        explainSimply: 'Even one dirty finger inside a water pot can give a whole family a stomach ache. Keep the lid closed!',
        parentTip: 'Involve your child in the weekly cleaning of drinking water containers.'
      },
      step3_activity: {
        title: 'Hands-on Filtration Experiment',
        duration: '7 mins',
        gameOrExperimentName: 'The Clear Drop Challenge',
        instructions: [
          'Assemble the plastic bottle filter with pebbles, sand, and charcoal.',
          'Take 1 cup of muddy water and take a photo or draw its cloudy color.',
          'Pour it through your filter and time how long it takes to drip through.',
          'Compare the before and after clarity side-by-side!'
        ],
        whatChildLearns: 'Sedimentation, porosity, permeability, and adsorption.'
      },
      step4_quiz: {
        title: 'Water Engineering Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'Which material in our homemade filter traps bad smells and chemical tastes?',
            options: ['Charcoal (Carbon)', 'Small pebbles', 'Leaves', 'Plastic wrap'],
            correctIndex: 0,
            explanation: 'Carbon in charcoal has microscopic pores that attract and trap impurities through adsorption.'
          },
          {
            question: 'What is the most reliable home method to kill dangerous water bacteria and parasites?',
            options: ['Leaving water in the fridge', 'Boiling water vigorously for at least 1 minute', 'Stirring water with a spoon', 'Adding sugar to water'],
            correctIndex: 1,
            explanation: 'Boiling water vigorously destroys pathogens, making water safe for drinking.'
          }
        ]
      }
    },
    parentChallenge: 'Guide your child in setting up a clean cup rack near your family water container so cups never touch the dirty table.',
    fiveMinuteBite: {
      title: '5-Minute Water Safety Check',
      quickPrompt: 'Walk to where your home drinking water is stored. Is it covered? Is the cup clean?',
      quickAction: 'Cover the water container and wash the drinking cup with soap and water right now.'
    },
    whatsAppSnippet: `💧 *HOME ACADEMY: Clean Water Engineering (Ages 9-12)*
*Experiment:* Build a 3-tier bio-sand & charcoal filter.
*Science:* Physical filtration vs microbial disinfection (boiling).
*Community Mission:* Inspect your home jerrycans & teach water hygiene to 1 neighbor!
*Passport Stamp:* Clean Water Guardian 🧪💧`,
    audioNarrationText: 'Clean water is the foundation of community health. As young scientists, you can understand how filters work and protect your family and neighbors from sickness.'
  },

  {
    id: 'sci-seed-germination-soil-security',
    ageBand: '6-8',
    stageName: 'Build',
    category: 'science',
    categoryLabel: 'Practical Science • Agriculture & Food Security',
    title: 'Seed Germination & Soil Nourishment',
    subtitle: 'Investigating seeds, photosynthesis, and composting kitchen waste to feed our communities',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'FlaskConical',
    themeColor: 'from-emerald-600 to-green-700',
    badgeName: 'Shamba Food Scientist',
    badgeDescription: 'Germinated seeds in recycled containers and explained compost nutrient cycles',
    objectives: [
      'Identify the 3 requirements for seed germination: Moisture, oxygen, and warmth',
      'Understand how plant roots absorb minerals from rich black soil',
      'Learn how organic kitchen scraps (banana peelings, eggshells, dried leaves) make compost fertilizer'
    ],
    householdMaterials: [
      '3 dry bean seeds or maize grains',
      'A small piece of damp cotton, cloth, or folded paper towel',
      'A small recycled plastic container, empty milk packet, or cracked mug',
      'A handful of garden soil or compost'
    ],
    dialectWords: [
      { localWord: 'Ensigo n’ettaka', englishMeaning: 'Seeds and soil', language: 'Luganda' },
      { localWord: 'Mbegu na udongo', englishMeaning: 'Seeds and soil', language: 'Swahili' },
      { localWord: 'Embibo n’eitaka', englishMeaning: 'Seeds and rich soil', language: 'Runyankole' },
      { localWord: 'Koto ki ngom', englishMeaning: 'Seeds and land/soil', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Community Green Patch & Nutrition Mission',
      impactGoal: 'Plant 3 food seeds (beans, spinach, or sukuma wiki) and commit to tending them until harvest to share greens with family or an elder',
      actionSteps: [
        'Find a recycled sack, tin, or small garden patch near your compound.',
        'Mix kitchen compost (dry leaves and soil) to create fertile planting ground.',
        'Plant 3 bean or vegetable seeds at knuckle-depth.',
        'Water them every morning before school with gray water (rinse water from vegetables, free of soap).',
        'Promise to gift the first bunch of harvested greens to a grandmother or neighbor in need.'
      ],
      worldChangerPrinciple: 'Food security begins in every household. By understanding plant biology and soil health, young people can turn small spaces into flourishing gardens that feed the community.',
      dialectPhrase: 'Emirimu gy’omungalo gitulisa amaka (The work of our hands feeds our family)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'How does a tiny dry seed, that looks dead like a pebble, wake up and produce a whole plant with dozens of fresh beans?',
      simplifiedExplanation: 'Inside every bean seed is a sleeping baby plant (embryo) and a lunchbox of stored food (cotyledon). When you give it water and warmth, the seed coat softens, the baby plant drinks, and a root sprouts down searching for soil minerals, while the stem pushes upward seeking the sunlight to make its own food through photosynthesis!',
      safeHomeActivity: {
        title: 'The Window Germination Sprouter',
        materials: ['Clear plastic cup or jar', 'Damp tissue or cloth', 'Bean seeds'],
        steps: [
          'Wet the paper towel so it is damp but not dripping wet.',
          'Press it against the inside wall of the clear cup.',
          'Tuck 2 bean seeds between the wet paper and the clear plastic wall so they are visible from outside.',
          'Place near a window with sunlight. In 3 to 5 days, watch the root burst out first, followed by the green shoot!'
        ]
      },
      followUpQuestions: [
        { question: 'Which part of the seed emerges first, the root or the shoot?', sampleAnswer: 'The root emerges first to anchor the plant and drink water!' },
        { question: 'Why should we put vegetable peelings in the soil instead of burning them?', sampleAnswer: 'Peelings rot and become rich organic compost (fertilizer) that nourishes future plants.' }
      ],
      parentChallenge: 'Designate a small kitchen waste bin where your child sorts organic peelings for garden compost.'
    },
    mission: {
      step1_learn: {
        title: 'The Mystery of the Seed',
        duration: '5 mins',
        story: 'From the rich red soils of Uganda to the fertile valleys of Kenya and Tanzania, agriculture is the heartbeat of our continent. Every great farm starts with understanding how a single seed interacts with living soil.',
        keyConcept: 'Seeds need water, oxygen, and warmth to germinate. Rich soil with organic matter gives plants nitrogen, phosphorus, and potassium.',
        localExample: 'Whether you live in a Kampala suburb planting sukuma wiki in plastic sacks, or in a rural shamba growing matooke and maize, good soil care prevents hunger.'
      },
      step2_discuss: {
        title: 'Stewards of the Earth',
        duration: '5 mins',
        askFirst: 'What happens to land when people throw plastic bags (kaveera) everywhere and never return nutrients to the soil?',
        listenFor: 'Soil becomes infertile, plants choke, and rain washes the earth away.',
        explainSimply: 'Soil is alive! Worms and microbes feed on compost and keep the earth soft so plants can grow deep roots.',
        parentTip: 'Show your child earthworms in moist soil and explain how they aerate the ground.'
      },
      step3_activity: {
        title: 'Planting Your Test Seed',
        duration: '7 mins',
        gameOrExperimentName: 'The Seedling Nursery',
        instructions: [
          'Fill your container with moist soil.',
          'Poke a hole with your pinky finger to the first knuckle (about 2 cm deep).',
          'Drop the bean seed inside and gently cover with loose soil.',
          'Sprinkle a few drops of water and place it where it receives morning sunlight.'
        ],
        whatChildLearns: 'Agricultural planting depth, soil hydration, and seed care.'
      },
      step4_quiz: {
        title: 'Plant Science Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What are the three main things a seed needs to wake up and germinate?',
            options: ['Water, warmth, and oxygen', 'Coca-cola, darkness, and ice', 'Salt, wind, and vinegar', 'Sand, oil, and moonlight'],
            correctIndex: 0,
            explanation: 'Water softens the seed coat, warmth speeds up enzyme reactions, and oxygen fuels cellular respiration.'
          },
          {
            question: 'Why are plastic bags (buveera) harmful when buried in agricultural soil?',
            options: ['They help plants grow faster', 'They never rot, blocking plant roots and water absorption for hundreds of years', 'They make the soil sweeter', 'They feed earthworms'],
            correctIndex: 1,
            explanation: 'Plastics do not biodegrade, ruining soil fertility and harming farm animals.'
          }
        ]
      }
    },
    parentChallenge: 'Have your child measure their growing seedling daily with a ruler or fingers and record its growth.',
    fiveMinuteBite: {
      title: '5-Minute Seed Inspection',
      quickPrompt: 'Soak a dry bean seed in a cup of water for 5 minutes. Notice how the skin wrinkles!',
      quickAction: 'Tell your parent why seeds need moisture to begin growing.'
    },
    whatsAppSnippet: `🌱 *HOME ACADEMY: Seed Science & Food Security (Ages 6-8)*
*Lab:* How seeds germinate & why compost nourishes soil.
*Hands-On:* Plant 3 bean seeds in a recycled tin.
*Community Mission:* Start a green patch to share vegetables with an elder!
*Passport Stamp:* Shamba Food Scientist 🌿🧑‍🌾`,
    audioNarrationText: 'Every seed is packed with life. When you care for the soil and plant food, you become a guardian of your community’s future.'
  },

  // =========================================================================
  // KINDNESS & LIFE SKILLS (Empathy, Conflict Resolution, Serving Elders)
  // =========================================================================
  {
    id: 'kindness-empathy-perspective-bridge',
    ageBand: '6-8',
    stageName: 'Build',
    category: 'social-kindness',
    categoryLabel: 'Kindness & Life Skills • The Empathy Bridge',
    title: 'Walking in Another’s Shoes: The Empathy Bridge',
    subtitle: 'Learning to notice when others hurt, active comforting, and including children who feel left out',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'HeartHandshake',
    themeColor: 'from-pink-500 to-rose-600',
    badgeName: 'Empathy Ambassador',
    badgeDescription: 'Demonstrated emotional perspective-taking and actively comforted an isolated peer',
    objectives: [
      'Define empathy (Okussa mu kifo ky’omulala) versus sympathy',
      'Recognize facial expressions and body language cues indicating sadness or distress',
      'Practice the 3-step empathy response: Notice, Validate, and Support'
    ],
    householdMaterials: ['A pair of shoes (any shoes in the house)', 'Paper and colored pencils'],
    dialectWords: [
      { localWord: 'Okussa mu kifo ky’omulala', englishMeaning: 'Putting yourself in someone else’s position', language: 'Luganda' },
      { localWord: 'Kuhurira abandi', englishMeaning: 'Feeling and understanding others with heart', language: 'Runyankole' },
      { localWord: 'Huruma na utu', englishMeaning: 'Compassion and human dignity (Ubuntu)', language: 'Swahili' },
      { localWord: 'Kica ki mar', englishMeaning: 'Mercy, tenderness, and genuine love', language: 'Acholi' }
    ],
    communityMission: {
      title: 'No Child Left Behind Neighborhood Mission',
      impactGoal: 'Notice a peer or younger child who is sitting alone, crying, or excluded at school/compound, and invite them into fellowship',
      actionSteps: [
        'Look around your schoolyard, church compound, or neighborhood play area.',
        'Find someone who is sitting alone or being mocked.',
        'Walk up, look them in the eye with a warm smile, and say: "Hello, my name is [Name]. Would you like to play with us or share a seat?"',
        'Listen to them if they want to talk, without laughing or teasing.'
      ],
      worldChangerPrinciple: 'Great communities are judged by how they treat the most vulnerable and lonely. A world-changing child stands up for those who feel invisible.',
      dialectPhrase: 'Obuntu bulamu: Ndi lwa nsonga tuli (I am because we are)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'Put on these shoes that belong to someone else. How does it feel to walk in them? What does it mean to "walk in someone else’s shoes" with your heart?',
      simplifiedExplanation: 'Empathy means imagining what life feels like through someone else’s eyes. If a classmate dropped their books in the mud, sympathy says "Oh, poor you." But empathy remembers how embarrassed you felt when you fell down, and empathy immediately bends down to help pick up the books!',
      safeHomeActivity: {
        title: 'The Emotional Heart Mirror',
        materials: ['Paper', 'Pen'],
        steps: [
          'Draw 4 faces: Happy, Angry, Sad, Scared.',
          'Act out each face with your parent without saying a word.',
          'For the sad face, roleplay what an Empathy Hero says: "I see you are having a tough time. I am right here with you."',
          'Give your parent a warm 10-second hug.'
        ]
      },
      followUpQuestions: [
        { question: 'What is the difference between making fun of someone who made a mistake and showing empathy?', sampleAnswer: 'Teasing makes people feel alone and hurt; empathy supports them and makes them feel valued.' },
        { question: 'What should you do if you see someone sitting alone at break time?', sampleAnswer: 'Walk over, greet them kindly, and invite them to join the game.' }
      ],
      parentChallenge: 'Ask your child at bedtime: "Who did you help feel included today?"'
    },
    mission: {
      step1_learn: {
        title: 'The Power of Seeing People',
        duration: '5 mins',
        story: 'Across our culture, the concept of "Obuntu bulamu" or "Utu" teaches that a person is only truly human when they care for the well-being of others around them.',
        keyConcept: 'Empathy is an active superpower: Notice the emotion, acknowledge it without judgment, and offer practical comfort.',
        localExample: 'When a neighbor falls sick in an African village or urban community, neighbors cook food and visit the home. That community warmth is empathy in action.'
      },
      step2_discuss: {
        title: 'The Bully vs The Protector',
        duration: '5 mins',
        askFirst: 'Why do some kids bully or laugh at others when they fail?',
        listenFor: 'They often feel insecure or want to look tough in front of friends.',
        explainSimply: 'Tearing someone down never makes you taller. True strength is lifting other people up.',
        parentTip: 'Remind your child that defending an excluded friend is the mark of true leadership.'
      },
      step3_activity: {
        title: 'The Perspective Bridge Game',
        duration: '7 mins',
        gameOrExperimentName: 'Two Sides of the Coin',
        instructions: [
          'Situation: Two siblings want to use the same drawing book at the same time.',
          'Child plays Sibling A: "I need it right now to do my homework."',
          'Child switches seats and plays Sibling B: "I was having a stressful day and wanted to draw to calm down."',
          'Now child acts as the Peace Mediator: Find a fair solution where both feel heard.'
        ],
        whatChildLearns: 'Perspective-taking, mediation, and emotional balance.'
      },
      step4_quiz: {
        title: 'Empathy in Action Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What is empathy in our local African culture (Obuntu Bulamu)?',
            options: ['Looking away when someone is crying', 'Understanding and feeling what another person experiences, and offering help', 'Bragging that you are smarter than others', 'Ignoring elders'],
            correctIndex: 1,
            explanation: 'Empathy means connecting with someone’s feelings and treating them with honor and care.'
          },
          {
            question: 'When a classmate spills their tea or porridge, what does an Empathy Leader do?',
            options: ['Laugh and take a photo', 'Point fingers and call them clumsy', 'Quickly help them wipe the table and share some food', 'Run away'],
            correctIndex: 2,
            explanation: 'Helping clean up and offering comfort preserves their dignity.'
          }
        ]
      }
    },
    parentChallenge: 'Point out a moment this week when someone showed great kindness to your family, and discuss it together.',
    fiveMinuteBite: {
      title: '5-Minute Kindness Check',
      quickPrompt: 'Who in your house looks tired right now? Go bring them a glass of water with a smile.',
      quickAction: 'Notice how a small act of thoughtfulness changes the atmosphere in the home.'
    },
    whatsAppSnippet: `💖 *HOME ACADEMY: The Empathy Bridge (Ages 6-8)*
*Focus:* Obuntu Bulamu (Walking in another’s shoes).
*Skill:* Active comforting & standing up for excluded children.
*Community Mission:* Invite an isolated child to play & comfort a sad friend today!
*Passport Stamp:* Empathy Ambassador 🤝✨`,
    audioNarrationText: 'Obuntu bulamu teaches us that our humanity is tied to each other. When you show empathy, you bring healing and warmth to your community.'
  },

  {
    id: 'kindness-serving-elders-ubuntu',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'social-kindness',
    categoryLabel: 'Kindness & Life Skills • Honoring Elders & Community Hospitality',
    title: 'Honoring Elders & the Culture of Service',
    subtitle: 'Respectful cultural greetings, practical assistance to older community members, and preserving wisdom',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Heart',
    themeColor: 'from-amber-600 to-yellow-700',
    badgeName: 'Community Service Champion',
    badgeDescription: 'Completed practical service for an elderly neighbor and documented their advice',
    objectives: [
      'Master respectful cultural greetings across regional traditions (kneeling/bowing, two-handed handshake)',
      'Identify practical physical tasks that elderly community members find challenging (fetching water, carrying firewood/groceries, sweeping compounds)',
      'Develop the lifelong habit of offering seats to elders on public transport (taxis, buses, church)'
    ],
    householdMaterials: ['A broom or sweeping branch', 'A clean drinking cup'],
    dialectWords: [
      { localWord: 'Okuwa abakadde ekitiibwa', englishMeaning: 'Giving honor and respect to elders', language: 'Luganda' },
      { localWord: 'Kuha abakuru ekitinisa', englishMeaning: 'Honoring elders with dignity', language: 'Runyankole' },
      { localWord: 'Heshima kwa wazee', englishMeaning: 'Respect for the elderly', language: 'Swahili' },
      { localWord: 'Woro lutto dongo', englishMeaning: 'Respecting elders and parents', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Elder Blessing Action in Your Neighborhood',
      impactGoal: 'Perform one concrete act of practical service for an elderly neighbor or grandparent this week',
      actionSteps: [
        'Identify an elderly person who lives near your home or clan.',
        'Ask permission from your parents, then visit them with a joyful greeting.',
        'Offer practical help: Sweep their compound, carry a heavy load, fetch clean water, or run a grocery errand to the kiosk.',
        'Sit with them for 10 minutes and politely ask: "What was life like when you were 12 years old?"',
        'Thank them for their prayers and wisdom.'
      ],
      worldChangerPrinciple: 'A society that forgets its elderly loses its roots. Young people who serve elders with honor inherit wisdom, blessings, and humility.',
      dialectPhrase: 'Omukadde kiggo ky’amagezi (An elder is a walking library of wisdom)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'When you see an elder carrying heavy bananas or a heavy jerrycan on the road, what is your first instinct? What did our ancestors teach us about helping elders?',
      simplifiedExplanation: 'Our grandparents and elders worked hard their whole lives to build our villages, schools, and communities. Now that their knees and backs are tired, it is our greatest honor to be their strong hands and feet. In African tradition, greeting an elder with both hands and offering them the best seat brings lasting blessings to your life.',
      safeHomeActivity: {
        title: 'The Two-Handed Respect Drill',
        materials: ['A book or cup to hand over'],
        steps: [
          'Practice handing an item to an elder using both hands, supporting your right elbow with your left hand.',
          'Practice greeting with eye contact and a slight respectful bow.',
          'Roleplay meeting an elder on a dusty road carrying groceries: "Jjaja / Nyanya, let me help carry your bag to the gate."'
        ]
      },
      followUpQuestions: [
        { question: 'Why do we support our right forearm with our left hand when greeting or serving elders?', sampleAnswer: 'It shows humility, full attention, and that both of your hands are devoted to honoring them without holding any weapon or distraction.' },
        { question: 'What can young people learn from spending time with elders?', sampleAnswer: 'Patience, resilience through hard times, community history, and life wisdom.' }
      ],
      parentChallenge: 'Take your child along on a visit to an elderly relative or neighbor this weekend.'
    },
    mission: {
      step1_learn: {
        title: 'The Pillar of Honor',
        duration: '5 mins',
        story: 'In ancient times, a child belonged to the whole village. Any elder could correct, guide, or bless any child. When youth honor elders, communities stay safe and unified.',
        keyConcept: 'Honor is not just words; honor is active physical help—carrying loads, listening attentively, and making way.',
        localExample: 'On a shared taxi (matatu) in Kampala or Nairobi, when an elder or pregnant mother enters and there are no seats, a well-raised youth immediately stands up and offers their seat.'
      },
      step2_discuss: {
        title: 'Dignity Across Generations',
        duration: '5 mins',
        askFirst: 'How can young people who know how to use smartphones help grandparents who find technology confusing?',
        listenFor: 'Patiently helping them read letters, call relatives, or send mobile money without getting frustrated.',
        explainSimply: 'Patience with elders is true love. Remember how patiently they taught you how to walk and talk when you were a baby.',
        parentTip: 'Praise your child in front of others when they show spontaneous respect.'
      },
      step3_activity: {
        title: 'The Compound Sweep Challenge',
        duration: '7 mins',
        gameOrExperimentName: 'Sweep of Honor',
        instructions: [
          'Take a broom and sweep the courtyard or sitting room until it is spotless.',
          'Arrange the chairs neatly so that walking paths are clear for elders.',
          'Place clean drinking water within easy reach.'
        ],
        whatChildLearns: 'Household responsibility, safety hazards, and physical diligence.'
      },
      step4_quiz: {
        title: 'Respect and Service Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What is the most respectful way to greet or hand something to an elder in East African tradition?',
            options: ['Throw it at them and walk away', 'Use both hands or support your right arm with your left hand, speaking with warmth', 'Look at your phone while mumbling', 'Shout from across the compound'],
            correctIndex: 1,
            explanation: 'Using both hands signifies complete honor, devotion, and full attention.'
          },
          {
            question: 'If you see an elderly person struggling with heavy firewood or groceries, what should you do?',
            options: ['Walk past quickly before they notice you', 'Politely ask to carry the load for them to their home or stage', 'Laugh at their slow pace', 'Take a video'],
            correctIndex: 1,
            explanation: 'Offering to carry their burden is practical servant leadership.'
          }
        ]
      }
    },
    parentChallenge: 'Have your child write down 3 pieces of advice their grandparents have given them.',
    fiveMinuteBite: {
      title: '5-Minute Respect Exercise',
      quickPrompt: 'Practice greeting your parent in your mother tongue with full traditional honor right now.',
      quickAction: 'Notice how warmth and pride fill the room when respect is shown.'
    },
    whatsAppSnippet: `👵 *HOME ACADEMY: Honoring Elders & Service (Ages 9-12)*
*Skill:* Cultural respect, two-handed greetings & practical elder care.
*Action:* Offer seats, carry loads & listen to ancestral wisdom.
*Community Mission:* Help an elderly neighbor with sweeping or water fetching this week!
*Passport Stamp:* Community Service Champion 🏅🏡`,
    audioNarrationText: 'Elders are the living pillars of our communities. When you serve them with joy, you attract blessings, wisdom, and honor into your own life.'
  },

  // =========================================================================
  // SOFT SKILLS (Communication, Critical Thinking, Teamwork, Time Management)
  // =========================================================================
  {
    id: 'soft-public-speaking-confidence',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'soft-skills',
    categoryLabel: 'Soft Skills • Confident Public Speaking',
    title: 'Finding Your Voice: Confident Public Speaking',
    subtitle: 'Structuring a 60-second message, eye contact, breath control, and speaking up for what is right',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-blue-600 to-indigo-700',
    badgeName: 'Confident Orator',
    badgeDescription: 'Delivered a clear 60-second persuasive community speech using the PREP method',
    objectives: [
      'Master the PREP formula: Point, Reason, Example, Point',
      'Overcome stage fright with diaphragmatic breathing and confident posture',
      'Project voice clearly without shouting or mumbling'
    ],
    householdMaterials: ['A hairbrush or rolled paper (as a practice microphone)', 'A mirror or stopwatch'],
    dialectWords: [
      { localWord: 'Okwogera mu bantu n’obuvumu', englishMeaning: 'Speaking in public with boldness', language: 'Luganda' },
      { localWord: 'Kugamba n’obumanzi', englishMeaning: 'Speaking with courage and clarity', language: 'Runyankole' },
      { localWord: 'Kuhutubia kwa ujasiri', englishMeaning: 'Addressing an audience with courage', language: 'Swahili' },
      { localWord: 'Loko i kin dano ki tekcwiny', englishMeaning: 'Speaking boldly among people', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Community Voice for Good Presentation',
      impactGoal: 'Prepare and deliver a 1-minute positive idea to your family, school club, or church youth group on improving your neighborhood',
      actionSteps: [
        'Pick one community improvement topic (e.g. keeping drainage clear, planting flowers in compound, organizing sports for younger kids).',
        'Use the PREP method: State your point, give your reason, share a local example, and repeat the call to action.',
        'Stand tall with feet shoulder-width apart, make eye contact, and speak with calm energy.',
        'Ask the listeners: "Who is ready to join me in this mission this Saturday?"'
      ],
      worldChangerPrinciple: 'Many great ideas remain trapped inside people’s heads because they fear speaking up. When you learn to communicate clearly, you can organize your community to achieve great things.',
      dialectPhrase: 'Eyayogera ye yawonya omutwe (The one who spoke up saved the day)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'When you have to stand in front of class or church to speak, do your hands shake or your voice drop? How can we turn nervousness into exciting power?',
      simplifiedExplanation: 'Even great leaders like Nelson Mandela or Martin Luther King Jr. felt butterflies in their stomachs before speaking. The secret is knowing that nervousness is just your body getting energized to do something important. If you take 3 deep belly breaths, stand tall like a strong eucalyptus tree, and focus on helping your listeners, your voice will carry power!',
      safeHomeActivity: {
        title: 'The 60-Second PREP Microphone Challenge',
        materials: ['Rolled paper as mic', 'Stopwatch/phone'],
        steps: [
          'Choose a topic: "Why our family should have a reading hour every evening."',
          'P - Point: "I believe reading every evening makes our family smarter and happier."',
          'R - Reason: "Because books open our minds to new inventions and good character."',
          'E - Example: "Yesterday when we read together, we laughed and learned how seeds grow."',
          'P - Point: "Therefore, let us set aside 30 minutes tonight to read together!"',
          'Time your child and celebrate their delivery with a standing ovation!'
        ]
      },
      followUpQuestions: [
        { question: 'What does PREP stand for in speech structuring?', sampleAnswer: 'Point, Reason, Example, Point!' },
        { question: 'What happens when you look at the floor while speaking?', sampleAnswer: 'Your voice gets muffled into the ground and your audience thinks you don’t believe what you are saying.' }
      ],
      parentChallenge: 'Let your child give the thanksgiving prayer or brief announcement at the next family gathering.'
    },
    mission: {
      step1_learn: {
        title: 'The Anatomy of a Great Speaker',
        duration: '5 mins',
        story: 'Leaders who change history are not always the richest or tallest—they are people who can paint a vision with their words so others want to follow.',
        keyConcept: 'Stand tall, breathe deeply from your diaphragm, look at 3 points in the room, and use the PREP method.',
        localExample: 'At school debates or church services, the student who speaks clearly and gives real-life examples wins the debate over the student who just shouts.'
      },
      step2_discuss: {
        title: 'Speaking Truth to Power',
        duration: '5 mins',
        askFirst: 'What should you do if you see an injustice happening, like children being cheated or a rumor spreading?',
        listenFor: 'Speaking up with courage, calmness, and facts rather than staying silent.',
        explainSimply: 'Silence in the face of wrong helps the wrongdoer. Courageous speech protects the community.',
        parentTip: 'Validate your child’s opinions at home so they feel their thoughts matter.'
      },
      step3_activity: {
        title: 'The Eye Contact Anchor Drill',
        duration: '7 mins',
        gameOrExperimentName: 'The Three Lighthouse Points',
        instructions: [
          'Pick 3 spots in the room: Left wall, Parent in center, Right window.',
          'Speak for 30 seconds, smoothly shifting your gaze between the 3 points like a lighthouse beam.',
          'Record a video on phone if available, and watch it together to notice posture improvement.'
        ],
        whatChildLearns: 'Audience scanning, confidence projection, and eliminating fidgeting.'
      },
      step4_quiz: {
        title: 'Public Speaking Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What is the best way to handle nervous butterflies before speaking?',
            options: ['Run away and hide under a desk', 'Take 3 deep slow breaths and remember that your message helps people', 'Talk as fast as possible without breathing', 'Stare at your shoes'],
            correctIndex: 1,
            explanation: 'Deep breathing lowers heart rate and brings steady oxygen to the brain.'
          },
          {
            question: 'Why do we give a concrete Example (E) in the PREP method?',
            options: ['To make the speech boring', 'To show real-world proof that makes the idea believable and memorable', 'To confuse the listeners', 'To waste time'],
            correctIndex: 1,
            explanation: 'Real-life stories and examples anchor abstract ideas in the listeners’ memories.'
          }
        ]
      }
    },
    parentChallenge: 'Ask your child to share their opinion on a current family decision, giving one clear Reason and Example.',
    fiveMinuteBite: {
      title: '5-Minute Posture & Voice Check',
      quickPrompt: 'Stand in front of a mirror. Stand tall, roll your shoulders back, smile, and say: "I have a voice, and my words bring life!"',
      quickAction: 'Notice how standing tall immediately makes you feel braver.'
    },
    whatsAppSnippet: `🎤 *HOME ACADEMY: Confident Public Speaking (Ages 9-12)*
*Framework:* The PREP Method (Point, Reason, Example, Point).
*Skill:* Breath control, eye contact & vocal projection.
*Community Mission:* Deliver a 1-minute positive neighborhood idea to friends or family!
*Passport Stamp:* Confident Orator 📢🌟`,
    audioNarrationText: 'Your voice is a gift. When you speak with clarity, truth, and conviction, you can inspire positive changes in your home, school, and entire community.'
  },

  {
    id: 'soft-winwin-negotiation-teamwork',
    ageBand: '13-16',
    stageName: 'Develop',
    category: 'soft-skills',
    categoryLabel: 'Soft Skills • Win-Win Negotiation & Conflict Resolution',
    title: 'The Art of Win-Win: Negotiation & Team Collaboration',
    subtitle: 'Navigating disagreements, separating people from problems, and building solutions where everyone gains',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Users',
    themeColor: 'from-violet-600 to-purple-700',
    badgeName: 'Win-Win Negotiator',
    badgeDescription: 'Successfully mediated a disagreement and designed a mutual agreement without hostility',
    objectives: [
      'Distinguish between Win-Lose (fighting), Lose-Lose (spite), and Win-Win (collaboration)',
      'Learn the golden rule of negotiation: Focus on underlying interests, not stubborn positions',
      'Practice active listening before proposing compromise'
    ],
    householdMaterials: ['Notebook or paper', 'Two pens'],
    dialectWords: [
      { localWord: 'Okuteesa n’obukkakkamu', englishMeaning: 'Calm negotiation and dialogue', language: 'Luganda' },
      { localWord: 'Kuhana n’obusingye', englishMeaning: 'Reconciling and negotiating in peace', language: 'Runyankole' },
      { localWord: 'Mazungumzo ya amani', englishMeaning: 'Peaceful negotiations / Win-win discussions', language: 'Swahili' },
      { localWord: 'Loko me kuc', englishMeaning: 'Peaceful dialogue for reconciliation', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Neighborhood Peace Mediator Challenge',
      impactGoal: 'Identify a friction point between peers, siblings, or sports teammates, and guide them to a peaceful win-win agreement',
      actionSteps: [
        'Notice where tension is rising (e.g. who washes the dishes first, who gets the soccer ball, group project workload).',
        'Step in as a calm mediator: "Let’s take 1 minute to hear what both of you need without interrupting."',
        'Ask Party A: "What is your main need?" Then ask Party B: "What is your main need?"',
        'Brainstorm a creative third option where both needs are respected.',
        'Shake hands and confirm the agreement.'
      ],
      worldChangerPrinciple: 'War and community hatred start when people insist on Win-Lose. True statesmen and community leaders build bridges of Win-Win where dignity is preserved.',
      dialectPhrase: 'Emirembe gisibuka mu kuteesa (Peace springs from honest dialogue)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'When two people fight over one orange, what usually happens? What if one person only needed the juice to drink, and the other person only needed the orange peel to bake a cake?',
      simplifiedExplanation: 'Most fights happen because people argue about "Positions" ("I want this!") rather than asking about "Interests" ("Why do you need it?"). In the classic orange story, if they had simply asked each other why they wanted the orange, one could have taken all the juice and the other could have taken all the peel! Both would have received 100% of what they wanted. Win-Win negotiation is about uncovering the real need behind the argument.',
      safeHomeActivity: {
        title: 'The Real-Life Chore Negotiation',
        materials: ['Paper', 'Pen'],
        steps: [
          'Pick two household tasks: Washing dinner dishes vs Sweeping compound and folding clothes.',
          'Roleplay negotiating with your sibling or parent about the weekly schedule.',
          'Do not use threats or whining. Use questions: "What time do you need this done? What if I do dishes on Monday and Wednesday, and you do Tuesday and Thursday?"',
          'Write down a signed 1-week agreement.'
        ]
      },
      followUpQuestions: [
        { question: 'What is a "Position" vs an "Interest"?', sampleAnswer: 'A position is what you demand; an interest is the reason why you want it.' },
        { question: 'Why does a "Win-Lose" outcome often turn into a "Lose-Lose" later on?', sampleAnswer: 'Because the person who lost feels resentful and will try to get revenge or refuse to cooperate later.' }
      ],
      parentChallenge: 'Let your teenager negotiate one household responsibility or curfew adjustment with structured arguments and mutual concessions.'
    },
    mission: {
      step1_learn: {
        title: 'The Strategy of Cooperation',
        duration: '5 mins',
        story: 'In village councils and international diplomacy, the greatest problem-solvers do not pound tables. They ask questions until they find what everyone truly needs.',
        keyConcept: 'Separate people from the problem. Be soft on the person, but firm on the issue.',
        localExample: 'When traders in Owino Market or Kariakoo negotiate prices, both the buyer and seller want a good deal so they can do business together again tomorrow. That is mutual benefit.'
      },
      step2_discuss: {
        title: 'Emotional Intelligence Under Pressure',
        duration: '5 mins',
        askFirst: 'What happens to your brain when you get furious during an argument?',
        listenFor: 'The amygdala takes over, logic shuts down, and we say things we regret.',
        explainSimply: 'Take a 10-second pause before replying. If you control your temper, you control the outcome.',
        parentTip: 'Model healthy negotiation when you and your spouse or siblings disagree.'
      },
      step3_activity: {
        title: 'The 3-Step Win-Win Formula',
        duration: '7 mins',
        gameOrExperimentName: 'The Mediation Clinic',
        instructions: [
          'Step 1: State what you agree on first ("We both want the youth football match to happen").',
          'Step 2: State the specific hurdle ("We only have one ball and two teams want to practice").',
          'Step 3: Propose a cooperative solution ("Team A takes the first 45 minutes while Team B does conditioning, then we switch").'
        ],
        whatChildLearns: 'Collaborative problem solving and diplomatic language.'
      },
      step4_quiz: {
        title: 'Negotiation Mastery Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What is the main goal of Win-Win negotiation?',
            options: ['Tricking the other person so you get everything', 'Finding a creative solution where both parties’ core needs are met', 'Giving up everything and walking away sad', 'Yelling until the other person surrenders'],
            correctIndex: 1,
            explanation: 'Win-Win creates durable agreements where everyone feels respected.'
          },
          {
            question: 'What does "Separate the person from the problem" mean?',
            options: ['Never speak to the person again', 'Attack the person’s character', 'Treat the person with respect while focusing your energy on solving the difficult issue', 'Pretend there is no problem'],
            correctIndex: 2,
            explanation: 'Respecting the person preserves the relationship while solving the challenge.'
          }
        ]
      }
    },
    parentChallenge: 'Discuss how your family handles disagreements, and agree on a rule to never insult someone during an argument.',
    fiveMinuteBite: {
      title: '5-Minute Win-Win Practice',
      quickPrompt: 'Think of the last argument you had. What did the other person really want?',
      quickAction: 'Write down one win-win compromise that could have resolved it in 2 minutes.'
    },
    whatsAppSnippet: `🤝 *HOME ACADEMY: Win-Win Negotiation (Ages 13-16)*
*Skill:* Active listening, separating people from problems & mediation.
*Formula:* Understand Interests > Demand Positions.
*Community Mission:* Help mediate a peace agreement between peers or siblings!
*Passport Stamp:* Win-Win Negotiator 🕊️⚖️`,
    audioNarrationText: 'Leadership is the capacity to translate conflict into cooperation. When you seek win-win solutions, you build unity and enduring peace.'
  },

  // =========================================================================
  // CHRISTIAN EDUCATION & LIFE SKILLS BASED ON THE KNOWLEDGE OF GOD
  // =========================================================================
  {
    id: 'godly-wisdom-choices-proverbs3',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'godly-life-skills',
    categoryLabel: 'Godly Life Skills • Wisdom for Daily Choices',
    title: 'God’s Wisdom for Daily Decisions',
    subtitle: 'Applying Proverbs 3:5-6 to peer pressure, honesty in secret, and walking in divine direction',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'ShieldCheck',
    themeColor: 'from-amber-500 to-yellow-600',
    badgeName: 'Wisdom Path Walker',
    badgeDescription: 'Can recite Proverbs 3:5-6 and apply biblical discernment in everyday school/market dilemmas',
    keyScripture: 'Proverbs 3:5–6 — "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways acknowledge him, and he will make your paths straight."',
    memoryVerse: 'Proverbs 3:5–6 — "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."',
    prayer: 'Lord God of all wisdom, thank You that You know my future and my steps. Forgive me for relying only on my own thinking. Guide my decisions at school, at home, and among friends. Give me courage to choose truth and integrity, in Jesus’ name, Amen.',
    bibleTopic: 'Divine Purpose & Everyday Wisdom',
    objectives: [
      'Understand why human understanding is limited, while God’s knowledge is perfect',
      'Learn the 3-question filter for making moral decisions: Is it true? Does it honor God? Does it harm others?',
      'Memorize Proverbs 3:5-6 in English and regional dialect'
    ],
    householdMaterials: ['A blindfold or cloth', 'Bible or scripture slip'],
    dialectWords: [
      { localWord: 'Amagezi agava eri Katonda', englishMeaning: 'Wisdom that comes from God', language: 'Luganda' },
      { localWord: 'Obwengye bwa Ruhanga', englishMeaning: 'God’s supreme wisdom', language: 'Runyankole' },
      { localWord: 'Hekima itokayo kwa Mungu', englishMeaning: 'Wisdom from God', language: 'Swahili' },
      { localWord: 'Ryeko pa Rubanga', englishMeaning: 'Godly wisdom and guidance', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Integrity Champion in School & Community',
      impactGoal: 'Stand as an example of honesty and fairness in a classroom, playground, or market setting this week',
      actionSteps: [
        'When doing a test, playing a soccer match, or running an errand to the shop, commit to 100% honesty.',
        'If the shopkeeper gives you too much change by mistake, immediately return the extra money with a polite smile.',
        'If classmates are cheating or telling lies about someone, refuse to participate and gently defend the absent peer.',
        'Share with your parents at dinner how God gave you peace in doing what was right.'
      ],
      worldChangerPrinciple: 'Corruption and community collapse start with small compromises in youth. A child who practices God’s wisdom in secret grows into a pillar of justice that transforms a nation.',
      dialectPhrase: 'Obwesigwa bugula eby’omuwendo (Integrity buys what money cannot buy)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'If you had to walk across a rocky riverbank in total darkness, would you rather guess where the stones are, or have someone with a powerful flashlight hold your hand?',
      simplifiedExplanation: 'Life often feels like walking in the dark when we have to choose between friends, choices, or temptations. Proverbs 3:5-6 tells us not to lean on our own limited eyesight. God has the master map of your entire life! When we pray, read His Word, and ask: "Lord, what is Your will here?", He makes our paths straight and shields us from traps.',
      safeHomeActivity: {
        title: 'The Trusted Guide Walk',
        materials: ['A cloth blindfold'],
        steps: [
          'Blindfold the child safely in the living room or compound with furniture obstacles.',
          'Parent guides them only using a gentle voice: "Take two steps forward, stop, step right."',
          'Child experiences the feeling of trusting guidance without seeing.',
          'Connect the game to Proverbs 3:5-6: God’s voice guides us safely through moral tests.'
        ]
      },
      followUpQuestions: [
        { question: 'What does "Lean not on your own understanding" mean?', sampleAnswer: 'It means don’t rely solely on what looks easy or popular to your own eyes, because we don’t see the whole future.' },
        { question: 'What does God promise to do when we acknowledge Him in all our ways?', sampleAnswer: 'He will make our paths straight and lead us in truth!' }
      ],
      parentChallenge: 'Share a story with your child about a time you sought God’s guidance in a big life decision and how He directed you.'
    },
    mission: {
      step1_learn: {
        title: 'The Blueprint of Wisdom',
        duration: '5 mins',
        story: 'Young King Solomon asked God not for gold or long life, but for wisdom to lead and protect his people. God was pleased and gave him a discerning heart that amazed kings and queens across continents.',
        keyConcept: 'True wisdom begins with the reverent fear and love of God. Godly wisdom produces peace, kindness, honesty, and fruitfulness.',
        localExample: 'When you are sent to the trading center with a 10,000 UGX note and the shopkeeper makes a math mistake, God’s wisdom whispers: "Return the balance—your integrity is worth more than silver."'
      },
      step2_discuss: {
        title: 'The Moral GPS',
        duration: '5 mins',
        askFirst: 'What should you do when everyone in your class says: "Do it, nobody is looking!"?',
        listenFor: 'Remembering that God sees in the dark, and His love protects our conscience.',
        explainSimply: 'Character is who you are when nobody is watching except God.',
        parentTip: 'Praise honest confessions in your home so your child never fears telling the truth.'
      },
      step3_activity: {
        title: 'The 3-Gate Decision Filter',
        duration: '7 mins',
        gameOrExperimentName: 'The Wisdom Gatekeeper',
        instructions: [
          'Present a scenario: A friend invites you to skip study time and throw stones at stray dogs or tease a neighbor.',
          'Gate 1: Is it truthful and godly? (No)',
          'Gate 2: Does it show love or hurt someone? (It hurts)',
          'Gate 3: Can I proudly tell God and my parents about it? (No)',
          'Decision: Firm, polite refusal: "No thanks, that is not how I live."'
        ],
        whatChildLearns: 'Critical moral filtering and moral courage.'
      },
      step4_quiz: {
        title: 'Proverbs 3 Wisdom Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'According to Proverbs 3:5, how should we trust the Lord?',
            options: ['With 10% of our thoughts', 'With all our heart, not leaning on our own understanding', 'Only when we are in trouble', 'Never ask Him questions'],
            correctIndex: 1,
            explanation: 'Proverbs 3:5 teaches wholehearted trust and humility before God.'
          },
          {
            question: 'What is true character based on God’s knowledge?',
            options: ['Pretending to be good when teachers watch', 'Doing what is right, honest, and loving even when nobody is looking', 'Always getting first place in sports', 'Having expensive shoes'],
            correctIndex: 1,
            explanation: 'Godly character is rooted in living before God with a clean conscience.'
          }
        ]
      }
    },
    parentChallenge: 'Memorize Proverbs 3:5-6 together as a family before dinner tonight.',
    fiveMinuteBite: {
      title: '5-Minute Wisdom Prayer',
      quickPrompt: 'What decision do you have to make today at school or home?',
      quickAction: 'Bow your head and whisper: "Lord, guide my thoughts and make my path straight."'
    },
    whatsAppSnippet: `🕊️ *HOME ACADEMY: Godly Wisdom for Choices (Ages 9-12)*
*Scripture:* Proverbs 3:5–6 (Trust in the Lord with all your heart).
*Life Skill:* Decision-making, integrity in secret & moral courage.
*Community Mission:* Return wrong change or defend the truth in your community!
*Passport Stamp:* Wisdom Path Walker 🛡️📖`,
    audioNarrationText: 'God’s wisdom is a lamp to our feet. When you trust in the Lord with all your heart, He guides your daily steps and fills your life with peace and purpose.'
  },

  {
    id: 'godly-courage-daniel-peer-pressure',
    ageBand: '13-16',
    stageName: 'Develop',
    category: 'godly-life-skills',
    categoryLabel: 'Godly Life Skills • Courage Under Pressure',
    title: 'Courage Like Daniel: Standing Firm Against Negative Pressure',
    subtitle: 'Biblical conviction, refusing cultural compromise, and maintaining dignity in hostile environments',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'ShieldCheck',
    themeColor: 'from-amber-700 to-orange-800',
    badgeName: 'Daniel Courage Defender',
    badgeDescription: 'Formulated personal non-negotiable moral convictions and practiced resisting peer coercion',
    keyScripture: 'Daniel 1:8 — "But Daniel resolved not to defile himself with the royal food and wine, and he asked the chief official for permission not to defile himself this way."',
    memoryVerse: 'Joshua 1:9 — "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."',
    prayer: 'Almighty God, You gave young Daniel, Hananiah, Mishael, and Azariah courage in a strange land. Give me that same holy backbone. When classmates mock my faith or pressure me to join in wickedness, make me stand strong like an unshakeable rock. Help me shine Your light with love, in Jesus’ name, Amen.',
    bibleTopic: 'Faith & Changing the World',
    objectives: [
      'Analyze Daniel 1 and 3: How four young teenagers stood firm in their convictions without hatred or insolence',
      'Identify modern peer pressure traps: Alcohol, drugs, pornography, cheating, and gossip',
      'Master the "Polite but Unshakeable" refusal technique'
    ],
    householdMaterials: ['Bible or scripture notes', 'Pen and journal'],
    dialectWords: [
      { localWord: 'Obuvumu mu Katonda', englishMeaning: 'Courage rooted in God', language: 'Luganda' },
      { localWord: 'Obumanzi bwa Ruhanga', englishMeaning: 'Godly bravery against opposition', language: 'Runyankole' },
      { localWord: 'Ujasiri katika Kristo', englishMeaning: 'Courage in Christ', language: 'Swahili' },
      { localWord: 'Tekcwiny i Rubanga', englishMeaning: 'Unshakable firmness in God', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Shield of Defense for the Bullied',
      impactGoal: 'Stand up courageously and respectfully for someone who is being bullied, gossiped about, or mistreated in your school or neighborhood',
      actionSteps: [
        'Notice if someone in your class, youth group, or village is being teased or pressured into bad habits.',
        'Refuse to laugh or join the mockery.',
        'Step in beside them: "Leave them alone, this is unfair." Or guide them away to safety.',
        'Encourage them privately: "You have dignity, don’t let their words define you."',
        'Pray for them and let your bravery inspire others to stop being passive bystanders.'
      ],
      worldChangerPrinciple: 'Evil flourishes when good people stay silent out of fear. A young person anchored in God’s presence has the power to change the culture of an entire school or community.',
      dialectPhrase: 'Omwoyo ow’obuvumu guwangula ensi (A spirit of divine courage overcomes the world)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'Daniel was a teenager carried away as a captive to the mighty empire of Babylon. When ordered to eat food sacrificed to idols and bow to golden statues, how did he stand firm without being rude?',
      simplifiedExplanation: 'Daniel did not start a violent rebellion, nor did he coward in fear. He had "purposed in his heart" beforehand what lines he would never cross! Because he decided his boundaries before the crisis hit, he was able to speak respectfully to the Babylonian official and propose a healthy test of vegetables and water. God honored his courage and gave him knowledge and favor beyond all the magicians of Babylon!',
      safeHomeActivity: {
        title: 'The Written Boundary Code',
        materials: ['Paper', 'Pen'],
        steps: [
          'Write down your top 3 Personal Non-Negotiables (e.g. "I will never lie on tests", "I will never consume drugs or alcohol", "I will never mock someone’s body or poverty").',
          'Practice saying the 3-second refusal: "No, that goes against my convictions. But I still respect you as a friend."',
          'Sign your name at the bottom as a covenant with God.'
        ]
      },
      followUpQuestions: [
        { question: 'Why was it crucial that Daniel "purposed in his heart" BEFORE the king’s feast was served?', sampleAnswer: 'If you don’t decide your values before the temptation arrives, you will fold under the pressure of the moment.' },
        { question: 'How did Daniel speak to the Babylonian official?', sampleAnswer: 'With great politeness, respect, and wisdom, proposing a test rather than screaming insults.' }
      ],
      parentChallenge: 'Have an open conversation about the peer pressures your teen faces on social media or at school.'
    },
    mission: {
      step1_learn: {
        title: 'The Backbone of Conviction',
        duration: '5 mins',
        story: 'Shadrach, Meshach, and Abednego stood alone when thousands bowed to King Nebuchadnezzar’s 90-foot golden image. They told the king: "Our God whom we serve is able to deliver us. But even if He does not, we will not bow." God walked with them right in the middle of the fiery furnace!',
        keyConcept: 'Courage is not the absence of fear; it is the holy knowledge that God is greater than any threat.',
        localExample: 'When a group of teens in your town start stealing fruits, vandalizing property, or viewing harmful content on a phone, the Daniel in you says: "Count me out."'
      },
      step2_discuss: {
        title: 'Standing Out vs Fitting In',
        duration: '5 mins',
        askFirst: 'Why is the desire to fit in with the crowd so dangerous for young people?',
        listenFor: 'The crowd is often running in the wrong direction; following the crowd blinds your purpose.',
        explainSimply: 'Dead fish float downstream with the current. Only living fish swim against the current. You are alive in Christ!',
        parentTip: 'Remind your youth that God chose them to be salt and light, not chameleons.'
      },
      step3_activity: {
        title: 'The Pressure Rehearsal Lab',
        duration: '7 mins',
        gameOrExperimentName: 'The Crucible',
        instructions: [
          'Parent roleplays a pushy classmate: "Come on, everyone is trying it! Don’t be a baby!"',
          'Teen stands tall, holds eye contact without smiling nervously.',
          'Delivers the 3-step response: 1. Firm eye contact; 2. Clear sentence ("No thanks, that’s not my thing"); 3. Pivot to another topic or walk away.',
          'Repeat until the teen feels zero hesitation in their voice.'
        ],
        whatChildLearns: 'Assertiveness, emotional resilience, and refusal skills.'
      },
      step4_quiz: {
        title: 'Daniel Courage Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What did Daniel do when the royal food went against God’s laws (Daniel 1:8)?',
            options: ['He ate it secretly in the bathroom', 'He resolved in his heart not to defile himself and politely requested an alternative', 'He ran away into the jungle', 'He cried and gave up on God'],
            correctIndex: 1,
            explanation: 'Daniel set his moral boundary in advance and handled the situation with diplomatic wisdom.'
          },
          {
            question: 'What does Joshua 1:9 command us to remember when we feel afraid?',
            options: ['Run away fast', 'Be strong and courageous, for the Lord your God is with you wherever you go', 'Wait until you are an adult before being brave', 'Never speak to anyone'],
            correctIndex: 1,
            explanation: 'God’s abiding presence is the eternal source of unshakeable courage.'
          }
        ]
      }
    },
    parentChallenge: 'Pray together a prayer of protection and spiritual boldness over your teenager’s friendships.'
    ,
    fiveMinuteBite: {
      title: '5-Minute Courage Declaration',
      quickPrompt: 'Recite Joshua 1:9 out loud with power: "Be strong and courageous!"',
      quickAction: 'Write down one friend who needs your encouragement and send them an uplifting note.'
    },
    whatsAppSnippet: `🦁 *HOME ACADEMY: Courage Like Daniel (Ages 13-16)*
*Scripture:* Daniel 1:8 & Joshua 1:9 (Be strong and courageous).
*Life Skill:* Resisting negative peer pressure & moral integrity.
*Community Mission:* Defend someone who is being bullied or gossiped about!
*Passport Stamp:* Daniel Courage Defender 🛡️🔥`,
    audioNarrationText: 'You were born for such a time as this. Stand firm in God’s truth, and let no peer pressure shake the divine purpose placed upon your life.'
  },

  {
    id: 'godly-stewardship-creation-genesis2',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'godly-life-skills',
    categoryLabel: 'Godly Life Skills • Stewards of God’s Earth',
    title: 'Stewards of God’s Creation: Environmental Care as Worship',
    subtitle: 'Understanding Genesis 2:15, caring for water sources, planting trees, and responsible community hygiene',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-emerald-700 to-teal-800',
    badgeName: 'Creation Care Steward',
    badgeDescription: 'Cleaned a community water/road pathway and planted a sapling or tended green plants',
    keyScripture: 'Genesis 2:15 — "The Lord God took the man and put him in the Garden of Eden to work it and take care of it."',
    memoryVerse: 'Psalm 24:1 — "The earth is the Lord’s, and everything in it, the world, and all who live in it."',
    prayer: 'Creator God, the heavens declare Your glory, and the fertile earth displays Your majesty. Forgive us when we litter, waste clean water, or neglect the beauty You made. Teach me to care for trees, animals, and soil as a faithful manager of Your creation. Make our neighborhood clean and thriving, in Jesus’ name, Amen.',
    bibleTopic: 'Changing the World & Creation Care',
    objectives: [
      'Understand the biblical mandate of stewardship (Okwesigwa mu by’obutonde): We are caretakers, not destroyers',
      'Examine the consequences of environmental neglect: Clogged drainage channels, malaria breeding, and polluted water',
      'Participate in a practical community environmental restoration action'
    ],
    householdMaterials: ['A pair of gloves or clean plastic bags for hands', 'A trash bin or sack', 'Water for plants'],
    dialectWords: [
      { localWord: 'Okukuuma ebitonde bya Katonda', englishMeaning: 'Protecting God’s creation', language: 'Luganda' },
      { localWord: 'Kulinda eby’obuhangwa bwa Ruhanga', englishMeaning: 'Safeguarding God’s natural environment', language: 'Runyankole' },
      { localWord: 'Utunzaji wa mazingira ya Mungu', englishMeaning: 'Stewardship of God’s environment', language: 'Swahili' },
      { localWord: 'Geno jami pa Rubanga', englishMeaning: 'Caring for God’s things and land', language: 'Acholi' }
    ],
    communityMission: {
      title: 'Community Pathway & Waterway Restoration Mission',
      impactGoal: 'Clean up litter along a 50-meter stretch of your road, school pathway, or drainage channel and ensure plastics are properly disposed of',
      actionSteps: [
        'Put on gloves or protective bags on hands.',
        'Collect discarded plastic bottles (kaveera and plastic bags) that block drainage channels.',
        'Dispose of them in designated recycling or waste collection bins (never burn plastics where people breathe).',
        'Inspect a nearby tree or green plant and water it generously.',
        'Explain to a neighbor child why keeping drainage channels clear prevents malaria-carrying mosquitoes and flooding.'
      ],
      worldChangerPrinciple: 'Faith is not just what we say on Sunday; it is how we care for the world God created. A clean neighborhood reflects the dignity and glory of the Creator.',
      dialectPhrase: 'Obutonde bwe bulamu bwaffe (The environment is our very life)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'When God created Adam and Eve in Genesis 2:15, what was their first job? Did God tell them to destroy the earth, or to tend and guard it like a precious gift?',
      simplifiedExplanation: 'The Hebrew words for caring for the garden in Genesis 2:15 are "Shamar" (to guard, preserve, protect) and "Abad" (to serve, cultivate). That means God designed humans to be gardeners and protectors of nature! When we throw rubbish on the ground or pollute rivers, we fail to honor the Creator. When we plant trees, clean gutters, and care for animals, we are worshiping God through practical obedience.',
      safeHomeActivity: {
        title: 'The Compound Care Audit',
        materials: ['Sack/bag for rubbish'],
        steps: [
          'Walk around your home compound or apartment corridor.',
          'Spot 5 pieces of stray plastic, wrappers, or bottle tops.',
          'Pick them up and dispose of them properly.',
          'Water 3 plants in the shamba or flower pots.'
        ]
      },
      followUpQuestions: [
        { question: 'Who owns the earth according to Psalm 24:1?', sampleAnswer: 'The earth belongs to the Lord, and everything in it!' },
        { question: 'Why does blocked plastic trash in city ditches cause disease?', sampleAnswer: 'It blocks water flow, creating stagnant dirty puddles where mosquitoes breed, causing malaria.' }
      ],
      parentChallenge: 'Plant a fruit tree (mango, avocado, or pawpaw) or flowering shrub in your compound with your child.'
    },
    mission: {
      step1_learn: {
        title: 'The Sacred Garden Mandate',
        duration: '5 mins',
        story: 'Across Africa, lush green forests, clean rivers, and fertile fields are God’s gift to our nations. When young people take ownership of their local environment, communities flourish with health and beauty.',
        keyConcept: 'Stewardship is faithful management of property belonging to another. The earth belongs to God; we are His appointed managers.',
        localExample: 'The legendary Nobel Peace Prize laureate Wangari Maathai from Kenya showed the world that planting trees and caring for soil heals communities from poverty and drought.'
      },
      step2_discuss: {
        title: 'The Plastic Menace vs God’s Beauty',
        duration: '5 mins',
        askFirst: 'Why is it wrong for a Christian to drop trash from a car or taxi window onto the beautiful road?',
        listenFor: 'It defaces God’s creation, pollutes the earth, and expects someone else to clean up our mess.',
        explainSimply: 'Love your neighbor as yourself means keeping your neighbor’s road and environment clean and pleasant.',
        parentTip: 'Keep a small trash bag inside your car or backpack so you never litter in public.'
      },
      step3_activity: {
        title: 'The Tree & Water Steward Plan',
        duration: '7 mins',
        gameOrExperimentName: 'The Green Guardian',
        instructions: [
          'Find a young seedling, shrub, or tree in your compound or street.',
          'Clear weeds from around its base so its roots breathe.',
          'Apply natural organic compost (dried leaves, clean soil).',
          'Pour a full watering can of water around the root perimeter.'
        ],
        whatChildLearns: 'Tree husbandry, root irrigation, and practical botany.'
      },
      step4_quiz: {
        title: 'Creation Care Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What command did God give humanity in Genesis 2:15 regarding the Garden of Eden?',
            options: ['Cut down all the trees and burn them', 'To work it and take care of (guard) it', 'Never touch anything', 'Build tall gold towers'],
            correctIndex: 1,
            explanation: 'God placed humans in creation to cultivate and protect it with loving responsibility.'
          },
          {
            question: 'What is one practical way a child can change their community through creation care?',
            options: ['Throwing trash in the river', 'Keeping drainage clear of plastics and planting trees for future generations', 'Leaving tap water running all day', 'Pulling leaves off baby plants'],
            correctIndex: 1,
            explanation: 'Tree planting and clean drainage preserve soil, provide shade and clean air, and stop disease.'
          }
        ]
      }
    },
    parentChallenge: 'Commit as a family to eliminate single-use polythene bags where reusable cloth bags can be used.',
    fiveMinuteBite: {
      title: '5-Minute Creation Blessing',
      quickPrompt: 'Look out the window at the sky, the trees, and the earth. Name 3 things you thank God for creating.',
      quickAction: 'Pick up one stray piece of litter and put it in the bin.'
    },
    whatsAppSnippet: `🌍 *HOME ACADEMY: Stewards of Creation (Ages 9-12)*
*Scripture:* Genesis 2:15 & Psalm 24:1 (The earth is the Lord’s).
*Life Skill:* Environmental hygiene, recycling & tree stewardship.
*Community Mission:* Clean 50 meters of pathway & care for community green spaces!
*Passport Stamp:* Creation Care Steward 🌳💧`,
    audioNarrationText: 'The earth is the Lord’s. When you care for the soil, clean the pathways, and plant trees, you honor the Creator and bring health to your neighborhood.'
  },

  {
    id: 'godly-changing-world-salt-light',
    ageBand: '13-16',
    stageName: 'Develop',
    category: 'godly-life-skills',
    categoryLabel: 'Godly Life Skills • Changing the World as Salt & Light',
    title: 'Salt and Light: Changing Your Community Through Service',
    subtitle: 'Applying Matthew 5:13-16 to community development, humble servant leadership, and grassroots transformation',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-amber-600 to-rose-700',
    badgeName: 'World Changer Ambassador',
    badgeDescription: 'Designed and executed a real-world community impact project based on Matthew 5:13-16',
    keyScripture: 'Matthew 5:14–16 — "You are the light of the world. A town built on a hill cannot be hidden... In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven."',
    memoryVerse: 'Micah 6:8 — "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."',
    prayer: 'Lord Jesus, You did not call me to be an idle spectator in my village or city; You called me to be salt that brings flavor and preserves goodness, and light that shatters the darkness. Fill my heart with compassion for the poor, the sick, and the struggling. Give me wisdom to create solutions, kindness to bind broken hearts, and courage to serve without pride, in Your holy name, Amen.',
    bibleTopic: 'Changing the World',
    objectives: [
      'Understand the chemical and social metaphor of Salt (preserving decay, bringing out taste) and Light (dispelling darkness, guiding travelers)',
      'Discover that changing the world begins with small, faithful deeds done with great love right in your own neighborhood',
      'Design and launch a concrete 1-hour community service project with family or friends'
    ],
    householdMaterials: ['A pinch of salt in a spoon', 'A candle or phone torch', 'A piece of paper and pen'],
    dialectWords: [
      { localWord: 'Omunnyo n’Ettawaaza y’ensi', englishMeaning: 'The salt and light of the earth', language: 'Luganda' },
      { localWord: 'Omwonyo n’omushana gw’ensi', englishMeaning: 'The salt and light of the world', language: 'Runyankole' },
      { localWord: 'Chumvi na Nuru ya ulimwengu', englishMeaning: 'The salt and light of the world', language: 'Swahili' },
      { localWord: 'Kado ki tyer me piny', englishMeaning: 'Salt and light of the world', language: 'Acholi' }
    ],
    communityMission: {
      title: 'The Salt & Light Community Action Initiative',
      impactGoal: 'Identify one tangible need in your immediate village, street, or church community and carry out a dedicated act of service this weekend',
      actionSteps: [
        'Form a team with a sibling, parent, or friend.',
        'Choose an initiative: (A) Help a struggling mother carry groceries/wash laundry; (B) Teach reading to 2 younger neighbor children who lack books; (C) Fix a broken wooden bench or sweep the church/community hall; (D) Deliver fresh fruit or a hot meal to an unwell neighbor.',
        'Carry out the project with joy and humility, asking for nothing in return.',
        'If they thank you, reply warmly: "We thank God for the blessing to serve our community!"'
      ],
      worldChangerPrinciple: 'You do not have to wait until you are 30 years old with a university degree to change the world. Jesus used a boy’s five loaves and two small fish to feed five thousand people. Offer your hands to God today, and watch Him touch lives through you.',
      dialectPhrase: 'Akaana akalungi ka kitundu kyonna (A good child is a blessing to the entire community)'
    },
    parentTeachingGuide: {
      introductoryQuestion: 'Taste this tiny pinch of salt. What happens to a big pot of soup when you add just a little bit of salt? What happens to a pitch-black room when you turn on one single tiny candle?',
      simplifiedExplanation: 'Salt does not shout; it works quietly from within, preserving food from rotting and making everything taste delicious. Light does not need to fight the darkness; it simply shines, and darkness vanishes instantly! Jesus told His disciples: "You are the salt of the earth and the light of the world." That means wherever you go—your school, your football pitch, your trading center—your honesty, kindness, and hard work should make the atmosphere better!',
      safeHomeActivity: {
        title: 'The Salt & Darkness Object Lesson',
        materials: ['A slice of fresh tomato or avocado', 'A pinch of salt', 'A flashlight'],
        steps: [
          'Taste the tomato without salt. Now add a pinch of salt. Notice how the rich flavor bursts open!',
          'Step into a darkened room and switch on the torch. Notice how one small beam clears the entire room.',
          'Discuss: How can you be "salt" at school tomorrow when other kids are speaking harsh words?'
        ]
      },
      followUpQuestions: [
        { question: 'What does salt do to food and meat in African villages without refrigerators?', sampleAnswer: 'It preserves meat from spoiling and rotting, and brings out delicious flavor.' },
        { question: 'Why does Matthew 5:16 say we should let our light shine?', sampleAnswer: 'So that others may see our good works and give glory to our Father in heaven!' }
      ],
      parentChallenge: 'Help your child organize their 1-hour community service project and participate alongside them.'
    },
    mission: {
      step1_learn: {
        title: 'The Blueprint of a World Changer',
        duration: '5 mins',
        story: 'David was just a young shepherd boy tending sheep in the wilderness, learning integrity and trusting God with the lion and the bear. When Goliath terrified the whole army of Israel, David stepped forward with five smooth stones and the name of the Lord. God uses prepared, faithful youth to deliver whole nations.',
        keyConcept: 'World changers are faithful in small daily duties. Extraordinary impact grows from ordinary daily obedience.',
        localExample: 'Young people across Africa who started community reading corners, youth sports leagues, and tree-planting clubs started with nothing more than love for their neighbors and faith in God.'
      },
      step2_discuss: {
        title: 'Leading by Serving',
        duration: '5 mins',
        askFirst: 'What did Jesus do to His disciples’ feet at the Last Supper, and what does that teach us about real leadership?',
        listenFor: 'He washed their dusty feet; real leaders serve others instead of demanding to be served.',
        explainSimply: 'The greatest in the Kingdom of God is the servant of all.',
        parentTip: 'Praise acts of quiet, unprompted service in your household.'
      },
      step3_activity: {
        title: 'Drafting the World Changer Action Plan',
        duration: '7 mins',
        gameOrExperimentName: 'Mission Canvas',
        instructions: [
          'Take a piece of paper and write: "MY COMMUNITY CHANGE PLEDGE".',
          'Who: Which neighbor, group, or place needs help?',
          'What: Exactly what service will we deliver?',
          'When: Exact day and hour this weekend.',
          'Commit it to God in prayer right now.'
        ],
        whatChildLearns: 'Project planning, civic initiative, and practical empathy.'
      },
      step4_quiz: {
        title: 'Salt & Light Quiz',
        duration: '3 mins',
        questions: [
          {
            question: 'What happens when salt loses its saltiness (Matthew 5:13)?',
            options: ['It turns into gold', 'It is no longer good for anything except to be thrown out and trampled underfoot', 'It tastes sweet like sugar', 'It starts to shine'],
            correctIndex: 1,
            explanation: 'When believers compromise their character, they lose their ability to influence the world for good.'
          },
          {
            question: 'What three things does the Lord require of us in Micah 6:8?',
            options: ['To be rich, famous, and loud', 'To act justly, to love mercy, and to walk humbly with your God', 'To sleep all day and eat meat', 'To argue with everyone'],
            correctIndex: 1,
            explanation: 'Micah 6:8 is God’s timeless standard: Justice, mercy, and humble fellowship with God.'
          }
        ]
      }
    },
    parentChallenge: 'Accompany your child when they deliver their community service action and take a proud photo for their Learning Passport.',
    fiveMinuteBite: {
      title: '5-Minute Light Reflection',
      quickPrompt: 'Repeat Matthew 5:14: "You are the light of the world!"',
      quickAction: 'Write down one secret kind deed you will do for someone today.'
    },
    whatsAppSnippet: `✨ *HOME ACADEMY: Salt and Light (Ages 13-16)*
*Scripture:* Matthew 5:14–16 & Micah 6:8 (Act justly, love mercy, walk humbly).
*Calling:* You are the salt of the earth and the light of your community.
*Community Mission:* Execute a 1-hour community blessing project this weekend!
*Passport Stamp:* World Changer Ambassador 🌍💡✝️`,
    audioNarrationText: 'You are the light of the world. Do not hide your light under a basket; let your kindness, integrity, and faith shine so bright that your entire community is transformed.'
  }
];
