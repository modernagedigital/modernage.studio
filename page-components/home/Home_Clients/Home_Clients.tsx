import { styled, darkTheme } from "styles/stitches.config";
import { Container } from "layout";
import { HeadingLockup } from "components";
import tw from "twin.macro";
import Image from "next/image";

import { Logo_BBC } from "../assets/logos/Logo_BBC";
import { Logo_BlackHorse } from "../assets/logos/Logo_BlackHorse";
import { Logo_C4 } from "../assets/logos/Logo_C4";
import { Logo_CB } from "../assets/logos/Logo_CB";
import { Logo_FoodsConnected } from "../assets/logos/Logo_FoodsConnected";
import { Logo_JP } from "../assets/logos/Logo_JP";
import { Logo_Pru } from "../assets/logos/Logo_Pru";
import { Logo_RBS } from "../assets/logos/Logo_RBS";
import { Logo_ScottishPower } from "../assets/logos/Logo_ScottishPower";
import { Logo_Sky } from "../assets/logos/Logo_Sky";
import { Logo_Virgin } from "../assets/logos/Logo_Virgin";
import { Logo_Woolies } from "../assets/logos/Logo_Woolies";

const StyledSection = styled("section", {
    paddingInline: "$section-padding",
    paddingBlock: "$6xl",
    gap: "$2xl",
    background: "$slate1",
    "@sm": {
        height: "clamp(800px, 95vh, 960px)",
    },

    display: "grid",
    placeItems: "center",
    [`.${darkTheme} &`]: {
        background: "$indigo1",
    },
});

const StyledLogoWall = styled("div", {
    margin: "0 auto",
    width: "100%",
    maxWidth: "60rem",
    display: "grid",
    padding: "$section-padding",
    gap: "$2xs",
    gridTemplateColumns: "1fr 1fr 1fr",

    "@xs2": {
        gap: "$s",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
    "@sm": {
        gap: "$xs",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
});

const StyledLogoCard = styled("div", {
    padding: "$md",
    display: "grid",
    placeItems: "center",
    position: "relative",
    overflow: "hidden",
    height: "$space$5xl-6xl",

    svg: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) scale(0.9)",
        width: "100%",
        height: "100%",

        path: {
            fill: "$slate11",
        },
        "@sm": {
            transform: "translate(-50%, -50%) scale(0.7)",
        },
    },
});

export const Home_Clients = (props: any) => {
    const { children } = props;
    return (
        <StyledSection>
            <Container
                css={{
                    ...tw`space-y-m-l`,
                }}
            >
                <HeadingLockup
                    preHeading="Our client experience"
                    heading="A few name-drops..."
                    paragraph="Petierunt uti sibi concilium totius Galliae in diem certam indicere. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt."
                    align="center"
                    css={{
                        ".pre-heading": {
                            color: "$blue11",
                        },
                        ".heading": {
                            color: "$indigo12",
                        },
                        "& > p": {
                            color: "$indigo12",
                        },

                        [`.${darkTheme} &`]: {
                            ".pre-heading": {
                                color: "$sky11",
                            },
                        },
                    }}
                />
                <StyledLogoWall>
                    <StyledLogoCard
                        children={
                            <Logo_Sky
                                css={{
                                    path: {
                                        transformOrigin: "50% 50%",
                                        transform: "scale(0.7)",
                                    },
                                }}
                            />
                        }
                    />
                    <StyledLogoCard
                        children={
                            <Logo_BBC
                                css={{
                                    path: {
                                        transformOrigin: "50% 50%",
                                        transform: "scale(0.8)",
                                    },
                                }}
                            />
                        }
                    />
                    <StyledLogoCard children={<Logo_CB />} />
                    <StyledLogoCard children={<Logo_Virgin />} />
                    <StyledLogoCard
                        children={
                            <Logo_Pru
                                css={{
                                    path: {
                                        transformOrigin: "50% 50%",
                                        transform: "scale(0.7)",
                                    },
                                }}
                            />
                        }
                    />
                    <StyledLogoCard
                        children={
                            <Logo_C4
                                css={{
                                    path: {
                                        transformOrigin: "50% 50%",
                                        transform: "scale(0.7)",
                                        "@sm": {
                                            transform: "scale(0.8)",
                                        },
                                    },
                                }}
                            />
                        }
                    />
                    <StyledLogoCard
                        children={
                            <Logo_RBS
                                css={{
                                    path: {
                                        transformOrigin: "50% 50%",
                                        transform: "scale(0.8)",
                                    },
                                }}
                            />
                        }
                    />
                    <StyledLogoCard children={<Logo_Woolies />} />
                    <StyledLogoCard children={<Logo_BlackHorse />} />

                    <StyledLogoCard children={<Logo_FoodsConnected />} />
                    <StyledLogoCard children={<Logo_JP />} />

                    <StyledLogoCard children={<Logo_ScottishPower />} />
                </StyledLogoWall>
            </Container>
        </StyledSection>
    );
};
