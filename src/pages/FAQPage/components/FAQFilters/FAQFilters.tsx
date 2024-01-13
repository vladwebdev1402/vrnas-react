import React, { FC } from "react";
import st from "./FAQFilters.module.scss";
import ObserverAnimation from "@/components/UI/ObserverAnimation/ObserverAnimation";
import BorderButton from "@/components/UI/button/BorderButton/BorderButton";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  currentValue: string;
  setCurrent: (value: string) => void;
}

const FAQFilters: FC<Props> = ({ filters, setCurrent, currentValue }) => {
  return (
    <ObserverAnimation typeAnimation="small-to-big" className={st.filters}>
      {filters.map((filter) => (
        <BorderButton
          className={st.filters__btn}
          active={currentValue === filter.value}
          styles={{
            notActive: st.filters__btn_notActive,
            active: st.filters__btn_active,
          }}
          onClick={() => setCurrent(filter.value)}
        >
          {filter.name}
        </BorderButton>
      ))}
    </ObserverAnimation>
  );
};

export default FAQFilters;
