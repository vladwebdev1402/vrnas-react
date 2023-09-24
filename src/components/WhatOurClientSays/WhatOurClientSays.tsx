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
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        jobTitle="CEO Anono"
        name="Robert Fox"
        className={st.review_2}
      />
      <RevieItem
        img={""}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        jobTitle="CEO Anono"
        name="Robert Fox"
        className={st.review_3}
      />
      <RevieItem
        img={""}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        jobTitle="CEO Anono"
        name="Robert Fox"
        className={st.review_4}
      />
      <RevieItem
        img={""}
        description="The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs."
        jobTitle="CEO Anono"
        name="Robert Fox"
        className={st.review_5}
      />
    </section>
  );
};

export default WhatOurClientSays;
