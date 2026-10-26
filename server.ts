import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();

  // In AI Studio Build, the dev server must run on port 3000 (nginx listens on 8080 and proxies to 3000)
  // If process.env.PORT is 8080 (Cloud Run container port), binding to 8080 causes EADDRINUSE conflict with nginx
  let PORT = 3000;
  const portArgIndex = process.argv.indexOf('--port');
  if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
    const parsed = parseInt(process.argv[portArgIndex + 1], 10);
    if (!isNaN(parsed)) PORT = parsed;
  } else if (process.env.APP_PORT) {
    const parsed = parseInt(process.env.APP_PORT, 10);
    if (!isNaN(parsed)) PORT = parsed;
  } else if (process.env.PORT && process.env.PORT !== '8080') {
    const parsed = parseInt(process.env.PORT, 10);
    if (!isNaN(parsed)) PORT = parsed;
  }

  app.use(express.json());

  // Server-side Gemini client
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hasApiKey: Boolean(apiKey),
      platform: 'Educate the World | Home Academy',
    });
  });

  // In-memory cache for fast, instant repeat narration of video scenes
  const teacherTtsCache = new Map<string, string>();

  // Gentle Teacher Voice TTS endpoint using gemini-3.8-flash-lite-tts
  app.post('/api/teacher-tts', async (req, res) => {
    try {
      const { text, persona = 'ms-clara' } = req.body;
      if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Text is required' });
      }

      const cleanText = text.replace(/[*_#`]/g, '').trim();
      const cacheKey = `${persona}:${cleanText}`;
      if (teacherTtsCache.has(cacheKey)) {
        return res.json({ audioBase64: teacherTtsCache.get(cacheKey), mimeType: 'audio/wav', cached: true });
      }

      if (!ai) {
        return res.status(503).json({ error: 'AI TTS unavailable, using browser gentle teacher voice', fallback: true });
      }

      // Teacher voice styling configurations
      const teacherConfig: Record<string, { voiceName: string; style: string }> = {
        'ms-clara': {
          voiceName: 'Kore',
          style: 'Warm, patient, gentle elementary school teacher speaking calmly, slowly and affectionately to a student.',
        },
        'mama-sarah': {
          voiceName: 'Zephyr',
          style: 'Loving African mother and home mentor, warm, reassuring and melodious, speaking with caring inflection.',
        },
        'mr-arthur': {
          voiceName: 'Puck',
          style: 'Kind, wise, patient science educator and grandfatherly storyteller speaking with clear, gentle articulation.',
        },
      };

      const selected = teacherConfig[persona] || teacherConfig['ms-clara'];

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash-lite-tts',
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: cleanText,
                speechMetadata: {
                  style: selected.style,
                },
              },
            ],
          },
        ],
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: selected.voiceName },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        teacherTtsCache.set(cacheKey, base64Audio);
        return res.json({ audioBase64: base64Audio, mimeType: 'audio/wav' });
      } else {
        return res.status(500).json({ error: 'No audio returned', fallback: true });
      }
    } catch (err: any) {
      console.warn('Teacher TTS endpoint exception, falling back to gentle client-side synthesis:', err?.message || err);
      return res.status(500).json({ error: 'TTS failed', fallback: true });
    }
  });

  // "Teach Me Anything" age-tailored pedagogical assistant endpoint
  app.post('/api/teach-me-anything', async (req, res) => {
    try {
      const { question, childAge, childName, childLocation, childDialect } = req.body;
      if (!question) {
        return res.status(400).json({ error: 'Question is required' });
      }

      const age = Number(childAge) || 7;
      const name = childName || 'your child';
      const location = (childLocation === 'urban' || childLocation === 'rural') ? childLocation : 'rural';
      const dialect = childDialect || (location === 'urban' ? 'Urban Luganda / Luglish' : 'Luganda / Runyankole');

      if (!ai) {
        // High-quality fallback when GEMINI_API_KEY is not provisioned or offline
        const fallbackAnswers = getCuratedPedagogicalAnswer(question, age, name, location, dialect);
        return res.json(fallbackAnswers);
      }

      const prompt = `You are a warm, empowering master educator for "Educate the World Home Academy", an education platform helping parents teach children at home in East Africa & worldwide.

The user asks: "${question}"
Child's Name: ${name}
Child's Age: ${age} years old.
Child's Location Setting: ${location.toUpperCase()} (${location === 'urban' ? 'Town / City / Urban neighborhood' : 'Village / Rural countryside / Kyalo / Shamba'}).
Child's Local Dialect / Mother Tongue: ${dialect}.

IMPORTANT LOCALIZATION & DIALECT RULES:
- If location is "urban": Use relatable urban town examples (city water tap, boda boda stages, prepaid Yaka electricity meters, corner duuka/kiosks, street traffic, tin savings boxes, cold sodas from the shop fridge). Sprinkle authentic urban phrasing where appropriate (e.g., "Ki kati!", "Oli otya boss", "Sente za change", "Duuka").
- If location is "rural": Use relatable village & farmstead examples (the community borehole/spring, banana grove/olusuku, firewood fireplace/ekyoto, cows/ente, morning roosters/enkoko, drying coffee or maize on tarpaulins, clay soil). Sprinkle authentic rural dialect words (e.g., "Olyotya!", "Ekyaro/Kyalo", "Olusuku", "Enkoko", "Amatu", "Engero").

IMPORTANT AGE-ADAPTATION RULES:
- If age is around 6 (young child, 3-7): Provide a simple explanation with a concrete visual aid description, sensory analogies (puppies, bouncing balls, splashing water), and playful language.
- If age is around 12 (middle child, 8-13): Include clear scientific detail about cause and effect, mechanisms (e.g. light scattering, molecules of nitrogen and oxygen, wavelengths, evaporation).
- If age is around 17 (young adult, 14+): Provide a technical, rigorous explanation involving scientific principles, quantitative formulas (e.g., Rayleigh scattering I ∝ 1/λ⁴, wavelengths in nanometers, atmospheric composition: 78% N2, 21% O2, optical path length, thermodynamics, or chemical kinetics).

Provide a response formatted STRICTLY as JSON with these exact fields:
{
  "simpleExplanation": "The tailored explanation for a ${age}-year-old incorporating ${location} context and local understanding.",
  "intellectualDepthLevel": "Age ${age} Level (e.g. 'Foundational & Sensory' or 'Scientific Mechanisms' or 'Advanced Physical & Quantitative')",
  "locationBadge": "${location === 'urban' ? '🏙️ Urban (Town & City)' : '🌾 Rural (Village & Shamba)'}",
  "visualAid": {
    "title": "Title of the visual aid",
    "description": "Clear step-by-step visual description of what the child/teen should visualize or draw using ${location} surroundings",
    "diagramType": "${age <= 7 ? 'simple-visual' : age <= 13 ? 'scientific-diagram' : 'technical-schematic'}",
    "keyElements": ["Element 1", "Element 2", "Element 3"]
  },
  "parentGuide": {
    "whatToAskFirst": "A curious question the parent can ask ${name} before giving the answer, tailored to their ${location} home.",
    "whatToExplain": "Exact conversational words the parent can say aloud to ${name}.",
    "homeExperiment": "A safe 3-5 minute experiment using items easily found in a ${location} household (cups, water, spoons, sunlight, shadow, coins, leaves).",
    "familyChallenge": "A fun mini-challenge (e.g. explain to a sibling, spot 3 examples in the compound/shamba)."
  },
  "dialectHighlights": [
    {"word": "Sample dialect word", "meaning": "English meaning", "usage": "How used in ${location} daily life"}
  ],
  "didYouKnow": "One fascinating, memorable fact connected to nature, technology, or African history/innovation.",
  "quickCheckQuestion": {
    "question": "A simple check-in question for ${name}",
    "options": ["Option A", "Option B", "Option C"],
    "correctIndex": 0,
    "encouragement": "Positive feedback explaining why it's right"
  }
}
Return ONLY valid JSON, no markdown code fence.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const responseText = response.text || '{}';
      try {
        const parsed = JSON.parse(responseText);
        res.json(parsed);
      } catch (e) {
        const fallbackAnswers = getCuratedPedagogicalAnswer(question, age, name, location, dialect);
        res.json(fallbackAnswers);
      }
    } catch (err: any) {
      console.error('Error generating pedagogical answer:', err);
      const fallbackAnswers = getCuratedPedagogicalAnswer(
        req.body?.question || 'Why is the sky blue?',
        Number(req.body?.childAge) || 7,
        req.body?.childName || 'Child',
        req.body?.childLocation || 'rural',
        req.body?.childDialect || 'Luganda'
      );
      res.json(fallbackAnswers);
    }
  });

  // AI Self-Educate Autodidact Mentor endpoint
  app.post('/api/self-educate', async (req, res) => {
    try {
      const { 
        topic, 
        targetLevel = 'scholar', 
        curriculumFocus = 'all',
        mode = 'roadmap', 
        learnerName = 'Autodidact Learner',
        location = 'rural',
        dialect = 'Luganda'
      } = req.body;

      if (!topic || typeof topic !== 'string' || !topic.trim()) {
        return res.status(400).json({ error: 'A self-education topic or question is required' });
      }

      if (!ai) {
        const fallback = getCuratedSelfEducateFallback(topic, targetLevel, location, learnerName, curriculumFocus);
        return res.json(fallback);
      }

      const levelDescriptions = {
        explorer: 'Ages 6-9 (Young Explorer): Sensory, visual, storytelling, playful and relatable household metaphors.',
        inquisitive: 'Ages 10-14 (Inquisitive Mind / Primary & Lower Secondary): Structured logic, cause & effect, scientific principles and clear vocabulary.',
        scholar: 'Ages 15-18+ (High School / IGCSE / AP / Gaokao Scholar): Rigorous academic depth, exact formulas, chemical equations, proof outlines, and examiner-level precision.',
        autodidact: 'Adult / Lifelong Autodidact: Systems thinking, practical enterprise, high-leverage execution, and wealth-building/community transformation.'
      };

      const selectedLevelDesc = levelDescriptions[targetLevel as keyof typeof levelDescriptions] || levelDescriptions.scholar;

      const prompt = `You are the master Global AI Autodidact Mentor for the "Educate the World Initiative".
Your core superpower is to fetch, synthesize, and seamlessly integrate pedagogical standards from ALL premier international curricula and education systems across the globe:
1. UNITED STATES OF AMERICA (USA): Common Core State Standards (CCSS Math & ELA), Next Generation Science Standards (NGSS), College Board AP (Advanced Placement e.g. AP Calculus, AP Biology, AP Physics), and SAT/ACT benchmarks.
2. EUROPE: Cambridge Assessment International Education (CAIE Checkpoint, IGCSE, Cambridge A-Levels), UK National Curriculum, International Baccalaureate (IB PYP/MYP/DP), French Baccalauréat, German Abitur, and Finnish Phenomenon-Based Learning.
3. CHINA: Ministry of Education PRC Curriculum Standards (教育部义务教育与普通高中课程标准) and Gaokao (高考) STEM rigor (Olympiad-level speed factorisation, spatial geometry, and exact constraint proofs).
4. JAPAN: Ministry of Education, Culture, Sports, Science and Technology (MEXT / 文部科学省) Course of Study (学習指導要領), Bansho (板書) blackboard visual discovery method, and Kadaishiki problem-posing.
5. ASIA (Singapore, South Korea, India): Singapore MOE Bar-Model & CPA (Concrete-Pictorial-Abstract) method, South Korea CSAT (Suneung / 수능) deductive problem-solving, and India CBSE/NCERT analytical foundations.

Learner Name: ${learnerName}
Topic / Curiosity: "${topic}"
Target Level: ${selectedLevelDesc}
Curriculum Focus Requested: ${curriculumFocus.toUpperCase()} (Synthesize ALL 5 systems with equal high fidelity).
Learner Home Setting: ${location.toUpperCase()} (${location === 'urban' ? 'Urban Town/City with kiosks, boda stages, grid power' : 'Rural Village/Shamba with soil, sun, boreholes, crops'}).
Regional Cultural Context: Universal international rigor and local African practical accessibility.

Format your response STRICTLY as a single valid JSON object with the following structure (no markdown fences around the json):
{
  "title": "Inspiring and clear title of the self-study quest",
  "topicSummary": "A concise 2-sentence executive summary of the core concept and why it matters in life.",
  "levelLabel": "${targetLevel.toUpperCase()} LEVEL",
  "bigIdeaHook": "A compelling real-world hook or analogy explaining the physical or practical reality.",
  "coreExplanation": "Deep, structured explanation written for the specified target level. Include clear paragraphs, exact formulas or chemical symbols where applicable, and step-by-step logic.",
  "keyPrinciples": [
    { "term": "Core Principle / Formula / Law", "explanation": "Clear definition and significance" },
    { "term": "Second Principle", "explanation": "Clear definition and significance" },
    { "term": "Third Principle", "explanation": "Clear definition and significance" }
  ],
  "roadmapSteps": [
    {
      "stepNumber": 1,
      "title": "Phase 1: Foundation & First Principles",
      "duration": "15-20 min",
      "action": "Concrete, actionable self-study task",
      "masteryMilestone": "How the autodidact verifies they truly understand this step"
    },
    {
      "stepNumber": 2,
      "title": "Phase 2: Deep Mechanism & Practice",
      "duration": "25-30 min",
      "action": "Work through concrete problem or mechanism",
      "masteryMilestone": "How to test understanding"
    },
    {
      "stepNumber": 3,
      "title": "Phase 3: Empirical Experiment or Case Study",
      "duration": "30 min",
      "action": "Practical action using everyday surroundings",
      "masteryMilestone": "Observable outcome"
    },
    {
      "stepNumber": 4,
      "title": "Phase 4: Synthesis & Teaching Someone Else",
      "duration": "15 min",
      "action": "Explain the concept simply to a peer or apply to a real problem",
      "masteryMilestone": "Mastery proof"
    }
  ],
  "handsOnExperiment": {
    "title": "Empirical Verification Project",
    "materialsNeeded": ["Household item 1", "Item 2", "Item 3"],
    "steps": ["Step 1 description", "Step 2 description", "Step 3 description"],
    "whatItProves": "The scientific or mathematical reality verified by this test"
  },
  "selfCheckQuiz": [
    {
      "question": "Diagnostic Question 1 testing conceptual depth",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0,
      "explanation": "Detailed explanation of why this answer is correct and why the others are common traps"
    },
    {
      "question": "Diagnostic Question 2 testing application",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 1,
      "explanation": "Detailed explanation of why this answer is correct"
    },
    {
      "question": "Diagnostic Question 3 testing critical evaluation",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 2,
      "explanation": "Detailed explanation of why this answer is correct"
    }
  ],
  "globalCurriculaMatrix": {
    "usa": {
      "systemName": "United States of America (K–12, Common Core, NGSS & AP)",
      "countryFlag": "🇺🇸",
      "standardsCode": "Authentic US code e.g. CCSS.MATH.HSA.REI.B.4 or NGSS HS-PS3-2 or AP Calculus/Biology",
      "learningObjective": "Exact standard objective in the American framework",
      "pedagogicalApproach": "3D NGSS phenomena modeling, inquiry-based scaffolding, and AP diagnostic rigor",
      "curriculumBenchmark": "What a US Grade-Level / AP student must demonstrate",
      "practiceProblem": "An authentic US exam-style or AP/SAT question with step-by-step solution"
    },
    "europe": {
      "systemName": "Europe (Cambridge CAIE, UK National, IB & Finland)",
      "countryFlag": "🇪🇺",
      "standardsCode": "Authentic European/Cambridge code e.g. Cambridge IGCSE 0580/0625, IB DP Math AA, UK KS4",
      "learningObjective": "Exact standard objective in Cambridge / IB / European syllabuses",
      "pedagogicalApproach": "Step-by-step examiner mark schemes (M1, A1, B1), mathematical proof, and Finnish phenomenon inquiry",
      "curriculumBenchmark": "What a Cambridge / IB European student must demonstrate",
      "practiceProblem": "An authentic Cambridge Checkpoint/IGCSE or IB question with mark scheme breakdown"
    },
    "china": {
      "systemName": "China (MOE National Standards & Gaokao STEM Rigor)",
      "countryFlag": "🇨🇳",
      "standardsCode": "Authentic Chinese standard code e.g. 义务教育课程标准 / 普通高中数学课程标准 / 高考 (Gaokao) Level",
      "learningObjective": "Exact standard objective in the Chinese national standard",
      "pedagogicalApproach": "High-intensity calculation speed, dual-variable constraints, and rigorous algebraic/geometric precision",
      "curriculumBenchmark": "What a Chinese student must demonstrate in Gaokao or Zhongkao",
      "practiceProblem": "An authentic Chinese Gaokao or National standard-style challenge problem with concise step breakdown"
    },
    "japan": {
      "systemName": "Japan (MEXT 学習指導要領 & Bansho Discovery)",
      "countryFlag": "🇯🇵",
      "standardsCode": "Authentic Japanese standard code e.g. 文部科学省 (MEXT) 学習指導要領 (Course of Study)",
      "learningObjective": "Exact standard objective in the Japanese national curriculum",
      "pedagogicalApproach": "Bansho (板書) visual board discovery, structured problem-posing (Kadaishiki), and deep spatial intuition",
      "curriculumBenchmark": "What a Japanese student must demonstrate under MEXT standards",
      "practiceProblem": "An authentic Japanese problem-posing challenge question with visual-logic explanation"
    },
    "asia": {
      "systemName": "Asia (Singapore Bar Model, South Korea CSAT & India CBSE/NCERT)",
      "countryFlag": "🌏",
      "standardsCode": "Authentic Asian standard code e.g. Singapore MOE Syllabus | India CBSE/NCERT Class 10/12 | Korea CSAT",
      "learningObjective": "Exact standard objective in Singapore Math, Indian CBSE, or Korean curriculum",
      "pedagogicalApproach": "Singapore CPA (Concrete-Pictorial-Abstract) bar modeling, Indian NCERT analytical proof, and Korean CSAT logical deduction",
      "curriculumBenchmark": "What a Singaporean, Korean, or Indian student must demonstrate",
      "practiceProblem": "An authentic Singapore bar-model or CBSE/CSAT question with concise solution"
    }
  },
  "globalParityAnalysis": "A compelling 3-4 sentence comparative synthesis demonstrating how mastering this unit ensures academic parity with top students in New York, London, Shanghai, Tokyo, and Singapore.",
  "cambridgeAlignmentNote": "Explicit alignment to Cambridge Assessment International Education syllabuses (e.g. Primary Checkpoint 0096/0097, Lower Sec 0862/0893, IGCSE 0580/0610/0620/0625, or A Level 9709) and IB/UK standards.",
  "recommendedBooksOrResources": [
    "Famous author or foundational textbook / open-source paper for this field",
    "Second authoritative resource or free digital library text"
  ],
  "autodidactProverb": "An inspiring proverb celebrating independent thought, diligence, and learning."
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const responseText = response.text || '{}';
      try {
        const parsed = JSON.parse(responseText);
        res.json(parsed);
      } catch (e) {
        const fallback = getCuratedSelfEducateFallback(topic, targetLevel, location, learnerName);
        res.json(fallback);
      }
    } catch (err: any) {
      console.error('Error generating self-educate guide:', err);
      const fallback = getCuratedSelfEducateFallback(
        req.body?.topic || 'Universal Learning',
        req.body?.targetLevel || 'scholar',
        req.body?.location || 'rural',
        req.body?.learnerName || 'Learner'
      );
      res.json(fallback);
    }
  });

  // AI Polyglot Coach endpoint for adults & beginner learners
  app.post('/api/language-coach', async (req, res) => {
    try {
      const { question, language = 'mandarin' } = req.body;
      if (!question) {
        return res.status(400).json({ error: 'Question is required' });
      }

      if (!ai) {
        return res.json(getLanguageCoachFallback(question, language));
      }

      const prompt = `You are a patient, encouraging Polyglot Language Mentor for "Educate the World Academy", specifically helping adult beginners and families master foreign languages with zero intimidation and zero robotic jargon.
Target Language: ${language}
Learner Profile: Adult Beginner / Home Scholar (New to the language)
Learner's Question or Request: "${question}"

GUIDELINES FOR ADULT BEGINNERS:
1. Break down foreign scripts (Chinese characters, Hebrew, Arabic, Greek, Devanagari, Latin) with clear Romanized phonetic pronunciation guides (syllable-by-syllable, e.g. "Nǐ hǎo [Nee-how]").
2. Provide the "Adult Cheat Code / Superpower": Connect words to English cognates, Latin/Greek roots, or logical grammar shortcuts (e.g. "No verb conjugations in Chinese", "100% consistent vowels in Spanish", "3-letter root system in Hebrew/Arabic").
3. Give an authentic, natural, gentle explanation in plain English.
4. Include a practical 2-line mini-dialogue with phonetic breakdown and English translation.
5. Provide a physical mouth/tongue pronunciation cue (e.g. "Position your lips like whistling...").

Respond strictly in JSON with this schema:
{
  "explanation": "Clear, gentle, plain-English breakdown with zero intimidation",
  "phoneticBreakdown": "Exact phonetic pronunciation guide with syllable breaks and stress marks",
  "adultSuperpowerRule": "The logical shortcut or pattern that makes this easy to remember",
  "nativeText": "Original script for the key phrase or word",
  "literalMeaning": "Word-for-word translation showing the internal logic",
  "pronunciationTip": "Concrete tongue, breath, or mouth posture advice",
  "practicalDialogue": [
    { "speaker": "Speaker 1", "native": "...", "phonetic": "...", "english": "..." },
    { "speaker": "You", "native": "...", "phonetic": "...", "english": "..." }
  ],
  "culturalEtiquetteTip": "Practical etiquette or formality context for adults"
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const responseText = response.text || '{}';
      try {
        const parsed = JSON.parse(responseText);
        res.json(parsed);
      } catch (e) {
        res.json(getLanguageCoachFallback(question, language));
      }
    } catch (err: any) {
      console.error('Error in language coach endpoint:', err);
      res.json(getLanguageCoachFallback(req.body?.question || '', req.body?.language || 'mandarin'));
    }
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

function getCuratedPedagogicalAnswer(
  question: string,
  age: number,
  name: string,
  location: string = 'rural',
  dialect: string = 'Luganda'
) {
  const qLower = question.toLowerCase();
  const isUrban = location === 'urban';

  if (qLower.includes('sky') && qLower.includes('blue')) {
    if (age <= 7) {
      // 6-year-old: Simple explanation + visual aid
      return {
        intellectualDepthLevel: 'Age 6 Level: Foundational & Sensory with Visual Aid',
        locationBadge: isUrban ? '🏙️ Urban (Town & City)' : '🌾 Rural (Village & Shamba)',
        simpleExplanation: isUrban
          ? `Sunlight looks white or yellow above our town rooftops, but it holds all rainbow colors together! The air over our city and boda stages is full of tiny invisible specks. When sunlight hits our air, bouncy blue light bounces off the tiny specks in every direction like a rubber ball. That blue bounce paints the entire sky over our neighborhood!`
          : `Sunlight looks golden over our shamba (olusuku) and hills, but it actually holds all the bright colors of the rainbow together! The air around Earth is filled with billions of tiny invisible specks. When sunlight hits the sky, the energetic blue color bounces off the air like bouncy balls over our trees and hills! That is why the whole sky (eggulu) looks like a bright blue blanket.`,
        visualAid: {
          title: isUrban ? 'The Bouncing Rainbow Light Over Our Town' : 'The Bouncing Rainbow Light Over the Shamba',
          description: isUrban
            ? 'Imagine sunlight coming down toward town like colored bouncing balls. Red and yellow balls roll straight down to the tarmac road. But blue balls are tiny and bouncy—they hit the air and bounce high into every corner of the sky above the houses and kiosks!'
            : 'Imagine sunlight over the mango trees like colored balls. Big red and yellow balls roll straight down to the soil and grass. But tiny blue balls hit the air and bounce high into every corner of the sky above the shamba!',
          diagramType: 'simple-visual',
          keyElements: ['Sun sending rainbow rays', 'Air molecules acting like tiny pinballs', 'Blue light bouncing across the sky', 'Red/yellow light reaching the ground']
        },
        parentGuide: {
          whatToAskFirst: isUrban
            ? `Ask ${name}: "Look up above the roofs and boda stage! What color is the sky today? Ki kati, where do you think that blue color comes from?"`
            : `Ask ${name}: "Step outside into the compound near the shamba! Look up at eggulu (the sky). What color do your amatu and eyes see?"`,
          whatToExplain: isUrban
            ? `"Sunlight carries all rainbow colors! Blue light is super energetic—it bounces off the air bits like rubber balls, painting our town sky bright blue!"`
            : `"Sunlight carries every color! In our air, blue light is fast and bounces off tiny air specks like rain droplets, turning eggulu into bright blue!"`,
          homeExperiment: `Take a clear cup or glass of water, add 2 drops of milk or a pinch of flour, and shine your phone torch through the side in a shady room. From the side, the water glows soft sky blue!`,
          familyChallenge: isUrban
            ? `Ask ${name} to watch the sky just as the street lights turn on. Is it still blue or turning orange and pink?`
            : `Have ${name} watch the sky over the banana trees at dusk when the enkoko (chickens) go to sleep. Notice how the blue turns to orange!`
        },
        dialectHighlights: isUrban ? [
          { word: 'Eggulu', meaning: 'Sky', usage: 'Laba eggulu erya bbulu! (Look at the blue sky!)' },
          { word: 'Ki kati!', meaning: 'What’s up! / How is it!', usage: 'Town greeting between neighbors and friends' },
          { word: 'Omusana', meaning: 'Hot bright sunshine', usage: 'Omusana gwaka nyo leero (The sun is very hot today)' }
        ] : [
          { word: 'Eggulu', meaning: 'Sky / Heavens', usage: 'Eggulu litangadde (The sky is clear and bright)' },
          { word: 'Olusuku', meaning: 'Banana plantation / shamba', usage: 'Standing in the olusuku looking up at the sky' },
          { word: 'Enkoko', meaning: 'Rooster / Chicken', usage: 'Enkoko zikola amaloboozi (The chickens make morning sounds)' }
        ],
        didYouKnow: `On the Moon, where there is no air blanket to bounce the blue light, the sky looks pitch black even when the sun is shining!`,
        quickCheckQuestion: {
          question: `Why does the sky look blue to us during the daytime?`,
          options: [`The air bounces blue sunlight in all directions`, `The ocean is painted on the sky`, `The clouds are made of blue ice`],
          correctIndex: 0,
          encouragement: `Exactly! Tiny air particles scatter blue light waves all across our sky.`
        }
      };
    } else if (age <= 13) {
      // 12-year-old: Scientific detail about light scattering
      return {
        intellectualDepthLevel: 'Age 12 Level: Scientific Detail & Rayleigh Light Scattering',
        locationBadge: isUrban ? '🏙️ Urban (Town & City)' : '🌾 Rural (Village & Shamba)',
        simpleExplanation: `Sunlight travels from the sun as an electromagnetic spectrum of all colors. Red light has long wavelengths (around 700 nm), while blue light has short wavelengths (around 450 nm). When sunlight enters Earth's atmosphere, it collides with gas molecules (mostly nitrogen and oxygen). Because blue light travels in shorter, choppy waves, it is scattered in every direction by the gas molecules much more than other colors. This phenomenon is called Rayleigh scattering.`,
        visualAid: {
          title: 'Rayleigh Scattering Wave Mechanism',
          description: isUrban
            ? 'A schematic showing solar radiation penetrating the urban atmosphere. Nitrogen (N₂) and oxygen (O₂) molecules act as scattering centers above city roads and buildings, scattering short blue waves across 360 degrees.'
            : 'A schematic showing solar radiation penetrating the atmosphere above lakes, valleys, and farms. Gas molecules act as scattering centers, scattering short blue waves omnidirectionally.',
          diagramType: 'scientific-diagram',
          keyElements: ['Solar spectrum entering atmosphere', 'N₂ and O₂ molecules (~0.3 nm)', 'Short wavelength blue light scattered 360°', 'Long wavelength red light passing straight through']
        },
        parentGuide: {
          whatToAskFirst: isUrban
            ? `Ask ${name}: "If sunlight looks yellowish-white on the street pavement, what makes the open sky above Kampala turn rich blue?"`
            : `Ask ${name}: "If the sun shining on our crops looks warm yellow, what makes the vast sky over the hills turn vivid blue?"`,
          whatToExplain: `"Sunlight passes through nitrogen and oxygen. Shorter blue waves get tossed around by gas molecules like pinballs, filling the entire dome of our sky."`,
          homeExperiment: `Fill a clear square glass or bottle with water and 1 teaspoon of milk. Shine a white flashlight or phone torch through it. From the side it appears bluish (scattered light); looking straight through the beam to the bulb looks sunset orange!`,
          familyChallenge: `Can ${name} explain why sunsets turn red? (Hint: Sunlight has to travel through much more atmosphere at dusk, scattering away all the blue and leaving only red!)`
        },
        dialectHighlights: isUrban ? [
          { word: 'Obudde', meaning: 'Weather / Time of day', usage: 'Obudde bulungi (The weather is pleasant)' },
          { word: 'Ssente za balance', meaning: 'Change from money', usage: 'Common math in town duukas' }
        ] : [
          { word: 'Empewo', meaning: 'Breeze / Wind', usage: 'Empewo efuuka mu lusuku (The wind blowing through the shamba)' },
          { word: 'Ekyoto', meaning: 'Evening fireplace / hearth', usage: 'Where family gathers to discuss the day' }
        ],
        didYouKnow: `Mars has a very thin atmosphere filled with rusty iron oxide dust, so the daytime Martian sky looks butterscotch pink, and sunsets on Mars are blue!`,
        quickCheckQuestion: {
          question: `Which color wavelength scatters the most easily when striking atmospheric gas molecules?`,
          options: [`Short wavelength blue light`, `Long wavelength red light`, `Infrared light`],
          correctIndex: 0,
          encouragement: `Spot on! Shorter wavelengths scatter far more efficiently than longer wavelengths.`
        }
      };
    } else {
      // 17-year-old: Technical explanation involving wavelengths and atmospheric composition
      return {
        intellectualDepthLevel: 'Age 17 Level: Technical Electromagnetic Physics & Atmospheric Composition',
        locationBadge: isUrban ? '🏙️ Urban (Town & City)' : '🌾 Rural (Village & Shamba)',
        simpleExplanation: `White solar radiation is an electromagnetic spectrum spanning visible wavelengths from ~380 nm (violet) to ~750 nm (red). Earth's homosphere consists predominantly of molecular Nitrogen (N₂, ~78.08%), Oxygen (O₂, ~20.95%), and Argon (Ar, ~0.93%), with molecular radii (~0.15 nm) much smaller than the wavelength of visible light. In this regime, light undergoes elastic Rayleigh scattering, where scattered intensity I is inversely proportional to the fourth power of the wavelength: I ∝ 1/λ⁴. Blue photons (λ ≈ 450 nm) scatter approximately (700/450)⁴ ≈ 5.8 to 10 times more intensely than red photons (λ ≈ 700 nm), dominating the diffuse sky radiation.`,
        visualAid: {
          title: 'Quantitative Rayleigh Scattering & Spectral Optical Depth',
          description: 'Spectral irradiance curve and polar scattering intensity diagram. Demonstrates dipole radiation pattern where dipole moment p = αE is induced in N₂/O₂ molecules, radiating scattered electromagnetic waves according to the 1/λ⁴ cross-section law.',
          diagramType: 'technical-schematic',
          keyElements: ['Incident solar flux F_0(λ)', 'Atmospheric composition: 78% N₂, 21% O₂, 0.93% Ar', 'Rayleigh cross-section: σ_R(λ) = (8π³/3) * ((n²-1)² / (N²λ⁴))', 'Optical path air mass factor: m = 1/cos(θ_z)']
        },
        parentGuide: {
          whatToAskFirst: `Ask ${name}: "Why does violet light (λ ≈ 400 nm), which scatters with even higher intensity than blue light according to 1/λ⁴, not cause the sky to appear violet to human observers?"`,
          whatToExplain: `"Two reasons: First, the solar blackbody spectrum emits fewer photons in the violet spectrum than in the blue. Second, the human eye's retinal cone photoreceptors have peak sensitivities at red, green, and blue (trichromatic vision), which interprets the scattered solar spectrum as cyan/sky blue."`,
          homeExperiment: `Use polarized sunglasses to observe the sky at 90° from the sun. Rotate the polarized filter 90 degrees and observe the extinction of brightness—Rayleigh-scattered light is strongly linearly polarized!`,
          familyChallenge: `Derive or graph the ratio of scattered intensity between 400 nm (violet) and 650 nm (red) using the 1/λ⁴ relationship: (650/400)⁴ = 6.96x.`
        },
        dialectHighlights: [
          { word: 'Amagezi', meaning: 'Wisdom / Scientific inquiry', usage: 'Okunoonyereza amagezi (Researching understanding)' },
          { word: 'Okukebera', meaning: 'To examine / test empirically', usage: 'Core scientific method' }
        ],
        didYouKnow: `Lord Rayleigh (John William Strutt) mathematically derived this scattering law in 1871, solving a problem that had perplexed Leonardo da Vinci, Isaac Newton, and John Tyndall for centuries.`,
        quickCheckQuestion: {
          question: `In Rayleigh scattering, the scattered intensity of electromagnetic radiation is proportional to:`,
          options: [`1 / λ⁴ (inversely proportional to wavelength to the fourth power)`, `λ² (wavelength squared)`, `Linearly proportional to λ`],
          correctIndex: 0,
          encouragement: `Mathematically precise! The 1/λ⁴ dependency is the exact reason short blue wavelengths overwhelm longer wavelengths in daytime atmospheric scattering.`
        }
      };
    }
  }

  // General default answer with depth differentiation and location context
  return {
    intellectualDepthLevel: `Age ${age} Pedagogical Adaptation`,
    locationBadge: isUrban ? '🏙️ Urban (Town & City)' : '🌾 Rural (Village & Shamba)',
    simpleExplanation: isUrban
      ? `Here is how to explore "${question}" for ${name} (age ${age}) in our town: everyday things around our streets, shops, taps, and home appliances work through cause, effect, and curious science! When we look closely, our home becomes our best laboratory.`
      : `Here is how to explore "${question}" for ${name} (age ${age}) in our village: from our shamba, water borehole, soil, and animals to the cooking fires, everything in nature follows clear rules. When we observe closely, our compound becomes an exciting laboratory!`,
    visualAid: {
      title: 'Conceptual Diagram',
      description: `A visual representation showing the sequence of cause and effect for "${question}" using items found in a ${location} home.`,
      diagramType: age <= 7 ? 'simple-visual' : age <= 13 ? 'scientific-diagram' : 'technical-schematic',
      keyElements: ['Observation', 'Underlying Mechanism', 'Observable Result']
    },
    parentGuide: {
      whatToAskFirst: `Ask ${name}: "What is your best guess about ${question}? In our ${location} home, what looks or feels similar to this?"`,
      whatToExplain: `"When something happens in nature or machines, there's always a step-by-step reason. Let's test it together."`,
      homeExperiment: isUrban
        ? `Look around the kitchen, balcony, or yard for 2 everyday items. Test how they interact, float, or sound when tapped.`
        : `Step into the compound or shamba for 2 natural materials (leaves, soil, clean stones, or water). Test how they feel, move, or change in sunlight.`,
      familyChallenge: `Have ${name} teach one new insight they discovered today to another family member before dinner.`
    },
    dialectHighlights: isUrban ? [
      { word: 'Ki kati!', meaning: 'Hello / What’s up!', usage: 'Friendly urban greeting' },
      { word: 'Okwekkaanya', meaning: 'To observe carefully', usage: 'Investigating things closely' }
    ] : [
      { word: 'Olyotya!', meaning: 'Warm greeting', usage: 'Respectful home greeting' },
      { word: 'Okunoonyereza', meaning: 'To investigate / discover', usage: 'Curious inquiry' }
    ],
    didYouKnow: `Curiosity is the number one trait of great inventors! Asking "Why?" and "How do I know this is true?" changed the course of human history.`,
    quickCheckQuestion: {
      question: `What makes a great young thinker and scientist?`,
      options: [`Observing carefully and asking good questions`, `Memorizing everything without testing`, `Never changing your mind`],
      correctIndex: 0,
      encouragement: `You got it! Real learning happens when we test, observe, and stay curious.`
    }
  };
}

function buildUniversalCurriculaMatrix(topic: string, level: string = 'scholar') {
  return {
    usa: {
      systemName: 'United States of America (K–12, Common Core, NGSS & AP)',
      countryFlag: '🇺🇸',
      standardsCode: `CCSS & NGSS Benchmark | AP / SAT Diagnostic Framework (${level.toUpperCase()})`,
      learningObjective: `Master core principles and causal mechanisms of "${topic}" through 3D inquiry and evidence-based modeling.`,
      pedagogicalApproach: 'Inquiry-driven phenomena modeling, College Board AP diagnostic rubrics, and real-world system engineering constraints.',
      curriculumBenchmark: `Demonstrates grade-level proficiency in applying "${topic}" to analyze and optimize novel scenarios.`,
      practiceProblem: `Explain the primary scientific or mathematical law underlying "${topic}", and design a quantitative test to evaluate its efficiency.`
    },
    europe: {
      systemName: 'Europe (Cambridge CAIE, UK National, IB & Finland)',
      countryFlag: '🇪🇺',
      standardsCode: `Cambridge IGCSE & A-Level Syllabuses | IB Diploma Program | UK Key Stage 4/5`,
      learningObjective: `Demonstrate scientific/mathematical knowledge with understanding, evaluate experimental methods, and present logical proofs in "${topic}".`,
      pedagogicalApproach: 'First-principles deduction, step-by-step examiner mark schemes (M1 method, A1 accuracy, B1 independent marks), and Finnish phenomenon-based exploration.',
      curriculumBenchmark: `Produces concise, step-by-step written derivations and evaluates experimental validity according to international benchmarks.`,
      practiceProblem: `State two fundamental principles governing "${topic}", and show how a student would score full marks under a Cambridge examiner mark scheme.`
    },
    china: {
      systemName: 'China (MOE National Standards & Gaokao STEM Rigor)',
      countryFlag: '🇨🇳',
      standardsCode: `教育部义务教育与普通高中课程标准 | 高考 (Gaokao) STEM Benchmark`,
      learningObjective: `Achieve high-precision quantitative calculation, structural factorisation, and constraint-based proofs for "${topic}".`,
      pedagogicalApproach: 'High-speed mental calculation, multi-variable constraint optimization, and rigorous algebraic/physical derivation under high cognitive load.',
      curriculumBenchmark: `Rapidly solves complex multi-step constraint problems with zero arithmetic error and rigorous logical deduction.`,
      practiceProblem: `Given the boundary conditions for "${topic}", derive the governing constraint equation and solve for the optimal operating value.`
    },
    japan: {
      systemName: 'Japan (MEXT 学習指導要領 & Bansho Discovery)',
      countryFlag: '🇯🇵',
      standardsCode: `文部科学省 (MEXT) 学習指導要領 (Course of Study) | 課題研究 (Inquiry Science)`,
      learningObjective: `Investigate "${topic}" through autonomous problem-posing (Kadaishiki) and spatial/geometric first-principles intuition.`,
      pedagogicalApproach: 'Bansho (板書) structured blackboard visual discovery, comparative peer solution analysis, and inductive reasoning from physical models.',
      curriculumBenchmark: `Compares 3 distinct alternative solution strategies and defends the most elegant and generalizable method.`,
      practiceProblem: `Diagram the visual mechanism of "${topic}" on a board, showing how input variables propagate to the final output state.`
    },
    asia: {
      systemName: 'Asia (Singapore Bar Model, South Korea CSAT & India CBSE/NCERT)',
      countryFlag: '🌏',
      standardsCode: `Singapore MOE Syllabus | India CBSE/NCERT Class 10/12 | Korea CSAT (Suneung)`,
      learningObjective: `Apply Concrete-Pictorial-Abstract (CPA) representation and deep analytical deduction to master "${topic}".`,
      pedagogicalApproach: 'Singapore CPA bar modeling, Indian NCERT analytical depth, and Korean CSAT rigorous deductive deduction.',
      curriculumBenchmark: `Translates abstract conceptual statements into visual schema and exact numerical solutions across multi-step word problems.`,
      practiceProblem: `Construct a pictorial model or system diagram representing "${topic}" and solve for the unknown parameter under real-world conditions.`
    }
  };
}

function getCuratedSelfEducateFallback(
  topic: string,
  level: string = 'scholar',
  location: string = 'rural',
  learnerName: string = 'Learner',
  curriculumFocus: string = 'all'
) {
  const tLower = topic.toLowerCase();
  const isUrban = location === 'urban';

  // Topic 1: Solar Energy & Electricity
  if (tLower.includes('solar') || tLower.includes('electric') || tLower.includes('energy') || tLower.includes('power')) {
    return {
      title: `Self-Study Mastery: Harnessing Solar Energy & Photovoltaic Science`,
      topicSummary: `Solar energy converts electromagnetic photons from sunlight directly into electrical current using the photoelectric effect in semiconductor silicon cells.`,
      levelLabel: `${level.toUpperCase()} LEVEL`,
      bigIdeaHook: isUrban
        ? `In town, solar rooftops let shops run lights, fridges, and phone charging even when Yaka units run out or the national grid drops.`
        : `Across villages and shambas, solar panels liberate families from kerosene soot, powering bright LED study lights and irrigation water pumps for free from heaven's sunshine.`,
      coreExplanation: `Sunlight consists of packets of energy called photons (E = hf, where h is Planck's constant). When photons strike a silicon semiconductor wafer, they impart kinetic energy to valence electrons, knocking them free across the p-n junction. This electron flow constitutes direct current (DC) electricity.\n\nA solar charge controller regulates voltage into deep-cycle batteries, and an inverter transforms DC into 240V alternating current (AC) for household appliances.`,
      keyPrinciples: [
        { term: 'Photovoltaic Effect', explanation: 'Generation of voltage and electric current in a material upon exposure to light.' },
        { term: 'Ohm’s Law & Power', explanation: 'P = V × I (Power in Watts = Voltage in Volts × Current in Amps). Inverter sizing depends on total Watt load.' },
        { term: 'Semiconductor p-n Junction', explanation: 'A boundary between p-type (positive hole) and n-type (electron rich) silicon that forces electrons into a unidirectional circuit.' }
      ],
      roadmapSteps: [
        {
          stepNumber: 1,
          title: 'First Principles: Understanding Photons & Atoms',
          duration: '15 min',
          action: 'Draw a diagram of a silicon atom and trace how light photons knock electrons loose into a wire.',
          masteryMilestone: 'Explain without notes how sunlight creates an electric current.'
        },
        {
          stepNumber: 2,
          title: 'Circuit Math: Watts, Amps and Battery Sizing',
          duration: '25 min',
          action: 'Calculate the total daily Watt-hour power consumption of three 10W LED bulbs run for 4 hours (120 Wh). Determine the battery capacity needed in Amp-hours at 12V (120 Wh / 12V = 10 Ah).',
          masteryMilestone: 'Accurately size a small off-grid system for your home.'
        },
        {
          stepNumber: 3,
          title: 'Hands-On Investigation: Solar Angle & Shadows',
          duration: '20 min',
          action: 'Observe panel tilt: calculate why panels tilted at 15° North/South produce 25% more daily energy than horizontal panels.',
          masteryMilestone: 'Demonstrate optimum solar alignment throughout the day.'
        },
        {
          stepNumber: 4,
          title: 'Autodidact Teaching Challenge',
          duration: '15 min',
          action: `Explain to a sibling or neighbor why a solar system needs both a battery and a charge controller to prevent overcharging.`,
          masteryMilestone: 'Clear, fluent verbal explanation using everyday metaphors.'
        }
      ],
      handsOnExperiment: {
        title: 'Solar Heat Absorption & Light Trap Test',
        materialsNeeded: ['2 identical plastic bottles or cups', 'Water', 'Black cloth/paper', 'White cloth/paper', 'Sunlight'],
        steps: [
          'Fill both cups with equal amounts of cool water.',
          'Wrap one cup in black cloth (absorber) and the other in white cloth (reflector).',
          'Place both in direct sunlight for 30 minutes.',
          'Dip your finger into both to compare temperature.'
        ],
        whatItProves: 'Black surfaces absorb electromagnetic solar radiation across all wavelengths, converting photon energy to heat, whereas white surfaces reflect incident radiation.'
      },
      selfCheckQuiz: [
        {
          question: 'What fundamental physical phenomenon allows solar cells to generate electricity from light?',
          options: [
            'The Photovoltaic Effect in semiconductor silicon',
            'Combustion of hydrogen gas in the atmosphere',
            'Magnetic induction by moving copper coils',
            'Chemical rusting of the glass panel'
          ],
          correctIndex: 0,
          explanation: 'The photovoltaic effect dislodges valence electrons in silicon semiconductors when struck by photons of sufficient energy.'
        },
        {
          question: 'If a household uses four 15-watt bulbs for 5 hours each evening, what is their total energy consumption?',
          options: ['60 Watt-hours', '300 Watt-hours', '1,200 Watt-hours', '20 Watt-hours'],
          correctIndex: 1,
          explanation: 'Total power = 4 × 15W = 60W. Total energy = 60W × 5 hours = 300 Watt-hours (Wh).'
        },
        {
          question: 'Why is a charge controller essential in an off-grid solar system?',
          options: [
            'It changes sunlight into alternating current',
            'It prevents the battery from overcharging during peak sun and deep discharging at night',
            'It cleans the dust off the solar panel automatically',
            'It stores high voltage lightning strikes'
          ],
          correctIndex: 1,
          explanation: 'Charge controllers regulate voltage and current from panels to keep storage batteries in their healthy operating window.'
        }
      ],
      globalCurriculaMatrix: {
        usa: {
          systemName: 'United States of America (K–12, NGSS & AP Physics)',
          countryFlag: '🇺🇸',
          standardsCode: 'NGSS HS-PS3-2 & HS-PS3-3 | AP Physics 2 Unit 7',
          learningObjective: 'Develop and use models to illustrate that energy at the macroscopic scale can be accounted for as fields and photon transitions; design a device that converts solar energy into electrical power.',
          pedagogicalApproach: 'Phenomenon-driven inquiry using PhET semiconductor simulations and 3D engineering design constraints.',
          curriculumBenchmark: 'Calculate electrical efficiency η = (P_out / P_in) × 100% and model solar cell I-V characteristic curves under varied irradiance.',
          practiceProblem: 'A 1.5 m² solar panel receives 800 W/m² solar irradiance. If its rated conversion efficiency is 18%, calculate the electric power output in Watts. (Answer: P = 800 × 1.5 × 0.18 = 216 W).'
        },
        europe: {
          systemName: 'Europe (Cambridge CAIE 0625, UK GCSE & IB Physics)',
          countryFlag: '🇪🇺',
          standardsCode: 'Cambridge IGCSE Physics 0625 Topic 1.7 & 4.2 | IB DP Physics Topic 8.1',
          learningObjective: 'Describe how solar cells generate DC current; quantify power loss in transmission and analyze renewable energy balance.',
          pedagogicalApproach: 'Step-by-step examiner mark scheme rigor (Formula M1, substitution A1, units B1) and UK National Curriculum key stage mastery.',
          curriculumBenchmark: 'Demonstrate deep understanding of energy conservation law ΔE = 0 and semiconductor bandgap excitation.',
          practiceProblem: 'State the energy transformation taking place in a photovoltaic cell and calculate energy in Joules produced by a 50W panel operating for 3 hours. (Answer: E = P × t = 50 × 10,800s = 540,000 J or 540 kJ).'
        },
        china: {
          systemName: 'China (MOE National Standards & Gaokao Physics)',
          countryFlag: '🇨🇳',
          standardsCode: '普通高中物理课程标准 (Senior High Physics) | 高考 (Gaokao) Electromagnetism',
          learningObjective: 'Master the photoelectric effect equation Ek = hν - W0 and semiconductor energy level transitions under photon bombardment.',
          pedagogicalApproach: 'Rigorous mathematical derivations, quantum threshold frequency calculations, and rapid quantitative problem sets.',
          curriculumBenchmark: 'Calculate stopping voltage and maximum kinetic energy of photoelectrons emitted from semiconductor cathodes.',
          practiceProblem: 'Sunlight of frequency ν = 6.0 × 10¹⁴ Hz strikes a silicon surface with work function W0 = 1.1 eV. Using h = 6.63 × 10⁻³⁴ J·s and 1 eV = 1.6 × 10⁻¹⁹ J, calculate the maximum kinetic energy of the freed electrons.'
        },
        japan: {
          systemName: 'Japan (MEXT 学習指導要領 & Monbukagakusho STEM)',
          countryFlag: '🇯🇵',
          standardsCode: '文部科学省 (MEXT) 高等学校理科 (Physics & Earth Science) | 課題研究 (Inquiry Lab)',
          learningObjective: 'Investigate semiconductor p-n junction diffusion currents and autonomous clean energy systems through structured experiment.',
          pedagogicalApproach: 'Bansho (板書) board-work discovery, autonomous problem-posing (Kadaishiki), and spatial visualization of electron-hole pairs.',
          curriculumBenchmark: 'Formulate experimental verification of light intensity versus open-circuit voltage Voc and short-circuit current Isc.',
          practiceProblem: 'Using a silicon diode under direct sunlight, graph the relationship between lux intensity and output micro-amperage. Explain why open-circuit voltage saturates while current rises linearly.'
        },
        asia: {
          systemName: 'Asia (Singapore Math/Science & India CBSE/NCERT)',
          countryFlag: '🌏',
          standardsCode: 'Singapore MOE GCE O/A-Level Physics | India CBSE/NCERT Class 12 Semiconductor Physics',
          learningObjective: 'Analyze the I-V characteristics of a p-n junction solar cell; evaluate off-grid solar microgrid unit economics in regional economies.',
          pedagogicalApproach: 'Singapore CPA (Concrete-Pictorial-Abstract) system diagrams combined with Indian NCERT theoretical derivation depth.',
          curriculumBenchmark: 'Solve multi-step battery storage and panel array configurations with load balancing.',
          practiceProblem: 'A village clinic needs 2.4 kWh per day. Assuming 5 peak sun hours and 80% system efficiency, determine the minimum solar panel capacity required. (Answer: Capacity = 2,400 Wh / (5h × 0.8) = 600 Watts peak).'
        }
      },
      globalParityAnalysis: 'Mastering photovoltaic physics and sizing calculations equips a student in rural Uganda, Lagos, or Nairobi with the exact technical problem-solving competencies assessed on the AP Physics 2 exam in California, the Cambridge A-Level in the UK, the Gaokao in Shanghai, and the Singapore GCE A-Levels.',
      cambridgeAlignmentNote: 'Aligned with Cambridge IGCSE Physics (0625) Section 1.7 Energy resources and Section 4.2 Electrical circuits, and Lower Secondary Science (0893) Energy conservation.',
      recommendedBooksOrResources: [
        'Physics: Principles with Applications by Douglas Giancoli',
        'Practical Photovoltaics: Electricity from Solar Cells by Richard Komp'
      ],
      autodidactProverb: 'Knowledge is like a baobab tree; no single pair of hands can embrace it, but one who begins climbing reaches the highest fruit.'
    };
  }

  // Topic 2: Quadratic Equations & Mathematics
  if (tLower.includes('math') || tLower.includes('quadratic') || tLower.includes('algebra') || tLower.includes('calculus') || tLower.includes('equation')) {
    return {
      title: `Self-Study Mastery: Quadratic Equations, Factorisation & Real-World Curves`,
      topicSummary: `Quadratic relationships (ax² + bx + c = 0) govern trajectory curves, area optimization, revenue maximization, and accelerating motion throughout physics and economics.`,
      levelLabel: `${level.toUpperCase()} LEVEL`,
      bigIdeaHook: `Whenever an object is thrown into the air, or a farmer calculates the maximum pasture area for a fixed fence length, the mathematics of the parabola reveals the exact peak.`,
      coreExplanation: `A quadratic equation is a second-degree polynomial equation where the highest power of the variable is 2. The standard form is ax² + bx + c = 0 (where a ≠ 0).\n\nThere are three core methods of solving quadratics:\n1. Factorisation: rewriting ax² + bx + c into two binomial factors (px + q)(rx + s) = 0.\n2. The Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a).\n3. Completing the square: transforming into a(x - h)² + k = 0 to identify the vertex (turning point) of the parabolic curve.\n\nThe discriminant Δ = b² - 4ac reveals the nature of the roots: if Δ > 0, two real distinct roots; if Δ = 0, one repeated root; if Δ < 0, no real roots.`,
      keyPrinciples: [
        { term: 'Standard Quadratic Form', explanation: 'ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0.' },
        { term: 'The Quadratic Formula', explanation: 'x = [-b ± √(b² - 4ac)] / (2a), derived from completing the square.' },
        { term: 'Symmetry & Vertex', explanation: 'The vertical axis of symmetry is at x = -b / (2a). The peak or trough occurs exactly on this line.' }
      ],
      roadmapSteps: [
        {
          stepNumber: 1,
          title: 'First Principles: Binomial Expansion & Factor Pairs',
          duration: '20 min',
          action: 'Expand (x + 3)(x - 5) using FOIL. Then reverse the process to factorise x² - 2x - 15 = 0.',
          masteryMilestone: 'Factorise 5 quadratic trinomials with mental verification.'
        },
        {
          stepNumber: 2,
          title: 'The Master Formula',
          duration: '25 min',
          action: 'Solve 2x² + 5x - 3 = 0 using x = [-b ± √(b² - 4ac)] / (2a). Check both roots by substituting them back into the original equation.',
          masteryMilestone: 'Derive solutions without arithmetic sign errors.'
        },
        {
          stepNumber: 3,
          title: 'Graphing & Parabola Sketching',
          duration: '25 min',
          action: 'Plot y = x² - 4x + 3. Find the x-intercepts (y = 0), y-intercept (x = 0), and vertex at x = -b/(2a).',
          masteryMilestone: 'Accurately sketch the U-shaped curve showing roots and minimum point.'
        },
        {
          stepNumber: 4,
          title: 'Autodidact Optimization Problem',
          duration: '20 min',
          action: 'A farmer has 40 metres of fencing to enclose a rectangular vegetable garden against a stone wall. Express area A(x) = x(40 - 2x) = 40x - 2x². Find the dimensions that maximize the garden area.',
          masteryMilestone: 'Verify that x = 10m gives maximum area A = 200 m².'
        }
      ],
      handsOnExperiment: {
        title: 'Water Arc Trajectory & Parabola Verification',
        materialsNeeded: ['Garden hose or plastic water bottle with pinhole in cap', 'Ruler / tape measure', 'Sunlight'],
        steps: [
          'Squeeze water at a 45-degree angle in a steady arc.',
          'Take a photo from the side.',
          'Notice how the water climbs, flattens at its highest vertex point, and falls with exact symmetrical curve.'
        ],
        whatItProves: 'Gravity acts downwards with constant acceleration (g = -9.8 m/s²), making height h(t) = ut - 1/2 gt² a pure negative quadratic curve.'
      },
      selfCheckQuiz: [
        {
          question: 'What are the roots of the quadratic equation x² - 7x + 12 = 0?',
          options: ['x = 3 and x = 4', 'x = -3 and x = -4', 'x = 2 and x = 6', 'x = 1 and x = 12'],
          correctIndex: 0,
          explanation: 'Factorising gives (x - 3)(x - 4) = 0. Setting each factor to zero gives x = 3 and x = 4.'
        },
        {
          question: 'In the quadratic equation 3x² - 6x + 2 = 0, what is the value of the discriminant b² - 4ac?',
          options: ['-12', '12', '24', '60'],
          correctIndex: 1,
          explanation: 'b² - 4ac = (-6)² - 4(3)(2) = 36 - 24 = 12. Since 12 > 0, there are two distinct real roots.'
        },
        {
          question: 'Where is the axis of symmetry located for the parabola y = 2x² - 8x + 5?',
          options: ['x = 2', 'x = -2', 'x = 4', 'x = -4'],
          correctIndex: 0,
          explanation: 'Axis of symmetry is at x = -b / (2a) = -(-8) / (2 × 2) = 8 / 4 = 2.'
        }
      ],
      globalCurriculaMatrix: {
        usa: {
          systemName: 'United States of America (Common Core Math & AP Prep)',
          countryFlag: '🇺🇸',
          standardsCode: 'CCSS.MATH.CONTENT.HSA.REI.B.4 | HSA.SSE.B.3 | SAT Math 800 Prep',
          learningObjective: 'Solve quadratic equations in one variable by inspection, taking square roots, completing the square, the quadratic formula and factoring.',
          pedagogicalApproach: 'Conceptual modeling using graphing technology (Desmos), vertex transformations f(x) = a(x-h)² + k, and real-world projectile modeling.',
          curriculumBenchmark: 'Derive the quadratic formula from ax² + bx + c = 0 by completing the square; analyze complex roots using discriminant b² - 4ac.',
          practiceProblem: 'A ball is launched from a 10m platform with upward velocity 15 m/s. Height h(t) = -5t² + 15t + 10. Find the exact time t when the ball strikes the ground (h = 0). (Answer: t = [3 + √17] / 2 ≈ 3.56 seconds).'
        },
        europe: {
          systemName: 'Europe (Cambridge CAIE 0580 / 0606, UK GCSE & IB DP)',
          countryFlag: '🇪🇺',
          standardsCode: 'Cambridge IGCSE Math 0580 Topic E1.16 | IB DP Math Analysis & Approaches SL/HL',
          learningObjective: 'Manipulate and solve algebraic fractions leading to quadratics; determine intersection of linear lines and quadratic curves.',
          pedagogicalApproach: 'Proof-oriented algebraic working with strict mark schemes where method marks (M1, M2) require showing complete algebraic expansion.',
          curriculumBenchmark: 'Solve simultaneous equations where one is linear and one is quadratic: y = mx + c and y = ax² + bx + c.',
          practiceProblem: 'Solve the equation 2 / x + 3 / (x + 1) = 4, giving answers correct to 2 decimal places. (Answer: Multiplies to 4x² - x - 2 = 0; x = 0.85 or x = -0.60).'
        },
        china: {
          systemName: 'China (MOE National Standards & Gaokao Math)',
          countryFlag: '🇨🇳',
          standardsCode: '义务教育数学课程标准 (Grade 8-9) | 高考 (Gaokao) Advanced Algebra',
          learningObjective: "Master cross-multiplication factorisation (十字相乘法), Vieta's formulas (根与系数的关系), and parametric quadratic inequalities.",
          pedagogicalApproach: 'High-speed mental cross-factorization, symmetric polynomial manipulation (x1² + x2² = (x1+x2)² - 2x1x2), and extreme multi-constraint problems.',
          curriculumBenchmark: 'Analyze quadratic functions with parameter ranges f(x) = x² - 2mx + m + 2 on restricted intervals [0, 3].',
          practiceProblem: 'If x1 and x2 are roots of x² - 5x + 3 = 0, calculate the value of x1³ + x2³ without solving for x directly. (Answer: (x1+x2)³ - 3x1x2(x1+x2) = 5³ - 3(3)(5) = 125 - 45 = 80).'
        },
        japan: {
          systemName: 'Japan (MEXT 学習指導要領 & Bansho Problem-Posing)',
          countryFlag: '🇯🇵',
          standardsCode: '文部科学省 (MEXT) 中学校第3学年数学 & 高等学校数学I (Quadratics)',
          learningObjective: 'Understand the geometric meaning of completing the square as re-arranging physical area tiles into a square.',
          pedagogicalApproach: 'Bansho visual discovery where students compare 3 different solution strategies on a shared blackboard to evaluate elegance and efficiency.',
          curriculumBenchmark: 'Graph quadratic functions by identifying vertex shift, coordinate symmetry, and rate-of-change tangent approximation.',
          practiceProblem: 'Using a square of side x, add rectangles of width 3 to adjacent sides to form area x² + 6x. What missing corner square must be added to complete the square? (Answer: A square of 3 × 3 = 9, yielding (x + 3)² - 9).'
        },
        asia: {
          systemName: 'Asia (Singapore Math & India CBSE/NCERT)',
          countryFlag: '🌏',
          standardsCode: 'Singapore MOE Secondary 3 GCE O-Level | India CBSE Class 10 Chapter 4',
          learningObjective: 'Apply the discriminant Δ = b² - 4ac to deduce the number of real roots; solve multi-step speed-distance-time quadratic word problems.',
          pedagogicalApproach: 'Singapore CPA bar modeling for geometric and speed relationships, paired with rigorous Indian NCERT word problem proofs.',
          curriculumBenchmark: 'Formulate quadratic equations from complex real-world situations (e.g. river current speeds, pipes filling a reservoir).',
          practiceProblem: 'A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream. Find the speed of the stream. (Answer: Stream speed = 6 km/h).'
        }
      },
      globalParityAnalysis: 'Mastering quadratic algebra through this unified lens bridges the intuitive visual proofs of Japan and Singapore with the high-speed algebraic power of China and the rigorous formal exam methods of the USA and Cambridge.',
      cambridgeAlignmentNote: 'Aligned with Cambridge IGCSE Mathematics (0580) Extended Topic E1.16 & Cambridge Additional Mathematics (0606).',
      recommendedBooksOrResources: [
        'Higher Algebra by Hall and Knight',
        'Calculus Made Easy by Silvanus P. Thompson'
      ],
      autodidactProverb: 'Smooth seas do not make skillful sailors; wrestling with tough equations makes the mind razor sharp.'
    };
  }

  // Generic universal autodidact quest fallback
  return {
    title: `Self-Study Mastery: ${topic}`,
    topicSummary: `A comprehensive self-directed investigation into "${topic}", designed to build first-principles conceptual understanding, empirical testing, and international curriculum mastery across USA, Europe, China, Japan, and Asia.`,
    levelLabel: `${level.toUpperCase()} LEVEL`,
    bigIdeaHook: isUrban
      ? `Understanding "${topic}" provides powerful mental leverage in our modern fast-moving world, connecting foundational theory to daily technology and urban problem solving.`
      : `Mastering "${topic}" from first principles reveals the universal laws governing nature and enterprise, giving every autodidact independence and practical capability.`,
    coreExplanation: `To master "${topic}" through self-education, begin by stripping away jargon to find the core driving mechanism.\n\n1. What is the fundamental reality? Ask what causes this phenomenon or rule to exist.\n2. How do components interact? Trace cause to effect step-by-step.\n3. How do we test it? An idea only becomes knowledge when verified by empirical observation, calculations, or real-world application.`,
    keyPrinciples: [
      { term: 'First Principles Thinking', explanation: 'Breaking down a complex idea to its most fundamental truths and reasoning up from there.' },
      { term: 'Active Retrieval & Socratic Testing', explanation: 'Testing yourself with practice questions rather than passively re-reading notes.' },
      { term: 'The Feynman Technique', explanation: 'Explaining the concept simply in your own words so that a 10-year-old child could understand it.' }
    ],
    roadmapSteps: [
      {
        stepNumber: 1,
        title: 'Phase 1: First Principles & Definition',
        duration: '15 min',
        action: `Write a 3-sentence summary of "${topic}" without using complicated buzzwords.`,
        masteryMilestone: 'Can explain the core idea clearly to a friend.'
      },
      {
        stepNumber: 2,
        title: 'Phase 2: Deep Mechanism & Logic',
        duration: '25 min',
        action: `Identify the 3 most important rules, formulas, or forces that drive "${topic}".`,
        masteryMilestone: 'Map the cause-and-effect chain on a clean sheet of paper.'
      },
      {
        stepNumber: 3,
        title: 'Phase 3: Real-World Testing & Application',
        duration: '30 min',
        action: `Find a real physical or numerical example of "${topic}" in your household or neighborhood.`,
        masteryMilestone: 'Record one observable fact or calculation.'
      },
      {
        stepNumber: 4,
        title: 'Phase 4: Synthesis & Teaching',
        duration: '15 min',
        action: `Synthesize your notes into a 1-page cheatsheet with diagrams and key takeaways.`,
        masteryMilestone: 'Finished portable summary sheet.'
      }
    ],
    handsOnExperiment: {
      title: 'Empirical Verification Exercise',
      materialsNeeded: ['Notebook / blank paper', 'Pen or pencil', 'Everyday household materials'],
      steps: [
        `Write down your initial hypothesis about "${topic}".`,
        'Test your hypothesis against real observations or known mathematical proofs.',
        'Write down any surprises or misconceptions you discovered.'
      ],
      whatItProves: 'Self-directed empirical testing turns abstract theory into permanent capability.'
    },
    selfCheckQuiz: [
      {
        question: `What is the most effective approach when self-studying "${topic}"?`,
        options: [
          'Deconstructing it into first principles and testing understanding actively',
          'Memorizing long textbook passages without questioning them',
          'Relying solely on multiple-choice guessing',
          'Only studying when told to do so by an external teacher'
        ],
        correctIndex: 0,
        explanation: 'True autodidacts break ideas down into foundational truths and verify their reasoning with active testing.'
      },
      {
        question: 'Why is the Feynman Technique so powerful for self-education?',
        options: [
          'It reveals hidden gaps in our understanding when we try to explain concepts simply',
          'It requires expensive computers and laboratory gear',
          'It replaces mathematics with fiction',
          'It makes exams shorter'
        ],
        correctIndex: 0,
        explanation: 'If you cannot explain an idea simply in plain words, you have not truly mastered it.'
      },
      {
        question: 'What transforms passive reading into real mastery?',
        options: [
          'Empirical experimentation, calculation, and practical creation',
          'Highlighting entire pages with bright markers',
          'Reading at 2x speed without pausing',
          'Waiting until the night before a test'
        ],
        correctIndex: 0,
        explanation: 'Active creation, problem-solving, and empirical testing anchor knowledge permanently.'
      }
    ],
    globalCurriculaMatrix: buildUniversalCurriculaMatrix(topic, level),
    globalParityAnalysis: `Mastering "${topic}" unites the empirical inquiry of the United States, the rigorous proof standards of European Cambridge and IB, the algorithmic speed of China, the problem-posing elegance of Japan, and the CPA modeling of Singapore—granting every learner absolute global parity.`,
    cambridgeAlignmentNote: 'Supports Cambridge Learner Attributes: Confident, Responsible, Reflective, Innovative and Engaged.',
    recommendedBooksOrResources: [
      'The Art of Self-Directed Learning by Blake Boles',
      'Make It Stick: The Science of Successful Learning by Peter C. Brown'
    ],
    autodidactProverb: 'He who learns but does not think, is lost! He who thinks but does not learn is in great danger.'
  };
}

function getLanguageCoachFallback(question: string, language: string) {
  const langKey = language.toLowerCase();
  
  if (langKey.includes('mandarin') || langKey.includes('chinese')) {
    return {
      explanation: 'Mandarin Chinese is delightfully logical for adult minds! There are zero verb conjugations, zero tenses, and zero grammatical genders. Words function like clean building blocks.',
      phoneticBreakdown: 'Nǐ hǎo [Nee-how] · Xièxie [Sheh-sheh] · Qǐng wèn [Ching wen]',
      adultSuperpowerRule: 'Verbs never change form! "Wǒ chī" is I eat; "Wǒ zuótiān chī" is I ate yesterday. You only add time markers, never complex verb endings.',
      nativeText: '你好！很高兴认识你。',
      literalMeaning: 'You good! Very high mood to know you.',
      pronunciationTip: 'For the 4 tones, think of English melodies: Tone 1 is flat singing (Ahhh), Tone 2 is asking "What?", Tone 3 dips and rises ("Well..."), Tone 4 is a firm command ("Stop!").',
      practicalDialogue: [
        { speaker: 'Colleague', native: '你好！请问你叫什么名字？', phonetic: 'Nǐ hǎo! Qǐng wèn nǐ jiào shén me míng zi?', english: 'Hello! May I ask, what is your name?' },
        { speaker: 'You', native: '你好！我叫大卫。我是新手学生。', phonetic: 'Nǐ hǎo! Wǒ jiào Dàwèi. Wǒ shì xīn shǒu xué sheng.', english: 'Hello! My name is David. I am a new student.' }
      ],
      culturalEtiquetteTip: 'When greeting an elder, teacher, or dignitary, replace Nǐ (你) with Nín (您) as a sign of elevated respect.'
    };
  }

  if (langKey.includes('spanish')) {
    return {
      explanation: 'Spanish is 100% phonetic. Unlike English where vowels have dozens of confusing sounds, Spanish vowels (A, E, I, O, U) sound the exact same in every single word!',
      phoneticBreakdown: '¡Hola! Buenos días [Oh-lah! Bway-nohs dee-ahs] · Por favor [Por fah-vor]',
      adultSuperpowerRule: 'Over 3,000 English words ending in "-tion" become Spanish by changing to "-ción" (Nation -> Nación, Action -> Acción, Situation -> Situación).',
      nativeText: '¡Mucho gusto en conocerle!',
      literalMeaning: 'Much pleasure in knowing you!',
      pronunciationTip: 'The Spanish "H" is always completely silent. "Hola" is pronounced "Oh-lah". Never pronounce the H!',
      practicalDialogue: [
        { speaker: 'Friend', native: '¡Hola! ¿Cómo estás hoy?', phonetic: '¡Oh-lah! ¿Koh-moh es-tahs oy?', english: 'Hello! How are you today?' },
        { speaker: 'You', native: '¡Muy bien, gracias! ¿Y tú?', phonetic: '¡Moo-ee byehn, grah-syahs! ¿Ee too?', english: 'Very well, thank you! And you?' }
      ],
      culturalEtiquetteTip: 'Use "Usted" (formal you) with elders, doctors, and merchants until invited to use informal "Tú".'
    };
  }

  if (langKey.includes('french')) {
    return {
      explanation: 'French shares nearly 45% of its vocabulary with English due to historical Norman roots! You already know thousands of French words: restaurant, hôtel, menu, musique, différent, impossible.',
      phoneticBreakdown: 'Bonjour [Bon-zhoor] · S’il vous plaît [Seel voo pleh] · Merci [Mehr-see]',
      adultSuperpowerRule: 'In French, final consonants (d, p, s, t, x, z) are usually silent unless the next word begins with a vowel ("Paris" is "Pah-ree", "Vous" is "Voo").',
      nativeText: 'Bonjour ! Comment allez-vous ?',
      literalMeaning: 'Good day! How go you?',
      pronunciationTip: 'For the "R", produce a soft vibration in the back of your throat, like gargling gently, rather than rolling your tongue.',
      practicalDialogue: [
        { speaker: 'Host', native: 'Bonjour madame / monsieur ! Bienvenue !', phonetic: 'Bon-zhoor mah-dahm / muh-syuh! Byen-vuh-noo!', english: 'Good day! Welcome!' },
        { speaker: 'You', native: 'Merci beaucoup ! C’est un plaisir d’être ici.', phonetic: 'Mehr-see boh-koo! Seh toon pleh-zeer deh-truh ee-see.', english: 'Thank you very much! It is a pleasure to be here.' }
      ],
      culturalEtiquetteTip: 'Always greet with "Bonjour" immediately upon entering any shop, bakery, or bus before asking any question.'
    };
  }

  if (langKey.includes('hebrew')) {
    return {
      explanation: 'Hebrew is built on pure mathematical 3-letter roots (Shoresh). From root ש-ל-ם (Sh-L-M) you get Shalom (Peace), Mushlam (Perfect), and Tashlum (Payment). One root opens 15 related words!',
      phoneticBreakdown: 'Shālōm [Shah-lohm] · Todāh Rabbāh [Toh-dah rah-bah] · B’vakashāh [B’vah-kah-shah]',
      adultSuperpowerRule: 'Hebrew has only 3 core tenses: Past, Present, and Future. No complicated subjunctive clauses or multiple auxiliary verbs to memorize.',
      nativeText: 'שָׁלוֹם! מָה נִשְׁמָע?',
      literalMeaning: 'Peace! What is heard?',
      pronunciationTip: 'Read from Right to Left! The "Ch" (ח) is a guttural rasp from the back of the throat like "Bach" in German.',
      practicalDialogue: [
        { speaker: 'Host', native: 'שָׁלוֹם חָבֵר! מָה שְׁלוֹמְךָ?', phonetic: 'Shalom chaver! Mah shlomcha?', english: 'Hello friend! How is your peace/wellbeing?' },
        { speaker: 'You', native: 'הַכֹּל טוֹב, תּוֹדָה רַבָּה!', phonetic: 'Ha-kol tov, todah rabbah!', english: 'Everything is good, thank you very much!' }
      ],
      culturalEtiquetteTip: 'The greeting "Shalom" means wholeness, health, and total flourishing, not just absence of war.'
    };
  }

  if (langKey.includes('greek')) {
    return {
      explanation: 'You already speak Greek! Over 150,000 English words in science, philosophy, psychology, medicine, and geometry are pure Greek: Bio-logy, Photo-graph, Micro-scope, Astro-nomy, Geo-metry.',
      phoneticBreakdown: 'Γεια σας [Yah sahs] · Ευχαριστώ [Ef-chah-ree-stoh] · Παρακαλώ [Pah-rah-kah-loh]',
      adultSuperpowerRule: 'The 24 Greek letters (Alpha to Omega) are identical to the math and physics symbols you already know (α, β, γ, δ, π, θ, λ, ω).',
      nativeText: 'Γεια σας! Τι κάνετε;',
      literalMeaning: 'Health to you! What are you doing / how are you?',
      pronunciationTip: 'Delta (Δ/δ) is pronounced like the soft "th" in "this" or "feather", never a hard English D!',
      practicalDialogue: [
        { speaker: 'Host', native: 'Καλημέρα! Καλώς ήρθατε!', phonetic: 'Kalimera! Kalos eerthete!', english: 'Good morning! Welcome!' },
        { speaker: 'You', native: 'Γεια σας! Ευχαριστώ πολύ!', phonetic: 'Yah sahs! Ef-chah-ree-stoh poh-lee!', english: 'Hello! Thank you very much!' }
      ],
      culturalEtiquetteTip: '"Γεια σας" literally wishes the listener good health (Υγεία - Hygeia = Health!).'
    };
  }

  if (langKey.includes('latin')) {
    return {
      explanation: 'Latin is the DNA of English and European civilization. Mastering 20 Latin roots instantly unlocks over 1,000 advanced English, legal, medical, and scientific terms!',
      phoneticBreakdown: 'Salvē [Sahl-way] · Grātiās tibi agō [Grah-tee-ahs tee-bee ah-goh] · Valē [Wah-lay]',
      adultSuperpowerRule: 'Latin is 100% phonetic. Every vowel is clean and pure: A=ah, E=eh, I=ee, O=oh, U=oo. There are zero silent letters.',
      nativeText: 'Salvē! Quōmodo tē habēs?',
      literalMeaning: 'Be healthy! How do you hold yourself?',
      pronunciationTip: 'Classical Latin pronounces C as a hard K (Caesar = "Kye-sar") and V as English W (Veni, vidi = "Way-nee, wee-dee").',
      practicalDialogue: [
        { speaker: 'Magister', native: 'Salvē, discipule! Quid novi?', phonetic: 'Sal-way, dees-kee-poo-leh! Kweed noh-wee?', english: 'Greetings, student! What is new?' },
        { speaker: 'You', native: 'Salvē, magister! Libenter disco.', phonetic: 'Sal-way, mah-gees-ter! Lee-ben-ter dees-koh.', english: 'Greetings, teacher! Gladly I learn.' }
      ],
      culturalEtiquetteTip: '"Salvē" wishes the person health and wholeness; "Valē" wishes them strength and courage.'
    };
  }

  if (langKey.includes('arabic')) {
    return {
      explanation: 'Arabic is a masterpiece of symmetry and root logic. The 3-letter root K-T-B (ك-ت-ب = write) produces Kitāb (book), Kātib (author), Maktab (desk), Maktabah (library), and Maktūb (destiny)!',
      phoneticBreakdown: 'As-salāmu ʿalaykum [As-sah-lah-moo ah-lay-koom] · Shukran [Shook-rahn] · Marḥaban [Mar-ha-bahn]',
      adultSuperpowerRule: 'Dozens of common English words come from Arabic: Algebra, Algorithm, Chemistry, Coffee, Cotton, Sugar, Zero, Safari, Magazine, and Zenith.',
      nativeText: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ الله',
      literalMeaning: 'The Peace upon you and the mercy of God',
      pronunciationTip: 'Read from Right to Left! The "Haa" (ح) is a warm, gentle breath from the throat like blowing on reading glasses to fog them up.',
      practicalDialogue: [
        { speaker: 'Host', native: 'أَهْلًا وَسَهْلًا! كَيْفَ حَالُكَ؟', phonetic: 'Ahlan wa sahlan! Kayfa haluka?', english: 'Welcome! How is your condition?' },
        { speaker: 'You', native: 'بِخَيْر، الحَمْدُ لله! شُكْرًا لَكَ.', phonetic: 'Bikhayr, al-hamdu lillah! Shukran laka.', english: 'Well, praise be to God! Thank you.' }
      ],
      culturalEtiquetteTip: 'The universally respected greeting is "As-salamu alaykum", replied to with "Wa alaykum as-salam".'
    };
  }

  if (langKey.includes('hindi') || langKey.includes('hindu')) {
    return {
      explanation: 'Hindi uses the Devanagari script, which is organized strictly by human vocal anatomy! Letters are grouped logically by where your tongue touches (throat, palate, teeth, lips).',
      phoneticBreakdown: 'Namaste [Nah-mas-tay] · Dhanyavād [Dhan-yah-vahd] · Kripayā [Krip-yah]',
      adultSuperpowerRule: 'Hindi is an Indo-European language cousin to English. Notice cognates: Mātā (Mother), Bhrātā (Brother), Danta (Dental), Nāma (Name)!',
      nativeText: 'नमस्ते! आप कैसे हैं?',
      literalMeaning: 'I bow to you! You (formal) how are?',
      pronunciationTip: 'Devanagari letters hang from a top horizontal line (Shirorekha) which links words into clean blocks.',
      practicalDialogue: [
        { speaker: 'Host', native: 'नमस्ते जी! क्या हाल है?', phonetic: 'Namaste ji! Kya haal hai?', english: 'Greetings! How are things?' },
        { speaker: 'You', native: 'नमस्ते! सब ठीक है, धन्यवाद।', phonetic: 'Namaste! Sab theek hai, dhanyavaad.', english: 'Greetings! Everything is fine, thank you.' }
      ],
      culturalEtiquetteTip: 'Add "-ji" after names (e.g. David-ji, Doctor-ji) as an affectionate, respectful honorific.'
    };
  }

  // Default: English
  return {
    explanation: 'English is the great global lingua franca! It has zero grammatical gender (no masculine/feminine nouns), straightforward plurals, and flexible word compounding.',
    phoneticBreakdown: 'Hello, how are you? [Heh-loh, how ahr yoo?] · Thank you [Thank yoo]',
    adultSuperpowerRule: 'Mastering the top 100 high-frequency words unlocks over 50% of all written English texts in newspapers, websites, and books worldwide.',
    nativeText: 'Hello, it is a pleasure to meet you!',
    literalMeaning: 'Greeting, it is a joy to become acquainted with you!',
    pronunciationTip: 'English rhythm relies on syllable stress: emphasize the primary syllable and soften the unstressed syllables.',
    practicalDialogue: [
      { speaker: 'Mentor', native: 'Good morning! How is your learning going today?', phonetic: 'Good mor-ning! How iz yor ler-ning goh-ing too-day?', english: 'Good morning! How is your learning going today?' },
      { speaker: 'You', native: 'Step by step, I am making excellent progress, thank you!', phonetic: 'Step by step, eye am may-king ek-seh-lent prog-res, thank yoo!', english: 'Step by step, I am making excellent progress, thank you!' }
    ],
    culturalEtiquetteTip: 'Adults soften requests with "Could you please..." or "I would appreciate...", which sounds gentle and courteous.'
  };
}

let etwCapturedApp: any = null;
const etwExpressApplication: any = (express as any).application;
if (etwExpressApplication) {
  const etwOriginalListen = etwExpressApplication.listen;
  etwExpressApplication.listen = function (...args: any[]) {
    etwCapturedApp = this;
    if (process.env.VERCEL) {
      return { close() {}, on() {}, address() { return null; }, listening: false } as any;
    }
    return etwOriginalListen.apply(this, args);
  };
}

export const etwReady: Promise<any> = startServer().then(() => etwCapturedApp);


