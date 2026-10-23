/**
 * Polyglot Language Academy Data
 * Incorporating 9 Global & Classical Languages in a very easy, adult-friendly way:
 * 1. Mandarin Chinese (普通话)
 * 2. Spanish (Español)
 * 3. French (Français)
 * 4. Hebrew (עברית)
 * 5. Greek (Ελληνικά)
 * 6. Latin (Lingua Latina)
 * 7. Arabic (العربية)
 * 8. Hindi (हिन्दी)
 * 9. English (Global English)
 */

export type LanguageId = 
  | 'mandarin' 
  | 'spanish' 
  | 'french' 
  | 'hebrew' 
  | 'greek' 
  | 'latin' 
  | 'arabic' 
  | 'hindi' 
  | 'english';

export interface LanguagePhrase {
  id: string;
  originalScript: string;
  phonetic: string;
  syllables: string[];
  english: string;
  literalMeaning: string;
  memoryHook: string; // Adult mnemonic
  culturalNote?: string;
  category: 'greetings' | 'essentials' | 'daily-life' | 'wisdom-proverbs';
}

export interface LanguageUnit {
  id: string;
  title: string;
  level: string;
  description: string;
  phrases: LanguagePhrase[];
}

export interface LanguageCourse {
  id: LanguageId;
  name: string;
  nativeName: string;
  flag: string;
  emblem: string;
  speechLangCode: string;
  speakersCount: string;
  whyEasyForAdults: string[];
  keySecretForBeginners: string;
  units: LanguageUnit[];
  proverbs: {
    script: string;
    phonetic: string;
    meaning: string;
    explanation: string;
  }[];
}

export const GLOBAL_LANGUAGES: Record<LanguageId, LanguageCourse> = {
  // =========================================================================
  // 1. MANDARIN CHINESE (普通话)
  // =========================================================================
  mandarin: {
    id: 'mandarin',
    name: 'Mandarin Chinese',
    nativeName: '普通话 • 中文',
    flag: '🇨🇳',
    emblem: '🏮',
    speechLangCode: 'zh-CN',
    speakersCount: '1.1+ Billion',
    whyEasyForAdults: [
      'No verb conjugations: Verbs never change for I, you, he, she, or plurals!',
      'No gendered nouns: No confusing "masculine" or "feminine" words.',
      'Characters fit together like Lego blocks: e.g., 火 (fire) + 山 (mountain) = 火山 (volcano)!',
      'Logical number system: 11 is simply "ten-one" (十一, shí yī).'
    ],
    keySecretForBeginners: 'Chinese grammar is actually simpler than English! Focus on Pinyin phonetics and word building blocks.',
    units: [
      {
        id: 'mandarin-u1',
        title: 'Essential Greetings & Courtesy',
        level: 'Unit 1 • Zero to Speaking',
        description: 'First high-frequency words every beginner needs.',
        phrases: [
          {
            id: 'zh-1',
            originalScript: '你好',
            phonetic: 'Nǐ hǎo',
            syllables: ['Nee', 'How'],
            english: 'Hello',
            literalMeaning: 'You (Nǐ) + Good (Hǎo)',
            memoryHook: 'Think of wishing "You Good!" to someone you meet.',
            culturalNote: 'The universal polite greeting used by over 1 billion people.',
            category: 'greetings'
          },
          {
            id: 'zh-2',
            originalScript: '谢谢',
            phonetic: 'Xièxie',
            syllables: ['Shyeh', 'shyeh'],
            english: 'Thank you',
            literalMeaning: 'Gratitude expressed twice for emphasis',
            memoryHook: 'Sounds like "She-yeah, she-yeah" said with a warm smile.',
            category: 'greetings'
          },
          {
            id: 'zh-3',
            originalScript: '再见',
            phonetic: 'Zàijiàn',
            syllables: ['Dzeye', 'Jyen'],
            english: 'Goodbye',
            literalMeaning: 'Again (Zài) + See (Jiàn) -> "See you again"',
            memoryHook: 'Not "farewell forever", but an optimistic promise to "see you again".',
            category: 'greetings'
          },
          {
            id: 'zh-4',
            originalScript: '不客气',
            phonetic: 'Bù kèqi',
            syllables: ['Boo', 'kuh', 'chee'],
            english: 'You are welcome',
            literalMeaning: 'Not (Bù) + Polite/Formal (Kèqi) -> "No need to be so polite/formal!"',
            memoryHook: 'Tells the other person: "Treat me like family, no need for formalities!"',
            category: 'greetings'
          },
          {
            id: 'zh-5',
            originalScript: '你好吗？',
            phonetic: 'Nǐ hǎo ma?',
            syllables: ['Nee', 'how', 'mah'],
            english: 'How are you?',
            literalMeaning: 'You (Nǐ) + Good (Hǎo) + Question Particle (Ma)',
            memoryHook: 'Adding "Ma" at the end turns any statement into a question!',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'mandarin-u2',
        title: 'Living Essentials: Water, Bread, Friend, Love',
        level: 'Unit 2 • Core Vocabulary',
        description: 'Fundamental elements of daily living and connection.',
        phrases: [
          {
            id: 'zh-6',
            originalScript: '水',
            phonetic: 'Shuǐ',
            syllables: ['Shway'],
            english: 'Water',
            literalMeaning: 'Flowing water stream',
            memoryHook: 'The ancient character originally looked like a river with ripples.',
            category: 'essentials'
          },
          {
            id: 'zh-7',
            originalScript: '朋友',
            phonetic: 'Péngyou',
            syllables: ['Pung', 'yo'],
            english: 'Friend',
            literalMeaning: 'Two connected pearls or moons walking side by side',
            memoryHook: 'Friends are two companion spirits walking the same path.',
            category: 'essentials'
          },
          {
            id: 'zh-8',
            originalScript: '家',
            phonetic: 'Jiā',
            syllables: ['Jyah'],
            english: 'Home / Family',
            literalMeaning: 'A roof (宀) sheltering life below',
            memoryHook: 'A loving roof covering the family together.',
            category: 'essentials'
          },
          {
            id: 'zh-9',
            originalScript: '爱',
            phonetic: 'Ài',
            syllables: ['Eye'],
            english: 'Love',
            literalMeaning: 'Cherishing from the heart (心)',
            memoryHook: 'Pronounced like the English word "Eye" — what you see with affection.',
            category: 'essentials'
          },
          {
            id: 'zh-10',
            originalScript: '和平',
            phonetic: 'Hépíng',
            syllables: ['Huh', 'ping'],
            english: 'Peace',
            literalMeaning: 'Harmony (Hé) + Calm/Level (Píng)',
            memoryHook: 'When life is level and in harmony with others, peace reigns.',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: '千里之行，始于足下',
        phonetic: 'Qiān lǐ zhī xíng, shǐ yú zú xià',
        meaning: 'A journey of a thousand miles begins with a single step.',
        explanation: 'Laozi’s timeless reminder that every great language or skill is achieved through small, steady daily actions.'
      },
      {
        script: '学而不厌，诲人不倦',
        phonetic: 'Xué ér bù yàn, huì rén bù juàn',
        meaning: 'Learn without feeling satiated; teach others without growing weary.',
        explanation: 'Confucius on the joy of lifelong learning and generous knowledge sharing.'
      }
    ]
  },

  // =========================================================================
  // 2. SPANISH (Español)
  // =========================================================================
  spanish: {
    id: 'spanish',
    name: 'Spanish',
    nativeName: 'Español • Castellano',
    flag: '🇪🇸',
    emblem: '💃',
    speechLangCode: 'es-ES',
    speakersCount: '500+ Million',
    whyEasyForAdults: [
      '100% Phonetic: Every letter is pronounced consistently as written!',
      '3,000+ English Cognates: Words ending in -ción match English -tion (acción = action, educación = education).',
      'Word order closely mirrors English: S-V-O structure is natural and conversational.',
      'Global utility: Official language in 21 countries across the Americas and Europe.'
    ],
    keySecretForBeginners: 'Pronounce every vowel purely (A, E, I, O, U: Ah, Eh, Ee, Oh, Oo) and you will immediately sound fluent!',
    units: [
      {
        id: 'spanish-u1',
        title: 'Warm Greetings & Kind Courtesies',
        level: 'Unit 1 • Friendly Connections',
        description: 'Everyday warmth across Latin America and Spain.',
        phrases: [
          {
            id: 'es-1',
            originalScript: '¡Hola!',
            phonetic: 'OH-lah',
            syllables: ['Oh', 'lah'],
            english: 'Hello / Hi',
            literalMeaning: 'Friendly informal greeting (the H is always silent)',
            memoryHook: 'Remember the silent H: like "Oh-la-la", just say "OH-lah".',
            category: 'greetings'
          },
          {
            id: 'es-2',
            originalScript: 'Buenos días',
            phonetic: 'BWEH-nohs DEE-ahs',
            syllables: ['Bweh', 'nohs', 'Dee', 'ahs'],
            english: 'Good morning / Good day',
            literalMeaning: 'Good (Buenos) + Days (Días)',
            memoryHook: 'Wishing someone multiple good days all at once!',
            category: 'greetings'
          },
          {
            id: 'es-3',
            originalScript: 'Por favor',
            phonetic: 'Por fah-VOR',
            syllables: ['Por', 'fah', 'vor'],
            english: 'Please',
            literalMeaning: 'As a favor',
            memoryHook: 'Directly asking: "As a favor for me."',
            category: 'greetings'
          },
          {
            id: 'es-4',
            originalScript: 'Muchas gracias',
            phonetic: 'MOO-chahs GRAH-syahs',
            syllables: ['Moo', 'chahs', 'Grah', 'syahs'],
            english: 'Thank you very much',
            literalMeaning: 'Many (Muchas) + Graces (Gracias)',
            memoryHook: 'Connect "Gracias" to English "Grace" — wishing grace upon someone.',
            category: 'greetings'
          },
          {
            id: 'es-5',
            originalScript: '¿Cómo estás?',
            phonetic: 'KOH-moh ehs-TAHS',
            syllables: ['Koh', 'moh', 'ehs', 'tahs'],
            english: 'How are you?',
            literalMeaning: 'How (Cómo) + Are you in this moment (Estás)?',
            memoryHook: 'Easy reply: "¡Muy bien, gracias!" (Very well, thank you!)',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'spanish-u2',
        title: 'Life Essentials & Relationships',
        level: 'Unit 2 • Practical Words',
        description: 'Water, food, home, love, and community.',
        phrases: [
          {
            id: 'es-6',
            originalScript: 'Agua',
            phonetic: 'AH-gwah',
            syllables: ['Ah', 'gwah'],
            english: 'Water',
            literalMeaning: 'Clear water (from Latin Aqua)',
            memoryHook: 'Connects to "Aquarium", "Aquatic", and "Aqueduct".',
            category: 'essentials'
          },
          {
            id: 'es-7',
            originalScript: 'Amigo / Amiga',
            phonetic: 'ah-MEE-goh / ah-MEE-gah',
            syllables: ['Ah', 'mee', 'goh'],
            english: 'Friend (male / female)',
            literalMeaning: 'Friendly companion (from Latin Amicus)',
            memoryHook: 'Connects to English "Amicable" (friendly).',
            category: 'essentials'
          },
          {
            id: 'es-8',
            originalScript: 'Casa',
            phonetic: 'KAH-sah',
            syllables: ['Kah', 'sah'],
            english: 'House / Home',
            literalMeaning: 'Household dwelling',
            memoryHook: 'Think of "Mi casa es su casa" (My home is your home).',
            category: 'essentials'
          },
          {
            id: 'es-9',
            originalScript: 'Paz',
            phonetic: 'Pahs',
            syllables: ['Pahs'],
            english: 'Peace',
            literalMeaning: 'Tranquility and harmony',
            memoryHook: 'Connects to "Pacify" and "Pacific Ocean" (peaceful ocean).',
            category: 'essentials'
          },
          {
            id: 'es-10',
            originalScript: 'Amor',
            phonetic: 'ah-MOR',
            syllables: ['Ah', 'mor'],
            english: 'Love',
            literalMeaning: 'Affection and deep devotion',
            memoryHook: 'Connects to "Amorous" and "Cupid’s Amor".',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: 'Poco a poco se anda lejos',
        phonetic: 'POH-koh ah POH-koh seh AHN-dah LEH-hohs',
        meaning: 'Little by little, one walks far.',
        explanation: 'The classic Spanish reminder that patience and consistent small steps accomplish great goals.'
      },
      {
        script: 'El saber no ocupa lugar',
        phonetic: 'Ehl sah-BEHR noh OH-koo-pah loo-GAHR',
        meaning: 'Knowledge takes up no space in your luggage.',
        explanation: 'Learning is the one treasure you can carry anywhere in the world for free.'
      }
    ]
  },

  // =========================================================================
  // 3. FRENCH (Français)
  // =========================================================================
  french: {
    id: 'french',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    emblem: '🥐',
    speechLangCode: 'fr-FR',
    speakersCount: '300+ Million',
    whyEasyForAdults: [
      'Huge English crossover: Over 10,000 English words originated from French!',
      'Familiar alphabet and Latin roots.',
      'Melodic rhythm: Speech flows smoothly with natural musical liaison.',
      'International diplomacy and trade language spoken across Europe, Africa, and North America.'
    ],
    keySecretForBeginners: 'Do not pronounce the very last consonant in most French words (e.g. "Paris" is "Pah-ree", "Vous" is "Voo").',
    units: [
      {
        id: 'french-u1',
        title: 'Polite Greetings & Everyday Elegance',
        level: 'Unit 1 • Courteous Introductions',
        description: 'Essential polite phrases.',
        phrases: [
          {
            id: 'fr-1',
            originalScript: 'Bonjour',
            phonetic: 'bohn-ZHOOR',
            syllables: ['Bohn', 'zhoor'],
            english: 'Hello / Good morning',
            literalMeaning: 'Good (Bon) + Day (Jour)',
            memoryHook: 'Like "Bon voyage" (Good journey), "Bonjour" is "Good day!"',
            category: 'greetings'
          },
          {
            id: 'fr-2',
            originalScript: 'Merci beaucoup',
            phonetic: 'mehr-SEE boh-KOO',
            syllables: ['Mehr', 'see', 'Boh', 'koo'],
            english: 'Thank you very much',
            literalMeaning: 'Thanks (Merci) + Much/A lot (Beaucoup)',
            memoryHook: 'Imagine bowing and expressing gratitude "by the bucketful" (beaucoup)!',
            category: 'greetings'
          },
          {
            id: 'fr-3',
            originalScript: 'S\'il vous plaît',
            phonetic: 'seel voo PLEH',
            syllables: ['Seel', 'voo', 'pleh'],
            english: 'Please',
            literalMeaning: 'If it pleases you',
            memoryHook: 'Gentle courtesy: "If it brings you pleasure."',
            category: 'greetings'
          },
          {
            id: 'fr-4',
            originalScript: 'Au revoir',
            phonetic: 'oh ruh-VWAHR',
            syllables: ['Oh', 'ruh', 'vwahr'],
            english: 'Goodbye',
            literalMeaning: 'Until (Au) + Seeing again (Revoir)',
            memoryHook: 'Just like Spanish, it means "Until we see each other again."',
            category: 'greetings'
          },
          {
            id: 'fr-5',
            originalScript: 'Comment allez-vous ?',
            phonetic: 'koh-mahn tah-lay VOO',
            syllables: ['Koh', 'mahn', 'tah', 'lay', 'voo'],
            english: 'How are you?',
            literalMeaning: 'How are you travelling/faring?',
            memoryHook: 'Polite and respectful for anyone of any age.',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'french-u2',
        title: 'Life, Food & Harmony',
        level: 'Unit 2 • Core Vocabulary',
        description: 'Daily life nouns and values.',
        phrases: [
          {
            id: 'fr-6',
            originalScript: 'L\'eau',
            phonetic: 'Loh',
            syllables: ['Loh'],
            english: 'Water',
            literalMeaning: 'Pure drinking water',
            memoryHook: 'Sounds like "Oh!" with an L. Connect to "Eau de toilette / Eau de vie".',
            category: 'essentials'
          },
          {
            id: 'fr-7',
            originalScript: 'Le pain',
            phonetic: 'luh PAHN',
            syllables: ['Luh', 'pahn'],
            english: 'Bread',
            literalMeaning: 'Fresh daily bread / baguette',
            memoryHook: 'Think of "Panera" or a bakery "panier" (bread basket).',
            category: 'essentials'
          },
          {
            id: 'fr-8',
            originalScript: 'L\'ami / L\'amie',
            phonetic: 'lah-MEE',
            syllables: ['Lah', 'mee'],
            english: 'Friend (male / female)',
            literalMeaning: 'Beloved companion',
            memoryHook: 'Think of "Amiable" in English.',
            category: 'essentials'
          },
          {
            id: 'fr-9',
            originalScript: 'La paix',
            phonetic: 'lah PEH',
            syllables: ['Lah', 'peh'],
            english: 'Peace',
            literalMeaning: 'Tranquility',
            memoryHook: 'Related to Latin Pax and English "Pacific".',
            category: 'essentials'
          },
          {
            id: 'fr-10',
            originalScript: 'L\'amour',
            phonetic: 'lah-MOOR',
            syllables: ['Lah', 'moor'],
            english: 'Love',
            literalMeaning: 'Affection and deep devotion',
            memoryHook: 'Think of "C’est l’amour!" (That’s love!).',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: 'Petit à petit, l\'oiseau fait son nid',
        phonetic: 'Puh-TEE ah puh-TEE, lwah-ZOH feh sohn NEE',
        meaning: 'Little by little, the bird builds its nest.',
        explanation: 'Every masterpiece and language is mastered through gentle, daily persistence.'
      },
      {
        script: 'Vouloir, c\'est pouvoir',
        phonetic: 'Voo-LWAHR seh poo-VWAHR',
        meaning: 'To will is to be able (Where there is a will, there is a way).',
        explanation: 'Determined commitment unlocks the capability to achieve.'
      }
    ]
  },

  // =========================================================================
  // 4. HEBREW (עברית - Ivrit)
  // =========================================================================
  hebrew: {
    id: 'hebrew',
    name: 'Hebrew',
    nativeName: 'עִבְרִית • Ivrit',
    flag: '🇮🇱',
    emblem: '🕎',
    speechLangCode: 'he-IL',
    speakersCount: '10+ Million',
    whyEasyForAdults: [
      'The 3-Letter Root System (Shoresh): Once you know 3 root consonants, you can decipher 20+ words!',
      'Example: Root ש-ל-ם (Sh-L-M) gives Shalom (Peace), Shalem (Whole), Tashlum (Payment), and Jerusalem.',
      'No verb "to be" in present tense: You just say "I teacher" (Ani moreh) or "Water good" (Mayim tovim).',
      'Revived modern miracle: Ancient Biblical language updated with complete phonetic consistency.'
    ],
    keySecretForBeginners: 'Hebrew reads from Right to Left (RTL). Focus on the core 3-letter root of each word to unlock its deeper spiritual and practical meaning.',
    units: [
      {
        id: 'hebrew-u1',
        title: 'Shalom & Everyday Blessings',
        level: 'Unit 1 • Foundational Greetings',
        description: 'Peace, blessings, and simple daily greetings.',
        phrases: [
          {
            id: 'he-1',
            originalScript: 'שָׁלוֹם',
            phonetic: 'Shah-LOHM',
            syllables: ['Shah', 'lohm'],
            english: 'Peace / Hello / Goodbye',
            literalMeaning: 'Wholeness, completeness, tranquility',
            memoryHook: 'The most famous word in Hebrew. Means hello, goodbye, and complete peace all in one!',
            culturalNote: 'Wishes God’s total harmony and health upon the listener.',
            category: 'greetings'
          },
          {
            id: 'he-2',
            originalScript: 'תּוֹדָה',
            phonetic: 'Toh-DAH',
            syllables: ['Toh', 'dah'],
            english: 'Thank you',
            literalMeaning: 'Thanks / Acknowledgment',
            memoryHook: 'Sounds like "To-Dah!" — like announcing a joyful gift.',
            category: 'greetings'
          },
          {
            id: 'he-3',
            originalScript: 'בּוֹקֶר טוֹב',
            phonetic: 'BOH-ker TOHV',
            syllables: ['Boh', 'ker', 'Tohv'],
            english: 'Good morning',
            literalMeaning: 'Morning (Boker) + Good (Tov)',
            memoryHook: 'Easy response: "Boker Or!" (Morning of Light!).',
            category: 'greetings'
          },
          {
            id: 'he-4',
            originalScript: 'בְּבַקָּשָׁה',
            phonetic: 'Beh-vah-kah-SHAH',
            syllables: ['Beh', 'vah', 'kah', 'shah'],
            english: 'Please / You are welcome',
            literalMeaning: 'With request / Graciously offered',
            memoryHook: 'Used for both "please" when asking and "you’re welcome" when giving.',
            category: 'greetings'
          },
          {
            id: 'he-5',
            originalScript: 'מַה נִּשְׁמָע？',
            phonetic: 'Mah neesh-MAH?',
            syllables: ['Mah', 'neesh', 'mah'],
            english: 'How are you? / What’s up?',
            literalMeaning: 'What is heard? (from Sh’ma = to hear)',
            memoryHook: 'Asking your friend: "What’s heard in your world today?"',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'hebrew-u2',
        title: 'Living Foundations: Water, Light, Love & Friendship',
        level: 'Unit 2 • Biblical & Modern Roots',
        description: 'Core concepts with deep historical roots.',
        phrases: [
          {
            id: 'he-6',
            originalScript: 'מַיִם',
            phonetic: 'MAH-yeem',
            syllables: ['Mah', 'yeem'],
            english: 'Water',
            literalMeaning: 'Living waters (always plural, signifying abundance)',
            memoryHook: 'Sounds like "My-yim" — essential for desert life.',
            category: 'essentials'
          },
          {
            id: 'he-7',
            originalScript: 'אוֹר',
            phonetic: 'Or',
            syllables: ['Or'],
            english: 'Light',
            literalMeaning: 'Radiant illumination (Genesis 1:3: "Yehi Or" = Let there be light)',
            memoryHook: 'Short and powerful: "Or". Illuminates darkness.',
            category: 'essentials'
          },
          {
            id: 'he-8',
            originalScript: 'חָבֵר',
            phonetic: 'Chah-VEHR',
            syllables: ['Chah', 'vehr'],
            english: 'Friend / Companion',
            literalMeaning: 'Connected / bound together in covenant',
            memoryHook: 'A true friend is someone joined to your heart.',
            category: 'essentials'
          },
          {
            id: 'he-9',
            originalScript: 'אַהֲבָה',
            phonetic: 'Ah-hah-VAH',
            syllables: ['Ah', 'hah', 'vah'],
            english: 'Love',
            literalMeaning: 'Affection through giving (Root: Hav = to give)',
            memoryHook: 'Hebrew reveals that real love is proven through giving, not just feelings.',
            category: 'essentials'
          },
          {
            id: 'he-10',
            originalScript: 'חֶסֶד',
            phonetic: 'CHEH-sed',
            syllables: ['Cheh', 'sed'],
            english: 'Loving-kindness / Grace',
            literalMeaning: 'Faithful, loyal, covenant love',
            memoryHook: 'Unconditional grace that never gives up.',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: 'וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ',
        phonetic: 'V\'ah-hav-TAH leh-ray-ah-CHAH kah-MOH-chah',
        meaning: 'Love your neighbor as yourself (Leviticus 19:18).',
        explanation: 'The universal Golden Rule taught by Moses and Jesus as the foundation of all moral civilization.'
      },
      {
        script: 'אֵיזֶהוּ חָכָם? הַלּוֹמֵד מִכָּל אָדָם',
        phonetic: 'EY-zeh-hoo chah-CHAHM? Hah-loh-MEHD mee-kohl ah-DAHM',
        meaning: 'Who is truly wise? The one who learns from every single person.',
        explanation: 'From Pirkei Avot (Wisdom of the Fathers) — humble readiness to learn from anyone.'
      }
    ]
  },

  // =========================================================================
  // 5. GREEK (Ελληνικά - Ancient / Koine & Modern)
  // =========================================================================
  greek: {
    id: 'greek',
    name: 'Greek',
    nativeName: 'Ελληνικά • Hellenic',
    flag: '🇬🇷',
    emblem: '🏛️',
    speechLangCode: 'el-GR',
    speakersCount: '14+ Million (Foundational to all Science & Medicine)',
    whyEasyForAdults: [
      'You already know hundreds of Greek words! Science, medicine, mathematics, and philosophy are 50%+ Greek.',
      'Example: Bio (Life) + Logos (Study) = Biology. Tele (Far) + Phone (Sound) = Telephone.',
      'The Greek alphabet is the parent of the Latin alphabet and Cyrillic script.',
      'Original language of the New Testament (Koine Greek), Homer, Aristotle, and the Olympics.'
    ],
    keySecretForBeginners: 'Recognize Greek prefixes and suffixes (Geo, Bio, Chrono, Micro, Macro, Phono, Auto) to unlock instant comprehension.',
    units: [
      {
        id: 'greek-u1',
        title: 'Warm Mediterranean Greetings',
        level: 'Unit 1 • Daily Hospitality',
        description: 'First conversational greetings.',
        phrases: [
          {
            id: 'el-1',
            originalScript: 'Γεια σας',
            phonetic: 'YAH sahs',
            syllables: ['Yah', 'sahs'],
            english: 'Hello / Greetings (Polite)',
            literalMeaning: 'Health to you (from Hygieia = health)',
            memoryHook: 'Saying "Health to you!" Connects to English "Hygiene".',
            category: 'greetings'
          },
          {
            id: 'el-2',
            originalScript: 'Καλημέρα',
            phonetic: 'Kah-lee-MEH-rah',
            syllables: ['Kah', 'lee', 'meh', 'rah'],
            english: 'Good morning',
            literalMeaning: 'Good (Kali) + Day (Mera)',
            memoryHook: 'Think of "Kali" (beautiful/good) + "Mera" (day).',
            category: 'greetings'
          },
          {
            id: 'el-3',
            originalScript: 'Ευχαριστώ',
            phonetic: 'Ef-chah-ree-STOH',
            syllables: ['Ef', 'chah', 'ree', 'stoh'],
            english: 'Thank you',
            literalMeaning: 'I give good thanks / grace',
            memoryHook: 'Connect to "Eucharist" in church history — giving thanks.',
            category: 'greetings'
          },
          {
            id: 'el-4',
            originalScript: 'Παρακαλώ',
            phonetic: 'Pah-rah-kah-LOH',
            syllables: ['Pah', 'rah', 'kah', 'loh'],
            english: 'Please / You are welcome',
            literalMeaning: 'I invite / call upon you',
            memoryHook: 'Used when asking politely or welcoming a guest.',
            category: 'greetings'
          },
          {
            id: 'el-5',
            originalScript: 'Τι κάνεις;',
            phonetic: 'Tee KAH-nees?',
            syllables: ['Tee', 'kah', 'nees'],
            english: 'How are you? / What are you doing?',
            literalMeaning: 'What (Ti) + Are you doing/making (Kaneis)?',
            memoryHook: 'In Greek, a question mark is written as a semicolon (;)!',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'greek-u2',
        title: 'Classical Roots: Logos, Agape, Sophia, Eirene',
        level: 'Unit 2 • The Words That Shaped Civilization',
        description: 'Universal concepts of truth and love.',
        phrases: [
          {
            id: 'el-6',
            originalScript: 'Αγάπη',
            phonetic: 'Ah-GAH-pee',
            syllables: ['Ah', 'gah', 'pee'],
            english: 'Unconditional Love (Agape)',
            literalMeaning: 'Self-sacrificing, benevolent goodwill',
            memoryHook: 'The highest biblical form of love: choosing the good of another.',
            category: 'essentials'
          },
          {
            id: 'el-7',
            originalScript: 'Σοφία',
            phonetic: 'Soh-FEE-ah',
            syllables: ['Soh', 'fee', 'ah'],
            english: 'Wisdom',
            literalMeaning: 'Deep insight and discernment',
            memoryHook: 'Philo-sophia = Love of Wisdom. The root of the name "Sophia".',
            category: 'essentials'
          },
          {
            id: 'el-8',
            originalScript: 'Ειρήνη',
            phonetic: 'Ee-REE-nee',
            syllables: ['Ee', 'ree', 'nee'],
            english: 'Peace (Eirene)',
            literalMeaning: 'Quiet rest, concord, prosperity',
            memoryHook: 'The root of the name "Irene" and "Irenic" (peaceful).',
            category: 'essentials'
          },
          {
            id: 'el-9',
            originalScript: 'Λόγος',
            phonetic: 'LOH-gohs',
            syllables: ['Loh', 'gohs'],
            english: 'Reason / Word / Meaning',
            literalMeaning: 'The divine rational order underlying the universe',
            memoryHook: 'The root of "-logy" (Biology, Geology, Logic). John 1:1: "In the beginning was the Logos".',
            category: 'essentials'
          },
          {
            id: 'el-10',
            originalScript: 'Φίλος',
            phonetic: 'FEE-lohs',
            syllables: ['Fee', 'lohs'],
            english: 'Friend / Companion',
            literalMeaning: 'Beloved brotherly companion',
            memoryHook: 'Phil-adelphia = City of Brotherly Love. Phil-anthropy = Love of humanity.',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: 'Γνῶθι σεαυτόν',
        phonetic: 'GNOH-thee seh-ow-TOHN',
        meaning: 'Know thyself.',
        explanation: 'Inscribed at the Temple of Delphi and taught by Socrates as the starting point of real wisdom.'
      },
      {
        script: 'Ἓν οἶδα ὅτι οὐδὲν οἶδα',
        phonetic: 'Hehn OY-dah HOH-tee oo-DEHN OY-dah',
        meaning: 'I know one thing: that I know nothing.',
        explanation: 'Socrates on intellectual humility and the unending adventure of learning.'
      }
    ]
  },

  // =========================================================================
  // 6. LATIN (Lingua Latina)
  // =========================================================================
  latin: {
    id: 'latin',
    name: 'Latin',
    nativeName: 'Lingua Latīna',
    flag: '🏛️',
    emblem: '📜',
    speechLangCode: 'it-IT',
    speakersCount: 'Mother of 5 Romance Languages & 60% of English Vocabulary',
    whyEasyForAdults: [
      'The "Superpower Code" of English: Over 60% of English words come directly from Latin roots!',
      'Learn 1 Latin root and you instantly unlock 15 English, Spanish, and French words.',
      'Example: "Spect" (Look) -> Inspect, Respect, Spectator, Perspective, Retrospect.',
      'The universal foundation of Law (Pro bono, Habeas corpus), Medicine (Post mortem), and Science (Species, Homo sapiens).'
    ],
    keySecretForBeginners: 'Every letter is sounded clearly. C is pronounced like K ("Veni, vidi, vici" = Weh-nee, wee-dee, wee-kee).',
    units: [
      {
        id: 'latin-u1',
        title: 'Classical Salutations & Core Roots',
        level: 'Unit 1 • Foundational Vocabulary',
        description: 'The ancient roots that built modern thought.',
        phrases: [
          {
            id: 'la-1',
            originalScript: 'Salvē! / Salvēte!',
            phonetic: 'SAHL-weh / sahl-WEH-teh',
            syllables: ['Sahl', 'weh'],
            english: 'Hello / Be in good health!',
            literalMeaning: 'Be safe, healthy, and prosperous',
            memoryHook: 'Root of "Salvation", "Salute", and "Salubrious".',
            category: 'greetings'
          },
          {
            id: 'la-2',
            originalScript: 'Grātiās tibi agō',
            phonetic: 'GRAH-tee-ahs TEE-bee AH-goh',
            syllables: ['Grah', 'tee', 'ahs', 'tee', 'bee', 'ah', 'goh'],
            english: 'Thank you',
            literalMeaning: 'I give thanks/grace to you',
            memoryHook: 'Root of "Gratitude", "Grace", and "Congratulate".',
            category: 'greetings'
          },
          {
            id: 'la-3',
            originalScript: 'Valē!',
            phonetic: 'WAH-leh',
            syllables: ['Wah', 'leh'],
            english: 'Farewell / Goodbye',
            literalMeaning: 'Be strong / healthy',
            memoryHook: 'Root of "Valedictorian" (the one who says farewell) and "Valiant" (strong).',
            category: 'greetings'
          },
          {
            id: 'la-4',
            originalScript: 'Quōmodo valēs?',
            phonetic: 'KWOH-moh-doh WAH-lays?',
            syllables: ['Kwoh', 'moh', 'doh', 'wah', 'lays'],
            english: 'How are you?',
            literalMeaning: 'In what manner are you keeping well?',
            memoryHook: 'Direct classical check-in between scholars.',
            category: 'greetings'
          },
          {
            id: 'la-5',
            originalScript: 'Carpe diem',
            phonetic: 'KAHR-peh DEE-ehm',
            syllables: ['Kahr', 'peh', 'dee', 'ehm'],
            english: 'Seize the day',
            literalMeaning: 'Pluck / harvest the day as a ripe fruit',
            memoryHook: 'From the poet Horace: make the most of this precious present moment!',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'latin-u2',
        title: 'Universal Elements: Aqua, Lux, Vita, Pax, Amor',
        level: 'Unit 2 • The Architecture of Words',
        description: 'Roots you use every day in English and science.',
        phrases: [
          {
            id: 'la-6',
            originalScript: 'Aqua',
            phonetic: 'AH-kwah',
            syllables: ['Ah', 'kwah'],
            english: 'Water',
            literalMeaning: 'Pure water',
            memoryHook: 'Aquarium, Aquatic, Aqueduct, Aquifer.',
            category: 'essentials'
          },
          {
            id: 'la-7',
            originalScript: 'Lūx',
            phonetic: 'Looks',
            syllables: ['Looks'],
            english: 'Light',
            literalMeaning: 'Radiance / brightness',
            memoryHook: 'Lucid, Illuminate, Translucent, Luxury.',
            category: 'essentials'
          },
          {
            id: 'la-8',
            originalScript: 'Vīta',
            phonetic: 'WEE-tah',
            syllables: ['Wee', 'tah'],
            english: 'Life',
            literalMeaning: 'Living existence',
            memoryHook: 'Vital, Vitamin, Revitalize, Curriculum Vitae (CV = Course of Life).',
            category: 'essentials'
          },
          {
            id: 'la-9',
            originalScript: 'Pāx',
            phonetic: 'Pahks',
            syllables: ['Pahks'],
            english: 'Peace',
            literalMeaning: 'Pact, treaty, tranquility',
            memoryHook: 'Pax Romana, Pacifier, Pacifist, Compact.',
            category: 'essentials'
          },
          {
            id: 'la-10',
            originalScript: 'Amor',
            phonetic: 'AH-mor',
            syllables: ['Ah', 'mor'],
            english: 'Love',
            literalMeaning: 'Deep affection',
            memoryHook: 'Amorous, Amity, Enamored.',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: 'Docendō discimus',
        phonetic: 'Doh-KEHN-doh DEES-kee-moos',
        meaning: 'By teaching, we learn.',
        explanation: 'Seneca’s brilliant insight: the most effective way an adult truly masters any subject is by explaining it simply to someone else.'
      },
      {
        script: 'Per aspera ad astra',
        phonetic: 'Pehr AHS-peh-rah ahd AHS-trah',
        meaning: 'Through hardships to the stars.',
        explanation: 'True excellence and achievement are forged by overcoming adversity with steadfast perseverance.'
      }
    ]
  },

  // =========================================================================
  // 7. ARABIC (العربية)
  // =========================================================================
  arabic: {
    id: 'arabic',
    name: 'Arabic',
    nativeName: 'العَرَبِيَّة • Al-Arabiyya',
    flag: '🇸🇦',
    emblem: '🌴',
    speechLangCode: 'ar-SA',
    speakersCount: '420+ Million',
    whyEasyForAdults: [
      'Mathematical Root System: Every word stems from a 3-letter consonant root (like S-L-M).',
      'Example: Root S-L-M gives Salām (Peace), Islam (Submission to Peace), Muslim, and Taslīm.',
      'Pronounced phonetically: Letters make consistent sounds with zero silent letters.',
      'Spoken across 25+ nations from Morocco to the Arabian Gulf and East Africa (Swahili borrows 40% from Arabic!).'
    ],
    keySecretForBeginners: 'Arabic is written from Right to Left. Memorize common greeting formulas that are used as universal blessings of peace and hospitality.',
    units: [
      {
        id: 'arabic-u1',
        title: 'Universal Blessings & Hospitality',
        level: 'Unit 1 • The Language of Peace',
        description: 'Warm greetings spoken across the globe.',
        phrases: [
          {
            id: 'ar-1',
            originalScript: 'السَّلَامُ عَلَيْكُمْ',
            phonetic: 'As-salāmu ‘alaykum',
            syllables: ['As', 'sah', 'lah', 'moo', 'ah', 'lay', 'koom'],
            english: 'Peace be upon you (Universal Hello)',
            literalMeaning: 'The Peace (As-salām) + Upon you (‘Alaykum)',
            memoryHook: 'The most famous greeting across the Arab and Islamic world.',
            culturalNote: 'Traditional response: "Wa ‘alaykumu s-salām" (And upon you be peace).',
            category: 'greetings'
          },
          {
            id: 'ar-2',
            originalScript: 'شُكْرًا',
            phonetic: 'Shukran',
            syllables: ['Shook', 'rahn'],
            english: 'Thank you',
            literalMeaning: 'Gratitude / Thanks',
            memoryHook: 'Short, sweet, and recognized across the Middle East and Africa.',
            category: 'greetings'
          },
          {
            id: 'ar-3',
            originalScript: 'مَرْحَبًا',
            phonetic: 'Marhaban',
            syllables: ['Mar', 'hah', 'bahn'],
            english: 'Welcome / Hello',
            literalMeaning: 'May you find ample space / ease here',
            memoryHook: 'Welcoming someone with open arms into your home or shop.',
            category: 'greetings'
          },
          {
            id: 'ar-4',
            originalScript: 'مِنْ فَضْلِكَ',
            phonetic: 'Min fadlik',
            syllables: ['Min', 'fahd', 'lik'],
            english: 'Please',
            literalMeaning: 'From your grace / favor',
            memoryHook: 'Asking with humility: "Out of your gracious kindness."',
            category: 'greetings'
          },
          {
            id: 'ar-5',
            originalScript: 'كَيْفَ حَالُكَ؟',
            phonetic: 'Kayfa hāluk?',
            syllables: ['Kay', 'fah', 'hah', 'look'],
            english: 'How are you?',
            literalMeaning: 'How (Kayfa) + Is your state/condition (Hāluk)?',
            memoryHook: 'Friendly answer: "Bi-khayr, alhamdulillah!" (In goodness, praise to God!).',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'arabic-u2',
        title: 'Daily Essentials & Core Concepts',
        level: 'Unit 2 • Life Vocabulary',
        description: 'Water, home, friend, light, and knowledge.',
        phrases: [
          {
            id: 'ar-6',
            originalScript: 'مَاء',
            phonetic: 'Mā’',
            syllables: ['Mah'],
            english: 'Water',
            literalMeaning: 'Clear living water',
            memoryHook: 'Ancient Semitic root shared with Hebrew Mayim.',
            category: 'essentials'
          },
          {
            id: 'ar-7',
            originalScript: 'بَيْت',
            phonetic: 'Bayt',
            syllables: ['Bite'],
            english: 'House / Home',
            literalMeaning: 'Dwelling place / Shelter',
            memoryHook: 'Connects to "Bethlehem" (Bayt Lahm = House of Bread).',
            category: 'essentials'
          },
          {
            id: 'ar-8',
            originalScript: 'صَدِيق',
            phonetic: 'Sadeeq',
            syllables: ['Sah', 'deek'],
            english: 'Friend',
            literalMeaning: 'One who is truthful and loyal (Root: Sidq = Truth)',
            memoryHook: 'In Arabic, a true friend is someone who always speaks truth with love.',
            category: 'essentials'
          },
          {
            id: 'ar-9',
            originalScript: 'نُور',
            phonetic: 'Nūr',
            syllables: ['Noor'],
            english: 'Light',
            literalMeaning: 'Radiance / Illumination',
            memoryHook: 'A popular name: "Noor" means bright light.',
            category: 'essentials'
          },
          {
            id: 'ar-10',
            originalScript: 'عِلْم',
            phonetic: '‘Ilm',
            syllables: ['Ilm'],
            english: 'Knowledge / Science',
            literalMeaning: 'Understanding, empirical wisdom',
            memoryHook: 'The root of "Ulema" (scholars) and "Ma\'lum" (known).',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: 'اُطْلُبُوا العِلْمَ مِنَ المَهْدِ إِلَى اللَّحْدِ',
        phonetic: 'Utlubu l-‘ilma mina l-mahdi ila l-lahd',
        meaning: 'Seek knowledge from the cradle to the grave.',
        explanation: 'Lifelong autodidact wisdom: education never ends at school; it is the journey of an entire lifetime.'
      },
      {
        script: 'الصَّبْرُ مِفْتَاحُ الفَرَجِ',
        phonetic: 'As-sabru miftāhu l-faraj',
        meaning: 'Patience is the key to relief and victory.',
        explanation: 'Every difficult problem or new language yields to steady, calm persistence.'
      }
    ]
  },

  // =========================================================================
  // 8. HINDI (हिन्दी)
  // =========================================================================
  hindi: {
    id: 'hindi',
    name: 'Hindi',
    nativeName: 'हिन्दी • Hindi',
    flag: '🇮🇳',
    emblem: '🪷',
    speechLangCode: 'hi-IN',
    speakersCount: '600+ Million',
    whyEasyForAdults: [
      '100% Phonetic Devanagari script: What you see is exactly what you say!',
      'Indo-European cousin: Hindi shares ancestral roots with English, Latin, and Greek (e.g. Mātā = Mother, Bhrātā = Brother, Nāma = Name).',
      'No capital letters: Simplifies reading and writing considerably.',
      'Rich, warm hospitality culture with intuitive polite and respectful forms.'
    ],
    keySecretForBeginners: 'Connect Hindi words to English cousins: "Naam" is Name, "Mātā" is Mother, "Do" is Two, "Dwar" is Door!',
    units: [
      {
        id: 'hindi-u1',
        title: 'Namaste & Respectful Warmth',
        level: 'Unit 1 • Respectful Greetings',
        description: 'First polite interactions.',
        phrases: [
          {
            id: 'hi-1',
            originalScript: 'नमस्ते',
            phonetic: 'Nah-mas-TAY',
            syllables: ['Nah', 'mas', 'tay'],
            english: 'Hello / Greetings (Namaste)',
            literalMeaning: 'I bow to the divine light within you (Namas = Bow, Te = to you)',
            memoryHook: 'Accompanied by folding hands together at the heart with a slight bow.',
            culturalNote: 'One of the world’s most respectful and beloved greetings.',
            category: 'greetings'
          },
          {
            id: 'hi-2',
            originalScript: 'धन्यवाद',
            phonetic: 'Dhahn-yah-VAHD',
            syllables: ['Dhahn', 'yah', 'vahd'],
            english: 'Thank you',
            literalMeaning: 'May your good deeds be blessed',
            memoryHook: 'Think of "Dhan" (treasure/goodness) being expressed back to someone.',
            category: 'greetings'
          },
          {
            id: 'hi-3',
            originalScript: 'कृपया',
            phonetic: 'KRIP-yah',
            syllables: ['Krip', 'yah'],
            english: 'Please',
            literalMeaning: 'Out of your kindness / mercy (Kripa)',
            memoryHook: 'Root: "Kripa" = grace and kindness.',
            category: 'greetings'
          },
          {
            id: 'hi-4',
            originalScript: 'अलविदा / फिर मिलेंगे',
            phonetic: 'Phir mee-LEN-gay',
            syllables: ['Phir', 'mee', 'len', 'gay'],
            english: 'Goodbye / We will meet again',
            literalMeaning: 'Again (Phir) + We will meet (Milenge)',
            memoryHook: 'Warm, hopeful goodbye: "We will see each other again soon!"',
            category: 'greetings'
          },
          {
            id: 'hi-5',
            originalScript: 'आप कैसे हैं?',
            phonetic: 'Aap KAI-say hain?',
            syllables: ['Aap', 'kay', 'say', 'hain'],
            english: 'How are you? (Polite)',
            literalMeaning: 'You (Aap) + How (Kaise) + Are (Hain)?',
            memoryHook: 'Friendly reply: "Main theek hoon, dhanyavaad!" (I am well, thank you!).',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'hindi-u2',
        title: 'Daily Essentials & Inner Peace',
        level: 'Unit 2 • Practical Foundations',
        description: 'Water, bread, home, friend, and peace.',
        phrases: [
          {
            id: 'hi-6',
            originalScript: 'पानी',
            phonetic: 'PAH-nee',
            syllables: ['Pah', 'nee'],
            english: 'Water',
            literalMeaning: 'Drinking water',
            memoryHook: 'Very easy 2-syllable word: "Pah-nee".',
            category: 'essentials'
          },
          {
            id: 'hi-7',
            originalScript: 'रोटी',
            phonetic: 'ROH-tee',
            syllables: ['Roh', 'tee'],
            english: 'Bread / Flatbread',
            literalMeaning: 'Daily warm bread',
            memoryHook: 'World-famous staple flatbread: Roti.',
            category: 'essentials'
          },
          {
            id: 'hi-8',
            originalScript: 'दोस्त',
            phonetic: 'Dohst',
            syllables: ['Dohst'],
            english: 'Friend',
            literalMeaning: 'Cherished companion',
            memoryHook: 'Think of "Dost" as your closest ally.',
            category: 'essentials'
          },
          {
            id: 'hi-9',
            originalScript: 'शांति',
            phonetic: 'SHAHN-tee',
            syllables: ['Shahn', 'tee'],
            english: 'Peace (Shanti)',
            literalMeaning: 'Calmness, tranquility, spiritual harmony',
            memoryHook: 'The ancient blessing: "Om Shanti Shanti Shanti" — peace in mind, body, and spirit.',
            category: 'essentials'
          },
          {
            id: 'hi-10',
            originalScript: 'घर',
            phonetic: 'Ghar',
            syllables: ['Ghar'],
            english: 'Home / House',
            literalMeaning: 'Family hearth',
            memoryHook: 'Short 1-syllable word: Ghar.',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: 'विद्या ददाति विनयं',
        phonetic: 'Vidya dadati vinayam',
        meaning: 'True knowledge bestows humility.',
        explanation: 'Sanskrit & Hindi proverb: the more one truly learns, the more humble, respectful, and generous one becomes.'
      },
      {
        script: 'करत-करत अभ्यास के जड़मति होत सुजान',
        phonetic: 'Karat karat abhyas ke jadamati hot sujan',
        meaning: 'Through continuous practice, even a dull mind becomes wise.',
        explanation: 'From the poet Vrind: daily practice overcomes any obstacle.'
      }
    ]
  },

  // =========================================================================
  // 9. ENGLISH (Global English)
  // =========================================================================
  english: {
    id: 'english',
    name: 'Global English',
    nativeName: 'English • Lingua Franca',
    flag: '🇬🇧',
    emblem: '🌐',
    speechLangCode: 'en-US',
    speakersCount: '1.5+ Billion',
    whyEasyForAdults: [
      'Universal Lingua Franca: Connects science, aviation, international business, and digital computing.',
      'No grammatical gender: Tables, books, and cars are just "it".',
      'Simple plural rule: Simply add "-s" to almost all nouns (book -> books).',
      'Rich flexibility: Absorbs words from Latin, French, Greek, Arabic, and Hindi with ease.'
    ],
    keySecretForBeginners: 'Speak clearly with syllable stress. English relies on friendly tone and courteous clarity.',
    units: [
      {
        id: 'english-u1',
        title: 'Polite Global Greetings & Clear Introductions',
        level: 'Unit 1 • Universal Etiquette',
        description: 'International standards of communication.',
        phrases: [
          {
            id: 'en-1',
            originalScript: 'Good morning',
            phonetic: 'Good MOR-ning',
            syllables: ['Good', 'mor', 'ning'],
            english: 'Good morning',
            literalMeaning: 'Wishing pleasant light and success during the morning hours',
            memoryHook: 'Used everywhere from London and New York to Nairobi and Singapore.',
            category: 'greetings'
          },
          {
            id: 'en-2',
            originalScript: 'Thank you very much',
            phonetic: 'THANK yoo VEH-ree much',
            syllables: ['Thank', 'yoo', 'veh', 'ree', 'much'],
            english: 'Thank you very much',
            literalMeaning: 'Heartfelt appreciation',
            memoryHook: 'The golden passport of courtesy worldwide.',
            category: 'greetings'
          },
          {
            id: 'en-3',
            originalScript: 'Please',
            phonetic: 'Pleez',
            syllables: ['Pleez'],
            english: 'Please',
            literalMeaning: 'Short for "If you please"',
            memoryHook: 'Transforms any request into a courteous collaboration.',
            category: 'greetings'
          },
          {
            id: 'en-4',
            originalScript: 'Pleased to meet you',
            phonetic: 'PLEEZD too MEET yoo',
            syllables: ['Pleezd', 'too', 'meet', 'yoo'],
            english: 'Pleased to meet you / Nice to meet you',
            literalMeaning: 'It brings me pleasure and honor to make your acquaintance',
            memoryHook: 'The classic handshake phrase.',
            category: 'greetings'
          },
          {
            id: 'en-5',
            originalScript: 'How are you today?',
            phonetic: 'HOW ahr yoo too-DAY?',
            syllables: ['How', 'ahr', 'yoo', 'too', 'day'],
            english: 'How are you today?',
            literalMeaning: 'Inquiring about your state and well-being',
            memoryHook: 'Best response: "I am doing great, thank you! And you?"',
            category: 'greetings'
          }
        ]
      },
      {
        id: 'english-u2',
        title: 'Clear Practical English: Water, Bread, Home, Peace',
        level: 'Unit 2 • Universal Building Blocks',
        description: 'Everyday survival and clarity.',
        phrases: [
          {
            id: 'en-6',
            originalScript: 'Clean water',
            phonetic: 'Kleen WAH-ter',
            syllables: ['Kleen', 'wah', 'ter'],
            english: 'Clean water',
            literalMeaning: 'Safe, pure potable water',
            memoryHook: 'Essential human need.',
            category: 'essentials'
          },
          {
            id: 'en-7',
            originalScript: 'Good friend',
            phonetic: 'Good FREND',
            syllables: ['Good', 'frend'],
            english: 'Good friend',
            literalMeaning: 'A faithful and reliable companion',
            memoryHook: 'Valued across all human societies.',
            category: 'essentials'
          },
          {
            id: 'en-8',
            originalScript: 'Welcome home',
            phonetic: 'WEL-kum HOHM',
            syllables: ['Wel', 'kum', 'hohm'],
            english: 'Welcome home',
            literalMeaning: 'Rejoicing in your safe arrival at your dwelling',
            memoryHook: 'Warm words of hospitality and family reunion.',
            category: 'essentials'
          },
          {
            id: 'en-9',
            originalScript: 'Peace and joy',
            phonetic: 'PEES and JOY',
            syllables: ['Pees', 'and', 'joy'],
            english: 'Peace and joy',
            literalMeaning: 'Tranquility and deep happiness',
            memoryHook: 'A warm universal blessing.',
            category: 'essentials'
          },
          {
            id: 'en-10',
            originalScript: 'Lifelong learner',
            phonetic: 'LYF-long LER-ner',
            syllables: ['Lyf', 'long', 'ler', 'ner'],
            english: 'Lifelong learner',
            literalMeaning: 'Someone who continues discovering throughout all of life',
            memoryHook: 'The core spirit of Educate the World!',
            category: 'essentials'
          }
        ]
      }
    ],
    proverbs: [
      {
        script: 'Where there is a will, there is a way',
        phonetic: 'WAIR thair iz ah WIL, thair iz ah WAY',
        meaning: 'Determination and diligence overcome every obstacle.',
        explanation: 'Commitment and persistence unlock solutions that seemed impossible.'
      },
      {
        script: 'A stitch in time saves nine',
        phonetic: 'Ah STICH in TYM SAYVZ NYN',
        meaning: 'Fixing a small issue early prevents huge damage later.',
        explanation: 'Wise diligence: prompt attention to homework, health, or home repairs saves immense effort.'
      }
    ]
  }
};

/**
 * Universal Polyglot Concept Crosswalk for 20-minute daily missions
 * Connects any lesson's core concept (Water, Light, Peace, Wisdom, Love) across all 9 languages!
 */
export interface ConceptCrosswalkItem {
  conceptKey: string;
  conceptEnglish: string;
  icon: string;
  translations: Record<LanguageId, {
    script: string;
    phonetic: string;
    note: string;
  }>;
}

export const CONCEPT_CROSSWALKS: Record<string, ConceptCrosswalkItem> = {
  water: {
    conceptKey: 'water',
    conceptEnglish: 'Water (Living Element)',
    icon: '💧',
    translations: {
      mandarin: { script: '水', phonetic: 'Shuǐ', note: 'Shway • Flowing stream' },
      spanish: { script: 'Agua', phonetic: 'AH-gwah', note: 'From Latin Aqua' },
      french: { script: 'L\'eau', phonetic: 'Loh', note: 'Pure fresh water' },
      hebrew: { script: 'מַיִם', phonetic: 'MAH-yeem', note: 'Living desert springs' },
      greek: { script: 'Νερό / Ὕδωρ', phonetic: 'Neh-ROH / HEED-or', note: 'Root of Hydro & Hydrogen' },
      latin: { script: 'Aqua', phonetic: 'AH-kwah', note: 'Root of Aquatic & Aquarium' },
      arabic: { script: 'مَاء', phonetic: 'Mā’', note: 'Ancient Semitic root' },
      hindi: { script: 'पानी', phonetic: 'PAH-nee', note: 'Pure drinking water' },
      english: { script: 'Water', phonetic: 'WAH-ter', note: 'Universal life liquid' }
    }
  },
  light: {
    conceptKey: 'light',
    conceptEnglish: 'Light & Sun (Solar Radiance)',
    icon: '☀️',
    translations: {
      mandarin: { script: '光 / 太阳', phonetic: 'Guāng / Tàiyáng', note: 'Gwahng • Photon brightness' },
      spanish: { script: 'Luz / Sol', phonetic: 'Loos / Sohl', note: 'From Latin Lux & Sol' },
      french: { script: 'La lumière / Le soleil', phonetic: 'lyoo-mee-EHR', note: 'Luminous solar glow' },
      hebrew: { script: 'אוֹר / שֶׁמֶשׁ', phonetic: 'Or / SHEH-mesh', note: 'Genesis 1:3: "Yehi Or!"' },
      greek: { script: 'Φῶς / Ἥλιος', phonetic: 'FOHS / HEE-lee-ohs', note: 'Root of Photo & Helium' },
      latin: { script: 'Lūx / Sōl', phonetic: 'Looks / Sohl', note: 'Root of Lucid & Solar' },
      arabic: { script: 'نُور / شَمْس', phonetic: 'Nūr / Shams', note: 'Divine radiant light' },
      hindi: { script: 'प्रकाश / सूर्य', phonetic: 'Prah-KAHSH / SOOR-ya', note: 'Solar photon radiance' },
      english: { script: 'Light / Sunshine', phonetic: 'Lyt / SUN-shyn', note: 'Illuminating darkness' }
    }
  },
  peace: {
    conceptKey: 'peace',
    conceptEnglish: 'Peace & Harmony',
    icon: '🕊️',
    translations: {
      mandarin: { script: '和平', phonetic: 'Hépíng', note: 'Huh-ping • Balanced harmony' },
      spanish: { script: 'Paz', phonetic: 'Pahs', note: 'From Latin Pax' },
      french: { script: 'La paix', phonetic: 'Lah peh', note: 'Tranquility and harmony' },
      hebrew: { script: 'שָׁלוֹם', phonetic: 'Shah-LOHM', note: 'Wholeness and complete wellness' },
      greek: { script: 'Ειρήνη', phonetic: 'Ee-REE-nee', note: 'Root of Irene and Irenic' },
      latin: { script: 'Pāx', phonetic: 'Pahks', note: 'Root of Pacific and Pacify' },
      arabic: { script: 'سَلَام', phonetic: 'Salām', note: 'Root S-L-M • Universal greeting' },
      hindi: { script: 'शांति', phonetic: 'SHAHN-tee', note: 'Om Shanti • Inner stillness' },
      english: { script: 'Peace', phonetic: 'Pees', note: 'Concord and freedom from conflict' }
    }
  },
  wisdom: {
    conceptKey: 'wisdom',
    conceptEnglish: 'Wisdom & Knowledge',
    icon: '🦉',
    translations: {
      mandarin: { script: '智慧', phonetic: 'Zhìhuì', note: 'Jrr-hway • Deep insight' },
      spanish: { script: 'Sabiduría', phonetic: 'sah-bee-doo-REE-ah', note: 'Root of Saber (to know)' },
      french: { script: 'La sagesse', phonetic: 'lah sah-ZHESS', note: 'Prudence and understanding' },
      hebrew: { script: 'חָכְמָה', phonetic: 'Choch-MAH', note: 'Proverbs wisdom of heart' },
      greek: { script: 'Σοφία', phonetic: 'Soh-FEE-ah', note: 'Root of Philosophy' },
      latin: { script: 'Sapientia', phonetic: 'sah-pee-EHN-tee-ah', note: 'Root of Homo Sapiens' },
      arabic: { script: 'حِكْمَة', phonetic: 'Hikmah', note: 'Deep insight and sound judgment' },
      hindi: { script: 'ज्ञान / विद्या', phonetic: 'GYAHN / VID-yah', note: 'Illuminated understanding' },
      english: { script: 'Wisdom', phonetic: 'WIZ-dum', note: 'Skillful application of truth' }
    }
  },
  friendship: {
    conceptKey: 'friendship',
    conceptEnglish: 'Friendship & Community',
    icon: '🤝',
    translations: {
      mandarin: { script: '友谊 / 朋友', phonetic: 'Yǒuyì / Péngyou', note: 'Walking side by side' },
      spanish: { script: 'Amistad / Amigo', phonetic: 'ah-mees-TAHD', note: 'Amicable bond' },
      french: { script: 'L\'amitié / L\'ami', phonetic: 'lah-mee-TYAY', note: 'Affectionate brotherhood' },
      hebrew: { script: 'רֵעוּת / חָבֵר', phonetic: 'Ray-OOT / Chah-vehr', note: 'Bound in mutual loyalty' },
      greek: { script: 'Φιλία', phonetic: 'Fee-LEE-ah', note: 'Philia • Brotherly friendship' },
      latin: { script: 'Amīcitia', phonetic: 'ah-mee-KEE-tee-ah', note: 'Root of Amity' },
      arabic: { script: 'صَدَاقَة', phonetic: 'Sadāqah', note: 'Built upon truth and sincerity' },
      hindi: { script: 'दोस्ती / मित्र', phonetic: 'DOHS-tee / MIT-ra', note: 'Warm, steadfast companionship' },
      english: { script: 'Friendship', phonetic: 'FREND-ship', note: 'Loving community bond' }
    }
  }
};
