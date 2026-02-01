/**
 * Bunny Diary Design System
 * Minimalist, gentle, healing. No sharp corners.
 */
export const theme = {
  colors: {
    background: '#FDFBF7',   // Creamy paper texture
    surface: '#FAF7F2',     // Slightly darker for cards
    text: '#3D3A36',
    textMuted: '#8A8580',
    accent: '#C9A87C',      // Warm, gentle accent
    accentSoft: '#E8DFD0',
    border: '#E8E4DD',
  },
  radius: {
    card: 20,
    button: 16,
    input: 14,
  },
  spacing: {
    xs: 6,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontFamily: {
    handwriting: 'Caveat_400Regular',
    handwritingBold: 'Caveat_700Bold',
  },
} as const;

export type Theme = typeof theme;
