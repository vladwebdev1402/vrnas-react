import React, { FC, useRef } from "react";
import st from "./ImgBgVideoBlock.module.scss";
import MiniVideoContainer from "../Video/MiniVideoContainer/MiniVideoContainer";
import ObserverAnimation from "../ObserverAnimation/ObserverAnimation";
import { IAnimation } from "@/types/IAnimation";
interface Props {
  manImg: string;
  videoImg: string;
  className?: string;
  videoClassName?: string;
  visibleClassName?: IAnimation;
}
const ImgBgVideoBlock: FC<Props> = ({
  manImg,
  videoImg,
  className = "",
  videoClassName = "",
  visibleClassName = "none",
}) => {
  return (
    <ObserverAnimation
      typeAnimation={visibleClassName}
      className={`${st.imgContainer} ${className}`}
    >
      <img className={st.manImg} src={manImg} alt="" />
      <MiniVideoContainer
        className={`${st.video} ${videoClassName}`}
        img={videoImg}
      />
    </ObserverAnimation>
  );
};

export default ImgBgVideoBlock;
