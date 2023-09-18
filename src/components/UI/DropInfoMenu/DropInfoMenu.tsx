import React, { FC, useEffect, useRef, useState } from "react";
import st from "./DropInfoMenu.module.scss";
import arrowImg from "../../../assets/icons/arrow.svg";
interface Props {
  title: string;
  description: string;
}
const DropInfoMenu: FC<Props> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const clickMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (ref.current && isOpen) {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    } else if (ref.current) {
      ref.current.style.height = "0px";
    }
  }, [isOpen, ref]);

  return (
    <div className={`menu ${isOpen ? st.menu_open : ""}`}>
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
