const breakpointValues = {
    xs: "0",
    sm: "48rem", // 768
    md: "64rem", // 1024
    lg: "80rem", // 1280
    xl: "90rem", // 1440

    // Sub Breakpoints:
    xs2: "30rem", // 480px
    xs3: "37.5rem", // 600px

    sm2: "52.5rem", // 840px
    sm3: "60rem", // 960px

    md2: "71.25rem", // 1140px
    md3: "75rem", // 1200px

    lg2: "82.5rem", // 1320px
    lg3: "87.5rem", // 1400px

    xl2: "100rem", // 1600px
    xl3: "120rem", // 1920px
};

const breakpoints = {
    xs: `(min-width: ${breakpointValues.xs})`,
    sm: `(min-width: ${breakpointValues.sm})`, // 768
    md: `(min-width: ${breakpointValues.md})`, // 1024
    lg: `(min-width: ${breakpointValues.lg})`, // 1280
    xl: `(min-width: ${breakpointValues.xl})`, // 1440

    // Sub Breakpoints:
    xs2: `(min-width: ${breakpointValues.xs2})`, // 480px
    xs3: `(min-width: ${breakpointValues.xs3})`, // 600px

    sm2: `(min-width: ${breakpointValues.sm2})`, // 840px
    sm3: `(min-width: ${breakpointValues.sm3})`, // 960px

    md2: `(min-width: ${breakpointValues.md2})`, // 1140px
    md3: `(min-width: ${breakpointValues.md3})`, // 1200px

    lg2: `(min-width: ${breakpointValues.lg2})`, // 1320px
    lg3: `(min-width: ${breakpointValues.lg3})`, // 1400px

    xl2: `(min-width: ${breakpointValues.xl2})`, // 1600px
    xl3: `(min-width: ${breakpointValues.xl3})`, // 1920px
};

module.exports = {
    breakpoints,
    breakpointValues,
    default: breakpointValues,
};
