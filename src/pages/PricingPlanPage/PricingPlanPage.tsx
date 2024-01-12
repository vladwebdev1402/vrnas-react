import React, { useEffect } from "react";
import PricingList from "./components/PricingList/PricingList";
import ShortFAQ from "@/components/ShortFAQ/ShortFAQ";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import PageTitle from "@/components/PageTitle/PageTitle";

const PricingPlanPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <PageTitle />
      <PricingList />
      <WhyChooseUs />
      <ShortFAQ />
    </>
  );
};

export default PricingPlanPage;
