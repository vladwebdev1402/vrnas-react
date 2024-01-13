import React from "react";
import PageWrapper from "../UI/PageWrapper/PageWrapper";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";

const Root = () => {
  return (
    <PageWrapper>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </PageWrapper>
  );
};

export default Root;
