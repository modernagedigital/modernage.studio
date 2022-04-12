import Link from "next/link";
import tw from "twin.macro";
import { styled, darkTheme, keyframes } from "styles/stitches.config";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { indigoA, indigoDark, indigoDarkA } from "@radix-ui/colors";
import { useState } from "react";
import burgerBg from "assets/images/burger-bg.png";

// burger icon
const StyledBurgerIcon = styled("button", {
    position: "relative",
    width: 48,
    height: 48,
    zIndex: 1000,
    alignSelf: "center",
    backgroundSize: "100%",
    "@sm": {
        display: "none",
    },
    rect: {
        fill: "$indigo12",
        transition: "fill 0.25s ease",
    },
    ".x-left, .x-right": {
        transformOrigin: "50% 50%",
        transition: "transform 0.25s ease",
    },

    ".rest": {
        opacity: 1,
        transition: "opacity 0.125s ease",
    },

    variants: {
        active: {
            true: {
                ".x-left": {
                    transform: "rotate(45deg) translate(-6px, 6px)",
                    width: 24,
                },
                ".x-right": {
                    transform: "rotate(-45deg) translate(0, -1px)",
                },
                ".rest": {
                    opacity: 0,
                },
                rect: {
                    fill: "white",
                },
            },
        },
    },
});

type BurgerIconProps = {
    onClick: any;
    isActive: any;
};

const BurgerIcon = (props: BurgerIconProps) => {
    const { onClick, isActive } = props;
    return (
        <StyledBurgerIcon
            onClick={onClick}
            active={isActive}
            aria-label="Open the menu"
        >
            <svg
                aria-hidden="true"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    className="x-left"
                    x="18"
                    y="16"
                    width="18"
                    height="3"
                    rx="1.5"
                    fill="black"
                />
                <rect
                    className="x-right"
                    x="12"
                    y="23"
                    width="24"
                    height="3"
                    rx="1.5"
                    fill="black"
                />
                <rect
                    className="rest"
                    x="23"
                    y="30"
                    width="13"
                    height="3"
                    rx="1.5"
                    fill="black"
                />
            </svg>
        </StyledBurgerIcon>
    );
};

// Home menu Icon
const StyledHomeIcon = styled("div", {
    position: "relative",
    width: 24,
    ".label": {
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        overflow: "hidden",
        height: 1,
        whiteSpace: "nowrap",
        width: 1,
    },
    svg: {
        position: "absolute",
        height: 24,
        left: "50%",
        top: -1,
        transform: "translateX(-50%)",
    },
    path: {
        fill: "white",
        "@sm": {
            fill: "$indigo12",
        },
    },
});

const HomeIcon = (props: any) => {
    return (
        <StyledHomeIcon>
            <span className="label">Home</span>
            <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 96 96"
            >
                <path
                    d="M50.87 12.573c.91.378 1.738.933 2.434 1.632l29.013 30.061A6 6 0 0 1 84 48.433v26.536a9.047 9.047 0 0 1-2.636 6.386A8.985 8.985 0 0 1 75 84H63a4 4 0 0 1-4-4v-7c0-6.075-4.925-11-11-11s-11 4.925-11 11v7a4 4 0 0 1-4 4H21a8.985 8.985 0 0 1-6.364-2.645A9.047 9.047 0 0 1 12 74.969V48.433a6 6 0 0 1 1.683-4.167l29.013-30.061A7.497 7.497 0 0 1 48 12c.985 0 1.96.195 2.87.573Z"
                    fill="#000"
                />
            </svg>
        </StyledHomeIcon>
    );
};

const slideIn = keyframes({
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" },
});

const slideOut = keyframes({
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(100%)" },
});

const StyledLogo = styled("div", {
    zIndex: 10,
    fontSize: "$3",
    fontFamily: "$display",
    lineHeight: "$tighter",
    letterSpacing: "-0.02em",
    color: "$indigo12",

    span: {
        color: "$blue11",
    },
});

const StyledLink = styled(NavigationMenu.Link, {
    ...tw`block width[max-content] p-4xs`,
    color: "inherit",
    fontSize: "$0",
    letterSpacing: "-0.015em",

    "@md": {
        fontSize: "$0",
    },
});

const StyledNav = styled(NavigationMenu.Root, {
    ...tw`fixed inset-0 z-50 p-s-m`,
    left: "auto",
    width: "clamp(240px, 80vw, 380px)",
    background: indigoA.indigoA12,
    color: "white",
    height: "100vh",
    fontWeight: 600,
    backdropFilter: "blur(5px)",
    "-webkit-backdrop-filter": "blur(5px)",
    transform: "translateX(100%)",

    [`.${darkTheme} &`]: {
        background: "rgba(19, 22, 32, 0.97)",
    },

    "@sm": {
        ...tw`p-0 w-auto h-auto static`,
        background: "none",
        backdropFilter: "none",
        "-webkit-backdrop-filter": "none",
        color: "$indigo12",
        width: "auto",
        height: "auto",
        padding: 0,
        transform: "translateX(0)",

        [`.${darkTheme} &`]: {
            background: "none",
        },
    },

    variants: {
        menuState: {
            visible: {
                animation: `${slideIn} 200ms`,
                animationFillMode: "forwards",
            },
            hidden: {
                animationFillMode: "forwards",
                animation: `${slideOut} 200ms`,
            },
        },
    },
});

const StyledList = styled(NavigationMenu.List, {
    ...tw`space-y-3xs`,
    "@sm": {
        ...tw`space-y-0`,
        display: "flex",
        gap: "$5xs",
    },
    "@md": {
        gap: "$3xs",
    },
});

type NavMenuProps = {
    menuState: any;
};

const NavMenu = (props: NavMenuProps) => {
    const { menuState } = props;
    return (
        <StyledNav menuState={menuState}>
            <StyledList>
                <NavigationMenu.Item>
                    <Link href="/" passHref>
                        <StyledLink>
                            <HomeIcon />
                        </StyledLink>
                    </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link href="/about" passHref>
                        <StyledLink>About</StyledLink>
                    </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link href="/design-systems" passHref>
                        <StyledLink>Design systems</StyledLink>
                    </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link href="/case-studies" passHref>
                        <StyledLink>Case studies</StyledLink>
                    </Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <Link href="/contact" passHref>
                        <StyledLink>Contact</StyledLink>
                    </Link>
                </NavigationMenu.Item>
            </StyledList>
        </StyledNav>
    );
};

const StyledHeader = styled("header", {
    ...tw`flex justify-between items-center fixed left-0 right-0 z-30 px-xs pr-5xs`,

    "@sm": {
        alignItems: "baseline",
        paddingTop: "$4xs",
        paddingInline: "$section-padding",
        height: "$space$2xl",
    },

    "&::before": {
        ...tw`absolute inset-0 content block`,
        transition: "opacity 0.5s ease",
        background: "rgba(253, 253, 254, 0.8)",
        backdropFilter: "blur(4px)",
        opacity: 0,

        [`.${darkTheme} &`]: {
            background: "rgba(21, 25, 45, 0.9)",
        },
    },

    variants: {
        navBacking: {
            true: {
                "&::before": {
                    opacity: 1,
                },
            },
        },
    },
});

export const NavBar = (props: any) => {
    const { burgerClick, navBacking } = props;
    const [navActive, updateNavActive] = useState("");
    return (
        <StyledHeader navBacking={navBacking}>
            <StyledLogo>
                Modern Age <span>Studio</span>
            </StyledLogo>
            <BurgerIcon
                isActive={navActive === "visible"}
                onClick={() => {
                    updateNavActive(
                        !navActive || navActive === "hidden"
                            ? "visible"
                            : "hidden"
                    );
                }}
            />

            <NavMenu menuState={navActive} />
        </StyledHeader>
    );
};
