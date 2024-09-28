import globals from "globals";
import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier"; // Prettier plugin
import configPrettier from "eslint-config-prettier"; // Prettier config

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: pluginPrettier, // Add Prettier as a plugin
    },
    rules: {
      // Custom ESLint rules
      semi: ["error", "always"], // Require semicolons
      quotes: ["error", "double"], // Enforce double quotes
      "no-console": "warn", // Warn when using console.log

      // Prettier rule to check formatting issues
      "prettier/prettier": "error", // Prettier issues will be flagged as ESLint errors
    },
  },
  pluginJs.configs.recommended, // Recommended ESLint rules
  configPrettier, // Disable ESLint rules conflicting with Prettier
];
