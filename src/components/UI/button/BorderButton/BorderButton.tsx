import React, { FC } from "react";
import st from "./BorderButton.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const BorderButton: FC<Props> = ({ className = "", children, ...props }) => {
  return (
    <button className={`${st.btn} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default BorderButton;
