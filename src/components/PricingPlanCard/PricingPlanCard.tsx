import { IPricingPlan } from "@/types/IPricingPlan";
import st from "./PricingPlanCard.module.scss";
import React, { FC } from "react";
import AnimationNumber from "../UI/AnimationNumber/AnimationNumber";
import BgBlackButton from "../UI/button/BgBlackButton/BgBlackButton";
interface Props {
  pricing: IPricingPlan;
  className?: string;
}
const PricingPlanCard: FC<Props> = ({ pricing, className }) => {
  return (
    <div className={`${className} ${st.pricing}`}>
      <div className={st.pricing__body}>
        <div className={st.pricing__name}>{pricing.name}</div>
        <div className={st.pricing__price}>
          <AnimationNumber prev={"$"} num={pricing.price}>
            <span className={st.pricing__monthTxt}>/month</span>
          </AnimationNumber>
        </div>
        <div className={st.pricing__description}>{pricing.description}</div>
        <ul className={st.pricing__options}>
          {pricing.options.map((option, idx) => (
            <li className={st.pricing__option} key={idx}>
              {option.name}
            </li>
          ))}
        </ul>
        <BgBlackButton className={st.pricing__button}>
          Get 14 Days Free Trial
        </BgBlackButton>
      </div>
    </div>
  );
};

export default PricingPlanCard;
