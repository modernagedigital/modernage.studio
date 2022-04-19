import { styled, darkTheme } from "styles/stitches.config";
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
                    gridBreak={"sm"}
                    css={{
                        ...tw`space-y-m-l`,
                    }}
                >
                    <div tw="grid-column[span 6] md2:grid-column[2 / span 6] relative">
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
