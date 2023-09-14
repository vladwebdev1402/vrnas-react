import React, { FC } from "react";
import st from "./AdvantagesItem.module.scss";
interface Props {
  img: string;
  title: string;
  subtitle: string;
}
const AdvantagesItem: FC<Props> = ({ img, title, subtitle }) => {
  return (
    <div className={st.container}>
      <div className={st.imgContainer}>
        <img src={img} />
      </div>
      <div className={st.title}>{title}</div>
      <div className={st.subtitle}>{subtitle}</div>
    </div>
  );
};

export default AdvantagesItem;
