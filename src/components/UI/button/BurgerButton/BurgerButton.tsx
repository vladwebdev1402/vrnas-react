import React, { FC } from "react";
import BorderButton from "../BorderButton/BorderButton";
import st from "./BurgerButton.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const BurgerButton: FC<Props> = ({ active, ...props }) => {
  return (
    <BorderButton className={st.burger} {...props}>
      <div
        className={`${st.burger__logo} ${active ? st.burger__logo_active : ""}`}
      >
        <div className={`${st.burger__line} ${st.line1}`}></div>
        <div className={`${st.burger__line} ${st.line2}`}></div>
        <div className={`${st.burger__line} ${st.line3}`}></div>
      </div>
    </BorderButton>
  );
};

export default BurgerButton;
