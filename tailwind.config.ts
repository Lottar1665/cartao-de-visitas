import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sun': "url('../../public/sun.png')",
        'moon': "url('../../public/moon.png')",
        'logo': "url('../../public/vinicius.jpg')",
        'logo3': "('../../public/logo3.png')",
        'mobile-image': "url('../../public/bg-mobile.jpg')",
        'mobile-image-light': "('../../public/bg-mobile-light.jpg')",
        'logo-light': "url('../../public/vinicius-logo2.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
