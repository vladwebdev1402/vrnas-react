import React from "react";
import PageWrapper from "../UI/PageWrapper/PageWrapper";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <PageWrapper>
      <Header />
      <Outlet />
      <Footer />
    </PageWrapper>
  );
};

export default Root;
