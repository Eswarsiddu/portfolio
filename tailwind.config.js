/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        rotateImage: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(0deg)" },
          "26%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(90deg)" },
          "51%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(180deg)" },
          "76%": { transform: "rotate(270deg)" },
          "99%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        handWave: {
          "0%": { transform: "rotate(15deg)" },
          // "25%": { transform: "rotate(0deg)" },
          // "26%": { transform: "rotate(30deg)" },
          // "25%": { transform: "rotate(30deg)" },
          "50%": { transform: "rotate(-10deg)" },
          // "75%": { transform: "rotate(-30deg)" },
          // "76%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(15deg)" },
        },
        borderBackground: {
          "0%": { borderBottom: "1px" },
        },
        moveBox: {
          "0%": {
            transform: "translateX(0)",
            // transform: "rotate(0deg)",
            left: "0",
            top: "0",
          },
          "25%": {
            transform: "translateX(-100%)",
            // transform: "rotate(90deg)",
            left: "99.5%",
            top: "0",
          },
          "50%": {
            transform: "translate(-100%,-100%)",
            // transform: "rotate(180deg)",
            left: "99.5%",
            top: "100%",
          },
          "75%": { transform: "translateY(-100%)", left: "0", top: "100%" },
          "100%": { transform: "translateX(0)", left: "0", top: "0" },
        },
        bgChangeKF: {
          // "0%": { backgroundColor: "#1A1A1A" },
          "0%": { backgroundImage: "linear-gradient(0deg, #1A1A1A, #ffffff)" },
          "12.5%": {
            backgroundImage: "linear-gradient(45deg, #1A1A1A, #ffffff)",
          },
          "25%": {
            backgroundImage: "linear-gradient(90deg, #1A1A1A, #ffffff)",
          },
          "50%": {
            backgroundImage: "linear-gradient(180deg, #1A1A1A, #ffffff)",
          },
          "75%": {
            backgroundImage: "linear-gradient(270deg, #1A1A1A, #ffffff)",
          },
          // "20%": { backgroundColor: "#ffffff" },
          // "40%": { backgroundColor: "#0D0D0D" },
          // "60%": { backgroundColor: "#1B1B1B" },
          // "80%": { backgroundColor: "#101010" },
          "100%": {
            backgroundImage: "linear-gradient(360deg, #1A1A1A, #ffffff)",
          },
          // "100%": { backgroundColor: "#1A1A1A" },
        },
        gradinetMove: {
          "0%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
          "100%": { backgroundPosition: "0% center" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        bgChange: "bgChangeKF 3s infinite",
        moveBox: "moveBox 5s ease-in-out infinite",
        rotateImage: "rotateImage 5s infinite",
        handWave: "handWave 1s infinite",
        gradinetMove: "gradinetMove 2s ease-int-out infinite",
      },
      fontFamily: {
        Poippins: ["Poppins", "sans-serif"],
        GaMaamli: ["Ga Maamli", "sans-serif"],
        Playwrite: ["Playwrite HR Lijeva", "cursive"],
      },
      // width: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1536px",
      // },
      // Monochrome elegance
      primary: "#1A1A1A",
      primaryaccent: "#FFD700",
      secondaryaccent: "#B8860B",
      tprimary: "#FFFFFF",
      tsecondary: "#B0B0B0",

      // Monochrome elegance
      // "test-primary": "#1A1A1A",
      // "test-primary-accent": "#FFD700",
      // "test-secondary-accent": "#B8860B",
      // "test-text-primary": "#FFFFFF",
      // "test-text-secondary": "#B0B0B0",

      // Monochrome elegance
      // "test-primary": "#1A1A1A",
      // "test-primary-accent": "#FFD700",
      // "test-secondary-accent": "#B8860B",
      // "test-text-primary": "#FFFFFF",
      // "test-text-secondary": "#B0B0B0",

      // Monochrome elegance
      // "test-primary": "#1A1A1A",
      // "test-primary-accent": "#FFD700",
      // "test-secondary-accent": "#B8860B",
      // "test-text-primary": "#FFFFFF",
      // "test-text-secondary": "#B0B0B0",

      // Monochrome elegance
      // "test-primary": "#1A1A1A",
      // "test-primary-accent": "#FFD700",
      // "test-secondary-accent": "#B8860B",
      // "test-text-primary": "#FFFFFF",
      // "test-text-secondary": "#B0B0B0",

      "medium-red-violet": {
        50: "#fdf6fb",
        100: "#fbecf8",
        200: "#f7d7f1",
        300: "#efb8e2",
        400: "#e58dd0",
        500: "#d461b7",
        600: "#b34094",
        700: "#98337b",
        800: "#7c2c64",
        900: "#662952",
        950: "#421032",
      },
      pelorous: {
        50: "#edfefd",
        100: "#d2fbfa",
        200: "#abf6f4",
        300: "#72eeec",
        400: "#31dfdf",
        500: "#15c2c5",
        600: "#16a8b2",
        700: "#187d86",
        800: "#1c656e",
        900: "#1c535d",
        950: "#0c3840",
      },
      "tree-poppy": {
        50: "#fff8eb",
        100: "#fde9c8",
        200: "#fbd38c",
        300: "#f9b650",
        400: "#f79c28",
        500: "#f1790f",
        600: "#d5560a",
        700: "#b1390c",
        800: "#902c10",
        900: "#762611",
        950: "#441004",
      },
      lochmara: {
        50: "#f2f8fd",
        100: "#e3effb",
        200: "#c2dff5",
        300: "#8bc4ee",
        400: "#4ea6e2",
        500: "#2584c6",
        600: "#186eb1",
        700: "#15588f",
        800: "#154b77",
        900: "#173f63",
        950: "#0f2942",
      },
    },
  },
  plugins: [],
};
