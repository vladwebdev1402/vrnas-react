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
    <ObserverAnimation
      component="section"
      typeAnimation="big-to-small"
      className={`bounding-container ${st.title}`}
    >
      <div className={st.title__body}>
        <h1 className={st.title__header}>
          {translatePath[spliceLocation.at(-1) || ""]}
        </h1>

        <Breadcrumbs className={st.title__breadcrumbs} />
        <img src={shadow} className={st.title__shadow} alt="" />
      </div>
      <div className={st.title__divider}></div>
    </ObserverAnimation>
  );
};

export default PageTitle;
