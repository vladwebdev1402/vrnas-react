import React from "react";
import st from "./WhyChooseUs.module.scss";
import WhyChooseList from "@/components/WhyChooseUsList/WhyChooseList";
import man from "@/assets/man/manRunning.png";
import vrGlasses from "@/assets/video/vr_glasses.png";
import ImgBgVideoBlock from "@/components/UI/ImgBgVideoBlock/ImgBgVideoBlock";
const WhyChooseUs = () => {
  return (
    <section className={`bounding-container ${st.choose}`}>
      <div className={st.choose__body}>
        <ImgBgVideoBlock
          className={st.choose__man}
          videoClassName={st.choose__video}
          manImg={man}
          videoImg={vrGlasses}
          visibleClassName="left-to-right"
        />
      </div>
      <WhyChooseList
        className={st.choose__list}
        st={{ title: st.choose__list__title, body: st.choose__list__body }}
      />
    </section>
  );
};

export default WhyChooseUs;
