import React, { useRef } from "react";
import st from "./OurArticles.module.scss";
import BorderButton from "../UI/button/BorderButton/BorderButton";
import ArticleList from "./ArticleList";
import ArticleSlider from "./ArticleSlider";
import { useObserve } from "@/hooks/useObserve";
const OurArticles = () => {
  const head = useRef(null);
  const slider = useRef(null);
  const scroll = useRef(null);

  const headV = useObserve(head);
  const sliderV = useObserve(slider);
  const scrollV = useObserve(scroll);
  return (
    <section className={`${st.articles}`}>
      <div
        className={`bounding-container ${st.articles__head} ${
          headV ? "visibleToUp" : "notVisible"
        }`}
        ref={head}
      >
        <div className={st.articles__heading}>
          <span className={"gradient_txt"}>our articles</span>
          <h1>Stay Up-to-Date with Our VR Insights</h1>
        </div>
        <BorderButton className={st.btn__all}>see all</BorderButton>
      </div>
      <div className={st.articles__body}>
        <div
          className={`${st.popular} ${sliderV ? "visibleScale" : "notVisible"}`}
          ref={slider}
        >
          <div className={st.articles__title}>Popular Article</div>
          <div className={st.popular___body}>
            <ArticleSlider />
          </div>
        </div>
        <div className={st.recent}>
          <div
            className={`${scrollV ? "visibleToLeft" : "notVisible"}`}
            ref={scroll}
          >
            <div className={st.articles__title}>Recent Article</div>
            <div className={st.recent__body}>
              <ArticleList />
            </div>
          </div>
        </div>
        <BorderButton className={st.btn__all_mobile}>see all</BorderButton>
      </div>
    </section>
  );
};

export default OurArticles;
