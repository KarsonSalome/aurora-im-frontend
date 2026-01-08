/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
            colors: {
                // blue: "#0000FF",
                blue1: "#1FA2FF",
                blue2: "#A2FECD",
                yellow1: "#F59D08",
                yellow2: "#F7AE29",
                grey1: "rgba(217, 217, 217, 0.38)",
                grey2: "rgba(217, 217, 217, 0.72)",
                white1: "#F2F3F3",
                mainblack: "#131419",
                hoverblack: "#262729",
                warnred: "#F04940"
            },
        },
    },
    plugins: [],
});