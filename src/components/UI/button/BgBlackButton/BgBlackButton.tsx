import React, { FC } from "react";
import st from "./BgBlackButton.module.scss";
import BorderButton from "../BorderButton/BorderButton";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const BgBlackButton: FC<Props> = ({ className = "", children, ...props }) => {
  return (
    <BorderButton className={`${st.btn} ${className}`} {...props}>
      {children}
    </BorderButton>
  );
};

export default BgBlackButton;
