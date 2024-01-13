import React from "react";
import { useWindowToTop } from "@/hooks/useWindowToTop";
import PageTitle from "@/components/PageTitle/PageTitle";
import Policy from "./components/Policy/Policy";
const PrivicePolicyPage = () => {
  useWindowToTop();

  return (
    <>
      <PageTitle />
      <Policy />
    </>
  );
};

export default PrivicePolicyPage;
