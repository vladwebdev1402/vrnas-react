import React from "react";
import st from "./HeadAbout.module.scss";
import manvr from "../../assets/headAbout/manvr.png";
import user1 from "../../assets/headAbout/users/user1.png";
import user2 from "../../assets/headAbout/users/user2.png";
import user3 from "../../assets/headAbout/users/user3.png";
import videoIm from "../../assets/headAbout/video.png";
import playIcon from "../../assets/icons/playbutton.svg";
import BgShadowButton from "../UI/button/BgShadowButton/BgShadowButton";
import Advantages from "../Advantages/Advantages";
const HeadAbout = () => {
  return (
    <section className={`${st.page_item} bounding-container`}>
      <div className={`${st.headAbout_body} `}>
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
                <img src={user1} />
                <img src={user2} />
                <img src={user3} />
                <span className={st.users_wrapper_subtitle}>
                  <span className={st.boldTxt}>32k+</span> Happy Client
                </span>
              </div>
            </div>
            <div className={st.headAbout_main_video}>
              <img className={st.headAbout_main_video_play} src={playIcon} />

              <img src={videoIm} />
            </div>
          </div>
        </div>
        <div className={`${st.headAbout_body_img}`}>
          <img src={manvr} />
        </div>
      </div>
      <Advantages />
    </section>
  );
};

export default HeadAbout;
