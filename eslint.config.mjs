import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Custom rules
      "semi": ["error", "always"],   // Require semicolons
      "quotes": ["error", "double"], // Enforce double quotes
      "no-console": "warn",          // Warn when using console.log
    },
  },
  pluginJs.configs.recommended,
];
