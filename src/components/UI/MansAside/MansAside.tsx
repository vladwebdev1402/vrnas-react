import React, { FC } from "react";
import st from "./MansAside.module.scss";
import man from "@/assets/man/man-in-vr-aside.png";

interface Props {
  st__left?: string;
  st__right?: string;
}

const MansAside: FC<Props> = ({ st__left = "", st__right = "" }) => {
  return (
    <>
      <img src={man} className={`${st__left} ${st.man__left}`} />
      <img src={man} className={`${st__right} ${st.man__right}`} />
    </>
  );
};

export default MansAside;
