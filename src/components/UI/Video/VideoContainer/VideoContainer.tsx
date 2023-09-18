import React, { FC, useRef } from "react";
import st from "./VideoContainer.module.scss";
import playBigImg from "../../../../assets/icons/playButtonBig.svg";
import playSmallImg from "../../../../assets/icons/playButtonSmall.svg";
import BgShadowButton from "../../button/BgShadowButton/BgShadowButton";
import { useObserve } from "../../../../hooks/useObserve";
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
  const gradientRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const gradientVis = useObserve(gradientRef);
  const titleVis = useObserve(titleRef);
  const videoVis = useObserve(videoRef);

  return (
    <section className={`${st.video} bounding-container`}>
      <span
        className={`gradient_txt ${gradientVis ? "visibleToUp" : "notVisible"}`}
        ref={gradientRef}
      >
        {gradient}
      </span>
      <h1
        ref={titleRef}
        className={`${st.video__title} ${
          titleVis ? "visibleToUp" : "notVisible"
        }`}
      >
        {title}
      </h1>
      <div
        ref={videoRef}
        className={`${st.video__body} ${
          videoVis ? "visibleToUp" : "notVisible"
        }`}
      >
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
      </div>
      <BgShadowButton className={st.video__btn}>get started</BgShadowButton>
    </section>
  );
};

export default VideoContainer;
