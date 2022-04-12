import { styled, darkTheme } from "styles/stitches.config";
import tw from "twin.macro";
import { LinkButton } from "components";

const StyledWrapper = styled("section", {
    // base tailwind styles
    ...tw`relative flex items-center justify-center flex-col overflow-hidden`,

    // Custom properties
    "--radial-bg":
        "radial-gradient(50% 50% at 50% 50%, rgba(251, 252, 253, 0) 80%, rgba(251, 252, 253, 1) 100%)",

    "--blue-gradient":
        "linear-gradient(90deg, rgba(228, 249, 255, 0) 0%, rgba(177, 238, 255, 0.5) 50%, rgba(228, 249, 255, 0) 100%)",

    "--yellow-gradient":
        "linear-gradient(90deg, rgba(255, 250, 204, 0) 0%, rgba(255, 250, 200, 0.2) 50%, rgba(255, 251, 215, 0) 100%)",

    "--text-gradient": "linear-gradient(90deg, #101D46 10%, #00208a 90%)",

    "--span-gradient": "linear-gradient(90deg, #007FF4 40%, #00B9ED 86%)",

    // More specifics
    paddingInline: "$section-padding",
    backgroundColor: "$slate1",
    color: "$indigo12",

    height: "clamp(540px, 90vh, 640px)",

    // More specifics
    "@md": {
        height: "clamp(640px, 90vh, 960px)",
    },

    h1: {
        background: "var(--text-gradient)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
    },

    "h1 span": {
        background: "var(--span-gradient)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
    },

    "&::before": {
        ...tw`block absolute inset-0 content bg-red-100 z-10`,
        background: "var(--radial-bg)",
    },

    // Dark mode specifics
    [`.${darkTheme} &`]: {
        "--text-gradient":
            "linear-gradient(90deg, #D2EAFF 30%, #FFFFFF 50%, #d4e9fc 80%)",
        "--span-gradient": "linear-gradient(90deg, #078CFF 40%, #5FD4F4 80%)",
        "--radial-bg":
            "radial-gradient(50% 50% at 50% 50%, rgba(21, 25, 45, 0) 60.94%, rgba(21, 25, 45, 1) 100%)",
        background: "$indigo2",
    },
});

const StyledBackground = styled("div", {
    ...tw`absolute inset-0`,
    zIndex: 0,
    display: "grid",
    placeItems: "center",
    transform: "rotate(-45deg)",
    height: "100%",

    "& > .gradient1": {
        width: "min(500px, 40%)",
        height: "500%",
        transform: "translateX(-20%)",
        background: "var(--blue-gradient)",
    },

    "& > .gradient2": {
        width: "min(200px, 30%)",
        height: "500%",
        transform: "translateX(100%)",
        background: "var(--yellow-gradient)",
    },

    [`.${darkTheme} &`]: {
        "--blue-gradient":
            "linear-gradient(90deg, rgba(8, 62, 89, 0) 0%, rgba(8, 62, 89, 0.25) 47.92%, rgba(8, 62, 89, 0) 100%)",
        "--yellow-gradient":
            "linear-gradient(90deg, rgba(8, 62, 89, 0) 0%, rgba(8, 62, 89, 0.05) 47.92%, rgba(8, 62, 89, 0) 100%)",
    },
});

export const HeroSection = (props: any) => {
    return (
        <StyledWrapper>
            <StyledBackground aria-hidden>
                <div className="gradient1" />
                <div className="gradient2" />
            </StyledBackground>

            <div tw="space-y-s-m flex items-center flex-col relative z-20">
                <h1 tw="text-hero text-center max-width[18ch]">
                    Digital creative solutions for the <span>modern age</span>
                </h1>
                <p tw="text-center max-width[56ch]">
                    Petierunt uti sibi concilium totius Galliae in diem certam
                    indicere. Lorem ipsum dolor sit amet, consectetur adipisici
                    elit, sed eiusmod tempor incidunt ut labore et dolore magna
                    aliqua. Plura mihi bona sunt.
                </p>
                <LinkButton href="https://google.com" size="large">
                    Let's chat
                </LinkButton>
            </div>
        </StyledWrapper>
    );
};
