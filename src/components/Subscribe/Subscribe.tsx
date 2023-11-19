import React, { useRef, useState } from "react";
import st from "./Subscribe.module.scss";
import tg from "@/assets/footerIcons/telegram.svg";
import MailIcon from "../UI/icons/MailIcon";
import { useObserve } from "@/hooks/useObserve";
const Subscribe = () => {
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const isVisible = useObserve(ref);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      ref={ref}
      className={`bounding-container ${
        isVisible ? "visibleToUp" : "notVisible"
      }`}
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
    </section>
  );
};

export default Subscribe;
