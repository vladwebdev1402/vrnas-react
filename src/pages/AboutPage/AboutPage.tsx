import PageTitle from "@/components/PageTitle/PageTitle";
import React, { useEffect } from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import WhyChooseUsAdvantages from "./components/WhyChooseUsAdvantages/WhyChooseUsAdvantages";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import OurTeam from "./components/OurTeam/OurTeam";
import Subscribe from "@/components/Subscribe/Subscribe";
import ShortFAQ from "@/components/ShortFAQ/ShortFAQ";

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
      <ShortFAQ />
      <Subscribe />
    </>
  );
};

export default AboutPage;
