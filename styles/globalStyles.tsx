// styles/globalStyles.tsx
import tw, { theme, globalStyles } from "twin.macro";
import { globalCss } from "./stitches.config";

const customStyles = {
    ":root": {
        "--mobile-nav-width": "clamp(240px, 80vw, 380px)",
    },
    body: {
        ...tw`antialiased`,
        fontSize: "var(--fontSizes-0)",
        lineHeight: "var(--lineHeights-normal)",
        background: "var(--colors-indigo1)",

        "&.menu-on": {
            height: "100vh",
            overflow: "hidden",
            "@sm": {
                height: "auto",
                overflow: "auto",
                transform: "none",
            },
        },
    },

    ".site-wrapper": {
        transition: "0.25s transform ease",
        transform: "translateX(0px)",
        ".menu-on &": {
            transform: "translateX(calc(var(--mobile-nav-width)* -1))",
            "@sm": {
                transform: "none",
            },
        },
    },

    "h1, h2, h3, h4, h5, h6": {
        margin: 0,
    },
};

const styles = () => {
    globalCss(customStyles)();
    globalCss(globalStyles as Record<any, any>)();
};

export default styles;
