import React, { useRef, useState } from "react";
import st from "./MainAboutUs.module.scss";
import BgShadowButton from "../UI/button/BgShadowButton/BgShadowButton";
import MiniVideoContainer from "../MiniVideoContainer/MiniVideoContainer";
import vrGlases from "../../assets/mainAboutUs/vr_glasses.png";
import man from "../../assets/mainAboutUs/man.png";
import { useObserve } from "../../hooks/useObserve";
const MainAboutUs = () => {
  const gradientRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const listRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const visibileGradient = useObserve(gradientRef, 1);
  const visibileTitle = useObserve(titleRef, 1);
  const visibileSubtitle = useObserve(subtitleRef, 1);
  const visibileList = useObserve(listRef, 1);
  const visibileImg = useObserve(imgRef);
  const visibileBtn = useObserve(btnRef);

  return (
    <section
      className={`bounding-container ${st.container} ${
        visibileGradient ? st.visibleUp : ""
      }`}
    >
      <div
        className={`${st.imgContainer} ${
          visibileImg ? st.visibleImg : st.notVisible
        }`}
        ref={imgRef}
      >
        <img className={st.manImg} src={man} alt="" />
        <MiniVideoContainer className={st.video} img={vrGlases} />
      </div>
      <div className={st.body}>
        <span
          className={`gradient_txt ${
            visibileGradient ? st.visibleUp : st.notVisible
          }`}
          ref={gradientRef}
        >
          ABOUT US
        </span>
        <h1
          className={`${st.body_title} ${
            visibileTitle ? st.visibleUp : st.notVisible
          }`}
          ref={titleRef}
        >
          Bring your events to life like never before with our VR services.
        </h1>
        <div
          className={`subtitle ${st.body_subtitle} ${
            visibileSubtitle ? st.visibleUp : st.notVisible
          }`}
          ref={subtitleRef}
        >
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.
        </div>
        <ul
          className={`${st.body_list} ${
            visibileList ? st.visibleUp : st.notVisible
          }`}
          ref={listRef}
        >
          <li className={st.list_item}>Cutting-Edge Technology</li>
          <li className={st.list_item}>Versatile Applications</li>
          <li className={st.list_item}>Affordable and Accessible</li>
        </ul>
        <BgShadowButton
          className={`${st.body_btn} ${
            visibileBtn ? st.visibleUp : st.notVisible
          }`}
          myRef={btnRef}
        >
          read more
        </BgShadowButton>
      </div>
    </section>
  );
};

export default MainAboutUs;
