import React, { FC, useEffect, useRef, useState } from "react";
import st from "./DropInfoMenu.module.scss";
import arrowImg from "../../../assets/icons/arrow.svg";
import { useAnimateHeight } from "../../../hooks/useAnimateHeihgt";
interface Props {
  title: string;
  description: string;
  withBackground?: boolean;
}
const DropInfoMenu: FC<Props> = ({
  title,
  description,
  withBackground = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const clickMenu = () => {
    setIsOpen(!isOpen);
  };

  useAnimateHeight(ref, isOpen);

  return (
    <div
      className={`${withBackground ? st.menu_withBackground : ""} ${
        isOpen ? st.menu_open : ""
      }`}
    >
      <button className={st.menu__head} onClick={clickMenu}>
        <div className={st.menu__title}>{title}</div>
        <div className={st.menu__title__icon}>
          <img src={arrowImg} alt="" />
        </div>
      </button>
      <div className={st.menu__description} ref={ref}>
        {description}
      </div>
    </div>
  );
};

export default DropInfoMenu;
