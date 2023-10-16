import React, { useRef } from "react";
import st from "./WhatOurClientSays.module.scss";
import man from "../../assets/whatOurClientSays/man.png";
import ImgCircleBg from "../UI/ImgCircleBg/ImgCircleBg";
import RevieItem from "./ReviewItem/RevieItem";
import { useObserve } from "../../hooks/useObserve";
const WhatOurClientSays = () => {
  const ref = useRef(null);
  const isVisible = useObserve(ref);

  return (
    <section
      className={`${st.reviews} ${
        isVisible ? st.reviews_visible : "notVisible"
      }`}
      ref={ref}
    >
      <span className="gradient_txt">TESTIMONIAL</span>
      <h1 className={st.reviews__title}>What Our Clients Are Saying</h1>
      <ImgCircleBg className={st.circle__img} img={man} />
      <RevieItem
        img={""}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        jobTitle="CEO Anono"
        name="Robert Fox"
        className={st.review_1}
      />
      <RevieItem
        img={""}
        description="Voluptates obcaecati ad magnam non dicta! Inventore maxime deserunt ratione?"
        jobTitle="Producer"
        name="Gerbert Dullsun"
        className={st.review_2}
      />
      <RevieItem
        img={""}
        description="Lorem ipsum dolor sit amet."
        jobTitle="Main charter"
        name="Keyanu Rocks"
        className={st.review_3}
      />
      <RevieItem
        img={""}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nam, illum amet pariatur, nisi eligendi perspiciatis iste eius, unde facere ab quis!"
        jobTitle="Adminstrator"
        name="Ron Potter"
        className={st.review_4}
      />
      <RevieItem
        img={""}
        description="Nam cumque, similique voluptatem aperiam vel laborum voluptatum."
        jobTitle="EVO Anono"
        name="Albert Socks"
        className={st.review_5}
      />
    </section>
  );
};

export default WhatOurClientSays;
