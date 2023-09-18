import React, { FC } from "react";
import st from "./VideoContainer.module.scss";
import BgShadowButton from "../UI/button/BgShadowButton/BgShadowButton";
import playBigImg from "../../assets/icons/playButtonBig.svg";
import playSmallImg from "../../assets/icons/playButtonSmall.svg";
interface Props {
  gradient: string;
  title: string;
  img: string;
  startedLink: string;
}
const VideoContainer: FC<Props> = ({ gradient, title, img, startedLink }) => {
  return (
    <section className={`${st.video} bounding-container`}>
      <span className="gradient_txt">{gradient}</span>
      <h1 className={st.video__title}>{title}</h1>
      <div className={st.video__body}>
        <img className={st.video__bg} src={img} alt="" />
        <img className={st.video__play_big} src={playBigImg} alt="" />
        <div className={st.video__options}>
          <img className={st.video__play_small} src={playSmallImg} alt="" />
          <div className={st.video__progress}>
            <div className={st.video__progress_all}></div>
            <div
              className={st.video__progress__current}
              style={{ width: "8px" }}
            ></div>
            <div
              className={st.video__progress__load}
              style={{ width: "100px" }}
            ></div>
          </div>
        </div>
      </div>
      <BgShadowButton className={st.video__btn}>get started</BgShadowButton>
    </section>
  );
};

export default VideoContainer;
