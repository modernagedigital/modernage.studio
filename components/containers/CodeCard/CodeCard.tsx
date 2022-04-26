import { styled, darkTheme, CSS } from "styles/stitches.config";
import tw from "twin.macro";

const StyledCodeCard = styled("article", {
    background: "$blue1",
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    flexBasis: "270px",
    maxWidth: "270px",
    borderRadius: "$md",
    overflow: "hidden",
    boxShadow: "0px 4px 12px rgba(0, 72, 149, 0.1)",
    ".logo-image": {
        background: "$blue2",
        height: "6rem",
        display: "grid",
        placeItems: "center",

        svg: {
            maxHeight: 64,
            maxWidth: 120,
            path: {
                fill: "$blue12",
            },
        },
    },
});

type CodeCardProps = {
    paragraph?: string;
    heading: string;
    logo: React.ReactNode;
    rest?: any;
    css?: object;
};
export const CodeCard = (props: CodeCardProps) => {
    const { paragraph, heading, logo, rest } = props;
    return (
        <StyledCodeCard {...rest}>
            {/* logo image */}
            <div className="logo-image">{logo}</div>

            {/* Text container */}
            <div tw="p-2xs flex flex-col items-center text-center space-y-4xs">
                <h4 tw="text-0 font-weight[600] text-blue-10">
                    {heading || "Code card heading"}
                </h4>
                <p tw="text-footnote">
                    {paragraph ||
                        "Quae vero auctorem tractata ab fiducia dicuntur. Quid securi etiam tamquam eu fugiat nulla pariatur."}
                </p>
            </div>
        </StyledCodeCard>
    );
};
