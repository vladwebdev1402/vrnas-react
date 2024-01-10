import PageTitle from "@/components/PageTitle/PageTitle";
import React, { useEffect } from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyChooseUsAdvantages from "./components/WhyChooseUsAdvantages/WhyChooseUsAdvantages";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import OurTeam from "./components/OurTeam/OurTeam";
import FAQ from "./components/FAQ/FAQ";
import Subscribe from "@/components/Subscribe/Subscribe";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <PageTitle />
      <AboutUs />
      <WhyChooseUsAdvantages />
      <WhyChooseUs />
      <OurTeam />
      <FAQ />
      <Subscribe />
    </>
  );
};

export default AboutPage;
