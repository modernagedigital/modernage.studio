import Head from "next/head";
import { NavBar } from "components";

export const SiteWrapper = (props: any) => {
    const { children, pageTitle } = props;
    return (
        <div>
            <Head>
                <title>Modern Age Studio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className="site-wrapper">{children}</main>
        </div>
    );
};