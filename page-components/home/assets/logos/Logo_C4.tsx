import { styled } from "styles/stitches.config";
const StyledSVG = styled("svg", {});

export const Logo_C4 = (props: any) => {
    const { ...rest } = props;
    return (
        <StyledSVG
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 49 66"
            {...rest}
        >
            <path
                d="M12.8 60.22h5.38v5.28H12.8v-5.28Zm17.65 5.28H43.9v-5.28H30.45v5.28ZM.5 44.02H27v-5.28H.5v5.28ZM21.63 65.5h5.38V47.41h-5.38V65.5Zm-3.46-40.76v-8.39l-15.66 19h6.92l8.74-10.6ZM31.25.5l-.8.97v8.4l4.99-6.06L31.25.5Zm8.04 38.24v5.28h9.21v-5.28h-9.21ZM35.83 8.72l-5.38 6.51v41.6h5.38V8.72Zm-14.2 26.63h5.38V5.65l-5.38 6.51v23.2Z"
                fill="#687076"
            />
        </StyledSVG>
    );
};
