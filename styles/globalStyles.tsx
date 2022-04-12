// styles/globalStyles.tsx
import tw, { theme, globalStyles } from "twin.macro";
import { globalCss } from "./stitches.config";

const customStyles = {
    body: {
        ...tw`antialiased`,
        fontSize: "var(--fontSizes-0)",
        lineHeight: "var(--lineHeights-normal)",
        background: "var(--colors-indigo1)",
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
