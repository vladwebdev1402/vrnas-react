import React from "react";
import st from "./Numbers.module.scss";
import AnimationNumber from "./AnimationNumber";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
const Numbers = () => {
  return (
    <ObserverAnimation
      typeAnimation="big-to-small"
      component="section"
      className={`${st.numbers}`}
    >
      <div className={`bounding-container  ${st.numbers__body}`}>
        <div className={st.numbers__block}>
          <span className={`gradient_txt`}>HAPPY CLIENTS</span>
          <AnimationNumber className={st.numbers__number} num={123}>
            k+
          </AnimationNumber>
        </div>
        <div className={st.numbers__block}>
          <span className={`gradient_txt`}>PROJECT COMPLETE</span>
          <AnimationNumber className={st.numbers__number} num={300}>
            k+
          </AnimationNumber>
        </div>
        <div className={st.numbers__block}>
          <span className={`gradient_txt`}>YEARS EXPERIENCE</span>
          <AnimationNumber className={st.numbers__number} num={10}>
            +
          </AnimationNumber>
        </div>
      </div>
    </ObserverAnimation>
  );
};

export default Numbers;
