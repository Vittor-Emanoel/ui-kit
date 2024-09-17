import type { Config } from "tailwindcss";
import preset from "uiii-kit/tailwind-preset";

export const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  presets: [preset],
} satisfies Config;

export default config;
