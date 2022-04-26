import { styled } from "styles/stitches.config";

const StyledSVG = styled("svg", {});

export const ChevronDown = (props: any) => {
    const { ...rest } = props;
    return (
        <StyledSVG
            {...rest}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
        >
            <path
                d="M23.15 12c.91-.9 2.39-.89 3.3 0 .93.91.93 2.4 0 3.3l-7.78 7.6a3.9 3.9 0 0 1-5.43 0l-7.78-7.6a2.3 2.3 0 0 1 0-3.3c.91-.89 2.39-.9 3.3 0l7.2 7.03L23.15 12Z"
                fill="#00254D"
            />
        </StyledSVG>
    );
};
