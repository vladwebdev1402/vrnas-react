import React, { FC } from "react";
import st from "./Article.module.scss";
import arrrow from "@/assets/articles/arrow.svg";
import BorderButton from "@/components/UI/button/BorderButton/BorderButton";
import { IArticle } from "@/types/IArticle";
interface Props {
  article: IArticle;
}
const Article: FC<Props> = ({ article }) => {
  return (
    <div className={st.article}>
      <div className={st.article__img}>
        <img src={article.img} alt="" />
      </div>
      <div className={st.article__body}>
        <div className={st.article__marcer}>{article.marcer}</div>
        <div className={st.article__name}>{article.name}</div>
      </div>
      <BorderButton className={st.article__btn}>
        <div>
          <img src={arrrow} alt="" />
        </div>
      </BorderButton>
    </div>
  );
};

export default Article;
