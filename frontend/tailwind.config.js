const colors = require("tailwindcss/colors")

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            "sans": ["Inter"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            base: {
                100: "#faf7f5",
                200: "#efeae6",
                300: "#e7e2df",
                400: "#dcd6d0",
                500: "#cfc9c1",
                600: "#c4bdb2",
                700: "#b9b1a3",
                800: "#aea494",
                900: "#a39785",
                content: "#2f2f2f",
                dark: {
                    100: "#222222",
                    200: "#2f2f2f",
                    300: "#3a3a3a",
                    400: "#464646",
                    500: "#4f4f4f",
                    600: "#5a5a5a",
                    700: "#666666",
                    800: "#727272",
                    900: "#7e7e7e",
                    content: "#a6adba",
                },
            },
            primary: "#ef9fbc",
            secondary: "#65c3c8",
            tertiary: "#eeaf3a",
            neutral: "#471f2c",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            orange: colors.orange,
            lime: colors.lime,
        },
        minHeight: {
            "2": "0.5rem",
            "4": "1rem",
            "6": "1.5rem",
            "8": "2rem",
            "10": "2.5rem",
            "12": "3rem",
            "14": "3.5rem",
            "16": "4rem",
            "18": "4.5rem",
            "20": "5rem",
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-gradient-mask-image"),
    ],
    darkMode: "class",
}
