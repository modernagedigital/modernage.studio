import { styled } from "styles/stitches.config";
const StyledSVG = styled("svg", {});

export const Logo_Pru = (props: any) => {
    const { ...rest } = props;
    return (
        <StyledSVG
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 29"
            {...rest}
        >
            <path
                d="M97.98 7.9v20.56h-4.45v-2.53c-.7 1.24-2.71 3.04-6.5 3.04-3.78 0-6.82-2.47-6.82-7.12V7.88h4.51v12.94c0 2.78 1.5 4.25 3.71 4.25a5.04 5.04 0 0 0 4.98-5.2V7.84h4.57v.06Zm-21.96-.24c-3.13 0-5.2 1.67-5.95 3.42V7.9h-4.43v20.57h4.51V18.8c0-4.2 2.3-6.43 5.15-6.73a6.45 6.45 0 0 1 2.36.1V7.83a5.69 5.69 0 0 0-1.65-.2l.01.03ZM63.35 9.52c0 5.3-3.31 8.72-8.93 8.72H47.4v10.2h-4.78V.78h11.75c5.62 0 8.93 3.4 8.93 8.75h.04Zm-4.9 0a4.17 4.17 0 0 0-4.47-4.47h-6.57v8.97h6.57a4.16 4.16 0 0 0 4.51-4.48M.95.76h27.72v27.71H.95V.76Z"
                fill="#687076"
            />
        </StyledSVG>
    );
};
