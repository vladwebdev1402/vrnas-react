import AffrodableServices from "@/components/AffrodableServices/AffrodableServices";
import OurServices from "@/components/OurServices/OurServices";
import PageTitle from "@/components/PageTitle/PageTitle";
import WhatOurClientSays from "@/components/WhatOurClientSays/WhatOurClientSays";
import React, { useEffect } from "react";
import Numbers from "../../components/Numbers/Numbers";

const OurServicePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <PageTitle />
      <OurServices />
      <Numbers />
      <AffrodableServices />
      <WhatOurClientSays />
    </>
  );
};

export default OurServicePage;
