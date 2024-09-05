import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/utils.ts"],
  outDir: "dist",
  minify: true,
  format: ["cjs", "esm"],
  sourcemap: false,
  clean: true,
  dts: true,
  tsconfig: "tsconfig.build.json",
});
