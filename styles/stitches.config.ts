import {
    createStitches,
    createTheme,
    defaultThemeMap,
    CSS as StitchesCSS,
} from "@stitches/react";

import {
    slate,
    slateDark,
    slateA,
    blue,
    blueDark,
    indigo,
    indigoA,
    indigoDark,
    indigoDarkA,
    cyan,
    cyanDark,
    green,
    greenDark,
    red,
    redDark,
} from "@radix-ui/colors";

export type { CSS } from "@stitches/react/types/css-util";

export const stitches = createStitches({
    prefix: "",
    themeMap: {
        ...defaultThemeMap,
    },
    media: {
        xs: "(min-width: 0)",
        sm: "(min-width: 48rem)", // 768
        md: "(min-width: 64rem)", // 1024
        lg: "(min-width: 80rem)", // 1280
        xl: "(min-width: 90rem)", // 1440
    },
    theme: {
        colors: {
            primary: "blue",
            background: "white",
            white: "#fff",
            black: "#000",
            ...slate,
            ...slateA,
            ...blue,
            ...indigo,
            ...indigoA,
            ...cyan,
            ...green,
            ...red,
        },
        fonts: {
            displayLarge: "degular-display",
            display: "degular, sans-serif",
            text: "'Inter', sans-serif",
        },
        fontWeights: {
            standard: 400,
            heavy: 700,
        },
        lineHeights: {
            tightest: "1em",
            tighter: "1.1em",
            tight: "1.2em",
            normal: "1.5em",
            loose: "1.6em",
        },
        radii: {
            xs: "0.125rem",
            sm: "$space$5xs", // 4px ish
            md: "$space$4xs", // 8px ish
            lg: "$space$3xs", // 12px ish
            xl: "$space$2xs", // 16px ish
            rounded: "999rem", // a lot
        },
        space: {
            // base scale
            "5xs": "clamp(0.19rem, calc(0.17rem + 0.10vw), 0.25rem)", // 4px
            "4xs": "clamp(0.38rem, calc(0.33rem + 0.21vw), 0.50rem)", // 8px
            "3xs": "clamp(0.56rem, calc(0.50rem + 0.31vw), 0.75rem)", // 12px
            "2xs": "clamp(0.75rem, calc(0.67rem + 0.42vw), 1.00rem)", // 16px
            xs: "clamp(1.13rem, calc(1.00rem + 0.63vw), 1.50rem)", // 24px
            s: "clamp(1.50rem, calc(1.33rem + 0.83vw), 2.00rem)", // 32px
            m: "clamp(1.88rem, calc(1.67rem + 1.04vw), 2.50rem)", // 40px
            l: "clamp(2.25rem, calc(2.00rem + 1.25vw), 3.00rem)", // 48px
            xl: "clamp(2.63rem, calc(2.33rem + 1.46vw), 3.50rem)", // 56px
            "2xl": "clamp(3.00rem, calc(2.67rem + 1.67vw), 4.00rem)", // 64px
            "3xl": "clamp(3.38rem, calc(3.00rem + 1.88vw), 4.50rem)", // 72px
            "4xl": "clamp(3.75rem, calc(3.33rem + 2.08vw), 5.00rem)", // 80px
            "5xl": "clamp(4.13rem, calc(3.67rem + 2.29vw), 5.50rem)", // 88px
            "6xl": "clamp(4.50rem, calc(4.00rem + 2.50vw), 6.00rem)", // 96px

            // One-up scales
            "5xs-4xs": "clamp(0.19rem, calc(0.08rem + 0.52vw), 0.50rem)",
            "4xs-3xs": "clamp(0.38rem, calc(0.25rem + 0.63vw), 0.75rem)",
            "3xs-2xs": "clamp(0.56rem, calc(0.42rem + 0.73vw), 1.00rem)",
            "2xs-xs": "clamp(0.75rem, calc(0.50rem + 1.25vw), 1.50rem)",
            "xs-s": "clamp(1.13rem, calc(0.83rem + 1.46vw), 2.00rem)",
            "s-m": "clamp(1.50rem, calc(1.17rem + 1.67vw), 2.50rem)",
            "m-l": "clamp(1.88rem, calc(1.50rem + 1.88vw), 3.00rem)",
            "l-xl": "clamp(2.25rem, calc(1.83rem + 2.08vw), 3.50rem)",
            "xl-2xl": "clamp(2.63rem, calc(2.17rem + 2.29vw), 4.00rem)",
            "2xl-3xl": "clamp(3.00rem, calc(2.50rem + 2.50vw), 4.50rem)",
            "3xl-4xl": "clamp(3.38rem, calc(2.83rem + 2.71vw), 5.00rem)",
            "4xl-5xl": "clamp(3.75rem, calc(3.17rem + 2.92vw), 5.50rem)",
            "5xl-6xl": "clamp(4.13rem, calc(3.50rem + 3.13vw), 6.00rem)",

            // Customs
            "section-padding": "$space$2xs-xs",
        },
        sizes: {
            micro: "20rem", // 320
            xsmall: "30rem", // 480
            small: "40rem", // 640
            medium: "60rem", // 960
            large: "80rem", // 1280
            xlarge: "90rem", // 1440
            max: "100rem",
        },
        fontSizes: {
            "-2": "0.75rem",
            "-1": "clamp(0.92rem, calc(0.88rem + 0.06vw), 0.89rem)",
            0: "clamp(1.00rem, calc(0.96rem + 0.21vw), 1.13rem)",
            1: "clamp(1.13rem, calc(1.04rem + 0.41vw), 1.37rem)",
            2: "clamp(1.27rem, calc(1.13rem + 0.68vw), 1.67rem)",
            3: "clamp(1.42rem, calc(1.22rem + 1.03vw), 2.04rem)",
            4: "clamp(1.60rem, calc(1.31rem + 1.48vw), 2.49rem)",
            5: "clamp(1.80rem, calc(1.39rem + 2.06vw), 3.04rem)",
            6: "clamp(2.03rem, calc(1.47rem + 2.80vw), 3.71rem)",
            7: "clamp(2.28rem, calc(1.53rem + 3.74vw), 4.53rem)",
        },
    },
    utils: {},
});

export const darkTheme = createTheme("dark", {
    colors: {
        background: "black",
        white: "#000",
        black: "#fff",
        ...slateDark,
        ...blueDark,
        ...indigoDark,
        ...indigoDarkA,
        ...cyanDark,
        ...greenDark,
        ...redDark,
    },
});

export const { css, styled, globalCss, theme, keyframes, getCssText } =
    stitches;
