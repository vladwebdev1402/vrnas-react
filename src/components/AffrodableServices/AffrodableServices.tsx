import React from "react";
import st from "./AffrodableServices.module.scss";
import AffrodibleList from "./AffrodibleList/AffrodibleList";
import image from "@/assets/ourPricing/our_pricing.png";
import BgShadowButton from "../UI/button/BgShadowButton/BgShadowButton";
import ObserverAnimation from "../UI/ObserverAnimation/ObserverAnimation";

const AffrodableServices = () => {
  return (
    <section className={`bounding-container ${st.affrodableServices}`}>
      <ObserverAnimation typeAnimation="down-to-up">
        <span className={`gradient_txt`}>our pricing</span>
      </ObserverAnimation>
      <ObserverAnimation typeAnimation="down-to-up">
        <h1 className={`${st.affrodable__title}`}>
          Affordable VR Services for Everyone
        </h1>
      </ObserverAnimation>
      <ObserverAnimation
        className={`subtitle ${st.affrodable_subtitle}`}
        typeAnimation="down-to-up"
      >
        At VRNas, we believe that everyone should have access to the benefits of
        VR. That's why we offer a range of pricing options to meet the needs of
        any budget.
      </ObserverAnimation>
      <ObserverAnimation
        className={`${st.affrodable__body}`}
        typeAnimation="down-to-up"
      >
        <AffrodibleList />
        <div className={st.affrodable__image}>
          <img src={image} alt="" />
        </div>
        <div className={st.affrodable__buy}>
          <span className={st.buy__small}>Start from</span>
          <span className={st.buy__big}>$99</span>
          <BgShadowButton className={st.buy__btn}>get started</BgShadowButton>
          <span className={st.buy__footer}>30 Days Moneyback Guarantee</span>
        </div>
      </ObserverAnimation>
    </section>
  );
};

export default AffrodableServices;
