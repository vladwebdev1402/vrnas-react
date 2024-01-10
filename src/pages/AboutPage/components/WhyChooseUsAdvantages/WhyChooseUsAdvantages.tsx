import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import React from "react";
import st from "./WhyChooseUsAdvantages.module.scss";
import Advantages from "@/components/Advantages/Advantages";
const WhyChooseUsAdvantages = () => {
  return (
    <section className={`${st.choose}`}>
      <div className="bounding-container ">
        <ObserverAnimation
          typeAnimation="down-to-up"
          className={st.choose__gradint}
        >
          <span className={`gradient_txt`}>WHY CHOOSE US</span>
        </ObserverAnimation>
        <ObserverAnimation
          className={st.choose__title}
          typeAnimation="down-to-up"
        >
          <h1>Empowering Your Virtual Reality Experience</h1>
        </ObserverAnimation>
        <Advantages className={st.choose__advantages} />
      </div>
    </section>
  );
};

export default WhyChooseUsAdvantages;
