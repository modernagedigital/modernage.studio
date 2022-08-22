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
    const splitWrapper = useRef(null);

    // splitText
    useEffect(() => {
        let mySplitText = new SplitText(split.current, { type: "chars" });
        let chars = mySplitText.chars;
        gsap.from(chars, {
            scrollTrigger: {
                trigger: splitWrapper.current,
                start: "center 70%",
                end: "center 100%",
                // markers: true,
                toggleActions: "play none none none",
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
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: box.current,
                start: "top 70%",
                end: "top 100%",
                markers: true,
                toggleActions: "play none none none",
                // pin: true,
                // scrub: true,
            },
        });
        // tl.from(box.current, {
        //     rotation: -100,
        //     y: 0,
        //     opacity: 0,
        //     scale: 1,
        // }).to(box.current, {
        //     rotation: 100,
        //     y: -100,
        //     opacity: 1,
        //     duration: 0.8,
        //     scale: 2,
        //     ease: "bounce.out",
        // });

        tl.fromTo(
            box.current,
            {
                rotation: -100,
                y: 0,
                opacity: 0,
                scale: 1,
            },
            {
                rotation: 100,
                y: -100,
                opacity: 1,
                duration: 0.8,
                scale: 2,
                ease: "bounce.out",
            }
        ).fromTo(
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
                ease: "power2.out",
            }
        );
    });
    const { children } = props;
    return (
        <StyledWrapper>
            <StyledContainer>
                <div
                    className="trigger"
                    tw="padding-block[100px] bg-red-5"
                    ref={splitWrapper}
                >
                    <h1 ref={split} tw="text-hero leading-tightest m-0 pt-l">
                        Split text test
                    </h1>
                </div>
            </StyledContainer>
            <StyledBox ref={box}>
                <StyledFuckyou ref={text}>Hello!</StyledFuckyou>
            </StyledBox>
        </StyledWrapper>
    );
};
