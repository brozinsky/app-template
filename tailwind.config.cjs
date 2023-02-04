/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            // padding: {
            //   DEFAULT: "1rem",
            //   sm: "2rem",
            //   lg: "4rem",
            //   xl: "5rem",
            //   "2xl": "6rem",
            // },
            screens: {
                sm: "600px",
                md: "728px",
                lg: "984px",
                xl: "1240px",
                "2xl": "1464px",
            },
        },
        extend: {
            colors: {
                primary: {
                    100: "#8dc6fb",
                    200: "#6ab4fa",
                    300: "#48a3f8",
                    400: "#2592f7",
                    500: "#1188f7",
                    600: "#066ecf",
                    700: "#055cac",
                    800: "#04498a",
                    900: "#033767",
                },
                dark: {
                    50: "#3A3A3A",
                    100: "#343434",
                    200: "#323232",
                    300: "#2C2C2C",
                    400: "#2C2C2C",
                    500: "#262626",
                    600: "#242424",
                    700: "#202020",
                    800: "#1C1C1C",
                    900: "#121212",
                },
            },
        },
    },
    plugins: [],
};
