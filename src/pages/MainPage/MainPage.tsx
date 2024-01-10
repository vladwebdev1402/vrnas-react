import React, { FC, useEffect } from "react";
import MainHeadAbout from "../../components/MainHeadAbout/MainHeadAbout";
import MainAboutUs from "../../components/MainAboutUs/MainAboutUs";
import OurServices from "../../components/OurServices/OurServices";
import videoImg from "../../assets/videoBgImages/mainPageVideoBg.png";
import VideoContainer from "../../components/UI/Video/VideoContainer/VideoContainer";
import WhatOurClientSays from "../../components/WhatOurClientSays/WhatOurClientSays";
import AffrodableServices from "../../components/AffrodableServices/AffrodableServices";
import Subscribe from "@/components/Subscribe/Subscribe";
import OurArticles from "@/components/OurArticles/OurArticles";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
const MainPage: FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
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
      <WhatOurClientSays />
      <AffrodableServices />
      <OurArticles />
      <Subscribe />
    </>
  );
};

export default MainPage;
