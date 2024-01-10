import React from "react";
import st from "./AboutUs.module.scss";
import manInVr from "@/assets/video/manInVr.png";
import man from "@/assets/man/manLookLeft.png";
import ImgBgVideoBlock from "@/components/UI/ImgBgVideoBlock/ImgBgVideoBlock";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
const AboutUs = () => {
  return (
    <section className={`bounding-container ${st.container} `}>
      <div className={st.body}>
        <ObserverAnimation typeAnimation="down-to-up">
          <span className={`gradient_txt`}>ABOUT US</span>
        </ObserverAnimation>

        <ObserverAnimation className={st.body_title} typeAnimation="down-to-up">
          <h1>Bringing Your Vision to Life: Learn About VRNas.</h1>
        </ObserverAnimation>

        <ObserverAnimation
          className={`subtitle ${st.body_subtitle}`}
          typeAnimation="down-to-up"
        >
          <p>
            VRNas is a leading provider of VR services for education,
            entertainment, architecture, and events. Our mission is to bring the
            power of virtual reality to everyone, allowing them to explore new
            worlds, learn in new ways, and experience events in a whole new
            light.
          </p>
          <p>
            Our team consists of experienced VR developers, designers, and
            technicians who are passionate about VR and dedicated to delivering
            the highest quality work. We use the latest VR hardware and software
            to create immersive, interactive experiences that are tailored to
            your specific needs.
          </p>
          <p>
            From initial consultation to final delivery, we are committed to
            providing exceptional customer service. Our goal is to ensure that
            you are completely satisfied with every aspect of your VR
            experience.
          </p>
        </ObserverAnimation>
      </div>
      <ImgBgVideoBlock
        visibleClassName={"right-to-left"}
        className={st.imgContainer}
        videoClassName={st.video}
        manImg={man}
        videoImg={manInVr}
      />
    </section>
  );
};

export default AboutUs;
