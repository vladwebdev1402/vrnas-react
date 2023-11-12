import React, { FC } from "react";
import st from "./DarkBg.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}
const DarkBg: FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${className} ${st.gradientBorder}`} {...props}>
      <div className={st.bg}>{children}</div>
    </div>
  );
};

export default DarkBg;
