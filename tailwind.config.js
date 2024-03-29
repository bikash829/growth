/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "5%",
      screens: {
        DEFAULT: "90%",
        sm: "92%",
        lg: "75rem",
      },
    },
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "custom-xs": "0.625rem", // 10px
        "custom-base": "0.75rem", // 12px
        "custom-sm": "0.875rem", // 14px
        "custom-md": "1rem", // 16px
        "custom-lg": "1.125rem", // 18px
        "custom-3lg": "22px", // 22px
        "custom-xl": "1.5rem", // 24px
        "custom-2xl": "1.75rem", // 28px
        "custom-3xl": "2.125rem", // 34px
        "custom-4xl": "2.25rem", // 36px
        "custom-5xl": "42px", // 42px
        "custom-6xl": "3.125rem", // 50px
        "custom-7xl": "3.625rem", // 58px
        "custom-8xl": "4.125rem", // 66px
        "custom-9xl": "4.625rem", // 74px
      },
      colors: {
        site: {
          white: "rgb(255, 255, 255)",
          blue: "rgb(67, 67, 237)",
          dark: "rgb(17, 17, 17)",
          lightdark: "rgb(31, 31, 31)",
          lightdark_brighter: "rgba(40, 40, 40)",
          transparent_white: "rgba(255, 255, 255, 0.12)",
          transparent_light_white: "rgba(255, 255, 255, 0.5)",
          transparent_semi_white: "rgba(255, 255, 255, 0.08)",
          border_blue: "rgb(67, 67, 237)",
          transparent_blue: "rgba(67, 67, 237, 0.2)",
        },
      },
      spacing: {
        80: "20rem",
      },
    },
  },
  plugins: [],
};
