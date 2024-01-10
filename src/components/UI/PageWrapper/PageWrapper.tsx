import React, { FC, useEffect } from "react";
import bgAngle from "../../../assets/bg-angle.svg";
import st from "./PageWrapper.module.scss";
interface Props {
  children: React.ReactNode;
}
const PageWrapper: FC<Props> = ({ children }) => {
  return (
    <div className={st.page}>
      <img className={st.bgAngle} src={bgAngle} alt="" />
      {children}
    </div>
  );
};

export default PageWrapper;
