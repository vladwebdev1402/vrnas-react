import React from "react";
import st from "./ShortFAQ.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import DropInfoMenu from "@/components/UI/DropInfoMenu/DropInfoMenu";
const ShortFAQ = () => {
  return (
    <section className={`bounding-container ${st.faq}`}>
      <div className={st.faq__header}>
        <ObserverAnimation typeAnimation="up-to-down">
          <span className={`gradient_txt`}>faq</span>
        </ObserverAnimation>

        <ObserverAnimation typeAnimation="left-to-right">
          <h1 className={st.faq__title}>Frequently Asked Questions</h1>
        </ObserverAnimation>

        <ObserverAnimation typeAnimation="right-to-left">
          <div className={`subtitle ${st.faq__subtitle}`}>
            At VRNas, we want to make sure that you have all the information you
            need to make informed decisions about our VR services. Here are some
            of the most common questions we receive:
          </div>
        </ObserverAnimation>
      </div>
      <ObserverAnimation
        className={`${st.faq__list}`}
        typeAnimation="small-to-big"
      >
        <DropInfoMenu
          title="What is virtual reality?"
          description="Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more."
          withBackground
        />
        <DropInfoMenu
          title="What types of VR services do you offer?"
          description="Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment."
          withBackground
        />
        <DropInfoMenu
          title="How much does your VR services cost?"
          description="Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more."
          withBackground
        />
        <DropInfoMenu
          title="What equipment do I need to use your VR services?"
          description="Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment."
          withBackground
        />
        <DropInfoMenu
          title="Can I try out your VR services before I commit?"
          description="Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more."
          withBackground
        />
        <DropInfoMenu
          title="What is virtual reality?"
          description="Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment."
          withBackground
        />
      </ObserverAnimation>
    </section>
  );
};

export default ShortFAQ;
