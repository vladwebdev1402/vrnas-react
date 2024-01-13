import PageTitle from "@/components/PageTitle/PageTitle";
import React, { useState } from "react";
import FAQHead from "./components/FAQHead/FAQHead";
import FAQFilters from "./components/FAQFilters/FAQFilters";
import { filters } from "./data/filters";
import FAQList from "./components/FAQList/FAQList";
import { useWindowToTop } from "@/hooks/useWindowToTop";

const FAQPage = () => {
  const [current, setCurrent] = useState(filters[0].value);
  useWindowToTop();
  return (
    <>
      <PageTitle />
      <FAQHead />
      <FAQFilters
        filters={filters}
        currentValue={current}
        setCurrent={setCurrent}
      />
      <FAQList typeQuestion={current} />
    </>
  );
};

export default FAQPage;
