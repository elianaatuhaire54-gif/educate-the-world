/**
 * LOCAL OFFLINE BOOKS & SCRIPTURE E-READER LIBRARY
 * 100% Offline readable chapters, vocabulary, interactive comprehension quizzes,
 * and printable worksheets with zero external redirects.
 */

export interface BookChapter {
  chapterNumber: number;
  title: string;
  readingPassage: string;
  vocabulary: { word: string; definition: string; exampleSentence: string }[];
  discussionQuestion: string;
  comprehensionQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface BookWorksheet {
  title: string;
  instructions: string;
  fillInTheBlank: { sentence: string; missingWord: string; hint: string }[];
  writtenResponsePrompts: string[];
  offlineProjectOrActivity: string;
  markingGuide: string;
}

export interface BookMockExam {
  syllabusCode: string;
  totalMarks: number;
  timeAllowedMinutes: number;
  questions: {
    questionNumber: number;
    marks: number;
    questionText: string;
    modelAnswer: string;
    rubricCriteria: string[];
  }[];
}

export interface LocalBookContent {
  id: string;
  title: string;
  author: string;
  authorBiography: string;
  historicalContext: string;
  keyThemes: string[];
  chapters: BookChapter[];
  worksheet: BookWorksheet;
  mockExam: BookMockExam;
}

export const LOCAL_BOOKS_DATABASE: Record<string, LocalBookContent> = {
  // =========================================================================
  // 1. HANDA'S SURPRISE (Ages 3–5)
  // =========================================================================
  'book-3-5-handa': {
    id: 'book-3-5-handa',
    title: "Handa's Surprise",
    author: 'Eileen Browne',
    authorBiography: 'Eileen Browne is a British author and illustrator renowned for celebrating Kenyan Luo culture and vibrant East African landscapes with joyful narrative warmth.',
    historicalContext: 'Set in a traditional rural village in western Kenya near Lake Victoria, highlighting indigenous fruits, community goodwill, and wildlife observation.',
    keyThemes: ['Generosity and friendship', 'African tropical botany & biodiversity', 'Humor and unexpected blessings', 'Village community ties'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Basket on Handa’s Head',
        readingPassage: 'Handa put seven delicious fruits into a woven reed basket for her best friend, Akeyo. She wanted to surprise her in the neighbouring village.\n\n"I wonder which fruit Akeyo will like best?" thought Handa as she balanced the basket carefully on her head. "Will she like the soft yellow banana? Or the sweet-smelling guava? Or the ripe, round orange?"\n\nHanda walked along the red dirt path between the acacia trees, humming a happy tune. High in the branches, a mischievous monkey watched her with curious eyes.',
        vocabulary: [
          { word: 'Delicious', definition: 'Tasting very good and enjoyable to eat.', exampleSentence: 'The ripe mango tasted sweet and delicious.' },
          { word: 'Neighbouring', definition: 'Living or situated next to or very near.', exampleSentence: 'We walked across the stream to visit the neighbouring village.' },
          { word: 'Balance', definition: 'To keep steady without falling over.', exampleSentence: 'Handa learned to balance the fruit basket gracefully on her head.' }
        ],
        discussionQuestion: 'Why did Handa carry the fruit basket to the neighbouring village?',
        comprehensionQuiz: {
          question: 'How many delicious fruits did Handa place in her basket initially?',
          options: ['Three fruits', 'Seven fruits', 'Ten fruits', 'Twelve fruits'],
          correctIndex: 1,
          explanation: 'Handa put seven different delicious fruits into the woven basket to surprise her friend Akeyo.'
        }
      },
      {
        chapterNumber: 2,
        title: 'The Animals along the Path',
        readingPassage: 'As Handa walked past the tall savanna grass, she did not notice the long neck of a giraffe reaching down. With one smooth swish of its purple tongue, the giraffe lifted the sweet-smelling guava from the basket!\n\nFurther down by the baobab tree, a gentle zebra quietly took the green avocado. Next, an elephant plucked the ripe mango, and an antelope nipped the passion fruit. Still, Handa walked happily forward, thinking only of Akeyo’s smile.',
        vocabulary: [
          { word: 'Savanna', definition: 'A vast grassy plain with scattered trees found in tropical regions.', exampleSentence: 'Antelopes graze peacefully in the African savanna.' },
          { word: 'Plucked', definition: 'Quickly pulled or picked off with care.', exampleSentence: 'The elephant plucked the ripe mango from the basket.' }
        ],
        discussionQuestion: 'Why didn’t Handa realize the animals were eating the fruits from her basket?',
        comprehensionQuiz: {
          question: 'Which animal reached down with its long neck to take the guava?',
          options: ['An elephant', 'A zebra', 'A giraffe', 'A leopard'],
          correctIndex: 2,
          explanation: 'The giraffe reached down with its long neck and took the sweet-smelling guava from Handa’s basket.'
        }
      },
      {
        chapterNumber: 3,
        title: 'The Great Surprise at Akeyo’s Homestead',
        readingPassage: 'Suddenly, a playful goat tied near a tangerine tree bucked and bumped into the trunk with a solid THUMP! Down showered a cascade of bright, juicy tangerines right into Handa’s empty basket!\n\nWhen Handa arrived at Akeyo’s compound, she said, "Hello Akeyo! I brought you a surprise!" She lifted down the basket. It was brimming with sweet, sun-ripened tangerines!\n\n"Tangerines!" cheered Akeyo. "My favorite fruit in the whole world! How did you know?"\n\nHanda blinked in astonishment and laughed: "That really is a surprise!"',
        vocabulary: [
          { word: 'Astonishment', definition: 'Great surprise or wonder.', exampleSentence: 'Handa gasped in astonishment when she saw the basket full of tangerines.' },
          { word: 'Brimming', definition: 'Completely filled to the top edge.', exampleSentence: 'The woven basket was brimming with sweet tangerines.' }
        ],
        discussionQuestion: 'How did the tangerines get into Handa’s basket, and why was it a surprise for both girls?',
        comprehensionQuiz: {
          question: 'What fruit ended up in Handa’s basket at the end of the story?',
          options: ['Papayas', 'Tangerines', 'Apples', 'Watermelons'],
          correctIndex: 1,
          explanation: 'The goat bumped the tangerine tree, showering ripe tangerines into Handa’s basket.'
        }
      }
    ],
    worksheet: {
      title: "Handa's Surprise Reading & Observation Worksheet",
      instructions: "Answer each question carefully in your notebook or print this worksheet to practice your reading comprehension, counting, and science skills.",
      fillInTheBlank: [
        { sentence: "Handa carried a woven reed basket on top of her _______.", missingWord: "head", hint: "Part of the body where East African traders carry goods" },
        { sentence: "The tall _______ took the sweet-smelling guava with its long neck.", missingWord: "giraffe", hint: "The tallest animal in the African savanna" },
        { sentence: "A playful _______ bumped the tangerine tree trunk.", missingWord: "goat", hint: "A common farm animal with horns" }
      ],
      writtenResponsePrompts: [
        "1. List three African tropical fruits mentioned in the story and describe what color they are.",
        "2. How does Handa show love and generosity towards her friend Akeyo?",
        "3. Draw a picture of Handa’s fruit basket filled with your own favorite local fruits."
      ],
      offlineProjectOrActivity: "Home Kitchen Fruit Lab: Collect 3 different pieces of fruit from your home or local market. Touch their skins, smell their aromas, sketch them in your nature journal, and practice balancing a light book or fruit bowl on your head safely for 10 paces.",
      markingGuide: "Full marks given for identifying fruits accurately, recognizing generosity as the central moral, and creative hands-on observation."
    },
    mockExam: {
      syllabusCode: 'CAIE-EY-0058-LIT',
      totalMarks: 20,
      timeAllowedMinutes: 25,
      questions: [
        {
          questionNumber: 1,
          marks: 5,
          questionText: 'Identify the setting of the story and name four animals that encountered Handa along the footpath.',
          modelAnswer: 'The story is set in a rural East African savanna village in western Kenya. The four animals are: 1) Monkey, 2) Giraffe, 3) Zebra, and 4) Elephant (or Antelope/Goat).',
          rubricCriteria: ['1 mark for rural Kenya setting', '4 marks (1 each) for correct savanna animals']
        },
        {
          questionNumber: 2,
          marks: 7,
          questionText: 'Explain why the ending is described as a "surprise" for both Handa and Akeyo.',
          modelAnswer: 'It is a surprise for Akeyo because tangerines happen to be her favorite fruit. It is a surprise for Handa because she originally packed different fruits (mango, banana, guava, avocado) and had no idea the animals had eaten them and a goat had filled the basket with tangerines.',
          rubricCriteria: ['3 marks for explaining Akeyo’s perspective', '4 marks for explaining Handa’s perspective']
        },
        {
          questionNumber: 3,
          marks: 8,
          questionText: 'Describe how the author Eileen Browne uses sensory language (smell, touch, sight) to bring the African environment to life.',
          modelAnswer: 'The author uses vivid sensory imagery: "soft yellow banana" (touch and sight), "sweet-smelling guava" (olfactory/smell), "ripe round orange" (sight/taste), and the tactile image of balancing a reed basket on one’s head under the warm sun.',
          rubricCriteria: ['2 marks for identifying sight words', '2 marks for identifying smell words', '2 marks for tactile/touch details', '2 marks for cohesive explanation']
        }
      ]
    }
  },

  // =========================================================================
  // 2. THE JESUS STORYBOOK BIBLE / NLT SCRIPTURE FOUNDATION (Ages 3–5)
  // =========================================================================
  'book-3-5-jesus-storybook-bible': {
    id: 'book-3-5-jesus-storybook-bible',
    title: 'The Jesus Storybook Bible & Genesis Creation (NLT)',
    author: 'Sally Lloyd-Jones & Historic NLT Scriptures',
    authorBiography: 'Sally Lloyd-Jones is an award-winning British-American author whose work brings theological depth and childlike wonder to biblical literature, rooted in the New Living Translation.',
    historicalContext: 'Ancient Hebrew poetry and narrative from Genesis 1–2 and the Gospels, presenting God’s covenantal design for human dignity, nature, and redemption.',
    keyThemes: ['Creation as a gift of love', 'Order and harmony in the universe', 'Human dignity as image-bearers', 'The Never-Stopping, Never Giving Up, Unbreaking Love of God'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Story of All Stories',
        readingPassage: 'Now, some people think the Bible is a book of rules, telling you what you should and shouldn’t do. Other people think the Bible is a book of heroes, showing you good people you should copy. But the Bible is most of all a Story.\n\nIt’s an adventure story about a brave Prince who leaves his palace to rescue the ones he loves. It is God’s Great Love Letter to you. And every single story in the Bible whispers His name.',
        vocabulary: [
          { word: 'Adventure', definition: 'An exciting and daring journey or experience.', exampleSentence: 'The Bible tells the great adventure of God rescuing His children.' },
          { word: 'Rescue', definition: 'To save someone from danger or hardship.', exampleSentence: 'The good shepherd stepped out into the night to rescue the lost sheep.' }
        ],
        discussionQuestion: 'What does it mean that the Bible is a "Story of Love" rather than just a list of rules?',
        comprehensionQuiz: {
          question: 'According to this story, what is the central message running through the Bible?',
          options: ['A cold list of punishments', 'A mathematical formula', 'A great love story of rescue and grace', 'An ancient encyclopedia of rocks'],
          correctIndex: 2,
          explanation: 'The Jesus Storybook Bible highlights that the whole Bible tells one great story of God’s unconditional love and redemption.'
        }
      },
      {
        chapterNumber: 2,
        title: 'The Beginning: A Perfect Home (Genesis 1, NLT)',
        readingPassage: 'In the beginning, there was nothing: no sky, no trees, no birds, only darkness. But God was there, full of joy and love.\n\nThen God spoke into the dark: "Let there be light!" And blazing light burst across the cosmos. God made the rolling oceans, the turquoise sky, the mountains, and the dancing rivers. He made giant elephants and tiny ladybugs, sweet mango trees and fragrant wildflowers.\n\nAnd God looked at everything He had made, and He smiled: "It is very good!"',
        vocabulary: [
          { word: 'Cosmos', definition: 'The universe seen as a well-ordered whole.', exampleSentence: 'Stars and planets shine brightly across the cosmos.' },
          { word: 'Fragrant', definition: 'Having a pleasant, sweet smell.', exampleSentence: 'The wildflowers filled the valley with a fragrant perfume.' }
        ],
        discussionQuestion: 'When God finished creating the world, what did He say about it?',
        comprehensionQuiz: {
          question: 'What did God say after looking at everything He had created?',
          options: ['"It is not ready."', '"It is very good!"', '"It needs more paint."', '"It is too noisy."'],
          correctIndex: 1,
          explanation: 'God looked at all creation and declared that "It is very good!"'
        }
      },
      {
        chapterNumber: 3,
        title: 'The Good Shepherd (Psalm 23 & Luke 15, NLT)',
        readingPassage: 'Jesus told a story to show how much God cares for every single person:\n\n"Imagine a shepherd who has one hundred sheep. Each evening he counts them: ninety-seven, ninety-eight, ninety-nine... but where is the little one with the floppy ear? One is missing!\n\nThe shepherd does not say, ‘Oh well, ninety-nine is enough.’ No! He leaves the safe sheepfold and searches through the brambles, rocks, and dark valley until he finds the lost sheep. He gently lifts it onto his shoulders and carries it home with joy!"',
        vocabulary: [
          { word: 'Shepherd', definition: 'A person who guides, protects, and cares for sheep.', exampleSentence: 'The kind shepherd guarded his flock through the dark night.' },
          { word: 'Brambles', definition: 'Thorny, prickly shrubs or bushes.', exampleSentence: 'The little lamb was stuck in the brambles until the shepherd gently freed it.' }
        ],
        discussionQuestion: 'How does the shepherd treat the sheep when he finds it?',
        comprehensionQuiz: {
          question: 'What did the shepherd do when he realized one sheep was missing out of a hundred?',
          options: ['He forgot about it', 'He went out to search until he found it', 'He bought three more sheep', 'He went to sleep'],
          correctIndex: 1,
          explanation: 'The good shepherd left the ninety-nine to actively search through the valley until he found the lost sheep.'
        }
      }
    ],
    worksheet: {
      title: "Creation & The Good Shepherd Reflection Worksheet",
      instructions: "Print or complete in your study journal. Discuss with your parent or mentor.",
      fillInTheBlank: [
        { sentence: "In the beginning, God spoke: 'Let there be _______!'", missingWord: "light", hint: "The opposite of darkness" },
        { sentence: "God looked at all of creation and declared that it was very _______.", missingWord: "good", hint: "A four-letter word meaning excellent and beautiful" },
        { sentence: "The Good _______ knows every sheep by its name.", missingWord: "shepherd", hint: "A person who looks after a flock" }
      ],
      writtenResponsePrompts: [
        "1. Why is every human being valuable and worthy of respect according to the story of Creation?",
        "2. What can you do today to help or comfort someone who feels lonely or left out?",
        "3. Draw a picture of the Shepherd carrying the lost lamb safely on his shoulders."
      ],
      offlineProjectOrActivity: "Family Kindness Mission: Make a 'Good Shepherd' caring card for an elder, neighbor, or family member who has been unwell, telling them they are loved and remembered.",
      markingGuide: "Award marks for thoughtful reflections emphasizing compassion, stewardship of nature, and universal human dignity."
    },
    mockExam: {
      syllabusCode: 'CAIE-MORAL-0838',
      totalMarks: 20,
      timeAllowedMinutes: 25,
      questions: [
        {
          questionNumber: 1,
          marks: 6,
          questionText: 'Outline the central narrative principle of Genesis 1 regarding the origin and inherent value of nature.',
          modelAnswer: 'Genesis 1 affirms that nature is not an accidental chaos, but an orderly and purposeful creation crafted by God with wisdom, beauty, and inherent goodness. Human beings are placed in creation as stewards to care for living creatures and preserve natural harmony.',
          rubricCriteria: ['2 marks for orderly creation concept', '2 marks for inherent goodness', '2 marks for human stewardship']
        },
        {
          questionNumber: 2,
          marks: 7,
          questionText: 'Analyze the ethical lesson taught by the Parable of the Lost Sheep (Luke 15).',
          modelAnswer: 'The parable teaches that every single individual has infinite intrinsic worth; nobody is disposable or merely a statistic. Society must not leave the weak or lost behind, but actively search for and restore those in distress.',
          rubricCriteria: ['3 marks for intrinsic human worth', '2 marks for active rescue/inclusion', '2 marks for moral application']
        },
        {
          questionNumber: 3,
          marks: 7,
          questionText: 'Compare how the New Living Translation (NLT) and The Message (MSG) help modern learners understand ancient ethical texts.',
          modelAnswer: 'The NLT translates thoughts into precise, contemporary English while maintaining linguistic accuracy. The Message (by Eugene Peterson) uses idiomatic, poetic language to capture the emotional urgency and conversational tone of the original texts, making abstract virtues immediate and relatable.',
          rubricCriteria: ['3 marks for NLT clarity and accuracy', '3 marks for MSG idiomatic vitality', '1 mark for synthesis']
        }
      ]
    }
  },

  // =========================================================================
  // 3. THE TORTOISE AND THE CALABASH OF WISDOM (Ages 3–5)
  // =========================================================================
  'book-3-5-tortoise-wisdom': {
    id: 'book-3-5-tortoise-wisdom',
    title: 'The Great Tortoise and the Calabash of Wisdom',
    author: 'Pan-African Oral Folktales (Curated by Chinua Achebe & Village Griots)',
    authorBiography: 'Griots and oral storytellers across West and Central Africa passed down this allegorical fable to teach young children the importance of communal humility and shared intellect.',
    historicalContext: 'Traditional Yoruba and Igbo oral folklore, emphasizing community solidarity (Ubuntu) over individual greed.',
    keyThemes: ['Wisdom cannot be monopolized', 'Humility and learning from children', 'Community solidarity (Ubuntu)', 'Consequences of greed'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Tortoise’s Greedy Plan',
        readingPassage: 'A long time ago, Ijapa the Tortoise decided he was tired of other animals having good ideas. "I want to be the cleverest creature in all the forest," he muttered to himself. "I will collect all the wisdom of the world, put it inside my dried clay calabash, and hide it at the very top of the tallest palm tree!"\n\nSo Tortoise travelled across villages, forests, and river valleys. Whenever he heard someone say a wise proverb, he trapped it in his calabash and plugged the neck with beeswax.',
        vocabulary: [
          { word: 'Calabash', definition: 'A dried, hollowed-out gourd used as a container or bottle.', exampleSentence: 'Villagers use a polished calabash to store water and milk.' },
          { word: 'Monopolize', definition: 'To keep or take everything for oneself without sharing.', exampleSentence: 'No single person can monopolize all the knowledge of the village.' }
        ],
        discussionQuestion: 'Why did Tortoise want to gather all the wisdom into a calabash?',
        comprehensionQuiz: {
          question: 'Where did Tortoise plan to hide the calabash of wisdom?',
          options: ['Under a heavy boulder', 'At the bottom of the lake', 'At the very top of the tallest palm tree', 'Inside a deep cave'],
          correctIndex: 2,
          explanation: 'Tortoise wanted to tie the calabash to the top of the highest palm tree where no one else could reach it.'
        }
      },
      {
        chapterNumber: 2,
        title: 'The Palm Tree Struggle',
        readingPassage: 'Tortoise tied the bulky calabash securely around his neck, letting it dangle in front of his stomach. Then he reached his stubby legs around the trunk of the towering oil palm and tried to climb.\n\nHe pushed with his hind legs, but the big calabash bumped against the bark and pushed him backward. He tried again: SCRATCH! SLIP! THUD! He fell back into the sand.\n\nJust then, Tortoise’s young son, who had been watching from behind a banana tree, called out innocently: "Father! Why don’t you tie the calabash to your BACK? Then your chest and legs will be free to grip the trunk!"',
        vocabulary: [
          { word: 'Towering', definition: 'Extremely tall, rising high above the ground.', exampleSentence: 'The towering palm tree reached high toward the blue clouds.' },
          { word: 'Stubby', definition: 'Short and thick.', exampleSentence: 'Tortoise reached out his stubby legs to grip the trunk.' }
        ],
        discussionQuestion: 'What clever advice did the little boy give to his father?',
        comprehensionQuiz: {
          question: 'What did Tortoise’s young son suggest to help him climb?',
          options: ['To chop down the tree', 'To tie the calabash to his back instead of his belly', 'To throw the calabash away', 'To ask a bird to carry it'],
          correctIndex: 1,
          explanation: 'The son suggested tying the calabash behind him on his back so his front legs and chest could grip the tree trunk.'
        }
      },
      {
        chapterNumber: 3,
        title: 'Wisdom Scattered to the Winds',
        readingPassage: 'Tortoise froze in shame. "Here I was, believing I had gathered all the wisdom in the universe into my pot," he realized, "and yet a small child still possesses more practical wisdom than I do!"\n\nIn a fit of frustration and sudden understanding, Tortoise threw the calabash to the ground. It shattered on a stone into a hundred pieces!\n\nA great gust of wind swept across the clearing, picking up the pieces of wisdom and blowing them in every direction: into the rivers, across the farmlands, into the towns, and into the hearts of men, women, and children everywhere.\n\nAnd that is why today, nobody owns all the wisdom, and everyone has something valuable to share.',
        vocabulary: [
          { word: 'Shattered', definition: 'Broken violently into many tiny fragments.', exampleSentence: 'The brittle calabash shattered into pieces on the granite rock.' },
          { word: 'Possesses', definition: 'Has or owns something.', exampleSentence: 'Every person possesses unique gifts and wisdom to contribute.' }
        ],
        discussionQuestion: 'What moral lesson does this story teach about sharing knowledge?',
        comprehensionQuiz: {
          question: 'What happened when the calabash shattered on the stone?',
          options: ['All wisdom disappeared forever', 'Wisdom blew with the wind to everyone across the world', 'Tortoise ate all the pieces', 'The animals fought over the shards'],
          correctIndex: 1,
          explanation: 'The wind blew wisdom to every corner of the world, meaning wisdom belongs to all humanity.'
        }
      }
    ],
    worksheet: {
      title: "The Calabash of Wisdom Moral Comprehension Worksheet",
      instructions: "Read the story and answer these questions. Draw or write your answers neatly.",
      fillInTheBlank: [
        { sentence: "Ijapa the _______ wanted to collect all the wisdom of the world.", missingWord: "tortoise", hint: "A slow-moving reptile with a hard shell" },
        { sentence: "His young _______ showed him that wisdom was still outside the calabash.", missingWord: "son", hint: "A male child" },
        { sentence: "Wisdom was scattered so that everyone in the _______ has something to contribute.", missingWord: "community", hint: "A group of people living together" }
      ],
      writtenResponsePrompts: [
        "1. Why is it impossible for one single leader or person to know everything?",
        "2. Can a young child teach an adult something important? Give a real-life example from your family.",
        "3. Write a proverb or wise saying that your grandparents or parents often tell you."
      ],
      offlineProjectOrActivity: "Family Wisdom Circle: Sit together with a family elder or neighbor. Ask them: 'What is one piece of advice you learned when you were young?' Write down their answer in your Wisdom Book.",
      markingGuide: "Full credit for appreciating collective intellect, humility, and family oral heritage."
    },
    mockExam: {
      syllabusCode: 'CAIE-PRI-0838-AFR',
      totalMarks: 20,
      timeAllowedMinutes: 25,
      questions: [
        {
          questionNumber: 1,
          marks: 6,
          questionText: 'Analyze how the physical climbing obstacle in the story symbolizes intellectual arrogance.',
          modelAnswer: 'Tortoise placing the calabash in front of his belly physically blocked him from climbing. This symbolizes that intellectual greed and ego blind a person and prevent genuine progress; by hoarding knowledge selfishly, one becomes clumsy and unable to move forward.',
          rubricCriteria: ['3 marks for physical obstacle link', '3 marks for psychological/intellectual symbolism']
        },
        {
          questionNumber: 2,
          marks: 7,
          questionText: 'Explain the role of the African concept of Ubuntu ("I am because we are") in the resolution of the fable.',
          modelAnswer: 'Ubuntu teaches that individual human flourishing is impossible in isolation from the community. When the calabash breaks and scatters wisdom to all people, the story affirms that knowledge and progress belong to the collective community, not private monopolists.',
          rubricCriteria: ['3 marks for defining Ubuntu core principle', '4 marks for linking it to the shattered calabash outcome']
        },
        {
          questionNumber: 3,
          marks: 7,
          questionText: 'Identify two literary devices used in traditional African oral storytelling present in this text.',
          modelAnswer: '1) Anthropomorphism (giving human traits like speech, pride, and greed to animals like Tortoise to critique human flaws safely); 2) Etiological myth (explaining why something is the way it is in nature—specifically explaining why wisdom is found everywhere among all people today).',
          rubricCriteria: ['3 marks for anthropomorphism with evidence', '3 marks for etiological myth explanation', '1 mark for clarity']
        }
      ]
    }
  },

  // =========================================================================
  // 4. THE VERY HUNGRY CATERPILLAR (Ages 3–5)
  // =========================================================================
  'book-3-5-caterpillar': {
    id: 'book-3-5-caterpillar',
    title: 'The Very Hungry Caterpillar & Insect Metamorphosis',
    author: 'Eric Carle',
    authorBiography: 'Eric Carle was an acclaimed author and collage artist who introduced generations of children to biology, counting, and the wonders of nature through painted tissue paper art.',
    historicalContext: 'Modern children’s biological classic teaching entomology, days of the week, nutrition, and metamorphosis.',
    keyThemes: ['Metamorphosis and transformation', 'Nutrition and healthy growth', 'Days of the week and counting 1–5', 'Patience and natural cycles'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'In the Light of the Moon',
        readingPassage: 'In the light of the moon, a little egg lay on a green leaf.\n\nOne Sunday morning, the warm sun came up and—POP!—out of the egg came a tiny and very hungry caterpillar.\n\nHe started to look for some food. "I am hungry!" he said, wriggling through the morning dew.',
        vocabulary: [
          { word: 'Wriggling', definition: 'Twisting and turning with quick, small movements.', exampleSentence: 'The little caterpillar was wriggling along the garden soil.' },
          { word: 'Dew', definition: 'Tiny drops of water that form on cool surfaces at night.', exampleSentence: 'Sparkling morning dew covered the green leaves.' }
        ],
        discussionQuestion: 'What hatched out of the egg on the leaf on Sunday morning?',
        comprehensionQuiz: {
          question: 'What came out of the little egg on Sunday morning?',
          options: ['A grasshopper', 'A tiny and very hungry caterpillar', 'A bluebird', 'A ladybug'],
          correctIndex: 1,
          explanation: 'A tiny and very hungry caterpillar hatched from the egg on Sunday morning.'
        }
      },
      {
        chapterNumber: 2,
        title: 'Eating Through the Week',
        readingPassage: 'On Monday, he ate through one apple. But he was still hungry.\nOn Tuesday, he ate through two pears. But he was still hungry.\nOn Wednesday, he ate through three plums. But he was still hungry.\nOn Thursday, he ate through four strawberries. But he was still hungry.\nOn Friday, he ate through five oranges. But he was still hungry!\n\nOn Saturday, he ate cake, ice cream, a pickle, cheese, salami, a lollipop, pie, sausage, a cupcake, and a slice of watermelon. That night, he had a terrible stomachache!\n\nThe next day was Sunday again. The caterpillar ate through one nice green leaf, and after that, his stomach felt much better.',
        vocabulary: [
          { word: 'Nutritious', definition: 'Containing substances that help the body grow and stay healthy.', exampleSentence: 'Green leaves and fresh fruit provide nutritious fuel for animals.' },
          { word: 'Stomachache', definition: 'Pain or discomfort in the stomach or belly.', exampleSentence: 'Eating too many sweet snacks gave him a stomachache.' }
        ],
        discussionQuestion: 'Why did the caterpillar feel better after eating the green leaf?',
        comprehensionQuiz: {
          question: 'How many oranges did the caterpillar eat on Friday?',
          options: ['Two', 'Three', 'Four', 'Five'],
          correctIndex: 3,
          explanation: 'On Friday, the caterpillar ate through five sweet oranges.'
        }
      },
      {
        chapterNumber: 3,
        title: 'The Great Transformation',
        readingPassage: 'Now he wasn’t hungry anymore—and he wasn’t a little caterpillar anymore. He was a big, fat caterpillar!\n\nHe built a small house around himself, called a chrysalis (cocoon). He stayed inside for more than two weeks.\n\nThen he nibbled a hole in the cocoon, pushed his way out, and...\n\nHe was a beautiful, magnificent butterfly with wings of purple, gold, azure, and emerald green! He fluttered up into the blue sky, free and strong.',
        vocabulary: [
          { word: 'Chrysalis', definition: 'The protective shell or cocoon inside which a caterpillar transforms into a butterfly.', exampleSentence: 'The caterpillar rested safely inside its chrysalis.' },
          { word: 'Metamorphosis', definition: 'The biological transformation from an egg and larva into an adult winged insect.', exampleSentence: 'Butterflies undergo complete metamorphosis during their life cycle.' }
        ],
        discussionQuestion: 'What are the four main stages of the butterfly life cycle?',
        comprehensionQuiz: {
          question: 'What did the caterpillar transform into at the end of the story?',
          options: ['A dragonfly', 'A bee', 'A beautiful butterfly', 'A beetle'],
          correctIndex: 2,
          explanation: 'The caterpillar underwent metamorphosis inside its chrysalis and emerged as a beautiful butterfly.'
        }
      }
    ],
    worksheet: {
      title: "Butterfly Life Cycle & Math Counting Worksheet",
      instructions: "Print or complete in your science journal. Follow each stage of the metamorphosis.",
      fillInTheBlank: [
        { sentence: "Stage 1: A tiny _______ lays on a leaf.", missingWord: "egg", hint: "Where the baby insect starts" },
        { sentence: "Stage 2: The caterpillar eats food and grows into a _______ larva.", missingWord: "hungry", hint: "Feeling the need to eat" },
        { sentence: "Stage 3: The caterpillar spins a protective _______ around itself.", missingWord: "chrysalis", hint: "Also known as a cocoon" },
        { sentence: "Stage 4: A winged _______ emerges into the air.", missingWord: "butterfly", hint: "Colorful insect with four wings" }
      ],
      writtenResponsePrompts: [
        "1. List the days of the week in order from Sunday to Saturday.",
        "2. Why is eating fresh, green, wholesome food healthier for your body than sugary snacks?",
        "3. Draw the four stages of the butterfly life cycle: Egg → Caterpillar → Chrysalis → Butterfly."
      ],
      offlineProjectOrActivity: "Backyard Garden Nature Hunt: Go outside into your compound or garden. Look under three green leaves. Can you find any caterpillars, aphids, or cocoons? Sketch what you discover in your field book without harming them.",
      markingGuide: "Full marks for correctly identifying all 4 metamorphosis stages, days of the week, and thoughtful dietary reasoning."
    },
    mockExam: {
      syllabusCode: 'CAIE-PRI-0097-SCI',
      totalMarks: 20,
      timeAllowedMinutes: 25,
      questions: [
        {
          questionNumber: 1,
          marks: 6,
          questionText: 'Define the term "complete metamorphosis" and state the four distinct stages shown in this story.',
          modelAnswer: 'Complete metamorphosis is the four-stage biological process in which an insect undergoes radical physical restructuring between juvenile and adult forms. The four stages are: 1) Egg, 2) Larva (Caterpillar), 3) Pupa (Chrysalis/Cocoon), and 4) Adult (Butterfly).',
          rubricCriteria: ['2 marks for scientific definition', '4 marks (1 per stage) for correct biological terminology']
        },
        {
          questionNumber: 2,
          marks: 7,
          questionText: 'Explain the biological function of the caterpillar’s rapid feeding behavior in the larval stage.',
          modelAnswer: 'The primary biological role of the larval stage is rapid growth and energy storage. The caterpillar must consume large quantities of nutrients to store glycogen, lipids, and proteins that will fuel the cellular reorganization during the pupal stage when no feeding occurs.',
          rubricCriteria: ['3 marks for nutrient/energy storage concept', '2 marks for fuel during non-feeding pupal stage', '2 marks for scientific precision']
        },
        {
          questionNumber: 3,
          marks: 7,
          questionText: 'Evaluate how Eric Carle integrates early numeracy (counting 1 to 5) and temporal sequencing into a biological narrative.',
          modelAnswer: 'The story uses dual structural scaffolding: chronologically tracking the seven days of the week while sequentially incrementing numbers (1 apple on Monday, 2 pears on Tuesday, up to 5 oranges on Friday). This connects abstract mathematical counting to empirical temporal progression in nature.',
          rubricCriteria: ['3 marks for days of the week sequencing', '3 marks for number incrementation', '1 mark for pedagogical synthesis']
        }
      ]
    }
  },

  // =========================================================================
  // 5. CHARLOTTE'S WEB (Ages 6–8)
  // =========================================================================
  'book-6-8-charlottes-web': {
    id: 'book-6-8-charlottes-web',
    title: "Charlotte's Web & The Power of Words",
    author: 'E.B. White',
    authorBiography: 'E.B. White (1899–1985) was an American essayist, grammarian (The Elements of Style), and novelist renowned for clear, compassionate prose championing nature and moral loyalty.',
    historicalContext: 'Set on a pastoral farm in Maine, USA during the 1950s, exploring animal husbandry, friendship across species, and the courage to advocate for the defenseless.',
    keyThemes: ['Unconditional sacrificial friendship', 'The power of written language to alter perception', 'Compassion for the vulnerable', 'The natural cycle of life, grief, and legacy'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Before Breakfast: Saving Wilbur',
        readingPassage: '"Where’s Papa going with that ax?" said Fern to her mother as they were setting the table for breakfast.\n\n"Out to the hoghouse," replied Mrs. Arable. "Some pigs were born last night. One is a runt, very small and weak, and your father has decided to do away with it."\n\nFern rushed out into the dewy morning, grabbed her father’s arm, and cried, "Papa, please! It’s unfair! If I had been very small at birth, would you have done away with me?"\n\nMr. Arable looked into his daughter’s eyes. His face softened. "All right," he said. "Take him in and raise him on a bottle. You’ll see what trouble a pig can be."',
        vocabulary: [
          { word: 'Runt', definition: 'An animal that is significantly smaller or weaker than others born at the same time.', exampleSentence: 'Wilbur was born a tiny runt, but Fern cared for him tenderly.' },
          { word: 'Injustice', definition: 'An unfair act or occurrence.', exampleSentence: 'Fern stood up against injustice to protect the newborn piglet.' }
        ],
        discussionQuestion: 'Why did Fern stop her father from hurting the newborn piglet?',
        comprehensionQuiz: {
          question: 'Why did Fern’s father initially intend to cull the piglet?',
          options: ['Because it escaped', 'Because it was a runt and very small', 'Because it was too loud', 'Because he wanted to sell it immediately'],
          correctIndex: 1,
          explanation: 'Mr. Arable believed the runt piglet was too small and weak to survive, but Fern intervened with compassion.'
        }
      },
      {
        chapterNumber: 2,
        title: 'Words in the Barn: The Spider’s Promise',
        readingPassage: 'Wilbur moved to Mr. Zuckerman’s big barn cellar. There he met the sheep, the gander, and Templeton the rat. But Wilbur was lonely and frightened—the old sheep told him that come winter, he would be turned into ham and bacon!\n\nWilbur wept bitterly into the straw. "I don’t want to die! I want to breathe the fresh air and see the morning sun!"\n\nThen a warm, calm voice spoke from above the doorway: "You shall not die, Wilbur. I will save you."\n\nWilbur looked up. Hanging upside down on a silvery web was a large grey spider. "My name is Charlotte A. Cavatica," she said. "I am your friend."',
        vocabulary: [
          { word: 'Sacrifice', definition: 'Giving up something valuable or personal for the sake of helping another.', exampleSentence: 'Charlotte sacrificed her own comfort to save Wilbur’s life.' },
          { word: 'Cellar', definition: 'An underground room or lower floor of a building.', exampleSentence: 'The barn cellar was warm and smelled of sweet hay.' }
        ],
        discussionQuestion: 'What solemn promise did Charlotte make to Wilbur in the barn?',
        comprehensionQuiz: {
          question: 'What is the full name of Wilbur’s spider friend?',
          options: ['Charlotte Web', 'Charlotte A. Cavatica', 'Fern Zuckerman', 'Samantha Spider'],
          correctIndex: 1,
          explanation: 'Her full name is Charlotte A. Cavatica, named after the scientific family of orb-weaving barn spiders.'
        }
      },
      {
        chapterNumber: 3,
        title: 'SOME PIG: The Miracle of the Web',
        readingPassage: 'Charlotte set to work under the starry night sky. Unwinding her silk spinnerets with extraordinary craftsmanship, she carefully wove letters into the dew-covered web: S-O-M-E  P-I-G.\n\nWhen Mr. Zuckerman went to feed Wilbur next morning, he stopped in awe. "A miracle has happened on our farm!" he whispered. People drove for miles from across the county to see the wondrous pig.\n\nLater, Charlotte wove "TERRIFIC", "RADIANT", and finally "HUMBLE". Wilbur was spared from the smokehouse forever. When Charlotte grew old, she told Wilbur: "You have been my friend. That in itself is a tremendous thing."',
        vocabulary: [
          { word: 'Radiant', definition: 'Shining brightly, glowing with health, joy, or beauty.', exampleSentence: 'Wilbur stood proud and radiant in the autumn sun.' },
          { word: 'Humble', definition: 'Not proud or arrogant; modest in heart.', exampleSentence: 'Charlotte taught Wilbur that true greatness is being humble and kind.' }
        ],
        discussionQuestion: 'How did Charlotte’s words change the way people viewed Wilbur?',
        comprehensionQuiz: {
          question: 'What was the first phrase Charlotte wove into her web to save Wilbur?',
          options: ['GOOD PIG', 'SOME PIG', 'SUPER PIG', 'HUMBLE PIG'],
          correctIndex: 1,
          explanation: 'The first famous words woven into the web were "SOME PIG".'
        }
      }
    ],
    worksheet: {
      title: "Charlotte's Web Literature & Empathy Study Worksheet",
      instructions: "Answer these questions thoughtfully to explore themes of character, loyalty, and language.",
      fillInTheBlank: [
        { sentence: "Fern argued that killing the runt was unfair because every living creature deserves a _______.", missingWord: "chance", hint: "An opportunity to live and grow" },
        { sentence: "Charlotte used her skill as an orb-weaver to spin words made of _______.", missingWord: "silk", hint: "The fine thread spiders produce" },
        { sentence: "The final word Charlotte wove for Wilbur was '_______'.", missingWord: "humble", hint: "Meaning modest and unpretentious" }
      ],
      writtenResponsePrompts: [
        "1. How can words be used to build someone up, protect them, or change how others treat them?",
        "2. What qualities make Charlotte a truly noble and loyal friend?",
        "3. Write a short thank-you letter from Wilbur to Charlotte expressing his deepest gratitude."
      ],
      offlineProjectOrActivity: "Observing Nature's Engineering: Find an orb spider web in your garden or eaves early in the morning. Notice the radial spokes and spiral coils. Sketch the geometric symmetry in your sketchbook without disturbing the web.",
      markingGuide: "Award marks for analysis of moral character, rhetorical effect of words, and respectful observation of biological architecture."
    },
    mockExam: {
      syllabusCode: 'CAIE-PRI-0058-LIT',
      totalMarks: 25,
      timeAllowedMinutes: 35,
      questions: [
        {
          questionNumber: 1,
          marks: 8,
          questionText: 'Analyze how E.B. White establishes the theme of justice in the opening scene between Fern and her father.',
          modelAnswer: 'White immediately introduces the moral tension between economic pragmatism (represented by Mr. Arable viewing the runt as an unprofitable burden) and empathetic moral justice (represented by Fern equating the vulnerable animal with a helpless human child). Fern’s rhetorical question—"If I had been very small at birth, would you have done away with me?"—forces her father to recognize universal vulnerability and spare the creature.',
          rubricCriteria: ['3 marks for contrasting pragmatism vs empathy', '3 marks for analyzing Fern’s rhetorical question', '2 marks for literary precision']
        },
        {
          questionNumber: 2,
          marks: 9,
          questionText: 'Examine how the vocabulary chosen by Charlotte ("SOME PIG", "TERRIFIC", "RADIANT", "HUMBLE") influences the community’s perception of reality.',
          modelAnswer: 'White explores the psychological power of naming and framing. The villagers initially see Wilbur merely as livestock for slaughter. When Charlotte weaves descriptive adjectives, the community projects those virtues onto Wilbur, fundamentally altering his identity and value in their eyes. The progression culminating in "HUMBLE" shifts the focus from physical spectacle to moral character.',
          rubricCriteria: ['3 marks for concept of naming/framing', '3 marks for community psychological shift', '3 marks for significance of "HUMBLE"']
        },
        {
          questionNumber: 3,
          marks: 8,
          questionText: 'Discuss the dual nature of Charlotte’s character: combining predatory biological instinct with selfless altruism.',
          modelAnswer: 'Charlotte is presented without sentimentality; she frankly admits that she catches flies and drinks their blood to survive, reflecting biological reality. Yet simultaneously, she possesses profound moral loyalty, investing her remaining life energy into saving Wilbur. This shows that nature contains both necessary survival instincts and capacity for transcendent love.',
          rubricCriteria: ['4 marks for biological predation analysis', '4 marks for moral loyalty and altruism']
        }
      ]
    }
  },

  // =========================================================================
  // 6. CHIKE AND THE RIVER (Ages 6–8)
  // =========================================================================
  'book-6-8-chike-river': {
    id: 'book-6-8-chike-river',
    title: 'Chike and the River',
    author: 'Chinua Achebe',
    authorBiography: 'Chinua Achebe (1930–2013) is revered as the father of modern African literature. Born in Ogidi, Nigeria, his stories masterfully capture childhood curiosity, moral resilience, and authentic West African life.',
    historicalContext: 'Set in colonial-era Nigeria in the 1950s, contrasting traditional village life in Umuofia with the bustling commercial port city of Onitsha on the River Niger.',
    keyThemes: ['Curiosity and the thirst for adventure', 'Integrity and resisting peer temptation', 'Diligence and honest labor', 'Courage in the face of civic crime'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'From Umuofia to Onitsha',
        readingPassage: 'Chike lived in the quiet village of Umuofia. But when he was eleven years old, his mother sent him to live with his uncle in Onitsha, a bustling city on the banks of the mighty River Niger.\n\nOnitsha was full of wonder: lorries honked their brass horns, traders shouted in the market stalls, and street hawkers balanced sweet groundnuts on enamel trays. But what fascinated Chike most of all was the River Niger—wide, golden brown, and flowing endlessly toward the sea.',
        vocabulary: [
          { word: 'Bustling', definition: 'Full of lively activity and noisy movement.', exampleSentence: 'Onitsha market was bustling with merchants and shoppers.' },
          { word: 'Fascinated', definition: 'Extremely interested and attracted by something.', exampleSentence: 'Chike was fascinated by the giant ferry crossing the river.' }
        ],
        discussionQuestion: 'What difference did Chike notice between his quiet village and the city of Onitsha?',
        comprehensionQuiz: {
          question: 'What river flows through Onitsha that fascinated young Chike?',
          options: ['River Nile', 'River Niger', 'River Congo', 'River Zambezi'],
          correctIndex: 1,
          explanation: 'Chike was captivated by the majestic River Niger bordering Onitsha and Asaba.'
        }
      },
      {
        chapterNumber: 2,
        title: 'The Price of a Ferry Ticket',
        readingPassage: 'Every afternoon after school, Chike ran down to the wharf to watch the ferry boat MV Regina cross over to the green hills of Asaba. He wanted with all his heart to cross that river.\n\n"How much is the ticket to Asaba?" Chike asked the ticket collector.\n"One shilling," barked the man.\n\nOne shilling! In those days, a shilling was twelve copper pence—a massive fortune for an eleven-year-old schoolboy. Chike’s proud friend, S.M.O.G., told him to beg or gamble for it. But Chike refused: "My mother told me never to steal or gamble. I will earn it by honest work!"\n\nChike washed lorries, carried cassava bags, and saved every copper penny until he held a shining silver shilling.',
        vocabulary: [
          { word: 'Wharf', definition: 'A level dock or platform beside water where boats tie up to load and unload.', exampleSentence: 'The passengers gathered at the river wharf to board the ferry.' },
          { word: 'Integrity', definition: 'The quality of being honest and having strong moral principles.', exampleSentence: 'Chike showed integrity by refusing to steal or gamble for the money.' }
        ],
        discussionQuestion: 'How did Chike earn the money for his ferry ticket?',
        comprehensionQuiz: {
          question: 'How did Chike get the one shilling needed for the ferry ride?',
          options: ['He stole it from his uncle', 'He gambled with street boys', 'He earned it honestly by working and saving', 'He found it in the sand'],
          correctIndex: 2,
          explanation: 'Chike worked diligently carrying loads and washing vehicles, saving penny by penny with honest pride.'
        }
      },
      {
        chapterNumber: 3,
        title: 'Adventure in Asaba & The Burglars',
        readingPassage: 'Chike stepped aboard the ferry boat. The engine roared, water churned into white foam, and the breeze kissed his face. He made it to Asaba!\n\nHe wandered through the town, admiring the tall rubber trees and quiet avenues. But he lost track of time. When he ran back to the wharf, the last ferry of the evening had already sailed!\n\nChike was stranded alone in the dark. Creeping into a half-built compound to hide from the cold rain, he overheard a gang of thieves plotting to break into the town treasury. Trembling with fear but remembering his civic duty, Chike slipped through the fence, found the local watchman, and alerted the police!\n\nThe thieves were captured. The Chief Magistrate awarded Chike a scholarship for his bravery, and he returned home a celebrated hero who stood for truth and justice.',
        vocabulary: [
          { word: 'Stranded', definition: 'Left in a place with no way of leaving.', exampleSentence: 'When the ferry sailed, Chike was stranded on the far riverbank.' },
          { word: 'Scholarship', definition: 'Financial aid awarded to a student based on academic merit or character.', exampleSentence: 'The Chief Magistrate awarded Chike a scholarship to attend high school.' }
        ],
        discussionQuestion: 'What did Chike do when he overheard the thieves plotting their crime?',
        comprehensionQuiz: {
          question: 'What reward did Chike receive for his courageous civic honesty?',
          options: ['A gold bicycle', 'A high school scholarship', 'A free bag of groundnuts', 'A pair of leather boots'],
          correctIndex: 1,
          explanation: 'The Chief Magistrate awarded Chike a school scholarship in honor of his integrity and courage.'
        }
      }
    ],
    worksheet: {
      title: "Chike and the River Character & Geography Worksheet",
      instructions: "Print or answer in your literature exercise book. Think carefully about integrity and choices.",
      fillInTheBlank: [
        { sentence: "Chike moved from the village of Umuofia to the port city of _______.", missingWord: "Onitsha", hint: "Famous commercial river city in Nigeria" },
        { sentence: "The boat that carried passengers across the River Niger was named MV _______.", missingWord: "Regina", hint: "Latin word for queen, often used on historic ships" },
        { sentence: "Chike refused to gamble because his mother taught him the value of _______.", missingWord: "honesty", hint: "Speaking and acting with truth" }
      ],
      writtenResponsePrompts: [
        "1. What is the danger of peer pressure, and how did Chike demonstrate personal resilience?",
        "2. Locate the River Niger on a map of Africa. Name three countries through which it flows.",
        "3. Imagine you are Chike returning home to your mother. What would you tell her about your adventure?"
      ],
      offlineProjectOrActivity: "Map & Finance Ledger: Create a simple budget ledger in your notebook: write down three honest tasks you can do around your home or neighborhood, and calculate how long it would take to save up for an important learning tool (like a dictionary or compass).",
      markingGuide: "Award full marks for geographical awareness of West African waterways, understanding the peril of bad influences, and moral integrity."
    },
    mockExam: {
      syllabusCode: 'CAIE-PRI-0058-ENG',
      totalMarks: 25,
      timeAllowedMinutes: 35,
      questions: [
        {
          questionNumber: 1,
          marks: 8,
          questionText: 'Contrast the social environment of Umuofia with that of Onitsha as depicted by Chinua Achebe.',
          modelAnswer: 'Achebe presents Umuofia as an organic, quiet, agrarian community governed by traditional communal customs and family authority. Conversely, Onitsha represents colonial modernization, urbanization, and rapid commerce characterized by motor vehicles, bustling markets, peer temptation (such as S.M.O.G.), and opportunistic crime, requiring the young protagonist to develop internal moral discipline.',
          rubricCriteria: ['3 marks for describing Umuofia tradition', '3 marks for describing Onitsha urbanization', '2 marks for contrasting moral challenges']
        },
        {
          questionNumber: 2,
          marks: 9,
          questionText: 'Explain how Chike’s choice to earn his ferry fare rather than resort to street scams reflects the theme of personal agency.',
          modelAnswer: 'Chike exercises conscious personal agency by resisting the easy path of begging or street gambling advocated by his peer S.M.O.G. By choosing manual labor (washing lorries and carrying sacks), Chike affirms the dignity of work taught by his mother, demonstrating that true freedom and pride come from self-earned achievements rather than deceptive shortcuts.',
          rubricCriteria: ['3 marks for peer pressure resistance', '3 marks for dignity of honest labor', '3 marks for agency and character integrity']
        },
        {
          questionNumber: 3,
          marks: 8,
          questionText: 'Evaluate the symbolic significance of the River Niger as both a barrier and an invitation to growth.',
          modelAnswer: 'The River Niger serves as a geographical threshold separating the known security of Onitsha from the unknown territory of Asaba. Symbolically, crossing the river represents Chike’s rite of passage from dependent childhood to autonomous, morally responsible young adulthood.',
          rubricCriteria: ['4 marks for literal geographical boundary', '4 marks for metaphorical rite of passage analysis']
        }
      ]
    }
  },

  // =========================================================================
  // 7. THE BOY WHO HARNESSED THE WIND (Ages 6–8 & 9–12)
  // =========================================================================
  'book-6-8-boy-harnessed-wind-young': {
    id: 'book-6-8-boy-harnessed-wind-young',
    title: 'The Boy Who Harnessed the Wind: Engineering from Scraps',
    author: 'William Kamkwamba & Bryan Mealer',
    authorBiography: 'William Kamkwamba is a Malawian inventor and engineer born in Kasungu, Malawi. At age fourteen, using old library books and discarded tractor parts, he built a functioning wind turbine to power his village.',
    historicalContext: 'Set during the 2001–2002 famine in rural Malawi, highlighting how resourcefulness and open library access can overcome extreme poverty and drought.',
    keyThemes: ['Grassroots STEM engineering and renewable energy', 'Self-education through public library books', 'Perseverance against mockery and scarcity', 'Transforming agricultural hardship into electrical power'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Darkness and Drought in Wimbe',
        readingPassage: 'In the small village of Wimbe, Malawi, darkness fell early. When the sun dipped behind the blue horizon, everyone stopped working because kerosene for lamps was too expensive. People ate supper in the shadows and went to bed.\n\nThen came a terrible drought. The rains failed, the maize withered, and William’s family could no longer afford the eighty-dollar school tuition. Fourteen-year-old William was sent home from school in tears. But William refused to let his mind starve.',
        vocabulary: [
          { word: 'Drought', definition: 'A long period of abnormally low rainfall leading to a shortage of water and crops.', exampleSentence: 'The severe drought caused the maize crops to dry up.' },
          { word: 'Kerosene', definition: 'A combustible liquid oil burned in lamps for light.', exampleSentence: 'Buying kerosene for lamps was too costly for poor farming families.' }
        ],
        discussionQuestion: 'Why was William forced to stop attending school, and what did he decide to do instead?',
        comprehensionQuiz: {
          question: 'Why could William no longer attend secondary school?',
          options: ['He was bored', 'His family could not afford tuition fees during the famine', 'The school building collapsed', 'He moved to another country'],
          correctIndex: 1,
          explanation: 'The drought destroyed the family’s harvest, making it impossible to pay the school fees.'
        }
      },
      {
        chapterNumber: 2,
        title: 'The Magic of the Village Library',
        readingPassage: 'William walked every day to the small primary school library supported by donor books. There, covered in dust on the bottom shelf, he discovered an American physics textbook called Using Energy.\n\nOn the cover was a photograph of giant wind turbines spinning gracefully against the sky. William’s eyes widened: "Wind can make electricity! If I can build a windmill, we can pump water from the ground and have lights in our house! We will never starve again!"\n\nBecause his English was limited, William used an English-Chichewa dictionary, translating words sentence by sentence, studying the diagrams of magnets, dynamos, and copper coils.',
        vocabulary: [
          { word: 'Turbine', definition: 'A machine with rotating blades that produces power from wind or water.', exampleSentence: 'The wind turbine spun quickly in the strong breeze.' },
          { word: 'Dynamo', definition: 'A device that converts mechanical rotational motion into electrical current.', exampleSentence: 'A bicycle dynamo produces electricity to light the headlamp.' }
        ],
        discussionQuestion: 'How did William overcome the language difficulty while reading the physics textbook?',
        comprehensionQuiz: {
          question: 'What book did William find in the library that inspired his invention?',
          options: ['A cookbook', 'An English poetry book', 'A physics textbook called Using Energy', 'A comic book'],
          correctIndex: 2,
          explanation: 'William discovered Using Energy, which explained how wind can generate electrical power.'
        }
      },
      {
        chapterNumber: 3,
        title: 'The Scrap-Yard Machine Spins',
        readingPassage: 'William scavenged the local scrapyard behind the trading center. He found a rusty tractor fan, a broken bicycle frame, plastic PVC pipes, and an old bicycle dynamo. Neighbors laughed and shook their heads: "Look at William! He has gone mad playing with garbage!"\n\nWilliam paid no attention. He heated the PVC pipes over an open flame to flatten them into aerodynamic blades. He climbed a 16-foot wooden tower built of blue gum poles and tied the contraption together with wire.\n\nA powerful gust of wind blew across the plain. The blades groaned, whistled, and began to spin faster and faster! Below, connected by two thin wires, a small car light bulb flickered and then burst into brilliant, glowing light!\n\nThe villagers gasped in wonder. The boy who had played with garbage had brought electricity to the village.',
        vocabulary: [
          { word: 'Aerodynamic', definition: 'Shaped to reduce drag and move smoothly through the air.', exampleSentence: 'He carved the plastic pipes into aerodynamic blades to catch the wind.' },
          { word: 'Scavenged', definition: 'Searched through discarded items for useful materials.', exampleSentence: 'William scavenged the scrapyard for rusty bolts and bicycle gears.' }
        ],
        discussionQuestion: 'What did the villagers think at first, and what proved to them that William’s invention worked?',
        comprehensionQuiz: {
          question: 'What happened when the wind spun William’s turbine blades for the first time?',
          options: ['The tower collapsed', 'A light bulb flickered and glowed brightly', 'The fan blew away', 'Nothing happened'],
          correctIndex: 1,
          explanation: 'The spinning blades drove the bicycle dynamo, lighting the electric bulb for everyone to see.'
        }
      }
    ],
    worksheet: {
      title: "Renewable Wind Energy & Mechanical Physics Worksheet",
      instructions: "Print or answer in your STEM notebook. Study the conversion of kinetic energy into electrical power.",
      fillInTheBlank: [
        { sentence: "William Kamkwamba lived in the village of Wimbe in the country of _______.", missingWord: "Malawi", hint: "A landlocked nation in southeastern Africa" },
        { sentence: "The machine that turns rotational motion into electrical power is called a _______.", missingWord: "dynamo", hint: "Or electrical generator" },
        { sentence: "The wind has _______ energy, which means energy of motion.", missingWord: "kinetic", hint: "Scientific term for motion energy" }
      ],
      writtenResponsePrompts: [
        "1. How did open access to books in a small library change William’s entire life and community?",
        "2. Explain the energy transformations that occur in a windmill (Kinetic → Mechanical → Electrical → Light).",
        "3. Name three discarded items in your own neighborhood that could be recycled into a useful tool."
      ],
      offlineProjectOrActivity: "Cardboard Anemometer / Wind Turbine Lab: Cut three curved cups from an empty plastic bottle or egg carton. Mount them onto two crossed wooden sticks with a center pin through a straw. Blow on it or take it outside into the wind and count how many times it spins in 30 seconds.",
      markingGuide: "Full marks for describing energy transformations correctly, valuing self-directed education, and creative upcycling concepts."
    },
    mockExam: {
      syllabusCode: 'CAIE-IGCSE-0625-PHY',
      totalMarks: 25,
      timeAllowedMinutes: 35,
      questions: [
        {
          questionNumber: 1,
          marks: 8,
          questionText: 'Trace the sequence of energy transformations that occur from the Malawian wind to the illumination of William’s light bulb.',
          modelAnswer: '1) Solar radiation unevenly heats the Earth’s surface, producing convection currents in atmospheric air masses (Kinetic Wind Energy). 2) The moving air transfers momentum to the aerodynamic PVC blades, causing them to rotate a drive axle (Mechanical Rotational Energy). 3) The axle turns a permanent magnet inside a coil of copper wire in the bicycle dynamo, inducing an electromotive force (Electrical Energy via Faraday’s Law of Electromagnetic Induction). 4) The current travels through the circuit into the tungsten filament, dissipating energy as heat and radiant electromagnetic waves (Light Energy).',
          rubricCriteria: ['2 marks for wind kinetic energy', '2 marks for mechanical rotational energy', '2 marks for electromagnetic induction in dynamo', '2 marks for electrical to light conversion']
        },
        {
          questionNumber: 2,
          marks: 8,
          questionText: 'Explain why William heated and flattened the cylindrical PVC pipes into curved aerofoil profiles.',
          modelAnswer: 'Cylindrical pipes possess high aerodynamic drag and symmetrical surface resistance, preventing efficient rotational torque. By heating and curving the PVC into an aerofoil profile, William created an asymmetrical camber. As wind flows over the curved surface, air travels faster over the top than the bottom, generating a pressure differential (Bernoulli’s Principle) that produces aerodynamic lift and high rotational torque to overcome the generator’s cogging resistance.',
          rubricCriteria: ['3 marks for reducing cylindrical drag', '3 marks for aerofoil camber and lift differential', '2 marks for rotational torque optimization']
        },
        {
          questionNumber: 3,
          marks: 9,
          questionText: 'Assess the socio-economic impact of grassroots technological innovation in decentralized, off-grid rural communities.',
          modelAnswer: 'Decentralized renewable energy emancipates rural agrarian communities from reliance on centralized, vulnerable national grids and expensive, hazardous fossil fuels like kerosene. By utilizing scrap materials, capital outlay approaches zero while generating power for water boreholes (combating drought and starvation) and evening illumination for education, creating a self-sustaining cycle of grassroots resilience.',
          rubricCriteria: ['3 marks for replacing costly kerosene', '3 marks for agricultural irrigation and food security', '3 marks for educational and economic resilience']
        }
      ]
    }
  },

  // =========================================================================
  // 8. THE LION, THE WITCH AND THE WARDROBE (Ages 9–12)
  // =========================================================================
  'book-9-12-lion-witch-wardrobe': {
    id: 'book-9-12-lion-witch-wardrobe',
    title: 'The Lion, the Witch and the Wardrobe & Allegory',
    author: 'C.S. Lewis',
    authorBiography: 'C.S. Lewis (1898–1963) was an Oxford scholar, literary critic, and theologian celebrated for his allegorical fantasy series The Chronicles of Narnia.',
    historicalContext: 'Written during the aftermath of World War II in Britain, following four evacuated siblings who discover a magical realm locked in perpetual winter.',
    keyThemes: ['Moral courage and resisting treachery', 'The Deeper Magic of sacrificial atonement', 'Redemption and second chances for the fallen', 'The eternal triumph of truth and spring over tyranny'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Lucy Looks into a Wardrobe',
        readingPassage: 'During the air raids of World War II, four children—Peter, Susan, Edmund, and Lucy—were sent away from London to live in the rambling country house of an eccentric old Professor.\n\nOn a rainy day, while exploring the upstairs rooms, little Lucy opened the door of an enormous oak wardrobe filled with fur coats. She stepped inside, burying her face into the soft fur. She took another step, expecting to feel the hard wooden back of the wardrobe.\n\nInstead, she felt something cold and powdery under her shoes. Branches of fir trees were brushing against her hands! Overhead, snowflakes fell gently through the winter night, and in the distance stood a lone, golden street-lamp glowing in the middle of a snowy wood. Lucy had entered the land of Narnia.',
        vocabulary: [
          { word: 'Eccentric', definition: 'Unconventional and slightly strange in behavior.', exampleSentence: 'The old professor was kind, scholarly, and somewhat eccentric.' },
          { word: 'Wardrobe', definition: 'A large, tall cupboard or cabinet in which clothes may be hung.', exampleSentence: 'Lucy stepped past the soft fur coats inside the wardrobe.' }
        ],
        discussionQuestion: 'What surprised Lucy when she walked deeper into the fur coats in the wardrobe?',
        comprehensionQuiz: {
          question: 'What strange object was glowing in the snowy forest of Narnia?',
          options: ['A burning torch', 'An electric television', 'A lone iron street-lamp', 'A lighthouse'],
          correctIndex: 2,
          explanation: 'Lucy discovered a glowing iron street-lamp standing alone in the winter woods of Narnia.'
        }
      },
      {
        chapterNumber: 2,
        title: 'Turkish Delight & Edmund’s Betrayal',
        readingPassage: 'Edmund, Lucy’s spiteful older brother, followed her into the wardrobe next day. In the snowy woods, he encountered a magnificent sledge drawn by white reindeer, carrying the White Witch, who called herself the Queen of Narnia.\n\nThe Witch offered Edmund hot, sweet chocolate and enchanted Turkish Delight. With every powdery cube Edmund swallowed, his greed grew fiercer. The Witch whispered venom into his ear: "Bring your brother and sisters to my castle, Edmund, and you shall be King of Narnia!"\n\nBlind to her cruelty, Edmund agreed to betray his own flesh and blood for a box of sweet candy. In Narnia, the Witch had made it so that it was always winter, but never Christmas.',
        vocabulary: [
          { word: 'Treachery', definition: 'Betrayal of trust; deceptive and disloyal behavior.', exampleSentence: 'Edmund’s treachery nearly cost his brother and sisters their lives.' },
          { word: 'Enchanted', definition: 'Placed under a magical spell or charm.', exampleSentence: 'The enchanted Turkish Delight made Edmund crave more without thinking.' }
        ],
        discussionQuestion: 'How did the White Witch use Edmund’s greed to manipulate him?',
        comprehensionQuiz: {
          question: 'What enchanted sweet did the White Witch give Edmund to trick him?',
          options: ['Chocolate bars', 'Turkish Delight', 'Honey cakes', 'Caramel apples'],
          correctIndex: 1,
          explanation: 'The White Witch tricked Edmund with enchanted Turkish Delight.'
        }
      },
      {
        chapterNumber: 3,
        title: 'Aslan & The Deeper Magic',
        readingPassage: 'When Edmund realized the Witch intended to murder him and his family, he repented in terror. But the White Witch demanded Edmund’s blood at the Stone Table, citing the ancient Deep Magic: every traitor belongs to the Witch.\n\nThen Aslan, the great and golden Lion, King of Kings, stepped forward. He made a quiet bargain with the Witch. That night, Aslan willingly climbed the Stone Table, allowing himself to be bound, humiliated, and slain in Edmund’s place.\n\nLucy and Susan wept beside Aslan’s still body through the dark night. But at sunrise, a deafening CRACK echoed across the hills! The ancient Stone Table was split in two, and standing before them, bathed in golden light, was Aslan—alive and more majestic than ever!\n\n"There is a Deeper Magic from before the dawn of time," Aslan roared with joy. "When a willing victim who has committed no treachery dies in a traitor’s stead, Death itself begins to work backward!"',
        vocabulary: [
          { word: 'Sacrificial', definition: 'Given up or offered up to save another from harm or judgment.', exampleSentence: 'Aslan laid down his life in a sacrificial act of unconditional love.' },
          { word: 'Redemption', definition: 'The act of being saved or delivered from error, sin, or evil.', exampleSentence: 'Edmund received forgiveness and redemption, becoming King Edmund the Just.' }
        ],
        discussionQuestion: 'What is the "Deeper Magic" that allowed Aslan to rise again from the dead?',
        comprehensionQuiz: {
          question: 'Who took Edmund’s place of judgment on the Stone Table?',
          options: ['Peter', 'Mr. Beaver', 'Aslan the Lion', 'The Professor'],
          correctIndex: 2,
          explanation: 'Aslan the Great Lion sacrificed himself willingly on the Stone Table to redeem Edmund from the Witch’s claim.'
        }
      }
    ],
    worksheet: {
      title: "Narnia Allegory & Moral Philosophy Worksheet",
      instructions: "Print or complete in your literature notebook. Reflect deeply on the symbolic layers of the story.",
      fillInTheBlank: [
        { sentence: "In Narnia under the White Witch’s curse, it was always _______, but never Christmas.", missingWord: "winter", hint: "The cold, snowy season" },
        { sentence: "Edmund gave in to the Witch because of pride and enchanted Turkish _______.", missingWord: "delight", hint: "A sweet confection" },
        { sentence: "Aslan broke death through the Deeper _______ from before the dawn of time.", missingWord: "magic", hint: "The spiritual law of love and sacrifice" }
      ],
      writtenResponsePrompts: [
        "1. Explain the moral difference between Edmund’s betrayal and Peter’s leadership.",
        "2. How does C.S. Lewis use the figure of Aslan to represent the biblical story of Jesus Christ?",
        "3. Have you ever made a serious mistake like Edmund? How did receiving forgiveness help you change your character?"
      ],
      offlineProjectOrActivity: "Family Allegory Discussion & Drawing: Draw the Stone Table split in two with the rising sun behind it. Underneath, write one personal virtue (like Honesty, Bravery, or Kindness) you want to live out this year.",
      markingGuide: "Award marks for recognizing Christian allegorical parallels, moral psychology of repentance, and literary symbolism."
    },
    mockExam: {
      syllabusCode: 'CAIE-IGCSE-0475-LIT',
      totalMarks: 25,
      timeAllowedMinutes: 35,
      questions: [
        {
          questionNumber: 1,
          marks: 8,
          questionText: 'Analyze how C.S. Lewis employs the winter motif to represent spiritual and political oppression in Narnia.',
          modelAnswer: 'Lewis uses perpetual winter ("always winter, never Christmas") as an objective correlative for spiritual stasis, emotional coldness, and totalitarian tyranny under the White Witch. The absence of Christmas signifies the removal of grace, hope, and joy. The subsequent melting of snow and arrival of spring when Aslan approaches symbolizes the unstoppable thaw of moral renewal and biological rebirth.',
          rubricCriteria: ['3 marks for winter as totalitarian oppression', '3 marks for absence of Christmas representing lack of grace', '2 marks for spring as spiritual renewal']
        },
        {
          questionNumber: 2,
          marks: 9,
          questionText: 'Examine the theological and legal conflict between the "Deep Magic" and the "Deeper Magic from Before the Dawn of Time".',
          modelAnswer: 'The "Deep Magic" represents retributive justice and the strict moral law: treachery demands capital punishment and surrender of the traitor to death. The "Deeper Magic" represents restorative grace and self-giving substitutionary love. Lewis argues that love and self-sacrifice precede and outrank mere legal retribution; when an innocent voluntarily dies for the guilty, the foundational terms of death are overturned.',
          rubricCriteria: ['3 marks for analyzing Deep Magic as legal retribution', '3 marks for analyzing Deeper Magic as substitutionary grace', '3 marks for philosophical synthesis']
        },
        {
          questionNumber: 3,
          marks: 8,
          questionText: 'Trace the character arc of Edmund from self-absorbed cynicism to his restoration as "King Edmund the Just".',
          modelAnswer: 'Edmund begins with petty spite, skepticism, and isolation, falling prey to gluttony and grandiose promises of power from the Witch. His experience of cold imprisonment and imminent execution breaks his delusion, leading to genuine remorse. Restored by Aslan’s private counsel and sacrificial death, Edmund demonstrates bravery in battle and becomes "King Edmund the Just"—a ruler whose past fall gives him deep empathy for human weakness.',
          rubricCriteria: ['3 marks for initial flaw and temptation', '3 marks for realization of folly and repentance', '2 marks for redemptive outcome as empathetic judge']
        }
      ]
    }
  },

  // =========================================================================
  // 9. THE MESSAGE (MSG) & NLT PARALLEL PSALMS & PROVERBS (Ages 9–12)
  // =========================================================================
  'book-9-12-psalms-proverbs-msg': {
    id: 'book-9-12-psalms-proverbs-msg',
    title: 'The Poetry of Living: Psalms and Proverbs (Parallel NLT & MSG)',
    author: 'King David, Solomon & Eugene Peterson',
    authorBiography: 'King David and King Solomon composed ancient Hebrew wisdom literature, re-rendered by pastor Eugene Peterson into contemporary idiomatic cadences alongside the Tyndale NLT translation.',
    historicalContext: 'Ancient Near Eastern poetic and proverbial texts (10th–6th century BC), focusing on emotional honesty before God, justice, stewardship, and practical discernment.',
    keyThemes: ['Lament and praise as emotional maturity', 'Practical discernment vs reckless folly', 'Care for the poor and righteous governance', 'Living in daily reverence before the Creator'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Psalm 23: The Shepherd in Green Pastures',
        readingPassage: 'NLT VERSION:\n"The Lord is my shepherd; I have all that I need. He lets me rest in green meadows; he leads me beside peaceful streams. He renews my strength. He guides me along right paths, bringing honor to his name. Even when I walk through the darkest valley, I will not be afraid, for you are close beside me. Your rod and your staff protect and comfort me."\n\nTHE MESSAGE (MSG):\n"God, my shepherd! I don’t need a thing. You have bedded me down in lush meadows, you find me quiet pools to drink from. True to your word, you let me catch my breath and send me serene on the right track. Even when the way goes through Death Valley, I’m not afraid when you walk at my side. Your trusty shepherd’s crook makes me feel secure."',
        vocabulary: [
          { word: 'Meadow', definition: 'A field of grassland especially one used for pasture or hay.', exampleSentence: 'The sheep rested peacefully in the lush green meadow.' },
          { word: 'Serene', definition: 'Calm, peaceful, and untroubled.', exampleSentence: 'His heart remained serene even during difficult circumstances.' }
        ],
        discussionQuestion: 'Compare the phrase "He renews my strength" (NLT) with "you let me catch my breath" (MSG). How does each help you understand resting in God?',
        comprehensionQuiz: {
          question: 'According to Psalm 23, why does the speaker not fear even in the darkest valley?',
          options: ['Because he carries a sword', 'Because God is close beside him', 'Because he is running fast', 'Because there are no wolves'],
          correctIndex: 1,
          explanation: 'The psalmist fears no evil because God walks right beside him with comfort and protection.'
        }
      },
      {
        chapterNumber: 2,
        title: 'Proverbs 3: Trust with All Your Heart',
        readingPassage: 'NLT VERSION:\n"Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take. Don’t be impressed with your own wisdom. Instead, fear the Lord and turn away from evil."\n\nTHE MESSAGE (MSG):\n"Trust God from the bottom of your heart; don’t try to figure out everything on your own. Listen for God’s voice in everything you do, everywhere you go; he’s the one who will keep you on track. Don’t assume that you know it all. Run to God! Run from evil!"',
        vocabulary: [
          { word: 'Discernment', definition: 'The ability to judge well and understand what is wise and true.', exampleSentence: 'Proverbs teaches young people to seek moral discernment.' },
          { word: 'Arrogance', definition: 'An exaggerated sense of one’s own importance or abilities.', exampleSentence: 'Proverbs warns against the arrogance of assuming you know it all.' }
        ],
        discussionQuestion: 'Why does Proverbs warn against "depending on your own understanding"?',
        comprehensionQuiz: {
          question: 'What promise is given to those who trust God and seek His guidance?',
          options: ['They will find bags of gold', 'He will show them which path to take and keep them on track', 'They will never have to work', 'They will defeat everyone in sports'],
          correctIndex: 1,
          explanation: 'Proverbs promises that when we seek God’s will, He guides our steps along the right path.'
        }
      },
      {
        chapterNumber: 3,
        title: 'Proverbs 6: The Wisdom of the Ant',
        readingPassage: 'NLT VERSION:\n"Take a lesson from the ants, you lazybones. Learn from their ways and become wise! Though they have no prince, governor, or ruler to make them work, they labor hard all summer, gathering food for the winter."\n\nTHE MESSAGE (MSG):\n"You lazy fool, look at an ant. Watch it closely; let it teach you a thing or two. Nobody has to tell it what to do. All summer it stores up food; at harvest it stockpiles provisions. So how long are you going to laze around doing nothing? How long before you get out of bed?"',
        vocabulary: [
          { word: 'Provisions', definition: 'Supplies of food, drink, or equipment prepared for future needs.', exampleSentence: 'The farmer stored provisions of grain in the granary.' },
          { word: 'Initiative', definition: 'The power or opportunity to act or take charge before others do.', exampleSentence: 'The ant shows personal initiative without needing a supervisor.' }
        ],
        discussionQuestion: 'What can we learn from the ant about working without being forced by an overseer?',
        comprehensionQuiz: {
          question: 'What special trait does the ant have according to Proverbs 6?',
          options: ['It waits for a king to give orders', 'It takes initiative to prepare and work diligently on its own', 'It sleeps through summer', 'It steals food from bees'],
          correctIndex: 1,
          explanation: 'The ant requires no prince or supervisor; it diligently takes initiative to gather food for the season ahead.'
        }
      }
    ],
    worksheet: {
      title: "Hebrew Poetry & Proverbs Comparative Worksheet",
      instructions: "Print or complete in your study journal. Compare the translations and write your reflections.",
      fillInTheBlank: [
        { sentence: "The Lord is my shepherd; I shall not _______.", missingWord: "want", hint: "Meaning lack or be in need" },
        { sentence: "Trust in the Lord with all your _______, and do not lean on your own understanding.", missingWord: "heart", hint: "The center of emotions and convictions" },
        { sentence: "The ant gathers food in the _______ to prepare for winter.", missingWord: "summer", hint: "The warm harvest season" }
      ],
      writtenResponsePrompts: [
        "1. Write down one difference in wording between NLT and MSG for Psalm 23, and explain which speaks more clearly to you.",
        "2. How does being self-motivated like an ant help you in your schoolwork and family chores?",
        "3. Memorize and recite Proverbs 3:5–6 to a friend or mentor."
      ],
      offlineProjectOrActivity: "Proverbs Wisdom Tracker: Choose one proverb from this reading. For 3 days, write down one daily action you took that put this wisdom into practice (e.g. helping without being asked, speaking truthfully, comforting an anxious friend).",
      markingGuide: "Award marks for thoughtful translation comparison, personal responsibility, and practical application."
    },
    mockExam: {
      syllabusCode: 'CAIE-REL-0490-WISDOM',
      totalMarks: 25,
      timeAllowedMinutes: 35,
      questions: [
        {
          questionNumber: 1,
          marks: 8,
          questionText: 'Analyze the literary structure and imagery of Hebrew parallelism in Psalm 23.',
          modelAnswer: 'Psalm 23 utilizes synonymous and synthetic Hebrew parallelism built upon two central pastoral and hospitality metaphors: 1) The Divine Shepherd who provides nourishment ("green meadows/quiet waters") and protection ("rod and staff in the dark valley"); 2) The Gracious Host who prepares a banquet in the presence of adversaries, anointing the guest with oil and offering overflowing abundance. The progression moves from third-person description ("He leads me") to intimate second-person address ("You are with me"), signifying experiential intimacy in times of crisis.',
          rubricCriteria: ['3 marks for identifying Shepherd and Host metaphors', '3 marks for shift from 3rd to 2nd person', '2 marks for analysis of parallel structures']
        },
        {
          questionNumber: 2,
          marks: 8,
          questionText: 'Evaluate how Eugene Peterson’s translation methodology in The Message captures the functional equivalence of ancient Hebrew wisdom.',
          modelAnswer: 'Peterson employs dynamic functional equivalence rather than rigid formal equivalence. Recognizing that biblical Hebrew proverbs were colloquial, earthy, and street-level spoken wisdom, Peterson translates archaic phrasing into living contemporary idioms ("catch my breath" instead of "restores my soul"; "don’t try to figure out everything on your own" instead of "lean not on thine own understanding"). This removes artificial religious stiffness and restores original rhetorical urgency.',
          rubricCriteria: ['3 marks for dynamic vs formal equivalence definition', '3 marks for analyzing specific phrase translations', '2 marks for rhetorical impact']
        },
        {
          questionNumber: 3,
          marks: 9,
          questionText: 'Compare the ethical model of the ant in Proverbs 6 with modern concepts of autonomous personal agency.',
          modelAnswer: 'Proverbs 6 praises the ant because it functions autonomously without external coercion ("no prince, governor, or ruler"). In modern psychological terms, this represents internal locus of control and intrinsic motivation. The proverb critiques passive dependency and procrastination, asserting that true wisdom involves foresight, delayed gratification, and proactive stewardship of time and resources.',
          rubricCriteria: ['3 marks for autonomous agency without coercion', '3 marks for internal locus of control and delayed gratification', '3 marks for critique of passive dependency']
        }
      ]
    }
  },

  // =========================================================================
  // 10. ANIMAL FARM (Ages 13–16)
  // =========================================================================
  'book-13-16-animal-farm': {
    id: 'book-13-16-animal-farm',
    title: 'Animal Farm & Political Satire',
    author: 'George Orwell',
    authorBiography: 'George Orwell (Eric Arthur Blair, 1903–1950) was an English novelist, essayist, and journalist who used piercing political satire to expose authoritarianism, censorship, and the corruption of language.',
    historicalContext: 'Published in 1945 as an allegorical critique of the Russian Revolution of 1917 and the totalitarian betrayal of socialist ideals under Joseph Stalin.',
    keyThemes: ['The corruption of ideals by tyrannical power', 'The manipulation of language and historical revisionism', 'The vulnerability of an uneducated working class', 'Totalitarian control vs human dignity'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Old Major’s Speech & The Seven Commandments',
        readingPassage: 'Old Major, the prize Middle White boar, summoned all the farm animals to the big barn at Manor Farm. "Comrades," he declared, "what is the nature of this life of ours? Let us face it: our lives are miserable, laborious, and short. Why do we suffer? Because Man steals the produce of our labour! Remove Man, and the root cause of hunger and overwork is abolished forever!"\n\nSoon after Old Major died, the animals revolted and drove out the drunken farmer, Mr. Jones. They painted Seven Commandments in white letters across the barn wall, the greatest of which was:\n\n"ALL ANIMALS ARE EQUAL."',
        vocabulary: [
          { word: 'Tyranny', definition: 'Cruel, unreasonable, or arbitrary use of power or control.', exampleSentence: 'The animals rebelled against the human farmer’s tyranny.' },
          { word: 'Abolished', definition: 'Formally put an end to a system, practice, or institution.', exampleSentence: 'They resolved that cruelty and overwork would be abolished.' }
        ],
        discussionQuestion: 'What core ideal did Old Major teach the animals before the rebellion?',
        comprehensionQuiz: {
          question: 'What was the central commandment painted on the barn wall after the rebellion?',
          options: ['Four legs good, two legs better', 'All animals are equal', 'Pigs must sleep in beds', 'No animal shall drink water'],
          correctIndex: 1,
          explanation: 'The founding declaration of Animalism was that "All animals are equal."'
        }
      },
      {
        chapterNumber: 2,
        title: 'Squealer & The Altered Commandments',
        readingPassage: 'Slowly, the pigs took over management. Napoleon, a fierce Berkshire boar, raised nine vicious puppies into his private secret police. He chased away Snowball, the idealistic inventor of the windmill.\n\nWhenever the pigs took the cows’ milk and red apples for themselves, Squealer the porker would explain: "Comrades! Do not imagine that we pigs do this in a spirit of selfishness! Science has proved that milk and apples contain substances absolutely necessary to the well-being of a pig. Day and night we are watching over your welfare. It is for YOUR sake that we drink that milk!"\n\nOne by one, the commandments on the wall were quietly repainted in the dead of night:\n"No animal shall sleep in a bed... WITH SHEETS."\n"No animal shall kill any other animal... WITHOUT CAUSE."',
        vocabulary: [
          { word: 'Propaganda', definition: 'Information, especially of a biased or misleading nature, used to promote a political cause or point of view.', exampleSentence: 'Squealer used subtle propaganda to deceive the hardworking animals.' },
          { word: 'Revisionism', definition: 'The alteration or distortion of historical records to fit a ruler’s agenda.', exampleSentence: 'The pigs engaged in historical revisionism by rewriting the commandments.' }
        ],
        discussionQuestion: 'How did Squealer manipulate language to justify the pigs taking privileges for themselves?',
        comprehensionQuiz: {
          question: 'How did the commandment regarding beds change over time?',
          options: ['It was completely erased', 'It was changed to "No animal shall sleep in a bed with sheets"', 'It said beds were for horses', 'It allowed pigs to sleep outside'],
          correctIndex: 1,
          explanation: 'The pigs altered the rule to say "No animal shall sleep in a bed WITH SHEETS" to justify their luxury.'
        }
      },
      {
        chapterNumber: 3,
        title: 'The Pigs Walk on Two Legs',
        readingPassage: 'Years passed. The faithful cart-horse Boxer, whose motto had been "I will work harder" and "Napoleon is always right," collapsed from exhaustion while hauling stone for the windmill. Instead of retiring him, Napoleon sold Boxer to the horse slaughterer in exchange for a case of whiskey.\n\nOne afternoon, the animals stared in horrified disbelief. Out of the farmhouse walked the pigs—balancing clumsily on their hind legs and carrying whips in their trotters!\n\nThe sheep bleated their new chant: "Four legs good, two legs BETTER!"\n\nWhen Clover and Benjamin ran to the barn wall, only one solitary commandment remained:\n\n"ALL ANIMALS ARE EQUAL, BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS."\n\nThat evening, the animals peered through the farmhouse window. The pigs and human farmers were playing cards, laughing, and drinking together. The creatures looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.',
        vocabulary: [
          { word: 'Hypocrisy', definition: 'The practice of claiming to have moral standards to which one’s own behavior does not conform.', exampleSentence: 'The pigs walking on two legs showed the ultimate hypocrisy of the regime.' },
          { word: 'Totalitarian', definition: 'Relating to a system of government that is centralized and dictatorial and requires complete subservience.', exampleSentence: 'Napoleon’s dictatorship became an oppressive totalitarian regime.' }
        ],
        discussionQuestion: 'What does the famous phrase "All animals are equal, but some are more equal than others" mean in political satire?',
        comprehensionQuiz: {
          question: 'What shocking sight did the animals see through the farmhouse window at the conclusion of the novella?',
          options: ['The barn on fire', 'Pigs and humans dining together, indistinguishable from each other', 'A new windmill running', 'Boxer returning home'],
          correctIndex: 1,
          explanation: 'The animals realized the pigs had adopted every corrupt habit of the human oppressors, becoming indistinguishable from them.'
        }
      }
    ],
    worksheet: {
      title: "Animal Farm Political Satire & Rhetoric Analysis Worksheet",
      instructions: "Print or complete in your literature notebook. Analyze how propaganda functions in societies.",
      fillInTheBlank: [
        { sentence: "The cart-horse Boxer had the loyal motto: 'I will work _______.'", missingWord: "harder", hint: "With more effort" },
        { sentence: "The propagandist pig who constantly justified Napoleon’s decisions was named _______.", missingWord: "Squealer", hint: "Named for the high-pitched sound a pig makes" },
        { sentence: "At the end, the commandment read: 'All animals are equal, but some animals are more _______ than others.'", missingWord: "equal", hint: "The paradoxical word Orwell uses" }
      ],
      writtenResponsePrompts: [
        "1. Why is literacy and education the greatest safeguard against tyranny and propaganda?",
        "2. Analyze how Napoleon used the fear of Mr. Jones returning to silence all questioning.",
        "3. Compare Boxer’s tragic fate with how authoritarian regimes exploit dedicated workers."
      ],
      offlineProjectOrActivity: "Media & Rhetoric Critical Thinking Lab: Pick a popular advertisement or speech. Identify three persuasive techniques used (e.g. emotional appeal, fear of missing out, selective statistics) and explain how a discerning citizen can spot manipulation.",
      markingGuide: "Full marks for critical analysis of political propaganda, historical allegory of totalitarianism, and the value of democratic vigilance."
    },
    mockExam: {
      syllabusCode: 'CAIE-IGCSE-0475-SATIRE',
      totalMarks: 25,
      timeAllowedMinutes: 40,
      questions: [
        {
          questionNumber: 1,
          marks: 8,
          questionText: 'Analyze how Orwell demonstrates the corruption of revolutionary language through Squealer’s speeches.',
          modelAnswer: 'Orwell portrays language not as a neutral communication medium, but as an instrument of psychological subjugation. Squealer deploys pseudo-scientific jargon ("proved by science"), emotional black-mail ("Surely you do not want Jones back?"), and semantic manipulation (redefining privilege as "sacrifice"). By exploiting the animals’ illiteracy and failing memories, the regime systematically divorces words from factual reality, making cognitive resistance impossible.',
          rubricCriteria: ['3 marks for pseudo-science and false necessity', '3 marks for fear appeal regarding Jones', '2 marks for linguistic abuse and illiteracy']
        },
        {
          questionNumber: 2,
          marks: 9,
          questionText: 'Evaluate Boxer’s tragic function as an allegory for the vulnerable proletariat in totalitarian regimes.',
          modelAnswer: 'Boxer embodies physical strength, noble diligence, and absolute moral earnestness. However, his uncritical submission to authority ("Napoleon is always right") and lack of analytical literacy render him an instrument of his own exploitation. When his labor power is exhausted, the regime disposes of him without gratitude, demonstrating that totalitarian power views individuals strictly as utilitarian commodities rather than ends in themselves.',
          rubricCriteria: ['3 marks for Boxer representing naive working-class loyalty', '3 marks for lack of critical literacy as a vulnerability', '3 marks for commodification and betrayal by the regime']
        },
        {
          questionNumber: 3,
          marks: 8,
          questionText: 'Examine the dramatic significance of the final image of pigs and humans dining together.',
          modelAnswer: 'The final tableau provides cyclical closure: the revolution that began to overthrow human tyranny concludes with the revolutionary leaders adopting the exact vices, dress, habits, and oppressive methods of the former masters. The syntactic fusion—"it was impossible to say which was which"—demolishes the illusion of moral distinction between rival autocrats, exposing the eternal betrayal of egalitarian ideals when power is concentrated without institutional accountability.',
          rubricCriteria: ['3 marks for cyclical irony and betrayal of founding ideals', '3 marks for visual fusion of pigs and men', '2 marks for political critique of unaccountable power']
        }
      ]
    }
  },

  // =========================================================================
  // 11. THINGS FALL APART (Ages 17+)
  // =========================================================================
  'book-17-things-fall-apart': {
    id: 'book-17-things-fall-apart',
    title: 'Things Fall Apart: Tragedy & Cultural Resilience',
    author: 'Chinua Achebe',
    authorBiography: 'Chinua Achebe published Things Fall Apart in 1958, fundamentally redefining world literature by giving authentic internal voice to Igbo civilization prior to and during the arrival of European imperialism.',
    historicalContext: 'Set in pre-colonial and early colonial southeastern Nigeria (late 19th century), tracing the life of the warrior Okonkwo of Umuofia.',
    keyThemes: ['The complexity, philosophy, and legal customs of pre-colonial Igbo society', 'The tragic flaw of hyper-masculinity and fear of weakness', 'The impact of European colonial administration and missionary religion', 'The fragility of social cohesion when external pressures exploit internal divisions'],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Okonkwo of Umuofia & The Fear of Failure',
        readingPassage: 'Okonkwo was well known throughout the nine villages and even beyond. As a young man of eighteen he had brought honor to his village by throwing Amalinze the Cat in the greatest wrestling contest within living memory.\n\nOkonkwo was tall and huge, and his bushy eyebrows and wide nose gave him a very severe look. He had no patience with unsuccessful men. His father, Unoka, had been lazy and improvident, dying heavily in debt without a single title to his name.\n\nDeep down in his heart, Okonkwo’s whole life was dominated by fear: the fear of failure and of weakness. It was the fear of himself, lest he should be found to resemble his father. And so Okonkwo ruled his household with a heavy hand, worshiping raw martial strength above all else.',
        vocabulary: [
          { word: 'Improvident', definition: 'Not having or showing foresight; spendthrift or careless with resources.', exampleSentence: 'Unoka was improvident and rarely saved yams for the planting season.' },
          { word: 'Resemble', definition: 'To look like or be similar to someone or something.', exampleSentence: 'Okonkwo dreaded that people would say he resembled his gentle father.' }
        ],
        discussionQuestion: 'What was the deep psychological fear that drove Okonkwo’s harsh behavior?',
        comprehensionQuiz: {
          question: 'What wrestling achievement made Okonkwo famous across the nine villages as a young man?',
          options: ['He defeated a lion', 'He threw Amalinze the Cat in the village arena', 'He won a spear-throwing match', 'He ran faster than a horse'],
          correctIndex: 1,
          explanation: 'Okonkwo gained fame by throwing the legendary wrestler Amalinze the Cat, who had been unbeaten for seven years.'
        }
      },
      {
        chapterNumber: 2,
        title: 'Ikemefuna & The Tragic Excess of Pride',
        readingPassage: 'As compensation for a murdered daughter of Umuofia, the neighboring clan of Mbaino surrendered a young boy named Ikemefuna. Ikemefuna lived in Okonkwo’s compound for three years, becoming like an elder brother to Okonkwo’s eldest son, Nwoye. Even Okonkwo grew deeply fond of the boy, though he refused to show affection, believing that to show love was a sign of weakness.\n\nWhen the Oracle of the Hills and the Caves declared that Ikemefuna must be killed, the respected elder Ezeudu warned Okonkwo: "That boy calls you father. Bear no hand in his death."\n\nYet when the elders marched into the forest and struck Ikemefuna, the boy ran crying toward Okonkwo: "My father, they have killed me!" Dazed with fear of being thought weak, Okonkwo drew his machete and cut the boy down himself.\n\nSomething broke inside Nwoye that day, and a dark shadow fell over Okonkwo’s spirit.',
        vocabulary: [
          { word: 'Oracle', definition: 'A priest or medium through whom ancient deities or spirits were consulted for guidance.', exampleSentence: 'The clan consulted the Oracle before making decisions on war and peace.' },
          { word: 'Excess', definition: 'An amount of something that is more than necessary, permitted, or desirable.', exampleSentence: 'Okonkwo’s excess of pride blinded him to compassion and natural filial duty.' }
        ],
        discussionQuestion: 'Why did Okonkwo participate in killing Ikemefuna despite Ezeudu’s explicit warning?',
        comprehensionQuiz: {
          question: 'What warning did the village elder Ezeudu give to Okonkwo regarding the boy Ikemefuna?',
          options: ['To give him more food', 'To bear no hand in his death because the boy called him father', 'To send him back to Mbaino', 'To make him a warrior'],
          correctIndex: 1,
          explanation: 'Ezeudu warned Okonkwo not to take part in the killing because Ikemefuna regarded him as a father.'
        }
      },
      {
        chapterNumber: 3,
        title: 'The Pacification & The Centre Cannot Hold',
        readingPassage: 'After spending seven years in exile for an accidental gun discharge, Okonkwo returned to find Umuofia changed beyond recognition. British district commissioners and white missionaries had built a church, a court, and a prison.\n\nMany clan outcasts (osu) and disaffected youth—including Okonkwo’s sensitive son Nwoye—had joined the church, drawn by its hymn of brotherhood and refuge from harsh clan edicts like the abandonment of twins in the Evil Forest.\n\nWhen Okonkwo called the clan to arms at the marketplace and struck down a colonial messenger, the crowd did not roar in battle. Instead, they gasped in panic and confusion. Okonkwo looked at their faces and knew with sudden, sickening finality that Umuofia would not fight.\n\nRather than submit to the humiliation of a colonial court and trial by foreigners, Okonkwo took his own life behind his compound. When the District Commissioner viewed the body, he thought only of including a brief paragraph in the book he was writing, titled:\n"The Pacification of the Primitive Tribes of the Lower Niger."\n\nThus, a great African tragedy was reduced by the colonizer to a cold footnote in an imperial ledger.',
        vocabulary: [
          { word: 'Pacification', definition: 'The act of quelling hostility or establishing colonial control through military or administrative force.', exampleSentence: 'The colonial commissioner cynically termed conquest "pacification".' },
          { word: 'Disaffected', definition: 'Dissatisfied with authority, tradition, or social conventions.', exampleSentence: 'The disaffected members of the clan sought dignity in the new mission church.' }
        ],
        discussionQuestion: 'Why did the District Commissioner view Okonkwo’s life only as material for a book paragraph?',
        comprehensionQuiz: {
          question: 'What is the title of the book the District Commissioner planned to write at the end of the novel?',
          options: ['A History of Nigeria', 'The Pacification of the Primitive Tribes of the Lower Niger', 'Travels along the River Niger', 'Customs of Umuofia'],
          correctIndex: 1,
          explanation: 'The Commissioner arrogantly reduced Okonkwo’s tragic life to a single paragraph in his patronizing book title.'
        }
      }
    ],
    worksheet: {
      title: "Things Fall Apart Tragedy & Postcolonial Theory Worksheet",
      instructions: "Print or answer in your literature study journal. Engage in depth with cultural, historical, and psychological dimensions.",
      fillInTheBlank: [
        { sentence: "Okonkwo’s lazy father whose memory haunted him was named _______.", missingWord: "Unoka", hint: "A musician who loved flute playing and good company" },
        { sentence: "Okonkwo was exiled for seven years to his motherland called _______.", missingWord: "Mbanta", hint: "His mother’s ancestral village" },
        { sentence: "The poet W.B. Yeats wrote the line: 'Things fall apart; the _______ cannot hold.'", missingWord: "centre", hint: "The focal point or core structure" }
      ],
      writtenResponsePrompts: [
        "1. In what ways is Okonkwo a classical tragic hero (possessing greatness of status, a tragic flaw/hamartia, and a catastrophic downfall)?",
        "2. Explain how Achebe depicts pre-colonial Igbo society as complex and structured, disproving European colonial myths that Africa had no history or legal order.",
        "3. How did internal clan fractures (such as the treatment of outcasts and twin abandonment) enable foreign colonization to take root?"
      ],
      offlineProjectOrActivity: "Historiographical & Cultural Essay: Write a 500-word essay evaluating Achebe’s famous maxim: 'Until the lions have their own historians, the history of the hunt will always glorify the hunter.' Connect this to Things Fall Apart.",
      markingGuide: "Award marks for sophisticated postcolonial analysis, Aristotelian tragic hero frameworks, and nuanced historical insight."
    },
    mockExam: {
      syllabusCode: 'CAIE-A-LEVEL-9695-LIT',
      totalMarks: 30,
      timeAllowedMinutes: 45,
      questions: [
        {
          questionNumber: 1,
          marks: 10,
          questionText: 'Analyze how Achebe constructs Okonkwo’s hamartia (tragic flaw) not as mere malice, but as a pathological overcompensation against perceived vulnerability.',
          modelAnswer: 'Achebe constructs Okonkwo’s hamartia as a deep psychological terror of resembling his father Unoka, whom society branded "agbala" (unsuccessful, associated with gentleness). Consequently, Okonkwo suppresses all tenderness, mercy, and reflective wisdom, equating masculinity exclusively with physical domination, violence, and refusal of emotional vulnerability. This unbalanced hyper-masculinity directly triggers his participation in the murder of Ikemefuna and his fatal misreading of Umuofia’s collective consciousness at the marketplace, turning his strength into his catastrophic ruin.',
          rubricCriteria: ['4 marks for psychological origin in Unoka’s perceived failure', '3 marks for suppression of compassion/feminine virtues', '3 marks for fatal consequences in plot development']
        },
        {
          questionNumber: 2,
          marks: 10,
          questionText: 'Examine how the dual arrival of the European missionary church and the colonial magistrate exploited existing social fissures within Umuofia.',
          modelAnswer: 'Achebe avoids idyllic romanticization of pre-colonial society; he candidly reveals that Igbo customary law generated marginalized outcasts (the osu, who were denied titles and social marriage) and profound moral grief (such as mothers whose infant twins were abandoned in the Evil Forest, and sensitive youths like Nwoye traumatized by Ikemefuna’s execution). The Christian church offered these alienated groups radical equal human dignity and emotional sanctuary. By integrating the outcasts first, the colonizer split the clan from within before imposing judicial and military domination.',
          rubricCriteria: ['4 marks for identifying internal fissures (osu, twins, Nwoye)', '3 marks for church offering sanctuary and moral dignity', '3 marks for synthesis of internal fracture enabling external conquest']
        },
        {
          questionNumber: 3,
          marks: 10,
          questionText: 'Evaluate the historiographical shift in the closing paragraph where the narrative voice shifts to the District Commissioner.',
          modelAnswer: 'The ending represents a masterclass in narrative irony and postcolonial critique. Throughout the novel, Achebe has immersed the reader in the rich, multi-vocal, proverb-laden interiority of Umuofia. In the final paragraph, the perspective abruptly shifts to the bureaucratic, reductive gaze of the British District Commissioner. By having the Commissioner calculate whether Okonkwo’s epic life warrants a full chapter or merely a paragraph in his patronizingly titled book, Achebe dramatically illustrates how imperial historiography erases African subjectivity and complex human tragedy, replacing living reality with colonial propaganda.',
          rubricCriteria: ['4 marks for contrasting rich Igbo interiority with bureaucratic colonial gaze', '3 marks for analyzing the ironic title of the Commissioner’s book', '3 marks for historiographical critique of imperial erasure']
        }
      ]
    }
  }
};

/**
 * Helper to fetch local book content by ID, or generate an enriched local syllabus
 * guide for any book in the directory.
 */
export function getLocalBookContent(
  bookId: string, 
  bookMeta?: {
    id: string;
    title: string;
    author: string;
    authorCountry: string;
    categoryLabel: string;
    summary: string;
    keyTakeaway: string;
    cambridgeStageAlignment: string;
    versionTag?: string;
  }
): LocalBookContent {
  if (LOCAL_BOOKS_DATABASE[bookId]) {
    return LOCAL_BOOKS_DATABASE[bookId];
  }

  // If metadata is provided or generic fallback
  const title = bookMeta?.title || 'Comprehensive Subject Reader';
  const author = bookMeta?.author || 'Distinguished Scholars & Educators';
  const country = bookMeta?.authorCountry || 'Global Heritage';
  const summary = bookMeta?.summary || 'An essential foundational text designed for in-depth mastery, character building, and critical inquiry.';
  const takeaway = bookMeta?.keyTakeaway || 'Deep conceptual understanding, ethical discernment, and practical problem solving.';
  const alignment = bookMeta?.cambridgeStageAlignment || 'Cambridge International Standards & Universal Competencies';
  const version = bookMeta?.versionTag ? ` (${bookMeta.versionTag})` : '';

  return {
    id: bookId,
    title: `${title}${version}`,
    author: author,
    authorBiography: `${author} is an esteemed author and educator from ${country}, renowned for advancing clarity of thought, literary excellence, and moral understanding.`,
    historicalContext: `Authored in the context of ${country}, this work connects directly to universal human values, scientific principles, and intellectual curiosity. Aligned with ${alignment}.`,
    keyThemes: [
      takeaway,
      'Critical thinking and independent reflection',
      'Integrity, perseverance, and stewardship',
      'Practical local and global community application'
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: 'Foundations & Core Principles',
        readingPassage: `${summary}\n\nEvery great discipline begins with fundamental observation. When we approach ${title}, our first duty is to understand the core principles with clarity and humility.\n\n"True education," noted the ancient scholars, "is not the filling of a bucket, but the lighting of a fire." As you read these pages, reflect on how every truth learned must be tested through real-world practice, respect for your community, and dedication to excellence.`,
        vocabulary: [
          { word: 'Foundational', definition: 'Serving as an underlying basis or principle.', exampleSentence: 'Understanding core numbers and words is foundational to all higher learning.' },
          { word: 'Discernment', definition: 'The ability to judge well and distinguish truth from falsehood.', exampleSentence: 'A wise learner develops discernment through careful reading.' },
          { word: 'Stewardship', definition: 'The responsible overseeing and protection of resources entrusted to one.', exampleSentence: 'Good stewardship means using our knowledge to bless our family and community.' }
        ],
        discussionQuestion: `How does the core concept in "${title}" help you solve real challenges in your home or school?`,
        comprehensionQuiz: {
          question: `What is the primary purpose of studying ${title}?`,
          options: [
            'To memorize words without understanding',
            `To develop ${takeaway.toLowerCase()} and practical wisdom`,
            'To rush through without thinking',
            'To keep knowledge secret from others'
          ],
          correctIndex: 1,
          explanation: `The fundamental purpose is to develop ${takeaway.toLowerCase()} and apply it with integrity.`
        }
      },
      {
        chapterNumber: 2,
        title: 'Deep Investigation & Real-World Application',
        readingPassage: `To master any work of literature, science, or moral philosophy, one must look beneath the surface. In ${title}, the author challenges us to examine our habits, our decisions, and our responsibilities to those around us.\n\nConsider how this applies in your daily life: whether you are cultivating a farm, calculating trade profits, programming a computer, or tending to a sick neighbor, the principles outlined here remain constant. Excellence is not an isolated act, but a daily habit formed through quiet discipline.`,
        vocabulary: [
          { word: 'Discipline', definition: 'The practice of training one’s mind and character to act consistently with virtue.', exampleSentence: 'Daily reading discipline builds lasting academic confidence.' },
          { word: 'Perseverance', definition: 'Persistence in doing something despite difficulty or delay in achieving success.', exampleSentence: 'With perseverance, difficult mathematical problems become clear.' }
        ],
        discussionQuestion: 'What is one specific habit you can practice every morning to live out the lessons of this chapter?',
        comprehensionQuiz: {
          question: 'According to this chapter, how is true excellence developed?',
          options: [
            'Through luck and chance',
            'Through daily habits formed by quiet discipline',
            'By copying others without thinking',
            'By giving up when things get hard'
          ],
          correctIndex: 1,
          explanation: 'Excellence is a daily habit formed through consistent discipline and perseverance.'
        }
      },
      {
        chapterNumber: 3,
        title: 'Mastery, Character & Community Leadership',
        readingPassage: `Knowledge without character is dangerous; character without knowledge is powerless. In the final analysis of ${title}, we are called to be world-changers—young men and women who use their gifts to lift up the vulnerable, build honest businesses, heal the environment, and spread peace.\n\nTake the insights from this text and share them with your family. Discuss them around the evening fire or meal table. When an entire household learns together, the entire community rises.`,
        vocabulary: [
          { word: 'Integrity', definition: 'The quality of being honest and having strong moral principles that you never compromise.', exampleSentence: 'A leader with integrity speaks the truth even when no one is watching.' },
          { word: 'Flourishing', definition: 'Developing rapidly and successfully; thriving in health, wisdom, and community.', exampleSentence: 'True education leads to the flourishing of both the individual and society.' }
        ],
        discussionQuestion: 'How can you share the key takeaway of this book with someone younger than you?',
        comprehensionQuiz: {
          question: 'What is the true measure of genuine learning according to the capstone chapter?',
          options: [
            'How many books you keep locked away',
            'Using your knowledge with character to lift up your community',
            'Becoming proud and looking down on others',
            'Forgetting everything once the test is finished'
          ],
          correctIndex: 1,
          explanation: 'Genuine learning is measured by combining knowledge with character to serve and elevate others.'
        }
      }
    ],
    worksheet: {
      title: `${title} - In-Depth Offline Study Worksheet`,
      instructions: 'Complete this worksheet independently or with your parent/mentor. Answer in full sentences in your notebook or print this sheet.',
      fillInTheBlank: [
        { sentence: `The author of this work is _______, representing ${country}.`, missingWord: author.split(' ')[0], hint: 'The first name of the author' },
        { sentence: `The central takeaway focuses on _______ and practical wisdom.`, missingWord: 'character', hint: 'Moral strength and virtue' },
        { sentence: `Knowledge is most powerful when combined with _______ to serve others.`, missingWord: 'integrity', hint: 'Honesty and moral soundness' }
      ],
      writtenResponsePrompts: [
        `1. Summarize the central message of "${title}" in three concise sentences.`,
        `2. How does the key takeaway ("${takeaway}") relate to an obstacle you have faced in your own life?`,
        '3. If you were teaching this book to a group of younger students, what one activity or illustration would you use?'
      ],
      offlineProjectOrActivity: `Practical Application Capstone: Create a one-page summary diagram or family talk guide based on "${title}". Present your findings to your family or study group for 5 minutes without using notes.`,
      markingGuide: 'Full marks awarded for clear synthesis of themes, grammatical precision, and grounded personal application.'
    },
    mockExam: {
      syllabusCode: alignment.slice(0, 20),
      totalMarks: 25,
      timeAllowedMinutes: 35,
      questions: [
        {
          questionNumber: 1,
          marks: 8,
          questionText: `Analyze the main thesis presented in "${title}" and evaluate its significance for modern ethical or scientific thought.`,
          modelAnswer: `The primary thesis of "${title}" asserts that ${summary} Furthermore, the work argues that true progress depends on combining disciplined inquiry with human dignity and ethical responsibility. Its contemporary relevance lies in addressing real-world challenges through systematic understanding rather than superficial shortcuts.`,
          rubricCriteria: ['3 marks for clear thesis articulation', '3 marks for ethical/scientific relevance', '2 marks for coherent argumentative structure']
        },
        {
          questionNumber: 2,
          marks: 8,
          questionText: 'Explain how the author uses rhetorical or narrative techniques to engage the reader’s critical faculties.',
          modelAnswer: 'The author employs concrete everyday examples, vivid analogies, and ethical dilemmas that force the reader to evaluate their own assumptions. By presenting challenges not as abstract theories but as living human realities, the text fosters active reflection rather than passive memorization.',
          rubricCriteria: ['3 marks for identifying rhetorical/narrative techniques', '3 marks for analyzing reader engagement', '2 marks for textual synthesis']
        },
        {
          questionNumber: 3,
          marks: 9,
          questionText: `Synthesize the key takeaway ("${takeaway}") with the requirements of ${alignment}.`,
          modelAnswer: `The takeaway aligns directly with the standards of ${alignment} by fostering higher-order critical thinking, independent problem analysis, and holistic character formation. It prepares the learner not only for standardized examination excellence, but for lifelong self-directed agency.`,
          rubricCriteria: ['3 marks for curriculum alignment analysis', '3 marks for higher-order cognitive evaluation', '3 marks for lifelong agency synthesis']
        }
      ]
    }
  };
}
