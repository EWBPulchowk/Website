import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Determine the current file's directory name (works with ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat with the base directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Create the ESLint configuration
const eslintConfig = [
  ...compat.config({
  extends: [
    'next'
  ],
  rules: {
    // Custom rules configuration
    'react/no-unescaped-entities': 'off', // Disable the rule for unescaped entities in JSX
    '@next/next/no-page-custom-font': 'off', // Disable Next.js rule for custom fonts in pages
    '@typescript-eslint/no-unused-vars': 'off', // Disable the rule for unused variables
    '@typescript-eslint/no-explicit-any': 'off', // Disable the rule for empty functions
    
  },
})];

export default eslintConfig;
