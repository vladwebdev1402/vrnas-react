import React, { FC } from "react";
import st from "./ImgCircleBg.module.scss";
interface Props {
  img: string;
  className?: string;
}
const ImgCircleBg: FC<Props> = ({ img, className }) => {
  return (
    <div className={`${className} ${st.container}`}>
      <img src={img} alt="" />
    </div>
  );
};

export default ImgCircleBg;
