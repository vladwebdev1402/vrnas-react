import React, { FC } from "react";
import st from "./WhyChooseUs.module.scss";
import ImgBgVideoBlock from "@/components/UI/ImgBgVideoBlock/ImgBgVideoBlock";
import manImg from "@/assets/whyChoose/man.png";
import videoImg from "@/assets/whyChoose/video.png";
import WhyChooseList from "@/components/WhyChooseUsList/WhyChooseList";
interface Props {}
const WhyChooseUs: FC<Props> = ({}) => {
  return (
    <section>
      <div className={`bounding-container ${st.choose}`}>
        <WhyChooseList
          st={{
            title: st.choose__body__title,
            body: st.choose__body__info,
          }}
          className={st.choose__body}
        />

        <div className={st.choose__img}>
          <ImgBgVideoBlock
            className={st.choose__img_man}
            videoClassName={st.choose__img_video}
            visibleClassName="right-to-left"
            manImg={manImg}
            videoImg={videoImg}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
