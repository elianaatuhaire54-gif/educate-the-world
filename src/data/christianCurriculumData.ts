import { LessonModule } from '../types/curriculum';

export const CHRISTIAN_CURRICULUM_MODULES: LessonModule[] = [
  // =========================================================================
  // TOPIC 1: THE LOVE OF GOD (AGES 10-14 & Adaptable)
  // =========================================================================
  {
    id: 'christian-love-never-fails',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • The Love of God',
    title: 'God’s Love Never Fails',
    subtitle: 'Discovering that people may fail us, but God’s love is everlasting and unbreakable',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Heart',
    themeColor: 'from-rose-500 to-pink-600',
    badgeName: 'Unfailing Love Ambassador',
    badgeDescription: 'Can recite Romans 8:39 and explain why God’s love is everlasting',
    keyScripture: 'Jeremiah 31:3 — "I have loved you with an everlasting love; I have drawn you with unfailing kindness."',
    memoryVerse: 'Romans 8:39 — "Neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord."',
    prayer: 'Thank You Lord that Your love never fails me. When people break promises or life gets hard, help me remember that You hold me forever in Jesus’ name, Amen.',
    bibleTopic: 'The Love of God',
    objectives: [
      'Understand that God’s love is eternal and unconditional (Jeremiah 31:3)',
      'Contrast human broken promises with God’s covenant faithfulness',
      'Learn Romans 8:39 and how nothing can separate us from His love'
    ],
    householdMaterials: ['A piece of paper or cardboard', 'Scissors or pen', 'Crayons or marker'],
    dialectWords: [
      { localWord: 'Okwagala kwa Katonda', englishMeaning: 'The love of God', language: 'Luganda' },
      { localWord: 'Rukundo ya Ruhanga', englishMeaning: 'The love of God', language: 'Runyankole' },
      { localWord: 'Mar pa Rubanga', englishMeaning: 'The love of God', language: 'Acholi' },
      { localWord: 'Upendo wa Mungu', englishMeaning: 'The love of God', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Has anyone ever broken a promise to you or let you down? How did it feel, and how is God different?',
      simplifiedExplanation: 'Friends, teachers, and even family members can make mistakes or forget promises. But God’s love (Okwagala kwa Katonda) is everlasting. It never grows old, never runs out of batteries, and never walks away. Even when we make mistakes, God loves us with an unfailing kindness.',
      safeHomeActivity: {
        title: 'The Unbreakable Heart Craft',
        materials: ['Paper or card', 'Pen or pencil'],
        steps: [
          'Fold a paper in half and cut out a large heart.',
          'On the outside, write: "People may fail us."',
          'Inside, write in bold letters: "God’s Love Never Fails! (Jeremiah 31:3)".',
          'Place it on your study table or bedroom wall as a daily reminder.'
        ],
        safetyTip: 'Use blunt safety scissors when cutting paper.'
      },
      followUpQuestions: [
        {
          question: 'How long does God’s love last according to Jeremiah 31:3?',
          sampleAnswer: 'It is an everlasting love—forever and ever!'
        },
        {
          question: 'Can anything in all creation stop God from loving us?',
          sampleAnswer: 'No! Romans 8:39 says neither troubles, height, nor depth can separate us from His love.'
        },
        {
          question: 'Why is God’s love different from human love?',
          sampleAnswer: 'Human love can depend on moods or conditions, but God loves us unconditionally.'
        }
      ],
      parentChallenge: 'Today, encourage someone in your family who is tired or sad by whispering: "Remember, God’s love never fails you!"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Everlasting Promise (Jeremiah 31:3)',
        duration: '5 min',
        story: 'Think of the longest road or the biggest ocean you know. In Uganda, Lake Victoria is vast, but even lakes have shores. God told Jeremiah: "I have loved you with an everlasting love." Everlasting means without an end point! In Luganda, we say "Okwagala kwa Katonda tekuggwaawo" (God\'s love never ends). People might break promises, but God\'s covenant is unbreakable.',
        keyConcept: 'God does not love us because we are perfect; He loves us because love is who He is (1 John 4:8).',
        localExample: 'When electricity (Yaka) runs out or rainfall delays, God’s faithful sunrise never forgets to shine.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Heart-to-Heart',
        duration: '5 min',
        askFirst: 'Has a friend ever promised to share a toy or snack and then changed their mind? How does God treat His promises?',
        listenFor: 'Listen for them expressing feelings about trust and recognizing God is faithful.',
        explainSimply: '"God never changes His mind about loving you. His love is like a strong anchor in every storm."',
        parentTip: 'Share a gentle personal story of a time God gave you peace during a lonely or difficult moment.'
      },
      step3_activity: {
        title: '5 min • Unbreakable Heart Craft',
        duration: '5 min',
        gameOrExperimentName: 'Heart of Everlasting Love',
        instructions: [
          'Fold a clean sheet of paper in half.',
          'Cut a large heart shape.',
          'Write inside: "God’s Love Never Fails • Jeremiah 31:3".',
          'Draw three things you are grateful to God for around the edges.'
        ],
        whatChildLearns: 'Visualizing God’s constant faithfulness and grounding their identity in His love.'
      },
      step4_quiz: {
        title: '5 min • Discussion & Memory Verse',
        duration: '5 min',
        questions: [
          {
            question: 'According to Jeremiah 31:3, what kind of love does God have for us?',
            options: ['An everlasting love', 'A temporary love for 1 year', 'A love only when we get 100% on exams'],
            correctIndex: 0,
            explanation: 'Yes! God loves us with an everlasting love that never expires!'
          },
          {
            question: 'In Romans 8:39, what can separate us from the love of God in Christ Jesus?',
            options: ['Nothing in all creation', 'A bad storm', 'A difficult school day'],
            correctIndex: 0,
            explanation: 'Amen! Absolutely nothing in all creation can separate us from His love!'
          },
          {
            question: 'What is our memory verse for this lesson?',
            options: ['Romans 8:39', 'Genesis 1:1', 'Psalm 23:1'],
            correctIndex: 0,
            explanation: 'Romans 8:39 reminds us that nothing can tear us away from God’s love.'
          }
        ]
      }
    },
    parentChallenge: 'Memorize Romans 8:39 together before sleeping tonight!',
    fiveMinuteBite: {
      title: '5-Minute Promise Prayer',
      quickPrompt: 'Hold your hands open like receiving a gift. Read Jeremiah 31:3 aloud.',
      quickAction: 'Say together: "Lord, I receive Your everlasting love today!"'
    },
    whatsAppSnippet: `❤️ *CHRISTIAN EDUCATION: The Love of God (Ages 10-14)*
*Lesson 1:* God's Love Never Fails
*Scripture:* Jeremiah 31:3 • Romans 8:39
*Key Truth:* Human promises may break, but God's love is everlasting (Tekuggwaawo)!
*Activity:* Make an "Unbreakable Heart" card with Jeremiah 31:3.
*Memory Verse:* Romans 8:39 📖`,
    audioNarrationText: 'Welcome to our lesson on God’s love. Jeremiah 31:3 tells us that God loves you with an everlasting love. People may fail us, but God’s love never fails!',
    urbanVariant: {
      setting: 'urban',
      badgeLabel: '🏙️ Urban Town Context',
      environmentSummary: 'Town streets, busy homes, school friendships & promise keeping',
      storySnippet: 'In the busy city with cars honking and friends at school, people sometimes make promises they forget to keep—like promising to call, visit, or share a video game. But God’s love is steady like the bedrock beneath Kampala hills. In Luglish, we say: God never "swerves" on His children!',
      localExample: 'Even when friends change their minds at school or shop prices jump, God’s care never falters.',
      householdMaterials: ['A sheet of notebook paper', 'A ballpoint pen'],
      introductoryQuestion: 'Has a classmate or friend ever cancelled plans with you? How does knowing God is always there comfort your heart?',
      simplifiedExplanation: 'City life moves fast, but God’s love is constant. Romans 8:39 guarantees that no traffic, exam pressure, or lonely evening can separate you from Jesus.',
      activityTitle: 'Urban Heart Bookmark',
      activitySteps: [
        'Cut a strip of paper into a bookmark.',
        'Write: "God’s Love Never Fails • Rom 8:39".',
        'Place it inside your school textbook or Bible.'
      ],
      parentChallenge: 'Remind your child on the way to school or during homework: "You are deeply loved by God today."',
      dialectWords: [
        { localWord: 'Okwagala kwa Katonda', englishMeaning: 'The love of God', language: 'Urban Luganda', setting: 'urban' },
        { localWord: 'Mukama', englishMeaning: 'The Lord', language: 'Luganda', setting: 'both' }
      ],
      whatsAppSnippet: `❤️ *CHRISTIAN EDUCATION (Urban): God's Love Never Fails*
*Scripture:* Jeremiah 31:3 • Romans 8:39
*Urban Context:* Friends may forget, but God's love is forever constant!
*Memory Verse:* Romans 8:39 📖`
    },
    ruralVariant: {
      setting: 'rural',
      badgeLabel: '🌾 Rural Village Context',
      environmentSummary: 'Village compound, shamba, quiet hills & evening fireplace',
      storySnippet: 'When rain is delayed in the village, the grass turns dry and yellow. But as soon as rain falls, the earth leaps back to life! God’s love is even deeper and more reliable than the seasonal rains. As families gather around the ekyoto fireplace, elders remind us: "Rukundo ya Ruhanga tebwaho" (God’s love never ends).',
      localExample: 'The sun rising over the banana grove (olusuku) every morning without fail, just like God’s faithful mercies.',
      householdMaterials: ['A smooth leaf or piece of paper', 'A pencil or piece of charcoal'],
      introductoryQuestion: 'When you look at the big hills and trees around our village, what tells you that God is faithful?',
      simplifiedExplanation: 'Just as the hills stand firm around our village, God’s love stands firm around you. People can let us down, but Jesus will never leave you or forsake you.',
      activityTitle: 'Ekyoto Memory Circle',
      activitySteps: [
        'Sit together on the veranda or near the cooking fire.',
        'Pass a small smooth stone from hand to hand.',
        'Whoever holds the stone names one proof of God’s love in their life today.'
      ],
      parentChallenge: 'At dinner, have your child share Jeremiah 31:3 in their mother tongue with grandparents or siblings.',
      dialectWords: [
        { localWord: 'Okwagala okutaggwaawo', englishMeaning: 'Unending love', language: 'Traditional Luganda', setting: 'rural' },
        { localWord: 'Rukundo ya Ruhanga', englishMeaning: 'Love of God (Western)', language: 'Runyankole', setting: 'rural' }
      ],
      whatsAppSnippet: `❤️ *CHRISTIAN EDUCATION (Rural): God's Love Never Fails*
*Scripture:* Jeremiah 31:3 • Romans 8:39
*Village Context:* Like hills around our home, God's love surrounds us always!
*Memory Verse:* Romans 8:39 📖`
    },
    isFeatured: true
  },

  {
    id: 'christian-love-in-action',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • The Love of God',
    title: 'God’s Love in Action',
    subtitle: 'God didn’t just say He loves us—He proved it by sending Jesus while we were still sinners',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Gift',
    themeColor: 'from-amber-500 to-orange-600',
    badgeName: 'Love in Action Champion',
    badgeDescription: 'Understands Romans 5:8 and can demonstrate God’s love practically at home',
    keyScripture: 'Romans 5:8 — "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us."',
    memoryVerse: 'John 15:13 — "Greater love has no one than this: to lay down one’s life for one’s friends."',
    prayer: 'Lord Jesus, thank You for proving Your love in action on the cross. You didn’t wait for me to be perfect. Help me show Your sacrificial love to others today. Amen.',
    bibleTopic: 'The Love of God',
    objectives: [
      'Understand that true love is proven by action and sacrifice (Romans 5:8)',
      'Realize that God did not wait for us to be good before saving us',
      'Identify concrete ways to show God’s love to family and neighbors'
    ],
    householdMaterials: ['Paper and crayons or pens'],
    dialectWords: [
      { localWord: 'Okwagala mu bikolwa', englishMeaning: 'Love in action / deeds', language: 'Luganda' },
      { localWord: 'Rukundo omu bikorwa', englishMeaning: 'Love in action', language: 'Runyankole' },
      { localWord: 'Upendo kwa vitendo', englishMeaning: 'Love in action', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'What is the greatest or most meaningful gift you have ever received? What made it so special?',
      simplifiedExplanation: 'Words are easy to say, but real love shows up in action! God didn’t just look down from heaven and say "I love you." He proved it (demonstrated it) by sending His one and only Son Jesus to give His life for us, even when we had turned our backs on Him. That is the greatest gift in world history!',
      safeHomeActivity: {
        title: 'Love in Action Secret Mission',
        materials: ['A small piece of paper'],
        steps: [
          'Ask your child to pick one family member secretly.',
          'Do one helpful deed for them without bragging (e.g. sweep the floor, fold clothes, wash cups, fetch water).',
          'Leave a small note: "God loves you and so do I!"'
        ],
        safetyTip: 'Supervise younger kids if helping with kitchen chores or water.'
      },
      followUpQuestions: [
        {
          question: 'How did God show and prove His love for us?',
          sampleAnswer: 'By sending Jesus to die for our sins on the cross (Romans 5:8).'
        },
        {
          question: 'Did God wait for us to be perfect and good before loving us?',
          sampleAnswer: 'No! While we were still sinners, Christ died for us.'
        },
        {
          question: 'What should we do in response to God’s great love?',
          sampleAnswer: 'Believe in Jesus and love others through real, kind actions.'
        }
      ],
      parentChallenge: 'Lead by example today: do an unexpected kind deed for your child with a hug!'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Ultimate Proof (Romans 5:8)',
        duration: '5 min',
        story: 'If someone tells you: "I love you," but never helps when you are sick, hungry, or in trouble, their words feel empty. But God put His love on display! Romans 5:8 uses the word "demonstrates" — like showing proof in daylight. Jesus willingly went to the cross for us, not after we fixed all our mistakes, but while we were still sinners. That is grace and love in action (Okwagala mu bikolwa)!',
        keyConcept: 'True love is measured by what you are willing to sacrifice for someone else.',
        localExample: 'A mother giving the best portion of food to her child before eating herself.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Talk About Real Love',
        duration: '5 min',
        askFirst: 'If someone only loves you when you behave nicely, is that real love? How does God love us?',
        listenFor: 'Check if they understand God loves us even when we fall short, and invites us to change.',
        explainSimply: '"God loved us first! He took the initiative. Because He gave Jesus for us, we can love without fear."',
        parentTip: 'Praise your child for their honesty when discussing times they struggled to show kindness.'
      },
      step3_activity: {
        title: '5 min • Love in Action Poster',
        duration: '5 min',
        gameOrExperimentName: 'Action Heart Drawing',
        instructions: [
          'Draw a big open gift box on paper.',
          'Draw a cross coming out of the gift box.',
          'Write: "God’s Love in Action • Romans 5:8".',
          'Write 2 kind actions you will do this week below the box.'
        ],
        whatChildLearns: 'Translating biblical understanding of sacrifice into daily personal conduct.'
      },
      step4_quiz: {
        title: '5 min • Discussion & Quiz',
        duration: '5 min',
        questions: [
          {
            question: 'According to Romans 5:8, when did Christ die for us?',
            options: ['While we were still sinners', 'Only after we became perfect angels', 'Only after we paid money'],
            correctIndex: 0,
            explanation: 'While we were still sinners! That shows how unconditional His love is.'
          },
          {
            question: 'What does John 15:13 say is the greatest love?',
            options: ['Laying down one’s life for one’s friends', 'Having the most expensive shoes', 'Winning an argument'],
            correctIndex: 0,
            explanation: 'To lay down one’s life for one’s friends! Jesus did this for the whole world.'
          },
          {
            question: 'How can we show God’s love to others today?',
            options: ['By serving, helping, and forgiving them', 'By ignoring people in need', 'By shouting at them'],
            correctIndex: 0,
            explanation: 'Yes! Love is shown through patience, kindness, and helpful deeds.'
          }
        ]
      }
    },
    parentChallenge: 'Challenge your child to help wash dishes or tidy up without being asked today!',
    fiveMinuteBite: {
      title: '5-Minute Kindness Action',
      quickPrompt: 'Name one person in your home who worked hard today.',
      quickAction: 'Give them a glass of water or a warm hug and say: "God bless you!"'
    },
    whatsAppSnippet: `🎁 *CHRISTIAN EDUCATION: Love in Action (Ages 10-14)*
*Lesson 2:* God's Love in Action
*Scripture:* Romans 5:8 • John 15:13
*Core Truth:* God demonstrated His love by sending Jesus while we were still sinners.
*Action:* Secret kindness deed for someone in the household!
*Memory Verse:* John 15:13 📖`,
    audioNarrationText: 'God did not just speak love; He showed it. Romans 5:8 tells us that while we were still sinners, Christ died for us. That is the greatest gift ever given!'
  },

  {
    id: 'christian-love-for-everyone',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • The Love of God',
    title: 'God’s Love is for Everyone',
    subtitle: 'God so loved the whole world—every nation, tribe, background, and person',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Globe',
    themeColor: 'from-blue-500 to-indigo-600',
    badgeName: 'Global Love Witness',
    badgeDescription: 'Can recite John 3:16 and explain that Jesus died for all people and nations',
    keyScripture: 'John 3:16 — "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."',
    memoryVerse: '1 John 4:9 — "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him."',
    prayer: 'Thank You Heavenly Father that Your love has no borders! You love people of every tribe, language, and country. Help me to love everyone without prejudice or hatred. Amen.',
    bibleTopic: 'The Love of God',
    objectives: [
      'Understand that God’s love encompasses all people and nations (John 3:16)',
      'Recognize that "whoever" means anyone who believes can receive eternal life',
      'Overcome tribalism, prejudice, and exclusion with Christian love'
    ],
    householdMaterials: ['A piece of paper', 'Colored markers or pens'],
    dialectWords: [
      { localWord: 'Ensi yonna', englishMeaning: 'The whole world', language: 'Luganda' },
      { localWord: 'Buri muntu', englishMeaning: 'Every person / whoever', language: 'Luganda' },
      { localWord: 'Ulimwengu wote', englishMeaning: 'The whole world', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'When you look at a world map or think about all the countries in Africa and across the earth: Who does God love most?',
      simplifiedExplanation: 'Sometimes people think God only cares about people from their own tribe, city, or church. But John 3:16 says: "For God so loved the WORLD!" That means every boy and girl in Uganda, Kenya, Nigeria, Brazil, China, and America. The word "whoever" includes you, your neighbors, and even people who look or sound different from you.',
      safeHomeActivity: {
        title: 'The World Heart Map',
        materials: ['Paper', 'Pencil or marker'],
        steps: [
          'Draw a large circle representing the earth, or draw the outline of Africa.',
          'Draw a heart inside the circle with cross rays.',
          'Write across the earth: "WHOEVER BELIEVES (John 3:16)".',
          'Pray together for children in another nation or district.'
        ],
        safetyTip: 'Simple paper drawing safe for all ages.'
      },
      followUpQuestions: [
        {
          question: 'According to John 3:16, who did God love?',
          sampleAnswer: 'The whole world!'
        },
        {
          question: 'Did Jesus die for only one tribe or nation?',
          sampleAnswer: 'No, He died for every nation, tribe, and person who believes.'
        },
        {
          question: 'What does the word "whoever" mean in John 3:16?',
          sampleAnswer: 'It means anyone—no matter who they are or where they were born.'
        }
      ],
      parentChallenge: 'Pick a country or community going through hardship (like sickness or conflict) and pray for them together tonight.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Greatest "Whoever" (John 3:16)',
        duration: '5 min',
        story: 'There are over 8 billion people on Earth, speaking thousands of languages! In Uganda alone, we have Baganda, Banyankole, Acholi, Basoga, Iteso, Bakiga, and many more. Sometimes the world teaches people to only favor their own tribe or clan. But Jesus broke down every wall! When John 3:16 says "God so loved the world", it means the Creator knows every hair on every head and invites "whoever believes" to have eternal life.',
        keyConcept: 'God has no favorites based on wealth, tribe, or race. His salvation is open to all.',
        localExample: 'The sun warms every home in the community equally, just as God’s love shines on all people.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Overcoming Prejudice',
        duration: '5 min',
        askFirst: 'Have you ever heard someone say unkind words about people from another tribe or background? How does God want us to see them?',
        listenFor: 'Look for understanding that every human being is made in the image of God (Genesis 1:27).',
        explainSimply: '"In God’s kingdom, love builds bridges. When we treat everyone with respect, we reflect Jesus."',
        parentTip: 'Emphasize that our primary identity is children of God.'
      },
      step3_activity: {
        title: '5 min • World Blessing Drawing',
        duration: '5 min',
        gameOrExperimentName: 'World Heart of Peace',
        instructions: [
          'Draw a globe or circle.',
          'Draw children holding hands around the world.',
          'Write: "God So Loved the World • John 3:16".',
          'Say a 1-sentence prayer for peace and the gospel in Africa.'
        ],
        whatChildLearns: 'Developing a global missionary mindset and celebrating human diversity in Christ.'
      },
      step4_quiz: {
        title: '5 min • Quiz & Memory Verse',
        duration: '5 min',
        questions: [
          {
            question: 'Complete John 3:16: "For God so loved the ______ that He gave His one and only Son..."',
            options: ['World', 'City only', 'Rich people only'],
            correctIndex: 0,
            explanation: 'The world! God’s heart beats for all nations and all people.'
          },
          {
            question: 'What promise is given to whoever believes in Jesus?',
            options: ['They shall not perish but have eternal life', 'They will never have homework', 'They will never need to sleep'],
            correctIndex: 0,
            explanation: 'They shall not perish but have eternal life with God!'
          },
          {
            question: 'According to 1 John 4:9, how did God show His love among us?',
            options: ['He sent His one and only Son into the world', 'He sent a lightning bolt', 'He built a golden castle'],
            correctIndex: 0,
            explanation: 'He sent His Son Jesus so that we might live through Him!'
          }
        ]
      }
    },
    parentChallenge: 'Ask your child to greet a neighbor or classmate they don’t usually talk to with kindness tomorrow!',
    fiveMinuteBite: {
      title: '5-Minute World Prayer',
      quickPrompt: 'Point in 4 directions: North, South, East, West.',
      quickAction: 'Say: "Jesus is Lord over the North, South, East, and West! Amen."'
    },
    whatsAppSnippet: `🌍 *CHRISTIAN EDUCATION: Love is for Everyone (Ages 10-14)*
*Lesson 3:* God's Love is for the Whole World
*Scripture:* John 3:16 • 1 John 4:9
*Core Truth:* "Whoever believes" means anyone, anywhere! No tribalism, no favoritism.
*Memory Verse:* 1 John 4:9 📖`,
    audioNarrationText: 'God so loved the world! Not just one country, not just one tribe, but all of us. Whoever believes in Jesus receives eternal life.'
  },

  {
    id: 'christian-living-in-gods-love',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • The Love of God',
    title: 'Living in God’s Love',
    subtitle: '1 John 4:7–8 & 1 Corinthians 13: How God’s children reflect His love every day',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-emerald-500 to-teal-600',
    badgeName: 'Practicing Love Disciple',
    badgeDescription: 'Can list the characteristics of 1 Corinthians 13 love and practice them at home',
    keyScripture: '1 John 4:7–8 — "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love."',
    memoryVerse: 'John 13:34 — "A new command I give you: Love one another. As I have loved you, so you must love one another."',
    prayer: 'Lord, You are love. Fill my heart with Your patience, kindness, and forgiveness so that when people look at me, they see Jesus living in me. Amen.',
    bibleTopic: 'The Love of God',
    objectives: [
      'Understand that God is the source of all real love (1 John 4:7–8)',
      'Explore the characteristics of biblical love in 1 Corinthians 13 (patient, kind, not jealous)',
      'Identify daily practical ways to show love when someone annoys or offends us'
    ],
    householdMaterials: ['Paper and pen'],
    dialectWords: [
      { localWord: 'Okwagala kuguminkiriza', englishMeaning: 'Love is patient', language: 'Luganda' },
      { localWord: 'Okwagala kwa kisa', englishMeaning: 'Love is kind', language: 'Luganda' },
      { localWord: 'Upendo huvumilia', englishMeaning: 'Love is patient', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'How do you know that your parents or guardians love you? How do you show them love back when chores or disagreements happen?',
      simplifiedExplanation: '1 Corinthians 13 teaches us what real love looks like: Love is patient when waiting. Love is kind when speaking. Love does not boast or get puffed up. Love is not easily angered and keeps no record of wrongs. If we belong to Jesus, we don’t just talk about love—we live it out in our living room and school playground.',
      safeHomeActivity: {
        title: 'The 1 Corinthians 13 Name Test',
        materials: ['A piece of paper'],
        steps: [
          'Read 1 Corinthians 13:4–5 aloud.',
          'Replace the word "Love" with your child’s name: "[Name] is patient, [Name] is kind, [Name] does not envy..."',
          'Ask: "Which one is easiest for you, and which one do you need the Holy Spirit to help you with?"',
          'Pray together for patience and kindness.'
        ],
        safetyTip: 'Make it uplifting and encouraging, not critical.'
      },
      followUpQuestions: [
        {
          question: 'According to 1 John 4:8, why should we love one another?',
          sampleAnswer: 'Because love comes from God, and God IS love!'
        },
        {
          question: 'What are two qualities of love in 1 Corinthians 13?',
          sampleAnswer: 'Love is patient and love is kind (it does not envy or boast).'
        },
        {
          question: 'What new commandment did Jesus give in John 13:34?',
          sampleAnswer: 'To love one another just as He has loved us.'
        }
      ],
      parentChallenge: 'Next time an argument happens between siblings today, stop and ask: "What does 1 Corinthians 13 love look like right now?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Greatest Way (1 Corinthians 13)',
        duration: '5 min',
        story: 'The Apostle Paul wrote that even if you can speak with the tongues of angels, or understand all mysteries, but do not have love, you are just a noisy gong or clanging cymbal! In Uganda, when someone bangs a metal basin loudly, it hurts your ears. Knowledge without love is just noise. But when love enters the room, kindness, patience, and forgiveness follow.',
        keyConcept: 'Love is not just a warm feeling; it is a daily decision to be patient, kind, and forgiving.',
        localExample: 'Letting your brother or sister take the first turn at playing or sharing the sweetest ripe banana.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Love in the Living Room',
        duration: '5 min',
        askFirst: 'Is it easy to be patient when someone takes your things without asking? What does Jesus help us do?',
        listenFor: 'Look for honest answers about anger and learning to ask the Holy Spirit for patience.',
        explainSimply: '"We cannot love like this on our own strength. That is why God pours His love into our hearts through the Holy Spirit."',
        parentTip: 'Affirm your child: "I love how kind you were to your sibling earlier today!"'
      },
      step3_activity: {
        title: '5 min • The Love Checklist',
        duration: '5 min',
        gameOrExperimentName: 'Patience & Kindness Mirror',
        instructions: [
          'Write 3 words: Patient • Kind • Forgiving.',
          'Think of one person you found difficult this week.',
          'Write one kind sentence or prayer for them.',
          'Decide to smile and greet them next time you meet.'
        ],
        whatChildLearns: 'Overcoming irritation with grace and cultivating fruits of the Spirit.'
      },
      step4_quiz: {
        title: '5 min • Questions & Reflection',
        duration: '5 min',
        questions: [
          {
            question: 'What does 1 Corinthians 13:4 say about love?',
            options: ['Love is patient and kind', 'Love is selfish and rude', 'Love only lasts 5 minutes'],
            correctIndex: 0,
            explanation: 'Love is patient, love is kind. It does not envy, it does not boast!'
          },
          {
            question: 'According to 1 John 4:8, what is God’s essential nature?',
            options: ['God is love', 'God is distant', 'God is forgetful'],
            correctIndex: 0,
            explanation: 'God is love! Everything He does flows from His holy, loving character.'
          },
          {
            question: 'In John 13:34, how did Jesus say people will know we are His disciples?',
            options: ['If we love one another', 'If we have the biggest building', 'If we shout the loudest'],
            correctIndex: 0,
            explanation: 'By our love for one another! That is the authentic mark of a Christian.'
          }
        ]
      }
    },
    parentChallenge: 'Practice 1 minute of intentional praise: tell each member of the family one thing you love about them tonight.',
    fiveMinuteBite: {
      title: '5-Minute Patience Breathe',
      quickPrompt: 'When feeling annoyed or hurried today, pause.',
      quickAction: 'Whisper 3 times: "Love is patient, love is kind (1 Cor 13:4)."'
    },
    whatsAppSnippet: `💖 *CHRISTIAN EDUCATION: Living in God's Love (Ages 10-14)*
*Lesson 4:* Living & Reflecting God's Love
*Scripture:* 1 John 4:7–8 • 1 Corinthians 13 • John 13:34
*Core Truth:* Love is patient, kind, and keeps no record of wrongs.
*Memory Verse:* John 13:34 📖`,
    audioNarrationText: 'Dear friends, let us love one another, for love comes from God! As Jesus loved us, let us walk in patience, kindness, and forgiveness today.'
  },

  // =========================================================================
  // TOPIC 2: SACRIFICE OF JESUS (AGES 10-14 & Adaptable)
  // =========================================================================
  {
    id: 'christian-why-did-jesus-die',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Sacrifice of Jesus',
    title: 'Why Did Jesus Die?',
    subtitle: 'Understanding the ultimate rescuer: Jesus gave His life to save us from sin',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Shield',
    themeColor: 'from-red-500 to-rose-700',
    badgeName: 'Rescued by Grace',
    badgeDescription: 'Can explain why Jesus had to die to save us from the penalty of sin',
    keyScripture: 'John 3:16 & Romans 5:8 — "Christ died for us while we were still sinners."',
    memoryVerse: 'Romans 5:8 — "God demonstrates his own love for us in this: While we were still sinners, Christ died for us."',
    prayer: 'Thank You Lord Jesus for giving Your life on the cross to rescue me. You took away the burden of sin and gave me freedom. I put my trust in You today. Amen.',
    bibleTopic: 'Sacrifice of Jesus',
    objectives: [
      'Understand why humanity needed a Savior to bridge the separation caused by sin',
      'See Jesus as the greatest rescuer who willingly gave His life',
      'Respond with gratitude, faith, and a personal thank-you to Jesus'
    ],
    householdMaterials: ['Paper and pen', 'A red crayon or marker'],
    dialectWords: [
      { localWord: 'Okununulibwa', englishMeaning: 'Redemption / Being saved from debt', language: 'Luganda' },
      { localWord: 'Omununuzi', englishMeaning: 'The Redeemer / Savior', language: 'Luganda' },
      { localWord: 'Mwokozi', englishMeaning: 'Savior / Rescuer', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'If someone is trapped in a burning house or deep water, who do they need? Who is the greatest rescuer of all time?',
      simplifiedExplanation: 'Superheroes in movies are fictional, but Jesus is the real Savior! Sin is like a deep pit that nobody could climb out of on their own. Because God is holy and just, sin carries the penalty of death. But because God is loving, Jesus stepped forward and took our place. He died on the cross so that our sins could be forgiven and we could live forever with God.',
      safeHomeActivity: {
        title: 'Personal Thank-You Letter to Jesus',
        materials: ['Paper', 'Pen'],
        steps: [
          'Take 3 quiet minutes.',
          'Have your child write a sincere thank-you letter to Jesus starting with: "Dear Lord Jesus, thank You for dying on the cross for me because..."',
          'Let them read or fold it and place it in their Bible.'
        ],
        safetyTip: 'Encourage sincere expression in their own words.'
      },
      followUpQuestions: [
        {
          question: 'Why did Jesus die on the cross?',
          sampleAnswer: 'To pay the penalty for our sins and reconcile us with God.'
        },
        {
          question: 'Did anyone force Jesus to die, or did He do it willingly?',
          sampleAnswer: 'He laid down His life willingly out of love (John 10:18).'
        },
        {
          question: 'What does His sacrifice show us about God’s heart?',
          sampleAnswer: 'That God loves us so much He was willing to give His most precious Son.'
        }
      ],
      parentChallenge: 'Share with your child the moment you first understood why Jesus died for you.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Great Rescue Mission',
        duration: '5 min',
        story: 'Imagine you owed a king 10 billion shillings that you could never ever repay in ten lifetimes. Every day you worried about going to prison. Then the King’s beloved Son walks into the court, hands over His own treasury, and says: "Stamp their debt: PAID IN FULL! I will take their penalty." That is what Jesus did on the cross! In Luganda, the word for redemption is "Okununulibwa" — buying someone out of slavery and setting them free forever.',
        keyConcept: 'Jesus died not because He did anything wrong, but to pay our debt of sin.',
        localExample: 'Someone stepping in front of danger to shield a child from harm.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Discussing the Cross',
        duration: '5 min',
        askFirst: 'Why couldn’t good deeds or money take away our sin? Why did Jesus have to die?',
        listenFor: 'Listen for understanding that only a sinless Savior could wash away sin.',
        explainSimply: '"Only someone without sin could pay for others. Jesus was completely pure and holy, so His sacrifice counts for the whole world!"',
        parentTip: 'Speak with awe and gratitude about the price Jesus paid.'
      },
      step3_activity: {
        title: '5 min • A Note to the Savior',
        duration: '5 min',
        gameOrExperimentName: 'Thank You Jesus Letter',
        instructions: [
          'Take a fresh page.',
          'Draw a red cross in the center.',
          'Write: "Paid in Full by Jesus • Romans 5:8".',
          'Write 3 specific things you thank Jesus for saving you from.'
        ],
        whatChildLearns: 'Developing deep personal appreciation for Christ’s substitutionary atonement.'
      },
      step4_quiz: {
        title: '5 min • Questions & Memory Check',
        duration: '5 min',
        questions: [
          {
            question: 'Why did Jesus die on the cross?',
            options: ['To rescue us from sin and give us eternal life', 'Because He had no power', 'By accident'],
            correctIndex: 0,
            explanation: 'To rescue us from sin! Jesus willingly gave His life to save us.'
          },
          {
            question: 'What does Romans 5:8 say God demonstrated on the cross?',
            options: ['His own love for us', 'His anger at the world', 'His need for money'],
            correctIndex: 0,
            explanation: 'His own love! God proved His love by giving Jesus for us.'
          },
          {
            question: 'What local Luganda word means redemption / buying out of debt?',
            options: ['Okununulibwa', 'Okubala', 'Akatale'],
            correctIndex: 0,
            explanation: 'Okununulibwa! Being redeemed and set free by Christ!'
          }
        ]
      }
    },
    parentChallenge: 'Before sleeping tonight, pray together thanking Jesus specifically for the cross.',
    fiveMinuteBite: {
      title: '5-Minute Cross Reflection',
      quickPrompt: 'Look at the palm of your hands.',
      quickAction: 'Remember Jesus took nails in His hands so you could be in God’s hands forever.'
    },
    whatsAppSnippet: `✝️ *CHRISTIAN EDUCATION: Sacrifice of Jesus (Ages 10-14)*
*Lesson 1:* Why Did Jesus Die?
*Scripture:* Romans 5:8 • John 3:16
*Core Truth:* Jesus is the ultimate rescuer who paid our debt of sin (Okununulibwa).
*Memory Verse:* Romans 5:8 📖`,
    audioNarrationText: 'Why did Jesus die? Because of God’s great love! Jesus gave His life on the cross to rescue us from sin and give us everlasting life.'
  },

  {
    id: 'christian-the-cross-and-forgiveness',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Sacrifice of Jesus',
    title: 'The Cross and Forgiveness',
    subtitle: 'Colossians 2:13–14: How Jesus canceled the record of our sins completely',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'FileCheck',
    themeColor: 'from-purple-500 to-indigo-600',
    badgeName: 'Forgiven & Free',
    badgeDescription: 'Understands Colossians 2:13-14 and knows all sins are washed clean by Jesus’ blood',
    keyScripture: 'Colossians 2:13–14 — "He forgave us all our sins, having canceled the charge of our legal indebtedness, which stood against us and condemned us; he has taken it away, nailing it to the cross."',
    memoryVerse: '1 John 1:7 — "The blood of Jesus, his Son, purifies us from all sin."',
    prayer: 'Lord Jesus, thank You for nailing the record of my mistakes and sins to the cross. You have washed me clean and canceled my guilt. Help me walk in freedom and forgive others as You forgave me. Amen.',
    bibleTopic: 'Sacrifice of Jesus',
    objectives: [
      'Learn how the cross canceled our certificate of debt (Colossians 2:13–14)',
      'Experience the relief and joy of complete forgiveness through Jesus’ blood',
      'Understand the power of forgiving others because we have been forgiven'
    ],
    householdMaterials: ['A piece of scrap paper', 'A pen'],
    dialectWords: [
      { localWord: 'Okusonyiyibwa', englishMeaning: 'Forgiveness', language: 'Luganda' },
      { localWord: 'Omusaayi gwa Yesu', englishMeaning: 'The blood of Jesus', language: 'Luganda' },
      { localWord: 'Msamaha', englishMeaning: 'Forgiveness / Pardon', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Write the word "SIN" or "MISTAKES" on a small scrap of paper. Now tear it in half and throw it away. What happened to that debt?',
      simplifiedExplanation: 'Before Jesus, our sins were like a long police report or unpaid bill listing every bad attitude, lie, or wrong choice we ever made. But Colossians 2:14 tells us that Jesus took that entire list and nailed it to the cross! When God looks at those who trust in Jesus, He sees them washed white as snow. His blood purifies us completely (Okusonyiyibwa).',
      safeHomeActivity: {
        title: 'The Torn Record Demonstration',
        materials: ['Scrap paper', 'Pen', 'Trash bin'],
        steps: [
          'On a small paper, write words like: Lying, Disobedience, Selfishness.',
          'Read Colossians 2:14 together.',
          'Fold the paper, tear it right through the middle, and throw it in the bin.',
          'Say together: "Nail to the cross! Forgiven and washed clean by Jesus!"'
        ],
        safetyTip: 'Simple paper activity.'
      },
      followUpQuestions: [
        {
          question: 'What did Jesus do with the record of our sins according to Colossians 2:14?',
          sampleAnswer: 'He canceled it and took it away, nailing it to the cross!'
        },
        {
          question: 'What cleanses us from all sin according to 1 John 1:7?',
          sampleAnswer: 'The blood of Jesus, God’s Son.'
        },
        {
          question: 'How should someone feel once they know Jesus has forgiven them?',
          sampleAnswer: 'Peaceful, joyful, free, and thankful!'
        }
      ],
      parentChallenge: 'Is there anyone you or your child need to forgive today? Let go of grudges just as Jesus forgave you.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Debt Nailed to the Cross',
        duration: '5 min',
        story: 'In ancient times, when a prisoner finished their sentence or someone paid their debt, the court wrote "TETELESTAI" across the paper — which means "PAID IN FULL". That was the exact word Jesus shouted from the cross before He bowed His head! The record of accusations against you was nailed to the wood of the cross. Satan can no longer point fingers at you, because Jesus wiped the ledger clean!',
        keyConcept: 'Forgiveness is complete. God does not hold your past against you when you are in Christ.',
        localExample: 'A shopkeeper stamping a debt book "Settled in Full" with zero balance remaining.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Guilt vs Grace',
        duration: '5 min',
        askFirst: 'When you do something wrong, do you feel afraid of God, or do you run to Him for forgiveness?',
        listenFor: 'Look for them understanding they can confess sins freely and receive cleansing (1 John 1:9).',
        explainSimply: '"God does not want you hiding under the bed like Adam and Eve. Run to Jesus! His arms are open wide with forgiveness."',
        parentTip: 'Reassure your child that God’s forgiveness is real and unconditional.'
      },
      step3_activity: {
        title: '5 min • Cross Bookmark Craft',
        duration: '5 min',
        gameOrExperimentName: 'Nailed to the Cross Symbol',
        instructions: [
          'Draw a sturdy cross on paper.',
          'Write across the horizontal beam: "PAID IN FULL".',
          'Write 1 John 1:7 at the base: "The blood of Jesus purifies us from all sin."',
          'Keep it where you pray every morning.'
        ],
        whatChildLearns: 'Grasping the finality and completeness of Christian forgiveness.'
      },
      step4_quiz: {
        title: '5 min • Questions & Review',
        duration: '5 min',
        questions: [
          {
            question: 'What happened to our legal debt of sin on the cross?',
            options: ['Jesus took it away and nailed it to the cross', 'It was multiplied by 10', 'It was put on hold for later'],
            correctIndex: 0,
            explanation: 'Colossians 2:14: He canceled the record of debt and nailed it to the cross!'
          },
          {
            question: 'What cleanses us from all sin according to 1 John 1:7?',
            options: ['The blood of Jesus Christ', 'Washing with soap and water', 'Buying expensive clothes'],
            correctIndex: 0,
            explanation: 'The blood of Jesus purifies us from all sin!'
          },
          {
            question: 'What is the local Luganda word for forgiveness?',
            options: ['Okusonyiyibwa', 'Okulwana', 'Okutunda'],
            correctIndex: 0,
            explanation: 'Okusonyiyibwa means forgiveness and gracious pardon.'
          }
        ]
      }
    },
    parentChallenge: 'Ask your child: "Is there anyone at school or home you need to forgive today?" Pray for that person together.',
    fiveMinuteBite: {
      title: '5-Minute Clean Slate Prayer',
      quickPrompt: 'Cup your hands together like washing your face with water.',
      quickAction: 'Pray: "Lord Jesus, wash my heart clean and help me forgive everyone who hurt me today."'
    },
    whatsAppSnippet: `📜 *CHRISTIAN EDUCATION: The Cross & Forgiveness (Ages 10-14)*
*Lesson 2:* The Cross & Forgiveness
*Scripture:* Colossians 2:13–14 • 1 John 1:7
*Core Truth:* Jesus nailed our debt to the cross—paid in full (Okusonyiyibwa)!
*Memory Verse:* 1 John 1:7 📖`,
    audioNarrationText: 'He forgave us all our sins! Colossians 2:14 tells us Jesus canceled the charge of our debt and nailed it to the cross. You are forgiven and free in Christ.'
  },

  {
    id: 'christian-jesus-took-our-place',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Sacrifice of Jesus',
    title: 'Jesus Took Our Place',
    subtitle: 'Isaiah 53:5: The meaning of substitution—He was pierced for our transgressions',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'ShieldCheck',
    themeColor: 'from-rose-600 to-red-800',
    badgeName: 'Substitution Disciple',
    badgeDescription: 'Can explain Isaiah 53:5 and how Jesus stood in our place for punishment and healing',
    keyScripture: 'Isaiah 53:5 — "He was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed."',
    memoryVerse: 'Isaiah 53:5 — "The punishment that brought us peace was on him, and by his wounds we are healed."',
    prayer: 'Lord Jesus, I am humbled that You stood in my place. You took the punishment I deserved so I could receive the peace and healing I didn’t deserve. I praise Your holy name. Amen.',
    bibleTopic: 'Sacrifice of Jesus',
    objectives: [
      'Understand the concept of substitution (Jesus taking our place and punishment)',
      'Memorize Isaiah 53:5 and connect it to physical and spiritual healing',
      'Live with confidence knowing Jesus paid the full penalty for our sins'
    ],
    householdMaterials: ['Paper and pen'],
    dialectWords: [
      { localWord: 'Yakwata ekifo kyaffe', englishMeaning: 'He took our place (Substitution)', language: 'Luganda' },
      { localWord: 'Emirandagira gye', englishMeaning: 'By His stripes / wounds', language: 'Luganda' },
      { localWord: 'Alichukua nafasi yetu', englishMeaning: 'He took our place', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Imagine two students: one broke a school window and was about to get suspended. Another student steps forward and says: "I will pay for the window and take the suspension so my friend can stay." How would you feel about that friend?',
      simplifiedExplanation: 'That is called SUBSTITUTION. Substitution means taking the place of another person. Isaiah 53 was written 700 years before Jesus was born, yet it described the cross with pinpoint accuracy! Jesus was pierced for our transgressions. The punishment that brought us peace fell on Him, and by His stripes we are healed.',
      safeHomeActivity: {
        title: 'The Great Exchange Skit',
        materials: ['Two pieces of paper: one labeled "SIN & GUILT", one labeled "PEACE & RIGHTEOUSNESS"'],
        steps: [
          'Child holds the paper labeled "SIN & GUILT". Parent represents Jesus holding "PEACE & RIGHTEOUSNESS".',
          'Parent steps forward, takes the "SIN & GUILT" paper, and places "PEACE & RIGHTEOUSNESS" into the child’s hands.',
          'Explain: This is the Divine Exchange! Jesus took our sin and gave us His righteousness.'
        ],
        safetyTip: 'Gentle family roleplay.'
      },
      followUpQuestions: [
        {
          question: 'Whose punishment did Jesus take upon Himself?',
          sampleAnswer: 'Our punishment! The punishment that brought us peace.'
        },
        {
          question: 'What does "by His wounds we are healed" mean?',
          sampleAnswer: 'His suffering on the cross brings us spiritual salvation and wholeness for body and soul.'
        },
        {
          question: 'How should we respond to such an incredible sacrifice?',
          sampleAnswer: 'By surrendering our lives to Jesus, trusting Him, and living for His glory.'
        }
      ],
      parentChallenge: 'Ask your child to explain the "Great Exchange" to a sibling or friend today.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Divine Exchange (Isaiah 53:5)',
        duration: '5 min',
        story: 'Seven centuries before the Roman soldiers hammered nails into wood, the prophet Isaiah saw the cross in a vision. He saw the Messiah suffering—not for His own sins, because He was completely innocent—but for ours! "Yakwata ekifo kyaffe" (He took our place). The innocent died for the guilty. The King became the servant so that slaves could become sons and daughters of God.',
        keyConcept: 'On the cross, Jesus received what we deserved, so that we could receive what He deserved.',
        localExample: 'A brave older brother taking the blame or burden so his little sister does not weep.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Grasping Substitution',
        duration: '5 min',
        askFirst: 'Why did Jesus do this when He had all the angels in heaven at His command?',
        listenFor: 'Look for them understanding it was motivated purely by deep, unfathomable love.',
        explainSimply: '"Jesus didn’t stay on the cross because nails held Him; His love for you and me held Him there."',
        parentTip: 'Help them realize that salvation is a free gift because Jesus paid the full cost.'
      },
      step3_activity: {
        title: '5 min • Divine Exchange Diagram',
        duration: '5 min',
        gameOrExperimentName: 'The Two Columns of the Cross',
        instructions: [
          'Draw two columns on a paper.',
          'Column 1 (What Jesus Took): My sins, my guilt, my shame, punishment.',
          'Column 2 (What Jesus Gave Me): Forgiveness, peace, eternal life, righteousness.',
          'Draw an arrow from Column 1 to Column 2 through the Cross.'
        ],
        whatChildLearns: 'Solid theological understanding of penal substitution and divine grace.'
      },
      step4_quiz: {
        title: '5 min • Quiz & Memory Verse Check',
        duration: '5 min',
        questions: [
          {
            question: 'Complete Isaiah 53:5: "The punishment that brought us peace was upon him, and by his wounds we are ______."',
            options: ['Healed', 'Forgotten', 'Confused'],
            correctIndex: 0,
            explanation: 'Healed! By His stripes and wounds we are healed and made whole!'
          },
          {
            question: 'What theological word means taking another person’s place?',
            options: ['Substitution', 'Multiplication', 'Subtraction'],
            correctIndex: 0,
            explanation: 'Substitution! Jesus was our substitute on the cross.'
          },
          {
            question: 'Who prophesied the suffering of Jesus 700 years before it happened?',
            options: ['The Prophet Isaiah', 'King Nebuchadnezzar', 'Pontius Pilate'],
            correctIndex: 0,
            explanation: 'Isaiah! In Isaiah 53, he foresaw the suffering Savior.'
          }
        ]
      }
    },
    parentChallenge: 'Recite Isaiah 53:5 together around the dining table or before bed.',
    fiveMinuteBite: {
      title: '5-Minute Exchange Prayer',
      quickPrompt: 'Hold your hands out: left palm facing up, right palm facing up.',
      quickAction: 'Say: "Jesus took my sin (left hand), and gave me His righteousness and peace (right hand)!"'
    },
    whatsAppSnippet: `🛡️ *CHRISTIAN EDUCATION: Jesus Took Our Place (Ages 10-14)*
*Lesson 3:* The Divine Substitution
*Scripture:* Isaiah 53:5
*Core Truth:* He was pierced for our transgressions; by His wounds we are healed!
*Memory Verse:* Isaiah 53:5 📖`,
    audioNarrationText: 'He was pierced for our transgressions, crushed for our iniquities. The punishment that brought us peace was on Jesus, and by His wounds we are healed!'
  },

  {
    id: 'christian-victory-through-the-cross',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Sacrifice of Jesus',
    title: 'Victory Through the Cross',
    subtitle: '1 Corinthians 15:57: Jesus rose from the dead, defeating sin, Satan, and death forever',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Trophy',
    themeColor: 'from-amber-400 to-yellow-600',
    badgeName: 'Resurrection Victor',
    badgeDescription: 'Can recite 1 Cor 15:57 and explain how Jesus’ resurrection gives believers victory',
    keyScripture: '1 Corinthians 15:57 — "But thanks be to God! He gives us the victory through our Lord Jesus Christ."',
    memoryVerse: 'John 11:25 — "Jesus said to her, ‘I am the resurrection and the life. The one who believes in me will live, even though they die.’"',
    prayer: 'Praise You Lord Jesus, You are not in the grave! You rose on the third day with all power and authority in heaven and earth. Thank You that through You, I have victory over fear, sin, and death! Amen.',
    bibleTopic: 'Sacrifice of Jesus',
    objectives: [
      'Celebrate that Jesus did not stay dead, but rose triumphantly on the third day',
      'Understand how the resurrection guarantees our own eternal life and victory (1 Cor 15:57)',
      'Live courageously without fear of death, evil spirits, or despair'
    ],
    householdMaterials: ['Paper and bright colored crayons or markers'],
    dialectWords: [
      { localWord: 'Obuwanguzi', englishMeaning: 'Victory / Triumph', language: 'Luganda' },
      { localWord: 'Yesu azuukidde!', englishMeaning: 'Jesus is risen! (Easter proclamation)', language: 'Luganda' },
      { localWord: 'Yesu amefufuka!', englishMeaning: 'Jesus is risen!', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Show a sports trophy or winner’s medal. Ask: "Who won the greatest championship or victory in all of human history?"',
      simplifiedExplanation: 'Many great leaders, kings, and heroes in history died and their bones are still in the ground. But Jesus’ tomb is EMPTY! On Sunday morning, the stone was rolled away. Death could not hold the Son of God! Because Jesus rose from the dead, He conquered our biggest enemies: sin, Satan, and death. And He shares His victory with everyone who believes in Him.',
      safeHomeActivity: {
        title: 'Empty Tomb Sunrise Drawing',
        materials: ['Paper', 'Yellow, orange, and blue crayons'],
        steps: [
          'Draw an open cave with the stone rolled to the side.',
          'Draw bright yellow rays of sunrise coming out of the open tomb.',
          'Write in bold letters: "HE IS RISEN! • 1 Corinthians 15:57".',
          'Shout together: "Yesu azuukidde! (Jesus is risen!)"'
        ],
        safetyTip: 'Fun and creative art project.'
      },
      followUpQuestions: [
        {
          question: 'What happened on the third day after Jesus was crucified?',
          sampleAnswer: 'He rose from the dead in glory and power!'
        },
        {
          question: 'What victory did Jesus win for us according to 1 Corinthians 15:57?',
          sampleAnswer: 'Victory over sin, fear, and death through our Lord Jesus Christ.'
        },
        {
          question: 'How does Jesus’ victory help us when we are afraid or sick?',
          sampleAnswer: 'We know Jesus is alive, He is with us, and He is greater than any trouble.'
        }
      ],
      parentChallenge: 'Ask your child to greet family members with the joyful greeting: "Jesus is alive!" today.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Empty Tomb (1 Corinthians 15:57)',
        duration: '5 min',
        story: 'On Friday evening, the disciples wept. It looked like darkness had won. Soldiers sealed the heavy stone tomb. But Sunday morning brought an earthquake! The angel rolled back the stone, not to let Jesus out, but to show the world that He was already ALIVE! In churches across Uganda and Africa, people shout: "Kristo azuukidde! (Christ is risen!)". His resurrection is our guarantee that life wins over death!',
        keyConcept: 'The cross is the sacrifice; the empty tomb is the victory! Because He lives, we live too.',
        localExample: 'The rooster crowing at dawn signaling that the dark night is over and light has triumphed.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Walking in Victory',
        duration: '5 min',
        askFirst: 'Why don’t Christians need to live in terror of witchcraft, evil spirits, or death?',
        listenFor: 'Look for confidence that Jesus disarmed every dark power at the cross (Colossians 2:15).',
        explainSimply: '"Jesus has ALL power! When you have the resurrected King living in your heart, you walk in light and boldness."',
        parentTip: 'Remind your child that fear has no hold over a child of the living God.'
      },
      step3_activity: {
        title: '5 min • Victory Banner Creation',
        duration: '5 min',
        gameOrExperimentName: 'The Victor’s Crown',
        instructions: [
          'Draw a golden crown with 3 points.',
          'Inside the crown, write: "VICTORY IN CHRIST • 1 Cor 15:57".',
          'On the 3 points, write: Over Sin • Over Fear • Over Death.',
          'Hold up the crown and thank Jesus for winning the victory.'
        ],
        whatChildLearns: 'Rooting their daily confidence and courage in Christ’s historic resurrection.'
      },
      step4_quiz: {
        title: '5 min • Questions & Quiz',
        duration: '5 min',
        questions: [
          {
            question: 'What did 1 Corinthians 15:57 say God gives us through Jesus Christ?',
            options: ['The victory!', 'A life of constant fear', 'Defeat'],
            correctIndex: 0,
            explanation: 'Victory! Thanks be to God who gives us the victory through Jesus Christ!'
          },
          {
            question: 'What did Jesus declare in John 11:25?',
            options: ['I am the resurrection and the life', 'I am only a teacher', 'The grave is the end'],
            correctIndex: 0,
            explanation: 'I am the resurrection and the life! Whoever believes in Him will live forever.'
          },
          {
            question: 'What is the joyful Luganda Easter greeting celebrating the resurrection?',
            options: ['Yesu azuukidde! / Kristo azuukidde!', 'Oli otya', 'Webale'],
            correctIndex: 0,
            explanation: 'Yesu azuukidde! Christ is risen indeed!'
          }
        ]
      }
    },
    parentChallenge: 'Play or sing a joyful resurrection song together as a family today.',
    fiveMinuteBite: {
      title: '5-Minute Victory Shout',
      quickPrompt: 'Stand tall with hands raised.',
      quickAction: 'Proclaim: "Thanks be to God who gives us the victory through our Lord Jesus Christ! (1 Cor 15:57)"'
    },
    whatsAppSnippet: `🏆 *CHRISTIAN EDUCATION: Victory Through the Cross (Ages 10-14)*
*Lesson 4:* Victory Over Sin & Death!
*Scripture:* 1 Corinthians 15:57 • John 11:25
*Core Truth:* Jesus rose from the dead—He is alive, and we have victory in Him (Obuwanguzi)!
*Memory Verse:* John 11:25 📖`,
    audioNarrationText: 'Thanks be to God who gives us the victory through our Lord Jesus Christ! Jesus is alive, the tomb is empty, and we walk in His triumph.'
  },

  // =========================================================================
  // TOPIC 3: CONSEQUENCES OF HIS SACRIFICE (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-consequences-forgiveness',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Consequences of His Sacrifice',
    title: 'Forgiveness of Sins: Washed Clean',
    subtitle: 'Hebrews 9:22 & Ephesians 1:7: Without the shedding of blood there is no forgiveness—Jesus washed us clean',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-rose-500 to-indigo-600',
    badgeName: 'Cleansed by the Blood',
    badgeDescription: 'Can recite Ephesians 1:7 and explain how Jesus washes away all our sins',
    keyScripture: 'Hebrews 9:22 — "In fact, the law requires that nearly everything be cleansed with blood, and without the shedding of blood there is no forgiveness."',
    memoryVerse: 'Ephesians 1:7 — "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace."',
    prayer: 'Thank You Lord Jesus that Your blood washes away all my sins. When guilt tries to accuse me, help me remember that I am forgiven, clean, and loved in Your sight. Amen.',
    bibleTopic: 'Consequences of His Sacrifice',
    objectives: [
      'Understand that without Jesus’ blood, sin cannot be washed away (Hebrews 9:22)',
      'Discover that forgiveness means our sins are completely erased and remembered no more (Ephesians 1:7, Psalm 103:12)',
      'Experience the joy of a clean conscience through Christ'
    ],
    householdMaterials: ['A piece of paper', 'A pencil or crayon with an eraser'],
    dialectWords: [
      { localWord: 'Okusonyiyibwa ebibi', englishMeaning: 'Forgiveness of sins', language: 'Luganda' },
      { localWord: 'Omusaayi gwa Yesu', englishMeaning: 'The blood of Jesus', language: 'Luganda' },
      { localWord: 'Kusamehewa dhambi', englishMeaning: 'Forgiveness of sins', language: 'Swahili' },
      { localWord: 'Okusaasirwa', englishMeaning: 'Mercy / forgiveness', language: 'Runyankole' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Write the word "SIN" in big pencil letters on a sheet of paper. Then take an eraser and rub it until the word vanishes. Ask: "Where did the word go? What does Jesus do to our sins?"',
      simplifiedExplanation: 'When we tell lies, disobey our parents, or hurt others, sin leaves a dirty mark on our soul. No bath soap, rain, or river water can wash sin away. God’s Word says that without the shedding of blood, there is no forgiveness (Hebrews 9:22). But on the cross, Jesus shed His pure, sinless blood for us! When we ask Jesus to forgive us, His blood erases our sin completely—just like that eraser. God throws our sins as far as the east is from the west!',
      safeHomeActivity: {
        title: 'The Erased Sin & Torn Paper Activity',
        materials: ['Paper', 'Pencil with eraser'],
        steps: [
          'Have your child write one wrong thing they did or felt guilty about in pencil (e.g., "Argued with sibling").',
          'Vigorously erase the pencil marks together until the paper is white and clean again.',
          'Tear the blank spot out, crumble it, and throw it in the dustbin.',
          'Declare together: "Ephesians 1:7! In Jesus we have forgiveness of sins through His blood!"'
        ],
        safetyTip: 'Gentle, uplifting paper activity.'
      },
      followUpQuestions: [
        {
          question: 'What alone has the power to wash away our sins according to Hebrews 9:22 and Ephesians 1:7?',
          sampleAnswer: 'The blood of Jesus shed on the cross!'
        },
        {
          question: 'Does God hold our old forgiven sins against us when we repent?',
          sampleAnswer: 'No! Psalm 103:12 says He removes them as far as the east is from the west.'
        },
        {
          question: 'How should we treat others who wrong us now that Jesus forgave us?',
          sampleAnswer: 'We should forgive them just as Jesus forgave us!'
        }
      ],
      parentChallenge: 'Ask your child: "Is there any secret guilt or mistake you’ve been carrying?" Pray with them and remind them they are totally forgiven in Jesus.'
    },
    mission: {
      step1_learn: {
        title: '5 min • Washed White as Snow (Hebrews 9:22)',
        duration: '5 min',
        story: 'Imagine walking through red mud after heavy rain in Uganda. Your school uniform is covered in sticky red stains. No matter how much you wipe with your dry hands, the mud stains get worse! Sin is just like that sticky mud. But in Isaiah 1:18, God makes an astonishing promise: "Though your sins are like scarlet, they shall be as white as snow!" Jesus paid the penalty so that our record in heaven is 100% spotless. In Luganda, we call this "Okusonyiyibwa ebibi" (The total forgiveness of sins).',
        keyConcept: 'Forgiveness is not God pretending sin didn’t happen; it is Jesus paying the full price so you can walk free.',
        localExample: 'Washing a mud-stained white shirt in clean well water until it shines bright in the midday sun.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Erasing Guilt',
        duration: '5 min',
        askFirst: 'Why do people feel heavy and afraid when they do something wrong? What lifts that heavy weight?',
        listenFor: 'Look for them understanding how confession and Jesus’ blood lift the burden of guilt.',
        explainSimply: '"When you confess to Jesus, He doesn’t shout at you. He washes your heart clean and fills you with His peace."',
        parentTip: 'Share a gentle story of receiving God’s forgiveness in your own childhood.'
      },
      step3_activity: {
        title: '5 min • Clean Slate Paper Demonstration',
        duration: '5 min',
        gameOrExperimentName: 'Washed Clean Heart',
        instructions: [
          'Fold a sheet of paper.',
          'Write "SIN" in pencil, then completely erase it.',
          'Write in bold marker over the erased spot: "FORGIVEN • EPHESIANS 1:7".',
          'Draw a glowing cross beside it.'
        ],
        whatChildLearns: 'Grasping justification—being declared righteous and spotless before God.'
      },
      step4_quiz: {
        title: '5 min • Discussion & Questions',
        duration: '5 min',
        questions: [
          {
            question: 'What is required for the forgiveness of sins according to Hebrews 9:22?',
            options: ['The shedding of blood (fulfilled by Jesus)', 'Paying millions of shillings', 'Building a monument'],
            correctIndex: 0,
            explanation: 'Without the shedding of blood there is no forgiveness; Jesus shed His blood for our redemption!'
          },
          {
            question: 'According to Ephesians 1:7, what do we have in Christ through His blood?',
            options: ['Redemption and the forgiveness of sins', 'A driver\'s license', 'Super strength to lift trucks'],
            correctIndex: 0,
            explanation: 'In Him we have redemption through His blood, the forgiveness of sins!'
          },
          {
            question: 'What is the Luganda phrase for forgiveness of sins?',
            options: ['Okusonyiyibwa ebibi', 'Okugula emmotoka', 'Amazzi amakalu'],
            correctIndex: 0,
            explanation: 'Okusonyiyibwa ebibi means the forgiveness of sins!'
          }
        ]
      }
    },
    parentChallenge: 'Tonight, encourage your child to go to sleep with a peaceful heart knowing their slate is completely clean in Christ.',
    fiveMinuteBite: {
      title: '5-Minute Clean Slate Declaration',
      quickPrompt: 'Wipe your hands together like cleaning off dust.',
      quickAction: 'Say aloud: "Thank You Jesus! My sins are washed clean by Your blood! (Ephesians 1:7)"'
    },
    whatsAppSnippet: `🕊️ *CHRISTIAN EDUCATION: Consequences of His Sacrifice (Ages 10-14)*
*Lesson 1:* Forgiveness of Sins • Washed Clean
*Scripture:* Hebrews 9:22 • Ephesians 1:7
*Core Truth:* In Jesus we have redemption and total forgiveness through His blood (Okusonyiyibwa ebibi)!
*Memory Verse:* Ephesians 1:7 📖`,
    audioNarrationText: 'In Him we have redemption through His blood, the forgiveness of sins, in accordance with the riches of God’s grace! You are washed clean and free in Jesus.'
  },
  {
    id: 'christian-consequences-access-to-god',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Consequences of His Sacrifice',
    title: 'Access to God: The Torn Curtain',
    subtitle: 'Hebrews 10:19–20: How Jesus opened the direct doorway into God’s presence',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'DoorOpen',
    themeColor: 'from-blue-600 to-cyan-700',
    badgeName: 'Direct Access Ambassador',
    badgeDescription: 'Can explain how the torn temple veil allows any believer to pray directly to God',
    keyScripture: 'Hebrews 10:19–20 — "Therefore, brothers and sisters, since we have confidence to enter the Most Holy Place by the blood of Jesus, by a new and living way opened for us through the curtain, that is, his body."',
    memoryVerse: 'John 14:6 — "Jesus answered, ‘I am the way and the truth and the life. No one comes to the Father except through me.’"',
    prayer: 'Heavenly Father, what an honor that I don’t need an earthly priest or special building to talk to You! Through Jesus’ blood, the curtain is torn. I come boldly before Your throne of grace today. Amen.',
    bibleTopic: 'Consequences of His Sacrifice',
    objectives: [
      'Learn what the temple veil was in the Old Testament and how it separated people from God’s presence',
      'Discover that when Jesus died, the thick veil was torn from top to bottom by God',
      'Grow in prayer confidence, knowing we can talk directly to God 24/7 anywhere'
    ],
    householdMaterials: ['A piece of paper', 'A pen'],
    dialectWords: [
      { localWord: 'Okkirizibwa mu maaso ga Katonda', englishMeaning: 'Access into God’s presence', language: 'Luganda' },
      { localWord: 'Ekkubo ly’eggulu', englishMeaning: 'The way of heaven', language: 'Luganda' },
      { localWord: 'Njia ya uzima', englishMeaning: 'The way of life', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Show a locked padlock and a key. What happens when you have the right key? How did Jesus become our key to God?',
      simplifiedExplanation: 'In the Old Testament temple, there was a thick, heavy curtain that kept ordinary people out of the Most Holy Place. Only the High Priest could enter once a year. But the exact moment Jesus died on the cross, an earthquake struck Jerusalem, and God ripped that massive curtain in two from the top to the bottom! God was declaring: "The door is open! Anyone can now come directly to Me through Jesus!"',
      safeHomeActivity: {
        title: 'The Torn Curtain Illustration',
        materials: ['Paper', 'Pen'],
        steps: [
          'Draw a heavy curtain on a sheet of paper.',
          'Write on one side: "MAN IN SIN". Write on the other side: "HOLY GOD".',
          'Tear the curtain down the center with both hands.',
          'Explain: Jesus’ sacrifice removed the barrier forever!'
        ],
        safetyTip: 'Fun visual paper demonstration.'
      },
      followUpQuestions: [
        {
          question: 'What separated people from God’s presence before Jesus died?',
          sampleAnswer: 'Sin, represented by the thick temple veil / curtain.'
        },
        {
          question: 'What happened to the temple curtain when Jesus died on the cross?',
          sampleAnswer: 'It was torn in two from top to bottom by God!'
        },
        {
          question: 'What does this mean for our prayer life today?',
          sampleAnswer: 'We can talk directly to God anytime, anywhere with confidence through Jesus.'
        }
      ],
      parentChallenge: 'Remind your child: whenever they are scared in the middle of the night, they have direct access to pray to God immediately.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Curtain Torn in Two (Hebrews 10:19–20)',
        duration: '5 min',
        story: 'Historical records tell us the temple curtain in Jerusalem was as thick as a man’s hand and dozens of feet high. No human could tear it. Yet Matthew 27:51 says that when Jesus yielded up His spirit, the veil was torn from top to bottom — starting from heaven downward! God tore down the barrier. You don’t need an appointment, you don’t need money, you don’t need an intermediary. Through Jesus, you have 24/7 direct access to your Heavenly Father.',
        keyConcept: 'Jesus is our great High Priest who opened a new and living way directly to the Father.',
        localExample: 'A locked gate being thrown wide open so all family children can run into the warm living room.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Bold Prayer',
        duration: '5 min',
        askFirst: 'Do you ever feel like God is too far away in the sky to hear your quiet prayer in your room?',
        listenFor: 'Address any feelings that God is distant or angry.',
        explainSimply: '"The torn curtain means God is near. When you whisper in your heart: \'Lord Jesus\', He hears you instantly."',
        parentTip: 'Practice praying short, bold, conversational prayers together.'
      },
      step3_activity: {
        title: '5 min • Open Door Drawing',
        duration: '5 min',
        gameOrExperimentName: 'The Open Doorway of Grace',
        instructions: [
          'Draw an open door with rays of light streaming through.',
          'Above the door, write: "JESUS IS THE WAY • John 14:6".',
          'Inside the doorway, write: "Direct Access to God 24/7".',
          'Write one prayer request you want to bring directly to God right now.'
        ],
        whatChildLearns: 'Recognizing their spiritual privilege of uninterrupted communion with God.'
      },
      step4_quiz: {
        title: '5 min • Questions & Review',
        duration: '5 min',
        questions: [
          {
            question: 'What happened to the temple curtain when Jesus died on the cross?',
            options: ['It was torn in two from top to bottom', 'It caught on fire and disappeared', 'Nothing happened to it'],
            correctIndex: 0,
            explanation: 'It was torn in two from top to bottom, showing God opened the way!'
          },
          {
            question: 'What did Jesus declare in John 14:6?',
            options: ['I am the way and the truth and the life', 'I am one of many ways', 'There is no way to God'],
            correctIndex: 0,
            explanation: 'I am the way, the truth, and the life! No one comes to the Father except through Jesus.'
          },
          {
            question: 'According to Hebrews 10:19, how can we enter God’s presence?',
            options: ['With confidence by the blood of Jesus', 'With fear and trembling', 'Only if we pay a fine'],
            correctIndex: 0,
            explanation: 'With boldness and confidence through the blood of Jesus!'
          }
        ]
      }
    },
    parentChallenge: 'Have your child lead family prayer tonight, practicing coming boldly to God.',
    fiveMinuteBite: {
      title: '5-Minute Direct Line',
      quickPrompt: 'Hold your fingers like dialing a phone: 1-0-1-9 (Hebrews 10:19).',
      quickAction: 'Say: "The curtain is torn! God is listening to my voice right now!"'
    },
    whatsAppSnippet: `🚪 *CHRISTIAN EDUCATION: Consequences of His Sacrifice (Ages 10-14)*
*Lesson 2:* Access to God • The Torn Curtain
*Scripture:* Hebrews 10:19–20 • John 14:6
*Core Truth:* The veil is torn! You have 24/7 direct access to talk to God anytime.
*Memory Verse:* John 14:6 📖`,
    audioNarrationText: 'Therefore, brothers and sisters, we have confidence to enter the Most Holy Place by the blood of Jesus! The curtain is torn. Come boldly to God today.'
  },
  {
    id: 'christian-consequences-peace-with-god',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Consequences of His Sacrifice',
    title: 'Peace with God: From Enemies to Friends',
    subtitle: 'Romans 5:1 & Colossians 1:20: Sin made us enemies; Jesus restored peace and friendship with the Father',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'HeartHandshake',
    themeColor: 'from-emerald-500 to-teal-700',
    badgeName: 'Peacemaker in Christ',
    badgeDescription: 'Can recite Romans 5:1 and explain how Jesus made peace with God through the cross',
    keyScripture: 'Romans 5:1 — "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ."',
    memoryVerse: 'Colossians 1:20 — "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross."',
    prayer: 'Lord God, thank You that through Jesus Christ I am no longer an enemy or an outsider, but a beloved child and friend. Fill my heart with Your supernatural peace (Emirembe gya Katonda) that passes all understanding. Amen.',
    bibleTopic: 'Consequences of His Sacrifice',
    objectives: [
      'Understand how sin made mankind enemies of God, but Jesus reconciled us (Romans 5:1, 10)',
      'Learn what biblical peace (Shalom / Emirembe) means: wholeness, harmony, and friendship with God',
      'Live in peaceful confidence without fear of judgment or condemnation'
    ],
    householdMaterials: ['Two hands to shake!', 'A piece of paper and pencil'],
    dialectWords: [
      { localWord: 'Emirembe gya Katonda', englishMeaning: 'The peace of God', language: 'Luganda' },
      { localWord: 'Mukwano gwa Katonda', englishMeaning: 'Friend of God', language: 'Luganda' },
      { localWord: 'Amani ya Mungu', englishMeaning: 'Peace of God', language: 'Swahili' },
      { localWord: 'Obusingye', englishMeaning: 'Peace', language: 'Runyankole' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Ask: "What happens when two best friends get into a fight and stop talking to each other? How does it feel when they finally hug, say sorry, and become friends again?"',
      simplifiedExplanation: 'Before Jesus, sin was like a bitter fight that separated humanity from God. We were running in our own direction, disobeying God\'s laws, and living as His enemies. But Jesus didn\'t come to condemn us—He came to make peace! On the cross, Jesus shed His blood to reconcile us to God (Colossians 1:20). Reconcile means restoring broken friendship. Now, through faith in Jesus, we have peace with God (Romans 5:1). God is not angry with you; He is your loving Heavenly Father!',
      safeHomeActivity: {
        title: 'The Handshake of Peace Activity',
        materials: ['Two people (Parent + Child)'],
        steps: [
          'Stand facing each other looking stern or cross.',
          'Step forward, smile warmly, shake hands firmly, and say: "We have peace with God through Jesus Christ!"',
          'Discuss: What does having peace with God feel like inside your heart?',
          'Write Romans 5:1 on a small note card and keep it in your pocket.'
        ],
        safetyTip: 'Fun and interactive family connection.'
      },
      followUpQuestions: [
        {
          question: 'What broke our relationship and friendship with God in the first place?',
          sampleAnswer: 'Sin and our disobedience.'
        },
        {
          question: 'How did Jesus restore friendship and peace with God according to Colossians 1:20?',
          sampleAnswer: 'By shedding His blood on the cross to reconcile us.'
        },
        {
          question: 'What does Romans 5:1 say we have through our Lord Jesus Christ?',
          sampleAnswer: 'Peace with God!'
        }
      ],
      parentChallenge: 'Is there anyone in your home or school your child needs to make peace with? Guide them to offer an apology or kind word today.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Treaty of Eternal Peace (Romans 5:1)',
        duration: '5 min',
        story: 'In ancient kingdoms in Africa, when two kings had been at war and decided to make peace, they would gather the elders, perform a blood covenant ceremony, and exchange peace gifts. Neither kingdom would ever attack the other again! On the cross of Calvary, Jesus made the ultimate peace treaty between God and mankind. In Luganda we say: "Emirembe gya Katonda" (The peace of God). You do not have to hide from God in fear like Adam and Eve did in the bushes. You can run into His arms because you have peace with God!',
        keyConcept: 'Peace with God is not just a nice quiet feeling; it is a permanent legal status that you are reconciled and accepted in Christ.',
        localExample: 'Two neighbors who settled a land dispute shaking hands warmly at the village elders\' meeting.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Walking in Shalom',
        duration: '5 min',
        askFirst: 'When storms or bad news happen, why can a Christian still have deep peace inside?',
        listenFor: 'Look for understanding that peace comes from knowing God holds our future and loves us.',
        explainSimply: '"Peace is not the absence of trouble; it is the presence of Jesus in your boat!"',
        parentTip: 'Remind your child that God is always for them, never against them (Romans 8:31).'
      },
      step3_activity: {
        title: '5 min • Olive Branch & Dove of Peace',
        duration: '5 min',
        gameOrExperimentName: 'Shalom Card',
        instructions: [
          'Draw a flying dove with an olive branch in its beak.',
          'Write: "ROMANS 5:1 • PEACE WITH GOD".',
          'Write: "1. No condemnation • 2. Reconciled • 3. Forever loved."',
          'Give it to someone in your family with a warm handshake.'
        ],
        whatChildLearns: 'Internalizing reconciliation and the assurance of salvation.'
      },
      step4_quiz: {
        title: '5 min • Discussion & Questions',
        duration: '5 min',
        questions: [
          {
            question: 'According to Romans 5:1, what do we have with God since we have been justified by faith?',
            options: ['Peace with God through Jesus Christ', 'An ongoing argument', 'Ten tons of cement'],
            correctIndex: 0,
            explanation: 'We have peace with God through our Lord Jesus Christ!'
          },
          {
            question: 'How did Jesus make peace according to Colossians 1:20?',
            options: ['Through His blood shed on the cross', 'By building a stone wall', 'By hiding from everyone'],
            correctIndex: 0,
            explanation: 'By making peace through His blood shed on the cross!'
          },
          {
            question: 'What is the Luganda word for the peace of God?',
            options: ['Emirembe gya Katonda', 'Akatale', 'Entebe'],
            correctIndex: 0,
            explanation: 'Emirembe gya Katonda means the peace of God!'
          }
        ]
      }
    },
    parentChallenge: 'Tonight at bedtime, bless your child with: "The peace of God guard your heart and mind in Christ Jesus (Philippians 4:7)."',
    fiveMinuteBite: {
      title: '5-Minute Peace Declaration',
      quickPrompt: 'Place your hand over your heart.',
      quickAction: 'Say aloud: "I have peace with God through Jesus Christ! No fear, no shame, only shalom! (Romans 5:1)"'
    },
    whatsAppSnippet: `🕊️ *CHRISTIAN EDUCATION: Consequences of His Sacrifice (Ages 10-14)*
*Lesson 3:* Peace with God • From Enemies to Friends
*Scripture:* Romans 5:1 • Colossians 1:20
*Core Truth:* Justified by faith, we have peace with God (Emirembe gya Katonda) through Jesus!
*Memory Verse:* Romans 5:1 📖`,
    audioNarrationText: 'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ! Walk in His shalom and joy today.'
  },

  // =========================================================================
  // TOPIC 4: SALVATION (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-what-is-salvation',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Salvation',
    title: 'What is Salvation & Why Do We Need It?',
    subtitle: 'Romans 10:9–10 & Romans 3:23: Believing with the heart and confessing with the mouth',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'LifeBuoy',
    themeColor: 'from-emerald-500 to-green-700',
    badgeName: 'Saved by Grace',
    badgeDescription: 'Can recite Romans 10:9-10 and explain how to receive salvation through faith',
    keyScripture: 'Romans 10:9–10 — "If you declare with your mouth, ‘Jesus is Lord,’ and believe in your heart that God raised him from the dead, you will be saved."',
    memoryVerse: 'Acts 4:12 — "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved."',
    prayer: 'Lord Jesus, I believe in my heart that You died for my sins and rose from the dead. I confess with my mouth today that You are my Lord and Savior. Wash me clean and write my name in the Book of Life. Amen.',
    bibleTopic: 'Salvation',
    objectives: [
      'Understand what salvation means (being saved from sin and granted eternal life in Christ)',
      'Acknowledge that all have sinned and fall short of God’s glory (Romans 3:23)',
      'Know the simple, clear biblical path to salvation: Believe in your heart and confess with your mouth (Romans 10:9–10)'
    ],
    householdMaterials: ['Paper and pen'],
    dialectWords: [
      { localWord: 'Obulokozi', englishMeaning: 'Salvation', language: 'Luganda' },
      { localWord: 'Nzikiriza', englishMeaning: 'I believe / I put my faith', language: 'Luganda' },
      { localWord: 'Wokovu', englishMeaning: 'Salvation / Deliverance', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'If someone is drowning in deep water and a lifeguard throws a lifebuoy and pulls them ashore, what did the lifeguard just do? How does Jesus rescue us?',
      simplifiedExplanation: 'Salvation means RESCUE. Every human being has sinned—telling lies, being disobedient, feeling jealous or angry (Romans 3:23). Sin is like sinking in deep water because it separates us from a holy God. We cannot swim to safety by ourselves. Jesus is our divine Lifeguard! He extends His hand, and when we believe in our heart and confess that Jesus is Lord, He pulls us into safety, forgives our past, and gives us eternal life.',
      safeHomeActivity: {
        title: 'Before & After Salvation Mirror',
        materials: ['Paper folded in half', 'Pen'],
        steps: [
          'On the left side, write: "WITHOUT JESUS: In darkness, carry sin, fear of death, lonely."',
          'On the right side, write: "IN SALVATION: Sins washed clean, child of God, peace, eternal life with Jesus!"',
          'Have your child circle the right side with a big green checkmark!'
        ],
        safetyTip: 'Clear, reassuring comparison.'
      },
      followUpQuestions: [
        {
          question: 'Who has sinned and needs salvation according to Romans 3:23?',
          sampleAnswer: 'Everyone! All have sinned and fall short of the glory of God.'
        },
        {
          question: 'According to Romans 10:9, how does someone receive salvation?',
          sampleAnswer: 'By believing in your heart that God raised Jesus from the dead, and confessing with your mouth that Jesus is Lord.'
        },
        {
          question: 'Can any other name or person save us according to Acts 4:12?',
          sampleAnswer: 'No, salvation is found in no one else except Jesus Christ.'
        }
      ],
      parentChallenge: 'Ask your child gently: "Have you made the personal decision to ask Jesus to be the Lord of your life?" Pray the salvation prayer with them if they are ready.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The ABCs of Salvation (Romans 10:9–10)',
        duration: '5 min',
        story: 'Salvation is the greatest miracle in the universe! In Uganda, when someone is saved, we say: "Yalokose" (He or she received Obulokozi). It is not complicated. You don’t have to climb a high mountain or pass an entrance exam. The Bible gives us the ABCs: A = Admit you have sinned and need a Savior. B = Believe that Jesus died on the cross and God raised Him from the dead. C = Confess that Jesus is Lord of your life.',
        keyConcept: 'Salvation is a gift received by faith, not earned by human good works.',
        localExample: 'Reaching out your hand to grasp a rope thrown to rescue you from a pit.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: The Heart & Mouth Connection',
        duration: '5 min',
        askFirst: 'Why does Romans 10:9 mention both the "heart" and the "mouth"?',
        listenFor: 'Listen for understanding that faith is internal (heart belief) and expressed openly (mouth confession).',
        explainSimply: '"Faith starts inside your heart when you trust Jesus, and then you speak it boldly with your mouth. You are proud to belong to Jesus!"',
        parentTip: 'Encourage your child that becoming a Christian is the best decision they will ever make.'
      },
      step3_activity: {
        title: '5 min • The Salvation Prayer Card',
        duration: '5 min',
        gameOrExperimentName: 'Prayer of Faith',
        instructions: [
          'Write down the 3-sentence prayer:',
          '"1. Lord Jesus, I admit I need You and I turn from my sins.',
          '2. I believe You died for me and rose from the dead.',
          '3. I confess You as my Lord and Savior today."',
          'Sign your name and date at the bottom!'
        ],
        whatChildLearns: 'Internalizing the biblical confession of faith and eternal security in Christ.'
      },
      step4_quiz: {
        title: '5 min • Questions & Check',
        duration: '5 min',
        questions: [
          {
            question: 'What does Romans 10:9 say will happen if you confess Jesus is Lord and believe God raised Him from the dead?',
            options: ['You will be saved', 'You will become invisible', 'Nothing happens'],
            correctIndex: 0,
            explanation: 'You will be saved! That is God’s ironclad promise.'
          },
          {
            question: 'What does Romans 3:23 declare about all people?',
            options: ['All have sinned and fall short of God’s glory', 'Some people are born without sin', 'People don’t need God'],
            correctIndex: 0,
            explanation: 'All have sinned and fall short! That is why we all need Jesus.'
          },
          {
            question: 'According to Acts 4:12, where is salvation found?',
            options: ['In no one else except Jesus', 'In money and gold', 'In fame'],
            correctIndex: 0,
            explanation: 'Salvation is found in no one else! There is no other name under heaven given to mankind.'
          }
        ]
      }
    },
    parentChallenge: 'Read Luke 15:7 together and celebrate that heaven throws a party whenever one sinner repents!',
    fiveMinuteBite: {
      title: '5-Minute Salvation Confession',
      quickPrompt: 'Place your hand over your heart.',
      quickAction: 'Proclaim: "Jesus is my Lord! My heart believes, my mouth confesses, and my soul is saved!"'
    },
    whatsAppSnippet: `🛟 *CHRISTIAN EDUCATION: Salvation (Ages 10-14)*
*Lesson 1:* What is Salvation & Why We Need It
*Scripture:* Romans 10:9–10 • Romans 3:23 • Acts 4:12
*Core Truth:* Believe in your heart, confess with your mouth, and you will be saved (Obulokozi)!
*Memory Verse:* Acts 4:12 📖`,
    audioNarrationText: 'If you declare with your mouth that Jesus is Lord, and believe in your heart that God raised Him from the dead, you will be saved! Salvation is found in no one else.'
  },

  // =========================================================================
  // TOPIC 5: THE GRACE OF GOD (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-what-is-grace',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • The Grace of God',
    title: 'What is Grace? (G-R-A-C-E)',
    subtitle: 'Ephesians 2:8–9: God’s Riches At Christ’s Expense — The free gift we could never earn',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-amber-500 to-emerald-600',
    badgeName: 'Grace Scholar',
    badgeDescription: 'Can define grace (G-R-A-C-E) and explain why salvation is a gift not earned by works',
    keyScripture: 'Ephesians 2:8–9 — "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast."',
    memoryVerse: 'Romans 11:6 — "And if by grace, then it cannot be based on works; if it were, grace would no longer be grace."',
    prayer: 'Thank You Father for Your lavish grace (Ekisa). I could never work hard enough or be good enough to earn heaven. I receive Your forgiveness and love as a free gift through Jesus Christ. Amen.',
    bibleTopic: 'The Grace of God',
    objectives: [
      'Define grace: Unmerited, unearned favor from God (G.R.A.C.E. = God’s Riches At Christ’s Expense)',
      'Differentiate between earning wages vs receiving a free gift (Ephesians 2:8–9)',
      'Learn how grace transforms our daily life and empowers us to show grace to others'
    ],
    householdMaterials: ['A small box or paper wrapped like a gift', 'Paper and pen'],
    dialectWords: [
      { localWord: 'Ekisa kya Katonda', englishMeaning: 'The grace of God / Unearned favor', language: 'Luganda' },
      { localWord: 'Embabaazi za Ruhanga', englishMeaning: 'The grace of God', language: 'Runyankole' },
      { localWord: 'Neema ya Mungu', englishMeaning: 'The grace of God', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Hold up a wrapped gift box. Ask: "If someone hands you a birthday present, do you pull money out of your pocket to pay them for it? Why not?"',
      simplifiedExplanation: 'If you pay for it, it’s not a gift—it’s a purchase! Many religions teach that you have to work, sweat, and do thousands of good deeds to convince God to like you. But Christianity is different. The Bible teaches GRACE (Ekisa). Grace means God gives us all His riches and forgiveness completely free, because Jesus already paid the full price on the cross. We receive it through faith.',
      safeHomeActivity: {
        title: 'The G-R-A-C-E Acrostic Poster',
        materials: ['Paper', 'Colored markers'],
        steps: [
          'Write vertically down the page: G - R - A - C - E.',
          'Next to each letter write: God’s - Riches - At - Christ’s - Expense.',
          'Draw a cross at the bottom.',
          'Hang the poster on your study door or fridge.'
        ],
        safetyTip: 'Fun and memorable acrostic craft.'
      },
      followUpQuestions: [
        {
          question: 'What is grace in simple words?',
          sampleAnswer: 'God’s unearned favor and free gift of love and salvation.'
        },
        {
          question: 'Can we earn salvation by doing good works according to Ephesians 2:8–9?',
          sampleAnswer: 'No, it is the gift of God, not by works, so that no one can boast.'
        },
        {
          question: 'What does the acrostic G-R-A-C-E stand for?',
          sampleAnswer: 'God’s Riches At Christ’s Expense!'
        }
      ],
      parentChallenge: 'Think of someone in your home who made a mistake recently. Show them unearned grace and forgiveness today.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Gift You Cannot Buy (Ephesians 2:8–9)',
        duration: '5 min',
        story: 'If a billionaire bought the newest bicycle in town and handed you the keys as a pure gift, and you took out 100 shillings from your pocket and said: "Here is payment!", the billionaire would feel insulted! That is how silly it is when people think their good deeds can buy entrance to heaven. Salvation costs more than all the gold on Earth—it cost the life of God’s Son. In Luganda we call it "Ekisa kya Katonda" (The unmerited grace of God). You cannot earn it; you simply receive it with an open, grateful heart.',
        keyConcept: 'Grace = Getting the good things we do NOT deserve, because Jesus took the punishment we DID deserve.',
        localExample: 'Being given a delicious feast when you had nothing in your pocket to contribute.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Grace vs Works',
        duration: '5 min',
        askFirst: 'Does this mean good deeds don’t matter? Why do we do good things?',
        listenFor: 'Look for understanding: we do good works NOT to get saved, but BECAUSE we are already saved and love Jesus!',
        explainSimply: '"Good works are the fruit on the tree, not the root of the tree. Grace is the root; good deeds are the sweet fruit!"',
        parentTip: 'Help your child feel secure that God’s love for them does not fluctuate with their performance.'
      },
      step3_activity: {
        title: '5 min • Grace Acrostic Card',
        duration: '5 min',
        gameOrExperimentName: 'G.R.A.C.E. Bookmark',
        instructions: [
          'Take a rectangular card.',
          'Write in bold letters: G.R.A.C.E.',
          'Write: "God’s Riches At Christ’s Expense".',
          'At the bottom write: Ephesians 2:8–9: "Saved by grace through faith!"'
        ],
        whatChildLearns: 'Concrete understanding of the difference between legalism and biblical grace.'
      },
      step4_quiz: {
        title: '5 min • Review Quiz',
        duration: '5 min',
        questions: [
          {
            question: 'According to Ephesians 2:8–9, how are we saved?',
            options: ['By grace through faith', 'By our own strength and money', 'By being smarter than others'],
            correctIndex: 0,
            explanation: 'By grace through faith! It is the free gift of God.'
          },
          {
            question: 'Why does God save us by grace and not by works?',
            options: ['So that no one can boast or brag', 'Because He ran out of rules', 'Because works don’t exist'],
            correctIndex: 0,
            explanation: 'So that no one can boast! All glory belongs to Jesus alone.'
          },
          {
            question: 'What is the Luganda word for God’s unearned grace and mercy?',
            options: ['Ekisa', 'Enkoko', 'Akatale'],
            correctIndex: 0,
            explanation: 'Ekisa kya Katonda! God’s rich, unmerited grace.'
          }
        ]
      }
    },
    parentChallenge: 'Praise your child for an act of kindness today and remind them that God’s grace empowers us.',
    fiveMinuteBite: {
      title: '5-Minute Grace Reflection',
      quickPrompt: 'Spell out G-R-A-C-E with your fingers.',
      quickAction: 'Say aloud: "God’s Riches At Christ’s Expense! Thank You Lord for grace!"'
    },
    whatsAppSnippet: `✨ *CHRISTIAN EDUCATION: The Grace of God (Ages 10-14)*
*Lesson 1:* What is Grace?
*Scripture:* Ephesians 2:8–9 • Romans 11:6
*Core Truth:* G.R.A.C.E. = God's Riches At Christ's Expense! Saved by grace through faith.
*Memory Verse:* Romans 11:6 📖`,
    audioNarrationText: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God, not by works, so that no one can boast!'
  },

  // =========================================================================
  // TOPIC 6: FAITH (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-what-is-faith',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Faith',
    title: 'What is Faith? Trusting What We Cannot See',
    subtitle: 'Hebrews 11:1 & Romans 4:20–21: Confidence in what we hope for and assurance of what we do not see',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Compass',
    themeColor: 'from-amber-500 to-yellow-600',
    badgeName: 'Faith Overcomer',
    badgeDescription: 'Can recite Hebrews 11:1 and explain how to trust God’s promises like Abraham',
    keyScripture: 'Hebrews 11:1 — "Now faith is confidence in what we hope for and assurance about what we do not see."',
    memoryVerse: 'Hebrews 11:1 — "Now faith is confidence in what we hope for and assurance about what we do not see."',
    prayer: 'Lord, increase my faith (Okkiriza). Even when I cannot see the answer with my physical eyes, I choose to believe Your Word and trust Your promises with my whole heart. Amen.',
    bibleTopic: 'Faith',
    objectives: [
      'Understand the definition of biblical faith from Hebrews 11:1',
      'Learn from Abraham’s example of believing God’s promises even when circumstances look impossible (Romans 4:20–21)',
      'Apply faith to school exams, family health, and personal courage'
    ],
    householdMaterials: ['A blindfold or scarf (for trust walk)'],
    dialectWords: [
      { localWord: 'Okkiriza', englishMeaning: 'Faith / Believing', language: 'Luganda' },
      { localWord: 'Okwesiga Katonda', englishMeaning: 'Trusting God', language: 'Luganda' },
      { localWord: 'Imani', englishMeaning: 'Faith / Belief', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Show two small boxes: one open and empty, one closed. Ask: "Can you believe there is something valuable inside the closed box even if your eyes cannot see it yet?"',
      simplifiedExplanation: 'We use a kind of natural faith every day: when you sit on a chair, you have faith it won’t collapse! When you flip a light switch, you trust invisible electricity flows. Biblical faith (Okkiriza) is even stronger: it is trusting what God says in His Word even when we cannot see the physical outcome yet. Just as Abraham believed God would give him a son in his old age, we trust God’s promises because God never lies.',
      safeHomeActivity: {
        title: 'The Blindfold Trust Walk',
        materials: ['A scarf or clean handkerchief'],
        steps: [
          'Gently blindfold your child in a safe room without obstacles.',
          'Take them by the hand and guide them 5 steps forward, then 3 steps left.',
          'Take off the blindfold and ask: "Why weren’t you scared to walk?" (Answer: Because I trust you!).',
          'Explain: Walking with God is just like that—He holds our hand through every unknown day.'
        ],
        safetyTip: 'Walk slowly in a clear room with no sharp corners.'
      },
      followUpQuestions: [
        {
          question: 'What is faith according to Hebrews 11:1?',
          sampleAnswer: 'Confidence in what we hope for and assurance about what we do not see.'
        },
        {
          question: 'Did Abraham doubt God’s promise according to Romans 4:20–21?',
          sampleAnswer: 'No, he was strengthened in his faith and gave glory to God, fully persuaded God had power to do what He promised.'
        },
        {
          question: 'Who should we put our faith in?',
          sampleAnswer: 'In the Lord God and His Word, not in human strength alone.'
        }
      ],
      parentChallenge: 'Find one promise in the Bible today (e.g. Philippians 4:19) and stand on it in prayer together.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Eyes of the Heart (Hebrews 11:1)',
        duration: '5 min',
        story: 'Have you ever seen the wind? You can see the banana leaves swaying, feel the cool breeze on your face, and watch clothes drying on the line, but nobody has ever seen the wind itself! You know it exists by what it does. Faith is like that. We cannot see God with physical eyes, but we see His works, we hear His voice in Scripture, and we feel His peace in our hearts. Faith takes God at His Word and steps forward boldly.',
        keyConcept: 'Faith is not blind; it is trusting a Father who has never broken a promise.',
        localExample: 'A farmer planting maize seeds deep in the soil in faith that rain will make them sprout.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Trusting in the Dark',
        duration: '5 min',
        askFirst: 'What should you do when you feel afraid of the dark, or worried about an upcoming exam?',
        listenFor: 'Listen for them turning to prayer and quoting Scripture rather than panicking.',
        explainSimply: '"Faith doesn’t mean you never feel butterflies in your stomach. Faith means you pray and move forward because God is with you."',
        parentTip: 'Share a story when God answered a prayer after you had to wait in faith.'
      },
      step3_activity: {
        title: '5 min • The Rainbow Promise Drawing',
        duration: '5 min',
        gameOrExperimentName: 'God Keeps Every Promise',
        instructions: [
          'Draw a vibrant rainbow across your page.',
          'Under the rainbow write: "God Always Keeps His Promises • Romans 4:21".',
          'Write: "Faith = Confidence in what we hope for (Heb 11:1)".',
          'Color each stripe with a cheerful color.'
        ],
        whatChildLearns: 'Connecting faith to the unwavering character and integrity of God.'
      },
      step4_quiz: {
        title: '5 min • Questions & Quiz',
        duration: '5 min',
        questions: [
          {
            question: 'What is faith according to Hebrews 11:1?',
            options: ['Confidence in what we hope for and assurance of what we do not see', 'Guessing and wishing', 'Only believing what you can touch'],
            correctIndex: 0,
            explanation: 'Confidence in what we hope for and assurance of what we do not see!'
          },
          {
            question: 'How did Abraham respond to God’s promise in Romans 4:20?',
            options: ['He was strengthened in faith, giving glory to God', 'He ran away to Egypt', 'He gave up and cried'],
            correctIndex: 0,
            explanation: 'He was strengthened in faith and fully persuaded God had power to do it!'
          },
          {
            question: 'What is the Luganda word for faith and belief?',
            options: ['Okkiriza', 'Okwagala', 'Amatu'],
            correctIndex: 0,
            explanation: 'Okkiriza means faith and active believing trust.'
          }
        ]
      }
    },
    parentChallenge: 'Remind your child during school this week: "Walk by faith, not by sight!" (2 Cor 5:7).',
    fiveMinuteBite: {
      title: '5-Minute Faith Declaration',
      quickPrompt: 'Stand strong on both feet.',
      quickAction: 'Proclaim: "I walk by faith and not by sight! (2 Cor 5:7) God is with me!"'
    },
    whatsAppSnippet: `🧭 *CHRISTIAN EDUCATION: Faith (Ages 10-14)*
*Lesson 1:* What is Faith?
*Scripture:* Hebrews 11:1 • Romans 4:20–21
*Core Truth:* Faith is confidence in what we hope for (Okkiriza). God always keeps His promises!
*Memory Verse:* Hebrews 11:1 📖`,
    audioNarrationText: 'Now faith is confidence in what we hope for and assurance about what we do not see. Trust in God with all your heart today!'
  },

  // =========================================================================
  // TOPIC 7: NEW CREATURE (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-new-creature',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • New Creature',
    title: 'The New Creature: Old Things Have Passed Away',
    subtitle: '2 Corinthians 5:17 & Galatians 5:22–23: A brand-new identity and the fruit of the Spirit',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-teal-500 to-emerald-700',
    badgeName: 'Transformed in Christ',
    badgeDescription: 'Can recite 2 Cor 5:17 and list the fruit of the Spirit displayed by a new creature',
    keyScripture: '2 Corinthians 5:17 — "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"',
    memoryVerse: '2 Corinthians 5:17 — "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"',
    prayer: 'Thank You Lord Jesus for making me a brand-new creation (Ekitonde Ekiggya). The old habits of lying, anger, and fear are gone. Fill me with Your Holy Spirit to produce love, joy, peace, and patience everywhere I go. Amen.',
    bibleTopic: 'New Creature',
    objectives: [
      'Understand that salvation does not just renovate us—it makes us a brand-new spiritual creation (2 Cor 5:17)',
      'Learn to leave behind old sinful habits (lying, jealousy, cursing) like taking off dirty clothes (Eph 4:22–24)',
      'Cultivate the fruit of the Spirit in daily family and school life (Galatians 5:22–23)'
    ],
    householdMaterials: ['An old dirty cloth and a clean white cloth or paper'],
    dialectWords: [
      { localWord: 'Ekitonde ekiggya', englishMeaning: 'New creature / New creation', language: 'Luganda' },
      { localWord: 'Kiumbe kipya', englishMeaning: 'New creature', language: 'Swahili' },
      { localWord: 'Kwo manyen', englishMeaning: 'New life in Christ', language: 'Acholi' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Show a caterpillar and a butterfly picture (or old worn shoes vs brand new shoes). Which one is more beautiful? What transformed the caterpillar into a butterfly?',
      simplifiedExplanation: 'When a caterpillar enters a cocoon, it doesn’t just get a new coat of paint—it is completely transformed into a butterfly that can soar through the sky! That is what happens when you receive Jesus. 2 Corinthians 5:17 says you become a NEW CREATION (Ekitonde Ekiggya). The old life of guilt, lies, and disobedience has passed away. The new life of love, joy, and purpose is here!',
      safeHomeActivity: {
        title: 'Old Me vs New Me Drawing',
        materials: ['Paper folded in half', 'Pens'],
        steps: [
          'On the left column: Draw a caterpillar or dirty shirt labeled "OLD LIFE" (bad words, anger, fear).',
          'On the right column: Draw a bright butterfly or clean robe labeled "NEW LIFE IN JESUS" (love, truth, kindness).',
          'Write 2 Corinthians 5:17 across the top.'
        ],
        safetyTip: 'Fun and illustrative art activity.'
      },
      followUpQuestions: [
        {
          question: 'What happens to someone who is in Christ according to 2 Corinthians 5:17?',
          sampleAnswer: 'They become a new creation! The old has gone, the new is here.'
        },
        {
          question: 'What are examples of old habits we should leave behind?',
          sampleAnswer: 'Lying, stealing, fighting, foul language, and selfishness.'
        },
        {
          question: 'What fruit should grow in the life of a new creature (Galatians 5:22–23)?',
          sampleAnswer: 'Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.'
        }
      ],
      parentChallenge: 'Notice a positive change in your child’s behavior this week and praise them: "I see Jesus shining in you!"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Butterfly of Grace (2 Cor 5:17)',
        duration: '5 min',
        story: 'If you take a pig and wash it with lavender soap and put a gold ribbon on its neck, what will it do when it sees mud? It will jump right back in, because its nature is still a pig! But God doesn’t just wash our outside—He gives us a NEW HEART and a NEW NATURE! In Christ, you are "Ekitonde Ekiggya". You have the DNA of heaven inside you. You start loving what God loves and turning away from what hurts His heart.',
        keyConcept: 'We don’t try to act like Christians in our own strength; Christ lives His life through our new nature.',
        localExample: 'A seed breaking out of the soil and blooming into a fruitful mango tree.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Growing the Fruit',
        duration: '5 min',
        askFirst: 'What fruit of the Spirit (Galatians 5:22) is hardest for you: patience, kindness, or self-control?',
        listenFor: 'Listen for self-awareness and remind them the Holy Spirit produces this fruit as we stay close to Jesus.',
        explainSimply: '"A branch doesn’t sweat to make mangoes; it just stays connected to the tree. Stay connected to Jesus in prayer and the fruit will grow naturally."',
        parentTip: 'Be vulnerable about an area where the Holy Spirit is growing patience in you as well.'
      },
      step3_activity: {
        title: '5 min • Fruit of the Spirit Tree',
        duration: '5 min',
        gameOrExperimentName: 'The 9 Fruits of the Spirit',
        instructions: [
          'Draw a fruit tree with 9 pieces of ripe fruit.',
          'Label each fruit: Love, Joy, Peace, Patience, Kindness, Goodness, Faithfulness, Gentleness, Self-Control.',
          'Pick one fruit to pray for and practice at home today.'
        ],
        whatChildLearns: 'Understanding that new life in Christ is proven by character and spiritual fruit.'
      },
      step4_quiz: {
        title: '5 min • Questions & Memory Verse',
        duration: '5 min',
        questions: [
          {
            question: 'What does 2 Corinthians 5:17 declare about anyone who is in Christ?',
            options: ['They are a new creation! The old has gone, the new is here', 'They stay the exact same person', 'They become older'],
            correctIndex: 0,
            explanation: 'The new creation has come! Old things have passed away, all things become new.'
          },
          {
            question: 'Which of the following is a fruit of the Spirit in Galatians 5:22–23?',
            options: ['Love, joy, and peace', 'Anger and fighting', 'Jealousy and boasting'],
            correctIndex: 0,
            explanation: 'Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control!'
          },
          {
            question: 'What is the Luganda phrase for "New Creature"?',
            options: ['Ekitonde ekiggya', 'Omwana omutono', 'Ennyumba empya'],
            correctIndex: 0,
            explanation: 'Ekitonde ekiggya means a brand new creation!'
          }
        ]
      }
    },
    parentChallenge: 'Ask each child to pick one fruit of the Spirit to champion this week at home.',
    fiveMinuteBite: {
      title: '5-Minute New Creature Mirror',
      quickPrompt: 'Look in a mirror or cup of water.',
      quickAction: 'Smile and declare: "I am a new creation in Christ! Old things are gone, today is full of God’s glory!"'
    },
    whatsAppSnippet: `🦋 *CHRISTIAN EDUCATION: New Creature (Ages 10-14)*
*Lesson 1:* The New Creation in Christ
*Scripture:* 2 Corinthians 5:17 • Galatians 5:22–23
*Core Truth:* Old things have passed away! We are new creatures (Ekitonde Ekiggya) producing fruit.
*Memory Verse:* 2 Corinthians 5:17 📖`,
    audioNarrationText: 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! Walk in the freedom of your new identity today.'
  },

  // =========================================================================
  // TOPIC 8: ETERNAL LIFE (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-eternal-life',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Eternal Life',
    title: 'Eternal Life: Knowing God Forever',
    subtitle: 'John 17:3 & Romans 6:23: Eternal life is not just living forever—it is knowing God right now and into eternity',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Crown',
    themeColor: 'from-yellow-500 to-amber-700',
    badgeName: 'Citizen of Eternity',
    badgeDescription: 'Can recite John 17:3 and explain that eternal life is an intimate relationship with God',
    keyScripture: 'John 17:3 — "Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent."',
    memoryVerse: 'Romans 6:23 — "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord."',
    prayer: 'Thank You Lord that my life does not end with this physical earth. You have given me eternal life (Obulamu Obutaggwawo) through Jesus Christ. Help me walk closely with You every day with joy and hope. Amen.',
    bibleTopic: 'Eternal Life',
    objectives: [
      'Learn what eternal life really means according to Jesus’ definition in John 17:3 (knowing God)',
      'Understand that eternal life starts the moment we believe, not just after we die',
      'Contrast the wages of sin (death) with the free gift of God (eternal life in Romans 6:23)'
    ],
    householdMaterials: ['Paper and pen'],
    dialectWords: [
      { localWord: 'Obulamu obutaggwawo', englishMeaning: 'Everlasting / eternal life', language: 'Luganda' },
      { localWord: 'Amagara agatahwaho', englishMeaning: 'Eternal life', language: 'Runyankole' },
      { localWord: 'Uzima wa milele', englishMeaning: 'Eternal life', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'What is the longest thing you can imagine? A thousand years? A million years? What does FOREVER mean?',
      simplifiedExplanation: 'Everything on this earth has an expiration date: bread gets moldy, phones run out of battery, clothes tear, and physical bodies grow old. But God has put eternity into our hearts! Jesus said in John 17:3 that eternal life is knowing the only true God and Jesus Christ. It is an intimate, unbroken friendship with God that starts the day you receive Jesus and continues forever in heaven where there is no more pain, crying, or death.',
      safeHomeActivity: {
        title: 'The Golden Road to Eternity Drawing',
        materials: ['Paper', 'Yellow / gold crayon or pen'],
        steps: [
          'Draw a path leading up a mountain toward a radiant sunrise.',
          'Along the path, write: "John 17:3 — To know God and Jesus Christ."',
          'At the destination, draw a golden crown labeled "ETERNAL LIFE • Romans 6:23".',
          'Write 3 people in your family you want to see walking with Jesus forever.'
        ],
        safetyTip: 'Inspiring, positive drawing.'
      },
      followUpQuestions: [
        {
          question: 'How did Jesus define eternal life in John 17:3?',
          sampleAnswer: 'To know the only true God and Jesus Christ whom He sent.'
        },
        {
          question: 'Is eternal life earned by human wages or given as a gift (Romans 6:23)?',
          sampleAnswer: 'It is the free gift of God in Christ Jesus our Lord.'
        },
        {
          question: 'What is heaven like according to Revelation 21?',
          sampleAnswer: 'A place of joy, worship, and light with God, where there are no tears or pain.'
        }
      ],
      parentChallenge: 'Talk with your child about heaven with joy and hope, answering any questions they have about the future.'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Greatest Gift (Romans 6:23)',
        duration: '5 min',
        story: 'A wage is what you get paid for working. If you work all week, your employer owes you a wage. Romans 6:23 says the "wages of sin is death" — that is what sin earned us. BUT the verse doesn’t end there! "BUT the gift of God is eternal life in Christ Jesus our Lord." You don’t earn a gift. In Luganda, eternal life is called "Obulamu Obutaggwawo" (Life without end). It means death has lost its sting, and we are safe in God’s presence forever.',
        keyConcept: 'Eternal life is not just quantity of time (forever); it is quality of life (knowing God).',
        localExample: 'A fresh spring of pure water that never dries up even in the longest drought.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Hope of Heaven',
        duration: '5 min',
        askFirst: 'Does thinking about forever make you nervous or excited? Why can believers be excited?',
        listenFor: 'Look for joy and peace that Jesus prepares a place for us (John 14:2–3).',
        explainSimply: '"Heaven is not boring clouds; it is vibrant, filled with joy, music, purpose, and the presence of Jesus who loves us."',
        parentTip: 'Reassure them that their future is bright and secure in God’s hands.'
      },
      step3_activity: {
        title: '5 min • Eternity Symbol Craft',
        duration: '5 min',
        gameOrExperimentName: 'The Infinity Loop of Life',
        instructions: [
          'Draw an infinity symbol (figure 8 on its side: ∞).',
          'Color one loop yellow (God’s presence) and one loop blue (Our fellowship).',
          'Write inside: "John 17:3 • Obulamu Obutaggwawo".',
          'Say a prayer thanking Jesus for eternal security.'
        ],
        whatChildLearns: 'Grasping the eternal nature of salvation and their citizenship in heaven.'
      },
      step4_quiz: {
        title: '5 min • Questions & Review',
        duration: '5 min',
        questions: [
          {
            question: 'Complete Romans 6:23: "For the wages of sin is death, but the gift of God is ______."',
            options: ['Eternal life in Christ Jesus our Lord', 'A new bicycle', 'A temporary pass'],
            correctIndex: 0,
            explanation: 'Eternal life in Christ Jesus our Lord! A free gift of boundless grace.'
          },
          {
            question: 'What did Jesus say eternal life is in John 17:3?',
            options: ['Knowing the only true God and Jesus Christ', 'Reading 1,000 books', 'Living on an island'],
            correctIndex: 0,
            explanation: 'That they know You, the only true God, and Jesus Christ whom You have sent!'
          },
          {
            question: 'What is the Luganda phrase for eternal, unending life?',
            options: ['Obulamu obutaggwawo', 'Ettaka', 'Amabaati'],
            correctIndex: 0,
            explanation: 'Obulamu obutaggwawo means life without end!'
          }
        ]
      }
    },
    parentChallenge: 'Read Revelation 21:3–4 together before bedtime and thank God for the hope of heaven.',
    fiveMinuteBite: {
      title: '5-Minute Eternity Reflection',
      quickPrompt: 'Draw a circle in the air with your finger (no beginning, no end).',
      quickAction: 'Declare: "My life in Jesus has no end! (John 17:3) I belong to eternity!"'
    },
    whatsAppSnippet: `👑 *CHRISTIAN EDUCATION: Eternal Life (Ages 10-14)*
*Lesson 1:* What is Eternal Life?
*Scripture:* John 17:3 • Romans 6:23
*Core Truth:* The gift of God is eternal life (Obulamu Obutaggwawo)—knowing God forever!
*Memory Verse:* Romans 6:23 📖`,
    audioNarrationText: 'Now this is eternal life: that they know You, the only true God, and Jesus Christ whom You have sent. The gift of God is eternal life in Christ Jesus our Lord!'
  },

  // =========================================================================
  // TOPIC 9: THE HOLY SPIRIT & GIFTS OF THE SPIRIT (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-who-is-the-holy-spirit',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • The Holy Spirit',
    title: 'Who Is the Holy Spirit & His Supernatural Power?',
    subtitle: 'John 14:16–17 & Acts 1:8: The Helper, Comforter, and Source of supernatural power',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Flame',
    themeColor: 'from-amber-500 to-red-600',
    badgeName: 'Spirit-Empowered Witness',
    badgeDescription: 'Can recite Acts 1:8 and describe how the Holy Spirit helps and empowers believers',
    keyScripture: 'Acts 1:8 — "You will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth."',
    memoryVerse: 'John 14:26 — "The Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you."',
    prayer: 'Holy Spirit, welcome in my life! You are my Helper, Teacher, and Friend. Fill me with Your supernatural power so I can live boldly for Jesus, speak the truth with love, and shine as His witness. Amen.',
    bibleTopic: 'The Holy Spirit',
    objectives: [
      'Understand that the Holy Spirit is a Person (part of the Holy Trinity: Father, Son, Holy Spirit)',
      'Learn His roles as Helper (Paraclete), Teacher, Comforter, and Guide (John 14:16–17, 26)',
      'Discover that the Holy Spirit gives power to be bold witnesses for Jesus (Acts 1:8)'
    ],
    householdMaterials: ['A torch / flashlight with batteries', 'Paper and pen'],
    dialectWords: [
      { localWord: 'Omwoyo Omutukuvu', englishMeaning: 'The Holy Spirit', language: 'Luganda' },
      { localWord: 'Amaanyi g’Omwoyo', englishMeaning: 'The power of the Spirit', language: 'Luganda' },
      { localWord: 'Roho Mtakatifu', englishMeaning: 'The Holy Spirit', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Take out a torch or flashlight. Remove the batteries and try to switch it on. What happens? What gives power to the flashlight? What gives supernatural power to a believer?',
      simplifiedExplanation: 'Without batteries, a flashlight is just a piece of plastic or metal that cannot shine in the dark. In the same way, we cannot live a victorious Christian life on our own willpower. Jesus promised in John 14 that He would not leave us as orphans—He sent the Holy Spirit (Omwoyo Omutukuvu)! The Holy Spirit is God living inside every believer. He gives us power (Acts 1:8) to speak the truth, resist temptation, comfort us when we are sad, and shine as bright lights in the world.',
      safeHomeActivity: {
        title: 'The Trinity & Torch Demonstration',
        materials: ['A flashlight with batteries', 'Paper'],
        steps: [
          'Show the torch without batteries (no light).',
          'Put the batteries in and click it on (bright beam!).',
          'Explain: Batteries = The Holy Spirit inside us giving us power to shine!',
          'Draw three overlapping circles on paper and label them: Father, Son, Holy Spirit (One God in Three Persons).'
        ],
        safetyTip: 'Torch battery demonstration safe for all ages.'
      },
      followUpQuestions: [
        {
          question: 'Who is the Holy Spirit? Is He a thing, or a Person?',
          sampleAnswer: 'He is a Person, God Himself, the third Person of the Trinity!'
        },
        {
          question: 'What does the Holy Spirit give us according to Acts 1:8?',
          sampleAnswer: 'Power to be bold witnesses for Jesus Christ!'
        },
        {
          question: 'What are two roles of the Holy Spirit mentioned in John 14:26?',
          sampleAnswer: 'He teaches us all things and reminds us of Jesus’ words.'
        }
      ],
      parentChallenge: 'Whenever your child faces a difficult test, fear, or tough friend situation this week, pray: "Holy Spirit, give [Name] wisdom and courage right now!"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Divine Power Within (Acts 1:8)',
        duration: '5 min',
        story: 'Before Pentecost, the disciples were hiding behind locked doors, trembling with fear. Peter had denied knowing Jesus three times. But on the Day of Pentecost, the Holy Spirit came like a rushing mighty wind and tongues of fire! Peter walked right out onto the streets of Jerusalem, preached with supernatural boldness, and 3,000 people were saved in one day! What changed? The Holy Spirit (Omwoyo Omutukuvu) filled him with power. That same Holy Spirit lives in you today!',
        keyConcept: 'The Holy Spirit does not just visit from the outside; He lives inside every believer to guide, comfort, and empower them.',
        localExample: 'A smartphone battery charged to 100%, powering the screen, phone calls, and light in the dark.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Listening to the Spirit',
        duration: '5 min',
        askFirst: 'Have you ever felt a gentle whisper in your heart saying: "Don’t tell that lie," or "Go apologize and share your snack"? Who was that?',
        listenFor: 'Look for recognition of the gentle conviction and guidance of the Holy Spirit.',
        explainSimply: '"The Holy Spirit speaks in a still, small voice. When we obey His promptings, our lives stay on the right path."',
        parentTip: 'Encourage your child to practice asking the Holy Spirit for wisdom before reading schoolbooks.'
      },
      step3_activity: {
        title: '5 min • Trinity & Flame Shield',
        duration: '5 min',
        gameOrExperimentName: 'The Flame of Pentecost',
        instructions: [
          'Draw three interlocking circles (Father, Son, Holy Spirit).',
          'Draw a golden flame in the center labeled: "ACTS 1:8 • POWER".',
          'Write down 3 things the Holy Spirit helps you do: 1. Pray, 2. Tell truth, 3. Love enemies.',
          'Hold the paper and pray: "Holy Spirit, fill me afresh today!"'
        ],
        whatChildLearns: 'Appreciating the person, presence, and empowerment of the Holy Spirit.'
      },
      step4_quiz: {
        title: '5 min • Questions & Quiz',
        duration: '5 min',
        questions: [
          {
            question: 'What did Jesus promise in Acts 1:8 when the Holy Spirit comes on us?',
            options: ['You will receive power to be My witnesses', 'You will receive a pot of gold', 'You will forget everything'],
            correctIndex: 0,
            explanation: 'You will receive power when the Holy Spirit comes on you, and you will be My witnesses!'
          },
          {
            question: 'What is the Holy Spirit called in John 14:26?',
            options: ['The Advocate and Teacher', 'The Silent One', 'A wandering cloud'],
            correctIndex: 0,
            explanation: 'The Advocate / Helper and Teacher who reminds us of Jesus’ words!'
          },
          {
            question: 'What is the Luganda name for the Holy Spirit?',
            options: ['Omwoyo Omutukuvu', 'Omusana', 'Ekyoto'],
            correctIndex: 0,
            explanation: 'Omwoyo Omutukuvu means the Holy Spirit!'
          }
        ]
      }
    },
    parentChallenge: 'Take 2 minutes of quiet prayer today asking the Holy Spirit to lead and protect your household.',
    fiveMinuteBite: {
      title: '5-Minute Holy Spirit Invocation',
      quickPrompt: 'Take a deep breath of fresh air.',
      quickAction: 'Remember the Hebrew and Greek word for Spirit is "Pneuma / Ruach" (Breath). Whisper: "Holy Spirit, fill my life today!"'
    },
    whatsAppSnippet: `🔥 *CHRISTIAN EDUCATION: The Holy Spirit (Ages 10-14)*
*Lesson 1:* Who Is the Holy Spirit & His Supernatural Power?
*Scripture:* Acts 1:8 • John 14:16–17, 26
*Core Truth:* The Holy Spirit (Omwoyo Omutukuvu) is God our Helper, giving us power to be bold witnesses!
*Memory Verse:* John 14:26 📖`,
    audioNarrationText: 'You will receive power when the Holy Spirit comes on you, and you will be My witnesses to the ends of the earth! The Holy Spirit is your Helper and Friend.'
  },

  // =========================================================================
  // TOPIC 10: SPIRIT, SOUL, AND BODY (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-spirit-soul-body',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Spirit, Soul & Body',
    title: 'Spirit, Soul, and Body: How God Made You',
    subtitle: '1 Thessalonians 5:23 & Romans 12:2: Understanding our three parts and renewing our mind',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Layers',
    themeColor: 'from-indigo-500 to-purple-700',
    badgeName: 'Whole Person Believer',
    badgeDescription: 'Can identify the 3 parts of human beings (spirit, soul, body) and explain mind renewal',
    keyScripture: '1 Thessalonians 5:23 — "May God himself, the God of peace, sanctify you through and through. May your whole spirit, soul and body be kept blameless at the coming of our Lord Jesus Christ."',
    memoryVerse: 'Romans 12:2 — "Do not conform to the pattern of this world, but be transformed by the renewing of your mind."',
    prayer: 'Lord, thank You for creating me with a spirit to fellowship with You, a soul with thoughts and emotions, and a body to serve You on earth. Renew my mind today with Your Word. Amen.',
    bibleTopic: 'Spirit, Soul and Body',
    objectives: [
      'Understand the three components of human beings: Spirit (God-conscious), Soul (mind, will, emotions), Body (world-conscious senses)',
      'Learn how the Holy Spirit regenerates our spirit and renews our mind through the Bible (Romans 12:2)',
      'Guard our eyes and ears (gates to the soul) from toxic inputs'
    ],
    householdMaterials: ['A piece of paper', 'Three colored pens'],
    dialectWords: [
      { localWord: 'Omwoyo', englishMeaning: 'Spirit (fellowship with God)', language: 'Luganda' },
      { localWord: 'Emmeme / Obulamu bw’omunda', englishMeaning: 'Soul (mind, will, emotions)', language: 'Luganda' },
      { localWord: 'Omubiri', englishMeaning: 'Physical body', language: 'Luganda' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Draw three circles inside one another (like an archery target). Ask: "What are the three parts of a person? Are you just skin and bones?"',
      simplifiedExplanation: 'You are a three-part being: 1. You ARE a spirit (Omwoyo) — the deepest part made to know and worship God. 2. You HAVE a soul (Emmeme) — your mind, thoughts, feelings, and decisions. 3. You LIVE IN a body (Omubiri) — your physical house with eyes, ears, hands, and feet. When you receive Jesus, your spirit is made alive! Then every day, as you read the Bible, your soul (mind) is renewed so you think like Jesus.',
      safeHomeActivity: {
        title: 'The 3-Circle Target Diagram',
        materials: ['Paper', '3 colors'],
        steps: [
          'Draw a small center circle labeled "SPIRIT • Holy Spirit lives here".',
          'Draw a middle circle labeled "SOUL • Mind, Will, Feelings".',
          'Draw the outer circle labeled "BODY • Eyes, Ears, Hands, Feet".',
          'Discuss: How do we feed each part? (Spirit = Prayer & Word; Soul = Good thoughts & study; Body = Healthy food & rest).'
        ],
        safetyTip: 'Fun visual diagram.'
      },
      followUpQuestions: [
        {
          question: 'What are the three parts of a person listed in 1 Thessalonians 5:23?',
          sampleAnswer: 'Spirit, soul, and body.'
        },
        {
          question: 'What does Romans 12:2 tell us to do with our mind?',
          sampleAnswer: 'Be transformed by the renewing of our mind, not conforming to the world.'
        },
        {
          question: 'How do we feed our spirit every day?',
          sampleAnswer: 'Through Bible reading, prayer, worship, and obeying the Holy Spirit.'
        }
      ],
      parentChallenge: 'Check in on what movies, songs, and social media your child consumes. Ask: "Is this feeding your soul with truth or junk food?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Three Chambers of Life (1 Thess 5:23)',
        duration: '5 min',
        story: 'Think of an astronaut inside a spaceship. The astronaut is the spirit; the computer and steering wheel is the soul (mind and will); the metal spaceship is the body allowing them to walk on the moon! Your physical body is a wonderful gift from God, but it’s the house for who you really are on the inside. When we feed our bodies with posho, matooke, and fruit, we grow strong. When we feed our spirit with God’s Word, our spirit rules over our feelings and flesh!',
        keyConcept: 'You are a spirit, you possess a soul, and you live in a body. Guard your soul with God’s truth.',
        localExample: 'A smartphone: Hardware is the body, operating system is the soul, internet connection is the spirit communicating with God.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Guarding the Gates',
        duration: '5 min',
        askFirst: 'What happens if you eat rotten food? What happens if you watch or listen to bad words and violence?',
        listenFor: 'Listen for understanding that what enters through eye-gates and ear-gates affects our soul and decisions.',
        explainSimply: '"Garbage in, garbage out! Good Scripture in, wisdom and peace out! Choose what enters your mind."',
        parentTip: 'Help them build healthy habits of filtering media and peer conversations.'
      },
      step3_activity: {
        title: '5 min • Mind Renewal Filter Card',
        duration: '5 min',
        gameOrExperimentName: 'The Philippians 4:8 Test',
        instructions: [
          'Write down the 6 filters of Philippians 4:8:',
          'Whatever is TRUE • NOBLE • RIGHT • PURE • LOVELY • ADMIRABLE.',
          'Think of your thoughts today: did they pass the filter?',
          'Ask Jesus to help you think thoughts that honor Him.'
        ],
        whatChildLearns: 'Mastering mental discipline, emotional resilience, and biblical discernment.'
      },
      step4_quiz: {
        title: '5 min • Questions & Quiz',
        duration: '5 min',
        questions: [
          {
            question: 'What three parts of a person are sanctified according to 1 Thessalonians 5:23?',
            options: ['Spirit, soul, and body', 'Only the brain', 'Only the hands and feet'],
            correctIndex: 0,
            explanation: 'May your whole spirit, soul and body be kept blameless!'
          },
          {
            question: 'What does Romans 12:2 say transforms our lives?',
            options: ['The renewing of your mind', 'Wearing new clothes', 'Complaining loudly'],
            correctIndex: 0,
            explanation: 'Be transformed by the renewing of your mind with God’s Word!'
          },
          {
            question: 'Which part of a person fellowships with God and worships Him?',
            options: ['The human spirit (Omwoyo)', 'Only the fingernails', 'Only the shoes'],
            correctIndex: 0,
            explanation: 'The human spirit (Omwoyo) made alive by the Holy Spirit!'
          }
        ]
      }
    },
    parentChallenge: 'Practice the Philippians 4:8 filter at dinner: each person shares one "lovely and pure" thing from their day.',
    fiveMinuteBite: {
      title: '5-Minute Whole Person Blessing',
      quickPrompt: 'Touch your heart (spirit), your forehead (mind/soul), and your hands (body).',
      quickAction: 'Pray: "May my spirit, soul, and body be kept blameless for Jesus Christ! Amen!"'
    },
    whatsAppSnippet: `🧠 *CHRISTIAN EDUCATION: Spirit, Soul & Body (Ages 10-14)*
*Lesson 1:* How God Made You • 1 Thess 5:23
*Scripture:* 1 Thessalonians 5:23 • Romans 12:2
*Core Truth:* You are a spirit (Omwoyo), you have a soul (Emmeme), and live in a body (Omubiri). Renew your mind!
*Memory Verse:* Romans 12:2 📖`,
    audioNarrationText: 'May your whole spirit, soul, and body be kept blameless at the coming of our Lord Jesus Christ! Be transformed by the renewing of your mind.'
  },

  // =========================================================================
  // TOPIC 11: DIVINE PURPOSE & CHANGING THE WORLD (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-divine-purpose-changing-world',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Divine Purpose',
    title: 'Divine Purpose: Created to Change the World',
    subtitle: 'Jeremiah 29:11 & Matthew 5:13–16: You are the salt of the earth and the light of the world',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sun',
    themeColor: 'from-amber-400 to-orange-600',
    badgeName: 'World Changer for Christ',
    badgeDescription: 'Can recite Matthew 5:16 and Jeremiah 29:11 and identify their God-given assignment',
    keyScripture: 'Jeremiah 29:11 — "‘For I know the plans I have for you,’ declares the Lord, ‘plans to prosper you and not to harm you, plans to give you hope and a future.’"',
    memoryVerse: 'Matthew 5:16 — "In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven."',
    prayer: 'Lord God, You did not make me by mistake. You crafted me with divine purpose (Ekigendererwa kya Katonda). Help me shine as salt and light in my school, neighborhood, and nation so people see Jesus through my life. Amen.',
    bibleTopic: 'Divine Purpose & Changing the World',
    objectives: [
      'Understand that God has a unique, intentional master plan for every child’s life (Jeremiah 29:11, Eph 2:10)',
      'Learn what it means to be "salt of the earth" (adding flavor, preventing decay) and "light of the world" (dispelling darkness) in Matthew 5:13–16',
      'Discover practical ways teenagers can solve problems, demonstrate integrity, and change their community for Jesus'
    ],
    householdMaterials: ['A pinch of salt', 'A candle or torch'],
    dialectWords: [
      { localWord: 'Ekigendererwa kya Katonda', englishMeaning: 'God’s divine purpose / intention', language: 'Luganda' },
      { localWord: 'Omunnyo gw’ensi', englishMeaning: 'Salt of the earth', language: 'Luganda' },
      { localWord: 'Ettabaaza y’ensi', englishMeaning: 'Light of the world', language: 'Luganda' },
      { localWord: 'Chumvi ya dunia', englishMeaning: 'Salt of the earth', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Taste a tiny pinch of salt. Now turn off the light and switch on a torch. What difference does a little salt make to food? What difference does a small light make to a dark room?',
      simplifiedExplanation: 'Salt makes food delicious and stops meat from spoiling. Light banishes the dark immediately. Jesus told His disciples: "YOU are the salt of the earth and the light of the world!" (Matthew 5:14). You are not too young to change the world. When you stand up for a bullied child, tell the truth when others cheat, work hard in school, and share the gospel with love, you are shaking the world for Jesus Christ. God has plans to give you a future and a hope (Jeremiah 29:11)!',
      safeHomeActivity: {
        title: 'The Salt & Light Tasting Demonstration',
        materials: ['A tiny pinch of food salt', 'A flashlight or torch'],
        steps: [
          'Taste food without salt, then taste with a tiny grain of salt. Notice the huge difference!',
          'Turn on a torch in a dark room. Watch darkness flee!',
          'Explain: That is you in your school and neighborhood! You bring God’s flavor and God’s light wherever you go.',
          'Write on paper: "I am Salt and Light • Matthew 5:14".'
        ],
        safetyTip: 'Tiny pinch of culinary salt.'
      },
      followUpQuestions: [
        {
          question: 'What does Jeremiah 29:11 say God has for your life?',
          sampleAnswer: 'Plans to prosper you and not to harm you, to give you a hope and a future!'
        },
        {
          question: 'What did Jesus call us in Matthew 5:13–14?',
          sampleAnswer: 'The salt of the earth and the light of the world.'
        },
        {
          question: 'Why should we let our light shine before others (Matthew 5:16)?',
          sampleAnswer: 'So that they may see our good works and glorify our Father in heaven.'
        }
      ],
      parentChallenge: 'Ask your child: "What problem in Uganda or our neighborhood breaks your heart, and how might God use you to help fix it in the future?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • Shaking the Nations (Matthew 5:13–16)',
        duration: '5 min',
        story: 'When David was a teenage shepherd boy, his brothers looked down on him. King Saul said: "You are only a youth, and Goliath has been a man of war from his youth." But David knew his God! When Goliath shouted blasphemies, David stepped forward with one smooth stone and bold faith. One boy who knows his God can change an entire nation! In Luganda we say: "Omunnyo gw’ensi n’Ettabaaza y’ensi" (Salt of the earth and light of the world). You were born for such a time as this.',
        keyConcept: 'You don’t have to wait until you are 40 years old to serve God; young people in the Bible shaped history.',
        localExample: 'A single solar lamp lighting up an entire dark home so children can study and families can laugh.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Discovering Gifts',
        duration: '5 min',
        askFirst: 'What are you passionate about: science, music, business, farming, building, teaching? How can Jesus use that gift?',
        listenFor: 'Listen for their dreams and affirm their God-given talents.',
        explainSimply: '"God gave you your brain, voice, and hands for a divine purpose. When you use your gifts with integrity, you become a world-changer!"',
        parentTip: 'Speak words of life and destiny over your teenager.'
      },
      step3_activity: {
        title: '5 min • My World-Changer Blueprint',
        duration: '5 min',
        gameOrExperimentName: 'Purpose Mission Shield',
        instructions: [
          'Draw a heraldic shield on paper.',
          'Divide into 4 quadrants:',
          '1. My God-given Talents • 2. Who I Will Help • 3. My Memory Verse (Jer 29:11) • 4. My Dream Career for God.',
          'Sign your name as: "Ambassador for Christ (2 Cor 5:20)".'
        ],
        whatChildLearns: 'Aligning future dreams, vocation, and identity with God’s kingdom mission.'
      },
      step4_quiz: {
        title: '5 min • Final Purpose Quiz',
        duration: '5 min',
        questions: [
          {
            question: 'What does God declare in Jeremiah 29:11?',
            options: ['Plans to prosper you, give you a hope and a future', 'Plans to make you sad', 'He has no plans'],
            correctIndex: 0,
            explanation: 'Plans to give you a hope and a future! He declares His sovereign love.'
          },
          {
            question: 'According to Matthew 5:16, why do we let our light shine?',
            options: ['So others see our good deeds and glorify our Father in heaven', 'To make ourselves famous', 'To show off our clothes'],
            correctIndex: 0,
            explanation: 'So people glorify our Father in heaven! Jesus is honored through our lives.'
          },
          {
            question: 'What metaphor did Jesus use for believers preserving goodness and bringing flavor?',
            options: ['The salt of the earth', 'A bowl of soup', 'A noisy drum'],
            correctIndex: 0,
            explanation: 'The salt of the earth! We add heavenly flavor and preserve truth.'
          }
        ]
      }
    },
    parentChallenge: 'Speak a priestly blessing over your child tonight: "The Lord bless you and keep you; make His face shine upon you and give you peace!" (Numbers 6:24–26).',
    fiveMinuteBite: {
      title: '5-Minute World Changer Charge',
      quickPrompt: 'Hold up your hands toward heaven.',
      quickAction: 'Pray: "Here am I Lord, send me! Let my life be salt and light in this generation! (Isaiah 6:8 / Matt 5:14)"'
    },
    whatsAppSnippet: `🌍 *CHRISTIAN EDUCATION: Divine Purpose (Ages 10-14)*
*Lesson 1:* Created to Change the World
*Scripture:* Jeremiah 29:11 • Matthew 5:13–16
*Core Truth:* You are the salt and light of the world (Omunnyo n'Ettabaaza)! God has a future for you.
*Memory Verse:* Matthew 5:16 📖`,
    audioNarrationText: 'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven! For I know the plans I have for you, plans to give you hope and a future.'
  },

  // =========================================================================
  // TOPIC 12: GIFTS OF THE SPIRIT (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-gifts-of-the-spirit',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Gifts of the Spirit',
    title: 'Gifts of the Spirit: Equipped for Supernatural Impact',
    subtitle: '1 Corinthians 12:4–11: Diverse spiritual gifts given by one Spirit for the common good',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Sparkles',
    themeColor: 'from-purple-600 to-pink-600',
    badgeName: 'Spiritual Toolbuilder',
    badgeDescription: 'Can name the spiritual gifts and explain how God empowers believers to build up the church',
    keyScripture: '1 Corinthians 12:4, 7 — "There are different kinds of gifts, but the same Spirit distributes them... Now to each one the manifestation of the Spirit is given for the common good."',
    memoryVerse: '1 Corinthians 12:7 — "Now to each one the manifestation of the Spirit is given for the common good."',
    prayer: 'Holy Spirit, thank You for depositing supernatural gifts inside Your church. Open my spiritual eyes and heart to receive Your gifts of wisdom, faith, and love to bless others. Amen.',
    bibleTopic: 'Gifts of the Spirit',
    objectives: [
      'Understand that spiritual gifts are supernatural abilities given by the Holy Spirit (1 Corinthians 12:4–11)',
      'Learn the purpose of spiritual gifts: not to show off or compete, but to serve and encourage others (the common good)',
      'Recognize how gifts of wisdom, knowledge, faith, healing, and prophecy operate in daily Christian life'
    ],
    householdMaterials: ['A toolbox or 3 different kitchen utensils', 'Paper and colored markers'],
    dialectWords: [
      { localWord: 'Ebirabo by’Omwoyo Omutukuvu', englishMeaning: 'Gifts of the Holy Spirit', language: 'Luganda' },
      { localWord: 'Amagezi ag’obwakatonda', englishMeaning: 'Divine wisdom', language: 'Luganda' },
      { localWord: 'Zawadi za Roho', englishMeaning: 'Gifts of the Spirit', language: 'Swahili' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Show 3 different tools (e.g., a spoon, a knife, a matchbox). Ask: "Can a knife do the job of a matchbox? Can a spoon slice bread? Why does a builder need different tools in their toolbox?"',
      simplifiedExplanation: 'Just like a carpenter has hammers, saws, and measuring tapes for different jobs, the Holy Spirit has supernatural gifts (Ebirabo by’Omwoyo) for His children! The Bible lists gifts like Words of Wisdom, Faith, Healing, Prophecy, and Discernment. Nobody gets all the gifts alone, and no gift is useless. The Holy Spirit gives these gifts so that we can help, heal, and encourage each other like one big loving family.',
      safeHomeActivity: {
        title: 'The Holy Spirit’s Toolbelt Craft',
        materials: ['Paper', 'Pencil or crayons'],
        steps: [
          'Draw a wide toolbelt with pouches labeled: "WISDOM • FAITH • HEALING • PROPHECY • KINDNESS".',
          'Have your child choose two gifts they desire to ask the Holy Spirit for.',
          'Write inside the pouch: "1 Cor 12:7 • For the common good!".',
          'Pray together asking the Holy Spirit to stir up His gifts in your child.'
        ],
        safetyTip: 'Fun, inspiring drawing activity.'
      },
      followUpQuestions: [
        {
          question: 'Who distributes spiritual gifts according to 1 Corinthians 12:4–11?',
          sampleAnswer: 'The Holy Spirit distributes them as He determines!'
        },
        {
          question: 'What is the main purpose of spiritual gifts according to verse 7?',
          sampleAnswer: 'For the common good—to help, heal, and build up others!'
        },
        {
          question: 'Are spiritual gifts meant for bragging or for serving?',
          sampleAnswer: 'For serving with love and humility!'
        }
      ],
      parentChallenge: 'Ask your child: "How can you use your gifts—such as encouraging words, faith, or prayer—to lift up a friend at school this week?"'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Divine Toolbox (1 Cor 12:4–11)',
        duration: '5 min',
        story: 'When the early church faced giant problems, they didn’t rely on human strength alone. When someone was sick, believers prayed with the gift of healing. When the church didn’t know which road to travel, the Holy Spirit gave words of wisdom and guidance! In Luganda we say: "Ebirabo by’Omwoyo Omutukuvu" (The gifts of the Holy Spirit). These gifts are not natural talents like playing football—they are supernatural empowerments from heaven to show God’s love to the world.',
        keyConcept: 'Spiritual gifts are divine tools given to regular people so God’s power can touch human needs.',
        localExample: 'Different builders at a house construction site: one lays bricks, one mixes mortar, one fixes the iron roof—working together as one body.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Operating in Love',
        duration: '5 min',
        askFirst: 'Read 1 Corinthians 13:1–3. Why are spiritual gifts useless without love?',
        listenFor: 'Look for understanding that love is the motive; without love, gifts become noisy and selfish.',
        explainSimply: '"Gifts are the tools; love is the heart that uses them. A hammer without love breaks things; a hammer with love builds a house!"',
        parentTip: 'Remind your child that God loves to give good gifts to His children who ask (Luke 11:13).'
      },
      step3_activity: {
        title: '5 min • Spiritual Gifts Map',
        duration: '5 min',
        gameOrExperimentName: 'The 9 Gifts Treasure Chest',
        instructions: [
          'Draw a treasure chest with 9 golden coins.',
          'Label each coin with a gift: Wisdom, Knowledge, Faith, Healing, Miracles, Prophecy, Discernment, Tongues, Interpretation.',
          'Underneath write: "1 Cor 12:31: Eagerly desire the greater gifts!"',
          'Hold the chest and pray for God to use you.'
        ],
        whatChildLearns: 'Appreciating the diverse supernatural provisions of the Holy Spirit.'
      },
      step4_quiz: {
        title: '5 min • Discussion & Questions',
        duration: '5 min',
        questions: [
          {
            question: 'What is the purpose of spiritual gifts according to 1 Corinthians 12:7?',
            options: ['For the common good', 'To make money', 'To show off on social media'],
            correctIndex: 0,
            explanation: 'Now to each one the manifestation of the Spirit is given for the common good!'
          },
          {
            question: 'Who decides which gifts each believer receives?',
            options: ['The Holy Spirit distributes them as He determines', 'The village chief', 'A computer algorithm'],
            correctIndex: 0,
            explanation: 'The Holy Spirit distributes them to each one just as He determines (1 Cor 12:11)!'
          },
          {
            question: 'What must always accompany spiritual gifts according to 1 Corinthians 13?',
            options: ['Love', 'Anger', 'Pride'],
            correctIndex: 0,
            explanation: 'Love! Without love, gifts are like a clanging cymbal.'
          }
        ]
      }
    },
    parentChallenge: 'Tonight, pray over your child: "Father, activate spiritual gifts of wisdom and discernment in [Child Name]’s life!"',
    fiveMinuteBite: {
      title: '5-Minute Gifts Blessing',
      quickPrompt: 'Open your hands palm up toward heaven.',
      quickAction: 'Say aloud: "Holy Spirit, use me today for the common good! Fill me with Your wisdom and love! (1 Cor 12:7)"'
    },
    whatsAppSnippet: `🎁 *CHRISTIAN EDUCATION: Gifts of the Spirit (Ages 10-14)*
*Lesson 1:* Equipped for Supernatural Impact
*Scripture:* 1 Corinthians 12:4–11
*Core Truth:* Diverse spiritual gifts (Ebirabo by’Omwoyo) given for the common good!
*Memory Verse:* 1 Corinthians 12:7 📖`,
    audioNarrationText: 'There are different kinds of gifts, but the same Spirit distributes them. To each one the manifestation of the Spirit is given for the common good!'
  },

  // =========================================================================
  // TOPIC 13: CHANGING THE WORLD (AGES 10-14)
  // =========================================================================
  {
    id: 'christian-changing-the-world-great-commission',
    ageBand: '9-12',
    stageName: 'Explore',
    category: 'christian-education',
    categoryLabel: 'Christian Education • Changing the World',
    title: 'Changing the World: The Great Commission in Action',
    subtitle: 'Mark 16:15 & Acts 1:8: "Go into all the world and preach the gospel to all creation"',
    estimatedMinutes: 20,
    parentMinutes: 5,
    icon: 'Globe',
    themeColor: 'from-teal-500 to-emerald-700',
    badgeName: 'Great Commission Champion',
    badgeDescription: 'Can recite Mark 16:15 and share the gospel message with confidence and love',
    keyScripture: 'Mark 16:15 — "He said to them, ‘Go into all the world and preach the gospel to all creation.’"',
    memoryVerse: 'Mark 16:15 — "He said to them, ‘Go into all the world and preach the gospel to all creation.’"',
    prayer: 'Lord Jesus, You gave us the Great Commission to touch every nation, tribe, and tongue. Give me courage to share Your love, pray for my friends, and be a bold ambassador for You in my generation. Amen.',
    bibleTopic: 'Changing the World',
    objectives: [
      'Understand the Great Commission given by Jesus in Mark 16:15 and Matthew 28:18–20',
      'Learn how simple testimony and genuine love open hearts to Jesus Christ',
      'Discover that changing the world begins right at home, in the shamba, at the well, and at school'
    ],
    householdMaterials: ['A map of Uganda or Africa (or draw one)', 'Paper and pencil'],
    dialectWords: [
      { localWord: 'Amawulire Amalungi', englishMeaning: 'The Good News / Gospel', language: 'Luganda' },
      { localWord: 'Okubuulira Enjiri', englishMeaning: 'Preaching the gospel', language: 'Luganda' },
      { localWord: 'Injili ya Yesu Kristo', englishMeaning: 'Gospel of Jesus Christ', language: 'Swahili' },
      { localWord: 'Engiri', englishMeaning: 'The Gospel', language: 'Runyankole' }
    ],
    parentTeachingGuide: {
      introductoryQuestion: 'Drop a small pebble into a bowl or basin of water. Watch the ripples spread outward to every corner. Ask: "How did one tiny pebble touch the entire basin? How can one child touch the whole world for Jesus?"',
      simplifiedExplanation: 'When you drop a stone in water, the ripples travel outward until they reach every edge. Jesus started with 12 ordinary disciples in a small province of Israel. He told them: "Go into all the world and preach the gospel to all creation!" (Mark 16:15). Today, billions of people follow Jesus because those disciples shared the Good News (Amawulire Amalungi). When you show kindness, share your testimony with a friend, and pray for others, your ripples reach far into eternity!',
      safeHomeActivity: {
        title: 'The Ripple Effect Demonstration',
        materials: ['A basin of water', 'A small stone or coin'],
        steps: [
          'Drop the stone gently into the center of the basin.',
          'Watch the circular ripples expand outward to the edges.',
          'Explain: Center = You and Jesus! Outer ripples = Your family, school, Uganda, Africa, and all the nations!',
          'Write on paper: "Mark 16:15 • My life touches the world!"'
        ],
        safetyTip: 'Fun and gentle water demonstration.'
      },
      followUpQuestions: [
        {
          question: 'What is the Great Commission command Jesus gave in Mark 16:15?',
          sampleAnswer: 'Go into all the world and preach the gospel to all creation!'
        },
        {
          question: 'What is the meaning of the word Gospel (Amawulire Amalungi)?',
          sampleAnswer: 'The Good News that Jesus died, rose again, and saves everyone who believes!'
        },
        {
          question: 'Where does changing the world begin for a 10–14 year old?',
          sampleAnswer: 'Right at home, in school, with friends, and in our neighborhood!'
        }
      ],
      parentChallenge: 'Have your child practice sharing a 1-minute testimony with you: "What Jesus has done in my life."'
    },
    mission: {
      step1_learn: {
        title: '5 min • The Ripple That Shakes Nations (Mark 16:15)',
        duration: '5 min',
        story: 'When missionaries first came to East Africa, they walked on foot through dense jungles, swam across rivers, and slept under the stars to bring the Bible in Luganda, Swahili, and Runyankole. Because they obeyed Mark 16:15, schools, hospitals, and churches were planted across our nation! In Luganda, the Gospel is called "Amawulire Amalungi" (The Good News). You do not have to need a passport or airplane ticket to start changing the world today. Start with the person sitting next to you in class or at home!',
        keyConcept: 'The Gospel is Good News to be celebrated and shared, not a secret to be hidden.',
        localExample: 'Sharing fresh seeds from your harvest with neighbor farmers so the whole village has food to eat.'
      },
      step2_discuss: {
        title: '5 min • Parent Guide: Sharing Without Fear',
        duration: '5 min',
        askFirst: 'Why are people sometimes shy to tell friends about Jesus? What gives us boldness?',
        listenFor: 'Look for understanding that fear of what people think is overcome by the Holy Spirit\'s love and power.',
        explainSimply: '"You don’t have to argue or shout. Just share your story: ‘Jesus loves me and changed my life, and He loves you too!’"',
        parentTip: 'Affirm your child\'s courage to stand up for their faith with gentleness and respect.'
      },
      step3_activity: {
        title: '5 min • World Changer Compass',
        duration: '5 min',
        gameOrExperimentName: 'The Great Commission Map',
        instructions: [
          'Draw a compass rose: North, South, East, West.',
          'In the center write: "MARK 16:15 • GO!".',
          'Write down 3 names of friends or neighbors to pray for this week.',
          'Commit to praying for them every evening.'
        ],
        whatChildLearns: 'Developing kingdom outreach, intercession, and missional living.'
      },
      step4_quiz: {
        title: '5 min • Discussion & Questions',
        duration: '5 min',
        questions: [
          {
            question: 'What did Jesus say in Mark 16:15?',
            options: ['Go into all the world and preach the gospel to all creation', 'Stay home and never talk to anyone', 'Forget everything you learned'],
            correctIndex: 0,
            explanation: 'Go into all the world and preach the gospel to all creation!'
          },
          {
            question: 'What does the Luganda term "Amawulire Amalungi" mean?',
            options: ['The Good News (The Gospel)', 'A heavy sack of charcoal', 'The afternoon heat'],
            correctIndex: 0,
            explanation: 'Amawulire Amalungi means the Good News of Jesus Christ!'
          },
          {
            question: 'How can teenagers change the world today?',
            options: ['By loving others, showing integrity, and sharing Jesus boldly', 'By waiting until they are 60 years old', 'By doing nothing'],
            correctIndex: 0,
            explanation: 'By living with integrity, loving others, and sharing the Good News today!'
          }
        ]
      }
    },
    parentChallenge: 'Tonight, pray together as a family for the nations of Africa and for missionaries spreading the Gospel.',
    fiveMinuteBite: {
      title: '5-Minute World Commission Charge',
      quickPrompt: 'Point your index finger in 4 directions: North, South, East, West.',
      quickAction: 'Say aloud: "Go into all the world! Here am I Lord, use my voice and hands to change my generation! (Mark 16:15)"'
    },
    whatsAppSnippet: `🌍 *CHRISTIAN EDUCATION: Changing the World (Ages 10-14)*
*Lesson 2:* The Great Commission in Action
*Scripture:* Mark 16:15 • Matthew 28:18–20 • Acts 1:8
*Core Truth:* Go into all the world and preach the Good News (Amawulire Amalungi)!
*Memory Verse:* Mark 16:15 📖`,
    audioNarrationText: 'He said to them, "Go into all the world and preach the gospel to all creation!" You are an ambassador for Christ, equipped to change the world!'
  }
];
