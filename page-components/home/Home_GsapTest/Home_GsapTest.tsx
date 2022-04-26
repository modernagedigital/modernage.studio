import { styled, darkTheme } from "styles/stitches.config";
import tw from "twin.macro";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const StyledWrapper = styled("section", {
    minHeight: "200vh",
    background: "$blue11",
    display: "grid",
    placeItems: "center",
});

const StyledBox = styled("div", {
    width: 200,
    height: 200,
    background: "$red10",
    opacity: 0,
    display: "grid",
    placeItems: "center",
});

const StyledFuckyou = styled("div", {
    ...tw`text-title2`,
});

const StyledContainer = styled("div", {
    ...tw`marginTop[1000px] padding-block[300px]`,
});

export const Home_GsapTest = (props: any) => {
    const box = useRef(null);
    const text = useRef(null);
    const split = useRef(null);

    // splitText
    useEffect(() => {
        let mySplitText = new SplitText(split.current, { type: "chars" });
        let chars = mySplitText.chars;
        gsap.from(chars, {
            scrollTrigger: {
                trigger: split.current,
                start: "top 90%",
                markers: true,
                toggleActions: "play reset play reset",
                // pin: true,
                // scrub: true,
            },
            yPercent: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });
    }, []);

    useEffect(() => {
        gsap.fromTo(
            box.current,
            {
                rotation: -100,
                y: 0,
                opacity: 0,
                scale: 1,
            },
            {
                rotation: 100,
                y: 200,
                opacity: 1,
                duration: 0.8,
                scale: 2,
                ease: "bounce.out",
            }
        );
        gsap.fromTo(
            text.current,
            {
                rotation: -800,
                opacity: 0,
                scale: 0,
            },
            {
                rotation: -110,
                opacity: 1,
                duration: 0.5,
                scale: 2,
                delay: 0.5,
                ease: "power2.out",
            }
        );
    });
    const { children } = props;
    return (
        <StyledWrapper>
            <StyledContainer>
                <h1 ref={split} tw="text-hero leading-tightest m-0 pt-l">
                    Emily is a medal winner
                </h1>
            </StyledContainer>
            <StyledBox ref={box}>
                <StyledFuckyou ref={text}>Hello You!</StyledFuckyou>
            </StyledBox>
        </StyledWrapper>
    );
};
