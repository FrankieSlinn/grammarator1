// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    rules: {
      "no-unused-vars": "off", // change "error" → "warn" or "off"
      "@typescript-eslint/no-unused-vars": "warn", // if using TS
      "unused-imports/no-unused-imports": "off",
    },
  },
]);
