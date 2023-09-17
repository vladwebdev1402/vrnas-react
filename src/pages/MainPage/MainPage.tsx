import React, { FC } from "react";
import Header from "../../components/Header/Header";
import MainHeadAbout from "../../components/MainHeadAbout/MainHeadAbout";
import MainAboutUs from "../../components/MainAboutUs/MainAboutUs";
import PageWrapper from "../../components/UI/PageWrapper/PageWrapper";
import OurServices from "../../components/OurServices/OurServices";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
const MainPage: FC = () => {
  return (
    <PageWrapper>
      <Header />
      <MainHeadAbout />
      <MainAboutUs />
      <OurServices />
      <WhyChooseUs />
    </PageWrapper>
  );
};

export default MainPage;
