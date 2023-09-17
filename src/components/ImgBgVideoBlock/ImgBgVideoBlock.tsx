import React, { FC, RefObject, useRef } from "react";
import st from "./ImgBgVideoBlock.module.scss";
import MiniVideoContainer from "../MiniVideoContainer/MiniVideoContainer";
import { useObserve } from "../../hooks/useObserve";
interface Props {
  manImg: string;
  videoImg: string;
  className?: string;
  visibleClassName?: string;
}
const ImgBgVideoBlock: FC<Props> = ({
  manImg,
  videoImg,
  className = "",
  visibleClassName = "",
}) => {
  const imgRef = useRef(null);
  const visibleImg = useObserve(imgRef);
  return (
    <div
      className={`${st.imgContainer} ${className} ${
        visibleImg ? visibleClassName : st.notVisible
      }`}
      ref={imgRef}
    >
      <img className={st.manImg} src={manImg} alt="" />
      <MiniVideoContainer className={st.video} img={videoImg} />
    </div>
  );
};

export default ImgBgVideoBlock;
