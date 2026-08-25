import {defineConfig} from "eslint/config";
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import vue from "eslint-plugin-vue";
import globals from "globals";

export default defineConfig([
  {
    ignores: [
      "dist",
      "docs/.vitepress/dist",
      "docs/.vitepress/cache",
      "docs/components",
      "**/components.d.ts",
    ],
  },
  {
    files: ["**/*.js", "**/*.vue"],
    plugins: {prettier, vue},
    extends: [js.configs.recommended, prettierConfig, vue.configs["flat/essential"]],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "prettier/prettier": ["error", {endOfLine: "auto"}],
    },
  },
  {
    files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
