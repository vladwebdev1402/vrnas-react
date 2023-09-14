import React, { FC } from "react";
import Header from "../../components/Header/Header";
import bgAngle from "../../assets/bg-angle.svg";
import st from "./MainPage.module.scss";
import HeadAbout from "../../components/HeadAbout/HeadAbout";
import Advantages from "../../components/Advantages/Advantages";
const MainPage: FC = () => {
  return (
    <div className={st.pageContainer}>
      <img className={st.imgBgAngel} src={bgAngle} alt="" />
      <Header />
      <HeadAbout />
    </div>
  );
};

export default MainPage;
