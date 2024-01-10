import React, { FC } from "react";
import ObserverAnimation from "../UI/ObserverAnimation/ObserverAnimation";
import DropInfoMenu from "../UI/DropInfoMenu/DropInfoMenu";
import stl from "./WhyChooseUsList.module.scss";
interface Props {
  st: {
    title: string;
    body: string;
  };
  className?: string;
}

const WhyChooseList: FC<Props> = ({ st, className }) => {
  return (
    <div className={className}>
      <ObserverAnimation typeAnimation="down-to-up">
        <span className={`gradient_txt`}>why choose us</span>
      </ObserverAnimation>

      <ObserverAnimation className={st.title} typeAnimation="down-to-up">
        <h1>Why Choose Us for Your VR Needs</h1>
      </ObserverAnimation>
      <ObserverAnimation
        className={`${stl.list} ${st.body}`}
        typeAnimation="down-to-up"
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
      </ObserverAnimation>
    </div>
  );
};

export default WhyChooseList;
