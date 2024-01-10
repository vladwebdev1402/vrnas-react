import React from "react";
import st from "./MainAboutUs.module.scss";
import BgShadowButton from "../UI/button/BgShadowButton/BgShadowButton";
import vrGlases from "@/assets/video/vr_glasses.png";
import man from "@/assets/man/manFinger.png";
import ImgBgVideoBlock from "../UI/ImgBgVideoBlock/ImgBgVideoBlock";
import ObserverAnimation from "../UI/ObserverAnimation/ObserverAnimation";
const MainAboutUs = () => {
  return (
    <section className={`bounding-container ${st.container} `}>
      <ImgBgVideoBlock
        visibleClassName={"left-to-right"}
        className={st.imgContainer}
        videoClassName={st.video}
        manImg={man}
        videoImg={vrGlases}
      />
      <div className={st.body}>
        <ObserverAnimation typeAnimation="down-to-up">
          <span className={`gradient_txt`}>ABOUT US</span>
        </ObserverAnimation>

        <ObserverAnimation className={st.body_title} typeAnimation="down-to-up">
          <h1>
            Bring your events to life like never before with our VR services.
          </h1>
        </ObserverAnimation>

        <ObserverAnimation
          className={`subtitle ${st.body_subtitle}`}
          typeAnimation="down-to-up"
        >
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.
        </ObserverAnimation>
        <ObserverAnimation
          className={`subtitle ${st.body_subtitle}`}
          typeAnimation="down-to-up"
        >
          <ul className={`${st.body_list}`}>
            <li className={st.list_item}>Cutting-Edge Technology</li>
            <li className={st.list_item}>Versatile Applications</li>
            <li className={st.list_item}>Affordable and Accessible</li>
          </ul>
        </ObserverAnimation>

        <ObserverAnimation
          className={`${st.body_btn}`}
          typeAnimation="down-to-up"
        >
          <BgShadowButton>read more</BgShadowButton>
        </ObserverAnimation>
      </div>
    </section>
  );
};

export default MainAboutUs;
