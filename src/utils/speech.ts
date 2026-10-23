// Gentle Teacher Voice Utility for Home Learning Audio Narration
// Delivers a warm, patient, human teacher voice rather than a machine or robotic synthesizer

export interface TeacherVoicePersona {
  id: 'ms-clara' | 'mama-sarah' | 'mr-arthur';
  name: string;
  role: string;
  avatar: string;
  description: string;
  preferredVoices: string[];
  gender: 'female' | 'male';
  rate: number; // Gentle, patient teacher pace (0.86 - 0.90)
  pitch: number; // Warm, friendly inflection (1.02 - 1.05)
}

export const TEACHER_PERSONAS: Record<string, TeacherVoicePersona> = {
  'ms-clara': {
    id: 'ms-clara',
    name: 'Ms. Clara',
    role: 'Gentle & Patient Teacher',
    avatar: '👩‍🏫',
    description: 'Warm, calm, and soothing teacher voice with gentle pauses and encouraging tone.',
    gender: 'female',
    rate: 0.88,
    pitch: 1.04,
    preferredVoices: [
      'Google UK English Female',
      'Google US English',
      'Microsoft Jenny Online (Natural)',
      'Microsoft Aria Online (Natural)',
      'Microsoft Sonia Online (Natural)',
      'Samantha',
      'Karen',
      'Serena',
      'Victoria',
      'Moira',
      'Tessa',
      'Zira',
    ],
  },
  'mama-sarah': {
    id: 'mama-sarah',
    name: 'Mama Sarah',
    role: 'Loving African Mentor',
    avatar: '🤱',
    description: 'Affectionate, melodious, and motherly guide encouraging curious young scholars.',
    gender: 'female',
    rate: 0.87,
    pitch: 1.03,
    preferredVoices: [
      'Google UK English Female',
      'Google US English',
      'Microsoft Jenny Online (Natural)',
      'Samantha',
      'Karen',
      'Victoria',
      'Serena',
    ],
  },
  'mr-arthur': {
    id: 'mr-arthur',
    name: 'Mr. Arthur',
    role: 'Kind Science Mentor',
    avatar: '👨‍🏫',
    description: 'Wise, articulate, and grandfatherly teacher with clear, friendly pacing.',
    gender: 'male',
    rate: 0.89,
    pitch: 0.98,
    preferredVoices: [
      'Google UK English Male',
      'Microsoft Guy Online (Natural)',
      'Daniel',
      'Oliver',
      'Arthur',
      'Google US English Male',
    ],
  },
};

// Global audio & speech state
let currentUtterance: SpeechSynthesisUtterance | null = null;
let currentAudioElement: HTMLAudioElement | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];

// Initialize voices listener
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const updateVoices = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
  updateVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }
}

/**
 * Get active teacher voice persona
 */
export function getCurrentTeacherPersonaId(): 'ms-clara' | 'mama-sarah' | 'mr-arthur' {
  if (typeof window === 'undefined') return 'ms-clara';
  try {
    const saved = localStorage.getItem('etw_teacher_voice_persona');
    if (saved && (saved === 'ms-clara' || saved === 'mama-sarah' || saved === 'mr-arthur')) {
      return saved;
    }
  } catch {
    // fallback
  }
  return 'ms-clara';
}

export function setCurrentTeacherPersonaId(id: 'ms-clara' | 'mama-sarah' | 'mr-arthur'): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('etw_teacher_voice_persona', id);
  } catch {
    // ignore
  }
}

/**
 * Finds the most natural, human-sounding teacher voice available in the browser.
 * Explicitly ignores robotic synthesizers (eSpeak, mechanical fallbacks).
 */
export function getBestTeacherVoice(personaId?: string): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const targetPersona = TEACHER_PERSONAS[personaId || getCurrentTeacherPersonaId()] || TEACHER_PERSONAS['ms-clara'];

  // 1. Try to match preferred natural voice names
  for (const preferred of targetPersona.preferredVoices) {
    const found = voices.find(
      (v) => v.name.toLowerCase().includes(preferred.toLowerCase()) || v.voiceURI.toLowerCase().includes(preferred.toLowerCase())
    );
    if (found) return found;
  }

  // 2. Look for any English voice with "Natural" or "Neural" or "Premium"
  const naturalEnglish = voices.find(
    (v) =>
      v.lang.startsWith('en') &&
      (v.name.toLowerCase().includes('natural') ||
        v.name.toLowerCase().includes('neural') ||
        v.name.toLowerCase().includes('premium') ||
        v.name.toLowerCase().includes('enhanced'))
  );
  if (naturalEnglish) return naturalEnglish;

  // 3. Match by gender preference if tagged
  if (targetPersona.gender === 'female') {
    const femaleEnglish = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.toLowerCase().includes('female') ||
          v.name.toLowerCase().includes('woman') ||
          v.name.toLowerCase().includes('jenny') ||
          v.name.toLowerCase().includes('samantha') ||
          v.name.toLowerCase().includes('karen') ||
          v.name.toLowerCase().includes('victoria'))
    );
    if (femaleEnglish) return femaleEnglish;
  } else {
    const maleEnglish = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.toLowerCase().includes('male') ||
          v.name.toLowerCase().includes('guy') ||
          v.name.toLowerCase().includes('daniel') ||
          v.name.toLowerCase().includes('george'))
    );
    if (maleEnglish) return maleEnglish;
  }

  // 4. Any English voice that is NOT an eSpeak/robotic engine
  const decentEnglish = voices.find(
    (v) =>
      v.lang.startsWith('en') &&
      !v.name.toLowerCase().includes('espeak') &&
      !v.name.toLowerCase().includes('whisper') &&
      !v.name.toLowerCase().includes('croak')
  );
  if (decentEnglish) return decentEnglish;

  // Fallback to default
  return voices.find((v) => v.default) || voices[0] || null;
}

/**
 * Formats script into gentle teacher cadence with natural breathing pauses
 */
export function formatTeacherPhrasing(text: string): string {
  let cleaned = text
    .replace(/[*_#`~]/g, '') // remove markdown symbols
    .replace(/\s+/g, ' ')
    .trim();

  // Insert gentle teacher breathing pauses after greetings and transitional phrases
  cleaned = cleaned
    .replace(/\b(Look outside|Look at|Notice that|Remember that|Congratulations|Now let's|Here is)\b/gi, '$1,')
    .replace(/\b(First|Second|Third|Finally)\b/gi, '$1,')
    .replace(/,\s*,/g, ', ');

  return cleaned;
}

/**
 * Speaks text using the gentle teacher voice.
 * Automatically tries server-side Gemini TTS first for authentic studio human voice,
 * and falls back seamlessly to the enhanced client-side Web Speech teacher voice.
 */
export async function speakTeacherNarration(
  text: string,
  onEnd?: () => void,
  personaId?: 'ms-clara' | 'mama-sarah' | 'mr-arthur'
): Promise<boolean> {
  stopSpeaking();

  const activePersonaId = personaId || getCurrentTeacherPersonaId();
  const persona = TEACHER_PERSONAS[activePersonaId] || TEACHER_PERSONAS['ms-clara'];
  const formattedText = formatTeacherPhrasing(text);

  if (!formattedText) return false;

  // 1. Try server-side Gemini 3.8 Teacher TTS
  try {
    const response = await fetch('/api/teacher-tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: formattedText,
        persona: activePersonaId,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.audioBase64) {
        const audio = new Audio(`data:${data.mimeType || 'audio/wav'};base64,${data.audioBase64}`);
        currentAudioElement = audio;
        audio.onended = () => {
          currentAudioElement = null;
          if (onEnd) onEnd();
        };
        audio.onerror = () => {
          currentAudioElement = null;
          // Fallback to browser speech if audio fails
          speakWithBrowserTeacherVoice(formattedText, persona, onEnd);
        };
        await audio.play();
        return true;
      }
    }
  } catch (err) {
    // Network or server TTS offline, proceed to browser teacher voice
  }

  // 2. Client-side Gentle Teacher Voice Fallback
  return speakWithBrowserTeacherVoice(formattedText, persona, onEnd);
}

/**
 * Internal browser Web Speech API synthesis configured for gentle teacher prosody
 */
function speakWithBrowserTeacherVoice(
  formattedText: string,
  persona: TeacherVoicePersona,
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(formattedText);
  const voice = getBestTeacherVoice(persona.id);
  if (voice) {
    utterance.voice = voice;
  }

  // Gentle, calm teacher pace: never rushed, never mechanical
  utterance.rate = persona.rate; // 0.87 - 0.89
  utterance.pitch = persona.pitch; // 1.03 - 1.05 for warm female teacher, 0.98 for male mentor
  utterance.volume = 0.96; // soft and clear

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    console.warn('Teacher speech synthesis interrupted or error:', e);
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  return true;
}

/**
 * Standard speakText wrapper upgraded to use gentle teacher voice
 */
export function speakText(
  text: string,
  onEnd?: () => void,
  onBoundary?: (charIndex: number) => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  stopSpeaking();

  const activePersonaId = getCurrentTeacherPersonaId();
  const persona = TEACHER_PERSONAS[activePersonaId] || TEACHER_PERSONAS['ms-clara'];
  const formattedText = formatTeacherPhrasing(text);

  if (!formattedText) return false;

  const utterance = new SpeechSynthesisUtterance(formattedText);
  const voice = getBestTeacherVoice(persona.id);
  if (voice) {
    utterance.voice = voice;
  }

  utterance.rate = persona.rate;
  utterance.pitch = persona.pitch;
  utterance.volume = 0.96;

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  if (onBoundary) {
    utterance.onboundary = (event) => {
      onBoundary(event.charIndex);
    };
  }

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  return true;
}

/**
 * Immediately silences all audio and speech synthesis
 */
export function stopSpeaking(): void {
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement.currentTime = 0;
    currentAudioElement = null;
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

/**
 * Returns true if speech or audio is actively playing
 */
export function isSpeaking(): boolean {
  if (currentAudioElement && !currentAudioElement.paused) {
    return true;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    return window.speechSynthesis.speaking;
  }
  return false;
}

/**
 * Specialized Foreign Language Speech for beginners and adults
 * Matches native voices for Mandarin, Spanish, French, Hebrew, Greek, Latin/Italian, Arabic, Hindi, and English
 * Supports a slow articulation rate (0.72) for beginners to hear individual phonemes clearly
 */
export function speakForeignLanguage(
  text: string,
  langCode: string,
  slow: boolean = false,
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  stopSpeaking();

  const clean = text.replace(/[*_#`()]/g, '').trim();
  if (!clean) return false;

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = langCode;

  // Find best native voice matching the language code
  const voices = window.speechSynthesis.getVoices();
  const prefix = langCode.split('-')[0].toLowerCase();
  
  // Prioritize exact match or language prefix
  const matchedVoice = voices.find(v => v.lang.toLowerCase() === langCode.toLowerCase())
    || voices.find(v => v.lang.toLowerCase().startsWith(prefix))
    || voices.find(v => v.name.toLowerCase().includes(prefix));

  if (matchedVoice) {
    utterance.voice = matchedVoice;
  }

  // Pace: slow mode 0.72 for adult beginners, natural gentle teacher 0.88
  utterance.rate = slow ? 0.72 : 0.88;
  utterance.pitch = 1.0;
  utterance.volume = 0.98;

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  return true;
}
