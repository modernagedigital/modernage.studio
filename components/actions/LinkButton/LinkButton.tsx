import Link from "next/link";
import tw from "twin.macro";
import { styled, darkTheme } from "styles/stitches.config";
import { useRef, forwardRef } from "react";

const StyledButton = styled("a", {
    ...tw`block width[max-content]`,
    background: "$blue10",
    fontFamily: "$display",
    color: "white",
    lineHeight: "$tight",
    paddingInline: "$2xs",
    display: "inline-flex",
    width: "max-content",
    alignItems: "center",

    "&:hover": {
        background: "$blue9",
    },

    [`.${darkTheme} &`]: {
        background: "$blue9",

        "&:hover": {
            background: "$blue10",
        },
    },

    variants: {
        size: {
            medium: {
                fontSize: "$0",
                height: "2.5rem", // 40px
                borderRadius: "$sm",
            },
            large: {
                fontSize: "$2",
                paddingInline: "$xs",
                minHeight: "$space$2xl", // 64px
                borderRadius: "$md",
            },
        },
    },
});

type LinkButtonProps = {
    href: string;
    isExternal?: boolean;
    size?: "large" | "medium";
    children: React.ReactNode;
    ref: any;
};

export const LinkButton = forwardRef((props: LinkButtonProps, ref: any) => {
    const { href, isExternal, size, children } = props;
    const external: any = isExternal ? "_blank" : false;
    return (
        <Link href={href} passHref>
            <StyledButton target={external} size={size} ref={ref}>
                {children}
            </StyledButton>
        </Link>
    );
});

LinkButton.defaultProps = {
    children: "I am StyledButton, bitch",
    size: "medium",
};
