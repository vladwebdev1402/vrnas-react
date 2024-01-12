import React, { useMemo } from "react";
import st from "./PageTitle.module.scss";
import ObserverAnimation from "../UI/ObserverAnimation/ObserverAnimation";
import { useLocation } from "react-router-dom";
import { translatePath } from "../Router";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import shadow from "@/assets/bgShadow/sh-big.svg";
const PageTitle = () => {
  const location = useLocation();
  const spliceLocation = useMemo(
    () => location.pathname.split("/").splice(1),
    [location]
  );
  return (
    <div className={`bounding-container ${st.title}`}>
      <ObserverAnimation
        className={st.title__body}
        component="section"
        typeAnimation="small-to-big"
      >
        <h1 className={st.title__header}>
          {translatePath[spliceLocation.at(-1) || ""]}
        </h1>

        <Breadcrumbs className={st.title__breadcrumbs} />
        <img src={shadow} className={st.title__shadow} alt="" />
      </ObserverAnimation>

      <div className={st.title__divider}></div>
    </div>
  );
};

export default PageTitle;
