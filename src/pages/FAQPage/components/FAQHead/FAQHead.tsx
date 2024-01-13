import React from "react";
import st from "./FAQHead.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import MansAside from "@/components/UI/MansAside/MansAside";

const FAQHead = () => {
  return (
    <div className={st.head}>
      <MansAside />
      <ObserverAnimation typeAnimation="down-to-up" className={st.head__body}>
        <span className={`gradient_txt`}>FAQ</span>
        <h1 className={st.head__title}>Frequently Asked Questions</h1>
        <div className={`subtitle ${st.head__subtitle}`}>
          At VRNas, we want to make sure that you have all the information you
          need to make informed decisions about our VR services. Here are some
          of the most common questions we receive:
        </div>
      </ObserverAnimation>
    </div>
  );
};

export default FAQHead;
