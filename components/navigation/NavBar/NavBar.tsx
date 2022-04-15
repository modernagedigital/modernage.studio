import Link from "next/link";
import tw from "twin.macro";
import { styled, darkTheme, keyframes } from "styles/stitches.config";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Switch from "@radix-ui/react-switch";
import { indigoA } from "@radix-ui/colors";
import { useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import { useTheme } from "next-themes";
import SwitchBg from "assets/images/switch-bg.svg";
import SunIcon from "assets/images/sun.svg";
import MoonIcon from "assets/images/moon.svg";

const StyledSwitchRoot = styled(Switch.Root, {
    width: 48,
    height: 40,
    position: "relative",
    overflow: "hidden",
    marginTop: "$3xs",
    marginLeft: "$4xs",
    "@sm": {
        margin: 0,
    },
    "&::before": {
        ...tw`block content absolute rounded-full opacity-75`,
        top: 9,
        left: 1,
        width: 46,
        height: 22,

        zIndex: 15,
        backgroundImage: `url("${SwitchBg.src}")`,
        backgroundRepeat: "no-repeat",
        transition: "0.3s background-position ease",
        backgroundPosition: "-40px 0",
        backgroundSize: "88px 24px",
    },

    "&[data-state=checked]::before": {
        backgroundPosition: "0px 0",
    },

    "&:focus-visible": {
        outline: 0,

        div: {
            outline: "2px solid blue",
        },
    },
});

const StyledSwitchContainer = styled("div", {
    ...tw`absolute inset-y-[8px] inset-x-[0] rounded-full`,
    width: "100%",
    height: 24,
    background: "$blue8",
    border: "1px $slate8 solid",

    transition: "0.4s background-color ease, 0.4s border-color ease",

    "[data-state=checked] &": {
        border: "1px $indigo10 solid",
        background: "$indigo7",
    },

    "@sm": {
        background: "$blue3",
    },

    "&::before": {
        ...tw`block content inset-x-[1px] inset-y-[1px] absolute rounded-full`,
        background: "linear-gradient(90deg, #B8DBFF 0%, #78BEFF 100%)",
        opacity: 1,
        transition: "0.4s opacity ease",

        "[data-state=checked] &": {
            opacity: 0,
        },

        "@sm": {
            background: "linear-gradient(90deg, #DCEDFF 0%, #B5DBFF 100%)",
        },
    },

    "&::after": {
        ...tw`block content inset-x-[1px] inset-y-[1px] absolute rounded-full z-10`,
        background: "linear-gradient(90deg, #325DEE 0%, #AC51CC 100%)",
        opacity: 0,
        transition: "0.4s opacity ease",

        "[data-state=checked] &": {
            opacity: 1,
        },
    },
});

const StyledSwitchthumb = styled(Switch.Thumb, {
    ...tw`rounded-full absolute z-20`,
    border: "1px $blue1 solid",
    backgroundColor: "$blue2",
    boxShadow: "0px 1px 3px rgba(13, 56, 104, 0.22)",
    width: 18,
    height: 18,
    left: 3,
    top: 2,
    overflow: "hidden",
    transition:
        "0.4s transform ease, 0.4s background-color ease, 0.4s border-color ease",

    "[data-state=checked] &": {
        background: "$indigo12",
        borderColor: "white",
        transform: "translateX(23px) rotate(90deg)",
    },

    "&::before, &::after": {
        ...tw`content absolute block`,
        width: 12,
        height: 12,
        left: 2,
        top: 2,
        transition: "0.4s transform ease, 0.4s left ease",
    },

    // Sun
    "&::before": {
        background: `url(${SunIcon.src}) no-repeat center`,
        backgroundSize: "100%",
        transform: "rotate(45deg)",
    },

    // moon
    "&::after": {
        background: `url(${MoonIcon.src}) no-repeat center`,
        backgroundSize: "100%",
        transform: "rotate(-90deg)",
        left: -20,
    },

    "[data-state=checked] &::before": {
        left: 20,
        // transform: "rotate(0deg)",
    },
    "[data-state=checked] &::after": {
        left: 2,
        // transform: "rotate(0deg)",
    },
});

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

const StyledLogo = styled("a", {
    cursor: "pointer",
    display: "block",
    zIndex: 10,
    fontSize: "$3",
    fontFamily: "$display",
    lineHeight: "$tighter",
    letterSpacing: "-0.02em",
    color: "$indigo12",
    transition: "0.25s transform ease",

    span: {
        color: "$blue11",
    },
    ".menu-on &": {
        transform: "translateX(calc(var(--mobile-nav-width)* -1))",

        "@sm": {
            transform: "none",
        },
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

    variants: {
        active: {
            true: {
                color: "$blue6",

                "@sm": {
                    color: "$blue11",
                },
            },
        },
    },
});

const StyledNav = styled(NavigationMenu.Root, {
    ...tw`fixed inset-0 z-50 p-s-m sm:flex items-center gap-xs`,
    left: "auto",
    width: "var(--mobile-nav-width)",
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
                animation: `${slideIn} 250ms`,
                animationFillMode: "forwards",
            },
            hidden: {
                animationFillMode: "forwards",
                animation: `${slideOut} 250ms`,
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

    // Theming
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

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

            <StyledSwitchRoot
                checked={resolvedTheme === "dark"}
                onCheckedChange={() => {
                    setTheme(resolvedTheme === "dark" ? "light" : "dark");
                }}
            >
                <StyledSwitchContainer>
                    <StyledSwitchthumb />
                </StyledSwitchContainer>
            </StyledSwitchRoot>
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
    const { menuActive, onBurgerClick, onThemeToggle } = props;
    const [navActive, updateNavActive] = useState("");

    const [showNavBacking, updateShowNavBacking] = useState(false);

    // make nav backing show after scrolling 100px
    const { scrollY } = useViewportScroll();
    useEffect(() => {
        scrollY.onChange(() => {
            scrollY.get() >= 100
                ? updateShowNavBacking(true)
                : updateShowNavBacking(false);
            console.log(scrollY);
        });
    }, [scrollY]);

    return (
        <StyledHeader navBacking={showNavBacking}>
            <Link href="/" passHref>
                <StyledLogo>
                    Modern Age <span>Studio</span>
                </StyledLogo>
            </Link>
            <BurgerIcon
                isActive={navActive === "visible"}
                onClick={() => {
                    // updateNavActive(
                    //     !navActive || navActive === "hidden"
                    //         ? "visible"
                    //         : "hidden"
                    // );
                    if (!navActive || navActive === "hidden") {
                        document
                            .querySelector("body")
                            ?.classList.add("menu-on");
                        updateNavActive("visible");
                    } else {
                        document
                            .querySelector("body")
                            ?.classList.remove("menu-on");
                        updateNavActive("hidden");
                    }
                }}
            />

            <NavMenu menuState={navActive} />
        </StyledHeader>
    );
};
