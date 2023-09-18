import React, { FC, useRef } from "react";
import st from "./WhyChooseUs.module.scss";
import ImgBgVideoBlock from "../ImgBgVideoBlock/ImgBgVideoBlock";
import manImg from "../../assets/whyChoose/man.png";
import videoImg from "../../assets/whyChoose/video.png";
import DropInfoMenu from "../UI/DropInfoMenu/DropInfoMenu";
import { useObserve } from "../../hooks/useObserve";
interface Props {}
const WhyChooseUs: FC<Props> = ({}) => {
  const gradientRef = useRef(null);
  const titleRef = useRef(null);
  const bodyInfoRef = useRef(null);
  const gradientVis = useObserve(gradientRef);
  const titleVis = useObserve(titleRef);
  const bodyVis = useObserve(bodyInfoRef);
  return (
    <section>
      <div className={`bounding-container ${st.choose}`}>
        <div className={st.choose__body}>
          <span
            className={`gradient_txt ${
              gradientVis ? "visibleToUp" : "notVisible"
            }`}
            ref={gradientRef}
          >
            why choose us
          </span>
          <h1
            className={`${st.choose__body__title} ${
              titleVis ? "visibleToUp" : "notVisible"
            }`}
            ref={titleRef}
          >
            Why Choose Us for Your VR Needs
          </h1>
          <div
            className={`${st.choose__body__info} ${
              bodyVis ? "visibleToUp" : "notVisible"
            }`}
            ref={bodyInfoRef}
          >
            <DropInfoMenu
              title="Passionate and Experienced Team"
              description="We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
            />
            <DropInfoMenu
              title="Customized Solutions"
              description="We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
            />
            <DropInfoMenu
              title="Exceptional Customer Service"
              description="We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences."
            />
          </div>
        </div>
        <div className={st.choose__img}>
          <ImgBgVideoBlock
            className={st.choose__img_man}
            videoClassName={st.choose__img_video}
            visibleClassName="visibleToLeft"
            manImg={manImg}
            videoImg={videoImg}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
