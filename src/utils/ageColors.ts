import { AgeBand, ChildProfile, ThemePreference } from '../types/curriculum';

export interface AgeBandColorConfig {
  id: string;
  label: string;
  stage?: string;
  emoji: string;
  colorName: 'amber' | 'emerald' | 'blue' | 'indigo' | 'purple' | 'rose' | 'teal';
  
  // Hero section gradients & accents
  heroGradient: string;
  heroGlow: string;
  heroProgressBar: string;
  heroGoalAchievedBar: string;
  heroPillBg: string;
  heroBorder: string;
  heroDialectPill: string;
  heroQuickBiteBtn: string;
  heroTodayMissionBorder: string;
  heroWorldChangerBtn: string;
  
  // Nav Tab styles
  navActiveBg: string;
  navActiveBorder: string;
  navActiveRing: string;
  navActiveShadow: string;
  navBadgeActive: string;
  navBadgeInactive: string;
  navTabBorderHover: string;
  
  // Stage banner info
  bannerBg: string;
  bannerBorder: string;
  bannerTitle: string;
  bannerTagBg: string;
  bannerTagText: string;
  
  // Lesson Card accents
  cardHoverBorder: string;
  cardAgeBadge: string;
  cardStageBadge: string;
  cardAccentLine: string;
  cardHeaderIconBg: string;
  
  // Profile avatar and badges
  avatarRing: string;
  profileBadge: string;
  profilePill: string;
  
  // Text accents
  textAccent: string;
}

export const AGE_BAND_COLORS: Record<AgeBand, AgeBandColorConfig> = {
  '3-5': {
    id: '3-5',
    label: 'Ages 3–5',
    stage: 'Discover',
    emoji: '🐣',
    colorName: 'amber',
    heroGradient: 'from-amber-500 via-orange-500 to-amber-600',
    heroGlow: 'shadow-amber-500/20',
    heroProgressBar: 'from-amber-200 to-yellow-300',
    heroGoalAchievedBar: 'from-amber-300 to-emerald-300',
    heroPillBg: 'bg-white/20 text-white border-white/20',
    heroBorder: 'border-amber-400/30',
    heroDialectPill: 'text-amber-100 hover:text-white',
    heroQuickBiteBtn: 'bg-black/25 text-white hover:bg-black/35 border-white/20',
    heroTodayMissionBorder: 'border-white/15',
    heroWorldChangerBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/40',
    
    navActiveBg: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
    navActiveBorder: 'border-amber-600',
    navActiveRing: 'ring-amber-400/50',
    navActiveShadow: 'shadow-md shadow-amber-500/25',
    navBadgeActive: 'bg-white/25 text-white',
    navBadgeInactive: 'bg-amber-100 text-amber-800',
    navTabBorderHover: 'hover:border-amber-400',
    
    bannerBg: 'bg-amber-50/80',
    bannerBorder: 'border-amber-200/80',
    bannerTitle: 'text-amber-900',
    bannerTagBg: 'bg-amber-100',
    bannerTagText: 'text-amber-800',
    
    cardHoverBorder: 'hover:border-amber-400',
    cardAgeBadge: 'bg-amber-100/90 text-amber-800 border-amber-200',
    cardStageBadge: 'bg-amber-500 text-white',
    cardAccentLine: 'border-t-amber-500',
    cardHeaderIconBg: 'bg-amber-100 text-amber-800',
    
    avatarRing: 'ring-amber-400',
    profileBadge: 'bg-amber-100 text-amber-800 border-amber-200',
    profilePill: 'bg-amber-50 text-amber-900 border-amber-300',
    textAccent: 'text-amber-600'
  },
  '6-8': {
    id: '6-8',
    label: 'Ages 6–8',
    stage: 'Explore & Build',
    emoji: '🧱',
    colorName: 'emerald',
    heroGradient: 'from-emerald-600 via-teal-600 to-emerald-700',
    heroGlow: 'shadow-emerald-600/20',
    heroProgressBar: 'from-emerald-200 to-teal-300',
    heroGoalAchievedBar: 'from-emerald-300 to-lime-300',
    heroPillBg: 'bg-white/20 text-white border-white/20',
    heroBorder: 'border-emerald-400/30',
    heroDialectPill: 'text-emerald-100 hover:text-white',
    heroQuickBiteBtn: 'bg-black/25 text-white hover:bg-black/35 border-white/20',
    heroTodayMissionBorder: 'border-white/15',
    heroWorldChangerBtn: 'bg-teal-600 hover:bg-teal-500 text-white border-teal-400/40',
    
    navActiveBg: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white',
    navActiveBorder: 'border-emerald-700',
    navActiveRing: 'ring-emerald-400/50',
    navActiveShadow: 'shadow-md shadow-emerald-600/25',
    navBadgeActive: 'bg-white/25 text-white',
    navBadgeInactive: 'bg-emerald-100 text-emerald-800',
    navTabBorderHover: 'hover:border-emerald-400',
    
    bannerBg: 'bg-emerald-50/80',
    bannerBorder: 'border-emerald-200/80',
    bannerTitle: 'text-emerald-900',
    bannerTagBg: 'bg-emerald-100',
    bannerTagText: 'text-emerald-800',
    
    cardHoverBorder: 'hover:border-emerald-400',
    cardAgeBadge: 'bg-emerald-100/90 text-emerald-800 border-emerald-200',
    cardStageBadge: 'bg-emerald-600 text-white',
    cardAccentLine: 'border-t-emerald-500',
    cardHeaderIconBg: 'bg-emerald-100 text-emerald-800',
    
    avatarRing: 'ring-emerald-400',
    profileBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    profilePill: 'bg-emerald-50 text-emerald-900 border-emerald-300',
    textAccent: 'text-emerald-600'
  },
  '9-12': {
    id: '9-12',
    label: 'Ages 9–11 / 9–12',
    stage: 'Understand & Explore',
    emoji: '🧭',
    colorName: 'blue',
    heroGradient: 'from-blue-600 via-indigo-600 to-cyan-700',
    heroGlow: 'shadow-blue-600/20',
    heroProgressBar: 'from-blue-200 to-cyan-300',
    heroGoalAchievedBar: 'from-blue-300 to-emerald-300',
    heroPillBg: 'bg-white/20 text-white border-white/20',
    heroBorder: 'border-blue-400/30',
    heroDialectPill: 'text-blue-100 hover:text-white',
    heroQuickBiteBtn: 'bg-black/25 text-white hover:bg-black/35 border-white/20',
    heroTodayMissionBorder: 'border-white/15',
    heroWorldChangerBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/40',
    
    navActiveBg: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
    navActiveBorder: 'border-blue-700',
    navActiveRing: 'ring-blue-400/50',
    navActiveShadow: 'shadow-md shadow-blue-600/25',
    navBadgeActive: 'bg-white/25 text-white',
    navBadgeInactive: 'bg-blue-100 text-blue-800',
    navTabBorderHover: 'hover:border-blue-400',
    
    bannerBg: 'bg-blue-50/80',
    bannerBorder: 'border-blue-200/80',
    bannerTitle: 'text-blue-900',
    bannerTagBg: 'bg-blue-100',
    bannerTagText: 'text-blue-800',
    
    cardHoverBorder: 'hover:border-blue-400',
    cardAgeBadge: 'bg-blue-100/90 text-blue-800 border-blue-200',
    cardStageBadge: 'bg-blue-600 text-white',
    cardAccentLine: 'border-t-blue-500',
    cardHeaderIconBg: 'bg-blue-100 text-blue-800',
    
    avatarRing: 'ring-blue-400',
    profileBadge: 'bg-blue-100 text-blue-800 border-blue-200',
    profilePill: 'bg-blue-50 text-blue-900 border-blue-300',
    textAccent: 'text-blue-600'
  },
  '13-16': {
    id: '13-16',
    label: 'Ages 12–14 / 13–16',
    stage: 'Investigate & Develop',
    emoji: '🔬',
    colorName: 'indigo',
    heroGradient: 'from-indigo-700 via-purple-700 to-slate-900',
    heroGlow: 'shadow-indigo-700/20',
    heroProgressBar: 'from-indigo-200 to-purple-300',
    heroGoalAchievedBar: 'from-purple-300 to-emerald-300',
    heroPillBg: 'bg-white/20 text-white border-white/20',
    heroBorder: 'border-indigo-400/30',
    heroDialectPill: 'text-indigo-100 hover:text-white',
    heroQuickBiteBtn: 'bg-black/25 text-white hover:bg-black/35 border-white/20',
    heroTodayMissionBorder: 'border-white/15',
    heroWorldChangerBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/40',
    
    navActiveBg: 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white',
    navActiveBorder: 'border-indigo-700',
    navActiveRing: 'ring-indigo-400/50',
    navActiveShadow: 'shadow-md shadow-indigo-600/25',
    navBadgeActive: 'bg-white/25 text-white',
    navBadgeInactive: 'bg-indigo-100 text-indigo-800',
    navTabBorderHover: 'hover:border-indigo-400',
    
    bannerBg: 'bg-indigo-50/80',
    bannerBorder: 'border-indigo-200/80',
    bannerTitle: 'text-indigo-900',
    bannerTagBg: 'bg-indigo-100',
    bannerTagText: 'text-indigo-800',
    
    cardHoverBorder: 'hover:border-indigo-400',
    cardAgeBadge: 'bg-indigo-100/90 text-indigo-800 border-indigo-200',
    cardStageBadge: 'bg-indigo-600 text-white',
    cardAccentLine: 'border-t-indigo-500',
    cardHeaderIconBg: 'bg-indigo-100 text-indigo-800',
    
    avatarRing: 'ring-indigo-400',
    profileBadge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    profilePill: 'bg-indigo-50 text-indigo-900 border-indigo-300',
    textAccent: 'text-indigo-600'
  },
  '17+': {
    id: '17+',
    label: 'Ages 15–17 / 18+ Launch',
    stage: 'Create & Launch',
    emoji: '👑',
    colorName: 'purple',
    heroGradient: 'from-purple-800 via-fuchsia-800 to-rose-800',
    heroGlow: 'shadow-purple-800/20',
    heroProgressBar: 'from-fuchsia-200 to-rose-300',
    heroGoalAchievedBar: 'from-rose-300 to-emerald-300',
    heroPillBg: 'bg-white/20 text-white border-white/20',
    heroBorder: 'border-purple-400/30',
    heroDialectPill: 'text-purple-100 hover:text-white',
    heroQuickBiteBtn: 'bg-black/25 text-white hover:bg-black/35 border-white/20',
    heroTodayMissionBorder: 'border-white/15',
    heroWorldChangerBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/40',
    
    navActiveBg: 'bg-gradient-to-r from-purple-700 to-rose-700 text-white',
    navActiveBorder: 'border-purple-800',
    navActiveRing: 'ring-purple-400/50',
    navActiveShadow: 'shadow-md shadow-purple-700/25',
    navBadgeActive: 'bg-white/25 text-white',
    navBadgeInactive: 'bg-purple-100 text-purple-800',
    navTabBorderHover: 'hover:border-purple-400',
    
    bannerBg: 'bg-purple-50/80',
    bannerBorder: 'border-purple-200/80',
    bannerTitle: 'text-purple-900',
    bannerTagBg: 'bg-purple-100',
    bannerTagText: 'text-purple-800',
    
    cardHoverBorder: 'hover:border-purple-400',
    cardAgeBadge: 'bg-purple-100/90 text-purple-800 border-purple-200',
    cardStageBadge: 'bg-purple-600 text-white',
    cardAccentLine: 'border-t-purple-500',
    cardHeaderIconBg: 'bg-purple-100 text-purple-800',
    
    avatarRing: 'ring-purple-400',
    profileBadge: 'bg-purple-100 text-purple-800 border-purple-200',
    profilePill: 'bg-purple-50 text-purple-900 border-purple-300',
    textAccent: 'text-purple-600'
  }
};

// =========================================================================
// BOY / GIRL / SPECIAL PALETTES (User Customizable)
// =========================================================================
export const BOY_BLUE_THEME: AgeBandColorConfig = {
  id: 'boy-blue',
  label: 'Boy Blue 👦',
  emoji: '👦',
  colorName: 'blue',
  heroGradient: 'from-blue-600 via-sky-600 to-cyan-600',
  heroGlow: 'shadow-blue-600/25',
  heroProgressBar: 'from-sky-200 to-cyan-300',
  heroGoalAchievedBar: 'from-cyan-300 to-emerald-300',
  heroPillBg: 'bg-white/20 text-white border-white/20',
  heroBorder: 'border-sky-300/40',
  heroDialectPill: 'text-sky-100 hover:text-white',
  heroQuickBiteBtn: 'bg-black/25 text-white hover:bg-black/35 border-white/20',
  heroTodayMissionBorder: 'border-white/15',
  heroWorldChangerBtn: 'bg-cyan-600 hover:bg-cyan-500 text-white border-cyan-400/40',
  
  navActiveBg: 'bg-gradient-to-r from-blue-600 to-sky-600 text-white',
  navActiveBorder: 'border-blue-700',
  navActiveRing: 'ring-sky-400/50',
  navActiveShadow: 'shadow-md shadow-blue-600/30',
  navBadgeActive: 'bg-white/25 text-white',
  navBadgeInactive: 'bg-sky-100 text-sky-900',
  navTabBorderHover: 'hover:border-sky-400',
  
  bannerBg: 'bg-sky-50/80',
  bannerBorder: 'border-sky-200/80',
  bannerTitle: 'text-sky-950',
  bannerTagBg: 'bg-sky-100',
  bannerTagText: 'text-sky-900',
  
  cardHoverBorder: 'hover:border-sky-400',
  cardAgeBadge: 'bg-sky-100 text-sky-800 border-sky-200',
  cardStageBadge: 'bg-blue-600 text-white',
  cardAccentLine: 'border-t-blue-500',
  cardHeaderIconBg: 'bg-sky-100 text-sky-800',
  
  avatarRing: 'ring-blue-400',
  profileBadge: 'bg-sky-100 text-sky-800 border-sky-300',
  profilePill: 'bg-sky-50 text-sky-900 border-sky-300',
  textAccent: 'text-sky-600'
};

export const GIRL_PINK_THEME: AgeBandColorConfig = {
  id: 'girl-pink',
  label: 'Girl Rose & Pink 👧',
  emoji: '👧',
  colorName: 'rose',
  heroGradient: 'from-rose-500 via-pink-600 to-fuchsia-600',
  heroGlow: 'shadow-pink-500/25',
  heroProgressBar: 'from-pink-200 to-rose-300',
  heroGoalAchievedBar: 'from-rose-300 to-amber-300',
  heroPillBg: 'bg-white/20 text-white border-white/20',
  heroBorder: 'border-pink-300/40',
  heroDialectPill: 'text-pink-100 hover:text-white',
  heroQuickBiteBtn: 'bg-black/25 text-white hover:bg-black/35 border-white/20',
  heroTodayMissionBorder: 'border-white/15',
  heroWorldChangerBtn: 'bg-pink-700 hover:bg-pink-600 text-white border-pink-400/40',
  
  navActiveBg: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white',
  navActiveBorder: 'border-rose-600',
  navActiveRing: 'ring-pink-400/50',
  navActiveShadow: 'shadow-md shadow-pink-500/30',
  navBadgeActive: 'bg-white/25 text-white',
  navBadgeInactive: 'bg-pink-100 text-pink-900',
  navTabBorderHover: 'hover:border-pink-400',
  
  bannerBg: 'bg-pink-50/80',
  bannerBorder: 'border-pink-200/80',
  bannerTitle: 'text-pink-950',
  bannerTagBg: 'bg-pink-100',
  bannerTagText: 'text-pink-900',
  
  cardHoverBorder: 'hover:border-pink-400',
  cardAgeBadge: 'bg-pink-100 text-pink-800 border-pink-200',
  cardStageBadge: 'bg-rose-500 text-white',
  cardAccentLine: 'border-t-rose-500',
  cardHeaderIconBg: 'bg-pink-100 text-pink-800',
  
  avatarRing: 'ring-pink-400',
  profileBadge: 'bg-pink-100 text-pink-800 border-pink-300',
  profilePill: 'bg-pink-50 text-pink-900 border-pink-300',
  textAccent: 'text-pink-600'
};

export function getBandForAge(age: number): AgeBand {
  if (age <= 5) return '3-5';
  if (age <= 8) return '6-8';
  if (age <= 12) return '9-12';
  if (age <= 16) return '13-16';
  return '17+';
}

export function getAgeBandColor(bandOrAge: AgeBand | number): AgeBandColorConfig {
  const band = typeof bandOrAge === 'number' ? getBandForAge(bandOrAge) : bandOrAge;
  return AGE_BAND_COLORS[band] || AGE_BAND_COLORS['3-5'];
}

/**
 * Returns the customized theme for the child, factoring in:
 * 1. Explicit theme preference ('boy-blue', 'girl-pink', 'amber', etc.)
 * 2. Child gender ('boy' -> BOY_BLUE_THEME, 'girl' -> GIRL_PINK_THEME) if set to that
 * 3. Default: Fallback to the age-group's dedicated developmental color!
 */
export function getThemeForChild(
  profile?: ChildProfile | null, 
  activeAgeBand?: AgeBand
): AgeBandColorConfig {
  if (profile?.themePreference === 'boy-blue') {
    return BOY_BLUE_THEME;
  }
  if (profile?.themePreference === 'girl-pink') {
    return GIRL_PINK_THEME;
  }
  if (profile?.themePreference && profile.themePreference !== 'auto') {
    const directAgeBand = AGE_BAND_COLORS[profile.themePreference as AgeBand];
    if (directAgeBand) return directAgeBand;
  }

  // If gender is set to boy or girl and theme is auto or unset
  if (profile?.gender === 'boy') {
    return BOY_BLUE_THEME;
  }
  if (profile?.gender === 'girl') {
    return GIRL_PINK_THEME;
  }

  // Otherwise, use the distinct color for the active age band or child age
  const band = activeAgeBand || (profile ? getBandForAge(profile.age) : '3-5');
  return getAgeBandColor(band);
}
