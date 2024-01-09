import React from "react";
import st from "./OurArticles.module.scss";
import BorderButton from "../UI/button/BorderButton/BorderButton";
import ArticleList from "./ArticleList";
import ArticleSlider from "./ArticleSlider";
import ObserverAnimation from "../UI/ObserverAnimation/ObserverAnimation";
const OurArticles = () => {
  return (
    <section className={`${st.articles}`}>
      <ObserverAnimation
        className={`bounding-container ${st.articles__head}`}
        typeAnimation="down-to-up"
      >
        <div className={st.articles__heading}>
          <span className={"gradient_txt"}>our articles</span>
          <h1>Stay Up-to-Date with Our VR Insights</h1>
        </div>
        <BorderButton className={st.btn__all}>see all</BorderButton>
      </ObserverAnimation>

      <div className={st.articles__body}>
        <ObserverAnimation className={st.popular} typeAnimation="big-to-small">
          <div className={st.articles__title}>Popular Article</div>
          <div className={st.popular___body}>
            <ArticleSlider />
          </div>
        </ObserverAnimation>

        <div className={st.recent}>
          <ObserverAnimation typeAnimation="right-to-left">
            <div className={st.articles__title}>Recent Article</div>
            <div className={st.recent__body}>
              <ArticleList />
            </div>
          </ObserverAnimation>
        </div>
        <BorderButton className={st.btn__all_mobile}>see all</BorderButton>
      </div>
    </section>
  );
};

export default OurArticles;
