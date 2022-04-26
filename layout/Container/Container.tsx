import { styled } from "styles/stitches.config";

export const Container = styled("div", {
    "--side-padding": "0px",
    width: "100%",
    maxWidth: "calc($lg + var(--side-padding))",
    paddingInline: "var(--side-padding)",
    margin: "0 auto",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: "$space$m",

    variants: {
        gridBreak: {
            xs: {
                display: "grid",
            },
            sm: {
                "@sm": {
                    display: "grid",
                },
            },
            md: {
                "@md": {
                    display: "grid",
                },
            },
            lg: {
                "@lg": {
                    display: "grid",
                },
            },
        },
        padding: {
            tight: {
                "--side-padding": "$space$4xs-3xs",
            },
            medium: {
                "--side-padding": "var(--space-section-padding)",
            },
            loose: {
                "--side-padding": "$space$s-m",
            },
        },
    },
});
