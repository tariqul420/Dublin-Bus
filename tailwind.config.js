/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1dd100",
        secondary: "#030712",
        couponOne: "#ffbf0f",
        couponTwo: "#f78c9c",
        mobileMenu: "#f7f8f8",
        body: "#03071299",
        buttonColor: "rgba(29, 209, 0, 0.15)",
      },
      fontFamily: {
        RaleWay: "Raleway",
        Inter: "Inter",
      },
    },
  },
  plugins: [require("daisyui")],
};
