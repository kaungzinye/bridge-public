
// src/styles/tailwind.config.js
const colorSchemes = require('./M3.json');

const lightScheme = colorSchemes.schemes.light;
const darkScheme = colorSchemes.schemes.dark;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './App.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: lightScheme.primary,
        onPrimary: lightScheme.onPrimary,
        primaryContainer: lightScheme.primaryContainer,
        onPrimaryContainer: lightScheme.onPrimaryContainer,
        secondary: lightScheme.secondary,
        onSecondary: lightScheme.onSecondary,
        secondaryContainer: lightScheme.secondaryContainer,
        onSecondaryContainer: lightScheme.onSecondaryContainer,
        tertiary: lightScheme.tertiary,
        onTertiary: lightScheme.onTertiary,
        tertiaryContainer: lightScheme.tertiaryContainer,
        onTertiaryContainer: lightScheme.onTertiaryContainer,
        error: lightScheme.error,
        onError: lightScheme.onError,
        errorContainer: lightScheme.errorContainer,
        onErrorContainer: lightScheme.onErrorContainer,
        background: lightScheme.background,
        onBackground: lightScheme.onBackground,
        surface: lightScheme.surface,
        onSurface: lightScheme.onSurface,
        surfaceVariant: lightScheme.surfaceVariant,
        onSurfaceVariant: lightScheme.onSurfaceVariant,
        outline: lightScheme.outline,
        outlineVariant: lightScheme.outlineVariant,
      },
    },
  },
  plugins: [],
};

