import React, { FC, useRef } from "react";
import st from "./ServiceItem.module.scss";
import { useObserve } from "../../../hooks/useObserve";
import BorderButton from "../../UI/button/BorderButton/BorderButton";
interface Props {
  img: string;
  title: string;
  description: string;
}
const ServiceItem: FC<Props> = ({ img, title, description }) => {
  const ref = useRef(null);
  const isVisible = useObserve(ref, 0.9);
  return (
    <div
      className={`${st.service} ${isVisible ? "visibleToUp" : "notVisible"}`}
      ref={ref}
    >
      <div className={st.service__img}>
        <img src={img} alt="" />
      </div>
      <div className={st.service__title}>{title}</div>
      <div className={st.service__subtitle}>{description}</div>
      <div className={st.service__option}>
        <BorderButton className={st.service__btn}>learn more</BorderButton>
      </div>
    </div>
  );
};

export default ServiceItem;
