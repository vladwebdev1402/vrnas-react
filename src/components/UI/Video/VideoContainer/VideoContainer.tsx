import React, { FC } from "react";
import st from "./VideoContainer.module.scss";
import playBigImg from "../../../../assets/icons/playButtonBig.svg";
import playSmallImg from "../../../../assets/icons/playButtonSmall.svg";
import BgShadowButton from "../../button/BgShadowButton/BgShadowButton";
import ObserverAnimation from "../../ObserverAnimation/ObserverAnimation";
interface Props {
  gradient: string;
  title: string;
  img: string;
  nameMarker: string;
  videoTitle: string;
  startedLink: string;
}
const VideoContainer: FC<Props> = ({
  gradient,
  title,
  img,
  startedLink,
  videoTitle,
  nameMarker,
}) => {
  return (
    <section className={`${st.video} bounding-container`}>
      <ObserverAnimation typeAnimation="down-to-up">
        <span className={`gradient_txt`}>{gradient}</span>
      </ObserverAnimation>
      <ObserverAnimation className={st.video__title} typeAnimation="down-to-up">
        <h1>{title}</h1>
      </ObserverAnimation>
      <ObserverAnimation className={st.video__body} typeAnimation="down-to-up">
        <img className={st.video__bg} src={img} alt="" />
        <img className={st.video__play_big} src={playBigImg} alt="" />
        <div className={st.video__options}>
          <img className={st.video__play_small} src={playSmallImg} alt="" />
          <div className={st.video__progress}>
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
        <div className={st.video__marcers}>
          <div className={st.video__marcers__marcer}>{nameMarker}</div>
          <div className={st.video__marcers__title}>{videoTitle}</div>
        </div>
      </ObserverAnimation>

      <ObserverAnimation className={st.video__btn} typeAnimation="down-to-up">
        <BgShadowButton>get started</BgShadowButton>
      </ObserverAnimation>
    </section>
  );
};

export default VideoContainer;
