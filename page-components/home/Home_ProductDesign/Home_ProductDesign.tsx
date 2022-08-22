import { styled, darkTheme } from "styles/stitches.config";
import { Container } from "layout";
import { HeadingLockup } from "components";
import tw from "twin.macro";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StyledSection = styled("section", {
    background: "$blue4",
    display: "grid",
    placeItems: "center",
    "@sm": {
        paddingInline: "$section-padding",
        minHeight: "clamp(100px, 200vh, 1200px)",
    },

    [`.${darkTheme} &`]: {
        background: "$indigo2",
    },
});

const StyledTextSection = styled("div", {
    ...tw`sm:grid-column[ 7 / span 6] md3:grid-column[ 7 / span 5]`,
    paddingInline: "$section-padding",
    paddingBlock: "$xl",
    paddingBottom: "$6xl",
    minHeight: "clamp(400px, 90vh, 430px)",
    // background: "red",
    "@sm": {
        padding: 0,
        minHeight: 0,
    },
});

const FeaturedCards = styled("div", {
    ...tw`sm:grid-column[ 1 / span 6] height[160px] sm:height[100%] relative overflow-hidden`,

    "&::before": {
        ...tw`content block absolute border-2 rounded-full`,
        aspectRatio: 1,
        width: "200%",
        left: "50%",
        bottom: "50%",
        transform: "translate(-50%, 4%)",

        "@sm": {
            width: "auto",
            height: "160%",
            bottom: "auto",
            left: "50%",
            top: "50%",
            transform: "translate(-100%, -50%)",
        },
        borderColor: "$sky9",
        [`.${darkTheme} &`]: {
            borderColor: "$blue8",
        },
    },
});

export const Home_ProductDesign = (props: any) => {
    const TextContainer = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            TextContainer.current,
            {
                scrollTrigger: {
                    trigger: TextContainer.current,
                    start: "top 20%",
                    end: "bottom 80%",
                    pin: true,
                    // markers: true,
                },
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 3,
            }
        );
    }, []);
    return (
        <StyledSection>
            <Container
                gridBreak={"sm"}
                css={{
                    "@sm": {
                        height: "100%",
                    },

                    alignItems: "center",
                }}
            >
                <FeaturedCards />
                <StyledTextSection ref={TextContainer}>
                    <HeadingLockup
                        css={{
                            ".pre-heading": {
                                color: "$blue11",
                                [`.${darkTheme} &`]: {
                                    color: "$sky11",
                                },
                            },
                            ".heading": {
                                color: "$indigo12",
                                maxWidth: "15ch",
                            },
                        }}
                        preHeading="Not just a pretty picture"
                        heading="Full end-to-end product design"
                        paragraph="Petierunt uti sibi concilium totius Galliae in diem
                        certam indicere. Lorem ipsum dolor sit amet,
                        consectetur adipisici elit, sed eiusmod tempor
                        incidunt ut labore et dolore magna aliqua. Plura
                        mihi bona sunt."
                    />
                </StyledTextSection>
            </Container>
        </StyledSection>
    );
};
