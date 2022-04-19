import { styled, darkTheme, keyframes } from "styles/stitches.config";
import { Container } from "layout";
import { HeadingLockup, CodeCard } from "components";
import { MagicSVG } from "./assets/MagicSVG";
import tw from "twin.macro";
import { blueDark } from "@radix-ui/colors";
import {
    CodeLogo_Framer,
    CodeLogo_Static,
    CodeLogo_Next,
    CodeLogo_React,
    CodeLogo_Stencil,
    CodeLogo_Webflow,
    CodeLogo_WordPress,
} from "./assets/CodeLogos";
import { CodeGraphic } from "./assets/CodeGraphic";

const StyledChevron = styled("svg", {
    ...tw`absolute height[53px] left[50%]`,
    transform: "translate(-50%, -31px)",
    zIndex: 0,
});

const StyledSection = styled("section", {
    position: "relative",
});

const Chevron = (props: any) => {
    const {} = props;
    return (
        <StyledChevron
            aria-hidden
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 54"
        >
            <path
                d="M120 0H0v31h30.4a16 16 0 0 1 11.3 4.7l16.5 16.5a4 4 0 0 0 5.6 0l16.5-16.5c3-3 7-4.7 11.3-4.7H120V0Z"
                fill="#0D3868"
            />
        </StyledChevron>
    );
};

const StyledInnerTop = styled("div", {
    paddingInline: "$section-padding",
    background: blueDark.blue6,
    gap: "$2xl",
    display: "grid",
    placeItems: "center",
    paddingTop: "$6xl",
    paddingBottom: "$xl",
    position: "relative",
    overflow: "hidden",
    zIndex: 10,
    "&::before": {
        ...tw`content block absolute right-0`,
        width: "80%",
        aspectRatio: "1",
        background:
            "radial-gradient(92.51% 105.83% at 78.44% 24.19%, #1558A4 0%, rgba(17, 76, 142, 0) 56.37%)",
        top: 0,
        right: 0,
    },

    "@sm": {
        height: "clamp(700px, 90vh, 860px)",
    },
});

const StyledInnerBottom = styled("div", {
    background: "$blue3",
    paddingInline: "$section-padding",
    paddingBlock: "$3xl",
});

const wiggleWand = keyframes({
    "0%": {
        transform: "rotate(0deg) translate(0,0)",
    },
    "10%": {
        transform: "rotate(-15deg) translate(-10px,-10px)",
    },
    "20%": {
        transform: "rotate(0deg) translate(0,0)",
    },
    "30%": {
        transform: "rotate(-15deg) translate(-10px,-10px)",
    },
    "40%": {
        transform: "rotate(0deg) translate(0,0)",
    },
    "100%": {
        transform: "rotate(0deg) translate(0,0)",
    },
});

const starBurst = keyframes({
    "0%": {
        opacity: 0,
        transform: "scale(0)",
    },
    "25%": {
        opacity: 1,
        transform: "scale(0.75)",
    },
    "30%": {
        opacity: 0,
        transform: "scale(1)",
    },
    "35%": {
        opacity: 0,
        transform: "scale(0)",
    },
    "40%": {
        opacity: 1,
        transform: "scale(0.75)",
    },
    "50%": {
        opacity: 0,
        transform: "scale(1)",
    },
    "100%": {
        opacity: 0,
        transform: "scale(1)",
    },
});

const StyledHeading = styled("span", {
    ".graphic": {
        position: "relative",
    },
    svg: {
        zIndex: 40,
        position: "absolute",
        top: "-0.9em",
        transform: "rotate(7deg)",
        transformOrigin: "left bottom",
        height: "2em",
        right: "-3.5em",
        ".wand": {
            transformOrigin: "left bottom",
            animation: `${wiggleWand} 2000ms ease`,
            animationIterationCount: "infinite",
        },
        ".stars": {
            transformOrigin: "center center",
            animation: `${starBurst} 2000ms linear`,
            animationIterationCount: "infinite",
        },
        "@xs2": {
            right: "-3.4em",
        },
        "@xs3": {
            right: "-3.2em",
        },
        "@sm": {
            right: "-3.1em",
        },
    },
});

export const Home_CodeServices = (props: any) => {
    const { children } = props;
    return (
        <StyledSection>
            <StyledInnerTop>
                <Container
                    gridBreak={"xs"}
                    css={{
                        rowGap: "$xl",
                        "@sm": {},
                    }}
                >
                    <div tw="grid-column[span 12] sm:grid-column[span 6] md2:grid-column[2 / span 6] relative grid items-center order-2 sm:order-1">
                        <HeadingLockup
                            preHeading="Geeks and proud"
                            heading={
                                <StyledHeading>
                                    Self proclaimed CSS wizards{" "}
                                    <span className="graphic" aria-hidden>
                                        <MagicSVG />
                                    </span>
                                </StyledHeading>
                            }
                            paragraph="We love code and shit. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Plura mihi bona sunt."
                            css={{
                                position: "relative",
                                zIndex: 20,
                                ".heading": {
                                    maxWidth: "13ch",
                                    color: "white",
                                },
                                ".pre-heading": {
                                    color: blueDark.blue11,
                                },
                                p: {
                                    color: "white",
                                },
                            }}
                        />
                    </div>
                    <div tw="grid-column[span 12] sm:grid-column[7 / span 6] md2:grid-column[8 / span 4] grid place-items-center order-1 sm:order-2">
                        <CodeGraphic />
                    </div>
                </Container>

                <h3 tw="text-title1 text-center text-white sm:absolute bottom-l z-20">
                    Code services
                </h3>
            </StyledInnerTop>
            <Chevron />
            <StyledInnerBottom>
                <Container>
                    <div tw="flex gap-m justify-content[center] flex-wrap">
                        <CodeCard
                            heading={"React JS"}
                            logo={<CodeLogo_React />}
                        />
                        <CodeCard
                            heading={"Next JS"}
                            logo={<CodeLogo_Next />}
                        />
                        <CodeCard
                            heading={"Wordpress"}
                            logo={<CodeLogo_WordPress />}
                        />
                        <CodeCard
                            heading={"Webflow"}
                            logo={<CodeLogo_Webflow />}
                        />
                        <CodeCard
                            heading={"Static builds"}
                            logo={<CodeLogo_Static />}
                        />
                        <CodeCard
                            heading={"Framer Sites"}
                            logo={<CodeLogo_Framer />}
                        />
                        <CodeCard
                            heading={"Web components"}
                            logo={<CodeLogo_Stencil />}
                        />
                    </div>
                </Container>
            </StyledInnerBottom>
        </StyledSection>
    );
};
