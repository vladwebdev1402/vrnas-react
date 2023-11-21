import { IArticle } from "@/types/IArticle";
import img1 from "@/assets/articles/1.png";
import img2 from "@/assets/articles/2.png";
import img3 from "@/assets/articles/3.png";
import img4 from "@/assets/articles/4.png";
import React from "react";
import Article from "./Article/Article";

const articles: IArticle[] = [
  {
    id: 0,
    name: "The Future of Education: How VR is Revolutionizing the Classroom",
    img: img1,
    marcer: "VR Education",
  },
  {
    id: 1,
    name: "Bringing Designs to Life: How VR is Changing Architecture",
    img: img2,
    marcer: "VR Architecture",
  },
  {
    id: 2,
    name: "Making Events Memorable: The Power of VR for Corporate and Special Occasions",
    img: img3,
    marcer: "VR Entertainment",
  },
  {
    id: 3,
    name: "Exploring New Worlds: The Benefits of VR Travel",
    img: img4,
    marcer: "VR Event",
  },
  {
    id: 4,
    name: "The Future of Education: How VR is Revolutionizing the Classroom",
    img: img1,
    marcer: "VR Education",
  },
  {
    id: 5,
    name: "Bringing Designs to Life: How VR is Changing Architecture",
    img: img2,
    marcer: "VR Architecture",
  },
];

const ArticleList = () => {
  return (
    <>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  );
};

export default ArticleList;
