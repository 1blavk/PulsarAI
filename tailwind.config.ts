import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#5565A1",
                income: "#6FAF4F",
                expense: "#C44A3A",
            },
            keyframes: {
                "slide-in-from-bottom": {
                    "0%": { transform: "translateY(100%)" },
                    "100%": { transform: "translateY(0)" }
                }
            },
            animation: {
                "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out"
            }
        },
    },
    plugins: [
        function ({ addUtilities }: any) {
            addUtilities({
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            });
        },
    ],
};

export default config;