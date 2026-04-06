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
        },
    },
    plugins: [],
};

export default config;