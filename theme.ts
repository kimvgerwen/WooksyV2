// theme.ts
import { TextStyle } from 'react-native';
import { MD3LightTheme } from 'react-native-paper';

export const colors = {
  white: '#FFF',
  lightPink: '#F8F2F6', // fixed missing '#'
  pink: '#F93D78',
  purple: '#EFCDFF',
  placeholder: '#ACACAC',
  black: '#3D3D3D',
  orange: '#F89577',
  coral: '#FFCEDD',
  gradient: ['#F93D78', '#F89577'] as const,
} as const;

export const radius = { sm: 8, md: 12, lg: 20, button: 50 };

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Using a single variable font family "Quicksand" and specifying weight via fontWeight strings.
export const typography: { [key: string]: TextStyle } = {
  splash: { fontSize: 36, fontWeight: '700', fontFamily: 'Quicksand' },
  h1: { fontSize: 24, fontWeight: '700', fontFamily: 'Quicksand' },
  h2: { fontSize: 20, fontWeight: '600', fontFamily: 'Quicksand' },
  h3: { fontSize: 18, fontWeight: '500', fontFamily: 'Quicksand' },

  bodyFat: { fontSize: 16, fontWeight: '500', fontFamily: 'Quicksand' },
  bodyL: { fontSize: 16, fontWeight: '400', fontFamily: 'Quicksand' },
  bodyS: { fontSize: 14, fontWeight: '400', fontFamily: 'Quicksand' },

  button: { fontSize: 16, fontWeight: '600', fontFamily: 'Quicksand' },
  helper: { fontSize: 12, fontWeight: '400', fontFamily: 'Quicksand' },
};

export const effects = {
  shadow: {
    shadowColor: '#7C0E30',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
};

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.pink,
    secondary: colors.orange,
    background: colors.white,
    surface: colors.lightPink,
    onSurface: colors.placeholder,
    onSurfaceVariant: colors.pink,
    placeholder: colors.placeholder,
    elevation: {
      ...MD3LightTheme.colors.elevation,
      level3: colors.lightPink,
    },
  },
};
