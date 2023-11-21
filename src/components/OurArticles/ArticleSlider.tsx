import React from "react";
import st from "./ArticleSlider.module.scss";
import ArticleSlide from "./ArticleSlide/ArticleSlide";
import img from "@/assets/articles/slide.png";
import { IArticle } from "@/types/IArticle";
import Slider from "../UI/Slider/Slider";

const articles: IArticle[] = [
  {
    id: 0,
    name: "Entertainment Goes Virtual: The Rise of VR Gaming",
    img: img,
    marcer: "VR Games",
  },
  {
    id: 1,
    name: "The Future of Education: How VR is Revolutionizing the Classroom",
    img: img,
    marcer: "VR Architecture",
  },
  {
    id: 2,
    name: "Entertainment Goes Virtual: The Rise of VR Gaming",
    img: img,
    marcer: "VR Education",
  },
  {
    id: 3,
    name: "Bringing Designs to Life: How VR is Changing Architecture",
    img: img,
    marcer: "VR Entertainment",
  },
];

const ArticleSlider = () => {
  return (
    <Slider
      st__slider__container={st.slider__container}
      st__pagination={st.pag}
      st__pag__item={st.pag__item}
      st__pag__item__active={st.pag__item_active}
      st__slider__wrapper={st.slider__wrapper}
    >
      {articles.map((article) => (
        <ArticleSlide article={article} key={article.id} />
      ))}
    </Slider>
  );
};

export default ArticleSlider;
