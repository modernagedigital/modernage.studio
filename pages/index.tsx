import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "../styles/stitches.config";
import tw from "twin.macro";
import { SiteWrapper, HeroSection } from "page-components";

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

const Home: NextPage = () => {
    return (
        <SiteWrapper>
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
        </SiteWrapper>
    );
};

export default Home;
