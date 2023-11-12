import React, { useRef } from "react";
import st from "./AffrodableServices.module.scss";
import AffrodibleList from "./AffrodibleList/AffrodibleList";
import image from "@/assets/ourPricing/our_pricing.png";
import BgShadowButton from "../UI/button/BgShadowButton/BgShadowButton";
import { useObserve } from "@/hooks/useObserve";

const AffrodableServices = () => {
  const gradient = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  const body = useRef(null);

  const gradientVis = useObserve(gradient);
  const titleVis = useObserve(title);
  const descriptionVis = useObserve(description);
  const bodyVis = useObserve(body);

  return (
    <section className={`bounding-container ${st.affrodableServices}`}>
      <div
        ref={gradient}
        className={`gradient_txt ${gradientVis ? "visibleToUp" : "notVisible"}`}
      >
        <span className={`gradient_txt`}>our pricing</span>
      </div>

      <h1
        ref={title}
        className={`${st.affrodable__title} ${
          titleVis ? "visibleToUp" : "notVisible"
        }`}
      >
        Affordable VR Services for Everyone
      </h1>
      <div
        ref={description}
        className={`subtitle ${st.affrodable_subtitle} ${
          descriptionVis ? "visibleToUp" : "notVisible"
        }`}
      >
        At VRNas, we believe that everyone should have access to the benefits of
        VR. That's why we offer a range of pricing options to meet the needs of
        any budget.
      </div>

      <div
        ref={body}
        className={`${st.affrodable__body} ${
          bodyVis ? "visibleToUp" : "notVisible"
        }`}
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
      </div>
    </section>
  );
};

export default AffrodableServices;
