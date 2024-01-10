import PageTitle from "@/components/PageTitle/PageTitle";
import React, { useEffect } from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyChooseUsAdvantages from "./components/WhyChooseUsAdvantages/WhyChooseUsAdvantages";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

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
    </>
  );
};

export default AboutPage;
