import tw from "twin.macro";
import { styled } from "styles/stitches.config";

const StyledHeadingLockup = styled("div", {
    ...tw`flex flex-col text-center gap-5xs items-center sm:gap-0`,
    variants: {
        align: {
            left: {
                ...tw`sm:text-left sm:items-start`,
            },
            center: {
                // do nothing
            },
        },
    },
    defaultVariants: {
        align: "left",
    },
});

type HeadingLockupProps = {
    preHeading: string | React.ReactNode;
    heading: string | React.ReactNode;
    paragraph?: string | React.ReactNode;
    align?: "left" | "center";
    css?: any;
};

export const HeadingLockup = (props: HeadingLockupProps) => {
    const { preHeading, heading, paragraph, align, ...rest } = props;
    return (
        <StyledHeadingLockup {...rest} align={align}>
            <h2 className="pre-heading" tw="text-title3 leading-tightest">
                {preHeading || "pre-heading"}
            </h2>
            <h3 className="heading" tw="text-hero leading-tightest">
                {heading || "Heading"}
            </h3>
            <p tw="max-width[50ch] mt-xs">{paragraph}</p>
        </StyledHeadingLockup>
    );
};

// HeadingLockup.defaultProps = {
//     preHeading: "This is the pre-heading",
//     heading: "Main heading",
//     paragraph:
//         "Ab illo tempore, ab est sed immemorabili. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Petierunt uti sibi concilium totius Galliae in diem certam indicere.",
// };
