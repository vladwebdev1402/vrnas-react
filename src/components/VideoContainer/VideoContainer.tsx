import React, { FC } from "react";
import st from "./VideoContainer.module.scss";
import playIcon from "../../assets/icons/playbutton.svg";
interface Props {
  img: string;
  className?: string;
}
const VideoContainer: FC<Props> = ({ img, className = "" }) => {
  return (
    <div className={`${st.video} ${className}`}>
      <img className={st.video__play} src={playIcon} alt="" />
      <img src={img} alt="" />
    </div>
  );
};

export default VideoContainer;
