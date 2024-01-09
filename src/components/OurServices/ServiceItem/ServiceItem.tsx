import React, { FC, useRef } from "react";
import st from "./ServiceItem.module.scss";
import { useObserve } from "../../../hooks/useObserve";
import BorderButton from "../../UI/button/BorderButton/BorderButton";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
interface Props {
  img: string;
  title: string;
  description: string;
}
const ServiceItem: FC<Props> = ({ img, title, description }) => {
  return (
    <ObserverAnimation
      className={`${st.service}`}
      typeAnimation="down-to-up"
      threshold={0.9}
    >
      <div className={st.service__img}>
        <img src={img} alt="" />
      </div>
      <div className={st.service__title}>{title}</div>
      <div className={st.service__subtitle}>{description}</div>
      <div className={st.service__option}>
        <BorderButton className={st.service__btn}>learn more</BorderButton>
      </div>
    </ObserverAnimation>
  );
};

export default ServiceItem;
