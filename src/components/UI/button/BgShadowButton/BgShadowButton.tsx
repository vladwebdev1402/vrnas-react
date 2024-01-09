import React, { FC, useRef } from "react";
import st from "./BgShadowButton.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const BgShadowButton: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button {...props} className={`${className} ${st.btn}`}>
      {children}
    </button>
  );
};

export default BgShadowButton;
