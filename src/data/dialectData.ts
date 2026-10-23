import { DialectWord, LocationType, RegionalDialect } from '../types/curriculum';

export interface DialectComparisonItem {
  id: string;
  concept: string; // e.g., "Daily Greeting"
  englishExplanation: string;
  category: 'greetings' | 'home-nature' | 'food-kitchen' | 'money-trade' | 'transport-tools';
  urban: {
    phrase: string;
    dialect: string;
    settingUsage: string; // e.g. "Heard at city kiosks, boda stages, and town school gates"
    exampleDialogue: string;
  };
  rural: {
    phrase: string;
    dialect: string;
    settingUsage: string; // e.g. "Heard around the village borehole, banana shamba, and evening fireplace"
    exampleDialogue: string;
  };
}

export const DIALECT_COMPARISONS: DialectComparisonItem[] = [
  {
    id: 'comp-1',
    concept: 'Morning Greeting & Checking In',
    englishExplanation: 'How neighbors and family greet each other when the day begins.',
    category: 'greetings',
    urban: {
      phrase: 'Ki kati! / Oli otya boss!',
      dialect: 'Urban Luglish & Slang (Kampala / Jinja)',
      settingUsage: 'Quick, lively greetings along town streets, shops, and taxi stages.',
      exampleDialogue: 'Parent: "Ki kati munno!" • Child: "Bulungi nyo, I am ready for our morning mission!"'
    },
    rural: {
      phrase: 'Olyotya ssebo/nyabo! / Agandi munywani!',
      dialect: 'Traditional Luganda & Runyankole (Village)',
      settingUsage: 'Polite, respectful greetings to elders and neighbors on compound footpaths.',
      exampleDialogue: 'Child: "Olyotya nyabo!" • Elder: "Bulungi mwana wange, wasuze otya?" (I am well, how was your night?)'
    }
  },
  {
    id: 'comp-2',
    concept: 'Drinking Water & Water Source',
    englishExplanation: 'Where the home collects clean water for drinking, cooking, and washing.',
    category: 'home-nature',
    urban: {
      phrase: 'Amazzi g\'olukoba / Tap Water & Jerrycan ya 200 UGX',
      dialect: 'Urban Luganda / English',
      settingUsage: 'Buying municipal tap water at a community pay point or compound water meter.',
      exampleDialogue: '"Twala ebidomola bibiri ku tap ya koodi!" (Take two jerrycans to the neighborhood tap!)'
    },
    rural: {
      phrase: 'Ekyomba ky\'amazzi (Borehole) / Oluzi (Natural Spring)',
      dialect: 'Luganda / Lusoga / Runyankole',
      settingUsage: 'Walking down to the village borehole, pumping the metal lever with friends.',
      exampleDialogue: '"Tugende ku kyomba tusene amazzi amayonjo!" (Let us walk to the borehole and pump clean water!)'
    }
  },
  {
    id: 'comp-3',
    concept: 'Quick Daily Food & Snack',
    englishExplanation: 'Relatable food items used for fractions, counting, and sharing.',
    category: 'food-kitchen',
    urban: {
      phrase: 'Rolex (Chapati rolled with eggs) & Half-loaf y\'omukaati',
      dialect: 'Urban Luganda / Swahili Street Trade',
      settingUsage: 'Street stalls, small town bakeries, and fast corner food.',
      exampleDialogue: '"Let us slice this warm chapati into 4 quarters: ¼ + ¼ = ½ rolex!"'
    },
    rural: {
      phrase: 'Menvu (Sweet bananas) & Ebitooke / Amawogo (Sweet potatoes)',
      dialect: 'Luganda / Runyankole / Ateso',
      settingUsage: 'Harvested fresh from the family garden or roasted on the home sigiri/fire.',
      exampleDialogue: '"Tusalemu lumonde ono ebitundu bibiri ebyenkanankana!" (Cut this sweet potato into two equal halves!)'
    }
  },
  {
    id: 'comp-4',
    concept: 'Buying, Selling & Pocket Money',
    englishExplanation: 'Everyday transactions teaching financial literacy, cost, and profit.',
    category: 'money-trade',
    urban: {
      phrase: 'Ssente za change & Duuka lya koodi / Supermarket coins',
      dialect: 'Urban Luganda / English',
      settingUsage: 'Buying milk packets, airtime, or eggs with coins and receiving paper change.',
      exampleDialogue: '"Ompadde 2,000 UGX, akaveera kano ka 1,500 UGX. Balance yange eba ssente mmeka?" (500 UGX balance!)'
    },
    rural: {
      phrase: 'Akatale k\'omu kyalo & Okugula ku roadside stall',
      dialect: 'Luganda / Runyankole / Acholi',
      settingUsage: 'Weekly village market day where neighbors trade groundnuts, millet, and fruit.',
      exampleDialogue: '"Ku katale leero, tugenda kutunda ebikopo bibiri eby\'ebinyeebwa!" (Sell two cups of groundnuts at market!)'
    }
  },
  {
    id: 'comp-5',
    concept: 'Evening Family Gathering & Stories',
    englishExplanation: 'How the household reflects, reviews learning, and shares wisdom at night.',
    category: 'home-nature',
    urban: {
      phrase: 'Compound veranda chat & Solar lantern table',
      dialect: 'Urban English / Swahili / Luglish',
      settingUsage: 'Sitting around the table or veranda after cars quiet down.',
      exampleDialogue: '"Let us turn on the solar lamp and show papa your Learning Passport stamp from today!"'
    },
    rural: {
      phrase: 'Ekyoto (Fireplace circle) & Okugera engero (Telling proverbs)',
      dialect: 'Luganda / Runyankole / Acholi (Wang Oo)',
      settingUsage: 'Gathering around the warm outdoor embers, crickets singing, gazing at stars.',
      exampleDialogue: '"Jjaja agera olugero ku kkyoto: Agali awamu ge galuma ennyama!" (Together we achieve what one cannot!)'
    }
  },
  {
    id: 'comp-6',
    concept: 'Getting Around & Transport Math',
    englishExplanation: 'Observing speed, distance, wheels, and community mechanics.',
    category: 'transport-tools',
    urban: {
      phrase: 'Boda stage, Taxi matatu & Traffic jam (Kivvulu)',
      dialect: 'Urban Street Luganda & Swahili',
      settingUsage: 'Counting helmets, observing four-stroke engines, timing taxi routes.',
      exampleDialogue: '"Boda ya elfu emu (1,000 UGX fare) takes 5 minutes to travel 2 kilometers!"'
    },
    rural: {
      phrase: 'Akagaali (Cargo bicycle) & Kutambula ku bigere (Walking footpaths)',
      dialect: 'Luganda / Lusoga / Runyankole',
      settingUsage: 'Bicycles carrying milk cans or matooke bunches up hill trails.',
      exampleDialogue: '"Akagaali kano kaliko ebyuma bibiri (two gear cogs) that make pedaling easier up the slope!"'
    }
  }
];

export const REGIONAL_DIALECT_PRESETS = [
  {
    code: 'Luganda',
    region: 'Central Uganda (Kampala, Mukono, Wakiso, Masaka)',
    urbanPhrases: [
      { localWord: 'Ki kati!', englishMeaning: 'What’s up! / Hello!', language: 'Urban Luganda', setting: 'urban' as LocationType },
      { localWord: 'Oli otya boss!', englishMeaning: 'How are you sir/madam!', language: 'Urban Luganda', setting: 'urban' as LocationType },
      { localWord: 'Ssente za change', englishMeaning: 'Change money / Balance', language: 'Urban Luglish', setting: 'urban' as LocationType },
      { localWord: 'Boda ya elfu emu', englishMeaning: '1,000 shilling boda trip', language: 'Urban Luganda', setting: 'urban' as LocationType },
      { localWord: 'Duuka', englishMeaning: 'Corner shop / Kiosk', language: 'Luganda', setting: 'urban' as LocationType }
    ],
    ruralPhrases: [
      { localWord: 'Olyotya nyabo / ssebo!', englishMeaning: 'Respectful greeting to an elder', language: 'Traditional Luganda', setting: 'rural' as LocationType },
      { localWord: 'Ekyaro / Kyalo', englishMeaning: 'Village / Countryside home', language: 'Luganda', setting: 'rural' as LocationType },
      { localWord: 'Olusuku', englishMeaning: 'Banana plantation / Family shamba', language: 'Luganda', setting: 'rural' as LocationType },
      { localWord: 'Ekyoto', englishMeaning: 'Evening outdoor fireplace for stories', language: 'Luganda', setting: 'rural' as LocationType },
      { localWord: 'Akatale k\'omu kyalo', englishMeaning: 'Village weekly market', language: 'Luganda', setting: 'rural' as LocationType }
    ]
  },
  {
    code: 'Runyankole',
    region: 'Western Uganda (Mbarara, Bushenyi, Kabale, Rukungiri)',
    urbanPhrases: [
      { localWord: 'Agandi ssebo!', englishMeaning: 'How are you sir! (Town)', language: 'Runyankole', setting: 'urban' as LocationType },
      { localWord: 'Nimarungi!', englishMeaning: 'I am doing well!', language: 'Runyankole', setting: 'urban' as LocationType },
      { localWord: 'Emirimo gya tauni', englishMeaning: 'Town work / business', language: 'Runyankole', setting: 'urban' as LocationType }
    ],
    ruralPhrases: [
      { localWord: 'Agandi munywani wange!', englishMeaning: 'How are you my dear friend!', language: 'Runyankole', setting: 'rural' as LocationType },
      { localWord: 'Amate amakwase', englishMeaning: 'Fresh clotted milk from cows', language: 'Runyankole', setting: 'rural' as LocationType },
      { localWord: 'Ente n\'embuzi', englishMeaning: 'Cattle and goats in the pasture', language: 'Runyankole', setting: 'rural' as LocationType },
      { localWord: 'Obushera bw\'omuzire', englishMeaning: 'Traditional millet drink', language: 'Runyankole', setting: 'rural' as LocationType },
      { localWord: 'Ekyaro ky\'eka', englishMeaning: 'Homestead in the village', language: 'Runyankole', setting: 'rural' as LocationType }
    ]
  },
  {
    code: 'Acholi',
    region: 'Northern Uganda (Gulu, Kitgum, Pader, Nwoya)',
    urbanPhrases: [
      { localWord: 'Kop ango!', englishMeaning: 'What news! / What\'s up!', language: 'Acholi (Urban)', setting: 'urban' as LocationType },
      { localWord: 'Kop pe!', englishMeaning: 'No trouble / All is peaceful!', language: 'Acholi', setting: 'urban' as LocationType },
      { localWord: 'Cuk pa Gulu', englishMeaning: 'Gulu main town market', language: 'Acholi', setting: 'urban' as LocationType }
    ],
    ruralPhrases: [
      { localWord: 'Itye maber?', englishMeaning: 'Are you well and in peace?', language: 'Acholi', setting: 'rural' as LocationType },
      { localWord: 'Wang Oo', englishMeaning: 'Evening outdoor fireplace story circle', language: 'Acholi', setting: 'rural' as LocationType },
      { localWord: 'Potto kal', englishMeaning: 'Millet garden / field', language: 'Acholi', setting: 'rural' as LocationType },
      { localWord: 'Gang paco', englishMeaning: 'Village family home', language: 'Acholi', setting: 'rural' as LocationType },
      { localWord: 'Kwo maber', englishMeaning: 'A good, dignified life', language: 'Acholi', setting: 'rural' as LocationType }
    ]
  },
  {
    code: 'Lusoga',
    region: 'Eastern Uganda (Jinja, Iganga, Kamuli, Bugiri)',
    urbanPhrases: [
      { localWord: 'Kodheyo munno!', englishMeaning: 'Greeting friend! (Town)', language: 'Lusoga', setting: 'urban' as LocationType },
      { localWord: 'Bulungi nyo!', englishMeaning: 'Very good!', language: 'Lusoga', setting: 'urban' as LocationType },
      { localWord: 'Duuka lya tauni', englishMeaning: 'Town retail shop', language: 'Lusoga', setting: 'urban' as LocationType }
    ],
    ruralPhrases: [
      { localWord: 'Wasuze otya mwana!', englishMeaning: 'How was your night child!', language: 'Lusoga', setting: 'rural' as LocationType },
      { localWord: 'Omusiri gw\'amawogo', englishMeaning: 'Sweet potato and cassava shamba', language: 'Lusoga', setting: 'rural' as LocationType },
      { localWord: 'Olunaku lw\'akatale', englishMeaning: 'The weekly market day', language: 'Lusoga', setting: 'rural' as LocationType },
      { localWord: 'Akagaali k\'omu kyalo', englishMeaning: 'Village transport bicycle', language: 'Lusoga', setting: 'rural' as LocationType }
    ]
  },
  {
    code: 'Swahili',
    region: 'East Africa & Regional Trade (Uganda, Kenya, Tanzania, Rwanda)',
    urbanPhrases: [
      { localWord: 'Mambo vipi?', englishMeaning: 'How are things? (Urban street)', language: 'Swahili', setting: 'urban' as LocationType },
      { localWord: 'Poa sana!', englishMeaning: 'Cool / Very fine!', language: 'Swahili', setting: 'urban' as LocationType },
      { localWord: 'Duka la mjini', englishMeaning: 'Town shop / kiosk', language: 'Swahili', setting: 'urban' as LocationType }
    ],
    ruralPhrases: [
      { localWord: 'Habari za asubuhi!', englishMeaning: 'Good morning greeting', language: 'Swahili', setting: 'rural' as LocationType },
      { localWord: 'Shamba la mahindi', englishMeaning: 'Maize farm / homestead field', language: 'Swahili', setting: 'rural' as LocationType },
      { localWord: 'Kisima cha maji', englishMeaning: 'Water well / spring', language: 'Swahili', setting: 'rural' as LocationType },
      { localWord: 'Kijijini', englishMeaning: 'In the rural village', language: 'Swahili', setting: 'rural' as LocationType }
    ]
  }
];
