import type { NextPage } from "next";
import { styled } from "styles/stitches.config";
import tw from "twin.macro";
import {
    SiteWrapper,
    HeroSection,
    Home_DesignSystems,
    Home_ProductDesign,
    Home_Clients,
    Home_CodeServices,
    Home_GsapTest,
} from "page-components";

const Home: NextPage = () => {
    return (
        <SiteWrapper>
            {/* <Home_GsapTest /> */}
            <HeroSection />
            <Home_DesignSystems />
            <Home_ProductDesign />
            <Home_Clients />
            <Home_CodeServices />
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
        </SiteWrapper>
    );
};

export default Home;
