import React, { useRef } from "react";
import st from "./HeadAbout.module.scss";
import manvr from "../../assets/headAbout/manvr.png";
import user1 from "../../assets/headAbout/users/user1.png";
import user2 from "../../assets/headAbout/users/user2.png";
import user3 from "../../assets/headAbout/users/user3.png";
import videoIm from "../../assets/headAbout/video.png";
import BgShadowButton from "../UI/button/BgShadowButton/BgShadowButton";
import Advantages from "../Advantages/Advantages";
import { useObserve } from "../../hooks/useObserve";
import MiniVideoContainer from "../MiniVideoContainer/MiniVideoContainer";
const MainHeadAbout = () => {
  const vrManRef = useRef(null);
  const vrManVisible = useObserve(vrManRef);
  return (
    <section className={`${st.page_item}`}>
      <div className={`${st.headAbout_body} bounding-container`}>
        <div className={`${st.headAbout_main}`}>
          <h1 className={`${st.headAbout_main_title}`}>
            Immerse Yourself in Virtual Reality
          </h1>
          <div className={`${st.headAbout_main_subtitle} subtitle`}>
            Experience Unforgettable Events in VR. Bring your events to life
            like never before with our VR services
          </div>
          <BgShadowButton className={st.headAbout_main_btn}>
            discover more
          </BgShadowButton>
          <div className={st.headAbout_main_users_info}>
            <div className={st.users_wrapper}>
              <div className={st.users_wrapper_img_container}>
                <img src={user1} alt="" />
                <img src={user2} alt="" />
                <img src={user3} alt="" />
                <span className={st.users_wrapper_subtitle}>
                  <span className={st.boldTxt}>32k+</span> Happy Client
                </span>
              </div>
            </div>
            <MiniVideoContainer className={st.video} img={videoIm} />
          </div>
        </div>
        <div
          className={`${st.headAbout_body_img} ${
            vrManVisible ? st.headAbout_body_img_visible : ""
          }`}
          ref={vrManRef}
        >
          <img src={manvr} alt="" />
        </div>
      </div>
      <div className={`bounding-container`}>
        <Advantages />
      </div>
    </section>
  );
};

export default MainHeadAbout;
