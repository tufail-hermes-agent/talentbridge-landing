import Module from "node:module";
import { createRequire } from "node:module";

// typescript-eslint (pulled in by eslint-config-next) refuses to load against
// TypeScript 7, which does not ship a JavaScript compiler API yet.
// See https://github.com/typescript-eslint/typescript-eslint/issues/10940.
// Point its `typescript` import at the TypeScript 6 API published for this
// transition. `tsc` and `next build` still type check with TypeScript 7.
const require = createRequire(import.meta.url);
const typescript6Entry = require.resolve("@typescript/typescript6");
const resolveFilename = Module._resolveFilename;

Module._resolveFilename = function patchedResolveFilename(request, ...args) {
  if (request === "typescript") {
    return typescript6Entry;
  }
  if (request.startsWith("typescript/")) {
    return resolveFilename.call(
      this,
      request.replace("typescript/", "@typescript/typescript6/"),
      ...args,
    );
  }
  return resolveFilename.call(this, request, ...args);
};

const { defineConfig, globalIgnores } = await import("eslint/config");
const { default: nextVitals } = await import(
  "eslint-config-next/core-web-vitals"
);
const { default: nextTs } = await import("eslint-config-next/typescript");

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
