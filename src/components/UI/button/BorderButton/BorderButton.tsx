import React, { FC } from "react";
import st from "./BorderButton.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  styles?: {
    active?: string;
    notActive?: string;
  };
}
const BorderButton: FC<Props> = ({
  className = "",
  styles,
  active = false,
  children,
  ...props
}) => {
  return (
    <button
      className={`${st.btn} ${className} ${
        active ? styles?.active ?? "" : styles?.notActive ?? ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BorderButton;
