import React, { FC } from "react";
import st from "./BgShadowButton.module.scss";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  myRef?: React.RefObject<any>;
}
const BgShadowButton: FC<Props> = ({
  className,
  children,
  myRef,
  ...props
}) => {
  return (
    <button {...props} className={`${className} ${st.btn}`} ref={myRef}>
      {children}
    </button>
  );
};

export default BgShadowButton;
