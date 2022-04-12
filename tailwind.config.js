/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            displayLarge: "var(--fonts-displayLarge)",
            display: "var(--fonts-display)",
            text: "var(--fonts-text)",
            sans: "var(--fonts-text)",
        },
        lineHeight: {
            DEFAULT: "var(--lineHeights-normal)",
            tightest: "var(--lineHeights-tightest)",
            tighter: "var(--lineHeights-tighter)",
            tight: "var(--lineHeights-tight)",
            normal: "var(--lineHeights-normal)",
            loose: "var(--lineHeights-loose)",
        },
        spacing: {
            // base scale
            0: "0rem",
            "5xs": "var(--space-5xs)",
            "4xs": "var(--space-4xs)",
            "3xs": "var(--space-3xs)",
            "2xs": "var(--space-2xs)",
            xs: "var(--space-xs)",
            s: "var(--space-s)",
            m: "var(--space-m)",
            l: "var(--space-l)",
            xl: "var(--space-xl)",
            "2xl": "var(--space-2xl)",
            "3xl": "var(--space-3xl)",
            "4xl": "var(--space-4xl)",
            "5xl": "var(--space-5xl)",
            "6xl": "var(--space-6xl)",

            // One-up
            "5xs-4xs": "var(--space-5xs-4xs)",
            "4xs-3xs": "var(--space-4xs-3xs)",
            "3xs-2xs": "var(--space-3xs-2xs)",
            "2xs-xs": "var(--space-2xs-xs)",
            "xs-s": "var(--space-xs-s)",
            "s-m": "var(--space-s-m)",
            "m-l": "var(--space-m-l)",
            "l-xl": "var(--space-l-xl)",
            "xl-2xl": "var(--space-xl-2xl)",
            "2xl-3xl": "var(--space-2xl-3xl)",
            "3xl-4xl": "var(--space-3xl-4xl)",
            "4xl-5xl": "var(--space-4xl-5xl)",
            "5xl-6xl": "var(--space-5xl-6xl)",
        },
        screens: {
            xs: "0",
            sm: "48rem", // 768
            md: "64rem", // 1024
            lg: "80rem", // 1280
            xl: "90rem", // 1440
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                ".text-hero": {
                    fontSize: "var(--fontSizes-7)",
                    lineHeight: "var(--lineHeights-tightest)",
                    fontFamily: "var(--fonts-displayLarge)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-headline": {
                    fontSize: "var(--fontSizes-6)",
                    lineHeight: "var(--lineHeights-tightest)",
                    fontFamily: "var(--fonts-displayLarge)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-title1": {
                    fontSize: "var(--fontSizes-5)",
                    lineHeight: "var(--lineHeights-tighter)",
                    fontFamily: "var(--fonts-displayLarge)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-title2": {
                    fontSize: "var(--fontSizes-4)",
                    lineHeight: "var(--lineHeights-tight)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-title3": {
                    fontSize: "var(--fontSizes-3)",
                    lineHeight: "var(--lineHeights-tight)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-heading": {
                    fontSize: "var(--fontSizes-2)",
                    lineHeight: "var(--lineHeights-tight)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-subhead": {
                    fontSize: "var(--fontSizes-1)",
                    fontFamily: "var(--fonts-display)",
                    fontWeight: "var(--fontWeights-heavy)",
                },
                ".text-body": {
                    fontSize: "var(--fontSizes-0)",
                    fontFamily: "var(--fonts-text)",
                },
                ".text-footnote": {
                    fontSize: "var(--fontSizes--1)",
                    fontFamily: "var(--fonts-text)",
                },
                ".text-micro": {
                    fontSize: "var(--fontSizes--2)",
                    fontFamily: "var(--fonts-text)",
                },
            });
        }),
    ],
};
