import { LessonModule, LocationType } from '../types/curriculum';
import { CHRISTIAN_CURRICULUM_MODULES } from './christianCurriculumData';
import { ENRICHED_CURRICULUM_MODULES } from './enrichedCurriculumData';
import { YEAR_ROUND_CURRICULUM_MODULES } from './yearRoundCurriculumData';
import { ensureWorldChangerMission } from './unSdgData';
import { getUsAlignmentForLesson } from './usCurriculumData';

const BASE_CURRICULUM_MODULES: LessonModule[] = [
  // =========================================================================
  // AGES 3–5: DISCOVER (FOUNDATIONS) - Simple, Sensory, Rich in Dialect
  // =========================================================================
  {
    id: 'age3-5-lang-first-words',
    ageBand: '3-5',
    stageName: 'Discover',
    category: 'language',
    categoryLabel: 'Language & Storytelling',
    title: 'Our First Words & Community Sounds',
    subtitle: 'Listening, greeting elders, and learning words in our neighborhood',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-amber-400 to-orange-500',
    badgeName: 'Sound Detective',
    badgeDescription: 'Can greet in dialect and imitate 5 neighborhood sounds',
    objectives: [
      'Listen quietly to sounds around the home and shamba',
      'Learn greeting words: "Olyotya!" (How are you?) and "Bulungi!" (Good!)',
      'Name what makes each sound in plain words'
    ],
    householdMaterials: ['A metal spoon and a cup', 'Your voice and clapping hands'],
    dialectWords: [
      { localWord: 'Olyotya!', englishMeaning: 'How are you? (Greeting)', language: 'Luganda' },
      { localWord: 'Bulungi!', englishMeaning: 'I am good / Well', language: 'Luganda' },
      { localWord: 'Amatu', englishMeaning: 'Ears', language: 'Luganda' },
      { localWord: 'Enkoko', englishMeaning: 'Chicken / Rooster', language: 'Luganda' },
      { localWord: 'Habari gani?', englishMeaning: 'What news? / How are you?', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Close your eyes for 10 seconds. What is the very first quiet sound your ears (amatu) can catch right now?',
      simplifiedExplanation: 'Everything that moves makes a sound! The rooster (enkoko) says "Koko-li-ko!", the kettle on the sigiri sings "Shhh!", and a boda boda goes "Vroom!". When we listen and name things in English and our mother tongue, our words grow strong.',
      safeHomeActivity: {
        title: 'The Mystery Echo Game',
        materials: ['A spoon', 'A plastic or enamel cup', 'A dry leaf'],
        steps: [
          'Ask your child to turn around so they cannot see your hands.',
          'Gently tap the spoon on the cup ("Ting-ting!"), crinkle a leaf, or clap.',
          'Ask: "Mystery sound! Ani akoze eddoboozi eryo? (What made that sound?)"',
          'Let them turn around, take the spoon, and tap it back to you like an echo!'
        ],
        safetyTip: 'Use a dull kitchen spoon and avoid banging too close to little ears.'
      },
      followUpQuestions: [
        {
          question: 'What do we call our ears in Luganda?',
          sampleAnswer: 'Amatu!'
        },
        {
          question: 'When neighbor mama passes by in the morning, what cheerful word do we say to greet her?',
          sampleAnswer: '"Olyotya nyabo!" or "Habari za asubuhi!"'
        }
      ],
      parentChallenge: 'At lunch, have your child greet another family member with "Olyotya!" and imitate the morning sound of an enkoko (chicken)!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Listening Ears (Amatu)',
        duration: '5 min',
        story: 'Early in the morning, before the hot sun (omusana) climbs into the sky, our home wakes up. The rooster calls "Koko-li-ko!", the kettle whistles on the charcoal stove (sigiri), and the boda boda rides down the red dirt road. Our ears (amatu) catch all these sounds like two friendly baskets!',
        keyConcept: 'Every sound comes from something moving. When we name what we hear, we build words and wisdom.',
        localExample: 'The rain tapping on a tin roof ("taka-taka-taka") or greeting mama with "Webale nyo!"'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Talk with Warmth',
        duration: '5 min',
        askFirst: 'Close your eyes! What quiet sound is hiding in our room right now?',
        listenFor: 'Listen if they name birds, wind, footsteps, or breathing.',
        explainSimply: '"Everything around us has a name. In English we say ears, in Luganda we say amatu! When you speak both, your brain is super strong."',
        parentTip: 'Smile and praise them! Even if they say "I heard a lion!", giggle together and ask if it was just the cat.'
      },
      step3_activity: {
        title: '5 min • The Echo Sound Game',
        duration: '5 min',
        gameOrExperimentName: 'Tap and Guess',
        instructions: [
          'Child turns their back.',
          'Parent taps a cup or claps hands twice.',
          'Child guesses what made the sound and repeats the sound back!'
        ],
        whatChildLearns: 'Listening carefully, taking turns, and learning words in English and local dialect.'
      },
      step4_quiz: {
        title: '5 min • Quick Fun Questions',
        duration: '5 min',
        questions: [
          {
            question: 'What body part catches sounds in the air?',
            options: ['Our ears (Amatu)', 'Our toes', 'Our elbows'],
            correctIndex: 0,
            explanation: 'Yes! Our ears (amatu) catch voices, songs, and laughter!'
          },
          {
            question: 'What polite greeting can we say to mama or papa in the morning?',
            options: ['Olyotya! / Good morning!', 'Go away!', 'Shout loudly'],
            correctIndex: 0,
            explanation: 'Olyotya! Warm greetings make everyone in the home happy!'
          },
          {
            question: 'What sound does an enkoko (chicken) make?',
            options: ['Koko-li-ko! / Cluck-cluck!', 'Vroom-vroom!', 'Moo-moo!'],
            correctIndex: 0,
            explanation: 'Koko-li-ko! You know your animal friends so well!'
          }
        ]
      }
    },
    parentChallenge: 'Ask your child to greet an auntie or elder with "Olyotya" today and listen to their reply!',
    fiveMinuteBite: {
      title: '5-Minute Quiet Sound Hunt',
      quickPrompt: 'Stand by the doorway and stay quiet as a sleeping baby for 20 seconds.',
      quickAction: 'Count on your fingers: Did you hear a bird, wind, or a motor?'
    },
    whatsAppSnippet: `👂 *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5)*
*Topic:* Sounds & First Words (Amatu n'Amaloboozi)
*Local Dialect:* Amatu = Ears, Enkoko = Chicken, Olyotya = How are you?
*Activity:* Tap a spoon on a cup behind their back—let them guess what made the sound!
*Passport Stamp:* Sound Detective 🏅`,
    audioNarrationText: 'Olyotya! Welcome to our listening mission. Close your eyes and listen to your amatu. Everything around us has a name and a sound!',
    urbanVariant: {
      setting: 'urban',
      badgeLabel: '🏙️ Urban Town Setting',
      environmentSummary: 'Town streets, duuka kiosks, taxi stages & home compounds',
      storySnippet: 'Early in the morning, our town neighborhood wakes up! A boda boda engine rumbles by ("Vroom!"), a taxi matatu honks ("Peep-peep!"), the radio plays at the duuka, and neighbor auntie calls "Ki kati!". Our ears (amatu) catch all these busy city sounds like two friendly antennas!',
      localExample: 'The rain drumming on iron roofs (amabaati), the boda horn, or greeting neighbor uncle with "Ki kati ssebo!"',
      householdMaterials: ['A metal spoon and a plastic/metal cup', 'Your clapping hands and voice'],
      introductoryQuestion: 'Close your eyes for 10 seconds. What is the very first quiet sound your ears (amatu) can catch in our town compound right now?',
      simplifiedExplanation: 'Everything that moves makes a sound! The car goes "Beep!", the tea kettle sings on the stove, and friends say "Ki kati!". When we listen and name things in English and urban dialect, our words grow quick and sharp.',
      activityTitle: 'The Town Echo Mystery Game',
      activitySteps: [
        'Child turns their back so they cannot see your hands.',
        'Parent taps a spoon on a mug or keys ("Jingle-jingle!").',
        'Ask: "Mystery sound! Ani akoze eddoboozi eryo? (What made that town sound?)"',
        'Child guesses and imitates the sound back!'
      ],
      parentChallenge: 'At lunch, have your child greet the shopkeeper or neighbor with "Ki kati!" and name 3 town sounds they heard this morning!',
      dialectWords: [
        { localWord: 'Ki kati!', englishMeaning: 'What’s up! / How are you! (Urban greeting)', language: 'Urban Luganda', setting: 'urban' },
        { localWord: 'Oli otya boss!', englishMeaning: 'Respectful urban greeting', language: 'Urban Luglish', setting: 'urban' },
        { localWord: 'Amatu', englishMeaning: 'Ears', language: 'Luganda', setting: 'both' },
        { localWord: 'Boda boda', englishMeaning: 'Motorcycle taxi', language: 'East African Slang', setting: 'urban' },
        { localWord: 'Duuka', englishMeaning: 'Corner shop / Kiosk', language: 'Luganda', setting: 'urban' }
      ],
      whatsAppSnippet: `👂 *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5 - Urban)*
*Topic:* Sounds & City Words (Amatu n'Amaloboozi)
*Urban Dialect:* Ki kati = Hello/What's up, Amatu = Ears, Duuka = Shop.
*Activity:* Tap a spoon on a mug behind their back—let them guess the mystery town sound!
*Passport Stamp:* Sound Detective 🏅`
    },
    ruralVariant: {
      setting: 'rural',
      badgeLabel: '🌾 Rural Village Setting',
      environmentSummary: 'Homestead compound, banana shamba (olusuku) & borehole',
      storySnippet: 'Early in the morning before the hot sun (omusana) climbs over the hills, our village homestead wakes up. The rooster (enkoko) crows "Koko-li-ko!", birds flutter in the mango tree, the borehole pump squeaks in the valley, and mama sweeps the compound. Our ears (amatu) catch each peaceful country sound!',
      localExample: 'The wind rustling through banana leaves (olusuku), cows mooing, or greeting an elder with "Olyotya nyabo!"',
      householdMaterials: ['A wooden stick or dry leaf', 'A tin cup or calabash', 'Clapping hands'],
      introductoryQuestion: 'Close your eyes for 10 seconds. What is the very first quiet sound your ears (amatu) can catch from the shamba or compound right now?',
      simplifiedExplanation: 'Everything in nature has a voice! The rooster (enkoko) wakes the village, wind whispers through the banana grove (olusuku), and dry leaves crunch underfoot. When we name what we hear in Luganda and English, our mother tongue and heart grow together.',
      activityTitle: 'The Shamba Mystery Echo',
      activitySteps: [
        'Child turns away toward the trees.',
        'Parent snaps a dry twig, shakes a pod of dry seeds, or taps a tin cup.',
        'Ask: "Mystery sound! Ani akoze eddoboozi eryo? (What made that village sound?)"',
        'Child turns around, names the object, and makes the sound back!'
      ],
      parentChallenge: 'While walking to the garden or kitchen, have your child greet an elder with "Olyotya ssebo/nyabo!" and imitate the morning call of an enkoko!',
      dialectWords: [
        { localWord: 'Olyotya nyabo / ssebo!', englishMeaning: 'Respectful greeting to an elder', language: 'Traditional Luganda', setting: 'rural' },
        { localWord: 'Bulungi!', englishMeaning: 'I am well / Good', language: 'Luganda', setting: 'rural' },
        { localWord: 'Amatu', englishMeaning: 'Ears', language: 'Luganda', setting: 'both' },
        { localWord: 'Enkoko', englishMeaning: 'Rooster / Chicken', language: 'Luganda', setting: 'rural' },
        { localWord: 'Olusuku', englishMeaning: 'Banana plantation / Family shamba', language: 'Luganda', setting: 'rural' },
        { localWord: 'Agandi!', englishMeaning: 'How are you! (Western)', language: 'Runyankole', setting: 'rural' }
      ],
      whatsAppSnippet: `👂 *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5 - Rural)*
*Topic:* Sounds & Country Words (Amatu n'Amaloboozi)
*Rural Dialect:* Olyotya = Polite Greeting, Olusuku = Shamba, Enkoko = Rooster.
*Activity:* Snap a dry twig or shake dry bean pods behind their back—let them guess!
*Passport Stamp:* Sound Detective 🏅`
    },
    isFeatured: true
  },

  {
    id: 'age3-5-num-counting-seeds',
    ageBand: '3-5',
    stageName: 'Discover',
    category: 'numbers',
    categoryLabel: 'Numbers & Counting',
    title: 'Counting 1 to 10 with Seeds & Stones',
    subtitle: 'Counting beans (bijanjaalo), fingers, and bananas in English and Luganda',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Hash',
    themeColor: 'from-emerald-400 to-teal-600',
    badgeName: 'Master Counter',
    badgeDescription: 'Can count 10 seeds one-by-one in English and Luganda/Swahili',
    objectives: [
      'Touch one seed at a time as you count (1-to-1 matching)',
      'Count 1 to 5 in Luganda: Emu, Bbiri, Ssatu, Nnya, Ttaano',
      'Understand when one pile has "more" (bingi) and one has "less" (bitono)'
    ],
    householdMaterials: ['10 dry beans (bijanjaalo) or clean stones', 'Two leaves or plates'],
    dialectWords: [
      { localWord: 'Emu, Bbiri, Ssatu, Nnya, Ttaano', englishMeaning: '1, 2, 3, 4, 5 (Luganda numbers)', language: 'Luganda' },
      { localWord: 'Moja, Mbili, Tatu, Nne, Tano', englishMeaning: '1, 2, 3, 4, 5 (Swahili numbers)', language: 'Swahili' },
      { localWord: 'Bijanjaalo', englishMeaning: 'Dry kidney beans', language: 'Luganda' },
      { localWord: 'Bingi', englishMeaning: 'Many / More', language: 'Luganda' },
      { localWord: 'Bitono', englishMeaning: 'Few / Less', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Can you show me 3 fingers on one hand? Now show 5 fingers! Which hand is holding MORE (bingi)?',
      simplifiedExplanation: 'Numbers live on our hands! One finger, two, three, four, five! In Luganda we say: Emu, bbiri, ssatu, nnya, ttaano! When we count beans, we touch each bean gently. The last number we say tells us the whole total.',
      safeHomeActivity: {
        title: 'Feeding the Hungry Bird (Enyonyi)',
        materials: ['10 dry beans or clean smooth pebbles', '2 leaves or small cup lids'],
        steps: [
          'Put 2 beans on Leaf A. Put 5 beans on Leaf B.',
          'Say: "A hungry bird wants the biggest lunch! Which leaf has BINGI (more)?"',
          'Have your child touch each seed on Leaf B: "Emu, bbiri, ssatu, nnya, ttaano!" (1, 2, 3, 4, 5).',
          'Let them pick up all 5 seeds and drop them into your open hand!'
        ],
        safetyTip: 'Supervise small children so dry beans are never put in mouths or noses.'
      },
      followUpQuestions: [
        {
          question: 'How do we say number 1, 2, and 3 in Luganda or Swahili?',
          sampleAnswer: 'Emu, bbiri, ssatu! (or Moja, mbili, tatu!)'
        },
        {
          question: 'If you have 4 sweet bananas and your brother has 1 banana, who has MORE (bingi)?',
          sampleAnswer: 'You have more with 4!'
        }
      ],
      parentChallenge: 'While setting cups for tea today, ask your child: "How many people are drinking chai? Can you bring emu, bbiri, ssatu cups?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Seed March',
        duration: '5 min',
        story: 'Look at your hand. You have five fingers: 1, 2, 3, 4, 5! In our home language, we say: Emu, Bbiri, Ssatu, Nnya, Ttaano! When mama buys sweet yellow bananas (menvu) at the market, the seller counts: One, two, three! Numbers help us share food fairly so everyone gets enough.',
        keyConcept: 'Touch one object for each number you say. That is fair counting.',
        localExample: 'Counting fingers on a hand of matooke, or counting pairs of sandals by the doorway.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Seed Math',
        duration: '5 min',
        askFirst: 'Can you count my fingers: Emu, bbiri, ssatu? How many fingers do you have?',
        listenFor: 'Look if they touch each finger slowly.',
        explainSimply: '"When we count, we go one by one: Emu, bbiri, ssatu! A big pile is BINGI (more). A tiny pile is BITONO (less)."',
        parentTip: 'Do not rush them if they skip a number. Hold their hand gently and count together with joy!'
      },
      step3_activity: {
        title: '5 min • Two-Leaf Seed Game',
        duration: '5 min',
        gameOrExperimentName: 'Feed the Bird',
        instructions: [
          'Put 2 beans on one leaf, 5 on another leaf.',
          'Child picks the leaf with MORE (bingi).',
          'Count each bean one by one as they move them into your hand.'
        ],
        whatChildLearns: 'Number sense, counting in local dialect, comparing quantities.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'How many hands do you have to clap with?',
            options: ['2 hands (Bbiri)', '10 hands', '1 hand'],
            correctIndex: 0,
            explanation: 'Two hands! Emu, bbiri! High five!'
          },
          {
            question: 'In Luganda, what number is TTAANO?',
            options: ['Number 5', 'Number 1', 'Number 100'],
            correctIndex: 0,
            explanation: 'Ttaano is 5! Just like five fingers on your hand!'
          },
          {
            question: 'When a basket is full of many mangoes, is it BINGI (more) or BITONO (less)?',
            options: ['Bingi (many / more)', 'Bitono (very few)', 'Empty'],
            correctIndex: 0,
            explanation: 'Bingi! Full of sweet fruit for the family!'
          }
        ]
      }
    },
    parentChallenge: 'Count the sweet bananas (menvu) or cups in the kitchen together today up to 5 in Luganda or Swahili!',
    fiveMinuteBite: {
      title: '5-Minute Finger Clap Count',
      quickPrompt: 'Clap 3 times while counting out loud: Emu! Bbiri! Ssatu!',
      quickAction: 'Now jump 2 times: Emu! Bbiri!'
    },
    whatsAppSnippet: `🔢 *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5)*
*Topic:* Counting with Beans & Fingers (Okubala)
*Dialect:* Emu (1), Bbiri (2), Ssatu (3), Nnya (4), Ttaano (5). Bingi = More!
*Activity:* Put 2 beans on one leaf and 5 on another. Count which has MORE.
*Passport Stamp:* Master Counter 🏅`,
    audioNarrationText: 'Let us count together! Emu, bbiri, ssatu, nnya, ttaano! Five fingers on your hand. Can you give mama a high five right now?',
    isFeatured: true
  },

  {
    id: 'age3-5-color-rainbow-garden',
    ageBand: '3-5',
    stageName: 'Discover',
    category: 'colors-shapes',
    categoryLabel: 'Colors & Shapes',
    title: 'The Colors of Our Shamba (Garden)',
    subtitle: 'Spotting Green (Kiragala), Yellow (Kyenvu), Red (Myufu), and Soil Brown',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Palette',
    themeColor: 'from-pink-400 to-rose-500',
    badgeName: 'Color Explorer',
    badgeDescription: 'Can name 4 natural colors in English and Luganda/Swahili',
    objectives: [
      'Find Green (Kiragala / Kijani) in leaves',
      'Find Yellow (Kyenvu / Manjano) in ripe bananas',
      'Find Red (Myufu / Nyekundu) in ripe tomatoes (enyanya)'
    ],
    householdMaterials: ['A ripe tomato or flower', 'A green leaf from the shamba', 'Brown soil (ettaka)'],
    dialectWords: [
      { localWord: 'Kiragala', englishMeaning: 'Green color', language: 'Luganda' },
      { localWord: 'Kyenvu', englishMeaning: 'Yellow color', language: 'Luganda' },
      { localWord: 'Myufu', englishMeaning: 'Red color', language: 'Luganda' },
      { localWord: 'Ettaka', englishMeaning: 'Soil / Earth / Ground', language: 'Luganda' },
      { localWord: 'Enyanya', englishMeaning: 'Tomato', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'When a sweet banana (menvu) is growing on the tree, it is green. When it is sweet and ready to eat, what color does it turn?',
      simplifiedExplanation: 'Mother Nature uses colors as happy signs! Green (Kiragala) leaves catch sunlight to grow. Yellow (Kyenvu) bananas and red (myufu) tomatoes tell our tummies: "I am ripe, sweet, and delicious to eat!"',
      safeHomeActivity: {
        title: 'The Shamba Color Hunt',
        materials: ['A clean cloth or plate', '1 green leaf', '1 ripe tomato or yellow fruit', 'A pinch of soil'],
        steps: [
          'Say: "Color hunter! Find something KIRAGALA (green) from a plant outside."',
          'Say: "Find something MYUFU (red) or KYENVU (yellow) from our food basket."',
          'Say: "Find a little pinch of ETTAKA (brown soil)."',
          'Put them on the cloth and celebrate naming all the colors together!'
        ],
        safetyTip: 'Pick safe clean garden leaves; avoid thorny plants.'
      },
      followUpQuestions: [
        {
          question: 'What color is a ripe, juicy tomato (enyanya)?',
          sampleAnswer: 'Red! (Myufu in Luganda, Nyekundu in Swahili).'
        },
        {
          question: 'What color are fresh growing matooke leaves in the morning sun?',
          sampleAnswer: 'Green! (Kiragala in Luganda, Kijani in Swahili).'
        }
      ],
      parentChallenge: 'While peeling tomatoes or onions for supper, ask your child: "What color is the enyanya?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Colors of Nature',
        duration: '5 min',
        story: 'Look around our compound! Green (Kiragala) is the color of matooke leaves dancing in the wind. Yellow (Kyenvu) is the sweet ripe banana and the bright morning sun (omusana). Red (Myufu) is the juicy tomato. Brown is the rich earth (ettaka) that feeds our crops. Colors tell us stories every day!',
        keyConcept: 'Colors help us know when fruit is sweet and ready to eat.',
        localExample: 'A green mango is hard and sour; a golden yellow mango is sweet like honey!'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Color Words',
        duration: '5 min',
        askFirst: 'Look at your shirt and my shirt. What color are we wearing today?',
        listenFor: 'Let them guess and name the colors in English or dialect.',
        explainSimply: '"In English we say green; in Luganda we say kiragala! In Swahili we say kijani! Words give names to nature\'s paint."',
        parentTip: 'If they mix up blue and green at age 3, do not worry! Show them a green leaf next to a blue basin.'
      },
      step3_activity: {
        title: '5 min • The 3-Item Color Treasure',
        duration: '5 min',
        gameOrExperimentName: 'Find 3 Colors',
        instructions: [
          'Find 1 green leaf (Kiragala).',
          'Find 1 red or yellow food (Myufu / Kyenvu).',
          'Find a pinch of brown earth (Ettaka).',
          'Place them side-by-side on a plate!'
        ],
        whatChildLearns: 'Color recognition in everyday environment, bilingual vocabulary.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What color is a sweet ripe banana?',
            options: ['Yellow (Kyenvu)', 'Black', 'Blue'],
            correctIndex: 0,
            explanation: 'Yellow! Sweet and ready for tea!'
          },
          {
            question: 'What color are healthy leaves on a tree in the sunshine?',
            options: ['Green (Kiragala / Kijani)', 'Purple', 'Silver'],
            correctIndex: 0,
            explanation: 'Green! Drinking sunshine to make food!'
          },
          {
            question: 'What is the color of the rich earth (ettaka) in the shamba?',
            options: ['Warm brown or red soil', 'Snow white', 'Bright blue'],
            correctIndex: 0,
            explanation: 'Brown soil feeds our beans and matooke!'
          }
        ]
      }
    },
    parentChallenge: 'Point to 2 different foods during supper and ask your child to name their colors in English and Luganda/Swahili!',
    fiveMinuteBite: {
      title: '5-Minute Color Touch',
      quickPrompt: 'Touch something GREEN (Kiragala) in 5 seconds! Go!',
      quickAction: 'Now touch something YELLOW (Kyenvu)! Well done!'
    },
    whatsAppSnippet: `🎨 *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5)*
*Topic:* Colors of Our Shamba (Langi z'Ebimera)
*Dialect:* Kiragala (Green), Kyenvu (Yellow), Myufu (Red), Ettaka (Soil).
*Activity:* 3-minute hunt: 1 green leaf, 1 red tomato, 1 pinch of brown soil.
*Passport Stamp:* Color Explorer 🏅`,
    audioNarrationText: 'Kiragala is green, kyenvu is yellow, and myufu is red! Nature painted our shamba with the brightest colors. What color is your favourite fruit?',
    isFeatured: true
  },

  {
    id: 'age3-5-shapes-around-home',
    ageBand: '3-5',
    stageName: 'Discover',
    category: 'colors-shapes',
    categoryLabel: 'Colors & Shapes',
    title: 'Spotting Shapes in Our Home',
    subtitle: 'Round Chapatis (Circles), Long Doors (Rectangles), and Samosas (Triangles)',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Boxes',
    themeColor: 'from-violet-400 to-purple-600',
    badgeName: 'Shape Architect',
    badgeDescription: 'Can spot circles, rectangles, and triangles in real food and furniture',
    objectives: [
      'Recognize round Circles in chapatis, enamel plates, and bicycle wheels',
      'Recognize Rectangles in front doors (oluggi) and sleeping mats',
      'Trace triangles with 3 pointy corners like a samosa'
    ],
    householdMaterials: ['A round plate or cup', 'A matchbox or book', 'A folded paper'],
    dialectWords: [
      { localWord: 'Oluggi', englishMeaning: 'Door (Rectangle)', language: 'Luganda' },
      { localWord: 'Omupiira', englishMeaning: 'Ball / Tire / Wheel (Circle)', language: 'Luganda' },
      { localWord: 'Esaani', englishMeaning: 'Plate (Round circle)', language: 'Luganda' },
      { localWord: 'Samosa', englishMeaning: 'Triangular snack with 3 corners', language: 'Swahili/Luganda' },
      { localWord: 'Chapati', englishMeaning: 'Round flatbread (Circle)', language: 'Swahili/Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Why are boda boda wheels round circles instead of square boxes with sharp corners?',
      simplifiedExplanation: 'Shapes do special jobs! A circle is round like a delicious chapati or bike wheel (omupiira)—it rolls easily without bumping! A rectangle has flat edges like our front door (oluggi) so it stays tall and closes securely.',
      safeHomeActivity: {
        title: 'The Home Shape Detective',
        materials: ['A round cup lid or plate (esaani)', 'A book or phone (rectangle)'],
        steps: [
          'Draw a circle in the air with your pointer finger: "Round and round like a chapati!"',
          'Touch a round enamel plate: "A circle has no sharp corners!"',
          'Touch the front door (oluggi): "Two long sides, two short sides—a rectangle!"',
          'Fold a paper corner into 3 pointy corners: "1, 2, 3 corners—a triangle like a samosa!"'
        ],
        safetyTip: 'Use enamel or plastic plates instead of breakable glass.'
      },
      followUpQuestions: [
        {
          question: 'What shape is a warm chapati or an enamel plate (esaani)?',
          sampleAnswer: 'A round circle!'
        },
        {
          question: 'How many pointy corners does a samosa triangle have?',
          sampleAnswer: 'Three corners! (Ssatu).'
        }
      ],
      parentChallenge: 'At tea time, ask your child: "What shape is your tea cup? What shape is the table?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Four Shape Friends',
        duration: '5 min',
        story: 'Everything in our home is made of shapes! A circle is perfectly round like a hot chapati, a coin, or a bicycle wheel. A rectangle is tall with two long sides and two short sides, just like the front door (oluggi). And a triangle has three pointy corners like a warm samosa or the peak of a roof!',
        keyConcept: 'Geometry is everywhere. Shapes help things roll, stand, or hold water.',
        localExample: 'A round enamel cup, a rectangular woven mat, and a triangular samosa.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Air Drawing',
        duration: '5 min',
        askFirst: 'Can you draw a big round circle in the air with your finger? Round and round!',
        listenFor: 'Watch them draw a loop in the air.',
        explainSimply: '"Circles roll like wheels! Rectangles stand strong like our door (oluggi). Every shape has a job."',
        parentTip: 'Laugh together imagining riding a bicycle with square wheels that go thump-thump-thump!'
      },
      step3_activity: {
        title: '5 min • Touch the Shapes',
        duration: '5 min',
        gameOrExperimentName: 'Home Shape Hunt',
        instructions: [
          'Find one ROUND CIRCLE in the kitchen (cup, plate, coin).',
          'Touch one RECTANGLE (door, table, mattress).',
          'Fold a paper into a TRIANGLE with 3 corners.'
        ],
        whatChildLearns: 'Shapes in real everyday objects, spatial vocabulary.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What shape is a delicious chapati or a wheel?',
            options: ['A round Circle', 'A square with corners', 'A star'],
            correctIndex: 0,
            explanation: 'A circle! It rolls smooth and round!'
          },
          {
            question: 'What shape is our front door (oluggi)?',
            options: ['A tall Rectangle', 'A round ball', 'A triangle'],
            correctIndex: 0,
            explanation: 'A rectangle! It stands flat and tall!'
          },
          {
            question: 'How many corners does a samosa triangle have?',
            options: ['3 corners', '10 corners', '0 corners'],
            correctIndex: 0,
            explanation: 'Three corners: 1, 2, 3! You are a shape master!'
          }
        ]
      }
    },
    parentChallenge: 'Ask your child to show their grandmother or sibling the 3 corners of a triangle folded paper today!',
    fiveMinuteBite: {
      title: '5-Minute Finger Shape Goggles',
      quickPrompt: 'Make circles with your fingers like goggles.',
      quickAction: 'Peep through and spot one round thing in the room!'
    },
    whatsAppSnippet: `📐 *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5)*
*Topic:* Spotting Shapes in Our Home (Ebifaananyi)
*Dialect:* Chapati = Circle, Oluggi (Door) = Rectangle, Samosa = Triangle (3 corners).
*Activity:* Touch a round plate, touch the door. Why are wheels circles instead of squares?
*Passport Stamp:* Shape Architect 🏅`,
    audioNarrationText: 'Circles roll, rectangles stand tall, and triangles have three pointy corners! What shape is your favourite snack today?',
    isFeatured: true
  },

  {
    id: 'age3-5-science-senses-lab',
    ageBand: '3-5',
    stageName: 'Discover',
    category: 'science',
    categoryLabel: 'Basic Science & Nature',
    title: 'Our 5 Senses: Amaaso, Amatu, Ennyindo',
    subtitle: 'Eyes, ears, nose, tongue, and skin exploring the world around us',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Eye',
    themeColor: 'from-amber-500 to-yellow-600',
    badgeName: 'Five Senses Scientist',
    badgeDescription: 'Can name all 5 senses in English and dialect',
    objectives: [
      'Name eyes (amaaso), ears (amatu), nose (ennyindo), tongue (olulimi), skin (olususu)',
      'Test smelling a lemon peel or mint leaf with eyes closed',
      'Understand how senses keep us safe from hot stoves (sigiri)'
    ],
    householdMaterials: ['A piece of lemon or orange peel / mint leaf', 'A smooth spoon or river stone'],
    dialectWords: [
      { localWord: 'Amaaso', englishMeaning: 'Eyes (Seeing)', language: 'Luganda' },
      { localWord: 'Amatu', englishMeaning: 'Ears (Hearing)', language: 'Luganda' },
      { localWord: 'Ennyindo', englishMeaning: 'Nose (Smelling)', language: 'Luganda' },
      { localWord: 'Olulimi', englishMeaning: 'Tongue (Tasting)', language: 'Luganda' },
      { localWord: 'Olususu', englishMeaning: 'Skin (Touching & Feeling)', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'If you close your eyes tightly, how can you still know that mama is boiling sweet spiced chai in the kitchen?',
      simplifiedExplanation: 'You have five superhero helpers inside your body! Your eyes (amaaso) see, ears (amatu) hear, nose (ennyindo) smells warm tea, tongue (olulimi) tastes sweet mango, and skin (olususu) feels warm hugs or warns you when the sigiri is hot!',
      safeHomeActivity: {
        title: 'The Closed-Eyes Mystery Test',
        materials: ['A piece of orange peel, lemon, or onion', 'A cool smooth spoon'],
        steps: [
          'Ask your child to close their eyes (amaaso).',
          'Hold the orange peel near their nose (ennyindo): "Mystery Smell! What is this?"',
          'Place the cool spoon in their palm: "Mystery Touch! Is it cold or warm? Smooth or rough?"',
          'Let them open their eyes and cheer for their clever brain!'
        ],
        safetyTip: 'Only smell clean, food-safe kitchen items.'
      },
      followUpQuestions: [
        {
          question: 'What do we use to smell roasting groundnuts or sweet flowers?',
          sampleAnswer: 'Our nose! (Ennyindo in Luganda, Pua in Swahili).'
        },
        {
          question: 'Which sense warns us to stay safely away from a hot charcoal stove (sigiri)?',
          sampleAnswer: 'Our skin and sense of touch (feeling heat)!'
        }
      ],
      parentChallenge: 'At dinner, ask your child: "Can your tongue (olulimi) taste if the food is sweet or salty?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Five Superheroes',
        duration: '5 min',
        story: 'Inside your body, five helpers work all day! Your eyes (amaaso) see the blue sky. Your ears (amatu) hear the birds singing. Your nose (ennyindo) smells sweet roasted groundnuts. Your tongue (olulimi) tastes ripe passion fruit. And your skin (olususu) feels a cool morning breeze. Without your senses, you could not explore our world!',
        keyConcept: 'Our senses send quick messages to our brain to tell us what is delightful and keep us safe.',
        localExample: 'Smelling roasting maize on the roadside, or pulling your hand away safely from hot steam.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Sensory Wonder',
        duration: '5 min',
        askFirst: 'Touch your nose (ennyindo), touch your ears (amatu), touch your eyes (amaaso)! What is each one for?',
        listenFor: 'Let them touch and name each body part.',
        explainSimply: '"Our senses protect us! Our nose smells smoke, and our skin feels when tea is too hot to drink."',
        parentTip: 'Praise their body awareness and practice naming body parts in your dialect.'
      },
      step3_activity: {
        title: '5 min • Blindfold Touch & Smell',
        duration: '5 min',
        gameOrExperimentName: 'Mystery Senses',
        instructions: [
          'Child closes eyes.',
          'Smell a fruit peel with their nose (ennyindo).',
          'Touch a cool smooth spoon with their hand (omukono).',
          'Guess both items with eyes closed!'
        ],
        whatChildLearns: 'Sensory discrimination, naming body parts in local dialect.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What body part do we use to taste sweet honey or ripe mango?',
            options: ['Our tongue (Olulimi)', 'Our elbows', 'Our toes'],
            correctIndex: 0,
            explanation: 'Yes! Our tongue (olulimi) tastes sweet, sour, and salty!'
          },
          {
            question: 'What do we call our eyes in Luganda?',
            options: ['Amaaso', 'Amatu', 'Amagulu'],
            correctIndex: 0,
            explanation: 'Amaaso! Beautiful eyes to see the sunshine!'
          },
          {
            question: 'Why do we feel heat before touching a hot sigiri stove?',
            options: ['Our skin warns us to stay safe', 'Our shoes make a noise', 'No reason'],
            correctIndex: 0,
            explanation: 'Our skin feels the warm air and keeps our hands safe!'
          }
        ]
      }
    },
    parentChallenge: 'Ask your child to touch their amaaso, amatu, and ennyindo and name them to another family member today!',
    fiveMinuteBite: {
      title: '5-Minute Texture Hunt',
      quickPrompt: 'Touch two things in the room with your fingers.',
      quickAction: 'Find one thing that is SMOOTH and one thing that is ROUGH (like tree bark).'
    },
    whatsAppSnippet: `👁️ *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5)*
*Topic:* Our 5 Senses (Amaaso, Amatu, Ennyindo)
*Dialect:* Amaaso (Eyes), Amatu (Ears), Ennyindo (Nose), Olulimi (Tongue), Olususu (Skin).
*Activity:* Close eyes: smell an orange peel, feel a cold spoon. Guess what they are!
*Passport Stamp:* Five Senses Scientist 🏅`,
    audioNarrationText: 'Amaaso to see, amatu to hear, ennyindo to smell, and olulimi to taste! Your body is a wonderful laboratory of five superpowers!',
    isFeatured: true
  },

  {
    id: 'age3-5-science-sink-or-float',
    ageBand: '3-5',
    stageName: 'Discover',
    category: 'science',
    categoryLabel: 'Basic Science & Nature',
    title: 'Basin Boat Explorers: Ebbensani Lab',
    subtitle: 'Testing dry leaves vs stones (amayinja) in a water basin',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Waves',
    themeColor: 'from-cyan-400 to-blue-600',
    badgeName: 'Water Scientist',
    badgeDescription: 'Can predict what floats and sinks in a basin of water',
    objectives: [
      'Learn "Float" (stays on top) and "Sink" (drops to the bottom)',
      'Guess before testing: Dry leaf vs Small stone (ejjinja)',
      'Discover that wooden canoes float proudly on Lake Victoria (Nnalubaale)'
    ],
    householdMaterials: ['A small plastic basin (ebbensani) of water', 'A dry leaf', 'A small stone (ejjinja)', 'A plastic bottle cap'],
    dialectWords: [
      { localWord: 'Ebbensani', englishMeaning: 'Water basin', language: 'Luganda' },
      { localWord: 'Amazzi', englishMeaning: 'Water', language: 'Luganda' },
      { localWord: 'Ejjinja / Amayinja', englishMeaning: 'Stone / Stones', language: 'Luganda' },
      { localWord: 'Eddagala / Olubugo', englishMeaning: 'Leaf / Bark', language: 'Luganda' },
      { localWord: 'Eryato', englishMeaning: 'Canoe / Boat', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Hold this dry leaf in one hand and this small stone (ejjinja) in the other. If we drop them into the basin (ebbensani), will they both fall to the bottom?',
      simplifiedExplanation: 'Water (amazzi) has a secret upward push! Light things that hold air stay dancing on top (they FLOAT, like a leaf or wooden canoe). Heavy, dense stones push the water aside and dive straight to the bottom (they SINK, plop!).',
      safeHomeActivity: {
        title: 'The Great Basin (Ebbensani) Test',
        materials: ['A basin with 2 inches of clean water', 'A leaf', 'A small pebble (ejjinja)', 'A plastic bottle cap'],
        steps: [
          'Ask your child to GUESS first: "Will the leaf float or sink?"',
          'Drop the leaf in gently: It dances on top! (Float!)',
          'Ask: "Will the stone (ejjinja) float or sink?" Drop it in: Plop! It sinks to the bottom!',
          'Try a plastic bottle cap. It floats! Flip it upside down and fill it with water—watch what happens!'
        ],
        safetyTip: 'Keep water shallow and always supervise toddlers near basins.'
      },
      followUpQuestions: [
        {
          question: 'What happens to a heavy little stone (ejjinja) dropped in water?',
          sampleAnswer: 'It sinks straight down to the bottom (plop!)'
        },
        {
          question: 'Why does a wooden fishing boat (eryato) stay on top of Lake Victoria?',
          sampleAnswer: 'Because wood is light and shaped wide to hold air and float!'
        }
      ],
      parentChallenge: 'While washing dishes or hands today, test one plastic cup and one metal spoon, and show someone at home which one floats!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Leaf and the Stone',
        duration: '5 min',
        story: 'Have you ever watched wooden fishing canoes (eryato) on Lake Victoria? Even with fish and fishermen inside, the boat stays proudly on top of the water (amazzi)! But if you drop a small stone (ejjinja), splash! It dives straight to the bottom. Water pushes upward. Light things float on top; dense heavy things sink!',
        keyConcept: 'Floating means dancing on top. Sinking means dropping to the bottom.',
        localExample: 'Dry leaves floating on road puddles after rain, or wooden boats on the lake.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Scientific Guessing',
        duration: '5 min',
        askFirst: 'Hold this leaf and this stone (ejjinja). Which one feels heavier? What will happen in the water?',
        listenFor: 'Encourage them to make a guess before dropping.',
        explainSimply: '"A smart child is not someone who knows everything—a smart child guesses and tests like a scientist!"',
        parentTip: 'Let them splash gently! Water play teaches early physics naturally.'
      },
      step3_activity: {
        title: '5 min • The Ebbensani Laboratory',
        duration: '5 min',
        gameOrExperimentName: 'Sink or Float',
        instructions: [
          'Drop the leaf: It floats!',
          'Drop the stone (ejjinja): It sinks!',
          'Drop the bottle cap: Watch it float!'
        ],
        whatChildLearns: 'Buoyancy, density, scientific testing.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'When an object stays on top of the water without falling, what is that called?',
            options: ['Floating on top', 'Sinking', 'Sleeping'],
            correctIndex: 0,
            explanation: 'Floating! Like a canoe or a light leaf!'
          },
          {
            question: 'What happens to a little stone (ejjinja) in a bucket of water?',
            options: ['It sinks straight to the bottom', 'It flies in the sky', 'It catches fire'],
            correctIndex: 0,
            explanation: 'Plop! It sinks to the bottom because it is heavy for its size!'
          },
          {
            question: 'What do clever young scientists do BEFORE they test something in water?',
            options: ['They make a smart guess', 'They run away', 'They close their eyes'],
            correctIndex: 0,
            explanation: 'Yes! They guess first, then test and learn!'
          }
        ]
      }
    },
    parentChallenge: 'While washing hands or cups today, show your child which cup floats and which sinks!',
    fiveMinuteBite: {
      title: '5-Minute Paper Boat',
      quickPrompt: 'Fold a tiny piece of dry paper into a cup.',
      quickAction: 'Set it on water and blow gently to make it sail across the basin!'
    },
    whatsAppSnippet: `🌊 *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5)*
*Topic:* Basin Boat Explorers (Okuseeyeeya n'Okubbira)
*Dialect:* Ebbensani = Basin, Amazzi = Water, Ejjinja = Stone, Eryato = Boat.
*Activity:* Test in a basin: Dry leaf floats, stone sinks! Ask them to guess first.
*Passport Stamp:* Water Scientist 🏅`,
    audioNarrationText: 'Will it sink or will it float? Drop a light leaf in the ebbensani—it dances on top! Drop an ejjinja—plop, it dives down! You are a water scientist!',
    isFeatured: true
  },

  {
    id: 'age3-5-social-magic-words',
    ageBand: '3-5',
    stageName: 'Discover',
    category: 'social-kindness',
    categoryLabel: 'Life Skills & Social',
    title: 'Magic Words: Webale, Nkusaba, Asante',
    subtitle: 'Saying thank you, asking politely, sharing toys, and calming big feelings',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Heart',
    themeColor: 'from-rose-400 to-red-500',
    badgeName: 'Kindness Champion',
    badgeDescription: 'Uses polite words in daily family routines',
    objectives: [
      'Practice saying "Webale nyo!" (Thank you) and "Nkusaba" (Please)',
      'Learn "Asante sana" in Swahili',
      'Learn the 3 deep breaths trick when feeling angry or upset'
    ],
    householdMaterials: ['A clean cup or flower to practice passing', 'Looking into each other\'s eyes'],
    dialectWords: [
      { localWord: 'Webale nyo!', englishMeaning: 'Thank you very much!', language: 'Luganda' },
      { localWord: 'Nkusaba', englishMeaning: 'Please / I request you', language: 'Luganda' },
      { localWord: 'Asante sana', englishMeaning: 'Thank you very much', language: 'Swahili' },
      { localWord: 'Tafadhali', englishMeaning: 'Please', language: 'Swahili' },
      { localWord: 'Mwebale emirimu', englishMeaning: 'Thank you for your hard work!', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'What magic words can you say with your mouth that make mama or papa smile instantly and open closed doors?',
      simplifiedExplanation: 'Words have magic power! "Nkusaba" (Please) shows respect when you ask for food or toys. "Webale nyo!" or "Asante sana" (Thank you) warms people\'s hearts. And when you feel angry or frustrated, taking 3 deep, slow breaths calms your heart.',
      safeHomeActivity: {
        title: 'The Magic Gift Exchange',
        materials: ['A spoon, cup, or clean flower'],
        steps: [
          'Hand the item to your child: "Here is a gift for you, my child!"',
          'Prompt: "What is the magic word?" Child says: "Webale nyo!" or "Thank you!"',
          'Now child hands it back: "Here is a gift for you!" Parent says: "Webale nyo, my child!"',
          'Practice breathing: Breathe in like smelling a sweet flower, breathe out like blowing out a candle.'
        ],
        safetyTip: 'Praise genuine eye contact and warm tone.'
      },
      followUpQuestions: [
        {
          question: 'What do we say when someone gives us food or a cup of water?',
          sampleAnswer: '"Webale nyo!" or "Asante sana!" (Thank you!)'
        },
        {
          question: 'When you want to play with a toy your sister has, what polite word do you use?',
          sampleAnswer: '"Nkusaba / Please, can I take a turn?"'
        }
      ],
      parentChallenge: 'Catch your child doing something kind today (like putting their shoes away or sharing food) and give them a warm hug with "Webale nyo!"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Magic Keys',
        duration: '5 min',
        story: 'Did you know you carry magic keys in your mouth? The first key is "Nkusaba" (Please). When you ask with please, people feel respected. The second key is "Webale nyo!" (Thank you) or "Asante sana!". When someone serves you food or hands you water, saying thank you is like sending sunshine into their heart.',
        keyConcept: 'Kind words and sharing create peace and joy in our home.',
        localExample: 'Saying "Webale nyo nyabo" after eating lunch, or greeting elders with respect.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Polite Hearts',
        duration: '5 min',
        askFirst: 'How does your heart feel when someone says "Webale nyo" to you with a big smile?',
        listenFor: 'Look for: "It feels happy and loved!"',
        explainSimply: '"Children who say Webale and Nkusaba are loved by everyone in the village. Polite words make you strong and respected."',
        parentTip: 'Model it yourself: Say "Webale, Sarah, for handing me that spoon" and watch her glow.'
      },
      step3_activity: {
        title: '5 min • Magic Gift Exchange',
        duration: '5 min',
        gameOrExperimentName: 'Pass and Thank',
        instructions: [
          'Pass a cup back and forth.',
          'Practice saying "Nkusaba" and "Webale nyo!"',
          'Take 3 deep slow breaths together to feel calm and happy.'
        ],
        whatChildLearns: 'Politeness, gratitude, emotional regulation.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What do we say when mama serves delicious food?',
            options: ['Webale nyo! / Thank you!', 'Nothing', 'Go away'],
            correctIndex: 0,
            explanation: 'Webale nyo! Gratitude brings blessings and love!'
          },
          {
            question: 'In Swahili, how do you say "Thank you very much"?',
            options: ['Asante sana', 'Jambo', 'Kwaheri'],
            correctIndex: 0,
            explanation: 'Asante sana! You speak with great respect!'
          },
          {
            question: 'What helps calm our body down when we feel angry or crying?',
            options: ['Taking 3 deep slow breaths', 'Breaking things', 'Shouting'],
            correctIndex: 0,
            explanation: 'Three deep breaths fill our lungs with calm peace!'
          }
        ]
      }
    },
    parentChallenge: 'Remind your child to say "Webale nyo" to whoever cooks food for the family today!',
    fiveMinuteBite: {
      title: '5-Minute Magic Word Practice',
      quickPrompt: 'Practice saying "Webale nyo" and "Asante sana" 3 times with a warm smile.',
      quickAction: 'Give someone in the room a high five and say "Webale!"'
    },
    whatsAppSnippet: `❤️ *HOME ACADEMY: Daily 20-Min Mission (Ages 3-5)*
*Topic:* Magic Words (Ebigambo eby'Amagezi)
*Dialect:* Webale nyo (Thank you), Nkusaba (Please), Asante sana (Thank you - Swahili).
*Activity:* Practice the flower breath: Breathe in like smelling a flower, blow out slow like a candle.
*Passport Stamp:* Kindness Champion 🏅`,
    audioNarrationText: 'Webale nyo and Asante sana! When we use kind words and share, our home fills with joy and peace.',
    isFeatured: false
  },

  // =========================================================================
  // AGES 6–8: BUILD (REAL MATH, PRACTICAL SCIENCE & LIFE ROOTS)
  // =========================================================================
  {
    id: 'age6-8-math-cooking-fractions',
    ageBand: '6-8',
    stageName: 'Build',
    category: 'math',
    categoryLabel: 'Mathematics in Real Life',
    title: 'Let’s Cook with Fractions: Ekitundu & Kkoota',
    subtitle: '½ cup + ¼ cup = ¾ cup with real chapatis and kitchen cups',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'PieChart',
    themeColor: 'from-blue-500 to-indigo-600',
    badgeName: 'Fraction Baker',
    badgeDescription: 'Can demonstrate halves and quarters using water or food and solve ½ + ¼ visually',
    objectives: [
      'Understand that a fraction is an EQUAL, fair part of a whole',
      'Learn "Ekitundu" (Half = ½) and "Kkoota" (Quarter = ¼)',
      'See that two quarters make one half (¼ + ¼ = ½), and ½ + ¼ = ¾'
    ],
    householdMaterials: ['A clear cup or glass', 'Water or posho flour', 'A chapati or piece of paper'],
    dialectWords: [
      { localWord: 'Ekitundu', englishMeaning: 'Half (½) / Portion', language: 'Luganda' },
      { localWord: 'Kkoota', englishMeaning: 'Quarter (¼)', language: 'Luganda' },
      { localWord: 'Kyenkanyi', englishMeaning: 'Equal / Fair / Even', language: 'Luganda' },
      { localWord: 'Nusu', englishMeaning: 'Half (½)', language: 'Swahili' },
      { localWord: 'Robo', englishMeaning: 'Quarter (¼)', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'If two hungry children want to share one warm chapati fairly, how do you cut it so neither child cries?',
      simplifiedExplanation: 'A fraction simply means cutting one whole item into EQUAL, fair parts! 2 equal parts are called halves (Ekitundu / Nusu = ½). 4 equal parts are called quarters (Kkoota / Robo = ¼). Two quarters make one half: ¼ + ¼ = ½. If you add ½ mug of milk to ¼ mug, you get ¾ of a mug!',
      safeHomeActivity: {
        title: 'The Paper & Cup Fraction Bakery',
        materials: ['A sheet of paper', 'A cup of water or posho flour'],
        steps: [
          'Fold a sheet of paper in half: Label one side "½ (Ekitundu)".',
          'Fold it in half again. Unfold: Let your child count the 4 equal rectangles (quarters / kkoota)!',
          'Fill a clear cup halfway with water (½).',
          'Ask: "If we pour in one more quarter cup (¼), how full is the cup?" (¾ full!).'
        ],
        safetyTip: 'Use plastic cups if working near hard kitchen floors.'
      },
      followUpQuestions: [
        {
          question: 'How many equal quarters (kkoota / robo) make ONE whole chapati?',
          sampleAnswer: '4 quarters make 1 whole! (Kkoota nnya).'
        },
        {
          question: 'In Luganda or Swahili, what do we call a half (½)?',
          sampleAnswer: 'Ekitundu (Luganda) or Nusu (Swahili)!'
        }
      ],
      parentChallenge: 'While sharing fruit, bread, or avocado today, have your child slice or break it into equal halves (ekitundu) or quarters (kkoota) for the family!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Fair Kitchen Baker',
        duration: '5 min',
        story: 'Have you ever tried to share one avocado or chapati with your brother? If one piece is big and the other is tiny, that is not fair! In mathematics, a fraction means dividing into EQUAL parts (kyenkanyi). When you cut into 2 equal parts, each is ½ (Ekitundu). When you cut into 4 equal parts, each is ¼ (Kkoota). Chefs use fractions so chai and mandazi taste perfect every time!',
        keyConcept: 'Fractions are fair equal parts of a whole.',
        localExample: 'Sharing a chapati into 4 quarters (kkoota nnya) or measuring half a mug of milk (ekitundu ky\'amata) for chai.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Fraction Math',
        duration: '5 min',
        askFirst: 'If we cut a chapati right down the center into 2 pieces, what do we call each piece?',
        listenFor: 'Listen for: "Halves! / Ekitundu!"',
        explainSimply: '"Two quarters fit together to make one whole half: ¼ + ¼ = ½. When we add another quarter, we get ¾!"',
        parentTip: 'Fold a paper in quarters to show that two quarters match the exact size of one half.'
      },
      step3_activity: {
        title: '5 min • The Water Cup Lab',
        duration: '5 min',
        gameOrExperimentName: 'Pouring Halves & Quarters',
        instructions: [
          'Fill cup halfway with water: That is ½ (ekitundu).',
          'Add another quarter cup (kkoota).',
          'See how the water rises to three-quarters (¾)!'
        ],
        whatChildLearns: 'Visual fractions, proportional volume, kitchen math.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'How many equal quarters (¼) make ONE whole chapati?',
            options: ['4 quarters (Kkoota nnya)', '2 quarters', '10 quarters'],
            correctIndex: 0,
            explanation: '4 equal quarters make 1 whole! ¼ + ¼ + ¼ + ¼ = 1!'
          },
          {
            question: 'What is the local word for HALF (½)?',
            options: ['Ekitundu (or Nusu)', 'Kkoota', 'Sente'],
            correctIndex: 0,
            explanation: 'Ekitundu in Luganda, Nusu in Swahili!'
          },
          {
            question: 'If you have ½ cup of milk and pour in another ¼ cup, how full is your cup?',
            options: ['¾ of a cup (three quarters)', 'Empty', 'Spilled'],
            correctIndex: 0,
            explanation: '¾ full! Two quarters + one quarter = three quarters!'
          }
        ]
      }
    },
    parentChallenge: 'Let your child divide a fruit or snack into equal halves or quarters at tea time today!',
    fiveMinuteBite: {
      title: '5-Minute Fraction Fold',
      quickPrompt: 'Fold a piece of paper in half. Shade one side.',
      quickAction: 'Write "½" on it. Fold again and count the 4 quarters!'
    },
    whatsAppSnippet: `🥞 *HOME ACADEMY: Daily 20-Min Mission (Ages 6-8)*
*Topic:* Let's Cook with Fractions (Ebitundu n'Obukoota)
*Dialect:* Ekitundu = Half (½), Kkoota = Quarter (¼), Kyenkanyi = Equal/Fair.
*Activity:* Cut a chapati in half, then quarters. Show: ¼ + ¼ = ½.
*Passport Stamp:* Fraction Baker 🏅`,
    audioNarrationText: 'Fractions are delicious! One whole chapati cut into two equal parts gives you two halves (ebitundu). Cut again, and you have four quarters (obukoota)!',
    isFeatured: true
  },

  {
    id: 'age6-8-science-rain-cycle',
    ageBand: '6-8',
    stageName: 'Build',
    category: 'science',
    categoryLabel: 'Practical Home Science',
    title: 'Why Does It Rain? Enkuba & The Tea Cup Lab',
    subtitle: 'Where rain comes from, steam clouds, and safe condensation',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'CloudRain',
    themeColor: 'from-sky-500 to-blue-700',
    badgeName: 'Water Cycle Master',
    badgeDescription: 'Can explain how sunshine turns water into clouds and rain',
    objectives: [
      'Explain that warm water rises as invisible steam/vapor (Evaporation)',
      'Discover that cold air turns steam back into water drops (Condensation / Rain / Enkuba)',
      'Learn dialect words for rain (Enkuba) and sunshine (Omusana)'
    ],
    householdMaterials: ['A cup of warm tea or hot water with adult supervision', 'A cold metal spoon or lid'],
    dialectWords: [
      { localWord: 'Enkuba', englishMeaning: 'Rain', language: 'Luganda' },
      { localWord: 'Omusana', englishMeaning: 'Sunshine / Heat of the sun', language: 'Luganda' },
      { localWord: 'Mvua', englishMeaning: 'Rain', language: 'Swahili' },
      { localWord: 'Jua', englishMeaning: 'Sun / Sunshine', language: 'Swahili' },
      { localWord: 'Kireere', englishMeaning: 'Cloud', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'When wet laundry hangs on the line on a hot sunny day (omusana), where does all the water go when the clothes become dry?',
      simplifiedExplanation: 'Water never vanishes! The hot sun (omusana) warms water on the ground and lake, turning it into invisible floating steam (vapor) that climbs into the sky. High up where it is freezing cold, the steam gathers into fluffy clouds (bireere). When clouds become heavy, water falls back down as fresh rain (enkuba)!',
      safeHomeActivity: {
        title: 'The Kitchen Cloud & Rain Simulator',
        materials: ['A mug with warm freshly poured tea', 'A cold metal spoon or metal lid'],
        steps: [
          'Adult pours warm tea or hot water into a cup.',
          'Hold a cold metal spoon upside down over the rising steam for 30 seconds.',
          'Lift the spoon and show your child the tiny water droplets clinging underneath: "A mini cloud!"',
          'Tilt the spoon gently—watch a real water drop fall like a raindrop (enkuba)!'
        ],
        safetyTip: 'Adult must handle hot water. Keep child at safe arm length.'
      },
      followUpQuestions: [
        {
          question: 'What turns water on the ground into invisible steam in the sky?',
          sampleAnswer: 'The hot sun (omusana / jua)!'
        },
        {
          question: 'What happens when rising steam meets cold air high in the sky?',
          sampleAnswer: 'It turns back into liquid water drops to make clouds and rain (enkuba)!'
        }
      ],
      parentChallenge: 'Ask your child to explain to a grandmother or sibling why rain falls from clouds using the cold spoon trick!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Traveling Water Drop',
        duration: '5 min',
        story: 'The water you drink today might be the same water that watered ancient banana trees long ago! When the hot sun (omusana) shines on Lake Victoria, rivers, and wet shamba soil, water warms up and floats high as invisible vapor. High in the cold sky, it huddles together into clouds (bireere). When heavy, drops fall as life-giving rain (enkuba)!',
        keyConcept: 'The water cycle recycles Earth\'s water endlessly.',
        localExample: 'Watching a puddle on the red dirt road dry up under the noon sun—it rose into the sky!'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Rain Talk',
        duration: '5 min',
        askFirst: 'When mama hangs wet clothes on the line, where did the water go when they get dry?',
        listenFor: 'Look for: "The sun took it into the sky!"',
        explainSimply: '"The heat turns liquid water into invisible vapor. It rises up to make clouds that will rain on crops tomorrow!"',
        parentTip: 'Praise their reasoning and emphasize that rain feeds our food.'
      },
      step3_activity: {
        title: '5 min • Safe Tea Cup Cloud Lab',
        duration: '5 min',
        gameOrExperimentName: 'Make Kitchen Rain',
        instructions: [
          'Hold cold metal spoon over hot tea steam.',
          'Observe droplets forming under the spoon.',
          'Tilt spoon to watch a mini raindrop fall!'
        ],
        whatChildLearns: 'Phase changes, evaporation, condensation, water cycle.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What turns water on the ground into vapor in the sky?',
            options: ['The warm heat of the sun (Omusana)', 'A giant fan', 'Painting the sky'],
            correctIndex: 0,
            explanation: 'The sun warms the water so it floats up as vapor!'
          },
          {
            question: 'What is the Luganda word for RAIN?',
            options: ['Enkuba', 'Omusana', 'Ettaka'],
            correctIndex: 0,
            explanation: 'Enkuba! Life-giving rain for our shamba!'
          },
          {
            question: 'Does the Earth ever run out of water if we protect our trees and wetlands?',
            options: ['No, the water cycle continuously cleans and recycles water', 'Yes, all water disappears forever', 'Water comes from stars'],
            correctIndex: 0,
            explanation: 'The water cycle recycles water endlessly, which is why protecting our trees matters!'
          }
        ]
      }
    },
    parentChallenge: 'Ask your child to explain the water cycle to someone at home in 2 minutes tonight!',
    fiveMinuteBite: {
      title: '5-Minute Mirror Breath',
      quickPrompt: 'Breathe warm air onto a cool glass or window ("Haaah!").',
      quickAction: 'Touch the foggy droplets: You made condensation with your breath!'
    },
    whatsAppSnippet: `🌧️ *HOME ACADEMY: Daily 20-Min Mission (Ages 6-8)*
*Topic:* Why We Have Rain (Enkuba n'Omusana)
*Dialect:* Enkuba = Rain, Omusana = Sunshine, Kireere = Cloud.
*Activity:* Hold a cold spoon over warm tea steam—watch real raindrops form on the underside!
*Passport Stamp:* Water Cycle Master 🏅`,
    audioNarrationText: 'Where does enkuba come from? The sun (omusana) warms water into invisible steam. High in the cold sky, it turns into clouds, and falls as life-giving rain!',
    isFeatured: true
  },

  {
    id: 'age6-8-fin-what-is-money',
    ageBand: '6-8',
    stageName: 'Build',
    category: 'finance',
    categoryLabel: 'Financial Literacy',
    title: 'The Coin & The Tin: Sente n\'Ebyetaago',
    subtitle: 'Understanding money, saving in a home tin, and Needs vs Wants',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Coins',
    themeColor: 'from-amber-500 to-yellow-600',
    badgeName: 'Wise Saver',
    badgeDescription: 'Can distinguish Needs vs Wants and explain saving in a tin',
    objectives: [
      'Understand that money (sente) comes from work, skills, and creating value',
      'Distinguish a NEED (Ebyetaago: food, water, medicine) from a WANT (sweets, toys)',
      'Create a home savings tin to protect coins for tomorrow'
    ],
    householdMaterials: ['A coin (e.g. 500 or 1,000 UGX)', 'A clean empty jar or tin', 'Paper and pencil'],
    dialectWords: [
      { localWord: 'Sente', englishMeaning: 'Money', language: 'Luganda' },
      { localWord: 'Ebyetaago', englishMeaning: 'Needs (Things we must have to live)', language: 'Luganda' },
      { localWord: 'Ebyokwesanyusaamu', englishMeaning: 'Wants / Fun extras', language: 'Luganda' },
      { localWord: 'Pesa', englishMeaning: 'Money', language: 'Swahili' },
      { localWord: 'Kusereka / Kutereka', englishMeaning: 'To save / To store money safely', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'What is the difference between buying soap to wash our hands clean versus buying sweets at the trading center?',
      simplifiedExplanation: 'Money (sente) is hard work saved in your pocket! A NEED (Ebyetaago) is something you must have to live healthy: posho, water, soap, school books. A WANT is just a fun extra. Wise children always buy needs first, and drop small coins into a tin to save (kutereka) for tomorrow.',
      safeHomeActivity: {
        title: 'Make Your Home Savings Bank',
        materials: ['A clean empty tin or jar', 'A piece of paper', 'A 200 or 500 UGX coin'],
        steps: [
          'Wash and dry an empty tin or container.',
          'Label it: "[Child\'s Name]\'s Savings Bank (Banka Yange)".',
          'Drop the first coin in together: Clink!',
          'Say: "Every coin dropped here is your hard work saved for important school tools."'
        ],
        safetyTip: 'Ensure metal container edges are smooth.'
      },
      followUpQuestions: [
        {
          question: 'If you have 1,000 UGX and need a school pencil, should you buy sweets or the pencil first?',
          sampleAnswer: 'The pencil first, because it is an educational NEED (Ekyetaago)!'
        },
        {
          question: 'What happens when you drop a small coin in your tin every week?',
          sampleAnswer: 'Small coins grow together into a big fund for important goals!'
        }
      ],
      parentChallenge: 'Give your child a small coin (e.g. 200 or 500 UGX) to drop into their savings tin today, and discuss one family NEED for this week.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Market and the Coin',
        duration: '5 min',
        story: 'Long ago, before coins existed, people traded directly: bananas for fish. But what if the fisherman didn\'t want bananas that day? People invented money (sente)! When someone works hard farming, fixing engines, or teaching, they receive money. Money lets you store your effort today so you can buy food for your family tomorrow.',
        keyConcept: 'Money is a tool. Wealth is what you save and invest, not what you spend on sweets.',
        localExample: 'Using 1,000 UGX for a notebook and pen vs buying fizzy soda.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Needs vs Wants',
        duration: '5 min',
        askFirst: 'What is a NEED (Ekyetaago) that our family cannot live without?',
        listenFor: 'Look for: "Food, water, shelter, medicine, school fees!"',
        explainSimply: '"Needs keep us alive and safe. Wants are just extras. A wise child always satisfies needs first!"',
        parentTip: 'Share a real story of when you saved money to buy a bicycle or pay school fees.'
      },
      step3_activity: {
        title: '5 min • The Needs vs Wants Game',
        duration: '5 min',
        gameOrExperimentName: 'Shout: Need or Want?',
        instructions: [
          'Call out: Clean Water! (Child shouts: "NEED!")',
          'Call out: Candy bar! (Child shouts: "WANT!")',
          'Call out: School shoes! ("NEED!")',
          'Label your home savings tin together!'
        ],
        whatChildLearns: 'Budgeting, self-discipline, financial literacy.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'Which of the following is a vital NEED (Ekyetaago)?',
            options: ['Clean water and nutritious food', 'A third toy car', 'A lollipop'],
            correctIndex: 0,
            explanation: 'Water and nutritious food are true needs for strength and health!'
          },
          {
            question: 'What is the Luganda word for saving money for tomorrow?',
            options: ['Kutereka sente', 'Kulya buli kantu', 'Kuzannya'],
            correctIndex: 0,
            explanation: 'Kutereka sente! Storing wealth for your future!'
          },
          {
            question: 'Where does money come from when grown-ups buy groceries?',
            options: ['From hard work, skills, and creating value', 'From magic trees', 'It falls from clouds'],
            correctIndex: 0,
            explanation: 'Hard work and useful skills earn honest income!'
          }
        ]
      }
    },
    parentChallenge: 'Let your child drop a coin into their new savings tin today and explain Needs vs Wants at supper!',
    fiveMinuteBite: {
      title: '5-Minute Budget Chat',
      quickPrompt: 'Ask: "If you had 2,000 UGX, how much would you save and how much would you spend?"',
      quickAction: 'Discuss the 50/50 rule: Save half for tomorrow, use half for needs today.'
    },
    whatsAppSnippet: `💰 *HOME ACADEMY: Daily 20-Min Mission (Ages 6-8)*
*Topic:* What is Money & The Savings Tin (Sente n'Ebyetaago)
*Dialect:* Sente = Money, Ebyetaago = Needs, Kutereka = To Save.
*Activity:* Make a savings tin from an empty clean jar or box today.
*Passport Stamp:* Wise Saver 🏅`,
    audioNarrationText: 'Sente is a tool created for honest trade. A wise child knows the difference between what they truly need to grow strong and what is just a temporary want!',
    isFeatured: true
  },

  {
    id: 'age6-8-sci-yeast-mandazi',
    ageBand: '6-8',
    stageName: 'Build',
    category: 'science',
    categoryLabel: 'Practical Home Science',
    title: 'Why Does Bread & Mandazi Rise? Yeast Magic',
    subtitle: 'The living organism that eats sugar and makes fluffy bubbles',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-amber-500 to-orange-600',
    badgeName: 'Kitchen Scientist',
    badgeDescription: 'Can explain how yeast makes bubbles in mandazi dough',
    objectives: [
      'Discover that baker\'s yeast is a safe, friendly microscopic living organism',
      'Watch yeast eat warm sugar water and blow up bubbles of gas',
      'Understand why mandazi and bread are fluffy inside instead of hard like stones'
    ],
    householdMaterials: ['A pinch of baker\'s yeast (from local shop / duka)', 'Warm water', '1 spoon of sugar', 'A clear cup'],
    dialectWords: [
      { localWord: 'Ebibumba / Ekizimbulukusa', englishMeaning: 'Yeast / Leavening agent', language: 'Luganda' },
      { localWord: 'Mandazi', englishMeaning: 'Fried doughnut bread', language: 'Swahili/Luganda' },
      { localWord: 'Duka', englishMeaning: 'Small neighborhood shop', language: 'Swahili/Luganda' },
      { localWord: 'Sukali', englishMeaning: 'Sugar', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'When mama fries mandazi or bakes bread, why is the inside filled with tiny soft holes and fluffy like a pillow instead of flat and hard like a brick?',
      simplifiedExplanation: 'Inside the dough lives a friendly, microscopic sleeping helper called YEAST (ekizimbulukusa)! When yeast drinks warm water and eats a little sugar (sukali), it burps out millions of tiny gas bubbles. Those bubbles stretch the dough up tall and fluffy!',
      safeHomeActivity: {
        title: 'The Frothy Yeast Balloon Cup',
        materials: ['A clear cup', 'Half cup of warm water', '1 spoon of sugar (sukali)', '1 pinch of baker\'s yeast'],
        steps: [
          'Stir the sugar into warm water.',
          'Sprinkle the yeast on top. Stir gently.',
          'Wait 5 minutes together: Watch creamy foam and bubbles rise to the top of the cup!',
          'Smell the fresh bakery aroma: "The yeast is awake and making bubbles!"'
        ],
        safetyTip: 'Water should be comfortably warm like bath water, not boiling hot (hot water hurts yeast).'
      },
      followUpQuestions: [
        {
          question: 'What does yeast eat to wake up and blow bubbles?',
          sampleAnswer: 'Warm water and sugar (sukali)!'
        },
        {
          question: 'What creates the soft holes inside a delicious warm mandazi?',
          sampleAnswer: 'Tiny gas bubbles made by the yeast!'
        }
      ],
      parentChallenge: 'Next time someone bakes bread or fries mandazi, break one open and show your child the tiny bubble caves inside!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Fluffy Mandazi',
        duration: '5 min',
        story: 'Have you ever bitten into a fresh warm mandazi from the duka? Inside, the dough is filled with tiny sponge caves! That is the work of a friendly living organism called yeast. When dry in the packet, yeast is asleep. But in warm water with sugar (sukali), it wakes up and burps millions of tiny gas bubbles, lifting the dough into fluffy goodness!',
        keyConcept: 'Biological leavening: yeast produces carbon dioxide gas bubbles that make bread soft.',
        localExample: 'Making mandazi dough rise under a clean cloth in the warm sunshine before frying.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Kitchen Biology',
        duration: '5 min',
        askFirst: 'What would happen if we baked bread without yeast bubbles?',
        listenFor: 'Look for: "It would be flat and hard like a stone!"',
        explainSimply: '"Yeast is alive! It eats sugar and breathes out bubbles. That is why dough grows bigger under the cloth!"',
        parentTip: 'Let your child smell the rising yeast cup. It smells just like fresh bread dough.'
      },
      step3_activity: {
        title: '5 min • Yeast in a Cup Lab',
        duration: '5 min',
        gameOrExperimentName: 'Wake Up the Yeast',
        instructions: [
          'Warm water + sugar + yeast in a clear cup.',
          'Watch the foam layer rise over 5 minutes.',
          'Notice the fizzy carbon dioxide bubbles!'
        ],
        whatChildLearns: 'Microbiology, fermentation, food science.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What makes the fluffy bubble pockets inside mandazi and bread?',
            options: ['Yeast breathing out tiny gas bubbles', 'A bicycle pump', 'Stones'],
            correctIndex: 0,
            explanation: 'Yes! Yeast bubbles puff up the dough so it bakes soft and delicious!'
          },
          {
            question: 'What food does yeast love to eat in the dough?',
            options: ['Warm water and sugar (Sukali)', 'Salt water', 'Cold ice'],
            correctIndex: 0,
            explanation: 'Sugar gives the yeast energy to blow fluffy bubbles!'
          },
          {
            question: 'Is baker\'s yeast an invisible machine or a living organism?',
            options: ['A safe microscopic living organism', 'A piece of metal', 'A plastic bead'],
            correctIndex: 0,
            explanation: 'Yeast is a natural living microorganism that has helped humans bake for thousands of years!'
          }
        ]
      }
    },
    parentChallenge: 'Check a slice of bread or mandazi together today and touch the soft bubble caves with your fingers!',
    fiveMinuteBite: {
      title: '5-Minute Bubble Inspection',
      quickPrompt: 'Look closely at a slice of bread or mandazi.',
      quickAction: 'Count how many tiny bubble holes you can see in one bite!'
    },
    whatsAppSnippet: `🍞 *HOME ACADEMY: Daily 20-Min Mission (Ages 6-8)*
*Topic:* Why Mandazi Rises (Ekizimbulukusa)
*Dialect:* Mandazi = Doughnut bread, Sukali = Sugar, Duka = Shop.
*Activity:* Put yeast + sugar + warm water in a cup. Watch foam rise in 5 minutes!
*Passport Stamp:* Kitchen Scientist 🏅`,
    audioNarrationText: 'Yeast is a tiny kitchen helper! Add warm water and sukali, and watch it make fluffy bubbles that turn heavy dough into delicious mandazi!',
    isFeatured: false
  },

  // =========================================================================
  // AGES 9–12: EXPLORE (ENTERPRISE, CLEAN WATER, CRITICAL INQUIRY)
  // =========================================================================
  {
    id: 'age9-12-fin-tiny-business',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'projects',
    categoryLabel: 'Parent + Child Projects',
    title: 'The 5,000 UGX Tiny Business Challenge',
    subtitle: 'Cost, selling price, profit (magoba), and honest customer service',
    estimatedMinutes: 20,
    parentMinutes: 10,
    icon: 'Briefcase',
    themeColor: 'from-amber-600 to-orange-700',
    badgeName: 'Junior Entrepreneur',
    badgeDescription: 'Can calculate Profit = Revenue - Cost, design a simple product, and give a 1-minute sales pitch',
    objectives: [
      'Learn the golden equation: PROFIT (Magoba) = SELLING PRICE - COST (Maguzi)',
      'Design a simple service or product (groundnuts, bookmarks, shining shoes)',
      'Deliver a polite 1-minute sales pitch to an adult with respect'
    ],
    householdMaterials: ['Pencil and notebook', '5,000 UGX real or paper capital'],
    dialectWords: [
      { localWord: 'Magoba', englishMeaning: 'Profit (Money earned above your cost)', language: 'Luganda' },
      { localWord: 'Maguzi', englishMeaning: 'Cost of purchase / Expenses', language: 'Luganda' },
      { localWord: 'Faida', englishMeaning: 'Profit', language: 'Swahili' },
      { localWord: 'Gula', englishMeaning: 'To buy', language: 'Luganda' },
      { localWord: 'Tunda', englishMeaning: 'To sell', language: 'Luganda/Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'If you invest 5,000 UGX to buy groundnuts and paper packets, and sell them all for 8,000 UGX, how much profit (magoba) did you earn?',
      simplifiedExplanation: 'An entrepreneur solves a problem with a smile! If you buy ingredients for 5,000 UGX (maguzi) and sell for 8,000 UGX, your PROFIT (magoba / faida) is 3,000 UGX. Profit is the fair reward for your hard work, honesty, and planning.',
      safeHomeActivity: {
        title: 'The 1-Minute Sales Pitch Rehearsal',
        materials: ['Notebook and pen', 'Sample item or clean service'],
        steps: [
          'Write down in a book: 1. Item Name, 2. Cost (Maguzi), 3. Selling Price, 4. Profit (Magoba).',
          'Have your child stand tall, make eye contact, and pitch politely:',
          '"Good afternoon! My name is [Name]. Today I am offering clean, fresh [Product] for only [Price] because it helps you [Benefit]. May I sell one to you?"',
          'Practice saying: "Webale nyo for supporting my business!"'
        ],
        safetyTip: 'Practice transactions within the family and trusted neighbors only.'
      },
      followUpQuestions: [
        {
          question: 'If you spend 4,000 UGX making fruit snacks and sell them for 6,500 UGX, what is your profit (magoba)?',
          sampleAnswer: '2,500 UGX (6,500 - 4,000 = 2,500 UGX)!'
        },
        {
          question: 'What is the number one secret to keeping customers coming back to your duka?',
          sampleAnswer: 'Honesty, fair prices, high quality, and polite service.'
        }
      ],
      parentChallenge: 'Let your child test a tiny home enterprise this weekend (e.g. selling fruit snacks or washing a bicycle) and calculate real profit together!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Great Market Innovator',
        duration: '5 min',
        story: 'An entrepreneur does not wait for someone to give them a job—an entrepreneur looks around their community and solves a real problem! If people are thirsty, an entrepreneur brings cool clean lemon juice. If people need tea, an entrepreneur bakes fresh mandazi. But to succeed, you must master the rule: PROFIT (Magoba) = SELLING PRICE - COST.',
        keyConcept: 'Profit is the reward for creating honest value and managing costs.',
        localExample: 'Packing roasted groundnuts in clean small bags, or offering to sweep compounds for neighbors.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Business Mentorship',
        duration: '5 min',
        askFirst: 'If you had 5,000 UGX today, what could you buy, improve, and sell for 7,500 UGX?',
        listenFor: 'Listen to their creative ideas: Snacks? Service? Crafts?',
        explainSimply: '"In Luganda, profit is called MAGOBA; in Swahili it is FAIDA. If your customer is happy, your business will grow big!"',
        parentTip: 'Help them think about hidden expenses like transport or plastic bags.'
      },
      step3_activity: {
        title: '5 min • The 1-Minute Pitch Rehearsal',
        duration: '5 min',
        gameOrExperimentName: 'Pitch to Mama or Papa',
        instructions: [
          'Calculate: Cost, Selling Price, Profit in notebook.',
          'Practice greeting politely and presenting the benefit.',
          'Deliver handshake and say: "Webale nyo!"'
        ],
        whatChildLearns: 'Public speaking, business arithmetic, negotiation.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'If you spend 3,000 UGX and sell for 5,000 UGX, what is your MAGOBA (profit)?',
            options: ['2,000 UGX profit', '8,000 UGX', 'Zero'],
            correctIndex: 0,
            explanation: '5,000 - 3,000 = 2,000 UGX profit! You are an accountant!'
          },
          {
            question: 'What is the Swahili word for profit?',
            options: ['Faida', 'Hasara (Loss)', 'Pesa'],
            correctIndex: 0,
            explanation: 'Faida means profit!'
          },
          {
            question: 'What should a wise young entrepreneur do with their profit?',
            options: ['Save part, reinvest part to grow, and enjoy part wisely', 'Spend it all on sweets in 2 minutes', 'Throw it away'],
            correctIndex: 0,
            explanation: 'Reinvesting profit helps your enterprise grow bigger and stronger!'
          }
        ]
      }
    },
    parentChallenge: 'Let your child test their 1-minute sales pitch with another family member or neighbor today!',
    fiveMinuteBite: {
      title: '5-Minute Product Audit',
      quickPrompt: 'Look at a broom or cup in the house.',
      quickAction: 'Estimate: What did it cost to make, and what problem does it solve for our home?'
    },
    whatsAppSnippet: `💼 *HOME ACADEMY: Daily 20-Min Mission (Ages 9-12)*
*Topic:* The 5,000 UGX Business Challenge (Bizinensi n'Amagoba)
*Dialect:* Magoba = Profit, Maguzi = Cost, Faida = Profit (Swahili).
*Activity:* Write down Cost, Selling Price, and Profit. Practice a 1-minute polite sales pitch.
*Passport Stamp:* Junior Entrepreneur 🏅`,
    audioNarrationText: 'Being an entrepreneur means spotting problems and creating honest solutions! Learn the math of cost and profit (magoba), speak with confidence, and build your future.',
    isFeatured: true
  },

  {
    id: 'age9-12-science-water-filter',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'projects',
    categoryLabel: 'Parent + Child Projects',
    title: 'Build a Clean Household Water Filter',
    subtitle: 'Cleaning muddy water with sand, crushed charcoal (amakerenda), and gravel',
    estimatedMinutes: 20,
    parentMinutes: 10,
    icon: 'ShieldCheck',
    themeColor: 'from-teal-600 to-emerald-700',
    badgeName: 'Water Engineer',
    badgeDescription: 'Can construct a 3-layer bottle filter and explain boiling for microbes',
    objectives: [
      'Understand how natural layers of earth clean rainwater into groundwater',
      'Construct a 3-layer filter using clean charcoal (amakerenda), fine sand, and gravel',
      'Explain that filtering cleans dirt, but BOILING kills invisible germs'
    ],
    householdMaterials: ['A clear plastic bottle cut in half', 'Cloth scrap', 'Clean crushed charcoal (amakerenda)', 'Clean sand', 'Small pebbles', 'Muddy water'],
    dialectWords: [
      { localWord: 'Amazzi amayonjo', englishMeaning: 'Clean, safe water', language: 'Luganda' },
      { localWord: 'Amakerenda / Amanda', englishMeaning: 'Charcoal', language: 'Luganda' },
      { localWord: 'Omusenyu', englishMeaning: 'Sand', language: 'Luganda' },
      { localWord: 'Maji safi', englishMeaning: 'Clean water', language: 'Swahili' },
      { localWord: 'Okutokosa amazzi', englishMeaning: 'To boil water', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Why does water from a deep borehole spring come out crystal clear, even when the soil outside was muddy from heavy rain?',
      simplifiedExplanation: 'Earth is a giant natural sponge filter! Rainwater passes through layers of gravel, fine sand (omusenyu), and charcoal (amakerenda). Big leaves get caught at the top, sand traps mud, and charcoal absorbs bad odors. But remember: filtering removes visible dirt, while boiling kills invisible bacteria!',
      safeHomeActivity: {
        title: 'The Cut-Bottle Gravity Filter',
        materials: ['Cut plastic bottle', 'Cloth scrap', 'Clean crushed charcoal', 'Clean sand', 'Clean pebbles', 'Muddy water'],
        steps: [
          'Invert the top half of the bottle into the bottom half like a funnel.',
          'Put cloth plug at the neck.',
          'Layer 1: 2 inches of crushed clean charcoal (amakerenda).',
          'Layer 2: 2 inches of clean fine sand (omusenyu).',
          'Layer 3: 2 inches of pebbles on top.',
          'Slowly pour muddy water: Watch crystal-clear water drip out the bottom!'
        ],
        safetyTip: 'Filtered water must still be boiled before drinking.'
      },
      followUpQuestions: [
        {
          question: 'What special job does the charcoal (amakerenda) layer do in the filter?',
          sampleAnswer: 'It traps bad smells, bad tastes, and chemical impurities in its tiny pores.'
        },
        {
          question: 'Why must filtered clear water still be boiled (okutokosa) before drinking?',
          sampleAnswer: 'To kill invisible bacteria that can cause sickness like typhoid or diarrhea.'
        }
      ],
      parentChallenge: 'Check all drinking water pots and jerrycans in your home today to make sure drinking water is properly boiled and covered with a clean lid!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Earth’s Natural Sponge',
        duration: '5 min',
        story: 'Have you ever wondered why borehole spring water is crystal clear? As rain sinks into the ground, it passes through gravel, fine sand (omusenyu), and charcoal soil. Dirt gets trapped in the sand; charcoal catches bad odors. Nature built the world\'s greatest water filter under our feet!',
        keyConcept: 'Mechanical filtration removes suspended particles by trapping them in porous layers.',
        localExample: 'Natural hillside freshwater springs vs muddy road runoff.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Safe Water Science',
        duration: '5 min',
        askFirst: 'If muddy water comes out of our filter crystal clear, can we drink it immediately? Why or why not?',
        listenFor: 'Look for: "No, invisible germs must be killed with heat by boiling!"',
        explainSimply: '"Filtration cleans the dirt we see; boiling (okutokosa amazzi) kills the microscopic germs we cannot see. Both are needed for maji safi!"',
        parentTip: 'This lesson teaches engineering and life-saving community hygiene.'
      },
      step3_activity: {
        title: '5 min • Build the Bottle Filter',
        duration: '5 min',
        gameOrExperimentName: '3-Layer Gravity Filter',
        instructions: [
          'Put cloth plug in bottle neck.',
          'Add charcoal layer -> sand layer -> pebble layer.',
          'Pour muddy water on top and watch clear water drip below!'
        ],
        whatChildLearns: 'Sedimentation, porosity, environmental health.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What does the charcoal (amakerenda) layer do in a water filter?',
            options: ['Traps odors, bad tastes, and chemicals', 'Turns water black', 'Makes water cold'],
            correctIndex: 0,
            explanation: 'Charcoal has microscopic pores that absorb impurities and bad smells!'
          },
          {
            question: 'Why must filtered water still be boiled before drinking?',
            options: ['To kill invisible microscopic germs and bacteria', 'To change its color', 'It does not need boiling'],
            correctIndex: 0,
            explanation: 'Boiling destroys bacteria like typhoid and cholera!'
          },
          {
            question: 'What is the Luganda word for clean safe water?',
            options: ['Amazzi amayonjo', 'Ettaka', 'Omusana'],
            correctIndex: 0,
            explanation: 'Amazzi amayonjo! Essential for family strength!'
          }
        ]
      }
    },
    parentChallenge: 'Inspect your home\'s drinking water pot today and ensure it is covered and boiled!',
    fiveMinuteBite: {
      title: '5-Minute Water Inspection',
      quickPrompt: 'Hold a glass of drinking water up to the light.',
      quickAction: 'Check: Is it clear, boiled, and kept in a clean container?'
    },
    whatsAppSnippet: `🚰 *HOME ACADEMY: Daily 20-Min Mission (Ages 9-12)*
*Topic:* Build a Clean Water Filter (Amazzi Amayonjo)
*Dialect:* Amazzi amayonjo = Clean water, Amakerenda = Charcoal, Omusenyu = Sand.
*Key Rule:* Filter removes dirt, but BOILING kills invisible bacteria!
*Passport Stamp:* Water Engineer 🏅`,
    audioNarrationText: 'Clean water is life! Today we build a 3-layer filter with sand, gravel, and charcoal to see how nature purifies water!',
    isFeatured: true
  },

  {
    id: 'age9-12-crit-how-do-i-know',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'science',
    categoryLabel: 'Critical Thinking & Truth',
    title: 'The Superpower of Asking: "How Do I Know This Is True?"',
    subtitle: 'Fact vs opinion, checking proof, and questioning rumors (olugambo)',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'SearchCheck',
    themeColor: 'from-indigo-600 to-purple-700',
    badgeName: 'Truth Seeker',
    badgeDescription: 'Can separate facts from opinions and ask for proof before believing claims',
    objectives: [
      'Learn the difference between FACT (Amazima: provable proof) and OPINION (Endowooza: feelings)',
      'Spot rumors (Olugambo / Ngambo) and unverified gossip',
      'Ask the 3 Truth Questions: Who said it? What is the proof? How can we test it?'
    ],
    householdMaterials: ['A ruler or book to measure', 'Paper and pen'],
    dialectWords: [
      { localWord: 'Amazima', englishMeaning: 'The Truth / Fact', language: 'Luganda' },
      { localWord: 'Olugambo / Engambo', englishMeaning: 'Rumors / Gossip / Unverified talk', language: 'Luganda' },
      { localWord: 'Endowooza', englishMeaning: 'Opinion / Personal thoughts', language: 'Luganda' },
      { localWord: 'Ukweli', englishMeaning: 'Truth / Fact', language: 'Swahili' },
      { localWord: 'Obujulizi', englishMeaning: 'Evidence / Proof', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'If someone tells you: "Mango is the sweetest fruit in Uganda," is that Amazima (a fact) or Endowooza (their personal opinion)? What if they say: "A mango has a seed inside"?',
      simplifiedExplanation: 'AMAZIMA (Truth / Fact) can be measured and proven anywhere in the world with evidence (obujulizi). ENDOWOOZA (Opinion) is how one person feels. When someone tells you shocking news or a rumor (olugambo), always ask: "How do I know this is true? Where is the proof?"',
      safeHomeActivity: {
        title: 'The Mystery Measurement Verification Test',
        materials: ['A table or door', 'A ruler or measuring book'],
        steps: [
          'Make an unverified claim: "This table is 3 meters long!"',
          'Ask your child: "Is that Amazima (truth) or just a guess? How can we test it?"',
          'Use a ruler or book length to physically measure the table together.',
          'Compare the measured evidence (obujulizi) with the claim!'
        ],
        safetyTip: 'Encourage respectful questioning of claims with kindness.'
      },
      followUpQuestions: [
        {
          question: 'What is the difference between Amazima (fact) and Endowooza (opinion)?',
          sampleAnswer: 'Amazima has real proof and evidence; Endowooza is a personal feeling or taste.'
        },
        {
          question: 'What should you do before believing or forwarding a shocking rumor on a phone?',
          sampleAnswer: 'Ask: Who sent it? Where is the evidence? Confirm with trusted sources.'
        }
      ],
      parentChallenge: 'Listen to a radio advert or neighbor\'s story today, and ask your child: "Did they give real proof (obujulizi) or just an opinion?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Elephant and the Rumor',
        duration: '5 min',
        story: 'Five blind men touched an elephant. One touched the tail and said: "An elephant is a rope!" Another touched the ear: "No, a giant leaf!" Each man thought his small observation was the whole truth. In life, people will tell you many rumors (olugambo) and claims. The sharpest minds do not believe blindly—they ask: "How do I know this is true? Where is the evidence (obujulizi)?"',
        keyConcept: 'Critical thinking means checking evidence before accepting claims as truth.',
        localExample: 'Hearing a rumor on WhatsApp: "Eating raw garlic cures malaria!" vs asking a qualified doctor for medical proof.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Fact vs Opinion',
        duration: '5 min',
        askFirst: 'If I say "Blue is the best color," is that a fact (amazima) or opinion (endowooza)?',
        listenFor: 'Listen for: "Opinion, because someone else might prefer green!"',
        explainSimply: '"Facts can be proven with tools and evidence. Opinions are personal tastes. Both are fine, but never confuse an opinion with the truth!"',
        parentTip: 'Praise your child whenever they ask for proof respectfully.'
      },
      step3_activity: {
        title: '5 min • The Measurement Detective',
        duration: '5 min',
        gameOrExperimentName: 'Test the Mystery Claim',
        instructions: [
          'Claim something about a room object.',
          'Measure it with a book or ruler.',
          'Check if the evidence matches the claim!'
        ],
        whatChildLearns: 'Empirical verification, scientific skepticism.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'Which of the following is an objective, testable FACT (Amazima)?',
            options: ['Water boils at 100°C at sea level', 'Rolex is the only tasty breakfast', 'Math is boring'],
            correctIndex: 0,
            explanation: 'Water boiling at 100°C can be measured with a thermometer anywhere in the world!'
          },
          {
            question: 'What is the Luganda word for proof or evidence?',
            options: ['Obujulizi', 'Olugambo', 'Ettaka'],
            correctIndex: 0,
            explanation: 'Obujulizi means evidence or witness proof!'
          },
          {
            question: 'What is the most powerful question a young scholar can ask?',
            options: ['"How do I know this is true?"', '"Can I go to sleep?"', '"Why does everything stay the same?"'],
            correctIndex: 0,
            explanation: '"How do I know this is true?" leads straight to real knowledge!'
          }
        ]
      }
    },
    parentChallenge: 'Challenge your child to spot one opinion and one fact in a radio broadcast or family conversation today!',
    fiveMinuteBite: {
      title: '5-Minute Fact or Opinion Drill',
      quickPrompt: 'Tell your child 3 statements.',
      quickAction: 'Have them slap the table and yell "AMAZIMA (Fact)!" or "ENDOWOOZA (Opinion)!"'
    },
    whatsAppSnippet: `🔍 *HOME ACADEMY: Daily 20-Min Mission (Ages 9-12)*
*Topic:* Asking: "How Do I Know This Is True?" (Amazima n'Obujulizi)
*Dialect:* Amazima = Truth/Fact, Endowooza = Opinion, Obujulizi = Evidence.
*Activity:* Practice measuring something to verify a claim with real proof.
*Passport Stamp:* Truth Seeker 🏅`,
    audioNarrationText: 'Never accept rumors (olugambo) blindly! When you hear something surprising, ask: Who said this? What is their proof (obujulizi)? That is how great minds think.',
    isFeatured: false
  },

  // =========================================================================
  // AGES 13–16: DEVELOP (MECHANICS, ALGORITHMS, AGRICULTURAL ENTERPRISE)
  // =========================================================================
  {
    id: 'age13-16-sci-engine-oil',
    ageBand: '13-16',
    stageName: 'Develop',
    category: 'science',
    categoryLabel: 'Practical Engineering Science',
    title: 'Why Does a Car & Boda Boda Need Engine Oil?',
    subtitle: 'Friction (Obutagavu), heat, and mechanical preservation in vehicles',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Wrench',
    themeColor: 'from-slate-700 to-zinc-900',
    badgeName: 'Mechanical Thinker',
    badgeDescription: 'Can explain friction and how motor oil prevents engine seizure',
    objectives: [
      'Understand friction (obutagavu): how dry metal surfaces create intense heat when rubbing',
      'Explain the 3 roles of motor oil: Lubricating, Cooling, and Cleaning engine parts',
      'Conduct a 2-surface friction experiment with and without cooking oil'
    ],
    householdMaterials: ['A drop of cooking oil', 'Two spoons or smooth flat stones'],
    dialectWords: [
      { localWord: 'Omuzigo gw\'ekyuma / Omutole', englishMeaning: 'Engine oil / Lubricant', language: 'Luganda' },
      { localWord: 'Obutagavu', englishMeaning: 'Friction / Surface resistance', language: 'Luganda' },
      { localWord: 'Ekyuma', englishMeaning: 'Metal / Machine / Engine', language: 'Luganda' },
      { localWord: 'Boda boda', englishMeaning: 'Motorcycle taxi', language: 'East African' },
      { localWord: 'Okwokya', englishMeaning: 'To burn / Extreme heat', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Rub your two dry hands together as fast and hard as you can for 15 seconds. What happens to the temperature of your palms?',
      simplifiedExplanation: 'Inside a car or boda boda engine, metal pistons pump up and down 3,000 times a minute! Dry metal surfaces have microscopic hills that rub against each other with violent friction (obutagavu). Without oil, friction creates intense heat that expands the metal until it welds solid (engine seizure!). Engine oil (omuzigo gw\'ekyuma) creates a microscopic slippery liquid cushion so moving metal never grinds together.',
      safeHomeActivity: {
        title: 'The Lubrication Gliding Test',
        materials: ['2 metal spoons or stones', '1 drop of cooking oil or liquid soap'],
        steps: [
          'Rub two dry spoons together vigorously. Hear the harsh scratching sound and feel resistance.',
          'Place just ONE drop of oil between the two surfaces.',
          'Rub them together again: Notice how the resistance vanishes and the metal glides silently!',
          'Explain: "That one drop of oil is what saves a 3,000,000 UGX boda boda engine from destroying itself."'
        ],
        safetyTip: 'Wipe spoons clean after the experiment.'
      },
      followUpQuestions: [
        {
          question: 'What dangerous problem happens if an engine runs dry without oil?',
          sampleAnswer: 'Engine seizure: the pistons overheat, expand, and weld themselves solid to the cylinder wall.'
        },
        {
          question: 'Besides lubricating, what other two jobs does motor oil do?',
          sampleAnswer: 'It cools hot parts by carrying heat away and cleans by washing dirt to the oil filter.'
        }
      ],
      parentChallenge: 'Check the oil dipstick on a car, generator, or boda boda together this week and read the oil level and color indicators!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Seized Piston',
        duration: '5 min',
        story: 'Inside a car, boda boda, or generator engine, metal pistons pump thousands of times every single minute. Even polished metal has tiny microscopic roughness. Without lubrication, metal rubs on metal with friction (obutagavu), generating heat over 200°C. The metal expands and welds solid to the cylinder wall (engine seizure!). Motor oil creates a fluid cushion so parts glide effortlessly without touching.',
        keyConcept: 'Lubricants reduce friction and carry away destructive heat.',
        localExample: 'Pulling the yellow dipstick on a boda boda before a long highway journey to check the golden oil level.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Mechanical Physics',
        duration: '5 min',
        askFirst: 'Rub your dry hands together fast! Feel the heat? Now imagine steel doing that 3,000 times a minute!',
        listenFor: 'Look for: "It would get burning hot and melt!"',
        explainSimply: '"Engine oil (omuzigo gw\'ekyuma) lubricates, cools, and cleans all at once. Without it, machinery breaks down in minutes."',
        parentTip: 'Show them how honey pours slowly (high viscosity) compared to water (low viscosity).'
      },
      step3_activity: {
        title: '5 min • Dry vs Lubricated Friction',
        duration: '5 min',
        gameOrExperimentName: 'Spoon Friction Test',
        instructions: [
          'Rub two dry spoons: hear the screech.',
          'Add one drop of cooking oil: feel the glide!',
          'Notice how friction disappears.'
        ],
        whatChildLearns: 'Friction, viscosity, mechanical maintenance.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What happens when an engine runs completely without oil?',
            options: ['The metal pistons overheat, expand, and seize solid', 'The vehicle turns into water', 'The headlights get brighter'],
            correctIndex: 0,
            explanation: 'Engine seizure! Unlubricated friction welds moving parts together!'
          },
          {
            question: 'What is the property that describes the thickness of an oil or fluid?',
            options: ['Viscosity', 'Color', 'Volume'],
            correctIndex: 0,
            explanation: 'Viscosity describes resistance to flow, like thick honey vs thin water!'
          },
          {
            question: 'Why should motor oil be changed when it turns black and dirty?',
            options: ['Because dirty oil loses its lubricating power and holds harmful metal particles', 'To make the car look shiny', 'No reason'],
            correctIndex: 0,
            explanation: 'Clean oil protects engines from wearing down!'
          }
        ]
      }
    },
    parentChallenge: 'Inspect the dipstick on any family or neighbor vehicle or generator together this week!',
    fiveMinuteBite: {
      title: '5-Minute Door Squeak Fix',
      quickPrompt: 'Find a squeaky door hinge in the house.',
      quickAction: 'Place one drop of oil on the pin. Swing the door: Squeak gone! Friction solved.'
    },
    whatsAppSnippet: `🔧 *HOME ACADEMY: Daily 20-Min Mission (Ages 13-16)*
*Topic:* Why Engines Need Oil (Omuzigo gw'Ekyuma n'Obutagavu)
*Dialect:* Omuzigo gw'ekyuma = Engine oil, Obutagavu = Friction, Ekyuma = Machine.
*Activity:* Rub two dry spoons, then add 1 drop of oil—feel the gliding difference!
*Passport Stamp:* Mechanical Thinker 🏅`,
    audioNarrationText: 'Pistons pump thousands of times a minute! Without oil, friction (obutagavu) destroys engines. Understanding lubrication is the key to all mechanical engineering!',
    isFeatured: true
  },

  {
    id: 'age13-16-tech-how-computers-think',
    ageBand: '13-16',
    stageName: 'Develop',
    category: 'technology',
    categoryLabel: 'Technology & Logic',
    title: 'How Computers Think: Algorithms & Mobile Money',
    subtitle: 'Step-by-step logic, USSD codes (*165#), and digital safety',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Cpu',
    themeColor: 'from-blue-600 to-cyan-700',
    badgeName: 'Algorithmic Thinker',
    badgeDescription: 'Can write an algorithm for a daily task and spot online scams',
    objectives: [
      'Understand that an ALGORITHM is a step-by-step logical sequence of instructions',
      'Discover how USSD menus (like *165# for Mobile Money) follow strict decision trees',
      'Learn digital defense: never share OTP codes or click fake prize links'
    ],
    householdMaterials: ['Paper and pen', 'A cup and spoon for the "Robot Parent" game'],
    dialectWords: [
      { localWord: 'Omubalanguzo', englishMeaning: 'Calculation / Algorithm / Method', language: 'Luganda' },
      { localWord: 'Essimu', englishMeaning: 'Phone / Mobile device', language: 'Luganda' },
      { localWord: 'Obukodyo', englishMeaning: 'Tricks / Logic / Methods', language: 'Luganda' },
      { localWord: 'Omutimbagano', englishMeaning: 'Internet / Network', language: 'Luganda' },
      { localWord: 'Kodi za siri', englishMeaning: 'Secret PIN / OTP codes', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'When you dial a USSD code like *165# on a simple button phone to send mobile money, how does the network know exactly what to do step-by-step without making mistakes?',
      simplifiedExplanation: 'A computer or phone chip does not possess human intuition; it follows an ALGORITHM (omubalanguzo)—a crystal-clear, numbered list of exact steps! If you tell a computer: "Make chai," it cannot guess to boil water first. You must write every step in order. Learning algorithms teaches your brain how to solve any big problem.',
      safeHomeActivity: {
        title: 'The Literal Robot Parent Game',
        materials: ['A cup and a spoon', 'A sheet of paper'],
        steps: [
          'Parent acts as a "Dumb Robot" who only obeys EXACT instructions.',
          'Teen must program the robot to pick up the spoon and put it in the cup.',
          'If teen says: "Put the spoon in the cup!", parent stands frozen: "Error! Spoon is on the table, arm has not moved!"',
          'Teen must refine the code: Step 1: Reach arm forward. Step 2: Grasp spoon with fingers. Step 3: Lift 10 cm. Step 4: Place into cup. That is coding!'
        ],
        safetyTip: 'Demonstrate never sharing secret PINs or OTP SMS codes with anyone.'
      },
      followUpQuestions: [
        {
          question: 'What is an ALGORITHM in computer technology?',
          sampleAnswer: 'A precise, ordered, step-by-step set of instructions to solve a task.'
        },
        {
          question: 'Why should you NEVER share an SMS OTP code or mobile money PIN with someone calling on the phone?',
          sampleAnswer: 'Because PINs and OTP codes are secret keys that protect your private identity and money!'
        }
      ],
      parentChallenge: 'Have your teen review family phone security today: make sure everyone has strong lock screens and knows never to click suspicious prize links!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Literal Machine',
        duration: '5 min',
        story: 'Phones and computers seem genius, but inside, they are strictly literal! They have billions of microscopic on-off switches. When you dial *165# to send mobile money, an algorithm guides the session: Step 1: Check balance. Step 2: Ask for recipient number. Step 3: Verify PIN. Step 4: Deduct and transfer. Programming is simply the art of giving clear logical steps.',
        keyConcept: 'Decomposition: breaking big problems into ordered logical steps.',
        localExample: 'The USSD code flow for buying airtime or withdrawing mobile money at an agent kiosk.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Digital Safety',
        duration: '5 min',
        askFirst: 'If someone sends a WhatsApp message saying "You won 1,000,000 UGX! Click here to claim," what should you do?',
        listenFor: 'Look for: "Delete it! It is a scam trying to steal passwords or airtime."',
        explainSimply: '"Never share secret PIN codes or OTP passwords. Digital wisdom protects your money and identity."',
        parentTip: 'Encourage teens to create and code, rather than just passively scrolling social media.'
      },
      step3_activity: {
        title: '5 min • Program the Robot Parent',
        duration: '5 min',
        gameOrExperimentName: 'Exact Step Coding',
        instructions: [
          'Teen writes 4 exact numbered steps to perform a simple task.',
          'Parent follows steps literally without adding human assumptions.',
          'Debug and refine the code together!'
        ],
        whatChildLearns: 'Algorithmic thinking, debugging, computer logic.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What is an ALGORITHM?',
            options: ['A step-by-step set of precise instructions', 'A piece of metal inside a phone', 'A computer virus'],
            correctIndex: 0,
            explanation: 'An algorithm is an ordered step-by-step procedure to solve a problem!'
          },
          {
            question: 'Why must you never share mobile money PIN or OTP codes?',
            options: ['They are secret security keys protecting your funds and privacy', 'Phones will break', 'No reason'],
            correctIndex: 0,
            explanation: 'PIN codes protect your hard-earned finances—keep them strictly private!'
          },
          {
            question: 'What are the two binary states computers use inside transistors?',
            options: ['1 (On) and 0 (Off)', 'Left and Right', 'Red and Green'],
            correctIndex: 0,
            explanation: 'Binary 1s and 0s are the building blocks of all modern computing!'
          }
        ]
      }
    },
    parentChallenge: 'Have your teen write down a 5-step algorithm for preparing dinner or making tea tonight!',
    fiveMinuteBite: {
      title: '5-Minute Password Upgrade',
      quickPrompt: 'Check your phone password.',
      quickAction: 'Upgrade it from simple numbers to a memorable 4-word passphrase!'
    },
    whatsAppSnippet: `💻 *HOME ACADEMY: Daily 20-Min Mission (Ages 13-16)*
*Topic:* How Computers Think (Omubalanguzo n'Essimu)
*Dialect:* Omubalanguzo = Algorithm, Essimu = Phone, Omutimbagano = Internet.
*Safety Tip:* Never share mobile money PINs or click fake prize links!
*Passport Stamp:* Algorithmic Thinker 🏅`,
    audioNarrationText: 'Computers do not guess—they follow precise algorithms step-by-step. Learning logic and protecting digital security makes you a leader of modern technology!',
    isFeatured: false
  },

  // =========================================================================
  // AGES 17+: PREPARE (FINANCIAL AUTONOMY, ENTERPRISE, ADULT LEADERSHIP)
  // =========================================================================
  {
    id: 'age17-fin-assets-vs-liabilities',
    ageBand: '17+',
    stageName: 'Prepare',
    category: 'finance',
    categoryLabel: 'Financial Strategy & Independence',
    title: 'Assets vs. Liabilities: Emmaali Eggyayo Sente',
    subtitle: 'Compound growth, debt traps, cash flow, and building productive income',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'TrendingUp',
    themeColor: 'from-emerald-700 to-teal-900',
    badgeName: 'Strategic Investor',
    badgeDescription: 'Can define Assets vs Liabilities and construct a 50/30/20 budget',
    objectives: [
      'Define an ASSET (Emmaali eggyayo sente: puts cash in your pocket) vs LIABILITY (takes cash out)',
      'Understand the danger of high-interest consumer debt versus productive investment',
      'Construct a 50/30/20 cash flow budget for real independence'
    ],
    householdMaterials: ['A notebook', 'A pen', 'A phone calculator'],
    dialectWords: [
      { localWord: 'Emmaali', englishMeaning: 'Wealth / Productive assets / Property', language: 'Luganda' },
      { localWord: 'Ebbanja / Amabanja', englishMeaning: 'Debt / Loans', language: 'Luganda' },
      { localWord: 'Magoba ga magoba', englishMeaning: 'Compound interest (Interest on interest)', language: 'Luganda' },
      { localWord: 'Kikundi / Sacco', englishMeaning: 'Community cooperative savings group', language: 'East African' },
      { localWord: 'Kazi', englishMeaning: 'Work / Productive enterprise', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'If someone buys a motorcycle to cruise and show off on weekends versus operating it as an income-generating commercial boda boda, which one is an asset and which is a liability?',
      simplifiedExplanation: 'True wealth is not flashy clothes; true wealth is productive assets! An ASSET (emmaali) puts money into your pocket over time (land, rental units, poultry shamba, productive tools, skills). A LIABILITY takes money out through ongoing depreciation, fuel, and interest bills. Financial freedom happens when your assets produce enough cash flow to pay your living expenses!',
      safeHomeActivity: {
        title: 'The Personal Balance Sheet Audit',
        materials: ['A sheet of paper', 'A pen'],
        steps: [
          'Draw two columns: ASSETS on the left, LIABILITIES on the right.',
          'List everything owned that generates income or holds real value (skills, tools, savings).',
          'List liabilities (unnecessary debts, depreciating status items).',
          'Subtract Liabilities from Assets to discover your real Net Worth!'
        ],
        safetyTip: 'Discuss family budgeting transparently with mutual respect.'
      },
      followUpQuestions: [
        {
          question: 'What is the simple test to know if something you buy is an asset or a liability?',
          sampleAnswer: 'Does it put money into your pocket, or does it take money out of your pocket?'
        },
        {
          question: 'Why are informal loan shark debts dangerous for young adults?',
          sampleAnswer: 'High compound interest rates rapidly multiply the debt, trapping future earnings.'
        }
      ],
      parentChallenge: 'Discuss one real productive family investment (such as planting trees, starting a poultry project, or joining a vetted SACCO) and make a plan together!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Story of the Two Workers',
        duration: '5 min',
        story: 'Two friends earned the same income. Worker A bought expensive shoes, bought gadgets on loan, and ate out every night. Worker B bought a piece of fertile land, started a poultry project, and reinvested every shilling of profit. Five years later, Worker A was trapped working overtime to pay off debts (amabanja), while Worker B owned productive assets (emmaali) generating passive cash flow. Rich minds buy assets; poor minds accumulate liabilities disguised as status symbols.',
        keyConcept: 'Assets generate income; liabilities generate expenses.',
        localExample: 'Buying a commercial motorcycle to earn daily income (Asset) vs buying it purely for cruising and paying fuel (Liability).'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Generational Wealth',
        duration: '5 min',
        askFirst: 'If you received 5,000,000 UGX tomorrow, how would you invest it so it creates income 3 years later?',
        listenFor: 'Look for: "Invest in land, agriculture, tools, or education!"',
        explainSimply: '"Never buy luxuries with your principal; buy luxuries with the profit your assets generate!"',
        parentTip: 'Be open about real family budgeting, utility bills, and lessons learned from past mistakes.'
      },
      step3_activity: {
        title: '5 min • Balance Sheet Audit',
        duration: '5 min',
        gameOrExperimentName: 'Create Your Balance Sheet',
        instructions: [
          'Write two columns: Assets vs Liabilities.',
          'List assets on the left; debts on the right.',
          'Calculate Net Worth = Assets - Liabilities.'
        ],
        whatChildLearns: 'Financial autonomy, cash flow management, risk reduction.'
      },
      step4_quiz: {
        title: '5 min • Quick Check-In Fun',
        duration: '5 min',
        questions: [
          {
            question: 'What is the definition of an ASSET (Emmaali)?',
            options: ['Something that generates income or puts money into your pocket', 'Anything that looks shiny and expensive', 'A high-interest loan'],
            correctIndex: 0,
            explanation: 'An asset generates value, income, or capital appreciation!'
          },
          {
            question: 'Under the 50/30/20 budgeting framework, what should 20% of income be directed toward?',
            options: ['Savings, emergency fund, and productive investments', 'Weekend parties', 'Designer clothes'],
            correctIndex: 0,
            explanation: '20% allocated to savings and investment builds lasting security!'
          },
          {
            question: 'What is compound interest when saving in a cooperative SACCO?',
            options: ['Earning interest on your principal and on past interest earned (Magoba ga magoba)', 'Losing all your money', 'Paying double fees'],
            correctIndex: 0,
            explanation: 'Compound interest allows your money to grow exponentially over time!'
          }
        ]
      }
    },
    parentChallenge: 'Discuss one real family enterprise or cooperative SACCO investment together tonight!',
    fiveMinuteBite: {
      title: '5-Minute Cash Flow Calculation',
      quickPrompt: 'Calculate: If you save 2,000 UGX every day for 1 year, how much will you have in your tin?',
      quickAction: '2,000 x 365 = 730,000 UGX! Discuss what productive asset that can buy.'
    },
    whatsAppSnippet: `📈 *HOME ACADEMY: Daily 20-Min Mission (Ages 17+)*
*Topic:* Assets vs Liabilities (Emmaali n'Amabanja)
*Dialect:* Emmaali = Assets/Wealth, Amabanja = Debts, Magoba ga magoba = Compound growth.
*Rule:* Assets put money in your pocket; Liabilities take money out.
*Passport Stamp:* Strategic Investor 🏅`,
    audioNarrationText: 'Financial freedom is not about showing off status symbols. It is about acquiring productive assets (emmaali) that generate independence for you and your family.',
    isFeatured: false
  }
];

export const CURRICULUM_MODULES: LessonModule[] = [
  ...BASE_CURRICULUM_MODULES,
  ...CHRISTIAN_CURRICULUM_MODULES,
  ...ENRICHED_CURRICULUM_MODULES,
  ...YEAR_ROUND_CURRICULUM_MODULES
].map(m => ({
  ...m,
  communityMission: ensureWorldChangerMission(m),
  usCurriculumAlignment: m.usCurriculumAlignment || getUsAlignmentForLesson(m.ageBand, m.category, m.title)
}));

export const AGE_BAND_DETAILS: Record<string, { label: string; stage: string; description: string; color: string; icon: string }> = {
  '3-5': {
    label: 'Ages 3–5',
    stage: 'Discover',
    description: 'Foundations of speech, counting with seeds, colors in the shamba, 5 senses & kindness.',
    color: 'amber',
    icon: 'Sparkles'
  },
  '6-8': {
    label: 'Ages 6–8',
    stage: 'Build',
    description: 'Real-world math (cooking fractions), rain & steam science, money in the tin & mandazi yeast.',
    color: 'emerald',
    icon: 'Blocks'
  },
  '9-12': {
    label: 'Ages 9–12',
    stage: 'Explore',
    description: 'The 5,000 UGX business challenge, building water filters, and critical thinking (Amazima vs Rumors).',
    color: 'blue',
    icon: 'Compass'
  },
  '13-16': {
    label: 'Ages 13–16',
    stage: 'Develop',
    description: 'Practical mechanics (why engines need oil), coding logic & algorithms, and digital security.',
    color: 'indigo',
    icon: 'Cpu'
  },
  '17+': {
    label: 'Ages 17+',
    stage: 'Prepare',
    description: 'Enterprise launch, assets vs liabilities, financial independence & adult leadership.',
    color: 'purple',
    icon: 'GraduationCap'
  }
};

/**
 * Returns a localized lesson module tailored specifically for Urban (Town/City)
 * or Rural (Village/Kyalo/Shamba) home environments and dialects.
 */
export function getLocalizedLesson(lesson: LessonModule, location: LocationType = 'rural'): LessonModule {
  if (!lesson) return lesson;
  const isUrban = location === 'urban';

  let adapted: LessonModule = { ...lesson };

  if (isUrban && lesson.urbanVariant) {
    const u = lesson.urbanVariant;
    adapted = {
      ...adapted,
      householdMaterials: u.householdMaterials?.length ? u.householdMaterials : adapted.householdMaterials,
      dialectWords: u.dialectWords?.length ? u.dialectWords : adapted.dialectWords,
      whatsAppSnippet: u.whatsAppSnippet || adapted.whatsAppSnippet,
      parentChallenge: u.parentChallenge || adapted.parentChallenge,
      mission: {
        ...adapted.mission,
        step1_learn: {
          ...adapted.mission.step1_learn,
          story: u.storySnippet || adapted.mission.step1_learn.story,
          localExample: u.localExample || adapted.mission.step1_learn.localExample
        },
        step2_discuss: {
          ...adapted.mission.step2_discuss,
          askFirst: u.introductoryQuestion || adapted.mission.step2_discuss.askFirst,
          explainSimply: u.simplifiedExplanation || adapted.mission.step2_discuss.explainSimply
        },
        step3_activity: {
          ...adapted.mission.step3_activity,
          gameOrExperimentName: u.activityTitle || adapted.mission.step3_activity.gameOrExperimentName,
          instructions: u.activitySteps?.length ? u.activitySteps : adapted.mission.step3_activity.instructions
        }
      },
      parentTeachingGuide: {
        ...adapted.parentTeachingGuide,
        introductoryQuestion: u.introductoryQuestion || adapted.parentTeachingGuide.introductoryQuestion,
        simplifiedExplanation: u.simplifiedExplanation || adapted.parentTeachingGuide.simplifiedExplanation,
        parentChallenge: u.parentChallenge || adapted.parentChallenge || adapted.parentTeachingGuide.parentChallenge,
        safeHomeActivity: {
          ...adapted.parentTeachingGuide.safeHomeActivity,
          title: u.activityTitle || adapted.parentTeachingGuide.safeHomeActivity.title,
          steps: u.activitySteps?.length ? u.activitySteps : adapted.parentTeachingGuide.safeHomeActivity.steps,
          materials: u.householdMaterials?.length ? u.householdMaterials : adapted.parentTeachingGuide.safeHomeActivity.materials
        }
      }
    };
  } else if (!isUrban && lesson.ruralVariant) {
    const r = lesson.ruralVariant;
    adapted = {
      ...adapted,
      householdMaterials: r.householdMaterials?.length ? r.householdMaterials : adapted.householdMaterials,
      dialectWords: r.dialectWords?.length ? r.dialectWords : adapted.dialectWords,
      whatsAppSnippet: r.whatsAppSnippet || adapted.whatsAppSnippet,
      parentChallenge: r.parentChallenge || adapted.parentChallenge,
      mission: {
        ...adapted.mission,
        step1_learn: {
          ...adapted.mission.step1_learn,
          story: r.storySnippet || adapted.mission.step1_learn.story,
          localExample: r.localExample || adapted.mission.step1_learn.localExample
        },
        step2_discuss: {
          ...adapted.mission.step2_discuss,
          askFirst: r.introductoryQuestion || adapted.mission.step2_discuss.askFirst,
          explainSimply: r.simplifiedExplanation || adapted.mission.step2_discuss.explainSimply
        },
        step3_activity: {
          ...adapted.mission.step3_activity,
          gameOrExperimentName: r.activityTitle || adapted.mission.step3_activity.gameOrExperimentName,
          instructions: r.activitySteps?.length ? r.activitySteps : adapted.mission.step3_activity.instructions
        }
      },
      parentTeachingGuide: {
        ...adapted.parentTeachingGuide,
        introductoryQuestion: r.introductoryQuestion || adapted.parentTeachingGuide.introductoryQuestion,
        simplifiedExplanation: r.simplifiedExplanation || adapted.parentTeachingGuide.simplifiedExplanation,
        parentChallenge: r.parentChallenge || adapted.parentChallenge || adapted.parentTeachingGuide.parentChallenge,
        safeHomeActivity: {
          ...adapted.parentTeachingGuide.safeHomeActivity,
          title: r.activityTitle || adapted.parentTeachingGuide.safeHomeActivity.title,
          steps: r.activitySteps?.length ? r.activitySteps : adapted.parentTeachingGuide.safeHomeActivity.steps,
          materials: r.householdMaterials?.length ? r.householdMaterials : adapted.parentTeachingGuide.safeHomeActivity.materials
        }
      }
    };
  }

  // Filter dialects for setting
  const filteredDialects = adapted.dialectWords
    ? adapted.dialectWords.filter(w => !w.setting || w.setting === 'both' || w.setting === location)
    : adapted.dialectWords;

  adapted.dialectWords = filteredDialects && filteredDialects.length > 0 ? filteredDialects : adapted.dialectWords;

  // Ensure every lesson for all ages has an authentic UN SDG World Changer Community Mission & US K-12 Alignment
  return {
    ...adapted,
    communityMission: ensureWorldChangerMission(adapted, location),
    usCurriculumAlignment: adapted.usCurriculumAlignment || getUsAlignmentForLesson(adapted.ageBand, adapted.category, adapted.title)
  };
}
