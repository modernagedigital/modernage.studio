// pages/_document.tsx
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "styles/stitches.config";

export default class Document extends NextDocument {
    static async getInitialProps(ctx: any) {
        try {
            const initialProps = await NextDocument.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {/* Stitches CSS for SSR */}
                        <style
                            id="stitches"
                            dangerouslySetInnerHTML={{ __html: getCssText() }}
                        />
                    </>
                ),
            };
        } finally {
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/avm3hpe.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
