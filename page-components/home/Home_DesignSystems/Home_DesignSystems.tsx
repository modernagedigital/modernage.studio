import { styled, darkTheme, css } from "styles/stitches.config";
import { visuallyHidden } from "styles/utils";
import tw from "twin.macro";
import { useEffect, useRef } from "react";
import { Container } from "layout";
import { Emoji_HeartEyes } from "components";
import ds_image1 from "assets/images/designsystems-wall-01@2x.png";
import ds_image2 from "assets/images/designsystems-wall-02@2x.png";
import ds_image3 from "assets/images/designsystems-wall-03@2x.png";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledImageFrame = styled("div", {
    background: "$blue1",
    position: "relative",
    borderRadius: "$md",
    gridColumn: "1fr",
    height: "100%",

    ".img-wrapper": {
        ...tw`absolute inset-2xs`,
    },

    [`.${darkTheme} &`]: {
        background: "$blue4",
    },
});

const StyledImage = styled(Image, {
    ...tw`block absolute inset-3xs-2xs`,
    width: "calc(100% - calc(var(--space-3xs-2xs) * 2))",
    height: "calc(100% - calc(var(--space-3xs-2xs) * 2))",
    objectFit: "cover",
});

const StyledEmoji = styled("span", {
    ...tw`relative inline-block`,
    width: "1em",
    height: 16,
    ".word-love": {
        ...visuallyHidden,
    },
    svg: {
        width: "1em",
        height: "1em",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -70%)",
        overflow: "visible",
    },
    ".left-eye": {
        transform: "scale(1.2)",
        transformOrigin: "center center",
        background: "red",
    },
});

const StyledSection = styled("section", {
    background: "linear-gradient(113.95deg, #0263CB 35.68%, #0174F0 106.17%)",
    display: "grid",
    "@sm": {
        height: "clamp(400px, 90vh, 860px)",
    },

    paddingBlock: "$2xl",
    placeItems: "center",

    [`.${darkTheme} &`]: {
        background:
            "linear-gradient(113.96deg, #0D3868 35.34%, #104E94 86.63%)",
    },
});

const StyledIntroText = styled(Container, {
    alignItems: "end",
    justifyContent: "center",
    gap: "$2xl",
    paddingInline: "$section-padding",
    ".pre-header": {
        color: "$blue4",

        [`.${darkTheme} &`]: {
            color: "$sky11",
        },
    },
});

export const Home_DesignSystems = (props: any) => {
    useEffect(() => {}, []);
    return (
        <StyledSection>
            <div tw="grid place-items-center">
                <StyledIntroText gridBreak="sm">
                    <div tw="grid-column[1 / span 6] md2:grid-column[2 / span 5] text-center sm:text-left items-center flex flex-col sm:block">
                        <h2
                            className="pre-header"
                            tw="text-title3 leading-tightest"
                        >
                            Scaling your business
                        </h2>
                        <h3 tw="text-hero leading-tightest text-white max-width[14ch] mt-4xs sm:mt-0">
                            We{" "}
                            <StyledEmoji>
                                {" "}
                                <span className="word-love">love</span>
                                <Emoji_HeartEyes aria-hidden css={{}} />{" "}
                            </StyledEmoji>{" "}
                            building design systems
                        </h3>
                    </div>
                    <div tw="grid-column[7 / span 6] md2:grid-column[7 / span 5] flex justify-center mt-s sm:mt-0">
                        <p tw="text-center sm:text-left text-white max-width[50ch]">
                            Petierunt uti sibi concilium totius Galliae in diem
                            certam indicere. Lorem ipsum dolor sit amet,
                            consectetur adipisici elit, sed eiusmod tempor
                            incidunt ut labore et dolore magna aliqua. Plura
                            mihi bona sunt.
                        </p>
                    </div>
                </StyledIntroText>

                <div tw="overflow-x-scroll overflow-y-visible -webkit-overflow-scrolling[touch] width[100%] mt-l sm:mt-6xl sm:overflow-visible p-4xs pl-section-padding sm:px-section-padding">
                    <div tw="grid grid-template-columns[1fr 1fr 1fr] sm:grid-template-columns[1.3fr 1fr 1.5fr] gap-xs-s md:gap-l-xl aspect-ratio[3/1] sm:aspect-ratio[1184/280] items-center justify-center width[48rem] sm:width[100%]">
                        <StyledImageFrame
                            css={{
                                transform: "rotate(-2deg)",
                            }}
                        >
                            <StyledImage
                                src={ds_image1}
                                layout="raw"
                                width={480}
                                height={360}
                            />
                        </StyledImageFrame>
                        <StyledImageFrame
                            css={{
                                transform: "rotate(1deg)",
                            }}
                        >
                            <StyledImage
                                src={ds_image2}
                                layout="raw"
                                width={280}
                                height={280}
                            />
                        </StyledImageFrame>

                        <StyledImageFrame
                            css={{
                                transform: "rotate(2deg)",
                            }}
                        >
                            <StyledImage
                                src={ds_image3}
                                layout="raw"
                                width={400}
                                height={280}
                            />
                        </StyledImageFrame>
                    </div>
                </div>
            </div>

            {/* <Container gridBreak="sm">
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
                <StyledColumn>Col</StyledColumn>
            </Container> */}
        </StyledSection>
    );
};
