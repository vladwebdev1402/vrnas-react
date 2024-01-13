import PageTitle from "@/components/PageTitle/PageTitle";
import { useWindowToTop } from "@/hooks/useWindowToTop";
import React from "react";
import Tems from "./components/Tems/Tems";

const TemsConditionsPage = () => {
  useWindowToTop();
  return (
    <>
      <PageTitle />
      <Tems />
    </>
  );
};

export default TemsConditionsPage;
