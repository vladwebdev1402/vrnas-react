import React from "react";
import st from "./PricingList.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import { pricing } from "./data/pricing";
import PricingPlanCard from "@/components/PricingPlanCard/PricingPlanCard";
const PricingList = () => {
  return (
    <section className={`bounding-container ${st.pricing}`}>
      <ObserverAnimation
        typeAnimation="down-to-up"
        className={st.pricing__header}
      >
        <span className={`gradient_txt`}>PRICING</span>
        <h1 className={st.pricing__title}>Pricing Plans</h1>
        <div className={`subtitle ${st.pricing__subtitle}`}>
          Choose the pricing plan that fits your needs and budget. All plans
          come with a free trial period so you can test out our service and see
          which plan works best for you.
        </div>
      </ObserverAnimation>
      <ObserverAnimation
        typeAnimation="small-to-big"
        className={st.pricing__list}
        threshold={0.1}
      >
        {pricing.map((pricing) => (
          <PricingPlanCard
            className={st.pricing__item}
            pricing={pricing}
            key={pricing.id}
          />
        ))}
      </ObserverAnimation>
    </section>
  );
};

export default PricingList;
