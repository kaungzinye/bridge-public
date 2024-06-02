// Import the JSON file directly
import jsonData from './M3.json';

// Extract themes
const lightTheme = jsonData.schemes.light;
const darkTheme = jsonData.schemes.dark;

// Export the themes
export {
  lightTheme,
  darkTheme,
  jsonData // Export the entire JSON data if needed
};
