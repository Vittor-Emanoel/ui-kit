import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/utils.ts",
    "tailwind.config.ts",
    "src/styles/index.css",
  ],
  // entry: {
  //   index: "src/index.ts",
  //   utils: "src/utils.ts",
  //   "tailwind-preset": "tailwind.config.ts",
  //   styles: "src/styles/index.css",
  // },
  outDir: "dist",
  minify: true,
  format: ["cjs", "esm"],
  sourcemap: false,
  clean: true,
  dts: true,
  tsconfig: "tsconfig.build.json",
});
