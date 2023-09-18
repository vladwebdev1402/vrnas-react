import React, { FC, useRef } from "react";
import st from "./BgShadowButton.module.scss";
import { useObserve } from "../../../../hooks/useObserve";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const BgShadowButton: FC<Props> = ({ className, children, ...props }) => {
  const ref = useRef(null);
  const isVisible = useObserve(ref);
  return (
    <button
      ref={ref}
      {...props}
      className={`${className} ${st.btn} ${
        isVisible ? "visibleToUp" : "notVisible"
      }`}
    >
      {children}
    </button>
  );
};

export default BgShadowButton;
