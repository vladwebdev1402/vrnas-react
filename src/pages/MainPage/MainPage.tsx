import React, { FC } from "react";
import Header from "../../components/Header/Header";
import MainHeadAbout from "../../components/MainHeadAbout/MainHeadAbout";
import MainAboutUs from "../../components/MainAboutUs/MainAboutUs";
import PageWrapper from "../../components/UI/PageWrapper/PageWrapper";
import OurServices from "../../components/OurServices/OurServices";
const MainPage: FC = () => {
  return (
    <PageWrapper>
      <Header />
      {/* <MainHeadAbout />
      <MainAboutUs />
      <OurServices /> */}
    </PageWrapper>
  );
};

export default MainPage;
