import type { AppProps } from "next/app";
import globalStyles from "../styles/globalStyles";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles();
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
