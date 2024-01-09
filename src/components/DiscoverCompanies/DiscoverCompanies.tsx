import React from "react";
import st from "./DiscoverCompanies.module.scss";
import man from "@/assets/discover/man.png";
import ImgCircleBg from "../UI/ImgCircleBg/ImgCircleBg";
const DiscoverCompanies = () => {
  return (
    <div className={st.discover}>
      <div className={st.discover__head}>
        <span className="gradient_txt">Our Trusted Partners</span>
        <h1 className={st.discover__heading}>
          Discover the Companies We Work With
        </h1>
      </div>
      <div className={st.discover__body}>
        <ImgCircleBg className={st.discover__img} img={man} />
      </div>
    </div>
  );
};

export default DiscoverCompanies;
