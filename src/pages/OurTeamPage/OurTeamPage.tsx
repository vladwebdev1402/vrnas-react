import Numbers from "@/components/Numbers/Numbers";
import PageTitle from "@/components/PageTitle/PageTitle";
import { useWindowToTop } from "@/hooks/useWindowToTop";
import React from "react";
import TeamList from "./components/TeamList";

const OurTeamPage = () => {
  useWindowToTop();

  return (
    <>
      <PageTitle />
      <TeamList />
      <Numbers />
    </>
  );
};

export default OurTeamPage;
