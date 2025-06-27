import globals from "globals";
import * as test from "node:test";
import { defineConfig } from "eslint/config";

export default defineConfig({
  root: true,
  extends: ["eslint:recommended", "typescript-eslint/recommended", "prettier"],
  parser: "typescript-eslint/parser",
  plugins: ["typescript-eslint"],
  rules: {
    "typescript-eslint/no-unused-vars": "warn",
    "typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
  languageOptions: {
    ecmaVersion: 2025,
    sourceType: "module",
    globals: globals.node,
  },
});
