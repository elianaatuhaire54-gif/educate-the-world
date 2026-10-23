// World Languages Academy Data: 9 Global Tongues
// Designed specifically for absolute beginners and adults new to languages
// Features phonetic romanization, literal word logic, adult superpower rules, and audio cues

export type LanguageCode = 
  | 'mandarin'
  | 'spanish'
  | 'french'
  | 'hebrew'
  | 'greek'
  | 'latin'
  | 'arabic'
  | 'hindi'
  | 'english';

export interface ScriptLetter {
  symbol: string;
  name: string;
  phonetic: string;
  soundGuide: string; // e.g. "Like 'k' in kite"
  memoryAnchor: string; // "Looks like an open gate..."
  exampleWord: string;
  exampleTranslit: string;
  exampleMeaning: string;
}

export interface SurvivalPhrase {
  id: string;
  native: string;
  phonetic: string; // Syllable-by-syllable phonetic bridge for adults
  literalBreakdown: string; // e.g. "You + good"
  english: string;
  adultEtiquetteTip: string; // Practical adult context
  category: 'greeting' | 'polite' | 'essential' | 'market' | 'help';
}

export interface DialogueLine {
  speaker: string;
  native: string;
  phonetic: string;
  english: string;
  audioText: string;
}

export interface PracticalDialogue {
  id: string;
  title: string;
  scenario: string;
  lines: DialogueLine[];
}

export interface RootMultiplier {
  root: string;
  script?: string;
  meaning: string;
  derivativesInEnglishOrWorld: string[];
  explanation: string;
}

export interface LanguageProfile {
  id: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  family: string;
  speakersCount: string;
  scriptName: string;
  direction: 'ltr' | 'rtl';
  speechLangCode: string; // BCP 47 code for Web Speech API
  adultSuperpower: {
    tagline: string;
    whyItIsEasyForAdults: string;
    cheatCode: string;
  };
  goldenSoundRules: string[];
  scriptLetters: ScriptLetter[];
  survivalPhrases: SurvivalPhrase[];
  dialogues: PracticalDialogue[];
  rootMultipliers: RootMultiplier[];
}

export const WORLD_LANGUAGES: LanguageProfile[] = [
  // 1. MANDARIN CHINESE
  {
    id: 'mandarin',
    name: 'Mandarin Chinese',
    nativeName: '普通话 (Pǔtōnghuà)',
    flag: '🇨🇳',
    family: 'Sino-Tibetan',
    speakersCount: '1.1+ Billion speakers (Most spoken native language in the world)',
    scriptName: 'Simplified Chinese Characters + Pinyin (Phonetic Romanization)',
    direction: 'ltr',
    speechLangCode: 'zh-CN',
    adultSuperpower: {
      tagline: 'Zero Conjugations, Zero Tenses, Zero Gender — Words Never Change!',
      whyItIsEasyForAdults: 'In French or Spanish, one verb has over 40 confusing endings (am, are, was, were, been). In Chinese, the verb never changes! "Wǒ chī" is I eat, "Wǒ zuótiān chī" is I ate yesterday. You simply stack words together like clean building blocks.',
      cheatCode: 'Learn Pinyin (English letters with 4 tone marks: ā, á, ǎ, à) and you can speak and read immediately without memorizing 3,000 characters on day one.'
    },
    goldenSoundRules: [
      'Tone 1 (— High flat): Say "Ahhh" like at the doctor (mā = mother).',
      'Tone 2 (/ Rising): Ask a question like "Huh?" or "What?" (má = hemp).',
      'Tone 3 (v Dip & Rise): Nod your chin down then up like "Well..." (mǎ = horse).',
      'Tone 4 (\\ Falling): Firm, commanding "No!" or "Stop!" (mà = scold).'
    ],
    scriptLetters: [
      { symbol: '人', name: 'Rén', phonetic: 'Rren', soundGuide: 'Like "run" with a soft r/zh sound', memoryAnchor: 'Looks like a walking person with two legs', exampleWord: '好人', exampleTranslit: 'Hǎo rén', exampleMeaning: 'Good person' },
      { symbol: '大', name: 'Dà', phonetic: 'Dah', soundGuide: 'Like "da" in dark', memoryAnchor: 'A person stretching their arms wide to show something BIG', exampleWord: '大人', exampleTranslit: 'Dà rén', exampleMeaning: 'Adult / Grown-up' },
      { symbol: '口', name: 'Kǒu', phonetic: 'Ko-oh', soundGuide: 'Like "co" in cold', memoryAnchor: 'A square open mouth eating or speaking', exampleWord: '门口', exampleTranslit: 'Mén kǒu', exampleMeaning: 'Doorway / Entrance' },
      { symbol: '日', name: 'Rì', phonetic: 'Rree', soundGuide: 'Like "ri" with soft tongue curl', memoryAnchor: 'A sun shining in the sky (square with sunray bar)', exampleWord: '今天', exampleTranslit: 'Jīn tiān', exampleMeaning: 'Today' },
      { symbol: '月', name: 'Yuè', phonetic: 'Yoo-eh', soundGuide: 'Purse lips like "you-air"', memoryAnchor: 'Crescent moon with cloud bands', exampleWord: '月亮', exampleTranslit: 'Yuè liang', exampleMeaning: 'Moon / Month' },
      { symbol: '木', name: 'Mù', phonetic: 'Moo', soundGuide: 'Like "moo" of a cow', memoryAnchor: 'A tree with trunk, branches and roots', exampleWord: '森林', exampleTranslit: 'Sēn lín', exampleMeaning: 'Forest (three trees!)' },
      { symbol: '水', name: 'Shuǐ', phonetic: 'Shway', soundGuide: 'Like "shway"', memoryAnchor: 'Splashing droplets of fresh water', exampleWord: '喝水', exampleTranslit: 'Hē shuǐ', exampleMeaning: 'Drink water' },
      { symbol: '火', name: 'Huǒ', phonetic: 'Hwoh', soundGuide: 'Like "hwoh" in hot', memoryAnchor: 'Flames leaping up from firewood', exampleWord: '火车', exampleTranslit: 'Huǒ chē', exampleMeaning: 'Train (literally "fire car")' }
    ],
    survivalPhrases: [
      { id: 'man-1', native: '你好', phonetic: 'Nǐ hǎo (Nee how)', literalBreakdown: 'You + Good', english: 'Hello / Greetings', adultEtiquetteTip: 'The universal greeting for all settings. For an elder or boss, use 您好 (Nín hǎo) for deep respect.', category: 'greeting' },
      { id: 'man-2', native: '谢谢', phonetic: 'Xiè xie (Sheh-sheh)', literalBreakdown: 'Gratitude + Gratitude', english: 'Thank you very much', adultEtiquetteTip: 'Soft tone on the second syllable. Smile gently.', category: 'polite' },
      { id: 'man-3', native: '不客气', phonetic: 'Bù kè qi (Boo kuh chee)', literalBreakdown: 'Not + Guest + Energy', english: "You're welcome / Don't be polite", adultEtiquetteTip: 'Tells the other person "treat yourself like family, no formalities needed".', category: 'polite' },
      { id: 'man-4', native: '请问', phonetic: 'Qǐng wèn (Ching wen)', literalBreakdown: 'Please + Ask', english: 'Excuse me, may I ask...?', adultEtiquetteTip: 'The magic icebreaker adults use before asking directions or prices.', category: 'essential' },
      { id: 'man-5', native: '多少钱？', phonetic: 'Duō shao qián? (Dwor shao chyen?)', literalBreakdown: 'Many + Few + Money?', english: 'How much does this cost?', adultEtiquetteTip: 'Essential for markets, shops, and business transactions.', category: 'market' },
      { id: 'man-6', native: '太贵了！', phonetic: 'Tài guì le! (Tie gway luh!)', literalBreakdown: 'Too + Expensive + (exclamation)', english: "It's too expensive!", adultEtiquetteTip: 'Said with a friendly smile when bargaining at town markets.', category: 'market' },
      { id: 'man-7', native: '洗手间在哪里？', phonetic: 'Xǐ shǒu jiān zài nǎ lǐ? (Shee show jyen zeye nah lee?)', literalBreakdown: 'Wash + Hand + Room + At + Where?', english: 'Where is the restroom?', adultEtiquetteTip: 'Lifesaving phrase at restaurants, stations, and airports.', category: 'help' },
      { id: 'man-8', native: '我听不懂', phonetic: 'Wǒ tīng bù dǒng (Wor teeng boo dong)', literalBreakdown: 'I + Hear + Not + Understand', english: "I don't understand (spoken)", adultEtiquetteTip: 'Honest, polite sentence. Native speakers will slow down immediately.', category: 'help' },
      { id: 'man-9', native: '很好！', phonetic: 'Hěn hǎo! (Hen how!)', literalBreakdown: 'Very + Good', english: 'Very good! / Excellent!', adultEtiquetteTip: 'Positive encouragement in family, workplace, or shopping.', category: 'essential' },
      { id: 'man-10', native: '再见', phonetic: 'Zài jiàn (Zeye jyen)', literalBreakdown: 'Again + See', english: 'Goodbye / See you again', adultEtiquetteTip: 'Friendly farewell to colleagues, hosts, and merchants.', category: 'greeting' }
    ],
    dialogues: [
      {
        id: 'dia-man-1',
        title: 'Meeting Someone & Introducing Yourself',
        scenario: 'A warm exchange when meeting a colleague or neighbor for the first time.',
        lines: [
          { speaker: 'Li', native: '你好！请问你叫什么名字？', phonetic: 'Nǐ hǎo! Qǐng wèn nǐ jiào shén me míng zi?', english: 'Hello! May I ask, what is your name?', audioText: '你好！请问你叫什么名字？' },
          { speaker: 'You', native: '你好！我叫大卫。我是新手学生。', phonetic: 'Nǐ hǎo! Wǒ jiào Dàwèi. Wǒ shì xīn shǒu xué sheng.', english: 'Hello! My name is David. I am a new student.', audioText: '你好！我叫大卫。我是新手学生。' },
          { speaker: 'Li', native: '很高兴认识你！', phonetic: 'Hěn gāo xìng rèn shi nǐ!', english: 'Very pleased to meet you!', audioText: '很高兴认识你！' },
          { speaker: 'You', native: '我也很高兴认识你！', phonetic: 'Wǒ yě hěn gāo xìng rèn shi nǐ!', english: 'I am also very pleased to meet you!', audioText: '我也很高兴认识你！' }
        ]
      },
      {
        id: 'dia-man-2',
        title: 'At the Market / Food Stall',
        scenario: 'Ordering tea and fruit at a local market.',
        lines: [
          { speaker: 'You', native: '老板，请问这个多少钱？', phonetic: 'Lǎo bǎn, qǐng wèn zhè ge duō shao qián?', english: 'Shopkeeper, may I ask how much this is?', audioText: '老板，请问这个多少钱？' },
          { speaker: 'Shopkeeper', native: '这个五块钱。你要喝茶吗？', phonetic: 'Zhè ge wǔ kuài qián. Nǐ yào hē chá ma?', english: 'This is 5 yuan. Do you want to drink tea?', audioText: '这个五块钱。你要喝茶吗？' },
          { speaker: 'You', native: '好的，我要一杯热茶，谢谢！', phonetic: 'Hǎo de, wǒ yào yī bēi rè chá, xiè xie!', english: 'Great, I want one cup of hot tea, thank you!', audioText: '好的，我要一杯热茶，谢谢！' },
          { speaker: 'Shopkeeper', native: '不客气，请慢用！', phonetic: 'Bù kè qi, qǐng màn yòng!', english: "You're welcome, please enjoy!", audioText: '不客气，请慢用！' }
        ]
      }
    ],
    rootMultipliers: [
      { root: '车 (Chē)', meaning: 'Vehicle / Cart / Wheeled device', derivativesInEnglishOrWorld: ['火车 (Fire car = Train)', '汽车 (Gas car = Automobile)', '自行车 (Self-walk vehicle = Bicycle)', '救护车 (Save-protect car = Ambulance)'], explanation: 'Learn one character (车) and you instantly know 10 modern transportation words without memorizing new roots.' },
      { root: '电 (Diàn)', meaning: 'Electricity / Lightning', derivativesInEnglishOrWorld: ['电话 (Electric speech = Telephone)', '电脑 (Electric brain = Computer)', '电影 (Electric shadow = Movie / Cinema)', '电池 (Electric pool = Battery)'], explanation: 'Whenever you see "电", it relates to electricity, electronics, and digital technology.' }
    ]
  },

  // 2. SPANISH
  {
    id: 'spanish',
    name: 'Spanish',
    nativeName: 'Español (Castellano)',
    flag: '🇪🇸',
    family: 'Romance (Indo-European)',
    speakersCount: '580+ Million speakers across 21 countries',
    scriptName: 'Latin Alphabet with Ñ and accent marks (á, é, í, ó, ú)',
    direction: 'ltr',
    speechLangCode: 'es-ES',
    adultSuperpower: {
      tagline: '100% Phonetic — Every Vowel Sounds the Exact Same Every Single Time!',
      whyItIsEasyForAdults: 'English vowels are notoriously chaotic (think of "tough", "through", "though", "bough"). In Spanish, the 5 vowels (A, E, I, O, U) NEVER change sound. Once you learn 5 vowel sounds, you can read aloud any Spanish newspaper, street sign, or novel with perfect pronunciation!',
      cheatCode: 'Over 3,000 English words ending in "-tion" become Spanish by changing to "-ción" (Nation -> Nación, Action -> Acción, Situation -> Situación, Communication -> Comunicación).'
    },
    goldenSoundRules: [
      'A = "ah" like father · E = "eh" like elephant · I = "ee" like see · O = "oh" like open · U = "oo" like moon.',
      'LL sounds like "Y" in yes (Tortilla = tor-tee-yah, Pollo = po-yoh).',
      'H is always completely silent (Hola is pronounced "Oh-lah", Hotel is "Oh-tel").',
      'J sounds like a breathy English "H" (Jalapeño = hah-lah-peh-nyoh).'
    ],
    scriptLetters: [
      { symbol: 'A a', name: 'A', phonetic: 'Ah', soundGuide: 'Always "ah" as in father', memoryAnchor: 'Open wide: Ahhhh', exampleWord: 'Agua', exampleTranslit: 'Ah-gwah', exampleMeaning: 'Water' },
      { symbol: 'E e', name: 'E', phonetic: 'Eh', soundGuide: 'Always "eh" as in red', memoryAnchor: 'Quick, crisp "eh"', exampleWord: 'Esperanza', exampleTranslit: 'Es-peh-ran-zah', exampleMeaning: 'Hope' },
      { symbol: 'I i', name: 'I', phonetic: 'Ee', soundGuide: 'Always "ee" as in tree', memoryAnchor: 'Smile wide: Eeee', exampleWord: 'Isla', exampleTranslit: 'Ees-lah', exampleMeaning: 'Island' },
      { symbol: 'O o', name: 'O', phonetic: 'Oh', soundGuide: 'Always "oh" as in open', memoryAnchor: 'Round lips: Ohhh', exampleWord: 'Ojo', exampleTranslit: 'Oh-hoh', exampleMeaning: 'Eye' },
      { symbol: 'U u', name: 'U', phonetic: 'Oo', soundGuide: 'Always "oo" as in boot', memoryAnchor: 'Whistling lips: Oooo', exampleWord: 'Uno', exampleTranslit: 'Oo-noh', exampleMeaning: 'One' },
      { symbol: 'Ñ ñ', name: 'eñe', phonetic: 'Ny', soundGuide: 'Like "ny" in canyon or onion', memoryAnchor: 'The wavy tilde ~ looks like an ocean wave', exampleWord: 'Niño', exampleTranslit: 'Nee-nyoh', exampleMeaning: 'Child' },
      { symbol: 'LL ll', name: 'doble ele', phonetic: 'Y', soundGuide: 'Like "y" in yellow', memoryAnchor: 'Two tall towers side-by-side', exampleWord: 'Lluvia', exampleTranslit: 'Yoo-vyah', exampleMeaning: 'Rain' },
      { symbol: 'RR rr', name: 'erre doble', phonetic: 'Trilled R', soundGuide: 'Vibrate tip of tongue against roof of mouth', memoryAnchor: 'Engine revving: rrrr!', exampleWord: 'Tierra', exampleTranslit: 'Tyeh-rrah', exampleMeaning: 'Earth / Soil' }
    ],
    survivalPhrases: [
      { id: 'spa-1', native: '¡Hola! Buenos días', phonetic: 'Oh-lah! Bway-nohs dee-ahs', literalBreakdown: 'Hello! + Good + Days', english: 'Hello! Good morning', adultEtiquetteTip: 'Warm, respectful greeting across all of Latin America and Spain.', category: 'greeting' },
      { id: 'spa-2', native: 'Por favor y Gracias', phonetic: 'Por fah-vor ee Grah-syahs', literalBreakdown: 'For + Favor + and + Thanks', english: 'Please and Thank you', adultEtiquetteTip: 'Polite essentials that open every conversation positively.', category: 'polite' },
      { id: 'spa-3', native: 'De nada / Con gusto', phonetic: 'Deh nah-dah / Kohn goos-toh', literalBreakdown: 'Of + Nothing / With + Pleasure', english: "You're welcome / With pleasure", adultEtiquetteTip: "'Con gusto' is especially affectionate and polite in everyday encounters.", category: 'polite' },
      { id: 'spa-4', native: 'Mucho gusto en conocerle', phonetic: 'Moo-choh goos-toh en koh-noh-ser-leh', literalBreakdown: 'Much + Pleasure + in + Knowing you', english: 'Pleased to meet you', adultEtiquetteTip: 'Polite adult phrase during first business or social meetings.', category: 'greeting' },
      { id: 'spa-5', native: '¿Cuánto cuesta esto?', phonetic: 'Kwan-toh kwes-tah es-toh?', literalBreakdown: 'How much + Costs + this?', english: 'How much does this cost?', adultEtiquetteTip: 'Direct, clear question for markets, supermarkets, and taxis.', category: 'market' },
      { id: 'spa-6', native: '¿Dónde está el baño / la farmacia?', phonetic: 'Dohn-deh es-tah el bah-nyoh / lah far-mah-syah?', literalBreakdown: 'Where + Is + the restroom / the pharmacy?', english: 'Where is the restroom / the pharmacy?', adultEtiquetteTip: 'Essential survival question for travel and health.', category: 'help' },
      { id: 'spa-7', native: 'Disculpe, hablo solo un poco', phonetic: 'Dees-kool-peh, ah-bloh soh-loh oon poh-koh', literalBreakdown: 'Excuse me, + I speak + only + a + little', english: 'Excuse me, I only speak a little Spanish', adultEtiquetteTip: 'People immediately smile and speak gently and clearly.', category: 'help' },
      { id: 'spa-8', native: '¿Puede hablar más despacio, por favor?', phonetic: 'Pway-deh ah-blar mahs des-pah-syoh, por fah-vor?', literalBreakdown: 'Can you + Speak + more + slow, + please?', english: 'Could you speak more slowly, please?', adultEtiquetteTip: 'Crucial phrase that gives you control over the conversation speed.', category: 'help' },
      { id: 'spa-9', native: '¡Que tenga un buen día!', phonetic: 'Keh teng-gah oon bwen dee-ah!', literalBreakdown: 'That you have + a + good + day!', english: 'Have a wonderful day!', adultEtiquetteTip: 'Kind parting phrase for shopkeepers, taxi drivers, and neighbors.', category: 'polite' },
      { id: 'spa-10', native: '¡Hasta luego! / ¡Nos vemos!', phonetic: 'Ahs-tah lway-goh! / Nohs veh-mohs!', literalBreakdown: 'Until + Later! / We + See each other!', english: 'See you later / Until next time!', category: 'greeting', adultEtiquetteTip: 'Natural, friendly farewell among friends and colleagues.' }
    ],
    dialogues: [
      {
        id: 'dia-spa-1',
        title: 'Ordering Coffee & Food at a Café',
        scenario: 'A morning stop at a local bakery or cafe.',
        lines: [
          { speaker: 'Waiter', native: '¡Buenos días! ¿Qué le gustaría tomar hoy?', phonetic: 'Bway-nohs dee-ahs! Keh leh goos-tah-ree-ah toh-mar oy?', english: 'Good morning! What would you like to drink today?', audioText: '¡Buenos días! ¿Qué le gustaría tomar hoy?' },
          { speaker: 'You', native: 'Buenos días. Un café con leche y pan fresco, por favor.', phonetic: 'Bway-nohs dee-ahs. Oon kah-feh kohn leh-cheh ee pahn fres-koh, por fah-vor.', english: 'Good morning. A coffee with milk and fresh bread, please.', audioText: 'Buenos días. Un café con leche y pan fresco, por favor.' },
          { speaker: 'Waiter', native: '¡Con mucho gusto! ¿Algo más para usted?', phonetic: 'Kohn moo-choh goos-toh! Ahl-goh mahs pah-rah oos-ted?', english: 'With great pleasure! Anything else for you?', audioText: '¡Con mucho gusto! ¿Algo más para usted?' },
          { speaker: 'You', native: 'Nada más, muchas gracias.', phonetic: 'Nah-dah mahs, moo-chahs grah-syahs.', english: 'Nothing else, thank you very much.', audioText: 'Nada más, muchas gracias.' }
        ]
      }
    ],
    rootMultipliers: [
      { root: 'El sufijo -CIÓN', meaning: 'Process or result of action', derivativesInEnglishOrWorld: ['Celebración (Celebration)', 'Educación (Education)', 'Información (Information)', 'Generación (Generation)'], explanation: 'Instantly convert hundreds of English -tion words by changing the ending to -ción and accenting the O.' },
      { root: 'El prefijo RE-', meaning: 'Repetition or doing again', derivativesInEnglishOrWorld: ['Rehacer (Redo)', 'Reabrir (Reopen)', 'Reconstruir (Rebuild)', 'Reorganizar (Reorganize)'], explanation: 'Just like English, add "re-" to any Spanish verb to express repeating the action.' }
    ]
  },

  // 3. FRENCH
  {
    id: 'french',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    family: 'Romance (Indo-European)',
    speakersCount: '320+ Million speakers across 29 countries in Europe, Africa, and the Americas',
    scriptName: 'Latin Alphabet with accents (é, è, ê, ç, à, ù)',
    direction: 'ltr',
    speechLangCode: 'fr-FR',
    adultSuperpower: {
      tagline: 'Nearly 45% of All English Words Come Directly From French!',
      whyItIsEasyForAdults: 'Because of the Norman Conquest in 1066, almost half of the English language is actually old French! Words like "restaurant", "hotel", "menu", "impossible", "different", "president", "problem", and "music" are already French words you already know.',
      cheatCode: 'French words are spoken with a smooth, flowing legato rhythm (called "liaison"). Never stress words hard on the first syllable; let the voice gently rest on the very last syllable.'
    },
    goldenSoundRules: [
      'Final consonants are usually silent: "Paris" is pronounced "Pah-ree", "vous" is "voo", "chat" (cat) is "shah".',
      'OU sounds like "oo" in moon (Bonjour = bon-zhoor).',
      'OI sounds like "wah" (Bonsoir = bon-swahr, moi = mwah).',
      'Ç (cedilla) turns C into a soft "S" before A, O, U (Français = frahn-seh, ça va = sah vah).'
    ],
    scriptLetters: [
      { symbol: 'É é', name: 'E accent aigu', phonetic: 'Ay', soundGuide: 'Like "ay" in day or say', memoryAnchor: 'Slanted upward / like climbing a hill', exampleWord: 'Café', exampleTranslit: 'Kah-fay', exampleMeaning: 'Coffee / Cafe' },
      { symbol: 'È è', name: 'E accent grave', phonetic: 'Eh', soundGuide: 'Open "eh" like bed', memoryAnchor: 'Slanted downward \\ like walking down stairs', exampleWord: 'Mère', exampleTranslit: 'Mehr', exampleMeaning: 'Mother' },
      { symbol: 'Ê ê', name: 'E accent circonflexe', phonetic: 'Eh', soundGuide: 'Long open "eh"', memoryAnchor: 'Wears a little roof / hat ^', exampleWord: 'Fête', exampleTranslit: 'Feht', exampleMeaning: 'Party / Festival (English: Feast!)' },
      { symbol: 'Ç ç', name: 'C cédille', phonetic: 'S', soundGuide: 'Soft "S" sound', memoryAnchor: 'A little hook under the C', exampleWord: 'Français', exampleTranslit: 'Frahn-seh', exampleMeaning: 'French' },
      { symbol: 'OU ou', name: 'Digraphe OU', phonetic: 'Oo', soundGuide: 'Like "oo" in loop', memoryAnchor: 'Round lips blowing out a candle', exampleWord: 'Bonjour', exampleTranslit: 'Bon-zhoor', exampleMeaning: 'Good day / Hello' },
      { symbol: 'OI oi', name: 'Digraphe OI', phonetic: 'Wah', soundGuide: 'Like "wah" in water', memoryAnchor: 'Sounds like joyous laughter: Wah!', exampleWord: 'Bonsoir', exampleTranslit: 'Bon-swahr', exampleMeaning: 'Good evening' }
    ],
    survivalPhrases: [
      { id: 'fre-1', native: 'Bonjour ! Comment allez-vous ?', phonetic: 'Bon-zhoor! Koh-mahn tah-lay voo?', literalBreakdown: 'Good day! + How + go + you?', english: 'Hello! How are you? (Polite / Formal)', adultEtiquetteTip: 'Always say "Bonjour" immediately when walking into any French shop, bakery, or office before saying anything else!', category: 'greeting' },
      { id: 'fre-2', native: "S'il vous plaît et Merci beaucoup", phonetic: 'Seel voo pleh ay Mehr-see boh-koo', literalBreakdown: 'If it pleases you + and + Thanks much', english: 'Please and Thank you very much', adultEtiquetteTip: 'The two most respected phrases in francophone culture.', category: 'polite' },
      { id: 'fre-3', native: 'De rien / Je vous en prie', phonetic: 'Duh ryehn / Zhuh voo zahn pree', literalBreakdown: 'Of nothing / I pray you of it', english: "You're welcome / My pleasure", adultEtiquetteTip: "'Je vous en prie' is very polite and professional for adult situations.", category: 'polite' },
      { id: 'fre-4', native: 'Excusez-moi, où est la gare ?', phonetic: 'Ex-kew-zay mwah, oo ay lah gahr?', literalBreakdown: 'Excuse me, + where + is + the station?', english: 'Excuse me, where is the train station?', adultEtiquetteTip: 'Polite travel essential for public transit and navigation.', category: 'help' },
      { id: 'fre-5', native: 'Combien ça coûte ?', phonetic: 'Kohm-byen sah koot?', literalBreakdown: 'How much + that + costs?', english: 'How much does that cost?', adultEtiquetteTip: 'Clear, concise market and shopping phrase.', category: 'market' },
      { id: 'fre-6', native: 'Je ne comprends pas bien', phonetic: 'Zhuh nuh kohm-prahn pah byehn', literalBreakdown: 'I + not + understand + not + well', english: "I don't understand very well", adultEtiquetteTip: 'Shows good will; French speakers will gently rephrase and assist.', category: 'help' },
      { id: 'fre-7', native: 'Parlez-vous anglais ?', phonetic: 'Par-lay voo ahn-gleh?', literalBreakdown: 'Speak you + English?', english: 'Do you speak English?', adultEtiquetteTip: 'Asking in French first shows courtesy and receives far warmer responses.', category: 'help' },
      { id: 'fre-8', native: 'L’addition, s’il vous plaît', phonetic: 'Lah-dee-syohn, seel voo pleh', literalBreakdown: 'The bill, + if you please', english: 'The check / bill, please (at restaurant)', adultEtiquetteTip: 'In French dining, the waiter will never bring the bill until you ask for it.', category: 'market' },
      { id: 'fre-9', native: 'Bonne journée !', phonetic: 'Buhn zhoor-nay!', literalBreakdown: 'Good + day (the whole day long)!', english: 'Have a great day ahead!', adultEtiquetteTip: 'Warm, positive parting wish to coworkers and merchants.', category: 'polite' },
      { id: 'fre-10', native: 'Au revoir et à bientôt !', phonetic: 'Oh ruh-vwahr ay ah byehn-toh!', literalBreakdown: 'To the seeing again + and + to soon!', english: 'Goodbye and see you soon!', adultEtiquetteTip: 'Standard, friendly farewell.', category: 'greeting' }
    ],
    dialogues: [
      {
        id: 'dia-fre-1',
        title: 'Buying Bread at the Boulangerie',
        scenario: 'A delightful everyday French ritual: buying fresh bread.',
        lines: [
          { speaker: 'Baker', native: 'Bonjour madame / monsieur ! Que désirez-vous ?', phonetic: 'Bon-zhoor mah-dahm / muh-syuh! Kuh day-zee-ray voo?', english: 'Good day! What would you like?', audioText: 'Bonjour madame / monsieur ! Que désirez-vous ?' },
          { speaker: 'You', native: 'Bonjour ! Une baguette tradition et deux croissants, s’il vous plaît.', phonetic: 'Bon-zhoor! Een bah-get trah-dee-syohn ay duh krwah-sahn, seel voo pleh.', english: 'Good day! One traditional baguette and two croissants, please.', audioText: 'Bonjour ! Une baguette tradition et deux croissants, s’il vous plaît.' },
          { speaker: 'Baker', native: 'Voilà ! Ça fait trois euros cinquante.', phonetic: 'Vwah-lah! Sah fay trwah zew-roh sehn-kahnt.', english: 'Here you go! That makes 3 euros 50.', audioText: 'Voilà ! Ça fait trois euros cinquante.' },
          { speaker: 'You', native: 'Merci beaucoup ! Bonne journée !', phonetic: 'Mehr-see boh-koo! Buhn zhoor-nay!', english: 'Thank you very much! Have a great day!', audioText: 'Merci beaucoup ! Bonne journée !' }
        ]
      }
    ],
    rootMultipliers: [
      { root: 'Le suffixe -EUR', meaning: 'Person or thing performing an action (like English -er / -or)', derivativesInEnglishOrWorld: ['Professeur (Teacher)', 'Directeur (Director)', 'Conducteur (Driver)', 'Chanteur (Singer)'], explanation: 'Recognize the agent/doer immediately by spotting "-eur".' },
      { root: 'La racine BIEN-', meaning: 'Good / Well', derivativesInEnglishOrWorld: ['Bientôt (Soon)', 'Bienvenue (Welcome)', 'Bientraitance (Kind care)', 'Bienveillant (Benevolent)'], explanation: 'Just like in English "benefit" or "benevolent", "bien" always signals goodness and well-being.' }
    ]
  },

  // 4. HEBREW
  {
    id: 'hebrew',
    name: 'Hebrew',
    nativeName: 'עִבְרִית (Ivrit)',
    flag: '🇮🇱',
    family: 'Afroasiatic (Semitic)',
    speakersCount: '9+ Million speakers; language of the Hebrew Bible and modern Israel',
    scriptName: 'Hebrew Alphabet (22 Consonants, Right-to-Left, with Niqqud Vowel Dots)',
    direction: 'rtl',
    speechLangCode: 'he-IL',
    adultSuperpower: {
      tagline: 'The 3-Letter Root System (Shoresh) — Decodes Hundreds of Words Like Magic!',
      whyItIsEasyForAdults: 'Hebrew is built on pure mathematical elegance. Every family of words shares a 3-consonant root (Shoresh). For example, the root ש-ל-ם (Sh-L-M) means "wholeness / peace". From this single root, you get: Shalom (Peace/Hello), Mushlam (Perfect), Tashlum (Payment), and Lehishalem (To be complete)! Learn one 3-letter root, and you automatically understand 10-15 related words.',
      cheatCode: 'Read from Right to Left (like unwinding a scroll). Modern Hebrew has only 3 basic tenses: Past, Present, and Future. No complicated subjunctive moods to memorize.'
    },
    goldenSoundRules: [
      'Read from RIGHT to LEFT: עִבְרִית is read right-to-left as "Iv-rit".',
      'The "Ch" sound (letter Chet ח or Chaf כ) is a guttural sound from the back of the throat like "Bach" in German.',
      'Shalom שָׁלוֹם has three parts: Shin (Sh), Lamed (L), and Mem (M).',
      'Niqqud: Little dots and dashes under letters show vowels for beginners (a line _ is "ah", a dot . is "ee").'
    ],
    scriptLetters: [
      { symbol: 'א', name: 'Aleph', phonetic: 'Silent / Breath', soundGuide: 'Takes the sound of whatever vowel sits under it', memoryAnchor: 'First letter; looks like a crossbar joining heaven and earth', exampleWord: 'אַבָּא', exampleTranslit: 'Abba', exampleMeaning: 'Father / Dad' },
      { symbol: 'ב', name: 'Bet / Vet', phonetic: 'B or V', soundGuide: 'B with a dot inside (בּ), V without dot (ב)', memoryAnchor: 'Looks like a House with an open door (Beit = House!)', exampleWord: 'בַּיִת', exampleTranslit: 'Bayit', exampleMeaning: 'House / Home' },
      { symbol: 'ג', name: 'Gimel', phonetic: 'G', soundGuide: 'Hard "G" as in garden', memoryAnchor: 'Looks like a walking person (Gamel = Camel)', exampleWord: 'גָּדוֹל', exampleTranslit: 'Gadol', exampleMeaning: 'Big / Great' },
      { symbol: 'ד', name: 'Dalet', phonetic: 'D', soundGuide: 'Like "D" in door', memoryAnchor: 'Looks like a doorway lintel (Delet = Door)', exampleWord: 'דֶּרֶךְ', exampleTranslit: 'Derech', exampleMeaning: 'Way / Path / Road' },
      { symbol: 'ה', name: 'He', phonetic: 'H', soundGuide: 'Gentle "H" sound like hope', memoryAnchor: 'An open window allowing air/breath', exampleWord: 'הַלְלוּיָהּ', exampleTranslit: 'Hallelujah', exampleMeaning: 'Praise God' },
      { symbol: 'מ', name: 'Mem', phonetic: 'M', soundGuide: 'Like "M" in mother', memoryAnchor: 'Flowing water waves (Mayim = Water)', exampleWord: 'מַיִם', exampleTranslit: 'Mayim', exampleMeaning: 'Water' },
      { symbol: 'ש', name: 'Shin / Sin', phonetic: 'Sh or S', soundGuide: 'Sh with dot on right (שׁ), S with dot on left (שׂ)', memoryAnchor: 'Looks like three leaping flames of fire', exampleWord: 'שָׁלוֹם', exampleTranslit: 'Shalom', exampleMeaning: 'Peace / Hello' }
    ],
    survivalPhrases: [
      { id: 'heb-1', native: 'שָׁלוֹם', phonetic: 'Shah-lohm', literalBreakdown: 'Wholeness / Peace', english: 'Hello / Peace / Goodbye', adultEtiquetteTip: 'The ancient and modern greeting. Means not merely absence of conflict, but full flourishing and inner harmony.', category: 'greeting' },
      { id: 'heb-2', native: 'תּוֹדָה רַבָּה', phonetic: 'Toh-dah rah-bah', literalBreakdown: 'Thanks + Many / Great', english: 'Thank you very much', adultEtiquetteTip: 'Warm, universal expression of appreciation in daily life.', category: 'polite' },
      { id: 'heb-3', native: 'בְּבַקָּשָׁה', phonetic: 'B\'vah-kah-shah', literalBreakdown: 'In request / By petition', english: "Please / You're welcome / Here you go", adultEtiquetteTip: 'Multi-purpose word: use it when asking for something, when handing something over, or answering thank you.', category: 'polite' },
      { id: 'heb-4', native: 'בֹּקֶר טוֹב / עֶרֶב טוֹב', phonetic: 'Boh-ker tohv / Eh-rev tohv', literalBreakdown: 'Morning + Good / Evening + Good', english: 'Good morning / Good evening', adultEtiquetteTip: 'The standard response is "Boker Or" (Morning of light!).', category: 'greeting' },
      { id: 'heb-5', native: 'סְלִיחָה', phonetic: 'Slee-chah', literalBreakdown: 'Forgiveness / Pardon', english: 'Excuse me / Sorry', adultEtiquetteTip: 'Essential for navigating buses, markets, or getting attention politely.', category: 'help' },
      { id: 'heb-6', native: 'כַּמָּה זֶה עוֹלֶה?', phonetic: 'Kah-mah zeh oh-leh?', literalBreakdown: 'How much + this + ascends / costs?', english: 'How much does this cost?', adultEtiquetteTip: 'Standard phrase in open markets (Shuk) and stores.', category: 'market' },
      { id: 'heb-7', native: 'אֵיפֹה הַשֵּׁרוּתִים?', phonetic: 'Ey-foh ha-shey-roo-teem?', literalBreakdown: 'Where + the services / restrooms?', english: 'Where are the restrooms?', adultEtiquetteTip: 'Clear, polite travel phrase.', category: 'help' },
      { id: 'heb-8', native: 'הַכֹּל בְּסֵדֶר', phonetic: 'Ha-kohl b\'seh-der', literalBreakdown: 'All + in order', english: "Everything is okay / It's all good", adultEtiquetteTip: 'Extremely popular everyday reassuring Israeli idiom.', category: 'essential' },
      { id: 'heb-9', native: 'אֲנִי לוֹמֵד עִבְרִית', phonetic: 'Ah-nee loh-med eev-reet', literalBreakdown: 'I + learn + Hebrew', english: 'I am learning Hebrew', adultEtiquetteTip: 'Locals are thrilled to hear this and will patiently encourage you.', category: 'help' },
      { id: 'heb-10', native: 'לְהִתְרָאוֹת', phonetic: 'Leh-heet-rah-oht', literalBreakdown: 'To see one another again', english: 'See you later / Farewell', adultEtiquetteTip: 'Classic polite farewell.', category: 'greeting' }
    ],
    dialogues: [
      {
        id: 'dia-heb-1',
        title: 'Meeting at the Market (Shuk)',
        scenario: 'Shopping for fresh fruit and olives in Jerusalem or Tel Aviv.',
        lines: [
          { speaker: 'Merchant', native: 'שָׁלוֹם חָבֵר! מָה נִשְׁמָע?', phonetic: 'Shalom chaver! Mah neesh-mah?', english: 'Hello friend! What is heard? (How are you?)', audioText: 'שלום חבר! מה נשמע?' },
          { speaker: 'You', native: 'הַכֹּל טוֹב, תּוֹדָה! כַּמָּה זֶה עוֹלֶה?', phonetic: 'Ha-kohl tohv, toh-dah! Kah-mah zeh oh-leh?', english: 'All is good, thank you! How much does this cost?', audioText: 'הכל טוב, תודה! כמה זה עולה?' },
          { speaker: 'Merchant', native: 'עֲשָׂרָה שְׁקָלִים. הַתַּפּוּחִים מְצוּיָנִים הַיּוֹם!', phonetic: 'Ah-sah-rah shkah-leem. Ha-tah-poo-cheem meh-tsoo-yah-neem ha-yohm!', english: 'Ten shekels. The apples are wonderful today!', audioText: 'עשרה שקלים. התפוחים מצוינים היום!' },
          { speaker: 'You', native: 'מְעֻלֶּה! תֵּן לִי בְּבַקָּשָׁה.', phonetic: 'Meh-oo-leh! Teyn lee b\'vah-kah-shah.', english: 'Excellent! Give me some please.', audioText: 'מעולה! תן לי בבקשה.' }
        ]
      }
    ],
    rootMultipliers: [
      { root: 'שׁ-ל-ם (Sh-L-M)', script: 'שלם', meaning: 'Wholeness, completeness, peace', derivativesInEnglishOrWorld: ['Shalom (Peace)', 'Mushlam (Perfect / Complete)', 'Tashlum (Payment)', 'Shalem (Whole)'], explanation: 'Ancient Semitic root indicating wholeness and restored relationship.' },
      { root: 'ב-ר-ך (B-R-K)', script: 'ברך', meaning: 'Blessing, to bestow good upon', derivativesInEnglishOrWorld: ['Baruch (Blessed)', 'Beracha (A blessing)', 'Berech (Knee - to bend knee in gratitude)'], explanation: 'Foundational root for all blessings and Thanksgiving in Hebrew literature.' }
    ]
  },

  // 5. GREEK
  {
    id: 'greek',
    name: 'Greek',
    nativeName: 'Ελληνικά (Ellinika)',
    flag: '🇬🇷',
    family: 'Hellenic (Indo-European)',
    speakersCount: '13.5+ Million speakers; language of Homer, Philosophy, Science, and New Testament',
    scriptName: 'Greek Alphabet (24 Letters: Alpha to Omega)',
    direction: 'ltr',
    speechLangCode: 'el-GR',
    adultSuperpower: {
      tagline: 'You Already Speak Greek! It Is the Vocabulary of Medicine, Biology, and Astronomy',
      whyItIsEasyForAdults: 'Every adult already uses Greek every single day: "Bio-logy" (Bios = Life, Logos = Study), "Photo-graph" (Photos = Light, Grapho = Write), "Tele-phone" (Tele = Far, Phone = Voice), "Micro-scope" (Mikros = Small, Skopeo = Look). Greek is not a foreign mystery; it is the source code of human science, geometry, and ethics.',
      cheatCode: 'The 24 letters of the Greek alphabet are identical to math and science symbols you already know: Alpha (α), Beta (β), Gamma (γ), Delta (δ), Pi (π), Omega (ω).'
    },
    goldenSoundRules: [
      'Gamma (γ) sounds like a soft, breathy "y" before e and i, or a rolling soft guttural before a, o, u.',
      'Delta (δ) sounds like the soft "th" in "this" or "father" (never a hard English D!).',
      'Theta (θ) sounds like the unvoiced "th" in "think" or "theater".',
      'Words have clear stress accents (΄) telling you exactly which syllable to raise your voice on!'
    ],
    scriptLetters: [
      { symbol: 'Α α', name: 'Alpha', phonetic: 'Ah', soundGuide: 'Open "ah" as in father', memoryAnchor: 'First letter; origin of English letter A', exampleWord: 'Αγάπη', exampleTranslit: 'Ah-gah-pee', exampleMeaning: 'Agape (Selfless unconditional love)' },
      { symbol: 'Β β', name: 'Beta / Vita', phonetic: 'V', soundGuide: 'Like "V" in victory in modern Greek', memoryAnchor: 'Looks like a butterfly wing', exampleWord: 'Βιβλίο', exampleTranslit: 'Veev-lee-oh', exampleMeaning: 'Book (Origin of Bible!)' },
      { symbol: 'Γ γ', name: 'Gamma', phonetic: 'G / Y', soundGuide: 'Soft breathy "y" sound or guttural g', memoryAnchor: 'Looks like a sprouting plant twig', exampleWord: 'Γη', exampleTranslit: 'Yee', exampleMeaning: 'Earth / Soil (Origin of Geo-graphy!)' },
      { symbol: 'Δ δ', name: 'Delta', phonetic: 'Th', soundGuide: 'Voiced "th" like "the" and "that"', memoryAnchor: 'A triangle river delta or doorway', exampleWord: 'Δρόμος', exampleTranslit: 'Dhroh-mohs', exampleMeaning: 'Road / Street' },
      { symbol: 'Θ θ', name: 'Theta', phonetic: 'Th', soundGuide: 'Like "th" in theater and therapy', memoryAnchor: 'A circle with a belt in the middle', exampleWord: 'Θεός', exampleTranslit: 'Theh-ohs', exampleMeaning: 'God (Origin of Theology!)' },
      { symbol: 'Λ λ', name: 'Lambda', phonetic: 'L', soundGuide: 'Clear "L" as in light', memoryAnchor: 'Two walking legs', exampleWord: 'Λόγος', exampleTranslit: 'Loh-gohs', exampleMeaning: 'Word / Reason / Logic' },
      { symbol: 'Π π', name: 'Pi', phonetic: 'P', soundGuide: 'Crisp "P" as in peace', memoryAnchor: 'The famous circle math symbol 3.14159!', exampleWord: 'Πόλις', exampleTranslit: 'Poh-lees', exampleMeaning: 'City (Origin of Metropolis & Politics!)' },
      { symbol: 'Ω ω', name: 'Omega', phonetic: 'Oh', soundGuide: 'Long open "oh" as in ocean', memoryAnchor: 'The last letter: "I am the Alpha and the Omega"', exampleWord: 'Ώρα', exampleTranslit: 'Oh-rah', exampleMeaning: 'Hour / Time' }
    ],
    survivalPhrases: [
      { id: 'gre-1', native: 'Γεια σας! (Formal) / Γεια σου! (Casual)', phonetic: 'Yah sahs! / Yah soo!', literalBreakdown: 'Health + to you (plural/singular)', english: 'Hello! (Literally: Health to you!)', adultEtiquetteTip: 'The most beautiful greeting: wishing the other person good bodily health.', category: 'greeting' },
      { id: 'gre-2', native: 'Ευχαριστώ πολύ', phonetic: 'Ef-chah-ree-stoh poh-lee', literalBreakdown: 'Good grace/favor + Much', english: 'Thank you very much (Origin of Eucharist!)', adultEtiquetteTip: 'Universal heartfelt expression of gratitude.', category: 'polite' },
      { id: 'gre-3', native: 'Παρακαλώ', phonetic: 'Pah-rah-kah-loh', literalBreakdown: 'I call beside / I request', english: "Please / You're welcome", adultEtiquetteTip: 'Use for both "please" and "you are welcome".', category: 'polite' },
      { id: 'gre-4', native: 'Καλημέρα! / Καλησπέρα!', phonetic: 'Kah-lee-meh-rah! / Kah-lee-speh-rah!', literalBreakdown: 'Good day! / Good evening!', english: 'Good morning! / Good evening!', adultEtiquetteTip: 'Always greet when entering a shop or meeting neighbors.', category: 'greeting' },
      { id: 'gre-5', native: 'Με συγχωρείτε', phonetic: 'Meh seen-choh-ree-teh', literalBreakdown: 'Pardon me / Excuse me', english: 'Excuse me / I am sorry', adultEtiquetteTip: 'Polite way to ask for attention or apologize.', category: 'help' },
      { id: 'gre-6', native: 'Πόσο κοστίζει αυτό;', phonetic: 'Poh-soh kohs-tee-zee af-toh?', literalBreakdown: 'How much + costs + this?', english: 'How much does this cost?', adultEtiquetteTip: 'Practical shopping and market question.', category: 'market' },
      { id: 'gre-7', native: 'Πού είναι το νοσοκομείο;', phonetic: 'Poo ee-neh toh noh-soh-koh-mee-oh?', literalBreakdown: 'Where + is + the hospital?', english: 'Where is the hospital?', adultEtiquetteTip: 'Crucial emergency and health travel phrase.', category: 'help' },
      { id: 'gre-8', native: 'Δεν καταλαβαίνω καλά', phonetic: 'Dhen kah-tah-lah-veh-noh kah-lah', literalBreakdown: 'Not + I understand + well', english: "I don't understand well", adultEtiquetteTip: 'Helps people know to speak with patient clarity.', category: 'help' },
      { id: 'gre-9', native: 'Όλα είναι καλά!', phonetic: 'Oh-lah ee-neh kah-lah!', literalBreakdown: 'All + is + good!', english: 'Everything is fine / No problem!', adultEtiquetteTip: 'Reassuring everyday Greek expression.', category: 'essential' },
      { id: 'gre-10', native: 'Αντίο! Στο επανιδείν!', phonetic: 'Ahn-dee-oh! Stoh eh-pah-nee-dheen!', literalBreakdown: 'Farewell! Unto seeing each other again!', english: 'Goodbye! Until we meet again!', adultEtiquetteTip: 'Warm, memorable farewell.', category: 'greeting' }
    ],
    dialogues: [
      {
        id: 'dia-gre-1',
        title: 'Meeting a Greek Host / Neighbor',
        scenario: 'A warm friendly welcome on a Greek island or neighborhood street.',
        lines: [
          { speaker: 'Eleni', native: 'Καλημέρα! Καλώς ήρθατε στην πόλη μας!', phonetic: 'Kah-lee-meh-rah! Kah-lohs eer-thah-teh steen poh-lee mahs!', english: 'Good morning! Welcome to our city!', audioText: 'Καλημέρα! Καλώς ήρθατε στην πόλη μας!' },
          { speaker: 'You', native: 'Γεια σας! Ευχαριστώ πολύ για τη φιλοξενία.', phonetic: 'Yah sahs! Ef-chah-ree-stoh poh-lee yah tee fee-loh-kseh-nee-ah.', english: 'Hello! Thank you very much for the hospitality.', audioText: 'Γεια σας! Ευχαριστώ πολύ για τη φιλοξενία.' },
          { speaker: 'Eleni', native: 'Παρακαλώ! Θέλετε ένα ποτήρι κρύο νερό;', phonetic: 'Pah-rah-kah-loh! Theh-leh-teh eh-nah poh-tee-ree kree-oh neh-roh?', english: 'You are welcome! Would you like a glass of cold water?', audioText: 'Παρακαλώ! Θέλετε ένα ποτήρι κρύο νερό;' },
          { speaker: 'You', native: 'Ναι, παρακαλώ. Είστε πολύ ευγενική!', phonetic: 'Neh, pah-rah-kah-loh. Ee-steh poh-lee ef-yeh-nee-kee!', english: 'Yes, please. You are very kind!', audioText: 'Ναι, παρακαλώ. Είστε πολύ ευγενική!' }
        ]
      }
    ],
    rootMultipliers: [
      { root: 'ΒΙΟΣ (Bios)', meaning: 'Life', derivativesInEnglishOrWorld: ['Biology (Study of life)', 'Biography (Writing of life)', 'Antibiotic (Against bacterial life)', 'Biome (Ecosystem zone)'], explanation: 'Learn "Bios" once and you immediately decode dozens of scientific terms in any English dictionary.' },
      { root: 'ΦΩΣ (Phos / Photo)', meaning: 'Light', derivativesInEnglishOrWorld: ['Photograph (Writing with light)', 'Photosynthesis (Putting together with light)', 'Photon (Light particle)', 'Phosphorus (Light-bearer)'], explanation: 'Ancient Greek root found in modern optical and physics sciences.' }
    ]
  },

  // 6. LATIN
  {
    id: 'latin',
    name: 'Latin',
    nativeName: 'Lingua Latīna',
    flag: '🏛️',
    family: 'Italic (Indo-European)',
    speakersCount: 'Mother tongue of the Roman Empire, law, medicine, sciences, and Western literature',
    scriptName: 'Classical Latin Alphabet (The exact alphabet you are reading right now!)',
    direction: 'ltr',
    speechLangCode: 'it-IT',
    adultSuperpower: {
      tagline: 'The Master Key to the English Language, Law, Medicine, and All Romance Tongues',
      whyItIsEasyForAdults: 'Over 60% of English words come directly from Latin. When you learn Latin roots, you do not just learn one language — you master Spanish, French, Italian, Portuguese, Romanian, AND elevate your English vocabulary to executive and academic levels! "Aqua" = Water, "Terra" = Earth, "Corpus" = Body, "Vita" = Life.',
      cheatCode: 'Latin is completely phonetic and logical. There are no silent letters. Every single letter written is pronounced cleanly and clearly.'
    },
    goldenSoundRules: [
      'C is traditionally pronounced hard like "K" in classical Latin (Caesar = "Kye-sar", Corpus = "Kor-poos").',
      'V was originally pronounced like English "W" (Veni, vidi, vici = "Way-nee, wee-dee, wee-kee").',
      'Ae sounds like "eye" (Bonae = "Boh-neye").',
      'Every vowel is pure: A = ah, E = eh, I = ee, O = oh, U = oo.'
    ],
    scriptLetters: [
      { symbol: 'A', name: 'A', phonetic: 'Ah', soundGuide: 'Open "ah" as in father', memoryAnchor: 'Foundational root letter', exampleWord: 'Aqua', exampleTranslit: 'Ah-kwah', exampleMeaning: 'Water (Origin of Aquarium, Aquatic)' },
      { symbol: 'T', name: 'Terra', phonetic: 'Teh-rrah', soundGuide: 'Crisp T with pure vowels', memoryAnchor: 'The firm ground beneath our feet', exampleWord: 'Terra', exampleTranslit: 'Teh-rrah', exampleMeaning: 'Earth / Soil (Terrain, Territory)' },
      { symbol: 'V', name: 'Vita', phonetic: 'Wee-tah / Vee-tah', soundGuide: 'V or W sound', memoryAnchor: 'V symbolizes vitality and victory', exampleWord: 'Vita', exampleTranslit: 'Vee-tah', exampleMeaning: 'Life (Vital, Vitamin, Vivacious)' },
      { symbol: 'C', name: 'Corpus', phonetic: 'Kor-poos', soundGuide: 'Hard K sound', memoryAnchor: 'Physical human anatomy', exampleWord: 'Corpus', exampleTranslit: 'Kor-poos', exampleMeaning: 'Body (Corporation, Corpse, Corps)' },
      { symbol: 'S', name: 'Scribo', phonetic: 'Skree-boh', soundGuide: 'Clear S sound', memoryAnchor: 'Writing with a quill on parchment', exampleWord: 'Scribo', exampleTranslit: 'Skree-boh', exampleMeaning: 'I write (Scripture, Inscribe, Scribe)' },
      { symbol: 'M', name: 'Manus', phonetic: 'Mah-noos', soundGuide: 'Like M in manual', memoryAnchor: 'Human hand working', exampleWord: 'Manus', exampleTranslit: 'Mah-noos', exampleMeaning: 'Hand (Manufacture = Made by hand!)' }
    ],
    survivalPhrases: [
      { id: 'lat-1', native: 'Salvē! / Salvēte! (Plural)', phonetic: 'Sahl-way! / Sahl-way-teh!', literalBreakdown: 'Be healthy! / Be in good state!', english: 'Hello! / Greetings! (Literally: Be well!)', adultEtiquetteTip: 'The ancient Roman greeting wishing vigor and soundness.', category: 'greeting' },
      { id: 'lat-2', native: 'Grātiās tibi agō', phonetic: 'Grah-tee-ahs tee-bee ah-goh', literalBreakdown: 'Thanks + to you + I do/drive', english: 'I give you thanks / Thank you', adultEtiquetteTip: 'Origin of "gratitude" and "grace".', category: 'polite' },
      { id: 'lat-3', native: 'Quaesō / Sī placet', phonetic: 'Kweye-soh / See plah-ket', literalBreakdown: 'I beseech / If it pleases', english: 'Please / If you please', adultEtiquetteTip: 'Classic polite phrases in Latin dialogue.', category: 'polite' },
      { id: 'lat-4', native: 'Quōmodo tē habēs?', phonetic: 'Kwoh-moh-doh tay hah-bays?', literalBreakdown: 'How + yourself + you hold/have?', english: 'How are you doing?', adultEtiquetteTip: 'Standard friendly question between friends.', category: 'greeting' },
      { id: 'lat-5', native: 'Valē! / Valēte!', phonetic: 'Wah-lay! / Wah-lay-teh!', literalBreakdown: 'Be strong! / Be courageous!', english: 'Farewell! (Literally: Be strong!)', adultEtiquetteTip: 'Origin of "valiant", "valor", and "valedictorian".', category: 'greeting' },
      { id: 'lat-6', native: 'Carpe diem', phonetic: 'Kar-peh dee-em', literalBreakdown: 'Pluck / Harvest + the day', english: 'Seize the day / Make the most of today', adultEtiquetteTip: 'Horace’s famous advice to live each day with purpose and diligence.', category: 'essential' },
      { id: 'lat-7', native: 'In veritāte vīta', phonetic: 'Een weh-ree-tah-teh wee-tah', literalBreakdown: 'In + truth + life', english: 'In truth is life', adultEtiquetteTip: 'Foundational philosophical maxim for education.', category: 'essential' },
      { id: 'lat-8', native: 'Mens sāna in corpore sānō', phonetic: 'Meyns sah-nah een kor-poh-reh sah-noh', literalBreakdown: 'Mind + healthy + in + body + healthy', english: 'A healthy mind in a healthy body', adultEtiquetteTip: 'The holistic vision of human wellness and education.', category: 'essential' }
    ],
    dialogues: [
      {
        id: 'dia-lat-1',
        title: 'Morning Meeting in Ancient or Renaissance Academy',
        scenario: 'A teacher and scholar exchanging greetings in a classical hall of learning.',
        lines: [
          { speaker: 'Magister', native: 'Salvē, discipule! Quid novi hodiē?', phonetic: 'Sahl-way, dees-kee-poo-leh! Kweed noh-wee hoh-dee-ay?', english: 'Greetings, student! What is new today?', audioText: 'Salvē, discipule! Quid novi hodiē?' },
          { speaker: 'Discipulus', native: 'Salvē, magister! Libenter linguam Latīnam discō.', phonetic: 'Sahl-way, mah-gees-ter! Lee-ben-ter leeng-gwam Lah-tee-nam dees-koh.', english: 'Greetings, teacher! Gladly I am learning the Latin tongue.', audioText: 'Salvē, magister! Libenter linguam Latīnam discō.' },
          { speaker: 'Magister', native: 'Optimum est! Fortūna favet fortibus.', phonetic: 'Ohp-tee-moom est! For-too-nah fah-wet for-tee-boos.', english: 'It is excellent! Fortune favors the brave.', audioText: 'Optimum est! Fortūna favet fortibus.' },
          { speaker: 'Discipulus', native: 'Grātiās tibi agō, magister. Valē!', phonetic: 'Grah-tee-ahs tee-bee ah-goh, mah-gees-ter. Wah-lay!', english: 'I give thanks to you, teacher. Farewell!', audioText: 'Grātiās tibi agō, magister. Valē!' }
        ]
      }
    ],
    rootMultipliers: [
      { root: 'MANUS', meaning: 'Hand', derivativesInEnglishOrWorld: ['Manufacture (To make by hand)', 'Manuscript (Written by hand)', 'Manual (Done by hands)', 'Manipulate (To handle skillfully)'], explanation: 'Shows how manual industry and trade vocabulary stem from Latin roots.' },
      { root: 'SCRIBO / SCRIPT', meaning: 'To write', derivativesInEnglishOrWorld: ['Description (Writing down)', 'Prescription (Writing beforehand)', 'Subscription (Writing underneath)', 'Scripture (Sacred writing)'], explanation: 'Unlocks dozens of English words ending in -scribe and -script.' }
    ]
  },

  // 7. ARABIC
  {
    id: 'arabic',
    name: 'Arabic',
    nativeName: 'العَرَبِيَّة (Al-ʿArabiyyah)',
    flag: '🇸🇦',
    family: 'Afroasiatic (Semitic)',
    speakersCount: '420+ Million speakers across 25+ countries; language of mathematics, algebra, medicine & literature',
    scriptName: 'Arabic Abjad (28 Letters, Flowing Cursive, Right-to-Left)',
    direction: 'rtl',
    speechLangCode: 'ar-SA',
    adultSuperpower: {
      tagline: 'The Mathematical Triliteral Root System (Jidhr) Builds an Entire World',
      whyItIsEasyForAdults: 'Just like Hebrew, Arabic is built around 3-letter roots. Take the root K-T-B (ك-ت-ب) which means "to write". Without learning any new grammar, look at what you can figure out: "Kitāb" = Book, "Kātib" = Writer / Author, "Maktab" = Office / Desk, "Maktabah" = Library, "Maktūb" = Destiny / Written! Learn 10 roots, and you instantly unlock over 150 everyday Arabic words.',
      cheatCode: 'You already use dozens of Arabic words in English: Algebra (Al-Jabr), Chemistry (Al-Kimya), Algorithm (Al-Khwarizmi), Cotton (Qutn), Coffee (Qahwah), Sugar (Sukkar), and Zero (Sifr)!'
    },
    goldenSoundRules: [
      'Read from RIGHT to LEFT: مَرْحَبًا is read right-to-left as "Mar-ha-ban".',
      'Arabic letters connect smoothly like cursive script.',
      'The "Haa" (ح) is a warm, deep sigh breath from the throat (like blowing warm air on eyeglasses to clean them).',
      'The "Ayn" (ع) is a deep throat resonant sound that gives Arabic its poetic, majestic resonance.'
    ],
    scriptLetters: [
      { symbol: 'ا', name: 'Alif', phonetic: 'Ah', soundGuide: 'Like "ah" in father', memoryAnchor: 'A straight, upright walking staff or spear', exampleWord: 'أَمَل', exampleTranslit: 'Amal', exampleMeaning: 'Hope' },
      { symbol: 'ب', name: 'Baa', phonetic: 'B', soundGuide: 'Like "B" in book', memoryAnchor: 'A boat with one pearl dot underneath it', exampleWord: 'بَيْت', exampleTranslit: 'Bayt', exampleMeaning: 'House / Home' },
      { symbol: 'ت', name: 'Taa', phonetic: 'T', soundGuide: 'Like "T" in travel', memoryAnchor: 'A smiley face with two eye dots on top', exampleWord: 'تَمْر', exampleTranslit: 'Tamr', exampleMeaning: 'Dates (sweet palm fruit)' },
      { symbol: 'ث', name: 'Thaa', phonetic: 'Th', soundGuide: 'Like "th" in think', memoryAnchor: 'Three star dots in the boat', exampleWord: 'ثَمَر', exampleTranslit: 'Thamar', exampleMeaning: 'Fruit / Harvest' },
      { symbol: 'ج', name: 'Jeem', phonetic: 'J', soundGuide: 'Like "J" in joy or garden', memoryAnchor: 'A camel belly with a dot inside (Jamal = Camel)', exampleWord: 'جَمِيل', exampleTranslit: 'Jameel', exampleMeaning: 'Beautiful' },
      { symbol: 'ح', name: 'Haa', phonetic: 'Deep H', soundGuide: 'Warm breath like sighing on glass', memoryAnchor: 'Open desert wind', exampleWord: 'حَيَاة', exampleTranslit: 'Hayat', exampleMeaning: 'Life' },
      { symbol: 'م', name: 'Meem', phonetic: 'M', soundGuide: 'Like "M" in mother', memoryAnchor: 'A round water drop falling down', exampleWord: 'مَاء', exampleTranslit: 'Maa\'', exampleMeaning: 'Water' },
      { symbol: 'ن', name: 'Noon', phonetic: 'N', soundGuide: 'Like "N" in noble', memoryAnchor: 'A crescent bowl with a shining star dot inside', exampleWord: 'نُور', exampleTranslit: 'Noor', exampleMeaning: 'Light' }
    ],
    survivalPhrases: [
      { id: 'ara-1', native: 'السَّلَامُ عَلَيْكُمْ', phonetic: 'As-sah-lah-moo ah-lay-koom', literalBreakdown: 'The Peace + upon you all', english: 'Peace be upon you (Universal greeting)', adultEtiquetteTip: 'The universally respected greeting throughout the Arab world. The standard reply is: "Wa alaykum as-salam" (And upon you be peace).', category: 'greeting' },
      { id: 'ara-2', native: 'مَرْحَبًا', phonetic: 'Mar-hah-bahn', literalBreakdown: 'Welcome / You have broad hospitable room', english: 'Hello / Welcome', adultEtiquetteTip: 'Friendly, warm, and simple greeting for shops and informal meetings.', category: 'greeting' },
      { id: 'ara-3', native: 'شُكْرًا جَزِيلًا', phonetic: 'Shook-rahn jah-zee-lahn', literalBreakdown: 'Gratitude + Abundant', english: 'Thank you very much', adultEtiquetteTip: 'Heartfelt thank you. The response is "Afwan" (You are welcome).', category: 'polite' },
      { id: 'ara-4', native: 'مِنْ فَضْلِكَ', phonetic: 'Meen fad-leek', literalBreakdown: 'From + your grace/generosity', english: 'Please (if you please)', adultEtiquetteTip: 'Gentle, gracious phrase for ordering food or asking for assistance.', category: 'polite' },
      { id: 'ara-5', native: 'صَبَاحُ الخَيْرِ', phonetic: 'Sah-bah-hool khayr', literalBreakdown: 'Morning of + Goodness', english: 'Good morning!', adultEtiquetteTip: 'The poetic reply is "Sabah an-noor" (Morning of light!).', category: 'greeting' },
      { id: 'ara-6', native: 'كَمْ ثَمَنُ هَذَا؟', phonetic: 'Kam tha-mah-noo hah-dhah?', literalBreakdown: 'How much + price of + this?', english: 'How much is this?', adultEtiquetteTip: 'Essential for traditional souks, markets, and shops.', category: 'market' },
      { id: 'ara-7', native: 'أَيْنَ الْمُسْتَشْفَى؟', phonetic: 'Ayn-al moos-tash-fah?', literalBreakdown: 'Where + the place of healing / hospital?', english: 'Where is the hospital?', adultEtiquetteTip: 'Critical medical and health phrase.', category: 'help' },
      { id: 'ara-8', native: 'لَا بَأْسَ / كُلُّ شَيْءٍ تَمَام', phonetic: 'Lah ba\'s / Kool-loo shay\'en tah-mahm', literalBreakdown: 'No harm / Every thing is complete/great', english: 'No worries / Everything is perfect', adultEtiquetteTip: 'Warm, reassuring everyday idiom.', category: 'essential' },
      { id: 'ara-9', native: 'أَنَا أَتَعَلَّمُ العَرَبِيَّة', phonetic: 'Ah-nah ah-tah-al-lah-mool ah-rah-bee-yah', literalBreakdown: 'I + am learning + Arabic', english: 'I am learning Arabic', adultEtiquetteTip: 'Speakers are deeply honored and love assisting learners.', category: 'help' },
      { id: 'ara-10', native: 'مَعَ السَّلَامَة', phonetic: 'Mah-ah sah-lah-mah', literalBreakdown: 'With + Safety / Peace', english: 'Goodbye (Go with safety)', adultEtiquetteTip: 'Gentle, protective parting farewell.', category: 'greeting' }
    ],
    dialogues: [
      {
        id: 'dia-ara-1',
        title: 'Meeting at a Traditional Market (Souk)',
        scenario: 'A respectful exchange when buying tea and spices in an Arabic souk.',
        lines: [
          { speaker: 'Merchant', native: 'أَهْلًا وَسَهْلًا! تَفَضَّلْ يَا أَخِي!', phonetic: 'Ah-lahn wah sah-lahn! Tah-fad-dal yah ah-khee!', english: 'Welcome! Please come in, my brother!', audioText: 'أَهْلًا وَسَهْلًا! تَفَضَّلْ يَا أَخِي!' },
          { speaker: 'You', native: 'السَّلَامُ عَلَيْكُمْ. أُرِيدُ شَايًا لَذِيذًا، مِنْ فَضْلِكَ.', phonetic: 'As-sah-lah-moo ah-lay-koom. Oo-ree-doo shah-yahn lah-dhee-dhan, meen fad-leek.', english: 'Peace be upon you. I would like delicious tea, please.', audioText: 'السَّلَامُ عَلَيْكُمْ. أُرِيدُ شَايًا لَذِيذًا، مِنْ فَضْلِكَ.' },
          { speaker: 'Merchant', native: 'حَاضِر! هَذَا شَايٌ بِالنَّعْنَاعِ، مُمْتَازٌ جِدًّا.', phonetic: 'Hah-deer! Hah-dhah shah-yoon been-nah-nah, moom-tah-zoon jeed-dahn.', english: 'Right away! This is mint tea, very excellent.', audioText: 'حَاضِر! هَذَا شَايٌ بِالنَّعْنَاعِ، مُمْتَازٌ جِدًّا.' },
          { speaker: 'You', native: 'شُكْرًا جَزِيلًا! رَائِعٌ جِدًّا!', phonetic: 'Shook-rahn jah-zee-lahn! Rah-ee-oon jeed-dahn!', english: 'Thank you very much! It is wonderful!', audioText: 'شُكْرًا جَزِيلًا! رَائِعٌ جِدًّا!' }
        ]
      }
    ],
    rootMultipliers: [
      { root: 'ك-ت-ب (K-T-B)', script: 'كتب', meaning: 'To write, record, document', derivativesInEnglishOrWorld: ['Kitāb (Book)', 'Kātib (Writer / Clerk)', 'Maktab (Office / Desk)', 'Maktabah (Library / Bookstore)', 'Maktūb (Written / Destiny)'], explanation: 'One of the most famous Semitic roots; demonstrates how words grow logically around writing.' },
      { root: 'ع-ل-م (ʿ-L-M)', script: 'علم', meaning: 'Knowledge, knowing, science', derivativesInEnglishOrWorld: ['ʿIlm (Knowledge / Science)', 'ʿĀlim (Scholar / Scientist)', 'Muʿallim (Teacher / Educator)', 'Taʿleem (Education)'], explanation: 'The foundational root of learning and scholarship across the Arab world.' }
    ]
  },

  // 8. HINDI
  {
    id: 'hindi',
    name: 'Hindi',
    nativeName: 'हिन्दी (Hindī)',
    flag: '🇮🇳',
    family: 'Indo-Aryan (Indo-European)',
    speakersCount: '600+ Million speakers across India and the global diaspora',
    scriptName: 'Devanagari Script (Phonetic Alphabet with Hanging Head-Line)',
    direction: 'ltr',
    speechLangCode: 'hi-IN',
    adultSuperpower: {
      tagline: 'The Most Scientifically Organized Alphabet in the World!',
      whyItIsEasyForAdults: 'The Devanagari script was designed by ancient linguistic scientists to match the anatomy of the human mouth! Letters are arranged in clean rows based on where your tongue touches: throat sounds (k, kh, g, gh), palate sounds (ch, j), tongue-roof sounds (t, d), teeth sounds (t, th, d), and lip sounds (p, ph, b, bh). Once you understand the mouth positions, it is 100% predictable.',
      cheatCode: 'Hindi shares the same ancient Indo-European ancestor as English! Words like "Mātā" (Mother), "Bhrātā" (Brother), "Danta" (Dental / Teeth), and "Nāma" (Name) are cousin words you already recognize.'
    },
    goldenSoundRules: [
      'The "Head-line" (Shirorekha): The horizontal bar on top links letters together into one word.',
      'Unaspirated vs Aspirated: "K" is a plain sound; "Kh" adds a puff of breath like coughing lightly.',
      'Respectful suffix "-ji": Adding "-ji" after any name (e.g. David-ji, Doctor-ji, Mata-ji) conveys immediate deep respect and warmth.',
      'Aap vs Tum: Use "Aap" (formal you) when speaking to adults, elders, teachers, and strangers.'
    ],
    scriptLetters: [
      { symbol: 'अ', name: 'A', phonetic: 'Uh', soundGuide: 'Short neutral vowel like "u" in cup', memoryAnchor: 'Looks like a number 3 leaning on a post', exampleWord: 'अमृत', exampleTranslit: 'Amrit', exampleMeaning: 'Nectar of immortality' },
      { symbol: 'आ', name: 'Aa', phonetic: 'Aah', soundGuide: 'Long open "aah" like father', memoryAnchor: 'Letter "A" with an extra vertical sunray bar', exampleWord: 'आप', exampleTranslit: 'Aap', exampleMeaning: 'You (respectful / formal)' },
      { symbol: 'क', name: 'Ka', phonetic: 'Kuh', soundGuide: 'Crisp "K" like kite', memoryAnchor: 'A ribbon loop crossing a vertical pole', exampleWord: 'किताब', exampleTranslit: 'Kitaab', exampleMeaning: 'Book' },
      { symbol: 'ग', name: 'Ga', phonetic: 'Guh', soundGuide: 'Hard "G" like garden', memoryAnchor: 'A walking cane next to a post', exampleWord: 'गुरु', exampleTranslit: 'Guru', exampleMeaning: 'Teacher / Dispeller of darkness' },
      { symbol: 'म', name: 'Ma', phonetic: 'Muh', soundGuide: 'Like "M" in mother', memoryAnchor: 'A squared loop with a line across', exampleWord: 'मित्र', exampleTranslit: 'Mitra', exampleMeaning: 'Friend' },
      { symbol: 'न', name: 'Na', phonetic: 'Nuh', soundGuide: 'Like "N" in noble', memoryAnchor: 'A small ring flowing into a horizontal stream', exampleWord: 'नमस्ते', exampleTranslit: 'Namaste', exampleMeaning: 'I bow to you / Hello' },
      { symbol: 'प', name: 'Pa', phonetic: 'Puh', soundGuide: 'Crisp "P" with closed lips', memoryAnchor: 'A drinking cup or bucket with a line', exampleWord: 'पानी', exampleTranslit: 'Paani', exampleMeaning: 'Water' },
      { symbol: 'श', name: 'Sha', phonetic: 'Shuh', soundGuide: 'Soft "Sh" as in shine', memoryAnchor: 'A curled shell resting against a vertical line', exampleWord: 'शान्ति', exampleTranslit: 'Shanti', exampleMeaning: 'Peace' }
    ],
    survivalPhrases: [
      { id: 'hin-1', native: 'नमस्ते', phonetic: 'Nah-mas-tay', literalBreakdown: 'I bow + to you', english: 'Hello / Greetings (with hands together in reverence)', adultEtiquetteTip: 'Place palms together near the chest and bow slightly. A profoundly respectful greeting suitable for all occasions.', category: 'greeting' },
      { id: 'hin-2', native: 'धन्यवाद / शुक्रिया', phonetic: 'Dhan-yah-vahd / Shook-ree-yah', literalBreakdown: 'Wealth of gratitude / Thank you', english: 'Thank you very much', adultEtiquetteTip: "'Dhanyavaad' is formal Hindi; 'Shukriya' is warm conversational everyday speech.", category: 'polite' },
      { id: 'hin-3', native: 'कृपया', phonetic: 'Krip-yah', literalBreakdown: 'By grace / compassion', english: 'Please', adultEtiquetteTip: 'Polite formal word for requests.', category: 'polite' },
      { id: 'hin-4', native: 'आप कैसे हैं? (Male) / कैसी हैं? (Female)', phonetic: 'Aap kay-say hain? / kay-see hain?', literalBreakdown: 'You (formal) + how + are?', english: 'How are you?', adultEtiquetteTip: 'Polite adult inquiry. The response is: "Main theek hoon, dhanyavaad" (I am fine, thank you).', category: 'greeting' },
      { id: 'hin-5', native: 'यह कितने का है?', phonetic: 'Yeh keet-nay kah hai?', literalBreakdown: 'This + how much of + is?', english: 'How much does this cost?', adultEtiquetteTip: 'Indispensable in markets and local bazaars.', category: 'market' },
      { id: 'hin-6', native: 'माफ़ कीजिये', phonetic: 'Maaf kee-jee-yeh', literalBreakdown: 'Forgiveness + please do', english: 'Excuse me / I am sorry', adultEtiquetteTip: 'Polite way to ask permission or apologize.', category: 'help' },
      { id: 'hin-7', native: 'पानी कहाँ मिलेगा?', phonetic: 'Pah-nee kah-haan mee-lay-gah?', literalBreakdown: 'Water + where + will be found?', english: 'Where can I find drinking water?', adultEtiquetteTip: 'Essential health and hospitality phrase.', category: 'help' },
      { id: 'hin-8', native: 'मुझे समझ नहीं आया', phonetic: 'Moo-jhay sah-majh na-hee ah-yah', literalBreakdown: 'To me + understanding + not + came', english: "I didn't understand", adultEtiquetteTip: 'People appreciate your honesty and will gladly speak slower.', category: 'help' },
      { id: 'hin-9', native: 'सब ठीक है', phonetic: 'Sub theek hai', literalBreakdown: 'All + fine + is', english: "All is well / Everything's good", adultEtiquetteTip: 'One of the most common comforting phrases in India.', category: 'essential' },
      { id: 'hin-10', native: 'फिर मिलेंगे!', phonetic: 'Pheer mee-leng-gay!', literalBreakdown: 'Again + we shall meet!', english: 'See you again / Farewell!', adultEtiquetteTip: 'Warm, optimistic goodbye.', category: 'greeting' }
    ],
    dialogues: [
      {
        id: 'dia-hin-1',
        title: 'Enjoying Chai at a Tea Stall',
        scenario: 'A quintessential Indian daily experience: a warm cup of spiced chai.',
        lines: [
          { speaker: 'Chaiwala', native: 'नमस्ते जी! क्या चाहिये आपको?', phonetic: 'Namaste ji! Kya chaahiye aapko?', english: 'Greetings! What would you like?', audioText: 'नमस्ते जी! क्या चाहिये आपको?' },
          { speaker: 'You', native: 'नमस्ते! एक गरम मसाला चाय और थोड़ा पानी, कृपया।', phonetic: 'Namaste! Ek garam masala chai aur thoda paani, kripya.', english: 'Greetings! One hot masala chai and a little water, please.', audioText: 'नमस्ते! एक गरम मसाला चाय और थोड़ा पानी, कृपया।' },
          { speaker: 'Chaiwala', native: 'बिल्कुल! अभी ताज़ा बनाता हूँ। यह लीजिये!', phonetic: 'Bilkul! Abhi taaza banaata hoon. Yeh leejiye!', english: 'Certainly! Making it fresh right now. Here you go!', audioText: 'बिल्कुल! अभी ताज़ा बनाता हूँ। यह लीजिये!' },
          { speaker: 'You', native: 'बहुत स्वादिष्ट है! धन्यवाद जी!', phonetic: 'Bahut swaadisht hai! Dhanyavaad ji!', english: 'Very delicious! Thank you so much!', audioText: 'बहुत स्वादिष्ट है! धन्यवाद जी!' }
        ]
      }
    ],
    rootMultipliers: [
      { root: 'ज्ञान (Gyaan)', meaning: 'Knowledge, wisdom, consciousness', derivativesInEnglishOrWorld: ['Gyaani (Wise person)', 'Agyaan (Ignorance)', 'Vigyaan (Science / Special knowledge)'], explanation: 'Ancient Sanskrit/Hindi root cognate with Greek "Gnosis" and English "Know".' },
      { root: 'मित्र (Mitra)', meaning: 'Friend, alliance, covenant', derivativesInEnglishOrWorld: ['Mitrata (Friendship)', 'Mitrabhav (Friendly disposition)'], explanation: 'Foundational word for fellowship and trust in community life.' }
    ]
  },

  // 9. ENGLISH
  {
    id: 'english',
    name: 'English',
    nativeName: 'English (Global Lingua Franca)',
    flag: '🌍',
    family: 'Germanic (Indo-European)',
    speakersCount: '1.5+ Billion speakers across all continents; language of global science, aviation & the internet',
    scriptName: 'Latin Alphabet (26 Letters)',
    direction: 'ltr',
    speechLangCode: 'en-US',
    adultSuperpower: {
      tagline: 'The Ultimate Global Hybrid Language — No Grammatical Gender & Endless Practical Vocabulary',
      whyItIsEasyForAdults: 'English is the great borrower: it has no noun genders (a table is simply "it", not masculine or feminine!), very simple plural rules (just add -s), and you can combine words easily to invent new meanings (sun + light = sunlight, water + fall = waterfall).',
      cheatCode: 'Master the top 100 most frequent English words (the, of, and, to, in, you, that, it, he, was, for, on, are, as, with...) and you will recognize more than 50% of any written English document on earth!'
    },
    goldenSoundRules: [
      'Stress Matters: In English, we emphasize one key syllable (PHO-to-graph vs pho-TOG-ra-phy).',
      'Soft "Th" vs Hard "Th": Think (breath) vs The/This/Father (vibrating vocal cords).',
      'Polite Softeners: Adults always soften direct commands using "Could you please...", "Would you mind...", or "I would like...".',
      'The Magic E: At the end of a word, silent "e" makes the vowel say its name (hop -> hope, cap -> cape, bit -> bite).'
    ],
    scriptLetters: [
      { symbol: 'A a', name: 'A', phonetic: 'Ay / Ah / Ae', soundGuide: 'Apple, Father, Cake', memoryAnchor: 'The apex pyramid of letters', exampleWord: 'Action', exampleTranslit: 'Ak-shun', exampleMeaning: 'Doing something concrete' },
      { symbol: 'B b', name: 'B', phonetic: 'Buh', soundGuide: 'Like "b" in book and breathe', memoryAnchor: 'Two round bellies on the capital B', exampleWord: 'Balance', exampleTranslit: 'Bal-uns', exampleMeaning: 'Stability and poise' },
      { symbol: 'C c', name: 'C', phonetic: 'K / S', soundGuide: 'Hard K before a/o/u (Cat); soft S before e/i (City)', memoryAnchor: 'An open crescent', exampleWord: 'Community', exampleTranslit: 'Kuh-myoo-nih-tee', exampleMeaning: 'People living together' },
      { symbol: 'D d', name: 'D', phonetic: 'Duh', soundGuide: 'Like "d" in discover and dignity', memoryAnchor: 'A curved dome', exampleWord: 'Discovery', exampleTranslit: 'Dih-skuv-ree', exampleMeaning: 'Finding something new' },
      { symbol: 'P p', name: 'P', phonetic: 'Puh', soundGuide: 'Crisp pop of air like peace and purpose', memoryAnchor: 'A thought balloon on a stick', exampleWord: 'Purpose', exampleTranslit: 'Pur-pus', exampleMeaning: 'Aim or reason for doing' }
    ],
    survivalPhrases: [
      { id: 'eng-1', native: 'Hello, how are you today?', phonetic: 'Heh-loh, how ahr yoo too-day?', literalBreakdown: 'Greeting + How + are + you + today?', english: 'Hello, how are you today?', adultEtiquetteTip: 'The universally accepted polite greeting in professional and social settings.', category: 'greeting' },
      { id: 'eng-2', native: 'Thank you very much for your help', phonetic: 'Thank yoo veh-ree much for yor help', literalBreakdown: 'Gratitude + much + for + your + assistance', english: 'Thank you very much for your help', adultEtiquetteTip: 'Specific gratitude always leaves a lasting warm impression.', category: 'polite' },
      { id: 'eng-3', native: 'Could you please help me with this?', phonetic: 'Kood yoo pleez help mee with this?', literalBreakdown: 'Could + you + please + assist + me?', english: 'Could you please help me with this?', adultEtiquetteTip: 'Using "could you please" is far more polite and effective than "help me".', category: 'polite' },
      { id: 'eng-4', native: 'Nice to meet you!', phonetic: 'Neys too meet yoo!', literalBreakdown: 'Pleasant + to + meet + you', english: 'Nice to meet you!', adultEtiquetteTip: 'Standard positive introduction with a firm handshake or warm smile.', category: 'greeting' },
      { id: 'eng-5', native: 'Where is the nearest clinic or market?', phonetic: 'Wair iz theh neer-est kli-nik or mahr-ket?', literalBreakdown: 'Where + is + the closest + clinic + or + market?', english: 'Where is the nearest clinic or market?', adultEtiquetteTip: 'Essential practical neighborhood navigation question.', category: 'help' },
      { id: 'eng-6', native: 'Could you please speak a little slower?', phonetic: 'Kood yoo pleez speek ah li-tul sloh-er?', literalBreakdown: 'Polite request to adjust speaking speed', english: 'Could you please speak a little slower?', adultEtiquetteTip: 'Every polite native speaker will gladly slow down.', category: 'help' },
      { id: 'eng-7', native: 'I am learning to speak more fluently', phonetic: 'Eye am ler-ning too speek mor floo-ent-lee', literalBreakdown: 'Expressing growth and active learning', english: 'I am learning to speak more fluently', adultEtiquetteTip: 'A humble, confident statement that invites encouraging dialogue.', category: 'essential' },
      { id: 'eng-8', native: 'Have a wonderful and blessed day!', phonetic: 'Hav ah wun-der-fool and bles-ed day!', literalBreakdown: 'Warm parting blessing', english: 'Have a wonderful and blessed day!', adultEtiquetteTip: 'Leaves colleagues and friends feeling valued and uplifted.', category: 'polite' }
    ],
    dialogues: [
      {
        id: 'dia-eng-1',
        title: 'Professional & Friendly Introduction',
        scenario: 'Introducing yourself to a mentor, neighbor, or international colleague.',
        lines: [
          { speaker: 'Colleague', native: 'Good morning! It is wonderful to meet you.', phonetic: 'Good mor-ning! It iz wun-der-ful too meet yoo.', english: 'Good morning! It is wonderful to meet you.', audioText: 'Good morning! It is wonderful to meet you.' },
          { speaker: 'You', native: 'Good morning! Thank you so much. I am very glad to be here.', phonetic: 'Good mor-ning! Thank yoo soh much. Eye am veh-ree glad too bee heer.', english: 'Good morning! Thank you so much. I am very glad to be here.', audioText: 'Good morning! Thank you so much. I am very glad to be here.' },
          { speaker: 'Colleague', native: 'How can I assist your learning journey today?', phonetic: 'How kan eye uh-sist yor ler-ning jur-nee too-day?', english: 'How can I assist your learning journey today?', audioText: 'How can I assist your learning journey today?' },
          { speaker: 'You', native: 'Step by step, I am mastering these concepts with diligence!', phonetic: 'Step by step, eye am mas-ter-ing theez kon-septs with di-li-jens!', english: 'Step by step, I am mastering these concepts with diligence!', audioText: 'Step by step, I am mastering these concepts with diligence!' }
        ]
      }
    ],
    rootMultipliers: [
      { root: 'Prefix RE-', meaning: 'Again or back', derivativesInEnglishOrWorld: ['Rebuild (Build again)', 'Review (View again)', 'Renew (Make new again)', 'Return (Turn back)'], explanation: 'Add "re-" to hundreds of English verbs to express doing it again.' },
      { root: 'Suffix -FUL', meaning: 'Full of something', derivativesInEnglishOrWorld: ['Hopeful (Full of hope)', 'Peaceful (Full of peace)', 'Careful (Full of care)', 'Joyful (Full of joy)'], explanation: 'Turns nouns into vivid describing words (adjectives).' }
    ]
  }
];

// Helper to get a language profile by ID
export function getLanguageProfile(id: LanguageCode): LanguageProfile {
  const found = WORLD_LANGUAGES.find(l => l.id === id);
  return found || WORLD_LANGUAGES[0];
}

// 9-Language Universal Concept Cross-Reference for Daily Lessons
// Shows how core lesson themes translate across all 9 tongues!
export interface ConceptTranslation {
  concept: string; // e.g., "Water"
  english: { word: string; phonetic: string };
  mandarin: { word: string; script: string; phonetic: string };
  spanish: { word: string; phonetic: string };
  french: { word: string; phonetic: string };
  hebrew: { word: string; script: string; phonetic: string };
  greek: { word: string; script: string; phonetic: string };
  latin: { word: string; phonetic: string };
  arabic: { word: string; script: string; phonetic: string };
  hindi: { word: string; script: string; phonetic: string };
}

export const UNIVERSAL_LESSON_CONCEPTS: ConceptTranslation[] = [
  {
    concept: 'Clean Drinking Water',
    english: { word: 'Water', phonetic: 'Wah-ter' },
    mandarin: { word: '水', script: '水', phonetic: 'Shuǐ (Shway)' },
    spanish: { word: 'Agua', phonetic: 'Ah-gwah' },
    french: { word: 'Eau', phonetic: 'Oh' },
    hebrew: { word: 'מַיִם', script: 'מים', phonetic: 'Mayim' },
    greek: { word: 'Νερό', script: 'Νερό', phonetic: 'Neh-roh' },
    latin: { word: 'Aqua', phonetic: 'Ah-kwah' },
    arabic: { word: 'مَاء', script: 'ماء', phonetic: 'Maa\'' },
    hindi: { word: 'पानी', script: 'पानी', phonetic: 'Paani' }
  },
  {
    concept: 'Peace & Wholeness',
    english: { word: 'Peace', phonetic: 'Pees' },
    mandarin: { word: '和平', script: '和平', phonetic: 'Hé píng' },
    spanish: { word: 'Paz', phonetic: 'Pahs' },
    french: { word: 'Paix', phonetic: 'Peh' },
    hebrew: { word: 'שָׁלוֹם', script: 'שלום', phonetic: 'Shalom' },
    greek: { word: 'Ειρήνη', script: 'Ειρήνη', phonetic: 'Ee-ree-nee' },
    latin: { word: 'Pax', phonetic: 'Pahks' },
    arabic: { word: 'سَلَام', script: 'سلام', phonetic: 'Salam' },
    hindi: { word: 'शान्ति', script: 'शान्ति', phonetic: 'Shanti' }
  },
  {
    concept: 'Knowledge & Learning',
    english: { word: 'Wisdom / Learning', phonetic: 'Wiz-dum / Ler-ning' },
    mandarin: { word: '智慧', script: '智慧', phonetic: 'Zhì huì' },
    spanish: { word: 'Sabiduría', phonetic: 'Sah-bee-doo-ree-ah' },
    french: { word: 'Sagesse', phonetic: 'Sah-zhes' },
    hebrew: { word: 'חָכְמָה', script: 'חכמה', phonetic: 'Chochmah' },
    greek: { word: 'Σοφία', script: 'Σοφία', phonetic: 'Soh-fee-ah' },
    latin: { word: 'Sapientia', phonetic: 'Sah-pee-en-tee-ah' },
    arabic: { word: 'حِكْمَة', script: 'حكمة', phonetic: 'Hikmah' },
    hindi: { word: 'ज्ञान', script: 'ज्ञान', phonetic: 'Gyaan' }
  },
  {
    concept: 'Earth, Soil & Agriculture',
    english: { word: 'Earth / Soil', phonetic: 'Urth / Soyl' },
    mandarin: { word: '土地', script: '土地', phonetic: 'Tǔ dì' },
    spanish: { word: 'Tierra', phonetic: 'Tyeh-rrah' },
    french: { word: 'Terre', phonetic: 'Tehr' },
    hebrew: { word: 'אֲדָמָה', script: 'אדמה', phonetic: 'Adamah' },
    greek: { word: 'Γη', script: 'Γη', phonetic: 'Yee' },
    latin: { word: 'Terra', phonetic: 'Teh-rrah' },
    arabic: { word: 'أَرْض', script: 'أرض', phonetic: 'Ard' },
    hindi: { word: 'धरती', script: 'धरती', phonetic: 'Dharti' }
  },
  {
    concept: 'Sun & Solar Energy',
    english: { word: 'Sun', phonetic: 'Sun' },
    mandarin: { word: '太阳', script: '太阳', phonetic: 'Tài yáng' },
    spanish: { word: 'Sol', phonetic: 'Sohl' },
    french: { word: 'Soleil', phonetic: 'Soh-lay' },
    hebrew: { word: 'שֶׁמֶשׁ', script: 'שמש', phonetic: 'Shemesh' },
    greek: { word: 'Ήλιος', script: 'Ήλιος', phonetic: 'Ee-lee-ohs' },
    latin: { word: 'Sol', phonetic: 'Sohl' },
    arabic: { word: 'شَمْس', script: 'شمس', phonetic: 'Shams' },
    hindi: { word: 'सूर्य', script: 'सूर्य', phonetic: 'Soorya' }
  },
  {
    concept: 'Family & Community',
    english: { word: 'Family', phonetic: 'Fam-i-lee' },
    mandarin: { word: '家庭', script: '家庭', phonetic: 'Jiā tíng' },
    spanish: { word: 'Familia', phonetic: 'Fah-mee-lyah' },
    french: { word: 'Famille', phonetic: 'Fah-meey' },
    hebrew: { word: 'מִשְׁפָּחָה', script: 'משפחה', phonetic: 'Mishpacha' },
    greek: { word: 'Οικογένεια', script: 'Οικογένεια', phonetic: 'Ee-koh-yeh-nee-ah' },
    latin: { word: 'Familia', phonetic: 'Fah-mee-lee-ah' },
    arabic: { word: 'عَائِلَة', script: 'عائلة', phonetic: 'Aa\'ilah' },
    hindi: { word: 'परिवार', script: 'परिवार', phonetic: 'Parivaar' }
  }
];
