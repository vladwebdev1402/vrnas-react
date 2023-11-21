import React, { FC } from "react";
import arrrow from "@/assets/articles/arrow.svg";
import st from "./ArticleSlide.module.scss";
import BorderButton from "@/components/UI/button/BorderButton/BorderButton";
import { IArticle } from "@/types/IArticle";

interface Props {
  article: IArticle;
}
const ArticleSlide: FC<Props> = ({ article }) => {
  return (
    <div className={st.article}>
      <div className={st.article__body}>
        <div className={st.article__info}>
          <div className={st.article__marcer}>{article.marcer}</div>
          <div className={st.article__name}>{article.name}</div>
        </div>
        <BorderButton className={st.article__btn}>
          <div>
            <img src={arrrow} alt="" />
          </div>
        </BorderButton>
      </div>
      <img src={article.img} alt="" className={st.article__bg} />
    </div>
  );
};

export default ArticleSlide;
