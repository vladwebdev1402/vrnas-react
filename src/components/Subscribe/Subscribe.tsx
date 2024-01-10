import React, { useState } from "react";
import st from "./Subscribe.module.scss";
import tg from "@/assets/socialIcons/telegram.svg";
import MailIcon from "../UI/icons/MailIcon";
import ObserverAnimation from "../UI/ObserverAnimation/ObserverAnimation";
const Subscribe = () => {
  const [value, setValue] = useState("");

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <ObserverAnimation
      className="bounding-container"
      typeAnimation="down-to-up"
      component="section"
    >
      <div className={`${st.subscribe}  `}>
        <h1 className={st.subscribe__head}>
          Subscribe to our newsletter for latest updates
        </h1>
        <form className={st.subscribe__form} onSubmit={submit}>
          <MailIcon className={st.subscribe__icon} />
          <input
            className={st.subscribe__input}
            value={value}
            onChange={change}
            placeholder="Enter your email address"
          />
          <button className={st.subscribe__btn}>
            <img src={tg} alt="tg" />
          </button>
        </form>
      </div>
    </ObserverAnimation>
  );
};

export default Subscribe;
