import React from "react";
import st from "./WhatOurClientSays.module.scss";
import man from "../../assets/whatOurClientSays/man.png";
import ImgCircleBg from "../UI/ImgCircleBg/ImgCircleBg";
const WhatOurClientSays = () => {
  return (
    <section className={st.reviews}>
      <span className="gradient_txt">TESTIMONIAL</span>
      <h1 className={st.reviews__title}>What Our Clients Are Saying</h1>
      <ImgCircleBg className={st.circle__img} img={man} />
    </section>
  );
};

export default WhatOurClientSays;
