import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Disable unused vars warning
      "@typescript-eslint/no-unused-vars": "off",

      // Disable unescaped entities in JSX
      "react/no-unescaped-entities": "off",

      // Disable warning about using <img> instead of next/image
      "@next/next/no-img-element": "off",

      // Disable alt text requirement for <img>
      "jsx-a11y/alt-text": "off",
    },
  },
];

export default eslintConfig;
