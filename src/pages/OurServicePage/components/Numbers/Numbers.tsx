import React from "react";
import st from "./Numbers.module.scss";
import AnimationNumber from "./AnimationNumber";
const Numbers = () => {
  return (
    <section className={`${st.numbers}`}>
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
    </section>
  );
};

export default Numbers;
