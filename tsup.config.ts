import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/components/ui/Input.tsx"],
  minify: true,
  sourcemap: false,
});
