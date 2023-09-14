import React, { FC } from "react";
import Header from "../../components/Header/Header";
import bgAngle from "../../assets/bg-angle.svg";
import st from "./MainPage.module.scss";
import HeadAbout from "../../components/HeadAbout/HeadAbout";
const MainPage: FC = () => {
  return (
    <div className={st.pageContainer}>
      <img className={st.imgBgAngel} src={bgAngle} />
      <Header />
      <HeadAbout />
    </div>
  );
};

export default MainPage;
