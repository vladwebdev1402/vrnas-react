import React, { FC } from "react";
import Header from "../../components/Header/Header";
import MainHeadAbout from "../../components/MainHeadAbout/MainHeadAbout";
import MainAboutUs from "../../components/MainAboutUs/MainAboutUs";
import PageWrapper from "../../components/UI/PageWrapper/PageWrapper";
import OurServices from "../../components/OurServices/OurServices";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import videoImg from "../../assets/videoBgImages/mainPageVideoBg.png";
import VideoContainer from "../../components/UI/Video/VideoContainer/VideoContainer";
import Footer from "../../components/Footer/Footer";
import WhatOurClientSays from "../../components/WhatOurClientSays/WhatOurClientSays";
const MainPage: FC = () => {
  return (
    <PageWrapper>
      <Header />
      <MainHeadAbout />
      <MainAboutUs />
      <OurServices />
      <WhyChooseUs />
      <VideoContainer
        startedLink=""
        videoTitle="How to get started"
        nameMarker="VR Service"
        img={videoImg}
        title="Bringing Your Virtual Reality
        Dreams to Life"
        gradient="HOW TO GET STARTED"
      />
      {/* <WhatOurClientSays /> */}
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
