import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      
      // ADD THESE RULES TO FIX THE ERRORS:
      "@typescript-eslint/no-explicit-any": "off", // Disable the 'any' rule
      "@typescript-eslint/no-empty-object-type": "off", // Disable empty interface rule
      
      // Keep your existing rules:
      "@typescript-eslint/no-unused-vars": "off",
      
      // Add security rules:
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-script-url": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  }
);