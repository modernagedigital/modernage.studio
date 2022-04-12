import type { NextPage } from "next";
import Head from "next/head";
import { styled, darkTheme } from "../styles/stitches.config";
import tw from "twin.macro";
import { HeroSection } from "page-components";
import { NavBar } from "components";
import { useState, useEffect } from "react";
import { useViewportScroll } from "framer-motion";
import { useTheme } from "next-themes";

const StyledLayout = styled("div", {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gap: 40,
    background: "red",
});

const StyledColumn = styled("div", {
    ...tw`bg-blue-500`,
    height: 200,
});

const StyledThemeToggler = styled("div", {
    ...tw`rounded-full`,
    background: "red",
    width: 24,
    height: 24,
    position: "absolute",
    left: 16,
    bottom: 16,
    zIndex: 1000,
});

const Home: NextPage = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />
            <main>
                <StyledThemeToggler
                    onClick={() => {
                        setTheme(resolvedTheme === "dark" ? "light" : "dark");
                    }}
                />
                <HeroSection />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/*
                <StyledLayout>
                     <div tw="text-hero text-center max-width[17ch] grid-column-start[4] grid-column-end[12] bg-blue-500">
                        Digital creative solutions for the modern age
                    </div>
                    <StyledColumn tw="bg-black grid-column-start[2] column-span[3]">
                        Col
                    </StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                    <StyledColumn>Col</StyledColumn>
                </StyledLayout>
                */}
            </main>
        </div>
    );
};

export default Home;
